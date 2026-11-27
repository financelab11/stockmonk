"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART, axisProps, tooltipStyle } from "@/components/charts/chart-theme";
import { formatDate, formatSignedPercent } from "@/lib/format";
import type {
  PortfolioPerformance,
  PortfolioPeriodMetrics,
} from "@/lib/portfolios/types";

const PERIODS = [
  { id: "1M", days: 30 },
  { id: "6M", days: 182 },
  { id: "1Y", days: 365 },
  { id: "MAX", days: Number.POSITIVE_INFINITY },
] as const;

type PeriodId = (typeof PERIODS)[number]["id"];

function pct(value: number | null | undefined, digits = 1) {
  if (value == null || !Number.isFinite(value)) return "N/A";
  return `${value >= 0 ? "+" : ""}${(value * 100).toFixed(digits)}%`;
}

function ratio(value: number | null | undefined) {
  if (value == null || !Number.isFinite(value)) return "N/A";
  return value.toFixed(2);
}

function metricFor(
  metrics: PortfolioPeriodMetrics[],
  period: PeriodId,
): PortfolioPeriodMetrics | undefined {
  return metrics.find((metric) => metric.period === period);
}

export function PortfolioPerformancePanel({
  performance,
  benchmarkOptions,
}: {
  performance: PortfolioPerformance;
  benchmarkOptions: Array<{ id: string; name: string }>;
}) {
  const [period, setPeriod] = useState<PeriodId>("1Y");
  const [benchmarkId, setBenchmarkId] = useState(
    benchmarkOptions[0]?.id ?? performance.benchmarks[0]?.id ?? "SPY",
  );
  const benchmark =
    performance.benchmarks.find((item) => item.id === benchmarkId) ??
    performance.benchmarks[0];

  const chartData = useMemo(() => {
    if (!benchmark?.series.length) return [];
    const last = benchmark.series[benchmark.series.length - 1].date;
    const days = PERIODS.find((item) => item.id === period)?.days ?? 365;
    const cutoff =
      days === Number.POSITIVE_INFINITY
        ? ""
        : new Date(new Date(`${last}T00:00:00Z`).getTime() - days * 86_400_000)
            .toISOString()
            .slice(0, 10);
    const window = cutoff
      ? benchmark.series.filter((point) => point.date >= cutoff)
      : benchmark.series;
    const first = window[0];
    if (!first) return [];
    return window.map((point) => ({
      date: point.date,
      portfolio: Math.round((point.portfolio - first.portfolio) * 100) / 100,
      benchmark: Math.round((point.benchmark - first.benchmark) * 100) / 100,
    }));
  }, [benchmark, period]);

  const ticks = useMemo(() => {
    if (chartData.length < 2) return undefined;
    const step = Math.max(1, Math.floor((chartData.length - 1) / 5));
    const values = new Set<string>();
    for (let index = 0; index < chartData.length; index += step) {
      values.add(chartData[index].date);
    }
    values.add(chartData[chartData.length - 1].date);
    return [...values];
  }, [chartData]);

  const metrics = metricFor(benchmark?.metrics ?? [], period);
  const summaryRows = metrics
    ? [
        ["Portfolio return", pct(metrics.portfolioReturn)],
        ["Benchmark return", pct(metrics.benchmarkReturn)],
        ["Excess return", pct(metrics.excessReturn)],
        ["Annualised return", pct(metrics.annualisedReturn)],
        ["Volatility", pct(metrics.volatility)],
        ["Maximum drawdown", pct(metrics.maxDrawdown)],
        ["Sharpe ratio", ratio(metrics.sharpe)],
      ]
    : [];

  if (!performance.available || !benchmark) {
    return (
      <section className="card p-5">
        <h2 className="display text-[24px] text-ink">Performance analytics</h2>
        <p className="mt-2 max-w-2xl text-[12px] leading-relaxed text-muted">
          Reliable historical price data is not available for this basket. The
          page shows N/A rather than a fabricated return. The data model is
          ready for a verified performance history when it becomes available.
        </p>
        <p className="mt-3 rounded-lg border border-dashed border-line bg-paper-deep px-3 py-2 text-[11px] text-muted">
          {performance.basis}
        </p>
      </section>
    );
  }

  const lastPoint = chartData[chartData.length - 1];
  const firstPoint = chartData[0];
  const srSummary = `Performance chart from ${formatDate(
    firstPoint?.date,
  )} to ${formatDate(lastPoint?.date)}. Portfolio ${pct(
    lastPoint?.portfolio,
  )}; benchmark ${pct(lastPoint?.benchmark)}.`;

  const tableRows =
    chartData.length > 14
      ? chartData.filter(
          (_, index) =>
            index % Math.ceil(chartData.length / 12) === 0 ||
            index === chartData.length - 1,
        )
      : chartData;

  return (
    <section className="overflow-hidden rounded-xl border border-line bg-night text-white shadow-card">
      <div className="flex flex-col gap-3 border-b border-white/10 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-medium text-white/60">
              Performance analytics
            </p>
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/55">
              Simulated
            </span>
          </div>
          <h2 className="display mt-0.5 text-[22px] tracking-[-0.02em] text-white">
            Portfolio vs benchmark
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label className="inline-flex items-center gap-1.5 text-[11px] text-white/60">
            Benchmark
            <select
              value={benchmark.id}
              onChange={(event) => setBenchmarkId(event.target.value)}
              className="h-8 rounded-full border border-white/15 bg-night-soft px-2.5 text-[10.5px] font-medium text-white outline-none"
            >
              {benchmarkOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
          <div
            role="group"
            aria-label="Performance period"
            className="inline-flex rounded-full border border-white/15 bg-night-soft p-0.5"
          >
            {PERIODS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={period === item.id}
                onClick={() => setPeriod(item.id)}
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                  period === item.id
                    ? "bg-white text-night"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-2 pt-4 sm:px-4">
        <div
          className="h-[280px] w-full sm:h-[320px]"
          role="img"
          aria-label={srSummary}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 6, right: 12, left: 0, bottom: 4 }}
            >
              <CartesianGrid stroke={CHART.grid} strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                {...axisProps}
                ticks={ticks}
                minTickGap={20}
                tickFormatter={(value: string) => {
                  const date = new Date(`${value}T00:00:00Z`);
                  const month = new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    timeZone: "UTC",
                  }).format(date);
                  const isEdge =
                    value === ticks?.[0] ||
                    value === ticks?.[ticks.length - 1] ||
                    date.getUTCMonth() === 0;
                  return isEdge
                    ? `${month} '${String(date.getUTCFullYear()).slice(-2)}`
                    : month;
                }}
              />
              <YAxis
                {...axisProps}
                width={42}
                tickCount={5}
                domain={[
                  (dataMin: number) => Math.floor(Math.min(0, dataMin) / 10) * 10,
                  (dataMax: number) => Math.ceil(Math.max(0, dataMax) / 10) * 10,
                ]}
                tickFormatter={(value: number) => `${value.toFixed(0)}%`}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                cursor={{ stroke: CHART.axis, strokeDasharray: "3 3" }}
                labelFormatter={(value) => formatDate(String(value))}
                formatter={(value, name) => [
                  `${Number(value).toFixed(2)}%`,
                  name,
                ]}
              />
              <Legend
                wrapperStyle={{ fontSize: 10, color: CHART.axis }}
                iconType="plainline"
              />
              <Line
                type="monotone"
                dataKey="portfolio"
                name="Portfolio"
                stroke={CHART.coral}
                strokeWidth={2.2}
                dot={false}
                activeDot={{ r: 3 }}
              />
              <Line
                type="monotone"
                dataKey="benchmark"
                name={benchmark.name}
                stroke={CHART.blue}
                strokeWidth={1.6}
                strokeDasharray="4 3"
                dot={false}
                activeDot={{ r: 3 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <p className="sr-only">{srSummary}</p>
      </div>

      <div className="grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 sm:grid-cols-4 lg:grid-cols-7">
        {summaryRows.map(([label, value]) => (
          <div key={label} className="bg-night px-3 py-2.5">
            <p className="text-[10px] font-medium text-white/60">{label}</p>
            <p className="tabular mt-0.5 text-[12.5px] font-semibold text-white/90">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-2.5">
        <details>
          <summary className="cursor-pointer text-[10.5px] font-medium text-white/60">
            View chart data
          </summary>
          <div className="mt-2 overflow-x-auto">
            <table className="w-full min-w-[320px] text-left text-[10px] text-white/65">
              <caption className="sr-only">
                Sampled portfolio and benchmark returns
              </caption>
              <thead>
                <tr className="border-b border-white/10 text-white/40">
                  <th scope="col" className="py-1 font-semibold">
                    Date
                  </th>
                  <th scope="col" className="py-1 text-right font-semibold">
                    Portfolio
                  </th>
                  <th scope="col" className="py-1 text-right font-semibold">
                    Benchmark
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row) => (
                  <tr key={row.date} className="border-b border-white/5">
                    <td className="py-1">{formatDate(row.date)}</td>
                    <td className="tabular py-1 text-right">
                      {formatSignedPercent(row.portfolio / 100)}
                    </td>
                    <td className="tabular py-1 text-right">
                      {formatSignedPercent(row.benchmark / 100)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}
