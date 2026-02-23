import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { Clock, Users, ArrowRight, CheckCircle, Star, Globe, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Spiritual Retreat Programs Nepal 2025 | Himalaya Retreat Nepal',
  description: 'Authentic 3-day, 7-day and 14-day spiritual retreat programs in Khumaltar, Lalitpur, Nepal. Meditation, yoga, Vedic astrology, Ayurveda, fire ceremony. Guests from 50+ countries.',
  keywords: ['retreat Nepal','spiritual retreat Nepal','meditation retreat Nepal','yoga retreat Nepal','Himalayan retreat 2025'],
};

async function getPrograms() {
  try {
    return await prisma.retreatProgram.findMany({
      where: { isActive: true },
      include: { dates: { where: { isActive: true, startDate: { gte: new Date() } }, orderBy: { startDate: 'asc' }, take: 5 } },
    });
  } catch { return []; }
}

const fallback = [
  {
    id:'1', slug:'3-day-mindfulness', title:'3-Day Mindfulness Retreat', duration:3, price:450, earlyBirdPrice:380, maxParticipants:15,
    imageUrl:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    includes:['Accommodation','All meals (Ayurvedic)','Guided meditations','Yoga sessions','Nature walks','Welcome ceremony'],
    highlights:['Sunrise meditation','Sound healing','Personal silence practice'], dates:[],
    badge:null, popular:false,
  },
  {
    id:'2', slug:'7-day-meditation-astrology', title:'7-Day Meditation & Astrology', duration:7, price:1200, earlyBirdPrice:980, maxParticipants:12,
    imageUrl:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    includes:['Accommodation','All meals','Daily meditation','Vedic birth chart reading','Astrology workshops','Airport transfer'],
    highlights:['Personal Vedic birth chart','Karma exploration','Fire ceremony','Integration coaching'], dates:[],
    badge:'Most Popular', popular:true,
  },
  {
    id:'3', slug:'14-day-himalayan-awakening', title:'14-Day Himalayan Awakening', duration:14, price:2800, earlyBirdPrice:2400, maxParticipants:8,
    imageUrl:'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800',
    includes:['Premium accommodation','All meals','Daily 1:1 guidance','Full astrology package','Silent days','Sacred site trek'],
    highlights:['7-day silent retreat','Full Jyotish reading','Past life exploration','Pilgrimage','Post-retreat support'], dates:[],
    badge:'Deep Immersion', popular:false,
  },
];

const internationalInfo = [
  { flag:'🇺🇸', lang:'English', note:'All programs fully in English. American, British, Australian teachers on team.' },
  { flag:'🇩🇪', lang:'Deutsch', note:'Deutschsprachige Betreuung möglich. Viele deutsche Gäste. Anmeldung auf Deutsch.' },
  { flag:'🇪🇸', lang:'Español', note:'Atención en español disponible. Materiales del retiro en español a petición.' },
  { flag:'🇮🇹', lang:'Italiano', note:'Supporto in italiano disponibile. Molti ospiti italiani ogni anno.' },
  { flag:'🇫🇷', lang:'Français', note:'Support en français disponible sur demande. Nombreux visiteurs francophones.' },
  { flag:'🇮🇳', lang:'हिन्दी', note:'हिन्दी में सहायता उपलब्ध। हमारे शिक्षक हिन्दी में भी मार्गदर्शन करते हैं।' },
];

const whyIncluded = [
  { icon:'🏠', label:'Accommodation', desc:'Clean, comfortable rooms with mountain views' },
  { icon:'🍃', label:'Ayurvedic Meals', desc:'3 daily meals, organic vegetarian Himalayan cuisine' },
  { icon:'🧘', label:'Daily Yoga', desc:'Morning Hatha, evening Pranayama and Yoga Nidra' },
  { icon:'🌊', label:'Sound Healing', desc:'Tibetan singing bowl ceremony' },
  { icon:'🔥', label:'Fire Ceremony', desc:'Traditional Vedic Havan ritual with mantras' },
  { icon:'📚', label:'Daily Teachings', desc:'Philosophy, dharma, and practical wisdom sessions' },
  { icon:'🌍', label:'Airport Transfer', desc:'Included in 7-day and 14-day programs' },
  { icon:'📋', label:'PDF Materials', desc:'Retreat manual, meditation techniques, herb guide' },
];

export default async function RetreatsPage() {
  const programs = await getPrograms();
  const display = programs.length > 0 ? programs : fallback;

  return (
    <div className="pt-20" style={{ background:'#fdf8f0' }}>
      {/* Header */}
      <div className="py-20 text-center relative overflow-hidden" style={{ background:'linear-gradient(135deg, #1c1917 0%, #1a0a00 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:'radial-gradient(circle at 30% 60%, #C5A253 0%, transparent 45%), radial-gradient(circle at 75% 25%, #4a7e50 0%, transparent 45%)' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background:'rgba(197,162,83,0.15)', color:'#C5A253', border:'1px solid rgba(197,162,83,0.3)' }}>
            📍 Khumaltar, Lalitpur, Nepal · Est. 2009
          </div>
          <div className="text-5xl mb-6">🏔️</div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-4">
            Spiritual Retreat Programs
          </h1>
          <p className="text-stone-400 text-xl max-w-xl mx-auto mb-6">
            Choose the depth of your transformation. Every path leads to the same summit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-stone-400 text-sm">
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> 50+ countries</span>
            <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> 2,000+ guests</span>
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4" fill="#C5A253" style={{ color:'#C5A253' }} /> 4.9 rating</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> 1,380m altitude</span>
          </div>
        </div>
      </div>

      {/* International strip */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {internationalInfo.map(i=>(
              <div key={i.lang} className="flex items-center gap-2 text-sm text-stone-600">
                <span className="text-xl">{i.flag}</span>
                <span className="font-medium">{i.lang}</span>
              </div>
            ))}
            <span className="text-stone-400 text-xs ml-2">— multilingual support available</span>
          </div>
        </div>
      </div>

      {/* Programs */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        {display.map((program: any, i: number) => (
          <div key={program.id} className={`bg-white rounded-3xl overflow-hidden shadow-sm border ${program.popular || program.badge === 'Most Popular' ? 'border-2 border-amber-300 shadow-amber-100' : 'border-stone-100'}`}>
            {(program.popular || program.badge) && (
              <div className="px-8 py-2 text-center text-xs font-bold text-white" style={{ background:'linear-gradient(90deg, #C5A253, #E8891A)' }}>
                ⭐ {program.badge || 'Featured'}
              </div>
            )}
            <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`relative h-72 lg:h-auto min-h-[320px] ${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage:`url(${program.imageUrl})` }} />
                <div className="absolute inset-0 flex items-end p-6" style={{ background:'linear-gradient(to top, rgba(0,0,0,0.7), transparent)' }}>
                  <div className="flex items-center gap-3 text-white">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-black/30 backdrop-blur-sm">
                      <Clock className="w-4 h-4" /> {program.duration} Days
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-black/30 backdrop-blur-sm">
                      <Users className="w-4 h-4" /> Max {program.maxParticipants}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-black/30 backdrop-blur-sm">
                      <MapPin className="w-4 h-4" /> Lalitpur, Nepal
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`p-8 lg:p-10 flex flex-col justify-center ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                {program.earlyBirdPrice && (
                  <div className="inline-flex mb-3 px-3 py-1 rounded-full text-xs font-semibold text-white w-fit" style={{ background:'#E8891A' }}>
                    Early Bird Available — Save ${program.price - program.earlyBirdPrice}
                  </div>
                )}
                <h2 className="font-display text-2xl md:text-3xl font-semibold text-stone-900 mb-3">{program.title}</h2>
                <p className="text-stone-600 leading-relaxed mb-5">{program.description || `A transformative ${program.duration}-day journey in the Himalayan sacred landscape of Nepal.`}</p>

                {/* Includes */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {(program.includes || []).slice(0, 6).map((item: string) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-stone-600">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color:'#4a7e50' }} />
                      {item}
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                {program.highlights && program.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.highlights.map((h: string) => (
                      <span key={h} className="px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-100">{h}</span>
                    ))}
                  </div>
                )}

                {/* Pricing */}
                <div className="flex items-end gap-4 mb-6">
                  <div>
                    {program.earlyBirdPrice && <div className="text-stone-400 text-sm line-through">${program.price}</div>}
                    <div className="text-3xl font-display font-semibold text-stone-900">${program.earlyBirdPrice || program.price}</div>
                    <div className="text-stone-400 text-sm">per person · all inclusive</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/retreats/${program.slug}`} className="btn-gold flex-1 px-6 py-3 rounded-xl font-semibold text-white text-center hover:opacity-90 transition-all" style={{ background:'linear-gradient(135deg, #C5A253, #E8891A)' }}>
                    View Details & Book
                  </Link>
                  <a href={`https://wa.me/9779851187267?text=Namaste! I am interested in the ${program.title} retreat.`} target="_blank" rel="noreferrer"
                    className="px-4 py-3 rounded-xl font-semibold text-white text-center text-sm hover:opacity-90 transition-all" style={{ background:'#25D366' }}>
                    💬 WhatsApp
                  </a>
                  <Link href="/calendar" className="px-4 py-3 rounded-xl border border-stone-200 text-stone-600 hover:border-stone-300 transition-colors text-sm font-medium text-center">
                    See Dates
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* What's included */}
      <div className="py-16 px-4" style={{ background:'#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Everything Included</h2>
          <p className="text-stone-500 text-center mb-10">No hidden costs. Everything you need for your retreat in Nepal.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {whyIncluded.map(w=>(
              <div key={w.label} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 text-center">
                <div className="text-3xl mb-3">{w.icon}</div>
                <div className="font-semibold text-stone-900 mb-1 text-sm">{w.label}</div>
                <div className="text-stone-400 text-xs">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* International support */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">International Guest Support</h2>
          <p className="text-stone-500 text-center mb-10">We welcome guests from 50+ countries and provide multilingual assistance</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {internationalInfo.map(l=>(
              <div key={l.lang} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{l.flag}</span>
                  <span className="font-display font-semibold text-stone-900">{l.lang}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Private + CTA */}
      <div className="max-w-5xl mx-auto px-4 pb-16">
        <div className="rounded-3xl p-10 text-center" style={{ background:'linear-gradient(135deg, #27422b, #1c1917)' }}>
          <div className="text-4xl mb-4">🌟</div>
          <h2 className="font-display text-3xl text-white font-semibold mb-3">Private & Corporate Retreats</h2>
          <p className="text-stone-300 max-w-xl mx-auto mb-8">Bespoke retreats for individuals, couples, families, or teams. Fully customized to your needs, goals, and schedule. Available in English, Hindi, German, Spanish, Italian.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90 transition-all" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Inquire Now
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I am interested in a private or group retreat in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-white text-center" style={{ background:'#25D366' }}>
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
