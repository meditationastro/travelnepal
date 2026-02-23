export type Sign = { name: string; emoji: string; element: string; keywords: string };

export const SIGNS: Sign[] = [
  { name: 'Aries', emoji: '♈', element: 'Fire', keywords: 'initiative, courage, directness' },
  { name: 'Taurus', emoji: '♉', element: 'Earth', keywords: 'stability, comfort, patience' },
  { name: 'Gemini', emoji: '♊', element: 'Air', keywords: 'curiosity, learning, communication' },
  { name: 'Cancer', emoji: '♋', element: 'Water', keywords: 'care, sensitivity, belonging' },
  { name: 'Leo', emoji: '♌', element: 'Fire', keywords: 'leadership, creativity, confidence' },
  { name: 'Virgo', emoji: '♍', element: 'Earth', keywords: 'service, detail, refinement' },
  { name: 'Libra', emoji: '♎', element: 'Air', keywords: 'balance, relationships, harmony' },
  { name: 'Scorpio', emoji: '♏', element: 'Water', keywords: 'depth, transformation, focus' },
  { name: 'Sagittarius', emoji: '♐', element: 'Fire', keywords: 'truth, growth, travel' },
  { name: 'Capricorn', emoji: '♑', element: 'Earth', keywords: 'discipline, legacy, structure' },
  { name: 'Aquarius', emoji: '♒', element: 'Air', keywords: 'vision, community, innovation' },
  { name: 'Pisces', emoji: '♓', element: 'Water', keywords: 'intuition, compassion, surrender' },
];

export const NAKSHATRAS = [
  'Ashwini','Bharani','Krittika','Rohini','Mrigashirsha','Ardra','Punarvasu','Pushya','Ashlesha',
  'Magha','Purva Phalguni','Uttara Phalguni','Hasta','Chitra','Swati','Vishakha','Anuradha','Jyeshtha',
  'Mula','Purva Ashadha','Uttara Ashadha','Shravana','Dhanishta','Shatabhisha','Purva Bhadrapada','Uttara Bhadrapada','Revati'
] as const;

function toRad(d: number) { return (d * Math.PI) / 180; }
function toDeg(r: number) { return (r * 180) / Math.PI; }
function norm360(d: number) {
  let x = d % 360;
  if (x < 0) x += 360;
  return x;
}

function julianDay(date: Date) {
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const D = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes() / 60 + date.getUTCSeconds() / 3600) / 24;
  let Y = y;
  let M = m;
  if (M <= 2) { Y -= 1; M += 12; }
  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + D + B - 1524.5;
}

function lahiriAyanamshaApprox(date: Date) {
  const y = date.getUTCFullYear() + (date.getUTCMonth()) / 12;
  return 23.85 + 0.01397 * (y - 2000);
}

function sunTropicalLongitude(date: Date) {
  const jd = julianDay(date);
  const n = jd - 2451545.0;
  const L = norm360(280.460 + 0.9856474 * n);
  const g = norm360(357.528 + 0.9856003 * n);
  const lambda = L + 1.915 * Math.sin(toRad(g)) + 0.02 * Math.sin(toRad(2 * g));
  return norm360(lambda);
}

function moonTropicalLongitude(date: Date) {
  const jd = julianDay(date);
  const T = (jd - 2451545.0) / 36525;
  const L0 = norm360(218.3164477 + 481267.88123421 * T);
  const M = norm360(357.5291092 + 35999.0502909 * T);
  const Mm = norm360(134.9633964 + 477198.8675055 * T);
  const D = norm360(297.8501921 + 445267.1114034 * T);
  const lon = L0
    + 6.289 * Math.sin(toRad(Mm))
    + 1.274 * Math.sin(toRad(2 * D - Mm))
    + 0.658 * Math.sin(toRad(2 * D))
    + 0.214 * Math.sin(toRad(2 * Mm))
    + 0.11 * Math.sin(toRad(D))
    - 0.186 * Math.sin(toRad(M));
  return norm360(lon);
}

function gmstDegrees(date: Date) {
  const jd = julianDay(date);
  const T = (jd - 2451545.0) / 36525;
  const gmst = 280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - (T * T * T) / 38710000;
  return norm360(gmst);
}

function ascendantTropicalLongitude(date: Date, latDeg: number, lonDeg: number) {
  const eps = toRad(23.439291);
  const lst = toRad(norm360(gmstDegrees(date) + lonDeg));
  const lat = toRad(latDeg);
  const asc = Math.atan2(
    Math.sin(lst),
    Math.cos(lst) * Math.cos(eps) - Math.tan(lat) * Math.sin(eps)
  );
  return norm360(toDeg(asc));
}

function signFromLon(lon: number) {
  const idx = Math.floor(norm360(lon) / 30);
  const degIn = norm360(lon) - idx * 30;
  return { sign: SIGNS[idx], degIn: Number(degIn.toFixed(2)) };
}

function nakshatraFromLon(moonSiderealLon: number) {
  const seg = 360 / 27;
  const idx = Math.floor(norm360(moonSiderealLon) / seg);
  const degIn = norm360(moonSiderealLon) - idx * seg;
  return { name: NAKSHATRAS[idx], degIn: Number(degIn.toFixed(2)) };
}

export type VedicChartInput = {
  birthDate: string; // YYYY-MM-DD
  birthTime: string; // HH:mm
  tzOffset: string; // +05:45
  lat: number;
  lon: number;
  name?: string;
};

export type VedicChartResult = {
  utcISO: string;
  ayanamsha: number;
  sun: { sign: Sign; degIn: number };
  moon: { sign: Sign; degIn: number };
  asc: { sign: Sign; degIn: number };
  nakshatra: { name: string; degIn: number };
  rashiChart: { house: number; sign: Sign }[]; // 1..12
  predictions: { title: string; text: string; emoji: string }[];
  summary: string[];
};

export function computeVedicChart(input: VedicChartInput): VedicChartResult {
  const { birthDate, birthTime, tzOffset, lat, lon } = input;
  const [yy, mm, dd] = birthDate.split('-').map(Number);
  const [hh, mi] = birthTime.split(':').map(Number);

  const m = tzOffset.match(/^([+-])(\d{2}):(\d{2})$/);
  const sgn = m?.[1] === '-' ? -1 : 1;
  const oh = m ? Number(m[2]) : 0;
  const om = m ? Number(m[3]) : 0;
  const offsetMinutes = sgn * (oh * 60 + om);

  const local = new Date(Date.UTC(yy, mm - 1, dd, hh, mi, 0));
  const utc = new Date(local.getTime() - offsetMinutes * 60 * 1000);

  const ayan = lahiriAyanamshaApprox(utc);
  const sunSid = norm360(sunTropicalLongitude(utc) - ayan);
  const moonSid = norm360(moonTropicalLongitude(utc) - ayan);
  const ascSid = norm360(ascendantTropicalLongitude(utc, lat, lon) - ayan);

  const sun = signFromLon(sunSid);
  const moon = signFromLon(moonSid);
  const asc = signFromLon(ascSid);
  const nak = nakshatraFromLon(moonSid);

  // Rashi chart: house 1 is asc sign, then sequential.
  const ascIdx = SIGNS.findIndex(s => s.name === asc.sign.name);
  const rashiChart = Array.from({ length: 12 }).map((_, i) => ({
    house: i + 1,
    sign: SIGNS[(ascIdx + i) % 12],
  }));

  const predictions = [
    {
      title: 'Career & Purpose',
      emoji: '🧭',
      text: `With ${sun.sign.name} Sun and ${asc.sign.name} rising, your growth comes through ${sun.sign.keywords}. Choose work that honors your natural rhythm and responsibility.`,
    },
    {
      title: 'Relationships',
      emoji: '💞',
      text: `Your Moon in ${moon.sign.name} seeks ${moon.sign.keywords}. Prioritize emotional safety and clear communication—your partnerships flourish when you feel seen.`,
    },
    {
      title: 'Spiritual Path',
      emoji: '🕉️',
      text: `Nakshatra ${nak.name} suggests your meditation “entry point” is consistency + inner listening. Small daily practice creates the biggest shifts for you.`,
    },
  ];

  const summary = [
    `${asc.sign.name} rising gives your outer style: ${asc.sign.keywords}.`,
    `Sun in ${sun.sign.name} shows your core drive: ${sun.sign.keywords}.`,
    `Moon in ${moon.sign.name} shows emotional needs: ${moon.sign.keywords}.`,
    `Moon nakshatra: ${nak.name}.`,
  ];

  return {
    utcISO: utc.toISOString(),
    ayanamsha: Number(ayan.toFixed(4)),
    sun,
    moon,
    asc,
    nakshatra: nak,
    rashiChart,
    predictions,
    summary,
  };
}
