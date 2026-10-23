import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { SITE } from '../data/site';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const CHECKLIST = [
  'Resume & LinkedIn guidance',
  'Technical interview preparation',
  'Mock interviews & assessments',
  'Communication & aptitude practice',
  'Career counselling',
  'Placement opportunity updates',
  'Role-based learning paths',
];

const STATS = [
  { prefix: '', value: 8, suffix: '+', label: 'Career Tracks' },
  { prefix: '', value: 100, suffix: '%', label: 'Practical Learning' },
  { prefix: '1:', value: 1, suffix: '', label: 'Career Guidance' },
];

function Counter({ prefix, value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return undefined;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

export default function Placement() {
  return (
    <section id="placement" aria-labelledby="placement-title" className="bg-surface py-20 md:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <span className="kicker">Placement &amp; Career Guidance</span>
            <h2 id="placement-title" className="h2 mt-4">
              Prepare with confidence for your next opportunity
            </h2>
            <p className="mt-4 text-base md:text-lg">
              From your first line of code to your first interview, TECHZENZA supports you at every step of your
              career preparation.
            </p>
          </Reveal>

          <motion.ul
            className="mt-8 grid gap-3 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {CHECKLIST.map((item) => (
              <motion.li
                key={item}
                variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
                className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3.5 font-semibold text-navy-text"
              >
                <motion.span
                  variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { type: 'spring', stiffness: 500, damping: 18 } } }}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-navy-900"
                >
                  <FiCheck className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </motion.span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal delay={0.15} className="relative overflow-hidden rounded-card bg-hero-gradient p-8 text-white shadow-card-hover md:p-10">
          <span
            aria-hidden="true"
            className="absolute -top-1/3 right-1/4 h-[170%] w-[2px] rotate-[-35deg] bg-gradient-to-b from-transparent via-gold/35 to-transparent"
          />
          <div aria-hidden="true" className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
          <p className="relative text-xs font-extrabold uppercase tracking-[0.08em] text-gold">Career readiness</p>
          <dl className="relative mt-6 divide-y divide-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-4 py-5 first:pt-0">
                <dt className="text-base font-semibold text-sky-soft md:text-lg">{s.label}</dt>
                <dd className="text-[clamp(2.2rem,4vw,3rem)] font-black leading-none text-gold">
                  <Counter {...s} />
                </dd>
              </div>
            ))}
          </dl>
          <Button href={SITE.enquiryForm} external arrow className="relative mt-6 w-full sm:w-auto">
            Enquire Now
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
