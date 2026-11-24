import type { Classification } from "@/lib/classifications";
import { classificationToneClass } from "@/lib/classifications";

export function ClassificationChip({
  classification,
  className = "",
}: {
  classification: Classification;
  className?: string;
}) {
  return (
    <span
      title={classification.detail}
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[12px] font-medium leading-5 ${classificationToneClass(classification.tone)} ${className}`}
    >
      {classification.label}
    </span>
  );
}
