'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col justify-between items-center p-6">
      {/* Header */}
      <header className="w-full max-w-2xl py-6 flex justify-between items-center border-b border-slate-200">
        <div className="text-xl font-bold tracking-tight text-indigo-600">
          My Website
        </div>
        <nav className="space-x-4 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link href="/login" className="hover:text-indigo-600 transition-colors">
            Login
          </Link>
          <Link href="/users" className="hover:text-indigo-600 transition-colors">
            Users
          </Link>
          <Link href="/about" className="hover:text-indigo-600 transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-indigo-600 transition-colors">
            Contact
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-2xl my-auto py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100 text-center sm:text-left space-y-6">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
            Welcome
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hello, world! 👋
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Welcome to this clean and simple web page. It features modern styling, high readability, and a lightweight layout designed to adapt effortlessly to screen sizes of all kinds.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowMessage(!showMessage)}
              className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 active:scale-95 transition-all duration-150 shadow-sm shadow-indigo-200"
            >
              Get Started
            </button>
            <Link
              href="/learn-more"
              className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 active:scale-95 transition-all duration-150 text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Interactive dynamic message */}
          {showMessage && (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-sm border border-emerald-100">
              🎉 Thanks for stopping by! Hope you have a fantastic day ahead.
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-2xl py-6 border-t border-slate-200 text-center text-xs text-slate-400">
        <p>&copy; {currentYear} My Website. Built with simplicity in mind.</p>
      </footer>
    </div>
  );
}