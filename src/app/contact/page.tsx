'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle, Clock, CheckCircle, Star, Globe, ArrowRight, Send } from 'lucide-react';

const services = [
  { icon:'🧘', title:'Meditation Retreat', href:'/retreats', duration:'3, 7 or 14 Days', from:'$380', desc:'Guided silent meditation, pranayama, mindfulness immersion in the Himalayas' },
  { icon:'⭐', title:'Vedic Astrology', href:'/vedic-astrology', duration:'60–150 min', from:'$85', desc:'Jyotish birth chart, karma reading, compatibility & career guidance' },
  { icon:'🌿', title:'Ayurveda', href:'/ayurveda', duration:'45–90 min', from:'$45', desc:'Dosha consultation, Panchakarma, Abhyanga, Shirodhara treatments' },
  { icon:'🏔️', title:'Yoga Classes', href:'/yoga', duration:'75–90 min', from:'$20', desc:'Hatha, Kundalini, Yin Yoga and Yoga Nidra at 2,400m altitude' },
  { icon:'🎓', title:'Yoga Teacher Training', href:'/yoga/teacher-training', duration:'28 Days', from:'$2,400', desc:'200-hour Yoga Alliance RYS certified YTT program in Nepal' },
  { icon:'🔔', title:'Sound Healing', href:'/retreats', duration:'60–90 min', from:'$60', desc:'Tibetan singing bowl ceremony for energy clearing and deep relaxation' },
  { icon:'🔥', title:'Fire Ceremony (Havan)', href:'/retreats', duration:'2 hrs', from:'$120', desc:'Vedic Havan ritual with planetary mantras — powerful karmic clearing' },
  { icon:'🗺️', title:'Sacred Site Treks', href:'/treks/abc', duration:'1–14 Days', from:'$200', desc:'Guided pilgrimage to Boudhanath, Pashupatinath, Annapurna region' },
];

const faqs = [
  { q:'How do I book a retreat?', a:'WhatsApp, email, or our contact form. We typically respond within 2–4 hours. For urgent bookings, WhatsApp is fastest.' },
  { q:'Can I book an online astrology reading?', a:'Yes! We serve 50+ countries via Zoom and WhatsApp. Sessions are equally powerful online.' },
  { q:'What languages are spoken?', a:'English, Hindi, Nepali. German, Spanish, and Italian support available on request.' },
  { q:'Is there a visa requirement for Nepal?', a:'Most nationalities get a visa on arrival at Tribhuvan International Airport. We provide a full visa support letter.' },
  { q:'What is the best time of year to visit?', a:'October–December and February–May are ideal. Monsoon is July–September (still beautiful, fewer guests).' },
  { q:'Do you offer airport transfer?', a:'Yes — included in 7-day and 14-day programs, and available as an add-on ($35) for all others.' },
];

const offices = [
  { flag:'🇳🇵', city:'Khumaltar, Lalitpur', label:'Main Center', detail:'Retreat center & astrology practice', open:'Daily 6am–8pm NPT' },
  { flag:'🌐', city:'Worldwide', label:'Online Sessions', detail:'Zoom, WhatsApp, Google Meet', open:'Flexible — most time zones' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '', lang: 'en' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, phone: form.phone || null, service: form.service, message: form.message }),
      });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error || 'Failed'); }
      setSent(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please use WhatsApp instead.');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #1a0a00 60%, #0a1a14 100%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 25% 50%, #C5A253 0%, transparent 50%), radial-gradient(circle at 75% 30%, #4a7e50 0%, transparent 40%)' }} />
        {/* Mandala rings */}
        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full border border-amber-500/5 -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-52 h-52 rounded-full border border-amber-500/8 -translate-y-1/2" />
        <div className="relative max-w-5xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.12)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.25)' }}>
                📍 Khumaltar, Lalitpur, Nepal
              </div>
              <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5 leading-tight">
                Begin Your<br/><span className="italic" style={{ color: '#C5A253' }}>Himalayan Journey</span>
              </h1>
              <p className="text-stone-300 text-lg leading-relaxed mb-8">
                Whether you have questions about retreats, want to book a Vedic astrology reading, or need help planning your Nepal visit — we are here and respond within hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/9779851187267?text=Namaste! I want to book a retreat at Himalaya Retreat Nepal." target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  <MessageCircle className="w-4 h-4" /> WhatsApp — Fastest
                </a>
                <a href="mailto:meditationastro1@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 transition-all">
                  <Mail className="w-4 h-4" /> Email Us
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {offices.map(o => (
                <div key={o.city} className="rounded-2xl p-5 flex gap-4" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="text-3xl">{o.flag}</span>
                  <div>
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-0.5">{o.label}</div>
                    <div className="text-white font-semibold">{o.city}</div>
                    <div className="text-stone-400 text-sm">{o.detail}</div>
                    <div className="flex items-center gap-1.5 mt-1 text-stone-500 text-xs"><Clock className="w-3 h-3" />{o.open}</div>
                  </div>
                </div>
              ))}
              {/* Ratings */}
              <div className="rounded-2xl p-5 flex items-center gap-4" style={{ background: 'rgba(197,162,83,0.08)', border: '1px solid rgba(197,162,83,0.2)' }}>
                <div className="flex gap-0.5">{Array.from({length:5}).map((_,i)=><Star key={i} className="w-5 h-5 fill-current" style={{ color:'#C5A253' }} />)}</div>
                <div>
                  <div className="text-white font-semibold">4.9 / 5.0 Average</div>
                  <div className="text-stone-400 text-sm">from 400+ verified reviews, 50+ countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 relative overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none"><path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" /></svg>
        </div>
      </section>

      {/* Quick connect bar */}
      <section className="py-6 px-4 border-b border-stone-200 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon:<MessageCircle className="w-5 h-5"/>, label:'WhatsApp', value:'+977 9851187267', href:'https://wa.me/9779851187267', color:'#25D366' },
            { icon:<Mail className="w-5 h-5"/>, label:'Email', value:'meditationastro1@gmail.com', href:'mailto:meditationastro1@gmail.com', color:'#C5A253' },
            { icon:<MapPin className="w-5 h-5"/>, label:'Location', value:'Khumaltar, Lalitpur, Nepal', href:'https://maps.google.com/?q=Khumaltar,Lalitpur,Nepal', color:'#C5A253' },
            { icon:<Globe className="w-5 h-5"/>, label:'Online', value:'Zoom · WhatsApp · Worldwide', href:'/astrology/online', color:'#4a7e50' },
          ].map(c => (
            <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-stone-50 transition-colors group">
              <span className="mt-0.5 flex-shrink-0" style={{ color: c.color }}>{c.icon}</span>
              <div>
                <div className="text-xs text-stone-400 mb-0.5">{c.label}</div>
                <div className="text-sm font-medium text-stone-700 group-hover:text-amber-700 transition-colors">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* All Services */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block text-xs tracking-widest uppercase font-medium mb-3" style={{ color: '#C5A253' }}>— What We Offer —</div>
            <h2 className="font-display text-4xl font-semibold text-stone-900">All Services & Programs</h2>
            <p className="text-stone-500 mt-2">Tell us what you're interested in — we'll tailor our response to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {services.map(s => (
              <Link key={s.title} href={s.href}
                className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-1 transition-all group">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-display text-base font-semibold text-stone-900 mb-1">{s.title}</h3>
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-2">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{s.duration}</span>
                  <span className="text-amber-600 font-semibold">from {s.from}</span>
                </div>
                <p className="text-stone-500 text-xs leading-relaxed mb-3">{s.desc}</p>
                <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#C5A253' }}>
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/retreats" className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-stone-900 shadow hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-8 px-4 pb-16" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                <h2 className="font-display text-2xl font-semibold text-stone-900 mb-2">Send a Message</h2>
                <p className="text-stone-500 text-sm mb-6">We respond within 2–4 hours (often much sooner on WhatsApp)</p>

                {sent ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#4a7e50' }} />
                    <h3 className="font-display text-2xl font-semibold text-stone-900 mb-2">Namaste! Message Received 🙏</h3>
                    <p className="text-stone-600 mb-6">We'll reply within 2–4 hours. For urgent queries, WhatsApp is fastest.</p>
                    <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white" style={{ background: '#25D366' }}>
                      <MessageCircle className="w-4 h-4" /> Also connect on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                        <input required value={form.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({...f, name: e.target.value}))} placeholder="Your name"
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">Email *</label>
                        <input required type="email" value={form.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({...f, email: e.target.value}))} placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">Phone / WhatsApp</label>
                        <input value={form.phone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({...f, phone: e.target.value}))} placeholder="+1 555 000 0000"
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">I'm Interested In</label>
                        <select value={form.service} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setForm(f => ({...f, service: e.target.value}))}
                          className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all">
                          <option value="">Select a service…</option>
                          {services.map(s => <option key={s.title} value={s.title}>{s.icon} {s.title}</option>)}
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wide">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setForm(f => ({...f, message: e.target.value}))} placeholder="Tell us about yourself, your experience with meditation or yoga, and what you're hoping to gain from this journey..."
                        className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 transition-all resize-none" />
                    </div>
                    {error && (
                      <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm">{error}</div>
                    )}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button type="submit" disabled={loading}
                        className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-stone-900 hover:opacity-90 transition-all disabled:opacity-50"
                        style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                        {loading ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
                      </button>
                      <a href="https://wa.me/9779851187267?text=Namaste! I want to connect with Himalaya Retreat Nepal."
                        target="_blank" rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                        style={{ background: '#25D366' }}>
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                      </a>
                    </div>
                    <p className="text-xs text-stone-400 text-center">🔒 Your information is private and never shared with third parties</p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-5">
              {/* Contact details */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-4">Direct Contact</h3>
                <div className="space-y-4 text-sm">
                  {[
                    { icon:MessageCircle, label:'WhatsApp', value:'+977 9851187267', href:'https://wa.me/9779851187267', color:'#25D366' },
                    { icon:Mail, label:'Email', value:'meditationastro1@gmail.com', href:'mailto:meditationastro1@gmail.com', color:'#C5A253' },
                    { icon:Phone, label:'Phone', value:'+977 9851187267', href:'tel:+9779851187267', color:'#C5A253' },
                    { icon:MapPin, label:'Address', value:'Khumaltar, Lalitpur, Nepal', href:'https://maps.google.com/?q=Khumaltar,Lalitpur,Nepal', color:'#C5A253' },
                    { icon:Clock, label:'Hours', value:'Daily 6:00 AM – 8:00 PM NPT', href:null, color:'#78716c' },
                  ].map(item => (
                    item.href ? (
                      <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                        className="flex items-start gap-3 group">
                        <item.icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <div>
                          <div className="text-xs text-stone-400">{item.label}</div>
                          <div className="text-stone-700 group-hover:text-amber-700 transition-colors font-medium">{item.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div key={item.label} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                        <div>
                          <div className="text-xs text-stone-400">{item.label}</div>
                          <div className="text-stone-700 font-medium">{item.value}</div>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-3">Languages</h3>
                <div className="space-y-2">
                  {[
                    { flag:'🇬🇧', lang:'English', note:'Fully fluent' },
                    { flag:'🇮🇳', lang:'हिन्दी', note:'Native speaker' },
                    { flag:'🇳🇵', lang:'Nepali', note:'Native speaker' },
                    { flag:'🇩🇪', lang:'Deutsch', note:'Support available' },
                    { flag:'🇪🇸', lang:'Español', note:'Support available' },
                    { flag:'🇮🇹', lang:'Italiano', note:'Support available' },
                  ].map(l => (
                    <div key={l.lang} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2"><span>{l.flag}</span><span className="text-stone-700 font-medium">{l.lang}</span></span>
                      <span className="text-xs text-stone-400">{l.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
                <a href="https://maps.google.com/?q=Khumaltar,Lalitpur,Nepal" target="_blank" rel="noreferrer">
                  <div className="h-44 relative" style={{ background: 'linear-gradient(135deg, #d4e8c2, #a8d08a)' }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ background: '#C5A253' }}>
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="bg-white px-3 py-1.5 rounded-full shadow text-xs font-semibold text-stone-700">Khumaltar, Lalitpur</div>
                      <div className="text-xs text-stone-600">📍 Click to open in Google Maps</div>
                    </div>
                    {/* Decorative grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                      <defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="#4a7e50" strokeWidth="0.5"/></pattern></defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                </a>
                <div className="p-4 text-center text-sm text-stone-500">
                  27.6588° N, 85.3247° E · 30 min from TIA Airport
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-stone-500 text-center mb-10">Quick answers to the most common questions from international guests</p>
          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <h3 className="font-display text-base font-semibold text-stone-900 mb-2">{faq.q}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/faq" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-stone-200 text-stone-700 font-semibold hover:border-amber-400 transition-all">
              All FAQs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO block */}
      <section className="py-12 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-semibold text-stone-800 mb-4">Himalya Retreat Nepal — Contact & Booking</h2>
          <p className="text-stone-600 text-sm leading-relaxed max-w-3xl mx-auto mb-6">
            Himalya Retreat Nepal is a spiritual retreat center located in Khumaltar, Lalitpur, Nepal — 30 minutes from Tribhuvan International Airport. We offer authentic meditation retreats, Vedic astrology (Jyotish) readings, Ayurvedic treatments, Himalayan yoga classes, and 200-hour yoga teacher training programs. Guests travel from 50+ countries for transformative experiences in the sacred Kathmandu Valley. Online consultations (Vedic astrology, yoga, meditation guidance) are available worldwide via Zoom and WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-stone-500">
            {['meditation retreat Nepal', 'Vedic astrology reading Nepal', 'Ayurveda Nepal', 'yoga retreat Nepal', 'spiritual retreat Lalitpur', 'Jyotish Nepal', 'yoga teacher training Nepal', 'Himalayan meditation', 'sound healing Nepal', 'Khumaltar retreat center'].map(tag => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white border border-stone-200">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
