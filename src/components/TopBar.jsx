import { SITE } from '../data/site';

export default function TopBar() {
  return (
    <div className="bg-gold text-navy-900">
      <div className="container-x flex h-9 items-center justify-center text-xs font-bold sm:text-[13px] md:justify-between">
        <span>Technology &amp; Skill Development Academy</span>
        <span className="hidden md:inline">
          Chennai · Call / WhatsApp:{' '}
          <a href={`tel:${SITE.phone}`} className="focus-ring rounded underline-offset-2 hover:underline">
            {SITE.phoneDisplay}
          </a>
        </span>
      </div>
    </div>
  );
}
