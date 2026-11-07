"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type SurprisePoint = {
  label: string;
  actual: number | null;
  estimate: number | null;
};

export default function SurpriseChart({ points }: { points: SurprisePoint[] }) {
  const data = points.filter((point) => point.actual != null || point.estimate != null);
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No EPS surprise history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" minTickGap={12} />
          <YAxis
            {...axisProps}
            width={38}
            tickFormatter={(value: number) => `$${value.toFixed(1)}`}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [`$${Number(value).toFixed(2)}`, name]}
          />
          <Legend wrapperStyle={{ fontSize: 10, color: CHART.axis }} />
          <Bar dataKey="actual" name="EPS actual" fill={CHART.green} radius={[3, 3, 0, 0]} maxBarSize={22} />
          <Bar
            dataKey="estimate"
            name="EPS estimate"
            fill={CHART.violet}
            radius={[3, 3, 0, 0]}
            maxBarSize={22}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
