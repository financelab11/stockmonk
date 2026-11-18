import type { Metadata } from "next";
import Link from "next/link";
import { Filter, Rss, Search } from "lucide-react";
import { NewsCard } from "@/components/cards/news-card";
import { RevisionsPanel } from "@/components/newsfeed/revisions-panel";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getResearchCompanies } from "@/lib/data";
import { CATEGORIES, getFeedItems, inCategory, sortFeed, type FeedCategory, type FeedMarket } from "@/lib/news-feed";
import { breadcrumbJsonLd } from "@/lib/seo";
import { formatPercent } from "@/lib/format";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Research intelligence",
  description:
    "Broker research, earnings, estimate revisions and market updates for India, US and GCC companies, with materiality scoring and attributed sources.",
  alternates: { canonical: "/newsfeed" },
  openGraph: {
    title: "Research intelligence · Stockmonk",
    description:
      "Institutional-grade feed of broker research and company updates, each attributed and linked to its source.",
    url: "/newsfeed",
  },
};

const MARKETS: Array<{ id: "in" | "us" | "gcc" | "global"; label: string; value: FeedMarket | null }> = [
  { id: "in", label: "India", value: "IN" },
  { id: "us", label: "US", value: "US" },
  { id: "gcc", label: "GCC", value: "GCC" },
  { id: "global", label: "Global", value: null },
];

const MATERIALITIES = ["High", "Medium", "Low"] as const;

function buildHref(
  base: Record<string, string | undefined>,
  patch: Record<string, string | undefined>,
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...base, ...patch })) {
    if (value) params.set(key, value);
  }
  const query = params.toString();
  return query ? `/newsfeed?${query}` : "/newsfeed";
}

export default async function NewsfeedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const category = (CATEGORIES.find((entry) => entry.id === params.category)?.id ?? "all") as FeedCategory;
  const market = MARKETS.find((entry) => entry.id === params.market) ?? MARKETS[0];
  const q = typeof params.q === "string" ? params.q.trim() : "";
  const broker = typeof params.broker === "string" ? params.broker : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const materiality = typeof params.materiality === "string" ? params.materiality : "";
  const ticker = typeof params.ticker === "string" ? params.ticker : "";
  const days = Math.max(1, Math.min(365, Number(params.days) || 180));
  const sort = params.sort === "materiality" ? "materiality" : "date";
  const per = [12, 24, 48].includes(Number(params.per)) ? Number(params.per) : 12;
  const page = Math.max(1, Number(params.page) || 1);

  const allItems = getFeedItems();
  const cutoff = new Date(Date.now() - days * 86_400_000).toISOString().slice(0, 10);
  const query = q.toLowerCase();
  const filtered = sortFeed(
    allItems.filter((item) => {
      if (!inCategory(item, category)) return false;
      if (market.value && item.market !== market.value) return false;
      if (item.date < cutoff) return false;
      if (materiality && item.materiality.label !== materiality) return false;
      if (broker && item.sourceId !== broker) return false;
      if (sector && item.sector !== sector) return false;
      if (ticker && item.ticker !== ticker) return false;
      if (query) {
        const haystack = `${item.title} ${item.company} ${item.ticker ?? ""} ${item.source} ${item.sector ?? ""} ${item.tag}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    }),
    sort,
  );

  const pageCount = Math.max(1, Math.ceil(filtered.length / per));
  const current = Math.min(page, pageCount);
  const shown = filtered.slice((current - 1) * per, current * per);

  const brokers = [...new Map(allItems.filter((item) => item.sourceId).map((item) => [item.sourceId, item.source])).entries()]
    .map(([id, name]) => ({ id, name: name as string }))
    .sort((a, b) => a.name.localeCompare(b.name));
  const sectors = [...new Set(allItems.map((item) => item.sector).filter((value): value is string => Boolean(value)))].sort();
  const tickers = [...new Set(allItems.map((item) => item.ticker).filter((value): value is string => Boolean(value)))].sort();
  const companies = getResearchCompanies();

  const currentParams = {
    category: category === "all" ? undefined : category,
    market: market.id === "in" ? undefined : market.id,
    q: q || undefined,
    broker: broker || undefined,
    sector: sector || undefined,
    materiality: materiality || undefined,
    ticker: ticker || undefined,
    days: days === 180 ? undefined : String(days),
    sort: sort === "date" ? undefined : sort,
    per: per === 12 ? undefined : String(per),
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Newsfeed", path: "/newsfeed" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Research intelligence</p>
              <h1 className="display mt-1 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
                Newsfeed
              </h1>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                Broker research, earnings, estimate revisions and market updates,
                scored for materiality. Every broker item keeps its original PDF
                link and institution.
              </p>
            </div>
            <a
              href="/rss.xml"
              className="inline-flex items-center gap-1.5 self-start rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold text-ink-soft hover:text-ink"
            >
              <Rss aria-hidden="true" className="size-3.5 text-coral" />
              RSS feed
            </a>
          </div>

          <nav aria-label="News categories" className="scrollbar-none mt-4 flex gap-1.5 overflow-x-auto">
            {CATEGORIES.map((entry) => (
              <Link
                key={entry.id}
                href={buildHref(currentParams, {
                  category: entry.id === "all" ? undefined : entry.id,
                  page: undefined,
                })}
                className={`chip shrink-0 whitespace-nowrap ${
                  category === entry.id ? "border-brand bg-brand-soft text-brand-deep" : ""
                }`}
              >
                {entry.label}
              </Link>
            ))}
          </nav>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {MARKETS.map((entry) => (
              <Link
                key={entry.id}
                href={buildHref(currentParams, {
                  market: entry.id === "in" ? undefined : entry.id,
                  page: undefined,
                })}
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  market.id === entry.id
                    ? "bg-ink text-white"
                    : "border border-line bg-surface text-muted hover:text-ink"
                }`}
              >
                {entry.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="container-page py-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <form
              action="/newsfeed"
              method="get"
              className="rounded-xl border border-line bg-surface p-3"
            >
              {category !== "all" && <input type="hidden" name="category" value={category} />}
              {market.id !== "in" && <input type="hidden" name="market" value={market.id} />}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-paper px-3">
                  <Search aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
                  <span className="sr-only">Search the feed</span>
                  <input
                    name="q"
                    defaultValue={q}
                    placeholder="Search company, ticker, broker or headline…"
                    className="min-w-0 flex-1 bg-transparent text-[12px] text-ink outline-none placeholder:text-faint"
                  />
                </label>
                <button type="submit" className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]">
                  Search
                </button>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Broker</span>
                  <select name="broker" defaultValue={broker} className="bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    <option value="">All brokers</option>
                    {brokers.map((entry) => (
                      <option key={entry.id ?? entry.name} value={entry.id ?? ""}>
                        {entry.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Sector</span>
                  <select name="sector" defaultValue={sector} className="max-w-[150px] bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    <option value="">All sectors</option>
                    {sectors.map((entry) => (
                      <option key={entry} value={entry}>
                        {entry}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Ticker</span>
                  <select name="ticker" defaultValue={ticker} className="max-w-[130px] bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    <option value="">All tickers</option>
                    {tickers.map((entry) => (
                      <option key={entry} value={entry}>
                        {entry}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Materiality</span>
                  <select name="materiality" defaultValue={materiality} className="bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    <option value="">Any materiality</option>
                    {MATERIALITIES.map((entry) => (
                      <option key={entry} value={entry}>
                        {entry}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Window</span>
                  <select name="days" defaultValue={String(days)} className="bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    {[7, 30, 90, 180].map((entry) => (
                      <option key={entry} value={entry}>
                        Last {entry} days
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex h-8 items-center gap-1 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Sort</span>
                  <select name="sort" defaultValue={sort} className="bg-transparent text-[10.5px] font-medium text-ink outline-none">
                    <option value="date">Newest first</option>
                    <option value="materiality">Materiality</option>
                  </select>
                </label>
                <button type="submit" className="text-[10.5px] font-semibold text-brand">
                  Apply filters
                </button>
                <Link href="/newsfeed" className="text-[10.5px] text-muted hover:text-ink">
                  Reset
                </Link>
              </div>
            </form>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[10.5px] text-muted">
              {category === "revisions" ? (
                <p aria-live="polite">
                  Broker target and rating changes · each broker versus its own prior note
                </p>
              ) : (
                <p aria-live="polite">
                  Showing {shown.length} of {filtered.length} items · {market.label} · last {days} days
                </p>
              )}
              <p className="flex items-center gap-1">
                <Filter aria-hidden="true" className="size-3" />
                {category === "revisions"
                  ? "Not a consensus calculation"
                  : sort === "materiality"
                    ? "Sorted by materiality"
                    : "Newest first"}
              </p>
            </div>

            {category === "revisions" ? (
              <div className="mt-4">
                <RevisionsPanel />
              </div>
            ) : (
              <div className="mt-2">
                {shown.map((item) => (
                  <NewsCard key={item.id} item={item} />
                ))}
              </div>
            )}

            {category !== "revisions" && filtered.length === 0 && (
              <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No items match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Try a broader window, a different market, or clear the search.
                </p>
                <Link href="/newsfeed" className="mt-2 inline-block text-[11px] font-semibold text-brand">
                  Reset filters
                </Link>
              </div>
            )}

            {pageCount > 1 && (
              <nav aria-label="Feed pagination" className="mt-4 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[10.5px] text-muted">
                  Page {current} of {pageCount}
                </p>
                <div className="flex items-center gap-1">
                  {current > 1 && (
                    <Link href={buildHref(currentParams, { page: String(current - 1) })} className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]">
                      Previous
                    </Link>
                  )}
                  {[12, 24, 48].map((size) => (
                    <Link
                      key={size}
                      href={buildHref(currentParams, { per: size === 12 ? undefined : String(size), page: undefined })}
                      className={`inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-[10.5px] font-semibold ${
                        per === size ? "bg-brand text-white" : "text-muted hover:bg-paper-deep"
                      }`}
                    >
                      {size}
                    </Link>
                  ))}
                  {current < pageCount && (
                    <Link href={buildHref(currentParams, { page: String(current + 1) })} className="btn btn-ghost h-8 min-h-0 px-3 text-[11px]">
                      Next
                    </Link>
                  )}
                </div>
              </nav>
            )}

            <Disclaimer variant="boxed" className="mt-6" />
          </div>

          <aside className="space-y-4">
            <div className="card p-4">
              <h2 className="text-[12px] font-semibold text-ink">How this feed works</h2>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                Broker notes are summarised from the original PDF and attributed to
                the publishing institution. Materiality scores the expected
                financial significance, not the direction of the share price.
              </p>
              <ul className="mt-3 space-y-1.5 text-[10.5px] text-muted">
                <li>• Broker research: Indian institutions, updated daily.</li>
                <li>• Deep-Dive: initiating coverage, written up in full.</li>
                <li>• Earnings: reported revenue, margin and EPS.</li>
                <li>• Revisions: broker target and rating changes.</li>
              </ul>
            </div>

            <div className="card p-4">
              <h2 className="text-[12px] font-semibold text-ink">Covered reports</h2>
              <ul className="mt-2 divide-y divide-line">
                {companies.slice(0, 12).map((company) => (
                  <li key={company.ticker}>
                    <Link
                      prefetch={false}
                      href={`/stocks/${company.ticker}`}
                      className="flex items-center justify-between gap-2 py-1.5 text-[11px] hover:text-brand"
                    >
                      <span className="font-mono font-semibold">{company.ticker}</span>
                      <span className="tabular text-muted">
                        {formatPercent(company.metrics.revenueGrowthTtm)} rev
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-brand-soft/60 p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand-deep">
                No price predictions
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-soft">
                A price move is not an explanation. Materiality is about financial
                significance, not expected share-price direction.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
