import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ShieldAlert, ShieldCheck } from "lucide-react";
import { ChartFrame } from "@/components/charts/chart-frame";
import MarginChart from "@/components/charts/margin-chart";
import ProfileFinancialChart from "@/components/charts/profile-financial-chart";
import ProfilePriceChart from "@/components/charts/profile-price-chart";
import { StatementTable } from "@/components/profile/statement-table";
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

export function generateStaticParams() {
  const data = readEarningsTracker();
  return (data?.rows ?? []).map((row) => ({ ticker: row.ticker }));
}

export const dynamicParams = false;

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

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const key = ticker.toUpperCase();
  const profile = readMarketsmithProfile(key);
  const tracker = readEarningsTracker()?.rows.find((row) => row.ticker === key) ?? null;
  if (!profile && !tracker) notFound();

  const name = profile?.name ?? tracker?.name ?? key;
  const industry = profile?.industry ?? tracker?.industry ?? "—";
  const research = getIndiaTicker(key);

  const financialPoints = (() => {
    if (!profile) return [];
    const sales = new Map(profile.series.sales.map((point) => [point.label, point.value]));
    const eps = new Map(profile.series.eps.map((point) => [point.label, point.value]));
    return [...new Set([...sales.keys(), ...eps.keys()])]
      .sort()
      .map((label) => ({
        label,
        sales: sales.get(label) ?? null,
        eps: eps.get(label) ?? null,
      }));
  })();

  const margins = profile?.series.margins.map((point) => ({
    label: point.label,
    value: point.ebit,
    secondary: point.net,
  })) ?? [];

  const ownershipMonths = profile
    ? [...new Set(profile.ownership.history.map((point) => point.month))].slice(0, 4)
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
    ? Object.entries(profile.surveillance.red).filter(([, value]) => value !== 0)
    : [];
  const greenFlags = profile?.surveillance.green ?? [];

  const trackerStats = tracker
    ? [
        { label: "Market cap", value: formatCompactCurrency(tracker.marketCap, "INR") },
        { label: "P/E", value: tracker.pe == null ? "—" : tracker.pe.toFixed(1) },
        { label: "PEG", value: tracker.peg == null ? "—" : tracker.peg.toFixed(2) },
        { label: "ROCE", value: formatPercent(tracker.roce) },
        { label: "Sales growth", value: formatSignedPercent(tracker.salesGrowth) },
        { label: "Net profit growth", value: formatSignedPercent(tracker.netProfitGrowth) },
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

      <section className="border-b border-line bg-paper-deep">
        <div className="container-page py-6">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted">
            <Link prefetch={false} href="/" className="hover:text-ink">Home</Link>
            <span aria-hidden="true">›</span>
            <Link prefetch={false} href="/india" className="hover:text-ink">India Stocks</Link>
            <span aria-hidden="true">›</span>
            <Link prefetch={false} href="/india/earnings-tracker" className="hover:text-ink">Earnings Tracker</Link>
            <span aria-hidden="true">›</span>
            <span className="text-ink">{name}</span>
          </nav>

          <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="kicker">{industry}</p>
              <h1 className="display mt-1 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
                {name}
              </h1>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted">
                <span className="font-mono text-[11px] font-semibold text-ink-soft">{key}</span>
                {profile?.exchange && <><span aria-hidden="true">·</span><span>{profile.exchange}</span></>}
                {profile && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{profile.basis === "consolidated" ? "Consolidated statements" : "Standalone statements"}</span>
                    <span aria-hidden="true">·</span>
                    <span>Profile as of {formatDate(profile.fetchedAt)}</span>
                  </>
                )}
              </div>
              {profile?.website && (
                <a
                  href={profile.website.startsWith("http") ? profile.website : `https://${profile.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-brand hover:text-brand-deep"
                >
                  Company website <ArrowUpRight aria-hidden="true" className="size-3" />
                </a>
              )}
            </div>

            <div className="flex flex-wrap items-end gap-5">
              {profile?.price.value != null && (
                <div>
                  <p className="stat-label">Share price</p>
                  <p className="tabular mt-0.5 text-[24px] font-semibold leading-none text-ink">
                    ₹{profile.price.value.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </p>
                  <p className={`tabular mt-1 text-[11px] font-semibold ${(profile.price.changePct ?? 0) >= 0 ? "text-positive" : "text-danger"}`}>
                    {formatSignedPercent((profile.price.changePct ?? 0) / 100)} vs prior close
                  </p>
                </div>
              )}
              {profile?.price.week52High != null && profile.price.week52Low != null && (
                <div>
                  <p className="stat-label">52-week range</p>
                  <p className="tabular mt-0.5 text-[12px] font-semibold text-ink">
                    ₹{profile.price.week52Low.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                    {" – "}
                    ₹{profile.price.week52High.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                  </p>
                </div>
              )}
              {!profile && tracker && (
                <div>
                  <p className="stat-label">Market cap</p>
                  <p className="tabular mt-0.5 text-[12px] font-semibold text-ink">
                    {formatCompactCurrency(tracker.marketCap, "INR")}
                  </p>
                </div>
              )}
              {research && (
                <Link
                  href={`/india/stocks/${key}`}
                  className="btn btn-primary h-9 min-h-0 text-[11px]"
                >
                  Read the research note
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <main className="container-page py-6">
        {profile ? (
          <>
            <section className="grid gap-4 lg:grid-cols-[1.15fr_1fr]">
              <div className="card p-4">
                <h2 className="text-[12px] font-semibold text-ink">About the company</h2>
                <p className="mt-2 text-[12px] leading-relaxed text-muted">
                  {profile.about || "Company description not available."}
                </p>
                <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-line pt-3 text-[10.5px]">
                  <div>
                    <dt className="stat-label">Industry</dt>
                    <dd className="mt-0.5 font-medium text-ink">{industry}</dd>
                  </div>
                  {profile.location && (
                    <div>
                      <dt className="stat-label">Location</dt>
                      <dd className="mt-0.5 font-medium text-ink">{profile.location}</dd>
                    </div>
                  )}
                </dl>
              </div>

              <div className="card p-4">
                <h2 className="text-[12px] font-semibold text-ink">Key statistics</h2>
                <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="stat-label">{stat.label}</dt>
                      <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-ink">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            {profile.series.price.length > 1 && (
              <section className="mt-5">
                <ChartFrame
                  title="Share price"
                  description="Daily closes over the last twelve months."
                  height={300}
                >
                  <ProfilePriceChart points={profile.series.price} height={300} />
                </ChartFrame>
              </section>
            )}

            <section className="mt-4 grid gap-4 lg:grid-cols-2">
              {financialPoints.length > 1 && (
                <ChartFrame
                  title="Sales and EPS"
                  description="Annual sales (bars, ₹ Cr) and earnings per share (line, ₹)."
                  height={280}
                >
                  <ProfileFinancialChart points={financialPoints} height={280} />
                </ChartFrame>
              )}
              {margins.length > 1 && (
                <ChartFrame
                  title="Margins"
                  description="EBIT margin and after-tax margin, annual."
                  height={280}
                >
                  <MarginChart
                    points={margins}
                    primaryLabel="EBIT margin"
                    secondaryLabel="After-tax margin"
                  />
                </ChartFrame>
              )}
            </section>

            <section className="mt-8">
              <h2 className="display text-[22px] tracking-[-0.02em] text-ink">Key ratios</h2>
              <p className="mt-1 text-[11px] text-muted">
                Annual ratios from {profile.basis} statements. Expand the rows for the full history.
              </p>
              <div className="mt-2">
                <StatementTable table={profile.ratiosAnnual} collapsibleAfter={12} />
              </div>
              <details className="mt-3">
                <summary className="cursor-pointer text-[11px] font-semibold text-brand hover:text-brand-deep">
                  Quarterly ratios
                </summary>
                <div className="mt-2">
                  <StatementTable table={profile.ratiosQuarter} collapsibleAfter={12} />
                </div>
              </details>
            </section>

            <section className="mt-8">
              <h2 className="display text-[22px] tracking-[-0.02em] text-ink">Financial statements</h2>
              <p className="mt-1 text-[11px] text-muted">
                Income statement, balance sheet and cash flow in ₹ crore. Figures are as reported by
                MarketSmith India.
              </p>

              <div className="mt-3 space-y-5">
                <div>
                  <h3 className="text-[12px] font-semibold text-ink">Annual income statement</h3>
                  <div className="mt-1.5">
                    <StatementTable table={profile.incomeAnnual} collapsibleAfter={10} />
                  </div>
                </div>
                <details>
                  <summary className="cursor-pointer text-[11px] font-semibold text-brand hover:text-brand-deep">
                    Quarterly income statement
                  </summary>
                  <div className="mt-2">
                    <StatementTable table={profile.incomeQuarter} collapsibleAfter={10} />
                  </div>
                </details>
                <div>
                  <h3 className="text-[12px] font-semibold text-ink">Balance sheet</h3>
                  <div className="mt-1.5">
                    <StatementTable table={profile.balanceSheet} collapsibleAfter={10} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[12px] font-semibold text-ink">Cash flow statement</h3>
                  <div className="mt-1.5">
                    <StatementTable table={profile.cashFlow} collapsibleAfter={10} />
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="display text-[22px] tracking-[-0.02em] text-ink">Ownership</h2>
              <div className="mt-3 grid gap-4 lg:grid-cols-[1.1fr_1fr]">
                <div className="card p-4">
                  <h3 className="text-[12px] font-semibold text-ink">Shareholding pattern</h3>
                  <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-paper-deep">
                    {profile.ownership.current.map((slice, index) => (
                      <span
                        key={slice.name}
                        title={`${slice.name}: ${slice.percent}%`}
                        style={{
                          width: `${slice.percent}%`,
                          backgroundColor: ["#1b1464", "#2456d8", "#8b3dff", "#ff7a45", "#2fbf8f", "#f5b544"][index % 6],
                        }}
                      />
                    ))}
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {profile.ownership.current.map((slice, index) => (
                      <li key={slice.name} className="flex items-center justify-between gap-2 text-[11px]">
                        <span className="flex items-center gap-1.5 text-muted">
                          <span
                            aria-hidden="true"
                            className="inline-block size-2 rounded-sm"
                            style={{ backgroundColor: ["#1b1464", "#2456d8", "#8b3dff", "#ff7a45", "#2fbf8f", "#f5b544"][index % 6] }}
                          />
                          {slice.name}
                        </span>
                        <span className="tabular font-semibold text-ink">{slice.percent.toFixed(2)}%</span>
                      </li>
                    ))}
                  </ul>
                  {ownershipHistory && (
                    <details className="mt-3">
                      <summary className="cursor-pointer text-[10.5px] font-semibold text-brand hover:text-brand-deep">
                        Last four quarters
                      </summary>
                      <div className="mt-2">
                        <StatementTable table={ownershipHistory} />
                      </div>
                    </details>
                  )}
                </div>

                <div className="card p-4">
                  <h3 className="text-[12px] font-semibold text-ink">Major shareholders</h3>
                  {profile.ownership.top.length ? (
                    <div className="mt-2 overflow-x-auto">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th scope="col">Shareholder</th>
                            <th scope="col" className="text-right">Holding</th>
                            <th scope="col" className="text-right">As of</th>
                          </tr>
                        </thead>
                        <tbody>
                          {profile.ownership.top.slice(0, 12).map((owner) => (
                            <tr key={`${owner.name}-${owner.date}`}>
                              <td className="text-[11px] text-ink">{owner.name}</td>
                              <td className="tabular text-right text-[11px]">{owner.holding.toFixed(2)}%</td>
                              <td className="text-right text-[10.5px] text-muted">{owner.date ?? "—"}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="mt-2 text-[11px] text-muted">No shareholder data available.</p>
                  )}
                </div>
              </div>
            </section>

            <section className="mt-8">
              <h2 className="display text-[22px] tracking-[-0.02em] text-ink">Surveillance checklist</h2>
              <div className="mt-2 grid gap-3 lg:grid-cols-2">
                <div className="card p-4">
                  <h3 className="flex items-center gap-1.5 text-[12px] font-semibold text-ink">
                    <ShieldAlert aria-hidden="true" className="size-4 text-coral" />
                    Caution flags
                  </h3>
                  {redFlags.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {redFlags.map(([flag, value]) => (
                        <li key={flag} className="text-[11px] text-ink-soft">
                          {FLAG_LABELS[flag] ?? flag}
                          {value !== 1 && <span className="text-muted"> · {value}</span>}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[11px] text-muted">
                      No surveillance or caution flags on MarketSmith&apos;s list.
                    </p>
                  )}
                </div>
                <div className="card p-4">
                  <h3 className="flex items-center gap-1.5 text-[12px] font-semibold text-ink">
                    <ShieldCheck aria-hidden="true" className="size-4 text-positive" />
                    Positive flags
                  </h3>
                  {greenFlags.length ? (
                    <ul className="mt-2 space-y-1.5">
                      {greenFlags.map((flag) => (
                        <li key={flag} className="text-[11px] text-ink-soft">{flag}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-[11px] text-muted">No positive flags reported.</p>
                  )}
                </div>
              </div>
            </section>

            <p className="mt-4 text-[10px] leading-relaxed text-muted">
              Profile data: MarketSmith India (authorised). Statements are{" "}
              {profile.basis === "consolidated" ? "consolidated" : "standalone"} because consolidated
              figures were not available. MarketSmith ratings and flags are third-party assessments,
              not Stockmonk recommendations.
            </p>
          </>
        ) : (
          <>
            <section className="card p-4">
              <h2 className="text-[12px] font-semibold text-ink">Key statistics</h2>
              <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-5">
                {trackerStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="stat-label">{stat.label}</dt>
                    <dd className="tabular mt-0.5 text-[11.5px] font-semibold text-ink">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <section className="mt-4 rounded-xl border border-dashed border-line bg-surface p-5">
              <p className="text-[12px] font-semibold text-ink">Full profile in progress</p>
              <p className="mt-1 max-w-2xl text-[11.5px] leading-relaxed text-muted">
                The earnings-tracker statistics are live. The MarketSmith profile — statements,
                ratios, ownership and surveillance — is being ingested company by company; Tips Music
                is the first completed sample.
              </p>
              <Link href="/india/earnings-tracker" className="mt-2 inline-block text-[11px] font-semibold text-brand">
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
