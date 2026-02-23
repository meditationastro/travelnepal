import Link from 'next/link';

export const metadata = {
  title: 'Spiritual Sites in Nepal | Himalaya Retreat',
  description:
    'A curated list of spiritual sites in Nepal: Pashupatinath, Swayambhunath, Boudhanath, Lumbini, and Himalayan pilgrimage locations.',
};

const SITES = [
  {
    name: 'Pashupatinath Temple (Kathmandu)',
    note: 'A revered Shiva temple complex along the Bagmati River. Dress modestly and observe respectfully.',
  },
  {
    name: 'Boudhanath Stupa (Kathmandu)',
    note: 'One of the largest stupas in the world. Walk clockwise; mornings and evenings are most atmospheric.',
  },
  {
    name: 'Swayambhunath (Monkey Temple)',
    note: 'A hilltop stupa with panoramic views. Go early to avoid crowds and heat.',
  },
  {
    name: 'Lumbini',
    note: 'Birthplace of the Buddha. Peaceful monastic zones—ideal for contemplation and slow walking.',
  },
  {
    name: 'Pokhara + World Peace Pagoda',
    note: 'Lakeside calm and mountain views. Great for integration days before/after your retreat.',
  },
  {
    name: 'Sacred Himalayan Pilgrimage (by arrangement)',
    note: 'Select day trips or multi-day journeys depending on season and accessibility.',
  },
];

export default function SpiritualSitesPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Nepal • Sacred Places</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Spiritual Sites in Nepal</h1>
          <p className="text-stone-300 text-lg mt-4 max-w-3xl">
            A curated starting point. If you want, we can recommend sites based on your retreat dates, energy level, and travel time.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-gold px-7 py-3 rounded-2xl font-semibold text-white">
              Ask for a Custom Itinerary
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {SITES.map((s) => (
            <div key={s.name} className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6">
              <h2 className="font-display text-2xl font-semibold text-stone-900">{s.name}</h2>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">{s.note}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-6 mt-8">
          <h3 className="font-display text-xl font-semibold text-stone-900">Simple etiquette</h3>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-stone-700">
            <li>• Dress modestly (shoulders/knees covered)</li>
            <li>• Remove shoes where required</li>
            <li>• Walk clockwise around stupas</li>
            <li>• Ask before photographing people</li>
            <li>• Speak softly; keep phones silent</li>
            <li>• Offer respect without performative behavior</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
