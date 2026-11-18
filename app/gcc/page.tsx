import type { Metadata } from "next";
import Link from "next/link";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { FilterForm } from "@/components/discover/filter-form";
import { RecentlyCarousel } from "@/components/discover/recently-carousel";
import { ScreensPanel, type ScreenDetail } from "@/components/discover/screens-panel";
import { CardGuide } from "@/components/market/card-guide";
import { MarketIntro } from "@/components/market/market-intro";
import { MarketPagination } from "@/components/market/market-pagination";
import { MarketProBanner } from "@/components/market/market-pro-banner";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { TabNav } from "@/components/ui/tab-nav";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { GCC_GROUPS, GCC_MARKETS, GCC_PUBLISHED_TICKERS } from "@/config/gcc-coverage";
import {
  getGccCompanies,
  getGccPrices,
  getGccResearchBundles,
  getGccUniverse,
} from "@/lib/gcc-data";
import { filterGccUniverse } from "@/lib/gcc-discover";
import { parseSort } from "@/lib/discover";
import { getMarketCounts } from "@/lib/market-counts";
import { SORT_OPTIONS } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "GCC Stocks",
  description:
    "Stockmonk GCC coverage: featured research, data-quality screens and all listed Saudi, UAE, Qatari, Kuwaiti, Omani and Bahraini companies with sourced fundamentals.",
  alternates: { canonical: "/gcc" },
  openGraph: {
    title: "GCC Stocks · Stockmonk",
    description:
      "Featured research, data-quality screens and the full GCC coverage universe.",
    url: "/gcc",
  },
};

export default async function GccDiscoverPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const sort = parseSort(typeof params.sort === "string" ? params.sort : undefined);
  const tab = params.tab === "screens" ? "screens" : "featured";

  const universe = getGccUniverse();
  const counts = getMarketCounts();
  const carouselBundles = getGccResearchBundles(10);
  const companies = getGccCompanies();

  const allFiltered = filterGccUniverse(universe, {
    q,
    sector,
    sort,
    researchOnly: !q.trim(),
  });
  const pageSize = 24;
  const requestedPage = Math.max(1, Number(params.page) || 1);
  const pageCount = Math.max(1, Math.ceil(allFiltered.length / pageSize));
  const page = Math.min(requestedPage, pageCount);
  const filtered = allFiltered.slice((page - 1) * pageSize, page * pageSize);
  const firstShown = allFiltered.length === 0 ? 0 : (page - 1) * pageSize + 1;
  const lastShown = Math.min(page * pageSize, allFiltered.length);
  const priceMap = new Map(
    filtered.map((entry) => [entry.ticker, getGccPrices(entry.ticker, "1Y")]),
  );
  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== "marketCap") search.set("sort", sort);
    if (nextPage > 1) search.set("page", String(nextPage));
    const query = search.toString();
    return query ? `/gcc?${query}` : "/gcc";
  };

  const details: Record<string, ScreenDetail> = Object.fromEntries(
    companies.map((company) => [
      company.ticker,
      {
        fcfMargin: company.metrics.fcfMargin,
        netDebt: company.metrics.netDebt,
        roic: company.metrics.roic,
        currency: company.currency,
      },
    ]),
  );

  const faqs = [
    {
      question: "Does Stockmonk provide stock recommendations?",
      answer:
        "No. Stockmonk is an independent research library. We publish business breakdowns, sourced financials and attributed analyst consensus, but no buy, sell or hold ratings and no Stockmonk price targets.",
    },
    {
      question: "Where do the GCC numbers come from?",
      answer:
        "Statements and consensus are cross-checked from StockAnalysis.com's Tadawul, ADX, DFM, QSE, KWSE and MSM filings, with price history from Yahoo Finance where the exchange is covered and MarketScreener for Bahrain. Every report shows the market-data date and the reporting period used.",
    },
    {
      question: "Which markets are covered?",
      answer:
        "Saudi Arabia, the United Arab Emirates (Abu Dhabi and Dubai), Qatar, Kuwait, Oman and Bahrain. The universe covers banks, energy, petrochemicals, industrials, healthcare, consumer, telecom, real estate and insurance.",
    },
    {
      question: "Are the full reports free?",
      answer:
        "Yes. Every coverage name has a full report that is readable now. Stockmonk Pro is a demo of a deeper tier, and nothing on the site is paywalled.",
    },
    {
      question: "Is the Pro checkout real?",
      answer:
        "No. The pricing and checkout are a product demo. No payment is processed, no card data is stored and no subscription is created.",
    },
  ];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "GCC Stocks", path: "/gcc" },
        ])}
      />

      <MarketIntro
        eyebrow="Stockmonk GCC"
        title="Gulf equities, explained from the filings."
        description={`${GCC_PUBLISHED_TICKERS.length} full reports across Saudi Arabia, the UAE, Qatar, Kuwait, Oman and Bahrain. The business model, the numbers and the risks, sourced and dated.`}
        meta="Local-currency reporting · third-party estimates attributed and dated · no buy or sell ratings"
        active="GCC"
        counts={counts}
      />

      <section className="container-page py-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="kicker">Recently covered</p>
            <h2 className="display mt-1 text-[24px] tracking-[-0.02em] text-ink">
              Companies with published research
            </h2>
            <p className="mt-1 max-w-xl text-[11.5px] leading-relaxed text-muted">
              Every name below has a full report in its reporting currency, with
              the source date attached to each section.
            </p>
          </div>
          <Link
            prefetch={false}
            href="/gcc/all-stocks"
            className="text-[11px] font-semibold text-brand hover:text-brand-deep"
          >
            All {universe.length} companies
          </Link>
        </div>
        <div className="mt-3">
          <RecentlyCarousel bundles={carouselBundles} />
        </div>
      </section>

      <div className="container-page" id="directory">
        <TabNav
          active={tab === "screens" ? "/gcc?tab=screens" : "/gcc"}
          items={[
            { href: "/gcc", label: "Featured Companies" },
            { href: "/gcc?tab=screens", label: "Data-Quality Screens" },
            { href: "/gcc/all-stocks", label: "All Stocks", count: universe.length },
          ]}
        />

        {tab === "screens" ? (
          <div className="mt-4">
            <ScreensPanel entries={universe} details={details} currency="SAR" />
          </div>
        ) : (
          <div className="mt-4">
            <FilterForm
              action="/gcc"
              q={q}
              sector={sector}
              sort={sort}
              count={allFiltered.length}
              sectors={GCC_GROUPS}
              searchIndexPath="/data/gcc/search-index.json"
            />
            <CardGuide scope="the GCC coverage universe" />
            <div className="mt-2 flex flex-wrap items-center justify-end gap-2">
              <p className="text-[10.5px] text-muted">
                Sorted by {SORT_OPTIONS.find((option) => option.value === sort)?.label ?? sort}
              </p>
            </div>
            {allFiltered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No companies match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Try a broader search, or remove a filter to see more companies.
                </p>
                <a href="/gcc" className="btn btn-ghost mt-3 h-9 min-h-0 text-[11px]">
                  Clear all filters
                </a>
              </div>
            ) : (
              <>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((entry) => (
                    <StockCardStatic
                      key={entry.ticker}
                      entry={entry}
                      prices={priceMap.get(entry.ticker)}
                    />
                  ))}
                </div>
                <MarketPagination
                  page={page}
                  pageCount={pageCount}
                  total={allFiltered.length}
                  first={firstShown}
                  last={lastShown}
                  hrefFor={pageHref}
                  label="GCC research pagination"
                />
              </>
            )}
          </div>
        )}
      </div>

      <section className="container-page py-10">
        <SectionHeader
          eyebrow="Coverage map"
          title="Six markets, one research standard"
          description="Each market is scored against its own peer set and reported in the local currency."
        />
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GCC_MARKETS.map((market) => {
            const count = universe.filter((entry) => {
              const group = GCC_GROUPS.find((item) => item.tickers.includes(entry.ticker));
              return group?.market === market.id;
            }).length;
            return (
              <div key={market.id} className="card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-[13px] font-semibold text-ink">{market.name}</h3>
                  <span className="tabular text-[10px] text-muted">{count} live</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-muted">{market.exchange}</p>
              </div>
            );
          })}
        </div>
      </section>

      <MarketProBanner />

      <section className="container-page py-8">
        <SectionHeader
          eyebrow="Frequently asked"
          title="Questions about the research"
          description="How the data is sourced, what is free, and what Pro actually is."
        />
        <div className="mt-4 max-w-3xl">
          <Accordion items={faqs} />
        </div>
      </section>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
