'use client';
import { useState } from 'react';
import { TrendingUp, Users, DollarSign, Calendar, Eye, BarChart3, ArrowUp, ArrowDown, Globe, Star } from 'lucide-react';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const bookingData = [8,12,18,22,31,28,35,42,38,29,19,14];
const revenueData = [3200,4800,7200,8800,12400,11200,14000,16800,15200,11600,7600,5600];
const visitorData = [820,1200,1800,2200,3100,2800,3500,4200,3800,2900,1900,1400];

const topCountries = [
  { country: 'United States', flag: '🇺🇸', guests: 142, pct: 31 },
  { country: 'United Kingdom', flag: '🇬🇧', guests: 87, pct: 19 },
  { country: 'Germany', flag: '🇩🇪', guests: 64, pct: 14 },
  { country: 'Australia', flag: '🇦🇺', guests: 52, pct: 11 },
  { country: 'France', flag: '🇫🇷', guests: 41, pct: 9 },
  { country: 'Canada', flag: '🇨🇦', guests: 33, pct: 7 },
  { country: 'Other', flag: '🌍', guests: 43, pct: 9 },
];

const topRetreats = [
  { name: '7-Day Meditation & Astrology', bookings: 89, revenue: 106800, rating: 4.9 },
  { name: '14-Day Himalayan Awakening', bookings: 42, revenue: 117600, rating: 5.0 },
  { name: '3-Day Mindfulness Retreat', bookings: 127, revenue: 57150, rating: 4.8 },
];

const recentActivity = [
  { type: 'booking', text: 'Sarah M. booked 7-Day Meditation & Astrology', time: '2 min ago', icon: '📅' },
  { type: 'review', text: 'New 5-star review from James K. (UK)', time: '18 min ago', icon: '⭐' },
  { type: 'shop', text: 'Order #HRN-847291 — Singing Bowl Set + Mala', time: '42 min ago', icon: '🛍️' },
  { type: 'inquiry', text: 'WhatsApp inquiry from Mumbai, India', time: '1 hr ago', icon: '💬' },
  { type: 'booking', text: 'Lars B. booked 14-Day Himalayan Awakening', time: '2 hrs ago', icon: '📅' },
  { type: 'blog', text: 'New blog post published: Nakshatras Guide', time: '3 hrs ago', icon: '✍️' },
];

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<'month'|'quarter'|'year'>('year');
  const maxBooking = Math.max(...bookingData);
  const maxRevenue = Math.max(...revenueData);

  const kpis = [
    { label: 'Total Guests', value: '462', change: '+23%', up: true, icon: Users, color: '#4a7e50' },
    { label: 'Revenue (YTD)', value: '$118,400', change: '+31%', up: true, icon: DollarSign, color: '#C5A253' },
    { label: 'Avg. Booking Value', value: '$1,247', change: '+8%', up: true, icon: TrendingUp, color: '#E8891A' },
    { label: 'Site Visitors', value: '28,600', change: '+41%', up: true, icon: Eye, color: '#7c3aed' },
    { label: 'Bookings', value: '296', change: '+19%', up: true, icon: Calendar, color: '#C4663A' },
    { label: 'Avg. Rating', value: '4.92', change: '+0.04', up: true, icon: Star, color: '#f59e0b' },
    { label: 'Repeat Guests', value: '18%', change: '+5%', up: true, icon: Users, color: '#0891b2' },
    { label: 'Cancellation Rate', value: '3.2%', change: '-1.1%', up: false, icon: BarChart3, color: '#10b981' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Analytics</h1>
          <p className="text-stone-400 text-sm mt-0.5">2025 performance overview — Himalya Retreat Nepal</p>
        </div>
        <div className="flex gap-1 bg-white border border-stone-200 rounded-xl p-1">
          {(['month','quarter','year'] as const).map(p=>(
            <button key={p} onClick={()=>setPeriod(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${period===p?'bg-stone-900 text-white':'text-stone-500 hover:text-stone-800'}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {kpis.map(kpi => (
          <div key={kpi.label} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-100 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-stone-400 text-xs font-medium">{kpi.label}</span>
              <kpi.icon className="w-4 h-4" style={{ color: kpi.color }} />
            </div>
            <div className="font-display text-2xl font-semibold text-stone-900 mb-1">{kpi.value}</div>
            <div className={`flex items-center gap-1 text-xs font-medium ${kpi.up ? 'text-green-600' : 'text-red-500'}`}>
              {kpi.up ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
              {kpi.change} vs last year
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Bookings chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-stone-900">Monthly Bookings</h3>
            <span className="text-xs text-stone-400">2025</span>
          </div>
          <div className="flex items-end gap-1.5 h-40">
            {bookingData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-lg transition-all hover:opacity-80 cursor-default"
                  style={{ height: `${(val/maxBooking)*100}%`, background: 'linear-gradient(to top, #C5A253, #E8C870)', minHeight: 4 }}
                  title={`${months[i]}: ${val} bookings`} />
                <span className="text-[10px] text-stone-400">{months[i].slice(0,1)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue chart */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-stone-900">Monthly Revenue (USD)</h3>
            <span className="text-xs text-stone-400">2025</span>
          </div>
          <div className="flex items-end gap-1.5 h-40">
            {revenueData.map((val, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-lg transition-all hover:opacity-80 cursor-default"
                  style={{ height: `${(val/maxRevenue)*100}%`, background: 'linear-gradient(to top, #4a7e50, #6aaf72)', minHeight: 4 }}
                  title={`${months[i]}: $${val.toLocaleString()}`} />
                <span className="text-[10px] text-stone-400">{months[i].slice(0,1)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top countries */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <div className="flex items-center gap-2 mb-5">
            <Globe className="w-4 h-4" style={{ color: '#C5A253' }} />
            <h3 className="font-semibold text-stone-900">Guests by Country</h3>
          </div>
          <div className="space-y-3">
            {topCountries.map(c => (
              <div key={c.country}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-stone-700 flex items-center gap-1.5">{c.flag} {c.country}</span>
                  <span className="text-xs text-stone-400">{c.pct}%</span>
                </div>
                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${c.pct}%`, background: 'linear-gradient(to right,#C5A253,#E8C870)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top retreats */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-semibold text-stone-900 mb-5">Top Retreats</h3>
          <div className="space-y-4">
            {topRetreats.map((r, i) => (
              <div key={r.name} className="flex gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: i===0?'#C5A253':i===1?'#94a3b8':'#c8a87a' }}>{i+1}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-stone-900 leading-tight line-clamp-1">{r.name}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{r.bookings} bookings · ${r.revenue.toLocaleString()} · ⭐ {r.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
          <h3 className="font-semibold text-stone-900 mb-5">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-lg flex-shrink-0">{a.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-stone-700 leading-snug">{a.text}</p>
                  <p className="text-[10px] text-stone-400 mt-0.5">{a.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
