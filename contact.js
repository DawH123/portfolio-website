document.getElementById('contactButton').addEventListener('click', async () => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const dots = document.getElementById('loadingDots');
    const sendBtn = document.getElementById('contactButton');

    if (!name || !email || !message) {
        alert('Please fill out all fields before sending.');
        return;
    }

    // Show dots, disable button
    dots.style.display = 'flex';
    sendBtn.disabled = true;

    try {
        const res = await fetch('/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        const data = await res.json();

        if (data.success) {
            dots.style.display = 'none';
            sendBtn.disabled = false;
            $('#emailModal').modal('hide');
            alert('Message sent successfully!');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            dots.style.display = 'none';
            sendBtn.disabled = false;
            alert('Failed to send message. Please try again.');
        }

    } catch (err) {
        dots.style.display = 'none';
        sendBtn.disabled = false;
        console.error(err);
        alert('Something went wrong. Please try again later.');
    }
});