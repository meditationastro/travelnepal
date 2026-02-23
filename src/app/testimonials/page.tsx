import Link from 'next/link';

export const metadata = { title: 'Guest Stories — Himalya Retreat Nepal', description: 'Read heartfelt testimonials from guests who transformed their lives at Himalya Retreat Nepal.' };

const testimonials = [
  { name: 'Sarah Mitchell', country: 'United States 🇺🇸', retreat: '7-Day Meditation & Astrology', rating: 5, date: 'March 2025', avatar: 'SM',
    text: 'I came to Nepal during a professional crossroads, not knowing what I was looking for. Pt. Krishnamurthy\'s birth chart reading gave me more clarity in two hours than five years of therapy. And the morning meditations with Swami Ananda at sunrise — looking out over the valley — are simply beyond words. I left with a completely different relationship to silence.',
    highlight: 'The birth chart reading changed everything.' },
  { name: 'Lars Bergmann', country: 'Germany 🇩🇪', retreat: '14-Day Himalayan Awakening', rating: 5, date: 'January 2025', avatar: 'LB',
    text: 'As a skeptic and engineer, I approached this retreat with plenty of doubt. By day three, something cracked open that I\'d been carrying for thirty years. The combination of Vipassana practice, individual guidance from Swami Ananda, and the setting — waking to mist in the mountains every morning — is extraordinary. The post-retreat coaching calls have also been invaluable. I\'ve recommended this to everyone I know.',
    highlight: 'A skeptic completely transformed.' },
  { name: 'Priya Nair', country: 'India 🇮🇳', retreat: '3-Day Mindfulness Retreat', rating: 5, date: 'February 2025', avatar: 'PN',
    text: 'Being Indian, I thought I already understood meditation. This retreat showed me how much more there is to explore. Dr. Maya Devi\'s Ayurvedic approach to yoga — understanding my Pitta dosha and adjusting practice accordingly — was a revelation. The food was exceptional, every meal felt like medicine. I\'ve already booked the 7-day retreat for October.',
    highlight: 'Food that feels like medicine.' },
  { name: 'James & Kate Holden', country: 'Australia 🇦🇺', retreat: '7-Day Meditation & Astrology', rating: 5, date: 'April 2025', avatar: 'JK',
    text: 'We came as a couple at a difficult moment in our relationship. The compatibility reading with Pt. Krishnamurthy gave us a whole new language for understanding each other — not as problems to fix, but as complementary forces. The retreat allowed us to simply be, without distractions, and reconnect on a level we hadn\'t in years. Truly life-changing for us as a couple.',
    highlight: 'Reconnected on a deep level.' },
  { name: 'Emma Wilson', country: 'United Kingdom 🇬🇧', retreat: '14-Day Himalayan Awakening', rating: 5, date: 'November 2024', avatar: 'EW',
    text: 'The 7-day silent Vipassana within the 14-day program was the hardest thing I\'ve ever done — and the most rewarding. I processed grief I\'d been running from for two years. Tenzin Rinpoche\'s singing bowl ceremonies became my favorite part of every day. The kindness of every single person at the retreat — from the kitchen staff to the teachers — was palpable. I cannot recommend this enough.',
    highlight: 'Processed grief I\'d been running from.' },
  { name: 'Yuki Tanaka', country: 'Japan 🇯🇵', retreat: '7-Day Meditation & Astrology', rating: 5, date: 'December 2024', avatar: 'YT',
    text: 'I had done meditation courses before, but nothing prepared me for the depth of practice here. The physical setting of the retreat — surrounded by mountains, with prayer flags and the scent of incense — supports practice in a way no urban center can. Saraswati Devi\'s Kundalini session was particularly powerful. I came home feeling like I was finally living in my body.',
    highlight: 'Finally living in my body.' },
  { name: 'Maria Fernandez', country: 'Spain 🇪🇸', retreat: 'Ayurveda Panchakarma', rating: 5, date: 'January 2025', avatar: 'MF',
    text: 'I came for the Panchakarma program after a burnout that left me exhausted for over a year. Dr. Maya Devi designed a completely personalized program for my Vata imbalance. After five days of treatments and Ayurvedic meals, I felt like a completely new person — sleeping deeply for the first time in months. The herbal steam and Shirodhara are experiences I\'ll never forget.',
    highlight: 'Sleeping deeply for the first time in months.' },
  { name: 'Chloé Martin', country: 'France 🇫🇷', retreat: '3-Day Mindfulness Retreat', rating: 5, date: 'May 2025', avatar: 'CM',
    text: 'A perfect introduction to meditation retreat life. I was nervous as a complete beginner, but Swami Ananda\'s guidance was extraordinarily accessible — no prior experience required at all. I learned a Yoga Nidra practice I now do every night before sleep. The retreat center itself is beautiful and immaculately maintained. Arrived stressed, left genuinely peaceful.',
    highlight: 'Perfect for complete beginners.' },
  { name: 'Daniel Costa', country: 'Brazil 🇧🇷', retreat: '14-Day Himalayan Awakening', rating: 5, date: 'March 2025', avatar: 'DC',
    text: 'I took a sabbatical after 20 years in banking and found myself here by what felt like fate. The astrology reading on day two revealed patterns in my life I couldn\'t explain — career cycles, relationship patterns, even health tendencies — with an accuracy that was frankly astonishing. I left with a completely different life plan and the inner capacity to follow through with it.',
    highlight: 'A completely different life plan.' },
];

const stats = [
  { value: '4.97/5', label: 'Average Rating', icon: '⭐' },
  { value: '2,500+', label: 'Guests Hosted', icon: '👥' },
  { value: '40+', label: 'Countries', icon: '🌍' },
  { value: '98%', label: 'Would Recommend', icon: '💚' },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #1c1917, #27422b)' }}>
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">Transformations</p>
        <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-5">Guest Stories</h1>
        <p className="text-stone-400 text-lg max-w-xl mx-auto mb-10">Real stories from people whose lives changed in the Himalayas. Unedited. Unsponsored. Authentic.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="font-display text-2xl font-bold text-white">{s.value}</div>
              <div className="text-stone-400 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials masonry */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t) => (
            <div key={t.name} className="break-inside-avoid bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-all">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => <span key={i} className="text-amber-400 text-lg">★</span>)}
              </div>
              {/* Highlight quote */}
              <div className="text-sm font-semibold mb-3 py-2 px-3 rounded-xl" style={{ background: 'rgba(197,162,83,0.1)', color: '#92400e' }}>
                "{t.highlight}"
              </div>
              {/* Full text */}
              <p className="text-stone-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#C5A253,#E8891A)' }}>
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.country}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs text-stone-400">{t.date}</div>
                  <div className="text-xs text-amber-700 font-medium mt-0.5">{t.retreat}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="py-20 text-center px-4 bg-stone-900">
        <h2 className="font-display text-4xl text-white font-semibold mb-4">Add Your Story</h2>
        <p className="text-stone-400 mb-8 max-w-lg mx-auto">Have you been on a retreat with us? We'd love to hear from you.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/9779851187267?text=Namaste! I'd like to share my retreat experience." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-2xl font-semibold text-white hover:opacity-90" style={{ background: '#25D366' }}>
            💬 Share via WhatsApp
          </a>
          <Link href="/retreats" className="px-8 py-4 rounded-2xl font-semibold text-stone-900 hover:opacity-90" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
            Book Your Retreat
          </Link>
        </div>
      </section>
    </div>
  );
}
