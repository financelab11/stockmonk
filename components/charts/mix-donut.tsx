"use client";

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { formatCompactCurrency, formatPercent } from "@/lib/format";
import { CHART, tooltipStyle } from "./chart-theme";

const COLORS = [
  CHART.green,
  CHART.blue,
  CHART.violet,
  CHART.coral,
  CHART.amber,
  "#6fd3ff",
  "#d7a1ff",
];

export type MixDatum = { name: string; revenue: number; share: number };

export default function MixDonut({ data }: { data: MixDatum[] }) {
  if (!data.length) {
    return <p className="p-4 text-[12px] text-white/50">No segment mix available.</p>;
  }

  return (
    <div className="flex h-full flex-col items-center gap-1 px-2 pb-2 pt-2 sm:flex-row">
      <div className="h-[170px] w-full sm:h-full sm:w-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="revenue"
              nameKey="name"
              innerRadius="56%"
              outerRadius="84%"
              paddingAngle={2}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value, name) => [
                `${formatCompactCurrency(Number(value))} · ${formatPercent(
                  data.find((item) => item.name === name)?.share ?? 0,
                )}`,
                name,
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="grid w-full grid-cols-2 gap-x-3 gap-y-1.5 sm:w-1/2 sm:grid-cols-1">
        {data.map((item, index) => (
          <li key={item.name} className="flex items-center gap-1.5 text-[10.5px] text-white/70">
            <span
              className="size-2 shrink-0 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="truncate">{item.name}</span>
            <span className="ml-auto tabular text-white/50">
              {formatPercent(item.share, 0)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
