import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Calendar, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: '200-Hour Yoga Teacher Training Nepal 2025 | Himalaya Retreat Nepal',
  description: 'Yoga Alliance certified 200-hour Yoga Teacher Training in Nepal. 28 days immersive program in Hatha Yoga, Pranayama, meditation, and philosophy at 1,350m in the Kathmandu Valley.',
  keywords: ['yoga teacher training Nepal', '200 hour YTT Nepal', 'yoga alliance Nepal', 'yoga certification Nepal', 'hatha yoga teacher training'],
};

const curriculum = [
  { week: 'Week 1', title: 'Foundation & Classical Hatha', topics: ['Asana alignment & adjustments', 'Pranayama fundamentals', 'Yoga philosophy (Patanjali Sutras)', 'Sanskrit pronunciation', 'History of yoga tradition'] },
  { week: 'Week 2', title: 'Anatomy & Sequencing', topics: ['Functional anatomy for yoga', 'Safe cueing & hands-on assists', 'Class sequencing principles', 'Injury prevention & modification', 'Therapeutic applications'] },
  { week: 'Week 3', title: 'Meditation & Advanced Practice', topics: ['Meditation styles & techniques', 'Yoga Nidra facilitation', 'Chakra & subtle body theory', 'Mantra & nada yoga', 'Personal practice deepening'] },
  { week: 'Week 4', title: 'Teaching Methodology', topics: ['Live teaching practice', 'Voice & presence development', 'Business of teaching yoga', 'Building authentic offerings', 'Final assessment & ceremony'] },
];

const dates2025 = [
  { batch: 'Spring Batch', dates: 'March 1–28, 2025', status: '2 spots', statusColor: 'bg-amber-100 text-amber-700' },
  { batch: 'Summer Batch', dates: 'June 1–28, 2025', status: 'Open', statusColor: 'bg-green-100 text-green-700' },
  { batch: 'Autumn Batch', dates: 'September 1–28, 2025', status: 'Open', statusColor: 'bg-green-100 text-green-700' },
  { batch: 'Winter Batch', dates: 'November 15–December 12, 2025', status: 'Open', statusColor: 'bg-green-100 text-green-700' },
];

export default function TeacherTrainingPage() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0f1f0f 0%, #1c2e20 100%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(74,126,80,0.2)', color: '#7ec88a', border: '1px solid rgba(74,126,80,0.3)' }}>
            🎓 Yoga Alliance RYS 200 Certified
          </div>
          <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-6 leading-tight">
            200-Hour Yoga<br />
            <span className="italic" style={{ color: '#7ec88a' }}>Teacher Training Nepal</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-10">
            A 28-day immersive journey into the heart of authentic yoga — classical Hatha, Pranayama, meditation, philosophy, and teaching methodology in the sacred Himalayan foothills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9779851187267?text=Namaste! I am interested in the 200-hour Yoga Teacher Training 2025 in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Apply Now — 2025
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
              Ask a Question
            </Link>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
          </svg>
        </div>
      </section>

      {/* Key details */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: '📅', label: 'Duration', value: '28 Days' },
            { icon: '👥', label: 'Group Size', value: 'Max 12 Students' },
            { icon: '📜', label: 'Certification', value: 'Yoga Alliance RYS 200' },
            { icon: '💵', label: 'Investment', value: '$2,400 All-Inclusive' },
          ].map(d => (
            <div key={d.label} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-center">
              <div className="text-3xl mb-2">{d.icon}</div>
              <div className="text-xs text-stone-400 mb-1">{d.label}</div>
              <div className="font-display font-semibold text-stone-900">{d.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="py-8 px-4 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-stone-900 mb-6">Everything Included</h2>
            <div className="space-y-3">
              {[
                '28 nights accommodation at retreat center',
                'All meals (3 daily, Ayurvedic vegetarian)',
                'Morning yoga & evening meditation daily',
                'Course manuals, books & materials',
                'Yoga Alliance RYS 200 certificate',
                'Airport pickup & drop-off',
                'Weekend excursion to Pashupatinath',
                'Final graduation ceremony',
                'Lifetime access to alumni community',
                '1 private Vedic birth chart reading',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#4a7e50' }} />
                  <span className="text-stone-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl font-semibold text-stone-900 mb-6">2025 Batch Dates</h2>
            <div className="space-y-3">
              {dates2025.map(d => (
                <div key={d.batch} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <div>
                    <div className="font-semibold text-stone-900">{d.batch}</div>
                    <div className="text-stone-500 text-sm">{d.dates}</div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${d.statusColor}`}>{d.status}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-2xl border border-amber-200 bg-amber-50">
              <p className="text-amber-800 text-sm"><strong>Early Bird:</strong> Save $300 when you apply 3 months before your batch start date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">28-Day Curriculum</h2>
          <p className="text-stone-500 text-center mb-12">A complete, week-by-week journey from foundation to professional teaching</p>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map(week => (
              <div key={week.week} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3" style={{ background: '#4a7e50' }}>{week.week}</div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-4">{week.title}</h3>
                <div className="space-y-2">
                  {week.topics.map(t => (
                    <div key={t} className="flex items-center gap-2 text-sm text-stone-600">
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#4a7e50' }} />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <Users className="w-10 h-10 mx-auto mb-5" style={{ color: '#4a7e50' }} />
        <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Ready to Become a Yoga Teacher?</h2>
        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">Join our next batch in the Himalayas. Maximum 12 students for deep personal attention.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/9779851187267?text=Namaste! I want to apply for the 200-hour YTT in Nepal 2025." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Apply on WhatsApp
          </a>
          <Link href="/contact" className="px-8 py-4 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 transition-all" style={{ borderColor: '#4a7e50' }}>
            Send Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
