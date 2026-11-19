import type { Metadata } from "next";
import Link from "next/link";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { DiscoveryTabs } from "@/components/discover/discovery-tabs";
import { FilterForm } from "@/components/discover/filter-form";
import { RecentlyCarousel } from "@/components/discover/recently-carousel";
import { ScreensPanel, type ScreenDetail } from "@/components/discover/screens-panel";
import { SortSummary } from "@/components/discover/sort-summary";
import { CardGuide } from "@/components/market/card-guide";
import { MarketIntro } from "@/components/market/market-intro";
import { MarketPagination } from "@/components/market/market-pagination";
import { MarketProBanner } from "@/components/market/market-pro-banner";
import { MarketSelector } from "@/components/market/market-selector";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { INDIA_COVERAGE_GROUPS } from "@/config/india-coverage";
import {
  getIndiaCompanies,
  getIndiaPrices,
  getIndiaResearchBundles,
  getIndiaUniverse,
} from "@/lib/india-data";
import { filterUniverse, parseSort } from "@/lib/discover";
import { getMarketCounts } from "@/lib/market-counts";
import { DEFAULT_SORT } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "India Stocks",
  description:
    "Stockmonk India coverage: featured research, data-quality screens and all 100 NSE-listed companies with sourced fundamentals.",
  alternates: { canonical: "/india" },
  openGraph: {
    title: "India Stocks · Stockmonk",
    description:
      "Featured research, data-quality screens and the full India coverage universe.",
    url: "/india",
  },
};

export default async function IndiaDiscoverPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const sort = parseSort(typeof params.sort === "string" ? params.sort : undefined);
  const tab = params.tab === "screens" ? "screens" : "featured";

  const universe = getIndiaUniverse();
  const counts = getMarketCounts();
  const carouselBundles = getIndiaResearchBundles(10);
  const companies = getIndiaCompanies();

  const allFiltered = filterUniverse(universe, {
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
    filtered.map((entry) => [entry.ticker, getIndiaPrices(entry.ticker, "1Y")]),
  );
  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== DEFAULT_SORT) search.set("sort", sort);
    if (nextPage > 1) search.set("page", String(nextPage));
    const query = search.toString();
    return query ? `/india?${query}` : "/india";
  };

  const details: Record<string, ScreenDetail> = Object.fromEntries(
    companies.map((company) => [
      company.ticker,
      {
        fcfMargin: company.metrics.fcfMargin,
        netDebt: company.metrics.netDebt,
        roic: company.metrics.roic,
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
      question: "Where do the India numbers come from?",
      answer:
        "Financial statements are built from company filings and NSE/BSE disclosures. Prices and third-party consensus are cross-checked from public market-data sources. Every report shows the market-data date and the filing date next to the relevant section.",
    },
    {
      question: "What is a full report?",
      answer:
        "Every India coverage name has a ten-section research report covering the business, revenue model, growth, financial performance, cash flow, valuation, consensus, risks and the questions to ask next.",
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
          { name: "India Stocks", path: "/india" },
        ])}
      />

      <MarketIntro
        eyebrow="Stockmonk India"
        title="Indian equities, explained from the filings."
        description={`Bespoke research on ${universe.length} NSE-listed companies: the business model, the unit economics, the numbers and the risks. Sourced, dated and never a recommendation.`}
        meta="Filings-based · third-party estimates attributed and dated · no buy or sell ratings"
      />

      <MarketSelector active="IN" counts={counts} />

      <section className="container-page py-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="kicker">Recently covered</p>
            <h2 className="display mt-1 text-[24px] tracking-[-0.02em] text-ink">
              Companies with published research
            </h2>
            <p className="mt-1 max-w-xl text-[11.5px] leading-relaxed text-muted">
              Every name below has a full report: business model, financials,
              valuation context and risks, each with its source date.
            </p>
          </div>
          <Link
            prefetch={false}
            href="/india/all-stocks"
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
        <DiscoveryTabs
          active={tab === "screens" ? "screens" : "featured"}
          items={[
            {
              id: "featured",
              href: "/india",
              label: "Featured Research",
              icon: "star",
              count: universe.filter((entry) => entry.isResearch).length,
              description:
                "Companies with published research reports, financial analysis and valuation context.",
            },
            {
              id: "screens",
              href: "/india?tab=screens",
              label: "Data Quality",
              icon: "shield",
              count: universe.length,
              description:
                "Explore companies based on financial data availability, reporting consistency and coverage quality.",
            },
            {
              id: "all",
              href: "/india/all-stocks",
              label: "All Companies",
              icon: "layers",
              count: universe.length,
              description:
                "Explore the complete coverage universe with advanced filters and sorting.",
            },
            {
              id: "ranker",
              href: "/tools/growth-ranker",
              label: "Growth Ranker",
              icon: "trending",
            },
          ]}
        />

        {tab === "screens" ? (
          <div className="mt-4">
            <ScreensPanel entries={universe} details={details} currency="INR" />
          </div>
        ) : (
          <div className="mt-4">
            <FilterForm
            key={`${q}|${sector}|${sort}`}
              action="/india"
              q={q}
              sector={sector}
              sort={sort}
              count={allFiltered.length}
              sectors={INDIA_COVERAGE_GROUPS}
              searchIndexPath="/data/india/search-index.json"
            />
            <CardGuide scope="the India coverage universe" />
            <SortSummary sort={sort} total={allFiltered.length} shown={filtered.length} />
            {allFiltered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No companies match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Try a broader search, or remove a filter to see more companies.
                </p>
                <a href="/india" className="btn btn-ghost mt-3 h-9 min-h-0 text-[11px]">
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
                  label="India research pagination"
                />
              </>
            )}
          </div>
        )}
      </div>

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
