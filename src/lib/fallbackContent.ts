export type FallbackBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category?: string | null;
  publishedAt: Date;
  imageUrl?: string | null;
  content: string;
  tags?: string[];
  metaTitle?: string | null;
  metaDescription?: string | null;
  canonicalUrl?: string | null;
  ogImage?: string | null;
};

export const fallbackBlogPosts: Record<string, FallbackBlogPost> = {
  'what-is-vedic-astrology': {
    id: 'fb1',
    slug: 'what-is-vedic-astrology',
    title: 'What is Vedic Astrology and How is it Different from Western?',
    excerpt:
      'Jyotish — the Indian science of light — has guided seekers for millennia. Learn how it differs from Western astrology and how to get more from a reading.',
    category: 'Astrology',
    publishedAt: new Date('2025-01-15'),
    imageUrl:
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1200&auto=format&fit=crop&q=60',
    tags: ['Astrology', 'Jyotish', 'Vedic'],
    metaTitle: 'Vedic Astrology vs Western Astrology',
    metaDescription:
      'Understand what Vedic astrology (Jyotish) is, how it differs from Western astrology, and how to prepare for a meaningful reading.',
    content: `
# Vedic Astrology (Jyotish) in a nutshell

Vedic astrology — also called *Jyotish* — is a traditional Indian system of astrology that focuses on karma, timing, and practical guidance.

## 1) Sidereal zodiac

Jyotish uses the **sidereal zodiac** (based on star positions), while Western astrology usually uses the **tropical zodiac**.

## 2) Timing and life cycles

Vedic astrology places strong emphasis on **dashas** (planetary periods) and **transits** to help with timing decisions such as travel, career changes, and relationship milestones.

## 3) Remedial practices

Many readings include gentle remedies such as mantra, charity, lifestyle shifts, and mindfulness practices.

---

### How to prepare for a reading

- Bring a clear question (career, relationships, health routines, travel timing)
- Confirm your birth details (date, place, and time)
- Be open to practical next steps

If you'd like help choosing a retreat aligned with your current cycle, contact us — we’ll suggest a simple plan.
`.trim(),
  },

  'how-to-prepare-for-a-meditation-retreat': {
    id: 'fb2',
    slug: 'how-to-prepare-for-a-meditation-retreat',
    title: 'How to Prepare for a Meditation Retreat (Simple Checklist)',
    excerpt:
      'A good retreat is easier when your body and schedule are ready. Here’s a calm, practical checklist: what to pack, what to practice, and what to expect.',
    category: 'Meditation',
    publishedAt: new Date('2025-02-10'),
    imageUrl:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop&q=60',
    tags: ['Meditation', 'Retreat', 'Preparation'],
    metaTitle: 'How to Prepare for a Meditation Retreat',
    metaDescription:
      'A practical checklist for preparing for a meditation retreat: mindset, packing, digital detox, and what to expect on day one.',
    content: `
# A calm checklist for retreat success

Preparing well makes your retreat gentler and more transformative.

## Before you arrive

- **Sleep**: start going to bed 30–60 minutes earlier for a week
- **Caffeine**: taper slowly to avoid headaches
- **Digital detox**: reduce scrolling the last 2–3 days

## What to pack

- Comfortable layers (mornings can be cool)
- Walking shoes + sandals
- Light journal + pen
- Reusable water bottle

## Mindset

Come with one intention: clarity, rest, healing, discipline — keep it simple.

---

### Day one: what to expect

Most programs begin with an orientation, a gentle sit, and a short walking meditation. Expect your mind to be noisy at first — that’s normal.

If you’re unsure which program fits your goals, message us and we’ll recommend the right retreat.
`.trim(),
  },

  'top-spiritual-sites-in-nepal': {
    id: 'fb3',
    slug: 'top-spiritual-sites-in-nepal',
    title: 'Top Spiritual Sites in Nepal (A Seeker’s Guide)',
    excerpt:
      'From ancient stupas to mountain temples, Nepal is full of living pilgrimage culture. Here are the places that consistently move visitors the most.',
    category: 'Nepal',
    publishedAt: new Date('2025-03-05'),
    imageUrl:
      'https://images.unsplash.com/photo-1544735716-0e499d4cdb75?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Pilgrimage', 'Travel'],
    metaTitle: 'Top Spiritual Sites in Nepal',
    metaDescription:
      'A seeker-friendly guide to Nepal’s most meaningful spiritual sites: Kathmandu Valley stupas, monasteries, and mountain temples.',
    content: `
# Nepal’s spiritual highlights

Nepal offers a rare mix of Hindu and Buddhist heritage that is still alive and practiced daily.

## Kathmandu Valley

- **Boudhanath Stupa**: evening kora (circumambulation) is unforgettable
- **Swayambhunath**: sunrise views and ancient symbolism
- **Pashupatinath**: sacred riverside temple complex

## Beyond the city

- **Lumbini**: birthplace of the Buddha
- **Namo Buddha**: peaceful monastery setting

---

If you want to combine these sites with a retreat schedule, we can help you build a simple itinerary.
`.trim(),
  },
  'spiritual-retreat-nepal-guide': {
    id: 'fb200',
    slug: 'spiritual-retreat-nepal-guide',
    title: "Spiritual Retreat in Nepal: A Practical Guide for First-Time Guests",
    excerpt: "Plan a safe, meaningful spiritual retreat in Nepal \u2014 what to expect, what\u2019s included, best seasons, and how to choose ethical teachers.",
    category: "Retreats",
    publishedAt: new Date('2025-09-17'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Spiritual Retreat in Nepal: A Practical Guide for First-Time Guests | Himalaya Retreat Nepal",
    metaDescription: "Plan a safe, meaningful spiritual retreat in Nepal \u2014 what to expect, what\u2019s included, best seasons, and how to choose ethical teachers.",
    content: `
## Spiritual Retreat in Nepal: A Practical Guide for First-Time Guests

Plan a safe, meaningful spiritual retreat in Nepal — what to expect, what’s included, best seasons, and how to choose ethical teachers.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'meditation-in-nepal-beginners': {
    id: 'fb201',
    slug: 'meditation-in-nepal-beginners',
    title: "Meditation in Nepal for Beginners: Where to Start",
    excerpt: "A beginner-friendly overview of meditation in Nepal: traditions, guided sessions, retreat etiquette, and simple daily practice.",
    category: "Meditation",
    publishedAt: new Date('2025-09-18'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Meditation in Nepal for Beginners: Where to Start | Himalaya Retreat Nepal",
    metaDescription: "A beginner-friendly overview of meditation in Nepal: traditions, guided sessions, retreat etiquette, and simple daily practice.",
    content: `
## Meditation in Nepal for Beginners: Where to Start

A beginner-friendly overview of meditation in Nepal: traditions, guided sessions, retreat etiquette, and simple daily practice.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'vedic-astrology-consultation-nepal': {
    id: 'fb202',
    slug: 'vedic-astrology-consultation-nepal',
    title: "Vedic Astrology Consultation in Nepal: What Happens in a Jyotish Reading",
    excerpt: "What to expect in a Vedic astrology consultation in Nepal \u2014 birth chart, timing (Dasha), questions to ask, and practical takeaways.",
    category: "Astrology",
    publishedAt: new Date('2025-09-19'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Vedic Astrology Consultation in Nepal: What Happens in a Jyotish Reading | Himalaya Retreat Nepal",
    metaDescription: "What to expect in a Vedic astrology consultation in Nepal \u2014 birth chart, timing (Dasha), questions to ask, and practical takeaways.",
    content: `
## Vedic Astrology Consultation in Nepal: What Happens in a Jyotish Reading

What to expect in a Vedic astrology consultation in Nepal — birth chart, timing (Dasha), questions to ask, and practical takeaways.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'abc-trekking-itinerary': {
    id: 'fb203',
    slug: 'abc-trekking-itinerary',
    title: "ABC Trekking Itinerary: Annapurna Base Camp in 10 Days",
    excerpt: "A clear ABC trekking itinerary with permits, acclimatization tips, and tea house expectations.",
    category: "Trekking",
    publishedAt: new Date('2025-09-20'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "ABC Trekking Itinerary: Annapurna Base Camp in 10 Days | Himalaya Retreat Nepal",
    metaDescription: "A clear ABC trekking itinerary with permits, acclimatization tips, and tea house expectations.",
    content: `
## ABC Trekking Itinerary: Annapurna Base Camp in 10 Days

A clear ABC trekking itinerary with permits, acclimatization tips, and tea house expectations.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'ebc-trekking-acclimatization': {
    id: 'fb204',
    slug: 'ebc-trekking-acclimatization',
    title: "EBC Trekking Acclimatization: How to Stay Safe at High Altitude",
    excerpt: "A practical acclimatization plan for Everest Base Camp trekking \u2014 symptoms, pacing, and safety tips.",
    category: "Trekking",
    publishedAt: new Date('2025-09-21'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "EBC Trekking Acclimatization: How to Stay Safe at High Altitude | Himalaya Retreat Nepal",
    metaDescription: "A practical acclimatization plan for Everest Base Camp trekking \u2014 symptoms, pacing, and safety tips.",
    content: `
## EBC Trekking Acclimatization: How to Stay Safe at High Altitude

A practical acclimatization plan for Everest Base Camp trekking — symptoms, pacing, and safety tips.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'learn-nepali-phrases': {
    id: 'fb205',
    slug: 'learn-nepali-phrases',
    title: "30 Nepali Phrases You\u2019ll Actually Use in Nepal",
    excerpt: "Quick Nepali phrases for taxis, tea houses, temples, and retreat life \u2014 with pronunciation notes.",
    category: "Nepali",
    publishedAt: new Date('2025-09-22'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "30 Nepali Phrases You\u2019ll Actually Use in Nepal | Himalaya Retreat Nepal",
    metaDescription: "Quick Nepali phrases for taxis, tea houses, temples, and retreat life \u2014 with pronunciation notes.",
    content: `
## 30 Nepali Phrases You’ll Actually Use in Nepal

Quick Nepali phrases for taxis, tea houses, temples, and retreat life — with pronunciation notes.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-1': {
    id: 'fb206',
    slug: 'nepal-spiritual-travel-tips-1',
    title: "Nepal Spiritual Travel Tips #1: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-23'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #1: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #1: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-2': {
    id: 'fb207',
    slug: 'nepal-spiritual-travel-tips-2',
    title: "Nepal Spiritual Travel Tips #2: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-24'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #2: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #2: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-3': {
    id: 'fb208',
    slug: 'nepal-spiritual-travel-tips-3',
    title: "Nepal Spiritual Travel Tips #3: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-25'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #3: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #3: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-4': {
    id: 'fb209',
    slug: 'nepal-spiritual-travel-tips-4',
    title: "Nepal Spiritual Travel Tips #4: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-26'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #4: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #4: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-5': {
    id: 'fb210',
    slug: 'nepal-spiritual-travel-tips-5',
    title: "Nepal Spiritual Travel Tips #5: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-27'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #5: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #5: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-6': {
    id: 'fb211',
    slug: 'nepal-spiritual-travel-tips-6',
    title: "Nepal Spiritual Travel Tips #6: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-28'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #6: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #6: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-7': {
    id: 'fb212',
    slug: 'nepal-spiritual-travel-tips-7',
    title: "Nepal Spiritual Travel Tips #7: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-29'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #7: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #7: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-8': {
    id: 'fb213',
    slug: 'nepal-spiritual-travel-tips-8',
    title: "Nepal Spiritual Travel Tips #8: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-09-30'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #8: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #8: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-9': {
    id: 'fb214',
    slug: 'nepal-spiritual-travel-tips-9',
    title: "Nepal Spiritual Travel Tips #9: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-01'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #9: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #9: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-10': {
    id: 'fb215',
    slug: 'nepal-spiritual-travel-tips-10',
    title: "Nepal Spiritual Travel Tips #10: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-02'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #10: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #10: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-11': {
    id: 'fb216',
    slug: 'nepal-spiritual-travel-tips-11',
    title: "Nepal Spiritual Travel Tips #11: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-03'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #11: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #11: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-12': {
    id: 'fb217',
    slug: 'nepal-spiritual-travel-tips-12',
    title: "Nepal Spiritual Travel Tips #12: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-04'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #12: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #12: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-13': {
    id: 'fb218',
    slug: 'nepal-spiritual-travel-tips-13',
    title: "Nepal Spiritual Travel Tips #13: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-05'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #13: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #13: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-14': {
    id: 'fb219',
    slug: 'nepal-spiritual-travel-tips-14',
    title: "Nepal Spiritual Travel Tips #14: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-06'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #14: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #14: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-15': {
    id: 'fb220',
    slug: 'nepal-spiritual-travel-tips-15',
    title: "Nepal Spiritual Travel Tips #15: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-07'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #15: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #15: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-16': {
    id: 'fb221',
    slug: 'nepal-spiritual-travel-tips-16',
    title: "Nepal Spiritual Travel Tips #16: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-08'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #16: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #16: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-17': {
    id: 'fb222',
    slug: 'nepal-spiritual-travel-tips-17',
    title: "Nepal Spiritual Travel Tips #17: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-09'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #17: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #17: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-18': {
    id: 'fb223',
    slug: 'nepal-spiritual-travel-tips-18',
    title: "Nepal Spiritual Travel Tips #18: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-10'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #18: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #18: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-19': {
    id: 'fb224',
    slug: 'nepal-spiritual-travel-tips-19',
    title: "Nepal Spiritual Travel Tips #19: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-11'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #19: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #19: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-20': {
    id: 'fb225',
    slug: 'nepal-spiritual-travel-tips-20',
    title: "Nepal Spiritual Travel Tips #20: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-12'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #20: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #20: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-21': {
    id: 'fb226',
    slug: 'nepal-spiritual-travel-tips-21',
    title: "Nepal Spiritual Travel Tips #21: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-13'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #21: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #21: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-22': {
    id: 'fb227',
    slug: 'nepal-spiritual-travel-tips-22',
    title: "Nepal Spiritual Travel Tips #22: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-14'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #22: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #22: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-23': {
    id: 'fb228',
    slug: 'nepal-spiritual-travel-tips-23',
    title: "Nepal Spiritual Travel Tips #23: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-15'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #23: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #23: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },
  'nepal-spiritual-travel-tips-24': {
    id: 'fb229',
    slug: 'nepal-spiritual-travel-tips-24',
    title: "Nepal Spiritual Travel Tips #24: Culture, Etiquette & Mindful Travel",
    excerpt: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    category: "Travel",
    publishedAt: new Date('2025-10-16'),
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=60',
    tags: ['Nepal', 'Retreat', 'Spiritual'],
    metaTitle: "Nepal Spiritual Travel Tips #24: Culture, Etiquette & Mindful Travel | Himalaya Retreat Nepal",
    metaDescription: "Practical tips for respectful spiritual travel in Nepal \u2014 temples, greetings, dress code, and mindful conduct.",
    content: `
## Nepal Spiritual Travel Tips #24: Culture, Etiquette & Mindful Travel

Practical tips for respectful spiritual travel in Nepal — temples, greetings, dress code, and mindful conduct.

### What you’ll learn
- How to plan safely and ethically
- What to expect on the ground
- Simple steps you can apply today

### Related guides
- [Meditation in Nepal](/meditation-in-nepal)
- [Vedic Astrology Consultation Nepal](/vedic-astrology-consultation-nepal)
- [Spiritual Retreat Nepal](/spiritual-retreat-nepal)
- [Learn library](/learn)

If you want a personalized plan, send us a message via the [contact page](/contact).
`.trim(),
  },

  'nakshatras-for-beginners': {
    id: 'fb25',
    slug: 'nakshatras-for-beginners',
    title: 'Nakshatras for Beginners: The Lunar Mansions of Jyotish',
    excerpt:
      'Nakshatras add emotional texture and spiritual meaning to your chart. Learn the basics and how to use them without overwhelm.',
    category: 'Astrology',
    publishedAt: new Date('2025-04-08'),
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=60',
    tags: ['Astrology', 'Jyotish', 'Nakshatra'],
    metaTitle: 'Nakshatras for Beginners | Vedic Astrology (Jyotish)',
    metaDescription:
      'A beginner-friendly guide to the 27 Nakshatras (lunar mansions) in Vedic astrology and how they refine chart interpretation.',
    content: `
# Nakshatras: the emotional "flavor" of the zodiac

In Vedic astrology (Jyotish), the zodiac is divided into **27 Nakshatras** (lunar mansions). Each Nakshatra has a symbol, deity, and core motivations that color the planets placed there.

## Why Nakshatras matter
- They explain why people with the same Sun sign can feel completely different.
- They deepen Moon psychology (mind/emotions).
- They refine compatibility and timing.

## A gentle way to start
1) Find your **Moon Nakshatra** (or Ascendant Nakshatra).
2) Learn the **symbol + deity**.
3) Observe patterns in habits, relationships, and decision making.

## Practice prompt
Write for 5 minutes:
- “What environments calm me?”
- “What pattern keeps repeating — and what is it teaching?”

Want personal guidance? Explore [Vedic astrology](/vedic-astrology) or book a consultation.
`.trim(),
  },

  'dasha-timing-made-simple': {
    id: 'fb26',
    slug: 'dasha-timing-made-simple',
    title: 'Dasha Timing Made Simple: Why Life Has Seasons',
    excerpt:
      'Dashas are one of Jyotish’s most practical tools. Learn the idea of timing as seasons — and how to use it for better decisions.',
    category: 'Astrology',
    publishedAt: new Date('2025-04-21'),
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&auto=format&fit=crop&q=60',
    tags: ['Astrology', 'Jyotish', 'Dasha', 'Timing'],
    metaTitle: 'Dasha Timing Made Simple | Vedic Astrology',
    metaDescription:
      'A simple explanation of Dasha timing in Vedic astrology, with a practical way to integrate “life seasons” into daily decisions.',
    content: `
# Dashas are “life seasons”

In Jyotish, **Dasha** systems describe which planetary themes become emphasized during a period of your life.

Think of it like seasons:
- A “Saturn season” rewards discipline, structure, and long-term effort.
- A “Venus season” highlights relationships, beauty, and harmony.

## How to use Dashas wisely
1) Use Dashas for **timing**, not fatalism.
2) Ask: “What is this season teaching me?”
3) Pair timing with **action** (habits, boundaries, skill-building).

## Quick integration (30 days)
- Choose one focus area.
- Track what becomes easier/harder.
- Adjust routines instead of forcing outcomes.

Want a practical reading? See [Vedic astrology](/vedic-astrology).
`.trim(),
  },

  'daily-inner-journey-practice': {
    id: 'fb27',
    slug: 'daily-inner-journey-practice',
    title: 'A Daily Inner Journey Practice You Can Actually Keep',
    excerpt:
      'Spiritual growth is not only retreat moments — it is the daily seat. Here is a simple routine that works for busy people.',
    category: 'Inner Journey',
    publishedAt: new Date('2025-05-02'),
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&auto=format&fit=crop&q=60',
    tags: ['Meditation', 'Inner Journey', 'Habits'],
    metaTitle: 'A Daily Inner Journey Practice | Meditation & Integration',
    metaDescription:
      'A simple 20-minute daily routine: breathwork, meditation, and integration journaling. Designed for real life.',
    content: `
# The 20‑minute routine

**5 min** — settle the body (slow exhale)

**10 min** — meditation (mindfulness or mantra)

**5 min** — integration (journal: one insight + one action)

## Why it works
- Short enough to keep.
- Trains attention + nervous system regulation.
- Bridges insight into action.

## If you miss a day
Don’t punish yourself — just do **2 minutes**. Consistency beats intensity.

Explore the full roadmap on the [Inner Journey page](/inner-journey).
`.trim(),
  },

};

export const fallbackBlogList = Object.values(fallbackBlogPosts).map((p) => ({
  id: p.id,
  slug: p.slug,
  title: p.title,
  excerpt: p.excerpt,
  category: p.category ?? null,
  publishedAt: p.publishedAt,
  imageUrl: p.imageUrl ?? null,
}));
