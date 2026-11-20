/**
 * Display formatting for MarketSmith statement tables.
 *
 * Values are stored as strings exactly as the source reports them (₹ crore,
 * percentages, multiples, per-share figures). Formatting never recalculates a
 * figure: it only decides how many decimals to show.
 *
 * Rules:
 * - Ratios, margins, percentages and per-share metrics keep up to two decimals.
 * - Small absolute values (< 10) keep up to two decimals so line items such as
 *   "Finance costs 1.29" do not collapse to "1".
 * - Larger monetary and count values are shown as whole units.
 * - Zero renders as "0"; negatives use accounting parentheses.
 */

const RATIO_OR_PER_SHARE =
  /(%|per share|\/share|eps|book value|margin|\bratio|yield|turnover|coverage|payout|retention|rate\b|ev(?:per|\/)|p\/e|p\/b)/i;

export function isRatioOrPerShareMetric(metric: string): boolean {
  return RATIO_OR_PER_SHARE.test(metric);
}

/** Rows that report a percentage change rather than a level. */
export function isPercentageChangeMetric(metric: string): boolean {
  return /%\s*(chg|change)/i.test(metric);
}

/**
 * Soft green/red wash for percentage-change cells, stronger for larger moves.
 * Kept light enough for body text to stay readable.
 */
export function changeTint(value: number): string | undefined {
  if (!Number.isFinite(value) || value === 0) return undefined;
  const alpha = Math.min(0.28, 0.08 + Math.abs(value) / 250);
  const rgb = value > 0 ? "13 107 77" : "198 47 62";
  return `rgb(${rgb} / ${alpha.toFixed(2)})`;
}

function trimTrailingZeros(value: string): string {
  return value.includes(".") ? value.replace(/\.?0+$/, "") : value;
}

/**
 * Parses a source cell into a signed number. Handles the two negative
 * conventions the source uses: leading minus and accounting parentheses.
 */
export function parseMetricValue(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "—" || trimmed === "-") return null;

  const negative = trimmed.startsWith("-") || trimmed.startsWith("(");
  const cleaned = trimmed.replace(/[(),%\s]/g, "").replace(/^-/, "");
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed)) return null;
  return negative ? -Math.abs(parsed) : parsed;
}

export function formatMetricValue(raw: string, metric: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "—" || trimmed === "-") return "—";

  const numeric = parseMetricValue(trimmed);
  if (numeric == null) return trimmed;

  const absolute = Math.abs(numeric);
  if (absolute === 0) return "0";

  const keepDecimals = isRatioOrPerShareMetric(metric) || absolute < 10;
  const body = keepDecimals
    ? trimTrailingZeros(absolute.toFixed(2))
    : Math.round(absolute).toString();

  return numeric < 0 ? `(${body})` : body;
}
