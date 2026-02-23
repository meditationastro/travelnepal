'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Mail, Trash2, Check, Search, RefreshCw, Send, X, ExternalLink } from 'lucide-react';

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  message: string;
  read: boolean;
  createdAt: string;
};

export default function AdminMessagesPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [selected, setSelected] = useState<Contact | null>(null);
  const [replyText, setReplyText] = useState('');
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/contacts', { cache: 'no-store' });
      if (res.ok) setContacts(await res.json());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const markRead = async (id: string) => {
    await fetch(`/api/admin/contacts/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ read: true }),
    });
    setContacts(prev => prev.map(c => c.id === id ? { ...c, read: true } : c));
    if (selected?.id === id) setSelected(prev => prev ? { ...prev, read: true } : null);
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Delete this message?')) return;
    setDeletingId(id);
    try {
      await fetch(`/api/admin/contacts/${id}`, { method: 'DELETE' });
      setContacts(prev => prev.filter(c => c.id !== id));
      if (selected?.id === id) setSelected(null);
    } finally {
      setDeletingId(null);
    }
  };

  const openDetail = (c: Contact) => {
    setSelected(c);
    setReplyText('');
    if (!c.read) markRead(c.id);
  };

  const sendReply = () => {
    const subject = encodeURIComponent(`Re: ${selected?.service || 'Your inquiry'} — Himalaya Retreat Nepal`);
    const body = encodeURIComponent(`Dear ${selected?.name},\n\n${replyText}\n\nWarm regards,\nHimalaya Retreat Nepal\nKhumaltar, Lalitpur, Nepal\n+977 9851187267`);
    window.open(`mailto:${selected?.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const filtered = contacts.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = !search || c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) ||
      c.message.toLowerCase().includes(q) || (c.service || '').toLowerCase().includes(q);
    const matchFilter = filter === 'all' || (filter === 'unread' && !c.read) || (filter === 'read' && c.read);
    return matchSearch && matchFilter;
  });

  const unreadCount = contacts.filter(c => !c.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Messages</h1>
          <p className="text-stone-400 text-sm mt-1">
            {contacts.length} total · <span className="text-amber-600 font-medium">{unreadCount} unread</span>
          </p>
        </div>
        <button onClick={load} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm">
          <RefreshCw className="w-4 h-4" /> Refresh
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, or message…"
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200" />
        </div>
        <div className="flex gap-2">
          {(['all', 'unread', 'read'] as const).map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium capitalize border ${filter === f ? 'bg-amber-50 border-amber-200 text-amber-800' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}>
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[1fr_420px] gap-6 items-start">
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-stone-400">Loading messages…</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center text-stone-400">{search || filter !== 'all' ? 'No messages match your filter.' : 'No contact messages yet.'}</div>
          ) : (
            <div className="divide-y divide-stone-50">
              {filtered.map(c => (
                <div key={c.id} onClick={() => openDetail(c)}
                  className={`flex items-start gap-4 px-5 py-4 cursor-pointer transition-colors hover:bg-stone-50 ${selected?.id === c.id ? 'bg-amber-50/60' : ''}`}>
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${c.read ? 'bg-stone-200' : 'bg-amber-500'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-0.5">
                      <span className={`text-sm ${c.read ? 'font-medium text-stone-700' : 'font-semibold text-stone-900'}`}>{c.name}</span>
                      <span className="text-xs text-stone-400 flex-shrink-0">{format(new Date(c.createdAt), 'MMM d')}</span>
                    </div>
                    <div className="text-xs text-stone-400 mb-1">{c.email}{c.phone ? ` · ${c.phone}` : ''}</div>
                    {c.service && <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-amber-50 text-amber-700 font-medium mb-1">{c.service}</span>}
                    <p className="text-sm text-stone-500 truncate">{c.message}</p>
                  </div>
                  <div className="flex flex-col gap-1 flex-shrink-0">
                    {!c.read && (
                      <button onClick={e => { e.stopPropagation(); markRead(c.id); }}
                        className="p-1.5 rounded-lg hover:bg-green-50 text-stone-400 hover:text-green-600 transition-colors" title="Mark read">
                        <Check className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button onClick={e => { e.stopPropagation(); deleteContact(c.id); }} disabled={deletingId === c.id}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-stone-400 hover:text-red-600 transition-colors disabled:opacity-50" title="Delete">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {selected ? (
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden sticky top-24">
            <div className="p-5 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500" />
                <span className="font-semibold text-stone-900 text-sm">Message Detail</span>
              </div>
              <button onClick={() => setSelected(null)} className="p-1.5 rounded-lg hover:bg-stone-100">
                <X className="w-4 h-4 text-stone-400" />
              </button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <div className="font-semibold text-stone-900">{selected.name}</div>
                <div className="text-stone-500 text-sm">{selected.email}</div>
                {selected.phone && <div className="text-stone-400 text-xs">{selected.phone}</div>}
                <div className="text-stone-400 text-xs mt-1">{format(new Date(selected.createdAt), 'MMM d, yyyy • h:mm a')}</div>
              </div>
              {selected.service && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-medium">
                  {selected.service}
                </span>
              )}
              <div className="bg-stone-50 rounded-xl p-4">
                <p className="text-stone-700 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-500 mb-1.5">Reply via email</label>
                <textarea value={replyText} onChange={e => setReplyText(e.target.value)} rows={5}
                  placeholder={`Dear ${selected.name},\n\nThank you for reaching out…`}
                  className="w-full border border-stone-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-200" />
              </div>
              <div className="flex gap-2">
                <button onClick={sendReply} disabled={!replyText.trim()}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-semibold hover:bg-amber-700 disabled:opacity-50 transition-colors">
                  <Send className="w-4 h-4" /> Open in Mail
                </button>
                {selected.phone && (
                  <a href={`https://wa.me/${selected.phone.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi ${selected.name}, thank you for contacting Himalaya Retreat Nepal!`)}`}
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-stone-200 text-stone-600 hover:bg-stone-50 transition-colors">
                    <ExternalLink className="w-4 h-4" /> WhatsApp
                  </a>
                )}
              </div>
              <div className="flex gap-2 pt-1 border-t border-stone-100">
                {!selected.read && (
                  <button onClick={() => markRead(selected.id)} className="flex items-center gap-1.5 text-xs text-stone-500 hover:text-green-600 transition-colors">
                    <Check className="w-3.5 h-3.5" /> Mark as read
                  </button>
                )}
                <button onClick={() => deleteContact(selected.id)} className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-red-600 transition-colors ml-auto">
                  <Trash2 className="w-3.5 h-3.5" /> Delete
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-10 text-center text-stone-400 hidden lg:flex flex-col items-center justify-center min-h-[300px]">
            <Mail className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">Select a message to view and reply</p>
          </div>
        )}
      </div>
    </div>
  );
}
