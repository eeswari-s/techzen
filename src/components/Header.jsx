import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS, SECTION_IDS, SITE } from '../data/site';
import useScrolled from '../hooks/useScrolled';
import useScrollSpy from '../hooks/useScrollSpy';
import Logo from './ui/Logo';
import Button from './ui/Button';
import SocialIcons from './ui/SocialIcons';
import MobileMenu from './MobileMenu';

// "process" and "testimonials" have no nav item; map them to their nearest link.
const SPY_TO_NAV = { process: 'courses', testimonials: 'placement' };

export default function Header() {
  const scrolled = useScrolled(40);
  const spy = useScrollSpy(SECTION_IDS);
  const active = SPY_TO_NAV[spy] || spy;
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`sticky top-0 z-50 bg-navy-900/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.35)]' : 'shadow-none'
      }`}
    >
      <div
        className={`container-x flex items-center justify-between gap-4 transition-[height] duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <a href="#home" className="focus-ring rounded-lg" aria-label="TECHZENZA home">
          <Logo className={`w-auto transition-all duration-300 ${scrolled ? 'h-11' : 'h-14'}`} />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`focus-ring relative rounded-full px-4 py-2.5 text-[15px] font-semibold transition-colors ${
                      isActive ? 'text-gold' : 'text-sky-soft hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <SocialIcons />
          <Button href={SITE.enquiryForm} external>
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring relative inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
              open ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded bg-current transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 rounded bg-current transition-transform duration-300 ${
              open ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </button>
      </div>

      <MobileMenu open={open} onClose={close} active={active} />
    </header>
  );
}
