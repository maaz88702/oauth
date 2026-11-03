import { cookies } from 'next/headers';

export default async function UsersPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';
  let users = [];
  let errorMessage = '';

  if (!token) {
    errorMessage = 'Please sign in to view users.';
  } else {
    const response = await fetch(`${backendUrl}/api/users`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) {
      errorMessage = response.status === 401
        ? 'Your session has expired. Please sign in again.'
        : 'Unable to load users right now.';
    } else {
      const usersData = await response.json();

      if (!Array.isArray(usersData.users)) {
        throw new Error('The users API returned an invalid response.');
      }

      users = usersData.users;
    }
  }

  return (
    <main className="min-h-full px-4 py-10 text-slate-800 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Directory
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Users
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
            Browse the profiles registered on your site.
          </p>
        </div>

        {errorMessage ? (
          <div
            role="alert"
            className="rounded-xl border border-amber-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <h2 className="font-semibold text-slate-900">Users aren&apos;t available</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">{errorMessage}</p>
          </div>
        ) : users.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <h2 className="font-semibold text-slate-900">No users yet</h2>
            <p className="mt-1 text-sm text-slate-600">
              Registered profiles will appear here.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {users.map((user) => (
              <article
                key={user._id || user.id || user.email}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-lg font-semibold text-indigo-700">
                  {user.name?.charAt(0)?.toUpperCase() || '?'}
                </div>
                <h2 className="truncate text-lg font-semibold text-slate-900">
                  {user.name}
                </h2>
                <p className="mt-1 truncate text-sm text-slate-600">{user.email}</p>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  Joined{' '}
                  {user.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : 'Unknown'}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
