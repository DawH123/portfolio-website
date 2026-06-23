//email functionality

document.querySelector('.btn-color-1').addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields before sending.');
        return;
    }

    try {
        const res = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (data.success) {
            $('#emailModal').modal('hide');
            alert('Message sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Failed to send message. Please try again.');
        }

    } catch (err) {
        console.error(err);
        alert('Something went wrong. Please try again later.');
    }
});