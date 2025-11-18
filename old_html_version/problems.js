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
        const problemName = this.querySelector('.problem-name').textContent;
        const points = this.querySelector('.points').textContent;
        alert(`Challenge: ${problemName}\nPoints: ${points}\n\nChallenge details will be implemented here!`);
    });
});
