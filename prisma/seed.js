// prisma/seed.js
/* eslint-disable no-console */
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

function daysAgo(n) {
  return new Date(Date.now() - n * 24 * 60 * 60 * 1000);
}

function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * 25 SEO-ready blog posts (unique slugs)
 * Note: Fields match your current BlogPost model (no metaDescription/ogImage fields).
 */
const BLOG_POSTS = (() => {
  const topics = [
    // ── Spiritual Retreat in Nepal (15 posts) ──
    ["Spiritual Retreat in Nepal: Complete Guide 2025", "Retreats", ["spiritual retreat Nepal", "meditation retreat Nepal", "yoga retreat Nepal"]],
    ["Best Meditation Retreats in Nepal: What to Expect", "Retreats", ["meditation retreat Nepal", "best retreat Nepal", "Himalayan retreat"]],
    ["7-Day Spiritual Retreat in Nepal: A Day-by-Day Account", "Retreats", ["spiritual retreat Nepal", "7 day retreat", "Nepal meditation"]],
    ["Yoga Retreat Nepal 2025: Everything You Need to Know", "Retreats", ["yoga retreat Nepal", "yoga Nepal", "Himalayan yoga"]],
    ["How to Choose the Right Spiritual Retreat in Nepal", "Retreats", ["spiritual retreat Nepal", "choose retreat", "meditation Nepal"]],
    ["Nepal Retreat Packing List: What to Bring and Leave Behind", "Retreats", ["retreat packing list", "Nepal travel", "spiritual retreat Nepal"]],
    ["Khumaltar Lalitpur: Nepal's Hidden Spiritual Retreat Hub", "Retreats", ["Khumaltar Lalitpur", "retreat Lalitpur", "spiritual retreat Nepal"]],
    ["The Kathmandu Valley as a Meditation Destination", "Retreats", ["Kathmandu meditation", "spiritual retreat Nepal", "Himalayan retreat"]],
    ["Silent Retreat in Nepal: What Actually Happens Inside", "Retreats", ["silent retreat Nepal", "vipassana Nepal", "spiritual retreat Nepal"]],
    ["Group vs Private Retreat in Nepal: Which Is Right for You", "Retreats", ["private retreat Nepal", "group retreat Nepal", "spiritual Nepal"]],
    ["Nepal Retreat Visa Guide: Everything International Guests Need", "Retreats", ["Nepal visa", "retreat Nepal", "travel Nepal"]],
    ["Ayurveda Retreat Nepal: Healing in the Himalayas", "Retreats", ["Ayurveda retreat Nepal", "Panchakarma Nepal", "healing retreat Nepal"]],
    ["What Is a Himalayan Fire Ceremony and Why It Matters", "Spirituality", ["havan Nepal", "fire ceremony", "spiritual retreat Nepal"]],
    ["Planning a Spiritual Trip to Nepal in 2025: Full Itinerary", "Retreats", ["spiritual trip Nepal", "Nepal itinerary", "spiritual retreat Nepal"]],
    ["Post-Retreat Integration: Bringing Nepal Wisdom Home", "Retreats", ["retreat integration", "after retreat", "spiritual retreat Nepal"]],
    // ── Vedic Astrology Reading in Nepal (15 posts) ──
    ["Vedic Astrology Reading in Nepal: Complete Guide", "Astrology", ["Vedic astrology reading Nepal", "Jyotish Nepal", "astrology Nepal"]],
    ["What Is a Vedic Birth Chart Reading in Nepal", "Astrology", ["Vedic birth chart Nepal", "Jyotish reading", "birth chart Nepal"]],
    ["Online Vedic Astrology Reading Nepal: How It Works", "Astrology", ["online astrology Nepal", "Vedic astrology reading Nepal", "Jyotish online"]],
    ["Karma Reading Nepal: What Vedic Astrology Reveals", "Astrology", ["karma reading Nepal", "past life reading Nepal", "Vedic astrology Nepal"]],
    ["Compatibility Reading Nepal: Vedic Astrology for Relationships", "Astrology", ["compatibility reading Nepal", "Vedic astrology Nepal", "relationship astrology"]],
    ["Career Guidance Through Vedic Astrology in Nepal", "Astrology", ["career astrology Nepal", "Vedic astrology reading Nepal", "dharma astrology"]],
    ["Nakshatra: The 27 Lunar Mansions of Vedic Astrology", "Astrology", ["nakshatras", "Vedic astrology", "Jyotish Nepal"]],
    ["What Is Jyotish: A Complete Beginners Guide", "Astrology", ["Jyotish", "Vedic astrology", "astrology Nepal"]],
    ["How Vedic Astrology Differs From Western Astrology", "Astrology", ["Vedic vs Western astrology", "Jyotish", "sidereal zodiac"]],
    ["The 9 Planetary Grahas in Vedic Astrology Explained", "Astrology", ["grahas", "Vedic astrology", "planets Jyotish"]],
    ["Rahu and Ketu: The Karmic Nodes in Your Birth Chart", "Astrology", ["Rahu Ketu", "karmic astrology", "Vedic astrology Nepal"]],
    ["Saturn in Vedic Astrology: Lessons Karma and Timing", "Astrology", ["Saturn Vedic astrology", "Shani", "karma astrology"]],
    ["The Dasha System: Vedic Astrologys Timing Technique", "Astrology", ["Dasha system", "Vedic astrology timing", "mahadasha"]],
    ["Remedies in Vedic Astrology: Mantras Gems and Rituals", "Astrology", ["Jyotish remedies", "vedic astrology remedies", "astrology Nepal"]],
    ["Finding a Trusted Vedic Astrologer in Nepal", "Astrology", ["Vedic astrologer Nepal", "Jyotishi Nepal", "authentic astrology Nepal"]],
    // ── Meditation & Yoga ──
    ["Himalayan Yoga: What Makes It Different from Gym Yoga", "Yoga", ["Himalayan yoga", "yoga Nepal", "authentic yoga"]],
    ["Kundalini Yoga in Nepal: A Practitioners Guide", "Yoga", ["Kundalini yoga Nepal", "yoga Nepal", "energy yoga"]],
    ["Hatha Yoga Teacher Training in Nepal 2025", "Yoga", ["yoga teacher training Nepal", "200 hour YTT Nepal", "Hatha yoga Nepal"]],
    ["Yin Yoga for Deep Release: A Gentle Introduction", "Yoga", ["yin yoga", "deep stretch yoga", "meditation yoga"]],
    ["Pranayama Breathing Techniques: A Complete Guide", "Meditation", ["pranayama", "breathwork", "yoga Nepal"]],
    ["Vipassana in Nepal: What to Expect Before You Go", "Meditation", ["Vipassana Nepal", "insight meditation", "silent retreat Nepal"]],
    ["Tibetan Singing Bowls: History Healing and Practice", "Meditation", ["singing bowls", "sound healing", "meditation Nepal"]],
    ["Yoga Nidra for Deep Sleep and Anxiety Relief", "Meditation", ["yoga nidra", "sleep meditation", "anxiety relief"]],
    ["Mantra Meditation: Om Mani Padme Hum Explained", "Meditation", ["mantra meditation", "Om Mani Padme Hum", "Buddhist meditation"]],
    // ── Nepal Travel & Spirituality ──
    ["Nepal Sacred Sites: A Spiritual Pilgrims Guide", "Nepal", ["Nepal sacred sites", "Pashupatinath", "Boudhanath", "spiritual Nepal"]],
    ["Boudhanath Stupa: Meditating at the Worlds Largest Stupa", "Nepal", ["Boudhanath", "Nepal stupa", "Buddhist meditation Nepal"]],
    ["Pashupatinath Temple: Guide for Spiritual Visitors", "Nepal", ["Pashupatinath", "Shiva temple Nepal", "Nepal pilgrimage"]],
    ["Nepal Altitude Guide: Everything Retreat Guests Need to Know", "Nepal", ["Nepal altitude", "altitude sickness", "retreat Nepal travel"]],
    ["Ayurvedic Food in Nepal: What You Will Eat on Retreat", "Wellness", ["Ayurvedic food Nepal", "sattvic diet", "retreat meals Nepal"]],
    ["Himalayan Herbs in Ayurveda: Ashwagandha Brahmi and More", "Wellness", ["Himalayan herbs", "Ayurveda Nepal", "natural healing Nepal"]],
    ["How to Prepare Mentally for Your First Spiritual Retreat", "Retreats", ["retreat preparation", "first retreat", "spiritual retreat Nepal"]],
    ["Meditation for Beginners: A Simple 7-Day Plan", "Meditation", ["meditation", "beginners", "mindfulness", "habit"]],
    ["5 Breathing Exercises for Anxiety Relief", "Breathwork", ["breathwork", "anxiety", "calm"]],
    ["Sound Bath Benefits: What to Expect and Tips", "Wellness", ["sound bath", "relaxation", "nervous system"]],
  ];

  const imagePool = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1544735716-92f86d4b6b32?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
  ];

  function buildContent(title, tags) {
    const keyword = tags[0];
    return `## ${title}

Nepal has been a destination for spiritual seekers for thousands of years. In this guide, we explore everything you need to know about ${keyword} — from what to expect, to how to prepare, to what makes the Himalayan context uniquely powerful.

### Why Nepal Is Different

The Kathmandu Valley sits at approximately 1,350m altitude, surrounded by sacred peaks revered in both Hindu and Buddhist traditions. The very atmosphere carries centuries of accumulated spiritual practice — from meditators and yogis to Vedic astrologers and pilgrims. Practitioners consistently report that their practice deepens faster here than anywhere else.

The ancient temples, the chanting at dawn, the absence of the urban rush, the Ayurvedic food, the altitude — all of these combine to create a container that amplifies inner work in ways difficult to replicate elsewhere.

### What to Expect

**Physically:** Expect to sleep deeply and early. The altitude and fresh air, combined with daily movement and reduced screen time, reset the nervous system rapidly. Many guests report their best sleep in years within the first two nights.

**Mentally:** The constant background noise of everyday life — the planning, the worrying, the scrolling — quiets noticeably within 24–48 hours. This isn't spiritual magic; it's the result of removing the inputs (news, social media, work pressure) while adding practices that calm the nervous system.

**Emotionally:** Some guests experience unexpected emotional releases — grief, relief, clarity, gratitude. This is normal and healthy. Our teachers are trained to support this process with compassion and skill.

### Practical Information

- **Best time to visit:** October to December and February to May for clear mountain views
- **Altitude:** Khumaltar, Lalitpur is at approximately 1,380m — no altitude sickness concerns
- **Visa:** Most nationalities receive visa on arrival at Kathmandu's Tribhuvan International Airport
- **Language:** English is the working language for all retreat programs and consultations
- **Getting here:** 30–45 minutes by taxi from the airport; airport pickup included in our 7-day and 14-day programs

### Our Programs

At Himalaya Retreat Nepal in Khumaltar, Lalitpur, we offer:

- **3-Day Mindfulness Retreat** ($380 early bird) — ideal for first-timers and busy professionals
- **7-Day Meditation & Astrology Retreat** ($980 early bird) — our signature program combining deep practice with a personal Vedic birth chart reading
- **14-Day Himalayan Awakening** ($2,400 early bird) — intensive immersion for serious seekers

All programs include accommodation, three Ayurvedic meals daily, guided practice sessions, and teaching from lineage-trained practitioners.

### Getting Started

Ready to explore ${keyword}? Reach out to us directly:

- **WhatsApp:** +977 9851187267
- **Email:** meditationastro1@gmail.com
- **Location:** Khumaltar, Lalitpur, Nepal

We respond to all inquiries within 24 hours and are happy to answer any questions about our programs, teachers, or the practices themselves.

*Himalaya Retreat Nepal — Khumaltar, Lalitpur, Nepal · Est. 2009 · Serving guests from 50+ countries*`;
  }

  return topics.map(([title, category, tags], i) => {
    const slug = slugify(title);
    const excerpt = `A complete guide to ${title.toLowerCase()} — what to expect, how to prepare, and why the Himalayan context transforms your practice.`;
    const content = buildContent(title, tags);

    return {
      title,
      slug,
      excerpt,
      content,
      metaTitle: `${title} | Himalaya Retreat Nepal`,
      metaDescription: excerpt.slice(0, 155),
      imageUrl: imagePool[i % imagePool.length],
      category,
      tags,
      isPublished: true,
      publishedAt: daysAgo(1 + i),
    };
  });
})();

async function seedAdmin() {
  const email = "hello@test.com";
  const password = "admin123"; // change after first login in production
  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      name: "Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Admin user ensured:", email);
}

async function seedProgramsAndDates() {
  const programs = [
    {
      title: "3-Day Mindfulness Retreat",
      slug: "3-day-mindfulness",
      description:
        "A transformative weekend immersion into mindfulness practice in the Himalayas—ideal for beginners and a gentle reset.",
      duration: 3,
      price: 450,
      earlyBirdPrice: 380,
      maxParticipants: 15,
      includes: [
        "Accommodation",
        "All meals (Ayurvedic)",
        "Guided meditations",
        "Yoga sessions",
        "Nature walks",
        "Welcome ceremony",
      ],
      highlights: [
        "Sunrise meditation",
        "Sound healing session",
        "Personal silence practice",
        "Herbal tea ceremony",
      ],
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    },
    {
      title: "7-Day Meditation & Astrology Retreat",
      slug: "7-day-meditation-astrology",
      description:
        "Our signature program blending deep meditation with Vedic astrology insight—discover your cosmic blueprint and cultivate stillness.",
      duration: 7,
      price: 1200,
      earlyBirdPrice: 980,
      maxParticipants: 12,
      includes: [
        "Accommodation",
        "All meals",
        "Daily meditation",
        "Vedic birth chart reading",
        "Astrology workshops",
        "Individual guidance",
        "Airport transfer",
      ],
      highlights: [
        "Personal Vedic chart",
        "Karma exploration",
        "Monastery visit",
        "Fire ceremony (Homa)",
        "Integration coaching",
      ],
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    },
    {
      title: "14-Day Himalayan Awakening",
      slug: "14-day-himalayan-awakening",
      description:
        "Our deepest immersion: intensive practice, transformation, and self-discovery for serious seekers ready for profound change.",
      duration: 14,
      price: 2800,
      earlyBirdPrice: 2400,
      maxParticipants: 8,
      includes: [
        "Premium accommodation",
        "All meals",
        "Daily 1:1 guidance",
        "Full astrology package",
        "Silent retreat days",
        "Sacred sites",
        "Post-retreat support",
      ],
      highlights: [
        "7-day silent retreat",
        "Full Jyotish reading",
        "Sacred pilgrimage",
        "Personalized sadhana plan",
        "3-month follow-up",
      ],
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
    },

    // ───────────────────────────────────────────────────────────────────
    // 7 additional, distinct retreat packages (SEO + premium offerings)
    // ───────────────────────────────────────────────────────────────────
    {
      title: "5-Day Himalayan Breathwork & Sound Healing",
      slug: "5-day-breathwork-sound-healing",
      description:
        "A five-day nervous-system reset combining Himalayan breathwork, pranayama foundations, and daily Tibetan singing bowl sound baths. Ideal for stress, burnout, insomnia, and anyone seeking embodied calm. Includes guided breath sessions, gentle yoga, nature walks, and an evening sound journey with intention setting.",
      duration: 5,
      price: 890,
      earlyBirdPrice: 790,
      maxParticipants: 14,
      includes: [
        "Accommodation",
        "3 Ayurvedic meals daily",
        "Daily pranayama + breathwork",
        "Tibetan singing bowl sound bath",
        "Journaling prompts",
        "Airport transfer (group)",
      ],
      highlights: [
        "Breathwork for anxiety relief",
        "Sound healing immersion",
        "Guided sunset walk",
        "Personal integration plan",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?tibetan,singing,bowl,nepal",
    },
    {
      title: "6-Day Sacred Kathmandu & Valley Pilgrimage",
      slug: "6-day-sacred-kathmandu-pilgrimage",
      description:
        "A curated spiritual pilgrimage through Nepal’s most revered sites—Pashupatinath, Boudhanath, Swayambhunath, and quiet monasteries—paired with daily meditation and gentle teachings. Designed for travelers who want an authentic spiritual journey with guidance, rituals, and reflective practice.",
      duration: 6,
      price: 1090,
      earlyBirdPrice: 990,
      maxParticipants: 16,
      includes: [
        "Accommodation",
        "Breakfast + dinner",
        "Guided sacred site visits",
        "Daily meditation",
        "Temple etiquette briefing",
        "Local transport",
      ],
      highlights: [
        "Boudhanath circumambulation",
        "Pashupatinath aarti experience",
        "Monastery tea with monks",
        "Photo-friendly sunrise viewpoints",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?boudhanath,kathmandu,nepal",
    },
    {
      title: "7-Day Ayurvedic Rejuvenation & Sattvic Reset",
      slug: "7-day-ayurvedic-rejuvenation",
      description:
        "A gentle healing retreat focused on Ayurvedic routines, sattvic food, herbal support, and restorative yoga. Includes daily consultation, oil therapies (as available), detox-friendly meals, and practical lifestyle guidance to take home.",
      duration: 7,
      price: 1390,
      earlyBirdPrice: 1190,
      maxParticipants: 10,
      includes: [
        "Accommodation",
        "Sattvic Ayurvedic meals",
        "Daily routine coaching",
        "Restorative yoga",
        "Herbal tea protocol",
        "Consultation + plan",
      ],
      highlights: [
        "Deep rest + digestion reset",
        "Ayurvedic lifestyle plan",
        "Gentle detox structure",
        "Nourishing Himalayan teas",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?ayurveda,herbs,nepal",
    },
    {
      title: "8-Day Himalayan Yoga Foundations (Hatha + Yin)",
      slug: "8-day-himalayan-yoga-foundations",
      description:
        "Build a sustainable yoga and meditation foundation in an authentic Himalayan setting. Daily Hatha alignment, Yin release, pranayama, mantra meditation, and beginner-friendly philosophy. Perfect for new practitioners and those returning to basics.",
      duration: 8,
      price: 1490,
      earlyBirdPrice: 1290,
      maxParticipants: 18,
      includes: [
        "Accommodation",
        "All meals",
        "Hatha + Yin yoga",
        "Pranayama training",
        "Mantra meditation",
        "Practice handbook",
      ],
      highlights: [
        "Daily guided practice",
        "Mobility + deep release",
        "Breath mastery",
        "Sadhana design",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?yoga,nepal,himalaya",
    },
    {
      title: "9-Day Vedic Astrology Immersion (Jyotish Intensive)",
      slug: "9-day-vedic-astrology-immersion",
      description:
        "An immersive Jyotish program for spiritual travelers who want deep clarity and timing. Includes a full birth chart consult, nakshatra education, dasha timing, and practical remedies (mantra + simple rituals). Great for seekers planning life transitions.",
      duration: 9,
      price: 1690,
      earlyBirdPrice: 1490,
      maxParticipants: 12,
      includes: [
        "Accommodation",
        "All meals",
        "Full birth chart consultation",
        "Daily Jyotish lessons",
        "Remedy practice guidance",
        "1:1 Q&A session",
      ],
      highlights: [
        "Dasha + timing clarity",
        "Nakshatra deep-dive",
        "Mantra & remedy practice",
        "Personal roadmap",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?vedic,astrology,nepal",
    },
    {
      title: "10-Day Silent Meditation (Vipassana-inspired)",
      slug: "10-day-silent-meditation",
      description:
        "A structured 10-day silent retreat inspired by classical insight practice. Includes daily sitting and walking meditation, mindful meals, dharma talks, and supportive check-ins (silence respected). Recommended for intermediate meditators or those prepared for deep inner work.",
      duration: 10,
      price: 1890,
      earlyBirdPrice: 1690,
      maxParticipants: 20,
      includes: [
        "Accommodation",
        "All meals",
        "Guided meditation schedule",
        "Daily dharma talk",
        "Teacher check-ins",
        "Integration resources",
      ],
      highlights: [
        "Deep concentration",
        "Noble silence",
        "Mindfulness in daily life",
        "Clear post-retreat plan",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?vipassana,meditation,nepal",
    },
    {
      title: "12-Day Annapurna Spiritual Trek (Practice + Nature)",
      slug: "12-day-annapurna-spiritual-trek",
      description:
        "A premium spiritual trekking package blending gentle Annapurna foothill walking with meditation, breathwork, and nightly reflection. Designed for travelers who want nature, culture, and practice—without the intensity of a full expedition. Includes acclimatization pacing and experienced local guidance.",
      duration: 12,
      price: 2490,
      earlyBirdPrice: 2190,
      maxParticipants: 10,
      includes: [
        "Accommodation (lodge + retreat nights)",
        "Meals on trek days",
        "Licensed trekking guide",
        "Daily meditation + breathwork",
        "Cultural village visits",
        "Packing + safety briefing",
      ],
      highlights: [
        "Himalayan sunrise views",
        "Village cultural immersion",
        "Meditation in nature",
        "Trek + retreat integration",
      ],
      imageUrl: "https://source.unsplash.com/featured/1600x900/?annapurna,trekking,nepal",
    },
  ];

  const startDates = [
    new Date("2026-03-01"),
    new Date("2026-04-01"),
    new Date("2026-05-01"),
    new Date("2026-06-01"),
    new Date("2026-07-01"),
  ];

  for (const program of programs) {
    const created = await prisma.retreatProgram.upsert({
      where: { slug: program.slug },
      update: {
        title: program.title,
        description: program.description,
        duration: program.duration,
        price: program.price,
        earlyBirdPrice: program.earlyBirdPrice,
        maxParticipants: program.maxParticipants,
        includes: program.includes,
        highlights: program.highlights,
        imageUrl: program.imageUrl,
        isActive: true,
      },
      create: {
        ...program,
        isActive: true,
      },
    });

    for (const startDate of startDates) {
      const existing = await prisma.retreatDate.findFirst({
        where: { programId: created.id, startDate },
        select: { id: true },
      });

      if (!existing) {
        await prisma.retreatDate.create({
          data: {
            programId: created.id,
            startDate,
            endDate: addDays(startDate, program.duration),
            seatsTotal: program.maxParticipants,
            seatsBooked: 0,
            isActive: true,
          },
        });
      }
    }
  }

  console.log("✅ Retreat programs + dates seeded/ensured");
}

async function seedTestimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      country: "United Kingdom",
      retreat: "7-Day Meditation & Astrology Retreat",
      content:
        "The most transformative experience of my life. The blend of meditation and Vedic astrology gave clarity I’d been seeking for years.",
      rating: 5,
      isPublished: true,
    },
    {
      name: "Marco R.",
      country: "Italy",
      retreat: "14-Day Himalayan Awakening",
      content:
        "Two weeks that changed my perspective completely. The teachers are exceptional and the insights were deeply practical.",
      rating: 5,
      isPublished: true,
    },
    {
      name: "Yuki T.",
      country: "Japan",
      retreat: "3-Day Mindfulness Retreat",
      content:
        "Even in 3 days I felt a profound shift. Sunrise meditations were unforgettable. I’m already planning to return.",
      rating: 5,
      isPublished: true,
    },
  ];

  for (const t of testimonials) {
    const exists = await prisma.testimonial.findFirst({
      where: { name: t.name, retreat: t.retreat },
      select: { id: true },
    });

    if (!exists) {
      await prisma.testimonial.create({ data: t });
    }
  }

  console.log("✅ Testimonials seeded/ensured");
}

async function seedBlogPosts() {
  for (const post of BLOG_POSTS) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {
        title: post.title,
        metaTitle: post.metaTitle || null,
        metaDescription: post.metaDescription || null,
        excerpt: post.excerpt,
        content: post.content,
        imageUrl: post.imageUrl,
        category: post.category,
        tags: post.tags,
        isPublished: true,
        publishedAt: post.publishedAt,
      },
      create: {
        title: post.title,
        slug: post.slug,
        metaTitle: post.metaTitle || null,
        metaDescription: post.metaDescription || null,
        excerpt: post.excerpt,
        content: post.content,
        imageUrl: post.imageUrl,
        category: post.category,
        tags: post.tags,
        isPublished: true,
        publishedAt: post.publishedAt,
      },
    });
  }

  console.log(`✅ Seeded/updated ${BLOG_POSTS.length} blog posts`);
}

async function seedGallery() {
  const images = [
    { emoji: '🏔️', title: 'Himalayan Sunrise', category: 'Landscape', caption: 'The sacred peaks of the Himalayas at dawn, as seen from our meditation hall in Khumaltar, Lalitpur', sortOrder: 1 },
    { emoji: '🧘', title: 'Morning Meditation', category: 'Meditation', caption: 'Students in morning Vipassana practice, surrounded by the stillness of the Himalayan dawn', sortOrder: 2 },
    { emoji: '⭐', title: 'Birth Chart Reading', category: 'Astrology', caption: 'A traditional Vedic astrology consultation, chart drawn on handmade paper using ancient methods', sortOrder: 3 },
    { emoji: '🌿', title: 'Ayurvedic Herbs', category: 'Ayurveda', caption: 'Fresh Himalayan herbs prepared for Panchakarma — ashwagandha, brahmi, and neem', sortOrder: 4 },
    { emoji: '🔔', title: 'Singing Bowls Ceremony', category: 'Meditation', caption: 'Sound healing with Tibetan singing bowls conducted by our senior meditation master', sortOrder: 5 },
    { emoji: '🕌', title: 'Pashupatinath Temple', category: 'Sacred Sites', caption: 'The ancient Pashupatinath temple complex — a pilgrimage site we visit during retreat', sortOrder: 6 },
    { emoji: '🌸', title: 'Retreat Garden', category: 'Center', caption: 'Our meditation garden with prayer flags and lotus pond at Khumaltar, Lalitpur', sortOrder: 7 },
    { emoji: '🎋', title: 'Yoga at Sunrise', category: 'Meditation', caption: 'Sunrise yoga and pranayama on the rooftop terrace overlooking the Lalitpur valley', sortOrder: 8 },
    { emoji: '📿', title: 'Mala Blessing Ceremony', category: 'Ceremony', caption: 'Sacred mala blessing ritual before the 108-bead meditation practice', sortOrder: 9 },
  ];

  const existing = await prisma.galleryImage.count();
  if (existing === 0) {
    await prisma.galleryImage.createMany({ data: images });
    console.log(`✅ Seeded ${images.length} gallery images`);
  } else {
    console.log(`ℹ️  Gallery already has ${existing} images — skipping seed`);
  }
}

async function seedProducts() {
  // Minimal catalog so admin/shop + public /shop have DB-backed content on first deploy.
  const products = [
    // Image URLs: mix of Unsplash + Pexels (stable direct URLs) for richer visuals.
    { slug: 'tibetan-singing-bowl-set', name: 'Tibetan Singing Bowl Set (Hand-hammered)', category: 'Singing Bowls', description: 'Authentic hand-hammered singing bowl inspired by Patan artisans — includes striker + cushion.', features: ['7-metal alloy tone','Striker + cushion','Ideal for meditation'], price: 145, originalPrice: 180, badge: 'Premium', icon: '🔔', imageUrl: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'small-singing-bowl-travel', name: 'Small Singing Bowl (Travel size)', category: 'Singing Bowls', description: 'A compact bowl for travel meditation and daily sound practice.', features: ['Compact size','Warm tone','Easy to carry'], price: 69, icon: '🔔', imageUrl: 'https://images.pexels.com/photos/1673973/pexels-photo-1673973.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'singing-bowl-meditation-starter', name: 'Singing Bowl Starter Kit', category: 'Singing Bowls', description: 'Beginner-friendly bowl kit: bowl, striker, and a short practice guide.', features: ['Starter-friendly','Includes practice guide','Gift-ready'], price: 99, originalPrice: 125, badge: 'Starter', icon: '🎁', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'rudraksha-mala-108', name: 'Rudraksha Mala (108 beads)', category: 'Malas', description: 'Traditional 108-bead Rudraksha mala for japa and mantra meditation.', features: ['108 beads','Traditional japa size','Durable thread'], price: 55, originalPrice: 70, badge: 'Bestseller', icon: '📿', imageUrl: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'tulsi-mala', name: 'Tulsi Mala (Sacred Basil)', category: 'Malas', description: 'Lightweight Tulsi mala for daily mantra practice and devotion.', features: ['Lightweight','Comfortable wear','Daily practice'], price: 29, icon: '🌿', imageUrl: 'https://images.pexels.com/photos/4195580/pexels-photo-4195580.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'himalayan-crystal-mala', name: 'Himalayan Crystal Mala (Quartz 108)', category: 'Malas', description: 'Hand-knotted 108-bead mala with clear quartz for clarity and meditation focus.', features: ['108 beads','Quartz clarity','Gift pouch'], price: 65, originalPrice: 85, icon: '💎', imageUrl: 'https://images.unsplash.com/photo-1603204077779-bed963ea7d0e?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'himalayan-incense-sandalwood', name: 'Himalayan Incense — Sandalwood', category: 'Incense', description: 'Hand-rolled incense inspired by Himalayan tradition — warm sandalwood notes.', features: ['Hand-rolled','Slow burn','Temple-inspired aroma'], price: 14, icon: '🕯️', imageUrl: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'himalayan-incense-juniper', name: 'Himalayan Incense — Juniper', category: 'Incense', description: 'Juniper-style incense commonly used in Himalayan cleansing rituals.', features: ['Cleansing scent','Ritual use','Long burn'], price: 14, icon: '🌲', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'himalayan-incense-cedar', name: 'Himalayan Incense — Cedar', category: 'Incense', description: 'Earthy cedar aroma for grounding meditation and evening practice.', features: ['Grounding aroma','Meditation-friendly','Hand-packed'], price: 14, icon: '🌲', imageUrl: 'https://images.pexels.com/photos/3060324/pexels-photo-3060324.jpeg?auto=compress&cs=tinysrgb&w=1600' },

    { slug: 'prayer-flags-set', name: 'Tibetan Prayer Flags (Set of 25)', category: 'Ritual & Decor', description: 'Colorful prayer flags to bless your home practice space — classic Himalayan style.', features: ['Weather-friendly fabric','Traditional colors','Easy to hang'], price: 18, icon: '🏳️', imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'brass-butter-lamp', name: 'Brass Butter Lamp (Ritual lamp)', category: 'Ritual & Decor', description: 'A small brass lamp for evening intention rituals and puja-inspired practice.', features: ['Brass finish','Stable base','Compact'], price: 38, icon: '🪔', imageUrl: 'https://images.pexels.com/photos/4046712/pexels-photo-4046712.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'copper-water-bottle', name: 'Copper Water Bottle (Ayurvedic)', category: 'Wellness', description: 'Copper bottle inspired by Ayurvedic tradition for daily hydration rituals.', features: ['Copper finish','Daily ritual','Travel-friendly'], price: 34, originalPrice: 45, icon: '🥤', imageUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'thangka-print-chenrezig', name: 'Thangka Print — Chenrezig (Compassion)', category: 'Art & Gifts', description: 'A high-quality devotional print inspired by Himalayan thangka art (compassion motif).', features: ['Framing-ready','Himalayan-inspired art','Great gift'], price: 39, icon: '🖼️', imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'thangka-print-green-tara', name: 'Thangka Print — Green Tara', category: 'Art & Gifts', description: 'A beautiful Green Tara-inspired print for protection and courage practice.', features: ['Framing-ready','Vibrant print','Practice reminder'], price: 39, icon: '🖼️', imageUrl: 'https://images.pexels.com/photos/171428/pexels-photo-171428.jpeg?auto=compress&cs=tinysrgb&w=1600' },

    { slug: 'mala-storage-pouch', name: 'Handmade Mala Storage Pouch', category: 'Accessories', description: 'Soft pouch to keep your mala safe during travel and daily use.', features: ['Soft lining','Travel-friendly','Protects beads'], price: 12, icon: '🧵', imageUrl: 'https://images.pexels.com/photos/4046716/pexels-photo-4046716.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'meditation-cushion-zafu', name: 'Meditation Cushion (Zafu)', category: 'Meditation Tools', description: 'Comfortable cushion to support posture and longer sits.', features: ['Supportive posture','Durable fabric','Practice staple'], price: 59, originalPrice: 79, icon: '🧘', imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'yoga-strap', name: 'Yoga Strap (Alignment)', category: 'Yoga', description: 'A simple strap to improve alignment and flexibility in Hatha practice.', features: ['Alignment support','Lightweight','Durable'], price: 9, icon: '🧘', imageUrl: 'https://images.pexels.com/photos/4325474/pexels-photo-4325474.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'yoga-block-cork', name: 'Cork Yoga Block (Pair)', category: 'Yoga', description: 'Stable cork blocks for safe alignment in yoga and mobility work.', features: ['Stable cork','Pair set','Non-slip grip'], price: 28, icon: '🧱', imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'himalayan-tea-ginger-lemon', name: 'Himalayan Herbal Tea — Ginger Lemon', category: 'Tea & Ritual', description: 'A warming herbal tea for evening calm and digestion-friendly routine.', features: ['Caffeine-free','Warming blend','Daily ritual'], price: 11, icon: '🍵', imageUrl: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'himalayan-tea-tulsi', name: 'Herbal Tea — Tulsi Calm', category: 'Tea & Ritual', description: 'Tulsi-inspired tea for a calm, steady daily practice rhythm.', features: ['Caffeine-free','Soothing aroma','Great before sit'], price: 11, icon: '🍵', imageUrl: 'https://images.unsplash.com/photo-1560948799-31571abd06c1?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'neti-pot-copper', name: 'Neti Pot (Copper finish)', category: 'Wellness', description: 'Traditional neti pot to support breathwork and clear nasal breathing routines.', features: ['Breathwork support','Easy to use','Travel-friendly'], price: 16, icon: '🌬️', imageUrl: 'https://images.pexels.com/photos/593451/pexels-photo-593451.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'journal-retreat', name: 'Retreat Journal (Guided)', category: 'Books & Journals', description: 'A guided journal with prompts for spiritual retreats, reflection, and integration.', features: ['Prompted pages','Habit tracking','Integration plan'], price: 19, icon: '📓', imageUrl: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'mantra-cards-set', name: 'Mantra Cards (Set of 24)', category: 'Books & Journals', description: 'A set of mantra reminder cards for daily practice and inspiration.', features: ['Pocket sized','Practice prompts','Giftable'], price: 17, icon: '🃏', imageUrl: 'https://images.pexels.com/photos/678303/pexels-photo-678303.jpeg?auto=compress&cs=tinysrgb&w=1600' },

    { slug: 'sage-alternative-himalayan-smudge', name: 'Himalayan Smudge Bundle (Herbal)', category: 'Ritual & Decor', description: 'A herbal smoke bundle inspired by Himalayan cleansing rituals (sage-alternative).', features: ['Herbal blend','Ritual use','Aromatic'], price: 15, icon: '🔥', imageUrl: 'https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'brass-bell-dorje', name: 'Ritual Bell & Dorje (Set)', category: 'Ritual & Decor', description: 'Bell and dorje-inspired set for mantra, puja, and meditative ritual.', features: ['Bell + dorje set','Symbolic practice tool','Gift-ready'], price: 72, icon: '🛎️', imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'incense-holder-wood', name: 'Incense Holder (Wood)', category: 'Incense', description: 'A simple wooden holder to keep incense ash tidy during practice.', features: ['Wood finish','Easy clean','Stable base'], price: 8, icon: '🪵', imageUrl: 'https://images.pexels.com/photos/5700431/pexels-photo-5700431.jpeg?auto=compress&cs=tinysrgb&w=1600' },

    { slug: 'rudraksha-bracelet', name: 'Rudraksha Bracelet', category: 'Malas', description: 'Rudraksha bracelet for daily grounding and remembrance of practice.', features: ['Comfort wear','Traditional beads','Durable'], price: 12, icon: '📿', imageUrl: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'copper-tingsha-cymbals', name: 'Tingsha Cymbals (Meditation chime)', category: 'Meditation Tools', description: 'Clear chime cymbals used to begin/end meditation sessions.', features: ['Clear chime','Practice ritual','Compact'], price: 46, icon: '🥁', imageUrl: 'https://images.pexels.com/photos/128294/pexels-photo-128294.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'prayer-wheel-mini', name: 'Mini Prayer Wheel (Desktop)', category: 'Ritual & Decor', description: 'A small prayer wheel for your desk/altar to support daily intention practice.', features: ['Desktop size','Spins smoothly','Altar-friendly'], price: 52, icon: '🌀', imageUrl: 'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?auto=format&fit=crop&w=1600&q=80' },

    { slug: 'saffron-tilak-kit', name: 'Tilak & Kumkum Ritual Kit', category: 'Ritual & Decor', description: 'Simple tilak/kumkum-style kit for daily puja-inspired practice (cosmetic grade).', features: ['Ritual use','Small container','Travel friendly'], price: 13, icon: '🟠', imageUrl: 'https://images.pexels.com/photos/4046713/pexels-photo-4046713.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    { slug: 'sandalwood-mala-108', name: 'Sandalwood Mala (108 beads)', category: 'Malas', description: 'Sandalwood beads for grounding aroma and steady japa practice.', features: ['Aromatic beads','108 count','Comfort wear'], price: 41, icon: '🌳', imageUrl: 'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?auto=format&fit=crop&w=1600&q=80' },
    { slug: 'himalayan-incense-mix-pack', name: 'Himalayan Incense Mix Pack (6 aromas)', category: 'Incense', description: 'Variety pack for different moods: sandalwood, juniper, cedar, and more.', features: ['Variety pack','Gift-ready','Temple-inspired'], price: 22, originalPrice: 28, badge: 'Value', icon: '🕯️', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80' },
  ];

  for (const p of products) {
    await prisma.product.upsert({
      where: { slug: p.slug },
      update: {
        name: p.name,
        category: p.category,
        description: p.description,
        features: p.features,
        price: p.price,
        originalPrice: p.originalPrice || null,
        badge: p.badge || null,
        icon: p.icon,
        imageUrl: p.imageUrl || null,
        isActive: true,
      },
      create: {
        slug: p.slug,
        name: p.name,
        category: p.category,
        description: p.description,
        features: p.features,
        price: p.price,
        originalPrice: p.originalPrice || null,
        badge: p.badge || null,
        icon: p.icon,
        imageUrl: p.imageUrl || null,
        isActive: true,
      },
    });
  }
  console.log(`✅ Seeded/updated ${products.length} shop products`);
}

async function main() {
  await seedAdmin();
  await seedProgramsAndDates();
  await seedTestimonials();
  await seedBlogPosts();
  await seedGallery();
  await seedProducts();
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
