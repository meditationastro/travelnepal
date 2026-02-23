import Link from 'next/link';

export const metadata = {
  title: 'Private Immersion Retreat | Himalaya Retreat',
  description:
    'A bespoke private meditation and Vedic astrology immersion in Nepal—custom schedule, one-on-one guidance, and deep integration.',
};

export default function PrivateImmersionPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🕯️</div>
          <h1 className="font-display text-5xl text-white font-semibold">Private Immersion</h1>
          <p className="text-stone-300 text-lg mt-4 max-w-2xl mx-auto">
            A fully customized retreat—designed around your goals, your schedule, and your pace.
            Deep meditation training, private astrology sessions, and embodied integration.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-gold px-8 py-3 rounded-2xl font-semibold text-white">
              Request a Proposal
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '9779800000000'}?text=${encodeURIComponent(
                'Hi! I want to ask about the Private Immersion retreat.'
              )}`}
              className="px-8 py-3 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-6">
          {[{
            title: '1:1 Guidance',
            desc: 'Daily private sessions—meditation instruction, inquiry, and practical coaching.',
          }, {
            title: 'Astrology + Timing',
            desc: 'A full Jyotish reading to clarify themes, cycles, and next steps.',
          }, {
            title: 'Integration Plan',
            desc: 'A personalized practice plan + post-retreat check-ins to sustain change.',
          }].map((c) => (
            <div key={c.title} className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
              <h3 className="font-display text-xl font-semibold text-stone-900">{c.title}</h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 mt-8">
          <h2 className="font-display text-2xl font-semibold text-stone-900">What you can request</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-stone-700">
            <li>• 3–14 day private schedule</li>
            <li>• Silent days (optional)</li>
            <li>• Breathwork + yoga (gentle)</li>
            <li>• Sacred-site day trips</li>
            <li>• Nutrition/Ayurveda guidance</li>
            <li>• Online follow-up coaching</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
