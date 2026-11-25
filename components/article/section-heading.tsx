export function SectionHeading({
  number,
  title,
  subtitle,
  id,
}: {
  number: string;
  title: string;
  subtitle?: string;
  id: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline gap-3">
        <span className="section-number">{number}</span>
        <h2
          data-section-id={id}
          className="display scroll-mt-28 text-[27px] leading-[1.12] tracking-[-0.02em] text-ink sm:text-[31px]"
        >
          {title}
        </h2>
      </div>
      {subtitle && <p className="mt-1.5 text-[12px] text-muted">{subtitle}</p>}
    </div>
  );
}
