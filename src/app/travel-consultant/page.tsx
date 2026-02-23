import type { Metadata } from 'next';
import TravelConsultantForm from '@/components/forms/TravelConsultantForm';

export const metadata: Metadata = {
  title: 'Travel Consultant | Himalaya Retreat Nepal',
  description:
    'Get help planning flights, visas, pickup, hotels, and local transport for your retreat in Nepal. Quick consultation form.',
};

export default function TravelConsultantPage() {
  return <TravelConsultantForm />;
}
