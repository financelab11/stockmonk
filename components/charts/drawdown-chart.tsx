"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatPercent } from "@/lib/format";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";

export type DrawdownPoint = { label: string; value: number };

export default function DrawdownChart({ points }: { points: DrawdownPoint[] }) {
  if (!points.length) {
    return <p className="p-4 text-[12px] text-white/50">No drawdown history available.</p>;
  }

  return (
    <div className="h-full w-full px-2 pb-2 pt-3">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={points} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="drawdownFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART.red} stopOpacity={0.05} />
              <stop offset="100%" stopColor={CHART.red} stopOpacity={0.45} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke={CHART.grid} strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="label" {...axisProps} interval="preserveStartEnd" minTickGap={26} />
          <YAxis
            {...axisProps}
            width={44}
            tickFormatter={(value: number) => formatPercent(value, 0)}
            domain={["auto", 0]}
          />
          <Tooltip
            contentStyle={tooltipStyle}
            formatter={(value) => [formatPercent(Number(value)), "Drawdown from peak"]}
          />
          <ReferenceLine y={0} stroke={CHART.axis} strokeDasharray="3 4" />
          <Area
            type="monotone"
            dataKey="value"
            stroke={CHART.red}
            strokeWidth={1.8}
            fill="url(#drawdownFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
