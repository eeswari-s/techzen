import { FiBriefcase, FiCode, FiCompass, FiTrendingUp } from 'react-icons/fi';
import { Stagger, StaggerItem } from './ui/Reveal';

const FEATURES = [
  { title: 'Industry Skills', text: 'Practical, job-oriented learning', Icon: FiTrendingUp },
  { title: 'Live Practice', text: 'Projects and assessments', Icon: FiCode },
  { title: 'Career Guidance', text: 'Resume & interview support', Icon: FiCompass },
  { title: 'Placement Support', text: 'Opportunities and preparation', Icon: FiBriefcase },
];

export default function FeatureStrip() {
  return (
    <div className="container-x relative z-10 -mt-16 md:-mt-20">
      <Stagger className="card grid grid-cols-1 divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
        {FEATURES.map(({ title, text, Icon }) => (
          <StaggerItem key={title} className="group flex items-start gap-4 p-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-soft text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-900">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="text-base font-bold text-navy-text">{title}</p>
              <p className="mt-1 text-sm text-muted">{text}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
