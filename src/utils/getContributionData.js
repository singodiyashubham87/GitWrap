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
            repositoryContributions{
              totalCount
            }
            popularPullRequestContribution {
              pullRequest {
                id
                title
                repository {
                  name
                  owner {
                    login
                  }
                }
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
                owner {
                  login
                }
                languages(first: 5, orderBy: {field: SIZE, direction: DESC}) {
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
  const activeDays = await getActiveDays(weeksArray);
  console.log(activeDays);
  console.log(res.user);
}
