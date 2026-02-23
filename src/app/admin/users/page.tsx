import { prisma } from '@/lib/prisma';
import { format } from 'date-fns';
import { UserRoleUpdater } from '@/components/admin/UserRoleUpdater';

async function getUsers() {
  try {
    return await prisma.user.findMany({
      include: { _count: { select: { bookings: true } } },
      orderBy: { createdAt: 'desc' },
    });
  } catch { return []; }
}

export default async function AdminUsersPage() {
  const users = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-stone-900">Users</h1>
        <p className="text-stone-400 text-sm mt-1">{users.length} registered users</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-stone-100 bg-stone-50">
              <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">User</th>
              <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Country</th>
              <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Bookings</th>
              <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Role</th>
              <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-50">
            {users.map(user => (
              <tr key={user.id} className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
                      {user.name?.[0] || user.email[0]}
                    </div>
                    <div>
                      <div className="font-medium text-stone-900 text-sm">{user.name || '—'}</div>
                      <div className="text-stone-400 text-xs">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-stone-500 text-sm">{user.country || '—'}</td>
                <td className="px-6 py-4">
                  <span className="text-stone-700 font-medium text-sm">{user._count.bookings}</span>
                  <span className="text-stone-400 text-xs ml-1">booking{user._count.bookings !== 1 ? 's' : ''}</span>
                </td>
                <td className="px-6 py-4">
                  <UserRoleUpdater userId={user.id} currentRole={user.role} />
                </td>
                <td className="px-6 py-4 text-stone-400 text-xs">
                  {format(new Date(user.createdAt), 'MMM d, yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
