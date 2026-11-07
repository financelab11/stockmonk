export type SectorGroup = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  blurb: string;
  tickers: string[];
};

/**
 * Editorial sector groups. These are deliberately narrower than SimFin's
 * top-level sectors so the All Stocks directory reads like a research
 * library rather than a GICS table.
 */
export const SECTOR_GROUPS: SectorGroup[] = [
  {
    id: "semiconductors",
    name: "Semiconductors",
    shortName: "Semiconductors",
    icon: "cpu",
    blurb: "Chip designers and equipment makers powering compute, networking and memory.",
    tickers: ["NVDA", "AVGO", "AMD", "INTC", "QCOM", "MU", "TXN", "AMAT", "LRCX", "KLAC"],
  },
  {
    id: "software",
    name: "Software & Cloud",
    shortName: "Software",
    icon: "cloud",
    blurb: "Subscription software, infrastructure and security platforms.",
    tickers: ["MSFT", "ORCL", "CRM", "ADBE", "NOW", "INTU", "PANW", "SNOW", "CRWD", "DDOG"],
  },
  {
    id: "consumer-internet",
    name: "Consumer Internet",
    shortName: "Consumer Internet",
    icon: "globe",
    blurb: "Marketplaces, streaming and platforms that connect consumers at scale.",
    tickers: ["GOOGL", "META", "AMZN", "NFLX", "SHOP", "UBER", "ABNB", "BKNG", "PINS", "SPOT"],
  },
  {
    id: "consumer-electronics",
    name: "Devices & Hardware",
    shortName: "Hardware",
    icon: "device",
    blurb: "Personal devices, enterprise hardware and networking equipment.",
    tickers: ["AAPL", "DELL", "HPQ", "CSCO", "IBM"],
  },
  {
    id: "electric-vehicles",
    name: "Electric Vehicles & Energy",
    shortName: "EV & Energy",
    icon: "bolt",
    blurb: "Electrified transport, batteries and distributed energy hardware.",
    tickers: ["TSLA"],
  },
  {
    id: "banks",
    name: "Banks",
    shortName: "Banks",
    icon: "bank",
    blurb: "Deposit-funded lenders and diversified financial institutions.",
    tickers: ["JPM", "BAC", "GS", "MS", "WFC", "C"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    icon: "heart",
    blurb: "Pharmaceuticals, medical devices and managed care.",
    tickers: ["LLY", "UNH", "JNJ", "PFE", "MRK", "ABBV", "TMO"],
  },
  {
    id: "energy",
    name: "Energy",
    shortName: "Energy",
    icon: "flame",
    blurb: "Integrated oil, gas and exploration companies.",
    tickers: ["XOM", "CVX", "COP"],
  },
  {
    id: "consumer-staples",
    name: "Consumer Staples",
    shortName: "Staples",
    icon: "basket",
    blurb: "Everyday essentials with durable demand and pricing power.",
    tickers: ["PG", "KO", "PEP", "COST", "WMT"],
  },
  {
    id: "industrials",
    name: "Industrials",
    shortName: "Industrials",
    icon: "factory",
    blurb: "Machinery, aerospace and industrial infrastructure.",
    tickers: ["CAT", "DE", "HON", "LMT", "BA"],
  },
  {
    id: "insurance",
    name: "Insurance",
    shortName: "Insurance",
    icon: "shield",
    blurb: "Property, casualty and specialty underwriters.",
    tickers: ["PGR", "AIG"],
  },
  {
    id: "payments",
    name: "Payments & Fintech",
    shortName: "Payments",
    icon: "card",
    blurb: "Card networks, processors and digital payment platforms.",
    tickers: ["V", "MA", "AXP", "PYPL"],
  },
];

const TICKER_TO_GROUP = new Map<string, SectorGroup>();
for (const group of SECTOR_GROUPS) {
  for (const ticker of group.tickers) TICKER_TO_GROUP.set(ticker, group);
}

export function getSectorGroup(ticker: string): SectorGroup | undefined {
  return TICKER_TO_GROUP.get(ticker.toUpperCase());
}

export function getSectorGroupsWithTickers(available: readonly string[]): SectorGroup[] {
  const set = new Set(available.map((t) => t.toUpperCase()));
  return SECTOR_GROUPS.map((group) => ({
    ...group,
    tickers: group.tickers.filter((t) => set.has(t)),
  })).filter((group) => group.tickers.length > 0);
}
