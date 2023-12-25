import getAllRepos from "./getAllRepos";
import { octokit } from "./getOctokit";

// Main function to fetch and process repository languages
export default async function (username) {
  // Get the list of repositories for the given username
  const reposArray = await getAllRepos(username);
  // Object to store the aggregated languages across all repositories
  const langObj = {};

  // Iterate over each repository
  for (const repo of reposArray) {
    const repoName = repo.full_name;

    try {
      // GitHub API token for authentication
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      // Fetch the languages used in the repository
      const response = await octokit.request(
        `GET https://api.github.com/repos/${repoName}/languages`,
        {
          owner: username,
          repo: repoName,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const languages = response.data;

      // Process languages and update langObj
      if (Object.keys(languages).length !== 0) {
        Object.keys(languages).forEach((lang) => {
          // Check if langObj already has the language key
          if (Object.prototype.hasOwnProperty.call(langObj, lang)) {
            // If it exists, add the value
            langObj[lang] += languages[lang];
          } else {
            // If it doesn't exist, create the key with the value
            langObj[lang] = languages[lang];
          }
        });
      }
    } catch (error) {
      console.error("Error fetching repository languages:", error);
    }
  }

  // Get the top 5 languages and display the result
  const topLanguagesArray = sortAndTrim(langObj);
  return topLanguagesArray;
}

// Function to sort the languages object and return a languages array and then trim the languages array
function sortAndTrim(obj) {
  const langArray = Object.entries(obj).map(([key, value]) => [
    key.trim(),
    value,
  ]);
  const sortedLangArray = langArray.sort((a, b) => b[1] - a[1]);
  const trimmedLangArray = sortedLangArray.slice(
    0,
    Math.min(sortedLangArray.length, 5)
  );
  localStorage.setItem("languagesFetched", "true");
  return trimmedLangArray;
}


