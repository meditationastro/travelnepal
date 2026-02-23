export type EventType = 'Retreat' | 'Online Session' | 'Workshop' | 'Ceremony';

export type EventItem = {
  id: string;
  title: string;
  type: EventType;
  location: string;
  startDate: string; // ISO date
  endDate?: string;  // ISO date
  description: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export const events: EventItem[] = [
  {
    id: 'evt-retreat-spring',
    title: '7‑Day Himalayan Meditation Retreat',
    type: 'Retreat',
    location: 'Khumaltar, Lalitpur, Nepal',
    startDate: '2026-03-18',
    endDate: '2026-03-24',
    description: 'Daily meditation, breathwork, gentle yoga, sound healing, and sacred-site visits near Kathmandu valley.',
    ctaHref: '/retreats',
    ctaLabel: 'View retreats',
  },
  {
    id: 'evt-astrology-live',
    title: 'Live Jyotish Q&A — Timing, Karma & Remedies',
    type: 'Online Session',
    location: 'Online (Zoom)',
    startDate: '2026-03-06',
    description: 'Ask questions about your chart, Dasha timing, and practical mantra/remedy frameworks.',
    ctaHref: '/vedic-astrology/booking',
    ctaLabel: 'Book consultation',
  },
  {
    id: 'evt-workshop-pranayama',
    title: 'Pranayama Foundations Workshop',
    type: 'Workshop',
    location: 'Khumaltar, Lalitpur, Nepal',
    startDate: '2026-04-12',
    description: 'A half‑day workshop covering safe breathwork basics, retention principles, and nervous-system regulation.',
    ctaHref: '/contact',
    ctaLabel: 'Ask to join',
  },
  {
    id: 'evt-fire-ceremony',
    title: 'New Moon Fire Ceremony (Havan)',
    type: 'Ceremony',
    location: 'Khumaltar, Lalitpur, Nepal',
    startDate: '2026-03-28',
    description: 'A traditional Vedic fire ceremony for purification, intention setting, and gratitude.',
    ctaHref: '/contact',
    ctaLabel: 'Reserve a seat',
  },
];
