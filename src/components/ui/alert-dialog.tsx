"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const AlertDialogCtx = createContext<Ctx | null>(null);

export function AlertDialog({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const value = useMemo(() => ({ open, setOpen }), [open]);
  return <AlertDialogCtx.Provider value={value}>{children}</AlertDialogCtx.Provider>;
}

export function AlertDialogTrigger({ children }: { children: React.ReactNode }) {
  const ctx = useContext(AlertDialogCtx);
  if (!ctx) return <>{children}</>;
  return (
    <span
      onClick={() => ctx.setOpen(true)}
      className="inline-flex"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? ctx.setOpen(true) : null)}
    >
      {children}
    </span>
  );
}

export function AlertDialogContent({ children }: { children: React.ReactNode }) {
  const ctx = useContext(AlertDialogCtx);
  if (!ctx || !ctx.open) return null;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={() => ctx.setOpen(false)} />
      <div className="relative w-full max-w-lg rounded-3xl border border-stone-800 bg-stone-950 p-6 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export function AlertDialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 space-y-2">{children}</div>;
}

export function AlertDialogTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-lg font-semibold text-stone-100">{children}</div>;
}

export function AlertDialogDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-sm text-stone-400">{children}</div>;
}

export function AlertDialogFooter({ children }: { children: React.ReactNode }) {
  return <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">{children}</div>;
}

export function AlertDialogCancel({ children }: { children: React.ReactNode }) {
  const ctx = useContext(AlertDialogCtx);
  return (
    <button
      type="button"
      onClick={() => ctx?.setOpen(false)}
      className="rounded-xl border border-stone-700 bg-black/40 px-4 py-2 text-sm text-stone-200 hover:bg-stone-900"
    >
      {children}
    </button>
  );
}

export function AlertDialogAction({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  const ctx = useContext(AlertDialogCtx);
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        ctx?.setOpen(false);
      }}
      className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-amber-400"
    >
      {children}
    </button>
  );
}
