import Link from 'next/link';
import { Compass } from 'lucide-react';

export function QuizCTA() {
  const steps = [
    { n: '1', label: 'Your intention', icon: '🌱' },
    { n: '2', label: 'Experience level', icon: '🧘' },
    { n: '3', label: 'Duration & budget', icon: '📅' },
    { n: '4', label: 'Cosmic interests', icon: '🔮' },
  ];

  return (
    <section className="py-24" style={{ background: '#27422b' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-12">
              <div className="text-sm tracking-[0.3em] uppercase font-medium mb-4 text-green-300">
                — Spiritual Assessment —
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4">
                Not sure which path is right for you?
              </h2>
              <p className="text-green-100/70 leading-relaxed mb-8">
                Answer 4 questions and we'll create a personalized spiritual plan — the perfect retreat, astrology sessions, and preparation guide for your unique journey.
              </p>
              <Link
                href="/quiz"
                className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full font-semibold text-white text-lg"
              >
                <Compass className="w-5 h-5" />
                Find My Path
              </Link>
            </div>

            {/* Right - Steps */}
            <div className="p-12 border-l border-white/10">
              <div className="space-y-6">
                {steps.map((s, i) => (
                  <div key={s.n} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: 'rgba(197,162,83,0.2)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.3)' }}>
                      {s.n}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-green-100/80">{s.label}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="absolute ml-5 mt-10 w-px h-6 bg-white/10" style={{ position: 'relative', left: '-21px', marginLeft: 0 }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-2xl" style={{ background: 'rgba(0,0,0,0.2)' }}>
                <div className="text-white/60 text-sm">You'll receive</div>
                <div className="text-white font-medium mt-1">✓ Recommended retreat program</div>
                <div className="text-white font-medium">✓ Suggested astrology sessions</div>
                <div className="text-white font-medium">✓ Custom spiritual preparation plan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
