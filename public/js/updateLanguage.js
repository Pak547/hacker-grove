async function updateLanguageFormHandler(event) {
    event.preventDefault();
    const language = document.querySelector('#updateLanguage').value.trim();
    const hours = document.querySelector('#updateLanguageHours').value.trim();
    
    // window.location gives us access to the URL. We then use the .split() method to access the number at the end of the URL and set that equal to id.
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/language/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            language,
            hours,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/user`);
    } else {
        alert('Failed to update language');
    }
}

document.querySelector('.updateLanguage-form').addEventListener('submit', updateLanguageFormHandler);