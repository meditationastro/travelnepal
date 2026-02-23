import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const dynamic = 'force-dynamic';
import { HeroSection } from '@/components/home/HeroSection';
import { ProgramCards } from '@/components/home/ProgramCards';
import { AstrologySection } from '@/components/home/AstrologySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { QuizCTA } from '@/components/home/QuizCTA';
import { StatsSection } from '@/components/home/StatsSection';
import { WhyHimalayas } from '@/components/home/WhyHimalayas';
import { ServicesShowcase } from '@/components/home/ServicesShowcase';
import { SocialProofStrip } from '@/components/home/SocialProofStrip';

export const metadata: Metadata = {
  title: 'Himalya Retreat Nepal — Meditation, Vedic Astrology & Spiritual Retreat in Nepal',
  description: 'Join 2,000+ guests from 50+ countries at Himalya Retreat Nepal — authentic spiritual retreats, Vedic astrology (Jyotish) readings, Ayurveda, and Himalayan yoga in Khumaltar, Lalitpur, Nepal.',
};

async function getPrograms() {
  try {
    return await prisma.retreatProgram.findMany({
      where: { isActive: true },
      include: { dates: { where: { isActive: true, startDate: { gte: new Date() } }, take: 3 } },
      take: 3,
    });
  } catch { return []; }
}

async function getTestimonials() {
  try {
    return await prisma.testimonial.findMany({ where: { isPublished: true }, take: 6 });
  } catch { return []; }
}

export default async function HomePage() {
  const [programs, testimonials] = await Promise.all([getPrograms(), getTestimonials()]);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <SocialProofStrip />
      <ProgramCards programs={programs} />
      <WhyHimalayas />
      <ServicesShowcase />
      <AstrologySection />
      <QuizCTA />
      <TestimonialsSection testimonials={testimonials} />

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(197,162,83,0.08), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(74,126,80,0.06), transparent 60%)' }} />
        {/* Decorative image */}
        <div className="absolute inset-0 overflow-hidden opacity-15">
          <img src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=1920&q=40" alt="" className="w-full h-full object-cover" aria-hidden />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6 tracking-widest uppercase" style={{ background: 'rgba(197,162,83,0.12)', color: '#C5A253', border: '1px solid rgba(197,162,83,0.25)' }}>
            🙏 The Journey Begins Here
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white font-semibold mb-6 leading-tight">
            Your transformation begins<br/>
            <span className="italic gold-shimmer">with a single step.</span>
          </h2>
          <p className="text-stone-300 text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            The Himalayas are calling. Join 2,000+ guests from 50+ countries for a journey that will change how you see yourself, the stars, and the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/retreats" className="px-10 py-4 rounded-full font-semibold text-stone-900 text-lg shadow-2xl hover:scale-105 transition-all" style={{ background: 'linear-gradient(135deg, #C5A253, #E8C870)' }}>
              Explore Retreats
            </Link>
            <Link href="/quiz" className="px-10 py-4 rounded-full font-semibold text-white text-lg border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm">
              Find Your Path ✨
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-stone-500 text-sm">
            <span>📍 Khumaltar, Lalitpur, Nepal</span>
            <span>·</span>
            <span>🌍 50+ Countries</span>
            <span>·</span>
            <span>⭐ 4.9 Rating</span>
            <span>·</span>
            <a href="https://wa.me/9779851187267" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
