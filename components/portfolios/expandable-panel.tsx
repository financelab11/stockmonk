"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export function ExpandablePanel({
  eyebrow,
  title,
  description,
  preview,
  children,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  preview: ReactNode;
  children: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <section className={`card p-4 sm:p-5 ${className}`}>
      {eyebrow && <p className="kicker text-[10px]">{eyebrow}</p>}
      <h2 className="display mt-1.5 text-[24px] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[27px]">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-[13px] leading-[1.65] text-muted">
          {description}
        </p>
      )}

      {!open && <div className="mt-3">{preview}</div>}

      <div
        id={contentId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div
          className="overflow-hidden"
          aria-hidden={!open}
          inert={!open}
        >
          <div className="pt-3">{children}</div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={contentId}
        className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-brand transition-colors hover:text-brand-deep"
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown
          aria-hidden="true"
          className={`size-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
    </section>
  );
}
