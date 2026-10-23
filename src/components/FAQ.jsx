import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { FAQS } from '../data/faq';
import { SITE } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import { Stagger, StaggerItem } from './ui/Reveal';
import Button from './ui/Button';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          id="faq-title"
          kicker="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about IT training, courses and placement support at TECHZENZA, Chennai."
        />

        <Stagger className="mx-auto max-w-[860px] space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <StaggerItem key={item.q}>
                <div
                  className={`card overflow-hidden transition-colors duration-300 ${
                    isOpen ? 'border-gold/60' : ''
                  }`}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="focus-ring flex min-h-[60px] w-full items-center justify-between gap-4 rounded-card px-5 py-4 text-left text-base font-bold text-navy-text md:px-6 md:text-lg"
                    >
                      {item.q}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition duration-300 ${
                          isOpen ? 'rotate-45 bg-gold text-navy-900' : 'bg-gold-soft text-gold-deep'
                        }`}
                      >
                        <FiPlus className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  {/* Answers stay in the DOM when collapsed so search engines can read them. */}
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    aria-hidden={!isOpen}
                    className="overflow-hidden"
                    initial={false}
                    animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="px-5 pb-5 md:px-6 md:pb-6">{item.a}</p>
                  </motion.div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button href={SITE.enquiryForm} external arrow>
            Ask Us Anything
          </Button>
        </div>
      </div>
    </section>
  );
}
