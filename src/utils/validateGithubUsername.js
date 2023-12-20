import { octokit } from "./getOctokit";

export default async function validateGithubUsername(ghUsername) {
  try{
    await octokit.rest.users.getByUsername({
        username: ghUsername,
      });
      return true;
  }catch(error){
    console.clear();
    return false;
  }
}
