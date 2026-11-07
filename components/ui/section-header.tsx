import { ArrowRight } from "lucide-react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${
        align === "center" ? "text-center sm:text-center" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        {eyebrow && <p className="kicker">{eyebrow}</p>}
        <h2 className="display mt-2 text-[28px] leading-[1.1] tracking-[-0.025em] text-ink sm:text-[34px]">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
      {href && (
        <a
          href={href}
          className="inline-flex items-center gap-1.5 self-start text-[12px] font-semibold text-brand hover:text-brand-deep sm:self-auto"
        >
          {linkLabel}
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      )}
    </div>
  );
}
