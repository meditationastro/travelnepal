export type GuideSection = {
  heading: string;
  body?: string;
  bullets?: string[];
  qa?: { q: string; a: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  emoji: string;
  tags: string[];
  sections: GuideSection[];
};

export const ASTROLOGY_GUIDES: Guide[] = [
  {
    "slug": "vedic-birth-chart-basics",
    "title": "Vedic Birth Chart Basics (Janam Kundli)",
    "excerpt": "What a Vedic chart shows—signs, houses, planets, and how readings are structured.",
    "emoji": "📿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Vedic Birth Chart Basics (Janam Kundli) explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "lagna-ascendant-guide",
    "title": "Lagna (Ascendant) Guide",
    "excerpt": "Why the ascendant matters, how it colors personality, and what to focus on in remedies.",
    "emoji": "🪔",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Lagna (Ascendant) Guide explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "moon-sign-nakshatra",
    "title": "Moon Sign & Nakshatra",
    "excerpt": "How the Moon drives mind and emotions, plus how to use nakshatra for timing.",
    "emoji": "🪷",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Moon Sign & Nakshatra explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "navagraha-overview",
    "title": "Navagraha Overview",
    "excerpt": "The nine planets in Jyotish—meanings, strengths, and common imbalance patterns.",
    "emoji": "🌙",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Navagraha Overview explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "navagraha-mantras",
    "title": "Navagraha Mantras",
    "excerpt": "Traditional mantra options for each graha, plus simple practice routines.",
    "emoji": "📿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Navagraha Mantras explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "vedic-remedies-101",
    "title": "Vedic Remedies 101",
    "excerpt": "Mantra, dana (charity), fasting, lifestyle changes—what’s gentle and beginner‑friendly.",
    "emoji": "🌙",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Vedic Remedies 101 explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "gemstones-jyotish",
    "title": "Gemstones in Jyotish",
    "excerpt": "How gemstone recommendations work, safety cautions, and why testing matters.",
    "emoji": "✨",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Gemstones in Jyotish explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "muhurta-guide",
    "title": "Muhurta (Auspicious Timing) Guide",
    "excerpt": "Basics of selecting dates for travel, marriage, business, and spiritual practice.",
    "emoji": "🪔",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Muhurta (Auspicious Timing) Guide explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "dashas-intro",
    "title": "Vimshottari Dasha Introduction",
    "excerpt": "What dashas are, how periods unfold, and why timing can feel ‘fated’.",
    "emoji": "☀️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Vimshottari Dasha Introduction explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "transits-gochara",
    "title": "Transits (Gochara) Explained",
    "excerpt": "How Saturn/Jupiter/Rahu transits show growth pressure and long cycles.",
    "emoji": "🧿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Transits (Gochara) Explained explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "sade-sati-guide",
    "title": "Sade Sati Guide",
    "excerpt": "What it is, typical themes, and supportive spiritual practices.",
    "emoji": "✨",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Sade Sati Guide explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "rahu-ketu-lessons",
    "title": "Rahu & Ketu Lessons",
    "excerpt": "Desire vs liberation—how the nodes show karma, obsession, and detachment.",
    "emoji": "🧿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Rahu & Ketu Lessons explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "saturn-shani-remedies",
    "title": "Shani (Saturn) Remedies",
    "excerpt": "Practical ways to work with discipline, delay, and responsibility.",
    "emoji": "🧿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Shani (Saturn) Remedies explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "jupiter-guru-blessings",
    "title": "Guru (Jupiter) Blessings",
    "excerpt": "Wisdom, teachers, expansion—how to strengthen Jupiter naturally.",
    "emoji": "🌙",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Guru (Jupiter) Blessings explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "venus-shukra-love",
    "title": "Shukra (Venus) Love & Harmony",
    "excerpt": "Relationships, art, pleasure—what imbalance looks like and what helps.",
    "emoji": "🪷",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Shukra (Venus) Love & Harmony explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "mars-mangal-energy",
    "title": "Mangal (Mars) Energy",
    "excerpt": "Courage, action, anger—channeling Mars with breathwork and routine.",
    "emoji": "☀️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Mangal (Mars) Energy explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "mercury-budh-intellect",
    "title": "Budh (Mercury) Intellect",
    "excerpt": "Speech, trade, nerves—how to support clarity and calm communication.",
    "emoji": "☀️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Budh (Mercury) Intellect explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "sun-surya-confidence",
    "title": "Surya (Sun) Confidence",
    "excerpt": "Vitality and leadership—simple Surya practices and sunlight routine.",
    "emoji": "🪷",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Surya (Sun) Confidence explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "moon-chandra-mind",
    "title": "Chandra (Moon) Mind Care",
    "excerpt": "Emotional tides, sleep, nourishment—moon-supportive habits.",
    "emoji": "🧘‍♂️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Chandra (Moon) Mind Care explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "yogas-in-vedic-astrology",
    "title": "Important Yogas in Jyotish",
    "excerpt": "A simple guide to common yogas and why context matters.",
    "emoji": "🪐",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Important Yogas in Jyotish explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "career-indications",
    "title": "Career Indications in the Chart",
    "excerpt": "Houses and planets linked to work, dharma, and life direction.",
    "emoji": "🪐",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Career Indications in the Chart explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "marriage-compatibility",
    "title": "Marriage & Compatibility Basics",
    "excerpt": "Kundli matching overview, red flags, and healthy use of astrology.",
    "emoji": "🧿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Marriage & Compatibility Basics explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "health-in-jyotish",
    "title": "Health Indicators in Jyotish",
    "excerpt": "How charts discuss vitality, stress, digestion, and recovery cycles.",
    "emoji": "☀️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Health Indicators in Jyotish explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "spiritual-growth",
    "title": "Spiritual Growth in the Chart",
    "excerpt": "Moksha houses, Ketu themes, and retreat-friendly practices.",
    "emoji": "🪔",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Spiritual Growth in the Chart explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "panchanga-basics",
    "title": "Panchanga Basics",
    "excerpt": "Tithi, nakshatra, yoga, karana, vara—how daily energy is described.",
    "emoji": "🪷",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Panchanga Basics explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "retrogrades-vedic",
    "title": "Retrogrades in Vedic Astrology",
    "excerpt": "What retrograde planets mean and how to interpret them compassionately.",
    "emoji": "🪔",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Retrogrades in Vedic Astrology explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "eclipse-rituals",
    "title": "Eclipse (Grahan) Guidance",
    "excerpt": "Simple do’s and don’ts, meditation practices, and safety notes.",
    "emoji": "🪔",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Eclipse (Grahan) Guidance explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "birth-time-rectification",
    "title": "Birth Time Rectification",
    "excerpt": "Why time accuracy matters and what rectification tries to do.",
    "emoji": "🧘‍♂️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Birth Time Rectification explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "chart-reading-workflow",
    "title": "How a Jyotish Reading Works",
    "excerpt": "A step-by-step approach a reader uses to move from chart to advice.",
    "emoji": "🌙",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "How a Jyotish Reading Works explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "remedy-plan-template",
    "title": "A Gentle Remedy Plan Template",
    "excerpt": "A simple weekly routine with mantra, charity, and reflection prompts.",
    "emoji": "📿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "A Gentle Remedy Plan Template explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "mantra-practice",
    "title": "Mantra Practice for Beginners",
    "excerpt": "How to start: intention, mala counting, pronunciation, and consistency.",
    "emoji": "✨",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Mantra Practice for Beginners explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "puja-for-beginners",
    "title": "Puja for Beginners",
    "excerpt": "Simple altar setup, offerings, and respectful practice.",
    "emoji": "✨",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Puja for Beginners explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "navagraha-puja-guide",
    "title": "Navagraha Puja Guide",
    "excerpt": "A basic structure for a 9-planet puja and how consultations guide it.",
    "emoji": "🧘‍♂️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Navagraha Puja Guide explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "astrology-and-meditation",
    "title": "Astrology & Meditation",
    "excerpt": "Using chart themes to choose meditation styles that support your mind.",
    "emoji": "🧘‍♂️",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Astrology & Meditation explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "shadow-work-rahu",
    "title": "Shadow Work with Rahu",
    "excerpt": "A modern, safe framing for Rahu themes—craving, identity, and clarity.",
    "emoji": "📿",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Shadow Work with Rahu explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "karma-and-dharma",
    "title": "Karma & Dharma in Jyotish",
    "excerpt": "How Jyotish frames life lessons, purpose, and ethical action.",
    "emoji": "🔮",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Karma & Dharma in Jyotish explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "dosha-and-astrology",
    "title": "Ayurveda Doshas & Jyotish",
    "excerpt": "How elemental imbalance can mirror chart patterns, gently.",
    "emoji": "🪷",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Ayurveda Doshas & Jyotish explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "book-consultation",
    "title": "When to Book a Jyotish Consultation",
    "excerpt": "Signs you’ll benefit most, what to prepare, and how to ask better questions.",
    "emoji": "🪐",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "When to Book a Jyotish Consultation explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  },
  {
    "slug": "rashi-signs-guide",
    "title": "Rashi (Zodiac Signs) Guide",
    "excerpt": "A practical overview of the 12 rashis in Vedic astrology and how they behave in charts.",
    "emoji": "🪐",
    "tags": [
      "Astrology",
      "Vedic"
    ],
    "sections": [
      {
        "heading": "What this means",
        "body": "Rashi (Zodiac Signs) Guide explained in a simple, non-scary way. Use this as a guide, not a verdict—real readings consider the whole chart."
      },
      {
        "heading": "How to use it",
        "bullets": [
          "Notice the theme (mind, career, relationships, spiritual growth).",
          "Watch for timing (dashas + major transits).",
          "Choose one gentle remedy and practice consistently."
        ]
      },
      {
        "heading": "Beginner‑safe practices",
        "bullets": [
          "5–10 minutes mantra + 5 minutes breathwork daily.",
          "Weekly reflection journaling (what lesson is repeating?).",
          "Charity (dāna) aligned with the planet’s theme."
        ]
      },
      {
        "heading": "Common questions",
        "qa": [
          {
            "q": "Can astrology predict everything?",
            "a": "It can describe patterns and timing, but your choices and habits matter a lot."
          },
          {
            "q": "What if my birth time is unknown?",
            "a": "Start with Moon-based methods and consider rectification for deeper work."
          }
        ]
      },
      {
        "heading": "Next step",
        "body": "Use the Vedic Birth Chart Generator on our site for a quick preview, then book a consultation for full chart analysis + personalized remedies."
      }
    ]
  }
] as unknown as Guide[];
