export type CityOption = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  /** IANA timezone string (preferred) */
  tz: string;
  /** UTC offset in minutes, used as fallback */
  offsetMinutes?: number;
};

export const cities: CityOption[] = [
  { name: "Kathmandu", country: "Nepal", lat: 27.7172, lon: 85.3240, tz: "Asia/Kathmandu", offsetMinutes: 345 },
  { name: "Pokhara", country: "Nepal", lat: 28.2096, lon: 83.9856, tz: "Asia/Kathmandu", offsetMinutes: 345 },
  { name: "Lumbini", country: "Nepal", lat: 27.4844, lon: 83.2760, tz: "Asia/Kathmandu", offsetMinutes: 345 },
  { name: "Chitwan (Sauraha)", country: "Nepal", lat: 27.5800, lon: 84.5070, tz: "Asia/Kathmandu", offsetMinutes: 345 },
  { name: "Everest (Lukla)", country: "Nepal", lat: 27.6878, lon: 86.7314, tz: "Asia/Kathmandu", offsetMinutes: 345 },
  { name: "Delhi", country: "India", lat: 28.6139, lon: 77.2090, tz: "Asia/Kolkata", offsetMinutes: 330 },
  { name: "Mumbai", country: "India", lat: 19.0760, lon: 72.8777, tz: "Asia/Kolkata", offsetMinutes: 330 },
  { name: "Bangkok", country: "Thailand", lat: 13.7563, lon: 100.5018, tz: "Asia/Bangkok", offsetMinutes: 420 },
  { name: "Singapore", country: "Singapore", lat: 1.3521, lon: 103.8198, tz: "Asia/Singapore", offsetMinutes: 480 },
  { name: "Dubai", country: "UAE", lat: 25.2048, lon: 55.2708, tz: "Asia/Dubai", offsetMinutes: 240 },
  { name: "London", country: "UK", lat: 51.5074, lon: -0.1278, tz: "Europe/London" },
  { name: "New York", country: "USA", lat: 40.7128, lon: -74.0060, tz: "America/New_York" },
  { name: "Los Angeles", country: "USA", lat: 34.0522, lon: -118.2437, tz: "America/Los_Angeles" },
  { name: "Sydney", country: "Australia", lat: -33.8688, lon: 151.2093, tz: "Australia/Sydney" },
];

export function formatCityLabel(c: CityOption) {
  return `${c.name}, ${c.country}`;
}
