import { octokit } from "./getOctokit";

export default async function getAllRepos(username){
        try {
          let page = 1;
          let repos = [];
      
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const response = await octokit.request(`GET https://api.github.com/users/${username}/repos?page=${page}`);
            const data = await response.data;
      
            if (data.length === 0) {
              // No more repositories, break the loop
              break;
            }
      
            // Add the current page's repositories to the overall list
            repos = [...repos, ...data];
      
            // Move to the next page
            page++;
          }
          return repos;      
        } catch (error) {
          console.error('Error fetching user repositories:', error);
        }
}