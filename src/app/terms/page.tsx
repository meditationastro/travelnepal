import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Himalya Retreat Nepal',
  description: 'Terms of Service for Himalya Retreat Nepal — retreat bookings, cancellation policy, astrology readings, Ayurveda treatments, and website usage policies.',
};

const sections = [
  {
    id:'acceptance', title:'1. Acceptance of Terms',
    content:`By accessing or using the Himalya Retreat Nepal website (himalyaretreat.com) or booking any program, service, or consultation offered by Himalya Retreat Nepal ("we", "us", "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, guests, retreat participants, and users of our website, including those who book retreats, astrology readings, Ayurvedic consultations, yoga classes, or any other programs.`,
  },
  {
    id:'services', title:'2. Services Offered',
    content:`Himalya Retreat Nepal provides the following services, each subject to availability and confirmation:

**Retreat Programs:** 3-Day Mindfulness Retreat, 7-Day Meditation & Astrology Retreat, 14-Day Himalayan Awakening, Private Immersion Retreats, and Group & Corporate Retreats. Programs include accommodation, meals, daily activities, and instruction as specified in individual program descriptions.

**Vedic Astrology (Jyotish):** Birth chart readings, karma readings, compatibility assessments, career guidance, and online consultations. These are spiritual and philosophical consultations — not medical, legal, financial, or psychological advice.

**Ayurvedic Services:** Dosha consultations, Abhyanga, Shirodhara, Panchakarma, and herbal treatments. These are traditional wellness practices — not a substitute for medical diagnosis or treatment.

**Yoga Programs:** Daily classes, workshops, and 200-hour Yoga Teacher Training (YTT). The YTT certificate is issued by Himalya Retreat Nepal and is affiliated with Yoga Alliance RYS-200.

**Online Consultations:** Astrology, yoga, and meditation guidance sessions via Zoom or WhatsApp, available worldwide.`,
  },
  {
    id:'bookings', title:'3. Booking & Payment',
    content:`**Deposit:** A 20% non-refundable deposit is required to confirm your booking for retreat programs. Full payment is due 30 days before the retreat start date.

**Payment Methods:** Bank transfer (SWIFT), Western Union, PayPal, credit/debit card (via Stripe), and local Nepal payment options. All prices are in USD unless otherwise stated.

**Booking Confirmation:** Your booking is confirmed only upon receipt of the deposit and a written confirmation from Himalya Retreat Nepal via email or WhatsApp.

**Availability:** All programs are subject to availability. We reserve the right to waitlist or decline bookings if a program is full or not suitable for the applicant.

**Astrology & Consultation Bookings:** Single-session bookings require payment in advance via the methods listed above or on the day of the session for in-person appointments.`,
  },
  {
    id:'cancellation', title:'4. Cancellation & Refund Policy',
    content:`**Cancellation by Guest:**
• More than 60 days before arrival: Full refund minus the 20% deposit.
• 30–60 days before arrival: 50% refund of total program fee.
• 15–30 days before arrival: 25% refund of total program fee.
• Less than 15 days before arrival: No refund. Credit may be offered for future dates at our discretion.

**No-shows:** No refund is provided for no-shows.

**Cancellation by Himalya Retreat Nepal:** If we cancel a program due to unforeseen circumstances (natural disaster, government restrictions, force majeure, minimum enrollment not met), you will receive a full refund or the option to reschedule at no additional cost.

**Single Sessions:** Ayurvedic treatments, astrology sessions, and yoga classes may be rescheduled up to 24 hours before. Cancellations within 24 hours forfeit 50% of the session fee.

**Travel Insurance:** We strongly recommend purchasing comprehensive travel insurance covering trip cancellation, medical evacuation, and personal liability before traveling to Nepal.`,
  },
  {
    id:'health', title:'5. Health, Safety & Participation',
    content:`**Health Disclosure:** You are responsible for disclosing any health conditions, injuries, disabilities, medications, or mental health conditions that may affect your participation in retreat activities. We reserve the right to exclude participants from specific activities if we deem participation a risk to their health or the safety of others.

**Medical Clearance:** We recommend consulting your doctor before traveling to Nepal, particularly for altitude-related considerations. Khumaltar sits at approximately 1,380 meters (4,527 ft) above sea level.

**Assumption of Risk:** Participation in yoga, meditation, hiking, trekking, and other physical activities carries inherent risks. By booking, you acknowledge and accept these risks.

**Ayurveda Disclaimer:** Ayurvedic treatments are traditional wellness practices. They are not a substitute for modern medical diagnosis, treatment, or medication. Do not discontinue any prescribed medication without consulting your physician.

**Astrology Disclaimer:** Vedic astrology readings are spiritual and philosophical in nature. They should not be construed as medical, psychological, legal, or financial advice. Life decisions are your sole responsibility.

**Alcohol & Substances:** Our retreat center is alcohol and substance-free. Guests found with alcohol or prohibited substances may be asked to leave without refund.`,
  },
  {
    id:'conduct', title:'6. Guest Conduct',
    content:`All guests are expected to treat staff, teachers, and fellow guests with respect and courtesy. Himalya Retreat Nepal reserves the right to ask any guest to leave the program if their behavior is disruptive, disrespectful, threatening, or violates the values of the retreat. No refund will be provided in such cases.

Respect for local customs, traditions, and sacred sites is expected from all guests. Photography of religious ceremonies, local people, or sacred spaces requires explicit permission.`,
  },
  {
    id:'ip', title:'7. Intellectual Property',
    content:`All content on this website — including text, images, photographs, video, graphics, logos, course materials, teachings, and program designs — is the property of Himalya Retreat Nepal or our content partners and is protected by copyright law.

You may not copy, reproduce, distribute, publish, or create derivative works from any content without our written permission. Sharing a direct link to our website is permitted and encouraged.

Program participants may not record, photograph, or distribute teachings, sessions, or materials without explicit written consent from Himalya Retreat Nepal.`,
  },
  {
    id:'privacy', title:'8. Privacy',
    content:`We collect personal data (name, email, phone, birth data for astrology) solely for the purpose of providing our services. We do not sell, rent, or share personal data with third parties except as required by law.

Birth chart data and personal spiritual information shared during consultations is treated with strict confidentiality.

For full details, please see our Privacy Policy at himalyaretreat.com/privacy.`,
  },
  {
    id:'liability', title:'9. Limitation of Liability',
    content:`To the maximum extent permitted by applicable law, Himalya Retreat Nepal shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, health outcomes, or goodwill — arising from:

• Your participation in retreat programs or activities
• Ayurvedic or astrology consultations or their outcomes
• Transportation, trekking, or excursions arranged by us or by third parties
• Health issues arising during or after your visit
• Circumstances beyond our control (weather, political situations, government restrictions, natural disasters)

Our maximum liability to any guest shall not exceed the total amount paid for the specific service in question.`,
  },
  {
    id:'governing', title:'10. Governing Law',
    content:`These Terms of Service are governed by the laws of Nepal. Any disputes shall first be subject to good-faith mediation. Unresolved disputes shall be subject to the exclusive jurisdiction of the courts of Lalitpur, Nepal.

If you are a consumer in the European Union, you may also have rights under EU consumer protection law, which these terms do not limit.`,
  },
  {
    id:'changes', title:'11. Changes to These Terms',
    content:`We reserve the right to update these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our services after changes constitutes acceptance of the revised terms.

If you have questions about these terms, please contact us at meditationastro1@gmail.com or +977 9851187267.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>

      {/* Header */}
      <section className="pt-20 py-16 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #C5A253, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">⚖️</div>
          <h1 className="font-display text-5xl text-white font-semibold mb-4">Terms of Service</h1>
          <p className="text-stone-400 text-lg max-w-xl mx-auto mb-3">Please read these terms carefully before booking any program or service at Himalya Retreat Nepal.</p>
          <p className="text-stone-500 text-sm">Last Updated: January 1, 2025 · Effective: January 1, 2025</p>
        </div>
        <div className="relative h-12 overflow-hidden mt-10">
          <svg viewBox="0 0 1440 48" className="absolute bottom-0 w-full" preserveAspectRatio="none"><path fill="#fdf8f0" d="M0,48 L360,16 L720,40 L1080,8 L1440,36 L1440,48 Z" /></svg>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 grid lg:grid-cols-4 gap-10">

        {/* Table of Contents Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
            <h3 className="font-display text-sm font-semibold text-stone-900 mb-3 uppercase tracking-wide">Contents</h3>
            <nav className="space-y-1">
              {sections.map(s => (
                <a key={s.id} href={`#${s.id}`} className="block text-xs text-stone-500 hover:text-amber-700 hover:pl-1 transition-all py-1">
                  {s.title}
                </a>
              ))}
            </nav>
            <div className="mt-5 pt-5 border-t border-stone-100">
              <p className="text-xs text-stone-400 mb-3">Questions about these terms?</p>
              <a href="mailto:meditationastro1@gmail.com" className="block text-xs font-semibold text-amber-700 hover:text-amber-600">meditationastro1@gmail.com</a>
              <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer" className="block text-xs font-semibold mt-1" style={{ color: '#25D366' }}>💬 WhatsApp Us</a>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-3 space-y-8">
          {/* Intro */}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
            <p className="text-stone-700 text-sm leading-relaxed">
              These Terms of Service govern your relationship with <strong>Himalya Retreat Nepal</strong>, a spiritual retreat center located at Khumaltar, Lalitpur, Nepal. By using our website or booking any service, you agree to these terms. These terms were last updated on <strong>January 1, 2025</strong>.
            </p>
          </div>

          {/* Sections */}
          {sections.map(s => (
            <section key={s.id} id={s.id} className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 scroll-mt-28">
              <h2 className="font-display text-xl font-semibold text-stone-900 mb-4 pb-3 border-b border-stone-100">{s.title}</h2>
              <div className="text-stone-600 text-sm leading-relaxed space-y-3">
                {s.content.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.includes(':**')) {
                    const colonIdx = para.indexOf(':**');
                    const heading = para.slice(2, colonIdx);
                    const rest = para.slice(colonIdx + 3).trim();
                    return (
                      <div key={i}>
                        <strong className="text-stone-800">{heading}:</strong>
                        <span className="ml-1">{rest}</span>
                      </div>
                    );
                  }
                  if (para.startsWith('•')) {
                    return (
                      <ul key={i} className="space-y-1">
                        {para.split('\n').map((line, j) => line.startsWith('•') ? (
                          <li key={j} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C5A253' }} />
                            <span>{line.slice(1).trim()}</span>
                          </li>
                        ) : null)}
                      </ul>
                    );
                  }
                  return <p key={i}>{para}</p>;
                })}
              </div>
            </section>
          ))}

          {/* Contact box */}
          <div className="rounded-2xl p-7 text-center" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
            <div className="text-3xl mb-3">🙏</div>
            <h3 className="font-display text-xl text-white font-semibold mb-2">Questions About These Terms?</h3>
            <p className="text-stone-400 text-sm mb-5">Contact our team — we're happy to clarify anything before you book.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:meditationastro1@gmail.com" className="px-6 py-3 rounded-full text-sm font-semibold border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 transition-all">
                ✉️ meditationastro1@gmail.com
              </a>
              <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full text-sm font-semibold text-white hover:opacity-90 transition-all" style={{ background: '#25D366' }}>
                💬 WhatsApp: +977 9851187267
              </a>
            </div>
          </div>

          {/* Related links */}
          <div className="flex flex-wrap gap-3 justify-center pb-4">
            <Link href="/privacy" className="text-sm text-stone-500 hover:text-amber-700 underline underline-offset-2">Privacy Policy</Link>
            <span className="text-stone-300">·</span>
            <Link href="/faq" className="text-sm text-stone-500 hover:text-amber-700 underline underline-offset-2">FAQ</Link>
            <span className="text-stone-300">·</span>
            <Link href="/contact" className="text-sm text-stone-500 hover:text-amber-700 underline underline-offset-2">Contact Us</Link>
            <span className="text-stone-300">·</span>
            <Link href="/retreats" className="text-sm text-stone-500 hover:text-amber-700 underline underline-offset-2">View Retreats</Link>
          </div>
        </main>
      </div>
    </div>
  );
}
