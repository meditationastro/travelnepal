'use client';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phone = '9779851187267';
  const href = `https://wa.me/${phone}?text=${encodeURIComponent('Namaste! I have a question about Himalya Retreat Nepal.')}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed z-50 bottom-5 right-5 shadow-xl rounded-full flex items-center justify-center transition-transform hover:scale-105"
      style={{ background: '#25D366', width: 52, height: 52 }}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  );
}
