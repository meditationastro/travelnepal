import Link from 'next/link';
import LifeMatrixMapper from '@/components/interactive/LifeMatrixMapper';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Life Matrix Mapping | Himalaya Retreat',
  description:
    'Life Matrix Mapping: a practical, reflective framework to map strengths, patterns, and next steps—paired with meditation and integration support.',
};

export default function LifeMatrixPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="pt-28 pb-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-semibold text-stone-900">
            🧩 Life Matrix Mapping
          </h1>
          <p className="mt-4 text-lg text-stone-600 max-w-3xl">
            A structured way to map your current season—energy, relationships, purpose, and habits—so you can make clear,
            grounded choices (without overwhelm).
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-stone-900">What you get</h2>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li>• A 1-page “matrix” summary of strengths + repeating patterns</li>
                <li>• 3 priorities for the next 30 days</li>
                <li>• A simple meditation plan to support change 🧘</li>
                <li>• Optional Jyotish timing add-on (dashas + transits) 🧿</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <h2 className="text-2xl font-display font-semibold text-stone-900">Who it’s for</h2>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li>• You feel “stuck” and want a clean plan</li>
                <li>• You’re making a big decision (work, move, relationship)</li>
                <li>• You want clarity without spiritual fluff</li>
                <li>• You want an integration path that actually fits your schedule</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <LifeMatrixMapper />
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {[
              { emoji: '🧠', title: 'Mind', desc: 'Reduce noise. Decide what to ignore, and what to practice daily.' },
              { emoji: '❤️', title: 'Relationships', desc: 'Name the pattern. Choose one boundary and one repair action.' },
              { emoji: '💼', title: 'Work & Purpose', desc: 'Pick one skill and one project. Stop splitting your attention.' },
              { emoji: '🌿', title: 'Body', desc: 'Small routines: sleep, breath, walking, basic food consistency.' },
              { emoji: '🔥', title: 'Energy', desc: 'Track what drains you and what restores you for 7 days.' },
              { emoji: '🗺️', title: 'Next Season', desc: 'Set 3 priorities. Everything else is “later” — by design.' },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm">
                <div className="text-4xl">{c.emoji}</div>
                <div className="mt-3 font-display text-xl font-semibold text-stone-900">{c.title}</div>
                <div className="mt-2 text-sm text-stone-600">{c.desc}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
            <h2 className="text-2xl font-display font-semibold text-stone-900">Next step</h2>
            <p className="mt-2 text-stone-600 max-w-3xl">
              Book a consultation and mention “Life Matrix” in your message. We’ll confirm on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/astrology/online"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-himalaya-700 text-white font-medium hover:bg-himalaya-800 transition"
              >
                Book Consultation
              </Link>
              <Link
                href="/meditation/booking"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
              >
                Book Meditation
              </Link>
              <Link
                href="/travel-consultant"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition"
              >
                ✈️ Get Travel Consultant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
