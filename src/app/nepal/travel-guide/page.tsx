import Link from 'next/link';

export const metadata = {
  title: 'Nepal Travel Guide for Retreat Guests | Himalaya Retreat',
  description:
    'Practical Nepal travel guide: airport arrival, SIM, cash, weather, altitude tips, and what to pack for the Himalayas.',
};

export default function TravelGuidePage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Nepal • Practical Info</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Travel Guide</h1>
          <p className="text-stone-300 text-lg mt-4 max-w-3xl">
            A simple checklist to make arrival smooth and stress-free.
          </p>
          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="/contact" className="btn-gold px-7 py-3 rounded-2xl font-semibold text-white">Ask a Question</Link>
            <Link href="/nepal/spiritual-sites" className="px-7 py-3 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10">Spiritual Sites</Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">Arrival essentials</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• Have some cash for taxis and small purchases</li>
              <li>• Buy a local SIM at the airport (or in Thamel)</li>
              <li>• Keep a photo of your passport + visa page</li>
              <li>• Use official taxis / ride-hailing where possible</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">Packing basics</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• Layers (mornings and evenings get cold)</li>
              <li>• Light rain jacket + comfortable walking shoes</li>
              <li>• Reusable water bottle</li>
              <li>• Any essential medicines</li>
              <li>• Modest clothing for temples</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">Altitude + health</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-stone-700">
            <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
              <div className="font-semibold">Go slow</div>
              <div className="text-stone-600 mt-1">Hydrate, rest, and avoid overexertion on day 1–2.</div>
            </div>
            <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
              <div className="font-semibold">Eat simply</div>
              <div className="text-stone-600 mt-1">Your digestion may change—warm, simple meals help.</div>
            </div>
            <div className="rounded-2xl bg-stone-50 border border-stone-100 p-4">
              <div className="font-semibold">Listen to symptoms</div>
              <div className="text-stone-600 mt-1">If you feel unwell, tell us early—we’ll adjust schedule.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
