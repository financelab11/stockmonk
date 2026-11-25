/**
 * Sector and theme ETF used for the V2 technical "market and sector" pillar.
 * Themes without a dedicated liquid ETF map to the closest broad sector.
 * SPY is the fallback benchmark.
 */
export const SECTOR_ETFS: Record<string, string> = {
  technology: "XLK",
  communication: "XLC",
  "consumer-discretionary": "XLY",
  "consumer-staples": "XLP",
  healthcare: "XLV",
  financials: "XLF",
  industrials: "XLI",
  energy: "XLE",
  utilities: "XLU",
  materials: "XLB",
  "real-estate": "XLRE",
  "ai-infrastructure": "XLI",
  "semis-semicap": "XLK",
  "software-cyber": "XLK",
  quantum: "XLK",
  "fintech-crypto": "XLF",
  "healthcare-growth": "XLV",
  "space-defense": "XLI",
  "nuclear-metals": "XLU",
  "consumer-brands": "XLP",
  "industrials-cyclicals": "XLI",
  "specialty-financials": "XLF",
  "enterprise-software": "XLK",
  "semis-hardware": "XLK",
  "internet-platforms": "XLC",
  "payments-fintech": "XLF",
  "pharma-biotech": "XLV",
  "healthcare-services": "XLV",
  "industrial-automation": "XLI",
  "aerospace-defense": "XLI",
  "transport-autonomy": "XLI",
  "power-renewables": "XLU",
  "materials-mining": "XLB",
  "consumer-retail": "XLY",
  "banks-insurance": "XLF",
  "capital-markets": "XLF",
};

export function sectorEtf(groupId: string | null | undefined): string {
  return (groupId && SECTOR_ETFS[groupId]) || "SPY";
}

export const BENCHMARK_ETFS = [
  ...new Set(["SPY", ...Object.values(SECTOR_ETFS)]),
];
