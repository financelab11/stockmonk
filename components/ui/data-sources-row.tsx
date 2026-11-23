import { Landmark, LineChart, Database, FileSearch } from "lucide-react";

const SOURCES = [
  { name: "SEC EDGAR", detail: "Statements & filings", icon: Database },
  { name: "Yahoo Finance", detail: "Prices & profile", icon: LineChart },
  { name: "Yahoo / Nasdaq", detail: "Attributed consensus", icon: Landmark },
  { name: "Company filings", detail: "Segments & risks", icon: FileSearch },
];

export function DataSourcesRow({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid grid-cols-2 gap-2 sm:grid-cols-4" : "grid grid-cols-2 gap-3 sm:grid-cols-4"}>
      {SOURCES.map((source) => {
        const Icon = source.icon;
        return (
          <div
            key={source.name}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-surface px-3 py-2.5"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[12px] font-semibold text-ink">
                {source.name}
              </span>
              <span className="block truncate text-[10px] text-muted">
                {source.detail}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}
