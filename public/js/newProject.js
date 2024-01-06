const newProjectFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#projectName').value.trim();
    const description = document.querySelector('#description').value.trim();
    const hours = document.querySelector('#projectHours').value.trim();
    const languages = document.querySelector('#projectLanguages').value.trim();
    const deploy_link = document.querySelector('#projectLink').value.trim();
    const github_link = document.querySelector('#githubRepoLink').value.trim();

    if (title) {
        const response = await fetch(`/api/project`, {
            method: 'POST',
            body: JSON.stringify({ title, description, hours, languages, deploy_link, github_link }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to create project');
        }
    }
};

document
  .querySelector('.addProject-form')
  .addEventListener('submit', newProjectFormHandler);
