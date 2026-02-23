"use client";

import React, { useMemo, useState } from "react";

type UserRow = {
  id: string;
  name: string;
  email: string;
  role: "USER" | "ADMIN";
  status: "ACTIVE" | "SUSPENDED";
};

/**
 * Build-safe placeholder Users manager.
 * Replace with real DB-backed admin tooling when ready.
 */
export default function UsersManager() {
  const [q, setQ] = useState("");
  const [rows, setRows] = useState<UserRow[]>([
    { id: "u1", name: "Dinesh", email: "dinesh@example.com", role: "ADMIN", status: "ACTIVE" },
    { id: "u2", name: "Tim", email: "tim@example.com", role: "USER", status: "ACTIVE" },
  ]);

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return rows;
    return rows.filter(
      (r) => r.name.toLowerCase().includes(s) || r.email.toLowerCase().includes(s) || r.role.toLowerCase().includes(s)
    );
  }, [q, rows]);

  const toggleRole = (id: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, role: r.role === "ADMIN" ? "USER" : "ADMIN" } : r))
    );
  };

  const toggleStatus = (id: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: r.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE" } : r))
    );
  };

  return (
    <div className="rounded-3xl border border-stone-800 bg-black/40 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-xl font-semibold">Users</div>
          <div className="text-sm text-stone-400">Quick manager (placeholder). Hook this to Prisma later.</div>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name/email/role…"
          className="w-full md:w-80 rounded-xl border border-stone-700 bg-black/40 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="text-left text-stone-400">
            <tr>
              <th className="py-2 pr-4">Name</th>
              <th className="py-2 pr-4">Email</th>
              <th className="py-2 pr-4">Role</th>
              <th className="py-2 pr-4">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-stone-200">
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-stone-800">
                <td className="py-3 pr-4 font-medium">{r.name}</td>
                <td className="py-3 pr-4 text-stone-300">{r.email}</td>
                <td className="py-3 pr-4">
                  <span className="rounded-full border border-stone-700 bg-stone-950 px-2 py-1 text-xs">{r.role}</span>
                </td>
                <td className="py-3 pr-4">
                  <span
                    className={`rounded-full px-2 py-1 text-xs border ${
                      r.status === "ACTIVE"
                        ? "border-emerald-700/60 bg-emerald-900/20 text-emerald-200"
                        : "border-rose-700/60 bg-rose-900/20 text-rose-200"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => toggleRole(r.id)}
                      className="rounded-xl border border-stone-700 bg-black/40 px-3 py-1.5 text-xs hover:bg-stone-900"
                      type="button"
                    >
                      Toggle Role
                    </button>
                    <button
                      onClick={() => toggleStatus(r.id)}
                      className="rounded-xl border border-stone-700 bg-black/40 px-3 py-1.5 text-xs hover:bg-stone-900"
                      type="button"
                    >
                      Toggle Status
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
