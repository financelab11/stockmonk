import type { ScoreEvidence } from "@/lib/scoring-v2/types";

function valueText(item: ScoreEvidence): string {
  if (item.value == null) return "N/A";
  return String(item.value);
}

function ValueBlock({
  item,
  large = false,
}: {
  item: ScoreEvidence;
  large?: boolean;
}) {
  if (item.value == null) {
    return <span className="text-[12px] font-medium text-faint">N/A</span>;
  }
  const inlineUnit = item.unit.length <= 3;
  return (
    <span className="inline-flex flex-col items-end leading-tight">
      <span
        className={`tabular font-semibold text-ink ${
          large ? "text-[21px]" : "text-[15px]"
        }`}
      >
        {valueText(item)}
        {inlineUnit && item.unit && (
          <span
            className={`ml-0.5 font-medium text-muted ${
              large ? "text-[12px]" : "text-[10px]"
            }`}
          >
            {item.unit}
          </span>
        )}
      </span>
      {item.unit && !inlineUnit && (
        <span className="mt-0.5 max-w-[130px] text-right text-[10px] font-normal leading-tight text-muted">
          {item.unit}
        </span>
      )}
    </span>
  );
}

function PointsBlock({ item, large = false }: { item: ScoreEvidence; large?: boolean }) {
  if (!item.available || item.points == null) {
    return (
      <span className="whitespace-nowrap text-[11px] font-medium text-faint">
        N/A <span className="text-[10px] font-normal">/ {item.maxPoints}</span>
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-baseline gap-1 whitespace-nowrap rounded-lg border border-line bg-paper-deep px-2 py-1 ${
        large ? "px-2.5 py-1.5" : ""
      }`}
    >
      <span
        className={`tabular font-semibold leading-none text-ink ${
          large ? "text-[16px]" : "text-[14px]"
        }`}
      >
        {item.points}
      </span>
      <span className="text-[10px] font-medium leading-none text-muted">
        / {item.maxPoints}
      </span>
    </span>
  );
}

function Reason({ item }: { item: ScoreEvidence }) {
  if (item.available || !item.reason) return null;
  return (
    <p className="mt-1.5 text-[11px] leading-relaxed text-amber-800">
      {item.reason}
    </p>
  );
}

export function ScoreEvidenceTable({
  evidence,
}: {
  evidence: ScoreEvidence[];
}) {
  return (
    <>
      {/* Desktop / tablet: aligned columns make scanning values and points easy. */}
      <div className="mt-3 hidden overflow-hidden rounded-xl border border-line bg-surface md:block">
        <table className="w-full table-fixed border-collapse text-left">
          <colgroup>
            <col />
            <col className="w-[132px]" />
            <col className="w-[132px]" />
            <col className="w-[112px]" />
          </colgroup>
          <thead className="bg-paper-deep text-[10px] uppercase tracking-[0.06em] text-muted">
            <tr>
              <th className="px-4 py-2.5 font-semibold">Metric · formula</th>
              <th className="px-4 py-2.5 text-right font-semibold">Value</th>
              <th className="px-4 py-2.5 font-semibold">Period</th>
              <th className="px-4 py-2.5 text-right font-semibold">Points</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line text-[12px]">
            {evidence.map((item) => (
              <tr
                key={item.id}
                className={item.available ? "" : "bg-paper-deep/60"}
              >
                <td className="px-4 py-3 align-top">
                  <p className="text-[13px] font-semibold leading-snug text-ink">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-muted">
                    {item.formula}
                  </p>
                  <Reason item={item} />
                </td>
                <td className="px-4 py-3 text-right align-top">
                  <ValueBlock item={item} />
                </td>
                <td className="px-4 py-3 align-top text-[12px] leading-snug text-muted">
                  {item.period ?? "—"}
                </td>
                <td className="px-4 py-3 text-right align-top">
                  <PointsBlock item={item} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: stacked cards keep value and points legible without sideways scrolling. */}
      <div className="mt-3 space-y-2 md:hidden">
        {evidence.map((item) => (
          <div
            key={item.id}
            className={`rounded-xl border border-line p-3 ${
              item.available ? "bg-surface" : "bg-paper-deep/60"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-ink">
                {item.label}
              </p>
              <span className="shrink-0">
                <PointsBlock item={item} large />
              </span>
            </div>
            <div className="mt-2.5 flex items-end justify-between gap-3">
              <ValueBlock item={item} large />
              <span className="pb-0.5 text-[11px] text-muted">
                {item.period ?? "—"}
              </span>
            </div>
            <p className="mt-2.5 border-t border-line pt-2 text-[11px] leading-relaxed text-muted">
              {item.formula}
            </p>
            <Reason item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
