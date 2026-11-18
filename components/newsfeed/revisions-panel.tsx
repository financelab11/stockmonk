import Link from "next/link";
import { getEstimateRevisions } from "@/lib/estimate-revisions";

const ACTION_CLASS: Record<string, string> = {
  Upgrade: "chip chip-positive",
  "Target raised": "chip chip-positive",
  Downgrade: "chip chip-caution",
  "Target cut": "chip chip-caution",
  Reiterated: "chip",
  "New coverage": "chip chip-info",
};

export function RevisionsPanel() {
  const { rows, companies } = getEstimateRevisions();
  const recent = rows
    .filter((row) => row.targetChangePct != null || row.action !== "Reiterated")
    .sort((a, b) => Math.abs(b.targetChangePct ?? 0) - Math.abs(a.targetChangePct ?? 0))
    .slice(0, 30);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="display text-[20px] tracking-[-0.02em] text-ink">Largest average revisions</h2>
        <p className="mt-1 text-[11px] text-muted">
          Each broker compared with its own previous note. This is not a consensus
          calculation.
        </p>
        {companies.length === 0 ? (
          <p className="mt-3 rounded-xl border border-dashed border-line bg-surface p-5 text-[12px] text-muted">
            No broker revisions are available yet.
          </p>
        ) : (
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
                  <tr key={row.ticker ?? row.company}>
                    <td className="font-medium text-ink">{row.company}</td>
                    <td className="tabular text-right">{row.brokers}</td>
                    <td className="tabular text-right">{row.revisions}</td>
                    <td className="tabular text-right text-positive">{row.upgrades}</td>
                    <td className="tabular text-right text-danger">{row.downgrades}</td>
                    <td className="tabular text-right font-semibold">
                      {row.averageTargetChange == null
                        ? "n/a"
                        : `${row.averageTargetChange >= 0 ? "+" : ""}${row.averageTargetChange.toFixed(1)}%`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <h2 className="display text-[20px] tracking-[-0.02em] text-ink">Latest broker revisions</h2>
        {recent.length === 0 ? (
          <p className="mt-2 rounded-xl border border-dashed border-line bg-surface p-5 text-[12px] text-muted">
            As more notes are ingested, each broker&apos;s target and rating changes
            will appear here.
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
                  <th scope="col" className="text-right">Previous</th>
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
                    <td className="tabular text-right">
                      {row.previousTarget == null ? "n/a" : `₹${row.previousTarget.toLocaleString("en-IN")}`}
                    </td>
                    <td className="tabular text-right">
                      {row.target == null ? "n/a" : `₹${row.target.toLocaleString("en-IN")}`}
                    </td>
                    <td className="tabular text-right font-semibold">
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
      </div>

      <p className="text-[10.5px] leading-relaxed text-muted">
        Broker targets are the institutions&apos; own views. Missing previous notes
        mean no revision can be computed.{" "}
        <Link href="/newsfeed?category=broker" className="font-semibold text-brand">
          Browse all broker research
        </Link>
      </p>
    </div>
  );
}
