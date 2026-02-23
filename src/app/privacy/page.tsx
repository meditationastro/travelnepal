export const metadata = {
  title: 'Privacy Policy | Himalaya Retreat',
  description: 'Privacy policy for Himalaya Retreat website and bookings.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl font-semibold text-stone-900">Privacy Policy</h1>
        <p className="text-stone-600 mt-4">
          We collect only the information needed to process bookings and support your retreat experience (e.g., name, email,
          and booking details). We do not sell personal data.
        </p>
        <div className="mt-8 space-y-4 text-sm text-stone-700">
          <p><b>Data we collect:</b> contact details, booking details, and optional notes you provide.</p>
          <p><b>How we use it:</b> to confirm bookings, communicate updates, and improve services.</p>
          <p><b>Security:</b> we take reasonable steps to protect data, but no method is 100% secure.</p>
          <p><b>Contact:</b> if you want data removed, contact us from the site contact page.</p>
        </div>
      </section>
    </div>
  );
}
