import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getGrowthRankerDataset, median } from "@/lib/growth-ranker/dataset";
import { rankResults } from "@/lib/growth-ranker/rank";
import {
  inrCompact,
  inrCrore,
  methodLabel,
  methodTone,
  pct,
} from "@/components/tools/growth-ranker/format";

export const metadata: Metadata = {
  title: "Forward Revenue Growth Ranker",
  description:
    "All Indian companies with completed forward revenue estimates, ranked by three-year forward CAGR. Historical growth carries zero weight.",
  alternates: { canonical: "/tools/growth-ranker" },
  openGraph: {
    title: "Forward Revenue Growth Ranker — Stockmonk",
    description:
      "A forward-only revenue ranking: base-case three-year forward CAGR with bear/bull bands and sourced assumptions.",
    url: "/tools/growth-ranker",
  },
};

export default function GrowthRankerPage() {
  const dataset = getGrowthRankerDataset();
  const rows = rankResults(dataset.results);
  const medianCagr = median(rows.map((row) => row.cagrBase));
  const top = rows[0];
  const methods = {
    CONSENSUS: rows.filter((row) => row.method === "CONSENSUS").length,
    CONSENSUS_PLUS_ANALYST_EXTENSION: rows.filter(
      (row) => row.method === "CONSENSUS_PLUS_ANALYST_EXTENSION",
    ).length,
    ANALYST_MODEL: rows.filter((row) => row.method === "ANALYST_MODEL").length,
  };

  return (
    <>
      <section className="surface-tint border-b border-line">
        <div className="container-page py-8 lg:py-11">
          <p className="kicker">India Stocks · Forward estimates</p>
          <h1 className="display mt-2 max-w-3xl text-[34px] leading-[1.05] tracking-[-0.028em] text-ink sm:text-[44px]">
            Forward Revenue Growth Ranker
          </h1>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ink-soft">
            Every Indian company with a completed forward estimate, ranked by
            base-case three-year forward revenue CAGR. The projections are built
            from consensus and forward evidence only. Reported historical growth
            is shown in each note for context and carries zero weight here.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip chip-positive">Forward only</span>
            <span className="chip">3 fiscal years</span>
            <span className="chip">Base case ranked</span>
            <span className="chip">Historical growth excluded</span>
          </div>
          <a
            href="/api/tools/growth-ranker/export"
            className="btn btn-ghost mt-3 inline-flex"
          >
            <Download aria-hidden="true" className="size-3.5" />
            Download all estimates (CSV)
          </a>
          <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
            Generated {dataset.generatedAt.slice(0, 10)} · {dataset.processed} names
            processed · {dataset.estimated} estimates · {dataset.skipped} skipped
            (no consensus) · threshold ₹{dataset.threshold.value.toLocaleString()}{" "}
            crore · FX {dataset.fx.pair} {dataset.fx.rate.toFixed(2)} as of{" "}
            {dataset.fx.asOf}
          </p>
        </div>
      </section>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Summary label="Names ranked" value={String(rows.length)} hint="all completed estimates" />
          <Summary label="Median 3Y CAGR" value={pct(medianCagr)} hint="base case" />
          <Summary
            label="Highest 3Y CAGR"
            value={top ? pct(top.cagrBase) : "n/a"}
            hint={top ? `${top.ticker} · ${top.name}` : undefined}
          />
          <Summary
            label="Consensus-led"
            value={String(
              methods.CONSENSUS + methods.CONSENSUS_PLUS_ANALYST_EXTENSION,
            )}
            hint={`${methods.ANALYST_MODEL} bespoke · ${methods.CONSENSUS_PLUS_ANALYST_EXTENSION} extended`}
          />
        </div>

        <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="data-table min-w-[1040px]">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company</th>
                <th scope="col">Sector</th>
                <th scope="col" className="text-right">Market cap</th>
                <th scope="col" className="text-right">Base year</th>
                <th scope="col" className="text-right">FY+3 base</th>
                <th scope="col" className="text-right">3Y CAGR</th>
                <th scope="col" className="text-right">Bear–bull</th>
                <th scope="col">Method</th>
                <th scope="col" className="text-right">Analysts</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.ticker}>
                  <td className="tabular text-muted">{row.rank}</td>
                  <td>
                    <Link
                      href={`/tools/growth-ranker/${row.ticker}`}
                      className="group block"
                    >
                      <span className="flex items-center gap-1 font-mono text-[11px] font-semibold text-ink group-hover:text-brand">
                        {row.ticker}
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3 text-faint group-hover:text-brand"
                        />
                      </span>
                      <span className="block max-w-[280px] truncate text-[10.5px] text-muted">
                        {row.name}
                      </span>
                    </Link>
                  </td>
                  <td className="text-[10.5px] text-muted">{row.sector}</td>
                  <td className="tabular text-right text-[11px]">
                    {inrCrore(row.marketCapInr)}
                    <span className="block text-[9px] text-faint">{row.marketCapAsOf}</span>
                  </td>
                  <td className="tabular text-right text-[11px]">
                    {row.baseYear}
                    <span className="block text-[9px] text-faint">
                      {inrCompact(row.baseRevenue)}
                    </span>
                  </td>
                  <td className="tabular text-right text-[11px]">
                    {inrCompact(row.fy3Revenue)}
                  </td>
                  <td className="tabular text-right text-[13px] font-semibold text-positive">
                    {pct(row.cagrBase)}
                  </td>
                  <td className="tabular text-right text-[10px] text-muted">
                    {pct(row.cagrBear)} – {pct(row.cagrBull)}
                  </td>
                  <td>
                    <span className={`chip ${methodTone(row.method)}`}>
                      {methodLabel(row.method)}
                    </span>
                  </td>
                  <td className="tabular text-right text-[11px] text-muted">
                    {row.analystCount ?? "n/a"}
                    {row.flagged && (
                      <span className="mt-0.5 block text-[9px] font-semibold text-amber">
                        divergence
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-[10.5px] leading-relaxed text-muted">
          Ranking uses the base case only. Bear and bull cases are a sensitivity
          band around the base and never enter the rank. Click a company for the
          projection, assumptions, sourced evidence and the historical series,
          which is labelled as context only.
        </p>

        <section className="mt-8 card p-5">
          <h2 className="text-[16px] font-semibold text-ink">How to read this table</h2>
          <ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed text-muted">
            <li>
              <strong className="text-ink">Base year:</strong> the last completed
              fiscal year. FY+1 to FY+3 roll forward from that date; non-March
              year-ends are shown in each note.
            </li>
            <li>
              <strong className="text-ink">CAGR:</strong> (FY+3 / FY0)^(1/3) − 1,
              using the base case. FY0 revenue is shown explicitly.
            </li>
            <li>
              <strong className="text-ink">Method:</strong> full three-year
              consensus with at least three analysts is used as reported. Partial
              consensus is extended at its own forward-implied growth, faded 15% in
              the final year. No consensus means no estimate, so the name is not
              shown.
            </li>
            <li>
              <strong className="text-ink">Historical growth:</strong> reference
              only. It is not an input to any projection, the CAGR or this ranking.
            </li>
            <li>
              <strong className="text-ink">Coverage:</strong> {dataset.skipped} of{" "}
              {dataset.processed} processed names were skipped because the available
              dataset had no consensus. Coverage gaps are not filled with invented
              numbers.
            </li>
          </ul>
          <p className="mt-3 text-[10.5px] leading-relaxed text-faint">
            Source note: {dataset.generatedFrom}. Forward estimates are third-party
            consensus and/or model output; they are not Stockmonk price targets or
            recommendations.
          </p>
        </section>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-line bg-paper-deep px-4 py-3">
          <p className="text-[11.5px] text-muted">
            Looking for the full India directory and company research?
          </p>
          <Link
            href="/india"
            className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-brand hover:text-brand-deep"
          >
            India Stocks
            <ArrowRight aria-hidden="true" className="size-3.5" />
          </Link>
        </div>

        <Disclaimer variant="boxed" className="mt-8" />
      </div>
    </>
  );
}

function Summary({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-surface px-3.5 py-3">
      <p className="stat-label">{label}</p>
      <p className="tabular mt-0.5 text-[18px] font-semibold text-ink">{value}</p>
      {hint && <p className="mt-0.5 truncate text-[9.5px] text-faint">{hint}</p>}
    </div>
  );
}
