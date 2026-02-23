'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Camera, Plus, Trash2, X, ZoomIn, Edit3, Check, Loader2, RefreshCw, ChevronLeft, ChevronRight, Search, Grid3x3, LayoutGrid, Lock } from 'lucide-react';

interface GalleryImage {
  id: string; src: string | null; emoji: string; title: string; category: string; caption: string; createdAt: string;
}

const CATEGORIES = ['All','Meditation','Astrology','Ayurveda','Landscape','Sacred Sites','Center','Ceremony','General'];
const EMOJIS = ['🏔️','🧘','⭐','🌿','🔔','🕌','🌸','🎋','📿','🪷','🌄','🕯️','🌺','✨','🙏','🔮','🌙','☀️','🦋','🌊'];
const PAGE_SIZE = 12;

// Rich curated photo collection
const GALLERY_PHOTOS = [
  { src:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', title:'Himalayan Dawn', category:'Landscape', caption:'First light over the sacred peaks of the Himalayan range', emoji:'🏔️' },
  { src:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80', title:'Morning Meditation', category:'Meditation', caption:'Early morning stillness in the retreat hall', emoji:'🧘' },
  { src:'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80', title:'Yoga at Sunrise', category:'Meditation', caption:'Hatha yoga practice as the sun rises over Lalitpur', emoji:'🌅' },
  { src:'https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?w=800&q=80', title:'Vedic Star Map', category:'Astrology', caption:'The cosmic blueprint — a Vedic birth chart rendered in traditional style', emoji:'⭐' },
  { src:'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800&q=80', title:'Kathmandu Valley', category:'Landscape', caption:'The Kathmandu Valley from above — sacred geography of Nepal', emoji:'🏔️' },
  { src:'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800&q=80', title:'Ayurvedic Herbs', category:'Ayurveda', caption:'Himalayan herbs prepared for Panchakarma treatment', emoji:'🌿' },
  { src:'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&q=80', title:'Tibetan Singing Bowls', category:'Ceremony', caption:'Handcrafted singing bowls used in our sound healing sessions', emoji:'🔔' },
  { src:'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=800&q=80', title:'Sacred Fire Ceremony', category:'Ceremony', caption:'Vedic Havan ritual performed at our retreat center', emoji:'🔥' },
  { src:'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&q=80', title:'Retreat Garden', category:'Center', caption:'The meditation garden at Himalaya Retreat Nepal', emoji:'🌺' },
  { src:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', title:'Annapurna Range', category:'Landscape', caption:'The Annapurna range at golden hour — backdrop to our sacred treks', emoji:'🏔️' },
  { src:'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80', title:'Boudhanath Stupa', category:'Sacred Sites', caption:'Boudhanath — the world\'s largest Buddhist stupa, 30 minutes from our center', emoji:'🕌' },
  { src:'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=800&q=80', title:'Pashupati Temple', category:'Sacred Sites', caption:'Pashupatinath Temple — one of the holiest Shiva temples on Earth', emoji:'🛕' },
  { src:'https://images.unsplash.com/photo-1599517967935-0c38de5e0d7e?w=800&q=80', title:'Shirodhara Treatment', category:'Ayurveda', caption:'Traditional Shirodhara oil stream therapy for deep relaxation', emoji:'🌊' },
  { src:'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80', title:'Kundalini Practice', category:'Meditation', caption:'Kundalini yoga session with breath of fire and mantra', emoji:'🔥' },
  { src:'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', title:'Group Retreat Session', category:'Center', caption:'Guests gathered for morning teachings in the main hall', emoji:'🙏' },
  { src:'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?w=800&q=80', title:'Rudraksha Malas', category:'General', caption:'Hand-blessed 108-bead Rudraksha malas for Japa meditation', emoji:'📿' },
  { src:'https://images.unsplash.com/photo-1560948799-31571abd06c1?w=800&q=80', title:'Herbal Teas', category:'Ayurveda', caption:'Dosha-specific Himalayan herbal tea ceremony at sunrise', emoji:'🍵' },
  { src:'https://images.unsplash.com/photo-1569474397359-bbbcb0fe3e50?w=800&q=80', title:'Stargazing Nepal', category:'Astrology', caption:'The Milky Way above the Himalayas — perfect for planetary meditation', emoji:'🌟' },
  { src:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', title:'Silent Walk', category:'Meditation', caption:'Mindful walking in the pine forests surrounding the retreat', emoji:'🌲' },
  { src:'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80', title:'Himalayan Village', category:'Landscape', caption:'Traditional Nepali village on the trek to Annapurna Base Camp', emoji:'🏘️' },
  { src:'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=800&q=80', title:'Astrology Books', category:'Astrology', caption:'Classical Jyotish texts used in our astrology training', emoji:'📚' },
  { src:'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80', title:'Candle Ceremony', category:'Ceremony', caption:'Evening lamp ceremony at the retreat — Agni Puja', emoji:'🕯️' },
  { src:'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&q=80', title:'Abhyanga Massage', category:'Ayurveda', caption:'Traditional Ayurvedic full-body oil massage with warm medicated herbs', emoji:'🛁' },
  { src:'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?w=800&q=80', title:'Crystal Healing', category:'General', caption:'Crystal and gemstone remedies recommended after Vedic astrology readings', emoji:'💎' },
];

export default function GalleryPage() {
  const { data: session } = useSession();
  const isAdmin = (session?.user as any)?.role === 'ADMIN';

  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [lightbox, setLightbox] = useState<{ img: GalleryImage; index: number } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: '', caption: '', category: '' });
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItem, setNewItem] = useState({ title: '', caption: '', category: 'Meditation', emoji: '🏔️' });
  const [gridDense, setGridDense] = useState(false);
  const [animatingIds, setAnimatingIds] = useState<Set<string>>(new Set());
  const fileRef = useRef<HTMLInputElement>(null);

  const fetchImages = useCallback(async () => {
    // In production (especially on Netlify), the DB-backed /api/gallery route can be slow or unavailable.
    // We always want the gallery to become usable quickly, so we:
    // 1) render curated seed photos immediately, then
    // 2) attempt the API request with a short timeout.
    setLoading(true);
    try {
      // Seed curated photos first (instant UI)
      setImages(GALLERY_PHOTOS.map((p: typeof GALLERY_PHOTOS[0], i: number) => ({ id: `seed-${i}`, ...p, createdAt: new Date().toISOString() })));

      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 2500);
      const res = await fetch('/api/gallery', { cache: 'no-store', signal: controller.signal });
      clearTimeout(t);

      if (!res.ok) return;
      const data = await res.json().catch(() => null);
      if (Array.isArray(data) && data.length > 0) setImages(data);
    } catch {
      // Keep seed photos
    } finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchImages(); }, [fetchImages]);
  useEffect(() => { setPage(1); }, [activeCategory, search]);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  });

  const filtered = images.filter(img => {
    const matchCat = activeCategory === 'All' || img.category === activeCategory;
    const matchSearch = !search || img.title.toLowerCase().includes(search.toLowerCase()) || img.caption.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const navigateLightbox = (dir: number) => {
    if (!lightbox) return;
    const newIndex = (lightbox.index + dir + filtered.length) % filtered.length;
    setLightbox({ img: filtered[newIndex], index: newIndex });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) return;
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setUploading(true);
    let done = 0;
    Array.from(files).forEach((file: File) => {
      const reader = new FileReader();
      reader.onload = async (ev) => {
        const src = ev.target?.result as string;
        try {
          const res = await fetch('/api/gallery', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ src, emoji: '🖼️', title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '), category: 'General', caption: '' }) });
          const created = await res.json();
          setImages((prev: GalleryImage[]) => [created, ...prev]);
          setAnimatingIds(prev => new Set([...prev, created.id]));
          setTimeout(() => setAnimatingIds(prev => { const n = new Set(prev); n.delete(created.id); return n; }), 800);
        } finally { done++; if (done === files.length) setUploading(false); }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleAddPlaceholder = async () => {
    if (!isAdmin || !newItem.title) return;
    try {
      const res = await fetch('/api/gallery', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...newItem, src: null }) });
      const created = await res.json();
      setImages((prev: GalleryImage[]) => [created, ...prev]);
      setAnimatingIds(prev => new Set([...prev, created.id]));
      setTimeout(() => setAnimatingIds(prev => { const n = new Set(prev); n.delete(created.id); return n; }), 800);
      setShowAddModal(false);
      setNewItem({ title: '', caption: '', category: 'Meditation', emoji: '🏔️' });
    } catch (err) { console.error(err); }
  };

  const startEdit = (img: GalleryImage) => {
    if (!isAdmin) return;
    setEditingId(img.id);
    setEditForm({ title: img.title, caption: img.caption, category: img.category });
  };

  const saveEdit = async (id: string) => {
    if (!isAdmin) return;
    setSavingId(id);
    try {
      const res = await fetch(`/api/gallery/${id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(editForm) });
      const updated = await res.json();
      setImages((prev: GalleryImage[]) => prev.map((img: GalleryImage) => img.id === id ? { ...img, ...updated } : img));
      setEditingId(null);
    } finally { setSavingId(null); }
  };

  const deleteImage = async (id: string) => {
    if (!isAdmin) return;
    if (!confirm('Delete this image from the gallery?')) return;
    setDeletingId(id);
    try {
      await fetch(`/api/gallery/${id}`, { method: 'DELETE' });
      setImages((prev: GalleryImage[]) => prev.filter((img: GalleryImage) => img.id !== id));
      if (lightbox?.img.id === id) setLightbox(null);
    } finally { setDeletingId(null); }
  };

  const colClass = gridDense ? 'columns-3 sm:columns-4 lg:columns-5' : 'columns-2 sm:columns-3 lg:columns-4';

  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>

      {/* SEO Hero */}
      <section className="pt-20">
        <div className="py-24 text-center px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1c1917 0%, #2d1500 50%, #1a1a0a 100%)' }}>
          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="absolute rounded-full opacity-20"
                style={{ width: 4 + (i % 4) * 3, height: 4 + (i % 4) * 3, background: '#C5A253', left: `${5 + i * 6}%`, top: `${15 + (i % 6) * 14}%`, animation: `float ${3 + i * 0.4}s ease-in-out infinite alternate`, animationDelay: `${i * 0.25}s` }} />
            ))}
          </div>
          {/* Mandala ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-500/5 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-amber-500/5 pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.12)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.25)' }}>
              📸 Visual Journey · Khumaltar, Lalitpur, Nepal
            </div>
            <Camera className="w-12 h-12 mx-auto mb-5" style={{ color: '#C5A253' }} />
            <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-4">Sacred Gallery</h1>
            <p className="text-stone-400 text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              A visual journey through Himalya Retreat Nepal — meditation halls, ancient ceremonies, Ayurvedic therapies, and the breathtaking landscapes of the Kathmandu Valley
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-stone-500 text-sm mb-8">
              <span>📍 Khumaltar, Lalitpur</span><span>·</span>
              <span>🏔️ Himalayan Backdrop</span><span>·</span>
              <span>🕌 Sacred Sites</span><span>·</span>
              <span>🌿 Ayurveda & Yoga</span>
            </div>

            {/* Public CTAs */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link href="/gallery/stories" className="px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                Explore Nepal Photo Stories
              </Link>
              <Link href="/retreats" className="px-6 py-3 rounded-full font-semibold text-stone-900 hover:opacity-95 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                View Retreat Packages
              </Link>
            </div>

            {/* Admin-only upload controls */}
            {isAdmin && (
              <div className="flex flex-wrap justify-center gap-3">
                <label className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-stone-900 cursor-pointer hover:opacity-90 transition-all shadow-lg" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                  {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  {uploading ? 'Uploading...' : 'Upload Photos'}
                  <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={handleFileUpload} disabled={uploading} />
                </label>
                <button onClick={() => setShowAddModal(true)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all">
                  <Plus className="w-4 h-4" /> Add Entry
                </button>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-medium">
                  <Lock className="w-3 h-3" /> Admin Mode
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SEO text block (helps index gallery intent) */}
      <section className="max-w-6xl mx-auto px-4 -mt-8">
        <div className="rounded-2xl border bg-white/70 p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Nepal spiritual retreat gallery</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">
            This gallery highlights the atmosphere of a spiritual retreat in Nepal — meditation halls, Himalayan landscapes,
            sacred sites like Boudhanath and Pashupatinath, Ayurvedic rituals, and the slow, grounded rhythm that makes Nepal
            a world-class destination for inner work. For deeper planning help, browse our Nepal photo stories and Learn hub.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link className="px-4 py-2 rounded-xl border" href="/learn">Explore 400+ guides</Link>
            <Link className="px-4 py-2 rounded-xl border" href="/vedic-astrology/booking">Book Vedic astrology</Link>
            <Link className="px-4 py-2 rounded-xl border" href="/contact">Contact</Link>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats bar */}
        <div className="flex flex-wrap items-center justify-center gap-8 py-6 mb-6 border-b border-stone-200">
          {[{ n: `${filtered.length}`, l: 'Photos' }, { n: '24+', l: 'Categories' }, { n: '50+', l: 'Countries' }, { n: '2009', l: 'Est.' }].map(s => (
            <div key={s.l} className="text-center">
              <div className="font-display text-xl font-semibold" style={{ color: '#C5A253' }}>{s.n}</div>
              <div className="text-xs text-stone-400">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Controls bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input type="text" placeholder="Search gallery..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-300" />
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 flex-1">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className="px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap border transition-all flex-shrink-0"
                style={activeCategory === cat ? { background: 'rgba(197,162,83,0.15)', borderColor: '#C5A253', color: '#92400e' } : { borderColor: '#e7e5e4', color: '#78716c' }}>
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-1 bg-white border border-stone-200 rounded-xl p-1 flex-shrink-0">
            <button onClick={() => setGridDense(false)} className={`p-2 rounded-lg transition-all ${!gridDense ? 'bg-stone-900 text-white' : 'text-stone-400 hover:text-stone-700'}`}><LayoutGrid className="w-4 h-4" /></button>
            <button onClick={() => setGridDense(true)} className={`p-2 rounded-lg transition-all ${gridDense ? 'bg-stone-900 text-white' : 'text-stone-400 hover:text-stone-700'}`}><Grid3x3 className="w-4 h-4" /></button>
          </div>
          <button onClick={fetchImages} className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-400 hover:text-stone-700 flex-shrink-0"><RefreshCw className="w-4 h-4" /></button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-stone-400">{filtered.length} image{filtered.length !== 1 ? 's' : ''}{search ? ` matching "${search}"` : ''}</p>
          {totalPages > 1 && <p className="text-sm text-stone-400">Page {page} of {totalPages}</p>}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <Loader2 className="w-10 h-10 animate-spin mx-auto mb-3" style={{ color: '#C5A253' }} />
              <p className="text-stone-400 text-sm">Loading gallery...</p>
            </div>
          </div>
        ) : paginated.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <Camera className="w-14 h-14 mx-auto mb-4 opacity-25" />
            <p className="text-lg font-medium mb-2">No images found</p>
            <p className="text-sm">Try a different category or search term</p>
          </div>
        ) : (
          <div className={`mx-auto w-full max-w-6xl ${colClass} gap-4 space-y-4`}>
            {paginated.map((img, i) => {
              const globalIndex = filtered.indexOf(img);
              const isNew = animatingIds.has(img.id);
              return (
                <div key={img.id}
                  className={`break-inside-avoid relative group rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-white transition-all duration-500 ${isNew ? 'scale-95 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]' : ''}`}
                  style={{ animationDelay: `${i * 30}ms` }}>
                  {/* Image */}
                  <div className="w-full cursor-pointer relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fdf4e3, #f0e4c8)', minHeight: gridDense ? 120 : 160 }}
                    onClick={() => !editingId && setLightbox({ img, index: globalIndex })}>
                    {img.src ? (
                      <img
                        loading={globalIndex < 6 ? 'eager' : 'lazy'}
                        decoding="async"
                        src={img.src}
                        alt={img.title}
                        className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        style={{ aspectRatio: gridDense ? '4 / 3' : '16 / 10' }}
                      />
                    ) : (
                      <div className={`flex flex-col items-center justify-center gap-2 ${gridDense ? 'p-4' : 'p-8'}`} style={{ minHeight: gridDense ? 120 : 160 }}>
                        <span className={gridDense ? 'text-3xl' : 'text-5xl'}>{img.emoji}</span>
                        {!gridDense && <span className="text-xs text-stone-400 text-center font-medium">{img.title}</span>}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Caption overlay on hover */}
                    {img.caption && !gridDense && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-xs leading-relaxed">{img.caption}</p>
                      </div>
                    )}
                  </div>

                  {/* Action buttons — VIEW always, EDIT/DELETE only for admin */}
                  <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <button onClick={() => setLightbox({ img, index: globalIndex })} className="p-1.5 rounded-lg bg-white/95 shadow-md hover:bg-white" title="View"><ZoomIn className="w-3.5 h-3.5 text-stone-700" /></button>
                    {isAdmin && (
                      <>
                        <button onClick={() => editingId === img.id ? saveEdit(img.id) : startEdit(img)} className="p-1.5 rounded-lg bg-white/95 shadow-md hover:bg-white" title="Edit">
                          {savingId === img.id ? <Loader2 className="w-3.5 h-3.5 animate-spin text-amber-600" /> : editingId === img.id ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Edit3 className="w-3.5 h-3.5 text-stone-700" />}
                        </button>
                        <button onClick={() => deleteImage(img.id)} disabled={deletingId === img.id} className="p-1.5 rounded-lg bg-white/95 shadow-md hover:bg-red-50" title="Delete">
                          {deletingId === img.id ? <Loader2 className="w-3.5 h-3.5 animate-spin text-red-500" /> : <Trash2 className="w-3.5 h-3.5 text-red-500" />}
                        </button>
                      </>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium text-white" style={{ background: 'rgba(28,25,23,0.75)', backdropFilter: 'blur(4px)' }}>{img.category}</span>
                  </div>

                  {/* Caption below — read only for visitors */}
                  {!gridDense && (
                    <div className="p-3">
                      {isAdmin && editingId === img.id ? (
                        <div className="space-y-2" onClick={e => e.stopPropagation()}>
                          <input value={editForm.title} onChange={e => setEditForm(f => ({ ...f, title: e.target.value }))} placeholder="Title"
                            className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                          <select value={editForm.category} onChange={e => setEditForm(f => ({ ...f, category: e.target.value }))}
                            className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                            {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                          </select>
                          <textarea value={editForm.caption} onChange={e => setEditForm(f => ({ ...f, caption: e.target.value }))} rows={2} placeholder="Caption..."
                            className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none" />
                          <div className="flex gap-1.5">
                            <button onClick={() => saveEdit(img.id)} className="flex-1 py-1.5 rounded-lg text-xs font-semibold text-stone-900" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
                              {savingId === img.id ? 'Saving…' : 'Save'}
                            </button>
                            <button onClick={() => setEditingId(null)} className="flex-1 py-1.5 rounded-lg text-xs bg-stone-100 text-stone-600">Cancel</button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {img.title && <p className="text-xs font-semibold text-stone-700 mb-0.5">{img.title}</p>}
                          {img.caption && <p className="text-xs text-stone-400 line-clamp-2">{img.caption}</p>}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-medium text-stone-600 disabled:opacity-40 hover:bg-stone-50 transition-all">
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                <button key={p} onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-xl text-sm font-medium transition-all ${p === page ? 'text-stone-900 shadow-sm' : 'text-stone-500 hover:bg-stone-100'}`}
                  style={p === page ? { background: 'linear-gradient(135deg, #C5A253, #E8C870)' } : {}}>
                  {p}
                </button>
              ))}
            </div>
            <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm font-medium text-stone-600 disabled:opacity-40 hover:bg-stone-50 transition-all">
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-[500] bg-black/95 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-10" onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[90vh] mx-8 flex flex-col items-center" onClick={e => e.stopPropagation()}>
            {lightbox.img.src ? (
              <img loading="eager" decoding="async" src={lightbox.img.src} alt={lightbox.img.title} className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl" />
            ) : (
              <div className="w-64 h-64 rounded-2xl flex flex-col items-center justify-center gap-4 bg-stone-800">
                <span className="text-8xl">{lightbox.img.emoji}</span>
                <span className="text-white font-medium">{lightbox.img.title}</span>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-white font-display text-xl font-semibold mb-1">{lightbox.img.title}</h3>
              {lightbox.img.caption && <p className="text-stone-400 text-sm max-w-md">{lightbox.img.caption}</p>}
              <div className="mt-2 flex items-center justify-center gap-3 text-xs text-stone-500">
                <span className="px-2 py-0.5 rounded-full bg-stone-800">{lightbox.img.category}</span>
                <span>{lightbox.index + 1} / {filtered.length}</span>
              </div>
            </div>
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-10" onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>
            <ChevronRight className="w-6 h-6" />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"><X className="w-5 h-5" /></button>
        </div>
      )}

      {/* Admin Add Modal */}
      {isAdmin && showAddModal && (
        <div className="fixed inset-0 z-[400] bg-black/60 flex items-center justify-center px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <h3 className="font-display text-xl font-semibold text-stone-900 mb-5">Add Gallery Entry</h3>
            <div className="space-y-3">
              <input value={newItem.title} onChange={e => setNewItem(n => ({ ...n, title: e.target.value }))} placeholder="Title *" className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
              <textarea value={newItem.caption} onChange={e => setNewItem(n => ({ ...n, caption: e.target.value }))} rows={3} placeholder="Caption..." className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none" />
              <select value={newItem.category} onChange={e => setNewItem(n => ({ ...n, category: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-300">
                {CATEGORIES.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
              </select>
              <div className="flex flex-wrap gap-2 p-3 border border-stone-200 rounded-xl">
                {EMOJIS.map(e => <button key={e} onClick={() => setNewItem(n => ({ ...n, emoji: e }))} className={`text-xl p-1 rounded-lg transition-all ${newItem.emoji === e ? 'bg-amber-100 ring-2 ring-amber-400' : 'hover:bg-stone-100'}`}>{e}</button>)}
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={handleAddPlaceholder} className="flex-1 py-3 rounded-xl font-semibold text-stone-900" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>Add Entry</button>
              <button onClick={() => setShowAddModal(false)} className="flex-1 py-3 rounded-xl text-stone-600 bg-stone-100 font-semibold">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 text-center" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <h2 className="font-display text-3xl text-white font-semibold mb-3">Visit in Person</h2>
        <p className="text-stone-400 mb-6 max-w-md mx-auto">No photo can capture the feeling of being here. Come and experience the Himalayas for yourself.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/retreats" className="px-8 py-3 rounded-full font-semibold text-stone-900 hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>View Retreats</a>
          <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full font-semibold text-white text-center" style={{ background: '#25D366' }}>💬 WhatsApp Us</a>
        </div>
      </section>
    </div>
  );
}
