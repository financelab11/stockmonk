import { sparklinePoints } from "@/lib/analytics";
import { formatCurrency, formatDate, formatSignedPercent } from "@/lib/format";
import type { RangePricePoint } from "@/lib/schemas";
import { InteractivePriceChart } from "./interactive-price-chart";

export function PriceChartPoster({
  ticker,
  points,
  height = 260,
}: {
  ticker: string;
  points: RangePricePoint[];
  height?: number;
}) {
  const values = points.map((point) => point.c).filter(Number.isFinite);
  if (values.length < 2) {
    return (
      <div className="dark-chart-card flex h-48 items-center justify-center text-[12px] text-white/50">
        Price history unavailable.
      </div>
    );
  }

  const first = values[0];
  const last = values[values.length - 1];
  const change = last / first - 1;
  const low = Math.min(...values);
  const high = Math.max(...values);
  const path = sparklinePoints(points, 660, height);
  const positive = change >= 0;
  const color = positive ? "#2fbf8f" : "#ef6b7a";
  const recent = points.slice(-8).reverse();

  return (
    <figure className="dark-chart-card overflow-hidden">
      <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-[12px] font-semibold text-white">{ticker} price history</p>
          <p className="mt-0.5 text-[10.5px] text-white/50">
            Daily adjusted close. Price-only; not a recommendation.
          </p>
        </div>
        <div className="text-right">
          <p className="tabular text-[13px] font-semibold text-white">{formatCurrency(last)}</p>
          <p className={`tabular text-[10.5px] font-semibold ${positive ? "text-[#2fbf8f]" : "text-[#ef6b7a]"}`}>
            {formatSignedPercent(change)} over 1Y
          </p>
        </div>
      </figcaption>

      <div className="relative px-2 pt-3" style={{ height }}>
        <svg viewBox={`0 0 660 ${height}`} className="h-full w-full" role="img" aria-label={`${ticker} one-year price chart`}>
          {[0.2, 0.4, 0.6, 0.8].map((fraction) => (
            <line
              key={fraction}
              x1="0"
              x2="660"
              y1={height * fraction}
              y2={height * fraction}
              stroke="#232741"
              strokeDasharray="3 5"
            />
          ))}
          <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
        <div className="pointer-events-none absolute inset-x-4 bottom-2 flex justify-between text-[9px] text-white/40">
          <span>{formatCurrency(low)} low</span>
          <span>{formatCurrency(high)} high</span>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-3">
        <InteractivePriceChart ticker={ticker} points={points} height={340} />
      </div>

      <details className="border-t border-white/10 px-4 py-3">
        <summary className="cursor-pointer text-[10.5px] font-semibold text-white/60">
          View data table
        </summary>
        <table className="mt-2 w-full text-[10.5px] text-white/75">
          <thead>
            <tr>
              <th className="text-left font-semibold opacity-60">Date</th>
              <th className="text-right font-semibold opacity-60">Close</th>
            </tr>
          </thead>
          <tbody>
            {recent.map((point) => (
              <tr key={point.t}>
                <td className="py-0.5">{formatDate(new Date(point.t * 1000).toISOString())}</td>
                <td className="py-0.5 text-right tabular">{formatCurrency(point.c)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </figure>
  );
}
