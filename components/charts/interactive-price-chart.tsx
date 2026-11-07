"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import type { RangePricePoint } from "@/lib/schemas";

const PriceChart = dynamic(() => import("./price-chart"), { ssr: false });

export function InteractivePriceChart({
  ticker,
  points,
  height = 340,
}: {
  ticker: string;
  points: RangePricePoint[];
  height?: number;
}) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full border border-white/20 px-3 py-1.5 text-[10.5px] font-semibold text-white/80 transition-colors hover:border-white/40 hover:text-white"
      >
        Open interactive chart
      </button>
    );
  }

  return <PriceChart ticker={ticker} initialData={points} height={height} />;
}
