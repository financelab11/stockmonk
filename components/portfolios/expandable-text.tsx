"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function ExpandableText({
  paragraphs,
  previewCount = 2,
  className = "",
}: {
  paragraphs: string[];
  previewCount?: number;
  className?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? paragraphs : paragraphs.slice(0, previewCount);
  const canExpand =
    paragraphs.length > previewCount ||
    paragraphs.some((paragraph) => paragraph.length > 360);

  return (
    <div className={className}>
      <div className="space-y-2.5">
        {visible.map((paragraph, index) => (
          <p
            key={`${index}-${paragraph.slice(0, 24)}`}
            className="text-[12.5px] leading-relaxed text-ink-soft"
          >
            {paragraph}
          </p>
        ))}
      </div>
      {canExpand && (
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          aria-expanded={expanded}
          className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand hover:text-brand-deep"
        >
          {expanded ? (
            <>
              Read less
              <ChevronUp aria-hidden="true" className="size-3.5" />
            </>
          ) : (
            <>
              Read more
              <ChevronDown aria-hidden="true" className="size-3.5" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
