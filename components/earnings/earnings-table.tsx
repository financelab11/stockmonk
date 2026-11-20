import { StockLogoStatic } from "@/components/stock-logo-static";
import {
  formatCompanyName,
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

function Multiple({
  value,
  digits = 1,
}: {
  value: number | null;
  digits?: number;
}) {
  if (value == null) return <span className="text-[11px] text-faint">—</span>;
  // A PEG above 100 is not a usable signal at this precision.
  if (digits === 2 && value > 100) {
    return (
      <span className="tabular text-[11.5px] text-ink" title={value.toFixed(2)}>
        n.m.
      </span>
    );
  }
  return (
    <span className="tabular text-[11.5px] text-ink">
      {value.toFixed(digits)}
    </span>
  );
}

export function EarningsTable({ rows }: { rows: EarningsTrackerRow[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="data-table min-w-[1000px]">
        <caption className="sr-only">
          Latest reported quarter growth, valuation and returns for India-listed
          companies. Growth is year over year.
        </caption>
        <thead>
          <tr>
            <th scope="col" className="sticky left-0 z-10 bg-surface">
              Company
            </th>
            <th scope="col">Qtr</th>
            <th scope="col" className="text-right">
              Sales YoY
            </th>
            <th scope="col" className="text-right">
              EBITDA YoY
            </th>
            <th scope="col" className="text-right">
              Net profit YoY
            </th>
            <th scope="col" className="text-right">
              EPS YoY
            </th>
            <th scope="col" className="text-right">
              Market cap
            </th>
            <th scope="col" className="text-right">
              P/E
            </th>
            <th scope="col" className="text-right">
              PEG
            </th>
            <th
              scope="col"
              className="text-right"
              title="Return on capital employed, where the source reports it"
            >
              ROCE
            </th>
            <th scope="col" className="text-right">
              1Y return
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const href = `/india/companies/${row.ticker}`;
            return (
              <tr key={row.ticker}>
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-surface px-2 py-2 text-left font-normal normal-case tracking-normal sm:px-3"
                >
                  <div className="flex w-[150px] items-center gap-2 sm:w-[250px]">
                    <StockLogoStatic ticker={row.ticker} size={28} />
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-1.5">
                        <a
                          href={href}
                          className="min-w-0 flex-1 truncate font-serif text-[14px] font-medium leading-snug tracking-[-0.01em] text-ink hover:text-brand"
                        >
                          {formatCompanyName(row.name)}
                        </a>
                        <span className="hidden shrink-0 font-mono text-[9.5px] text-muted sm:inline">
                          {row.ticker}
                        </span>
                      </div>
                      <p className="truncate text-[9.5px] text-faint">
                        {row.industry}
                      </p>
                    </div>
                  </div>
                </th>
                <td className="whitespace-nowrap text-[10.5px] text-muted">
                  {row.period ?? "—"}
                </td>
                <td className="text-right">
                  <Growth value={row.salesGrowth} />
                </td>
                <td className="text-right">
                  <Growth value={row.ebitdaGrowth} />
                </td>
                <td className="text-right">
                  <Growth value={row.netProfitGrowth} />
                </td>
                <td className="text-right">
                  <Growth value={row.epsGrowth} />
                </td>
                <td className="whitespace-nowrap text-right text-[11.5px] text-ink">
                  {row.marketCap == null
                    ? "—"
                    : formatCompactCurrency(row.marketCap, "INR")}
                </td>
                <td className="text-right">
                  <Multiple value={row.pe} />
                </td>
                <td className="text-right">
                  <Multiple value={row.peg} digits={2} />
                </td>
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
