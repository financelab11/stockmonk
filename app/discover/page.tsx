import type { Metadata } from "next";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { DiscoveryTabs } from "@/components/discover/discovery-tabs";
import { FilterForm } from "@/components/discover/filter-form";
import {
  ScreensPanel,
  type ScreenDetail,
} from "@/components/discover/screens-panel";
import { SortSummary } from "@/components/discover/sort-summary";
import { MarketPagination } from "@/components/market/market-pagination";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getAllCompanies,
  getLatestDataDate,
  getPrices,
  getUniverse,
} from "@/lib/data";
import { filterUniverse, parseSort } from "@/lib/discover";
import { DEFAULT_SORT } from "@/lib/constants";
import { formatDate } from "@/lib/format";
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

function param(value: string | string[] | undefined): string {
  return typeof value === "string" ? value : "";
}

function numeric(value: string): number | null {
  if (!value) return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = param(params.q);
  const sector = param(params.sector);
  const sort = parseSort(param(params.sort));
  const tab = params.tab === "screens" ? "screens" : "featured";
  const minCap = param(params.minCap);
  const minGrowth = param(params.minGrowth);
  const minMargin = param(params.minMargin);
  const minMarketCap = numeric(minCap);
  const minRevenueGrowth = numeric(minGrowth);
  const minOperatingMargin = numeric(minMargin);

  const universe = getUniverse();
  const companies = getAllCompanies();
  const marketAsOf = getLatestDataDate();

  const allFiltered = filterUniverse(universe, {
    q,
    sector,
    sort,
    researchOnly: !q.trim(),
    minMarketCap: minMarketCap == null ? null : minMarketCap * 1_000_000_000,
    minRevenueGrowth: minRevenueGrowth == null ? null : minRevenueGrowth / 100,
    minOperatingMargin:
      minOperatingMargin == null ? null : minOperatingMargin / 100,
  });
  const pageSize = 24;
  const requestedPage = Math.max(
    1,
    Number.parseInt(String(params.page ?? "1"), 10) || 1,
  );
  const pageCount = Math.max(1, Math.ceil(allFiltered.length / pageSize));
  const page = Math.min(requestedPage, pageCount);
  const filtered = allFiltered.slice((page - 1) * pageSize, page * pageSize);
  const priceMap = new Map(
    filtered.map((entry) => [entry.ticker, getPrices(entry.ticker, "1Y")]),
  );

  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== DEFAULT_SORT) search.set("sort", sort);
    if (minCap) search.set("minCap", minCap);
    if (minGrowth) search.set("minGrowth", minGrowth);
    if (minMargin) search.set("minMargin", minMargin);
    if (nextPage > 1) search.set("page", String(nextPage));
    const query = search.toString();
    return query ? `/discover?${query}` : "/discover";
  };

  const carried = new URLSearchParams();
  if (q) carried.set("q", q);
  if (sector) carried.set("sector", sector);
  if (sort !== DEFAULT_SORT) carried.set("sort", sort);
  if (minCap) carried.set("minCap", minCap);
  if (minGrowth) carried.set("minGrowth", minGrowth);
  if (minMargin) carried.set("minMargin", minMargin);
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
        currency: company.currency ?? "USD",
      },
    ]),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Discover", path: "/discover" },
        ])}
      />

      <header className="container-page pt-7 pb-5 sm:pt-9 sm:pb-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="display text-[30px] leading-[1.05] tracking-[-0.025em] text-ink sm:text-[38px]">
              Discover companies
            </h1>
            <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
              Explore company financials, growth and valuation.
            </p>
          </div>
          <p className="text-[12px] text-muted">
            <span className="tabular font-semibold text-ink">
              {universe.length}
            </span>{" "}
            companies
            {marketAsOf && (
              <>
                {" · "}Market data {formatDate(marketAsOf)}
              </>
            )}
          </p>
        </div>
      </header>

      <div className="container-page" id="directory">
        <DiscoveryTabs
          active={tab === "screens" ? "screens" : "featured"}
          items={[
            {
              id: "featured",
              href: featuredHref,
              label: "Featured Research",
              count: featuredCount,
            },
            {
              id: "screens",
              href: screensHref,
              label: "Data Quality",
              count: universe.length,
            },
            {
              id: "all",
              href: allHref,
              label: "All Companies",
              count: universe.length,
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
              key={`${q}|${sector}|${sort}|${minCap}|${minGrowth}|${minMargin}`}
              action="/discover"
              q={q}
              sector={sector}
              sort={sort}
              minCap={minCap}
              minGrowth={minGrowth}
              minMargin={minMargin}
            />

            <SortSummary
              sort={sort}
              total={allFiltered.length}
              shown={filtered.length}
            />

            {allFiltered.length === 0 ? (
              <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">
                  No companies found.
                </p>
                <p className="mt-1 text-[12px] text-muted">
                  Try a broader search or clear a filter.
                </p>
                <a
                  href="/discover"
                  className="mt-3 inline-flex text-[12px] font-semibold text-brand hover:text-brand-deep"
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
                  hrefFor={pageHref}
                  label="Research pagination"
                />
              </>
            )}
          </div>
        )}
      </div>

      <div className="container-page pt-8 pb-12">
        <Disclaimer variant="inline" />
      </div>
    </>
  );
}
