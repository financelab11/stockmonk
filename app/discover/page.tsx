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
import {
  getAllCompanies,
  getResearchBundles,
  getUniverse,
} from "@/lib/data";
import { filterUniverse, parseSort } from "@/lib/discover";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Discover US companies",
  description:
    "Browse the Stockmonk coverage universe: featured research, data-quality screens and all 68 US-listed companies with sourced fundamentals.",
  alternates: { canonical: "/discover" },
  openGraph: {
    title: "Discover US companies · Stockmonk",
    description:
      "Featured research, data-quality screens and the full US coverage universe.",
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
  const bundles = getResearchBundles();
  const companies = getAllCompanies();
  const priceMap = new Map(bundles.map((bundle) => [bundle.data.ticker, bundle.prices]));

  const filtered = filterUniverse(universe, {
    q,
    sector,
    sort,
    researchOnly: !q.trim(),
  });

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
      question: "Where do the numbers come from?",
      answer:
        "Fundamentals and adjusted prices come from SimFin. Segment mixes, business descriptions and risk factors come from SEC EDGAR filings. Analyst consensus is attributed to Yahoo Finance and cross-checked with Nasdaq.",
    },
    {
      question: "What is the difference between a report and a profile?",
      answer:
        "Research reports cover a company in ten sourced sections with charts. Profiles cover a larger universe with price, key ratios, description and recent quarters, but no full narrative report.",
    },
    {
      question: "How often is the data updated?",
      answer:
        "The ingestion scripts run on a refresh schedule. Each page shows the market-data date and the filing or consensus date next to the relevant section, so you can see how fresh a number is.",
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
          { name: "Discover", path: "/discover" },
        ])}
      />

      <section className="hero-indigo relative overflow-hidden text-white">
        <div className="pointer-events-none absolute -right-16 -top-20 size-72 rounded-full bg-[#8b3dff]/30 blur-3xl" />
        <div className="container-page relative grid gap-6 py-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
              Stockmonk Pro
            </p>
            <h1 className="display mt-2 max-w-xl text-[34px] leading-[1.04] tracking-[-0.03em] sm:text-[44px]">
              Unlock the full research library.
            </h1>
            <p className="mt-3 max-w-lg text-[13px] leading-relaxed text-white/70">
              Full company reports, comparable-company screens, earnings
              summaries and a watchlist that tracks data changes. All of it
              sourced, none of it a recommendation.
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
              Included in the demo
            </p>
            <ul className="mt-3 grid gap-1.5 text-[11.5px] text-white/80 sm:grid-cols-2">
              {PRICING.benefits.map((benefit) => (
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
              Ten full reports, one process
            </h2>
          </div>
          <Link prefetch={false} href="/discover/all-stocks" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
            All {universe.length} companies
          </Link>
        </div>
        <div className="mt-3">
          <RecentlyCarousel bundles={bundles} />
        </div>
      </section>

      <div className="container-page">
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
              count={filtered.length}
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <p className="text-[10.5px] text-muted">
                {q.trim()
                  ? `Search results across all ${universe.length} companies`
                  : `Featured research · ${filtered.length} companies`}
              </p>
              <p className="text-[10.5px] text-muted">
                Sorted by {sort === "marketCap" ? "market cap" : sort}
              </p>
            </div>
            {filtered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">No companies match those filters.</p>
                <p className="mt-1 text-[11.5px] text-muted">Try a broader search or reset the filters.</p>
              </div>
            ) : (
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((entry) => (
                  <StockCardStatic
                    key={entry.ticker}
                    entry={entry}
                    prices={priceMap.get(entry.ticker)}
                  />
                ))}
              </div>
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
              body: "Percentile screens across the coverage universe. They describe the numbers; they are not ratings.",
            },
            {
              title: "Price and return",
              body: "The latest close and the 1-year return. Past performance is shown because it is a fact, not because it predicts the future.",
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
