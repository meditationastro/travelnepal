import Link from 'next/link';
import { getPagesByCategory } from '@/lib/seoPages';

export const metadata = {
  title: 'Explore Nepal | Himalaya Retreat Nepal',
  description: 'Travel, culture, spiritual sites, and practical planning guides to help you explore Nepal with respect and confidence.',
};

export default function Page() {
  const pages = getPagesByCategory('explore-nepal');
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Explore Nepal</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Travel, culture, spiritual sites, and practical planning guides to help you explore Nepal with respect and confidence.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href="/learn/explore-nepal" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white">Browse all guides</Link>
        <Link href="/contact" className="rounded-full border px-4 py-2 text-sm font-medium">Ask a question</Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((p) => (
          <Link key={p.slug} href={`/learn/${p.category}/${p.slug}`} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow">
            <div className="text-lg font-medium">{p.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{p.description}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
