import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';

const STEPS = [
  { title: 'Choose a Course', text: 'Select a career-focused learning path' },
  { title: 'Learn & Practice', text: 'Build concepts through practical learning' },
  { title: 'Build Projects', text: 'Create work for your portfolio' },
  { title: 'Prepare', text: 'Resume, aptitude and mock interviews' },
  { title: 'Get Placed', text: 'Apply for relevant opportunities' },
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="process" aria-labelledby="process-title" className="py-20 md:py-28">
      <div className="container-x">
        <SectionHeading id="process-title" kicker="How It Works" title="Train. Practice. Get Placed." />

        <div ref={ref} className="relative">
          {/* Desktop connecting line */}
          <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-line lg:block">
            <motion.div className="h-full origin-left bg-gold" style={{ scaleX: progress }} />
          </div>
          {/* Mobile connecting line */}
          <div aria-hidden="true" className="absolute bottom-7 left-7 top-7 w-0.5 bg-line lg:hidden">
            <motion.div className="h-full w-full origin-top bg-gold" style={{ scaleY: progress }} />
          </div>

          <Stagger as="ol" stagger={0.12} className="relative grid gap-8 lg:grid-cols-5 lg:gap-4">
            {STEPS.map((step, i) => (
              <StaggerItem
                as="li"
                key={step.title}
                className="flex items-start gap-5 lg:flex-col lg:items-center lg:text-center"
              >
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold text-lg font-black text-navy-900 shadow-gold ring-8 ring-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-2 lg:pt-3">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <p className="mt-1 text-sm">{step.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
