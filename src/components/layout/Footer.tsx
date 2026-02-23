'use client';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone, ArrowUp, MessageCircle, Send } from 'lucide-react';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { CurrencySwitcher } from '@/components/layout/CurrencySwitcher';
import { useLang } from '@/components/providers/LanguageProvider';
import { T, t } from '@/lib/i18n';

function BackToTop() {
  const { lang } = useLang();
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="group flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-stone-400 hover:text-amber-300 transition-all hover:scale-105"
      aria-label="Back to top"
    >
      <div className="w-9 h-9 rounded-full border border-stone-700 group-hover:border-amber-400 flex items-center justify-center transition-colors">
        <ArrowUp className="w-4 h-4" />
      </div>
      <span className="text-xs">{t(T.footer.backToTop, lang)}</span>
    </button>
  );
}

export function Footer() {
  const { lang } = useLang();

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="h-16 relative overflow-hidden" style={{ background: '#fdf8f0' }}>
        <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path fill="#1c1917" d="M0,64 L240,20 L480,45 L720,5 L960,40 L1200,15 L1440,50 L1440,64 Z" />
        </svg>
      </div>

      {/* Connect Banner */}
      <div className="border-b border-stone-800" style={{ background: 'linear-gradient(135deg, #1a0a00, #1c1917)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl text-white font-semibold mb-1">{t(T.footer.connect, lang)}</h3>
              <p className="text-stone-400 text-sm">Reach us on WhatsApp, email, or social — we respond within 24 hours</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/9779851187267?text=Namaste! I want to know more about Himalaya Retreat Nepal." target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-white text-sm shadow-lg hover:scale-105 transition-all"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="mailto:meditationastro1@gmail.com"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-white text-sm border border-amber-400/40 hover:border-amber-400 hover:bg-amber-400/10 transition-all">
                <Mail className="w-4 h-4 text-amber-400" /> Email Us
              </a>
              <a href="https://t.me/himalayaretreatnepal" target="_blank" rel="noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-white text-sm border border-blue-400/40 hover:border-blue-400 hover:bg-blue-400/10 transition-all">
                <Send className="w-4 h-4 text-blue-400" /> Telegram
              </a>
              <Link href="/contact"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-stone-900 text-sm hover:opacity-90 transition-all"
                style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
                {t(T.cta.contact, lang)}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C5A253, #8B6914)' }}>
                  <span className="text-2xl text-white font-bold">ॐ</span>
                </div>
                <div>
                  <div className="font-display text-xl text-white font-semibold">Himalya Retreat Nepal</div>
                  <div className="text-xs text-stone-500 tracking-widest uppercase">Meditation & Spiritual Retreat</div>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed mb-5">{t(T.footer.tagline, lang)}</p>

              {/* Social */}
              <div className="flex gap-3 mb-6">
                <a href="https://instagram.com/himalyaretreatnepal" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-pink-400 hover:bg-stone-700 transition-all">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/himalyaretreatnepal" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-blue-400 hover:bg-stone-700 transition-all">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/@himalayaretreatnepal" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-red-400 hover:bg-stone-700 transition-all">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              {/* Contact details */}
              <div className="space-y-3 text-sm">
                <a href="mailto:meditationastro1@gmail.com" className="flex gap-3 items-start text-stone-400 hover:text-amber-300 transition-colors">
                  <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C5A253' }} />
                  meditationastro1@gmail.com
                </a>
                <a href="https://wa.me/9779851187267" className="flex gap-3 items-start text-stone-400 hover:text-amber-300 transition-colors">
                  <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C5A253' }} />
                  +977 9851187267
                </a>
                <div className="flex gap-3 items-start text-stone-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C5A253' }} />
                  Khumaltar, Lalitpur, Nepal
                </div>
              </div>
            </div>

            {/* Retreats */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t(T.footer.retreats, lang)}</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/retreats/3-day-mindfulness" className="text-stone-400 hover:text-amber-300 transition-colors">3-Day Mindfulness</Link></li>
                <li><Link href="/retreats/7-day-meditation-astrology" className="text-stone-400 hover:text-amber-300 transition-colors">7-Day Meditation & Astrology</Link></li>
                <li><Link href="/retreats/14-day-himalayan-awakening" className="text-stone-400 hover:text-amber-300 transition-colors">14-Day Himalayan Awakening</Link></li>
                <li><Link href="/spiritual-retreat-nepal" className="text-stone-400 hover:text-amber-300 transition-colors">Spiritual Retreat Nepal</Link></li>
                <li><Link href="/retreats/private" className="text-stone-400 hover:text-amber-300 transition-colors">Private Immersion</Link></li>
                <li><Link href="/yoga/teacher-training" className="text-stone-400 hover:text-amber-300 transition-colors">Yoga Teacher Training</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t(T.footer.services, lang)}</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/vedic-astrology" className="text-stone-400 hover:text-amber-300 transition-colors">Vedic Astrology Nepal</Link></li>
                <li><Link href="/astrology/birth-chart" className="text-stone-400 hover:text-amber-300 transition-colors">Birth Chart Reading</Link></li>
                <li><Link href="/yoga" className="text-stone-400 hover:text-amber-300 transition-colors">Himalayan Yoga</Link></li>
                <li><Link href="/meditation/booking" className="text-stone-400 hover:text-amber-300 transition-colors">Meditation Sessions</Link></li>
                <li><Link href="/ayurveda" className="text-stone-400 hover:text-amber-300 transition-colors">Ayurveda Nepal</Link></li>
                <li><Link href="/shop" className="text-stone-400 hover:text-amber-300 transition-colors">Sacred Shop</Link></li>
              </ul>
            </div>

            {/* Nepal + Info */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">🗺️ Nepal</h4>
              <ul className="space-y-2.5 text-sm mb-6">
                <li><Link href="/nepal" className="text-stone-400 hover:text-amber-300 transition-colors">Nepal Overview</Link></li>
                <li><Link href="/nepal/spiritual-sites" className="text-stone-400 hover:text-amber-300 transition-colors">Spiritual Sites</Link></li>
                <li><Link href="/nepal/travel-guide" className="text-stone-400 hover:text-amber-300 transition-colors">Travel Guide</Link></li>
                <li><Link href="/nepal/visa" className="text-stone-400 hover:text-amber-300 transition-colors">Visa & Entry</Link></li>
                <li><Link href="/nepal/altitude" className="text-stone-400 hover:text-amber-300 transition-colors">Altitude Guide</Link></li>
                <li><Link href="/nepal/packing-list" className="text-stone-400 hover:text-amber-300 transition-colors">Packing List</Link></li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">{t(T.footer.information, lang)}</h4>
              <ul className="space-y-2.5 text-sm">
                <li><Link href="/about" className="text-stone-400 hover:text-amber-300 transition-colors">About Us</Link></li>
                <li><Link href="/teachers" className="text-stone-400 hover:text-amber-300 transition-colors">Our Teachers</Link></li>
                <li><Link href="/blog" className="text-stone-400 hover:text-amber-300 transition-colors">Blog</Link></li>
                <li><Link href="/gallery" className="text-stone-400 hover:text-amber-300 transition-colors">Gallery</Link></li>
                <li><Link href="/faq" className="text-stone-400 hover:text-amber-300 transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-stone-400 hover:text-amber-300 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-stone-400 hover:text-amber-300 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-stone-400 hover:text-amber-300 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          {/* Language strip */}
          <div className="border-t border-stone-800 pt-8 mb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-stone-500 text-sm">🌍 Available in multiple languages</p>
              <div className="flex items-center gap-3">
                <LanguageSwitcher compact />
                {/* Moved from navbar to footer (next to language) */}
                <CurrencySwitcher compact />
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-stone-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">{t(T.footer.copyright, lang)}</p>
            <p className="text-stone-600 text-xs">Khumaltar, Lalitpur, Nepal — Meditation & Spiritual Retreat</p>
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
