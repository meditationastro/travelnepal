import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Star, Clock, Users, MapPin } from 'lucide-react';
import { Price } from '@/components/ui/Price';

export const metadata: Metadata = {
  title: 'Spiritual Retreat in Nepal 2025 | Himalayan Meditation & Yoga | Himalaya Retreat Nepal',
  description: 'Best spiritual retreat in Nepal 2025. Meditation, yoga, Vedic astrology, and Ayurveda retreats in the Himalayas at Khumaltar, Lalitpur. 3-day, 7-day & 14-day programs. Authentic lineage teachers.',
  keywords: [
    'spiritual retreat Nepal', 'spiritual retreat Nepal 2025', 'meditation retreat Nepal',
    'yoga retreat Nepal', 'Himalayan retreat Nepal', 'retreat center Nepal',
    'best spiritual retreat Nepal', 'Nepal meditation center', 'mindfulness retreat Nepal',
    'spiritual tour Nepal', 'retreat Kathmandu', 'retreat Lalitpur',
  ],
};

const programs = [
  {
    emoji: '🌅', title: '3-Day Mindfulness Retreat', slug: '3-day-mindfulness',
    duration: '3 Days', price: 450, earlyBird: 380,
    description: 'A weekend immersion — perfect for first-timers and busy professionals. Experience authentic Himalayan meditation, yoga, sound healing, and the sacred atmosphere of Nepal.',
    highlights: ['Sunrise meditation at 1,380m', 'Hatha yoga twice daily', 'Sound bath ceremony', 'Ayurvedic meals', 'Sacred site visit'],
    level: 'All levels', maxGuests: 15,
  },
  {
    emoji: '⭐', title: '7-Day Meditation & Astrology', slug: '7-day-meditation-astrology',
    duration: '7 Days', price: 1200, earlyBird: 980,
    description: 'Our signature spiritual retreat combining deep meditation with Vedic astrology — discover your cosmic blueprint while transforming your inner world in the Himalayas.',
    highlights: ['Daily meditation & yoga', 'Personal Vedic birth chart', 'Karma exploration session', 'Himalayan fire ceremony', 'Airport transfers', 'PDF astrology report'],
    level: 'All levels', maxGuests: 12,
    featured: true,
  },
  {
    emoji: '🏔️', title: '14-Day Himalayan Awakening', slug: '14-day-himalayan-awakening',
    duration: '14 Days', price: 2800, earlyBird: 2400,
    description: 'The complete spiritual immersion for serious seekers. Two weeks of intensive practice, deep silence, Vedic wisdom, sacred treks, and profound transformation.',
    highlights: ['7 days partial silence', 'Full astrology package', 'Past life reading', 'Sacred site pilgrimage', 'Daily 1:1 guidance', 'Post-retreat support'],
    level: 'Some experience', maxGuests: 8,
  },
];

const included = [
  { icon: '🏠', label: 'Accommodation', desc: 'Clean, comfortable rooms in peaceful setting' },
  { icon: '🍃', label: 'Ayurvedic Meals', desc: '3 nutritious vegetarian meals daily' },
  { icon: '🧘', label: 'Daily Yoga', desc: 'Morning hatha, evening pranayama & nidra' },
  { icon: '🔮', label: 'Astrology Session', desc: 'Personal reading (7-day & 14-day programs)' },
  { icon: '🌊', label: 'Sound Healing', desc: 'Tibetan singing bowl ceremonies' },
  { icon: '🔥', label: 'Fire Ceremony', desc: 'Traditional Vedic havan ritual' },
  { icon: '📚', label: 'Daily Teachings', desc: 'Philosophy, dharma, and practical wisdom' },
  { icon: '🌍', label: 'Airport Transfer', desc: 'Pickup & drop-off (7-day & 14-day)' },
];

const testimonials = [
  { name: 'Sarah M.', country: '🇺🇸 USA', program: '7-Day Meditation & Astrology', text: 'This was the most transformative week of my life. Nepal has a different energy — I could feel it from the moment I landed. The astrology reading alone was worth the entire trip.', rating: 5 },
  { name: 'Lars B.', country: '🇩🇪 Germany', program: '14-Day Himalayan Awakening', text: 'I\'ve done retreats in India, Bali, and Thailand. Nepal is different. More raw, more ancient, more real. The 14-day program broke me open and rebuilt me. I come back every year.', rating: 5 },
  { name: 'Aiko T.', country: '🇯🇵 Japan', program: '3-Day Mindfulness Retreat', text: 'My first retreat ever. I was nervous. The team made me feel completely at ease. Three days and I felt like I\'d been here a month. Already planning to return for 7 days.', rating: 5 },
];

const faqs = [
  { q: 'Do I need meditation experience?', a: 'No — all our retreats are designed to be accessible to complete beginners while offering depth for experienced practitioners. Your teacher will adapt guidance to your level.' },
  { q: 'Is Nepal safe for spiritual retreats?', a: 'Absolutely. Nepal is one of the safest countries in Asia, with a deeply spiritual culture that has welcomed pilgrims for millennia. Lalitpur is a quiet, safe area south of Kathmandu.' },
  { q: 'What is the best time to do a retreat in Nepal?', a: 'October–December and February–May are the best months — clear skies, mild temperatures, and spectacular mountain views. Monsoon season (June–September) is quieter and lush, still beautiful for retreat.' },
  { q: 'Are single rooms available?', a: 'Yes. We offer shared rooms, private rooms, and deluxe suites. Private rooms have an additional surcharge which you can select during booking.' },
  { q: 'What is the altitude and will I get altitude sickness?', a: 'Khumaltar is at approximately 1,380m — well below the threshold where altitude sickness becomes a concern (typically above 2,500m). Most guests experience no altitude effects.' },
  { q: 'Do I need a Nepal visa?', a: 'Most nationalities can obtain a visa on arrival at Tribhuvan International Airport. Costs are typically $30–$50 USD depending on duration. We provide a full pre-arrival guide including visa information.' },
];

export default function SpiritualRetreatNepalPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #1a0a00 50%, #0f1a10 100%)' }} />
        <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 25% 60%, #C5A253 0%, transparent 45%), radial-gradient(circle at 75% 30%, #4a7e50 0%, transparent 45%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.15)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.3)' }}>
            📍 Khumaltar, Lalitpur, Nepal · Est. 2009
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-6 leading-tight">
            Spiritual Retreat
            <span className="block italic" style={{ color: '#C5A253' }}>in Nepal</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Authentic meditation, yoga, and Vedic astrology retreats in the sacred Kathmandu Valley. 
            Lineage-trained teachers, Ayurvedic meals, and 15+ years of transforming lives from all over the world.
          </p>
          <div className="flex items-center justify-center gap-1 mb-10">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-current" style={{ color: '#C5A253' }} />)}
            <span className="text-stone-300 ml-2">4.9/5 from 300+ retreat guests</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/retreats" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              View All Programs
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I am interested in a spiritual retreat in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
              💬 WhatsApp Us
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-stone-400 text-sm">
            <span>✓ All meals included</span>
            <span>✓ Airport transfer</span>
            <span>✓ Lineage teachers</span>
            <span>✓ Small groups (max 15)</span>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '15+', label: 'Years of Practice' },
            { num: '2,000+', label: 'Guests Transformed' },
            { num: '50+', label: 'Countries Represented' },
            { num: '4.9★', label: 'Average Review' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
              <div className="font-display text-3xl font-bold mb-1" style={{ color: '#C5A253' }}>{s.num}</div>
              <div className="text-sm text-stone-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Nepal */}
      <section className="py-12 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6 text-center">Why Retreat in Nepal?</h2>
          <div className="prose prose-stone max-w-none text-stone-600 text-lg leading-relaxed space-y-4 mb-10">
            <p>
              Nepal is not just a destination — it's one of the most spiritually charged places on Earth. 
              Home to the birthplace of the Buddha (Lumbini), ancient Shaivite temples older than 2,500 years, 
              and the sacred Himalayan peaks that sages have meditated beneath for millennia, Nepal holds a spiritual 
              power that practitioners from every tradition describe as palpable and immediate.
            </p>
            <p>
              Practicing meditation in the Kathmandu Valley — at 1,380m altitude, surrounded by ancient stupas, 
              Vedic chanting, and the silence of the mountains — catalyzes transformation in ways that retreat centers 
              in other locations simply cannot replicate. The energy here has been cultivated over thousands of years 
              of continuous spiritual practice.
            </p>
            <p>
              Our center in Khumaltar, Lalitpur is 30 minutes from the airport, yet completely removed from urban 
              noise — the ideal combination of accessibility and genuine peace for a spiritual retreat in Nepal.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '🏔️', title: 'Sacred Mountains', desc: 'The Himalayas are Earth\'s most powerful spiritual crucible — meditating here accelerates your practice.' },
              { icon: '🕉️', title: '5,000 Years of Tradition', desc: 'Nepal has preserved unbroken lineages of Vedic, Buddhist, and Tantric wisdom that permeate every teaching here.' },
              { icon: '🌿', title: 'Pristine Environment', desc: 'Clean mountain air, organic Ayurvedic food, and natural silence create the perfect container for inner transformation.' },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Spiritual Retreat Programs 2025</h2>
          <p className="text-stone-500 text-center mb-12">Choose the depth of transformation that's right for you</p>
          <div className="space-y-8">
            {programs.map(p => (
              <div key={p.slug} className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${p.featured ? 'border-amber-300' : 'border-stone-100'}`}>
                {p.featured && (
                  <div className="px-8 py-2 text-center text-xs font-semibold text-white" style={{ background: 'linear-gradient(90deg, #C5A253, #E8891A)' }}>
                    ⭐ Most Popular Program · Best Value
                  </div>
                )}
                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="text-5xl">{p.emoji}</div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-display text-2xl font-semibold text-stone-900">{p.title}</h3>
                          <div className="flex items-center gap-3 mt-1 text-stone-500 text-sm">
                            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{p.duration}</span>
                            <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />Max {p.maxGuests}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />Lalitpur, Nepal</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-stone-400 text-sm line-through"><Price usd={p.price} /></div>
                          <div className="font-display text-3xl font-bold text-stone-900"><Price usd={p.earlyBird} /></div>
                          <div className="text-xs text-amber-600 font-medium">Early bird price</div>
                        </div>
                      </div>
                      <p className="text-stone-600 leading-relaxed mb-5">{p.description}</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-6">
                        {p.highlights.map(h => (
                          <div key={h} className="flex items-center gap-2 text-sm text-stone-600">
                            <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#C5A253' }} />
                            {h}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href={`/retreats/${p.slug}`} className="flex-1 text-center px-6 py-3 rounded-full font-semibold text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
                          View Details & Book
                        </Link>
                        <a href="https://wa.me/9779851187267?text=Namaste! I am interested in a spiritual retreat in Nepal." target="_blank" rel="noreferrer"
                          className="px-6 py-3 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 text-center transition-all" style={{ borderColor: '#C5A253' }}>
                          Ask on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Everything Included</h2>
          <p className="text-stone-500 text-center mb-12">No hidden costs. Everything you need for your spiritual retreat in Nepal.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {included.map(item => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="font-semibold text-stone-900 mb-1">{item.label}</div>
                <div className="text-stone-500 text-xs leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-white font-semibold mb-3 text-center">What Retreat Guests Say</h2>
          <p className="text-stone-400 text-center mb-12">Over 2,000 transformative experiences since 2009</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-3xl p-7" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(197,162,83,0.2)' }}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#C5A253' }} />)}
                </div>
                <p className="text-stone-300 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="font-semibold text-white text-sm">{t.name}</div>
                <div className="text-stone-400 text-xs">{t.country}</div>
                <div className="text-stone-500 text-xs mt-0.5">{t.program}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">FAQ — Spiritual Retreat in Nepal</h2>
          <p className="text-stone-500 text-center mb-10">Answers to the most common questions from retreat seekers</p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-3">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center" style={{ background: '#f5f0e8' }}>
        <div className="text-5xl mb-5">🙏</div>
        <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Begin Your Spiritual Journey in Nepal</h2>
        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">
          Join us in the Himalayas. Whether you choose 3 days or 14, your transformation begins the moment you decide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retreats" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Browse All Retreats
          </Link>
          <a href="https://wa.me/9779851187267?text=Namaste! I want to plan a spiritual retreat in Nepal." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
            WhatsApp to Plan
          </a>
        </div>
        <p className="text-stone-400 text-sm mt-8">📍 Khumaltar, Lalitpur, Nepal · +977 9851187267 · Open daily 6am–8pm</p>
      </section>
    </div>
  );
}
