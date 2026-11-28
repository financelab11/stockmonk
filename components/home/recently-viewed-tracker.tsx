"use client";

import { useEffect } from "react";
import { recordCompanyView } from "@/lib/recently-viewed";

export function RecentlyViewedTracker({ ticker }: { ticker: string }) {
  useEffect(() => {
    recordCompanyView(ticker);
  }, [ticker]);

  return null;
}
