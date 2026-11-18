import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrokerLogo } from "@/components/brokers/broker-logo";
import { getBrokerReportsForTicker } from "@/lib/broker-reports";
import { formatDate } from "@/lib/format";

export function BrokerResearch({ ticker }: { ticker: string }) {
  const reports = getBrokerReportsForTicker(ticker).slice(0, 6);
  if (reports.length === 0) return null;

  return (
    <section className="container-page max-w-[900px] py-8">
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="kicker">Broker research</p>
          <h2 className="display mt-1 text-[22px] tracking-[-0.02em] text-ink">
            Third-party notes on {ticker}
          </h2>
        </div>
        <Link href="/newsfeed?category=broker" className="text-[11px] font-semibold text-brand hover:text-brand-deep">
          All broker notes
        </Link>
      </div>
      <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
        {reports.map((report) => (
          <li key={report.id}>
            <Link
              href={`/newsfeed/broker/${report.id}`}
              className="flex flex-wrap items-center gap-3 px-3.5 py-3 hover:bg-paper-deep"
            >
              <BrokerLogo id={report.brokerId ?? report.broker} name={report.broker} size={26} />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[12px] font-semibold text-ink">
                  {report.headline}
                </span>
                <span className="mt-0.5 block text-[10.5px] text-muted">
                  {report.brokerDisplay ?? report.broker} · {report.reportType} · {formatDate(report.date)}
                </span>
              </span>
              <span className="tabular text-[10.5px] text-muted">
                {report.metrics.recommendation ?? "—"}
                {report.metrics.target != null
                  ? ` · ₹${report.metrics.target.toLocaleString("en-IN")}`
                  : ""}
              </span>
              <ArrowUpRight aria-hidden="true" className="size-3.5 text-faint" />
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[10px] text-muted">
        Broker ratings and targets are the institutions&apos; own views and are not
        Stockmonk recommendations.
      </p>
    </section>
  );
}
