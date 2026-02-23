'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NewTestimonialPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', country: '', retreat: '', content: '', rating: 5, isPublished: true });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/admin/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) router.push('/admin/testimonials');
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/testimonials" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400"><ArrowLeft className="w-5 h-5" /></Link>
        <h1 className="font-display text-2xl font-semibold text-stone-900">Add Testimonial</h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Guest Name *</label>
              <input required type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Sarah M." className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Country</label>
              <input type="text" value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}
                placeholder="United Kingdom" className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">Retreat Attended</label>
            <input type="text" value={form.retreat} onChange={e => setForm(f => ({ ...f, retreat: e.target.value }))}
              placeholder="7-Day Meditation & Astrology Retreat" className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1.5">Testimonial *</label>
            <textarea required value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))}
              rows={5} placeholder="Write the guest's testimonial here..."
              className="input-himalaya w-full px-4 py-3 rounded-xl text-sm resize-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">Rating</label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(n => (
                <button key={n} type="button" onClick={() => setForm(f => ({ ...f, rating: n }))}
                  className={`text-2xl transition-transform hover:scale-110 ${n <= form.rating ? 'opacity-100' : 'opacity-30'}`}
                  style={{ color: '#C5A253' }}>★</button>
              ))}
            </div>
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" checked={form.isPublished} onChange={e => setForm(f => ({ ...f, isPublished: e.target.checked }))}
              className="w-4 h-4 rounded accent-yellow-600" />
            <span className="text-sm font-medium text-stone-700">Publish immediately</span>
          </label>
          <button type="submit" disabled={loading}
            className="w-full py-3.5 rounded-xl btn-gold font-semibold text-white flex items-center justify-center gap-2">
            {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : '⭐ Save Testimonial'}
          </button>
        </div>
      </form>
    </div>
  );
}
