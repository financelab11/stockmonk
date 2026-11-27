"use client";

import { useEffect, useState } from "react";
import { Check, Share2 } from "lucide-react";

export function PortfolioShareButton({
  name,
  summary,
}: {
  name: string;
  summary: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2200);
    return () => window.clearTimeout(timer);
  }, [copied]);

  return (
    <button
      type="button"
      onClick={async () => {
        const url = window.location.href;
        if (navigator.share) {
          try {
            await navigator.share({ title: name, text: summary, url });
            return;
          } catch {
            // The user may cancel the native share sheet.
          }
        }
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
        } catch {
          // Clipboard access can be unavailable; leave the page unchanged.
        }
      }}
      className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3 text-[11px] font-semibold text-ink-soft transition-colors hover:border-brand/40 hover:text-brand"
      aria-label={copied ? "Link copied" : `Share ${name}`}
    >
      {copied ? (
        <Check aria-hidden="true" className="size-4 text-positive" />
      ) : (
        <Share2 aria-hidden="true" className="size-4" />
      )}
      {copied ? "Link copied" : "Share"}
    </button>
  );
}
