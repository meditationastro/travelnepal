export const metadata = {
  title: 'Refund Policy | Himalaya Retreat',
  description: 'Refund policy for retreat bookings.',
};

export default function RefundPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-semibold text-stone-900">Refund Policy</h1>
        <p className="text-stone-600 mt-4">
          Refund rules depend on the specific retreat and date. We aim to be fair and transparent.
        </p>
        <div className="mt-8 space-y-4 text-sm text-stone-700">
          <p><b>Rescheduling:</b> when possible, we’ll help you move to a future date.</p>
          <p><b>Cancellations:</b> cancellation terms are shared during booking confirmation.</p>
          <p><b>Special cases:</b> emergencies are handled case-by-case with compassion.</p>
          <p>To request a change, contact us via the website contact form.</p>
        </div>
      </section>
    </div>
  );
}
