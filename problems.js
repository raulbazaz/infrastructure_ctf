// Logout functionality
document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Leaderboard navigation
document.getElementById('leaderboardBtn').addEventListener('click', function () {
    window.location.href = 'leaderboard.html';
});

// Add click handlers to problem items
document.querySelectorAll('.problem-item').forEach(item => {
    item.addEventListener('click', function () {
        const problemId = this.dataset.id;
        // Navigate to question page with problem ID
        window.location.href = `question.html?id=${problemId}`;
    });
});
