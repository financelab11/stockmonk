import type { Metadata } from "next";
import { Disclaimer } from "@/components/ui/disclaimer";
import { GrowthRanker } from "@/components/tools/growth-ranker/growth-ranker";
import { GROWTH_RANKER } from "@/config/growth-ranker";
import { getFxRate } from "@/lib/growth-ranker/fx";
import { llmIsConfigured } from "@/lib/growth-ranker/llm";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Forward Revenue Growth Ranker",
  description:
    "Upload a company list, filter by market cap, and rank Indian companies by a three-year forward revenue CAGR built from consensus and forward evidence. Historical growth carries zero weight.",
  alternates: { canonical: "/tools/growth-ranker" },
  openGraph: {
    title: "Forward Revenue Growth Ranker — Stockmonk",
    description:
      "A forward-only revenue ranker for Indian equities: upload, resolve, filter by market cap and rank by three-year forward CAGR.",
    url: "/tools/growth-ranker",
  },
};

export default function GrowthRankerPage() {
  const fx = getFxRate();
  const llm = llmIsConfigured();

  return (
    <>
      <section className="surface-tint border-b border-line">
        <div className="container-page py-8 lg:py-11">
          <p className="kicker">Tools · India Stocks</p>
          <h1 className="display mt-2 max-w-3xl text-[34px] leading-[1.05] tracking-[-0.028em] text-ink sm:text-[44px]">
            Forward Revenue Growth Ranker
          </h1>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-ink-soft">
            Upload a list of Indian companies, filter by market cap, and rank them
            by a three-year <strong>forward</strong> revenue CAGR. The projection is
            built from consensus and forward evidence: guidance, capacity, order
            books and market growth. Reported historical growth carries zero weight.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip chip-positive">Forward only</span>
            <span className="chip">3 fiscal years</span>
            <span className="chip">Consensus-led</span>
            <span className="chip">Auditable sources</span>
            <span className="chip">CSV · XLSX · paste</span>
          </div>
          <p className="mt-3 text-[10.5px] text-muted">
            {fx
              ? `FX reference: 1 USD = ₹${fx.rate.toFixed(2)} · as of ${fx.asOf}`
              : "FX reference unavailable — USD thresholds disabled."}{" "}
            · {llm ? "Bespoke analyst model configured" : "Deterministic consensus mode"}
          </p>
        </div>
      </section>

      <div className="container-page py-6 lg:py-8">
        <GrowthRanker
          fx={fx}
          llmConfigured={llm}
          defaults={{
            thresholdValue: GROWTH_RANKER.defaultMarketCapThreshold.value,
            thresholdUnit: GROWTH_RANKER.defaultMarketCapThreshold.unit,
            minAnalysts: GROWTH_RANKER.minConsensusAnalysts,
            divergenceFlagPct: GROWTH_RANKER.divergenceFlagPct,
          }}
        />

        <section className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "1. Resolve",
              body: "Tickers and names are matched against the India directory with exact and fuzzy matching. Unmatched rows are surfaced, never silently dropped.",
            },
            {
              title: "2. Filter",
              body: "The market-cap threshold is applied in INR crore or USD million using a dated, configurable FX reference.",
            },
            {
              title: "3. Research",
              body: "Each company is processed independently: FY0 selection, consensus mapping, forward extension or a bespoke model, schema validation and retries.",
            },
            {
              title: "4. Rank",
              body: "Ranking uses the base-case 3-year revenue CAGR. Bear and bull cases are shown as a band and never enter the ranking.",
            },
          ].map((card) => (
            <div key={card.title} className="card p-4">
              <p className="text-[12px] font-semibold text-ink">{card.title}</p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{card.body}</p>
            </div>
          ))}
        </section>

        <section className="mt-8 card p-5">
          <h2 className="text-[16px] font-semibold text-ink">Methodology and limits</h2>
          <ul className="mt-2 space-y-1.5 text-[12px] leading-relaxed text-muted">
            <li>
              <strong className="text-ink">Base year:</strong> the last completed
              fiscal year. For a March year-end, FY0 is the year ending 31 March
              before today; FY+1 to FY+3 roll forward from that date.
            </li>
            <li>
              <strong className="text-ink">CAGR:</strong> (FY+3 / FY0)^(1/3) − 1,
              using the base case. The base year revenue is shown on every note.
            </li>
            <li>
              <strong className="text-ink">Estimate selection:</strong> full
              three-year consensus with at least three analysts is used as-is.
              Partial consensus is extended with its own forward-implied growth,
              faded by {Math.round((1 - GROWTH_RANKER.extensionFade) * 100)}% in
              the final year. No consensus and no configured model means the
              company is skipped, not invented.
            </li>
            <li>
              <strong className="text-ink">Historical growth:</strong> displayed in
              the note for context only. It is not an input to any projection, the
              CAGR or the ranking.
            </li>
            <li>
              <strong className="text-ink">Evidence:</strong> every note lists the
              source type, URL and date. Earnings-call transcripts and guidance are
              marked unavailable unless an ingestion provider is configured, so the
              model never claims to have read them.
            </li>
            <li>
              <strong className="text-ink">Universe:</strong> resolution is against
              the current India directory. A 1,400-row upload is accepted, and every
              unmatched name is listed for correction.
            </li>
          </ul>
        </section>

        <Disclaimer variant="boxed" className="mt-8" />
      </div>
    </>
  );
}
