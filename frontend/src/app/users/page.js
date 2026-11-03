const users = [
  { id: 1, name: 'Alex Morgan', email: 'alex@example.com', joined: 'June 12, 2025' },
  { id: 2, name: 'Jamie Rivera', email: 'jamie@example.com', joined: 'August 4, 2025' },
  { id: 3, name: 'Taylor Kim', email: 'taylor@example.com', joined: 'January 18, 2026' },
];

export default function UsersPage() {

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2 text-gray-900">Users List</h1>
      <p className="mb-6 text-sm text-gray-500">Example profiles for the frontend preview.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{user.email}</p>
            <p className="text-xs text-gray-400">Joined: {user.joined}</p>
          </div>
        ))}
      </div>
    </div>
  );
}