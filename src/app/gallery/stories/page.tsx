import Link from 'next/link';
import { Metadata } from 'next';
import { GALLERY_SEO_PAGES } from '@/lib/gallerySeoPages';

export const metadata: Metadata = {
  title: 'Nepal Photo Stories | Himalaya Retreat Nepal',
  description:
    'Photo-led Nepal guides for spiritual travelers — sacred sites, mindful walks, Himalayan landscapes, and practical travel etiquette.',
};

export default function GalleryStoriesIndex() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold">Nepal Photo Stories</h1>
        <p className="text-muted-foreground max-w-3xl">
          A curated library of Nepal photo stories designed for spiritual travelers. Each story includes respectful
          visiting guidance, simple mindfulness prompts, and internal links to retreats, meditation, and astrology
          consultations.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_SEO_PAGES.map((p) => (
          <Link
            key={p.slug}
            href={`/gallery/stories/${p.slug}`}
            className="group rounded-2xl border bg-white/60 p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="text-sm text-muted-foreground">Photo story</div>
            <div className="mt-1 font-semibold text-lg group-hover:underline">{p.title}</div>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
            <div className="mt-4 text-sm font-medium">Read →</div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border bg-gradient-to-br from-white to-white/50 p-6">
        <h2 className="text-xl font-semibold">Want a personalized retreat plan?</h2>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Tell us your dates, intention, and travel style. We’ll suggest the best retreat package, optional astrology
          consultation, and a simple Nepal itinerary.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link className="px-4 py-2 rounded-xl bg-black text-white" href="/retreats">Explore Retreats</Link>
          <Link className="px-4 py-2 rounded-xl border" href="/vedic-astrology/booking">Book Astrology</Link>
          <Link className="px-4 py-2 rounded-xl border" href="/contact">Contact</Link>
        </div>
      </div>
    </main>
  );
}
