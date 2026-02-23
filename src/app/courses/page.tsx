import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, GraduationCap, Clock, PlayCircle } from 'lucide-react';
import { Price } from '@/components/ui/Price';

export const metadata: Metadata = {
  title: 'Courses | Meditation, Breathwork & Vedic Astrology | Himalaya Retreat Nepal',
  description:
    'Self-paced spiritual courses: meditation foundations, breathwork, mantra practice, and Jyotish (Vedic astrology). Prices available in NPR and USD.',
};

const courses = [
  {
    title: '21‑Day Meditation Reset (Self‑Paced)',
    level: 'Beginner → Intermediate',
    duration: '21 days',
    usd: 35,
    npr: 4500,
    features: ['Daily 10–20 min practice', 'Breathwork + mindfulness', 'Journaling prompts', 'Integration checklist'],
  },
  {
    title: 'Breathwork for Calm & Energy',
    level: 'All levels',
    duration: '4 weeks',
    usd: 29,
    npr: 3800,
    features: ['Anxiety relief sequences', 'Pranayama basics', 'Nadi Shodhana + Bhastrika', 'Safe practice guidelines'],
  },
  {
    title: 'Jyotish Foundations: Read Your Birth Chart',
    level: 'Beginner',
    duration: '6 weeks',
    usd: 65,
    npr: 8500,
    features: ['9 grahas + 12 houses', 'Nakshatras overview', 'Ethical interpretation', 'Printable reference sheets'],
  },
  {
    title: 'Mantra & Japa: A Practical Guide',
    level: 'All levels',
    duration: '14 days',
    usd: 19,
    npr: 2500,
    features: ['Choosing a mantra', 'How to use mala', 'Common obstacles', 'Morning/evening routines'],
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl p-10 border border-stone-100 shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.12)', color: '#92400e', border: '1px solid rgba(197,162,83,0.25)' }}>
              <GraduationCap className="w-4 h-4" /> Courses · Self‑Paced
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 mb-3">Learn. Practice. Integrate.</h1>
            <p className="text-stone-600 text-lg max-w-3xl leading-relaxed">
              Short, practical learning paths to build your daily practice. Use the currency selector in the top bar to view prices in NPR or USD.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/inner-journey" className="px-6 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                Inner Journey Roadmap
              </Link>
              <Link href="/membership" className="px-6 py-3 rounded-full font-semibold text-white hover:opacity-90" style={{ background: '#25D366' }}>
                Join Membership
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <div key={c.title} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-stone-900">{c.title}</h2>
                  <div className="flex items-center gap-3 mt-2 text-sm text-stone-500">
                    <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{c.duration}</span>
                    <span className="inline-flex items-center gap-1"><PlayCircle className="w-4 h-4" />{c.level}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display text-3xl font-bold text-stone-900"><Price usd={c.usd} nprOverride={c.npr} /></div>
                  <div className="text-xs text-stone-500">One‑time payment</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-2">
                {c.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-stone-600">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                    {f}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href="/shop" className="flex-1 text-center px-6 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                  View in Shop
                </Link>
                <a
                  href={`https://wa.me/9779851187267?text=${encodeURIComponent(`Namaste! I'm interested in the course: ${c.title}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-6 py-3 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50"
                  style={{ borderColor: '#C5A253' }}
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
