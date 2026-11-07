import type { Metadata } from "next";
import Link from "next/link";
import { Filter, Rss } from "lucide-react";
import { NewsCard } from "@/components/cards/news-card";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getNewsfeed, getResearchBundles, type NewsTag } from "@/lib/data";
import { breadcrumbJsonLd } from "@/lib/seo";
import { formatPercent } from "@/lib/format";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Newsfeed",
  description:
    "Earnings results, estimate updates, filing changes and price-range observations generated from the Stockmonk dataset. No invented headlines.",
  alternates: { canonical: "/newsfeed" },
  openGraph: {
    title: "Newsfeed · Stockmonk",
    description:
      "Data-change updates for the Stockmonk coverage universe, generated from sourced financials.",
    url: "/newsfeed",
  },
};

const TAGS: Array<NewsTag | "All"> = [
  "All",
  "Earnings Results",
  "Earnings Preview",
  "Earnings Call",
  "Analysis",
  "Why It Moves",
  "Macro News",
];

function hrefWith(
  params: Record<string, string | undefined>,
  patch: Record<string, string | undefined>,
): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries({ ...params, ...patch })) {
    if (value) search.set(key, value);
  }
  const query = search.toString();
  return query ? `/newsfeed?${query}` : "/newsfeed";
}

export default async function NewsfeedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const activeTag = typeof params.tag === "string" ? params.tag : "All";
  const ticker = typeof params.ticker === "string" ? params.ticker : "";
  const limit = Math.max(12, Math.min(60, Number(params.limit) || 12));

  const allItems = getNewsfeed();
  const bundles = getResearchBundles();
  const filtered = allItems.filter(
    (item) =>
      (activeTag === "All" || item.tag === activeTag) &&
      (ticker ? item.ticker === ticker : true),
  );
  const shown = filtered.slice(0, limit);
  const tickers = [...new Set(allItems.map((item) => item.ticker))].sort();
  const currentParams = { tag: activeTag === "All" ? undefined : activeTag, ticker };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Newsfeed", path: "/newsfeed" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Data feed</p>
              <h1 className="display mt-1 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[40px]">
                Newsfeed
              </h1>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                What changed in the numbers: reported quarters, estimate updates,
                filing changes and price-range observations. Every item links to
                the sourced research section behind it.
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
        </div>
      </section>

      <div className="container-page py-6">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="min-w-0">
            <div className="flex flex-col gap-2 rounded-xl border border-line bg-surface p-3 sm:flex-row sm:items-center">
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                <Filter aria-hidden="true" className="size-3.5" />
                Filter
              </span>
              <div className="scrollbar-none flex flex-1 gap-1.5 overflow-x-auto">
                {TAGS.map((item) => (
                  <Link
                    prefetch={false}
                    key={item}
                    href={hrefWith(currentParams, {
                      tag: item === "All" ? undefined : item,
                      limit: undefined,
                    })}
                    className={`chip shrink-0 ${
                      activeTag === item ? "border-brand bg-brand-soft text-brand-deep" : ""
                    }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <form action="/newsfeed" method="get" className="flex items-center gap-1.5">
                {activeTag !== "All" && <input type="hidden" name="tag" value={activeTag} />}
                <label className="flex h-8 items-center gap-1.5 rounded-lg border border-line bg-paper px-2 text-[10.5px] text-muted">
                  <span className="sr-only">Filter by ticker</span>
                  <select
                    name="ticker"
                    defaultValue={ticker}
                    className="bg-transparent text-[10.5px] font-medium text-ink outline-none"
                  >
                    <option value="">All tickers</option>
                    {tickers.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </label>
                <button type="submit" className="text-[10.5px] font-semibold text-brand">
                  Apply
                </button>
              </form>
            </div>

            <h2 className="sr-only">Latest data updates</h2>
            <p className="mt-3 text-[10.5px] text-muted" aria-live="polite">
              Showing {shown.length} of {filtered.length} data updates.
            </p>

            <div className="mt-2">
              {shown.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            {shown.length < filtered.length && (
              <div className="mt-4 text-center">
                <Link
                  prefetch={false}
                  href={hrefWith(currentParams, { limit: String(limit + 12) })}
                  className="btn btn-ghost"
                >
                  Load more updates
                </Link>
              </div>
            )}

            {filtered.length === 0 && (
              <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No updates match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Try a different category or clear the ticker filter.
                </p>
              </div>
            )}

            <Disclaimer variant="boxed" className="mt-6" />
          </div>

          <aside className="space-y-4">
            <div className="card p-4">
              <h2 className="text-[12px] font-semibold text-ink">How this feed works</h2>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted">
                Items are generated from the processed dataset. A new quarter,
                estimate snapshot or price-range change creates an entry. We do
                not invent news, quotes or explanations for price moves.
              </p>
              <ul className="mt-3 space-y-1.5 text-[10.5px] text-muted">
                <li>• Results: reported revenue, margin and EPS.</li>
                <li>• Previews: attributed consensus for the next quarter.</li>
                <li>• Analysis: factor screens and range position.</li>
                <li>• Filings: segment disclosures from the latest 10-K.</li>
              </ul>
            </div>

            <div className="card p-4">
              <h2 className="text-[12px] font-semibold text-ink">Covered reports</h2>
              <ul className="mt-2 divide-y divide-line">
                {bundles.map((bundle) => (
                  <li key={bundle.data.ticker}>
                    <Link
                      prefetch={false}
                      href={`/stocks/${bundle.data.ticker}`}
                      className="flex items-center justify-between gap-2 py-1.5 text-[11px] hover:text-brand"
                    >
                      <span className="font-mono font-semibold">{bundle.data.ticker}</span>
                      <span className="tabular text-muted">
                        {formatPercent(bundle.data.metrics.revenueGrowthTtm)} rev
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
                A price move is not an explanation. Where the data cannot explain
                a move, the feed says so and links to the filings instead.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
