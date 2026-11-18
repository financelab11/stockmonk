import type { Metadata } from "next";
import Link from "next/link";
import { getEstimateRevisions } from "@/lib/estimate-revisions";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Estimate revisions",
  description:
    "Broker target-price and rating revisions across Indian coverage, calculated from each broker's own prior note.",
  alternates: { canonical: "/newsfeed/revisions" },
};

const ACTION_CLASS: Record<string, string> = {
  Upgrade: "chip chip-positive",
  "Target raised": "chip chip-positive",
  Downgrade: "chip chip-caution",
  "Target cut": "chip chip-caution",
  Reiterated: "chip",
  "New coverage": "chip chip-info",
};

export default function RevisionsPage() {
  const { rows, companies } = getEstimateRevisions();
  const recent = rows
    .filter((row) => row.targetChangePct != null || row.action !== "Reiterated")
    .sort((a, b) => Math.abs(b.targetChangePct ?? 0) - Math.abs(a.targetChangePct ?? 0))
    .slice(0, 30);

  return (
    <div className="container-page py-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/newsfeed" className="hover:text-ink">Newsfeed</Link>
        <span aria-hidden="true">›</span>
        <span className="text-ink">Estimate revisions</span>
      </nav>

      <header className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="kicker">Broker estimate changes</p>
          <h1 className="display mt-1 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
            Estimate revisions
          </h1>
          <p className="mt-1 max-w-2xl text-[12.5px] leading-relaxed text-muted">
            Each row compares a broker with its own previous published target or
            rating. This is not a consensus calculation; consensus is shown
            separately where enough brokers cover the same company.
          </p>
        </div>
        <Link href="/newsfeed" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
          Back to feed
        </Link>
      </header>

      {companies.length > 0 && (
        <section className="mt-6">
          <h2 className="display text-[20px] tracking-[-0.02em] text-ink">Largest average revisions</h2>
          <div className="mt-2 overflow-x-auto rounded-xl border border-line">
            <table className="data-table min-w-[640px]">
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col" className="text-right">Brokers</th>
                  <th scope="col" className="text-right">Revisions</th>
                  <th scope="col" className="text-right">Upgrades</th>
                  <th scope="col" className="text-right">Downgrades</th>
                  <th scope="col" className="text-right">Avg target change</th>
                </tr>
              </thead>
              <tbody>
                {companies.slice(0, 20).map((row) => (
                  <tr key={`${row.ticker ?? row.company}`}>
                    <td className="font-medium text-ink">{row.company}</td>
                    <td className="text-right tabular">{row.brokers}</td>
                    <td className="text-right tabular">{row.revisions}</td>
                    <td className="text-right tabular text-positive">{row.upgrades}</td>
                    <td className="text-right tabular text-danger">{row.downgrades}</td>
                    <td className="text-right tabular font-semibold">
                      {row.averageTargetChange == null
                        ? "n/a"
                        : `${row.averageTargetChange >= 0 ? "+" : ""}${row.averageTargetChange.toFixed(1)}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="mt-8">
        <h2 className="display text-[20px] tracking-[-0.02em] text-ink">Latest broker revisions</h2>
        {recent.length === 0 ? (
          <p className="mt-2 rounded-xl border border-dashed border-line bg-surface p-5 text-[12px] text-muted">
            No broker revisions are available yet. As more notes are ingested, each
            broker&apos;s target and rating changes will appear here.
          </p>
        ) : (
          <div className="mt-2 overflow-x-auto rounded-xl border border-line">
            <table className="data-table min-w-[760px]">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Company</th>
                  <th scope="col">Broker</th>
                  <th scope="col">Action</th>
                  <th scope="col" className="text-right">Previous target</th>
                  <th scope="col" className="text-right">Target</th>
                  <th scope="col" className="text-right">Change</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((row) => (
                  <tr key={`${row.broker}-${row.company}-${row.date}`}>
                    <td className="tabular text-muted">{row.date}</td>
                    <td className="font-medium text-ink">{row.company}</td>
                    <td className="text-muted">{row.broker}</td>
                    <td>
                      <span className={ACTION_CLASS[row.action] ?? "chip"}>{row.action}</span>
                    </td>
                    <td className="text-right tabular">
                      {row.previousTarget == null ? "n/a" : `₹${row.previousTarget.toLocaleString("en-IN")}`}
                    </td>
                    <td className="text-right tabular">
                      {row.target == null ? "n/a" : `₹${row.target.toLocaleString("en-IN")}`}
                    </td>
                    <td className="text-right tabular font-semibold">
                      {row.targetChangePct == null
                        ? "n/a"
                        : `${row.targetChangePct >= 0 ? "+" : ""}${row.targetChangePct.toFixed(1)}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <p className="mt-4 text-[10.5px] leading-relaxed text-muted">
        Revisions are calculated from Stockmonk&apos;s summaries of third-party
        broker reports. A missing previous note means no revision can be computed.
        Broker targets are the institution&apos;s, not Stockmonk&apos;s.
      </p>
    </div>
  );
}
