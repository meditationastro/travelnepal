'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye, Trash2 } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';
import RichTextEditor from '@/components/admin/RichTextEditor';

const categories = ['Meditation', 'Astrology', 'Travel', 'Spirituality', 'Ayurveda', 'Nepal'];

export default function EditBlogPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [form, setForm] = useState({
    title: '',
    metaTitle: '',
    metaDescription: '',
    ogImage: '',
    canonicalUrl: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    imageUrl: '',
    tags: '',
    isPublished: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/admin/blog/${params.id}`)
      .then(r => r.json())
      .then(data => {
        setForm({
          title: data.title || '',
          metaTitle: data.metaTitle || '',
          metaDescription: data.metaDescription || '',
          ogImage: data.ogImage || '',
          canonicalUrl: data.canonicalUrl || '',
          slug: data.slug || '',
          excerpt: data.excerpt || '',
          content: data.content || '',
          category: data.category || '',
          imageUrl: data.imageUrl || '',
          tags: (data.tags || []).join(', '),
          isPublished: data.isPublished || false,
        });
        setFetching(false);
      })
      .catch(() => setFetching(false));
  }, [params.id]);

  const handleSubmit = async (publish: boolean) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/admin/blog/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          isPublished: publish,
          publishedAt: publish ? new Date().toISOString() : null,
          tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error('Failed to save');
      router.push('/admin/blog');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Delete this post permanently?')) return;
    await fetch(`/api/admin/blog/${params.id}`, { method: 'DELETE' });
    router.push('/admin/blog');
  };

  if (fetching) return (
    <div className="flex items-center justify-center h-64">
      <div className="w-8 h-8 border-2 border-stone-200 border-t-yellow-500 rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/blog" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-semibold text-stone-900">Edit Blog Post</h1>
            <p className="text-stone-400 text-sm">/{form.slug}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={handleDelete} className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 text-sm font-medium">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
          <button onClick={() => handleSubmit(false)} disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button onClick={() => handleSubmit(true)} disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm btn-gold">
            <Eye className="w-4 h-4" /> {form.isPublished ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {error && <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{error}</div>}

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Title</label>
              <input type="text" value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                className="input-himalaya w-full px-4 py-3 rounded-xl text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-sm">/blog/</span>
                <input type="text" value={form.slug} onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Excerpt</label>
              <textarea value={form.excerpt} onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                rows={2} className="input-himalaya w-full px-4 py-3 rounded-xl text-sm resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Content</label>
              <RichTextEditor
                value={form.content}
                onChange={(v) => setForm(f => ({ ...f, content: v }))}
              />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">
            <h3 className="font-semibold text-stone-900 text-sm">Post Settings</h3>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Category</label>
              <select value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm">
                <option value="">Select...</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Image URL</label>
              <ImageUploader
                value={form.imageUrl}
                onChange={(url) => setForm(f => ({ ...f, imageUrl: url }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Tags (comma separated)</label>
              <input type="text" value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm" />
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">
            <h3 className="font-semibold text-stone-900 text-sm">SEO (optional)</h3>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">SEO Title</label>
              <input
                type="text"
                value={form.metaTitle}
                onChange={e => setForm(f => ({ ...f, metaTitle: e.target.value }))}
                placeholder="Leave blank to use the post title"
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Meta Description</label>
              <textarea
                value={form.metaDescription}
                onChange={e => setForm(f => ({ ...f, metaDescription: e.target.value }))}
                placeholder="Leave blank to use the excerpt"
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm min-h-[90px]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">OpenGraph Image</label>
              <ImageUploader
                value={form.ogImage}
                onChange={(url) => setForm(f => ({ ...f, ogImage: url }))}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 mb-1">Canonical URL</label>
              <input
                type="url"
                value={form.canonicalUrl}
                onChange={e => setForm(f => ({ ...f, canonicalUrl: e.target.value }))}
                placeholder="https://example.com/blog/post"
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
            <div className={`text-center py-2 px-4 rounded-xl text-sm font-medium mb-3 ${form.isPublished ? 'bg-green-50 text-green-600' : 'bg-stone-50 text-stone-500'}`}>
              {form.isPublished ? '✓ Published' : '○ Draft'}
            </div>
            <button onClick={() => handleSubmit(!form.isPublished)} disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white text-sm btn-gold">
              {form.isPublished ? 'Unpublish' : 'Publish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
