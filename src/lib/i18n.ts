export type Lang = 'en' | 'hi' | 'de' | 'es' | 'it';

export const LANGUAGES: { code: Lang; label: string; flag: string; native: string }[] = [
  { code: 'en', label: 'English',  flag: '🇬🇧', native: 'English' },
  { code: 'hi', label: 'Hindi',    flag: '🇮🇳', native: 'हिन्दी' },
  { code: 'de', label: 'German',   flag: '🇩🇪', native: 'Deutsch' },
  { code: 'es', label: 'Spanish',  flag: '🇪🇸', native: 'Español' },
  { code: 'it', label: 'Italian',  flag: '🇮🇹', native: 'Italiano' },
];

export const T = {
  nav: {
    bookRetreat: { en: 'Book Now', hi: 'रिट्रीट बुक करें', de: 'Retreat buchen', es: 'Reservar retiro', it: 'Prenota ritiro' },
    signIn:      { en: 'Sign In', hi: 'साइन इन', de: 'Anmelden', es: 'Iniciar sesión', it: 'Accedi' },
    signOut:     { en: 'Sign Out', hi: 'साइन आउट', de: 'Abmelden', es: 'Cerrar sesión', it: 'Esci' },
  },
  footer: {
    tagline:     { en: 'Immerse in astrology, Ayurveda, and meditation to explore the inner quest of life in Nepal.', hi: 'ज्योतिष, आयुर्वेद और ध्यान में डूबकर नेपाल में जीवन की आंतरिक खोज करें।', de: 'Tauchen Sie ein in Astrologie, Ayurveda und Meditation — Ihre innere Reise in Nepal.', es: 'Sumérgete en astrología, Ayurveda y meditación para explorar la búsqueda interior en Nepal.', it: 'Immergiti in astrologia, Ayurveda e meditazione per esplorare la ricerca interiore in Nepal.' },
    connect:     { en: 'Connect With Us', hi: 'हमसे जुड़ें', de: 'Kontakt', es: 'Conéctate con nosotros', it: 'Connettiti con noi' },
    retreats:    { en: 'Retreats', hi: 'रिट्रीट', de: 'Retreats', es: 'Retiros', it: 'Ritiri' },
    services:    { en: 'Services', hi: 'सेवाएं', de: 'Leistungen', es: 'Servicios', it: 'Servizi' },
    information: { en: 'Information', hi: 'जानकारी', de: 'Informationen', es: 'Información', it: 'Informazioni' },
    backToTop:   { en: 'Back to Top', hi: 'ऊपर जाएं', de: 'Nach oben', es: 'Volver arriba', it: 'Torna su' },
    copyright:   { en: '© 2025 Himalya Retreat Nepal. All rights reserved.', hi: '© 2025 हिमाल्या रिट्रीट नेपाल। सर्वाधिकार सुरक्षित।', de: '© 2025 Himalya Retreat Nepal. Alle Rechte vorbehalten.', es: '© 2025 Himalya Retreat Nepal. Todos los derechos reservados.', it: '© 2025 Himalya Retreat Nepal. Tutti i diritti riservati.' },
  },
  cta: {
    whatsapp:    { en: 'WhatsApp Us', hi: 'व्हाट्सएप करें', de: 'WhatsApp schreiben', es: 'Escríbenos por WhatsApp', it: 'Scrivici su WhatsApp' },
    bookNow:     { en: 'Book Now', hi: 'अभी बुक करें', de: 'Jetzt buchen', es: 'Reservar ahora', it: 'Prenota ora' },
    learnMore:   { en: 'Learn More', hi: 'और जानें', de: 'Mehr erfahren', es: 'Saber más', it: 'Scopri di più' },
    contact:     { en: 'Contact Us', hi: 'संपर्क करें', de: 'Kontaktieren Sie uns', es: 'Contáctanos', it: 'Contattaci' },
    viewAll:     { en: 'View All Programs', hi: 'सभी कार्यक्रम देखें', de: 'Alle Programme ansehen', es: 'Ver todos los programas', it: 'Vedi tutti i programmi' },
  },
  hero: {
    retreatTitle: { en: 'Spiritual Retreat in Nepal', hi: 'नेपाल में आध्यात्मिक रिट्रीट', de: 'Spirituelles Retreat in Nepal', es: 'Retiro espiritual en Nepal', it: 'Ritiro spirituale in Nepal' },
    astrologyTitle: { en: 'Vedic Astrology Nepal', hi: 'वैदिक ज्योतिष नेपाल', de: 'Vedische Astrologie Nepal', es: 'Astrología védica Nepal', it: 'Astrologia vedica Nepal' },
    ayurvedaTitle: { en: 'Ayurveda Nepal', hi: 'आयुर्वेद नेपाल', de: 'Ayurveda Nepal', es: 'Ayurveda Nepal', it: 'Ayurveda Nepal' },
  },
};

export function t(key: Record<Lang, string>, lang: Lang): string {
  return key[lang] || key.en;
}
