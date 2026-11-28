import type { Metadata } from "next";
import { ArrowRight, Search } from "lucide-react";
import { FeaturedResearch } from "@/components/home/featured-research";
import { FinalCta } from "@/components/home/final-cta";
import { HeroPreview } from "@/components/home/hero-preview";
import { IntelligenceTable } from "@/components/home/intelligence-table";
import { Methodology } from "@/components/home/methodology";
import { PageViewTracker } from "@/components/home/page-view-tracker";
import { PortfolioShowcase } from "@/components/home/portfolio-showcase";
import { QuickScreens } from "@/components/home/quick-screens";
import { HomeSectionHeading } from "@/components/home/section-heading";
import { ThemeGrid } from "@/components/home/theme-grid";
import { TrackedLink } from "@/components/home/tracked-link";
import { WhyStockmonk } from "@/components/home/why-stockmonk";
import { WorkspacePanel } from "@/components/home/workspace-panel";
import { JsonLd } from "@/components/seo/json-ld";
import { SITE } from "@/lib/constants";
import { formatDate } from "@/lib/format";
import {
  getFeaturedPortfolios,
  getFeaturedResearch,
  getFeaturedThemes,
  getHeroCompanies,
  getHomepageStatistics,
  getIntelligenceTabs,
  getQuickScreens,
  getWorkspaceSuggestions,
} from "@/lib/homepage-data";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const revalidate = false;

export const metadata: Metadata = {
  title: "StockMonk | US Stock Research, Stock Screener & Model Portfolios",
  description:
    "Discover and analyse US-listed companies with StockMonk. Explore fundamental research, quantitative stock screening, factor-based rankings and systematic investment portfolios.",
  alternates: { canonical: "/" },
  keywords: [
    "US stock research",
    "stock screener",
    "equity research",
    "factor scores",
    "model portfolios",
    "fundamental analysis",
    "Stockmonk",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: SITE.url,
    title: "StockMonk | US Stock Research, Stock Screener & Model Portfolios",
    description:
      "Discover exceptional US-listed companies, analyse businesses through institutional-grade research and explore systematic investment strategies.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Stockmonk US equity research, screening and model portfolios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StockMonk | US Stock Research, Stock Screener & Model Portfolios",
    description:
      "Discover US companies, analyse fundamentals with four-factor scores and explore systematic model portfolios.",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  const stats = getHomepageStatistics();
  const heroCompanies = getHeroCompanies();
  const intelligenceTabs = getIntelligenceTabs();
  const themes = getFeaturedThemes();
  const portfolios = getFeaturedPortfolios();
  const research = getFeaturedResearch();
  const screens = getQuickScreens();
  const suggestions = getWorkspaceSuggestions();

  return (
    <>
      <PageViewTracker />
      <JsonLd
        data={[
          organizationJsonLd(),
          websiteJsonLd(),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Stockmonk US equity research",
            description:
              "Company research, four-factor scores, a US stock screener and systematic model portfolios.",
            url: SITE.url,
            hasPart: [
              ...portfolios.slice(0, 5).map((portfolio) => ({
                "@type": "WebPage",
                name: portfolio.name,
                url: `${SITE.url}/portfolio/${portfolio.slug}`,
              })),
              ...intelligenceTabs[0].rows.slice(0, 5).map((company) => ({
                "@type": "WebPage",
                name: `${company.name} (${company.ticker})`,
                url: `${SITE.url}${company.href}`,
              })),
            ],
          },
        ]}
      />

      <section className="border-b border-hairline bg-canvas">
        <div className="container-page grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:py-12">
          <div>
            <p className="home-eyebrow">
              US equity research and portfolio intelligence
            </p>
            <h1 className="mt-2 max-w-[620px] font-serif text-[40px] leading-[1.01] tracking-[-0.035em] text-graphite sm:text-[52px] lg:text-[58px]">
              Your next investment idea starts here.
            </h1>
            <p className="mt-3 max-w-[560px] text-[13.5px] leading-relaxed text-steel sm:text-[14.5px]">
              Discover exceptional businesses. Analyse stocks with
              institutional-grade research. Explore systematic investment
              strategies.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <TrackedLink
                href="/portfolio"
                event="hero_primary_cta_clicked"
                className="home-button home-button-primary"
              >
                Explore portfolios
                <ArrowRight aria-hidden="true" className="size-4" />
              </TrackedLink>
              <TrackedLink
                href="/discover"
                event="hero_secondary_cta_clicked"
                className="home-button home-button-secondary"
              >
                Discover stocks
              </TrackedLink>
            </div>

            <dl className="mt-7 grid max-w-[560px] grid-cols-3 divide-x divide-hairline border-y border-hairline">
              {[
                ["US companies", stats.companies.toLocaleString("en-US")],
                ["Research reports", stats.reports.toLocaleString("en-US")],
                ["Model strategies", stats.portfolios.toLocaleString("en-US")],
              ].map(([label, value]) => (
                <div key={label} className="px-3 py-2.5 first:pl-0 last:pr-0">
                  <dd className="tabular text-[21px] font-semibold leading-none tracking-[-0.025em] text-graphite">
                    {value}
                  </dd>
                  <dt className="mt-1 text-[10px] text-steel">{label}</dt>
                </div>
              ))}
            </dl>

            <p className="mt-3 text-[10px] leading-relaxed text-steel">
              Market data{" "}
              {stats.asOf ? formatDate(stats.asOf) : "refreshed daily"}
              {stats.scoreAsOf
                ? ` · four-factor scores ${formatDate(stats.scoreAsOf)}`
                : ""}
              . Public research is open; saving a watchlist needs no account.
            </p>
          </div>

          <div className="min-w-0">
            <HeroPreview companies={heroCompanies} />
            <p className="mt-2 text-[9.5px] leading-relaxed text-steel">
              Actual company records and score evidence from the Stockmonk
              dataset. Scores are descriptive, not recommendations.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="intelligence-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="intelligence-title"
          eyebrow="Daily intelligence"
          title="Today's investment intelligence"
          description="Explore companies showing strong fundamental, valuation and technical characteristics across the live coverage universe."
          href="/screener"
          linkLabel="Open the screener"
        />
        <div className="mt-4">
          <IntelligenceTable tabs={intelligenceTabs} asOf={stats.asOf} />
        </div>
      </section>

      <section
        aria-labelledby="themes-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="themes-title"
          eyebrow="Discover"
          title="Discover your next investment opportunity"
          description="Research collections built from the same coverage universe, factor scores and thematic portfolios already in Stockmonk."
          href="/screener"
          linkLabel="Explore all themes"
        />
        <div className="mt-4">
          <ThemeGrid themes={themes} />
        </div>
      </section>

      <section
        aria-labelledby="portfolios-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="portfolios-title"
          eyebrow="Model portfolios"
          title="Explore systematic investment strategies"
          description="Research-driven model portfolios built around different investment styles, with transparent construction rules and benchmark comparisons."
          href="/portfolio"
          linkLabel={`Explore all ${stats.portfolios} portfolios`}
        />
        <div className="mt-4">
          <PortfolioShowcase portfolios={portfolios} />
        </div>
      </section>

      <section
        aria-labelledby="research-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="research-title"
          eyebrow="Company research"
          title="Understand the business. Then the stock."
          description="A full report connects the business model, financial statements, segment mix, valuation and risk evidence in one place."
          href="/discover"
          linkLabel="Browse research"
        />
        <div className="mt-4">
          {research ? (
            <FeaturedResearch research={research} />
          ) : (
            <div className="home-card px-4 py-10 text-center text-[12px] text-steel">
              Company research is being rebuilt. Browse the research library in
              the meantime.
            </div>
          )}
        </div>
      </section>

      <section
        aria-labelledby="screener-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="screener-title"
          eyebrow="Stock screener"
          title="Screen thousands of companies. Find what matters."
          description="Filter US-listed companies using financial fundamentals, factor scores and technical characteristics."
          href="/screener"
          linkLabel="Open the full screener"
        />

        <form
          action="/screener"
          method="get"
          role="search"
          className="mt-4 flex max-w-2xl items-center gap-2 rounded-lg border border-hairline bg-warm p-1.5"
        >
          <Search
            aria-hidden="true"
            className="ml-2 size-4 shrink-0 text-steel"
          />
          <label htmlFor="home-screener-search" className="sr-only">
            Search the US equity screener
          </label>
          <input
            id="home-screener-search"
            name="q"
            placeholder="Search a ticker, company or sector"
            className="h-9 min-w-0 flex-1 bg-transparent text-[12px] text-graphite outline-none placeholder:text-steel"
          />
          <button
            type="submit"
            className="home-button home-button-primary h-9 min-h-0 px-3"
          >
            Search
          </button>
        </form>

        <div className="mt-4">
          <QuickScreens screens={screens} />
        </div>
      </section>

      <section
        aria-labelledby="why-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="why-title"
          eyebrow="Why Stockmonk"
          title="Everything you need to research better investments."
          description="One data model for company research, quantitative screening and systematic portfolio construction."
        />
        <div className="mt-4">
          <WhyStockmonk />
        </div>
      </section>

      <section
        aria-labelledby="workspace-title"
        className="border-b border-hairline bg-canvas py-8 sm:py-10"
      >
        <div className="container-page">
          <HomeSectionHeading
            id="workspace-title"
            eyebrow="Workspace"
            title="Your personal investment research workspace."
            description="Save companies, revisit research and keep model portfolios close. The workspace is local-first and works without an account."
          />
          <div className="mt-4">
            <WorkspacePanel
              suggestions={suggestions}
              dataAsOf={stats.asOf}
              reports={stats.reports}
            />
          </div>
        </div>
      </section>

      <section
        aria-labelledby="methodology-title"
        className="container-page border-b border-hairline py-8 sm:py-10"
      >
        <HomeSectionHeading
          id="methodology-title"
          eyebrow="Methodology"
          title="Transparent research. Structured intelligence."
          description="Every score has a formula, a coverage rule and an evidence trail. The composite is a fixed weighted sum, not an editorial verdict."
          href="/framework/scores"
          linkLabel="Read the framework"
        />
        <div className="mt-4">
          <Methodology stats={stats} />
        </div>
      </section>

      <section className="container-page py-8 sm:py-10">
        <FinalCta />
      </section>
    </>
  );
}
