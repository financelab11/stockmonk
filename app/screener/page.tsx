import type { Metadata } from "next";
import { ChevronDown, Download, Search, ShieldCheck } from "lucide-react";
import { ColumnsMenu } from "@/components/screener/columns-menu";
import { ScreenerControls } from "@/components/screener/screener-controls";
import { ScreenerTable } from "@/components/screener/screener-table";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import {
  applyScreenerFilters,
  buildScreenerUrl,
  parseScreenerParams,
  SCREENER_COLUMNS,
} from "@/lib/screener-filters";
import {
  getScreenerDistributions,
  getScreenerFactorConfig,
  getScreenerGroups,
  getScreenerResearchScreens,
  getScreenerRows,
  getScreenerSummary,
} from "@/lib/screener-data";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "US equity screener",
  description:
    "A five-factor quantitative screener for thousands of US-listed companies, covering Growth, Quality, Valuation, Momentum and Low Volatility.",
  alternates: { canonical: "/screener" },
  openGraph: {
    title: "US equity screener · Stockmonk",
    description:
      "Multi-factor scores and every underlying parameter for thousands of US-listed companies.",
    url: "/screener",
  },
};

export default async function ScreenerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const raw = await searchParams;
  const params = parseScreenerParams(raw);
  const rows = getScreenerRows();
  const summary = getScreenerSummary();
  const factors = getScreenerFactorConfig();
  const filteredRows = applyScreenerFilters(rows, params);
  const distributions = getScreenerDistributions();
  const researchScreens = getScreenerResearchScreens();
  const groups = getScreenerGroups();
  const selectedColumns = SCREENER_COLUMNS.filter((column) => params.cols.includes(column.key));
  const columnChoices = SCREENER_COLUMNS.map(({ key, label, group }) => ({ key, label, group }));
  const baseSearch = buildScreenerUrl(params, {}).split("?")[1] ?? "";
  const activeCount =
    Object.values(params.ranges).filter((value) => value != null).length +
    (params.q ? 1 : 0) +
    (params.group ? 1 : 0) +
    (params.min ? 1 : 0);

  const sidebarProps = {
    params,
    distributions,
    researchScreens,
    groups,
    activeCount,
    initialCount: filteredRows.length,
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "US equity screener", path: "/screener" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="mx-auto w-full max-w-[1536px] px-4 py-6 sm:px-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10.5px] text-muted">
            <a href="/" className="hover:text-ink">Home</a>
            <span aria-hidden="true">›</span>
            <span className="text-ink">US equity screener</span>
          </nav>
          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="kicker">Quantitative screening</p>
              <h1 className="display mt-1 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
                US equity screener
              </h1>
              <p className="mt-2 max-w-2xl text-[13px] leading-relaxed text-muted">
                Filter, compare and rank {summary.count.toLocaleString("en-US")} US-listed
                companies across five independent factors. Every parameter is visible
                and ranked within its coverage group.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-soft">
                <ShieldCheck className="size-3.5 text-positive" />
                Sourced fundamentals
              </span>
              <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-soft">
                Daily reports
              </span>
              <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-soft">
                {summary.count.toLocaleString("en-US")} stocks
              </span>
            </div>
          </div>
          <p className="mt-3 text-[10.5px] text-muted">
            Full reports as of {summary.asOfCurated ?? summary.asOf ?? "the latest dataset"}
            {" · "}expanded universe snapshot as of {summary.asOfBulk ?? "the latest bulk export"}
            {" · "}median score{" "}
            <span className="tabular font-semibold text-ink">{summary.median ?? "n/a"}</span> ·
            average score{" "}
            <span className="tabular font-semibold text-ink">{summary.average ?? "n/a"}</span> ·
            score bands are quantitative, not recommendations.
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1536px] px-4 pb-40 pt-5 sm:px-6 lg:pb-14">
        <div className="grid gap-4 lg:grid-cols-[290px_minmax(0,1fr)] lg:items-start">
          <ScreenerControls {...sidebarProps} />

          <section className="min-w-0">
            <div className="rounded-xl border border-line bg-surface p-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <form action="/screener" method="get" className="flex min-w-0 flex-1 items-center gap-2">
                  {Object.entries(params.ranges).map(([key, value]) =>
                    value == null ? null : (
                      <input key={key} type="hidden" name={key} value={String(value)} />
                    ),
                  )}
                  {params.group && <input type="hidden" name="group" value={params.group} />}
                  {params.min > 0 && <input type="hidden" name="min" value={String(params.min)} />}
                  {params.view !== "overview" && <input type="hidden" name="view" value={params.view} />}
                  <input type="hidden" name="sort" value={params.sort} />
                  <input type="hidden" name="dir" value={params.dir} />
                  <input type="hidden" name="cols" value={params.cols.join(",")} />
                  <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-lg border border-line bg-paper px-3">
                    <Search aria-hidden="true" className="size-3.5 shrink-0 text-muted" />
                    <span className="sr-only">Search stocks</span>
                    <input
                      name="q"
                      defaultValue={params.q}
                      placeholder="Search stocks…"
                      className="min-w-0 flex-1 bg-transparent text-[12px] text-ink outline-none placeholder:text-faint"
                    />
                  </label>
                  <button type="submit" className="btn btn-ghost h-9 min-h-0 px-3 text-[11px]">Search</button>
                </form>
                <div className="flex items-center gap-2">
                  <span className="hidden text-[10.5px] text-muted sm:inline">
                    {filteredRows.length} stocks
                    {activeCount > 0 ? ` · ${activeCount} active` : ""}
                  </span>
                  <ColumnsMenu
                    columns={columnChoices}
                    selected={params.cols}
                    baseSearch={baseSearch}
                  />
                  <a
                    href={`/api/screener/export?${baseSearch}`}
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 text-[11px] font-semibold text-ink-soft hover:border-line-strong hover:text-ink"
                  >
                    <Download aria-hidden="true" className="size-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <ScreenerTable
                rows={filteredRows}
                factors={factors}
                params={params}
                columns={selectedColumns}
              />
            </div>
          </section>
        </div>

        <section id="methodology" className="mt-10 scroll-mt-24 border-t border-line pt-8">
          <details className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
            <div>
              <p className="kicker">Model architecture</p>
              <h2 className="display mt-2 text-[24px] leading-tight tracking-[-0.02em] text-ink sm:text-[28px]">
                Five factors, explicit weights, visible parameters
              </h2>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
                Expand to read how the scores are built.
              </p>
            </div>
            <span className="mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform group-open:rotate-180">
              <ChevronDown aria-hidden="true" className="size-4" />
            </span>
          </summary>
          <div className="mt-5 max-w-3xl">
            <p className="text-[12.5px] leading-relaxed text-muted">
              Raw parameters are winsorized at the 2nd and 98th percentile and
              converted to 0–100 percentiles within the company&apos;s coverage group
              where enough peers exist, otherwise across the full universe.
              Lower-is-better metrics are reversed. Factor scores are weighted
              averages of available parameters; the composite re-normalises across
              the available factors and requires at least three of them. Missing
              data is shown as n/a.
            </p>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
              Coverage comes from two SimFin feeds. The 229 full research reports
              refresh daily from the Web API. The expanded universe is built from
              SimFin&apos;s free bulk export, which runs about a year behind; the
              snapshot date is shown above and each row&apos;s price date appears in
              its detail panel. Companies without usable fundamentals remain
              searchable with n/a scores and no composite.
            </p>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {factors.map((factor) => (
              <div key={factor.key} className="card p-4">
                <div className="flex items-baseline justify-between gap-2">
                  <div>
                    <p className="text-[12px] font-semibold text-ink">{factor.label}</p>
                    <p className="mt-0.5 text-[10.5px] text-muted">{factor.description}</p>
                  </div>
                  <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[10px] font-bold text-brand">
                    {Math.round(factor.weight * 100)}%
                  </span>
                </div>
                <div className="mt-2 grid gap-1 text-[10px] text-muted">
                  {factor.parameters.map((parameter) => (
                    <div key={parameter.key} className="flex items-baseline justify-between gap-2">
                      <span>{parameter.label}</span>
                      <span className="tabular text-[9px] text-faint">
                        {Math.round((parameter.weight / factor.parameters.reduce((sum, item) => sum + item.weight, 0)) * 1000) / 10}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 max-w-3xl text-[10.5px] leading-relaxed text-muted">
            Composite weights: Growth 20%, Quality 25%, Valuation 20%, Momentum
            20%, Low Volatility 15%. Score bands are descriptive ranges, not
            investment recommendations. The model does not use Stockmonk ratings
            or price targets.
          </p>
          </details>
        </section>

        <div className="mt-8">
          <Disclaimer variant="boxed" />
        </div>
      </main>
    </>
  );
}
