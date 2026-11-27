import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bookmark, Layers, ShieldCheck, Sigma } from "lucide-react";
import { PortfolioDiscovery } from "@/components/portfolios/portfolio-discovery";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getPortfolioIndex } from "@/lib/portfolios/data";
import { breadcrumbJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Portfolio - research-backed US equity model portfolios",
  description:
    "Explore 105 US equity model portfolios built from the Stockmonk 3,696-company coverage universe, with transparent methodology, constituents, benchmark comparisons and rules-based rebalancing reviews.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Stockmonk Portfolio - invest in strategies, not stock tips",
    description:
      "A curated library of quantitative, thematic, sector and factor model portfolios. Understand every holding and review every proposed change.",
    url: "/portfolio",
  },
};

export default function PortfolioPage() {
  const index = getPortfolioIndex();

  return (
    <>
      <JsonLd
        data={[
          websiteJsonLd(),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Stockmonk Portfolio",
            description:
              "Research-backed US equity model portfolios built from the Stockmonk coverage universe.",
            url: "https://stockmonk.app/portfolio",
            hasPart: index.portfolios.slice(0, 30).map((portfolio) => ({
              "@type": "WebPage",
              name: portfolio.name,
              url: `https://stockmonk.app/portfolio/${portfolio.slug}`,
            })),
          },
        ]}
      />

      <header className="relative overflow-hidden border-b border-line bg-brand-deep text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-28 size-80 rounded-full bg-brand/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-coral/20 blur-3xl"
        />
        <div className="container-page relative py-7 sm:py-9">
          <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white/85">
                <Sigma aria-hidden="true" className="size-3" />
                Stockmonk Portfolio
              </p>
              <h1 className="display mt-3 max-w-2xl text-[32px] leading-[1.04] tracking-[-0.03em] sm:text-[42px]">
                Invest in strategies. Not stock tips.
              </h1>
              <p className="mt-2.5 max-w-2xl text-[13px] leading-relaxed text-white/75 sm:text-[14px]">
                Discover research-backed US equity model portfolios built around
                powerful investment themes, quantitative factors and fundamental
                strategies.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <a href="#portfolios" className="btn btn-brand">
                  Explore portfolios
                  <ArrowRight aria-hidden="true" className="size-4" />
                </a>
                <a
                  href="#how-it-works"
                  className="btn border border-white/25 bg-white/5 text-white hover:bg-white/10"
                >
                  How it works
                </a>
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-[10.5px] text-white/60">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                Model portfolios, not personal advice.
              </p>
            </div>

            <div className="hidden rounded-2xl border border-white/15 bg-white/[0.07] p-4 backdrop-blur-sm lg:block">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-medium text-white/70">
                  Construction engine
                </p>
                <Layers aria-hidden="true" className="size-4 text-white/55" />
              </div>
              <dl className="mt-3 space-y-2.5">
                {[
                  ["Coverage universe", index.universeSize.toLocaleString("en-US")],
                  ["Full research reports", index.researchUniverseSize.toLocaleString("en-US")],
                  ["Model strategies", index.portfolios.length.toLocaleString("en-US")],
                  ["Factor scores used", "Growth / Quality / Valuation / Technical"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-[10.5px] text-white/60">{label}</dt>
                    <dd className="tabular text-right text-[11.5px] font-semibold text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-5">
        <PortfolioDiscovery portfolios={index.portfolios} />
      </div>

      <section
        id="how-it-works"
        className="container-page scroll-mt-24 py-8 sm:py-10"
      >
        <div className="max-w-2xl">
          <p className="kicker">How it works</p>
          <h2 className="display mt-2 text-[28px] tracking-[-0.025em] text-ink sm:text-[34px]">
            Systematic construction, transparent reviews.
          </h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Start with real coverage",
              body: "The eligible universe is the existing 3,696-name US screener, not a separate list. Research-covered companies are linked to their full reports.",
            },
            {
              step: "02",
              title: "Rank inside a strategy",
              body: "Each portfolio has its own factor weights, size, sector and quality rules. The engine selects and sizes holdings with stock and sector caps.",
            },
            {
              step: "03",
              title: "Review the evidence",
              body: "Performance is a clearly labelled current-constituent simulation. Rebalancing proposals are explainable candidates, never automatic trades.",
            },
          ].map((item) => (
            <article key={item.step} className="card p-4">
              <span className="tabular text-[11px] font-medium text-brand">
                {item.step}
              </span>
              <h3 className="display mt-2 text-[17px] leading-[1.2] text-ink">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-xl border border-line bg-paper-deep px-3.5 py-3">
          <Bookmark aria-hidden="true" className="size-4 text-brand" />
          <p className="mr-auto text-[11px] text-muted">
            Save portfolios to your local-first watchlist. No account required.
          </p>
          <Link href="/watchlist" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
            Open saved portfolios
          </Link>
        </div>
      </section>

      <div className="container-page pb-8">
        <Disclaimer />
      </div>
    </>
  );
}
