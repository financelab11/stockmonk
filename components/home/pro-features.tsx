import {
  BarChart3,
  BellRing,
  FileText,
  ListChecks,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: FileText,
    kicker: "Company research",
    title: "Ten-section reports built from filings",
    body: "Business model, segment mix, growth drivers, financials, valuation context and risks — each section sourced and charted.",
    points: [
      "SEC filing citations",
      "Attributed consensus",
      "Accessible data tables",
    ],
    visual: "report",
    image: "/product/pro-report.webp",
  },
  {
    icon: BarChart3,
    kicker: "Multi-factor screens",
    title: "Compare the numbers, not the narratives",
    body: "Percentile scores for growth, profitability, cash generation, balance sheet and valuation across the covered universe.",
    points: [
      "Descriptive screens",
      "No ratings or targets",
      "Peer-relative context",
    ],
    visual: "screens",
    image: "/product/pro-screens.webp",
  },
  {
    icon: BellRing,
    kicker: "Data-change alerts",
    title: "Know when the story actually changes",
    body: "Watchlist alerts for new filings, earnings dates and estimate revisions. No hype, no price predictions.",
    points: ["Filing alerts", "Earnings calendar", "Estimate changes"],
    visual: "alerts",
    image: "/product/pro-alerts.webp",
  },
  {
    icon: ListChecks,
    kicker: "Earnings summaries",
    title: "The quarter in five minutes",
    body: "Reported revenue, margins, EPS and cash flow compared with consensus, with the source and report date shown.",
    points: ["Actual vs estimate", "Margin bridge", "What to watch next"],
    visual: "earnings",
    image: "/product/pro-earnings.webp",
  },
  {
    icon: Sparkles,
    kicker: "Screener and watchlist",
    title: "A research library that follows your interests",
    body: "Save companies, compare them side by side and keep the data in one place. The watchlist works offline.",
    points: ["Local-first", "Offline ready", "Exportable tables"],
    visual: "watchlist",
    image: "/product/pro-watchlist.webp",
  },
] as const;

export function ProFeatures() {
  return (
    <section
      className="container-page py-12"
      aria-labelledby="pro-features-title"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="pro-features-title"
          className="display text-[30px] leading-[1.08] tracking-[-0.025em] text-ink sm:text-[38px]"
        >
          What you get when you go deeper
        </h2>
        <p className="mt-2 text-[13px] leading-relaxed text-muted">
          Longer reports, comparison screens and alerts when a filing or
          estimate changes. The checkout is a mock.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {FEATURES.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="grid items-center gap-5 rounded-2xl border border-line bg-surface p-5 lg:grid-cols-2 lg:p-7"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <span className="flex size-9 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Icon aria-hidden="true" className="size-4" />
                </span>
                <p className="mt-3 text-[10px] font-bold text-muted">
                  {feature.kicker}
                </p>
                <h3 className="display mt-1 text-[24px] leading-tight tracking-[-0.02em] text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">
                  {feature.body}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {feature.points.map((point) => (
                    <li key={point} className="chip">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`rounded-xl bg-paper-deep p-3 ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="overflow-hidden rounded-lg border border-line bg-white">
                  <div className="flex items-center gap-1 border-b border-line bg-paper-deep px-2 py-1.5">
                    <span className="size-1.5 rounded-full bg-[#ff7a45]" />
                    <span className="size-1.5 rounded-full bg-[#f5b544]" />
                    <span className="size-1.5 rounded-full bg-[#2fbf8f]" />
                    <span className="ml-2 text-[8px] text-muted">
                      stockmonk.app
                    </span>
                  </div>
                  <img
                    src={feature.image}
                    alt=""
                    width={960}
                    height={615}
                    loading="lazy"
                    decoding="async"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
