'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, X } from 'lucide-react';

export default function NewProgramPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '', slug: '', description: '', duration: 7,
    price: 1200, earlyBirdPrice: '', maxParticipants: 12,
    imageUrl: '', isActive: true,
  });
  const [includes, setIncludes] = useState(['']);
  const [highlights, setHighlights] = useState(['']);

  const generateSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/programs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          slug: form.slug || generateSlug(form.title),
          duration: Number(form.duration),
          price: Number(form.price),
          earlyBirdPrice: form.earlyBirdPrice ? Number(form.earlyBirdPrice) : null,
          maxParticipants: Number(form.maxParticipants),
          includes: includes.filter(Boolean),
          highlights: highlights.filter(Boolean),
        }),
      });
      if (!res.ok) { const d = await res.json(); throw new Error(d.error); }
      router.push('/admin/programs');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addItem = (arr: string[], set: (v: string[]) => void) => set([...arr, '']);
  const updateItem = (arr: string[], set: (v: string[]) => void, i: number, val: string) => {
    const n = [...arr]; n[i] = val; set(n);
  };
  const removeItem = (arr: string[], set: (v: string[]) => void, i: number) =>
    set(arr.filter((_, idx) => idx !== i));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/admin/programs" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">New Retreat Program</h1>
          <p className="text-stone-400 text-sm">Add a new retreat to your offerings</p>
        </div>
      </div>

      {error && <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 space-y-4">
              <h3 className="font-semibold text-stone-900">Basic Information</h3>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Program Title *</label>
                <input required type="text" value={form.title}
                  onChange={e => setForm(f => ({ ...f, title: e.target.value, slug: generateSlug(e.target.value) }))}
                  placeholder="7-Day Meditation & Astrology Retreat"
                  className="input-himalaya w-full px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">URL Slug</label>
                <input type="text" value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Description *</label>
                <textarea required value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={4} placeholder="Describe the retreat experience..."
                  className="input-himalaya w-full px-4 py-3 rounded-xl text-sm resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Featured Image URL</label>
                <input type="url" value={form.imageUrl}
                  onChange={e => setForm(f => ({ ...f, imageUrl: e.target.value }))}
                  placeholder="https://images.unsplash.com/..."
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
            </div>

            {/* Includes */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-stone-900">What's Included</h3>
                <button type="button" onClick={() => addItem(includes, setIncludes)}
                  className="flex items-center gap-1 text-sm font-medium" style={{ color: '#C5A253' }}>
                  <Plus className="w-4 h-4" /> Add Item
                </button>
              </div>
              <div className="space-y-2">
                {includes.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" value={item}
                      onChange={e => updateItem(includes, setIncludes, i, e.target.value)}
                      placeholder="e.g. All meals (Ayurvedic vegetarian)"
                      className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm" />
                    <button type="button" onClick={() => removeItem(includes, setIncludes, i)}
                      className="p-2.5 rounded-xl hover:bg-red-50 text-stone-400 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-stone-900">Highlights</h3>
                <button type="button" onClick={() => addItem(highlights, setHighlights)}
                  className="flex items-center gap-1 text-sm font-medium" style={{ color: '#C5A253' }}>
                  <Plus className="w-4 h-4" /> Add Highlight
                </button>
              </div>
              <div className="space-y-2">
                {highlights.map((item, i) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" value={item}
                      onChange={e => updateItem(highlights, setHighlights, i, e.target.value)}
                      placeholder="e.g. Sunrise meditation at Himalayan viewpoint"
                      className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm" />
                    <button type="button" onClick={() => removeItem(highlights, setHighlights, i)}
                      className="p-2.5 rounded-xl hover:bg-red-50 text-stone-400 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">
              <h3 className="font-semibold text-stone-900 text-sm">Pricing & Capacity</h3>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Duration (days) *</label>
                <input required type="number" min="1" value={form.duration}
                  onChange={e => setForm(f => ({ ...f, duration: Number(e.target.value) }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Base Price (USD) *</label>
                <input required type="number" min="0" value={form.price}
                  onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Early Bird Price (USD)</label>
                <input type="number" min="0" value={form.earlyBirdPrice}
                  onChange={e => setForm(f => ({ ...f, earlyBirdPrice: e.target.value }))}
                  placeholder="Leave empty if none"
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Max Participants *</label>
                <input required type="number" min="1" value={form.maxParticipants}
                  onChange={e => setForm(f => ({ ...f, maxParticipants: Number(e.target.value) }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.isActive}
                    onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))}
                    className="w-4 h-4 rounded accent-yellow-600" />
                  <span className="text-sm font-medium text-stone-700">Active (visible on site)</span>
                </label>
              </div>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-2xl font-semibold text-white btn-gold flex items-center justify-center gap-2">
              {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : '🏔️ Create Retreat'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
