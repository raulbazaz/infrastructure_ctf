'use client';

import { useRouter } from 'next/navigation';

interface Problem {
    name: string;
    difficulty: string;
}

const problems: Problem[] = [
    { name: 'Basic Cipher Baby', difficulty: 'easy' },
    { name: "Here's a simple C program. What's the password?", difficulty: 'easy' },
    { name: 'never gonna give you up', difficulty: 'easy' },
    { name: 'oops the page is broken', difficulty: 'easy' },
    { name: 'The flag is inside this Windows Batch file.', difficulty: 'easy' },
    { name: 'The code gym bro who overtrained', difficulty: 'easy' },
    { name: 'this challenge is literally a google search', difficulty: 'easy' },
    { name: 'What is the bit depth of this image?', difficulty: 'easy' },
    { name: "What is the name of the executable with the MD5 hash of cdc47d670159eef60916ca03a9d4a007 that performs a malicious task? (Don't worry none of these will actually harm your computer).", difficulty: 'easy' },
    { name: 'wow, such image, very picture, much png', difficulty: 'easy' },
];

export default function ProblemsPage() {
    const router = useRouter();

    const handleProblemClick = (problemName: string) => {
        alert(`Challenge: ${problemName}\n\nChallenge details will be implemented here!`);
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Capture the Flag 2025</h1>
                        <p className="text-sm text-gray-500 mt-0.5">Turing Community</p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => router.push('/leaderboard')}
                            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            Leaderboard
                        </button>
                        <button
                            onClick={() => router.push('/')}
                            className="px-5 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-10">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Challenges</h2>

                <div className="space-y-3">
                    {problems.map((problem, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleProblemClick(problem.name)}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all"
                        >
                            <span className="text-gray-900 font-medium">{problem.name}</span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium uppercase">
                                {problem.difficulty}
                            </span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
