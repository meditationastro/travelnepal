'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Plus, X, Save, Trash2, Loader2 } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';

export default function EditProgramPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '', slug: '', description: '', duration: 7,
    price: 1200, earlyBirdPrice: '' as string | number, maxParticipants: 12,
    imageUrl: '', isActive: true,
  });
  const [includes, setIncludes] = useState(['']);
  const [highlights, setHighlights] = useState(['']);

  useEffect(() => {
    fetch(`/api/admin/programs/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setForm({
          title: data.title || '',
          slug: data.slug || '',
          description: data.description || '',
          duration: data.duration || 7,
          price: data.price || 0,
          earlyBirdPrice: data.earlyBirdPrice || '',
          maxParticipants: data.maxParticipants || 12,
          imageUrl: data.imageUrl || '',
          isActive: data.isActive !== false,
        });
        setIncludes(data.includes?.length ? data.includes : ['']);
        setHighlights(data.highlights?.length ? data.highlights : ['']);
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, [params.id]);

  const generateSlug = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/programs/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
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

  const handleDelete = async () => {
    if (!confirm('Delete this retreat? This cannot be undone.')) return;
    await fetch(`/api/admin/programs/${params.id}`, { method: 'DELETE' });
    router.push('/admin/programs');
  };

  const addItem = (arr: string[], set: (v: string[]) => void) => set([...arr, '']);
  const updateItem = (arr: string[], set: (v: string[]) => void, i: number, val: string) => {
    const n = [...arr]; n[i] = val; set(n);
  };
  const removeItem = (arr: string[], set: (v: string[]) => void, i: number) =>
    set(arr.filter((_, idx) => idx !== i));

  if (fetching) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-stone-200 border-t-yellow-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/programs" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-semibold text-stone-900">Edit Retreat</h1>
            <p className="text-stone-400 text-sm">/programs/{form.slug}</p>
          </div>
        </div>
        <button onClick={handleDelete} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
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
                  onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                  className="input-himalaya w-full px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">URL Slug</label>
                <div className="flex items-center gap-2">
                  <span className="text-stone-400 text-sm">/retreats/</span>
                  <input type="text" value={form.slug}
                    onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                    className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Description *</label>
                <textarea required value={form.description}
                  onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                  rows={5} className="input-himalaya w-full px-4 py-3 rounded-xl text-sm resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Featured Image</label>
                <ImageUploader value={form.imageUrl} onChange={url => setForm(f => ({ ...f, imageUrl: url }))} />
              </div>
            </div>

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
                      placeholder="e.g. All Ayurvedic vegetarian meals"
                      className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm" />
                    <button type="button" onClick={() => removeItem(includes, setIncludes, i)}
                      className="p-2.5 rounded-xl hover:bg-red-50 text-stone-400 hover:text-red-500">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

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

          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">
              <h3 className="font-semibold text-stone-900 text-sm">Pricing & Capacity</h3>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Duration (days)</label>
                <input required type="number" min="1" value={form.duration}
                  onChange={e => setForm(f => ({ ...f, duration: Number(e.target.value) }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Base Price (USD)</label>
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
                <label className="block text-sm font-medium text-stone-700 mb-1.5">Max Participants</label>
                <input required type="number" min="1" value={form.maxParticipants}
                  onChange={e => setForm(f => ({ ...f, maxParticipants: Number(e.target.value) }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.isActive}
                  onChange={e => setForm(f => ({ ...f, isActive: e.target.checked }))}
                  className="w-4 h-4 rounded accent-yellow-600" />
                <span className="text-sm font-medium text-stone-700">Active (visible on site)</span>
              </label>
            </div>

            <button type="submit" disabled={loading}
              className="w-full py-4 rounded-2xl font-semibold text-stone-900 btn-gold flex items-center justify-center gap-2">
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Save Changes</>}
            </button>

            <Link href={`/admin/programs/${params.id}/dates`}
              className="w-full py-3 rounded-2xl font-medium text-stone-700 border border-stone-200 hover:bg-stone-50 flex items-center justify-center gap-2 text-sm transition-colors">
              📅 Manage Dates
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
