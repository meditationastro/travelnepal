import { MetadataRoute } from 'next';
import { SEO_PAGES_ALL, SEO_CATEGORIES } from '@/lib/seoPages';
import { GALLERY_SEO_PAGES } from '@/lib/gallerySeoPages';
import { NEPAL_GUIDES } from '@/data/guides/nepalGuides';
import { ASTROLOGY_GUIDES } from '@/data/guides/astrologyGuides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://himalyaretreatnepal.com';
  const now = new Date();

  const learnUrls = SEO_PAGES_ALL.map((p) => ({
    url: `${base}/learn/${p.category}/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.55,
  }));

  const learnCategoryUrls = SEO_CATEGORIES.map((c) => ({
    url: `${base}/learn/${c}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const core: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'daily', priority: 1 },
    { url: `${base}/learn`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    // High-intent service pages
    { url: `${base}/spiritual-retreat-nepal`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/vedic-astrology`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${base}/vedic-astrology/booking`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/meditation/booking`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },

    // Retreats
    { url: `${base}/retreats`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/retreats/3-day-mindfulness`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/retreats/7-day-meditation-astrology`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/retreats/14-day-himalayan-awakening`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/retreats/private`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/retreats/group`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Yoga & Meditation
    { url: `${base}/yoga`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/yoga/teacher-training`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${base}/yoga/hatha`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/yoga/kundalini`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/yoga/yin`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    { url: `${base}/meditation`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/meditation/sessions`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Learn landing pages
    { url: `${base}/learn-nepali-online`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/explore-nepal`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/treks/abc`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/treks/ebc`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/spiritual-immersion`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // Blog / Gallery / Shop / Contact
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/gallery/stories`, lastModified: now, changeFrequency: 'weekly', priority: 0.65 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const galleryStoryUrls = GALLERY_SEO_PAGES.map((p) => ({
    url: `${base}/gallery/stories/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...core, ...learnCategoryUrls, ...learnUrls, ...galleryStoryUrls];
}
