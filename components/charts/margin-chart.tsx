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
import { formatPercent } from "@/lib/format";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type MarginPoint = {
  label: string;
  value: number | null;
  secondary?: number | null;
};

export default function MarginChart({
  points,
  primaryLabel = "Operating margin",
  secondaryLabel = "FCF margin",
}: {
  points: MarginPoint[];
  primaryLabel?: string;
  secondaryLabel?: string;
}) {
  const data = points.filter(
    (point) => point.value != null || point.secondary != null,
  );
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No margin history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" />
          <YAxis
            {...axisProps}
            width={44}
            tickFormatter={(value: number) => `${Math.round(value * 100)}%`}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [formatPercent(Number(value)), name]}
          />
          <Line
            type="monotone"
            dataKey="value"
            name={primaryLabel}
            stroke={CHART.green}
            strokeWidth={2.2}
            dot={{ r: 2.4, fill: CHART.green, strokeWidth: 0 }}
            activeDot={{ r: 4 }}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="secondary"
            name={secondaryLabel}
            stroke={CHART.blue}
            strokeWidth={1.8}
            strokeDasharray="4 4"
            dot={false}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
