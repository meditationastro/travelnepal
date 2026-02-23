export type CityOption = {
  /** Display label (kept for backwards-compat with earlier UI code) */
  label: string;
  name: string;
  country: string;
  lat: number;
  lon: number;
  /** IANA timezone string (preferred) */
  tz: string;
  /** Fixed UTC offset string used by the chart tool UI (e.g. +05:45) */
  tzOffset: string;
  /** UTC offset in minutes, used as fallback */
  offsetMinutes?: number;
};

export const cities: CityOption[] = [
  { label: "Kathmandu", name: "Kathmandu", country: "Nepal", lat: 27.7172, lon: 85.324, tz: "Asia/Kathmandu", tzOffset: "+05:45", offsetMinutes: 345 },
  { label: "Pokhara", name: "Pokhara", country: "Nepal", lat: 28.2096, lon: 83.9856, tz: "Asia/Kathmandu", tzOffset: "+05:45", offsetMinutes: 345 },
  { label: "Lumbini", name: "Lumbini", country: "Nepal", lat: 27.4844, lon: 83.276, tz: "Asia/Kathmandu", tzOffset: "+05:45", offsetMinutes: 345 },
  { label: "Chitwan (Sauraha)", name: "Chitwan (Sauraha)", country: "Nepal", lat: 27.58, lon: 84.507, tz: "Asia/Kathmandu", tzOffset: "+05:45", offsetMinutes: 345 },
  { label: "Everest (Lukla)", name: "Everest (Lukla)", country: "Nepal", lat: 27.6878, lon: 86.7314, tz: "Asia/Kathmandu", tzOffset: "+05:45", offsetMinutes: 345 },
  { label: "Delhi", name: "Delhi", country: "India", lat: 28.6139, lon: 77.209, tz: "Asia/Kolkata", tzOffset: "+05:30", offsetMinutes: 330 },
  { label: "Mumbai", name: "Mumbai", country: "India", lat: 19.076, lon: 72.8777, tz: "Asia/Kolkata", tzOffset: "+05:30", offsetMinutes: 330 },
  { label: "Bangkok", name: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018, tz: "Asia/Bangkok", tzOffset: "+07:00", offsetMinutes: 420 },
  { label: "Singapore", name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore", tzOffset: "+08:00", offsetMinutes: 480 },
  { label: "Dubai", name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai", tzOffset: "+04:00", offsetMinutes: 240 },
  // Note: offsets below are fixed defaults (DST not accounted for) — suitable for a quick preview tool.
  { label: "London", name: "London", country: "UK", lat: 51.5074, lon: -0.1278, tz: "Europe/London", tzOffset: "+00:00" },
  { label: "New York", name: "New York", country: "USA", lat: 40.7128, lon: -74.006, tz: "America/New_York", tzOffset: "-05:00" },
  { label: "Los Angeles", name: "Los Angeles", country: "USA", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles", tzOffset: "-08:00" },
  { label: "Sydney", name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney", tzOffset: "+10:00" },
];

export function formatCityLabel(c: CityOption) {
  return `${c.name}, ${c.country}`;
}
