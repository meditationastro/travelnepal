import Link from 'next/link';

export const metadata = {
  title: 'Guided Meditation Sessions | Himalaya Retreat',
  description:
    'Choose a guided meditation track: calm, focus, sleep, stress relief, and beginner-friendly fundamentals.',
};

const sessions = [
  {
    title: 'Calm & Anxiety Reset',
    minutes: 12,
    goal: 'Downshift the nervous system with extended exhales and body awareness.',
  },
  {
    title: 'Focus & Clarity',
    minutes: 10,
    goal: 'Train attention with breath counting and gentle redirection.',
  },
  {
    title: 'Sleep Wind-Down',
    minutes: 15,
    goal: 'Release tension and soften the mind for deeper rest.',
  },
  {
    title: 'Beginner Foundations',
    minutes: 8,
    goal: 'A simple start: posture, breath, and what to do when you get distracted.',
  },
];

export default function MeditationSessionsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-stone-900">
            Guided Sessions
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl">
            These are simple frameworks you can practice daily. For a personalized plan, book a
            guided session.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {sessions.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-stone-900">{s.title}</h3>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                    {s.minutes} min
                  </span>
                </div>
                <p className="mt-2 text-sm text-stone-600">{s.goal}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/meditation/booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-himalaya-700 text-white font-medium hover:bg-himalaya-800 transition"
            >
              Book a Guided Session
            </Link>
            <Link
              href="/retreats"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
            >
              Explore Retreats
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
