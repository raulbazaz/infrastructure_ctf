'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Team {
    name: string;
    points: number;
    solved: number;
}

const initialTeams: Team[] = [
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

export default function LeaderboardPage() {
    const [teams, setTeams] = useState<Team[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Initialize teams with random points
        const teamsWithPoints = initialTeams.map(team => ({
            ...team,
            points: Math.floor(Math.random() * 2000) + 500,
            solved: 0,
        })).map(team => ({
            ...team,
            solved: Math.floor(team.points / 100),
        }));

        setTeams(teamsWithPoints);
    }, []);

    useEffect(() => {
        // Shuffle points every 3 seconds
        const interval = setInterval(() => {
            setTeams(prevTeams => {
                const updatedTeams = prevTeams.map(team => {
                    const change = Math.floor(Math.random() * 200) - 50;
                    const newPoints = Math.max(0, team.points + change);
                    return {
                        ...team,
                        points: newPoints,
                        solved: Math.floor(newPoints / 100),
                    };
                });
                // Sort by points
                return updatedTeams.sort((a, b) => b.points - a.points);
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Sort teams by points
    const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

    const getRankClass = (index: number) => {
        if (index === 0) return 'text-yellow-500';
        if (index === 1) return 'text-gray-400';
        if (index === 2) return 'text-orange-600';
        return '';
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-white border-b-2 border-gray-200 px-10 py-5 flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Capture the Flag 2025</h1>
                    <p className="text-sm text-gray-600">Turing Community</p>
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => router.push('/problems')}
                        className="px-5 py-2 bg-green-600 text-white rounded font-semibold text-sm hover:bg-green-700"
                    >
                        Challenges
                    </button>
                    <button
                        onClick={() => router.push('/')}
                        className="px-5 py-2 bg-red-500 text-white rounded font-semibold text-sm hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-5 py-10">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-2">Leaderboard</h2>
                <p className="text-center text-gray-600 mb-8 text-sm">
                    Live rankings updating every 3 seconds
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="p-4 text-left font-semibold text-base rounded-tl text-center w-20">
                                    Rank
                                </th>
                                <th className="p-4 text-left font-semibold text-base">Team Name</th>
                                <th className="p-4 text-center font-semibold text-base w-32">Points</th>
                                <th className="p-4 text-center font-semibold text-base rounded-tr w-24">Solved</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedTeams.map((team, index) => (
                                <tr
                                    key={team.name}
                                    className="bg-white border-b border-gray-200 hover:bg-gray-100 transition-colors"
                                >
                                    <td className={`p-4 text-center font-bold text-lg ${getRankClass(index)}`}>
                                        {index + 1}
                                    </td>
                                    <td className="p-4 text-base">{team.name}</td>
                                    <td className="p-4 text-center font-semibold text-green-600">{team.points}</td>
                                    <td className="p-4 text-center font-semibold">{team.solved}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
