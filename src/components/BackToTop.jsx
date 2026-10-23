import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import useScrolled from '../hooks/useScrolled';

export default function BackToTop() {
  const show = useScrolled(600);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="fixed bottom-[88px] right-[22px] z-40 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold shadow-card-hover ring-1 ring-white/10 hover:bg-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold md:bottom-[104px] md:right-[30px]"
        >
          <FiArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
