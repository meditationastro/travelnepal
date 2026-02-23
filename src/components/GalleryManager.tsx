import Link from 'next/link';

export default function GalleryManager() {
  return (
    <div className="bg-white rounded-2xl border border-stone-100 p-6">
      <h3 className="font-semibold text-stone-900">Gallery</h3>
      <p className="text-sm text-stone-500 mt-1">
        Manager UI placeholder (build-safe). The public gallery uses fast seed content + optional API.
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href="/gallery" className="text-sm font-medium text-amber-700 hover:underline">Open gallery →</Link>
      </div>
    </div>
  );
}
