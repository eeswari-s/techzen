import { FiNavigation } from 'react-icons/fi';
import { SITE } from '../data/site';

export default function MapEmbed() {
  return (
    <div className="card flex h-full flex-col p-3">
      <iframe
        src={SITE.mapEmbed}
        title="TECHZENZA location map"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="h-[300px] w-full rounded-card border-0 md:h-[420px] lg:h-full lg:min-h-[420px]"
      />
      <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-2 pt-4">
        <p className="text-sm font-semibold text-navy-text">Ekkatuthangal, Chennai</p>
        <a
          href={SITE.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex min-h-[44px] items-center gap-2 rounded-full px-3 text-sm font-bold text-gold-deep hover:text-navy-text"
        >
          <FiNavigation className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </div>
  );
}
