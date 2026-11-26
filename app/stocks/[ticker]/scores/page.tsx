import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { ScoreEvidenceTable } from "@/components/scores/score-evidence-table";
import { V2Scorecard } from "@/components/scores/v2-scorecard";
import { Disclaimer } from "@/components/ui/disclaimer";
import { isResearchTicker } from "@/config/universe";
import { getV2Score } from "@/lib/scores-v2-data";
import type { ScoreKey } from "@/lib/scoring-v2/types";
import { classifyComponent, round } from "@/lib/scoring-v2/util";
import { formatDate } from "@/lib/format";
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
    description: `Evidence behind the Stockmonk Growth, Quality, Valuation and Technical scores for ${record.name}.`,
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

  const hasResearch = isResearchTicker(record.ticker);
  const crumbs = hasResearch
    ? [
        { name: "Home", path: "/" },
        { name: "Discover", path: "/discover" },
        { name: record.name, path: `/stocks/${record.ticker}` },
        { name: "Score evidence", path: `/stocks/${record.ticker}/scores` },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Discover", path: "/discover" },
        { name: "Score evidence", path: `/stocks/${record.ticker}/scores` },
      ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <div className="container-page max-w-[1100px] py-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1.5 text-[11px] text-muted"
        >
          <Link href="/discover" className="hover:text-ink">
            Discover
          </Link>
          <span aria-hidden="true">›</span>
          {hasResearch ? (
            <>
              <Link href={`/stocks/${record.ticker}`} className="hover:text-ink">
                {record.ticker}
              </Link>
              <span aria-hidden="true">›</span>
            </>
          ) : null}
          <span className="text-ink">Score evidence</span>
        </nav>

        <h1 className="display mt-3 text-[30px] leading-tight tracking-[-0.025em] text-ink sm:text-[38px]">
          {record.name}
        </h1>
        <p className="mt-1.5 text-[13px] text-muted">
          {record.ticker} · Score evidence · Data as of{" "}
          {record.asOf ? formatDate(record.asOf) : "N/A"}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {hasResearch ? (
            <>
              <Link
                href={`/stocks/${record.ticker}`}
                className="inline-flex items-center rounded-full border border-line bg-surface px-3 py-1.5 text-[10.5px] font-semibold text-ink-soft transition hover:border-brand/40 hover:text-brand"
              >
                Research report
              </Link>
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand-soft px-3 py-1.5 text-[10.5px] font-semibold text-brand-deep">
                Score evidence
              </span>
            </>
          ) : (
            <>
              <span className="inline-flex items-center rounded-full border border-brand/30 bg-brand-soft px-3 py-1.5 text-[10.5px] font-semibold text-brand-deep">
                Score evidence
              </span>
              <span className="inline-flex items-center rounded-full border border-dashed border-line bg-paper-deep px-3 py-1.5 text-[10.5px] font-semibold text-muted">
                Research coverage coming soon
              </span>
            </>
          )}
        </div>

        {!hasResearch && (
          <div className="mt-3 rounded-xl border border-line bg-paper-deep px-4 py-3 text-[12px] leading-relaxed text-muted">
            <span className="font-semibold text-ink">
              Research coverage coming soon.
            </span>{" "}
            The four-factor score and the complete evidence trail are live. The
            ten-section research report is not published for this company yet.
          </div>
        )}

        <div className="mt-4">
          <V2Scorecard record={record} showEvidenceLink={false} />
        </div>

        <div className="mt-8 space-y-8">
          {ORDER.map((section) => {
            const component = record.scores[section.key];
            return (
              <section key={section.key}>
                <div className="flex flex-wrap items-end justify-between gap-2 border-b border-line pb-2">
                  <div>
                    <h2 className="display text-[22px] leading-tight tracking-[-0.015em] text-ink">
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
                    · {classifyComponent(component.score)}
                    {component.status === "provisional" ? " · provisional" : ""}
                  </p>
                </div>

                <ScoreEvidenceTable evidence={component.evidence} />
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
