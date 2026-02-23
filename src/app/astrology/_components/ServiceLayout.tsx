'use client';
import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, ArrowRight, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface Props {
  title: string;
  subtitle: string;
  bullets: string[];
  price?: number;
  duration?: string;
}

const serviceDefaults: Record<string, { price: number; duration: string }> = {
  'Vedic Birth Chart': { price: 120, duration: '90 min' },
  'Karma & Past Life': { price: 150, duration: '2 hrs' },
  'Relationship Compatibility': { price: 130, duration: '90 min' },
  'Career & Dharma': { price: 110, duration: '60 min' },
  'Astrology + Meditation': { price: 200, duration: '2.5 hrs' },
  'Online Consultation': { price: 85, duration: '60 min' },
  'Life Matrix Mapping': { price: 175, duration: '2 hrs' },
};

export function ServiceLayout({ title, subtitle, bullets, price, duration }: Props) {
  const defaults = serviceDefaults[title] || { price: price || 120, duration: duration || '90 min' };
  const servicePrice = price || defaults.price;
  const serviceDuration = duration || defaults.duration;

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', birthDate: '', birthTime: '', birthPlace: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const waText = `Namaste! I'd like to book:\n\nService: ${title}\nPrice: $${servicePrice}\nName: ${form.name || '[Your Name]'}\nEmail: ${form.email || '[Your Email]'}\nBirth Date: ${form.birthDate || '[Date]'}\nBirth Time: ${form.birthTime || '[Time if known]'}\nBirth Place: ${form.birthPlace || '[City, Country]'}\n\nThank you!`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0516 0%, #1a0a00 60%, #0a1416 100%)' }} />
        <div className="relative max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-5 uppercase tracking-widest" style={{ background: 'rgba(197,162,83,0.15)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.3)' }}>
            ✦ Vedic Astrology Service ✦
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5 leading-tight">{title}</h1>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
        <div className="relative h-12 overflow-hidden">
          <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,48 L480,10 L960,35 L1440,5 L1440,48 Z" />
          </svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Content */}
          <div className="md:col-span-3">
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-5">What's Included</h2>
            <div className="space-y-3 mb-8">
              {bullets.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#C5A253' }} />
                  <span className="text-stone-700">{b}</span>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl mb-6" style={{ background: 'rgba(197,162,83,0.08)', border: '1px solid rgba(197,162,83,0.2)' }}>
              <h3 className="font-semibold text-stone-900 mb-2">How to Prepare</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Please have your exact birth date, time (as precise as possible), and place of birth ready. 
                If you don't know your birth time, we can still do a reading with some limitations. 
                Write down 3–5 key questions or life areas you want to explore.
              </p>
            </div>

            <div className="p-5 rounded-2xl" style={{ background: '#f0f7f0', border: '1px solid #c8e0c8' }}>
              <h3 className="font-semibold text-stone-900 mb-2">📍 Session Options</h3>
              <div className="text-stone-600 text-sm space-y-1">
                <div>• In-person at Khumaltar, Lalitpur, Nepal</div>
                <div>• Online via Zoom or WhatsApp Video</div>
                <div>• Session recorded & PDF report delivered</div>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/astrology" className="text-sm text-stone-400 hover:text-stone-700 transition-colors">
                ← View all astrology services
              </Link>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="md:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 text-center">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">Booking Request Received!</h3>
                <p className="text-stone-600 text-sm mb-6">We'll confirm within 24 hours at {form.email}. For instant booking, WhatsApp us.</p>
                <a href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold hover:opacity-90 text-sm"
                  style={{ background: '#25D366' }}>
                  Confirm via WhatsApp
                </a>
              </div>
            ) : !showForm ? (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 sticky top-24">
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-3xl font-display font-bold" style={{ color: '#C5A253' }}>${servicePrice}</div>
                  <div className="text-stone-400 text-sm">/ session</div>
                </div>
                <div className="text-stone-500 text-sm mb-6">Duration: {serviceDuration}</div>

                <button onClick={() => setShowForm(true)}
                  className="w-full py-4 rounded-full font-semibold text-stone-900 transition-all hover:opacity-90 flex items-center justify-center gap-2 mb-3"
                  style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                  Book This Session <ArrowRight className="w-4 h-4" />
                </button>

                <a href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`} target="_blank" rel="noreferrer"
                  className="w-full py-3 rounded-full font-semibold text-white transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{ background: '#25D366' }}>
                  Book via WhatsApp
                </a>

                <div className="mt-5 pt-4 border-t border-stone-100 text-xs text-stone-400 space-y-1">
                  <div>✓ Recorded session sent to you</div>
                  <div>✓ PDF report included</div>
                  <div>✓ 48hr cancellation policy</div>
                  <div>✓ meditationastro1@gmail.com</div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 sticky top-24">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-4">Book {title}</h3>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1"><User className="w-3 h-3" style={{ color: '#C5A253' }} /> Full Name *</label>
                    <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Your name"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1"><Mail className="w-3 h-3" style={{ color: '#C5A253' }} /> Email *</label>
                    <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="your@email.com"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1"><Phone className="w-3 h-3" style={{ color: '#C5A253' }} /> WhatsApp / Phone</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+1 234 567 8900"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-1">Birth Date</label>
                      <input type="date" value={form.birthDate} onChange={e => setForm({ ...form, birthDate: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-1">Birth Time</label>
                      <input type="time" value={form.birthTime} onChange={e => setForm({ ...form, birthTime: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Birth City, Country</label>
                    <input type="text" value={form.birthPlace} onChange={e => setForm({ ...form, birthPlace: e.target.value })} placeholder="Kathmandu, Nepal"
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1 flex items-center gap-1"><MessageSquare className="w-3 h-3" style={{ color: '#C5A253' }} /> Questions</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={2}
                      placeholder="Key areas you want to explore..."
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none" />
                  </div>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-2.5 rounded-full text-sm border-2 border-stone-200 text-stone-600 font-semibold hover:bg-stone-50">Back</button>
                    <button type="submit" className="flex-1 py-2.5 rounded-full text-sm font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
