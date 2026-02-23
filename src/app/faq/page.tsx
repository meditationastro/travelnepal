'use client';
import { useState } from 'react';
import Link from 'next/link';

const sections = [
  {
    title: '📅 Booking & Reservations',
    faqs: [
      { q: 'How do I book a retreat?', a: 'Choose your retreat from our retreats page, select your dates and room type, fill in your details and submit the booking request form. You\'ll receive a reference number immediately, and our team will confirm availability and payment details within 24 hours.' },
      { q: 'Is a deposit required?', a: 'Yes — a 30% deposit confirms your booking. The balance is due 30 days before arrival. We accept bank transfer, Western Union, and for some programs, cash on arrival. We\'re flexible — contact us on WhatsApp to discuss options.' },
      { q: 'Can I book via WhatsApp?', a: 'Absolutely! In fact, many guests prefer this. Send us a message at +977 9851187267 and we\'ll walk you through everything, including helping you choose the right retreat for your needs and budget.' },
      { q: 'How far in advance should I book?', a: 'We recommend booking 4–8 weeks in advance for 7-day and 14-day programs, as space is limited (8–15 guests maximum). The 3-day retreat has more flexibility. Early bird discounts apply 60+ days in advance.' },
      { q: 'Do you offer gift certificates?', a: 'Yes! We can issue a gift certificate for any retreat, session, or set amount. These make deeply meaningful gifts. Contact us for details.' },
    ],
  },
  {
    title: '✈️ Travel to Nepal',
    faqs: [
      { q: 'How do I get to the retreat?', a: 'Fly into Tribhuvan International Airport (KTM) in Kathmandu. We are located in Khumaltar, Lalitpur — approximately 30–45 minutes from the airport by taxi. Our 7-day and 14-day programs include airport pickup; we can also arrange transport for other programs.' },
      { q: 'Do I need a visa to enter Nepal?', a: 'Most nationalities can obtain a visa on arrival at Kathmandu airport (30-day tourist visa currently $30 USD). Bring passport photos, cash USD, and your onward ticket. Indian citizens do not need a visa. We recommend checking your country\'s requirements before travel.' },
      { q: 'What vaccinations do I need?', a: 'No vaccinations are legally required to enter Nepal, but we recommend Hepatitis A, Typhoid, and ensuring routine immunizations are up to date. Consult your doctor 4–6 weeks before travel. We are at 1,400m altitude, so altitude sickness is very unlikely in Lalitpur.' },
      { q: 'What is the best time to visit Nepal?', a: 'October–November (post-monsoon, crystal clear skies) and March–May (spring, rhododendrons blooming) are the best times. We operate retreats year-round — June–September sees more rain but the landscape is incredibly lush and prices are lower.' },
      { q: 'Is Nepal safe for solo female travelers?', a: 'Nepal is generally very safe and welcoming. Our retreat is a secure, community environment. We have hosted hundreds of solo female travelers from around the world without incident. Take the usual urban precautions in Kathmandu city.' },
    ],
  },
  {
    title: '🧘 During Your Retreat',
    faqs: [
      { q: 'What is a typical day like?', a: 'Days begin at 5:30am with optional early meditation, followed by yoga/pranayama at 6am, breakfast at 8am. Morning sessions run 9am–12pm, lunch at 12:30pm, rest 1:30–3pm, afternoon sessions 3–5:30pm, dinner at 6pm, evening practice 7–8pm, lights out at 9:30pm. Exact schedules vary by program.' },
      { q: 'Do I need prior meditation experience?', a: 'No. All our programs — including the 14-day intensive — welcome beginners. Our teachers are trained to work with complete newcomers and advanced practitioners simultaneously. Simply come with openness and willingness.' },
      { q: 'Is there WiFi at the retreat?', a: 'We have WiFi available in common areas. However, we encourage limiting device use, especially during the first few days, as immersion significantly deepens the experience. The 14-day program includes a recommended digital detox period during the silent phase.' },
      { q: 'What should I pack?', a: 'Layers (Lalitpur can be cool in mornings and evenings), comfortable yoga/meditation clothes, walking shoes, insect repellent, sunscreen, modest temple-appropriate attire, your regular medications, a journal, and any sacred items meaningful to you. We provide mats, cushions, and basic toiletries.' },
      { q: 'Can I extend my stay?', a: 'Often yes, subject to availability. Many guests love their experience so much they extend informally. Speak with Govinda Das (our coordinator) on arrival and we\'ll see what\'s possible.' },
    ],
  },
  {
    title: '🍽️ Food & Lifestyle',
    faqs: [
      { q: 'What food is served?', a: 'All meals are Ayurvedic vegetarian, prepared according to your dosha type and the season. Expect Nepali and Indian cuisine: dal bhat, seasonal vegetables, khichdi, fresh bread, herbal teas, and Himalayan superfoods. Food is one of the highlights guests mention most.' },
      { q: 'Can you accommodate dietary restrictions?', a: 'Yes — we cater for vegan, gluten-free, nut-free, and other allergies. Please note these clearly in your booking form. We do not serve meat, fish, eggs, onion, or garlic at the retreat (standard sattvic diet).' },
      { q: 'Is alcohol allowed?', a: 'We ask guests to refrain from alcohol during the retreat. This isn\'t a rule enforced as punishment — it\'s that intoxicants genuinely interfere with the depth of meditation practice we\'re trying to support.' },
      { q: 'Can I smoke?', a: 'Smoking is not permitted within the retreat grounds. A designated area outside the main property is available. We gently encourage guests to use the retreat as an opportunity to reduce or stop, as pranayama practice and smoking are quite incompatible.' },
    ],
  },
  {
    title: '💳 Payments & Refunds',
    faqs: [
      { q: 'What payment methods do you accept?', a: 'Bank transfer (wire), Western Union, PayPal (for service fee), cash on arrival (for local guests), and increasingly, ESEWA/KHALTI for Nepali guests. For shop orders: Cash on Delivery (Nepal/India) or bank transfer. WhatsApp us for the latest options.' },
      { q: 'What is your cancellation policy?', a: '60+ days before: 100% refund. 30–59 days before: 50% refund. Within 30 days: No refund, but a credit toward future dates (valid 2 years). Medical emergencies are handled case by case with compassion. We recommend travel insurance.' },
      { q: 'Do you offer financial assistance or scholarships?', a: 'We have a small scholarship fund for practitioners from developing countries who genuinely cannot afford full prices. If this applies to you, write to us honestly at meditationastro1@gmail.com. We believe financial circumstances should never prevent a sincere seeker from practicing.' },
    ],
  },
  {
    title: '🔮 Astrology & Ayurveda',
    faqs: [
      { q: 'What information do I need for a Vedic astrology reading?', a: 'Your exact date, time, and place of birth. The more precise the birth time, the more accurate the reading — especially for Ascendant (rising sign) and timing predictions. Even an approximate time (morning/afternoon/night) allows us to work meaningfully.' },
      { q: 'Are the astrology readings done in person or online?', a: 'Both. In-person readings are available at the retreat center. Online Zoom readings are available globally. We can also provide a written report for those who prefer to review the analysis at their own pace.' },
      { q: 'Is Ayurveda only available during a retreat?', a: 'No — our Ayurveda treatments (massage, Shirodhara, Panchakarma, consultation) are available as standalone services at our Lalitpur treatment center. Contact us to schedule independently of a retreat.' },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string|null>(null);

  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #2d1a00)' }}>
        <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5">Frequently Asked Questions</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto mb-6">Everything you need to know about coming to Himalya Retreat Nepal. Can't find your answer? Message us on WhatsApp — we reply fast.</p>
        <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10">
          💬 WhatsApp: +977 9851187267
        </a>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">
        {sections.map(section => (
          <div key={section.title}>
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-5">{section.title}</h2>
            <div className="space-y-2">
              {section.faqs.map(faq => {
                const key = `${section.title}-${faq.q}`;
                const isOpen = open === key;
                return (
                  <div key={faq.q} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                    <button onClick={() => setOpen(isOpen ? null : key)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                      <span className="font-semibold text-stone-900 text-sm leading-snug">{faq.q}</span>
                      <span className="text-xl text-stone-400 flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <p className="text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="bg-stone-900 rounded-3xl p-8 text-center mt-12">
          <h3 className="font-display text-2xl text-white font-semibold mb-3">Still have questions?</h3>
          <p className="text-stone-400 mb-6">Our team typically responds within 2 hours on WhatsApp and within 24 hours by email.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer"
              className="px-6 py-3 rounded-2xl font-semibold text-white text-sm" style={{ background: '#25D366' }}>💬 WhatsApp</a>
            <Link href="/contact" className="px-6 py-3 rounded-2xl font-semibold text-stone-900 text-sm" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>Send Email</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
