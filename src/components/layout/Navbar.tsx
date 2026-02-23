'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { ChevronDown, LayoutDashboard, LogOut, Menu, ShoppingBag, User, X } from 'lucide-react';

import { useLang } from '@/components/providers/LanguageProvider';
import { T, t } from '@/lib/i18n';

const navLinks = [
  {
    label: 'Retreats',
    href: '/retreats',
    dropdown: [
      { label: '3-Day Mindfulness', href: '/retreats/3-day-mindfulness' },
      { label: '7-Day Meditation & Astrology', href: '/retreats/7-day-meditation-astrology' },
      { label: '14-Day Himalayan Awakening', href: '/retreats/14-day-himalayan-awakening' },
      { label: '5-Day Breathwork & Sound', href: '/retreats/5-day-breathwork-sound-healing' },
      { label: '6-Day Sacred Kathmandu Pilgrimage', href: '/retreats/6-day-sacred-kathmandu-pilgrimage' },
      { label: '10-Day Silent Meditation', href: '/retreats/10-day-silent-meditation' },
      { label: 'Spiritual Retreat Nepal', href: '/spiritual-retreat-nepal' },
      { label: 'Private Immersion', href: '/retreats/private' },
      { label: 'Group & Corporate', href: '/retreats/group' },
    ],
  },
  {
    label: 'Yoga',
    href: '/yoga',
    dropdown: [
      { label: 'All Yoga Classes', href: '/yoga' },
      { label: 'Hatha Yoga', href: '/yoga/hatha' },
      { label: 'Kundalini Yoga', href: '/yoga/kundalini' },
      { label: 'Yin Yoga', href: '/yoga/yin' },
      { label: '200-hr Teacher Training', href: '/yoga/teacher-training' },
    ],
  },
  {
    label: 'Meditation',
    href: '/meditation',
    dropdown: [
      { label: 'Meditation Programs', href: '/meditation' },
      { label: 'Guided Sessions', href: '/meditation/sessions' },
      { label: 'Book a Session', href: '/meditation/booking' },
    ],
  },
  {
    label: 'Astrology',
    href: '/astrology',
    dropdown: [
      { label: 'Vedic Astrology Nepal', href: '/vedic-astrology' },
      { label: 'Book Astrology Consultation', href: '/vedic-astrology/booking' },
      { label: 'Vedic Astrology Consultation Nepal', href: '/vedic-astrology-consultation-nepal' },
      { label: 'Vedic Birth Chart', href: '/astrology/birth-chart' },
      { label: 'Karma & Past Life', href: '/astrology/karma-reading' },
      { label: 'Relationship Compatibility', href: '/astrology/compatibility' },
      { label: 'Career & Dharma', href: '/astrology/career' },
      { label: 'Online Consultations', href: '/astrology/online' },
      { label: 'Life Matrix Mapping', href: '/life-matrix' },
    ],
  },
  {
    label: 'Ayurveda',
    href: '/ayurveda',
    dropdown: [
      { label: 'Ayurveda Overview', href: '/ayurveda' },
      { label: 'Dosha Consultation', href: '/ayurveda/dosha' },
      { label: 'Panchakarma Therapy', href: '/ayurveda/panchakarma' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    dropdown: [
      { label: 'Learn Nepali Online', href: '/learn-nepali-online' },
      { label: 'Meditation in Nepal', href: '/meditation-in-nepal' },
      { label: 'Explore Nepal', href: '/explore-nepal' },
      { label: 'ABC Trekking', href: '/treks/abc' },
      { label: 'EBC Trekking', href: '/treks/ebc' },
      { label: 'Spiritual Immersion', href: '/spiritual-immersion' },
      { label: 'Nepal Spiritual Quiz', href: '/quiz' },
      { label: 'Inner Journey Path', href: '/inner-journey' },
      { label: 'Courses', href: '/courses' },
      { label: 'Membership', href: '/membership' },
      { label: 'Spiritual Retreat Guides', href: '/learn/spiritual-retreat-nepal' },
      { label: 'All Guides', href: '/learn' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog',
    dropdown: [
      { label: 'All Posts', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Retreats', href: '/retreats' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Shop',
    href: '/shop',
    dropdown: [
      { label: 'All Products', href: '/shop' },
      { label: 'Meditation Tools', href: '/shop/meditation-tools' },
      { label: 'Astrology Books', href: '/shop/astrology-books' },
      { label: 'Malas & Crystals', href: '/shop/malas-crystals' },
      { label: 'Sacred Oils & Herbs', href: '/shop/sacred-oils' },
    ],
  },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { label: 'Our Story', href: '/about', divider: false },
      { label: 'Our Teachers', href: '/teachers' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'NEPAL_DIVIDER', href: '#', divider: true },
      { label: 'Nepal Overview', href: '/nepal' },
      { label: 'Spiritual Sites', href: '/nepal/spiritual-sites' },
      { label: 'Travel Guide', href: '/nepal/travel-guide' },
      { label: 'Visa & Entry', href: '/nepal/visa' },
      { label: 'Altitude Guide', href: '/nepal/altitude' },
      { label: 'Packing List', href: '/nepal/packing-list' },
    ],
  },
];

export function Navbar() {
  const { data: session } = useSession();
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? 'bg-stone-900 shadow-xl border-b border-stone-700'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ background: 'linear-gradient(135deg, #C5A253, #8B6914)' }}
            >
              <span className="text-xl font-bold text-white">ॐ</span>
            </div>
            <div>
              <div className="font-display font-semibold text-base leading-tight text-white drop-shadow">
                Himalya Retreat Nepal
              </div>
              <div className="text-xs tracking-[0.12em] uppercase text-amber-300/90">
                Meditation & Spiritual Retreat
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-medium transition-all text-white hover:text-amber-300 hover:bg-white/10"
                >
                  {link.label === 'Shop' && <ShoppingBag className="w-3.5 h-3.5" />}
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-3 h-3 opacity-70" />}
                </Link>
                {link.dropdown && activeDropdown === link.label && (
                  <div
                    className={`absolute top-full ${link.label === 'About' ? 'right-0' : 'left-0'} pt-1 w-56 z-[200]`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 py-2">
                      {link.dropdown.map((item: any) =>
                        item.divider ? (
                          <div key="div" className="px-4 pt-3 pb-1">
                            <div className="border-t border-stone-100 pt-2 text-xs font-bold text-stone-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span>🗺️</span> Nepal
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-800 transition-colors font-medium"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Dashboard closer to the left / inside main nav row */}
            {session && (
              <div className="ml-2 pl-2 border-l border-white/15">
                <Link
                  href="/dashboard"
                  className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all text-amber-200 hover:text-amber-300 hover:bg-white/10"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" /> Dashboard
                </Link>
              </div>
            )}
          </div>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-2">
            {session ? (
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('user')}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-all">
                  <User className="w-4 h-4" />
                  {session.user?.name?.split(' ')[0]}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {activeDropdown === 'user' && (
                  <div
                    className="absolute top-full right-0 pt-1 z-[200]"
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-48 bg-white rounded-2xl shadow-xl border border-stone-100 py-2">
                      {(session.user as any)?.role === 'ADMIN' && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
                        >
                          <LayoutDashboard className="w-4 h-4" /> Admin Panel
                        </Link>
                      )}
                      <button
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="w-4 h-4" /> {t(T.nav.signOut, lang)}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="text-sm font-medium px-3 py-2 rounded-lg text-white hover:bg-white/10 transition-all"
              >
                {t(T.nav.signIn, lang)}
              </Link>
            )}

            <Link
              href="/retreats"
              className="px-5 py-2 rounded-full text-sm font-semibold text-stone-900 transition-all hover:opacity-90 shadow-md"
              style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}
            >
              {t(T.nav.bookRetreat, lang)}
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="xl:hidden p-2 rounded-lg text-white">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-stone-900 border-t border-stone-700 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <div className="flex items-center justify-between rounded-xl hover:bg-stone-800">
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 px-4 py-2.5 text-white font-medium text-left"
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <button
                      onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                      className="px-3 py-2.5 text-stone-400"
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${mobileExpanded === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {link.dropdown && mobileExpanded === link.label && (
                  <div className="pl-4 space-y-0.5 mb-1">
                    {link.dropdown.map((item: any) =>
                      item.divider ? (
                        <div key="div" className="px-4 pt-3 pb-1 text-xs font-bold text-amber-400 uppercase tracking-wider">
                          🗺️ Nepal
                        </div>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-4 py-2 text-sm text-stone-400 hover:text-amber-300 hover:bg-stone-800 rounded-lg"
                        >
                          {item.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-stone-700 flex flex-col gap-2">
              <a
                href="https://wa.me/9779851187267"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 font-semibold rounded-xl"
                style={{ background: '#25D366', color: '#fff' }}
              >
                <span>💬</span> {t(T.cta.whatsapp, lang)}
              </a>
              {session ? (
                <>
                  <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 text-white font-medium">
                    My Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileOpen(false);
                    }}
                    className="px-4 py-2.5 text-red-400 text-left"
                  >
                    {t(T.nav.signOut, lang)}
                  </button>
                </>
              ) : (
                <Link href="/auth/login" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 text-white font-medium">
                  {t(T.nav.signIn, lang)}
                </Link>
              )}
              <Link
                href="/retreats"
                onClick={() => setMobileOpen(false)}
                className="px-6 py-3 rounded-xl text-center text-stone-900 font-semibold"
                style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}
              >
                {t(T.nav.bookRetreat, lang)}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
