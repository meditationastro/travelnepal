import Link from 'next/link';

export const metadata = {
  title: 'Online Consultations | Himalaya Retreat',
  description:
    'Book online meditation coaching or Vedic astrology consultations—video call, notes, and follow-up guidance.',
};

export default function OnlineConsultationsPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Online • Worldwide</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Online Consultations</h1>
          <p className="text-stone-300 text-lg mt-4 max-w-2xl">
            Not in Nepal yet? You can still work with us—online astrology sessions, meditation coaching, and integration support.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn-gold px-7 py-3 rounded-2xl font-semibold text-white">
              Request a Time Slot
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779800000000'}?text=${encodeURIComponent(
                'Hi! I want to book an online consultation.'
              )}`}
              className="px-7 py-3 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">Formats</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• 60–90 min astrology session + notes</li>
              <li>• Weekly meditation coaching (30–45 min)</li>
              <li>• Integration calls after retreats</li>
              <li>• Couple compatibility sessions</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">What to prepare</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• Birth date + location</li>
              <li>• Birth time (best estimate if unknown)</li>
              <li>• 3 questions you want clarity on</li>
              <li>• Your time zone + available windows</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
