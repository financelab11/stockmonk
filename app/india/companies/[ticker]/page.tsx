import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ShieldAlert, ShieldCheck } from "lucide-react";
import { CompanyLogo } from "@/components/profile/company-logo";
import { FinancialTable } from "@/components/profile/financial-table";
import {
  ProfileFinancialSection,
  ProfileMarginsSection,
  ProfilePriceSection,
} from "@/components/profile/profile-charts";
import { StatementBrowser } from "@/components/profile/statement-browser";
import { JsonLd } from "@/components/seo/json-ld";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getIndiaTicker } from "@/lib/india-data";
import { readEarningsTracker } from "@/lib/earnings-tracker";
import { readMarketsmithProfile } from "@/lib/profile";
import {
  formatCompactCurrency,
  formatDate,
  formatPercent,
  formatSignedPercent,
} from "@/lib/format";
import { breadcrumbJsonLd } from "@/lib/seo";

const PRERENDER_COUNT = 120;

export function generateStaticParams() {
  const data = readEarningsTracker();
  const featured = [...(data?.rows ?? [])]
    .sort((a, b) => (b.marketCap ?? 0) - (a.marketCap ?? 0))
    .slice(0, PRERENDER_COUNT)
    .map((row) => row.ticker);
  // Prerender the largest companies; every other tracker company renders on
  // first request and is cached, which keeps the build inside Vercel's limit.
  return [...new Set(["TIPSMUSIC", ...featured])].map((ticker) => ({ ticker }));
}

export const dynamicParams = true;
export const revalidate = 86400;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const key = ticker.toUpperCase();
  const profile = readMarketsmithProfile(key);
  const tracker = readEarningsTracker()?.rows.find((row) => row.ticker === key);
  const name = profile?.name ?? tracker?.name ?? key;
  return {
    title: `${name} — company profile`,
    description: `${name} (${key}) company profile: business, key statistics, ratios, financial statements, ownership and surveillance checks.`,
    alternates: { canonical: `/india/companies/${key}` },
  };
}

const FLAG_LABELS: Record<string, string> = {
  isASM_LT: "NSE Additional Surveillance Measure (ASM)",
  isGSM: "NSE Graded Surveillance Measure (GSM)",
  isLongtermdebt: "High long-term debt",
  isNooffunds: "No institutional funds",
  isPledgesharepct: "Promoter pledge above threshold",
  isSharesheldnooffunds: "Institutional holdings falling",
  isSME_Stock: "SME stock",
  isLowerPriceBand: "Lower price band",
  isT2T_Segment: "Trade-to-trade segment",
  isComplianceFlagbyExchange: "Exchange compliance flag",
  isavgrupeevol: "Above-average group volume",
};

const NAV_ITEMS = [
  { id: "overview", label: "Overview" },
  { id: "statistics", label: "Statistics" },
  { id: "charts", label: "Charts" },
  { id: "financials", label: "Financials" },
  { id: "ownership", label: "Ownership" },
  { id: "surveillance", label: "Surveillance" },
];

function Group({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; value: string }>;
}) {
  if (!items.length) return null;
  return (
    <div className="card-flat p-4">
      <h3 className="type-subhead text-ink">{title}</h3>
      <dl className="mt-2.5 grid grid-cols-2 gap-x-4 gap-y-3">
        {items.map((item) => (
          <div key={item.label}>
            <dt className="kpi-label">{item.label}</dt>
            <dd className="kpi-value mt-0.5">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const key = ticker.toUpperCase();
  const profile = readMarketsmithProfile(key);
  const tracker =
    readEarningsTracker()?.rows.find((row) => row.ticker === key) ?? null;
  if (!profile && !tracker) notFound();

  const name = profile?.name ?? tracker?.name ?? key;
  const industry = (profile?.industry ?? tracker?.industry ?? "—").replace(
    /^(NSE|BSE)-/i,
    "",
  );
  const research = getIndiaTicker(key);

  const stats = new Map(
    (profile?.stats ?? []).map((stat) => [stat.label, stat.value]),
  );
  const pick = (labels: string[]) =>
    labels
      .map((label) => ({ label, value: stats.get(label) ?? "" }))
      .filter((item) => item.value);

  const ratio = (needle: string): string | null => {
    if (!profile) return null;
    const row = profile.ratiosAnnual.rows.find((entry) =>
      entry[0]?.toLowerCase().includes(needle.toLowerCase()),
    );
    const value = row?.[1];
    const parsed = value == null ? null : Number(value);
    return parsed != null && Number.isFinite(parsed)
      ? `${parsed.toFixed(1)}%`
      : null;
  };

  const latestMargin = profile?.series.margins.at(-1);
  const derivedProfitability = [
    ratio("return on capital employed")
      ? { label: "ROCE", value: ratio("return on capital employed") as string }
      : null,
    latestMargin?.ebit != null
      ? {
          label: "EBIT margin",
          value: `${(latestMargin.ebit * 100).toFixed(1)}%`,
        }
      : null,
  ].filter((item): item is { label: string; value: string } => item != null);

  const growth = [
    ...pick(["EPS growth rate"]),
    ...(tracker
      ? [
          {
            label: "Sales growth",
            value: formatSignedPercent(tracker.salesGrowth),
          },
        ]
      : []),
    ...(tracker
      ? [
          {
            label: "Net profit growth",
            value: formatSignedPercent(tracker.netProfitGrowth),
          },
        ]
      : []),
  ];

  const financialPoints = (() => {
    if (!profile) return [];
    const sales = new Map(
      profile.series.sales.map((point) => [point.label, point.value]),
    );
    const eps = new Map(
      profile.series.eps.map((point) => [point.label, point.value]),
    );
    return [...new Set([...sales.keys(), ...eps.keys()])]
      .sort()
      .map((label) => ({
        label,
        sales: sales.get(label) ?? null,
        eps: eps.get(label) ?? null,
      }));
  })();

  const margins =
    profile?.series.margins.map((point) => ({
      label: point.label,
      value: point.ebit,
      secondary: point.net,
    })) ?? [];

  const ownershipMonths = profile
    ? [...new Set(profile.ownership.history.map((point) => point.month))].slice(
        0,
        4,
      )
    : [];
  const ownershipNames = profile
    ? [...new Set(profile.ownership.history.map((point) => point.name))]
    : [];
  const ownershipHistory = profile
    ? {
        headers: ["Holder", ...ownershipMonths],
        rows: ownershipNames.map((owner) => [
          owner,
          ...ownershipMonths.map((month) => {
            const match = profile.ownership.history.find(
              (point) => point.name === owner && point.month === month,
            );
            return match ? `${match.value.toFixed(2)}%` : "—";
          }),
        ]),
      }
    : null;

  const redFlags = profile
    ? Object.entries(profile.surveillance.red).filter(
        ([, value]) => value !== 0,
      )
    : [];
  const greenFlags = profile?.surveillance.green ?? [];

  const rangePosition =
    profile?.price.value != null &&
    profile.price.week52High != null &&
    profile.price.week52Low != null &&
    profile.price.week52High > profile.price.week52Low
      ? Math.max(
          0,
          Math.min(
            100,
            ((profile.price.value - profile.price.week52Low) /
              (profile.price.week52High - profile.price.week52Low)) *
              100,
          ),
        )
      : null;

  const trackerStats = tracker
    ? [
        {
          label: "Market cap",
          value: formatCompactCurrency(tracker.marketCap, "INR"),
        },
        {
          label: "P/E",
          value: tracker.pe == null ? "—" : tracker.pe.toFixed(1),
        },
        {
          label: "PEG",
          value: tracker.peg == null ? "—" : tracker.peg.toFixed(2),
        },
        { label: "ROCE", value: formatPercent(tracker.roce) },
        {
          label: "Sales growth",
          value: formatSignedPercent(tracker.salesGrowth),
        },
        {
          label: "Net profit growth",
          value: formatSignedPercent(tracker.netProfitGrowth),
        },
        { label: "EPS growth", value: formatSignedPercent(tracker.epsGrowth) },
        { label: "1Y return", value: formatSignedPercent(tracker.return1y) },
        { label: "Latest quarter", value: tracker.period ?? "—" },
      ]
    : [];

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "India Stocks", path: "/india" },
          { name: "Earnings Tracker", path: "/india/earnings-tracker" },
          { name: name, path: `/india/companies/${key}` },
        ])}
      />

      <header className="border-b border-line bg-paper-deep">
        <div className="container-profile py-5">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted"
          >
            <Link prefetch={false} href="/" className="hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link prefetch={false} href="/india" className="hover:text-ink">
              India Stocks
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              prefetch={false}
              href="/india/earnings-tracker"
              className="hover:text-ink"
            >
              Earnings Tracker
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink">{name}</span>
          </nav>

          <div className="mt-3 grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <CompanyLogo ticker={key} name={name} />
              <div className="min-w-0">
                <h1 className="type-company text-ink">{name}</h1>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13px] text-muted">
                  <span className="font-mono text-[12px] font-semibold text-ink-soft">
                    {key}
                  </span>
                  {profile?.exchange && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{profile.exchange}</span>
                    </>
                  )}
                  <span aria-hidden="true">·</span>
                  <span>{industry}</span>
                  {profile && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>
                        {profile.basis === "consolidated"
                          ? "Consolidated"
                          : "Standalone"}
                      </span>
                    </>
                  )}
                </div>
                {profile?.website && (
                  <a
                    href={
                      profile.website.startsWith("http")
                        ? profile.website
                        : `https://${profile.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-brand hover:text-brand-deep"
                  >
                    Company website{" "}
                    <ArrowUpRight aria-hidden="true" className="size-3" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-end gap-6">
              {profile?.price.value != null && (
                <div className="min-w-[170px]">
                  <p className="kpi-label">Share price</p>
                  <p className="tabular mt-0.5 text-[28px] font-semibold leading-none text-ink">
                    ₹
                    {profile.price.value.toLocaleString("en-IN", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p
                    className={`tabular mt-1 text-[12px] font-semibold ${
                      (profile.price.changePct ?? 0) >= 0
                        ? "text-positive"
                        : "text-danger"
                    }`}
                  >
                    {formatSignedPercent((profile.price.changePct ?? 0) / 100)}{" "}
                    vs prior close
                  </p>
                  {rangePosition != null && (
                    <div className="mt-2 w-full max-w-[220px]">
                      <div className="relative h-1.5 rounded-full bg-line">
                        <span
                          className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface bg-brand-deep"
                          style={{ left: `${rangePosition}%` }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-1 flex justify-between text-[10.5px] text-muted">
                        <span>
                          ₹
                          {profile.price.week52Low?.toLocaleString("en-IN", {
                            maximumFractionDigits: 0,
                          })}
                        </span>
                        <span>52-week range</span>
                        <span>
                          ₹
                          {profile.price.week52High?.toLocaleString("en-IN", {
                            maximumFractionDigits: 0,
                          })}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-5">
                {profile ? (
                  <div>
                    <p className="kpi-label">Market cap</p>
                    <p className="kpi-value mt-0.5">
                      {stats.get("Market capitalization") ?? "—"}
                    </p>
                  </div>
                ) : (
                  tracker && (
                    <div>
                      <p className="kpi-label">Market cap</p>
                      <p className="kpi-value mt-0.5">
                        {formatCompactCurrency(tracker.marketCap, "INR")}
                      </p>
                    </div>
                  )
                )}
                {profile ? (
                  <div>
                    <p className="kpi-label">P/E</p>
                    <p className="kpi-value mt-0.5">
                      {stats.get("P/E ratio") ?? "—"}
                    </p>
                  </div>
                ) : (
                  tracker?.pe != null && (
                    <div>
                      <p className="kpi-label">P/E</p>
                      <p className="kpi-value mt-0.5">
                        {tracker.pe.toFixed(1)}
                      </p>
                    </div>
                  )
                )}
                {tracker?.return1y != null && (
                  <div>
                    <p className="kpi-label">1Y return</p>
                    <p className="kpi-value mt-0.5">
                      {formatSignedPercent(tracker.return1y)}
                    </p>
                  </div>
                )}
              </div>

              {research && (
                <Link
                  href={`/india/stocks/${key}`}
                  className="btn btn-primary h-10 min-h-0 text-[12.5px]"
                >
                  Research note
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <nav
        aria-label="Company profile sections"
        className="sticky top-24 z-40 border-b border-line bg-surface/95 backdrop-blur"
      >
        <div className="container-profile scrollbar-none flex gap-1 overflow-x-auto py-1.5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="type-nav inline-flex min-h-11 shrink-0 items-center rounded-lg px-3 text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <main className="container-profile py-6 pb-28 lg:pb-10">
        {profile ? (
          <>
            <section
              id="overview"
              className="scroll-mt-40 grid gap-4 lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="card p-4 sm:p-5">
                <h2 className="type-section text-ink">About {name}</h2>
                <p className="type-body mt-2.5 text-muted">
                  {profile.about || "Company description not available."}
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-4 border-t border-line pt-3">
                  <div>
                    <dt className="kpi-label">Industry</dt>
                    <dd className="mt-0.5 text-[13.5px] font-medium text-ink">
                      {industry}
                    </dd>
                  </div>
                  {profile.location && (
                    <div>
                      <dt className="kpi-label">Location</dt>
                      <dd className="mt-0.5 text-[13.5px] font-medium text-ink">
                        {profile.location}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 lg:content-start lg:auto-rows-min">
                <div className="card-flat p-4">
                  <p className="kpi-label">Market capitalisation</p>
                  <p className="kpi-value mt-1">
                    {stats.get("Market capitalization") ?? "—"}
                  </p>
                </div>
                <div className="card-flat p-4">
                  <p className="kpi-label">P/E ratio</p>
                  <p className="kpi-value mt-1">
                    {stats.get("P/E ratio") ?? "—"}
                  </p>
                </div>
                <div className="card-flat p-4">
                  <p className="kpi-label">Return on equity</p>
                  <p className="kpi-value mt-1">
                    {stats.get("Return on equity") ?? "—"}
                  </p>
                </div>
                <div className="card-flat p-4">
                  <p className="kpi-label">EPS growth rate</p>
                  <p className="kpi-value mt-1">
                    {stats.get("EPS growth rate") ?? "—"}
                  </p>
                </div>
              </div>
            </section>

            <section id="statistics" className="mt-8 scroll-mt-40">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <h2 className="type-section text-ink">Key statistics</h2>
                  <p className="type-body mt-1 text-muted">
                    Latest reported figures from company filings.
                  </p>
                </div>
                {profile && (
                  <span className="chip chip-info">
                    {profile.basis === "consolidated"
                      ? "Consolidated"
                      : "Standalone"}{" "}
                    · {formatDate(profile.fetchedAt)}
                  </span>
                )}
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <Group
                  title="Valuation"
                  items={pick([
                    "Market capitalization",
                    "P/E ratio",
                    "5-year P/E range",
                    "Dividend yield",
                    "Book value",
                  ])}
                />
                <Group
                  title="Profitability"
                  items={[
                    ...pick(["Return on equity", "Cash flow (INR)"]),
                    ...derivedProfitability,
                  ]}
                />
                <Group title="Growth" items={growth} />
                <Group
                  title="Technical indicators"
                  items={pick([
                    "Alpha",
                    "Beta",
                    "U/D vol ratio",
                    "Volume",
                    "Avg volume (50d)",
                    "Price strength",
                  ])}
                />
                <Group
                  title="Institutional ownership"
                  items={pick([
                    "No. of funds",
                    "Shares held by funds",
                    "Shares in float",
                  ])}
                />
                <Group
                  title="Ratings"
                  items={pick([
                    "Master score",
                    "EPS rating",
                    "Group rank",
                    "Acc/Dis rating",
                  ])}
                />
              </div>
            </section>

            <section id="charts" className="mt-8 scroll-mt-40">
              <h2 className="type-section text-ink">Financial charts</h2>
              <p className="type-body mt-1 text-muted">
                Price, sales, earnings and margins over time. Charts load as
                they enter view.
              </p>
              <div className="mt-3 space-y-4">
                {profile.series.price.length > 1 && (
                  <ProfilePriceSection points={profile.series.price} />
                )}
                <div className="grid gap-4 lg:grid-cols-2">
                  {financialPoints.length > 1 && (
                    <ProfileFinancialSection points={financialPoints} />
                  )}
                  {margins.length > 1 && (
                    <ProfileMarginsSection points={margins} />
                  )}
                </div>
              </div>
            </section>

            <section id="financials" className="mt-8 scroll-mt-40">
              <h2 className="type-section text-ink">Financial statements</h2>
              <p className="type-body mt-1 max-w-3xl text-muted">
                Income statement, balance sheet, cash flow and key ratios.
                Periods run oldest to newest; on mobile each table opens as the
                full history.
              </p>
              <div className="mt-3">
                <StatementBrowser
                  incomeAnnual={profile.incomeAnnual}
                  incomeQuarter={profile.incomeQuarter}
                  balanceSheet={profile.balanceSheet}
                  cashFlow={profile.cashFlow}
                  ratiosAnnual={profile.ratiosAnnual}
                  ratiosQuarter={profile.ratiosQuarter}
                  basis={profile.basis}
                />
              </div>
            </section>

            <section id="ownership" className="mt-8 scroll-mt-40">
              <h2 className="type-section text-ink">Ownership</h2>
              <div className="mt-3 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
                <div className="card p-4">
                  <h3 className="type-subhead text-ink">
                    Shareholding pattern
                  </h3>
                  <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-paper-deep">
                    {profile.ownership.current.map((slice, index) => (
                      <span
                        key={slice.name}
                        title={`${slice.name}: ${slice.percent}%`}
                        style={{
                          width: `${slice.percent}%`,
                          backgroundColor: [
                            "#1b1464",
                            "#2456d8",
                            "#8b3dff",
                            "#ff7a45",
                            "#2fbf8f",
                            "#f5b544",
                          ][index % 6],
                        }}
                      />
                    ))}
                  </div>
                  <ul className="mt-3 space-y-2">
                    {profile.ownership.current.map((slice, index) => (
                      <li
                        key={slice.name}
                        className="flex items-center justify-between gap-2 text-[13px]"
                      >
                        <span className="flex items-center gap-2 text-muted">
                          <span
                            aria-hidden="true"
                            className="inline-block size-2 rounded-sm"
                            style={{
                              backgroundColor: [
                                "#1b1464",
                                "#2456d8",
                                "#8b3dff",
                                "#ff7a45",
                                "#2fbf8f",
                                "#f5b544",
                              ][index % 6],
                            }}
                          />
                          {slice.name}
                        </span>
                        <span className="tabular font-semibold text-ink">
                          {slice.percent.toFixed(2)}%
                        </span>
                      </li>
                    ))}
                  </ul>
                  {ownershipHistory && (
                    <div className="mt-4">
                      <h4 className="meta-caps">Last four quarters</h4>
                      <div className="mt-1.5">
                        <FinancialTable
                          table={ownershipHistory}
                          periodsToShow={3}
                          comparisonLabel={null}
                          defaultMode="cards"
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="card p-4">
                  <h3 className="type-subhead text-ink">Major shareholders</h3>
                  {profile.ownership.top.length ? (
                    <div className="mt-2 overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="border-b border-line px-2 py-2 text-left text-[11px] font-semibold text-muted"
                            >
                              Shareholder
                            </th>
                            <th
                              scope="col"
                              className="border-b border-line px-2 py-2 text-right text-[11px] font-semibold text-muted"
                            >
                              Holding
                            </th>
                            <th
                              scope="col"
                              className="border-b border-line px-2 py-2 text-right text-[11px] font-semibold text-muted"
                            >
                              As of
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {profile.ownership.top.slice(0, 12).map((owner) => (
                            <tr
                              key={`${owner.name}-${owner.date}`}
                              className="border-b border-line last:border-0"
                            >
                              <td className="px-2 py-2 text-[12.5px] text-ink">
                                {owner.name}
                              </td>
                              <td className="tabular px-2 py-2 text-right text-[12.5px] font-medium text-ink">
                                {owner.holding.toFixed(2)}%
                              </td>
                              <td className="px-2 py-2 text-right text-[11.5px] text-muted">
                                {owner.date ?? "—"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="type-body mt-2 text-muted">
                      No shareholder data available.
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section id="surveillance" className="mt-8 scroll-mt-40">
              <h2 className="type-section text-ink">Surveillance checklist</h2>
              <div className="mt-3 grid gap-3 lg:grid-cols-2">
                <div className="card p-4">
                  <h3 className="type-subhead flex items-center gap-1.5 text-ink">
                    <ShieldAlert
                      aria-hidden="true"
                      className="size-4 text-coral"
                    />
                    Caution flags
                  </h3>
                  {redFlags.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {redFlags.map(([flag, value]) => (
                        <li
                          key={flag}
                          className="text-[13px] leading-relaxed text-ink-soft"
                        >
                          {FLAG_LABELS[flag] ?? flag}
                          {value !== 1 && (
                            <span className="text-muted"> · {value}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="type-body mt-2 text-muted">
                      No surveillance or caution flags reported.
                    </p>
                  )}
                </div>
                <div className="card p-4">
                  <h3 className="type-subhead flex items-center gap-1.5 text-ink">
                    <ShieldCheck
                      aria-hidden="true"
                      className="size-4 text-positive"
                    />
                    Positive flags
                  </h3>
                  {greenFlags.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {greenFlags.map((flag) => (
                        <li
                          key={flag}
                          className="text-[13px] leading-relaxed text-ink-soft"
                        >
                          {flag}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="type-body mt-2 text-muted">
                      No positive flags reported.
                    </p>
                  )}
                </div>
              </div>
            </section>

            <p className="mt-5 text-[11px] leading-relaxed text-muted">
              Statements are{" "}
              {profile.basis === "consolidated" ? "consolidated" : "standalone"}{" "}
              because consolidated figures were not available. Ratings and flags
              are third-party assessments, not Stockmonk recommendations.
            </p>
          </>
        ) : (
          <>
            <section id="overview" className="scroll-mt-40">
              <h2 className="type-section text-ink">Key statistics</h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {trackerStats.map((stat) => (
                  <div key={stat.label} className="card-flat p-3.5">
                    <dt className="kpi-label">{stat.label}</dt>
                    <dd className="kpi-value mt-1">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="mt-4 rounded-xl border border-dashed border-line bg-surface p-5">
              <h2 className="type-subhead text-ink">
                Full profile in progress
              </h2>
              <p className="type-body mt-1 max-w-2xl text-muted">
                The earnings-tracker statistics are live. The full profile —
                statements, ratios, ownership and surveillance — has not been
                published for this company yet.
              </p>
              <Link
                href="/india/earnings-tracker"
                className="mt-2 inline-block text-[12.5px] font-semibold text-brand"
              >
                Back to the earnings tracker
              </Link>
            </section>
          </>
        )}

        <div className="mt-8">
          <Disclaimer variant="boxed" />
        </div>
      </main>
    </>
  );
}
