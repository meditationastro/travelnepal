import Link from 'next/link';
import { CheckCircle, X } from 'lucide-react';
import { Price } from '@/components/ui/Price';

export const metadata = { title: 'Pricing — Himalya Retreat Nepal', description: 'Transparent pricing for all meditation retreats, astrology readings, Ayurveda treatments and shop products at Himalya Retreat Nepal.' };

const retreats = [
  { name: '3-Day Mindfulness Retreat', price: 450, earlyBird: 380, duration: '3 days / 2 nights', includes: ['Shared accommodation','All Ayurvedic meals','3 daily meditation sessions','Morning yoga & pranayama','Welcome & closing ceremony','Nature walk'], slug: '3-day-mindfulness' },
  { name: '7-Day Meditation & Astrology', price: 1200, earlyBird: 980, duration: '7 days / 6 nights', includes: ['Private room accommodation','All Ayurvedic meals','Daily meditation & yoga','Personal Vedic birth chart reading','Astrology workshops','60-min individual guidance','Airport transfer','Retreat journal'], slug: '7-day-meditation-astrology', featured: true },
  { name: '14-Day Himalayan Awakening', price: 2800, earlyBird: 2400, duration: '14 days / 13 nights', includes: ['Premium deluxe suite','All meals & snacks','Daily 1-to-1 guidance sessions','Complete astrology package','7 days silent Vipassana','Sacred site pilgrimage trek','Visa & logistics support','3-month post-retreat coaching calls'], slug: '14-day-himalayan-awakening' },
];

const astrology = [
  { name: 'Vedic Birth Chart Reading', price: 120, duration: '90 min', online: true },
  { name: 'Karma & Past Life Reading', price: 150, duration: '2 hrs', online: true },
  { name: 'Relationship Compatibility', price: 130, duration: '90 min', online: true },
  { name: 'Career & Dharma Guidance', price: 110, duration: '60 min', online: true },
  { name: 'Astrology + Meditation Integration', price: 200, duration: '2.5 hrs', online: true },
  { name: 'Online Video Consultation', price: 85, duration: '60 min', online: true },
];

const ayurveda = [
  { name: 'Dosha Assessment', price: 60, duration: '60 min' },
  { name: 'Abhyanga Full Body Massage', price: 90, duration: '75 min' },
  { name: 'Shirodhara Oil Stream', price: 110, duration: '90 min' },
  { name: 'Panchakarma 5-Day Detox', price: 850, duration: '5 days' },
  { name: 'Herbal Steam (Svedana)', price: 45, duration: '45 min' },
  { name: 'Diet & Nutrition Counseling', price: 75, duration: '90 min' },
];

const meditation = [
  { name: 'Pranayama & Breath Awareness', price: 45, duration: '60 min' },
  { name: 'Vipassana Insight Meditation', price: 60, duration: '90 min' },
  { name: 'Tibetan Buddhist Meditation', price: 75, duration: '90 min' },
  { name: 'Kundalini Awakening', price: 65, duration: '75 min' },
  { name: 'Loving-Kindness (Metta)', price: 40, duration: '60 min' },
  { name: 'Yoga Nidra', price: 35, duration: '45 min' },
];

export default function PricingPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #2d1a00)' }}>
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">No Hidden Fees</p>
        <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5">Transparent Pricing</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto">All prices in USD. Payment plans and early bird discounts available. Contact us via WhatsApp for custom group packages.</p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Retreats */}
        <section>
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-2 text-center">🏔️ Retreat Programs</h2>
          <p className="text-stone-500 text-center mb-10">All-inclusive. Early bird prices apply when booked 60+ days in advance.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {retreats.map(r => (
              <div key={r.name} className={`rounded-3xl overflow-hidden border transition-all hover:shadow-lg ${r.featured ? 'border-amber-400 shadow-md' : 'border-stone-200 bg-white'}`}>
                {r.featured && <div className="py-2 text-center text-xs font-bold text-stone-900 tracking-wider uppercase" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>Most Popular</div>}
                <div className={`p-7 ${r.featured ? 'bg-stone-900 text-white' : 'bg-white'}`}>
                  <div className={`text-sm font-medium mb-1 ${r.featured?'text-stone-400':'text-stone-400'}`}>{r.duration}</div>
                  <h3 className={`font-display text-xl font-semibold mb-4 leading-snug ${r.featured?'text-white':'text-stone-900'}`}>{r.name}</h3>
                  {r.earlyBird && <div className={`text-sm mb-1 line-through ${r.featured?'text-stone-500':'text-stone-400'}`}><Price usd={r.price} /> regular price</div>}
                  <div className="mb-2">
                    <span className="text-4xl font-bold" style={{ color: '#C5A253' }}><Price usd={r.earlyBird || r.price} /></span>
                    <span className={`text-sm ml-1 ${r.featured?'text-stone-400':'text-stone-400'}`}>per person</span>
                  </div>
                  {r.earlyBird && <div className="text-xs text-green-400 font-semibold mb-6">Early bird — save <Price usd={r.price - r.earlyBird} /></div>}
                  <ul className="space-y-2 mt-4">
                    {r.includes.map(item => (
                      <li key={item} className={`flex items-start gap-2 text-sm ${r.featured?'text-stone-300':'text-stone-600'}`}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#4a7e50' }} />{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`p-5 pt-0 ${r.featured?'bg-stone-900':'bg-white'}`}>
                  <Link href={`/retreats/${r.slug}`} className="block w-full py-3.5 rounded-2xl text-center font-semibold text-sm hover:opacity-90 transition-all"
                    style={r.featured?{background:'linear-gradient(135deg,#C5A253,#E8C870)',color:'#1c1917'}:{background:'#1c1917',color:'white'}}>
                    Book This Retreat
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-400 text-sm mt-6">
            Private room upgrade: +<Price usd={150} />/night · Deluxe suite: +<Price usd={350} />/night · Airport pickup: +<Price usd={25} />
          </p>
        </section>

        {/* Price tables */}
        <div className="grid md:grid-cols-2 gap-10">
          {[{ title: '⭐ Astrology Readings', items: astrology, note: 'Online Zoom or in-person at retreat centre' },
            { title: '🌿 Ayurveda Treatments', items: ayurveda, note: 'In-person at our Lalitpur treatment centre' }].map(sec => (
            <section key={sec.title}>
              <h2 className="font-display text-2xl font-semibold text-stone-900 mb-2">{sec.title}</h2>
              <p className="text-stone-400 text-sm mb-6">{sec.note}</p>
              <div className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                {sec.items.map((item, i) => (
                  <div key={item.name} className={`flex items-center justify-between px-6 py-4 ${i < sec.items.length - 1 ? 'border-b border-stone-50' : ''} hover:bg-stone-50 transition-all`}>
                    <div>
                      <div className="font-medium text-stone-900 text-sm">{item.name}</div>
                      <div className="text-stone-400 text-xs">{item.duration}</div>
                    </div>
                    <div className="font-bold" style={{ color: '#C5A253' }}>${item.price}</div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Meditation sessions */}
        <section>
          <h2 className="font-display text-2xl font-semibold text-stone-900 mb-2">🧘 Individual Meditation Sessions</h2>
          <p className="text-stone-400 text-sm mb-6">Book a single session with any of our teachers. Group rates available.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {meditation.map(item => (
              <div key={item.name} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 hover:shadow-md transition-all">
                <div className="font-semibold text-stone-900 mb-1">{item.name}</div>
                <div className="text-stone-400 text-xs mb-3">{item.duration}</div>
                <div className="text-2xl font-bold" style={{ color: '#C5A253' }}>${item.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ strip */}
        <section className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
          <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6 text-center">Pricing FAQ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[['What is included in retreat prices?', 'Accommodation, all Ayurvedic vegetarian meals, daily group sessions, and listed add-ons. Flights and visa not included.'],
              ['Is there a deposit required?', 'Yes — a 30% deposit secures your spot. The balance is due 30 days before your arrival date.'],
              ['Do you offer group discounts?', 'Yes! Groups of 4+ receive 10% off. Groups of 8+ receive 15% off. Contact us for corporate or yoga school rates.'],
              ['What is your cancellation policy?', '100% refund if cancelled 60+ days before. 50% refund 30–59 days before. No refund within 30 days (but credit toward future dates).'],
              ['Can I pay in installments?', 'Yes. We offer flexible payment plans. Speak with us on WhatsApp and we\'ll arrange something that works for you.'],
              ['Are prices the same online vs WhatsApp?', 'Yes. We never charge more via WhatsApp. In fact, we sometimes offer exclusive deals to WhatsApp enquiries.'],
            ].map(([q, a]) => (
              <div key={q}>
                <div className="font-semibold text-stone-900 text-sm mb-1.5">{q}</div>
                <div className="text-stone-500 text-sm leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <h3 className="font-display text-2xl font-semibold text-stone-900 mb-4">Need a custom package?</h3>
          <p className="text-stone-500 mb-6">We create bespoke retreats for couples, families, yoga groups, and corporate wellness teams.</p>
          <a href="https://wa.me/9779851187267?text=Namaste! I'd like to enquire about custom/group pricing." target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white hover:opacity-90 transition-all" style={{ background: '#25D366' }}>
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
