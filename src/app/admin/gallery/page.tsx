'use client';
import { useState, useEffect, useRef } from 'react';
import { Image as ImageIcon, Plus, Trash2, Edit3, Loader2, Check, X, Upload, RefreshCw } from 'lucide-react';

interface GalleryImage { id: string; src: string | null; emoji: string; title: string; category: string; caption: string; createdAt: string; }
const CATEGORIES = ['All','Meditation','Astrology','Ayurveda','Landscape','Sacred Sites','Center','Ceremony','General'];

export default function AdminGalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [editingId, setEditingId] = useState<string|null>(null);
  const [editForm, setEditForm] = useState({title:'',caption:'',category:''});
  const [saving, setSaving] = useState<string|null>(null);
  const [deleting, setDeleting] = useState<string|null>(null);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const load = async () => { try { const r = await fetch('/api/gallery'); setImages(await r.json()); } catch {} finally { setLoading(false); } };
  useEffect(() => { load(); }, []);

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files; if (!files) return;
    setUploading(true);
    let done = 0;
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = async ev => {
        try {
          const res = await fetch('/api/gallery', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ src: ev.target?.result, emoji: '🖼️', title: file.name.replace(/\.[^/.]+$/,''), category:'General', caption:'' }) });
          const img = await res.json();
          setImages(prev => [img, ...prev]);
        } finally { done++; if (done===files.length) setUploading(false); }
      };
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const saveEdit = async (id: string) => {
    setSaving(id);
    try {
      const res = await fetch(`/api/gallery/${id}`, { method:'PATCH', headers:{'Content-Type':'application/json'}, body: JSON.stringify(editForm) });
      const updated = await res.json();
      setImages(prev => prev.map(img => img.id===id ? {...img,...updated} : img));
      setEditingId(null);
    } finally { setSaving(null); }
  };

  const del = async (id: string) => {
    if (!confirm('Delete this image?')) return;
    setDeleting(id);
    try { await fetch(`/api/gallery/${id}`, {method:'DELETE'}); setImages(prev=>prev.filter(i=>i.id!==id)); } finally { setDeleting(null); }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Gallery Manager</h1>
          <p className="text-stone-400 text-sm mt-0.5">{images.length} images · manage and organize the gallery</p>
        </div>
        <div className="flex gap-2">
          <button onClick={load} className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-400 hover:text-stone-700"><RefreshCw className="w-4 h-4"/></button>
          <label className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-stone-900 cursor-pointer hover:opacity-90 text-sm" style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
            {uploading ? <Loader2 className="w-4 h-4 animate-spin"/> : <Upload className="w-4 h-4"/>}
            {uploading?'Uploading…':'Upload Images'}
            <input ref={fileRef} type="file" multiple accept="image/*" className="hidden" onChange={handleUpload}/>
          </label>
        </div>
      </div>

      {/* Category filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CATEGORIES.map(cat => (
          <button key={cat} onClick={()=>setActiveCategory(cat)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap border transition-all"
            style={activeCategory===cat?{background:'rgba(197,162,83,0.15)',borderColor:'#C5A253',color:'#92400e'}:{borderColor:'#e7e5e4',color:'#78716c'}}>
            {cat} {cat==='All'?`(${images.length})`:images.filter(i=>i.category===cat).length>0?`(${images.filter(i=>i.category===cat).length})`:''}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20"><Loader2 className="w-8 h-8 animate-spin mx-auto" style={{color:'#C5A253'}}/></div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          {filtered.length === 0 ? (
            <div className="p-16 text-center text-stone-400">
              <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-25"/>
              <p>No images in this category</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-100 bg-stone-50">
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Image</th>
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Title & Caption</th>
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Category</th>
                    <th className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {filtered.map(img => (
                    <tr key={img.id} className="hover:bg-stone-50 transition-colors">
                      <td className="px-5 py-3">
                        <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0" style={{background:'linear-gradient(135deg,#fdf4e3,#f0e4c8)'}}>
                          {img.src ? <img src={img.src} alt={img.title} className="w-full h-full object-cover"/> :
                            <div className="w-full h-full flex items-center justify-center text-2xl">{img.emoji}</div>}
                        </div>
                      </td>
                      <td className="px-5 py-3 max-w-xs">
                        {editingId===img.id ? (
                          <div className="space-y-1.5">
                            <input value={editForm.title} onChange={e=>setEditForm(f=>({...f,title:e.target.value}))} className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-amber-300"/>
                            <textarea value={editForm.caption} onChange={e=>setEditForm(f=>({...f,caption:e.target.value}))} rows={2} className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 resize-none focus:outline-none focus:ring-2 focus:ring-amber-300"/>
                            <select value={editForm.category} onChange={e=>setEditForm(f=>({...f,category:e.target.value}))} className="w-full text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 bg-white focus:outline-none">
                              {CATEGORIES.filter(c=>c!=='All').map(c=><option key={c}>{c}</option>)}
                            </select>
                          </div>
                        ) : (
                          <div>
                            <div className="font-medium text-stone-900 text-sm">{img.title}</div>
                            <div className="text-stone-400 text-xs mt-0.5 line-clamp-2">{img.caption || <span className="italic">No caption</span>}</div>
                          </div>
                        )}
                      </td>
                      <td className="px-5 py-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800">{img.category}</span>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex items-center gap-2">
                          {editingId===img.id ? (
                            <>
                              <button onClick={()=>saveEdit(img.id)} className="p-1.5 rounded-lg bg-green-50 text-green-600 hover:bg-green-100" title="Save">
                                {saving===img.id?<Loader2 className="w-4 h-4 animate-spin"/>:<Check className="w-4 h-4"/>}
                              </button>
                              <button onClick={()=>setEditingId(null)} className="p-1.5 rounded-lg bg-stone-50 text-stone-500 hover:bg-stone-100"><X className="w-4 h-4"/></button>
                            </>
                          ) : (
                            <button onClick={()=>{setEditingId(img.id);setEditForm({title:img.title,caption:img.caption,category:img.category});}}
                              className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100"><Edit3 className="w-4 h-4"/></button>
                          )}
                          <button onClick={()=>del(img.id)} disabled={deleting===img.id} className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100">
                            {deleting===img.id?<Loader2 className="w-4 h-4 animate-spin"/>:<Trash2 className="w-4 h-4"/>}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
