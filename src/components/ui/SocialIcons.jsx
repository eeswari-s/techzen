import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../../data/site';

export default function SocialIcons({ className = '', size = 'h-10 w-10', withWhatsApp = false }) {
  const items = [
    { href: SITE.social.linkedin, label: 'TECHZENZA on LinkedIn', Icon: FaLinkedinIn },
    { href: SITE.social.instagram, label: 'TECHZENZA on Instagram', Icon: FaInstagram },
  ];
  if (withWhatsApp) items.push({ href: SITE.whatsapp, label: 'Chat with TECHZENZA on WhatsApp', Icon: FaWhatsapp });

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`inline-flex ${size} items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
