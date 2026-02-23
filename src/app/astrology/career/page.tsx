import { ServiceLayout } from '../_components/ServiceLayout';

export const metadata = {
  title: 'Career & Dharma Reading | Himalaya Retreat',
  description:
    'A practical career guidance session using Jyotish: strengths, environments you thrive in, timing for change, and sustainable direction.',
};

export default function CareerPage() {
  return (
    <ServiceLayout
      title="Career & Dharma"
      subtitle="Clarify purpose, strengths, and timing—then turn insight into an actionable career direction and weekly plan."
      bullets={[
        'Strengths + work style',
        'Best environments and roles',
        'Timing for change vs stability',
        'Leadership, money & decision patterns',
        'Next-step roadmap',
        'Optional remedies for focus and clarity',
      ]}
    />
  );
}
