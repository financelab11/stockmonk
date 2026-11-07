import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpenCheck,
  Database,
  FileCheck2,
  LineChart,
} from "lucide-react";
import { HeroSearch } from "@/components/home/hero-search";
import { ProFeatures } from "@/components/home/pro-features";
import { RecentlyResearched } from "@/components/home/recently-researched";
import { Spotlight } from "@/components/home/spotlight";
import { UniverseHistogram } from "@/components/home/universe-histogram";
import { NewsCard } from "@/components/cards/news-card";
import { SectionHeader } from "@/components/ui/section-header";
import { DataSourcesRow } from "@/components/ui/data-sources-row";
import { ProCTA } from "@/components/ui/pro-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Disclaimer } from "@/components/ui/disclaimer";
import {
  getMarketSnapshot,
  getNewsfeed,
  getResearchBundles,
  getUniverse,
} from "@/lib/data";
import { getStockStory } from "@/content/stocks";
import { formatCompactCurrency, formatPercent } from "@/lib/format";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Stockmonk — Independent equity research for learners",
  description:
    "Data-first equity research for US-listed companies. Plain-language business breakdowns, sourced financials, attributed analyst consensus, and no ratings or price targets.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const bundles = getResearchBundles();
  const universe = getUniverse();
  const snapshot = getMarketSnapshot();
  const news = getNewsfeed().slice(0, 3);
  const dayIndex = new Date().getUTCDate() % bundles.length;
  const spotlight = bundles[dayIndex];
  const spotlightStory = getStockStory(spotlight.data.ticker);

  return (
    <>
      <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />

      <section className="hero-indigo relative overflow-hidden text-white">
        <div className="pointer-events-none absolute -left-32 top-10 size-[420px] rounded-full bg-[#2f6bff]/30 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 size-[360px] rounded-full bg-[#8b3dff]/30 blur-[110px]" />
        <div className="container-page relative grid items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="animate-rise">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70">
              <span className="size-1.5 rounded-full bg-[#7ef0c6]" />
              Independent research · no ratings
            </p>
            <h1 className="display mt-4 max-w-xl text-[42px] leading-[1.02] tracking-[-0.03em] sm:text-[52px] lg:text-[58px]">
              Research the business,{" "}
              <span className="display-italic text-[#c9b8ff]">not the noise.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Stockmonk turns filings and financial statements into plain-language
              research for US-listed companies. Every number is sourced. Every
              report explains the business before the valuation.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/discover" className="btn btn-brand">
                Get started, it&apos;s free
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <a
                href="/framework"
                className="btn border border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                Read the framework
              </a>
            </div>
            <HeroSearch />
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[10.5px] text-white/55">
              <span>{snapshot.companyCount} US companies</span>
              <span>· {snapshot.researchCount} full reports</span>
              <span>· SimFin + SEC EDGAR</span>
              <span>· No price targets</span>
            </div>
          </div>

          <div className="relative mx-auto hidden w-full max-w-[400px] sm:block">
            <div className="absolute inset-6 rounded-[36px] bg-[#8b3dff]/30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/5 p-3 shadow-float backdrop-blur">
              <img
                src="/brand/hero-monk.webp"
                alt="Stockmonk mascot: a calm monk with an upward arrow"
                width={720}
                height={720}
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-[22px]"
              />
            </div>
            <div className="absolute -left-4 top-8 rounded-xl border border-white/15 bg-[#151b3d]/90 px-3 py-2 backdrop-blur">
              <p className="text-[8.5px] uppercase tracking-[0.12em] text-white/45">Median revenue growth</p>
              <p className="tabular mt-0.5 text-[15px] font-semibold text-[#7ef0c6]">
                {formatPercent(snapshot.medianRevenueGrowth)}
              </p>
            </div>
            <div className="absolute -right-3 bottom-10 rounded-xl border border-white/15 bg-[#151b3d]/90 px-3 py-2 backdrop-blur">
              <p className="text-[8.5px] uppercase tracking-[0.12em] text-white/45">Median op margin</p>
              <p className="tabular mt-0.5 text-[15px] font-semibold text-[#c9b8ff]">
                {formatPercent(snapshot.medianOperatingMargin)}
              </p>
            </div>
            <div className="absolute -bottom-3 left-8 rounded-xl border border-white/15 bg-[#151b3d]/90 px-3 py-2 backdrop-blur">
              <p className="text-[8.5px] uppercase tracking-[0.12em] text-white/45">Coverage market cap</p>
              <p className="tabular mt-0.5 text-[15px] font-semibold text-white">
                {formatCompactCurrency(snapshot.totalMarketCap)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="cv-auto">
      <RecentlyResearched bundles={bundles} />

      <section className="container-page py-12" aria-labelledby="data-title">
        <SectionHeader
          eyebrow="How our data works"
          title="The numbers come first"
          description="We ingest statements and filings, compute the ratios ourselves, and show the source next to every analytical claim. No black-box scores, no invented performance."
          href="/data-sources"
          linkLabel="Sources & methodology"
        />
        <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="grid grid-cols-2 gap-2">
            {[
              ["Companies covered", String(snapshot.companyCount), "US-listed, 69 names"],
              ["Full research reports", String(snapshot.researchCount), "Ten sections each"],
              ["Median revenue growth", formatPercent(snapshot.medianRevenueGrowth), "Trailing twelve months"],
              ["Median operating margin", formatPercent(snapshot.medianOperatingMargin), "Trailing twelve months"],
            ].map(([label, value, hint]) => (
              <div key={label} className="card p-4">
                <p className="stat-label">{label}</p>
                <p className="display mt-1 text-[30px] leading-none tracking-[-0.03em] text-ink">{value}</p>
                <p className="mt-1.5 text-[10.5px] text-muted">{hint}</p>
              </div>
            ))}
            <div className="col-span-2 rounded-xl border border-line bg-surface p-4">
              <div className="flex items-center gap-2">
                <LineChart aria-hidden="true" className="size-4 text-brand" />
                <p className="text-[11.5px] font-semibold text-ink">What the distribution says</p>
              </div>
              <p className="mt-1 text-[11px] leading-relaxed text-muted">
                The universe is not all high-growth software. It includes banks,
                energy, staples and insurers, so the median is a more honest
                reference point than the average.
              </p>
            </div>
          </div>
          <UniverseHistogram entries={universe} />
        </div>
        <div className="mt-4">
          <DataSourcesRow />
        </div>
      </section>

      {spotlightStory && <Spotlight bundle={spotlight} story={spotlightStory} />}

      <section className="container-page py-10" aria-labelledby="latest-title">
        <SectionHeader
          eyebrow="Latest from the data"
          title="What changed recently"
          description="Earnings results, estimate updates and price-range observations generated from the current dataset — not a newsroom."
          href="/newsfeed"
          linkLabel="Open the newsfeed"
        />
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} boxed />
          ))}
        </div>
      </section>

      <section className="container-page py-10">
        <div className="rounded-2xl bg-coral-soft p-6 sm:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="kicker">Why Stockmonk exists</p>
              <h2 className="display mt-2 text-[30px] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[37px]">
                Investing is changing. Can you keep up?
              </h2>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink-soft">
                Most market content tells you what to think. We want to show you
                how to read the numbers: how a company makes money, what the
                margins say, how the balance sheet is financed, and what the
                market is already paying for.
              </p>
              <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-ink-soft">
                That is why Stockmonk publishes no buy, sell or hold ratings and
                no price targets. A research library should make you a better
                reader, not a follower.
              </p>
              <a href="/framework" className="btn btn-primary mt-4">
                See how we analyse a business
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            </div>
            <div className="rounded-xl border border-[#f6c5b4] bg-white/70 p-4">
              <p className="display-italic text-[19px] leading-snug text-ink">
                “A stock is not a ticker. It is a claim on a business, and the
                business has a financial statement.”
              </p>
              <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                Stockmonk research desk
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-10" aria-labelledby="different-title">
        <SectionHeader
          eyebrow="What makes Stockmonk different"
          title="Built for understanding, not predictions"
          description="No invented analyst personas, no performance claims, no press-logo wall. Just a repeatable process and visible sources."
          align="center"
        />
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: Database,
              title: "Data-first research",
              body: "Statements, prices and consensus are ingested into typed, validated files. Charts are generated from those fields, not drawn by hand.",
            },
            {
              icon: FileCheck2,
              title: "Filings-based sourcing",
              body: "Segment mixes, business descriptions and risk factors come from SEC filings. Each section names the filing and the date.",
            },
            {
              icon: BookOpenCheck,
              title: "Transparent methodology",
              body: "Every formula — growth, margins, ROIC, leverage, percentile screens — is documented in the framework, including caveats.",
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="display text-[30px] leading-none text-faint">0{index + 1}</span>
                </div>
                <h3 className="mt-3 text-[14px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-muted">{item.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <ProFeatures />

      <div className="container-page pb-10">
        <ProCTA context="page" />
      </div>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
      </div>
    </>
  );
}
