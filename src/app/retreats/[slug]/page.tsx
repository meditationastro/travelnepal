import Link from 'next/link';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { CheckCircle, Clock, Users, MapPin, Calendar, Star, ArrowRight, ChevronRight } from 'lucide-react';
import { BookingForm } from '@/components/booking/BookingForm';

export async function generateStaticParams() {
  return [
    { slug: '3-day-mindfulness' },
    { slug: '7-day-meditation-astrology' },
    { slug: '14-day-himalayan-awakening' },
  ];
}

async function getProgram(slug: string) {
  try {
    return await prisma.retreatProgram.findUnique({
      where: { slug },
      include: {
        dates: {
          where: { isActive: true, startDate: { gte: new Date() } },
          orderBy: { startDate: 'asc' },
        },
      },
    });
  } catch {
    return null;
  }
}

const fallbackData: Record<string, any> = {
  '3-day-mindfulness': {
    id: '1', slug: '3-day-mindfulness', title: '3-Day Mindfulness Retreat',
    description: 'A transformative weekend immersion into the heart of mindfulness practice, set against the breathtaking backdrop of the Himalayas. Perfect for beginners and those seeking a reset from busy modern life.',
    duration: 3, price: 450, earlyBirdPrice: 380, maxParticipants: 15,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
    includes: ['3 nights accommodation (shared room)', 'All meals (Ayurvedic vegetarian)', 'Daily guided meditations (3 sessions/day)', 'Morning yoga & pranayama', 'Nature walks in the Himalayas', 'Welcome ceremony', 'Closing ceremony & certificate'],
    highlights: ['Sunrise meditation at Himalayan viewpoint', 'Traditional Tibetan sound healing session', 'Personal silence practice periods', 'Himalayan herbal tea ceremony', 'Breathwork (Pranayama) training', 'Sacred fire ceremony'],
    dates: [],
    activities: [
      { emoji: '🧘', title: 'Vipassana Meditation', desc: 'Three daily guided sits with instruction in the classical Theravada mindfulness method.', duration: '3 x 60 min' },
      { emoji: '🌅', title: 'Sunrise Yoga & Pranayama', desc: 'Hatha yoga sequence and breathwork on the rooftop terrace as the Himalayas glow at dawn.', duration: '60 min daily' },
      { emoji: '🔔', title: 'Sound Bath Healing', desc: 'Tibetan singing bowls and tingsha bells used to clear energetic blockages and deepen inner stillness.', duration: '90 min' },
      { emoji: '🌿', title: 'Forest Mindfulness Walk', desc: 'Silent walking meditation through the pine forests and terraced fields surrounding the retreat centre.', duration: '2 hrs' },
      { emoji: '📿', title: 'Mala Bead Ceremony', desc: 'Learn traditional Japa mantra practice using a hand-blessed 108-bead Rudraksha mala.', duration: '45 min' },
      { emoji: '🍵', title: 'Ayurvedic Tea Ceremony', desc: 'Traditional preparation and contemplative drinking of Himalayan herbal teas for each dosha type.', duration: '30 min' },
    ],
  },
  '7-day-meditation-astrology': {
    id: '2', slug: '7-day-meditation-astrology', title: '7-Day Meditation & Astrology Retreat',
    description: 'Our signature program combining deep meditation practice with Vedic astrology insights. Discover your cosmic blueprint while cultivating inner stillness in the sacred Himalayas.',
    duration: 7, price: 1200, earlyBirdPrice: 980, maxParticipants: 12,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
    includes: ['7 nights accommodation (private room)', 'All meals (Ayurvedic)', 'Daily meditation & yoga', 'Personal Vedic birth chart reading', 'Astrology workshops (daily)', 'Individual guidance session (60 min)', 'Airport transfer', 'Retreat manual & journal'],
    highlights: ['Personal Vedic birth chart analysis', 'Karma & dharma exploration sessions', 'Himalayan monastery day visit', 'Sacred fire ceremony (Homa)', 'Integration coaching session', 'Planetary meditation practices'],
    dates: [],
    activities: [
      { emoji: '🧘', title: 'Deep Vipassana Practice', desc: 'Progressive daily meditation sits building from 30 minutes to 90-minute silent sits by day 7.', duration: 'Daily' },
      { emoji: '🪐', title: 'Vedic Birth Chart Reading', desc: 'Private 90-minute session with Pt. Krishnamurthy: natal chart, Dasha forecast, and remedies.', duration: '90 min' },
      { emoji: '⭐', title: 'Astrology Workshops', desc: 'Group classes exploring the 9 planets, 27 nakshatras, houses, and how they shape your life.', duration: 'Daily 90 min' },
      { emoji: '🔥', title: 'Sacred Homa Fire Ceremony', desc: 'Planetary fire ritual with mantras to clear karmic imprints and invoke divine blessings.', duration: '2 hrs' },
      { emoji: '🏯', title: 'Monastery Day Visit', desc: 'Guided visit to a Tibetan Buddhist monastery near Boudhanath with a teaching by a senior lama.', duration: 'Full day' },
      { emoji: '🌙', title: 'Planetary Meditation', desc: 'Customized planetary meditation techniques based on your unique birth chart constellation.', duration: 'Daily 60 min' },
      { emoji: '🔔', title: 'Sound Healing Sessions', desc: 'Tibetan singing bowl sessions aligned with your personal birth chart vibrations.', duration: '3 x during week' },
      { emoji: '🌿', title: 'Ayurvedic Consultation', desc: 'Dosha assessment and personalized herbal protocol to support your practice throughout the retreat.', duration: '45 min' },
    ],
  },
  '14-day-himalayan-awakening': {
    id: '3', slug: '14-day-himalayan-awakening', title: '14-Day Himalayan Awakening',
    description: 'The deepest immersion we offer. Two weeks of intensive practice, personal transformation, and cosmic self-discovery. For serious seekers ready for profound change.',
    duration: 14, price: 2800, earlyBirdPrice: 2400, maxParticipants: 8,
    imageUrl: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=1200',
    includes: ['14 nights premium accommodation', 'All meals & snacks', 'Daily 1:1 guidance sessions', 'Complete astrology package', '7 days of silent practice', 'Sacred site trek (Annapurna region)', 'Visa & logistics support', '3-month post-retreat follow-up calls'],
    highlights: ['7-day silent Vipassana retreat', 'Complete Jyotish reading package', 'Past life karma exploration', 'Sacred site pilgrimage', 'Personalized daily sadhana plan', 'Integration into daily life guidance'],
    dates: [],
    activities: [
      { emoji: '🧘', title: '7-Day Silent Vipassana', desc: 'An embedded 7-day silent retreat within the 14-day program. Noble silence, no devices, deep practice.', duration: 'Days 4–10' },
      { emoji: '🪐', title: 'Complete Jyotish Package', desc: 'Birth chart, Karma reading, Compatibility (if applicable), and Muhurta for your next chapter.', duration: '4 sessions' },
      { emoji: '🏔️', title: 'Sacred Site Pilgrimage', desc: 'Multi-day trek and pilgrimage to sacred Himalayan sites including monastery visits and puja.', duration: '3 days' },
      { emoji: '🔥', title: 'Daily 1:1 Guidance', desc: 'Private daily session with your assigned teacher to navigate insights and deepen practice.', duration: '60 min daily' },
      { emoji: '☸', title: 'Past Life Karma Exploration', desc: 'Deep sessions using Vedic astrology and regression techniques to illuminate soul-level patterns.', duration: '3 sessions' },
      { emoji: '🌿', title: 'Panchakarma & Ayurveda', desc: 'Full Panchakarma detox program with Dr. Maya Devi to purify the body for deeper spiritual work.', duration: '5 days' },
      { emoji: '🌙', title: 'Lunar & Planetary Practices', desc: 'Moon cycle meditations, planetary mantras, and cosmic attunement practices tailored to you.', duration: 'Daily' },
      { emoji: '📚', title: 'Sadhana Design Workshop', desc: 'Create a personalized daily practice that will sustain your transformation after you return home.', duration: '3 sessions' },
    ],
  },
};

const schedules: Record<string, Array<{ time: string; activity: string; type: string }>> = {
  '3-day-mindfulness': [
    { time: '5:30 AM', activity: 'Wake up, herbal tea', type: 'rest' },
    { time: '6:00 AM', activity: 'Sunrise meditation & pranayama', type: 'practice' },
    { time: '8:00 AM', activity: 'Ayurvedic breakfast', type: 'meal' },
    { time: '9:30 AM', activity: 'Mindfulness teaching & practice session', type: 'practice' },
    { time: '12:30 PM', activity: 'Ayurvedic lunch', type: 'meal' },
    { time: '2:00 PM', activity: 'Rest & personal integration time', type: 'rest' },
    { time: '3:30 PM', activity: 'Forest mindfulness walk', type: 'activity' },
    { time: '5:30 PM', activity: 'Hatha yoga & body scan', type: 'practice' },
    { time: '7:00 PM', activity: 'Light Ayurvedic dinner', type: 'meal' },
    { time: '8:30 PM', activity: 'Evening meditation & sound healing', type: 'practice' },
    { time: '10:00 PM', activity: 'Noble silence begins', type: 'rest' },
  ],
  '7-day-meditation-astrology': [
    { time: '5:30 AM', activity: 'Wake up & morning pranayama', type: 'practice' },
    { time: '6:00 AM', activity: 'Sunrise meditation (45–90 min)', type: 'practice' },
    { time: '8:00 AM', activity: 'Ayurvedic breakfast', type: 'meal' },
    { time: '9:30 AM', activity: 'Astrology workshop (group)', type: 'activity' },
    { time: '11:30 AM', activity: 'Personal birth chart work or free time', type: 'rest' },
    { time: '1:00 PM', activity: 'Ayurvedic lunch', type: 'meal' },
    { time: '2:30 PM', activity: 'Rest or private consultations', type: 'rest' },
    { time: '4:00 PM', activity: 'Yoga asana practice', type: 'practice' },
    { time: '5:30 PM', activity: 'Meditation sit (guided)', type: 'practice' },
    { time: '7:00 PM', activity: 'Dinner & community sharing', type: 'meal' },
    { time: '8:30 PM', activity: 'Planetary meditation or sound healing', type: 'practice' },
    { time: '10:00 PM', activity: 'Lights out', type: 'rest' },
  ],
  '14-day-himalayan-awakening': [
    { time: '5:00 AM', activity: 'Brahma Muhurta meditation (most auspicious time)', type: 'practice' },
    { time: '7:00 AM', activity: 'Yoga & pranayama', type: 'practice' },
    { time: '8:30 AM', activity: 'Ayurvedic breakfast', type: 'meal' },
    { time: '10:00 AM', activity: 'Morning teaching, workshop, or private session', type: 'activity' },
    { time: '1:00 PM', activity: 'Ayurvedic lunch', type: 'meal' },
    { time: '2:30 PM', activity: 'Rest, journaling, or Ayurvedic treatment', type: 'rest' },
    { time: '4:00 PM', activity: 'Silent practice (Days 4–10 of silent retreat)', type: 'practice' },
    { time: '6:00 PM', activity: 'Evening yoga or qi gong', type: 'practice' },
    { time: '7:30 PM', activity: 'Light dinner', type: 'meal' },
    { time: '8:30 PM', activity: 'Evening fire ceremony or meditation', type: 'practice' },
    { time: '10:00 PM', activity: 'Lights out', type: 'rest' },
  ],
};

const typeColors: Record<string, string> = {
  practice: 'bg-amber-100 text-amber-700',
  meal: 'bg-green-100 text-green-700',
  activity: 'bg-blue-100 text-blue-700',
  rest: 'bg-stone-100 text-stone-500',
};

const faqs = [
  { q: 'Do I need meditation experience?', a: 'No experience is needed for the 3-Day retreat. The 7-Day program is open to all levels. The 14-Day Awakening is recommended for those with some prior practice.' },
  { q: 'What is included in meals?', a: 'All meals are Ayurvedic vegetarian, freshly prepared each day. Vegan, gluten-free, and other dietary needs are accommodated with advance notice. No alcohol or meat is served on-site.' },
  { q: 'What is the cancellation policy?', a: 'Free cancellation up to 30 days before arrival for a full refund. 50% refund for cancellations 15-30 days prior. No refund within 14 days, but credit towards a future program.' },
  { q: 'Do I need a Nepal visa?', a: 'Most nationalities can obtain a visa on arrival at Tribhuvan International Airport. Current fee is USD 30 for 15 days. Our team can advise on your specific nationality.' },
  { q: 'How do I get from the airport?', a: 'Airport pickup is included in 7-day and 14-day programs. For 3-day guests, we can arrange a private car (approx $15-20 from TIA) or assist with taxi guidance.' },
  { q: 'Can I pay in instalments?', a: 'Yes. A 30% deposit secures your place. The balance is due 30 days before arrival. For the 14-day program, we can arrange a 3-instalment payment schedule.' },
];

export default async function RetreatPage({ params }: { params: { slug: string } }) {
  let program = await getProgram(params.slug);
  if (!program) {
    program = fallbackData[params.slug];
    if (!program) notFound();
  }

  const dailySchedule = schedules[params.slug] || schedules['3-day-mindfulness'];
  const activities = (program as any).activities || [];

  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${program.imageUrl || 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920'})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(26,10,0,0.9) 100%)' }} />
        <div className="relative h-full flex items-end pb-16">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="flex items-center gap-2 text-stone-400 text-sm mb-4">
              <Link href="/retreats" className="hover:text-white transition-colors">Retreats</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white">{program.title}</span>
            </div>
            {program.earlyBirdPrice && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-white mb-4" style={{ background: '#E8891A' }}>
                🔥 Early Bird: Save ${program.price - program.earlyBirdPrice} — Limited Spots
              </div>
            )}
            <h1 className="font-display text-4xl md:text-6xl text-white font-semibold mb-5">{program.title}</h1>
            <div className="flex flex-wrap gap-5 text-white/80 mb-6">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" style={{ color: '#C5A253' }} /> {program.duration} Days</span>
              <span className="flex items-center gap-1.5"><Users className="w-4 h-4" style={{ color: '#C5A253' }} /> Max {program.maxParticipants} guests</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" style={{ color: '#C5A253' }} /> Khumaltar, Lalitpur, Nepal</span>
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4" style={{ color: '#C5A253' }} /> 4.9 (120+ reviews)</span>
            </div>
            <div className="flex gap-4">
              <a href="#booking" className="px-6 py-3 rounded-xl font-semibold text-stone-900 text-sm" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
                Book Now — ${program.earlyBirdPrice ?? program.price}
              </a>
              <a href="https://wa.me/9779851187267?text=Namaste! I'm interested in the " target="_blank" rel="noreferrer"
                className="px-6 py-3 rounded-xl font-semibold text-white text-sm border border-white/30 hover:bg-white/10 transition-colors">
                💬 Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">

            {/* Overview */}
            <section id="overview">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">About This Retreat</h2>
              <p className="text-stone-600 leading-relaxed text-lg mb-6">{program.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: '📅', label: 'Duration', value: `${program.duration} Days` },
                  { icon: '👥', label: 'Group Size', value: `Max ${program.maxParticipants}` },
                  { icon: '🏡', label: 'Accommodation', value: 'Included' },
                  { icon: '🍽️', label: 'Meals', value: 'All Included' },
                ].map(item => (
                  <div key={item.label} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 text-center">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <div className="font-semibold text-stone-900 text-sm">{item.value}</div>
                    <div className="text-stone-400 text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            {activities.length > 0 && (
              <section id="activities">
                <h2 className="font-display text-3xl font-semibold text-stone-900 mb-2">Activities & Practices</h2>
                <p className="text-stone-500 mb-6">Everything included in your retreat experience</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activities.map((act: any, i: number) => (
                    <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fdf4e3,#e8d4b0)' }}>
                          {act.emoji}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h3 className="font-semibold text-stone-900 text-sm">{act.title}</h3>
                            <span className="text-xs text-stone-400 flex-shrink-0">{act.duration}</span>
                          </div>
                          <p className="text-stone-500 text-xs leading-relaxed">{act.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Highlights */}
            <section id="highlights">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">Retreat Highlights</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {(program.highlights || []).map((h: string) => (
                  <div key={h} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-stone-700 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What's Included */}
            <section id="included">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {(program.includes || []).map((item: string) => (
                  <div key={item} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-100">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 text-green-600" />
                    <span className="text-stone-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Daily Schedule */}
            <section id="schedule">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-2">Sample Daily Schedule</h2>
              <p className="text-stone-500 mb-6 text-sm">Typical day during your retreat. Schedule may vary by day and program.</p>
              <div className="space-y-2">
                {dailySchedule.map((item) => (
                  <div key={item.time} className="flex gap-4 p-3 bg-white rounded-xl border border-stone-100 items-center">
                    <div className="text-sm font-mono font-semibold w-20 flex-shrink-0" style={{ color: '#C5A253' }}>{item.time}</div>
                    <div className="text-stone-700 text-sm flex-1">{item.activity}</div>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${typeColors[item.type]}`}>
                      {item.type === 'practice' ? '🧘 Practice' : item.type === 'meal' ? '🍽️ Meal' : item.type === 'activity' ? '📚 Activity' : '☕ Rest'}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section id="location">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">Location & Setting</h2>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
                <div className="p-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-3">Khumaltar, Lalitpur, Nepal</h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">Our retreat centre sits in a quiet residential neighborhood south of Kathmandu's ancient Patan district, at 1,380m altitude. Just 30–45 minutes from the international airport, yet removed enough for genuine peace.</p>
                      <div className="space-y-2 text-sm text-stone-600">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: '#C5A253' }} /> Khumaltar-4, Lalitpur, Nepal</div>
                        <div className="flex items-center gap-2">✈️ 30 min from Tribhuvan International Airport</div>
                        <div className="flex items-center gap-2">🕌 20 min to Pashupatinath Temple</div>
                        <div className="flex items-center gap-2">🏛️ 15 min to Patan Durbar Square</div>
                        <div className="flex items-center gap-2">🌐 40 min to Boudhanath Stupa</div>
                      </div>
                    </div>
                    <a href="https://maps.google.com/?q=Khumaltar+Lalitpur+Nepal" target="_blank" rel="noreferrer"
                      className="rounded-2xl overflow-hidden flex items-center justify-center p-8 hover:opacity-90 transition-opacity"
                      style={{ background: 'linear-gradient(135deg, #d4f0d4, #c0e8c0)', minHeight: 180 }}>
                      <div className="text-center">
                        <div className="text-5xl mb-3">🗺️</div>
                        <div className="font-semibold text-stone-700">View on Google Maps</div>
                        <div className="text-stone-500 text-sm mt-1">Khumaltar, Lalitpur →</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faq">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden group">
                    <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-stone-900 text-sm">
                      {faq.q}
                      <span className="text-stone-400 group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <div className="px-5 pb-5 text-stone-600 text-sm leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section id="reviews">
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">What Guests Say</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Sarah M.', country: 'UK', quote: 'This retreat changed my life. The combination of meditation and astrology gave me profound clarity about my path. Dinesh and the team are exceptional.', rating: 5 },
                  { name: 'Thomas K.', country: 'Germany', quote: 'The most transformative week of my life. Pt. Krishnamurthy\'s birth chart reading was uncannily accurate and deeply healing. Already planning to return.', rating: 5 },
                  { name: 'Priya R.', country: 'USA', quote: 'The Himalayan setting alone is worth the trip. The program is beautifully structured, the food is delicious, and the teachers are truly masters of their crafts.', rating: 5 },
                  { name: 'Jan D.', country: 'Netherlands', quote: 'I came as a sceptic and left as a believer — not in any dogma, but in the genuine power of these practices. Extraordinary experience.', rating: 5 },
                ].map((review, i) => (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, j) => <span key={j} className="text-amber-400">★</span>)}
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{review.quote}"</p>
                    <div className="text-stone-800 text-sm font-semibold">{review.name} — {review.country}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link href="/testimonials" className="text-sm font-medium hover:underline" style={{ color: '#C5A253' }}>
                  Read all reviews →
                </Link>
              </div>
            </section>


{/* Cancellation & Payment Policy */}
<section id="policy">
  <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">Cancellation & Payment Policy</h2>
  <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 space-y-4 text-sm text-stone-600 leading-relaxed">
    <p>
      To reserve your seat, we recommend a <span className="font-semibold text-stone-800">30% deposit</span>. The remaining balance is typically due on arrival in Nepal
      (cash, Wise, or bank transfer). For international guests, we can arrange a simple payment plan — just message us after you book.
    </p>
    <div className="grid sm:grid-cols-2 gap-3">
      <div className="rounded-2xl border border-stone-100 p-4">
        <div className="font-semibold text-stone-800 mb-1">Free cancellation</div>
        <div>Up to <span className="font-semibold">30 days</span> before start date.</div>
      </div>
      <div className="rounded-2xl border border-stone-100 p-4">
        <div className="font-semibold text-stone-800 mb-1">Flexible rebooking</div>
        <div>Move your deposit to a future date if your plans change.</div>
      </div>
    </div>
    <p className="text-xs text-stone-500">
      Note: policies may vary for peak seasons and custom/private retreats. We’ll confirm details in your booking email.
    </p>
  </div>
</section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1" id="booking">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white rounded-3xl shadow-lg border border-stone-100 overflow-hidden">
                <div className="p-6 border-b border-stone-100" style={{ background: 'linear-gradient(135deg, #1c1917, #2d1a00)' }}>
                  <div className="text-white/60 text-sm mb-1">Starting from</div>
                  {program.earlyBirdPrice && (
                    <div className="text-white/40 text-sm line-through">${program.price}</div>
                  )}
                  <div className="font-display text-4xl font-semibold text-white">${program.earlyBirdPrice ?? program.price}</div>
                  <div className="text-white/50 text-xs">per person · all meals & accommodation included</div>
                  {program.earlyBirdPrice && (
                    <div className="mt-2 text-xs px-2 py-1 rounded-full inline-block" style={{ background: '#E8891A', color: 'white' }}>
                      Save ${program.price - program.earlyBirdPrice} early bird
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <BookingForm program={program} />
                  <div className="mt-4 rounded-3xl border border-stone-200 bg-stone-50 p-4">
                    <div className="text-sm font-semibold text-stone-900">✈️ Need help planning travel?</div>
                    <p className="mt-1 text-xs text-stone-600">Airport pickup, visa guidance, hotels, local transport — we’ll help.</p>
                    <Link
                      href="/travel-consultant"
                      className="mt-3 inline-flex w-full items-center justify-center px-4 py-2.5 rounded-full bg-white border border-stone-200 text-stone-800 font-medium hover:bg-stone-50 transition"
                    >
                      Get Travel Consultant
                    </Link>
                  </div>
                </div>
              </div>

              {/* Quick info */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-3">
                <h3 className="font-semibold text-stone-900 text-sm">Quick Info</h3>
                {[
                  { icon: '🔄', text: 'Free cancellation 30 days before' },
                  { icon: '💰', text: '30% deposit to secure spot' },
                  { icon: '🏦', text: 'Bank transfer, cash, or Wise' },
                  { icon: '📱', text: 'WhatsApp support 24/7' },
                  { icon: '🛬', text: 'Airport pickup available' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2 text-sm text-stone-600">
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a href={`https://wa.me/9779851187267?text=Namaste! I'm interested in the ${program.title} retreat. Can you tell me more?`}
                target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white text-sm transition-all hover:opacity-90"
                style={{ background: '#25D366' }}>
                💬 Ask Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Other Retreats */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6">Other Retreat Programs</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {Object.entries(fallbackData)
            .filter(([slug]) => slug !== params.slug)
            .map(([slug, p]: [string, any]) => (
              <Link key={slug} href={`/retreats/${slug}`}
                className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all group">
                <div className="font-display text-lg font-semibold text-stone-900 mb-1 group-hover:text-amber-700 transition-colors">{p.title}</div>
                <div className="text-stone-400 text-sm mb-3">{p.duration} days · from ${p.earlyBirdPrice || p.price}</div>
                <div className="flex items-center gap-1 text-sm font-medium" style={{ color: '#C5A253' }}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}