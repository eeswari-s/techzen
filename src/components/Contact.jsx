import { FiGlobe, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/site';
import SectionHeading from './ui/SectionHeading';
import Reveal, { Stagger, StaggerItem } from './ui/Reveal';
import Button from './ui/Button';
import MapEmbed from './MapEmbed';

const linkCls = 'font-semibold text-navy-text underline-offset-4 hover:text-gold-deep hover:underline focus-ring rounded';

function ContactCard({ Icon, title, children }) {
  return (
    <StaggerItem className="card flex items-start gap-4 p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <h3 className="text-sm font-bold uppercase tracking-[0.08em] text-muted">{title}</h3>
        <div className="mt-1 break-words">{children}</div>
      </div>
    </StaggerItem>
  );
}

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          id="contact-title"
          kicker="Get In Touch"
          title="Start your learning journey"
          subtitle="Reach out to TECHZENZA about courses, batches and career guidance."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Stagger className="grid gap-4">
              <ContactCard Icon={FiPhone} title="Call / WhatsApp">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  <a href={`tel:${SITE.phone}`} className={linkCls}>
                    {SITE.phoneDisplay}
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-1.5 rounded text-sm font-bold text-[#128C4A] hover:underline"
                  >
                    <FaWhatsapp className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                  </a>
                </div>
              </ContactCard>
              <ContactCard Icon={FiMail} title="Email">
                <a href={`mailto:${SITE.email}`} className={linkCls}>
                  {SITE.email}
                </a>
              </ContactCard>
              <ContactCard Icon={FiMapPin} title="Address">
                <address className="not-italic text-navy-text">{SITE.address}</address>
              </ContactCard>
              <ContactCard Icon={FiGlobe} title="Websites">
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {SITE.websites.map((url) => (
                    <a key={url} href={url} target="_blank" rel="noopener noreferrer" className={linkCls}>
                      {url.replace(/^https?:\/\/(www\.)?/, '')}
                    </a>
                  ))}
                </div>
              </ContactCard>
            </Stagger>

            <Reveal className="flex flex-col gap-4 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Button href={SITE.enquiryForm} external arrow className="text-base sm:flex-1">
                Fill the Enquiry Form
              </Button>
              <div className="flex gap-3">
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-1 border border-line bg-white text-navy-text hover:border-[#0A66C2] hover:text-[#0A66C2] focus-visible:ring-offset-white"
                >
                  <FaLinkedinIn className="h-4 w-4" aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn flex-1 border border-line bg-white text-navy-text hover:border-[#C13584] hover:text-[#C13584] focus-visible:ring-offset-white"
                >
                  <FaInstagram className="h-4 w-4" aria-hidden="true" /> Instagram
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="h-full">
            <MapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
