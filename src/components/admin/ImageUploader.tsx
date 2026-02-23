'use client';

import { useRef, useState } from 'react';
import { UploadCloud, X, Link } from 'lucide-react';

export function ImageUploader({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [urlMode, setUrlMode] = useState(!value || value.startsWith('http'));
  const [dragging, setDragging] = useState(false);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const upload = async (file: File) => {
    setUploading(true);
    try {
      if (cloudName && preset) {
        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', preset);
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error?.message || 'Upload failed');
        onChange(data.secure_url);
      } else {
        // base64 fallback
        const reader = new FileReader();
        reader.onload = (ev) => { onChange(ev.target?.result as string); };
        reader.readAsDataURL(file);
      }
    } catch (e: any) {
      alert(e.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith('image/')) upload(file);
  };

  return (
    <div className="space-y-2">
      {/* Mode toggle */}
      <div className="flex gap-2 mb-2">
        <button type="button" onClick={() => setUrlMode(true)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${urlMode ? 'border-amber-400 bg-amber-50 text-amber-800' : 'border-stone-200 text-stone-500 hover:border-stone-300'}`}>
          <Link className="w-3 h-3" /> URL
        </button>
        <button type="button" onClick={() => setUrlMode(false)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${!urlMode ? 'border-amber-400 bg-amber-50 text-amber-800' : 'border-stone-200 text-stone-500 hover:border-stone-300'}`}>
          <UploadCloud className="w-3 h-3" /> Upload
        </button>
      </div>

      {urlMode ? (
        <input type="url" value={value} onChange={e => onChange(e.target.value)} placeholder="https://example.com/image.jpg"
          className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" />
      ) : (
        <div
          onDrop={handleDrop}
          onDragOver={e => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onClick={() => inputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${dragging ? 'border-amber-400 bg-amber-50' : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50'}`}>
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={e => { const f = e.target.files?.[0]; if (f) upload(f); e.target.value = ''; }} />
          {uploading ? (
            <div className="text-sm text-stone-500 animate-pulse">Uploading...</div>
          ) : (
            <>
              <UploadCloud className="w-8 h-8 mx-auto mb-2 text-stone-400" />
              <p className="text-sm text-stone-500">Drag & drop or click to upload</p>
              <p className="text-xs text-stone-400 mt-1">PNG, JPG, WebP supported</p>
              {!cloudName && <p className="text-xs text-amber-600 mt-2">💡 Add Cloudinary env vars for CDN hosting, or images are stored as base64</p>}
            </>
          )}
        </div>
      )}

      {/* Preview */}
      {value && (
        <div className="relative rounded-2xl overflow-hidden border border-stone-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className="w-full h-48 object-cover" />
          <button type="button" onClick={() => onChange('')}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-white shadow-sm">
            <X className="w-3.5 h-3.5 text-stone-700" />
          </button>
        </div>
      )}
    </div>
  );
}
