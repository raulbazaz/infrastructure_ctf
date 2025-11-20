// Problem data
const problems = {
    1: {
        title: "Basic Cipher Baby",
        difficulty: "Easy",
        points: 20,
        description: "PGS{\"pncghergurebg\"}"
    },
    2: {
        title: "Never gonna give you up",
        difficulty: "Easy",
        points: 20,
        image: "images/nevergonnagiveyouup.png"
    },
    3: {
        title: "oops the page is broken",
        difficulty: "Easy",
        points: 20,
        link: "oopsthepageisbroken.html"
    }
};

// Get problem ID from URL
const urlParams = new URLSearchParams(window.location.search);
const problemId = urlParams.get('id');

// Load problem data
if (problemId && problems[problemId]) {
    const problem = problems[problemId];

    document.getElementById('challengeTitle').textContent = problem.title;
    document.getElementById('challengeDifficulty').textContent = problem.difficulty;
    document.getElementById('challengeDifficulty').className = 'difficulty ' + problem.difficulty.toLowerCase();
    document.getElementById('challengePoints').textContent = problem.points + ' pts';

    // Handle description text, image, or link
    const descriptionContainer = document.getElementById('descriptionText');
    if (problem.description) {
        descriptionContainer.textContent = problem.description;
    } else if (problem.image) {
        descriptionContainer.innerHTML = '';
        const img = document.createElement('img');
        img.src = problem.image;
        img.alt = 'Challenge image';
        img.className = 'challenge-image';
        descriptionContainer.appendChild(img);
    } else if (problem.link) {
        descriptionContainer.innerHTML = '';
        const button = document.createElement('button');
        button.textContent = 'View Website';
        button.className = 'view-website-btn';
        button.onclick = function () {
            window.open(problem.link, '_blank');
        };
        descriptionContainer.appendChild(button);
    }
} else {
    // Redirect back if invalid problem ID
    window.location.href = 'problems.html';
}

// Navigation buttons
document.getElementById('backBtn').addEventListener('click', function () {
    window.location.href = 'problems.html';
});

document.getElementById('leaderboardBtn').addEventListener('click', function () {
    window.location.href = 'leaderboard.html';
});

document.getElementById('logoutBtn').addEventListener('click', function () {
    window.location.href = 'index.html';
});

// Submit answer (frontend only - no validation yet)
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');

submitBtn.addEventListener('click', function () {
    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
        feedback.textContent = 'Please enter an answer!';
        feedback.className = 'feedback error show';
        return;
    }

    // TODO: Implement backend validation
    feedback.textContent = 'Submitting...';
    feedback.className = 'feedback show';
});

// Allow Enter key to submit
answerInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        submitBtn.click();
    }
});
