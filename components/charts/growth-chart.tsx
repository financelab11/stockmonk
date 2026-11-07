"use client";

import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCompactCurrency, formatPercent } from "@/lib/format";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type GrowthPoint = {
  label: string;
  value: number | null;
  secondary?: number | null;
};

export default function GrowthChart({
  points,
  valueLabel = "Revenue",
  secondaryLabel = "YoY growth",
}: {
  points: GrowthPoint[];
  valueLabel?: string;
  secondaryLabel?: string;
}) {
  const data = points.filter((point) => point.value != null);
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No revenue history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" minTickGap={18} />
          <YAxis
            yAxisId="left"
            {...axisProps}
            width={52}
            tickFormatter={(value: number) => formatCompactCurrency(value)}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            {...axisProps}
            width={44}
            tickFormatter={(value: number) => `${Math.round(value * 100)}%`}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => {
              const numeric = Number(value);
              if (name === secondaryLabel) return [formatPercent(numeric), name];
              return [formatCompactCurrency(numeric), name];
            }}
          />
          <Bar
            yAxisId="left"
            dataKey="value"
            name={valueLabel}
            fill={CHART.green}
            radius={[3, 3, 0, 0]}
            maxBarSize={26}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="secondary"
            name={secondaryLabel}
            stroke={CHART.coral}
            strokeWidth={2}
            dot={false}
            connectNulls
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
