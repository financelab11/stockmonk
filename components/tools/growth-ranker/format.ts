export function inrCompact(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  if (abs >= 1e12) return `${sign}₹${(abs / 1e12).toFixed(2)} lakh crore`;
  if (abs >= 1e7) return `${sign}₹${(abs / 1e7).toFixed(0)} crore`;
  if (abs >= 1e5) return `${sign}₹${(abs / 1e5).toFixed(1)} lakh`;
  return `${sign}₹${abs.toFixed(0)}`;
}

export function inrCrore(value: number | null | undefined): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return `₹${Math.round(value / 1e7).toLocaleString("en-IN")} cr`;
}

export function pct(value: number | null | undefined, digits = 1): string {
  if (value == null || !Number.isFinite(value)) return "n/a";
  return `${(value * 100).toFixed(digits)}%`;
}

export function methodLabel(method: string): string {
  switch (method) {
    case "CONSENSUS":
      return "Consensus";
    case "CONSENSUS_PLUS_ANALYST_EXTENSION":
      return "Consensus + extension";
    case "ANALYST_MODEL":
      return "Bespoke model";
    default:
      return method;
  }
}

export function methodTone(method: string): string {
  switch (method) {
    case "CONSENSUS":
      return "chip-positive";
    case "CONSENSUS_PLUS_ANALYST_EXTENSION":
      return "chip-info";
    default:
      return "chip-caution";
  }
}

export function confidenceTone(confidence: string): string {
  if (confidence === "high") return "text-positive";
  if (confidence === "medium") return "text-ink-soft";
  return "text-amber";
}

export function statusTone(status: string): string {
  if (status === "done") return "text-positive";
  if (status === "failed") return "text-danger";
  if (status === "skipped") return "text-amber";
  if (status === "analyzing" || status === "fetching") return "text-brand";
  return "text-muted";
}
