"use client";

import { useEffect } from "react";
import { trackPageView } from "@/lib/events";

export function PageViewTracker() {
  useEffect(() => {
    trackPageView("homepage_view");
  }, []);

  return null;
}
