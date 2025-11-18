'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (userId.trim() === '' || password.trim() === '') {
      setMessage({ text: 'Please fill in all fields', type: 'error' });
      return;
    }

    console.log('Login attempt:', { userId, password });
    setMessage({ text: 'Login successful! Redirecting...', type: 'success' });

    setTimeout(() => {
      router.push('/problems');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-5">
      <div className="w-full max-w-md">
        <div className="bg-white p-10 rounded-lg shadow-lg border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
            Capture the Flag 2025
          </h1>
          <h2 className="text-base text-gray-600 text-center mb-8">
            Turing Community
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="userId" className="block mb-2 text-gray-800 font-medium text-sm">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-gray-800 font-medium text-sm">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
                className="w-full px-3 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-green-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded font-semibold text-base hover:bg-green-700 active:scale-[0.98] transition-all"
            >
              Login
            </button>
          </form>

          {message && (
            <div
              className={`mt-5 p-3 rounded text-center text-sm ${message.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
                }`}
            >
              {message.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
