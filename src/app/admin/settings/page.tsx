'use client';
import { useState } from 'react';
import { Save, Globe, Mail, Phone, MapPin, MessageCircle, Eye, EyeOff } from 'lucide-react';

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [showKey, setShowKey] = useState(false);
  const [settings, setSettings] = useState({
    siteName: 'Himalya Retreat Nepal', tagline: 'Meditation & Spiritual Retreat in Nepal',
    email: 'meditationastro1@gmail.com', phone: '+977 9851187267', whatsapp: '9779851187267',
    address: 'Khumaltar, Lalitpur, Nepal', googleMaps: 'https://maps.google.com/?q=Khumaltar+Lalitpur+Nepal',
    stripeKey: 'sk_test_...', sendgridKey: 'SG.xxx...', cloudinaryName: '', cloudinaryPreset: '',
    facebook: '', instagram: '', youtube: '', twitter: '',
    metaTitle: 'Himalya Retreat Nepal — Meditation & Spiritual Retreat',
    metaDescription: 'Immerse in astrology, Ayurveda and meditation to explore the inner quest of life in Nepal.',
    googleAnalytics: 'G-XXXXXXXXXX',
  });
  const set = (k: string, v: string) => setSettings(s => ({...s, [k]: v}));
  const save = () => { setSaved(true); setTimeout(()=>setSaved(false), 2500); };

  const Section = ({title, children}: {title:string,children:React.ReactNode}) => (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
      <h3 className="font-semibold text-stone-900 mb-5 pb-3 border-b border-stone-100">{title}</h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
  const Field = ({label, k, type='text', placeholder=''}: {label:string,k:string,type?:string,placeholder?:string}) => (
    <div>
      <label className="block text-xs font-medium text-stone-600 mb-1.5">{label}</label>
      <input type={type} value={(settings as any)[k]} onChange={e=>set(k,e.target.value)} placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 bg-white"/>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div><h1 className="font-display text-2xl font-semibold text-stone-900">Site Settings</h1><p className="text-stone-400 text-sm">Configure your retreat centre</p></div>
        <button onClick={save} className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-stone-900 text-sm hover:opacity-90 transition-all" style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
          <Save className="w-4 h-4"/>{saved?'✓ Saved!':'Save Settings'}
        </button>
      </div>

      <Section title="🏔️ Site Identity">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Site Name" k="siteName"/>
          <Field label="Tagline" k="tagline"/>
        </div>
        <Field label="Meta Title (SEO)" k="metaTitle"/>
        <div><label className="block text-xs font-medium text-stone-600 mb-1.5">Meta Description (SEO)</label>
          <textarea value={settings.metaDescription} onChange={e=>set('metaDescription',e.target.value)} rows={2} className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"/></div>
        <Field label="Google Analytics ID" k="googleAnalytics" placeholder="G-XXXXXXXXXX"/>
      </Section>

      <Section title="📍 Contact & Location">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="relative"><Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"/><input className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" value={settings.email} onChange={e=>set('email',e.target.value)}/></div>
          <div className="relative"><Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"/><input className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" value={settings.phone} onChange={e=>set('phone',e.target.value)}/></div>
          <div className="relative"><MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"/><input className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" value={settings.whatsapp} onChange={e=>set('whatsapp',e.target.value)} placeholder="9779XXXXXXXXX"/></div>
          <div className="relative"><MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"/><input className="w-full pl-9 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300" value={settings.address} onChange={e=>set('address',e.target.value)}/></div>
        </div>
        <Field label="Google Maps URL" k="googleMaps" placeholder="https://maps.google.com/..."/>
      </Section>

      <Section title="🔗 Social Media">
        <div className="grid sm:grid-cols-2 gap-4">
          {[['Facebook URL','facebook'],['Instagram URL','instagram'],['YouTube URL','youtube'],['Twitter / X URL','twitter']].map(([l,k])=>(
            <Field key={k} label={l} k={k} placeholder="https://..."/>
          ))}
        </div>
      </Section>

      <Section title="🔑 API Keys & Integrations">
        <div className="p-3 rounded-xl text-sm text-amber-800 bg-amber-50 border border-amber-200 mb-4">⚠️ These are sensitive. In production, use environment variables (.env) not this form.</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1.5">Stripe Secret Key</label>
            <div className="relative">
              <input type={showKey?'text':'password'} value={settings.stripeKey} onChange={e=>set('stripeKey',e.target.value)} className="w-full px-4 py-3 pr-10 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"/>
              <button onClick={()=>setShowKey(s=>!s)} className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400">{showKey?<EyeOff className="w-4 h-4"/>:<Eye className="w-4 h-4"/>}</button>
            </div>
          </div>
          <Field label="SendGrid / Email API Key" k="sendgridKey" type="password"/>
          <Field label="Cloudinary Cloud Name" k="cloudinaryName" placeholder="your-cloud-name"/>
          <Field label="Cloudinary Upload Preset" k="cloudinaryPreset" placeholder="your-upload-preset"/>
        </div>
      </Section>

      <div className="flex justify-end">
        <button onClick={save} className="flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold text-stone-900 hover:opacity-90 transition-all text-sm" style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
          <Save className="w-4 h-4"/>{saved?'✓ Changes Saved!':'Save All Settings'}
        </button>
      </div>
    </div>
  );
}
