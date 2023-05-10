// Import the function to be tested
import { getRepositories } from "./api";

// Define a mock response from the GitHub API
const mockResponse = {
    full_name: "octocat/hello-world",
    stargazers_count: 100,
    forks_count: 50,
    owner: {
        avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
    },
};

// Mock the fetch function to return the mock response
global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve(mockResponse) })
);

// Define the test
test("getRepositories returns a response from the GitHub API", async () => {
    // Call the function to be tested
    const response = await getRepositories(
        "octocat/hello-world",
        "fakeAccessToken"
    );

    // Check that the fetch function was called with the correct URL and headers
    expect(fetch).toHaveBeenCalledWith(
        "https://api.github.com/repos/octocat/hello-world",
        {
            headers: { Authorization: "Bearer fakeAccessToken" },
        }
    );

    // Check that the function returned the expected data
    expect(response).toEqual(mockResponse);
});
