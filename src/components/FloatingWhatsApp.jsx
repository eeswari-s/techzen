import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TECHZENZA on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_25px_rgba(32,198,107,0.4)] transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 md:bottom-7 md:right-7"
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-whatsapp motion-safe:animate-pulse-ring" />
      <FaWhatsapp className="relative h-7 w-7" aria-hidden="true" />
    </a>
  );
}
