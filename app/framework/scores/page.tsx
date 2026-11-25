import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getV2Score } from "@/lib/scores-v2-data";
import { classifyComponent, round } from "@/lib/scoring-v2/util";
import { breadcrumbJsonLd } from "@/lib/seo";

export const revalidate = false;

export const metadata: Metadata = {
  title: "Score methodology",
  description:
    "How Stockmonk calculates Growth, Quality, Valuation and Technical scores, the composite weighting, coverage rules and N/A handling.",
  alternates: { canonical: "/framework/scores" },
  openGraph: {
    title: "Score methodology · Stockmonk",
    description:
      "A deterministic four-factor score with explicit evidence, coverage and audit dates.",
    url: "/framework/scores",
  },
};

const COMPONENTS = [
  {
    name: "Growth",
    weight: "25%",
    inputs:
      "Revenue and diluted EPS growth, revenue acceleration, gross-margin trend, demand quality, surprises, revisions, forward growth and reinvestment.",
  },
  {
    name: "Quality",
    weight: "35%",
    inputs:
      "ROIC, ROE, ROA, incremental returns, ROIC versus estimated WACC, margins, cash conversion, moat evidence, capital allocation and balance-sheet resilience.",
  },
  {
    name: "Valuation",
    weight: "25%",
    inputs:
      "Current multiples versus own history and peers, growth-adjusted multiples, PEG where meaningful, earnings yield and free-cash-flow yield.",
  },
  {
    name: "Technical",
    weight: "15%",
    inputs:
      "Market and sector trend, 50/200-DMA structure, relative strength, volume and accumulation, base/breakout, RSI/MACD/ROC and ATR-based entry risk.",
  },
];

const BANDS = [
  ["85–100", "Exceptional"],
  ["75–84", "Strong"],
  ["65–74", "Good"],
  ["50–64", "Average"],
  ["35–49", "Weak"],
  ["0–34", "Poor"],
];

const EXAMPLES = ["NVDA", "MSFT", "JPM"];

export default function V2MethodologyPage() {
  const examples = EXAMPLES.map((ticker) => getV2Score(ticker)).filter(
    (record): record is NonNullable<typeof record> => Boolean(record),
  );

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Framework", path: "/framework" },
          { name: "Score methodology", path: "/framework/scores" },
        ])}
      />

      <section className="surface-tint border-b border-line">
        <div className="container-page py-8 lg:py-12">
          <p className="kicker">Methodology</p>
          <h1 className="display mt-2 max-w-3xl text-[36px] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[48px]">
            Four scores. One evidence trail.
          </h1>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-soft">
            Growth, Quality, Valuation and Technical are calculated independently
            from the same dataset. The composite is a fixed weighted sum, not an
            editorial verdict. Every input can be traced to its value, period,
            source, formula, points earned and coverage.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="#formula" className="btn btn-primary">
              See the formula
            </a>
            <Link href="/discover" className="btn btn-ghost">
              Browse companies
            </Link>
          </div>
        </div>
      </section>

      <div className="container-page max-w-[920px] py-9">
        <section>
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            The four components
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {COMPONENTS.map((component) => (
              <div key={component.name} className="card-flat p-4">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="display text-[17px] leading-tight text-ink">
                    {component.name}
                  </h3>
                  <span className="tabular text-[12px] font-semibold text-brand">
                    {component.weight}
                  </span>
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  {component.inputs}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="formula" className="mt-10">
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            Composite formula
          </h2>
          <div className="mt-3 rounded-xl border border-line bg-paper-deep p-4">
            <p className="font-mono text-[13px] leading-relaxed text-ink">
              Composite = Growth × 0.25 + Quality × 0.35 + Valuation × 0.25 +
              Technical × 0.15
            </p>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {BANDS.map(([range, label]) => (
              <div
                key={range}
                className="flex items-center justify-between rounded-lg border border-line bg-surface px-3 py-2"
              >
                <span className="tabular text-[12px] text-muted">{range}</span>
                <span className="text-[12px] font-semibold text-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            Coverage and N/A rules
          </h2>
          <div className="prose-editorial mt-3">
            <p>
              Each component has a maximum point total. A metric that is genuinely
              inapplicable is marked N/A and removed from that component&apos;s
              denominator. Missing data is not treated as zero. Coverage is the
              available maximum points divided by the total maximum points.
            </p>
            <p>
              A component below 70% coverage is marked <strong>Provisional</strong>.
              If any of the four components is below 70%, the composite is shown as{" "}
              <strong>Incomplete</strong> rather than producing a misleading total.
              The individual scores remain visible.
            </p>
            <p>
              Scores are deterministic. The narrative may interpret the evidence,
              but it cannot change a score, create a missing metric or turn an N/A
              into zero. Each score record carries the market-data date.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            Worked examples
          </h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-line">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead className="bg-paper-deep text-[10.5px] text-muted">
                <tr>
                  <th className="px-3 py-2 font-semibold">Company</th>
                  <th className="px-3 py-2 text-right font-semibold">Growth</th>
                  <th className="px-3 py-2 text-right font-semibold">Quality</th>
                  <th className="px-3 py-2 text-right font-semibold">Valuation</th>
                  <th className="px-3 py-2 text-right font-semibold">Technical</th>
                  <th className="px-3 py-2 text-right font-semibold">Composite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line text-[12.5px]">
                {examples.map((record) => (
                  <tr key={record.ticker}>
                    <td className="px-3 py-2">
                      <Link
                        href={`/stocks/${record.ticker}`}
                        className="font-semibold text-ink hover:text-brand"
                      >
                        {record.ticker}
                      </Link>
                      <span className="ml-1.5 text-muted">{record.name}</span>
                    </td>
                    {(["growth", "quality", "valuation", "technical"] as const).map(
                      (key) => {
                        const score = record.scores[key];
                        return (
                          <td
                            key={key}
                            className="tabular px-3 py-2 text-right text-ink"
                            title={`${classifyComponent(score.score)} · ${Math.round(
                              score.coverage * 100,
                            )}% coverage`}
                          >
                            {score.score == null ? "N/A" : round(score.score, 0)}
                          </td>
                        );
                      },
                    )}
                    <td className="tabular px-3 py-2 text-right font-semibold text-ink">
                      {record.composite.score == null
                        ? "Incomplete"
                        : round(record.composite.score, 0)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted">
            Scores are descriptive classifications, not recommendations. The
            examples use the latest available dataset and may differ from the
            live score after the next data refresh.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="display text-[30px] leading-tight tracking-[-0.025em] text-ink">
            Limits
          </h2>
          <div className="prose-editorial mt-3">
            <p>
              Moat and management are scored from observable evidence such as
              margin durability, returns above the cost of capital, dilution,
              capital returns and surprise history. They are not a substitute for
              reading the filing, and insider/Form 4 evidence is not yet part of
              the automated score.
            </p>
            <p>
              Technical scores are a description of price behaviour, not a
              forecast. They can change quickly and should be read with the data
              date. A high score is not a buy signal; a low score is not a sell
              signal.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <Disclaimer variant="boxed" />
        </div>
      </div>
    </>
  );
}
