'use client';
import { useRef, useEffect } from 'react';

const LOGOS = [
  { name:'Yoga Alliance RYS-200', icon:'🎓' },
  { name:'Tripadvisor Certificate of Excellence', icon:'⭐' },
  { name:'Nepal Tourism Board', icon:'🇳🇵' },
  { name:'Ayurveda Association Nepal', icon:'🌿' },
  { name:'International Jyotish Federation', icon:'🔮' },
  { name:'Google Reviews 4.9★', icon:'📍' },
];

const COUNTRIES = ['🇺🇸','🇬🇧','🇩🇪','🇫🇷','🇮🇹','🇪🇸','🇯🇵','🇦🇺','🇨🇦','🇸🇬','🇳🇱','🇧🇷','🇮🇳','🇨🇭','🇸🇪','🇦🇹','🇰🇷','🇿🇦'];

export function SocialProofStrip() {
  const track1 = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 overflow-hidden border-y border-stone-200" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center text-xs text-stone-400 uppercase tracking-widest font-medium mb-6">Recognized by & Guests from</p>
      </div>

      {/* Infinite scroll logos */}
      <div className="flex gap-8 overflow-hidden mb-6">
        <div className="flex gap-8 animate-[marquee_20s_linear_infinite] flex-shrink-0">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-stone-100 bg-stone-50 whitespace-nowrap flex-shrink-0">
              <span className="text-2xl">{l.icon}</span>
              <span className="text-sm font-medium text-stone-600">{l.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Countries row */}
      <div className="flex gap-3 justify-center flex-wrap px-4">
        <span className="text-xs text-stone-400 mr-2 self-center">Guests from 50+ countries including:</span>
        {COUNTRIES.map((f, i) => (
          <span key={i} className="text-xl hover:scale-125 transition-transform cursor-default" title={`Guest from ${f}`}>{f}</span>
        ))}
        <span className="text-stone-400 text-sm self-center">and many more...</span>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
