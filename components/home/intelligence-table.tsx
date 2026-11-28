"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { StockLogo } from "@/components/stock-logo";
import { WatchlistToggle } from "./watchlist-toggle";
import { trackEvent } from "@/lib/events";
import { formatDate } from "@/lib/format";
import type { HomeCompany, HomeIntelligenceTab } from "@/lib/homepage-types";

type SortKey = "composite" | "growth" | "quality" | "valuation" | "technical";

const COLUMNS: Array<{ key: SortKey; label: string }> = [
  { key: "composite", label: "Composite" },
  { key: "growth", label: "Growth" },
  { key: "quality", label: "Quality" },
  { key: "valuation", label: "Value" },
  { key: "technical", label: "Technical" },
];

function scoreClass(value: number | null): string {
  if (value == null) return "text-steel";
  if (value >= 75) return "text-accent";
  if (value >= 55) return "text-[#3f6f96]";
  if (value >= 35) return "text-[#9a6a2f]";
  return "text-[#a34b4b]";
}

export function IntelligenceTable({
  tabs,
  asOf,
}: {
  tabs: HomeIntelligenceTab[];
  asOf: string | null;
}) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "composite");
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const [sort, setSort] = useState<SortKey>(active?.defaultSort ?? "composite");
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const rows = useMemo(() => {
    if (!active) return [];
    return [...active.rows].sort((a, b) => {
      const left = a[sort] ?? -Infinity;
      const right = b[sort] ?? -Infinity;
      return direction === "desc" ? right - left : left - right;
    });
  }, [active, sort, direction]);

  if (!active) return null;

  const changeTab = (id: HomeIntelligenceTab["id"]) => {
    const next = tabs.find((tab) => tab.id === id);
    setActiveId(id);
    setSort(next?.defaultSort ?? "composite");
    setDirection("desc");
    trackEvent("intelligence_tab_changed", { tab: id });
  };

  const toggleSort = (key: SortKey) => {
    if (sort === key) {
      setDirection((current) => (current === "desc" ? "asc" : "desc"));
    } else {
      setSort(key);
      setDirection("desc");
    }
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Investment intelligence views"
        className="scrollbar-none flex gap-5 overflow-x-auto border-b border-hairline"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`intelligence-tab-${tab.id}`}
            aria-selected={tab.id === active.id}
            aria-controls="intelligence-panel"
            data-active={tab.id === active.id}
            onClick={() => changeTab(tab.id)}
            className="home-tab"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between">
        <p className="max-w-2xl text-[12px] leading-relaxed text-steel">
          {active.description}
        </p>
        <p className="shrink-0 text-[10.5px] text-steel">
          Market data {asOf ? formatDate(asOf) : "latest"} / scores are
          descriptive, not recommendations
        </p>
      </div>

      <div
        id="intelligence-panel"
        role="tabpanel"
        aria-labelledby={`intelligence-tab-${active.id}`}
        className="mt-3 overflow-x-auto border-y border-hairline"
      >
        <table className="home-table w-full min-w-[660px] border-collapse">
          <thead>
            <tr>
              <th className="w-[42%] text-left">Company</th>
              {COLUMNS.map((column) => (
                <th
                  key={column.key}
                  aria-sort={
                    sort === column.key
                      ? direction === "desc"
                        ? "descending"
                        : "ascending"
                      : "none"
                  }
                >
                  <button
                    type="button"
                    onClick={() => toggleSort(column.key)}
                    className={`inline-flex items-center gap-0.5 ${
                      sort === column.key ? "text-graphite" : ""
                    }`}
                  >
                    {column.label}
                    {sort === column.key ? (
                      direction === "desc" ? (
                        <ChevronDown aria-hidden="true" className="size-3" />
                      ) : (
                        <ChevronUp aria-hidden="true" className="size-3" />
                      )
                    ) : null}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((company: HomeCompany) => (
              <tr key={company.ticker} className="group">
                <td>
                  <div className="flex items-center gap-2.5 py-0.5">
                    <StockLogo ticker={company.ticker} size={28} />
                    <div className="min-w-0">
                      <a
                        href={company.href}
                        onClick={() =>
                          trackEvent("company_card_clicked", {
                            ticker: company.ticker,
                            surface: "intelligence_table",
                            tab: active.id,
                          })
                        }
                        className="block truncate text-[12.5px] font-semibold text-graphite hover:text-accent"
                      >
                        {company.name}
                      </a>
                      <p className="truncate text-[10px] text-steel">
                        {company.ticker} / {company.sector}
                      </p>
                    </div>
                    <WatchlistToggle
                      ticker={company.ticker}
                      className="ml-auto"
                    />
                  </div>
                </td>
                {COLUMNS.map((column) => {
                  const value = company[column.key];
                  return (
                    <td
                      key={column.key}
                      className={`tabular text-[11.5px] font-semibold ${scoreClass(value)}`}
                    >
                      {value == null ? "N/A" : Math.round(value)}
                    </td>
                  );
                })}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="py-8 text-center text-[12px] text-steel"
                >
                  No companies are available for this view.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="text-[10.5px] text-steel">
          Showing {rows.length} of {active.rows.length} companies in this view.
        </p>
        <a
          href={active.exploreHref}
          onClick={() =>
            trackEvent("screener_opened", { source: "intelligence" })
          }
          className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-accent hover:underline"
        >
          Explore all
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
