import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">About</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">We build simple, thoughtful digital experiences.</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          This app is designed around clarity, speed, and ease of use. Our focus is on clean interfaces,
          intuitive flows, and a welcoming experience for every visitor.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-2xl font-bold text-indigo-600">1</p>
            <p className="mt-2 text-sm text-slate-600">Clear structure</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-2xl font-bold text-indigo-600">2</p>
            <p className="mt-2 text-sm text-slate-600">Responsive layouts</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <p className="text-2xl font-bold text-indigo-600">3</p>
            <p className="mt-2 text-sm text-slate-600">Fast user journeys</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700">
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
