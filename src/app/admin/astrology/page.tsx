'use client';
import { useState, useEffect } from 'react';
import { Star, Clock, CheckCircle, XCircle, AlertCircle, ExternalLink, Edit3, X, Save, Loader2, RefreshCw } from 'lucide-react';

interface Report {
  id: string;
  type: string;
  status: string;
  birthDate?: string;
  birthTime?: string;
  birthPlace?: string;
  assignedTo?: string;
  zoomLink?: string;
  scheduledAt?: string;
  notes?: string;
  reportUrl?: string;
  createdAt: string;
  user: { name?: string; email: string; country?: string };
}

const statusColors: Record<string, string> = {
  PENDING: 'bg-yellow-100 text-yellow-700 border-yellow-200',
  IN_PROGRESS: 'bg-blue-100 text-blue-700 border-blue-200',
  COMPLETED: 'bg-green-100 text-green-700 border-green-200',
  CANCELLED: 'bg-red-100 text-red-700 border-red-200',
};

const typeLabels: Record<string, string> = {
  VEDIC_BIRTH_CHART: 'Vedic Birth Chart',
  KARMA_READING: 'Karma & Past Life',
  COMPATIBILITY_READING: 'Compatibility',
  CAREER_GUIDANCE: 'Career & Dharma',
  MEDITATION_INTEGRATION: 'Meditation Integration',
};

const typeEmojis: Record<string, string> = {
  VEDIC_BIRTH_CHART: '♈',
  KARMA_READING: '☸',
  COMPATIBILITY_READING: '♡',
  CAREER_GUIDANCE: '♃',
  MEDITATION_INTEGRATION: '🧘',
};

function fmt(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function fmtTime(d: string) {
  return new Date(d).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}

export default function AdminAstrologyPage() {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<any>({});
  const [saving, setSaving] = useState(false);
  const [filter, setFilter] = useState('ALL');

  const load = async () => {
    setLoading(true);
    try {
      const r = await fetch('/api/admin/astrology');
      if (r.ok) setReports(await r.json());
    } finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  const saveEdit = async () => {
    if (!editingId) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/astrology/${editingId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm),
      });
      if (res.ok) {
        const updated = await res.json();
        setReports(prev => prev.map(r => r.id === editingId ? { ...r, ...updated } : r));
        setEditingId(null);
      }
    } finally { setSaving(false); }
  };

  const quickStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/admin/astrology/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    if (res.ok) setReports(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const filtered = filter === 'ALL' ? reports : reports.filter(r => r.status === filter);
  const counts = {
    ALL: reports.length,
    PENDING: reports.filter(r => r.status === 'PENDING').length,
    IN_PROGRESS: reports.filter(r => r.status === 'IN_PROGRESS').length,
    COMPLETED: reports.filter(r => r.status === 'COMPLETED').length,
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Astrology Consultations</h1>
          <p className="text-stone-400 text-sm mt-0.5">{reports.length} total · {counts.PENDING} pending</p>
        </div>
        <button onClick={load} className="p-2.5 rounded-xl border border-stone-200 bg-white text-stone-400 hover:text-stone-700 transition-colors">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total', value: counts.ALL, bg: 'bg-stone-50', text: 'text-stone-900' },
          { label: 'Pending', value: counts.PENDING, bg: 'bg-yellow-50', text: 'text-yellow-700' },
          { label: 'In Progress', value: counts.IN_PROGRESS, bg: 'bg-blue-50', text: 'text-blue-700' },
          { label: 'Completed', value: counts.COMPLETED, bg: 'bg-green-50', text: 'text-green-700' },
        ].map(s => (
          <div key={s.label} className={`${s.bg} rounded-2xl p-5 shadow-sm border border-stone-100 text-center`}>
            <div className={`font-display text-3xl font-bold ${s.text}`}>{s.value}</div>
            <div className="text-stone-500 text-xs mt-1 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 flex-wrap">
        {(['ALL', 'PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] as const).map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className="px-3 py-1.5 rounded-xl text-xs font-medium border transition-all"
            style={filter === f ? { background: 'rgba(197,162,83,0.15)', borderColor: '#C5A253', color: '#92400e' } : { borderColor: '#e7e5e4', color: '#78716c' }}>
            {f === 'ALL' ? 'All' : f === 'IN_PROGRESS' ? 'In Progress' : f.charAt(0) + f.slice(1).toLowerCase()} ({f === 'ALL' ? counts.ALL : reports.filter(r => r.status === f).length})
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        {loading ? (
          <div className="p-16 text-center"><Loader2 className="w-8 h-8 animate-spin mx-auto" style={{ color: '#C5A253' }} /></div>
        ) : filtered.length === 0 ? (
          <div className="p-16 text-center">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">No consultations yet</h3>
            <p className="text-stone-400 text-sm">Astrology requests appear here when guests submit from the website.</p>
          </div>
        ) : (
          <div className="divide-y divide-stone-50">
            {filtered.map(report => (
              <div key={report.id} className="p-5 hover:bg-stone-50 transition-colors">
                {editingId === report.id ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-stone-900">Editing: {report.user.name || report.user.email}</div>
                      <div className="flex gap-2">
                        <button onClick={() => setEditingId(null)} className="p-1.5 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-100"><X className="w-4 h-4" /></button>
                        <button onClick={saveEdit} disabled={saving} className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-stone-900" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
                          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save
                        </button>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Status</label>
                        <select value={editForm.status || ''} onChange={e => setEditForm((f: any) => ({ ...f, status: e.target.value }))}
                          className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300">
                          <option value="PENDING">Pending</option>
                          <option value="IN_PROGRESS">In Progress</option>
                          <option value="COMPLETED">Completed</option>
                          <option value="CANCELLED">Cancelled</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Assigned To</label>
                        <input value={editForm.assignedTo || ''} onChange={e => setEditForm((f: any) => ({ ...f, assignedTo: e.target.value }))}
                          placeholder="Astrologer name" className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Scheduled At</label>
                        <input type="datetime-local" value={editForm.scheduledAt ? editForm.scheduledAt.slice(0, 16) : ''}
                          onChange={e => setEditForm((f: any) => ({ ...f, scheduledAt: e.target.value }))}
                          className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Zoom Link</label>
                        <input value={editForm.zoomLink || ''} onChange={e => setEditForm((f: any) => ({ ...f, zoomLink: e.target.value }))}
                          placeholder="https://zoom.us/j/..." className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Report URL</label>
                        <input value={editForm.reportUrl || ''} onChange={e => setEditForm((f: any) => ({ ...f, reportUrl: e.target.value }))}
                          placeholder="https://drive.google.com/..." className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300" />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-stone-600 block mb-1">Internal Notes</label>
                        <textarea value={editForm.notes || ''} onChange={e => setEditForm((f: any) => ({ ...f, notes: e.target.value }))}
                          rows={2} className="w-full text-sm border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm">
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Client</div>
                        <div className="font-semibold text-stone-900">{report.user.name || 'Unknown'}</div>
                        <div className="text-stone-500 text-xs truncate">{report.user.email}</div>
                        {report.user.country && <div className="text-stone-400 text-xs">🌍 {report.user.country}</div>}
                      </div>
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Service</div>
                        <div className="flex items-center gap-1">
                          <span className="text-base">{typeEmojis[report.type] || '⭐'}</span>
                          <span className="font-medium text-stone-700 text-xs">{typeLabels[report.type] || report.type}</span>
                        </div>
                        {report.assignedTo && <div className="text-xs text-stone-400 mt-0.5">👤 {report.assignedTo}</div>}
                      </div>
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Birth Details</div>
                        <div className="text-xs text-stone-600 space-y-0.5">
                          {report.birthDate && <div>📅 {fmt(report.birthDate)}</div>}
                          {report.birthTime && <div>🕐 {report.birthTime}</div>}
                          {report.birthPlace && <div>📍 {report.birthPlace}</div>}
                          {!report.birthDate && !report.birthPlace && <span className="italic text-stone-400">Not provided</span>}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Session</div>
                        {report.scheduledAt ? (
                          <div className="text-xs">
                            <div className="font-medium text-stone-800">{fmt(report.scheduledAt)}</div>
                            <div className="text-stone-500">{fmtTime(report.scheduledAt)}</div>
                            {report.zoomLink && <a href={report.zoomLink} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-blue-600 hover:underline mt-0.5"><ExternalLink className="w-3 h-3" /> Zoom</a>}
                          </div>
                        ) : <span className="text-stone-400 text-xs italic">Not scheduled</span>}
                        {report.reportUrl && <a href={report.reportUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-amber-700 hover:underline text-xs mt-1"><ExternalLink className="w-3 h-3" /> Report</a>}
                      </div>
                      <div>
                        <div className="text-xs text-stone-400 uppercase tracking-wide mb-0.5">Status</div>
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[report.status] || statusColors.PENDING}`}>
                          {report.status === 'PENDING' && <Clock className="w-3 h-3" />}
                          {report.status === 'COMPLETED' && <CheckCircle className="w-3 h-3" />}
                          {report.status === 'CANCELLED' && <XCircle className="w-3 h-3" />}
                          {report.status === 'IN_PROGRESS' && <AlertCircle className="w-3 h-3" />}
                          {report.status === 'IN_PROGRESS' ? 'In Progress' : report.status.charAt(0) + report.status.slice(1).toLowerCase()}
                        </span>
                        <div className="text-xs text-stone-400 mt-1">{fmt(report.createdAt)}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <a href={`mailto:${report.user.email}?subject=Your Astrology Consultation — Himalya Retreat Nepal`}
                        className="px-3 py-1.5 text-xs rounded-lg bg-stone-100 text-stone-700 hover:bg-stone-200 font-medium transition-colors">
                        📧 Email
                      </a>
                      {report.status === 'PENDING' && (
                        <button onClick={() => quickStatus(report.id, 'IN_PROGRESS')}
                          className="px-3 py-1.5 text-xs rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium">
                          Start →
                        </button>
                      )}
                      {report.status === 'IN_PROGRESS' && (
                        <button onClick={() => quickStatus(report.id, 'COMPLETED')}
                          className="px-3 py-1.5 text-xs rounded-lg bg-green-50 text-green-700 hover:bg-green-100 font-medium">
                          Complete ✓
                        </button>
                      )}
                      <button onClick={() => { setEditingId(report.id); setEditForm({ ...report }); }}
                        className="p-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
