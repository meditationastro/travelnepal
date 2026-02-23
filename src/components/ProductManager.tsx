import Link from 'next/link';

export default function ProductManager() {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-6">
      <h3 className="font-semibold text-stone-900">Products</h3>
      <p className="text-sm text-stone-500 mt-1">
        Manager UI placeholder (build-safe). You can connect this to Prisma/Supabase later.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/" className="text-sm font-medium text-amber-700 hover:underline">View store →</Link>
      </div>
    </div>
  );
}
