document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Clear previous messages
    messageDiv.className = 'message';
    messageDiv.textContent = '';

    // Simple validation
    if (userId.trim() === '' || password.trim() === '') {
        showMessage('Please fill in all fields', 'error');
        return;
    }

    // Accept any username and password and redirect to problems page
    console.log('Login attempt:', { userId, password });

    // Show success message and redirect
    showMessage('Login successful! Redirecting...', 'success');

    // Redirect to problems page after 1 second
    setTimeout(() => {
        window.location.href = 'problems.html';
    }, 1000)
});

function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;

    // Auto-hide message after 5 seconds
    setTimeout(() => {
        messageDiv.className = 'message';
    }, 5000);
}
