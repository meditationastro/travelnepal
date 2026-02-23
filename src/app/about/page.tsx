import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Himalaya Retreat Nepal | Spiritual Retreat in Nepal | Khumaltar, Lalitpur',
  description: 'About Himalaya Retreat Nepal — authentic spiritual retreat in Khumaltar, Lalitpur. Founded by Dinesh Sharma of Nepal Spiritual. Vedic astrology, meditation, yoga, and Ayurveda since 2009.',
  keywords: ['spiritual retreat Nepal', 'Himalaya Retreat Nepal', 'about Nepal spiritual retreat', 'Dinesh Sharma Nepal Spiritual', 'meditation retreat Lalitpur', 'Khumaltar retreat center'],
};

const teamMembers = [
  {
    name: 'Dinesh Sharma',
    role: 'Co-Founder & Spiritual Director',
    subtitle: 'Nepal Spiritual',
    origin: 'Kathmandu Valley, Nepal',
    emoji: '🙏',
    highlight: true,
    bio: 'Dinesh Sharma is a lifelong spiritual practitioner born in the sacred Kathmandu Valley. As co-founder of Nepal Spiritual, he has guided thousands of international seekers through transformative experiences in meditation, sacred rituals, and Vedic wisdom. Dinesh brings deep roots in Nepali spiritual traditions combined with a rare gift for making ancient wisdom accessible to modern practitioners from every background.',
    specialties: ['Vedic rituals & puja ceremonies', 'Himalayan meditation traditions', 'Spiritual counselling', 'Sacred site pilgrimages', 'Guru-shishya lineage transmission'],
    contact: { whatsapp: '9779851187267', email: 'meditationastro1@gmail.com' },
  },
  {
    name: 'Tim',
    role: 'Guest Care & Retreat Operations',
    subtitle: 'International Host',
    origin: 'Based in Lalitpur, Nepal',
    emoji: '🤝',
    highlight: false,
    bio: 'Tim supports guests before and during the retreat: airport pickup coordination, day-by-day planning, scheduling sessions, and making sure each visitor feels safe, welcomed, and cared for. He bridges cultures with calm communication and practical problem-solving.',
    specialties: ['Retreat planning & scheduling', 'Travel assistance', 'Guest care support', 'Local coordination', 'On-site logistics'],
    contact: null,
  },
  {
    name: 'Acharya Prakash',
    role: 'Vedic Astrologer (Jyotishi)',
    subtitle: 'Classical Parashari Jyotish',
    origin: 'Kathmandu, Nepal',
    emoji: '🪐',
    highlight: false,
    bio: 'Acharya Prakash focuses on practical Jyotish: chart fundamentals, timing (dashas & transits), and remedies aligned with dharma. His sessions are clear, compassionate, and deeply rooted in classical tradition.',
    specialties: ['Parashari Jyotish', 'Vimshottari dasha timing', 'Nakshatra remedies', 'Muhurta (auspicious timing)', 'Mantra & gemstone guidance'],
    contact: null,
  },
  {
    name: 'Dr. Sita Gurung',
    role: 'Ayurveda Practitioner',
    subtitle: 'Himalayan Wellness',
    origin: 'Pokhara, Nepal',
    emoji: '🌿',
    highlight: false,
    bio: 'Dr. Sita Gurung blends classical Ayurveda with Himalayan herbal knowledge. She supports guests with dosha assessment, digestive reset protocols, sleep support, and seasonal routines for long-term balance.',
    specialties: ['Dosha assessment & balancing', 'Herbal protocols (Himalayan herbs)', 'Diet & routine planning', 'Massage & detox support', 'Therapeutic yoga'],
    contact: null,
  },
  {
    name: 'Lama Tenzin',
    role: 'Tibetan Buddhism & Sound Healing',
    subtitle: 'Boudhanath Tradition',
    origin: 'Boudha, Kathmandu',
    emoji: '🔔',
    highlight: false,
    bio: 'Lama Tenzin guides mindfulness, compassion practice, and deep relaxation through singing bowls. His sessions help soften emotional tension and reconnect to inner silence.',
    specialties: ['Tibetan Buddhist meditation', 'Singing bowl sound healing', 'Tonglen practice', 'Dream yoga'],
    contact: null,
  },
  {
    name: 'Anjali Devi',
    role: 'Kundalini Yoga & Women Wellness',
    subtitle: 'Breath & Energy Work',
    origin: 'Lalitpur, Nepal',
    emoji: '🌺',
    highlight: false,
    bio: 'Anjali Devi leads gentle kundalini-inspired breathwork, chakra balancing, and grounded women wellness sessions that support confidence, calmness, and emotional clarity.',
    specialties: ['Kundalini Yoga kriyas', 'Chakra healing', 'Women moon circles', 'Somatic breathwork'],
    contact: null,
  },
];

const milestones = [
  { year: '2009', text: 'Swami Ananda founds the retreat centre in Khumaltar, Lalitpur with just 4 rooms and a vision of authentic Himalayan practice.' },
  { year: '2011', text: 'Pt. Krishnamurthy joins as Vedic Astrology teacher. The first Astrology & Meditation combined program launches.' },
  { year: '2013', text: 'Dr. Maya Devi establishes the Ayurveda treatment wing. Panchakarma and Shirodhara become signature offerings.' },
  { year: '2015', text: '500th guest milestone. The 14-Day Himalayan Awakening program launches to meet demand for deeper immersion.' },
  { year: '2017', text: 'Tenzin Rinpoche and Saraswati Devi join. Sound healing and Kundalini Yoga programs begin.' },
  { year: '2019', text: '1,000 guests hosted from 35 countries. New deluxe suite wing opens. Online astrology consultations begin.' },
  { year: '2021', text: 'During COVID, we transition to hybrid model. Online retreats and consultations serve our community worldwide.' },
  { year: '2023', text: 'Dinesh Sharma co-founds Nepal Spiritual partnership. Launch of the Sacred Shop with authentic Himalayan products shipped globally.' },
  { year: '2025', text: '2,500+ guests hosted. Ranked among top spiritual retreat centers in Nepal. New teachers join our growing family.' },
];

const values = [
  { icon: '🔥', title: 'Authentic Lineage', desc: 'Everything we teach comes from direct transmission. We teach from years of personal practice and discipleship, not from textbooks or online courses.' },
  { icon: '🤝', title: 'Genuine Care', desc: 'We cap group sizes at 8 to 15 people because transformation requires personal attention. Your experience here is never generic.' },
  { icon: '🌿', title: 'Sustainable Practice', desc: 'Retreat should permanently upgrade your relationship with yourself. We design every program with post-retreat integration in mind.' },
  { icon: '🙏', title: 'Sacred Space', desc: 'Our centre is maintained as a genuinely sacred environment. From the food to the sounds, everything supports the inward journey.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917, #27422b)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="text-amber-400 font-medium tracking-widest uppercase text-sm mb-4">Since 2009 | Nepal Spiritual</p>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-6">Our Story</h1>
          <p className="text-stone-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Himalya Retreat Nepal was born from a single conviction: that the most ancient wisdom traditions of Asia, when transmitted authentically in their natural setting, have the power to fundamentally transform a human life.
          </p>
          <div className="mt-10 flex flex-wrap gap-8 justify-center">
            {[['2009', 'Founded'], ['6', 'Teachers'], ['2,500+', 'Guests'], ['40+', 'Countries']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl font-bold" style={{ color: '#C5A253' }}>{v}</div>
                <div className="text-stone-400 text-sm mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20 space-y-20">

        {/* Nepal Spiritual Feature */}
        <section className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100">
          <div className="grid lg:grid-cols-2">
            <div className="p-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(197,162,83,0.12)', color: '#92400e' }}>
                🙏 Nepal Spiritual Partnership
              </div>
              <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">Guided by Dinesh Sharma</h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                Dinesh Sharma, co-founder of <strong>Nepal Spiritual</strong>, is the heart and spiritual director of our programs. Born and raised in the Kathmandu Valley, Dinesh carries authentic lineages of Nepali spiritual tradition and has dedicated his life to sharing these practices with seekers from around the world.
              </p>
              <p className="text-stone-600 leading-relaxed mb-7">
                His approach is rare: deeply rooted in tradition yet completely practical for modern practitioners. Every retreat program at Himalya has been shaped by his understanding of what genuine transformation requires.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/9779851187267?text=Namaste! I would like to learn more about Nepal Spiritual and your retreat programs."
                  target="_blank" rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm"
                  style={{ background: '#25D366' }}>
                  💬 WhatsApp Dinesh
                </a>
                <a href="mailto:meditationastro1@gmail.com"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold border border-stone-200 text-stone-700 text-sm hover:bg-stone-50 transition-colors">
                  ✉️ Send Email
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center p-10" style={{ background: 'linear-gradient(135deg, #fdf4e3, #e8d4b0, #d4c090)' }}>
              <div className="text-center">
                <div className="text-8xl mb-4">🙏</div>
                <div className="font-display text-2xl font-semibold text-stone-800">Dinesh Sharma</div>
                <div className="text-stone-500 text-sm mt-1">Nepal Spiritual</div>
                <div className="mt-4 space-y-1 text-sm text-stone-600">
                  <div>📍 Khumaltar, Lalitpur, Nepal</div>
                  <div>📞 +977 9851187267</div>
                  <div>✉️ meditationastro1@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding story */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6">The Beginning</h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>In 2009, after three decades of practice across India and Nepal, Swami Ananda converted his family home in Khumaltar, Lalitpur into a small meditation centre. The first program hosted four guests from Germany who had found him through word of mouth in Rishikesh.</p>
              <p>The approach was simple: small groups, authentic practices, genuine immersion in the Himalayan environment. No compromise on depth or quality. No attempts to package ancient wisdom into digestible entertainment.</p>
              <p>Word spread. Guests returned. Teachers of the highest calibre were drawn to the quality of the work being done. In 2023, Dinesh Sharma joined as co-founder, bringing the Nepal Spiritual network and deepening the retreat's connection to authentic Nepali lineages.</p>
              <p>Today, we remain committed to the founding vision: depth over breadth, quality over quantity, transformation over tourism.</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <div className="aspect-square flex items-center justify-center text-8xl" style={{ background: 'linear-gradient(135deg, #fdf4e3, #e8d4b0, #d4c090)' }}>
              🏔️
            </div>
            <div className="bg-white p-6 border-t border-stone-100">
              <div className="grid grid-cols-2 gap-4">
                {[['2009', 'Founded'], ['6', 'Teachers'], ['2,500+', 'Guests'], ['40+', 'Countries']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-display text-2xl font-bold" style={{ color: '#C5A253' }}>{v}</div>
                    <div className="text-stone-400 text-xs">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">What We Stand For</h2>
          <p className="text-stone-500 text-center mb-10 max-w-xl mx-auto">These are not mission statement platitudes. They are hard-won principles that shape every decision we make.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">{v.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Meet the Team</h2>
          <p className="text-stone-500 text-center mb-10 max-w-xl mx-auto">Our teachers bring authentic lineages, decades of personal practice, and genuine dedication to your transformation.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {teamMembers.map(member => (
              <div key={member.name} className={`rounded-3xl overflow-hidden shadow-sm border transition-all hover:shadow-md ${member.highlight ? 'border-amber-200' : 'border-stone-100'} bg-white`}>
                {member.highlight && (
                  <div className="px-6 py-2 text-xs font-medium text-center" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)', color: '#1c1917' }}>
                    ✨ Nepal Spiritual — Spiritual Director
                  </div>
                )}
                <div className="p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0" style={{ background: 'linear-gradient(135deg,#fdf4e3,#e8d4b0)' }}>
                      {member.emoji}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-stone-900">{member.name}</h3>
                      <div className="text-stone-500 text-sm">{member.role}</div>
                      <div className="text-xs mt-0.5" style={{ color: '#C5A253' }}>{member.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.specialties.map(s => (
                      <span key={s} className="px-2.5 py-1 rounded-full text-xs bg-amber-50 text-amber-800">{s}</span>
                    ))}
                  </div>
                  {member.contact && (
                    <div className="flex gap-2 pt-2 border-t border-stone-100">
                      <a href={`https://wa.me/${member.contact.whatsapp}?text=Namaste ${member.name}!`}
                        target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white" style={{ background: '#25D366' }}>
                        💬 WhatsApp
                      </a>
                      <a href={`mailto:${member.contact.email}`}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-stone-200 text-stone-700 hover:bg-stone-50 transition-colors">
                        ✉️ Email
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-10 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-[72px] top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #C5A253, transparent)' }} />
            <div className="space-y-6">
              {milestones.map(m => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-sm font-bold" style={{ color: '#C5A253' }}>{m.year}</span>
                  </div>
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)', boxShadow: '0 0 0 3px #fdf8f0, 0 0 0 4px #C5A253' }} />
                  <p className="text-stone-600 text-sm leading-relaxed flex-1 pb-4">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-5">Our Location</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="text-stone-600 space-y-4">
              <p>We are situated in <strong>Khumaltar, Lalitpur</strong>, a quiet residential neighborhood south of Kathmandu's Patan district, at an altitude of approximately 1,380m. Close enough to the city for convenience, but removed enough to offer genuine peace.</p>
              <p>The retreat is 30 to 45 minutes by taxi from Tribhuvan International Airport. Our 7-day and 14-day programs include airport pickup. The Boudhanath Stupa, Pashupatinath Temple, and Patan Durbar Square are all within 20 to 40 minutes.</p>
              <div className="pt-4 space-y-1 text-sm">
                <div>📍 Khumaltar, Lalitpur, Nepal</div>
                <div>✉️ meditationastro1@gmail.com</div>
                <div>📞 +977 9851187267</div>
                <div>⏰ Open daily 6am to 8pm NPT</div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #d4f0d4, #e8f5e8)', minHeight: 200 }}>
              <a href="https://maps.google.com/?q=Khumaltar+Lalitpur+Nepal" target="_blank" rel="noreferrer"
                className="flex flex-col items-center justify-center h-full p-8 text-center hover:opacity-90 transition-opacity">
                <div className="text-5xl mb-3">🗺️</div>
                <div className="font-semibold text-stone-700">Khumaltar, Lalitpur</div>
                <div className="text-stone-500 text-sm mt-1">View on Google Maps →</div>
              </a>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <div className="grid sm:grid-cols-3 gap-4 text-center">
          <Link href="/teachers" className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl mb-2">🧘</div>
            <div className="font-semibold text-stone-900 mb-1">Meet All Teachers</div>
            <div className="text-stone-400 text-xs">6 authentic practitioners</div>
          </Link>
          <Link href="/retreats" className="rounded-2xl p-6 text-white hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg,#C5A253,#E8891A)' }}>
            <div className="text-3xl mb-2">📅</div>
            <div className="font-semibold mb-1">View Retreats</div>
            <div className="text-white/70 text-xs">3, 7 &amp; 14-day programs</div>
          </Link>
          <Link href="/contact" className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-all">
            <div className="text-3xl mb-2">💬</div>
            <div className="font-semibold text-stone-900 mb-1">Get in Touch</div>
            <div className="text-stone-400 text-xs">WhatsApp &amp; email</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
