import type { Metadata } from "next";
import { ScreenerTable } from "@/components/screener/screener-table";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getScreenerFactorConfig, getScreenerRows, getScreenerSummary } from "@/lib/screener-data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "US equity screener",
  description:
    "A five-factor quantitative screener for 229 US-listed companies, covering Growth, Quality, Valuation, Momentum and Low Volatility.",
  alternates: { canonical: "/screener" },
  openGraph: {
    title: "US equity screener · Stockmonk",
    description:
      "Multi-factor scores and every underlying parameter for 229 US-listed companies.",
    url: "/screener",
  },
};

export default async function ScreenerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const rows = getScreenerRows();
  const summary = getScreenerSummary();
  const factors = getScreenerFactorConfig();
  const factorKeys = new Set(factors.map((factor) => factor.key));
  const requestedView = typeof params.view === "string" ? params.view : "";
  const view = factorKeys.has(requestedView as (typeof factors)[number]["key"])
    ? (requestedView as (typeof factors)[number]["key"])
    : "overview";
  const requestedMin = Number(params.min);
  const min = [0, 50, 65, 80].includes(requestedMin) ? requestedMin : 0;
  const sort =
    typeof params.sort === "string"
      ? params.sort
      : view === "overview"
        ? "composite"
        : view;
  const dir = params.dir === "asc" ? "asc" : "desc";
  const page = Math.max(1, Number(params.page) || 1);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "US equity screener", path: "/screener" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-7">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10.5px] text-muted">
            <a href="/" className="hover:text-ink">Home</a>
            <span aria-hidden="true">›</span>
            <span className="text-ink">US equity screener</span>
          </nav>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker">Quantitative screening</p>
              <h1 className="display mt-1 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[42px]">
                US equity screener
              </h1>
              <p className="mt-2 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                Five independent factor scores on {summary.count} US-listed companies.
                Every parameter is visible, ranked within its coverage group and
                combined into a composite score. The output is a screening tool,
                not a recommendation.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 lg:min-w-[360px]">
              <div className="rounded-xl border border-line bg-surface px-3 py-2.5">
                <p className="stat-label">Companies</p>
                <p className="tabular mt-1 text-[18px] font-semibold text-ink">{summary.count}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface px-3 py-2.5">
                <p className="stat-label">Median score</p>
                <p className="tabular mt-1 text-[18px] font-semibold text-ink">{summary.median ?? "n/a"}</p>
              </div>
              <div className="rounded-xl border border-line bg-surface px-3 py-2.5">
                <p className="stat-label">Average score</p>
                <p className="tabular mt-1 text-[18px] font-semibold text-ink">{summary.average ?? "n/a"}</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-[10.5px] text-muted">
            Prices as of {summary.asOf ?? "the latest dataset"}. Fundamentals and
            consensus refresh through the daily ingestion job. Factor scores are
            percentile ranks, not ratings.
          </p>
        </div>
      </section>

      <div className="container-page py-6">
        <ScreenerTable
          rows={rows}
          factors={factors}
          params={{
            q: typeof params.q === "string" ? params.q : "",
            group: typeof params.group === "string" ? params.group : "",
            min,
            view,
            sort,
            dir,
            page,
            open: typeof params.open === "string" ? params.open : "",
          }}
        />
      </div>

      <section className="container-page py-8">
        <div className="max-w-3xl">
          <p className="kicker">Model architecture</p>
          <h2 className="display mt-2 text-[28px] leading-tight tracking-[-0.02em] text-ink">
            Five factors, explicit weights, visible parameters
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
            Each raw parameter is winsorized at the 2nd and 98th percentile, then
            converted to a 0–100 percentile score within the company's coverage
            group where enough peers exist, otherwise across the full universe.
            Lower-is-better metrics are reversed. A factor score is the
            weighted average of its available parameters; the composite
            re-normalises across the factors that are available. Missing data is
            shown as n/a rather than estimated.
          </p>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {factors.map((factor) => {
            const totalWeight = factor.parameters.reduce(
              (sum, parameter) => sum + parameter.weight,
              0,
            );
            return (
              <div key={factor.key} className="card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[12px] font-semibold text-ink">
                      {factor.label}
                    </p>
                    <p className="mt-0.5 text-[10.5px] text-muted">{factor.description}</p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-bold text-brand">
                    {Math.round(factor.weight * 100)}%
                  </span>
                </div>
                <ul className="mt-2 grid gap-1 text-[10px] text-muted">
                  {factor.parameters.map((parameter) => (
                    <li key={parameter.key} className="flex items-baseline justify-between gap-2">
                      <span>{parameter.label}</span>
                      <span className="tabular shrink-0 text-[9px] text-faint">
                        {Math.round((parameter.weight / totalWeight) * 1000) / 10}%
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <p className="mt-3 max-w-3xl text-[10.5px] leading-relaxed text-muted">
          Composite weights: Growth 20%, Quality 25%, Valuation 20%, Momentum 20%,
          Low Volatility 15%. Score bands are descriptive ranges, not investment
          recommendations. The model does not use Stockmonk ratings or price
          targets.
        </p>
      </section>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
