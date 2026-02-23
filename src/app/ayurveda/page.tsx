import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle, ArrowRight, Clock, Star, Leaf } from 'lucide-react';
import { Price } from '@/components/ui/Price';
import HerbsCatalog from '@/components/ayurveda/HerbsCatalog';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ayurveda Nepal | Panchakarma, Dosha & Herbal Healing | Himalaya Retreat Nepal',
  description: 'Authentic Ayurvedic consultations, Panchakarma detox, dosha assessment, and Himalayan herbal therapy in Khumaltar, Lalitpur, Nepal. Classical treatments by BAMS-qualified doctor.',
  keywords: ['Ayurveda Nepal','Panchakarma Nepal','Ayurvedic treatment Nepal','dosha consultation','herbal medicine Nepal','Himalayan Ayurveda','Shirodhara Nepal','Abhyanga Nepal'],
};

const doshas = [
  {
    name:'Vata', symbol:'🌬️', color:'#6B7FA3', elements:'Air + Ether',
    qualities:['Creative','Enthusiastic','Active','Alert'],
    imbalance:['Anxiety','Dry skin','Insomnia','Constipation'],
    description:'Vata governs movement, circulation, and the nervous system. When balanced, Vata types are creative, lively, and inspired. When imbalanced, they experience anxiety, restlessness, and scattered energy.',
    foods:['Warm, oily, sweet foods','Root vegetables','Ghee','Warm milk with spices'],
    herbs:['Ashwagandha','Shatavari','Brahmi','Licorice'],
  },
  {
    name:'Pitta', symbol:'🔥', color:'#C4663A', elements:'Fire + Water',
    qualities:['Intelligent','Focused','Passionate','Decisive'],
    imbalance:['Anger','Inflammation','Acid reflux','Perfectionism'],
    description:'Pitta governs transformation, digestion, and metabolism. Balanced Pitta types are sharp, courageous leaders. When imbalanced, they experience irritability, inflammation, and burnout.',
    foods:['Cool, sweet, bitter foods','Coconut','Coriander','Cucumber'],
    herbs:['Amalaki','Guduchi','Shatavari','Neem'],
  },
  {
    name:'Kapha', symbol:'🌊', color:'#27422b', elements:'Earth + Water',
    qualities:['Stable','Loyal','Nurturing','Patient'],
    imbalance:['Lethargy','Weight gain','Depression','Attachment'],
    description:'Kapha governs structure, lubrication, and stability. Balanced Kapha types are loving and deeply nourishing. When imbalanced, they experience heaviness, lethargy, and resistance to change.',
    foods:['Light, warm, spicy foods','Ginger tea','Legumes','Bitter greens'],
    herbs:['Trikatu','Guggulu','Punarnava','Triphala'],
  },
];

const treatments = [
  { name:'Dosha Assessment & Consultation', price:60, duration:'60 min', emoji:'🌿', desc:'Nadi Pariksha (pulse diagnosis), tongue examination, and lifestyle review to identify prakriti (constitution) and current imbalances. Includes diet, lifestyle, and herb protocol.' },
  { name:'Abhyanga — Full Body Oil Massage', price:90, duration:'75 min', emoji:'🛁', desc:'Warm medicated herb-infused oil massage calibrated to your dosha. Improves circulation, nourishes tissues, calms nervous system, and removes Vata imbalances.' },
  { name:'Shirodhara — Oil Stream Therapy', price:110, duration:'90 min', emoji:'🌊', desc:'Continuous warm medicated oil poured over the third eye. Profoundly calms mind, relieves stress, anxiety, insomnia, and awakens intuitive awareness.' },
  { name:'Panchakarma — 5-Day Detox', price:850, duration:'5 days', emoji:'✨', desc:'Complete Ayurvedic detoxification: Poorvakarma (preparatory oleation and sudation) followed by targeted elimination therapies based on your dosha and toxin load.' },
  { name:'Herbal Steam (Svedana)', price:45, duration:'45 min', emoji:'☁️', desc:'Medicated herbal steam opening channels, softening tissues, liquefying toxins. Uses Himalayan herbs: neem, tulsi, and Dashamool.' },
  { name:'Nasya — Nasal Therapy', price:55, duration:'45 min', emoji:'🌸', desc:'Medicated herbal oils administered through the nasal passage — the doorway to consciousness. Clears sinuses, improves mental clarity, and supports Prana flow.' },
  { name:'Netra Tarpana — Eye Therapy', price:65, duration:'45 min', emoji:'👁️', desc:'Warm medicated ghee retained over the eyes in a dough dam. Relieves digital eye strain, dryness, sensitivity, and brightens vision.' },
  { name:'Marma Therapy', price:85, duration:'60 min', emoji:'⚡', desc:'Stimulation of 107 vital energy points (marmas) in the body to release blockages, restore energy flow, and harmonize body-mind-spirit.' },
  { name:'Ayurvedic Diet Counseling', price:75, duration:'90 min', emoji:'🍃', desc:'Personalized nutrition guidance by dosha, season, and health condition. Includes food combining, optimal eating times, and seasonal adjustments.' },
];

// NOTE: the full 108-herb catalog is implemented as a client component (search + modal)
// in src/components/ayurveda/HerbsCatalog.tsx

const panchakarmaSteps = [
  { phase:'Poorvakarma (Preparation)', duration:'Days 1–3', emoji:'🫧', steps:['Deepana-Pachana: digestive herbs to prepare Ama for removal','Snehana: internal oleation with medicated ghee','Svedana: herbal steam therapy to mobilize toxins','Dietary adjustments to suit your constitution'] },
  { phase:'Pradhanakarma (Main Treatment)', duration:'Days 4–5', emoji:'✨', steps:['Virechana: therapeutic purgation for Pitta disorders','Basti: medicated enema therapy for Vata','Vamana: therapeutic emesis for Kapha (if indicated)','Nasya: nasal treatment to clear head and mind'] },
  { phase:'Paschatkarma (Integration)', duration:'Days 6–7', emoji:'🌱', steps:['Samsarjana Krama: graduated diet reintroduction','Rasayana: rejuvenative herbal protocols','Lifestyle counseling and home-care plan','Follow-up consultation at 2 weeks'] },
];

const testimonials = [
  { name:'Maria S.', country:'🇩🇪 Munich, Germany', treatment:'Panchakarma 5-Day', text:'After Panchakarma I felt 10 years younger. My chronic fatigue, brain fog, and digestive issues cleared within the 5 days. Dr. Maya Devi is extraordinary — her Nadi Pariksha reading was uncannily accurate.', rating:5 },
  { name:'James O.', country:'🇺🇸 New York, USA', treatment:'Shirodhara + Abhyanga', text:'Shirodhara was the most profound relaxation I\'ve ever experienced. Within 20 minutes I entered a state between waking and sleep that I can only describe as blissful. I sleep deeply every night now.', rating:5 },
  { name:'Elena M.', country:'🇮🇹 Rome, Italy', treatment:'Dosha Consultation', text:'La consultazione del dosha ha cambiato il mio modo di mangiare e di vivere. Ho capito perché mi sono sempre sentita meglio in estate e peggio in inverno — era tutto nel mio Pitta!', rating:5 },
];

export default function AyurvedaPage() {
  return (
    <div className="min-h-screen" style={{ background:'#fdf8f0' }}>

      {/* Hero */}
      <section className="pt-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background:'linear-gradient(135deg, #0a1a10 0%, #1c2e20 60%, #0a1416 100%)' }} />
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage:'radial-gradient(circle at 30% 60%, #4a7e50 0%, transparent 50%), radial-gradient(circle at 75% 25%, #C5A253 0%, transparent 40%)' }} />
        <div className="relative max-w-6xl mx-auto px-4 py-24 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background:'rgba(74,126,80,0.15)', color:'#7ec88a', border:'1px solid rgba(74,126,80,0.3)' }}>
            <Leaf className="w-3.5 h-3.5" /> Ancient Healing · Khumaltar, Lalitpur, Nepal
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white font-semibold mb-6 leading-tight">
            Ayurveda<br/>
            <span className="italic" style={{ color:'#7ec88a' }}>in Nepal</span>
          </h1>
          <p className="text-stone-300 text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Authentic Ayurvedic consultations, Panchakarma detoxification, and Himalayan herbal therapies by Dr. Maya Devi (BAMS) at our retreat center in Khumaltar, Lalitpur, Nepal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400 text-sm mb-10">
            <span>✓ BAMS-qualified practitioner</span><span>·</span>
            <span>✓ Classical Himalayan herbs</span><span>·</span>
            <span>✓ Dosha-specific protocols</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/ayurveda/dosha" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-xl transition-all hover:scale-105" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Discover Your Dosha
            </Link>
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book an Ayurveda consultation in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background:'#25D366' }}>
              💬 Book via WhatsApp
            </a>
          </div>
        </div>
        <div className="relative h-16 overflow-hidden">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path fill="#fdf8f0" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
          </svg>
        </div>
      </section>

      {/* What is Ayurveda */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-6 text-center">What is Ayurveda?</h2>
          <div className="text-stone-600 text-lg leading-relaxed space-y-4 mb-10">
            <p><strong>Ayurveda</strong> ("the science of life") is the world's oldest living medical system — a 5,000-year-old tradition from ancient India and Nepal that treats the root cause of disease rather than suppressing symptoms. At its core is the understanding that each person is a unique combination of three biological principles (doshas): Vata, Pitta, and Kapha.</p>
            <p>In Nepal, Ayurveda is inseparable from the landscape — Himalayan herbs like ashwagandha, brahmi, and shatavari grow in their native altitude, making treatments here uniquely potent. Our practitioner, Dr. Maya Devi (BAMS from Tribhuvan University), integrates classical Ayurvedic diagnosis with Himalayan herbal medicine and therapeutic yoga.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon:'🌿', title:'Root Cause Medicine', desc:'Ayurveda identifies and addresses the underlying imbalance rather than temporarily managing symptoms.' },
              { icon:'🧬', title:'Personalized by Prakriti', desc:'Every protocol is unique to your dosha constitution — what heals one person may harm another.' },
              { icon:'🏔️', title:'Himalayan Potency', desc:'Herbs grown at altitude in clean Himalayan air and soil carry significantly higher medicinal potency.' },
            ].map(f=>(
              <div key={f.title} className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 text-center">
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Doshas */}
      <section className="py-16 px-4" style={{ background:'#f5f0e8' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">The Three Doshas</h2>
          <p className="text-stone-500 text-center mb-12">Your unique constitution — and the key to restoring balance</p>
          <div className="grid md:grid-cols-3 gap-8">
            {doshas.map(d=>(
              <div key={d.name} className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
                <div className="text-5xl mb-4">{d.symbol}</div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-2xl font-semibold text-stone-900">{d.name}</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background:d.color }}>{d.elements}</span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">{d.description}</p>
                <div className="mb-4">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">When Balanced</div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.qualities.map(q=><span key={q} className="px-2 py-0.5 rounded-full text-xs font-medium text-white" style={{ background:d.color }}>{q}</span>)}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">When Imbalanced</div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.imbalance.map(q=><span key={q} className="px-2 py-0.5 rounded-full text-xs bg-stone-100 text-stone-600">{q}</span>)}
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Balancing Foods</div>
                  {d.foods.map(f=><div key={f} className="flex items-center gap-2 text-xs text-stone-600"><CheckCircle className="w-3 h-3 flex-shrink-0" style={{ color:d.color }} />{f}</div>)}
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Key Herbs</div>
                  <div className="flex flex-wrap gap-1.5">
                    {d.herbs.map(h=><span key={h} className="px-2 py-0.5 rounded-full text-xs bg-green-50 text-green-700 border border-green-100">{h}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/ayurveda/dosha" className="inline-block px-8 py-4 rounded-full font-semibold text-stone-900 hover:scale-105 transition-all shadow-lg" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Take the Dosha Quiz
            </Link>
          </div>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-semibold text-stone-900 mb-3 text-center">Ayurvedic Treatments & Therapies</h2>
          <p className="text-stone-500 text-center mb-12">All treatments use classical formulations with Himalayan and South Indian medicinal herbs</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(t=>(
              <div key={t.name} className="bg-white rounded-3xl p-7 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
                <div className="text-4xl mb-4">{t.emoji}</div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-base font-semibold text-stone-900 pr-2 flex-1">{t.name}</h3>
                  <div className="text-right flex-shrink-0">
                    <div className="text-xl font-bold" style={{ color:'#4a7e50' }}>${t.price}</div>
                    <div className="text-xs text-stone-400 flex items-center gap-0.5"><Clock className="w-3 h-3" />{t.duration}</div>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed flex-1">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/9779851187267?text=Namaste! I want to book an Ayurveda treatment in Nepal." target="_blank" rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-white text-center hover:opacity-90 transition-all" style={{ background:'#25D366' }}>
              💬 Book on WhatsApp
            </a>
            <Link href="/contact" className="px-8 py-4 rounded-full font-semibold border-2 text-stone-700 hover:bg-stone-50 text-center transition-all" style={{ borderColor:'#4a7e50' }}>
              Ask Dr. Maya Devi
            </Link>
          </div>
        </div>
      </section>

      {/* Panchakarma Deep Dive */}
      <section className="py-16 px-4" style={{ background:'linear-gradient(135deg, #0a1a10, #1c1917)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-4xl text-white font-semibold mb-3 text-center">Panchakarma — Complete Detox</h2>
          <p className="text-stone-400 text-center mb-12 max-w-2xl mx-auto">The crown jewel of Ayurveda — a systematic 5-7 day process to remove accumulated Ama (toxins) and restore pristine health</p>
          <div className="grid md:grid-cols-3 gap-6">
            {panchakarmaSteps.map(phase=>(
              <div key={phase.phase} className="rounded-3xl p-7" style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(74,126,80,0.3)' }}>
                <div className="text-4xl mb-4">{phase.emoji}</div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-3" style={{ background:'rgba(74,126,80,0.3)' }}>{phase.duration}</div>
                <h3 className="font-display text-lg text-white font-semibold mb-4">{phase.phase}</h3>
                <div className="space-y-2">
                  {phase.steps.map(s=>(
                    <div key={s} className="flex items-start gap-2 text-sm text-stone-300">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color:'#7ec88a' }} />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/ayurveda/panchakarma" className="inline-block px-8 py-4 rounded-full font-semibold text-stone-900 hover:scale-105 transition-all" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Learn About Panchakarma — <Price usd={850} />
            </Link>
          </div>
        </div>
      </section>

      {/* Himalayan Herbs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <HerbsCatalog />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" style={{ background:'#f5f0e8' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl font-semibold text-stone-900 mb-10">What Guests Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(t=>(
              <div key={t.name} className="bg-white rounded-3xl p-7 shadow-sm text-left">
                <div className="flex gap-0.5 mb-4">{Array.from({length:t.rating}).map((_,i)=><Star key={i} className="w-4 h-4 fill-current" style={{ color:'#C5A253' }} />)}</div>
                <div className="text-xs font-medium mb-3 px-2 py-1 rounded-full inline-block" style={{ background:'#f0fdf4', color:'#4a7e50' }}>{t.treatment}</div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                <div className="text-stone-400 text-xs">{t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="text-5xl mb-5">🌿</div>
        <h2 className="font-display text-4xl font-semibold text-stone-900 mb-4">Begin Your Ayurvedic Healing</h2>
        <p className="text-stone-600 text-lg mb-8 max-w-xl mx-auto">From a single treatment to a full Panchakarma detox — Dr. Maya Devi will guide your healing journey in the Himalayas.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Link href="/ayurveda/dosha" className="px-8 py-4 rounded-full font-semibold text-stone-900 shadow-lg hover:scale-105 transition-all" style={{ background:'linear-gradient(135deg, #C5A253, #E8C870)' }}>
            Discover Your Dosha
          </Link>
          <a href="https://wa.me/9779851187267?text=Namaste! I want to learn about Ayurveda treatments in Nepal." target="_blank" rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all hover:opacity-90" style={{ background:'#25D366' }}>
            💬 WhatsApp Consultation
          </a>
        </div>
        <p className="text-stone-400 text-sm">📍 Khumaltar, Lalitpur, Nepal · Dr. Maya Devi, BAMS</p>
      </section>
    </div>
  );
}
