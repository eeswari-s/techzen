import { useState } from 'react';
import { SITE } from '../../data/site';

/** Official logo with a text-mark fallback if /images/logo.png is missing. */
export default function Logo({
  className = 'h-11 w-auto',
  withText = false,
  textFallback = true,
  textClassName = 'text-white',
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="inline-flex items-center gap-2.5">
      {failed ? (
        <span
          className={`inline-flex aspect-square items-center justify-center rounded-xl bg-gold font-black text-navy-900 ${className}`}
          aria-hidden="true"
        >
          TZ
        </span>
      ) : (
        <img
          src="/images/logo.png"
          alt={`${SITE.fullName} logo`}
          width="640"
          height="387"
          className={`object-contain ${className}`}
          onError={() => setFailed(true)}
        />
      )}
      {(withText || (failed && textFallback)) && (
        <span className={`text-lg font-black tracking-wide ${textClassName}`}>{SITE.name}</span>
      )}
    </span>
  );
}
