import Link from "next/link";

/**
 * Lightweight header used by some protected layouts.
 * Keeps the build green even if the public navbar is used elsewhere.
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-[120] border-b border-stone-800 bg-stone-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-stone-100">
          Himalaya Retreat
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/dashboard" className="text-stone-300 hover:text-amber-300">
            Dashboard
          </Link>
          <Link href="/admin" className="text-stone-300 hover:text-amber-300">
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
