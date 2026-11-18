import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, FileText } from "lucide-react";
import { BrokerLogo } from "@/components/brokers/broker-logo";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getBrokerReport, getBrokerReportIndex } from "@/lib/broker-reports";
import { formatDate } from "@/lib/format";

export const revalidate = 900;
export const dynamicParams = false;

export function generateStaticParams() {
  return getBrokerReportIndex().map((report) => ({ id: report.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const report = getBrokerReport(id);
  if (!report) return { title: "Broker note not found" };
  return {
    title: `${report.company} — ${report.headline}`,
    description: report.blurb,
    alternates: { canonical: `/newsfeed/broker/${report.id}` },
  };
}

function paragraphsFrom(text: string, max = 5): string[] {
  const sentences = text
    .split(/(?<=[.!?])\s+(?=[A-Z(])/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length > 50);
  const chunks: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    if ((current + sentence).length > 520) {
      if (current) chunks.push(current.trim());
      current = "";
    }
    current += `${sentence} `;
    if (chunks.length >= max) break;
  }
  if (current && chunks.length < max) chunks.push(current.trim());
  return chunks;
}

export default async function BrokerReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const report = getBrokerReport(id);
  if (!report) notFound();

  const { metrics } = report;
  const ratio =
    metrics.target != null && metrics.cmp != null && metrics.cmp > 0
      ? metrics.target / metrics.cmp
      : null;
  const displayTarget =
    metrics.target != null && (ratio == null || (ratio > 0.4 && ratio < 2.6))
      ? metrics.target
      : null;
  const upside =
    metrics.upside ??
    (displayTarget != null && metrics.cmp != null && metrics.cmp > 0
      ? ((displayTarget - metrics.cmp) / metrics.cmp) * 100
      : null);
  const max = Math.max(displayTarget ?? 0, metrics.cmp ?? 0);
  const sections = report.detailedSummary?.length
    ? report.detailedSummary
    : [
        { heading: "What the report says", bullets: report.summary.highlights },
        { heading: "Valuation", bullets: report.summary.valuation },
        { heading: "What to watch", bullets: report.summary.watch },
      ].filter((section) => section.bullets.length > 0);

  return (
    <div className="container-page max-w-[900px] py-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[10.5px] text-muted">
        <Link href="/" className="hover:text-ink">Home</Link>
        <span aria-hidden="true">›</span>
        <Link href="/newsfeed" className="hover:text-ink">Newsfeed</Link>
        <span aria-hidden="true">›</span>
        <Link href="/newsfeed?tag=Broker%20Note" className="hover:text-ink">Broker notes</Link>
        <span aria-hidden="true">›</span>
        <span className="text-ink">{report.company}</span>
      </nav>

      <header className="mt-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-2">
            <BrokerLogo
              id={report.brokerId ?? report.broker}
              name={report.brokerDisplay ?? report.broker}
              size={30}
            />
            <span className="text-[11px] font-semibold text-ink-soft">
              {report.brokerDisplay ?? report.broker}
            </span>
          </span>
          <span className="chip chip-info">{report.reportType}</span>
          {report.deepDive && <span className="chip chip-positive">Deep-Dive</span>}
          {report.materiality && (
            <span className={`chip ${report.materiality.label === "High" ? "chip-caution" : "chip-info"}`}>
              {report.materiality.label} materiality
            </span>
          )}
          <span className="text-[10.5px] text-faint">{formatDate(report.date)}</span>
          {report.market && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-faint">
              {report.market === "IN" ? "India" : report.market === "GCC" ? "GCC" : "US"}
            </span>
          )}
        </div>
        <h1 className="display mt-3 text-[30px] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[38px]">
          {report.company}: {report.headline}
        </h1>
        <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
          Summarised by Stockmonk from a {report.reportType.toLowerCase()} published by{" "}
          <span className="font-semibold text-ink-soft">{report.broker}</span>. Figures and views
          are the broker&apos;s; the original report is linked below.
        </p>
        {report.execSummary && (
          <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-ink-soft">
            {report.execSummary}
          </p>
        )}
        <a
          href={report.link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost mt-4 h-9 min-h-0 text-[11px]"
        >
          <FileText aria-hidden="true" className="size-3.5" />
          Original report (PDF)
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </header>

      {(displayTarget != null || metrics.cmp != null || metrics.recommendation) && (
        <section className="mt-6 border-y border-line py-4">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["Recommendation", metrics.recommendation ?? "n/a"],
              ["Target", displayTarget != null ? `₹${displayTarget.toLocaleString("en-IN")}` : "n/a"],
              ["Price at note", metrics.cmp != null ? `₹${metrics.cmp.toLocaleString("en-IN")}` : "n/a"],
              ["Implied upside", upside != null ? `${upside >= 0 ? "+" : ""}${upside.toFixed(1)}%` : "n/a"],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="stat-label">{label}</p>
                <p className="tabular mt-0.5 text-[15px] font-semibold text-ink">{value}</p>
              </div>
            ))}
          </div>
          {displayTarget != null && metrics.cmp != null && max > 0 && (
            <div className="mt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
                Price versus target
              </p>
              <div className="mt-2 space-y-1.5">
                {[
                  { label: "Price", value: metrics.cmp },
                  { label: "Target", value: displayTarget },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2">
                    <span className="w-12 text-[10px] text-muted">{row.label}</span>
                    <span className="h-2.5 rounded-full bg-brand-soft" style={{ width: `${Math.max(4, (row.value / max) * 100)}%` }} />
                    <span className="tabular text-[10.5px] text-ink-soft">₹{row.value.toLocaleString("en-IN")}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      <div className="mt-6 space-y-7">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="display text-[22px] tracking-[-0.02em] text-ink">{section.heading}</h2>
            <ul className="mt-2 space-y-2">
              {section.bullets.map((item) => (
                <li key={item} className="text-[13px] leading-relaxed text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}

        {report.deepDive && report.deepDiveText && (
          <section>
            <h2 className="display text-[22px] tracking-[-0.02em] text-ink">
              From the initiating coverage
            </h2>
            <div className="mt-2 space-y-3">
              {paragraphsFrom(report.deepDiveText).map((paragraph, index) => (
                <p key={index} className="text-[13px] leading-relaxed text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-8 rounded-xl border border-line bg-surface p-4 text-[11px] leading-relaxed text-muted">
        This page is a Stockmonk summary of third-party research. The recommendation, target and
        estimates belong to {report.broker} and may be changed or withdrawn without notice.
        Stockmonk does not publish its own ratings or price targets and this is not investment
        advice.
      </div>

      <Disclaimer variant="boxed" className="mt-5" />
    </div>
  );
}
