const fallbackTestimonials = [
  {
    id: '1',
    name: 'Sarah M.',
    country: 'United Kingdom',
    retreat: '7-Day Meditation & Astrology',
    content: 'The most transformative experience of my life. The combination of meditation and Vedic astrology gave me clarity I had been seeking for years. The Himalayas hold a magic that is impossible to describe.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Marco R.',
    country: 'Italy',
    retreat: '14-Day Himalayan Awakening',
    content: 'Two weeks that completely changed my perspective on life. The teachers here are exceptional. My birth chart reading was scarily accurate and helped me understand my life path.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Yuki T.',
    country: 'Japan',
    retreat: '3-Day Mindfulness',
    content: 'Even in just 3 days I felt a profound shift. The sunrise meditations at high altitude were magical. Already planning to return for the full 14-day program.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Amara K.',
    country: 'USA',
    retreat: '7-Day Meditation & Astrology',
    content: 'I came skeptical about astrology and left a complete believer. The depth of knowledge here is unparalleled. My life has genuinely changed direction since returning.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lars H.',
    country: 'Germany',
    retreat: '14-Day Himalayan Awakening',
    content: 'The silent retreat days were terrifying and then the most liberating experience I have ever had. The team supported me through the entire journey with incredible care.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Priya S.',
    country: 'India',
    retreat: '3-Day Mindfulness',
    content: 'Born in India, I thought I understood meditation. This retreat showed me how surface-level my practice was. Profound, humbling, and utterly beautiful.',
    rating: 5,
  },
];

export function TestimonialsSection({ testimonials }: { testimonials: any[] }) {
  const display = testimonials.length > 0 ? testimonials : fallbackTestimonials;

  return (
    <section className="py-24" style={{ background: '#fdf8f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-sm tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#C5A253' }}>
            — Stories of Transformation —
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 font-semibold">
            What seekers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {display.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-3xl p-7 shadow-sm border border-stone-100 ${i === 1 || i === 4 ? 'md:mt-8' : ''}`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, i) => (
                  <span key={i} style={{ color: '#C5A253' }}>★</span>
                ))}
              </div>

              <p className="text-stone-700 leading-relaxed mb-6 font-elegant text-lg italic">
                "{t.content}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div>
                  <div className="font-semibold text-stone-900">{t.name}</div>
                  <div className="text-stone-400 text-sm">{t.country}</div>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full text-stone-500" style={{ background: '#f5f5f4' }}>
                  {t.retreat}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
