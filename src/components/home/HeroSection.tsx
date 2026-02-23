'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('opacity-100'), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(26,10,0,0.7) 60%, rgba(26,10,0,0.95) 100%)' }} />
        {/* Stars overlay */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(1px 1px at 20% 30%, white, transparent), radial-gradient(1px 1px at 40% 70%, white, transparent), radial-gradient(1px 1px at 60% 20%, white, transparent), radial-gradient(1px 1px at 80% 50%, white, transparent), radial-gradient(1px 1px at 15% 60%, white, transparent), radial-gradient(1px 1px at 70% 80%, white, transparent)' }}
        />
      </div>

      {/* Om Symbol floating */}
      <div className="absolute top-1/4 right-1/4 text-8xl opacity-5 animate-float font-display" style={{ color: '#C5A253' }}>
        ॐ
      </div>

      {/* Content */}
      <div
        ref={videoRef}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto opacity-0 transition-opacity duration-1000"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Currently accepting bookings for 2025
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white font-semibold leading-[0.95] mb-8">
          Awaken in the
          <span className="block italic gold-shimmer mt-2">Sacred Himalayas</span>
        </h1>

        <p className="text-white/70 text-xl md:text-2xl font-elegant italic max-w-2xl mx-auto mb-4 leading-relaxed">
          Where meditation meets the cosmos. Discover your path through ancient Vedic wisdom and transformative silence.
        </p>

        <p className="text-white/50 text-sm tracking-[0.3em] uppercase mb-12">
          Nepal · Pokhara Valley · Est. 2015
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/retreats"
            className="btn-gold px-10 py-4 rounded-full font-semibold text-white text-lg shadow-2xl"
          >
            Explore Retreats
          </Link>
          <Link
            href="/quiz"
            className="px-10 py-4 rounded-full font-medium text-white border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all text-lg backdrop-blur-sm"
          >
            Find Your Path ✨
          </Link>
        </div>

        {/* Upcoming dates strip */}
        <div className="flex flex-wrap justify-center gap-3">
          {['Jun 1 · 7-Day', 'Jul 1 · 3-Day', 'Aug 1 · 14-Day', 'Sep 1 · 7-Day'].map((date) => (
            <div key={date} className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/70 text-sm border border-white/10">
              🗓 {date}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#programs"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
