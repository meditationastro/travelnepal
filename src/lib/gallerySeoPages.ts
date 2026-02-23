export type GallerySeoPage = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  keywords: string[];
  sections: { heading: string; body: string }[];
};

/**
 * Gallery SEO pages.
 * These are lightweight editorial pages that connect your gallery to Nepal travel + spiritual intent.
 * Deterministic (no randomness) for stable builds.
 */
export const GALLERY_SEO_PAGES: GallerySeoPage[] = [
  {
    slug: 'himalayan-sunrise-meditation-spots',
    title: 'Himalayan sunrise meditation spots in Nepal',
    description:
      'A photo-led guide to Himalayan sunrise meditation spots around Kathmandu Valley and nearby hills — with practical etiquette and planning tips.',
    imageUrl:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    keywords: ['meditation in Nepal', 'Himalayan sunrise', 'spiritual retreat Nepal', 'Kathmandu valley'],
    sections: [
      { heading: 'Why sunrise matters', body: 'In Himalayan practice traditions, dawn is a quiet, clear time for breathwork, mantra, and gentle sitting — ideal for travelers adjusting to new rhythms.' },
      { heading: 'Where to go', body: 'Short, accessible viewpoints near Kathmandu and Lalitpur are perfect for guests who want a simple sunrise routine without a long trek.' },
      { heading: 'Etiquette', body: 'Keep voices low, avoid flash photography, and treat shrines and local spaces with care. A respectful presence is part of the practice.' },
      { heading: 'Next steps', body: 'Explore our Retreats, book a meditation session, or ask about a Vedic astrology consultation to align your trip with your intention.' },
    ],
  },
  {
    slug: 'pashupatinath-temple-visitor-photo-guide',
    title: 'Pashupatinath Temple visitor photo guide',
    description:
      'A respectful photo + visitor guide to Pashupatinath — what to see, how to behave, and how to experience Nepal’s living Shiva tradition.',
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-92f86d4b6b32?auto=format&fit=crop&w=1600&q=80',
    keywords: ['Pashupatinath', 'Shiva temple Nepal', 'Nepal pilgrimage', 'spiritual journey Nepal'],
    sections: [
      { heading: 'What it is', body: 'Pashupatinath is a UNESCO-listed Hindu temple complex and a powerful spiritual site on the Bagmati River.' },
      { heading: 'How to visit', body: 'Dress modestly, follow signage, and respect restricted areas. Observe ceremonies quietly from designated viewpoints.' },
      { heading: 'Photo tips', body: 'Use natural light, avoid intrusive close-ups during rituals, and ask permission when photographing people.' },
      { heading: 'Meaningful add-ons', body: 'Combine your visit with a calm evening meditation, a short mantra practice, or an astrology consultation for deeper context.' },
    ],
  },
  {
    slug: 'boudhanath-kora-mindful-walk',
    title: 'Boudhanath kora: a mindful walk for travelers',
    description:
      'A gallery-led guide to the Boudhanath kora — a mindful walking circuit around Nepal’s most iconic stupa, with practical traveler tips.',
    imageUrl:
      'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1600&q=80',
    keywords: ['Boudhanath', 'stupa Nepal', 'walking meditation', 'mindful travel'],
    sections: [
      { heading: 'The practice', body: 'Walking clockwise around the stupa is a simple, accessible meditation practice — great for beginners.' },
      { heading: 'Best times', body: 'Early morning and late afternoon are calmer. Evenings feel devotional with butter lamps and chants.' },
      { heading: 'How to do it', body: 'Keep a gentle pace, soften your gaze, and use breath counting or a silent mantra.' },
      { heading: 'Internal links', body: 'Explore Meditation in Nepal guides, retreats, and our Nepal culture articles for deeper context.' },
    ],
  },
  // ── Additional pages (keep stable + Nepal-focused) ──
  ...[
    ['kathmandu-valley-sacred-photography', 'Kathmandu Valley sacred photography guide', 'Temples, stupas, and quiet courtyards — how to photograph Nepal respectfully while traveling mindfully.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'],
    ['nepal-prayer-flags-meaning-photos', 'Prayer flags in Nepal: meaning + photo tips', 'What prayer flags mean, where you see them, and how to capture them without turning culture into a prop.', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80'],
    ['himalayan-tea-ritual-photo-story', 'Himalayan tea ritual photo story', 'A warm, grounded travel ritual: herbal tea, stillness, and simple integration practices after your retreat days.', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80'],
    ['patan-durbar-square-spiritual-walk', 'Patan Durbar Square spiritual walk', 'A gentle cultural walk through Patan’s temples and artisan lanes — perfect between meditation sessions.', 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80'],
    ['bhaktapur-sunrise-courtyards', 'Bhaktapur sunrise courtyards and calm corners', 'Old brick courtyards, early light, and quiet moments: a mindful day-trip guide for retreat guests.', 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80'],
    ['himalayan-singing-bowls-photo-guide', 'Tibetan singing bowls: photo + practice guide', 'How singing bowls are used in sound healing and meditation — plus how to photograph artisans respectfully.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80'],
    ['rudraksha-malas-nepal-photo-guide', 'Rudraksha malas in Nepal: a photo guide', 'What Rudraksha beads represent and how travelers can choose authentic malas without spiritual bypassing.', 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80'],
    ['incense-rituals-nepal-photo-story', 'Incense rituals in Nepal: a photo story', 'Juniper, sandalwood, and temple incense — a gentle guide to ritual fragrance and mindful travel.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'],
    ['everest-viewpoints-near-kathmandu', 'Everest viewpoints near Kathmandu (when the sky is clear)', 'Where travelers can catch Himalayan views near Kathmandu — and how to combine it with meditation practice.', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'],
    ['monastery-etiquette-photo-guide', 'Monastery etiquette: what to do (and what not to do)', 'How to visit monasteries in Nepal respectfully — dress, behavior, photos, and mindful presence.', 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1600&q=80'],
    ['nepal-festivals-photo-guide', 'Nepal festivals: a respectful photo guide', 'How to experience festivals with humility, cultural care, and the right practical planning as a visitor.', 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80'],
    ['lumbini-pilgrimage-photo-story', 'Lumbini pilgrimage: a photo story for travelers', 'A visual guide to the birthplace of Buddha — practical tips, meaning, and how to visit mindfully.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'],
    ['mustang-spiritual-landscapes', 'Upper Mustang spiritual landscapes (visual guide)', 'High desert, prayer walls, and deep quiet — a photo-led overview and planning guide for seekers.', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'],
    ['annapurna-foothills-meditation-walks', 'Annapurna foothills: meditation walks (visual guide)', 'Gentle walking routes and breathwork-friendly pacing ideas for ABC trekkers.', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80'],
    ['everest-base-camp-mindful-trek-photos', 'Everest Base Camp: mindful trek photos + tips', 'A traveler’s photo-led guide to EBC trekking with a grounded, mindful approach.', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'],
    ['nepal-food-sattvic-travel', 'Sattvic-friendly food in Nepal (visual guide)', 'What retreat guests typically eat, how to choose calmer meals, and how to navigate menus while traveling.', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80'],
    ['himalayan-herbs-visual-guide', 'Himalayan herbs: a visual guide for visitors', 'A gentle intro to common herbs used in Ayurveda and local healing traditions, with respectful sourcing tips.', 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80'],
    ['kathmandu-temple-bells-photo-story', 'Temple bells of Kathmandu: photo story', 'A quiet exploration of bells, sound, and ritual timing — plus simple listening practices for travelers.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80'],
    ['nepal-handicrafts-spiritual-shopping-guide', 'Spiritual handicrafts shopping in Nepal (visual guide)', 'How to buy malas, bowls, incense, and thangka prints responsibly — with quality checks and fair pricing tips.', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80'],
    ['kathmandu-night-chanting-photo-guide', 'Kathmandu night chanting: a photo guide', 'Evening mantra atmospheres in Nepal — where to listen, how to behave, and how to integrate the calm after.', 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1600&q=80'],
    ['nepal-retreat-center-photo-story', 'Inside a Nepal retreat center: photo story', 'A behind-the-scenes look at a daily retreat rhythm — meditation hall, meals, nature breaks, and simple practices.', 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80'],
    ['himalayan-clouds-mountain-moods', 'Himalayan clouds & mountain moods (photo essay)', 'How weather shapes the feeling of a spiritual journey in Nepal — and how to plan your days with patience.', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80'],
  ].map(([slug, title, description, imageUrl]) => ({
    slug,
    title,
    description,
    imageUrl,
    keywords: ['Nepal travel', 'spiritual journey Nepal', 'photo guide', 'mindful travel', 'meditation in Nepal'],
    sections: [
      { heading: 'What you’ll see', body: 'A photo-led overview of places, textures, and rituals that support a grounded spiritual experience while traveling in Nepal.' },
      { heading: 'How to experience it', body: 'Practical guidance: best time of day, how to behave respectfully, and simple mindfulness prompts to deepen the moment.' },
      { heading: 'Planning tips', body: 'Transport notes, timing suggestions, and what to pack — written for retreat guests and spiritual travelers.' },
      { heading: 'Related links', body: 'Explore Retreats, Meditation in Nepal, Vedic astrology consultation, and our Learn hub for related guides.' },
    ],
  })),
];

export function getGallerySeoPage(slug: string) {
  return GALLERY_SEO_PAGES.find((p) => p.slug === slug);
}
