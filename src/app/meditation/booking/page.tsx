'use client';
import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const sessions = [
  { id: 'pranayama', name: 'Pranayama & Breath Awareness', duration: '60 min', price: 45 },
  { id: 'vipassana', name: 'Vipassana Insight Meditation', duration: '90 min', price: 60 },
  { id: 'tibetan', name: 'Tibetan Buddhist Meditation', duration: '90 min', price: 75 },
  { id: 'kundalini', name: 'Kundalini Awakening Practice', duration: '75 min', price: 65 },
  { id: 'metta', name: 'Loving-Kindness (Metta)', duration: '60 min', price: 40 },
  { id: 'yoga-nidra', name: 'Yoga Nidra — Yogic Sleep', duration: '45 min', price: 35 },
  { id: 'custom', name: 'Private 1-on-1 Session', duration: '90 min', price: 120 },
];

const timeSlots = ['6:00 AM', '8:00 AM', '10:00 AM', '2:00 PM', '4:00 PM', '6:00 PM', '8:00 PM'];
const groupOptions = ['Private (1 person)', 'Couple (2 people)', 'Small Group (3–5)', 'Family Group (6–10)'];

export default function MeditationBookingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    session: '', date: '', time: '', group: 'Private (1 person)',
    name: '', email: '', phone: '', message: '', experience: 'beginner',
  });
  const [submitted, setSubmitted] = useState(false);

  const selected = sessions.find(s => s.id === form.session);

  const waText = selected
    ? `Namaste! I'd like to book:\n\nSession: ${selected.name}\nDate: ${form.date}\nTime: ${form.time}\nGroup: ${form.group}\nName: ${form.name}\nExperience: ${form.experience}\n\nThank you!`
    : '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-4" style={{ background: '#fdf8f0' }}>
        <div className="max-w-md w-full text-center bg-white rounded-3xl p-12 shadow-xl border border-stone-100">
          <CheckCircle className="w-16 h-16 mx-auto mb-5 text-green-500" />
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-3">Booking Request Sent!</h2>
          <p className="text-stone-600 mb-6">
            Namaste {form.name}! We have received your meditation booking request. Our team will confirm within 24 hours at {form.email}.
          </p>
          <p className="text-sm text-stone-500 mb-8">For instant confirmation, connect with us on WhatsApp.</p>
          <a
            href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90 mb-4 w-full justify-center"
            style={{ background: '#25D366' }}
          >
            Confirm via WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <div className="py-16 text-center px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <h1 className="font-display text-5xl text-white font-semibold mb-3">Book a Meditation Session</h1>
        <p className="text-stone-400 text-lg">Select your practice, choose a time, and begin your inner journey</p>
        <p className="text-amber-300 text-sm mt-2">📍 Khumaltar, Lalitpur, Nepal</p>
      </div>

      {/* Progress */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? 'text-stone-900' : 'bg-stone-200 text-stone-400'}`}
                style={step >= s ? { background: 'linear-gradient(135deg, #C5A253, #E8C870)' } : {}}>
                {s}
              </div>
              {s < 3 && <div className={`flex-1 h-1 rounded-full transition-all ${step > s ? '' : 'bg-stone-200'}`} style={step > s ? { background: '#C5A253' } : {}} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-stone-400">
          <span>Choose Session</span>
          <span>Select Time</span>
          <span>Your Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-4 pb-16">
        {/* Step 1: Session Selection */}
        {step === 1 && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6">Choose Your Meditation Practice</h2>
            <div className="space-y-3 mb-8">
              {sessions.map((s) => (
                <label
                  key={s.id}
                  className={`flex items-center justify-between p-5 rounded-2xl border-2 cursor-pointer transition-all ${form.session === s.id ? 'border-amber-400 bg-amber-50' : 'border-stone-200 bg-white hover:border-stone-300'}`}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" name="session" value={s.id} className="sr-only" onChange={() => setForm({ ...form, session: s.id })} />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${form.session === s.id ? 'border-amber-400' : 'border-stone-300'}`}>
                      {form.session === s.id && <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />}
                    </div>
                    <div>
                      <div className="font-medium text-stone-900">{s.name}</div>
                      <div className="text-sm text-stone-500"><Clock className="inline w-3 h-3 mr-1" />{s.duration}</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold" style={{ color: '#C5A253' }}>${s.price}</div>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-stone-700 mb-2">Your Meditation Experience</label>
              <select
                value={form.experience}
                onChange={e => setForm({ ...form, experience: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="beginner">Complete Beginner</option>
                <option value="some">Some Experience (1–2 years)</option>
                <option value="regular">Regular Practitioner (3+ years)</option>
                <option value="advanced">Advanced Practitioner</option>
              </select>
            </div>

            <button
              type="button"
              disabled={!form.session}
              onClick={() => setStep(2)}
              className="w-full py-4 rounded-full font-semibold text-stone-900 disabled:opacity-40 transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6">Choose Date & Time</h2>
            {selected && (
              <div className="p-4 rounded-2xl mb-6" style={{ background: 'rgba(197,162,83,0.1)', border: '1px solid rgba(197,162,83,0.3)' }}>
                <div className="font-medium text-stone-900">{selected.name}</div>
                <div className="text-sm text-stone-500">{selected.duration} · ${selected.price}</div>
              </div>
            )}

            <div className="mb-5">
              <label className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-1">
                <Calendar className="w-4 h-4" style={{ color: '#C5A253' }} /> Preferred Date
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={form.date}
                onChange={e => setForm({ ...form, date: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium text-stone-700 mb-3 flex items-center gap-1">
                <Clock className="w-4 h-4" style={{ color: '#C5A253' }} /> Preferred Time
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setForm({ ...form, time: t })}
                    className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${form.time === t ? 'text-stone-900 border-amber-400' : 'border-stone-200 text-stone-600 hover:border-stone-300'}`}
                    style={form.time === t ? { background: 'rgba(197,162,83,0.15)', borderColor: '#C5A253' } : {}}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-1">
                <User className="w-4 h-4" style={{ color: '#C5A253' }} /> Group Type
              </label>
              <select
                value={form.group}
                onChange={e => setForm({ ...form, group: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                {groupOptions.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={() => setStep(1)} className="flex-1 py-4 rounded-full font-semibold text-stone-700 border-2 border-stone-200 hover:bg-stone-50 transition-all">
                Back
              </button>
              <button
                type="button"
                disabled={!form.date || !form.time}
                onClick={() => setStep(3)}
                className="flex-1 py-4 rounded-full font-semibold text-stone-900 disabled:opacity-40 transition-all hover:opacity-90 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6">Your Details</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 mb-6">
              <div className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-3">Booking Summary</div>
              {selected && (
                <div className="space-y-1">
                  <div className="flex justify-between"><span className="text-stone-600">{selected.name}</span><span className="font-bold" style={{ color: '#C5A253' }}>${selected.price}</span></div>
                  <div className="flex justify-between text-sm text-stone-500"><span>{form.date} at {form.time}</span><span>{form.group}</span></div>
                </div>
              )}
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1">
                  <User className="w-4 h-4" style={{ color: '#C5A253' }} /> Full Name *
                </label>
                <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1">
                  <Mail className="w-4 h-4" style={{ color: '#C5A253' }} /> Email *
                </label>
                <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1">
                  <Phone className="w-4 h-4" style={{ color: '#C5A253' }} /> Phone / WhatsApp
                </label>
                <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5 flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" style={{ color: '#C5A253' }} /> Special Requests / Questions
                </label>
                <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={3} placeholder="Any health conditions, specific goals, or questions..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
              </div>
            </div>

            <div className="flex gap-3 mb-4">
              <button type="button" onClick={() => setStep(2)} className="flex-1 py-4 rounded-full font-semibold text-stone-700 border-2 border-stone-200 hover:bg-stone-50 transition-all">Back</button>
              <button type="submit" className="flex-1 py-4 rounded-full font-semibold text-stone-900 transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                Confirm Booking
              </button>
            </div>

            <div className="text-center">
              <p className="text-stone-500 text-sm mb-3">Or confirm instantly via WhatsApp</p>
              <a href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:opacity-90"
                style={{ background: '#25D366' }}>
                Book via WhatsApp
              </a>
            </div>

            <p className="text-center text-xs text-stone-400 mt-4">
              By booking, you agree to our cancellation policy. 48-hour notice required for full refund.
              Confirmation sent to: meditationastro1@gmail.com
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
