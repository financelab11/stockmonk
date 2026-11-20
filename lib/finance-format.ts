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

function trimTrailingZeros(value: string): string {
  return value.includes(".") ? value.replace(/\.?0+$/, "") : value;
}

export function formatMetricValue(raw: string, metric: string): string {
  const trimmed = raw.trim();
  if (!trimmed || trimmed === "—" || trimmed === "-") return "—";

  const numeric = Number(trimmed.replace(/[(),%\s]/g, ""));
  if (!Number.isFinite(numeric)) return trimmed;

  const negative = trimmed.startsWith("-") || trimmed.startsWith("(");
  const absolute = Math.abs(numeric);
  if (absolute === 0) return "0";

  const keepDecimals = isRatioOrPerShareMetric(metric) || absolute < 10;
  const body = keepDecimals
    ? trimTrailingZeros(absolute.toFixed(2))
    : Math.round(absolute).toString();

  return negative ? `(${body})` : body;
}
