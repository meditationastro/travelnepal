import Link from 'next/link';

export const metadata = {
  title: 'Our Teachers — Himalya Retreat Nepal',
  description: 'Meet the spiritual teachers, Vedic astrologers, and Ayurveda practitioners at Himalya Retreat Nepal in Lalitpur.',
};

const teachers = [
  {
    name: 'Swami Ananda', role: 'Founder & Lead Meditation Teacher', emoji: '🧘', origin: 'Rishikesh, India',
    years: '35+ years practice', languages: 'English, Hindi, Nepali',
    bio: 'Swami Ananda began his spiritual journey at age 14 in the Himalayan foothills of Uttarakhand. After 12 years of intensive study under masters in Rishikesh and Varanasi, he established Himalya Retreat Nepal in 2009 to share the transformative power of authentic Himalayan practice with seekers worldwide.',
    specialties: ['Vipassana (10-day silent retreats)', 'Yoga Nidra', 'Pranayama & breathwork', 'Tibetan Buddhism basics', 'Mantra & Japa meditation'],
    credentials: ['Trained under Swami Niranjanananda at Bihar School of Yoga', 'Studied at Parmarth Niketan, Rishikesh', 'Lineage holder in Himalayan Yoga tradition', '500hr+ Yoga Alliance certified'],
    quote: '"The Himalayas are not just mountains — they are the greatest meditation masters. Sit in their presence and the mind becomes still of its own accord."',
  },
  {
    name: 'Pt. Krishnamurthy', role: 'Vedic Astrologer (Jyotishi)', emoji: '🪐', origin: 'Chennai, Tamil Nadu',
    years: '28 years practice', languages: 'English, Tamil, Sanskrit, Hindi',
    bio: 'Pandit Krishnamurthy comes from a lineage of South Indian Brahmins who have practiced Jyotish for seven generations. He holds a Master\'s degree in Sanskrit and Astrology from Madras University and has been consulting and teaching at the retreat since 2011.',
    specialties: ['Parashari Jyotish (birth chart analysis)', 'Jaimini system', 'Nakshatra-based remedies', 'Muhurta (auspicious timing)', 'Karma & past-life exploration'],
    credentials: ['M.A. Sanskrit & Astrology, Madras University', 'Studied under Pt. K.S. Charak in New Delhi', 'Published author: "Nakshatras: The Cosmic Map"', '3,000+ individual readings given'],
    quote: '"Every planet in your chart is a teacher. Jyotish doesn\'t predict fate — it illuminates the soul\'s chosen curriculum for this lifetime."',
  },
  {
    name: 'Dr. Maya Devi', role: 'Ayurveda Practitioner & Yoga Teacher', emoji: '🌿', origin: 'Kathmandu, Nepal',
    years: '18 years practice', languages: 'English, Nepali, Hindi',
    bio: 'Dr. Maya Devi completed her Bachelor of Ayurvedic Medicine and Surgery at the Institute of Medicine, Tribhuvan University. She trained in therapeutic yoga with BKS Iyengar\'s tradition and integrates both sciences in a uniquely Nepali approach grounded in Himalayan herbs and classical texts.',
    specialties: ['Dosha assessment & balancing', 'Panchakarma cleansing therapies', 'Therapeutic yoga & pranayama', 'Ayurvedic nutrition & cooking', 'Himalayan herbal medicine'],
    credentials: ['BAMS from Tribhuvan University, Kathmandu', 'Panchakarma training at Arya Vaidya Sala, Kerala', 'Iyengar-inspired yoga teacher (700hrs)', 'Certified in Marma therapy'],
    quote: '"Ayurveda teaches us that we are nature. When we align with the rhythms of the cosmos — the seasons, the sun, the doshas — health becomes effortless."',
  },
  {
    name: 'Tenzin Rinpoche', role: 'Tibetan Buddhism & Sound Healing', emoji: '🔔', origin: 'Boudhanath, Nepal',
    years: '22 years practice', languages: 'English, Tibetan, Nepali',
    bio: 'Born in the Sherpa community near Boudhanath stupa, Tenzin Rinpoche received his early training at the Kopan Monastery in Kathmandu. He is an authorized teacher in the Gelug tradition and has studied sound healing with master craftspeople in Patan and Bhaktapur.',
    specialties: ['Tibetan Buddhist meditation', 'Singing bowl sound healing', 'Tonglen (loving-kindness) practice', 'Mandala offerings ceremony', 'Dream yoga'],
    credentials: ['Ordained monk at Kopan Monastery, 2001', 'Studied under Lama Thubten Zopa Rinpoche', 'Certified sound healer (Nada Brahma Institute)', '18-month retreat at Tushita Center, Dharamsala'],
    quote: '"Sound is the most ancient bridge between the ordinary mind and awakening. When the bowl sings, the boundary between self and universe dissolves."',
  },
  {
    name: 'Saraswati Devi', role: 'Kundalini Yoga & Women\'s Wellness', emoji: '🌺', origin: 'Pune, Maharashtra',
    years: '15 years practice', languages: 'English, Hindi, Marathi',
    bio: 'Saraswati Devi discovered Kundalini Yoga during a period of personal transformation and devoted herself to its study under teachers in the Yogi Bhajan lineage. She has a deep interest in the intersection of yoga, Jungian psychology, and women\'s sacred wisdom traditions.',
    specialties: ['Kundalini Yoga kriyas', 'Chakra healing & activation', 'Women\'s moon circle facilitation', 'Somatic breathwork', 'Dream interpretation'],
    credentials: ['300hr Kundalini Yoga Teacher Training (Amrit Nam Sarovar)', 'Certification in Somatic Experiencing (Peter Levine method)', 'Studied at Osho Commune International, Pune', 'Women\'s Wellness Coach (ICF accredited)'],
    quote: '"Kundalini is not something exotic or dangerous — it is the energy of awakening that is your birthright. We simply create the conditions for it to rise naturally."',
  },
  {
    name: 'Govinda Das', role: 'Karma Yoga & Retreat Coordinator', emoji: '🙏', origin: 'Varanasi, Uttar Pradesh',
    years: '12 years practice', languages: 'English, Hindi, Nepali',
    bio: 'Govinda Das brings the spirit of selfless service (karma yoga) to every aspect of retreat life. From coordinating logistics to leading kirtan evenings, he is the warm heart of Himalya Retreat Nepal. He trained in the Vaishnava tradition and has a background in community development work across Nepal and India.',
    specialties: ['Karma Yoga & seva (selfless service)', 'Bhakti yoga & kirtan', 'Community integration', 'Retreat coordination', 'Sanskrit chanting'],
    credentials: ['3-year residential study at Vrindavan ashram', 'Diploma in Community Development (Kathmandu University)', 'Trained tabla & harmonium player', 'Sanskrit proficiency certificate'],
    quote: '"Every act of genuine service is a prayer. When we give without expecting anything in return, we discover that we were never separate from what we were seeking."',
  },
];

export default function TeachersPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917, #27422b)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">The Lineage</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-6">Meet Your Teachers</h1>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Our team of dedicated practitioners brings decades of authentic training in meditation, Vedic astrology, Ayurveda, and Tibetan Buddhism — rooted in living lineages, not textbooks.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 justify-center text-stone-400 text-sm">
            <span>🧘 6 resident teachers</span>
            <span>⭐ 150+ combined years of practice</span>
            <span>🌍 Guests from 40+ countries</span>
          </div>
        </div>
      </section>

      {/* Teachers */}
      <div className="max-w-5xl mx-auto px-4 py-20 space-y-16">
        {teachers.map((teacher, i) => (
          <div key={teacher.name} className={`grid lg:grid-cols-5 gap-10 items-start ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
            {/* Portrait */}
            <div className={`lg:col-span-2 ${i % 2 === 1 ? 'lg:col-start-4' : ''}`}>
              <div className="rounded-3xl overflow-hidden shadow-lg sticky top-28">
                <div className="aspect-square flex items-center justify-center text-8xl" style={{ background: 'linear-gradient(135deg, #fdf4e3, #e8d4b0)' }}>
                  {teacher.emoji}
                </div>
                <div className="bg-white p-5 border-t border-stone-100">
                  <div className="text-xs text-stone-400 mb-3 space-y-1.5">
                    <div>📍 {teacher.origin}</div>
                    <div>⏳ {teacher.years}</div>
                    <div>🗣️ {teacher.languages}</div>
                  </div>
                  <blockquote className="text-sm text-stone-600 italic leading-relaxed border-l-4 pl-3" style={{ borderColor: '#C5A253' }}>
                    {teacher.quote}
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="font-display text-3xl font-semibold text-stone-900 mb-1">{teacher.name}</h2>
                <p className="text-amber-700 font-medium">{teacher.role}</p>
              </div>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">{teacher.bio}</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-3 text-sm uppercase tracking-wider">Specialties</h4>
                  <ul className="space-y-2">
                    {teacher.specialties.map(s => (
                      <li key={s} className="flex items-start gap-2 text-stone-600 text-sm">
                        <span className="mt-0.5 text-amber-500">✦</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-3 text-sm uppercase tracking-wider">Credentials</h4>
                  <ul className="space-y-2">
                    {teacher.credentials.map(c => (
                      <li key={c} className="flex items-start gap-2 text-stone-600 text-sm">
                        <span className="mt-0.5 text-green-600">✓</span> {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #2d1a00)' }}>
        <h2 className="font-display text-4xl text-white font-semibold mb-4">Learn from the Masters</h2>
        <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">Book a retreat and immerse yourself in authentic Himalayan wisdom with our resident teachers.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/retreats" className="px-8 py-4 rounded-2xl font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
            View Retreats
          </Link>
          <Link href="/contact" className="px-8 py-4 rounded-2xl font-semibold text-white border border-white/30 hover:bg-white/10">
            Ask a Question
          </Link>
        </div>
      </section>
    </div>
  );
}
