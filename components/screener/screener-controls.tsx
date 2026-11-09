"use client";

import { useEffect, useState } from "react";
import { SlidersHorizontal, Sparkles, X } from "lucide-react";
import { ScreenerSidebar } from "./screener-sidebar";
import type {
  FilterDistribution,
  ResearchScreen,
  ScreenerUiParams,
} from "@/lib/screener-filters";

type Sheet = "filters" | "screens" | null;

export function ScreenerControls({
  params,
  distributions,
  researchScreens,
  groups,
  activeCount,
  initialCount,
}: {
  params: ScreenerUiParams;
  distributions: FilterDistribution[];
  researchScreens: ResearchScreen[];
  groups: string[];
  activeCount: number;
  initialCount: number;
}) {
  const [sheet, setSheet] = useState<Sheet>(null);
  const [sidebarReady, setSidebarReady] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1024px)").matches) setSidebarReady(true);
  }, []);

  useEffect(() => {
    if (!sheet) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSheet(null);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [sheet]);

  const sidebarProps = { params, distributions, researchScreens, groups, initialCount };
  const close = () => setSheet(null);

  return (
    <>
      <aside className="hidden lg:sticky lg:top-24 lg:block">
        <div className="flex h-[calc(100vh-7rem)] max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-xl border border-line bg-surface p-3 shadow-card">
          {sidebarReady ? (
            <ScreenerSidebar {...sidebarProps} />
          ) : (
            <div aria-hidden="true" className="space-y-3">
              <div className="h-9 rounded-full bg-paper-deep" />
              <div className="h-9 rounded-lg border border-line bg-paper" />
              <div className="grid grid-cols-2 gap-2">
                <div className="h-10 rounded-lg border border-line bg-paper" />
                <div className="h-10 rounded-lg border border-line bg-paper" />
              </div>
              <div className="h-4 w-24 rounded bg-paper-deep" />
              <div className="h-36 rounded-lg border border-line bg-paper" />
              <div className="h-36 rounded-lg border border-line bg-paper" />
            </div>
          )}
        </div>
      </aside>

      <div className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-40 border-t border-line bg-surface/95 shadow-[0_-8px_24px_-18px_rgb(18_18_43_/_0.45)] backdrop-blur lg:hidden">
        <div className="grid grid-cols-2 gap-2 px-3 py-2">
          <button
            type="button"
            onClick={() => setSheet("filters")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line bg-paper text-[12px] font-semibold text-ink active:bg-paper-deep"
          >
            <SlidersHorizontal aria-hidden="true" className="size-4 text-brand" />
            Filters
            {activeCount > 0 && (
              <span className="rounded-full bg-brand px-1.5 py-0.5 text-[9px] font-bold text-white">
                {activeCount}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setSheet("screens")}
            className="flex h-11 items-center justify-center gap-2 rounded-xl border border-line bg-paper text-[12px] font-semibold text-ink active:bg-paper-deep"
          >
            <Sparkles aria-hidden="true" className="size-4 text-brand" />
            Quick Screens
          </button>
        </div>
      </div>

      {sheet && (
        <div className="fixed inset-0 z-50 flex items-end lg:hidden">
          <button
            type="button"
            aria-label="Close screener panel"
            onClick={close}
            className="absolute inset-0 bg-ink/40"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={sheet === "filters" ? "Filters" : "Quick screens"}
            className="relative z-10 flex h-[85vh] w-full flex-col rounded-t-2xl border border-line bg-surface shadow-float"
          >
            <div className="border-b border-line px-4 pb-2.5 pt-2">
              <span aria-hidden="true" className="mx-auto mb-2 block h-1 w-9 rounded-full bg-line-strong" />
              <div className="flex items-center justify-between">
                <p className="text-[15px] font-semibold text-ink">
                  {sheet === "filters" ? "Filters" : "Quick Screens"}
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full p-1.5 text-muted hover:bg-paper-deep hover:text-ink"
                  aria-label="Close"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-hidden p-3">
              <ScreenerSidebar
                key={sheet}
                {...sidebarProps}
                variant="sheet"
                initialTab={sheet === "screens" ? "screens" : "filters"}
                onClose={close}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
