<h1 align="center">GitWrap - GitHub Contributions Analyzer</h1>
<div align="center"><img src="./src/assets/images/logo.png" width="350px" height="200px"/></div>
<div align="center">GitWrap is a web application that analyzes your GitHub contributions, showcasing a personalized summary of your coding journey throughout the year. Reflect, celebrate, and share your open-source achievements!</div>


## Tech Stack

- **React:** Frontend framework for building user interfaces.
- **GraphQL:** Query language for APIs, used to fetch GitHub data.
- **GitHub API:** Interface for accessing various GitHub features.
- **Octokit:** GitHub REST API client for programmatic access to GitHub resources.
- **React Icons:** Library providing a set of popular icons for React applications.

## Getting Started
Follow these steps to get started with GitWrap:

### Prerequisite

- Node.js (https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/singodiyashubham87/GitWrap.git
cd GitWrap
```
   
2. Install dependencies:
```bash
npm install
```
3. Edit the .env file & add your Github Personal Access Token:
```bash
VITE_GITHUB_TOKEN = "GITHUB_PERSONAL_ACCESS_TOKEN"
```
4. Start the app:
```bash
npm run dev
  ```

## Features

- **Contribution Summary:** Get an overview of your GitHub contributions for a specified time range.
- **Total Active Days:** Track the total number of days you actively contributed to repositories.
- **Max Streak:** Identify your longest streak of consecutive days with contributions.
- **Most Productive Date:** Find out the date when you made the maximum number of contributions.
- **Languages Used:** Explore the languages you've used across all your repositories.
  
## Credits
Special thanks to [GitHub](https://github.com/) for providing the [GitHub GraphQL API](https://docs.github.com/en/graphql) that makes this project possible.

## Author
* <a href="https://shubham-s-socials.vercel.app/"><i>Shubham Singodiya</i></a>

## Contributors

<div>
   <a href="https://github.com/singodiyashubham87/GitWrap/graphs/contributors">
   <img src="https://contrib.rocks/image?repo=singodiyashubham87/GitWrap"/>
   </a>
</div>

## License
This project is licensed under the MIT License.

## Support
Support the project by starring the repository.

## Using Daytona to Develop GitWrap
To make it easier for others to contribute to this project, we've integrated Daytona for a fast and consistent development environment. Follow the steps below to spin up a Daytona workspace for GitWrap:

### Prerequisites
**Daytona** must be installed on your system (follow the instructions here).

## Steps to Get Started with Daytona

1. Clone the repository (if not done already):
```bash 
git clone https://github.com/singodiyashubham87/GitWrap.git
cd GitWrap
```

2. Create a Daytona workspace for the project: To quickly spin up a development environment,
use Daytona:
```bash
daytona create https://github.com/singodiyashubham87/GitWrap
```

3. Access the workspace: Daytona will create and start a workspace for you. Once it's running, you can access it in your browser or through VS Code using the Remote SSH feature.

4. Start working: Once you're inside the Daytona workspace, you can start contributing to the project immediately by editing code, testing, and running the app within a pre-configured environment.
