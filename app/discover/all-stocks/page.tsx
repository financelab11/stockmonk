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
import { getPrices, getUniverse } from "@/lib/data";
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
    description: "The full Stockmonk US coverage universe, grouped by sector.",
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
  const sort = parseSort(
    typeof params.sort === "string" ? params.sort : undefined,
  );

  const universe = getUniverse();
  const filtered = filterUniverse(universe, { q, sector, sort });
  const groups = groupUniverse(filtered);
  const expanded = Boolean(sector || q.trim());
  const visibleEntries = groups.flatMap((group) =>
    expanded ? group.entries : group.entries.slice(0, 3),
  );
  const priceMap = new Map(
    visibleEntries.map((entry) => [
      entry.ticker,
      getPrices(entry.ticker, "1Y"),
    ]),
  );

  const featuredCount = universe.filter((entry) => entry.isResearch).length;
  const carried = new URLSearchParams();
  if (q) carried.set("q", q);
  if (sector) carried.set("sector", sector);
  if (sort !== DEFAULT_SORT) carried.set("sort", sort);
  const carry = carried.toString();
  const featuredHref = carry ? `/discover?${carry}` : "/discover";
  const screensHref = carry
    ? `/discover?tab=screens&${carry}`
    : "/discover?tab=screens";
  const sectorHref = (id: string) => {
    const search = new URLSearchParams();
    if (sort !== DEFAULT_SORT) search.set("sort", sort);
    search.set("sector", id);
    return `/discover/all-stocks?${search.toString()}`;
  };

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Discover", path: "/discover" },
          { name: "All companies", path: "/discover/all-stocks" },
        ])}
      />

      <header className="container-page pt-7 pb-5 sm:pt-9 sm:pb-6">
        <h1 className="display text-[30px] leading-[1.05] tracking-[-0.025em] text-ink sm:text-[38px]">
          All companies
        </h1>
        <p className="mt-1.5 text-[14px] leading-relaxed text-muted">
          Coverage universe grouped by sector.
        </p>
      </header>

      <div className="container-page" id="directory">
        <DiscoveryTabs
          active="all"
          items={[
            {
              id: "featured",
              href: featuredHref,
              label: "Featured Research",
              count: featuredCount,
            },
            {
              id: "screens",
              href: screensHref,
              label: "Data Quality",
              count: universe.length,
            },
            {
              id: "all",
              href: "/discover/all-stocks",
              label: "All Companies",
              count: universe.length,
            },
          ]}
        />

        <div className="mt-4">
          <FilterForm
            key={`${q}|${sector}|${sort}`}
            action="/discover/all-stocks"
            q={q}
            sector={sector}
            sort={sort}
            showExtraFilters={false}
          />

          <SortSummary sort={sort} total={filtered.length} />

          {groups.length === 0 ? (
            <div className="mt-4 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
              <p className="text-[13px] font-semibold text-ink">
                No companies match those filters.
              </p>
              <p className="mt-1 text-[11.5px] text-muted">
                Try a broader search or reset the sector filter.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-9">
              {groups.map((group) => {
                const visible = expanded
                  ? group.entries
                  : group.entries.slice(0, 3);
                return (
                  <section
                    key={group.id}
                    aria-labelledby={`sector-${group.id}`}
                  >
                    <div className="flex items-end justify-between gap-3 border-b border-line pb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="flex size-8 items-center justify-center rounded-lg bg-brand-soft text-brand">
                          <SectorIcon name={group.icon} />
                        </span>
                        <div>
                          <h2
                            id={`sector-${group.id}`}
                            className="display text-[22px] leading-tight tracking-[-0.015em] text-ink"
                          >
                            {group.name}
                          </h2>
                          <p className="text-[10px] text-muted">
                            {group.entries.length}{" "}
                            {group.entries.length === 1
                              ? "company"
                              : "companies"}{" "}
                            · {group.blurb}
                          </p>
                        </div>
                      </div>
                      <Link
                        prefetch={false}
                        href={sectorHref(group.id)}
                        className="inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold text-brand hover:text-brand-deep"
                      >
                        View all
                        <ArrowRight aria-hidden="true" className="size-3" />
                      </Link>
                    </div>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                      {visible.map((entry) => (
                        <StockCardStatic
                          key={entry.ticker}
                          entry={entry}
                          prices={priceMap.get(entry.ticker)}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="container-page pb-14">
        <Disclaimer variant="boxed" />
      </div>
    </>
  );
}
