import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StockCardStatic } from "@/components/cards/stock-card-static";
import { DiscoveryTabs } from "@/components/discover/discovery-tabs";
import { FilterForm } from "@/components/discover/filter-form";
import { SortSummary } from "@/components/discover/sort-summary";
import { SectorIcon } from "@/components/sectors/sector-icon";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { getIndiaUniverse } from "@/lib/india-data";
import { filterIndiaUniverse, groupIndiaUniverse, parseSort } from "@/lib/india-discover";
import { breadcrumbJsonLd } from "@/lib/seo";
import { INDIA_COVERAGE_GROUPS } from "@/config/india-coverage";

export const metadata: Metadata = {
  title: "All India stocks",
  description:
    "The full Stockmonk India coverage universe, grouped by sector, with sourced price, growth, margin and valuation context for 100 NSE-listed companies.",
  alternates: { canonical: "/india/all-stocks" },
  openGraph: {
    title: "All India stocks · Stockmonk",
    description: "The full Stockmonk India coverage universe, grouped by sector.",
    url: "/india/all-stocks",
  },
};

export default async function IndiaAllStocksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const sort = parseSort(typeof params.sort === "string" ? params.sort : undefined);

  const universe = getIndiaUniverse();
  const filtered = filterIndiaUniverse(universe, { q, sector, sort });
  const groups = groupIndiaUniverse(filtered);
  const expanded = Boolean(sector || q.trim());

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "India Stocks", path: "/india" },
          { name: "All India stocks", path: "/india/all-stocks" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-7">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10.5px] text-muted">
            <Link prefetch={false} href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">›</span>
            <Link prefetch={false} href="/india" className="hover:text-ink">India Stocks</Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">All India stocks</span>
          </nav>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">India coverage universe</p>
              <h1 className="display mt-1 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[40px]">
                India Stocks ({universe.length})
              </h1>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                Grouped by editorial sector. Every company gets a sourced
                ten-section research report with INR financials, valuation
                context and risks. No ratings, no price targets.
              </p>
            </div>
            <Link
              prefetch={false}
              href="/india?tab=screens"
              className="text-[11.5px] font-semibold text-brand hover:text-brand-deep"
            >
              Browse India data-quality screens →
            </Link>
          </div>
          <div className="mt-4">
            <DiscoveryTabs
              active="all"
              items={[
                {
                  id: "featured",
                  href: "/india",
                  label: "Featured Research",
                  icon: "star",
                  count: universe.filter((entry) => entry.isResearch).length,
                  description:
                    "Companies with published research reports, financial analysis and valuation context.",
                },
                {
                  id: "screens",
                  href: "/india?tab=screens",
                  label: "Data Quality",
                  icon: "shield",
                  count: universe.length,
                  description:
                    "Explore companies based on financial data availability, reporting consistency and coverage quality.",
                },
                {
                  id: "all",
                  href: "/india/all-stocks",
                  label: "All Companies",
                  icon: "layers",
                  count: universe.length,
                  description:
                    "Explore the complete coverage universe with advanced filters and sorting.",
                },
                {
                  id: "earnings",
                  href: "/india/earnings-tracker",
                  label: "Earnings Tracker",
                  icon: "chart",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="container-page py-6">
        <FilterForm
            key={`${q}|${sector}|${sort}`}
          action="/india/all-stocks"
          q={q}
          sector={sector}
          sort={sort}
          count={filtered.length}
          sectors={INDIA_COVERAGE_GROUPS}
          searchIndexPath="/data/india/search-index.json"
        />

        <SortSummary sort={sort} total={filtered.length} />

        {groups.length === 0 ? (
          <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
            <p className="text-[13px] font-semibold text-ink">No companies match those filters.</p>
            <p className="mt-1 text-[11.5px] text-muted">Try a broader search or reset the sector filter.</p>
          </div>
        ) : (
          <div className="mt-6 space-y-9">
            {groups.map((group) => {
              const visible = expanded ? group.entries : group.entries.slice(0, 3);
              return (
                <section key={group.id} aria-labelledby={`india-sector-${group.id}`}>
                  <div className="flex items-end justify-between gap-3 border-b border-line pb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <SectorIcon name={group.icon} />
                      </span>
                      <div>
                        <h2
                          id={`india-sector-${group.id}`}
                          className="display text-[22px] leading-tight tracking-[-0.015em] text-ink"
                        >
                          {group.name}
                        </h2>
                        <p className="text-[10px] text-muted">
                          {group.entries.length}{" "}
                          {group.entries.length === 1 ? "company" : "companies"} · {group.blurb}
                        </p>
                      </div>
                    </div>
                    <Link
                      prefetch={false}
                      href={`/india/all-stocks?sector=${group.id}`}
                      className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand hover:text-brand-deep"
                    >
                      View all
                      <ArrowRight aria-hidden="true" className="size-3" />
                    </Link>
                  </div>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {visible.map((entry) => (
                      <StockCardStatic key={entry.ticker} entry={entry} />
                    ))}
                  </div>
                  {!expanded && group.entries.length > 3 && (
                    <p className="mt-2 text-[10px] text-muted">
                      Showing 3 of {group.entries.length}.
                    </p>
                  )}
                </section>
              );
            })}
          </div>
        )}
      </div>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
