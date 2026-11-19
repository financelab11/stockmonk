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
import { getUniverse } from "@/lib/data";
import { filterUniverse, groupUniverse, parseSort } from "@/lib/discover";
import { DEFAULT_SORT } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "All companies",
  description:
    "The full Stockmonk US coverage universe, grouped by sector, with sourced price, growth, margin and valuation context for 229 companies.",
  alternates: { canonical: "/discover/all-stocks" },
  openGraph: {
    title: "All stocks · Stockmonk",
    description:
      "The full Stockmonk US coverage universe, grouped by sector.",
    url: "/discover/all-stocks",
  },
};

export default async function AllStocksPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const q = typeof params.q === "string" ? params.q : "";
  const sector = typeof params.sector === "string" ? params.sector : "";
  const sort = parseSort(typeof params.sort === "string" ? params.sort : undefined);

  const universe = getUniverse();
  const filtered = filterUniverse(universe, { q, sector, sort });
  const groups = groupUniverse(filtered);
  const expanded = Boolean(sector || q.trim());

  const featuredCount = universe.filter((entry) => entry.isResearch).length;
  const carried = new URLSearchParams();
  if (q) carried.set("q", q);
  if (sector) carried.set("sector", sector);
  if (sort !== DEFAULT_SORT) carried.set("sort", sort);
  const carry = carried.toString();
  const featuredHref = carry ? `/discover?${carry}` : "/discover";
  const screensHref = carry ? `/discover?tab=screens&${carry}` : "/discover?tab=screens";

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Discover", path: "/discover" },
          { name: "All stocks", path: "/discover/all-stocks" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-7">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10.5px] text-muted">
            <Link prefetch={false} href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">›</span>
            <Link prefetch={false} href="/discover" className="hover:text-ink">Discover</Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">All stocks</span>
          </nav>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="kicker">Coverage universe</p>
              <h1 className="display mt-1 text-[32px] leading-tight tracking-[-0.025em] text-ink sm:text-[40px]">
                All Companies ({universe.length})
              </h1>
              <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
                Grouped by editorial sector. Every company gets a sourced
                research report with price, financials, valuation context and
                risks. No ratings, no price targets.
              </p>
            </div>
            <Link prefetch={false} href="/discover?tab=screens" className="text-[11.5px] font-semibold text-brand hover:text-brand-deep">
              Browse data-quality screens →
            </Link>
          </div>
          <div className="mt-4">
            <DiscoveryTabs
              active="all"
              items={[
                {
                  id: "featured",
                  href: featuredHref,
                  label: "Featured Research",
                  icon: "star",
                  count: featuredCount,
                  description:
                    "Companies with published research reports, financial analysis and valuation context.",
                },
                {
                  id: "screens",
                  href: screensHref,
                  label: "Data Quality",
                  icon: "shield",
                  count: universe.length,
                  description:
                    "Explore companies based on financial data availability, reporting consistency and coverage quality.",
                },
                {
                  id: "all",
                  href: "/discover/all-stocks",
                  label: "All Companies",
                  icon: "layers",
                  count: universe.length,
                  description:
                    "Explore the complete coverage universe with advanced filters and sorting.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <div className="container-page py-6">
        <FilterForm
            key={`${q}|${sector}|${sort}`}
          action="/discover/all-stocks"
          q={q}
          sector={sector}
          sort={sort}
          count={filtered.length}
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
                <section key={group.id} aria-labelledby={`sector-${group.id}`}>
                  <div className="flex items-end justify-between gap-3 border-b border-line pb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <SectorIcon name={group.icon} />
                      </span>
                      <div>
                        <h2 id={`sector-${group.id}`} className="display text-[22px] leading-tight tracking-[-0.015em] text-ink">
                          {group.name}
                        </h2>
                        <p className="text-[10px] text-muted">
                          {group.entries.length} {group.entries.length === 1 ? "company" : "companies"} · {group.blurb}
                        </p>
                      </div>
                    </div>
                    <Link
                      prefetch={false}
                      href={`/discover/all-stocks?sector=${group.id}`}
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
