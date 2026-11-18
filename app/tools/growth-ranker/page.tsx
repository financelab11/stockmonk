import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getGrowthRankerDataset, median } from "@/lib/growth-ranker/dataset";
import { rankResults } from "@/lib/growth-ranker/rank";
import {
  inrCrore,
  methodLabel,
  methodTone,
  multiple,
  pct,
  score,
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
  const medianForwardPe = median(
    rows
      .map((row) => row.forwardPe)
      .filter((value): value is number => value != null && value > 0),
  );
  const top = rows[0];
  const methods = {
    CONSENSUS_PLUS_ANALYST_EXTENSION: rows.filter(
      (row) => row.method === "CONSENSUS_PLUS_ANALYST_EXTENSION",
    ).length,
    BESPOKE: rows.filter(
      (row) =>
        row.method === "BESPOKE_FORWARD" || row.method === "BESPOKE_PEER",
    ).length,
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
            {rows.length} Indian companies with completed forward estimates,
            ranked by a composite of forward growth, valuation and quality.
            Projections use consensus and forward evidence only; reported
            historical growth is shown in each note for context and carries zero
            weight here.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip chip-positive">Forward only</span>
            <span className="chip">3 fiscal years</span>
            <span className="chip">Base case ranked</span>
            <span className="chip">Historical growth excluded</span>
          </div>
          <a
            href="/api/data/growth-ranker-export"
            className="btn btn-ghost mt-3 inline-flex"
          >
            <Download aria-hidden="true" className="size-3.5" />
            Download all estimates (CSV)
          </a>
          <p className="mt-3 text-[10.5px] leading-relaxed text-muted">
            Generated {dataset.generatedAt.slice(0, 10)} · {dataset.processed} names
            processed · {dataset.estimated} estimates · {dataset.skipped} excluded
            · threshold ₹{dataset.threshold.value.toLocaleString()} crore · FX{" "}
            {dataset.fx.pair} {dataset.fx.rate.toFixed(2)} as of {dataset.fx.asOf}
          </p>
        </div>
      </section>

      <div className="container-page py-6 lg:py-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Summary label="Names ranked" value={String(rows.length)} hint="all completed estimates" />
          <Summary label="Median 3Y CAGR" value={pct(medianCagr)} hint="base case" />
          <Summary
            label="Median forward P/E"
            value={medianForwardPe ? multiple(medianForwardPe) : "n/a"}
            hint="valuation context"
          />
          <Summary
            label="Top composite"
            value={top ? score(top.compositeScore) : "n/a"}
            hint={top ? `${top.ticker} · ${top.name}` : undefined}
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-[10.5px] text-muted">
          <span className="chip chip-info">{methods.CONSENSUS_PLUS_ANALYST_EXTENSION} consensus + extension</span>
          <span className="chip chip-caution">{methods.BESPOKE} bespoke forward</span>
        </div>

        <div className="mt-5 overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="data-table min-w-[1380px]">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Company</th>
                <th scope="col">Sector</th>
                <th scope="col" className="text-right">Score</th>
                <th scope="col" className="text-right">3Y CAGR</th>
                <th scope="col" className="text-right">P/E</th>
                <th scope="col" className="text-right">Fwd P/E</th>
                <th scope="col" className="text-right">EV/EBITDA</th>
                <th scope="col" className="text-right">PEG</th>
                <th scope="col" className="text-right">P/FCF</th>
                <th scope="col" className="text-right">ROCE</th>
                <th scope="col" className="text-right">ROE</th>
                <th scope="col" className="text-right">EBIT %</th>
                <th scope="col" className="text-right">EBIT growth</th>
                <th scope="col" className="text-right">Op lev</th>
                <th scope="col">Method</th>
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
                      <span className="block max-w-[240px] truncate text-[10.5px] text-muted">
                        {row.name}
                      </span>
                      <span className="block text-[9px] text-faint">
                        {inrCrore(row.marketCapInr)}
                      </span>
                    </Link>
                  </td>
                  <td className="max-w-[120px] text-[10px] text-muted">{row.sector}</td>
                  <td className="tabular text-right text-[12px] font-semibold text-brand-deep">
                    {score(row.compositeScore)}
                  </td>
                  <td className="tabular text-right text-[12px] font-semibold text-positive">
                    {pct(row.cagrBase)}
                  </td>
                  <td className="tabular text-right text-[11px]">{multiple(row.pe)}</td>
                  <td className="tabular text-right text-[11px]">{multiple(row.forwardPe)}</td>
                  <td className="tabular text-right text-[11px]">{multiple(row.evEbitda)}</td>
                  <td className="tabular text-right text-[11px]">{multiple(row.peg)}</td>
                  <td className="tabular text-right text-[11px]">{multiple(row.pFcf)}</td>
                  <td className="tabular text-right text-[11px]">{pct(row.roce)}</td>
                  <td className="tabular text-right text-[11px]">{pct(row.roe)}</td>
                  <td className="tabular text-right text-[11px]">{pct(row.ebitMargin)}</td>
                  <td className="tabular text-right text-[11px]">{pct(row.ebitGrowth)}</td>
                  <td className="tabular text-right text-[11px]">{multiple(row.operatingLeverage)}</td>
                  <td>
                    <span className={`chip ${methodTone(row.method)}`}>
                      {methodLabel(row.method)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-2 text-[10.5px] leading-relaxed text-muted">
          Composite score = 50% forward-growth percentile + 30% valuation
          percentile + 20% quality percentile. Growth is the base-case 3Y forward
          revenue CAGR. Valuation uses forward P/E and PEG (lower is better).
          Quality uses ROCE, ROE, EBIT margin and operating leverage. Bear and
          bull cases are a sensitivity band and never enter the score.
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
              <strong className="text-ink">Method:</strong> Yahoo Finance consensus
              supplies FY+1/FY+2 means; FY+3 extends the consensus-implied growth,
              faded 15%. Where consensus is missing, the first year uses LSEG
              SmartEstimate forward growth from the Refinitiv workbook, or the median
              forward growth of covered peers in the same GICS sector, and then fades.
              Both bespoke routes are labelled on the row.
            </li>
            <li>
              <strong className="text-ink">Valuation:</strong> P/E and forward P/E
              are current; EV/EBITDA uses enterprise value over current EBITDA;
              PEG divides P/E by forward EPS growth (or the forward revenue CAGR when
              EPS growth is unavailable); P/FCF uses current free cash flow.
            </li>
            <li>
              <strong className="text-ink">Quality:</strong> ROCE and ROE are
              reported ratios; EBIT % is operating profit over revenue; EBIT growth
              is the latest reported year-on-year change; operating leverage is EBIT
              growth divided by revenue growth. Blank means not meaningful for the
              business model or not disclosed.
            </li>
            <li>
              <strong className="text-ink">Historical growth:</strong> reference
              only. It is not an input to any projection, the CAGR or this ranking.
            </li>
            <li>
              <strong className="text-ink">Coverage:</strong> {dataset.processed}{" "}
              companies were processed and {dataset.estimated} produced a usable
              estimate. Names with no reliable base or forward evidence are excluded
              rather than filled with invented numbers.
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
