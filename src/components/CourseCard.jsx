import { useEffect, useState } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { SITE } from '../data/site';
import SmartImage from './ui/SmartImage';

const MAX_TILT = 6;

function useCanTilt() {
  const reduce = useReducedMotion();
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return fine && !reduce;
}

export default function CourseCard({ course, index }) {
  const { title, description, tools, image, icon: Icon } = course;
  const canTilt = useCanTilt();
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    if (!canTilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * MAX_TILT * 2);
    rx.set(-py * MAX_TILT * 2);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const number = String(index + 1).padStart(2, '0');
  const headingId = `course-${course.id}`;

  return (
    <div className="h-full [perspective:1000px]">
      <motion.div
        className="h-full"
        style={canTilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <article
          aria-labelledby={headingId}
          className="card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:shadow-card-hover md:hover:-translate-y-2"
        >
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 z-20 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100"
          />

          {/* Full poster, never cropped: box matches the 16:9 poster ratio and uses object-contain */}
          <SmartImage
            src={image}
            alt={`${title} course in Chennai – TECHZENZA`}
            icon={Icon}
            width="1200"
            height="674"
            className="aspect-[16/9] bg-navy-900"
            imgClassName="!object-contain transition duration-500 group-hover:brightness-110"
          />

          <div className="flex flex-1 flex-col p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-navy-900 shadow-gold">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-navy-900 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-gold">
                Course {number}
              </span>
            </div>
            <h3 id={headingId} className="text-lg font-bold leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Tools covered in ${title}`}>
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-semibold text-navy-text"
                >
                  {tool}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <a
                href={SITE.enquiryForm}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Enquire now about ${title}`}
                className="btn btn-gold shine group/btn w-full !py-3 text-sm focus-visible:ring-offset-white"
              >
                Enquire Now
                <FiArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted">
                <FiCheckCircle className="h-4 w-4 text-gold-deep" aria-hidden="true" />
                Placement support included
              </p>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
}
