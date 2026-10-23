import Reveal from './Reveal';

export default function SectionHeading({ id, kicker, title, subtitle, align = 'center', dark = false }) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <Reveal className={`mb-12 max-w-[720px] ${alignCls}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 id={id} className={`h2 mt-4 ${dark ? '!text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? 'text-sky-soft' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
