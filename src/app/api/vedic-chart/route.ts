import { NextRequest, NextResponse } from 'next/server';
import { computeVedicChart, type VedicChartInput } from '@/lib/vedic/chart';

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<VedicChartInput>;

    if (!body.birthDate || !body.birthTime || !body.tzOffset) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const lat = Number(body.lat);
    const lon = Number(body.lon);
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
      return NextResponse.json({ error: 'Invalid latitude/longitude.' }, { status: 400 });
    }

    const result = computeVedicChart({
      birthDate: body.birthDate,
      birthTime: body.birthTime,
      tzOffset: body.tzOffset,
      lat,
      lon,
      name: body.name,
    });

    const res = NextResponse.json(result, { status: 200 });

    // Cache at the edge (helps repeat requests / bots). Safe because this is a stateless calculation.
    res.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    return res;
  } catch (e) {
    return NextResponse.json({ error: 'Failed to generate chart.' }, { status: 500 });
  }
}
