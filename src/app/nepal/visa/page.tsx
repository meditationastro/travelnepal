export const metadata = {
  title: 'Visa & Arrival | Nepal | Himalaya Retreat',
  description:
    'Visa-on-arrival basics, airport tips, and a simple first-day checklist for retreat guests traveling to Nepal.',
};

export default function NepalVisaPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-stone-300 text-sm tracking-widest uppercase">Nepal • Visa</p>
          <h1 className="font-display text-5xl text-white font-semibold mt-3">Visa + Arrival</h1>
          <p className="text-stone-300 text-lg mt-4">
            A simple arrival flow so you can land calm and ready for retreat.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Visa basics</h2>
            <p className="text-stone-700 mt-3">
              Many travelers use visa-on-arrival in Kathmandu. Requirements can change, so always verify with an official
              government source or your airline before travel.
            </p>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Passport valid for at least 6 months</li>
              <li>A passport photo (often optional, but helpful)</li>
              <li>Payment method for visa fee (cash is safest)</li>
              <li>Return/onward travel details</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">Airport arrival checklist</h2>
            <ol className="list-decimal pl-5 mt-3 text-stone-700 space-y-2">
              <li>Immigration + visa</li>
              <li>Collect luggage</li>
              <li>Withdraw cash (ATM) if needed</li>
              <li>Buy a SIM card or eSIM plan</li>
              <li>Arrange transport (pre-booked pickup is best)</li>
            </ol>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-stone-900">First-day suggestions</h2>
            <ul className="list-disc pl-5 mt-3 text-stone-700 space-y-2">
              <li>Hydrate and eat something simple</li>
              <li>Take a short walk, then rest</li>
              <li>Keep evening plans light—sleep is your best jet lag medicine</li>
            </ul>
          </div>

          <div className="text-stone-600 text-sm">
            Note: This page is a practical guide, not legal advice. Always confirm visa rules for your nationality.
          </div>
        </div>
      </section>
    </div>
  );
}
