import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 sm:flex-row sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-indigo-700 transition-colors hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
        >
          My Website
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium"
        >
          {[
            ['Home', '/'],
            ['Users', '/users'],
            ['About', '/about'],
            ['Contact', '/contact'],
            ['Login', '/login'],
            ['signup', '/signup'],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
