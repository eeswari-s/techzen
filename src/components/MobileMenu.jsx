import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { NAV_LINKS, SITE } from '../data/site';
import Button from './ui/Button';
import Logo from './ui/Logo';
import SocialIcons from './ui/SocialIcons';

export default function MobileMenu({ open, onClose, active }) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => panelRef.current?.querySelector('button')?.focus(), 50);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Portalled to <body>: the header's backdrop-filter would otherwise contain fixed children.
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[60] bg-navy-950/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-[70] flex h-[100dvh] w-[86%] max-w-sm flex-col overflow-y-auto bg-hero-gradient p-6 shadow-2xl lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between">
              <Logo className="h-12 w-auto" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10"
              >
                <FiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="mt-10"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              <ul className="space-y-1">
                {NAV_LINKS.map((link) => (
                  <motion.li key={link.id} variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}>
                    <a
                      href={`#${link.id}`}
                      onClick={onClose}
                      className={`focus-ring flex min-h-[52px] items-center rounded-xl px-4 text-xl font-bold transition ${
                        active === link.id ? 'bg-white/10 text-gold' : 'text-white hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>

            <div className="mt-auto space-y-5 pt-8">
              <Button href={SITE.enquiryForm} external arrow className="w-full">
                Enquire Now
              </Button>
              <div className="flex items-center justify-between gap-3">
                <a href={`tel:${SITE.phone}`} className="text-sm font-semibold text-sky-soft hover:text-white">
                  {SITE.phoneDisplay}
                </a>
                <SocialIcons size="h-11 w-11" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
