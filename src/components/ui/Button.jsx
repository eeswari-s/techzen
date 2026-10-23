import { FiArrowRight } from 'react-icons/fi';

const VARIANTS = {
  gold: 'btn-gold shine',
  white: 'btn-white',
  outline: 'btn-outline',
  whatsapp: 'bg-whatsapp text-white hover:-translate-y-0.5 hover:brightness-110',
};

/**
 * Link-styled button. `external` opens in a new tab (used for every enquiry link).
 */
export default function Button({
  href,
  variant = 'gold',
  external = false,
  arrow = false,
  icon: Icon,
  className = '',
  children,
  ...rest
}) {
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={`btn group ${VARIANTS[variant]} ${className}`} {...externalProps} {...rest}>
      {Icon && <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {arrow && (
        <FiArrowRight
          className="h-[18px] w-[18px] shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </a>
  );
}
