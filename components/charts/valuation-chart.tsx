"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatMultiple } from "@/lib/format";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type ValuationPoint = {
  label: string;
  value: number | null;
  secondary?: number | null;
};

function shortDate(value: string): string {
  const date = new Date(`${value.slice(0, 10)}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "2-digit",
    timeZone: "UTC",
  }).format(date);
}

export default function ValuationChart({
  points,
  primaryLabel = "EV/EBITDA",
  secondaryLabel = "P/E",
}: {
  points: ValuationPoint[];
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const data = points
    .filter((point) => point.value != null || point.secondary != null)
    .map((point) => ({ ...point, label: shortDate(point.label) }));
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No multiple history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" minTickGap={24} />
          <YAxis
            {...axisProps}
            width={42}
            tickFormatter={(value: number) => `${Math.round(value)}x`}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [formatMultiple(Number(value)), name]}
          />
          <Line
            type="monotone"
            dataKey="value"
            name={primaryLabel}
            stroke={CHART.green}
            strokeWidth={2.2}
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="secondary"
            name={secondaryLabel}
            stroke={CHART.coral}
            strokeWidth={1.7}
            strokeDasharray="4 4"
            dot={false}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
