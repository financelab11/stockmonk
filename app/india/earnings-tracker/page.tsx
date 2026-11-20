import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { DiscoveryTabs } from "@/components/discover/discovery-tabs";
import { EarningsFilters } from "@/components/earnings/earnings-filters";
import { EarningsTable } from "@/components/earnings/earnings-table";
import { MarketPagination } from "@/components/market/market-pagination";
import { Disclaimer } from "@/components/ui/disclaimer";
import { JsonLd } from "@/components/seo/json-ld";
import { formatDate } from "@/lib/format";
import {
  activeEarningsFilters,
  buildEarningsUrl,
  earningsSearch,
  filterEarningsRows,
  industriesOf,
  parseEarningsParams,
  readEarningsTracker,
  sortEarningsRows,
} from "@/lib/earnings-tracker";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "India earnings tracker",
  description:
    "Latest reported quarter growth for India-listed companies: sales, EBITDA, net profit and EPS year over year, with market cap, P/E, PEG and one-year returns.",
  alternates: { canonical: "/india/earnings-tracker" },
  openGraph: {
    title: "India earnings tracker · Stockmonk",
    description:
      "Latest quarter results, growth and valuation for India-listed companies, filterable by each metric.",
    url: "/india/earnings-tracker",
  },
};

export default async function EarningsTrackerPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const raw = await searchParams;
  const params = parseEarningsParams(raw);
  const data = readEarningsTracker();
  const allRows = data?.rows ?? [];

  const cutoff = data?.asOf
    ? new Date(new Date(`${data.asOf}T00:00:00Z`).getTime() - 365 * 86_400_000)
        .toISOString()
        .slice(0, 10)
    : null;
  const eligible = params.includeOlder
    ? allRows
    : allRows.filter(
        (row) => !cutoff || !row.reportDate || row.reportDate >= cutoff,
      );

  const filtered = sortEarningsRows(
    filterEarningsRows(eligible, params),
    params.sort,
  );
  const pageCount = Math.max(1, Math.ceil(filtered.length / params.per));
  const page = Math.min(params.page, pageCount);
  const rows = filtered.slice((page - 1) * params.per, page * params.per);
  const first = filtered.length === 0 ? 0 : (page - 1) * params.per + 1;
  const last = Math.min(page * params.per, filtered.length);

  const industries = industriesOf(allRows);
  const activeCount = activeEarningsFilters({ ...params, page: 1 });
  const search = earningsSearch({ ...params, page: 1 });
  const downloadHref = `/api/data/earnings-export${search ? `?${search}` : ""}`;

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "India Stocks", path: "/india" },
          { name: "Earnings Tracker", path: "/india/earnings-tracker" },
        ])}
      />

      <section className="border-b border-line bg-paper-deep">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-6 sm:px-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-[10.5px] text-muted"
          >
            <Link prefetch={false} href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true">›</span>
            <Link prefetch={false} href="/india" className="hover:text-ink">
              India Stocks
            </Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">Earnings Tracker</span>
          </nav>

          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="display mt-1 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
                Earnings Tracker
              </h1>
            </div>
            {data?.pricesAsOf && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-soft">
                  Prices as of {formatDate(data.pricesAsOf)}
                </span>
              </div>
            )}
          </div>

          <div className="mt-4">
            <DiscoveryTabs
              active="earnings"
              items={[
                {
                  id: "featured",
                  href: "/india",
                  label: "Featured Research",
                  icon: "star",
                },
                {
                  id: "screens",
                  href: "/india?tab=screens",
                  label: "Data Quality",
                  icon: "shield",
                },
                {
                  id: "all",
                  href: "/india/all-stocks",
                  label: "All Companies",
                  icon: "layers",
                },
                {
                  id: "earnings",
                  href: "/india/earnings-tracker",
                  label: "Earnings Tracker",
                  icon: "chart",
                  count: allRows.length,
                },
                {
                  id: "ranker",
                  href: "/tools/growth-ranker",
                  label: "Growth Ranker",
                  icon: "trending",
                },
              ]}
            />
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6">
        {allRows.length === 0 ? (
          <div className="rounded-xl border border-dashed border-line bg-surface p-8 text-center">
            <p className="text-[13px] font-semibold text-ink">
              No earnings data yet.
            </p>
            <p className="mt-1 text-[11.5px] text-muted">
              Run{" "}
              <code className="font-mono text-[11px]">pnpm build:earnings</code>{" "}
              after the India dataset refresh.
            </p>
          </div>
        ) : (
          <>
            <EarningsFilters
              params={params}
              industries={industries}
              count={filtered.length}
              activeCount={activeCount}
            />

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-[10.5px] text-muted">
              <p>
                Showing{" "}
                <span className="tabular font-semibold text-ink">
                  {first}–{last}
                </span>{" "}
                of{" "}
                <span className="tabular font-semibold text-ink">
                  {filtered.length}
                </span>{" "}
                companies · sorted by{" "}
                <span className="font-semibold text-ink">
                  {params.sort === "sales"
                    ? "sales growth"
                    : params.sort === "profit"
                      ? "net profit growth"
                      : params.sort === "eps"
                        ? "EPS growth"
                        : params.sort === "ebitda"
                          ? "EBITDA growth"
                          : params.sort === "marketCap"
                            ? "market cap"
                            : params.sort === "return1y"
                              ? "1Y return"
                              : params.sort === "pe"
                                ? "P/E (lowest first)"
                                : params.sort === "peg"
                                  ? "PEG (lowest first)"
                                  : "company name"}
                </span>
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={buildEarningsUrl(params, {
                    includeOlder: params.includeOlder ? null : true,
                    page: 1,
                  })}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1 text-[10.5px] font-semibold text-ink-soft hover:border-line-strong hover:text-ink"
                >
                  {params.includeOlder
                    ? "Only latest 12 months"
                    : "Include older reports"}
                </a>
                <a
                  href={downloadHref}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line bg-paper px-2.5 py-1 text-[10.5px] font-semibold text-ink-soft hover:border-line-strong hover:text-ink"
                >
                  <Download aria-hidden="true" className="size-3" />
                  Download CSV
                </a>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="mt-3 rounded-xl border border-dashed border-line bg-surface p-6 text-center">
                <p className="text-[13px] font-semibold text-ink">
                  No companies match those filters.
                </p>
                <p className="mt-1 text-[11.5px] text-muted">
                  Relax a threshold, or clear the filters to see the full list.
                </p>
                <a
                  href="/india/earnings-tracker"
                  className="btn btn-ghost mt-3 h-9 min-h-0 text-[11px]"
                >
                  Clear all filters
                </a>
              </div>
            ) : (
              <>
                <div className="mt-3">
                  <EarningsTable rows={rows} />
                </div>

                <MarketPagination
                  page={page}
                  pageCount={pageCount}
                  total={filtered.length}
                  first={first}
                  last={last}
                  hrefFor={(nextPage) =>
                    buildEarningsUrl(params, { page: nextPage })
                  }
                  label="Earnings tracker pagination"
                />
              </>
            )}
          </>
        )}

        <div className="mt-6">
          <Disclaimer variant="boxed" />
        </div>
      </main>
    </>
  );
}
