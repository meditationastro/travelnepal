import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';
import { LanguageProvider } from '@/components/providers/LanguageProvider';
import { CurrencyProvider } from '@/components/providers/CurrencyProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { LeadMagnetPopup } from '@/components/marketing/LeadMagnetPopup';

export const metadata: Metadata = {
  title: {
    default: 'Himalya Retreat Nepal — Meditation & Spiritual Retreat in Nepal',
    template: '%s | Himalya Retreat Nepal',
  },
  description:
    'Immerse in astrology, Ayurveda and meditation to explore the inner quest of life in Nepal. Himalya Retreat Nepal offers transformative spiritual retreats, Vedic astrology, and meditation programs in Khumaltar, Lalitpur, Nepal.',
  keywords: [
    'meditation retreat Nepal', 'spiritual retreat Nepal', 'Vedic astrology Nepal',
    'Himalayan retreat', 'Ayurveda Nepal', 'yoga retreat Nepal', 'mindfulness retreat Kathmandu',
    'astrology reading Nepal', 'meditation Lalitpur', 'spiritual healing Nepal',
    'Himalya Retreat Nepal', 'Buddhist meditation Nepal', 'chakra healing Nepal',
  ],
  authors: [{ name: 'Himalya Retreat Nepal' }],
  creator: 'Himalya Retreat Nepal',
  publisher: 'Himalya Retreat Nepal',
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://himalyaretreat.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Himalya Retreat Nepal — Meditation & Spiritual Retreat',
    description: 'Immerse in astrology, Ayurveda and meditation to explore the inner quest of life in Nepal.',
    url: process.env.NEXT_PUBLIC_APP_URL,
    siteName: 'Himalya Retreat Nepal',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Himalya Retreat Nepal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Himalya Retreat Nepal — Meditation & Spiritual Retreat',
    description: 'Transformative meditation, astrology, and Ayurveda retreats in Nepal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: { google: 'your-google-verification-code' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Himalya Retreat Nepal",
              "description": "Meditation, Vedic Astrology and Ayurveda spiritual retreat center in Nepal",
              "url": process.env.NEXT_PUBLIC_APP_URL,
              "telephone": "+9779851187267",
              "email": "meditationastro1@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Khumaltar",
                "addressLocality": "Lalitpur",
                "addressCountry": "NP"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": 27.6588, "longitude": 85.3247 },
              "openingHours": "Mo-Su 06:00-20:00",
              "priceRange": "$$",
              "servesCuisine": "Vegetarian",
              "hasMap": "https://maps.google.com/?q=Khumaltar,Lalitpur,Nepal"
            })
          }}
        />
      </head>
      <body>
        <AuthProvider>
          <LanguageProvider>
            <CurrencyProvider>
              <Navbar />
              <main>{children}</main>
              <Footer />
              <FloatingWhatsApp />
              <LeadMagnetPopup />
            </CurrencyProvider>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
