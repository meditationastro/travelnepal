import { Metadata } from 'next';
import QuizClient from './quiz-client';

export const metadata: Metadata = {
  title: 'Nepal Spiritual Quiz | Himalaya Retreat Nepal',
  description:
    'Take a short Nepal spiritual travel quiz: meditation, temples, trekking basics, and retreat readiness. Get a personalized suggestion for your retreat journey in Nepal.',
};

export default function QuizPage() {
  return <QuizClient />;
}
