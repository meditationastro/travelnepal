'use client';
import { useState } from 'react';

export function UserRoleUpdater({ userId, currentRole }: { userId: string; currentRole: string }) {
  const [role, setRole] = useState(currentRole);
  const [loading, setLoading] = useState(false);

  const update = async (newRole: string) => {
    setLoading(true);
    const res = await fetch(`/api/admin/users/${userId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role: newRole }),
    });
    if (res.ok) setRole(newRole);
    setLoading(false);
  };

  return (
    <select value={role} onChange={e => update(e.target.value)} disabled={loading}
      className="text-xs border border-stone-200 rounded-lg px-2 py-1.5 bg-white focus:outline-none focus:border-yellow-400 cursor-pointer">
      <option value="USER">USER</option>
      <option value="ADMIN">ADMIN</option>
    </select>
  );
}
