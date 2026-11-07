import type { RiskItem } from "@/content/stocks/types";

const SEVERITY_CLASS: Record<RiskItem["severity"], string> = {
  High: "chip chip-danger",
  Medium: "chip chip-caution",
  Low: "chip chip-info",
};

export function RiskList({ items }: { items: RiskItem[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, index) => (
        <li key={item.title} className="card-flat p-3.5">
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-paper-deep font-mono text-[10px] font-semibold text-muted">
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[13px] font-semibold text-ink">{item.title}</h3>
                <span className={SEVERITY_CLASS[item.severity]}>{item.severity} risk</span>
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">{item.detail}</p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-ink-soft">
                <span className="font-semibold text-ink">What to watch: </span>
                {item.watch}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
