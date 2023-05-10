export async function getRepositories(repositoryName, accessToken) {
    const response = await fetch(
        `https://api.github.com/repos/${repositoryName}`,
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch repository data: ${response.status}`);
    }

    const data = await response.json();
    const score = data.stargazers_count + data.forks_count * 2;
    const isPopular = score >= 500;

    return {
        fullName: data.full_name,
        avatarUrl: data.owner.avatar_url,
        stargazersCount: data.stargazers_count,
        forksCount: data.forks_count,
        isPopular,
    };
}
