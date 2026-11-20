"use client";

import dynamic from "next/dynamic";
import { ChartFrame } from "@/components/charts/chart-frame";
import type { ProfileTable } from "@/lib/schemas";

function ChartSkeleton() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="skeleton h-[86%] w-[92%] rounded-lg opacity-50" />
    </div>
  );
}

const PriceChart = dynamic(() => import("@/components/charts/profile-price-chart"), {
  ssr: false,
  loading: ChartSkeleton,
});
const FinancialChart = dynamic(
  () => import("@/components/charts/profile-financial-chart"),
  { ssr: false, loading: ChartSkeleton },
);
const MarginChart = dynamic(() => import("@/components/charts/margin-chart"), {
  ssr: false,
  loading: ChartSkeleton,
});

export function ProfilePriceSection({ points }: { points: Array<{ d: string; c: number }> }) {
  return (
    <ChartFrame
      title="Share price"
      description="Daily closes over the last twelve months."
      height={300}
    >
      <PriceChart points={points} height={300} />
    </ChartFrame>
  );
}

export function ProfileFinancialSection({
  points,
}: {
  points: Array<{ label: string; sales: number | null; eps: number | null }>;
}) {
  return (
    <ChartFrame
      title="Sales and EPS"
      description="Annual sales (bars, ₹ crore) and earnings per share (line, ₹)."
      height={280}
    >
      <FinancialChart points={points} height={280} />
    </ChartFrame>
  );
}

export function ProfileMarginsSection({
  points,
}: {
  points: Array<{ label: string; value: number | null; secondary?: number | null }>;
}) {
  return (
    <ChartFrame
      title="Margins"
      description="EBIT margin and after-tax margin, annual."
      height={280}
    >
      <MarginChart
        points={points}
        primaryLabel="EBIT margin"
        secondaryLabel="After-tax margin"
      />
    </ChartFrame>
  );
}
