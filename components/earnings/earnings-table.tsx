import { StockLogoStatic } from "@/components/stock-logo-static";
import {
  formatCompactCurrency,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import type { EarningsTrackerRow } from "@/lib/schemas";

function Growth({ value }: { value: number | null }) {
  if (value == null) return <span className="text-[11px] text-faint">—</span>;
  // Three-digit-plus growth is usually a tiny base, not an operating trend.
  if (Math.abs(value) >= 10) {
    return (
      <span
        className={`tabular text-[11.5px] font-semibold ${
          value >= 0 ? "text-positive" : "text-danger"
        }`}
        title={`${formatSignedPercent(value)} year on year`}
      >
        {value >= 0 ? "> +999%" : "< −999%"}
      </span>
    );
  }
  return (
    <span
      className={`tabular text-[11.5px] font-semibold ${
        value >= 0 ? "text-positive" : "text-danger"
      }`}
    >
      {formatSignedPercent(value)}
    </span>
  );
}

function Multiple({ value, digits = 1 }: { value: number | null; digits?: number }) {
  if (value == null) return <span className="text-[11px] text-faint">—</span>;
  // A PEG above 100 is not a usable signal at this precision.
  if (digits === 2 && value > 100) {
    return (
      <span className="tabular text-[11.5px] text-ink" title={value.toFixed(2)}>
        n.m.
      </span>
    );
  }
  return <span className="tabular text-[11.5px] text-ink">{value.toFixed(digits)}</span>;
}

export function EarningsTable({
  rows,
  linkedTickers,
}: {
  rows: EarningsTrackerRow[];
  linkedTickers: Set<string>;
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="data-table min-w-[1180px]">
        <caption className="sr-only">
          Latest reported quarter growth, valuation and returns for India-listed
          companies. Growth is year over year.
        </caption>
        <thead>
          <tr>
            <th scope="col" className="sticky left-0 z-10 bg-surface">Company</th>
            <th scope="col">Qtr</th>
            <th scope="col" className="text-right">Sales YoY</th>
            <th scope="col" className="text-right">EBITDA YoY</th>
            <th scope="col" className="text-right">Net profit YoY</th>
            <th scope="col" className="text-right">EPS YoY</th>
            <th scope="col" className="text-right">Market cap</th>
            <th scope="col" className="text-right">P/E</th>
            <th scope="col" className="text-right">PEG</th>
            <th scope="col" className="text-right" title="Return on capital employed, where the source reports it">
              ROCE
            </th>
            <th scope="col" className="text-right">1Y return</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const href = linkedTickers.has(row.ticker)
              ? `/india/stocks/${row.ticker}`
              : null;
            return (
              <tr key={row.ticker}>
                <th scope="row" className="sticky left-0 z-10 bg-surface text-left font-normal">
                  <div className="flex items-center gap-2">
                    <StockLogoStatic ticker={row.ticker} size={28} />
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1.5">
                        {href ? (
                          <a href={href} className="truncate text-[12px] font-semibold text-ink hover:text-brand">
                            {row.name}
                          </a>
                        ) : (
                          <span className="truncate text-[12px] font-semibold text-ink">
                            {row.name}
                          </span>
                        )}
                        <span className="font-mono text-[9.5px] text-muted">{row.ticker}</span>
                      </div>
                      <p className="truncate text-[9.5px] text-faint">{row.industry}</p>
                    </div>
                  </div>
                </th>
                <td className="whitespace-nowrap text-[10.5px] text-muted">{row.period ?? "—"}</td>
                <td className="text-right"><Growth value={row.salesGrowth} /></td>
                <td className="text-right"><Growth value={row.ebitdaGrowth} /></td>
                <td className="text-right"><Growth value={row.netProfitGrowth} /></td>
                <td className="text-right"><Growth value={row.epsGrowth} /></td>
                <td className="whitespace-nowrap text-right text-[11.5px] text-ink">
                  {row.marketCap == null ? "—" : formatCompactCurrency(row.marketCap, "INR")}
                </td>
                <td className="text-right"><Multiple value={row.pe} /></td>
                <td className="text-right"><Multiple value={row.peg} digits={2} /></td>
                <td className="text-right">
                  {row.roce == null ? (
                    <span className="text-[11px] text-faint">—</span>
                  ) : (
                    <span className="tabular text-[11.5px] text-ink">
                      {formatPercent(row.roce)}
                    </span>
                  )}
                </td>
                <td className="text-right">
                  <Growth value={row.return1y} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
