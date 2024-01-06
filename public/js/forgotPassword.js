const forgotPasswordFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-retrieve-password').value.trim();

    if (email) {
        const response = await fetch('/api/forgotpassword', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Password has been sent to your email.');
        } else {
            alert('Failed to send password.');
        }
    }
};

document
    .querySelector('.forgot-password-form')
    .addEventListener('submit', forgotPasswordFormHandler);