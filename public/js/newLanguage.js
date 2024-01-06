const newLanguageFormHandler = async (event) => {
    event.preventDefault();

    const language = document.querySelector('#language').value.trim();
    const hours = document.querySelector('#languageHours').value.trim();

    if (language && hours) {
        const response = await fetch(`/api/language`, {
            method: 'POST',
            body: JSON.stringify({ language, hours }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to add language');
        }
    }
};

document
  .querySelector('.newLanguage-form')
  .addEventListener('submit', newLanguageFormHandler);