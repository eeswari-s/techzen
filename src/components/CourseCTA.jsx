import { FiCompass } from 'react-icons/fi';
import { SITE } from '../data/site';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

export default function CourseCTA() {
  return (
    <Reveal className="relative mt-14 overflow-hidden rounded-card bg-cta-gradient p-8 text-white md:p-10">
      <span
        aria-hidden="true"
        className="absolute -top-1/2 right-[18%] h-[220%] w-[2px] rotate-[-35deg] bg-gradient-to-b from-transparent via-gold/40 to-transparent"
      />
      <span
        aria-hidden="true"
        className="absolute -top-1/2 right-[8%] h-[220%] w-[2px] rotate-[-35deg] bg-gradient-to-b from-transparent via-gold/25 to-transparent"
      />
      <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold sm:flex">
            <FiCompass className="h-7 w-7" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xl font-extrabold text-white md:text-2xl">Not sure which course is right for you?</p>
            <p className="mt-2 max-w-xl text-sky-soft">
              Tell us your qualification and career goal. We&apos;ll help you choose a suitable learning path.
            </p>
          </div>
        </div>
        <Button href={SITE.enquiryForm} external arrow className="shrink-0">
          Enquire About Courses
        </Button>
      </div>
    </Reveal>
  );
}
