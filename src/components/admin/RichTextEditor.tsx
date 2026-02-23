'use client';

import { useMemo, useRef, useState, useCallback } from 'react';
import { parseMarkdown } from '@/lib/markdown';
import { 
  Bold, Italic, Heading2, Heading3, List, Link2, Image as ImageIcon, 
  Quote, Code, Minus, AlignLeft, Eye, Edit3, Upload, Table, Youtube
} from 'lucide-react';

type Props = {
  value: string;
  onChange: (next: string) => void;
  placeholder?: string;
};

function wrapSelection(textarea: HTMLTextAreaElement, before: string, after = '', defaultText = '') {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const value = textarea.value;
  const selected = value.slice(start, end) || defaultText;
  const next = value.slice(0, start) + before + selected + after + value.slice(end);
  const cursorStart = start + before.length;
  const cursorEnd = cursorStart + selected.length;
  return { next, cursorStart, cursorEnd };
}

function insertAt(textarea: HTMLTextAreaElement, text: string) {
  const start = textarea.selectionStart;
  const value = textarea.value;
  const next = value.slice(0, start) + text + value.slice(start);
  const cursor = start + text.length;
  return { next, cursor };
}

export default function RichTextEditor({ value, onChange, placeholder }: Props) {
  const [tab, setTab] = useState<'write' | 'preview'>('write');
  const [uploading, setUploading] = useState(false);
  const ref = useRef<HTMLTextAreaElement | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const preview = useMemo(() => parseMarkdown(value).html, [value]);

  const cmd = useCallback((before: string, after = '', defaultText = '') => {
    const el = ref.current;
    if (!el) return;
    const { next, cursorStart, cursorEnd } = wrapSelection(el, before, after, defaultText);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(cursorStart, cursorEnd);
    });
  }, [onChange]);

  const insert = useCallback((text: string) => {
    const el = ref.current;
    if (!el) return;
    const { next, cursor } = insertAt(el, text);
    onChange(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(cursor, cursor);
    });
  }, [onChange]);

  const handleImageUpload = async (file: File) => {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

    if (cloudName && preset) {
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset);
        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: formData });
        const data = await res.json();
        if (data.secure_url) {
          insert(`\n![${file.name.replace(/\.[^/.]+$/, '')}](${data.secure_url})\n`);
        }
      } catch { alert('Image upload failed.'); }
      finally { setUploading(false); }
    } else {
      // Fallback: base64 embed
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target?.result as string;
        insert(`\n![${file.name.replace(/\.[^/.]+$/, '')}](${src})\n`);
        setUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleImageUpload(file);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    const items = e.clipboardData.items;
    for (const item of Array.from(items)) {
      if (item.type.startsWith('image/')) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) handleImageUpload(file);
        return;
      }
    }
  };

  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  const ToolBtn = ({ onClick, title, children, active = false }: { onClick: () => void; title: string; children: React.ReactNode; active?: boolean }) => (
    <button type="button" onClick={onClick} title={title}
      className={`p-1.5 rounded-lg text-sm transition-all hover:bg-stone-200 ${active ? 'bg-stone-200 text-stone-900' : 'text-stone-600'}`}>
      {children}
    </button>
  );

  return (
    <div className="rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-stone-200 bg-stone-50 flex-wrap">
        <div className="flex items-center gap-0.5 flex-wrap">
          {/* Text formatting */}
          <ToolBtn onClick={() => cmd('**', '**', 'bold text')} title="Bold (Ctrl+B)"><Bold className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => cmd('*', '*', 'italic text')} title="Italic"><Italic className="w-4 h-4" /></ToolBtn>
          <div className="w-px h-5 bg-stone-300 mx-1" />
          {/* Headings */}
          <ToolBtn onClick={() => cmd('# ', '', 'Heading 1')} title="Heading 1"><span className="text-xs font-bold">H1</span></ToolBtn>
          <ToolBtn onClick={() => cmd('## ', '', 'Heading 2')} title="Heading 2"><Heading2 className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => cmd('### ', '', 'Heading 3')} title="Heading 3"><Heading3 className="w-4 h-4" /></ToolBtn>
          <div className="w-px h-5 bg-stone-300 mx-1" />
          {/* Lists */}
          <ToolBtn onClick={() => cmd('- ', '', 'List item')} title="Bullet list"><List className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => cmd('1. ', '', 'Ordered item')} title="Numbered list"><span className="text-xs font-mono">1.</span></ToolBtn>
          <div className="w-px h-5 bg-stone-300 mx-1" />
          {/* Blocks */}
          <ToolBtn onClick={() => cmd('> ', '', 'Blockquote text')} title="Blockquote"><Quote className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => cmd('`', '`', 'code')} title="Inline code"><Code className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => insert('\n```\ncode here\n```\n')} title="Code block"><span className="text-xs font-mono px-0.5">{'</>'}</span></ToolBtn>
          <ToolBtn onClick={() => insert('\n---\n')} title="Horizontal divider"><Minus className="w-4 h-4" /></ToolBtn>
          <div className="w-px h-5 bg-stone-300 mx-1" />
          {/* Links & Media */}
          <ToolBtn onClick={() => cmd('[', '](https://)', 'link text')} title="Insert link"><Link2 className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => cmd('![', '](https://image-url.jpg)', 'alt text')} title="Insert image URL"><ImageIcon className="w-4 h-4" /></ToolBtn>
          <ToolBtn onClick={() => fileRef.current?.click()} title="Upload image from disk">
            {uploading ? <span className="text-xs animate-pulse">⏳</span> : <Upload className="w-4 h-4" />}
          </ToolBtn>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleImageUpload(f); e.target.value = ''; }} />
          <div className="w-px h-5 bg-stone-300 mx-1" />
          {/* Table */}
          <ToolBtn onClick={() => insert('\n| Column 1 | Column 2 | Column 3 |\n|----------|----------|----------|\n| Cell     | Cell     | Cell     |\n')} title="Insert table">
            <Table className="w-4 h-4" />
          </ToolBtn>
          {/* YouTube */}
          <ToolBtn onClick={() => {
            const url = prompt('YouTube video URL:');
            if (url) {
              const id = url.match(/(?:v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
              if (id) insert(`\n[![YouTube Video](https://img.youtube.com/vi/${id}/0.jpg)](https://www.youtube.com/watch?v=${id})\n`);
            }
          }} title="Embed YouTube video"><Youtube className="w-4 h-4" /></ToolBtn>
        </div>

        {/* Write/Preview toggle */}
        <div className="flex items-center gap-1 bg-white border border-stone-200 rounded-xl p-1">
          <button type="button" onClick={() => setTab('write')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${tab === 'write' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-800'}`}>
            <Edit3 className="w-3 h-3" /> Write
          </button>
          <button type="button" onClick={() => setTab('preview')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${tab === 'preview' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:text-stone-800'}`}>
            <Eye className="w-3 h-3" /> Preview
          </button>
        </div>
      </div>

      {/* Drag-and-drop upload hint */}
      {tab === 'write' && (
        <div className="px-4 pt-2 text-xs text-stone-400 flex items-center gap-1">
          <Upload className="w-3 h-3" /> Drag & drop images or paste from clipboard to embed
        </div>
      )}

      {/* Editor / Preview */}
      {tab === 'write' ? (
        <textarea
          ref={ref}
          value={value}
          onChange={e => onChange(e.target.value)}
          onDrop={handleDrop}
          onPaste={handlePaste}
          onDragOver={e => e.preventDefault()}
          placeholder={placeholder || 'Start writing your article...\n\nTips:\n• Drag & drop or paste images directly\n• Use ## for headings\n• Use **text** for bold, *text* for italic\n• Use > for blockquotes\n• Use - for bullet lists'}
          rows={20}
          className="w-full px-5 py-4 text-sm outline-none bg-white font-mono leading-relaxed resize-y"
          style={{ minHeight: 400 }}
        />
      ) : (
        <div className="min-h-[400px] px-5 py-4 bg-white">
          {preview ? (
            <div className="prose prose-stone max-w-none prose-img:rounded-2xl prose-headings:font-display prose-a:text-amber-700"
              dangerouslySetInnerHTML={{ __html: preview }} />
          ) : (
            <p className="text-stone-400 italic">Nothing to preview yet. Start writing!</p>
          )}
        </div>
      )}

      {/* Footer stats */}
      <div className="flex items-center justify-between px-4 py-2 border-t border-stone-100 bg-stone-50 text-xs text-stone-400">
        <div className="flex gap-4">
          <span>{value.length} chars</span>
          <span>{wordCount} words</span>
          <span>~{readTime} min read</span>
        </div>
        <div className="flex items-center gap-1">
          <AlignLeft className="w-3 h-3" />
          <span>Markdown</span>
        </div>
      </div>
    </div>
  );
}
