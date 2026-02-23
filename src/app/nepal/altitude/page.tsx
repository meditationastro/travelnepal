export const metadata = {
  title: 'Altitude Guide | Nepal | Himalaya Retreat',
  description:
    'A gentle altitude guide for retreat guests: acclimatization tips, hydration, rest, and common warning signs.',
};

export default function NepalAltitudePage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Nepal • Altitude</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Altitude Guide</h1>
          <p className="text-stone-300 text-lg mt-4">
            Acclimatize gently. Hydrate. Rest. Listen to your body.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Simple acclimatization tips</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Increase altitude gradually when possible</li>
              <li>Hydrate more than usual (especially while traveling)</li>
              <li>Avoid heavy alcohol in the first 48 hours</li>
              <li>Keep the first day gentle: light walk, early sleep</li>
              <li>Eat simple, warm meals</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Common symptoms</h2>
            <p className="text-stone-700 mt-3">
              Mild symptoms can happen: headache, fatigue, light nausea, reduced appetite.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">When to seek help</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Severe headache that does not improve</li>
              <li>Shortness of breath at rest</li>
              <li>Confusion, fainting, or difficulty walking straight</li>
              <li>Worsening symptoms despite rest and hydration</li>
            </ul>
            <p className="text-stone-700 mt-3">
              If symptoms worsen, the safest response is to stop ascending and descend if advised.
            </p>
          </div>

          <div className="text-stone-600 text-sm">
            This guide is educational, not medical advice. If you have medical concerns, consult a clinician before travel.
          </div>
        </div>
      </section>
    </div>
  );
}
