Sure, here's a template you could use for the README file for your project:

# GitHub Popular Repositories

This is a single page application that consumes GitHub's API and displays information about a GitHub repository provided by the user. The information displayed includes the repository's name, author, author's profile picture, number of stars and forks, and whether the repository is popular or not (a repository is considered popular if its score is greater than or equal to 500, where score = num_stars * 1 + num_forks * 2).

## Assumptions

- The user is expected to provide a valid GitHub repository name in the format "owner/repo". For example, "facebook/react".
- The user needs to have a valid access token to authenticate against GitHub's REST API.
- The API endpoint used to fetch repository information is `https://api.github.com/repos/:owner/:repo`.

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/github-popular-repositories.git`
2. Navigate to the project directory: `cd github-popular-repositories`
3. Install the dependencies: `npm install`
4. Create a `apikey.js` file at the root of the project directory and add your GitHub access token. The `.apikey.js` file should look like this:
   ```
   API_KEY= 'your-access-token-goes-here';
   export default APY_KEY;
   ```
   **Note:** Replace `your-access-token-goes-here` with your actual access token.
5. Start the development server: `npm run dev`
6. Open your browser and go to the localhost you have been assigned.

## Improvements

If I had more time, here are some improvements I would make:

- Implement a better design for the application, including animations and more advanced styling.
- Add the ability to sort repositories by popularity, number of stars, and number of forks.
- Add support for multiple languages and locales to make the application accessible to a wider audience.
- Add a loading spinner or progress bar to indicate to users when API requests are in progress.
- Add support for displaying pull request and issue data for repositories.
- Add a unit tests that works correctly. Being more specialized in frontend and ux/ui design, I have never done a test with Jest before. I know a little bit about it, but I don't fully understand it.

## Evaluation Criteria

The following criteria will be used to evaluate the project:

1. Alignment with the requirements
2. Usage of best practices when dealing with edge cases that are not covered here
3. Code quality and readability
4. Quality of the design, user interface, and responsiveness
5. Commit history (thought process, commit messages)
6. Seniority of the developer

## Author

- [Ezequiel Gonzalez](https://github.com/Pilag6)
