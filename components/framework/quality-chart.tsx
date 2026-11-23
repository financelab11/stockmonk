export type QualityPoint = {
  year: number;
  operatingMargin: number | null;
  netMargin: number | null;
  companies: number;
};

export function QualityChart({ points }: { points: QualityPoint[] }) {
  const values = points
    .map((point) => point.operatingMargin)
    .filter((value): value is number => value != null);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 0.3);
  const height = 190;
  const width = 640;
  const padding = 30;

  const coords = points.map((point, index) => {
    const x = padding + (index / Math.max(1, points.length - 1)) * (width - padding * 2);
    const value = point.operatingMargin ?? min;
    const y = height - padding - ((value - min) / (max - min)) * (height - padding * 2);
    return { x, y, ...point };
  });

  const path = coords.map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`).join(" ");

  return (
    <div className="card overflow-hidden">
      <div className="border-b border-line px-4 py-3">
        <p className="text-[12px] font-semibold text-ink">
          Median operating margin across the covered universe
        </p>
        <p className="text-[10.5px] text-muted">
          Annual reported operating margin, companies with available data.
        </p>
      </div>
      <div className="p-3">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Median operating margin by fiscal year">
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const y = padding + tick * (height - padding * 2);
            return (
              <line
                key={tick}
                x1={padding}
                x2={width - padding}
                y1={y}
                y2={y}
                stroke="#e7e8f0"
                strokeDasharray="3 5"
              />
            );
          })}
          <path d={path} fill="none" stroke="#2f6bff" strokeWidth="2.5" strokeLinecap="round" />
          {coords.map((point) => (
            <g key={point.year}>
              <circle cx={point.x} cy={point.y} r="3.5" fill="#fff" stroke="#2f6bff" strokeWidth="2" />
              <text x={point.x} y={height - 8} textAnchor="middle" fontSize="9" fill="#8c91a6">
                FY{String(point.year).slice(-2)}
              </text>
              <text x={point.x} y={point.y - 10} textAnchor="middle" fontSize="8.5" fill="#5b6178">
                {point.operatingMargin != null ? `${(point.operatingMargin * 100).toFixed(1)}%` : "n/a"}
              </text>
            </g>
          ))}
        </svg>
        <p className="px-1 text-[10px] leading-relaxed text-faint">
          Median of the covered universe, not an index return. FY labels are
          fiscal years and can differ by company. Source: SEC EDGAR.
        </p>
      </div>
    </div>
  );
}
