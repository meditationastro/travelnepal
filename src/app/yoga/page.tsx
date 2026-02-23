import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Clock, Star, Users } from 'lucide-react';
import PracticeFinder from '@/components/interactive/PracticeFinder';
import YogaPhilosophyCourse from '@/components/interactive/YogaPhilosophyCourse';

export const metadata: Metadata = {
  title: 'Himalayan Yoga Nepal | Hatha, Kundalini & Yin Yoga | Himalaya Retreat Nepal',
  description: 'Authentic Himalayan yoga classes and retreats in Khumaltar, Lalitpur, Nepal. Hatha, Kundalini, Yin Yoga, and Yoga Teacher Training. Traditional lineage-trained teachers.',
  keywords: ['yoga Nepal', 'Himalayan yoga', 'yoga retreat Nepal', 'hatha yoga Lalitpur', 'kundalini yoga Nepal', 'yoga teacher training Nepal'],
};

const styles = [
  {
    emoji: '☀️', title: 'Hatha Yoga', href: '/yoga/hatha',
    tagline: 'Strength, Alignment & Classical Practice',
    price: 25, duration: '75 min',
    desc: 'The foundation of all yoga traditions — systematic practice of asana, pranayama, and meditation in the classical Himalayan style. Suitable for all levels from complete beginners to advanced practitioners.',
    includes: ['Classical asana sequences', 'Pranayama (breath control)', 'Meditation integration', 'Sanskrit mantra chanting', 'Philosophical teachings'],
  },
  {
    emoji: '🌊', title: 'Kundalini Yoga', href: '/yoga/kundalini',
    tagline: 'Awaken Your Dormant Energy',
    price: 35, duration: '90 min',
    desc: 'Powerful kriyas, breathwork, mantra, and meditation designed to awaken the kundalini energy and clear energetic blockages. A transformative practice for spiritual seekers.',
    includes: ['Kundalini kriyas', 'Breathwork (pranayama)', 'Mantra & meditation', 'Gong relaxation', 'Energy awareness techniques'],
  },
  {
    emoji: '🌙', title: 'Yin Yoga', href: '/yoga/yin',
    tagline: 'Deep Tissue Release & Stillness',
    price: 25, duration: '75 min',
    desc: 'Slow, meditative practice holding poses for 3–5 minutes to work deeply into the connective tissues, joints, and fascia. Combines beautifully with Taoist and Buddhist philosophy.',
    includes: ['Long-hold asanas', 'Meridian & fascia work', 'Mindfulness integration', 'Restorative sequences', 'Yoga nidra closing'],
  },
  {
    emoji: '🔥', title: 'Ashtanga Vinyasa', href: '/yoga',
    tagline: 'Dynamic Flow & Inner Heat',
    price: 30, duration: '90 min',
    desc: 'The dynamic Ashtanga primary series as taught in Mysore tradition — synchronized breath and movement creating internal heat, strength, and purification.',
    includes: ['Primary series sequences', 'Mysore-style practice', 'Ujjayi breathing', 'Bandha & drishti', 'Progressive adjustments'],
  },
  {
    emoji: '🙏', title: 'Vedic Chanting & Mantra', href: '/yoga',
    tagline: 'Sound Healing & Sanskrit Vibration',
    price: 20, duration: '60 min',
    desc: 'Learn authentic Sanskrit mantra pronunciation, Vedic chanting traditions, and the science of sound healing. Powerful for mental clarity, nervous system regulation, and spiritual development.',
    includes: ['Sanskrit pronunciation', 'Classical Vedic mantras', 'Healing vibration science', 'Group chanting practice', 'Personal mantra guidance'],
  },
  {
    emoji: '🌿', title: 'Yoga Nidra', href: '/yoga',
    tagline: 'Yogic Sleep & Deep Reprogramming',
    price: 20, duration: '45 min',
    desc: 'The ancient practice of conscious relaxation — a scientifically-validated technique that places consciousness between waking and sleeping for profound rest, healing, and transformation.',
    includes: ['Guided body scan', 'Sankalpa (intention setting)', 'Visualization techniques', 'Delta brainwave activation', 'Integration practices'],
  },
];

const schedule = [
  { time: '6:00 AM', class: 'Hatha Yoga (Sunrise)', teacher: 'Swami Ananda', level: 'All levels' },
  { time: '8:00 AM', class: 'Pranayama & Meditation', teacher: 'Swami Ananda', level: 'All levels' },
  { time: '10:00 AM', class: 'Yin Yoga Deep Release', teacher: 'Dr. Maya Devi', level: 'All levels' },
  { time: '4:00 PM', class: 'Kundalini Yoga', teacher: 'Swami Ananda', level: 'Intermediate' },
  { time: '6:00 PM', class: 'Ashtanga Vinyasa', teacher: 'Dr. Maya Devi', level: 'Intermediate+' },
  { time: '7:30 PM', class: 'Yoga Nidra & Mantra', teacher: 'Swami Ananda', level: 'All levels' },
];

export default function YogaPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f1f0f 0%, #1a2a00 60%, #0a1a10 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #4a7e50 0%, transparent 50%), radial-gradient(circle at 75% 25%, #C5A253 0%, transparent 40%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(74,126,80,0.15)', color: '#7ec88a', border: '1px solid rgba(74,126,80,0.3)' }}>
            ☀️ Traditional Himalayan Lineage
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-6 leading-tight">
            Himalayan Yoga
            <span className="block italic" style={{ color: '#7ec88a' }}>in Nepal</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Authentic yoga rooted in ancient Himalayan tradition — not fitness classes, but a complete system of body, breath, and mind that transforms from the inside out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/yoga/teacher-training" className="px-8 py-4 rounded-full font-semibold text-white shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #4a7e50, #6aa870)' }}>
              Teacher Training 2025
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to join a yoga class." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              Book a Class
            </a>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
          </svg>
        </div>
      </section>

      {/* Why Himalayan Yoga */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6">Why Practice Yoga in the Himalayas?</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-10">
            The Himalayas have been the home of yoga for thousands of years — not as exercise, but as a complete science of consciousness. 
            Practicing at altitude, surrounded by sacred peaks, amplifies every aspect of your practice. The thin air sharpens pranayama, 
            the silence deepens meditation, and the mountains themselves serve as your greatest teacher.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: '15+', label: 'Years Teaching' },
              { num: '2,400m', label: 'Altitude (Kathmandu)' },
              { num: '6', label: 'Yoga Styles' },
              { num: '50+', label: 'Countries Represented' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
                <div className="font-display text-3xl font-bold mb-1" style={{ color: '#4a7e50' }}>{s.num}</div>
                <div className="text-sm text-stone-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Styles */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Our Yoga Classes</h2>
          <p className="text-stone-500 text-center mb-12">All classes taught by lineage-trained teachers from Rishikesh & Himalayan traditions</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map(s => (
              <div key={s.title} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col group">
                <div className="text-4xl mb-4">{s.emoji}</div>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display text-lg font-semibold text-stone-900 flex-1 mr-2">{s.title}</h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-bold" style={{ color: '#4a7e50' }}>${s.price}</div>
                    <div className="text-xs text-stone-400 flex items-center gap-0.5"><Clock className="w-3 h-3" />{s.duration}</div>
                  </div>
                </div>
                <div className="text-xs font-medium mb-3" style={{ color: '#4a7e50' }}>{s.tagline}</div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                <div className="mb-5 space-y-1.5">
                  {s.includes.map(inc => (
                    <div key={inc} className="flex items-center gap-2 text-xs text-stone-600">
                      <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4a7e50' }} />
                      {inc}
                    </div>
                  ))}
                </div>
                <Link href={s.href} className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all" style={{ color: '#4a7e50' }}>
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive: Practice Finder */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(197,162,83,0.14)', color: '#8B6914', border: '1px solid rgba(197,162,83,0.28)' }}>
              ✨ Quick Finder
            </div>
            <h2 className="font-display text-4xl font-semibold text-stone-900 mt-4">Choose Your Practice</h2>
            <p className="text-stone-500 mt-2">A playful way to match your mood with the right Himalayan class.</p>
          </div>
          <PracticeFinder variant="yoga" />
        </div>
      </section>

      {/* Patanjali / Ashtanga / Ashtavakra */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <YogaPhilosophyCourse />
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #0f1f0f, #1c1917)' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-4xl text-white font-semibold mb-3 text-center">Daily Class Schedule</h2>
          <p className="text-stone-400 text-center mb-10">Drop-in or book in advance. All classes run daily.</p>
          <div className="space-y-3">
            {schedule.map(item => (
              <div key={item.time} className="flex items-center justify-between p-4 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(74,126,80,0.2)' }}>
                <div className="flex items-center gap-4">
                  <div className="text-sm font-bold w-20 flex-shrink-0" style={{ color: '#7ec88a' }}>{item.time}</div>
                  <div>
                    <div className="text-white font-medium text-sm">{item.class}</div>
                    <div className="text-stone-400 text-xs">{item.teacher}</div>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-stone-300">{item.level}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Training CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-10 md:p-14" style={{ background: 'linear-gradient(135deg, #27422b, #1c2e20)' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-5xl mb-4">🎓</div>
                <h2 className="font-display text-3xl text-white font-semibold mb-3">200-Hour Yoga Teacher Training</h2>
                <p className="text-stone-300 leading-relaxed mb-6">
                  Our Yoga Alliance accredited 200-hour YTT program runs annually in Nepal. 28 days of immersive study in Hatha, Pranayama, philosophy, anatomy, and teaching methodology.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/yoga/teacher-training" className="px-6 py-3 rounded-full font-semibold text-stone-900 hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                    View 2025 Program
                  </Link>
                  <a href="https://wa.me/9779851187267?text=Namaste! I am interested in Yoga Teacher Training 2025." target="_blank" rel="noreferrer"
                    className="px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all text-center">
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📅', text: '28 intensive days' },
                  { icon: '📜', text: 'Yoga Alliance certified' },
                  { icon: '🏔️', text: 'Himalayan setting' },
                  { icon: '👥', text: 'Small groups (max 12)' },
                  { icon: '🍃', text: 'Ayurvedic meals included' },
                  { icon: '🌍', text: 'Recognized worldwide' },
                ].map(item => (
                  <div key={item.text} className="flex items-center gap-2 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-stone-300 text-xs">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Packages */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-8 text-center">Drop-In & Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Single Class', price: 20, period: 'per class', features: ['Choose any style', 'All materials included', 'Book 24hrs in advance'], highlight: false },
              { name: '10-Class Pack', price: 160, period: '= $16/class', features: ['Valid 6 months', 'Mix any styles', 'Save $40', 'Priority booking'], highlight: true },
              { name: 'Monthly Unlimited', price: 280, period: 'per month', features: ['All daily classes', 'Meditation sessions', 'WhatsApp support', 'Yoga Nidra included'], highlight: false },
            ].map(pkg => (
              <div key={pkg.name} className={`rounded-3xl p-7 border ${pkg.highlight ? 'border-2 shadow-lg' : 'bg-white border-stone-100 shadow-sm'}`}
                style={pkg.highlight ? { background: 'linear-gradient(135deg, #27422b, #1c2e20)', borderColor: '#4a7e50' } : {}}>
                <div className={`font-display text-lg font-semibold mb-1 ${pkg.highlight ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className={`font-display text-3xl font-bold ${pkg.highlight ? 'text-white' : 'text-stone-900'}`}>${pkg.price}</span>
                </div>
                <div className={`text-xs mb-5 ${pkg.highlight ? 'text-stone-400' : 'text-stone-400'}`}>{pkg.period}</div>
                <div className="space-y-2 mb-6">
                  {pkg.features.map(f => (
                    <div key={f} className={`flex items-center gap-2 text-sm ${pkg.highlight ? 'text-stone-300' : 'text-stone-600'}`}>
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                      {f}
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/9779851187267?text=Namaste! I want to book yoga classes." target="_blank" rel="noreferrer"
                  className={`block text-center py-3 rounded-full font-semibold text-sm transition-all ${pkg.highlight ? 'text-stone-900 hover:opacity-90' : 'text-stone-900 border-2 hover:bg-stone-50'}`}
                  style={pkg.highlight ? { background: 'linear-gradient(135deg, #C5A253, #E8C870)' } : { borderColor: '#4a7e50' }}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-10">What Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Emma L.', country: '🇦🇺 Australia', text: 'The 6am Hatha class with Swami Ananda is unlike anything I\'ve experienced. The mountain air, the chanting... I cried on day 3 and felt completely reborn.', rating: 5 },
              { name: 'Marcus K.', country: '🇩🇪 Germany', text: 'I\'ve done yoga for 8 years but Kundalini here cracked me open in ways I didn\'t expect. The energy in Nepal is genuinely different.', rating: 5 },
              { name: 'Priya S.', country: '🇺🇸 USA', text: 'The Yin Yoga sessions helped me heal a 2-year hip injury. Dr. Maya Devi\'s anatomical knowledge combined with the meditative approach is exceptional.', rating: 5 },
            ].map(t => (
              <div key={t.name} className="bg-white rounded-3xl p-7 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" style={{ color: '#C5A253' }} />)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                <div className="text-stone-400 text-xs">{t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="text-5xl mb-5">🧘</div>
        <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Begin Your Yoga Journey</h2>
        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">Drop in for a single class or commit to a full retreat. Your mat awaits in the Himalayas.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/retreats" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Browse Yoga Retreats
          </Link>
          <a href="https://wa.me/9779851187267?text=Namaste! I want to book a yoga class in Nepal." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background: '#25D366' }}>
            WhatsApp to Book
          </a>
        </div>
      </section>
    </div>
  );
}
