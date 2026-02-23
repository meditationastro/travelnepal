import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Yin Yoga Nepal | Deep Tissue Release & Mindfulness | Himalaya Retreat Nepal',
  description: 'Yin yoga classes in Nepal — slow, meditative practice holding poses 3-5 minutes for deep connective tissue release. All levels welcome at Khumaltar, Lalitpur.',
};

export default function YinYogaPage() {
  return (
    <div className="min-h-screen pt-20" style={{ background: '#fdf8f0' }}>
      <div className="py-20 text-center px-4" style={{ background: 'linear-gradient(135deg, #0a1416, #1c1917)' }}>
        <div className="text-5xl mb-5">🌙</div>
        <h1 className="font-display text-5xl text-white font-semibold mb-4">Yin Yoga Nepal</h1>
        <p className="text-stone-400 text-xl max-w-2xl mx-auto">Deep, meditative practice — long holds for profound release, stillness, and presence</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-4">Yin Yoga in the Himalayas</h2>
          <p className="text-stone-600 leading-relaxed text-lg mb-6">
            Yin yoga works at the deeper layers of the body — the connective tissues, joints, fascia, and meridians — through long-held, passive postures typically maintained for 3–5 minutes each. Combined with mindfulness and Taoist philosophy, it creates a profoundly meditative, healing practice.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[{ label: 'Duration', value: '75 minutes' }, { label: 'Price', value: '$25 per class' }, { label: 'Level', value: 'All levels' }].map(d => (
              <div key={d.label} className="bg-stone-50 rounded-2xl p-4 text-center">
                <div className="text-xs text-stone-400 mb-1">{d.label}</div>
                <div className="font-display font-semibold text-stone-900">{d.value}</div>
              </div>
            ))}
          </div>
          <div className="space-y-2 mb-8">
            {['Long-hold asanas (3-5 minutes each)', 'Meridian & fascia focus', 'Mindfulness & breath awareness', 'Restorative bolster sequences', 'Yoga nidra closing'].map(item => (
              <div key={item} className="flex items-center gap-2 text-stone-600">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#4a7e50' }} />
                {item}
              </div>
            ))}
          </div>
          <div className="flex gap-3 flex-col sm:flex-row">
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book a Yin yoga class." target="_blank" rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-stone-900 text-center" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Book a Class
            </a>
            <Link href="/yoga" className="px-8 py-3 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 text-center" style={{ borderColor: '#4a7e50' }}>
              All Yoga Classes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
