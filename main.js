import APY_KEY from "./apikey";

const form = document.querySelector("form");
const repositoryInfo = document.getElementById("repository-info");
const accessToken = APY_KEY;


form.addEventListener("submit", (event) => {
    
    // Prevent the default form submission behavior
    event.preventDefault();

    const repositoryName = document.getElementById("repository-name").value;

    // Fetch repository data from the GitHub API
    fetch(`https://api.github.com/repos/${repositoryName}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
        .then((response) => response.json())
        .then((data) => { 
            
            // Construct the repository info HTML
            repositoryInfo.innerHTML = `

            <div class="flex flex-col items-center">

                    <h2 class="text-4xl font-bold mb-2 text-center" id="repository-title">Repository</h2>

                    <h3 class="text-gray-500 text-2xl font-bold mb-2 text-center" id="repository-title">${data.full_name}</h3>
    
                    <img
                        src="${data.owner.avatar_url}"
                        alt="Author's profile picture"
                        id="author-avatar"
                        class="mt-5 mb-5 w-[150px] rounded-full shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]"
                    />
                </div>

                <div class="flex flex-col">

                    <p class="text-xl text-center font-bold" id="repository-stats"><i class="fa-solid fa-star"></i> Stars: ${data.stargazers_count}</p> <br>
    
                    <p class="text-xl font-bold mb-5" id="repository-popularity"><i class="fa-solid fa-code-fork"></i> Forks: ${data.forks_count}</p>
                    
                </div>`

            // Construct the repository info HTML
            const score = data.stargazers_count + data.forks_count * 2;
            const isPopular = score >= 500;

            // Create a paragraph element to display the popularity status
            const popularity = document.createElement("p");
            popularity.textContent = isPopular ? "This is a popular repository!" : "This repository is NOT Popular.";
            popularity.style.fontSize = "1.5rem"

            // Add the popularity paragraph to the repository info element
            repositoryInfo.appendChild(popularity);

        })

        // Handle errors
        .catch((error) => {
            console.error(error);
            repositoryInfo.innerHTML = "Failed to retrieve repository information";
        });
});


