import type { Consensus } from "@/lib/schemas";
import { consensusImpliedMove, consensusTotal } from "@/lib/analytics";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import { estimateRows } from "@/lib/article";
import { Info } from "lucide-react";

export function ConsensusPanel({
  consensus,
  price,
}: {
  consensus: Consensus | null;
  price: number | null;
}) {
  if (!consensus) {
    return (
      <div className="rounded-xl border border-dashed border-line bg-paper-deep p-4 text-[11.5px] leading-relaxed text-muted">
        Third-party consensus is not available for this company in the current
        dataset. The valuation discussion therefore relies on reported multiples
        and company filings only.
      </div>
    );
  }

  const total = consensusTotal(consensus);
  const implied = consensusImpliedMove(consensus, price);
  const buys = (consensus.distribution?.strongBuy ?? 0) + (consensus.distribution?.buy ?? 0);
  const holds = consensus.distribution?.hold ?? 0;
  const sells = (consensus.distribution?.sell ?? 0) + (consensus.distribution?.strongSell ?? 0);
  const estimates = estimateRows(consensus);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-line bg-paper-deep px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-brand">
            Third-party analyst consensus
          </p>
          <p className="mt-0.5 text-[11px] text-muted">
            As of {formatDate(consensus.asOf)} · shown for context, not a
            recommendation
          </p>
        </div>
      </div>

      <div className="grid gap-3 border-b border-line p-4 sm:grid-cols-3">
        <div>
          <p className="stat-label">Mean target</p>
          <p className="tabular mt-1 text-[20px] font-semibold text-ink">
            {formatCurrency(consensus.targetMean)}
          </p>
          <p className="mt-0.5 text-[10px] text-muted">
            Range {formatCurrency(consensus.targetLow)} – {formatCurrency(consensus.targetHigh)}
          </p>
        </div>
        <div>
          <p className="stat-label">Mean vs last close</p>
          <p
            className={`tabular mt-1 text-[20px] font-semibold ${
              implied != null && implied >= 0 ? "text-positive" : "text-danger"
            }`}
          >
            {formatSignedPercent(implied)}
          </p>
          <p className="mt-0.5 text-[10px] text-muted">
            Arithmetic, not a Stockmonk target
          </p>
        </div>
        <div>
          <p className="stat-label">Coverage</p>
          <p className="tabular mt-1 text-[20px] font-semibold text-ink">
            {consensus.analystCount ?? "n/a"}
          </p>
          <p className="mt-0.5 text-[10px] text-muted">
            {total} ratings in the distribution
          </p>
        </div>
      </div>

      {consensus.distribution && (
        <div className="border-b border-line p-4">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
              Recommendation distribution
            </p>
            <p className="text-[10px] text-muted">Provider labels, not Stockmonk</p>
          </div>
          <div className="mt-2 flex h-3 overflow-hidden rounded-full bg-paper-deep">
            <span className="bg-positive" style={{ width: `${total ? (buys / total) * 100 : 0}%` }} />
            <span className="bg-[#f5b544]" style={{ width: `${total ? (holds / total) * 100 : 0}%` }} />
            <span className="bg-danger" style={{ width: `${total ? (sells / total) * 100 : 0}%` }} />
          </div>
          <div className="mt-2 flex flex-wrap gap-3 text-[10.5px] text-muted">
            <span>
              <span className="mr-1 inline-block size-2 rounded-full bg-positive" />
              Buy / strong buy: {buys} {total ? `(${formatPercent(buys / total, 0)})` : ""}
            </span>
            <span>
              <span className="mr-1 inline-block size-2 rounded-full bg-[#f5b544]" />
              Hold: {holds} {total ? `(${formatPercent(holds / total, 0)})` : ""}
            </span>
            <span>
              <span className="mr-1 inline-block size-2 rounded-full bg-danger" />
              Sell / strong sell: {sells} {total ? `(${formatPercent(sells / total, 0)})` : ""}
            </span>
          </div>
        </div>
      )}

      <div className="overflow-x-auto p-4">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
          Forward estimates
        </p>
        <table className="data-table min-w-[540px]">
          <thead>
            <tr>
              <th scope="col">Period</th>
              <th scope="col">Revenue</th>
              <th scope="col">Rev growth</th>
              <th scope="col">EPS</th>
              <th scope="col">EPS growth</th>
              <th scope="col">Analysts</th>
            </tr>
          </thead>
          <tbody>
            {estimates.map((estimate) => (
              <tr key={estimate.period}>
                <td className="font-medium text-ink">{estimate.period}</td>
                <td>{formatCompactCurrency(estimate.revenue)}</td>
                <td>{formatPercent(estimate.revenueGrowth)}</td>
                <td>{estimate.eps != null ? formatCurrency(estimate.eps) : "n/a"}</td>
                <td>{formatPercent(estimate.epsGrowth)}</td>
                <td>{estimate.analysts ?? "n/a"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex gap-2 border-t border-line bg-paper-deep px-4 py-3 text-[10.5px] leading-relaxed text-muted">
        <Info aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-brand" />
        <p>
          These are third-party estimates and ratings. Stockmonk does not issue
          buy, sell or hold recommendations and does not publish its own price
          target. Consensus can lag the market and may change without notice.
        </p>
      </div>
    </div>
  );
}
