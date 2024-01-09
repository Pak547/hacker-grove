async function updateProjectFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('#projectName').value.trim();
    const description = document.querySelector('#description').value.trim();
    const hours = document.querySelector('#projectHours').value.trim();
    const deploy_link = document.querySelector('#projectLink').value.trim();
    const github_link = document.querySelector('#githubRepoLink').value.trim();
    const languages = document.querySelector('#projectLanguages').value.trim();


    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/project/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            description,
            hours,
            deploy_link,
            github_link,
            languages,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/user`);
    } else {
        alert('Failed to update project');
    }
}

document.querySelector('.updateProject-form').addEventListener('submit', updateProjectFormHandler);