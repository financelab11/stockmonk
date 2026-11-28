import { ArrowRight } from "lucide-react";

export function HomeSectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
  id,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  id?: string;
}) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="home-eyebrow">{eyebrow}</p>}
        <h2
          id={id}
          className="mt-1 font-serif text-[25px] leading-[1.12] tracking-[-0.022em] text-graphite sm:text-[31px]"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-1.5 max-w-xl text-[12px] leading-relaxed text-steel">
            {description}
          </p>
        )}
      </div>
      {href && (
        <a
          href={href}
          className="inline-flex shrink-0 items-center gap-1 text-[11.5px] font-semibold text-accent hover:underline"
        >
          {linkLabel}
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      )}
    </div>
  );
}
