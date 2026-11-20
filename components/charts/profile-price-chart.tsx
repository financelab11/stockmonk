"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { axisProps, CHART, tooltipStyle } from "./chart-theme";
import { formatCurrency } from "@/lib/format";

export type PricePoint = { d: string; c: number };

export default function ProfilePriceChart({
  points,
  currency = "INR",
  height = 300,
}: {
  points: PricePoint[];
  currency?: string;
  height?: number;
}) {
  const data = points.map((point) => ({ ...point, label: point.d.slice(2) }));
  const values = points.map((point) => point.c);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const pad = (max - min) * 0.08 || 1;

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 8, right: 12, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="profilePriceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={CHART.green} stopOpacity={0.35} />
              <stop offset="100%" stopColor={CHART.green} stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={CHART.grid} vertical={false} />
          <XAxis dataKey="d" tick={{ ...axisProps.tick, fontSize: 10 }} minTickGap={40} />
          <YAxis
            domain={[min - pad, max + pad]}
            tick={{ ...axisProps.tick, fontSize: 10 }}
            width={54}
            tickFormatter={(value: number) =>
              value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value.toFixed(0)
            }
          />
          <Tooltip
            {...tooltipStyle}
            formatter={(value) => [formatCurrency(Number(value), 2, currency), "Close"]}
            labelFormatter={(label) => String(label)}
          />
          <Area
            type="monotone"
            dataKey="c"
            stroke={CHART.green}
            strokeWidth={1.8}
            fill="url(#profilePriceFill)"
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
