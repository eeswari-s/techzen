import { useMemo, useState } from 'react';
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion';
import { COURSES, COURSE_CATEGORIES } from '../data/courses';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import CourseCard from './CourseCard';
import CourseCTA from './CourseCTA';

export default function Courses() {
  const [filter, setFilter] = useState('All');
  const reduce = useReducedMotion();

  const visible = useMemo(
    () => (filter === 'All' ? COURSES : COURSES.filter((c) => c.category === filter)),
    [filter]
  );

  return (
    <section id="courses" aria-labelledby="courses-title" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          id="courses-title"
          kicker="Our Courses"
          title="Learn the skills companies look for"
          subtitle="Career-focused IT courses in Chennai, with the technologies and tools covered in each learning path."
        />

        <Reveal className="mb-10 flex justify-center">
          <LayoutGroup id="course-filter">
            <div
              role="group"
              aria-label="Filter courses by category"
              className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-white p-1.5 shadow-card"
            >
              {COURSE_CATEGORIES.map((cat) => {
                const active = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(cat)}
                    className={`focus-ring relative min-h-[44px] shrink-0 whitespace-nowrap rounded-full px-4 text-sm font-bold transition-colors sm:px-5 ${
                      active ? 'text-navy-900' : 'text-muted hover:text-navy-text'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="filter-pill"
                        className="absolute inset-0 rounded-full bg-gold shadow-gold"
                        transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{cat}</span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <motion.ul layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((course) => (
              <motion.li
                key={course.id}
                layout={!reduce}
                initial={{ opacity: 0, scale: reduce ? 1 : 0.94, y: reduce ? 0 : 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <CourseCard course={course} index={COURSES.indexOf(course)} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <CourseCTA />
      </div>
    </section>
  );
}
