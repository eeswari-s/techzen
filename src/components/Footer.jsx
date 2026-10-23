import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { NAV_LINKS, SITE } from '../data/site';
import { COURSES } from '../data/courses';
import Logo from './ui/Logo';
import SocialIcons from './ui/SocialIcons';

const linkCls = 'focus-ring rounded text-sky-soft transition-colors hover:text-gold';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-sky-soft">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
        <div>
          <Logo className="h-20 w-auto" />
          <p className="mt-4 font-bold text-gold">{SITE.slogan}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            Industry-oriented IT training, practical learning and career guidance in Chennai.
          </p>
          <SocialIcons withWhatsApp className="mt-6" size="h-11 w-11" />
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] !text-white">Quick Links</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className={linkCls}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={SITE.enquiryForm} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Enquire Now
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Footer courses">
          <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] !text-white">Courses</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {COURSES.map((c) => (
              <li key={c.id}>
                <a href="#courses" className={linkCls}>
                  {c.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-extrabold uppercase tracking-[0.08em] !text-white">Contact</h2>
          <ul className="mt-5 space-y-3.5 text-sm">
            <li className="flex items-center gap-3">
              <FiPhone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`tel:${SITE.phone}`} className={linkCls}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FiMail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className={linkCls}>
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{SITE.shortAddress}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-center text-xs sm:text-sm md:flex-row md:text-left">
          <p>
            &copy; {year} {SITE.fullName}. All rights reserved.
          </p>
          <p className="font-semibold text-gold">{SITE.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
