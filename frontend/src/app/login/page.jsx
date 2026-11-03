'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    try {
      // Connects to your backend running on port 8080
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Login failed. Please check your credentials.');
      }

      setMessage('Login successful! Redirecting...');
      
      // Redirect user to dashboard or home after successful login
      router.push('/dashboard'); 
    } catch (err) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

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

        {/* Manual Login Form */}
        <form onSubmit={handleManualLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div className="relative flex items-center justify-center text-xs uppercase my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <span className="relative bg-white px-2 text-slate-500">Or continue with</span>
        </div>

        {/* Google OAuth Login Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
          <div className={`p-3 rounded-md text-center text-sm border ${
            message.includes('successful') 
              ? 'bg-green-50 border-green-200 text-green-700' 
              : 'bg-red-50 border-red-200 text-red-700'
          }`}>
            {message}
          </div>
        )}

        <div className="flex justify-between items-center text-sm text-slate-600 mt-4">
          <Link href="/" className="font-medium text-slate-500 hover:text-slate-700">Back to home</Link>
          <p>
            Don't have an account?{' '}
            <Link href="/signup" className="font-medium text-indigo-600 hover:text-indigo-700">Sign up</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
