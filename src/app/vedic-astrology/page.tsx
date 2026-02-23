import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Clock, Star, Phone, Globe, BookOpen, Sparkles } from 'lucide-react';
import { Price } from '@/components/ui/Price';
import VedicChartTool from '@/components/vedic/VedicChartTool';
import VedicToolsMenu from '@/components/vedic/VedicToolsMenu';
import ConsultationBookingForm from '@/components/forms/ConsultationBookingForm';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Vedic Astrology Reading Nepal | Jyotish Expert Lalitpur | Himalaya Retreat Nepal',
  description: 'Authentic Vedic astrology (Jyotish) readings in Nepal. Birth chart, karma, compatibility, career guidance by lineage-trained Jyotishi in Khumaltar, Lalitpur. Online worldwide.',
  keywords: ['Vedic astrology reading Nepal','Jyotish reading Nepal','astrology Lalitpur','birth chart Nepal','karma reading Nepal','online astrology Nepal','Vedic astrologer Kathmandu','astrology retreat Nepal'],
};

const services = [
  { icon:'♈', title:'Vedic Birth Chart',      price:120, duration:'90 min', href:'/astrology/birth-chart',    badge:null,       desc:'Full natal chart — planets, houses, nakshatras, Dasha timeline, remedies.' },
  { icon:'☸',  title:'Karma & Past Life',      price:150, duration:'2 hrs',  href:'/astrology/karma-reading',  badge:'Popular',  desc:'Rahu/Ketu analysis, past-life patterns, soul purpose, karmic remedies.' },
  { icon:'♡',  title:'Compatibility Reading',  price:130, duration:'90 min', href:'/astrology/compatibility',  badge:null,       desc:'Composite chart for couples, family, business partners.' },
  { icon:'♃',  title:'Career & Dharma',        price:110, duration:'60 min', href:'/astrology/career',         badge:null,       desc:'Timing, vocational houses, and planetary periods for career decisions.' },
  { icon:'🌙', title:'Astrology + Meditation', price:200, duration:'2.5 hrs',href:'/astrology/online',         badge:'Unique',   desc:'Personal chart + guided planetary meditation practice tailored to your chart.' },
  { icon:'📱', title:'Online Consultation',    price:85,  duration:'60 min', href:'/astrology/online',         badge:null,       desc:'Full Jyotish session via Zoom or WhatsApp, worldwide.' },
];

const planets = [
  { name:'Surya', en:'Sun', symbol:'☀️', rules:'Soul, vitality, father, authority, ego identity' },
  { name:'Chandra', en:'Moon', symbol:'🌙', rules:'Mind, emotions, mother, instincts, memory' },
  { name:'Mangala', en:'Mars', symbol:'🔴', rules:'Energy, courage, siblings, land, surgery' },
  { name:'Budha', en:'Mercury', symbol:'💚', rules:'Intelligence, communication, trade, skin' },
  { name:'Guru', en:'Jupiter', symbol:'🟡', rules:'Wisdom, dharma, children, wealth, expansion' },
  { name:'Shukra', en:'Venus', symbol:'⚪', rules:'Beauty, love, marriage, arts, luxury' },
  { name:'Shani', en:'Saturn', symbol:'🔵', rules:'Karma, discipline, delay, longevity, lessons' },
  { name:'Rahu', en:'North Node', symbol:'⬛', rules:'Karmic obsession, foreign, illusion, amplification' },
  { name:'Ketu', en:'South Node', symbol:'🔲', rules:'Past life, liberation, moksha, detachment' },
];

const houses = [
  { num:'1st', name:'Lagna (Ascendant)', rules:'Self, body, personality, life direction' },
  { num:'2nd', name:'Dhana Bhava', rules:'Wealth, speech, family, accumulated resources' },
  { num:'4th', name:'Sukha Bhava', rules:'Home, mother, happiness, education, vehicles' },
  { num:'5th', name:'Putra Bhava', rules:'Children, creativity, intelligence, past-life merit' },
  { num:'7th', name:'Yuvati Bhava', rules:'Marriage, partnerships, business relationships' },
  { num:'9th', name:'Dharma Bhava', rules:'Luck, dharma, father, guru, higher wisdom' },
  { num:'10th', name:'Karma Bhava', rules:'Career, status, actions, government, reputation' },
  { num:'12th', name:'Moksha Bhava', rules:'Liberation, foreign lands, losses, hidden realms' },
];

const dashas = [
  { graha:'Ketu', years:7 }, { graha:'Venus', years:20 }, { graha:'Sun', years:6 },
  { graha:'Moon', years:10 }, { graha:'Mars', years:7 }, { graha:'Rahu', years:18 },
  { graha:'Jupiter', years:16 }, { graha:'Saturn', years:19 }, { graha:'Mercury', years:17 },
];

const testimonials = [
  { name:'Rachel M.', country:'🇬🇧 London, UK', text:'My reading with Pandit Krishnamurthy was the most accurate and insightful experience of my life. He described my childhood, career challenges, and relationship patterns with uncanny precision — without me saying a word.', rating:5 },
  { name:'Stefan V.', country:'🇩🇪 Berlin, Germany', text:'Ich war skeptisch, aber entschied mich für die Online-Lesung. Jetzt verstehe ich, warum Tausende die Reise nach Nepal machen. Die Karma-Lesung enthüllte Muster, in denen ich 15 Jahre feststeckte.', rating:5 },
  { name:'Ananya P.', country:'🇺🇸 California, USA', text:'My Vedic birth chart reading online was phenomenal. Completely different from Western astrology — so much more specific. The Dasha timing system predicted a major career change 3 months later.', rating:5 },
  { name:'Camille D.', country:'🇫🇷 Paris, France', text:'La lecture de compatibilité a transformé ma relation. Comprendre nos planètes mutuelles et les nœuds karmiques a donné un sens profond à nos défis et forces.', rating:5 },
];

const faqs = [
  { q:'What info do I need for a reading?', a:'Your exact date, time, and place of birth. The more precise the time, the more accurate the reading. If uncertain, we offer birth-time rectification.' },
  { q:'How long is a session?', a:'60–150 minutes depending on the service. All sessions include a PDF report and 2-week follow-up Q&A.' },
  { q:'Can I book an online reading outside Nepal?', a:'Absolutely — we serve clients worldwide via Zoom and WhatsApp, accommodating most time zones. The energy of the chart is not affected by distance.' },
  { q:'What is a Karma & Past Life Reading?', a:'This specialized reading examines Rahu, Ketu, Saturn, and 12th-house combinations to reveal karmic patterns, unresolved lessons from past incarnations, and your soul\'s purpose in this lifetime.' },
  { q:'Do you offer remedies?', a:'Yes — gemstones, mantras, specific pujas, fasting schedules, charitable acts, and yantra practice. Always offered as suggestions, never obligations.' },
  { q:'Is Vedic astrology different from Western astrology?', a:'Yes. Jyotish uses the sidereal zodiac (actual star positions), 27 nakshatras, and the Vimshottari Dasha timing system, making it more astronomically precise and predictively powerful.' },
];

export default function VedicAstrologyPage() {
  return (
    <div className="min-h-screen" style={{ background:'#fdf8f0' }}>

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, #0a0516 0%, #1a0a00 60%, #0a1416 100%)' }} />
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage:'radial-gradient(circle at 20% 50%, #C5A253 0%, transparent 50%), radial-gradient(circle at 80% 20%, #4a0a5e 0%, transparent 40%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background:'rgba(197,162,83,0.15)', color:'#C5A253', border:'1px solid rgba(197,162,83,0.3)' }}>
            🔮 Expert Jyotish · Khumaltar, Lalitpur, Nepal · Est. 2009
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-6 leading-tight">
            Vedic Astrology<br/>
            <span className="italic" style={{ color:'#C5A253' }}>Jyotish Reading</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Authentic Jyotish readings by a lineage-trained Vedic astrologer in the sacred Kathmandu Valley.
            Discover your birth chart, karma, life purpose, and dharmic path — in person or online worldwide.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 text-sm mb-10">
            <span>✓ 3,000+ readings given</span><span>·</span>
            <span>✓ 50+ countries served</span><span>·</span>
            <span>✓ PDF report included</span><span>·</span>
            <span>✓ Session recorded</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/astrology/birth-chart" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book a Reading — From <Price usd={85} />
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book a Vedic astrology reading in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background:'#25D366' }}>
              💬 WhatsApp · Quick Booking
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center">
            <VedicToolsMenu
              items={[
                { label: '🧿 Birth Chart Generator', href: '#birth-chart-generator' },
                { label: '🪔 Puja & Navagraha Mantras', href: '#puja-navagraha' },
                { label: '📞 Book Consultation Form', href: '#consultation-form' },
              ]}
              placeholder="Tools & Sections"
            />
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
          </svg>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-8 px-4 border-b border-stone-200">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[{num:'3,000+',label:'Readings Given'},{num:'50+',label:'Countries Served'},{num:'28 yrs',label:'Practice'},{num:'4.9★',label:'Average Rating'}].map(s=>(
            <div key={s.label} className="p-4">
              <div className="font-display text-2xl font-bold mb-1" style={{ color:'#C5A253' }}>{s.num}</div>
              <div className="text-sm text-stone-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Birth Chart Tool */}
      <section id="birth-chart-generator" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🧿</div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3">Vedic Birth Chart Tool</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Generate a quick Jyotish preview (sidereal signs + Moon nakshatra) and get an instant mini-prediction.
              For deep accuracy, remedies, dashas, and personal guidance—book a full reading.
            </p>
          </div>
          <VedicChartTool />
        </div>
      </section>

      {/* What is Jyotish — SEO rich */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6 text-center">What is Vedic Astrology (Jyotish)?</h2>
          <div className="text-stone-600 text-lg leading-relaxed space-y-4 mb-10">
            <p>Vedic astrology — known in Sanskrit as <strong>Jyotish</strong> ("the science of light") — is a 5,000-year-old system of cosmic intelligence rooted in the ancient Vedas of India and Nepal. Unlike Western astrology, Jyotish uses the <em>sidereal zodiac</em> (actual star positions as observed from Earth), making it astronomically precise and uniquely predictive.</p>
            <p>A Vedic birth chart (kundali) maps the 9 grahas (planets), 12 bhavas (houses), and 27 nakshatras (lunar mansions) at the exact moment of your birth. This cosmic blueprint reveals personality, karma, relationships, health, vocation, and timing for key life events with extraordinary precision.</p>
            <p>Nepal has preserved unbroken Jyotish lineages for millennia. Our Jyotishi, Pandit Krishnamurthy, comes from a seven-generation lineage of South Indian Brahmins and holds an M.A. in Sanskrit and Astrology from Madras University. He has conducted over 3,000 individual readings for clients worldwide.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon:'🌟', title:'Sidereal Zodiac', desc:'Based on actual star positions — 23° offset from Western astrology — giving precise, astronomically accurate placements.' },
              { icon:'🌙', title:'27 Nakshatras', desc:'The 27 lunar mansions provide extraordinary psychological and spiritual depth beyond the 12 signs alone.' },
              { icon:'⏱️', title:'Dasha Timing System', desc:'Vimshottari Dasha divides your life into planetary periods, enabling precise prediction of life chapters and events.' },
            ].map(f=>(
              <div key={f.title} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4 pb-16" style={{ background:'#f5f0e8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Jyotish Reading Services</h2>
          <p className="text-stone-500 text-center mb-12">All sessions include PDF report, recording, and 2-week follow-up Q&A</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(s=>(
              <Link key={s.title} href={s.href} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col group relative">
                {s.badge && <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background:'#C5A253' }}>{s.badge}</div>}
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-stone-900 pr-2">{s.title}</h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold" style={{ color:'#C5A253' }}>${s.price}</div>
                    <div className="text-xs text-stone-400 flex items-center gap-0.5"><Clock className="w-3 h-3" />{s.duration}</div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color:'#C5A253' }}>
                  Book This <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book a Vedic astrology reading." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white text-center transition-all hover:opacity-90" style={{ background:'#25D366' }}>
              💬 Book on WhatsApp
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 text-center transition-all" style={{ borderColor:'#C5A253' }}>
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      {/* The 9 Planets */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">The 9 Grahas (Planets)</h2>
          <p className="text-stone-500 text-center mb-10">Each graha governs specific domains of life — their placement in your chart reveals your unique blueprint</p>
          <div className="grid grid-cols-3 md:grid-cols-9 gap-3">
            {planets.map(p=>(
              <div key={p.name} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 text-center">
                <div className="text-2xl mb-1">{p.symbol}</div>
                <div className="font-display text-xs font-semibold text-stone-900">{p.name}</div>
                <div className="text-xs text-stone-400 mt-0.5">{p.en}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {planets.slice(0,3).map(p=>(
              <div key={p.name} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{p.symbol}</span>
                  <div>
                    <div className="font-semibold text-stone-900">{p.name} ({p.en})</div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm">{p.rules}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-stone-500 text-sm mt-4">All 9 grahas are analyzed in your personal reading, with emphasis on the most influential planets for your life questions.</p>
        </div>
      </section>

      {/* The 12 Houses */}
      <section className="py-16 px-4" style={{ background:'#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Key Bhavas (Houses)</h2>
          <p className="text-stone-500 text-center mb-10">The 12 houses represent different domains of lived experience in your Vedic birth chart</p>
          <div className="grid md:grid-cols-2 gap-4">
            {houses.map(h=>(
              <div key={h.num} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 flex gap-4">
                <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center font-display font-bold text-white text-xs" style={{ background:'linear-gradient(135deg, #C5A253, #E8891A)' }}>{h.num}</div>
                <div>
                  <div className="font-semibold text-stone-900 mb-0.5">{h.name}</div>
                  <div className="text-stone-600 text-sm">{h.rules}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Life Wheel / Moksha */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-3">🧭</div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3">The Life Wheel in Jyotish</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Vedic astrology is not only about prediction — it’s a mirror of dharma (right living) and the deeper quest of life: <span className="font-semibold">moksha</span> (liberation).
              Your chart shows how to balance the four aims of life and transform challenges into wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { t: 'Dharma', e: '🪔', d: 'Purpose, ethics, and the path aligned with your inner truth.' },
              { t: 'Artha', e: '💼', d: 'Resources, livelihood, and building stability without losing soul.' },
              { t: 'Kama', e: '❤️', d: 'Love, creativity, joy — learning desire without attachment.' },
              { t: 'Moksha', e: '🕊️', d: 'Freedom, self-knowledge, and the end of suffering through realization.' },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl bg-white border border-stone-100 p-6 shadow-sm">
                <div className="text-3xl">{x.e}</div>
                <div className="mt-2 font-display text-xl font-semibold text-stone-900">{x.t}</div>
                <p className="mt-2 text-sm text-stone-600">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-stone-100 bg-stone-50 p-6">
              <h3 className="font-display text-2xl font-semibold text-stone-900">A true philosophy of transformation</h3>
              <p className="mt-2 text-stone-600">
                When your chart indicates pressure (Saturn lessons, Rahu craving, Mars heat), Jyotish offers practical remedies — mantra, charity, discipline, and right action.
                The aim is not to “fix fate” but to mature consciousness.
              </p>
              <div className="mt-4 space-y-2 text-sm text-stone-700">
                {[
                  'Understand your karmic patterns (why this keeps repeating).',
                  'Choose the right practice: mantra, meditation, service, and lifestyle.',
                  'Use timing (dasha / transit) to act wisely and avoid unnecessary struggle.',
                ].map((s) => (
                  <div key={s}>• {s}</div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-6" style={{ background: 'linear-gradient(135deg, rgba(197,162,83,0.18), rgba(0,0,0,0))', border: '1px solid rgba(197,162,83,0.25)' }}>
              <h3 className="font-display text-2xl font-semibold text-stone-900">Your next step</h3>
              <p className="mt-2 text-stone-700">Generate your birth chart, then book a full reading to map your life wheel: career, relationships, health, and the spiritual path toward moksha.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link href="#birth-chart" className="rounded-2xl px-6 py-3 text-sm font-semibold text-white text-center" style={{ background: 'linear-gradient(135deg, #1c1917, #7c2d12)' }}>
                  Try Birth Chart Tool
                </Link>
                <Link href="/vedic-astrology/booking" className="rounded-2xl px-6 py-3 text-sm font-semibold border border-stone-200 bg-white hover:bg-stone-50 text-center">
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dasha System */}
      <section className="py-16 px-4" style={{ background:'linear-gradient(135deg, #0a0516, #1a0a00)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-white font-semibold mb-3 text-center">The Vimshottari Dasha System</h2>
          <p className="text-stone-400 text-center mb-10 max-w-2xl mx-auto">Jyotish's most powerful predictive tool — a 120-year cycle of planetary periods governing different chapters of your life</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {dashas.map(d=>(
              <div key={d.graha} className="px-5 py-3 rounded-2xl text-center" style={{ background:'rgba(197,162,83,0.1)', border:'1px solid rgba(197,162,83,0.2)' }}>
                <div className="text-white font-semibold">{d.graha}</div>
                <div className="text-stone-400 text-xs">{d.years} years</div>
              </div>
            ))}
          </div>
          <p className="text-stone-300 text-center max-w-3xl mx-auto leading-relaxed">
            Your current Dasha period — and the sub-periods (antardasha) within it — explain why this chapter of your life feels the way it does, and what is coming next. Understanding your Dashas is the foundation of Jyotish forecasting.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/astrology/birth-chart" className="px-8 py-4 rounded-full font-semibold text-stone-900 hover:scale-105 transition-all text-center" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Discover Your Dasha Period
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to know about my Dasha period." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white text-center transition-all hover:opacity-90" style={{ background:'#25D366' }}>
              💬 Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Online worldwide */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-5 tracking-widest uppercase" style={{ background:'rgba(74,126,80,0.1)', color:'#4a7e50', border:'1px solid rgba(74,126,80,0.2)' }}>
              <Globe className="w-3.5 h-3.5" /> Available Worldwide
            </div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Online Jyotish Reading</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Can't visit Nepal? Pandit Krishnamurthy has conducted 1,500+ online readings for clients across the USA, UK, Australia, Germany, France, Italy, Spain, Japan, and beyond. The wisdom is identical; only the medium changes.
            </p>
            <div className="space-y-2 mb-8">
              {['Chart prepared before your session','HD video via Zoom or WhatsApp','Flexible scheduling (most time zones)','PDF report within 48 hours','2-week follow-up Q&A','Translation available on request'].map(item=>(
                <div key={item} className="flex items-center gap-3 text-stone-600">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color:'#C5A253' }} />
                  {item}
                </div>
              ))}
            </div>
            <div className="flex gap-3 flex-col sm:flex-row">
              <Link href="/astrology/online" className="px-6 py-3 rounded-full font-semibold text-stone-900 hover:scale-105 transition-all text-center" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                Book Online — <Price usd={85} />
              </Link>
              <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full font-semibold text-white text-center" style={{ background:'#25D366' }}>
                💬 WhatsApp Now
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{flag:'🇺🇸',c:'USA',n:'800+'},{flag:'🇬🇧',c:'UK',n:'400+'},{flag:'🇦🇺',c:'Australia',n:'300+'},{flag:'🇩🇪',c:'Germany',n:'200+'},{flag:'🇮🇳',c:'India',n:'400+'},{flag:'🇫🇷',c:'France',n:'150+'},{flag:'🇪🇸',c:'Spain',n:'120+'},{flag:'🇮🇹',c:'Italy',n:'100+'}].map(c=>(
              <div key={c.c} className="p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                <div className="text-2xl mb-1">{c.flag}</div>
                <div className="text-stone-900 text-sm font-medium">{c.c}</div>
                <div className="text-stone-400 text-xs">{c.n} readings</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" style={{ background:'#f5f0e8' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-3">What Clients Say</h2>
          <p className="text-stone-500 mb-10">In multiple languages, from clients around the world</p>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(t=>(
              <div key={t.name} className="bg-white rounded-3xl p-7 shadow-sm text-left">
                <div className="flex gap-0.5 mb-4">{Array.from({length:t.rating}).map((_,i)=><Star key={i} className="w-4 h-4 fill-current" style={{ color:'#C5A253' }} />)}</div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                <div className="text-stone-400 text-xs">{t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq,i)=>(
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-3">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja & Remedies */}
      <section id="puja-navagraha" className="py-16 px-4 bg-stone-50 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">🪔</div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3">Puja & Navagraha Mantras</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              In Jyotish, remedies (upāya) support clarity and balance. Below are simple Navagraha mantras you can chant daily.
              For personalized remedies (based on your chart + dasha), book a consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '☀️', graha: 'Surya (Sun)', mantra: 'Om Hraam Hreem Hraum Suryaya Namah', note: 'Confidence, vitality, leadership' },
              { icon: '🌙', graha: 'Chandra (Moon)', mantra: 'Om Shraam Shreem Shraum Chandraya Namah', note: 'Mind, peace, emotional balance' },
              { icon: '🔥', graha: 'Mangala (Mars)', mantra: 'Om Kraam Kreem Kraum Bhaumaya Namah', note: 'Courage, discipline, protection' },
              { icon: '📚', graha: 'Budha (Mercury)', mantra: 'Om Braam Breem Braum Budhaya Namah', note: 'Speech, study, business, travel' },
              { icon: '💎', graha: 'Guru (Jupiter)', mantra: 'Om Graam Greem Graum Gurave Namah', note: 'Wisdom, blessings, expansion' },
              { icon: '🌺', graha: 'Shukra (Venus)', mantra: 'Om Draam Dreem Draum Shukraya Namah', note: 'Love, harmony, comforts' },
              { icon: '🪐', graha: 'Shani (Saturn)', mantra: 'Om Praam Preem Praum Shanaye Namah', note: 'Karma, patience, stability' },
              { icon: '🧿', graha: 'Rahu', mantra: 'Om Bhraam Bhreem Bhraum Rahave Namah', note: 'Transformation, ambition, shadow work' },
              { icon: '🔱', graha: 'Ketu', mantra: 'Om Sraam Sreem Sraum Ketave Namah', note: 'Detachment, spiritual insight' },
            ].map((g) => (
              <div key={g.graha} className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm">
                <div className="text-4xl">{g.icon}</div>
                <div className="mt-3 font-display text-xl font-semibold text-stone-900">{g.graha}</div>
                <div className="mt-2 text-sm text-stone-500">{g.note}</div>
                <div className="mt-4 rounded-2xl bg-amber-50 border border-amber-100 p-4">
                  <div className="text-xs font-semibold text-amber-900">Mantra</div>
                  <div className="mt-1 text-sm font-medium text-stone-900">{g.mantra}</div>
                </div>
                <div className="mt-4 text-xs text-stone-500">Chant 108x (or 11x) daily for 21 days, with steady breath.</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid lg:grid-cols-2 gap-6 items-start">
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <h3 className="font-display text-2xl font-semibold text-stone-900">Simple Puja Guide</h3>
              <ul className="mt-4 space-y-2 text-stone-600">
                <li>• Light a ghee lamp 🪔 or candle and offer a flower 🌺</li>
                <li>• Sit facing east, breathe slowly for 2 minutes</li>
                <li>• Chant your chosen mantra 11× or 108×</li>
                <li>• Close with gratitude and a clear intention</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/astrology/birth-chart" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-himalaya-700 text-white font-medium hover:bg-himalaya-800 transition">
                  Get Full Chart & Remedies <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <a href="https://wa.me/9779851187267?text=Namaste! I want Navagraha remedies / puja guidance based on my chart." target="_blank" rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-200 bg-white text-stone-800 font-medium hover:bg-stone-50 transition">
                  WhatsApp for Puja
                </a>
              </div>
            </div>
            <div id="consultation-form" className="scroll-mt-28">
              <ConsultationBookingForm title="📞 Book Jyotish / Puja Consultation" defaultService="Navagraha Puja / Remedies" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 text-center" style={{ background:'linear-gradient(135deg, #0a0516, #1a0a00)' }}>
        <BookOpen className="w-10 h-10 mx-auto mb-5" style={{ color:'#C5A253' }} />
        <h2 className="font-display text-4xl font-semibold text-white mb-4">Begin Your Jyotish Journey</h2>
        <p className="text-stone-300 text-lg mb-8 max-w-xl mx-auto">In-person in Lalitpur or online via Zoom — same authentic Jyotish wisdom from a lineage-trained astrologer.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/astrology/birth-chart" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg hover:scale-105 transition-all" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Book Birth Chart — $120
          </Link>
          <a href="https://wa.me/9779851187267?text=Namaste! I want to book a Vedic astrology reading in Nepal." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background:'#25D366' }}>
            💬 WhatsApp to Book
          </a>
        </div>
        <p className="text-stone-400 text-sm">📍 Khumaltar, Lalitpur, Nepal · +977 9851187267 · meditationastro1@gmail.com</p>
      </section>
    </div>
  );
}
