import { octokit } from "./getOctokit";

export default async function validateGithubUsername(ghUsername) {
  try {
    const res = await octokit.rest.users.getByUsername({
      username: ghUsername,
    });
    //Storing data to local storage before returning
    storeDataToLocalStorage(res);
    return true;
  } catch (error) {
    console.clear();
    return false;
  }
}

//Store user data to local storage
function storeDataToLocalStorage(res) {
  localStorage.setItem("username", res.data.login);
  localStorage.setItem("followers", res.data.followers);
  localStorage.setItem("location", res.data.location);
  localStorage.setItem("avatar", res.data.avatar_url);
  localStorage.setItem("githubUrl", res.data.html_url);
}
