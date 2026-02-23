import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { TestimonialActions } from '@/components/admin/TestimonialActions';

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({ orderBy: { createdAt: 'desc' } });
  } catch { return []; }
}

export default async function AdminTestimonialsPage() {
  const testimonials = await getTestimonials();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Testimonials</h1>
          <p className="text-stone-400 text-sm mt-1">{testimonials.length} total · {testimonials.filter(t => t.isPublished).length} published</p>
        </div>
        <Link href="/admin/testimonials/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm btn-gold">
          <Plus className="w-4 h-4" /> Add Testimonial
        </Link>
      </div>

      <div className="grid gap-4">
        {testimonials.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center shadow-sm border border-stone-100">
            <div className="text-5xl mb-4">⭐</div>
            <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">No testimonials yet</h3>
            <Link href="/admin/testimonials/new" className="btn-gold inline-block px-6 py-3 rounded-xl font-semibold text-white mt-4">
              Add First Testimonial
            </Link>
          </div>
        ) : testimonials.map(t => (
          <div key={t.id} className={`bg-white rounded-2xl p-5 shadow-sm border transition-all ${t.isPublished ? 'border-stone-100' : 'border-stone-200 opacity-70'}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 text-sm">{t.name}</div>
                    <div className="text-stone-400 text-xs">{t.country} {t.retreat && `· ${t.retreat}`}</div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array(t.rating).fill(0).map((_, i) => <span key={i} className="text-sm" style={{ color: '#C5A253' }}>★</span>)}
                  </div>
                </div>
                <p className="text-stone-600 text-sm italic leading-relaxed line-clamp-3">"{t.content}"</p>
              </div>
              <TestimonialActions testimonialId={t.id} isPublished={t.isPublished} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
