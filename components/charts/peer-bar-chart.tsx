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

export type PeerMetric = {
  label: string;
  company: number | null;
  peers: number | null;
  suffix?: string;
};

export default function PeerBarChart({ metrics }: { metrics: PeerMetric[] }) {
  const data = metrics.filter(
    (metric) => metric.company != null || metric.peers != null,
  );
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No peer comparison available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 12, left: 8, bottom: 0 }}
        >
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" horizontal={false} />
          <XAxis type="number" {...axisProps} tickFormatter={(value: number) => `${value.toFixed(0)}`} />
          <YAxis
            type="category"
            dataKey="label"
            {...axisProps}
            width={92}
            tick={{ fill: CHART.axis, fontSize: 10 }}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value, name) => [`${Number(value).toFixed(1)}${data[0]?.suffix ?? ""}`, name]}
          />
          <Legend wrapperStyle={{ fontSize: 10, color: CHART.axis }} />
          <Bar dataKey="company" name="Company" fill={CHART.green} radius={[0, 3, 3, 0]} maxBarSize={16} />
          <Bar dataKey="peers" name="Peer median" fill={CHART.violet} radius={[0, 3, 3, 0]} maxBarSize={16} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
