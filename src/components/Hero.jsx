import { motion, useReducedMotion } from 'framer-motion';
import { FaJava, FaReact, FaPython, FaAws, FaWhatsapp } from 'react-icons/fa';
import { SiSelenium } from 'react-icons/si';
import { TbChartBar } from 'react-icons/tb';
import { FiMapPin } from 'react-icons/fi';
import { SITE } from '../data/site';
import Button from './ui/Button';
import Logo from './ui/Logo';

const BADGES = [
  { label: 'Java', Icon: FaJava, pos: 'left-0 top-4 sm:-left-6', delay: '0s', mobile: true },
  { label: 'React', Icon: FaReact, pos: 'right-0 top-0 sm:-right-4', delay: '1.2s', mobile: true },
  { label: 'Python', Icon: FaPython, pos: '-left-10 top-1/2', delay: '0.6s' },
  { label: 'AWS', Icon: FaAws, pos: '-right-10 top-[45%]', delay: '1.8s' },
  { label: 'Selenium', Icon: SiSelenium, pos: 'left-2 bottom-0 sm:-left-2', delay: '2.4s', mobile: true },
  { label: 'Power BI', Icon: TbChartBar, pos: 'right-2 -bottom-4 sm:right-0', delay: '0.9s' },
];

// Positions of the thin rotated gold stripes (signature detail).
const STRIPES = ['8%', '22%', '58%', '74%', '90%'];

export default function Hero({ ready }) {
  const reduce = useReducedMotion();
  const y = reduce ? 0 : 24;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-hero-gradient pb-28 pt-14 text-white md:pb-36 md:pt-20 lg:pt-24"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {STRIPES.map((left, i) => (
          <span
            key={left}
            className="absolute -top-1/3 h-[170%] w-[2px] animate-stripe-move bg-gradient-to-b from-transparent via-gold/30 to-transparent"
            style={{ left, animationDelay: `${i * -2.5}s`, transform: 'rotate(-35deg)' }}
          />
        ))}
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl motion-safe:animate-float-slow" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl motion-safe:animate-float" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div variants={container} initial="hidden" animate={ready ? 'show' : 'hidden'}>
          <motion.span variants={item} className="kicker">
            LEARN • PRACTICE • GROW • GET PLACED
          </motion.span>

          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.08] tracking-tight !text-white"
          >
            <motion.span variants={item} className="block">
              Build skills.
            </motion.span>
            <motion.span variants={item} className="relative inline-block text-gold">
              Build your future.
              <motion.span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-[5px] w-full origin-left rounded-full bg-gold/70"
                initial={{ scaleX: 0 }}
                animate={ready ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-6 max-w-[580px] text-base leading-relaxed text-sky-soft md:text-lg">
            Industry-oriented IT training, practical learning, interview preparation and career guidance from
            TECHZENZA Technology &amp; Skill Development Academy, Chennai.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button href="#courses" arrow>
              Explore Courses
            </Button>
            <Button href={SITE.enquiryForm} external variant="white">
              Enquire Now
            </Button>
            <Button href={SITE.whatsapp} external variant="outline" icon={FaWhatsapp}>
              WhatsApp
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating brand card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.96 }}
          animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px] px-6 py-8 sm:max-w-[400px] sm:px-10"
        >
          <div className="glass relative p-8 text-center shadow-[0_30px_60px_rgba(0,0,0,0.3)] motion-safe:animate-float-slow">
            <Logo className="mx-auto h-auto w-full max-w-[260px] rounded-xl" textFallback={false} />
            <p className="mt-6 text-xl font-extrabold leading-snug text-white">
              Technology &amp; Skill Development Academy
            </p>
            <p className="mt-2 text-sm font-semibold text-gold">Skills Today • A Brighter Tomorrow</p>
            <p className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm text-sky-soft">
              <FiMapPin className="h-4 w-4 text-gold" aria-hidden="true" /> Chennai
            </p>
          </div>

          {BADGES.map(({ label, Icon, pos, delay, mobile }) => (
            <span
              key={label}
              aria-hidden="true"
              className={`absolute ${pos} ${mobile ? 'flex' : 'hidden sm:flex'} items-center gap-1.5 rounded-full border border-white/15 bg-navy-900/80 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur motion-safe:animate-float`}
              style={{ animationDelay: delay }}
            >
              <Icon className="h-4 w-4 text-gold" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
