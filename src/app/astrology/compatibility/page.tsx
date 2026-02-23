import { ServiceLayout } from '../_components/ServiceLayout';

export const metadata = {
  title: 'Relationship Compatibility Reading | Himalaya Retreat',
  description:
    'Compatibility reading for couples or partners: communication styles, strengths, friction points, and repair rituals—without fatalism.',
};

export default function CompatibilityPage() {
  return (
    <ServiceLayout
      title="Relationship Compatibility"
      subtitle="A clear, non-fatalistic compatibility session—understand patterns, communication styles, and how to repair quickly."
      bullets={[
        'Core strengths and shared values',
        'Common friction points & triggers',
        'Communication + conflict style',
        'Timing for major decisions',
        'Practical repair rituals',
        'Action plan for the next 30 days',
      ]}
    />
  );
}
