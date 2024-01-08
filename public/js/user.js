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