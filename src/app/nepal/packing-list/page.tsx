export const metadata = {
  title: 'Packing List | Nepal Retreat | Himalaya Retreat',
  description:
    'A practical packing list for Nepal meditation retreats—layers, footwear, toiletries, and altitude-friendly essentials.',
};

export default function NepalPackingListPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Nepal • Packing</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Retreat Packing List</h1>
          <p className="text-stone-300 text-lg mt-4">
            Bring less than you think. Aim for comfort, layers, and simplicity.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Clothing</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Light layers for daytime + warm layers for evenings</li>
              <li>Comfortable meditation clothes (loose, breathable)</li>
              <li>Rain jacket (monsoon seasons) + hat</li>
              <li>Warm socks + a light scarf or shawl</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Footwear</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Walking shoes with good grip</li>
              <li>Slip-on sandals for retreat centers / indoors</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Health + Comfort</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Personal medications + basic first-aid</li>
              <li>Electrolytes (helpful during travel and altitude changes)</li>
              <li>Reusable water bottle</li>
              <li>Earplugs + eye mask (light sleepers)</li>
              <li>Sunscreen + lip balm (sun + dry air)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Retreat Essentials</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Journal + pen</li>
              <li>Small daypack for excursions</li>
              <li>Travel adapter (Type C/D/M depending on your plug)</li>
              <li>Optional: lightweight meditation shawl / cushion cover</li>
            </ul>
          </div>

          <div className="text-stone-600 text-sm">
            Tip: keep valuables minimal. Nepal is friendly, but travel is always easier with less.
          </div>
        </div>
      </section>
    </div>
  );
}
