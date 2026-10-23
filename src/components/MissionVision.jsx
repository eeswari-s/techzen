import { FiEye, FiTarget } from 'react-icons/fi';
import Reveal, { Stagger, StaggerItem } from './ui/Reveal';

const ITEMS = [
  {
    label: 'Our Mission',
    Icon: FiTarget,
    headline: 'Make technology education practical and accessible.',
    text: 'We give every learner the skills, confidence and guidance to reach their professional goals.',
    keywords: ['Meaningful', 'Practical', 'Accessible'],
    dark: true,
  },
  {
    label: 'Our Vision',
    Icon: FiEye,
    headline: 'A generation of skilled, confident professionals.',
    text: 'Ready to embrace emerging technologies and create opportunities for themselves.',
    keywords: ['Skilled', 'Adaptable', 'Confident'],
    dark: false,
  },
];

export default function MissionVision() {
  return (
    <div className="mt-24">
      <Reveal className="mx-auto mb-10 max-w-[680px] text-center">
        <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-extrabold">Our Mission &amp; Vision</h3>
        <p className="mt-3 text-lg">What we do today, and the future we are building towards.</p>
      </Reveal>

      <Stagger className="grid gap-6 md:grid-cols-2">
        {ITEMS.map(({ label, Icon, headline, text, keywords, dark }) => (
          <StaggerItem key={label} className="h-full">
            <article
              className={`relative h-full overflow-hidden rounded-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-card-hover md:p-10 ${
                dark ? 'bg-hero-gradient text-white' : 'border border-gold/40 bg-gold-soft'
              }`}
            >
              {dark && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1/3 right-12 h-[170%] w-[2px] rotate-[-35deg] bg-gradient-to-b from-transparent via-gold/35 to-transparent"
                />
              )}
              <div className="relative flex items-center gap-3">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                    dark ? 'bg-gold text-navy-900' : 'bg-navy-900 text-gold'
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h4
                  className={`text-sm font-extrabold uppercase tracking-[0.1em] ${
                    dark ? '!text-gold' : '!text-gold-deep'
                  }`}
                >
                  {label}
                </h4>
              </div>

              <p
                className={`relative mt-6 text-[clamp(1.35rem,2.4vw,1.7rem)] font-extrabold leading-snug ${
                  dark ? 'text-white' : 'text-navy-text'
                }`}
              >
                {headline}
              </p>
              <p className={`relative mt-3 ${dark ? 'text-sky-soft' : 'text-navy-text/80'}`}>{text}</p>

              <ul className="relative mt-6 flex flex-wrap gap-2" aria-label={`${label} keywords`}>
                {keywords.map((k) => (
                  <li
                    key={k}
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      dark ? 'border border-white/20 bg-white/10 text-white' : 'bg-white text-navy-text'
                    }`}
                  >
                    {k}
                  </li>
                ))}
              </ul>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
