import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { FilterForm } from "@/components/discover/filter-form";
import { RecentlyCarousel } from "@/components/discover/recently-carousel";
import { ScreensPanel, type ScreenDetail } from "@/components/discover/screens-panel";
import { Accordion } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/ui/section-header";
import { TabNav } from "@/components/ui/tab-nav";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { INDIA_TICKERS } from "@/config/india-coverage";
import { getGccUniverse } from "@/lib/gcc-data";
import {
  getAllCompanies,
  getPrices,
  getResearchBundles,
  getUniverse,
} from "@/lib/data";
import { filterUniverse, parseSort } from "@/lib/discover";
import { paginationWindow } from "@/lib/pagination";
import { SORT_OPTIONS } from "@/lib/constants";
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
  const sort = parseSort(typeof params.sort === "string" ? params.sort : undefined);
  const tab = params.tab === "screens" ? "screens" : "featured";

  const universe = getUniverse();
  const gccCount = getGccUniverse().length;
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
  const pages = paginationWindow(page, pageCount);
  const priceMap = new Map(
    filtered.map((entry) => [entry.ticker, getPrices(entry.ticker, "1Y")]),
  );
  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== "marketCap") search.set("sort", sort);
    if (nextPage > 1) search.set("page", String(nextPage));
    const query = search.toString();
    return query ? `/discover?${query}` : "/discover";
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
      question: "Where do the numbers come from?",
      answer:
        "Fundamentals and adjusted prices come from SimFin, segment mixes and business descriptions from SEC EDGAR filings, and analyst consensus from Yahoo Finance cross-checked with Nasdaq. Every section names its source and reporting period.",
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

      <section className="hero-indigo relative overflow-hidden text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-[#8b3dff]/30 blur-3xl" />
        <div className="container-page relative py-9 lg:py-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
            Independent equity research
          </p>
          <h1 className="display mt-2 max-w-2xl text-[34px] leading-[1.04] tracking-[-0.03em] sm:text-[46px]">
            Discover companies. Understand businesses.
          </h1>
          <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/70">
            Explore {universe.length} US-listed companies through structured
            financial research. Compare growth, profitability, cash generation and
            valuation, with the source and reporting period shown next to the
            numbers.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#directory" className="btn btn-brand">
              Browse company research
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <Link prefetch={false} href="/framework" className="btn border border-white/25 text-white hover:bg-white/10">
              Read the methodology
            </Link>
          </div>
          <p className="mt-3 text-[10.5px] text-white/50">
            Filings-based · third-party estimates attributed and dated · no buy or
            sell ratings
          </p>
        </div>
      </section>

      <nav aria-label="Markets" className="border-b border-line bg-surface">
        <div className="container-page flex flex-wrap items-center gap-2 py-2 text-[11px]">
          <span className="text-faint">Markets</span>
          <span
            aria-current="page"
            className="rounded-full bg-brand-soft px-2 py-0.5 font-semibold text-brand-deep"
          >
            US stocks · {universe.length}
          </span>
          <Link prefetch={false} href="/india" className="rounded-full px-2 py-0.5 text-muted hover:text-ink">
            India stocks · {INDIA_TICKERS.length}
          </Link>
          <Link prefetch={false} href="/gcc" className="rounded-full px-2 py-0.5 text-muted hover:text-ink">
            GCC stocks · {gccCount}
          </Link>
        </div>
      </nav>

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
          <Link prefetch={false} href="/discover/all-stocks" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
            All {universe.length} companies
          </Link>
        </div>
        <div className="mt-3">
          <RecentlyCarousel bundles={carouselBundles} />
        </div>
      </section>

      <div className="container-page" id="directory">
        <TabNav
          active={tab === "screens" ? "/discover?tab=screens" : "/discover"}
          items={[
            { href: "/discover", label: "Featured Companies" },
            { href: "/discover?tab=screens", label: "Data-Quality Screens" },
            { href: "/discover/all-stocks", label: "All Stocks", count: universe.length },
          ]}
        />

        {tab === "screens" ? (
          <div className="mt-4">
            <ScreensPanel entries={universe} details={details} />
          </div>
        ) : (
          <div className="mt-4">
            <FilterForm
              action="/discover"
              q={q}
              sector={sector}
              sort={sort}
              count={allFiltered.length}
            />
            <details className="mt-3 rounded-xl border border-line bg-surface">
              <summary className="cursor-pointer px-3.5 py-2.5 text-[11.5px] font-semibold text-ink">
                How to read these cards
              </summary>
              <div className="grid gap-2.5 border-t border-line px-3.5 py-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Growth and profitability",
                    body: "How fast revenue is growing over the trailing twelve months, and how much of it reaches operating profit.",
                  },
                  {
                    title: "Relative comparisons",
                    body: "Percentile chips rank a company against the covered universe. They describe the numbers and are not ratings.",
                  },
                  {
                    title: "Price and returns",
                    body: "The latest close, the change versus the prior close, and the one-year return, each labelled with its period.",
                  },
                  {
                    title: "Research insight",
                    body: "A short data-derived note on what stands out. It changes when the metrics change, not when a narrative does.",
                  },
                  {
                    title: "Reporting periods",
                    body: "TTM means trailing twelve months. Where a figure is an annual or quarterly value, the label says so.",
                  },
                  {
                    title: "A starting point",
                    body: "A card summarises a business. The report behind it carries the sources, the caveats and the full statements.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-lg bg-paper-deep p-2.5">
                    <h3 className="text-[11.5px] font-semibold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
            </details>

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
                <a href="/discover" className="btn btn-ghost mt-3 h-9 min-h-0 text-[11px]">
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
                {pageCount > 1 && (
                  <nav aria-label="Research pagination" className="mt-5 flex flex-col items-center gap-2">
                    <p className="text-[10.5px] text-muted">
                      Showing {firstShown}–{lastShown} of {allFiltered.length} companies
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-1">
                      {page > 1 ? (
                        <a href={pageHref(page - 1)} className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]">
                          Previous
                        </a>
                      ) : (
                        <span className="btn btn-ghost pointer-events-none h-9 min-h-0 px-3 text-[11px] opacity-40">
                          Previous
                        </span>
                      )}
                      {pages.map((item, index) =>
                        item === "gap" ? (
                          <span key={`gap-${index}`} className="px-1 text-[10.5px] text-faint">
                            …
                          </span>
                        ) : (
                          <a
                            key={item}
                            href={pageHref(item)}
                            aria-current={item === page ? "page" : undefined}
                            className={`inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-[11px] font-semibold ${
                              item === page
                                ? "bg-brand text-white"
                                : "text-muted hover:bg-paper-deep hover:text-ink"
                            }`}
                          >
                            {item}
                          </a>
                        ),
                      )}
                      {page < pageCount ? (
                        <a href={pageHref(page + 1)} className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]">
                          Next
                        </a>
                      ) : (
                        <span className="btn btn-ghost pointer-events-none h-9 min-h-0 px-3 text-[11px] opacity-40">
                          Next
                        </span>
                      )}
                    </div>
                  </nav>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <section id="pro" className="container-page scroll-mt-24 py-8">
        <div className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="kicker">Stockmonk Pro</p>
            <h2 className="display mt-1 text-[22px] leading-snug tracking-[-0.02em] text-ink sm:text-[26px]">
              A deeper layer when a snapshot is not enough
            </h2>
            <p className="mt-1 max-w-2xl text-[12px] leading-relaxed text-muted">
              Longer reports, multi-factor comparisons, earnings summaries and
              watchlist alerts. Pro is a demo: no payment is taken and the
              checkout is disabled.
            </p>
          </div>
          <Link
            prefetch={false}
            href="/framework"
            className="btn btn-primary h-10 min-h-0 shrink-0 px-4 text-[12px]"
          >
            See how the research is built
          </Link>
        </div>
      </section>

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
