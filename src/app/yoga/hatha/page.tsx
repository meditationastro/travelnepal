import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hatha Yoga Classes Nepal | Classical Himalayan Yoga | Himalaya Retreat Nepal',
  description: 'Classical Hatha yoga classes in Khumaltar, Lalitpur, Nepal. Traditional postures, pranayama, and meditation in the Himalayan lineage tradition. All levels welcome.',
};

export default function HathaYogaPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: '#fdf8f0' }}>
      <div className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #0f1f0f, #1c2e20)' }}>
        <div className="text-5xl mb-5">☀️</div>
        <h1 className="font-display text-5xl text-white font-semibold mb-4">Hatha Yoga Nepal</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">Classical Himalayan practice — strength, alignment, and deep inner stillness</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16 space-y-10">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-4">About Our Hatha Yoga Classes</h2>
          <p className="text-stone-600 leading-relaxed text-lg mb-6">
            Hatha yoga is the foundation of all yoga traditions. In the Himalayan lineage, it is practiced as a complete system — integrating asana (physical postures), pranayama (breath control), dharana (concentration), and dhyana (meditation) into a coherent, transformative practice.
          </p>
          <p className="text-stone-600 leading-relaxed mb-8">
            Our classes are taught by Swami Ananda (35+ years experience, Bihar School of Yoga lineage) and Dr. Maya Devi (Iyengar-inspired, Tribhuvan University BAMS). Both teachers bring deep anatomical knowledge and traditional lineage to every class.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { label: 'Duration', value: '75 minutes' },
              { label: 'Price', value: '$25 per class' },
              { label: 'Level', value: 'All levels' },
            ].map(d => (
              <div key={d.label} className="bg-stone-50 rounded-2xl p-4 text-center">
                <div className="text-xs text-stone-400 mb-1">{d.label}</div>
                <div className="font-display font-semibold text-stone-900">{d.value}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2 mb-8">
            {['Classical asana sequences (standing, seated, inversions)', 'Pranayama integrated throughout', 'Sanskrit naming with explanation', 'Meditation and savasana close', 'Philosophical teaching thread'].map(item => (
              <div key={item} className="flex items-center gap-2 text-stone-600">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book a Hatha yoga class." target="_blank" rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-stone-900 text-center" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book a Class
            </a>
            <Link href="/yoga" className="px-8 py-3 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 text-center" style={{ borderColor: '#4a7e50' }}>
              All Yoga Classes
            </Link>
          </div>
        </div>

        <div className="rounded-3xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #0f1f0f, #1c2e20)' }}>
          <h2 className="font-display text-2xl text-white font-semibold mb-3">Hatha Yoga Schedule</h2>
          <p className="text-stone-400 mb-5">Daily classes at 6:00 AM and 10:00 AM. Drop-in welcome with 24hr notice.</p>
          <Link href="/yoga" className="inline-block px-8 py-3 rounded-full font-semibold text-stone-900" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            View Full Schedule
          </Link>
        </div>
      </div>
    </div>
  );
}
