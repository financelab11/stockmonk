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
import { formatCompactCurrency } from "@/lib/format";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type CashPoint = {
  label: string;
  value: number | null;
  secondary?: number | null;
};

export default function CashFlowChart({
  points,
  primaryLabel = "Free cash flow",
  secondaryLabel = "Capital expenditure",
  currency = "USD",
}: {
  points: CashPoint[];
  primaryLabel?: string;
  secondaryLabel?: string;
  currency?: string;
}) {
  const data = points.filter((point) => point.value != null);
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No cash-flow history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" />
          <YAxis
            {...axisProps}
            width={54}
            tickFormatter={(value: number) => formatCompactCurrency(value, currency)}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [formatCompactCurrency(Number(value), currency), name]}
          />
          <Bar
            dataKey="value"
            name={primaryLabel}
            fill={CHART.green}
            radius={[3, 3, 0, 0]}
            maxBarSize={28}
          />
          <Line
            type="monotone"
            dataKey="secondary"
            name={secondaryLabel}
            stroke={CHART.violet}
            strokeWidth={1.8}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
