import { List } from "lucide-react";
import { ARTICLE_SECTIONS } from "@/lib/constants";

export function Toc({ ticker }: { ticker: string }) {
  return (
    <nav aria-label="Table of contents" className="sticky top-24 hidden lg:block">
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-faint">
        In this report
      </p>
      <ol className="mt-3 space-y-0.5 border-l border-line">
        {ARTICLE_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="-ml-px flex gap-2 border-l-2 border-transparent py-1.5 pl-3 text-[11.5px] leading-snug text-muted transition-colors hover:border-coral hover:text-ink"
            >
              <span className="tabular text-[9.5px] text-faint">{section.number}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-[10px] leading-relaxed text-faint">
        Ticker {ticker}. Sections link to sources and data tables.
      </p>
    </nav>
  );
}

export function MobileToc() {
  return (
    <details className="group rounded-xl border border-line bg-surface lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-3.5 py-2.5 text-[11.5px] font-semibold text-ink">
        <span className="flex items-center gap-2">
          <List aria-hidden="true" className="size-4 text-brand" />
          Jump to section
        </span>
        <span className="text-[10px] text-muted group-open:hidden">Open</span>
        <span className="hidden text-[10px] text-muted group-open:inline">Close</span>
      </summary>
      <ol className="grid grid-cols-2 gap-x-3 gap-y-0.5 border-t border-line px-3 py-2">
        {ARTICLE_SECTIONS.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="block py-1 text-[11px] text-muted">
              {section.number} · {section.title}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}
