import type { Metadata } from 'next';
import GalleryClient from '@/components/gallery/GalleryClient';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Gallery | Himalaya Retreat Nepal',
  description: 'Photos from retreats, yoga, meditation, Ayurveda, and sacred Himalayan landscapes.',
};

export default function GalleryPage() {
  return <GalleryClient />;
}
