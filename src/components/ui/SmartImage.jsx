import { useState } from 'react';

/**
 * <img> that swaps to a navy gradient placeholder (with an icon) if the file is missing,
 * so the layout never breaks.
 */
export default function SmartImage({ src, alt, icon: Icon, className = '', imgClassName = '', width, height, eager = false }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-hero-gradient ${className}`}
      >
        {Icon && <Icon className="h-14 w-14 text-gold/80" aria-hidden="true" />}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-navy-800 ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
