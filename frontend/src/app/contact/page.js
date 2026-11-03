import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Contact</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let&apos;s talk</h1>
        <p className="mt-6 text-base leading-7 text-slate-600">
          We&apos;re happy to answer questions, hear feedback, or talk through a new idea.
        </p>

        <div className="mt-8 space-y-3 rounded-xl bg-slate-100 p-5 text-sm text-slate-700">
          <p><strong>Email:</strong> hello@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
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
