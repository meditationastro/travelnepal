import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { format } from 'date-fns';
import { Plus, Edit, ToggleLeft, ToggleRight } from 'lucide-react';

async function getPrograms() {
  try {
    return await prisma.retreatProgram.findMany({
      include: { dates: { orderBy: { startDate: 'asc' } }, _count: { select: { bookings: true } } },
      orderBy: { createdAt: 'desc' },
    });
  } catch { return []; }
}

export default async function AdminProgramsPage() {
  const programs = await getPrograms();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Retreat Programs</h1>
          <p className="text-stone-400 text-sm mt-1">{programs.length} programs</p>
        </div>
        <Link href="/admin/programs/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm btn-gold">
          <Plus className="w-4 h-4" /> New Retreat
        </Link>
      </div>

      <div className="space-y-4">
        {programs.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-stone-100">
            <div className="text-5xl mb-4">🏔️</div>
            <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">No retreats yet</h3>
            <Link href="/admin/programs/new" className="btn-gold inline-block px-6 py-3 rounded-xl font-semibold text-white mt-4">
              Add First Retreat
            </Link>
          </div>
        ) : programs.map(program => (
          <div key={program.id} className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-display text-lg font-semibold text-stone-900">{program.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${program.isActive ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-500'}`}>
                      {program.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <p className="text-stone-500 text-sm line-clamp-2 mb-4">{program.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-stone-500">
                    <span>⏱ {program.duration} days</span>
                    <span>💰 ${program.earlyBirdPrice || program.price}</span>
                    <span>👥 Max {program.maxParticipants}</span>
                    <span>📋 {program._count.bookings} bookings</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link href={`/admin/programs/${program.id}/edit`}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </Link>
                  <Link href={`/admin/programs/${program.id}/dates`}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm font-medium transition-colors">
                    📅 Dates ({program.dates.length})
                  </Link>
                </div>
              </div>

              {/* Upcoming dates */}
              {program.dates.length > 0 && (
                <div className="mt-4 pt-4 border-t border-stone-100">
                  <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-2">Upcoming Dates</div>
                  <div className="flex flex-wrap gap-2">
                    {program.dates.filter(d => new Date(d.startDate) >= new Date()).slice(0, 4).map(date => (
                      <div key={date.id} className="px-3 py-1.5 rounded-xl text-xs bg-stone-50 border border-stone-100">
                        <span className="text-stone-700">{format(new Date(date.startDate), 'MMM d')} – {format(new Date(date.endDate), 'MMM d, yyyy')}</span>
                        <span className="text-stone-400 ml-2">{date.seatsTotal - date.seatsBooked} spots</span>
                      </div>
                    ))}
                    {program.dates.filter(d => new Date(d.startDate) >= new Date()).length === 0 && (
                      <span className="text-stone-400 text-xs">No upcoming dates. <Link href={`/admin/programs/${program.id}/dates`} className="underline">Add dates →</Link></span>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
