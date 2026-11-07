"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { FactorScores } from "@/lib/analytics";
import { CHART, tooltipStyle } from "./chart-theme";

const LABELS: Array<{ key: keyof FactorScores; label: string }> = [
  { key: "growth", label: "Growth" },
  { key: "profitability", label: "Profitability" },
  { key: "cash", label: "Cash" },
  { key: "balance", label: "Balance sheet" },
  { key: "valuation", label: "Valuation" },
];

export default function ScorecardChart({
  scores,
  compare,
}: {
  scores: FactorScores;
  compare?: FactorScores | null;
}) {
  const data = LABELS.map((item) => ({
    subject: item.label,
    score: scores[item.key],
    universe: compare ? compare[item.key] : 50,
  }));

  return (
    <div className="h-full w-full px-2 pb-2 pt-2">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke={CHART.grid} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: CHART.axis, fontSize: 10 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "#666d8c", fontSize: 9 }}
            axisLine={false}
            tickCount={4}
          />
          {compare && (
            <Radar
              name="Universe median"
              dataKey="universe"
              stroke={CHART.axis}
              fill={CHART.axis}
              fillOpacity={0.08}
              strokeDasharray="4 4"
            />
          )}
          <Radar
            name="Percentile score"
            dataKey="score"
            stroke={CHART.green}
            fill={CHART.green}
            fillOpacity={0.28}
            strokeWidth={2}
          />
          <Tooltip contentStyle={tooltipStyle} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
