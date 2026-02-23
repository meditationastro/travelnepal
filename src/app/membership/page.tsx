import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, Users, MessageCircle, CalendarDays, LibraryBig } from 'lucide-react';
import { Price } from '@/components/ui/Price';

export const metadata: Metadata = {
  title: 'Membership | Weekly Practice & Community | Himalaya Retreat Nepal',
  description:
    'Join a supportive spiritual community with weekly practice calls, Q&A, a growing library of meditations and Jyotish lessons, and integration guidance. Prices in NPR + USD.',
};

const tiers = [
  {
    name: 'Seeker',
    usd: 9,
    npr: 1200,
    highlight: false,
    features: ['Weekly group meditation (live)', 'Community chat', 'Monthly Q&A'],
  },
  {
    name: 'Practitioner',
    usd: 19,
    npr: 2500,
    highlight: true,
    features: ['Everything in Seeker', 'Practice library access', 'Weekly integration prompts', '1 Jyotish mini‑lesson/month'],
  },
  {
    name: 'Sadhaka',
    usd: 39,
    npr: 5200,
    highlight: false,
    features: ['Everything in Practitioner', '2 live sessions/week', 'Priority Q&A', 'Monthly 1:1 check‑in (15 min)'],
  },
];

export default function MembershipPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      <section className="pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 border border-stone-100 shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(74,126,80,0.12)', color: '#166534', border: '1px solid rgba(74,126,80,0.25)' }}>
              <Users className="w-4 h-4" /> Membership · Community
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 mb-3">Practice is easier together</h1>
            <p className="text-stone-600 text-lg max-w-3xl leading-relaxed">
              Weekly practice, gentle accountability, and integration support — designed for people living normal lives.
              Use the currency selector in the top bar to see NPR pricing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/inner-journey" className="px-6 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                Inner Journey Roadmap
              </Link>
              <Link href="/courses" className="px-6 py-3 rounded-full font-semibold text-white hover:opacity-90" style={{ background: '#25D366' }}>
                Explore Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`bg-white rounded-3xl p-8 border shadow-sm ${t.highlight ? 'border-amber-300' : 'border-stone-100'}`}
            >
              {t.highlight && (
                <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C5A253' }}>
                  Most Popular
                </div>
              )}
              <div className="font-display text-2xl font-semibold text-stone-900">{t.name}</div>
              <div className="mt-3 flex items-baseline gap-2">
                <div className="font-display text-4xl font-bold text-stone-900"><Price usd={t.usd} nprOverride={t.npr} /></div>
                <div className="text-sm text-stone-500">/ month</div>
              </div>
              <div className="mt-5 space-y-2">
                {t.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-col gap-3">
                <a
                  href={`https://wa.me/9779851187267?text=${encodeURIComponent(`Namaste! I want to join the ${t.name} membership.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center px-6 py-3 rounded-full font-semibold text-white hover:opacity-90"
                  style={{ background: '#25D366' }}
                >
                  Join via WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="w-full text-center px-6 py-3 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50"
                  style={{ borderColor: '#C5A253' }}
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { icon: CalendarDays, title: 'Weekly live practice', desc: 'Meditation + breathwork sessions that keep you consistent.' },
            { icon: LibraryBig, title: 'Growing library', desc: 'Guided meditations, mantra tracks, and Jyotish foundations.' },
            { icon: MessageCircle, title: 'Support channel', desc: 'Ask questions, share wins, and stay connected.' },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <b.icon className="w-7 h-7" style={{ color: '#C5A253' }} />
              <h3 className="mt-3 font-display text-2xl font-semibold text-stone-900">{b.title}</h3>
              <p className="mt-2 text-stone-600 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
