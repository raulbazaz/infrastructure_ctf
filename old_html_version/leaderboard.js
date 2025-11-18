// Team data with random initial points
let teams = [
    { name: "CyberNinjas", points: 0, solved: 0 },
    { name: "H4ck3r5", points: 0, solved: 0 },
    { name: "Binary Bandits", points: 0, solved: 0 },
    { name: "Shell Shocked", points: 0, solved: 0 },
    { name: "Root Access", points: 0, solved: 0 },
    { name: "Packet Sniffers", points: 0, solved: 0 },
    { name: "Kernel Panic", points: 0, solved: 0 },
    { name: "SQL Injectors", points: 0, solved: 0 },
    { name: "Zero Day", points: 0, solved: 0 },
    { name: "Crypto Masters", points: 0, solved: 0 },
    { name: "Null Pointer", points: 0, solved: 0 },
    { name: "Stack Overflow", points: 0, solved: 0 }
];

// Initialize with random points
teams.forEach(team => {
    team.points = Math.floor(Math.random() * 2000) + 500;
    team.solved = Math.floor(team.points / 100);
});

// Function to update the leaderboard display
function updateLeaderboard() {
    // Sort teams by points
    teams.sort((a, b) => b.points - a.points);

    const tbody = document.getElementById('leaderboardBody');
    tbody.innerHTML = '';

    teams.forEach((team, index) => {
        const row = document.createElement('tr');
        row.className = `rank-${index + 1}`;

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team.name}</td>
            <td class="points">${team.points}</td>
            <td>${team.solved}</td>
        `;

        tbody.appendChild(row);
    });
}

// Function to randomly update team points
function shufflePoints() {
    teams.forEach(team => {
        // Randomly increase or decrease points
        const change = Math.floor(Math.random() * 200) - 50;
        team.points = Math.max(0, team.points + change);
        team.solved = Math.floor(team.points / 100);
    });

    updateLeaderboard();
}

// Initial display
updateLeaderboard();

// Shuffle every 3 seconds
setInterval(shufflePoints, 3000);

// Navigation buttons
document.getElementById('challengesBtn').addEventListener('click', function () {
    window.location.href = 'problems.html';
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
});
