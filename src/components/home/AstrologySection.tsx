import Link from 'next/link';
import { Star, ArrowRight } from 'lucide-react';

const services = [
  { icon: '♈', title: 'Vedic Birth Chart', price: 120, desc: 'Your complete cosmic blueprint — planets, houses, nakshatra' },
  { icon: '☸', title: 'Karma & Past Life', price: 150, desc: 'Explore karmic patterns from previous incarnations' },
  { icon: '♡', title: 'Compatibility Reading', price: 130, desc: 'Relationship harmony through Synastry & Composite' },
  { icon: '♃', title: 'Career & Dharma', price: 110, desc: 'Your life purpose and optimal career direction' },
  { icon: '🌙', title: 'Integration Session', price: 200, desc: 'Astrology + Meditation combined in a deep 2hr session' },
  { icon: '📱', title: 'Online Consultation', price: 90, desc: 'Full reading via Zoom with PDF report included' },
];

export function AstrologySection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: '#0f0a00' }}>
      {/* Stars */}
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(1.5px 1.5px at 10% 20%, rgba(255,255,200,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 25% 65%, rgba(255,255,200,0.6) 0%, transparent 100%),
            radial-gradient(2px 2px at 40% 35%, rgba(255,255,200,0.7) 0%, transparent 100%),
            radial-gradient(1px 1px at 55% 80%, rgba(255,255,200,0.5) 0%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 15%, rgba(255,255,200,0.8) 0%, transparent 100%),
            radial-gradient(1px 1px at 85% 55%, rgba(255,255,200,0.6) 0%, transparent 100%),
            radial-gradient(2px 2px at 95% 30%, rgba(255,255,200,0.7) 0%, transparent 100%)`,
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C5A253, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #4a7e50, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-4xl mb-4">✦</div>
          <div className="inline-block text-sm tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#C5A253' }}>
            — Ancient Wisdom —
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-4">
            Vedic Astrology
            <span className="block italic mt-1" style={{ color: '#C5A253' }}>Services</span>
          </h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">
            Jyotish — the science of light — illuminates your karmic path and highest potential. Our Jyotishis have 20+ years of experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl p-6 border border-white/10 hover:border-yellow-700/50 transition-all cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)' }}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-display text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-stone-400 text-sm mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold" style={{ color: '#C5A253' }}>${s.price}</span>
                <span className="text-xs text-stone-500 group-hover:text-stone-300 transition-colors flex items-center gap-1">
                  Book <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/astrology" className="btn-gold inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white">
            <Star className="w-4 h-4" /> Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
