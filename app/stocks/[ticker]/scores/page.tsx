import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { V2Scorecard } from "@/components/scores/v2-scorecard";
import { Disclaimer } from "@/components/ui/disclaimer";
import { getV2Score } from "@/lib/scores-v2-data";
import type { ScoreKey } from "@/lib/scoring-v2/types";
import { classifyComponent, round } from "@/lib/scoring-v2/util";
import { breadcrumbJsonLd } from "@/lib/seo";

export const dynamic = "force-dynamic";

const ORDER: Array<{ key: ScoreKey; label: string; body: string }> = [
  {
    key: "growth",
    label: "Growth evidence",
    body: "Revenue and EPS growth, demand quality, surprises, revisions, forward estimates and reinvestment.",
  },
  {
    key: "quality",
    label: "Quality evidence",
    body: "Returns, margins, cash conversion, moat evidence, capital allocation and balance-sheet resilience.",
  },
  {
    key: "valuation",
    label: "Valuation evidence",
    body: "Own-history and peer multiples, growth-adjusted multiples, earnings and free-cash-flow yields.",
  },
  {
    key: "technical",
    label: "Technical evidence",
    body: "Market and sector trend, moving averages, relative strength, volume, base/breakout, momentum and entry risk.",
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ ticker: string }>;
}): Promise<Metadata> {
  const { ticker } = await params;
  const record = getV2Score(ticker);
  if (!record) return { title: "Score evidence" };
  return {
    title: `${record.name} (${record.ticker}) score evidence`,
    description: `Audit trail for the Stockmonk V2 Growth, Quality, Valuation and Technical scores for ${record.name}.`,
    alternates: { canonical: `/stocks/${record.ticker}/scores` },
  };
}

export default async function ScoreEvidencePage({
  params,
}: {
  params: Promise<{ ticker: string }>;
}) {
  const { ticker } = await params;
  const record = getV2Score(ticker);
  if (!record) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Discover", path: "/discover" },
          { name: record.name, path: `/stocks/${record.ticker}` },
          { name: "Score evidence", path: `/stocks/${record.ticker}/scores` },
        ])}
      />

      <div className="container-page max-w-[1100px] py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted"
        >
          <Link href="/discover" className="hover:text-ink">
            Discover
          </Link>
          <span aria-hidden="true">›</span>
          <Link href={`/stocks/${record.ticker}`} className="hover:text-ink">
            {record.ticker}
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-ink">Score evidence</span>
        </nav>

        <h1 className="display mt-3 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
          {record.name}
        </h1>
        <p className="mt-1.5 text-[13px] text-muted">
          V2 score audit trail · Methodology {record.methodologyVersion} · Data
          as of {record.asOf ?? "N/A"}
        </p>

        <div className="mt-4">
          <V2Scorecard record={record} />
        </div>

        <div className="mt-8 space-y-8">
          {ORDER.map((section) => {
            const component = record.scores[section.key];
            return (
              <section key={section.key}>
                <div className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
                  <div>
                    <h2 className="text-[16px] font-semibold text-ink">
                      {section.label}
                    </h2>
                    <p className="mt-0.5 max-w-2xl text-[12px] text-muted">
                      {section.body}
                    </p>
                  </div>
                  <p className="text-[12px] text-muted">
                    <span className="tabular text-[18px] font-semibold text-ink">
                      {component.score == null
                        ? "N/A"
                        : round(component.score, 0)}
                    </span>{" "}
                    · {classifyComponent(component.score)} ·{" "}
                    <span className="tabular">
                      {Math.round(component.coverage * 100)}% coverage
                    </span>
                    {component.status === "provisional" ? " · provisional" : ""}
                  </p>
                </div>

                <div className="mt-3 overflow-x-auto rounded-xl border border-line">
                  <table className="w-full min-w-[760px] border-collapse text-left">
                    <thead className="bg-paper-deep text-[10px] uppercase tracking-[0.08em] text-muted">
                      <tr>
                        <th className="px-3 py-2 font-semibold">Metric</th>
                        <th className="px-3 py-2 font-semibold">Value</th>
                        <th className="px-3 py-2 font-semibold">Period</th>
                        <th className="px-3 py-2 text-right font-semibold">
                          Points
                        </th>
                        <th className="px-3 py-2 font-semibold">Source / formula</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line text-[12px]">
                      {component.evidence.map((item) => (
                        <tr key={item.id} className={item.available ? "" : "bg-paper-deep/60"}>
                          <td className="px-3 py-2 align-top font-medium text-ink">
                            {item.label}
                          </td>
                          <td className="tabular px-3 py-2 align-top text-ink">
                            {item.value == null
                              ? "N/A"
                              : `${item.value}${item.unit ? ` ${item.unit}` : ""}`}
                          </td>
                          <td className="px-3 py-2 align-top text-muted">
                            {item.period ?? "—"}
                          </td>
                          <td className="tabular px-3 py-2 text-right align-top text-ink">
                            {item.available
                              ? `${item.points ?? 0} / ${item.maxPoints}`
                              : `N/A / ${item.maxPoints}`}
                          </td>
                          <td className="px-3 py-2 align-top text-muted">
                            <span className="block">{item.source}</span>
                            <span className="mt-0.5 block text-[11px] text-faint">
                              {item.formula}
                            </span>
                            {!item.available && item.reason && (
                              <span className="mt-0.5 block text-[11px] text-amber-800">
                                {item.reason}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-10">
          <Disclaimer variant="boxed" />
        </div>
      </div>
    </>
  );
}
