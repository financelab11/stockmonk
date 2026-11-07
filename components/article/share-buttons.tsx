"use client";

import { AtSign, Check, ExternalLink, Link2 } from "lucide-react";
import { useEffect, useState } from "react";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 1800);
          } catch {
            setCopied(false);
          }
        }}
        className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
        aria-label="Copy article link"
      >
        {copied ? (
          <Check aria-hidden="true" className="size-3.5 text-positive" />
        ) : (
          <Link2 aria-hidden="true" className="size-3.5" />
        )}
      </button>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
        aria-label="Share on LinkedIn"
      >
        <ExternalLink aria-hidden="true" className="size-3.5" />
      </a>
      <a
        href={`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex size-8 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
        aria-label="Share on X"
      >
        <AtSign aria-hidden="true" className="size-3.5" />
      </a>
    </div>
  );
}
