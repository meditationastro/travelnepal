'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Eye } from 'lucide-react';
import { ImageUploader } from '@/components/admin/ImageUploader';
import RichTextEditor from '@/components/admin/RichTextEditor';

const categories = ['Meditation', 'Astrology', 'Travel', 'Spirituality', 'Ayurveda', 'Nepal'];

export default function NewBlogPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const handleTitleChange = (title: string) => {
    setForm(f => ({ ...f, title, slug: generateSlug(title) }));
  };

  const handleSubmit = async (publish: boolean) => {
    if (!form.title || !form.content) {
      setError('Title and content are required.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          isPublished: publish,
          publishedAt: publish ? new Date().toISOString() : null,
          tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to save');
      router.push('/admin/blog');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/blog" className="p-2 rounded-xl hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="font-display text-2xl font-semibold text-stone-900">New Blog Post</h1>
            <p className="text-stone-400 text-sm">Write and publish a new article</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => handleSubmit(false)} disabled={loading}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          <button onClick={() => handleSubmit(true)} disabled={loading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm btn-gold">
            <Eye className="w-4 h-4" /> Publish
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">{error}</div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Editor */}
        <div className="lg:col-span-2 space-y-5">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Title *</label>
              <input
                type="text"
                placeholder="Your blog post title..."
                value={form.title}
                onChange={e => handleTitleChange(e.target.value)}
                className="input-himalaya w-full px-4 py-3 rounded-xl text-sm font-display text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">URL Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-stone-400 text-sm">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => setForm(f => ({ ...f, slug: e.target.value }))}
                  className="input-himalaya flex-1 px-4 py-2.5 rounded-xl text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Excerpt</label>
              <textarea
                placeholder="Short summary shown on blog listing page..."
                value={form.excerpt}
                onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
                rows={2}
                className="input-himalaya w-full px-4 py-3 rounded-xl text-sm resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Content *</label>
              <RichTextEditor
                value={form.content}
                onChange={(v) => setForm(f => ({ ...f, content: v }))}
                placeholder="Write your full article content here. Markdown supported (## headings, - lists, **bold**, [links](url), ![alt](img))"
              />
              <p className="text-stone-400 text-xs mt-1">{form.content.length} characters · ~{Math.ceil(form.content.split(' ').length / 200)} min read</p>
            </div>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-5">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 space-y-4">
            <h3 className="font-semibold text-stone-900 text-sm">Post Settings</h3>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Category</label>
              <select
                value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
              >
                <option value="">Select category...</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Featured Image URL</label>
              <ImageUploader
                value={form.imageUrl}
                onChange={(url) => setForm(f => ({ ...f, imageUrl: url }))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1.5">Tags</label>
              <input
                type="text"
                placeholder="meditation, astrology, nepal"
                value={form.tags}
                onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
              />
              <p className="text-stone-400 text-xs mt-1">Comma separated</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
            <h3 className="font-semibold text-stone-900 text-sm mb-3">SEO (optional)</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">SEO Title</label>
                <input
                  type="text"
                  placeholder="Leave blank to use the post title"
                  value={form.metaTitle}
                  onChange={e => setForm(f => ({ ...f, metaTitle: e.target.value }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">Meta Description</label>
                <textarea
                  placeholder="Leave blank to use the excerpt"
                  value={form.metaDescription}
                  onChange={e => setForm(f => ({ ...f, metaDescription: e.target.value }))}
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
                  placeholder="https://example.com/blog/post"
                  value={form.canonicalUrl}
                  onChange={e => setForm(f => ({ ...f, canonicalUrl: e.target.value }))}
                  className="input-himalaya w-full px-4 py-2.5 rounded-xl text-sm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
            <h3 className="font-semibold text-stone-900 text-sm mb-3">Publishing</h3>
            <div className="space-y-3">
              <button onClick={() => handleSubmit(false)} disabled={loading}
                className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Save className="w-4 h-4" /> Save as Draft
              </button>
              <button onClick={() => handleSubmit(true)} disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-white text-sm btn-gold flex items-center justify-center gap-2">
                {loading ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Eye className="w-4 h-4" />}
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
