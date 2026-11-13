import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { FilterForm } from "@/components/discover/filter-form";
import { RecentlyCarousel } from "@/components/discover/recently-carousel";
import { ScreensPanel, type ScreenDetail } from "@/components/discover/screens-panel";
import { Accordion } from "@/components/ui/accordion";
import { PricingCard } from "@/components/ui/pricing-card";
import { ProCTA } from "@/components/ui/pro-cta";
import { SectionHeader } from "@/components/ui/section-header";
import { TabNav } from "@/components/ui/tab-nav";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { PRICING, formatPrice } from "@/config/pricing";
import { INDIA_COVERAGE_GROUPS } from "@/config/india-coverage";
import {
  getIndiaCompanies,
  getIndiaPrices,
  getIndiaResearchBundles,
  getIndiaUniverse,
} from "@/lib/india-data";
import { filterUniverse, parseSort } from "@/lib/discover";
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
  const priceMap = new Map(
    filtered.map((entry) => [entry.ticker, getIndiaPrices(entry.ticker, "1Y")]),
  );
  const pageHref = (nextPage: number) => {
    const search = new URLSearchParams();
    if (q) search.set("q", q);
    if (sector) search.set("sector", sector);
    if (sort !== "marketCap") search.set("sort", sort);
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
      question: "Does Stockmonk tell me what to buy?",
      answer:
        "No. Stockmonk is an educational research library. We publish business breakdowns, sourced financials and attributed analyst consensus, but no buy, sell or hold ratings and no Stockmonk price targets.",
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
      question: "Is the Pro checkout real?",
      answer:
        "No. The pricing and checkout are a product demo. No payment is processed, no card data is stored, and no subscription is created.",
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

      <section className="hero-indigo relative overflow-hidden text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-[#8b3dff]/30 blur-3xl" />
        <div className="container-page relative grid gap-6 py-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
              Stockmonk India
            </p>
            <h1 className="display mt-2 max-w-xl text-[34px] leading-[1.04] tracking-[-0.03em] sm:text-[44px]">
              Indian equities, explained from the filings.
            </h1>
            <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/70">
              Bespoke research on 100 NSE-listed companies: the business model,
              the unit economics, the numbers and the risks. Sourced, dated and
              never a recommendation.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link prefetch={false} href="#pro" className="btn btn-brand">
                Get Stockmonk Pro — {formatPrice(PRICING.monthlyPrice)}/mo
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <span className="text-[10.5px] text-white/50">
                {PRICING.trialDays}-day trial · mock checkout
              </span>
            </div>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/7 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">
              Included in the India library
            </p>
            <ul className="mt-3 grid gap-1.5 text-[11.5px] text-white/80 sm:grid-cols-2">
              {[
                "100 NSE companies",
                "Ten-section reports",
                "Attributed consensus",
                "Data-quality screens",
                "INR financials",
                "No ratings or targets",
              ].map((benefit) => (
                <li key={benefit} className="flex gap-1.5">
                  <Check aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-[#7ef0c6]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page py-6">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="kicker">Recently researched</p>
            <h2 className="display mt-1 text-[24px] tracking-[-0.02em] text-ink">
              {universe.length} full reports, one process
            </h2>
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

      <div className="container-page">
        <TabNav
          active={tab === "screens" ? "/india?tab=screens" : "/india"}
          items={[
            { href: "/india", label: "Featured Companies" },
            { href: "/india?tab=screens", label: "Data-Quality Screens" },
            { href: "/india/all-stocks", label: "All Stocks", count: universe.length },
            { href: "/tools/growth-ranker", label: "Forward Growth Ranker" },
          ]}
        />

        {tab === "screens" ? (
          <div className="mt-4">
            <ScreensPanel entries={universe} details={details} currency="INR" />
          </div>
        ) : (
          <div className="mt-4">
            <FilterForm
              action="/india"
              q={q}
              sector={sector}
              sort={sort}
              count={allFiltered.length}
              sectors={INDIA_COVERAGE_GROUPS}
              searchIndexPath="/data/india/search-index.json"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10.5px] text-muted">
                {q.trim()
                  ? `Search results across all ${universe.length} companies`
                  : `Featured research · ${allFiltered.length} companies`}
              </p>
              <p className="text-[10.5px] text-muted">
                Sorted by {sort === "marketCap" ? "market cap" : sort}
              </p>
            </div>
            {allFiltered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No companies match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">Try a broader search or reset the filters.</p>
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
                  <nav aria-label="India research pagination" className="mt-5 flex items-center justify-between gap-3">
                    {page > 1 ? (
                      <a href={pageHref(page - 1)} className="btn btn-ghost h-9 min-h-0 text-[11px]">
                        Previous
                      </a>
                    ) : (
                      <span />
                    )}
                    <span className="text-[10.5px] text-muted">
                      Page {page} of {pageCount} · {allFiltered.length} companies
                    </span>
                    {page < pageCount ? (
                      <a href={pageHref(page + 1)} className="btn btn-ghost h-9 min-h-0 text-[11px]">
                        Next
                      </a>
                    ) : (
                      <span />
                    )}
                  </nav>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <section className="container-page py-10">
        <SectionHeader
          eyebrow="How to read this page"
          title="A card is a starting point, not a conclusion"
          description="The same fields appear on every card. Learn what they mean before you click through."
        />
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            {
              title: "Factor chips",
              body: "Percentile screens across the India coverage universe. They describe the numbers; they are not ratings.",
            },
            {
              title: "Price and return",
              body: "The latest close in rupees and the 1-year return. Past performance is shown because it is a fact, not because it predicts the future.",
            },
            {
              title: "Why it's interesting",
              body: "A short, data-derived note. It changes when the underlying metrics change, not when a narrative does.",
            },
          ].map((item) => (
            <div key={item.title} className="card p-4">
              <h3 className="text-[13px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pro" className="container-page scroll-mt-24 py-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="kicker">Stockmonk Pro</p>
            <h2 className="display mt-2 text-[30px] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[37px]">
              What Pro gives you
            </h2>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-muted">
              A deeper layer on top of the free library. The checkout below is a
              mock: no payment is processed and no account is created.
            </p>
            <div className="mt-5 space-y-2">
              {PRICING.benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft font-mono text-[10px] font-semibold text-brand">
                    {index + 1}
                  </span>
                  <p className="text-[12px] leading-relaxed text-ink-soft">{benefit}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Accordion items={faqs} />
            </div>
          </div>
          <div className="lg:sticky lg:top-24">
            <PricingCard />
          </div>
        </div>
      </section>

      <div className="container-page pb-10">
        <ProCTA context="page" />
      </div>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
