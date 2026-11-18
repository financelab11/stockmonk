import { ArrowUpRight, ChevronDown } from "lucide-react";
import { BrokerLogo } from "@/components/brokers/broker-logo";
import { StockLogoStatic } from "@/components/stock-logo-static";
import { formatDate } from "@/lib/format";
import { relativeTime } from "@/lib/insights";
import type { NewsItem } from "@/lib/data";
import type { FeedItem } from "@/lib/news-feed";

const MARKET_LABEL: Record<FeedItem["market"], string> = {
  IN: "India",
  US: "US",
  GCC: "GCC",
};

function companyHref(item: FeedItem): string | null {
  if (!item.ticker) return null;
  if (item.market === "IN") return `/india/stocks/${item.ticker}`;
  if (item.market === "GCC") return `/gcc/stocks/${item.ticker}`;
  return `/stocks/${item.ticker}`;
}

const MATERIALITY_CLASS: Record<FeedItem["materiality"]["label"], string> = {
  High: "border-coral/40 bg-coral-soft text-coral-deep",
  Medium: "border-brand/30 bg-brand-soft text-brand-deep",
  Low: "border-line bg-paper-deep text-muted",
};

export function NewsCard({ item: source, boxed = false }: { item: FeedItem | NewsItem; boxed?: boolean }) {
  const item: FeedItem =
    "kind" in source
      ? source
      : {
          id: source.id,
          kind: "dataset",
          tag: source.tag,
          title: source.title,
          company: source.name,
          ticker: source.ticker || null,
          market: source.href.startsWith("/india")
            ? "IN"
            : source.href.startsWith("/gcc")
              ? "GCC"
              : "US",
          sector: null,
          date: source.date,
          source: "Stockmonk dataset",
          sourceId: null,
          reportType: null,
          materiality: { score: 40, label: "Medium" as const },
          href: source.href,
          externalUrl: null,
          execSummary: source.summary,
          detailed: [{ heading: "What changed", bullets: [source.summary] }],
          stats: [
            ...(source.price != null ? [{ label: "Price", value: source.price.toFixed(2) }] : []),
            ...(source.changePct != null
              ? [{ label: "Change", value: `${(source.changePct * 100).toFixed(1)}%` }]
              : []),
          ],
          deepDive: false,
        };
  const href = companyHref(item);
  const isBroker = item.kind === "broker";

  return (
    <article className={boxed ? "card p-5" : "border-b border-line py-5 first:pt-0 last:border-0"}>
      <div className="flex gap-3.5">
        <div className="pt-0.5">
          {isBroker ? (
            <BrokerLogo
              id={item.sourceId ?? item.source}
              name={item.source}
              size={38}
            />
          ) : (
            <StockLogoStatic ticker={item.ticker ?? item.company.slice(0, 3)} size={38} />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={MATERIALITY_CLASS[item.materiality.label]}>
              <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.08em]">
                {item.materiality.label}
              </span>
            </span>
            <span className="chip">{item.tag}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-faint">
              {MARKET_LABEL[item.market]}
            </span>
            <span className="text-[10.5px] text-faint">· {relativeTime(item.date)}</span>
            <span className="text-[10.5px] text-faint">· {formatDate(item.date)}</span>
          </div>

          <h3 className="display mt-2 text-[19px] leading-[1.2] tracking-[-0.012em] text-ink sm:text-[21px]">
            <a href={item.href} className="hover:text-brand">
              {item.title}
            </a>
          </h3>

          <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
            {href ? (
              <a href={href} className="font-semibold text-ink hover:text-brand">
                {item.company}
              </a>
            ) : (
              <span className="font-semibold text-ink">{item.company}</span>
            )}
            {item.ticker && <span className="font-mono text-[10px] text-muted">{item.ticker}</span>}
            {isBroker && (
              <>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <BrokerLogo id={item.sourceId ?? item.source} name={item.source} size={16} />
                  {item.source}
                </span>
                {item.reportType && <span aria-hidden="true">·</span>}
                {item.reportType && <span>{item.reportType}</span>}
              </>
            )}
          </div>

          {item.stats.length > 0 && (
            <dl className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-2 rounded-lg border border-line bg-paper-deep/50 px-3 py-2 sm:grid-cols-4">
              {item.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="stat-label">{stat.label}</dt>
                  <dd className="tabular mt-0.5 text-[12.5px] font-semibold text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <p className="mt-2.5 text-[12.5px] leading-relaxed text-ink-soft">{item.execSummary}</p>

          {item.detailed.length > 0 && (
            <details className="group mt-2">
              <summary className="flex w-fit cursor-pointer list-none items-center gap-1 text-[11px] font-semibold text-brand hover:text-brand-deep">
                Expand summary
                <ChevronDown
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="mt-2 space-y-3 rounded-lg border border-line bg-surface p-3">
                {item.detailed.map((section) => (
                  <div key={section.heading}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-brand-deep">
                      {section.heading}
                    </p>
                    <ul className="mt-1 space-y-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="text-[11.5px] leading-relaxed text-ink-soft">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          )}

          <div className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px]">
            <a href={item.href} className="inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-deep">
              Read research
              <ArrowUpRight aria-hidden="true" className="size-3.5" />
            </a>
            {item.externalUrl && (
              <a
                href={item.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted hover:text-ink"
              >
                Read full report
                <ArrowUpRight aria-hidden="true" className="size-3" />
              </a>
            )}
            <span className="ml-auto text-[10px] text-faint">
              Materiality {item.materiality.score}/100
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
