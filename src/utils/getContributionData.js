import getActiveDays from "./getActiveDays";
import { octokit } from "./getOctokit";


export default async function getContributionData() {
  const YEAR = 2023;
  const username = "singodiyashubham87";

      const query = `
      query {
        user(login: "${username}") {

          openIssues: issues(filterBy: {since: "${YEAR}-01-01T00:00:00.000Z", states: OPEN}) {
            totalCount
          }
          closedIssues: issues(filterBy: {since: "${YEAR}-01-01T00:00:00.000Z", states: CLOSED}) {
            totalCount
          }
          avatarUrl
          login
          contributionsCollection(from: "${YEAR}-01-01T00:00:00.000Z", to: "${YEAR + 1}-01-01T00:00:00.000Z") {
            restrictedContributionsCount
            totalIssueContributions
            totalCommitContributions
            totalRepositoryContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            popularPullRequestContribution {
              pullRequest {
                title
                repository {
                  name
                }
                createdAt
                updatedAt
                totalCommentsCount
                state
                url
              }
            }
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
            commitContributionsByRepository {
              contributions {
                totalCount
              }
              repository {
                name
                url
                languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
                  edges {
                    size
                    node {
                      color
                      name
                      id
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

  const res = await octokit.graphql(query);
  const weeksArray = await res.user.contributionsCollection.contributionCalendar.weeks;
  await getActiveDays(weeksArray);
  storeData(res.user);
}


function storeData(userData){
  const contributionsCollection = userData.contributionsCollection;
  const contributionCalendar = userData.contributionsCollection.contributionCalendar;

  localStorage.setItem("totalContributions", contributionCalendar.totalContributions);
  localStorage.setItem("openIssues", userData.openIssues.totalCount);
  localStorage.setItem("closedIssues", userData.closedIssues.totalCount);
  localStorage.setItem("totalIssueContributions", contributionsCollection.totalIssueContributions);  
  localStorage.setItem("totalCommitContributions", contributionsCollection.totalCommitContributions);  
  localStorage.setItem("totalPullRequestContributions", contributionsCollection.totalPullRequestContributions); 
  localStorage.setItem("totalPullRequestReviewContributions", contributionsCollection.totalPullRequestReviewContributions);  
  localStorage.setItem("totalRepositoryContributions", contributionsCollection.totalRepositoryContributions);  
  localStorage.setItem("popularPrName", contributionsCollection.popularPullRequestContribution.pullRequest.title);  
  localStorage.setItem("popularPrState", contributionsCollection.popularPullRequestContribution.pullRequest.state);  
  localStorage.setItem("popularPrCreationDate", contributionsCollection.popularPullRequestContribution.pullRequest.createdAt.slice(0,10));  
  localStorage.setItem("popularPrURL", contributionsCollection.popularPullRequestContribution.pullRequest.url);  
  localStorage.setItem("topRepoName1", contributionsCollection.commitContributionsByRepository[0].repository.name)
  localStorage.setItem("topRepoName2", contributionsCollection.commitContributionsByRepository[1].repository.name)
  localStorage.setItem("topRepoName3", contributionsCollection.commitContributionsByRepository[2].repository.name)
  localStorage.setItem("topRepoName4", contributionsCollection.commitContributionsByRepository[3].repository.name)
  localStorage.setItem("topRepoURL1", contributionsCollection.commitContributionsByRepository[0].repository.url)
  localStorage.setItem("topRepoURL2", contributionsCollection.commitContributionsByRepository[1].repository.url)
  localStorage.setItem("topRepoURL3", contributionsCollection.commitContributionsByRepository[2].repository.url)
  localStorage.setItem("topRepoURL4", contributionsCollection.commitContributionsByRepository[3].repository.url)
}