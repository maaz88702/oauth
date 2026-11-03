export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p className="text-slate-400">Built with simplicity in mind.</p>
      </div>
    </footer>
  );
}