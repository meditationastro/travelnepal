'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, User, CreditCard, CheckCircle, MessageCircle, Mail, Phone, Globe, Utensils, Loader2, ArrowLeft, ArrowRight } from 'lucide-react';

const roomOptions = [
  { value: 'SHARED', label: 'Shared Room', surcharge: 0, desc: 'Comfortable shared dorm, 4–6 guests' },
  { value: 'PRIVATE', label: 'Private Room', surcharge: 150, desc: 'Your own private room with mountain view' },
  { value: 'DELUXE', label: 'Deluxe Suite', surcharge: 350, desc: 'Spacious suite with en-suite & balcony' },
];

const addons = [
  { value: 'VEDIC_BIRTH_CHART', label: 'Vedic Birth Chart Reading', price: 120, icon: '⭐' },
  { value: 'KARMA_READING', label: 'Karma & Past Life Reading', price: 150, icon: '☸' },
  { value: 'MEDITATION_INTEGRATION', label: 'Astrology + Meditation Session', price: 200, icon: '🌙' },
];

const experienceLevels = ['Complete Beginner', 'Some Experience (1–2 years)', 'Regular Practitioner (3+ years)', 'Advanced Practitioner'];

interface Program {
  id: string;
  slug: string;
  title: string;
  price: number;
  // Prisma commonly returns nullable numbers; allow null to avoid type errors.
  earlyBirdPrice?: number | null;
  duration: number;
  // Dates may arrive as ISO strings (fallback content) or Date objects (Prisma).
  dates?: Array<{
    id: string;
    startDate: string | Date;
    endDate: string | Date;
    seatsTotal: number;
    seatsBooked: number;
  }>;
}

export function BookingForm({ program }: { program: Program }) {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ bookingRef: string } | null>(null);
  const [error, setError] = useState('');

  const [config, setConfig] = useState({
    dateId: program.dates?.[0]?.id || '',
    customDate: '',
    roomType: 'SHARED',
    selectedAddons: [] as string[],
    paymentMethod: 'BANK_TRANSFER',
  });

  const [personal, setPersonal] = useState({
    name: '', email: '', phone: '', whatsapp: '', nationality: '',
    experience: '', dietaryNeeds: '', notes: '',
  });

  // Use nullish coalescing so 0 is not treated as "missing".
  const basePrice = program.earlyBirdPrice ?? program.price;
  const roomSurcharge = roomOptions.find(r => r.value === config.roomType)?.surcharge || 0;
  const addonTotal = addons.filter(a => config.selectedAddons.includes(a.value)).reduce((sum, a) => sum + a.price, 0);
  const total = basePrice + roomSurcharge + addonTotal;

  const selectedDate = program.dates?.find(d => d.id === config.dateId);
  const dateLabel = selectedDate
    ? `${format(new Date(selectedDate.startDate), 'MMM d')} – ${format(new Date(selectedDate.endDate), 'MMM d, yyyy')}`
    : config.customDate || 'Flexible';

  const waText = `Namaste! I'd like to book:\n\n🏔️ Retreat: ${program.title}\n📅 Dates: ${dateLabel}\n🛏️ Room: ${config.roomType}\n${config.selectedAddons.length ? `✨ Add-ons: ${config.selectedAddons.join(', ')}\n` : ''}💰 Total: $${total}\n\n👤 Name: ${personal.name}\n📧 Email: ${personal.email}\n📞 Phone: ${personal.phone}\n\n${personal.notes ? `Notes: ${personal.notes}\n` : ''}Booking ref will be assigned by your team.`;

  const handleSubmit = async () => {
    if (!personal.name || !personal.email) {
      setError('Please fill in your name and email.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/bookings/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: personal.name,
          email: personal.email,
          phone: personal.phone,
          whatsapp: personal.whatsapp,
          nationality: personal.nationality,
          experience: personal.experience,
          dietaryNeeds: personal.dietaryNeeds,
          notes: personal.notes,
          programTitle: program.title,
          programSlug: program.slug,
          selectedDate: dateLabel,
          roomType: config.roomType,
          addons: config.selectedAddons,
          paymentMethod: config.paymentMethod,
          total,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data);
      } else {
        setError('Failed to submit. Please try WhatsApp instead.');
      }
    } catch {
      setError('Network error. Please try WhatsApp or email directly.');
    } finally {
      setSubmitting(false);
    }
  };

  // ── SUCCESS STATE ─────────────────────────────────────────────────────────
  if (result) {
    return (
      <div className="text-center space-y-5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold text-stone-900">Booking Request Sent! 🙏</h3>
          <p className="text-stone-500 text-sm mt-1">We'll confirm within 24 hours</p>
        </div>
        <div className="p-4 rounded-2xl text-center" style={{ background: 'rgba(197,162,83,0.1)', border: '1px solid rgba(197,162,83,0.3)' }}>
          <div className="text-xs text-stone-500 mb-1">Your Reference Number</div>
          <div className="font-display text-2xl font-bold" style={{ color: '#C5A253' }}>{result.bookingRef}</div>
        </div>
        <p className="text-stone-600 text-sm">
          Confirmation sent to <strong>{personal.email}</strong>. For instant confirmation, message us on WhatsApp.
        </p>
        <a
          href={`https://wa.me/9779851187267?text=${encodeURIComponent(`Namaste! I just submitted booking request ${result.bookingRef} for ${program.title}. Can you confirm?`)}`}
          target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white text-sm"
          style={{ background: '#25D366' }}
        >
          <MessageCircle className="w-4 h-4" /> Confirm on WhatsApp
        </a>
        <div className="text-xs text-stone-400 pt-2 border-t border-stone-100">
          Next: Our team will send payment instructions within 24 hours.<br />
          30% deposit secures your spot. Balance due 30 days before arrival.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Step Indicator */}
      <div className="flex items-center gap-1">
        {[1, 2, 3].map(s => (
          <div key={s} className="flex items-center gap-1 flex-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
              style={step >= s
                ? { background: 'linear-gradient(135deg, #C5A253, #E8C870)', color: '#1c1917' }
                : { background: '#f0ede8', color: '#9ca3af' }}
            >{s}</div>
            {s < 3 && <div className="flex-1 h-0.5 rounded-full transition-all" style={{ background: step > s ? '#C5A253' : '#e5e7eb' }} />}
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xs text-stone-400 -mt-2">
        <span>Customize</span><span>Details</span><span>Confirm</span>
      </div>

      {/* ── STEP 1: Retreat Configuration ─── */}
      {step === 1 && (
        <div className="space-y-5">
          {/* Date selection */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2 flex items-center gap-1">
              <Calendar className="w-4 h-4" style={{ color: '#C5A253' }} /> Select Dates
            </label>
            {program.dates && program.dates.length > 0 ? (
              <div className="space-y-2">
                {program.dates.map(d => (
                  <label key={d.id}
                    className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${config.dateId === d.id ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
                    style={config.dateId === d.id ? { background: 'rgba(197,162,83,0.08)' } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <input type="radio" name="dateId" value={d.id} checked={config.dateId === d.id}
                        onChange={() => setConfig(c => ({ ...c, dateId: d.id, customDate: '' }))} className="accent-amber-600" />
                      <span className="text-sm text-stone-700">
                        {format(new Date(d.startDate), 'MMM d')} – {format(new Date(d.endDate), 'MMM d, yyyy')}
                      </span>
                    </div>
                    <span className="text-xs text-stone-500">{d.seatsTotal - d.seatsBooked} spots</span>
                  </label>
                ))}
                <label className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${config.dateId === '' && config.customDate !== '' ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}>
                  <input type="radio" name="dateId" value="" checked={config.dateId === '' && config.customDate === ''} onChange={() => setConfig(c => ({ ...c, dateId: '' }))} className="accent-amber-600" />
                  <span className="text-sm text-stone-700">Flexible / Request custom dates</span>
                </label>
              </div>
            ) : (
              <div>
                <div className="p-3 rounded-xl text-sm text-stone-500 bg-stone-50 text-center mb-3">
                  Next retreats: Jun, Jul, Aug, Sep, Oct 2025 — <a href="/contact" className="underline" style={{ color: '#C5A253' }}>contact us</a> to discuss
                </div>
                <input type="text" placeholder="Your preferred dates (e.g. July 2025)" value={config.customDate}
                  onChange={e => setConfig(c => ({ ...c, customDate: e.target.value, dateId: '' }))}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
              </div>
            )}
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Room Type</label>
            <div className="space-y-2">
              {roomOptions.map(r => (
                <label key={r.value}
                  className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${config.roomType === r.value ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
                  style={config.roomType === r.value ? { background: 'rgba(197,162,83,0.08)' } : {}}
                >
                  <div className="flex items-center gap-3">
                    <input type="radio" name="roomType" value={r.value} checked={config.roomType === r.value}
                      onChange={() => setConfig(c => ({ ...c, roomType: r.value }))} className="accent-amber-600" />
                    <div>
                      <div className="text-sm font-medium text-stone-700">{r.label}</div>
                      <div className="text-xs text-stone-400">{r.desc}</div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#C5A253' }}>
                    {r.surcharge > 0 ? `+$${r.surcharge}` : 'Base'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Add-ons */}
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">🔮 Add Astrology Sessions</label>
            <div className="space-y-2">
              {addons.map(a => (
                <label key={a.value}
                  className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${config.selectedAddons.includes(a.value) ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
                  style={config.selectedAddons.includes(a.value) ? { background: 'rgba(197,162,83,0.08)' } : {}}
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={config.selectedAddons.includes(a.value)}
                      onChange={e => setConfig(c => ({
                        ...c,
                        selectedAddons: e.target.checked
                          ? [...c.selectedAddons, a.value]
                          : c.selectedAddons.filter(x => x !== a.value)
                      }))} className="accent-amber-600" />
                    <span className="text-xs text-stone-700">{a.icon} {a.label}</span>
                  </div>
                  <span className="text-sm font-semibold" style={{ color: '#C5A253' }}>+${a.price}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="rounded-2xl p-4 border border-stone-200 bg-stone-50 space-y-1.5">
            <div className="flex justify-between text-sm text-stone-600">
              <span>{program.title}</span><span>${basePrice}</span>
            </div>
            {roomSurcharge > 0 && (
              <div className="flex justify-between text-sm text-stone-600">
                <span>Room upgrade</span><span>+${roomSurcharge}</span>
              </div>
            )}
            {addonTotal > 0 && (
              <div className="flex justify-between text-sm text-stone-600">
                <span>Add-ons</span><span>+${addonTotal}</span>
              </div>
            )}
            <div className="flex justify-between text-base font-bold text-stone-900 pt-2 border-t border-stone-200">
              <span>Estimated Total</span>
              <span style={{ color: '#C5A253' }}>${total}</span>
            </div>
          </div>

          <button onClick={() => setStep(2)}
            className="w-full py-4 rounded-2xl font-semibold text-stone-900 flex items-center justify-center gap-2 transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Continue <ArrowRight className="w-4 h-4" />
          </button>

          <a href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border-2 border-stone-200 hover:bg-stone-50 text-sm font-semibold text-stone-700 transition-all">
            <MessageCircle className="w-4 h-4" /> Book via WhatsApp instead
          </a>
        </div>
      )}

      {/* ── STEP 2: Personal Details ─── */}
      {step === 2 && (
        <div className="space-y-4">
          <div className="p-3 rounded-xl text-sm text-stone-600 bg-stone-50 border border-stone-100">
            <div className="font-medium">{program.title}</div>
            <div className="text-stone-400 text-xs">{dateLabel} · {config.roomType} · ${total}</div>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><User className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> Full Name *</label>
            <input required type="text" value={personal.name} onChange={e => setPersonal(p => ({ ...p, name: e.target.value }))} placeholder="As on passport"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><Mail className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> Email Address *</label>
            <input required type="email" value={personal.email} onChange={e => setPersonal(p => ({ ...p, email: e.target.value }))} placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><Phone className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> Phone</label>
              <input type="tel" value={personal.phone} onChange={e => setPersonal(p => ({ ...p, phone: e.target.value }))} placeholder="+1 234 567"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> WhatsApp</label>
              <input type="tel" value={personal.whatsapp} onChange={e => setPersonal(p => ({ ...p, whatsapp: e.target.value }))} placeholder="+1 234 567"
                className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><Globe className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> Nationality</label>
            <input type="text" value={personal.nationality} onChange={e => setPersonal(p => ({ ...p, nationality: e.target.value }))} placeholder="e.g. American, German, Indian"
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">Meditation Experience</label>
            <select value={personal.experience} onChange={e => setPersonal(p => ({ ...p, experience: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white">
              <option value="">Select level...</option>
              {experienceLevels.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5 flex items-center gap-1"><Utensils className="w-3.5 h-3.5" style={{ color: '#C5A253' }} /> Dietary Needs</label>
            <input type="text" value={personal.dietaryNeeds} onChange={e => setPersonal(p => ({ ...p, dietaryNeeds: e.target.value }))} placeholder="Vegan, gluten-free, allergies..."
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">Questions / Special Requests</label>
            <textarea value={personal.notes} onChange={e => setPersonal(p => ({ ...p, notes: e.target.value }))} rows={3}
              placeholder="Any health conditions, questions, or special requirements..."
              className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none" />
          </div>

          {error && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{error}</div>}

          <div className="flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 py-3.5 rounded-2xl border-2 border-stone-200 text-stone-600 font-semibold hover:bg-stone-50 transition-all flex items-center justify-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={() => setStep(3)} disabled={!personal.name || !personal.email}
              className="flex-1 py-3.5 rounded-2xl font-semibold text-stone-900 disabled:opacity-40 flex items-center justify-center gap-1 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Review <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* ── STEP 3: Review & Submit ─── */}
      {step === 3 && (
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-stone-900">Review Your Booking</h3>

          <div className="bg-stone-50 rounded-2xl p-4 space-y-2 text-sm border border-stone-100">
            <div className="flex justify-between"><span className="text-stone-500">Retreat</span><span className="font-medium text-stone-800">{program.title}</span></div>
            <div className="flex justify-between"><span className="text-stone-500">Dates</span><span className="font-medium text-stone-800">{dateLabel}</span></div>
            <div className="flex justify-between"><span className="text-stone-500">Room</span><span className="font-medium text-stone-800">{config.roomType}</span></div>
            {config.selectedAddons.length > 0 && (
              <div className="flex justify-between"><span className="text-stone-500">Add-ons</span><span className="font-medium text-stone-800">{config.selectedAddons.length} selected</span></div>
            )}
            <div className="flex justify-between pt-2 border-t border-stone-200">
              <span className="font-bold">Total</span>
              <span className="font-bold text-lg" style={{ color: '#C5A253' }}>${total}</span>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-4 space-y-2 text-sm border border-stone-100">
            <div className="flex justify-between"><span className="text-stone-500">Name</span><span className="font-medium">{personal.name}</span></div>
            <div className="flex justify-between"><span className="text-stone-500">Email</span><span className="font-medium">{personal.email}</span></div>
            {personal.phone && <div className="flex justify-between"><span className="text-stone-500">Phone</span><span className="font-medium">{personal.phone}</span></div>}
            {personal.nationality && <div className="flex justify-between"><span className="text-stone-500">Nationality</span><span className="font-medium">{personal.nationality}</span></div>}
          </div>

          <div className="space-y-3">
            <div className="font-semibold text-stone-900 text-sm flex items-center gap-2">
              <CreditCard className="w-4 h-4" style={{ color: '#C5A253' }} /> Choose Payment Method
            </div>

            {/* Bank Transfer */}
            <label className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${config.paymentMethod === 'BANK_TRANSFER' ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
              style={config.paymentMethod === 'BANK_TRANSFER' ? { background: 'rgba(197,162,83,0.06)' } : {}}>
              <div className="flex items-start gap-3">
                <input type="radio" name="paymentMethod" value="BANK_TRANSFER" checked={config.paymentMethod === 'BANK_TRANSFER'}
                  onChange={() => setConfig(c => ({ ...c, paymentMethod: 'BANK_TRANSFER' }))} className="accent-amber-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-stone-800 text-sm">🏦 International Bank Transfer</div>
                  <div className="text-stone-500 text-xs mt-0.5">Pay via SWIFT/IBAN wire transfer. 30% deposit to secure your spot. Recommended for international guests.</div>
                  {config.paymentMethod === 'BANK_TRANSFER' && (
                    <div className="mt-3 p-3 rounded-xl bg-stone-50 text-xs text-stone-600 space-y-1 border border-stone-100">
                      <div className="font-semibold text-stone-700 mb-2">Bank Details (sent after confirmation):</div>
                      <div>🏦 Bank: Nabil Bank Ltd, Nepal</div>
                      <div>👤 Account Name: Nepal Spiritual Pvt Ltd</div>
                      <div>📍 Branch: Lalitpur, Nepal</div>
                      <div className="text-amber-700 mt-1">✓ Full details emailed within 24hrs of booking</div>
                    </div>
                  )}
                </div>
              </div>
            </label>

            {/* Cash on Arrival */}
            <label className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${config.paymentMethod === 'CASH' ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
              style={config.paymentMethod === 'CASH' ? { background: 'rgba(197,162,83,0.06)' } : {}}>
              <div className="flex items-start gap-3">
                <input type="radio" name="paymentMethod" value="CASH" checked={config.paymentMethod === 'CASH'}
                  onChange={() => setConfig(c => ({ ...c, paymentMethod: 'CASH' }))} className="accent-amber-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-stone-800 text-sm">💵 Cash on Arrival (USD)</div>
                  <div className="text-stone-500 text-xs mt-0.5">Pay in USD cash upon arrival in Nepal. Available for guests traveling to Kathmandu. Spot subject to availability.</div>
                  {config.paymentMethod === 'CASH' && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-50 text-xs text-amber-800 space-y-1 border border-amber-200">
                      <div>⚠️ Cash payment requires prior confirmation via WhatsApp or email to guarantee your spot.</div>
                      <div>✓ USD, EUR accepted. Exchange available at our centre.</div>
                    </div>
                  )}
                </div>
              </div>
            </label>

            {/* Western Union / Wise */}
            <label className={`block p-4 rounded-2xl border-2 cursor-pointer transition-all ${config.paymentMethod === 'WISE' ? 'border-amber-400' : 'border-stone-200 hover:border-stone-300'}`}
              style={config.paymentMethod === 'WISE' ? { background: 'rgba(197,162,83,0.06)' } : {}}>
              <div className="flex items-start gap-3">
                <input type="radio" name="paymentMethod" value="WISE" checked={config.paymentMethod === 'WISE'}
                  onChange={() => setConfig(c => ({ ...c, paymentMethod: 'WISE' }))} className="accent-amber-600 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-stone-800 text-sm">🌐 Wise / Western Union Transfer</div>
                  <div className="text-stone-500 text-xs mt-0.5">Fast international money transfer via Wise (TransferWise) or Western Union. Low fees, quick processing.</div>
                  {config.paymentMethod === 'WISE' && (
                    <div className="mt-3 p-3 rounded-xl bg-stone-50 text-xs text-stone-600 space-y-1 border border-stone-100">
                      <div>📧 Wise email: meditationastro1@gmail.com</div>
                      <div>🌐 Western Union details sent after booking confirmation</div>
                    </div>
                  )}
                </div>
              </div>
            </label>
          </div>

          <div className="p-4 rounded-2xl text-sm" style={{ background: 'rgba(197,162,83,0.08)', border: '1px solid rgba(197,162,83,0.25)' }}>
            <div className="font-semibold text-stone-800 mb-2">📋 Booking Process</div>
            <div className="text-stone-600 space-y-1 text-xs">
              <div>1. Submit request → receive confirmation email with booking reference</div>
              <div>2. Our team confirms availability within 24 hours</div>
              <div>3. Pay 30% deposit to secure your spot (balance due 30 days before arrival)</div>
              <div>4. Receive full retreat details, packing list, and airport pickup info</div>
            </div>
          </div>

          {error && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{error}</div>}

          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="flex-1 py-3.5 rounded-2xl border-2 border-stone-200 text-stone-600 font-semibold hover:bg-stone-50 transition-all flex items-center justify-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
            <button onClick={handleSubmit} disabled={submitting}
              className="flex-1 py-3.5 rounded-2xl font-semibold text-stone-900 disabled:opacity-60 flex items-center justify-center gap-2 transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CreditCard className="w-4 h-4" />}
              {submitting ? 'Submitting...' : 'Submit Booking Request'}
            </button>
          </div>

          <a href={`https://wa.me/9779851187267?text=${encodeURIComponent(waText)}`} target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl border-2 border-stone-200 hover:bg-stone-50 text-sm font-semibold text-stone-700 transition-all">
            <MessageCircle className="w-4 h-4" /> Book via WhatsApp instead
          </a>

          <p className="text-xs text-stone-400 text-center">
            Free cancellation 30 days before arrival · meditationastro1@gmail.com
          </p>
        </div>
      )}
    </div>
  );
}
