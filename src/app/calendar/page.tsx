import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, Users, ArrowRight } from 'lucide-react';

async function getDates() {
  try {
    return await prisma.retreatDate.findMany({
      where: { isActive: true, startDate: { gte: new Date() } },
      include: { program: true },
      orderBy: { startDate: 'asc' },
    });
  } catch {
    return [];
  }
}

const programColors: Record<string, string> = {
  '3-day-mindfulness': '#4a7e50',
  '7-day-meditation-astrology': '#C5A253',
  '14-day-himalayan-awakening': '#C4663A',
};

export default async function CalendarPage() {
  const dates = await getDates();

  const fallbackDates = [
    { id: '1', startDate: new Date('2025-06-01'), endDate: new Date('2025-06-04'), seatsTotal: 15, seatsBooked: 3, program: { title: '3-Day Mindfulness Retreat', slug: '3-day-mindfulness', duration: 3, price: 450, earlyBirdPrice: 380 } },
    { id: '2', startDate: new Date('2025-06-01'), endDate: new Date('2025-06-08'), seatsTotal: 12, seatsBooked: 5, program: { title: '7-Day Meditation & Astrology', slug: '7-day-meditation-astrology', duration: 7, price: 1200, earlyBirdPrice: 980 } },
    { id: '3', startDate: new Date('2025-07-01'), endDate: new Date('2025-07-04'), seatsTotal: 15, seatsBooked: 1, program: { title: '3-Day Mindfulness Retreat', slug: '3-day-mindfulness', duration: 3, price: 450, earlyBirdPrice: 380 } },
    { id: '4', startDate: new Date('2025-07-01'), endDate: new Date('2025-07-15'), seatsTotal: 8, seatsBooked: 2, program: { title: '14-Day Himalayan Awakening', slug: '14-day-himalayan-awakening', duration: 14, price: 2800, earlyBirdPrice: 2400 } },
    { id: '5', startDate: new Date('2025-08-01'), endDate: new Date('2025-08-08'), seatsTotal: 12, seatsBooked: 7, program: { title: '7-Day Meditation & Astrology', slug: '7-day-meditation-astrology', duration: 7, price: 1200, earlyBirdPrice: 980 } },
    { id: '6', startDate: new Date('2025-09-01'), endDate: new Date('2025-09-15'), seatsTotal: 8, seatsBooked: 0, program: { title: '14-Day Himalayan Awakening', slug: '14-day-himalayan-awakening', duration: 14, price: 2800, earlyBirdPrice: 2400 } },
    { id: '7', startDate: new Date('2025-10-01'), endDate: new Date('2025-10-08'), seatsTotal: 12, seatsBooked: 3, program: { title: '7-Day Meditation & Astrology', slug: '7-day-meditation-astrology', duration: 7, price: 1200, earlyBirdPrice: 980 } },
  ];

  const display = dates.length > 0 ? dates : fallbackDates;

  // Group by month
  const grouped = display.reduce((acc: Record<string, typeof display>, d: any) => {
    const month = format(new Date(d.startDate), 'MMMM yyyy');
    if (!acc[month]) acc[month] = [];
    acc[month].push(d);
    return acc;
  }, {});

  return (
    <div className="pt-20" style={{ background: '#fdf8f0' }}>
      <div className="py-20" style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-5xl mb-6">📅</div>
          <h1 className="font-display text-5xl text-white font-semibold mb-4">Retreat Calendar 2025</h1>
          <p className="text-stone-400 text-xl">Choose your dates and begin your transformation.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-12">
          {[
            { label: '3-Day Mindfulness', color: '#4a7e50' },
            { label: '7-Day Meditation & Astrology', color: '#C5A253' },
            { label: '14-Day Awakening', color: '#C4663A' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ background: item.color }} />
              <span className="text-stone-600 text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {Object.entries(grouped).map(([month, monthDates]: [string, any[]]) => (
          <div key={month} className="mb-12">
            <h2 className="font-display text-2xl font-semibold text-stone-900 mb-6">{month}</h2>
            <div className="space-y-4">
              {monthDates.map((d: any) => {
                const spotsLeft = d.seatsTotal - d.seatsBooked;
                const soldOut = spotsLeft === 0;
                const color = programColors[d.program.slug] || '#C5A253';

                return (
                  <div key={d.id} className={`bg-white rounded-2xl p-6 border shadow-sm flex items-center justify-between gap-4 ${soldOut ? 'opacity-60' : 'border-stone-100 card-hover'}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-1 h-14 rounded-full flex-shrink-0" style={{ background: color }} />
                      <div>
                        <div className="font-semibold text-stone-900">{d.program.title}</div>
                        <div className="text-stone-500 text-sm mt-0.5">
                          {format(new Date(d.startDate), 'MMM d')} – {format(new Date(d.endDate), 'MMM d, yyyy')}
                          {' · '}{d.program.duration} days
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="font-display text-xl font-semibold text-stone-900">
                          ${d.program.earlyBirdPrice || d.program.price}
                        </div>
                        <div className={`text-xs mt-0.5 ${soldOut ? 'text-red-500' : spotsLeft <= 3 ? 'text-orange-500' : 'text-stone-400'}`}>
                          {soldOut ? 'SOLD OUT' : `${spotsLeft} spots left`}
                        </div>
                      </div>
                      <Link
                        href={soldOut ? '#' : `/retreats/${d.program.slug}`}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all ${
                          soldOut ? 'bg-stone-100 text-stone-400 cursor-not-allowed' : 'btn-gold text-white'
                        }`}
                      >
                        {soldOut ? 'Sold Out' : <>Book <ArrowRight className="w-3 h-3" /></>}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Custom dates CTA */}
        <div className="rounded-3xl p-10 text-center" style={{ background: 'linear-gradient(135deg, #27422b, #1c1917)' }}>
          <h3 className="font-display text-2xl text-white font-semibold mb-3">Need a custom date?</h3>
          <p className="text-stone-300 mb-6">For private or group retreats, we can arrange dates that work for you.</p>
          <Link href="/contact" className="btn-gold inline-block px-8 py-3 rounded-full font-semibold text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
