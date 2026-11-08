import type { Metadata } from "next";
import { ArrowRight, BookOpenCheck, Database, FileCheck2 } from "lucide-react";
import { HeroSearch } from "@/components/home/hero-search";
import { ProFeatures } from "@/components/home/pro-features";
import { RecentlyResearched } from "@/components/home/recently-researched";
import { Spotlight } from "@/components/home/spotlight";
import { NewsCard } from "@/components/cards/news-card";
import { SectionHeader } from "@/components/ui/section-header";
import { ProCTA } from "@/components/ui/pro-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getMarketSnapshot, getNewsfeed, getResearchBundles } from "@/lib/data";
import { getStockStory } from "@/content/stocks";
import { formatCompactCurrency, formatPercent } from "@/lib/format";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Stockmonk — Independent equity research for learners",
  description:
    "Equity research built from SEC filings and financial statements: business breakdowns, sourced fundamentals and third-party analyst estimates.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const bundles = getResearchBundles();
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
            <h1 className="display mt-4 max-w-xl text-[42px] leading-[1.02] tracking-[-0.03em] sm:text-[52px] lg:text-[58px]">
              Understand the business.{" "}
              <span className="display-italic text-[#c9b8ff]">Then the stock.</span>
            </h1>
            <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Stockmonk reads annual reports, quarterly filings and financial
              statements, then lays out what a company sells, how the money moves,
              and what the market is paying for it.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/discover" className="btn btn-brand">
                Browse the research
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

      {spotlightStory && <Spotlight bundle={spotlight} story={spotlightStory} />}

      <section className="container-page py-10" aria-labelledby="latest-title">
        <SectionHeader
          title="Recent updates"
          description="Earnings, filing changes and estimate revisions from the companies we cover."
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
              <h2 className="display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[37px]">
                The business comes before the stock price.
              </h2>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-ink-soft">
                Most market content tells you what to think. We want to show you
                how to read the numbers: how a company makes money, what the
                margins say, how the balance sheet is financed, and what the
                market is already paying for.
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
          title="How the research is made"
          align="center"
        />
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {[
            {
              icon: FileCheck2,
              title: "Start with the filing",
              body: "Business descriptions, segment splits and risk factors come from the latest annual report. The source is linked under each section.",
            },
            {
              icon: Database,
              title: "Rebuild the statements",
              body: "Revenue, margins, cash flow and balance-sheet items are normalised into consistent periods before any ratio is calculated.",
            },
            {
              icon: BookOpenCheck,
              title: "Show the limits",
              body: "The framework documents each formula and flags where a metric does not apply, such as free cash flow for a bank.",
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
