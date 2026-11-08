import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Calculator,
  Database,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck,
  Target,
  Wallet,
} from "lucide-react";
import { QualityChart, type QualityPoint } from "@/components/framework/quality-chart";
import { StockLogo } from "@/components/stock-logo";
import { DataSourcesRow } from "@/components/ui/data-sources-row";
import { ProCTA } from "@/components/ui/pro-cta";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllCompanies, getResearchBundle } from "@/lib/data";
import { median } from "@/lib/article";
import { formatMultiple, formatPercent } from "@/lib/format";
import { breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Our framework",
  description:
    "How Stockmonk approaches company analysis: sourced data, business model, growth, margins, cash flow, returns on capital, balance sheet and valuation context. No ratings, no price targets.",
  alternates: { canonical: "/framework" },
  openGraph: {
    title: "Our framework · Stockmonk",
    description:
      "A repeatable process for reading a business before valuing it.",
    url: "/framework",
  },
};

function buildQualitySeries(): QualityPoint[] {
  const companies = getAllCompanies();
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
  return years.map((year) => {
    const rows = companies
      .map((company) => company.annual.find((row) => row.fyear === year && !row.ttm))
      .filter((row): row is NonNullable<typeof row> => Boolean(row));
    return {
      year,
      operatingMargin: median(rows.map((row) => row.operatingMargin)),
      netMargin: median(rows.map((row) => row.netMargin)),
      companies: rows.length,
    };
  });
}

export default function FrameworkPage() {
  const quality = buildQualitySeries();
  const examples = ["NVDA", "MSFT", "JPM"]
    .map((ticker) => getResearchBundle(ticker))
    .filter((bundle): bundle is NonNullable<typeof bundle> => Boolean(bundle));

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Framework", path: "/framework" },
        ])}
      />

      <section className="surface-tint border-b border-line">
        <div className="container-page py-8 lg:py-12">
          <p className="kicker">Methodology</p>
          <h1 className="display mt-2 max-w-3xl text-[36px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[48px]">
            Read the business first. The valuation can wait.
          </h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
            Stockmonk is a research library, not a stock picker. This page
            documents the process behind every report: what we collect, how we
            calculate it, how we compare companies and where the limits are.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#methodology" className="btn btn-primary">Jump to formulas</a>
            <Link href="/data-sources" className="btn btn-ghost">Data sources</Link>
          </div>
        </div>
      </section>

      <div className="container-page max-w-[920px] py-9">
        <section>
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            How do we approach investing?
          </h2>
          <div className="prose-editorial mt-3">
            <p>
              A share price moves for many reasons, most of them short-lived. A
              business changes more slowly. Our approach is to start with the
              financial statements and filings, build a picture of how the company
              makes money, and only then look at what the market is paying.
            </p>
            <p>
              That order matters. If you begin with the multiple, you tend to
              rationalise the price. If you begin with the business, you can ask
              whether the multiple is being applied to a durable earnings base or
              a cyclical peak.
            </p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="card p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-positive">What we do</p>
              <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-ink-soft">
                <li>• Read annual and quarterly statements.</li>
                <li>• Trace segment and geography mix to the 10-K.</li>
                <li>• Compute our own margins, growth and returns.</li>
                <li>• Compare multiples with peers and with history.</li>
                <li>• Attribute third-party consensus to its source.</li>
              </ul>
            </div>
            <div className="card p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-danger">What we do not do</p>
              <ul className="mt-2 space-y-1.5 text-[11.5px] leading-relaxed text-ink-soft">
                <li>• Issue buy, sell or hold ratings.</li>
                <li>• Publish Stockmonk price targets.</li>
                <li>• Invent testimonials or performance claims.</li>
                <li>• Explain a price move without evidence.</li>
                <li>• Treat a screen as a recommendation.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            Quality is a distribution, not a slogan
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
            The chart below is not a backtest or a portfolio return. It is the
            median reported operating margin of the companies in our universe,
            by fiscal year. It shows why a single year can mislead.
          </p>
          <div className="mt-4">
            <QualityChart points={quality} />
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            How does our analysis work?
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
            Every research report follows the same ten-section structure. Three
            examples show how the emphasis changes with the business model.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {examples.map((bundle) => (
              <Link key={bundle.data.ticker} href={`/stocks/${bundle.data.ticker}`} className="card p-3.5 hover:border-brand/40">
                <div className="flex items-center gap-2">
                  <StockLogo ticker={bundle.data.ticker} size={28} />
                  <span className="font-mono text-[10px] font-semibold text-muted">{bundle.data.ticker}</span>
                </div>
                <p className="mt-2 text-[12px] font-semibold leading-snug text-ink">{bundle.data.name}</p>
                <p className="mt-1 text-[10.5px] leading-relaxed text-muted">
                  {formatPercent(bundle.data.metrics.revenueGrowthTtm)} revenue growth ·{" "}
                  {formatPercent(bundle.data.metrics.operatingMargin)} op margin ·{" "}
                  {formatMultiple(bundle.data.metrics.evEbitda)} EV/EBITDA
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand">
                  See the report <ArrowRight aria-hidden="true" className="size-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            What data do we use?
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
            Data flows in from four primary sources, is normalised into typed
            files, and is rendered with a consolidated source list and as-of
            date.
          </p>
          <div className="mt-4 rounded-xl border border-line bg-surface p-4">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { icon: Database, label: "SimFin", detail: "Statements & prices" },
                { icon: Landmark, label: "SEC EDGAR", detail: "10-K / 10-Q / 8-K" },
                { icon: BarChart3, label: "Consensus", detail: "Yahoo / Nasdaq" },
                { icon: FileSearch, label: "Filings", detail: "Segments & risks" },
              ].map((source) => {
                const Icon = source.icon;
                return (
                  <div key={source.label} className="rounded-lg border border-line bg-paper p-3 text-center">
                    <Icon aria-hidden="true" className="mx-auto size-4 text-brand" />
                    <p className="mt-1 text-[11px] font-semibold text-ink">{source.label}</p>
                    <p className="text-[9.5px] text-muted">{source.detail}</p>
                  </div>
                );
              })}
            </div>
            <div className="my-3 flex justify-center">
              <ArrowDown aria-hidden="true" className="size-4 text-faint" />
            </div>
            <div className="rounded-lg bg-brand-deep px-4 py-3 text-center text-white">
              <p className="display text-[19px] tracking-[-0.02em]">Stockmonk normalisation</p>
              <p className="mt-0.5 text-[10px] text-white/55">
                Deduplicate periods · reconcile fiscal calendars · validate schemas
              </p>
            </div>
            <div className="my-3 flex justify-center">
              <ArrowDown aria-hidden="true" className="size-4 text-faint" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Research report", "Data screens", "Newsfeed item"].map((output) => (
                <div key={output} className="rounded-lg border border-line bg-brand-soft/60 px-2 py-2 text-center text-[10.5px] font-semibold text-brand-deep">
                  {output}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3">
            <DataSourcesRow compact />
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            How do we analyse the data?
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                icon: BarChart3,
                title: "Growth",
                body: "Revenue and EPS growth are computed from discrete quarters and annual periods. We show the trailing-twelve-month rate and the latest quarter year-over-year rate separately.",
              },
              {
                icon: Target,
                title: "Profitability",
                body: "Gross, operating and net margins are divided by revenue for the same period. We do not mix a quarterly numerator with an annual denominator.",
              },
              {
                icon: Wallet,
                title: "Cash flow",
                body: "Free cash flow is operating cash flow less capital expenditure. FCF margin divides that by revenue. Negative FCF is shown as negative, not smoothed.",
              },
              {
                icon: Calculator,
                title: "Returns on capital",
                body: "ROIC uses NOPAT divided by average invested capital. NOPAT applies the reported effective tax rate where available; the framework documents the assumption.",
              },
              {
                icon: ShieldCheck,
                title: "Balance sheet",
                body: "Net debt is total debt less cash and short-term investments. Net debt/EBITDA uses trailing EBITDA. Banks are flagged because these measures are not meaningful for them.",
              },
              {
                icon: Scale,
                title: "Valuation",
                body: "P/E, EV/EBITDA, EV/Sales and P/FCF use the latest close and trailing fundamentals. The multiple history is sampled monthly; peer medians exclude the subject company.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card p-4">
                  <div className="flex items-center gap-2">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <h3 className="text-[13px] font-semibold text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-[11.5px] leading-relaxed text-muted">{item.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            How do we approach valuation?
          </h2>
          <div className="prose-editorial mt-3">
            <p>
              Valuation is a comparison, not a prophecy. We show the multiple the
              market is paying, the company&apos;s own range over the last five
              years, and the peer median on the same metric. Where the multiple is
              not meaningful — for example, a bank&apos;s EV/EBITDA — we say so.
            </p>
            <p>
              Analyst consensus appears only with attribution: provider, as-of
              date, analyst count and the distribution of ratings. A mean target
              is a third-party number, not a Stockmonk target. We do not convert it
              into a recommendation.
            </p>
          </div>
          <div className="mt-4 rounded-xl border border-line bg-coral-soft p-4">
            <p className="text-[11.5px] leading-relaxed text-ink-soft">
              <strong className="text-ink">The explicit line:</strong> Stockmonk
              does not provide buy, sell or hold ratings and does not publish its
              own price targets. If a page appears to imply otherwise, it is a bug
              and should be reported.
            </p>
          </div>
        </section>

        <section className="mt-9">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            The Stockmonk framework in three principles
          </h2>
          <div className="mt-4 space-y-3">
            {[
              {
                number: "01",
                title: "Diversify across businesses, not stories",
                body: "A portfolio concentrated in one theme is a bet on that theme, not a research process. The framework encourages spreading exposure across sectors and business models, and understanding what each company depends on.",
                visual: "tiles",
              },
              {
                number: "02",
                title: "Give the business time to compound",
                body: "Quarterly noise is not the same as a broken thesis. A three-to-five-year horizon gives a business time to show whether its reinvestment is working, while still forcing a periodic review.",
                visual: "timeline",
              },
              {
                number: "03",
                title: "Separate a good business from a good price",
                body: "Quality and valuation are different questions. A great company can be a poor investment at an extreme multiple; a cheap company can be a value trap. The framework asks both questions separately.",
                visual: "range",
              },
            ].map((principle) => (
              <div key={principle.number} className="card grid gap-4 p-4 sm:grid-cols-[1fr_180px] sm:items-center">
                <div>
                  <p className="font-mono text-[10px] font-semibold text-brand">{principle.number}</p>
                  <h3 className="display mt-1 text-[21px] leading-tight tracking-[-0.015em] text-ink">{principle.title}</h3>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted">{principle.body}</p>
                </div>
                <div className="rounded-lg bg-paper-deep p-3">
                  {principle.visual === "tiles" && (
                    <div className="grid grid-cols-5 gap-1">
                      {Array.from({ length: 20 }).map((_, index) => (
                        <span
                          key={index}
                          className="aspect-square rounded-[2px]"
                          style={{
                            backgroundColor:
                              index % 7 === 0 ? "#ff7a45" : index % 3 === 0 ? "#8b3dff" : "#2f6bff",
                            opacity: 0.35 + (index % 5) * 0.12,
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {principle.visual === "timeline" && (
                    <div className="flex items-end gap-1">
                      {[24, 32, 40, 52, 58, 70, 78, 92].map((height, index) => (
                        <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-brand to-violet" style={{ height: `${height}px` }} />
                      ))}
                    </div>
                  )}
                  {principle.visual === "range" && (
                    <div>
                      <div className="range-track">
                        <span className="range-marker" style={{ left: "62%" }} />
                      </div>
                      <div className="mt-2 flex justify-between text-[8.5px] text-muted">
                        <span>Low</span><span>Median</span><span>High</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="methodology" className="mt-9 scroll-mt-24">
          <h2 className="display text-[27px] leading-tight tracking-[-0.02em] text-ink">
            Methodology: exact formulas
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
            These are the definitions used by the data pipeline and the charts.
            Where a company&apos;s reported data does not fit, the field is shown
            as n/a rather than forced into a formula.
          </p>
          <div className="mt-4 overflow-x-auto rounded-xl border border-line">
            <table className="data-table min-w-[720px]">
              <thead>
                <tr>
                  <th scope="col">Metric</th>
                  <th scope="col">Definition</th>
                  <th scope="col">Caveat</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Revenue growth (TTM)", "(TTM revenue ÷ prior TTM revenue) − 1", "Prior TTM is the four quarters ending one year earlier."],
                  ["Latest-quarter growth", "(Latest quarter revenue ÷ same quarter last fiscal year) − 1", "Quarter labels follow the company's fiscal calendar."],
                  ["Gross margin", "Gross profit ÷ revenue", "Uses the same period for numerator and denominator."],
                  ["Operating margin", "Operating income ÷ revenue", "Reported operating income; adjustments are not applied."],
                  ["FCF margin", "(Operating cash flow − capex) ÷ revenue", "Capex is treated as a positive outflow."],
                  ["ROIC", "NOPAT ÷ average invested capital", "NOPAT uses the reported effective tax rate where available."],
                  ["Net debt", "Total debt − cash & short-term investments", "Negative values are shown as net cash."],
                  ["Net debt / EBITDA", "Net debt ÷ trailing EBITDA", "n/a for banks and some financials."],
                  ["P/E", "Share price ÷ trailing diluted EPS", "Trailing, not forward; forward P/E uses consensus when available."],
                  ["EV/EBITDA", "(Market cap + net debt) ÷ trailing EBITDA", "Market cap uses the latest close."],
                  ["EV/Sales", "(Market cap + net debt) ÷ trailing revenue", "Useful for low-margin businesses."],
                  ["P/FCF", "Market cap ÷ trailing free cash flow", "n/a when FCF is negative."],
                  ["FCF yield", "Trailing free cash flow ÷ market cap", "The inverse of P/FCF."],
                  ["Factor percentile", "Percent of covered companies at or below the metric", "Descriptive screen, not a rating."],
                  ["Peer median", "Median of the comparable set excluding the subject", "Peer sets are editorial and documented per report."],
                ].map(([metric, definition, caveat]) => (
                  <tr key={metric}>
                    <td className="font-medium text-ink">{metric}</td>
                    <td className="min-w-[260px]">{definition}</td>
                    <td className="min-w-[220px]">{caveat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
            Consensus data is third-party and can lag. Segment mixes come from
            XBRL dimensional facts or curated 10-K member lists; the report names
            the basis. Logos are used for identification only and fall back to a
            monogram. Read the full{" "}
            <Link href="/data-sources" className="link-underline">data notes</Link>.
          </p>
        </section>

        <div className="mt-9">
          <ProCTA context="page" />
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 rounded-xl border border-line bg-surface p-4">
          <div className="flex items-center gap-2">
            <BookOpenCheck aria-hidden="true" className="size-4 text-brand" />
            <p className="text-[11.5px] text-ink-soft">Want the source list and refresh process?</p>
          </div>
          <Link href="/data-sources" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
            Data sources →
          </Link>
        </div>

        <Disclaimer variant="boxed" className="mt-6" />
      </div>
    </>
  );
}
