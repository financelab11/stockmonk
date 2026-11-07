import { getSectorGroup } from "@/config/sectors";
import type { TickerData, UniverseEntry } from "./schemas";
import { formatCompactCurrency, formatPercent, truncate } from "./format";

export function oneLineDescription(description: string, max = 190): string {
  const first = description.split(/(?<=\.)\s/)[0] ?? description;
  return truncate(first, max);
}

export function whyInteresting(entry: UniverseEntry): string {
  const growth = entry.factorChips.find((chip) => chip.key === "growth");
  const profit = entry.factorChips.find((chip) => chip.key === "profitability");
  const valuation = entry.factorChips.find((chip) => chip.key === "valuation");

  const sentences: string[] = [];
  if (entry.operatingMargin != null) {
    sentences.push(
      `Operating margin is ${formatPercent(entry.operatingMargin)} and revenue is ${formatCompactCurrency(entry.revenueTtm)} on a trailing basis.`,
    );
  }
  if (growth) sentences.push(growth.detail);
  if (profit && !entry.operatingMargin) sentences.push(profit.detail);
  if (valuation) sentences.push(valuation.detail);

  return sentences.slice(0, 2).join(" ");
}

export function whyInterestingFromData(data: TickerData): string {
  const metrics = data.metrics;
  const growthChip = data.factorChips.find((chip) => chip.key === "growth");
  const valuationChip = data.factorChips.find((chip) => chip.key === "valuation");

  const parts: string[] = [];
  if (metrics.revenueGrowthTtm != null) {
    parts.push(
      `Revenue grew ${formatPercent(metrics.revenueGrowthTtm)} over the trailing year to ${formatCompactCurrency(metrics.revenueTtm)}.`,
    );
  }
  if (metrics.operatingMargin != null) {
    parts.push(
      `Operating margin is ${formatPercent(metrics.operatingMargin)}${metrics.fcfMargin != null ? ` and free-cash-flow margin is ${formatPercent(metrics.fcfMargin)}` : ""}.`,
    );
  }
  if (growthChip) parts.push(growthChip.detail);
  if (valuationChip) parts.push(valuationChip.detail);
  return parts.slice(0, 3).join(" ");
}

export function peersForTicker(ticker: string, limit = 6): string[] {
  const group = getSectorGroup(ticker);
  if (!group) return [];
  return group.tickers.filter((item) => item !== ticker.toUpperCase()).slice(0, limit);
}

export function sectorForTicker(ticker: string): { name: string; blurb: string } {
  const group = getSectorGroup(ticker);
  return group
    ? { name: group.name, blurb: group.blurb }
    : { name: "US equities", blurb: "US-listed companies across the coverage universe." };
}

export function relativeTime(date: string | null | undefined): string {
  if (!date) return "recently";
  const then = new Date(`${date.slice(0, 10)}T00:00:00Z`).getTime();
  if (Number.isNaN(then)) return date;
  const days = Math.max(0, Math.round((Date.now() - then) / 86_400_000));
  if (days === 0) return "today";
  if (days === 1) return "1 day ago";
  if (days < 30) return `${days} days ago`;
  const months = Math.round(days / 30);
  if (months < 12) return `${months} ${months === 1 ? "month" : "months"} ago`;
  const years = Math.round(months / 12);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

export function dailyMoveTone(value: number | null): "positive" | "negative" | "flat" {
  if (value == null || Math.abs(value) < 0.0001) return "flat";
  return value > 0 ? "positive" : "negative";
}
