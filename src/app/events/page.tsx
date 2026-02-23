import type { Metadata } from 'next';
import Link from 'next/link';
import { events } from '@/lib/events';

export const metadata: Metadata = {
  title: 'Events Calendar — Retreats, Workshops & Online Sessions',
  description: 'Explore upcoming meditation retreats in Nepal, workshops, ceremonies, and online sessions. Filter by event type and discover what’s next.',
};

export default function EventsPage({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  const type = typeof searchParams?.type === 'string' ? searchParams?.type : 'All';

  const filtered = type === 'All' ? events : events.filter((e) => e.type === type);

  const types = ['All', 'Retreat', 'Online Session', 'Workshop', 'Ceremony'];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Events Calendar</h1>
          <p className="mt-2 text-muted-foreground">
            Retreat dates, workshops, ceremonies, and online sessions — designed for a deeper spiritual journey in Nepal.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <Link
              key={t}
              href={t === 'All' ? '/events' : `/events?type=${encodeURIComponent(t)}`}
              className={[
                'rounded-full border px-4 py-2 text-sm font-medium',
                type === t ? 'bg-primary text-white border-primary' : 'hover:bg-muted',
              ].join(' ')}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4">
        {filtered.map((e) => (
          <article key={e.id} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground">{e.type}</p>
                <h2 className="mt-1 text-xl font-semibold">{e.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>
              </div>
              <div className="text-sm font-medium">
                {new Date(e.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                {e.endDate ? (
                  <>
                    {' '}–{' '}
                    {new Date(e.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </>
                ) : null}
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">{e.description}</p>

            {e.ctaHref ? (
              <div className="mt-5">
                <Link className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90" href={e.ctaHref}>
                  {e.ctaLabel ?? 'Learn more'}
                </Link>
              </div>
            ) : null}
          </article>
        ))}
      </div>

      <section className="mt-10 rounded-2xl bg-muted p-6">
        <h3 className="text-lg font-semibold">Want to host a private session or group retreat?</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We also offer custom itineraries: meditation retreats in Nepal, Vedic astrology intensives, and sacred site pilgrimages.
        </p>
        <Link href="/contact" className="mt-4 inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white hover:opacity-90">
          Contact us
        </Link>
      </section>
    </main>
  );
}
