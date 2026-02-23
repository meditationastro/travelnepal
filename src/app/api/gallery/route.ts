import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SEED_IMAGES = [
  { emoji: '🏔️', title: 'Himalayan Sunrise', category: 'Landscape', caption: 'The sacred peaks of the Himalayas at dawn, as seen from our meditation hall in Khumaltar, Lalitpur', sortOrder: 1 },
  { emoji: '🧘', title: 'Morning Meditation', category: 'Meditation', caption: 'Students in morning Vipassana practice, surrounded by the stillness of the Himalayan dawn', sortOrder: 2 },
  { emoji: '⭐', title: 'Birth Chart Reading', category: 'Astrology', caption: 'A traditional Vedic astrology consultation, chart drawn on handmade paper using ancient methods', sortOrder: 3 },
  { emoji: '🌿', title: 'Ayurvedic Herbs', category: 'Ayurveda', caption: 'Fresh Himalayan herbs prepared for Panchakarma — ashwagandha, brahmi, and neem', sortOrder: 4 },
  { emoji: '🔔', title: 'Singing Bowls Ceremony', category: 'Meditation', caption: 'Sound healing with Tibetan singing bowls conducted by our senior meditation master', sortOrder: 5 },
  { emoji: '🕌', title: 'Pashupatinath Temple', category: 'Sacred Sites', caption: 'The ancient Pashupatinath temple complex — a pilgrimage site we visit during retreat', sortOrder: 6 },
  { emoji: '🌸', title: 'Retreat Garden', category: 'Center', caption: 'Our meditation garden with prayer flags and lotus pond at Khumaltar, Lalitpur', sortOrder: 7 },
  { emoji: '🎋', title: 'Yoga at Sunrise', category: 'Meditation', caption: 'Sunrise yoga and pranayama on the rooftop terrace overlooking the Lalitpur valley', sortOrder: 8 },
  { emoji: '📿', title: 'Mala Blessing Ceremony', category: 'Ceremony', caption: 'Sacred mala blessing ritual before the 108-bead meditation practice', sortOrder: 9 },
];

async function ensureSeeded() {
  try {
    const count = await prisma.galleryImage.count();
    if (count === 0) {
      await prisma.galleryImage.createMany({ data: SEED_IMAGES });
    }
  } catch {
    // DB may not be ready yet — gallery falls back gracefully
  }
}

export async function GET() {
  try {
    await ensureSeeded();
    const images = await prisma.galleryImage.findMany({
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
    });
    // Keep backward compatibility with older rows that used `imageUrl` instead of `src`.
    const normalized = images.map((img) => ({
      ...img,
      src: img.src ?? img.imageUrl ?? null,
    }));
    return NextResponse.json(normalized);
  } catch {
    // Return seed data as fallback if DB unavailable
    return NextResponse.json(SEED_IMAGES.map((img, i) => ({ id: String(i + 1), src: null, ...img, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() })));
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const image = await prisma.galleryImage.create({
      data: {
        src: body.src || null,
        imageUrl: body.src || null,
        emoji: body.emoji || '🖼️',
        title: body.title || 'Untitled',
        category: body.category || 'General',
        caption: body.caption || '',
        sortOrder: 0,
      },
    });
    return NextResponse.json(image, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to create' }, { status: 500 });
  }
}
