'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

type Variant = 'yoga' | 'meditation' | 'astrology';

type Result = {
  title: string;
  emoji: string;
  desc: string;
  ctaLabel: string;
  href: string;
};

export default function PracticeFinder({ variant }: { variant: Variant }) {
  const [goal, setGoal] = useState('');
  const [time, setTime] = useState('');
  const [level, setLevel] = useState('');

  const goals = useMemo(() => {
    if (variant === 'yoga') {
      return [
        { v: 'stress', label: '😌 Reduce stress & anxiety' },
        { v: 'strength', label: '💪 Build strength & posture' },
        { v: 'energy', label: '🔥 Boost energy & focus' },
        { v: 'sleep', label: '🌙 Sleep deeper' },
        { v: 'spiritual', label: '🙏 Spiritual depth' },
      ];
    }
    if (variant === 'meditation') {
      return [
        { v: 'calm', label: '🌿 Calm the mind' },
        { v: 'clarity', label: '🧠 Improve clarity' },
        { v: 'healing', label: '💗 Emotional healing' },
        { v: 'discipline', label: '⏳ Build a daily habit' },
        { v: 'deep', label: '🕯️ Go deeper (retreat style)' },
      ];
    }
    return [
      { v: 'life', label: '🧭 Life direction & dharma' },
      { v: 'love', label: '❤️ Relationship / compatibility' },
      { v: 'career', label: '💼 Career timing' },
      { v: 'karma', label: '🌀 Karma & past life' },
      { v: 'chart', label: '📜 Birth chart overview' },
    ];
  }, [variant]);

  const times = [
    { v: '10', label: '⏱️ 10 min' },
    { v: '20', label: '⏱️ 20 min' },
    { v: '45', label: '⏱️ 45+ min' },
  ];

  const levels = [
    { v: 'beginner', label: '🌱 Beginner' },
    { v: 'intermediate', label: '🌿 Intermediate' },
    { v: 'advanced', label: '🔥 Advanced' },
  ];

  const result: Result | null = useMemo(() => {
    if (!goal || !time || !level) return null;

    if (variant === 'yoga') {
      if (goal === 'sleep' || goal === 'stress') {
        return {
          emoji: '🌙',
          title: 'Yin + Yoga Nidra combo',
          desc: 'Slow holds + guided relaxation to downshift your nervous system—perfect before bed.',
          ctaLabel: 'Explore Yin Yoga',
          href: '/yoga/yin',
        };
      }
      if (goal === 'strength') {
        return {
          emoji: '💪',
          title: 'Hatha foundations',
          desc: 'Alignment-focused practice to build steady strength, posture, and safe progress.',
          ctaLabel: 'Explore Hatha Yoga',
          href: '/yoga/hatha',
        };
      }
      if (goal === 'energy') {
        return {
          emoji: '🔥',
          title: 'Kundalini activation',
          desc: 'Breath + kriya + mantra to energize, clear stagnation, and sharpen focus.',
          ctaLabel: 'Explore Kundalini',
          href: '/yoga/kundalini',
        };
      }
      return {
        emoji: '🙏',
        title: 'Mantra + meditation flow',
        desc: 'A practice blend that supports devotion, concentration, and inner stillness.',
        ctaLabel: 'Book a class',
        href: '/yoga',
      };
    }

    if (variant === 'meditation') {
      if (goal === 'discipline') {
        return {
          emoji: '⏳',
          title: '20-minute daily habit plan',
          desc: 'Simple structure: breath → observation → short journaling. Consistency over intensity.',
          ctaLabel: 'See meditation programs',
          href: '/meditation',
        };
      }
      if (goal === 'deep') {
        return {
          emoji: '🕯️',
          title: 'Retreat-style deep sit',
          desc: 'Longer sessions with posture guidance and silent intervals—best for serious seekers.',
          ctaLabel: 'Explore retreats',
          href: '/retreats',
        };
      }
      if (goal === 'healing') {
        return {
          emoji: '💗',
          title: 'Loving-kindness (Metta)',
          desc: 'A heart-based practice that softens inner tension and builds emotional resilience.',
          ctaLabel: 'Book a guided session',
          href: '/meditation/booking',
        };
      }
      return {
        emoji: '🌿',
        title: 'Breath-led calming',
        desc: 'Gentle breath awareness to settle thoughts and return to the present moment.',
        ctaLabel: 'Guided sessions',
        href: '/meditation/sessions',
      };
    }

    if (goal === 'chart') {
      return {
        emoji: '📜',
        title: 'Vedic birth chart overview',
        desc: 'Understand your planets, houses, and life themes with clear guidance.',
        ctaLabel: 'Book consultation',
        href: '/vedic-astrology/booking',
      };
    }
    if (goal === 'karma') {
      return {
        emoji: '🌀',
        title: 'Karma & past-life reading',
        desc: 'Explore patterns, lessons, and practical remedies (upaya) for this lifetime.',
        ctaLabel: 'Explore karma reading',
        href: '/astrology/karma-reading',
      };
    }
    if (goal === 'love') {
      return {
        emoji: '❤️',
        title: 'Compatibility guidance',
        desc: 'Understand relationship dynamics and timing with traditional Vedic methods.',
        ctaLabel: 'Explore compatibility',
        href: '/astrology/compatibility',
      };
    }
    if (goal === 'career') {
      return {
        emoji: '💼',
        title: 'Career & dharma timing',
        desc: 'Make clearer decisions with supportive timing windows and remedial practices.',
        ctaLabel: 'Explore career astrology',
        href: '/astrology/career',
      };
    }
    return {
      emoji: '🧭',
      title: 'Life direction session',
      desc: 'A practical reading focused on decisions, cycles, and next steps.',
      ctaLabel: 'Book consultation',
      href: '/vedic-astrology/booking',
    };
  }, [goal, level, time, variant]);

  return (
    <div className="rounded-3xl p-7 md:p-10 border border-stone-100 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="text-sm font-semibold text-stone-500 tracking-widest uppercase">Find your path</div>
          <h3 className="font-display text-2xl font-semibold text-stone-900 mt-2">
            {variant === 'yoga' ? 'Which practice fits you today?' : variant === 'meditation' ? 'Pick your meditation style' : 'Get a quick recommendation'}
          </h3>
          <p className="text-stone-500 mt-2">
            Choose a goal, time, and level—get a personalized suggestion.
          </p>
        </div>
        <div className="text-4xl">{variant === 'yoga' ? '🧘‍♀️' : variant === 'meditation' ? '🕊️' : '🔮'}</div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div>
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Goal</div>
          <div className="mt-2 space-y-2">
            {goals.map((g) => (
              <button
                key={g.v}
                type="button"
                onClick={() => setGoal(g.v)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl border transition-colors ${
                  goal === g.v ? 'border-amber-300 bg-amber-50' : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="font-medium text-stone-900 text-sm">{g.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Time</div>
          <div className="mt-2 space-y-2">
            {times.map((t) => (
              <button
                key={t.v}
                type="button"
                onClick={() => setTime(t.v)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl border transition-colors ${
                  time === t.v ? 'border-amber-300 bg-amber-50' : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="font-medium text-stone-900 text-sm">{t.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider">Level</div>
          <div className="mt-2 space-y-2">
            {levels.map((l) => (
              <button
                key={l.v}
                type="button"
                onClick={() => setLevel(l.v)}
                className={`w-full text-left px-4 py-2.5 rounded-2xl border transition-colors ${
                  level === l.v ? 'border-amber-300 bg-amber-50' : 'border-stone-200 hover:bg-stone-50'
                }`}
              >
                <span className="font-medium text-stone-900 text-sm">{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6">
        {result ? (
          <div className="rounded-3xl p-6 border border-amber-200" style={{ background: 'linear-gradient(135deg, rgba(197,162,83,0.10), rgba(232,137,26,0.06))' }}>
            <div className="flex items-start gap-4">
              <div className="text-4xl">{result.emoji}</div>
              <div className="flex-1">
                <div className="font-display text-xl font-semibold text-stone-900">{result.title}</div>
                <p className="text-stone-600 mt-1">{result.desc}</p>
                <div className="mt-4">
                  <Link
                    href={result.href}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #C5A253, #E8891A)' }}
                  >
                    {result.ctaLabel} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl p-4 border border-stone-200 bg-stone-50 text-stone-600 text-sm">
            👆 Choose all three options to get your recommendation.
          </div>
        )}
      </div>
    </div>
  );
}
