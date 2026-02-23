'use client';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 2000, suffix: '+', label: 'Lives Transformed', icon: '🙏', desc: 'Guests since 2009' },
  { value: 15, suffix: '+', label: 'Years in the Himalayas', icon: '🏔️', desc: 'Est. 2009, Lalitpur Nepal' },
  { value: 4.9, suffix: '★', label: 'Average Rating', icon: '⭐', desc: 'From 400+ reviews' },
  { value: 50, suffix: '+', label: 'Countries', icon: '🌍', desc: 'International guests' },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const isDecimal = target % 1 !== 0;
        const start = Date.now();
        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = isDecimal ? +(eased * target).toFixed(1) : Math.round(eased * target);
          setCount(current);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: '#1c1917' }}>
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(197,162,83,0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(74,126,80,0.1), transparent 60%)' }} />
      {/* Top/bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(197,162,83,0.3), transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(197,162,83,0.3), transparent)' }} />

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
              <div className="font-display text-3xl md:text-4xl font-semibold mb-1.5" style={{ color: '#C5A253' }}>
                <CountUp target={s.value} suffix={s.suffix} duration={1800 + i * 200} />
              </div>
              <div className="text-white font-medium text-sm mb-1">{s.label}</div>
              <div className="text-stone-500 text-xs">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-10 pt-8 border-t border-stone-800 flex flex-wrap justify-center gap-6 text-stone-500 text-xs">
          {[
            '✓ Yoga Alliance RYS-200 Certified',
            '✓ Online & in-person sessions',
            '✓ 50+ countries served',
            '✓ Response within 2 hours',
            '✓ Secure payment',
          ].map(item => (
            <span key={item} className="hover:text-amber-400 transition-colors">{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
