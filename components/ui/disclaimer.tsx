import { Info } from "lucide-react";
import { DISCLAIMER } from "@/lib/constants";

export function Disclaimer({
  variant = "inline",
  className = "",
}: {
  variant?: "inline" | "boxed" | "footer";
  className?: string;
}) {
  if (variant === "footer") {
    return (
      <p className={`text-[11px] leading-relaxed text-muted ${className}`}>
        {DISCLAIMER}
      </p>
    );
  }

  return (
    <div
      className={`${
        variant === "boxed"
          ? "rounded-xl border border-line bg-paper-deep p-4"
          : "border-t border-line pt-4"
      } ${className}`}
    >
      <div className="flex gap-3">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />
        <div>
          <p className="text-[11px] leading-relaxed text-muted">{DISCLAIMER}</p>
          <p className="mt-1 text-[11px] leading-relaxed text-faint">
            Read our{" "}
            <a href="/editorial-guidelines" className="link-underline">
              editorial guidelines
            </a>{" "}
            and{" "}
            <a href="/data-sources" className="link-underline">
              data sources
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
