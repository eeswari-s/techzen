import { FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/site';
import Button from './ui/Button';
import Reveal from './ui/Reveal';

const STRIPES = ['6%', '20%', '68%', '84%', '96%'];

export default function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="relative overflow-hidden bg-cta-gradient py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {STRIPES.map((left, i) => (
          <span
            key={left}
            className="absolute -top-1/2 h-[200%] w-[2px] animate-stripe-move bg-gradient-to-b from-transparent via-gold/30 to-transparent"
            style={{ left, animationDelay: `${i * -3}s`, transform: 'rotate(-35deg)' }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <Reveal className="container-x relative mx-auto max-w-[860px] text-center">
        <h2 id="final-cta-title" className="h2 !text-white">
          Your Next Chapter Starts Here.
        </h2>
        <p className="mx-auto mt-6 max-w-[720px] text-base leading-relaxed text-sky-soft md:text-lg">
          You don&apos;t need to know everything to begin. You need the willingness to learn, the courage to practise,
          and the determination to grow. At TECHZENZA, we are here to help you take that next step — one skill, one
          challenge, and one achievement at a time.
        </p>
        <p className="mt-8 text-sm font-black tracking-[0.18em] text-gold md:text-base">{SITE.tagline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href={SITE.enquiryForm} external arrow>
            Start Your Journey
          </Button>
          <Button href={SITE.whatsapp} external variant="whatsapp" icon={FaWhatsapp}>
            WhatsApp Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
