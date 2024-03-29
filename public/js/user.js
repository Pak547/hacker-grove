//delete language btn
const delLanguageButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/language/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to delete project');
        }
    }
};

//delete project btn
const delProjectButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/project/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
  .querySelector('.language-list')
  .addEventListener('click', delLanguageButtonHandler);

  document
  .querySelector('.project-list')
  .addEventListener('click', delProjectButtonHandler);

