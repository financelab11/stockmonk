/**
 * Comparable-company sets used in the research reports.
 *
 * These are editorial choices, not a claim that every company is a perfect
 * substitute. The article labels the comparison basis next to the table.
 */
export const PEER_SETS: Record<string, string[]> = {
  NVDA: ["AVGO", "AMD", "INTC", "QCOM", "MU", "TXN"],
  MSFT: ["ORCL", "CRM", "ADBE", "NOW", "INTU", "GOOGL"],
  AAPL: ["DELL", "HPQ", "CSCO", "IBM", "MSFT", "GOOGL"],
  GOOGL: ["META", "MSFT", "AMZN", "NFLX", "PINS", "SPOT"],
  AMZN: ["GOOGL", "META", "WMT", "COST", "SHOP", "NFLX"],
  META: ["GOOGL", "PINS", "SPOT", "NFLX", "MSFT", "AMZN"],
  AVGO: ["NVDA", "AMD", "QCOM", "TXN", "MU", "KLAC"],
  TSLA: ["AMZN", "ABNB", "BKNG", "UBER", "SHOP", "META"],
  LLY: ["JNJ", "MRK", "PFE", "ABBV", "TMO", "UNH"],
  JPM: ["BAC", "GS", "MS", "WFC", "C", "AXP"],
};

export const PEER_BASIS: Record<string, string> = {
  NVDA: "Semiconductor and AI infrastructure comparables",
  MSFT: "Enterprise software and cloud comparables",
  AAPL: "Device, hardware and platform comparables",
  GOOGL: "Advertising, platform and streaming comparables",
  AMZN: "Retail, marketplace and platform comparables",
  META: "Advertising and consumer platform comparables",
  AVGO: "Semiconductor and infrastructure comparables",
  TSLA: "Selected consumer and platform comparables (no direct US-listed EV peer in the universe)",
  LLY: "Large-cap healthcare and pharmaceutical comparables",
  JPM: "Large US bank comparables",
};

export function peersFor(ticker: string): string[] {
  return PEER_SETS[ticker.toUpperCase()] ?? [];
}
