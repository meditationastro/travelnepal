'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const reasons = [
  { icon:'🏔️', title:'Sacred Geography', description:'The Himalayas carry thousands of years of spiritual energy. Meditating at altitude opens dimensions of awareness inaccessible elsewhere.' },
  { icon:'🧘', title:'Living Lineage', description:'Our teachers carry unbroken traditions from master to student. Ancient wisdom transmitted directly, not from books.' },
  { icon:'🔮', title:'Vedic Science', description:"Jyotish — Vedic astrology — is one of humanity's oldest sciences. Combined with meditation, it becomes a tool for genuine self-knowledge." },
  { icon:'🌿', title:'Ayurvedic Nourishment', description:'Every meal is crafted according to Ayurvedic principles to support your constitution and deepen your practice.' },
  { icon:'🌅', title:'Brahma Muhurta Practice', description:'The sacred window 90 minutes before sunrise — practiced daily — is considered the most powerful time for meditation.' },
  { icon:'🤝', title:'Small Groups Only', description:'We limit our groups to 8–15 people to ensure personal attention and genuine community — not a meditation factory.' },
];

const photos = [
  { src:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', alt:'Himalayan peaks at dawn', label:'2,400m Altitude' },
  { src:'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80', alt:'Yoga at sunrise Nepal', label:'Daily Yoga' },
  { src:'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&q=80', alt:'Tibetan singing bowls', label:'Sound Healing' },
  { src:'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800&q=80', alt:'Himalayan herbs Ayurveda', label:'Himalayan Herbs' },
];

const includes = [
  '3 Ayurvedic meals daily', 'Accommodation (shared or private)', 'Daily yoga & pranayama',
  'Guided meditation sessions', 'Sound healing ceremony', 'Vedic fire ritual (Havan)',
  'Nature walks & sacred site visits', 'Airport transfer (7+ day programs)',
];

export function WhyHimalayas() {
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <section className="py-24 relative" style={{ background: '#f9f5ee' }}>
      {/* Subtle mandala bg */}
      <div className="absolute inset-0 opacity-30 mandala-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm tracking-[0.3em] uppercase font-medium mb-3" style={{ color: '#C5A253' }}>— Why Himalya Retreat Nepal —</div>
          <h2 className="font-display text-5xl md:text-6xl text-stone-900 font-semibold mb-4">
            The Himalayan<br/><span className="italic" style={{ color: '#4a7e50' }}>difference.</span>
          </h2>
          <p className="text-stone-600 text-xl max-w-2xl mx-auto">Not all retreats are equal. What happens in the sacred mountains of Nepal is fundamentally different from a hotel spa weekend.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left — Photo gallery */}
          <div className="space-y-4">
            <div className="relative rounded-3xl overflow-hidden h-80 shadow-xl">
              {photos.map((p, i) => (
                <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === activePhoto ? 'opacity-100' : 'opacity-0'}`}>
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 text-white font-medium text-sm">{p.alt}</div>
                </div>
              ))}
              {/* Slide dots */}
              <div className="absolute bottom-4 right-4 flex gap-1.5">
                {photos.map((_, i) => (
                  <button key={i} onClick={() => setActivePhoto(i)} className={`w-2 h-2 rounded-full transition-all ${i === activePhoto ? 'w-6 bg-amber-400' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>

            {/* Thumbnail row */}
            <div className="grid grid-cols-4 gap-3">
              {photos.map((p, i) => (
                <button key={i} onClick={() => setActivePhoto(i)} className={`relative rounded-2xl overflow-hidden h-20 transition-all ${i === activePhoto ? 'ring-2 ring-amber-400 scale-105' : 'opacity-60 hover:opacity-80'}`}>
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end justify-center pb-1">
                    <span className="text-xs text-white font-medium bg-black/40 px-2 py-0.5 rounded-full">{p.label}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* What's included */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <h3 className="font-display text-lg font-semibold text-stone-900 mb-4">All Retreat Programs Include</h3>
              <div className="grid grid-cols-2 gap-2">
                {includes.map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-stone-600">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#4a7e50' }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Reasons grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 card-hover group">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform inline-block">{r.icon}</div>
                  <h3 className="font-display font-semibold text-stone-900 mb-2">{r.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="relative rounded-3xl overflow-hidden h-52">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80" alt="Annapurna range Nepal" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(39,66,43,0.85), rgba(26,10,0,0.7))' }} />
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <blockquote className="text-center">
                  <p className="text-white text-xl font-elegant italic leading-relaxed mb-3">"The best retreat I've attended in 12 years of practice. The Himalayan energy is real."</p>
                  <footer className="text-amber-300 text-sm font-medium">— Sarah M., UK · 14-Day Himalayan Awakening</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/retreats" className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-stone-900 shadow-xl hover:scale-105 transition-all text-lg" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Explore All Programs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
