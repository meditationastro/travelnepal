import { ServiceLayout } from '../_components/ServiceLayout';

export const metadata = {
  title: 'Karma & Past Life Reading | Himalaya Retreat',
  description:
    'Explore karmic themes and repeating patterns with a compassionate Jyotish session focused on growth, healing, and practical next steps.',
};

export default function KarmaReadingPage() {
  return (
    <ServiceLayout
      title="Karma & Past Life"
      subtitle="A reflective session to understand repeating patterns, learnings, and ways to soften old cycles with awareness."
      bullets={[
        'Karmic themes + repeating triggers',
        'Relationship lessons & attachment patterns',
        'Timing: what’s changing now',
        'Grounded practices for integration',
        'Supportive rituals/remedies (optional)',
        'Follow-up notes & next steps',
      ]}
    />
  );
}
