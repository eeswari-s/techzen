import { AnimatePresence, motion } from 'framer-motion';
import Logo from './ui/Logo';

export default function Preloader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-hero-gradient"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45 } }}
          role="status"
          aria-label="Loading TECHZENZA"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Logo className="h-28 w-auto sm:h-36" />
          </motion.div>
          <div className="h-1 w-44 overflow-hidden rounded-full bg-white/15">
            <div className="h-full origin-left animate-loadbar rounded-full bg-gold" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
