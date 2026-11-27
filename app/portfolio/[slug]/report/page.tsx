import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ExternalLink,
  FileText,
} from "lucide-react";
import { JsonLd } from "@/components/seo/json-ld";
import { PortfolioLogo } from "@/components/portfolios/portfolio-logo";
import { StockLogo } from "@/components/stock-logo";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getPortfolio, getPortfolioSlugs } from "@/lib/portfolios/data";
import { breadcrumbJsonLd } from "@/lib/seo";
import { formatDate, formatSignedPercent } from "@/lib/format";

export const revalidate = 3600;
export const dynamicParams = false;

export function generateStaticParams() {
  return getPortfolioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = getPortfolio(slug);
  if (!portfolio) return { title: "Portfolio report not found" };
  return {
    title: `${portfolio.name} - portfolio research report`,
    description: portfolio.report.dek,
    alternates: { canonical: `/portfolio/${portfolio.slug}/report` },
    openGraph: {
      title: `${portfolio.name} - Stockmonk portfolio report`,
      description: portfolio.report.dek,
      url: `/portfolio/${portfolio.slug}/report`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${portfolio.name} research report`,
        },
      ],
    },
  };
}

export default async function PortfolioReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolio = getPortfolio(slug);
  if (!portfolio) notFound();

  const byTicker = new Map(
    portfolio.constituents.map((item) => [item.ticker, item]),
  );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: portfolio.name, path: `/portfolio/${portfolio.slug}` },
            {
              name: "Research report",
              path: `/portfolio/${portfolio.slug}/report`,
            },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: portfolio.report.headline,
            description: portfolio.report.dek,
            datePublished: portfolio.updatedAt,
            dateModified: portfolio.updatedAt,
            author: {
              "@type": "Organization",
              name: "Stockmonk Quant Research",
              url: "https://stockmonk.app/framework",
            },
            publisher: {
              "@type": "Organization",
              name: "Stockmonk",
              url: "https://stockmonk.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://stockmonk.app/portfolio/${portfolio.slug}/report`,
            },
          },
        ]}
      />

      <div className="container-page max-w-[1100px] py-6 sm:py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted"
        >
          <Link href="/portfolio" className="hover:text-ink">
            Portfolio
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/portfolio/${portfolio.slug}`} className="hover:text-ink">
            {portfolio.name}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">Research report</span>
        </nav>

        <header className="mt-4 border-b border-line pb-5">
          <div className="flex items-start gap-3.5">
            <PortfolioLogo
              slug={portfolio.slug}
              category={portfolio.primaryCategory}
              size={50}
              priority
              className="mt-0.5"
            />
            <div>
              <p className="kicker">Portfolio research report</p>
              <h1 className="display mt-1 max-w-4xl text-[30px] leading-[1.08] tracking-[-0.03em] text-ink sm:text-[40px]">
                {portfolio.name}
              </h1>
            </div>
          </div>
          <p className="mt-2 max-w-3xl text-[14px] leading-[1.7] text-ink-soft">
            {portfolio.report.dek}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted">
            <span className="inline-flex items-center gap-1 font-semibold text-brand">
              <FileText aria-hidden="true" className="size-3.5" />
              {portfolio.primaryCategory}
            </span>
            <span>Methodology {portfolio.methodology.version}</span>
            <span>Data as of {formatDate(portfolio.updatedAt)}</span>
            <span>{portfolio.holdingsCount} holdings</span>
            <span>Benchmark: {portfolio.benchmark.name}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              href={`/portfolio/${portfolio.slug}?tab=overview`}
              className="btn btn-ghost h-9 min-h-0 px-3 text-[12px]"
            >
              <ArrowLeft aria-hidden="true" className="size-3.5" />
              Portfolio overview
            </Link>
            <Link
              href={`/portfolio/${portfolio.slug}?tab=constituents`}
              className="btn btn-primary h-9 min-h-0 px-3 text-[12px]"
            >
              View constituents
              <ArrowRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_280px]">
          <article className="space-y-6">
            {portfolio.report.sections.map((section, index) => (
              <section
                key={section.title}
                id={`report-${index + 1}`}
                className="scroll-mt-28"
              >
                <div className="flex items-baseline gap-2">
                  <span className="tabular text-[11px] font-medium text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="display text-[23px] tracking-[-0.02em] text-ink sm:text-[26px]">
                    {section.title}
                  </h2>
                </div>
                <div className="prose-editorial mt-2 space-y-3">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="!text-[14px] !leading-[1.75]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <section
              id="constituent-notes"
              className="scroll-mt-28 border-t border-line pt-5"
            >
              <div className="flex items-baseline gap-2">
                <span className="tabular text-[11px] font-medium text-brand">
                  {String(portfolio.report.sections.length + 1).padStart(2, "0")}
                </span>
                <h2 className="display text-[23px] tracking-[-0.02em] text-ink sm:text-[26px]">
                  Constituent notes
                </h2>
              </div>
              <p className="mt-1.5 text-[12.5px] leading-[1.6] text-muted">
                Notes use the latest Stockmonk screener evidence. A report link
                is shown only where a full company report exists.
              </p>
              <div className="mt-3 space-y-2">
                {portfolio.report.constituentNotes.map((note) => {
                  const item = byTicker.get(note.ticker);
                  if (!item) return null;
                  const href = item.research
                    ? `/stocks/${item.ticker}`
                    : `/stocks/${item.ticker}/scores`;
                  return (
                    <div
                      key={note.ticker}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-3"
                    >
                      <StockLogo ticker={item.ticker} size={32} />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <Link
                            href={href}
                            className="text-[12.5px] font-medium text-ink hover:text-brand"
                          >
                            {item.name}
                          </Link>
                          <span className="font-mono text-[10.5px] text-muted">
                            {item.ticker}
                          </span>
                          <span className="tabular ml-auto text-[11px] font-medium text-ink">
                            {(item.weight * 100).toFixed(1)}%
                          </span>
                        </div>
                        <p className="mt-0.5 text-[11.5px] leading-[1.6] text-muted">
                          {note.note}
                        </p>
                        <Link
                          href={href}
                          className="mt-1 inline-flex items-center gap-0.5 text-[10.5px] font-medium text-brand"
                        >
                          {item.research ? "Read company research" : "View score evidence"}
                          <ExternalLink aria-hidden="true" className="size-3" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>

          <aside className="space-y-3 lg:sticky lg:top-[110px] lg:self-start">
            <div className="card p-4">
              <p className="kicker text-[10px]">Portfolio snapshot</p>
              <dl className="mt-2 space-y-2">
                {[
                  ["Holdings", String(portfolio.holdingsCount)],
                  ["1Y simulated return", formatSignedPercent(portfolio.return1y)],
                  ["Volatility", portfolio.volatility],
                  ["Investment horizon", portfolio.horizon],
                  ["Benchmark", portfolio.benchmark.name],
                  ["Rebalancing", portfolio.rebalanceFrequency],
                  ["Top 10 weight", `${(portfolio.allocations.top10Weight * 100).toFixed(1)}%`],
                  ["Largest sector", portfolio.allocations.sectors[0]?.label ?? "N/A"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-2 border-b border-line/70 pb-1.5 last:border-0 last:pb-0"
                  >
                    <dt className="text-[10.5px] text-muted">{label}</dt>
                    <dd className="text-right text-[11.5px] font-medium text-ink">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="card p-4">
              <p className="kicker text-[10px]">Report contents</p>
              <ol className="mt-2 space-y-1.5">
                {portfolio.report.sections.map((section, index) => (
                  <li key={section.title}>
                    <a
                      href={`#report-${index + 1}`}
                      className="flex gap-1.5 py-1 text-[11.5px] leading-relaxed text-muted hover:text-brand"
                    >
                      <span className="tabular text-faint">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#constituent-notes"
                    className="flex gap-1.5 py-1 text-[11.5px] leading-relaxed text-muted hover:text-brand"
                  >
                    <span className="tabular text-faint">
                      {String(portfolio.report.sections.length + 1).padStart(2, "0")}
                    </span>
                    Constituent notes
                  </a>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-brand/20 bg-brand-soft p-4">
              <BookOpen aria-hidden="true" className="size-4 text-brand" />
              <p className="mt-1.5 text-[12px] font-medium text-brand-deep">
                Understand every holding
              </p>
              <p className="mt-1 text-[11.5px] leading-[1.6] text-muted">
                Open the constituent table for allocation, market cap, stock
                returns and direct research links.
              </p>
              <Link
                href={`/portfolio/${portfolio.slug}?tab=constituents`}
                className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-brand"
              >
                Open constituents
                <ArrowRight aria-hidden="true" className="size-3" />
              </Link>
            </div>
          </aside>
        </div>

        <div className="mt-7">
          <Disclaimer />
        </div>
      </div>
    </>
  );
}
