import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import { TESTIMONIALS } from '../data/testimonials';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

const AUTOPLAY_MS = 6000;
const SWIPE_PX = 60;

const initials = (name) =>
  name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export default function Testimonials() {
  const [[index, dir], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const total = TESTIMONIALS.length;

  const go = useCallback(
    (step) => setState(([i]) => [(i + step + total) % total, step]),
    [total]
  );
  const goTo = (i) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  useEffect(() => {
    if (paused || reduce) return undefined;
    const t = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, reduce, go]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const t = TESTIMONIALS[index];
  const offset = reduce ? 0 : 60;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="testimonials-title" kicker="Student Success" title="What our learners say" />

        <Reveal
          className="mx-auto max-w-[820px]"
          role="region"
          aria-roledescription="carousel"
          aria-label="Learner testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="card relative overflow-hidden px-6 py-10 sm:px-12 sm:py-12">
            <FaQuoteRight aria-hidden="true" className="absolute right-6 top-6 h-14 w-14 text-gold-soft sm:h-20 sm:w-20" />
            <div className="relative min-h-[230px] sm:min-h-[200px]" aria-live={paused ? 'polite' : 'off'}>
              <AnimatePresence mode="wait" custom={dir} initial={false}>
                <motion.figure
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * offset }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -dir * offset }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  drag={reduce ? false : 'x'}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_PX) go(1);
                    else if (info.offset.x > SWIPE_PX) go(-1);
                  }}
                  className="cursor-grab select-none active:cursor-grabbing"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${total}`}
                >
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars" role="img">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar key={i} className="h-5 w-5" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-5 text-[clamp(1.15rem,2.2vw,1.45rem)] font-semibold leading-relaxed text-navy-text">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-7 flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-base font-black text-navy-900"
                    >
                      {initials(t.name)}
                    </span>
                    <span>
                      <span className="block font-bold text-navy-text">{t.name}</span>
                      <span className="block text-sm text-muted">{t.course}</span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy-text transition hover:border-gold hover:bg-gold"
            >
              <FiChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex items-center">
              {TESTIMONIALS.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index ? 'true' : undefined}
                  className="focus-ring flex h-11 w-8 items-center justify-center rounded-full"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all duration-300 ${
                      i === index ? 'w-6 bg-gold' : 'w-2.5 bg-line'
                    }`}
                  />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy-text transition hover:border-gold hover:bg-gold"
            >
              <FiChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
