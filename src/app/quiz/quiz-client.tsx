'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Q = {
  id: string;
  question: string;
  options: { label: string; score: number }[];
};

const QUESTIONS: Q[] = [
  {
    id: 'goal',
    question: 'What is your main intention for Nepal?',
    options: [
      { label: 'Deep meditation and inner calm', score: 3 },
      { label: 'Spiritual pilgrimage & sacred sites', score: 2 },
      { label: 'Trek + nature + personal reset', score: 2 },
      { label: 'Vedic astrology clarity for life decisions', score: 3 },
    ],
  },
  {
    id: 'experience',
    question: 'How experienced are you with meditation?',
    options: [
      { label: 'New (0–2 months)', score: 1 },
      { label: 'Some experience (3–12 months)', score: 2 },
      { label: 'Regular practice (1–3 years)', score: 3 },
      { label: 'Long-term practitioner (3+ years)', score: 4 },
    ],
  },
  {
    id: 'time',
    question: 'How much time can you commit right now?',
    options: [
      { label: '3–4 days', score: 1 },
      { label: '5–7 days', score: 2 },
      { label: '8–10 days', score: 3 },
      { label: '12–14+ days', score: 4 },
    ],
  },
  {
    id: 'style',
    question: 'Which retreat style sounds best?',
    options: [
      { label: 'Gentle, guided, beginner-friendly', score: 1 },
      { label: 'Balanced: practice + culture + workshops', score: 2 },
      { label: 'Deep immersion with focused teaching', score: 3 },
      { label: 'Silence + intensity + transformation', score: 4 },
    ],
  },
  {
    id: 'body',
    question: 'How is your energy lately?',
    options: [
      { label: 'Stressed/burned out', score: 2 },
      { label: 'Okay but restless', score: 2 },
      { label: 'Stable and ready to go deeper', score: 3 },
      { label: 'High energy, want a challenge', score: 3 },
    ],
  },
  {
    id: 'interest',
    question: 'Pick the topic you’re most curious about:',
    options: [
      { label: 'Breathwork & nervous system', score: 2 },
      { label: 'Mantra & meditation technique', score: 2 },
      { label: 'Vedic astrology timing & remedies', score: 2 },
      { label: 'Sacred sites & ritual culture', score: 2 },
    ],
  },
  {
    id: 'trek',
    question: 'Do you want trekking as part of your journey?',
    options: [
      { label: 'No, I prefer retreat center practice', score: 0 },
      { label: 'Light walking + nature is enough', score: 1 },
      { label: 'Yes, I want a spiritual trek', score: 2 },
      { label: 'Yes, and I want big mountain views', score: 2 },
    ],
  },
  {
    id: 'astrology',
    question: 'Would you like a Vedic astrology consultation included?',
    options: [
      { label: 'Not needed', score: 0 },
      { label: 'Curious — a short reading', score: 1 },
      { label: 'Yes — full birth chart consult', score: 2 },
      { label: 'Yes — immersive Jyotish intensive', score: 3 },
    ],
  },
  {
    id: 'comfort',
    question: 'Preferred comfort level:',
    options: [
      { label: 'Simple, clean, retreat style', score: 1 },
      { label: 'Comfortable, mid-range', score: 2 },
      { label: 'Premium, private space', score: 3 },
      { label: 'Flexible', score: 2 },
    ],
  },
  {
    id: 'food',
    question: 'Food preference:',
    options: [
      { label: 'Ayurvedic / sattvic meals', score: 2 },
      { label: 'Vegetarian is fine', score: 1 },
      { label: 'No strong preference', score: 0 },
      { label: 'I have dietary needs (we’ll coordinate)', score: 1 },
    ],
  },
  {
    id: 'readiness',
    question: 'How ready are you for a reset?',
    options: [
      { label: 'I need a gentle start', score: 1 },
      { label: 'Ready for structure', score: 2 },
      { label: 'Ready for deep work', score: 3 },
      { label: 'Bring on the challenge', score: 4 },
    ],
  },
  {
    id: 'timing',
    question: 'When do you want to travel?',
    options: [
      { label: 'Next 1–2 months', score: 1 },
      { label: '3–6 months', score: 2 },
      { label: '6–12 months', score: 2 },
      { label: 'I’m flexible', score: 2 },
    ],
  },
];

function recommendation(total: number) {
  if (total <= 16) {
    return {
      title: 'Recommended: 3–5 day reset',
      body:
        'Start with a gentle container to build momentum: guided meditation, breathwork, and supportive structure. If you want a quick but meaningful shift, this is ideal.',
      links: [
        { label: '3-Day Mindfulness Retreat', href: '/retreats/3-day-mindfulness' },
        { label: '5-Day Breathwork & Sound Healing', href: '/retreats/5-day-breathwork-sound-healing' },
        { label: 'Contact us', href: '/contact' },
      ],
    };
  }
  if (total <= 24) {
    return {
      title: 'Recommended: 6–8 day guided immersion',
      body:
        'You’re ready for a deeper week: daily practice, sacred-site context, and teaching that you can integrate at home. Great for clarity and steady progress.',
      links: [
        { label: '7-Day Meditation & Astrology', href: '/retreats/7-day-meditation-astrology' },
        { label: '6-Day Sacred Kathmandu Pilgrimage', href: '/retreats/6-day-sacred-kathmandu-pilgrimage' },
        { label: 'Book Astrology Consultation', href: '/vedic-astrology/booking' },
      ],
    };
  }
  if (total <= 32) {
    return {
      title: 'Recommended: 9–12 day deepening',
      body:
        'You’ll benefit from an immersive container: more silence, more practice time, and deeper personal guidance. Perfect for serious seekers planning a life upgrade.',
      links: [
        { label: '9-Day Vedic Astrology Immersion', href: '/retreats/9-day-vedic-astrology-immersion' },
        { label: '10-Day Silent Meditation', href: '/retreats/10-day-silent-meditation' },
        { label: 'Explore all retreats', href: '/retreats' },
      ],
    };
  }
  return {
    title: 'Recommended: 12–14 day transformation',
    body:
      'You’re ready for a premium, high-depth journey — intensive practice, integration, and a full spiritual itinerary. This is for people who want real change.',
    links: [
      { label: '14-Day Himalayan Awakening', href: '/retreats/14-day-himalayan-awakening' },
      { label: '12-Day Annapurna Spiritual Trek', href: '/retreats/12-day-annapurna-spiritual-trek' },
      { label: 'Talk to our team', href: '/contact' },
    ],
  };
}

export default function QuizClient() {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const done = idx >= QUESTIONS.length;

  const total = useMemo(
    () => Object.values(answers).reduce((a, b) => a + b, 0),
    [answers]
  );

  const rec = useMemo(() => recommendation(total), [total]);

  const q = QUESTIONS[idx];

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white">
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold">Nepal Spiritual Quiz</h1>
            <p className="text-white/70 mt-2">
              Answer 12 quick questions. Get a recommended retreat path + links to book.
            </p>
          </div>
          <Link
            href="/retreats"
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-amber-400 text-stone-950 font-semibold hover:opacity-90"
          >
            View Retreats
          </Link>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="text-sm text-white/70">
              {done ? 'Results' : `Question ${idx + 1} of ${QUESTIONS.length}`}
            </div>
            <div className="text-sm text-white/70">Score: {total}</div>
          </div>

          {!done ? (
            <div className="p-6">
              <h2 className="text-xl font-semibold">{q.question}</h2>
              <div className="mt-5 grid gap-3">
                {q.options.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => {
                      setAnswers((prev) => ({ ...prev, [q.id]: o.score }));
                      setIdx((n) => n + 1);
                    }}
                    className="text-left p-4 rounded-2xl border border-white/10 bg-black/20 hover:bg-white/10 transition"
                  >
                    <div className="font-medium">{o.label}</div>
                    <div className="text-xs text-white/60 mt-1">Tap to select</div>
                  </button>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <button
                  disabled={idx === 0}
                  onClick={() => setIdx((n) => Math.max(0, n - 1))}
                  className="px-4 py-2 rounded-full border border-white/15 text-white/80 disabled:opacity-40"
                >
                  Back
                </button>
                <div className="text-xs text-white/50">No email required.</div>
              </div>
            </div>
          ) : (
            <div className="p-6">
              <div className="rounded-2xl bg-amber-400 text-stone-950 p-5">
                <div className="text-sm font-bold tracking-wide">Your result</div>
                <h2 className="text-2xl font-display font-semibold mt-1">{rec.title}</h2>
                <p className="mt-3 text-stone-900/90 leading-relaxed">{rec.body}</p>
              </div>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {rec.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                  >
                    <div className="font-semibold">{l.label}</div>
                    <div className="text-xs text-white/70 mt-1">Open</div>
                  </Link>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setIdx(0);
                    setAnswers({});
                  }}
                  className="px-5 py-2 rounded-full bg-white text-stone-950 font-semibold hover:opacity-90"
                >
                  Retake quiz
                </button>
                <Link
                  href="/contact"
                  className="px-5 py-2 rounded-full border border-white/15 text-white hover:bg-white/10"
                >
                  Ask for a custom recommendation
                </Link>
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-sm font-semibold">Internal links</div>
            <p className="text-sm text-white/70 mt-2">Explore guides and build your itinerary.</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-amber-300 hover:underline" href="/learn">Learn hub</Link>
              <Link className="block text-amber-300 hover:underline" href="/meditation-in-nepal">Meditation in Nepal</Link>
              <Link className="block text-amber-300 hover:underline" href="/vedic-astrology-consultation-nepal">Vedic astrology consultation</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-sm font-semibold">Best seasons</div>
            <p className="text-sm text-white/70 mt-2">Clear skies and comfortable travel:</p>
            <ul className="mt-3 text-sm text-white/80 list-disc pl-5 space-y-1">
              <li>Oct–Dec: crisp views, dry weather</li>
              <li>Feb–May: warm days, lively culture</li>
              <li>Monsoon: best for quiet city retreats</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-sm font-semibold">Quick actions</div>
            <p className="text-sm text-white/70 mt-2">Book or message us instantly.</p>
            <div className="mt-3 space-y-2 text-sm">
              <Link className="block text-amber-300 hover:underline" href="/retreats">Book a retreat</Link>
              <Link className="block text-amber-300 hover:underline" href="/vedic-astrology/booking">Book astrology</Link>
              <Link className="block text-amber-300 hover:underline" href="/shop">Shop Nepal items</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
