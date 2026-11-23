import type { Metadata } from "next";
import Link from "next/link";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { DiscoveryTabs } from "@/components/discover/discovery-tabs";
import { FilterForm } from "@/components/discover/filter-form";
import { RecentlyCarousel } from "@/components/discover/recently-carousel";
import {
  ScreensPanel,
  type ScreenDetail,
} from "@/components/discover/screens-panel";
import { SortSummary } from "@/components/discover/sort-summary";
import { CardGuide } from "@/components/market/card-guide";
import { MarketIntro } from "@/components/market/market-intro";
import { MarketPagination } from "@/components/market/market-pagination";
import { MarketProBanner } from "@/components/market/market-pro-banner";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllCompanies,
  getPrices,
  getResearchBundles,
  getUniverse,
} from "@/lib/data";
import { filterUniverse, parseSort } from "@/lib/discover";
import { DEFAULT_SORT } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discover companies",
  description:
    "Explore 229 US-listed companies through structured financial research: growth, profitability, cash generation, valuation and sourced fundamentals.",
  alternates: { canonical: "/discover" },
  openGraph: {
    title: "Discover companies · Stockmonk",
    description:
      "Company research built from filings and financial statements, with the sources shown next to the numbers.",
    url: "/discover",
  },
};

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const sort = parseSort(
    typeof params.sort === "string" ? params.sort : undefined,
  );
  const tab = params.tab === "screens" ? "screens" : "featured";

  const universe = getUniverse();
  const carouselBundles = getResearchBundles(10);
  const companies = getAllCompanies();

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
    filtered.map((entry) => [entry.ticker, getPrices(entry.ticker, "1Y")]),
  );
  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== DEFAULT_SORT) search.set("sort", sort);
    if (nextPage > 1) search.set("page", String(nextPage));
    const query = search.toString();
    return query ? `/discover?${query}` : "/discover";
  };

  const carried = new URLSearchParams();
  if (q) carried.set("q", q);
  if (sector) carried.set("sector", sector);
  if (sort !== DEFAULT_SORT) carried.set("sort", sort);
  const carry = carried.toString();
  const featuredHref = carry ? `/discover?${carry}` : "/discover";
  const screensHref = carry
    ? `/discover?tab=screens&${carry}`
    : "/discover?tab=screens";
  const allHref = carry
    ? `/discover/all-stocks?${carry}`
    : "/discover/all-stocks";
  const featuredCount = universe.filter((entry) => entry.isResearch).length;

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
      question: "Where do the numbers come from?",
      answer:
        "Fundamentals come from SEC EDGAR filings, while adjusted prices, market data and company profiles come from Yahoo Finance. Segment mixes and business descriptions come from SEC filings, and analyst consensus is attributed to Yahoo Finance and cross-checked with Nasdaq. Every section names its source and reporting period.",
    },
    {
      question: "Are the full reports free?",
      answer:
        "Yes. All 229 coverage names have a full ten-section report that is readable now. Stockmonk Pro is a demo of a deeper tier, and nothing on the site is paywalled.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "Different datasets move on different schedules. Market prices, company filings and analyst estimates each carry their own date, so you can see how fresh a number is before you rely on it.",
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
          { name: "Discover", path: "/discover" },
        ])}
      />

      <MarketIntro
        eyebrow="Independent equity research"
        title="Discover companies. Understand businesses."
        description={`Explore ${universe.length} US-listed companies through structured financial research. Compare growth, profitability, cash generation and valuation, with the source and reporting period shown next to the numbers.`}
        meta="Filings-based · third-party estimates attributed and dated · no buy or sell ratings"
      />

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
            href="/discover/all-stocks"
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
              href: featuredHref,
              label: "Featured Research",
              icon: "star",
              count: featuredCount,
              description:
                "Companies with published research reports, financial analysis and valuation context.",
            },
            {
              id: "screens",
              href: screensHref,
              label: "Data Quality",
              icon: "shield",
              count: universe.length,
              description:
                "Explore companies based on financial data availability, reporting consistency and coverage quality.",
            },
            {
              id: "all",
              href: allHref,
              label: "All Companies",
              icon: "layers",
              count: universe.length,
              description:
                "Explore the complete coverage universe with advanced filters and sorting.",
            },
          ]}
        />

        {tab === "screens" ? (
          <div className="mt-4">
            <ScreensPanel entries={universe} details={details} />
          </div>
        ) : (
          <div className="mt-4">
            <FilterForm
              key={`${q}|${sector}|${sort}`}
              action="/discover"
              q={q}
              sector={sector}
              sort={sort}
              count={allFiltered.length}
            />
            <CardGuide scope="the covered universe" />

            <SortSummary
              sort={sort}
              total={allFiltered.length}
              shown={filtered.length}
            />
            {allFiltered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">
                  No companies match those filters.
                </p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Try a broader search, or remove a filter to see more
                  companies.
                </p>
                <a
                  href="/discover"
                  className="btn btn-ghost mt-3 h-9 min-h-0 text-[11px]"
                >
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
                  label="Research pagination"
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
