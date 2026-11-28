import { Database, Gauge, FileText, Layers } from "lucide-react";

const ITEMS = [
  {
    icon: Database,
    title: "Broad US equity coverage",
    body: "Thousands of US-listed companies across sectors and market capitalisations, with the same underlying data model.",
  },
  {
    icon: Gauge,
    title: "Four-factor intelligence",
    body: "Growth, Quality, Valuation and Technical scores with visible evidence, coverage and N/A handling.",
  },
  {
    icon: FileText,
    title: "Research-backed analysis",
    body: "Company reports tied to SEC filings, financial statements, segment disclosures and attributed consensus.",
  },
  {
    icon: Layers,
    title: "Systematic model portfolios",
    body: "Transparent construction rules, current holdings, benchmark comparisons and rules-based review proposals.",
  },
];

export function WhyStockmonk() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="home-card p-4">
            <span className="flex size-8 items-center justify-center rounded-md border border-hairline bg-canvas text-accent">
              <Icon aria-hidden="true" className="size-4" strokeWidth={1.8} />
            </span>
            <h3 className="mt-3 text-[13px] font-semibold text-graphite">
              {item.title}
            </h3>
            <p className="mt-1 text-[11.5px] leading-relaxed text-steel">
              {item.body}
            </p>
          </div>
        );
      })}
    </div>
  );
}
