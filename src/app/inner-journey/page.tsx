import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, Sparkles, BookOpen, HeartHandshake, Mountain } from 'lucide-react';
import { Price } from '@/components/ui/Price';

export const metadata: Metadata = {
  title: 'Inner Journey Path | Spiritual Growth, Integration & Daily Practice | Himalaya Retreat Nepal',
  description:
    'A practical spiritual inner journey roadmap: meditation, breathwork, journaling, dharma alignment, and integration. Explore self-paced courses, community membership, and guided retreats in Nepal.',
};

const stages = [
  {
    icon: '🌿',
    title: 'Stabilize the Nervous System',
    points: ['Breath-led calming practices', 'Sleep & routine reset', 'Reduce noise (digital + emotional)'],
  },
  {
    icon: '🧘',
    title: 'Build a Daily Meditation Seat',
    points: ['10–20 min sustainable practice', 'Mindfulness + mantra options', 'How to work with distraction'],
  },
  {
    icon: '🕯️',
    title: 'Purification & Release',
    points: ['Somatic/emotional release', 'Shadow-friendly journaling', 'Gentle discipline (tapas)'],
  },
  {
    icon: '🪐',
    title: 'Dharma Alignment',
    points: ['Values & purpose clarity', 'Timing (Jyotish) + decision making', 'Service & right effort'],
  },
  {
    icon: '🏔️',
    title: 'Integration',
    points: ['Bring retreat insights into work/family', 'Boundaries & habits', 'Community support'],
  },
];

export default function InnerJourneyPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      <section className="pt-20 pb-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #1a0a00 55%, #0f1a10 100%)' }} />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 20% 65%, #C5A253 0%, transparent 45%), radial-gradient(circle at 80% 25%, #4a7e50 0%, transparent 45%)' }} />
        <div className="relative max-w-6xl mx-auto text-center py-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.15)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.3)' }}>
            <Sparkles className="w-4 h-4" /> Inner Journey · Practical Path
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5 leading-tight">
            Your Spiritual Inner Journey
            <span className="block italic" style={{ color: '#C5A253' }}>made practical</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Not everyone can move to the Himalayas — but everyone can build a daily practice.
            Use this roadmap to stabilize, awaken, and integrate… without burnout.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/courses" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Explore Courses
            </Link>
            <Link href="/membership" className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
              Join Membership
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-3">The 5-stage roadmap</h2>
              <p className="text-stone-600 leading-relaxed mb-6">
                We combine meditation, breathwork, Vedic wisdom, and integration practices. You can follow this at home —
                and go deeper on retreat in Nepal.
              </p>
              <div className="space-y-4">
                {stages.map((s) => (
                  <div key={s.title} className="p-5 rounded-2xl border border-stone-100 bg-stone-50">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{s.icon}</div>
                      <div>
                        <div className="font-semibold text-stone-900">{s.title}</div>
                        <ul className="mt-2 space-y-1">
                          {s.points.map((p) => (
                            <li key={p} className="flex items-center gap-2 text-sm text-stone-600">
                              <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                              {p}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="w-6 h-6" style={{ color: '#C5A253' }} />
                  <h3 className="font-display text-2xl font-semibold text-stone-900">Suggested starting point</h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-5">
                  If you are starting (or restarting), begin with a gentle reset:
                </p>
                <div className="p-5 rounded-2xl" style={{ background: 'rgba(197,162,83,0.12)', border: '1px solid rgba(197,162,83,0.25)' }}>
                  <div className="font-semibold text-stone-900">21‑Day Meditation Reset</div>
                  <div className="text-sm text-stone-600 mt-1">Breathwork · mindfulness · journaling prompts · integration checklist</div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <div className="font-display text-3xl font-bold text-stone-900"><Price usd={35} nprOverride={4500} /></div>
                    <div className="text-xs text-stone-500">Self-paced</div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Link href="/shop" className="px-5 py-2.5 rounded-full text-sm font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                      View in Shop
                    </Link>
                    <a
                      href="https://wa.me/9779851187267?text=Namaste! I want to start the 21-Day Meditation Reset."
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full text-sm font-semibold border-2 text-stone-700 hover:bg-stone-50"
                      style={{ borderColor: '#C5A253' }}
                    >
                      Ask on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <HeartHandshake className="w-6 h-6" style={{ color: '#C5A253' }} />
                  <h3 className="font-display text-2xl font-semibold text-stone-900">Community support</h3>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  The fastest growth happens with guidance + accountability. Join the membership for weekly practice,
                  Q&A, and integration support.
                </p>
                <div className="mt-5 flex items-center justify-between p-4 rounded-2xl bg-stone-50 border border-stone-100">
                  <div>
                    <div className="font-semibold text-stone-900">Membership</div>
                    <div className="text-xs text-stone-500">Weekly calls · practice library · community</div>
                  </div>
                  <Link href="/membership" className="px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ background: '#25D366' }}>
                    View Plans
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Mountain className="w-6 h-6" style={{ color: '#C5A253' }} />
                  <h3 className="font-display text-2xl font-semibold text-stone-900">Go deeper in Nepal</h3>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">
                  When you are ready for a real reset — the Himalayas amplify practice.
                </p>
                <Link href="/retreats" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                  Explore Retreats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
