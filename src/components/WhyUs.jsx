import { FiAward, FiLayers, FiTool, FiMic, FiUsers, FiRefreshCw } from 'react-icons/fi';
import Reveal, { Stagger, StaggerItem } from './ui/Reveal';

const REASONS = [
  { text: 'Practical, skill-focused learning', Icon: FiTool },
  { text: 'Training across in-demand technology domains', Icon: FiLayers },
  { text: 'Guidance to strengthen technical fundamentals', Icon: FiAward },
  { text: 'Interview preparation and career development', Icon: FiMic },
  { text: 'Support for learners at different stages of their journey', Icon: FiUsers },
  { text: 'A growth-focused environment that encourages continuous learning', Icon: FiRefreshCw },
];

export default function WhyUs() {
  return (
    <div className="mt-24">
      <Reveal className="mx-auto max-w-[680px] text-center">
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold">Why TECHZENZA?</h3>
        <p className="mt-3 text-lg">Because your career deserves more than just a course.</p>
      </Reveal>

      <Stagger as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map(({ text, Icon }, i) => (
          <StaggerItem as="li" key={text}>
            <div className="card group flex h-full items-start gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-card-hover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-xs font-extrabold tracking-[0.08em] text-gold-deep">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-0.5 font-semibold leading-snug text-navy-text">{text}</p>
            </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
