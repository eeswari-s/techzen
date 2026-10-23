import { FaQuoteLeft } from 'react-icons/fa';
import { FiBookOpen, FiBriefcase, FiCode } from 'react-icons/fi';
import { TbSchool } from 'react-icons/tb';
import Reveal, { Stagger, StaggerItem } from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import Button from './ui/Button';
import MissionVision from './MissionVision';
import WhyUs from './WhyUs';

const APPROACH = [
  { title: 'Strong fundamentals', text: 'Build a clear base before moving to advanced topics.', Icon: FiBookOpen },
  { title: 'Practice-first learning', text: 'Apply every concept through exercises and projects.', Icon: FiCode },
  { title: 'Career preparation', text: 'Get ready for interviews and real workplace challenges.', Icon: FiBriefcase },
];

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="container-x">
        {/* Intro: image + headline */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-card border-2 border-gold/60 md:-left-5 md:-top-5"
            />
            <SmartImage
              src="/images/about.jpg"
              alt="Learners in a practical IT training session at TECHZENZA, Chennai"
              icon={TbSchool}
              width="640"
              height="520"
              className="relative aspect-[16/13] rounded-card shadow-card-hover"
            />
            <div className="absolute -bottom-6 right-4 max-w-[240px] rounded-2xl bg-navy-900 p-5 text-white shadow-card-hover md:-right-6">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-gold">Our approach</p>
              <p className="mt-1 text-sm font-semibold leading-snug">Learn → Practice → Grow → Get Placed</p>
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <span className="kicker">About TECHZENZA</span>
            <h2 id="about-title" className="h2 mt-4">
              We Don&apos;t Just Teach Technology. We Help You Become Future-Ready.
            </h2>
            <p className="mt-5 border-l-4 border-gold pl-4 text-lg font-bold leading-snug text-navy-text">
              Your Future Is Not Something You Wait For. It&apos;s Something You Build.
            </p>
            <p className="mt-6">
              At TECHZENZA – Technology &amp; Skill Development Academy, we believe every learner has the potential to
              achieve something extraordinary with the right skills, guidance and environment. We turn knowledge into
              practical skills, curiosity into confidence, and ambition into career-ready abilities.
            </p>
            <p className="mt-4 font-semibold text-navy-text">
              Our purpose is simple: to help you move from learning about technology to working with it confidently.
            </p>
          </Reveal>
        </div>

        {/* Pull quote + approach */}
        <div className="mt-24 grid items-stretch gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal
            as="figure"
            className="relative flex flex-col justify-center overflow-hidden rounded-card bg-hero-gradient p-8 text-white md:p-10"
          >
            <span
              aria-hidden="true"
              className="absolute -right-10 top-0 h-[140%] w-[2px] rotate-[-35deg] bg-gradient-to-b from-transparent via-gold/40 to-transparent"
            />
            <FaQuoteLeft className="h-9 w-9 text-gold" aria-hidden="true" />
            <blockquote className="mt-5 text-[clamp(1.35rem,2.4vw,1.75rem)] font-extrabold leading-snug">
              Because knowing something is valuable.{' '}
              <span className="text-gold">Knowing how to apply it is powerful.</span>
            </blockquote>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-xl font-bold">Learning That Moves You Forward</h3>
              <p className="mt-2">
                Whether you are starting your IT journey or preparing for your next role, real growth happens when
                learning meets practice.
              </p>
            </Reveal>
            <Stagger as="ul" className="mt-6 grid gap-4 sm:grid-cols-3">
              {APPROACH.map(({ title, text, Icon }) => (
                <StaggerItem as="li" key={title} className="card p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold-deep">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 font-bold text-navy-text">{title}</p>
                  <p className="mt-1 text-sm">{text}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>

        <MissionVision />
        <WhyUs />

        <Reveal className="mt-14 flex flex-col items-center gap-5 text-center">
          <p className="max-w-xl text-lg font-semibold text-navy-text">
            Explore essential technologies and build skills for a world driven by innovation.
          </p>
          <Button href="#courses" arrow>
            View All Courses
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
