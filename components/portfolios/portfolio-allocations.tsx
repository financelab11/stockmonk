import { CHART } from "@/components/charts/chart-theme";
import type { PortfolioAllocation } from "@/lib/portfolios/types";

const COLORS = [
  CHART.green,
  CHART.blue,
  CHART.violet,
  CHART.coral,
  CHART.amber,
  CHART.red,
  "#6fd3ff",
  "#b7c4e8",
];

const CAP_ORDER = ["Mega Cap", "Large Cap", "Mid Cap", "Small Cap", "Unclassified"];

function compact(allocations: PortfolioAllocation[], limit = 7) {
  if (allocations.length <= limit) return allocations;
  const sorted = [...allocations].sort((a, b) => b.weight - a.weight);
  const head = sorted.slice(0, limit - 1);
  const rest = sorted.slice(limit - 1);
  return [
    ...head,
    {
      label: "Other",
      weight: rest.reduce((sum, item) => sum + item.weight, 0),
      count: rest.reduce((sum, item) => sum + item.count, 0),
    },
  ];
}

export function SectorDonut({
  allocations,
  holdings,
}: {
  allocations: PortfolioAllocation[];
  holdings: number;
}) {
  const data = compact(allocations);

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
      <div className="relative shrink-0">
        <svg
          viewBox="0 0 42 42"
          className="size-[150px]"
          role="img"
          aria-label={`Sector allocation across ${holdings} holdings`}
        >
          <circle
            cx="21"
            cy="21"
            r="15.9155"
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="5"
          />
          {data.map((item, index) => {
            const length = item.weight * 100;
            const offset = data
              .slice(0, index)
              .reduce((sum, previous) => sum + previous.weight * 100, 0);
            return (
              <circle
                key={item.label}
                cx="21"
                cy="21"
                r="15.9155"
                fill="none"
                stroke={COLORS[index % COLORS.length]}
                strokeWidth="5"
                strokeDasharray={`${length} ${100 - length}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 21 21)"
              />
            );
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[10px] font-medium text-faint">Sectors</span>
          <span className="tabular text-[20px] font-semibold text-ink">
            {allocations.length}
          </span>
          <span className="text-[9px] text-muted">{holdings} holdings</span>
        </div>
      </div>
      <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-1.5">
        {data.map((item, index) => (
          <li
            key={item.label}
            className="flex items-center gap-2 text-[11.5px] text-ink-soft"
          >
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="min-w-0 truncate">{item.label}</span>
            <span className="ml-auto shrink-0 tabular font-medium text-ink">
              {(item.weight * 100).toFixed(1)}%
            </span>
            <span className="w-8 shrink-0 text-right tabular text-[10px] text-muted">
              {item.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MarketCapBars({
  allocations,
}: {
  allocations: PortfolioAllocation[];
}) {
  const data = [...allocations].sort(
    (a, b) => CAP_ORDER.indexOf(a.label) - CAP_ORDER.indexOf(b.label),
  );

  return (
    <div>
      <div
        className="flex h-3.5 w-full overflow-hidden rounded-full bg-paper-deep"
        role="img"
        aria-label={data
          .map((item) => `${item.label} ${(item.weight * 100).toFixed(1)}%`)
          .join(", ")}
      >
        {data.map((item, index) => (
          <span
            key={item.label}
            style={{
              width: `${item.weight * 100}%`,
              backgroundColor: COLORS[index % COLORS.length],
            }}
          />
        ))}
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:grid-cols-4">
        {data.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2 text-[11.5px]">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="truncate text-muted">{item.label}</span>
            <span className="ml-auto tabular font-medium text-ink">
              {(item.weight * 100).toFixed(1)}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
