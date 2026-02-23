import Link from 'next/link';

export const metadata = {
  title: 'Group & Corporate Retreats | Himalaya Retreat',
  description:
    'Bring your group to Nepal for a custom meditation retreat—team renewal, leadership clarity, and mindful culture-building.',
};

export default function GroupCorporatePage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="text-5xl mb-4">🤝</div>
          <h1 className="font-display text-5xl text-white font-semibold">Group & Corporate Retreats</h1>
          <p className="text-stone-300 text-lg mt-4 max-w-2xl mx-auto">
            A retreat program tailored for teams, founders, educators, and community groups.
            Build clarity, cohesion, and sustainable energy—without the noise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-gold px-8 py-3 rounded-2xl font-semibold text-white">
              Plan a Group Retreat
            </Link>
            <Link href="/nepal/travel-guide" className="px-8 py-3 rounded-2xl font-semibold border border-white/20 text-white hover:bg-white/10">
              Travel Guide
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">Common outcomes</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• Stress downshift + deep rest</li>
              <li>• Sharper decision-making</li>
              <li>• Better communication under pressure</li>
              <li>• Team cohesion through shared practice</li>
              <li>• Leadership clarity + values alignment</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
            <h2 className="font-display text-2xl font-semibold text-stone-900">What we can customize</h2>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>• 2–10 day schedules</li>
              <li>• Workshops: mindfulness, breath, compassion, focus</li>
              <li>• Optional astrology sessions for leaders</li>
              <li>• Outdoor practices + nature integration</li>
              <li>• Dietary needs + private accommodations</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
          <h3 className="font-display text-xl font-semibold text-stone-900">How it works</h3>
          <ol className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-stone-700">
            <li className="rounded-2xl bg-stone-50 p-4 border border-stone-100">
              <div className="font-semibold">1) Tell us your goals</div>
              <div className="text-stone-600 mt-1">Team size, dates, and outcomes you want.</div>
            </li>
            <li className="rounded-2xl bg-stone-50 p-4 border border-stone-100">
              <div className="font-semibold">2) We propose a schedule</div>
              <div className="text-stone-600 mt-1">Practice blocks, workshops, and logistics.</div>
            </li>
            <li className="rounded-2xl bg-stone-50 p-4 border border-stone-100">
              <div className="font-semibold">3) You arrive and reset</div>
              <div className="text-stone-600 mt-1">We handle on-site flow so you can focus.</div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
