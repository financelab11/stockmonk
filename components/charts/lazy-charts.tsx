"use client";

import dynamic from "next/dynamic";
import {
  formatCompactCurrency,
  formatCurrency,
  formatDate,
  formatMultiple,
  formatPercent,
} from "@/lib/format";
import type { FactorScores } from "@/lib/analytics";
import type { RangePricePoint } from "@/lib/schemas";
import { ChartFrame } from "./chart-frame";
import { MiniTable } from "./mini-table";
import type { GrowthPoint } from "./growth-chart";
import type { MarginPoint } from "./margin-chart";
import type { CashPoint } from "./cashflow-chart";
import type { ValuationPoint } from "./valuation-chart";
import type { SurprisePoint } from "./surprise-chart";
import type { DrawdownPoint } from "./drawdown-chart";
import type { MixDatum } from "./mix-donut";
import type { PeerMetric } from "./peer-bar-chart";

const PriceChart = dynamic(() => import("./price-chart"), { ssr: false });
const GrowthChart = dynamic(() => import("./growth-chart"), { ssr: false });
const MarginChart = dynamic(() => import("./margin-chart"), { ssr: false });
const CashFlowChart = dynamic(() => import("./cashflow-chart"), { ssr: false });
const ValuationChart = dynamic(() => import("./valuation-chart"), { ssr: false });
const SurpriseChart = dynamic(() => import("./surprise-chart"), { ssr: false });
const ScorecardChart = dynamic(() => import("./scorecard-chart"), { ssr: false });
const DrawdownChart = dynamic(() => import("./drawdown-chart"), { ssr: false });
const MixDonut = dynamic(() => import("./mix-donut"), { ssr: false });
const PeerBarChart = dynamic(() => import("./peer-bar-chart"), { ssr: false });

function Loading() {
  return (
    <div className="flex h-full items-center justify-center text-[11px] text-white/40">
      Loading chart…
    </div>
  );
}

export function LazyPriceChart({
  ticker,
  initialData,
  height = 340,
  currency = "USD",
  priceBasePath = "/data/prices",
}: {
  ticker: string;
  initialData: RangePricePoint[];
  height?: number;
  currency?: string;
  priceBasePath?: string;
}) {
  const rows = initialData
    .slice(-8)
    .reverse()
    .map((point) => [
      formatDate(new Date(point.t * 1000).toISOString()),
      formatCurrency(point.c, 2, currency),
    ]);

  return (
    <ChartFrame
      height={height + 58}
      title={`${ticker} price history`}
      description="Daily adjusted close. Price-only; not a recommendation."
      table={<MiniTable columns={["Date", "Close"]} rows={rows} />}
    >
      <PriceChart
        ticker={ticker}
        initialData={initialData}
        height={height}
        currency={currency}
        priceBasePath={priceBasePath}
      />
    </ChartFrame>
  );
}

export function LazyGrowthChart({
  points,
  title = "Revenue and year-over-year growth",
  description,
  valueLabel,
  secondaryLabel,
  height = 300,
  currency = "USD",
}: {
  points: GrowthPoint[];
  title?: string;
  description?: string;
  valueLabel?: string;
  secondaryLabel?: string;
  height?: number;
  currency?: string;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Period", "Revenue", "YoY"]}
          rows={points.map((point) => [
            point.label,
            formatCompactCurrency(point.value, currency),
            formatPercent(point.secondary),
          ])}
        />
      }
    >
      <GrowthChart
        points={points}
        valueLabel={valueLabel}
        secondaryLabel={secondaryLabel}
        currency={currency}
      />
    </ChartFrame>
  );
}

export function LazyMarginChart({
  points,
  title = "Operating and free-cash-flow margins",
  description,
  height = 280,
}: {
  points: MarginPoint[];
  title?: string;
  description?: string;
  height?: number;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Period", "Operating margin", "FCF margin"]}
          rows={points.map((point) => [
            point.label,
            formatPercent(point.value),
            formatPercent(point.secondary),
          ])}
        />
      }
    >
      <MarginChart points={points} />
    </ChartFrame>
  );
}

export function LazyCashFlowChart({
  points,
  title = "Free cash flow and capital expenditure",
  description,
  height = 280,
  currency = "USD",
}: {
  points: CashPoint[];
  title?: string;
  description?: string;
  height?: number;
  currency?: string;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Period", "Free cash flow", "Capex"]}
          rows={points.map((point) => [
            point.label,
            formatCompactCurrency(point.value, currency),
            formatCompactCurrency(point.secondary, currency),
          ])}
        />
      }
    >
      <CashFlowChart points={points} currency={currency} />
    </ChartFrame>
  );
}

export function LazyValuationChart({
  points,
  title = "Valuation multiples over time",
  description,
  height = 280,
}: {
  points: ValuationPoint[];
  title?: string;
  description?: string;
  height?: number;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Date", "EV/EBITDA", "P/E"]}
          rows={points.map((point) => [
            formatDate(point.label),
            formatMultiple(point.value),
            formatMultiple(point.secondary),
          ])}
        />
      }
    >
      <ValuationChart points={points} />
    </ChartFrame>
  );
}

export function LazySurpriseChart({
  points,
  title = "EPS actual vs consensus estimate",
  description,
  height = 270,
  currency = "USD",
}: {
  points: SurprisePoint[];
  title?: string;
  description?: string;
  height?: number;
  currency?: string;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Quarter", "EPS actual", "EPS estimate"]}
          rows={points.map((point) => [
            point.label,
            point.actual != null ? formatCurrency(point.actual, 2, currency) : "n/a",
            point.estimate != null ? formatCurrency(point.estimate, 2, currency) : "n/a",
          ])}
        />
      }
    >
      <SurpriseChart points={points} currency={currency} />
    </ChartFrame>
  );
}

export function LazyScorecardChart({
  scores,
  compare,
  title = "Universe percentile scorecard",
  description,
  height = 300,
}: {
  scores: FactorScores;
  compare?: FactorScores | null;
  title?: string;
  description?: string;
  height?: number;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Factor", "Score"]}
          rows={Object.entries(scores).map(([key, value]) => [
            key.replace(/([A-Z])/g, " $1"),
            `${value}/100`,
          ])}
        />
      }
    >
      <ScorecardChart scores={scores} compare={compare} />
    </ChartFrame>
  );
}

export function LazyDrawdownChart({
  points,
  title = "Drawdown from the 52-week peak",
  description,
  height = 240,
}: {
  points: DrawdownPoint[];
  title?: string;
  description?: string;
  height?: number;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Date", "Drawdown"]}
          rows={points.filter((_, index) => index % 12 === 0).map((point) => [point.label, formatPercent(point.value)])}
        />
      }
    >
      <DrawdownChart points={points} />
    </ChartFrame>
  );
}

export function LazyMixDonut({
  data,
  title = "Revenue mix",
  description,
  height = 230,
  currency = "USD",
}: {
  data: MixDatum[];
  title?: string;
  description?: string;
  height?: number;
  currency?: string;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Segment", "Revenue", "Share"]}
          rows={data.map((item) => [
            item.name,
            formatCompactCurrency(item.revenue, currency),
            formatPercent(item.share),
          ])}
        />
      }
    >
      <MixDonut data={data} currency={currency} />
    </ChartFrame>
  );
}

export function LazyPeerBarChart({
  metrics,
  title = "Company vs peer median",
  description,
  height = 260,
}: {
  metrics: PeerMetric[];
  title?: string;
  description?: string;
  height?: number;
}) {
  return (
    <ChartFrame
      height={height}
      title={title}
      description={description}
      table={
        <MiniTable
          columns={["Metric", "Company", "Peer median"]}
          rows={metrics.map((metric) => [
            metric.label,
            metric.company != null ? metric.company.toFixed(1) : "n/a",
            metric.peers != null ? metric.peers.toFixed(1) : "n/a",
          ])}
        />
      }
    >
      <PeerBarChart metrics={metrics} />
    </ChartFrame>
  );
}

export function ChartLoading() {
  return <Loading />;
}
