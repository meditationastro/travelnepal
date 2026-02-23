import Link from 'next/link';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const fallbackPrograms = [
  {
    id: '1',
    slug: '3-day-mindfulness',
    title: '3-Day Mindfulness Retreat',
    description: 'A transformative weekend immersion into mindfulness practice against the breathtaking Himalayan backdrop.',
    duration: 3,
    price: 450,
    earlyBirdPrice: 380,
    maxParticipants: 15,
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    dates: [],
  },
  {
    id: '2',
    slug: '7-day-meditation-astrology',
    title: '7-Day Meditation & Astrology',
    description: 'Our signature program combining deep meditation with Vedic astrology insights to discover your cosmic blueprint.',
    duration: 7,
    price: 1200,
    earlyBirdPrice: 980,
    maxParticipants: 12,
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600',
    dates: [],
  },
  {
    id: '3',
    slug: '14-day-himalayan-awakening',
    title: '14-Day Himalayan Awakening',
    description: 'Two weeks of intensive practice and profound cosmic self-discovery for serious seekers.',
    duration: 14,
    price: 2800,
    earlyBirdPrice: 2400,
    maxParticipants: 8,
    imageUrl: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=600',
    dates: [],
  },
];

export function ProgramCards({ programs }: { programs: any[] }) {
  const displayPrograms = programs.length > 0 ? programs : fallbackPrograms;

  return (
    <section id="programs" className="py-24" style={{ background: '#fdf8f0' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block text-sm tracking-[0.3em] uppercase font-medium mb-4" style={{ color: '#C5A253' }}>
            — Sacred Programs —
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-stone-900 font-semibold">
            Choose Your Journey
          </h2>
          <p className="mt-4 text-stone-500 text-lg max-w-xl mx-auto">
            From weekend immersions to deep two-week transformations — each path is crafted with intention.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayPrograms.map((program, i) => (
            <Link
              href={`/retreats/${program.slug}`}
              key={program.id}
              className="card-hover group bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${program.imageUrl})` }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)' }} />
                {program.earlyBirdPrice && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: '#E8891A' }}>
                    Early Bird Available
                  </div>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                  <Clock className="w-4 h-4" />
                  {program.duration} Days
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-2 group-hover:text-himalaya-600 transition-colors">
                  {program.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {program.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    {program.earlyBirdPrice && (
                      <div className="text-xs text-stone-400 line-through">${program.price}</div>
                    )}
                    <div className="font-semibold text-stone-900 text-lg">
                      from ${program.earlyBirdPrice || program.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm" style={{ color: '#C5A253' }}>
                    <Users className="w-4 h-4" />
                    <span>{program.maxParticipants} max</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-sm">
                  <span className="text-stone-400">
                    {program.dates?.length > 0 ? `${program.dates.length} dates available` : 'Multiple dates'}
                  </span>
                  <span className="flex items-center gap-1 font-medium" style={{ color: '#C5A253' }}>
                    Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/retreats"
            className="inline-flex items-center gap-2 btn-outline-gold px-8 py-3 rounded-full font-medium"
            style={{ borderColor: '#C5A253', color: '#C5A253' }}
          >
            View All Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
