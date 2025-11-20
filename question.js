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
    },
    4: {
        title: "the flag is inside this windows batch file",
        difficulty: "Easy",
        points: 20,
        downloadFile: "files/challenge.bat"
    },
    5: {
        title: "Here's a simple C program. What's the password?",
        difficulty: "Easy",
        points: 20,
        downloadFile: "files/challenge.c"
    },
    6: {
        title: "The code gym bro who overtrained",
        difficulty: "Easy",
        points: 20,
        link: "thecodegymbrowhoovertrained.html"
    },
    7: {
        title: "This challenge is literally a google search",
        difficulty: "Easy",
        points: 20,
        link: "thischallengeisliterallyagooglesearch.html"
    },
    8: {
        title: "What is the bit depth of this image?",
        difficulty: "Easy",
        points: 20,
        image: "images/q8.png"
    },
    9: {
        title: "Find the malicious executable by MD5 hash",
        difficulty: "Easy",
        points: 20,
        downloadFile: "files/q9.zip",
        description: "Find the name of the executable with MD5 hash: cdc47d670159eef60916ca03a9d4a007 (Don't worry, none of these will harm your computer)"
    },
    10: {
        title: "wow, such image, very picture, much png",
        difficulty: "Easy",
        points: 20,
        downloadFile: "files/q10.png"
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

    // Handle description text, image, link, or download
    const descriptionContainer = document.getElementById('descriptionText');
    descriptionContainer.innerHTML = '';

    if (problem.description) {
        const descText = document.createElement('p');
        descText.textContent = problem.description;
        descText.style.marginBottom = '20px';
        descriptionContainer.appendChild(descText);
    }

    if (problem.image) {
        const img = document.createElement('img');
        img.src = problem.image;
        img.alt = 'Challenge image';
        img.className = 'challenge-image';
        descriptionContainer.appendChild(img);
    } else if (problem.link) {
        const button = document.createElement('button');
        button.textContent = 'View Website';
        button.className = 'view-website-btn';
        button.onclick = function () {
            window.open(problem.link, '_blank');
        };
        descriptionContainer.appendChild(button);
    } else if (problem.downloadFile) {
        const button = document.createElement('button');
        button.textContent = 'Download File';
        button.className = 'download-file-btn';
        button.onclick = function () {
            // TODO: Implement file download
            alert('File download will be implemented');
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
