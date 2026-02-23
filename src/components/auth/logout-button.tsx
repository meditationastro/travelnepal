"use client";

import React from "react";
import { signOut } from "next-auth/react";

export default function LogoutButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => signOut({ callbackUrl: "/" })}
      className={
        className ||
        "rounded-xl border border-stone-700 bg-black/40 px-4 py-2 text-sm text-stone-200 hover:bg-stone-900"
      }
    >
      Log out
    </button>
  );
}
