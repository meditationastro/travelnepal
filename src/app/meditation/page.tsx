import Link from 'next/link';
import type { Metadata } from 'next';
import { Wind, Moon, Sun, Heart, Brain, Eye, Star, ArrowRight, Clock, Users } from 'lucide-react';
import PracticeFinder from '@/components/interactive/PracticeFinder';
import NishrutiGuide from '@/components/interactive/NishrutiGuide';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Meditation Programs in Nepal | Himalya Retreat Nepal',
  description: 'Discover authentic Himalayan meditation practices in Nepal. Mindfulness, Vipassana, Kundalini, Tibetan Buddhist and Pranayama programs at Himalya Retreat Nepal, Khumaltar, Lalitpur.',
  keywords: ['meditation Nepal', 'Himalayan meditation', 'Vipassana Nepal', 'mindfulness retreat Nepal', 'meditation Lalitpur'],
};

const programs = [
  {
    icon: Wind,
    title: 'Pranayama & Breath Awareness',
    duration: '60 min',
    level: 'All Levels',
    price: 45,
    color: '#E8891A',
    description: 'Ancient yogic breathing techniques rooted in the Himalayan tradition. Pranayama regulates prana (life-force) through controlled breath patterns — Nadi Shodhana, Kapalabhati, Bhramari, and Ujjayi. These practices calm the nervous system, sharpen mental clarity, and awaken subtle energy channels.',
    benefits: ['Reduced anxiety & stress', 'Improved lung capacity', 'Enhanced mental focus', 'Balanced nervous system', 'Increased prana flow'],
  },
  {
    icon: Eye,
    title: 'Vipassana Insight Meditation',
    duration: '90 min',
    level: 'Beginner Friendly',
    price: 60,
    color: '#C5A253',
    description: 'The oldest Buddhist meditation technique, practiced for over 2,500 years. Vipassana means "to see things as they really are." Through observation of breath and body sensations without judgment, you develop profound insight into the nature of mind, release deep-rooted conditioning, and cultivate equanimity.',
    benefits: ['Dissolves mental conditioning', 'Deepens self-awareness', 'Cultivates equanimity', 'Reduces emotional reactivity', 'Opens path to liberation'],
  },
  {
    icon: Brain,
    title: 'Tibetan Buddhist Meditation',
    duration: '90 min',
    level: 'Intermediate',
    price: 75,
    color: '#C4663A',
    description: 'Drawing from 1,000 years of Tibetan wisdom transmitted through Nepal\'s sacred monasteries. Practices include Tonglen (taking and sending compassion), Dzogchen (great perfection), Shamatha (calm abiding), and Deity visualization. Guided by traditional thangka imagery and singing bowls.',
    benefits: ['Opens heart-mind connection', 'Develops bodhicitta', 'Accesses Rigpa — pure awareness', 'Liberates emotional suffering', 'Connects to lineage blessings'],
  },
  {
    icon: Sun,
    title: 'Kundalini Awakening Practice',
    duration: '75 min',
    level: 'All Levels',
    price: 65,
    color: '#8B6914',
    description: 'Systematically awakens the dormant kundalini energy at the base of the spine, guiding it through the seven chakras to achieve union with universal consciousness. Combines Kriya yoga, dynamic breathing, mantra, mudra, and bandha (energy locks) for safe, guided awakening under expert supervision.',
    benefits: ['Awakens subtle energy centers', 'Dissolves energy blockages', 'Expands consciousness', 'Enhances creative power', 'Accelerates spiritual evolution'],
  },
  {
    icon: Heart,
    title: 'Loving-Kindness (Metta) Meditation',
    duration: '60 min',
    level: 'All Levels',
    price: 40,
    color: '#27422b',
    description: 'Metta Bhavana — the systematic cultivation of boundless goodwill toward all beings. Beginning with oneself and expanding outward through loved ones, neutral persons, difficult people, and all sentient life. Scientifically proven to rewire neural pathways for greater compassion and emotional resilience.',
    benefits: ['Heals self-criticism', 'Builds emotional resilience', 'Strengthens relationships', 'Reduces social anxiety', 'Cultivates boundless compassion'],
  },
  {
    icon: Moon,
    title: 'Yoga Nidra — Yogic Sleep',
    duration: '45 min',
    level: 'All Levels',
    price: 35,
    color: '#4a3728',
    description: 'Known as "yogic sleep," Yoga Nidra induces the hypnagogic state between waking and sleeping — where the subconscious mind becomes accessible. One hour of Yoga Nidra equals four hours of deep sleep. Using Sankalpa (intention), body rotation, and visualization to plant seeds of transformation deep in the psyche.',
    benefits: ['Profound rest & recovery', 'Reprograms subconscious patterns', 'Reduces PTSD & trauma', 'Deepens dreamless sleep', 'Manifests positive intentions'],
  },
];

const schedule = [
  { time: '6:00 AM', session: 'Sunrise Pranayama', duration: '60 min', type: 'Daily' },
  { time: '8:00 AM', session: 'Guided Vipassana', duration: '90 min', type: 'Daily' },
  { time: '10:00 AM', session: 'Vedic Chanting & Mantra', duration: '45 min', type: 'Mon/Wed/Fri' },
  { time: '4:00 PM', session: 'Kundalini / Tibetan Practice', duration: '75 min', type: 'Alternate' },
  { time: '6:00 PM', session: 'Metta Meditation', duration: '60 min', type: 'Daily' },
  { time: '8:00 PM', session: 'Yoga Nidra', duration: '45 min', type: 'Daily' },
];

export default function MeditationPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0a14 0%, #1a0a00 50%, #0d1a0a 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A253 0%, transparent 60%), radial-gradient(circle at 70% 30%, #27422b 0%, transparent 50%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.15)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.3)' }}>
            ✦ Sacred Himalayan Practices ✦
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-6 leading-tight">
            Meditation at the
            <span className="block italic" style={{ color: '#C5A253' }}>Roof of the World</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Immerse in 2,500-year-old meditation lineages preserved in Nepal's Himalayan monasteries. 
            From Vipassana insight to Tibetan Buddhist practices — guided daily by experienced teachers at Khumaltar, Lalitpur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meditation/booking" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book a Session
            </Link>
            <Link href="/retreats" className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              Explore Full Retreats
            </Link>
          </div>
        </div>
        <div className="relative h-20 overflow-hidden">
          <svg viewBox="0 0 1440 80" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,80 L240,30 L480,55 L720,10 L960,50 L1200,20 L1440,60 L1440,80 Z" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '15+', label: 'Years Teaching' },
              { num: '2,500+', label: 'Students Guided' },
              { num: '6', label: 'Meditation Styles' },
              { num: 'Daily', label: 'Sessions Available' },
            ].map((s) => (
              <div key={s.label} className="text-center bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="font-display text-3xl font-bold mb-1" style={{ color: '#C5A253' }}>{s.num}</div>
                <div className="text-sm text-stone-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nishruti Meditation */}
      <section className="py-16 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🪷</div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3">Nishruti Meditation</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Nishruti is a gentle, modern Vedic-style meditation approach that emphasizes relaxing the body, anchoring attention, and cultivating witness awareness.
              Use the interactive guide below to experience a full mini-session — then book a live class for deeper guidance.
            </p>
          </div>

          <NishrutiGuide />

          <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-stone-900">🎵 Nishruti Ambient Audio</h3>
                <p className="text-sm text-stone-600 mt-1">Soft Himalayan-style tone to support the guide above. Use headphones for best effect.</p>
              </div>
              <span className="text-xs px-3 py-2 rounded-full" style={{ background: 'rgba(197,162,83,0.14)', color: '#8B6914', border: '1px solid rgba(197,162,83,0.28)' }}>20 min loop</span>
            </div>
            <audio className="mt-4 w-full" controls preload="none">
              <source src="/audio/nishruti-ambient.wav" type="audio/wav" />
            </audio>
            <p className="mt-3 text-xs text-stone-500">Tip: set volume low, then focus on breath + witness awareness.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meditation/booking" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book Nishruti Session
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to learn Nishruti Meditation and book a session." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
              💬 WhatsApp · Ask a Teacher
            </a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-stone-900 mb-4">Meditation Programs</h2>
            <p className="text-stone-600 text-lg max-w-2xl mx-auto">Each practice draws from authentic lineages — taught exactly as transmitted through centuries of Himalayan wisdom.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <div key={prog.title} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-all group">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${prog.color}20` }}>
                      <Icon className="w-6 h-6" style={{ color: prog.color }} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold" style={{ color: '#C5A253' }}>${prog.price}</div>
                      <div className="text-xs text-stone-400">per session</div>
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">{prog.title}</h3>
                  <div className="flex gap-3 mb-4">
                    <span className="flex items-center gap-1 text-xs text-stone-500"><Clock className="w-3 h-3" />{prog.duration}</span>
                    <span className="flex items-center gap-1 text-xs text-stone-500"><Users className="w-3 h-3" />{prog.level}</span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-5">{prog.description}</p>
                  <div className="mb-5">
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">Benefits</div>
                    <div className="flex flex-wrap gap-2">
                      {prog.benefits.map((b) => (
                        <span key={b} className="text-xs px-3 py-1 rounded-full" style={{ background: `${prog.color}15`, color: prog.color }}>
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="/meditation/booking" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:gap-3" style={{ color: prog.color }}>
                    Book This Session <ArrowRight className="w-4 h-4 transition-all" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive: Meditation Finder */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(39,66,43,0.12)', color: '#27422b', border: '1px solid rgba(39,66,43,0.24)' }}
            >
              🕊️ Interactive
            </div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mt-4">Find Your Meditation</h2>
            <p className="text-stone-500 mt-2">Pick a goal and get a simple, practical recommendation.</p>
          </div>
          <PracticeFinder variant="meditation" />
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl text-white font-semibold mb-3">Daily Schedule</h2>
            <p className="text-stone-400">Structure your day around ancient rhythms</p>
          </div>
          <div className="space-y-3">
            {schedule.map((item) => (
              <div key={item.session} className="flex items-center gap-4 p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,162,83,0.15)' }}>
                <div className="text-sm font-mono font-bold w-20 text-amber-300 flex-shrink-0">{item.time}</div>
                <div className="flex-1">
                  <div className="text-white font-medium">{item.session}</div>
                  <div className="text-stone-400 text-xs">{item.type}</div>
                </div>
                <div className="text-xs text-stone-500 px-3 py-1 rounded-full" style={{ background: 'rgba(197,162,83,0.1)', color: '#C5A253' }}>{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-stone-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center flex-shrink-0 text-5xl" style={{ background: 'linear-gradient(135deg, #C5A253, #8B6914)' }}>
                ॐ
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#C5A253' }}>Your Guide</div>
                <h3 className="font-display text-2xl font-semibold text-stone-900 mb-3">Himalayan Meditation Masters</h3>
                <p className="text-stone-600 leading-relaxed">
                  Our teachers are lineage holders trained for 10–20 years in Nepal's living meditation traditions — 
                  Theravada Buddhist monasteries, Tibetan vajrayana centers, and the classical yoga lineages of the Himalayas. 
                  Every session preserves the integrity and depth of authentic transmission, not watered-down wellness culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Star className="w-10 h-10 mx-auto mb-5" style={{ color: '#C5A253' }} />
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Begin Your Inner Journey</h2>
          <p className="text-stone-600 text-lg mb-8">Book a single session or join a full retreat. Our team will help you choose the right practice for your needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/meditation/booking" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book a Meditation Session
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to learn more about meditation programs." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 transition-all" style={{ borderColor: '#C5A253' }}>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-16 max-w-6xl px-4">
        <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-stone-900">Meditation Guides</h2>
          <p className="mt-2 text-stone-500">
            Explore bite-sized guides that complement your practice — planning notes, techniques, and FAQs.
          </p>
          <div className="mt-5">
            <a href="/learn/meditation" className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white" style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
              Browse guides →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
