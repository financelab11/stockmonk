import { ArrowUpRight } from "lucide-react";
import { LogoStack } from "@/components/ui/logo-stack";
import { PriceChange } from "@/components/ui/price-change";
import { formatCurrency } from "@/lib/format";
import { relativeTime } from "@/lib/insights";
import type { NewsItem } from "@/lib/data";

const TAG_CLASS: Record<NewsItem["tag"], string> = {
  "Earnings Results": "chip chip-positive",
  "Earnings Preview": "chip chip-info",
  "Earnings Call": "chip",
  "Analysis": "chip",
  "Why It Moves": "chip chip-caution",
  "Macro News": "chip chip-info",
};

export function NewsCard({
  item,
  boxed = false,
}: {
  item: NewsItem;
  boxed?: boolean;
}) {
  return (
    <article
      className={
        boxed
          ? "card p-5 transition-shadow hover:shadow-md"
          : "border-b border-line py-5 first:pt-0 last:border-0"
      }
    >
      <div className="flex gap-3.5">
        <div className="pt-1">
          <LogoStack tickers={[item.ticker]} size={34} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={TAG_CLASS[item.tag]}>{item.tag}</span>
            <span className="text-[10.5px] text-faint">
              {relativeTime(item.date)}
            </span>
          </div>
          <h3 className="display mt-2 text-[19px] leading-[1.22] tracking-[-0.012em] text-ink sm:text-[21px]">
            <a href={item.href} className="hover:text-brand">
              {item.title}
            </a>
          </h3>
          <p className="mt-2 line-clamp-3 text-[12.5px] leading-relaxed text-muted">
            {item.summary}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-[11px] text-muted">
            <a
              href={`/stocks/${item.ticker}`}
              className="font-mono font-semibold text-ink hover:text-brand"
            >
              {item.ticker}
            </a>
            <span className="tabular">{formatCurrency(item.price)}</span>
            <PriceChange value={item.changePct} className="text-[11px]" />
            <a
              href={item.href}
              className="ml-auto inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-deep"
            >
              Read
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
