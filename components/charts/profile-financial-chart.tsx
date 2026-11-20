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
import { axisProps, CHART, tooltipStyle } from "./chart-theme";
import { formatCompactCurrency } from "@/lib/format";

export type FinancialPoint = {
  label: string;
  sales: number | null;
  eps: number | null;
};

export default function ProfileFinancialChart({
  points,
  height = 280,
}: {
  points: FinancialPoint[];
  height?: number;
}) {
  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={points} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="label" {...axisProps} />
          <YAxis
            yAxisId="sales"
            {...axisProps}
            width={52}
            tickFormatter={(value: number) => formatCompactCurrency(value * 10_000_000, "INR").replace("₹", "")}
          />
          <YAxis yAxisId="eps" orientation="right" {...axisProps} width={40} />
          <Tooltip
            {...tooltipStyle}
            formatter={(value, name) => {
              const numeric = Number(value);
              return name === "sales"
                ? [`₹${numeric.toFixed(0)} Cr`, "Sales"]
                : [`₹${numeric.toFixed(1)}`, "EPS"];
            }}
          />
          <Bar yAxisId="sales" dataKey="sales" fill={CHART.blue} radius={[3, 3, 0, 0]} maxBarSize={26} />
          <Line
            yAxisId="eps"
            type="monotone"
            dataKey="eps"
            stroke={CHART.amber}
            strokeWidth={2}
            dot={{ r: 2, fill: CHART.amber }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
