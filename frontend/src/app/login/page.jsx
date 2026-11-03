'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [message, setMessage] = useState('');

  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:8080/auth/google';
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12 text-slate-800">
      <div className="w-full max-w-md space-y-8 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">My Website</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">Welcome back</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to continue to your account</p>
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.49 12.27c0-.78-.07-1.53-.2-2.27H12v4.3h6.44a5.5 5.5 0 0 1-2.39 3.61v3h3.87c2.27-2.09 3.57-5.17 3.57-8.64Z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.08 7.95-2.92l-3.87-3c-1.08.72-2.46 1.15-4.08 1.15-3.14 0-5.8-2.12-6.75-4.97H1.25v3.09A12 12 0 0 0 12 24Z" />
            <path fill="#FBBC05" d="M5.25 14.26a7.2 7.2 0 0 1 0-4.52V6.65h-4a12 12 0 0 0 0 10.7l4-3.09Z" />
            <path fill="#EA4335" d="M12 4.77c1.77 0 3.35.61 4.6 1.82l3.45-3.45C17.95 1.17 15.24 0 12 0A12 12 0 0 0 1.25 6.65l4 3.09C6.2 6.89 8.86 4.77 12 4.77Z" />
          </svg>
          <span>Login with Google</span>
        </button>

        {message && (
          <p role="status" className="text-center text-sm text-slate-500">
            {message}
          </p>
        )}

        <p className="text-center text-sm text-slate-600">
          <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-700">Back to home</Link>
        </p>
      </div>
    </main>
  );
}
