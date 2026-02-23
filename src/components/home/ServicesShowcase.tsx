import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    category:'RETREAT',
    title:'Spiritual Retreat Programs',
    subtitle:'3 · 7 · 14 Day Immersions',
    desc:'Complete transformation packages — meditation, yoga, Vedic astrology, Ayurveda, sound healing, fire ceremony and sacred site visits in the heart of the Himalayas.',
    href:'/retreats',
    from:'$380',
    image:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    color:'rgba(197,162,83,0.15)',
    accent:'#C5A253',
    tags:['Accommodation','Meals','Yoga','Meditation','Astrology'],
  },
  {
    category:'ASTROLOGY',
    title:'Vedic Astrology',
    subtitle:'Jyotish · Birth Chart · Karma',
    desc:'3,000+ readings worldwide. Lineage-trained Jyotishi in Khumaltar analyzes your complete cosmic blueprint — planets, houses, 27 nakshatras, Dasha timing — in person or online.',
    href:'/vedic-astrology'
    ,bookingHref:'/vedic-astrology/booking',
    from:'$85',
    image:'https://images.unsplash.com/photo-1569474397359-bbbcb0fe3e50?w=800&q=80',
    color:'rgba(90,40,130,0.12)',
    accent:'#8B5CF6',
    tags:['Birth Chart','Karma Reading','Online Available','PDF Report'],
  },
  {
    category:'AYURVEDA',
    title:'Ayurvedic Healing',
    subtitle:'Dosha · Panchakarma · Herbs',
    desc:'BAMS-qualified Ayurvedic doctor using classical Himalayan herb formulations. Dosha assessment, full-body Abhyanga, Shirodhara, and complete 5-day Panchakarma.',
    href:'/ayurveda',
    from:'$45',
    image:'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800&q=80',
    color:'rgba(74,126,80,0.12)',
    accent:'#4a7e50',
    tags:['Dosha Assessment','Abhyanga','Shirodhara','Panchakarma'],
  },
  {
    category:'YOGA',
    title:'Himalayan Yoga',
    subtitle:'Hatha · Kundalini · Teacher Training',
    desc:'Daily classes at 2,400m altitude. Hatha, Kundalini, Yin Yoga and Yoga Nidra. 200-hour Yoga Alliance certified YTT — next batch: March 2025.',
    href:'/yoga',
    from:'$20',
    image:'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
    color:'rgba(196,102,58,0.1)',
    accent:'#C4663A',
    tags:['Hatha','Kundalini','Yin','200-hr YTT'],
  },
];

export function ServicesShowcase() {
  return (
    <section className="py-24 px-4" style={{ background: '#1c1917' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block text-xs tracking-[0.3em] uppercase font-medium mb-3" style={{ color: '#C5A253' }}>— All Services —</div>
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-4">Sacred Programs</h2>
          <p className="text-stone-400 text-lg max-w-xl mx-auto">Every path leads to the same inner summit. Choose the tradition that calls to you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              style={{ minHeight: i === 0 ? 360 : 280 }}
            >
              {/* Primary card link */}
              <Link href={s.href} className="absolute inset-0 z-[1]" aria-label={s.title} />

              {/* Background photo */}
              <div className="absolute inset-0">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/70" />
                <div className="absolute inset-0" style={{ background: s.color }} />
              </div>

              {/* Content */}
              <div className="relative z-[2] p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[11px] tracking-[0.28em] uppercase font-semibold"
                      style={{ color: s.accent }}
                    >
                      {s.category}
                    </span>
                    <span className="text-xs text-white/80">From {s.from}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-1 text-white/80">{s.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/75 max-w-xl">{s.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-[11px] font-medium text-white/90 border border-white/15 bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white/95 border border-white/15 bg-white/10"
                  >
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>

                  {('bookingHref' in s) && (s as any).bookingHref ? (
                    <Link
                      href={(s as any).bookingHref}
                      className="relative z-[3] inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
                    >
                      Book now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/20 hover:bg-white/10 transition-all">
            Not sure which to choose? Talk to us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
