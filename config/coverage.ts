export type CoverageGroup = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  blurb: string;
  kind: "sector" | "theme";
  tickers: string[];
};

/**
 * The 200-company research coverage list from the product brief, plus the
 * existing 68-company directory folded into the sector where it fits. Every
 * ticker belongs to exactly one group so the All Stocks directory never
 * duplicates a card.
 */
export const COVERAGE_GROUPS: CoverageGroup[] = [
  {
    id: "technology",
    name: "Technology",
    shortName: "Technology",
    icon: "cpu",
    blurb: "Software, semiconductors, hardware and IT services.",
    kind: "sector",
    tickers: [
      "NVDA", "MSFT", "AVGO", "ORCL", "AMD", "MU", "AMAT", "LRCX", "KLAC",
      "ANET", "CDNS", "SNPS", "NOW", "PANW", "CRWD", "INTU", "APH", "PLTR",
      "ADI", "FICO",
      // Existing directory names that fit the same sector.
      "AAPL", "ADBE", "CRM", "CSCO", "DELL", "HPQ", "IBM", "INTC", "QCOM",
      "TXN", "DDOG", "SNOW",
    ],
  },
  {
    id: "communication",
    name: "Communication",
    shortName: "Communication",
    icon: "globe",
    blurb: "Platforms, streaming, telecom and media.",
    kind: "sector",
    tickers: ["GOOGL", "META", "NFLX", "TMUS", "DIS", "CMCSA", "SPOT", "PINS"],
  },
  {
    id: "consumer-discretionary",
    name: "Consumer Discretionary",
    shortName: "Consumer",
    icon: "basket",
    blurb: "Retail, restaurants, travel, autos and marketplaces.",
    kind: "sector",
    tickers: [
      "AMZN", "HD", "LOW", "MCD", "BKNG", "TJX", "ORLY", "RCL", "CMG", "DHI",
      "ABNB", "UBER", "SHOP", "TSLA",
    ],
  },
  {
    id: "consumer-staples",
    name: "Consumer Staples",
    shortName: "Staples",
    icon: "basket",
    blurb: "Everyday essentials with durable demand.",
    kind: "sector",
    tickers: ["COST", "WMT", "PG", "KO", "PM", "CL", "PEP"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    icon: "heart",
    blurb: "Pharmaceuticals, devices, diagnostics and managed care.",
    kind: "sector",
    tickers: [
      "LLY", "JNJ", "ABBV", "ISRG", "TMO", "VRTX", "ABT", "BSX", "SYK",
      "MRK", "REGN", "ZTS", "IDXX", "PFE", "UNH",
    ],
  },
  {
    id: "financials",
    name: "Financials",
    shortName: "Financials",
    icon: "bank",
    blurb: "Banks, exchanges, asset managers and card networks.",
    kind: "sector",
    tickers: [
      "JPM", "BAC", "GS", "MS", "V", "MA", "BRK.B", "SPGI", "BLK", "AXP",
      "SCHW", "CB", "PGR", "ICE", "CME", "AIG", "C", "WFC",
    ],
  },
  {
    id: "industrials",
    name: "Industrials",
    shortName: "Industrials",
    icon: "factory",
    blurb: "Machinery, aerospace, transport and industrial services.",
    kind: "sector",
    tickers: [
      "GE", "GEV", "CAT", "RTX", "ETN", "VRT", "PH", "URI", "UNP", "WM",
      "TT", "HWM", "AXON", "BA", "DE", "HON", "LMT",
    ],
  },
  {
    id: "energy",
    name: "Energy",
    shortName: "Energy",
    icon: "flame",
    blurb: "Oil, gas, pipelines and exploration.",
    kind: "sector",
    tickers: ["XOM", "CVX", "COP", "EOG", "WMB"],
  },
  {
    id: "utilities",
    name: "Utilities",
    shortName: "Utilities",
    icon: "bolt",
    blurb: "Regulated utilities and independent power producers.",
    kind: "sector",
    tickers: ["NEE", "CEG", "VST", "SO", "DUK"],
  },
  {
    id: "materials",
    name: "Materials",
    shortName: "Materials",
    icon: "factory",
    blurb: "Chemicals, industrial gases, coatings and metals.",
    kind: "sector",
    tickers: ["LIN", "SHW", "FCX", "ECL"],
  },
  {
    id: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    icon: "bank",
    blurb: "Data centers, logistics and healthcare REITs.",
    kind: "sector",
    tickers: ["PLD", "EQIX", "WELL"],
  },
  {
    id: "ai-infrastructure",
    name: "AI Infrastructure & Power",
    shortName: "AI Infra",
    icon: "bolt",
    blurb: "Networking, optics, power equipment and neoclouds.",
    kind: "theme",
    tickers: [
      "CRDO", "ALAB", "CLS", "CIEN", "LITE", "COHR", "POWL", "NVT", "FIX",
      "STRL", "BE", "NBIS", "IREN", "APLD", "CRWV", "AMSC", "PSTG",
    ],
  },
  {
    id: "semis-semicap",
    name: "Semis & Semicap",
    shortName: "Semis",
    icon: "cpu",
    blurb: "Equipment, IP, connectivity and packaging suppliers.",
    kind: "theme",
    tickers: ["ONTO", "CAMT", "FORM", "RMBS", "SITM", "LSCC", "MTSI", "AEIS", "POWI", "AMKR"],
  },
  {
    id: "software-cyber",
    name: "Software & Cyber",
    shortName: "Software",
    icon: "cloud",
    blurb: "Security, data and workflow software.",
    kind: "theme",
    tickers: ["S", "RBRK", "TENB", "GTLB", "IOT", "PEGA", "ESTC", "MNDY"],
  },
  {
    id: "quantum",
    name: "Quantum",
    shortName: "Quantum",
    icon: "cpu",
    blurb: "Quantum computing hardware and software.",
    kind: "theme",
    tickers: ["IONQ", "RGTI", "QBTS"],
  },
  {
    id: "fintech-crypto",
    name: "Fintech & Crypto",
    shortName: "Fintech",
    icon: "card",
    blurb: "Digital lending, payments, brokerage and stablecoins.",
    kind: "theme",
    tickers: ["SOFI", "AFRM", "UPST", "TOST", "FOUR", "HOOD", "CRCL", "PYPL"],
  },
  {
    id: "healthcare-growth",
    name: "Healthcare Growth",
    shortName: "Healthcare",
    icon: "heart",
    blurb: "Medtech, diagnostics and clinical-stage biotech.",
    kind: "theme",
    tickers: [
      "PODD", "TMDX", "INSP", "PEN", "GMED", "TEM", "HIMS", "VKTX", "CRNX",
      "RYTM", "INSM", "MDGL", "KRYS", "BBIO", "ACLX",
    ],
  },
  {
    id: "space-defense",
    name: "Space, Defense & Autonomy",
    shortName: "Space",
    icon: "shield",
    blurb: "Launch, satellites, defense electronics and autonomy.",
    kind: "theme",
    tickers: ["RKLB", "ASTS", "LUNR", "KTOS", "AVAV", "PL", "JOBY", "ACHR", "SYM", "RDW"],
  },
  {
    id: "nuclear-metals",
    name: "Nuclear, Metals & Energy",
    shortName: "Nuclear",
    icon: "flame",
    blurb: "Nuclear fuel, storage, critical minerals and royalties.",
    kind: "theme",
    tickers: ["OKLO", "SMR", "UEC", "LEU", "FLNC", "MP", "USAR", "ATI", "CDE", "IDR", "TPL"],
  },
  {
    id: "consumer-brands",
    name: "Consumer & Brands",
    shortName: "Consumer",
    icon: "basket",
    blurb: "Restaurants, beauty, apparel and consumer apps.",
    kind: "theme",
    tickers: ["CAVA", "BROS", "ELF", "ONON", "CELH", "DUOL", "RDDT", "WING"],
  },
  {
    id: "industrials-cyclicals",
    name: "Industrials & Cyclicals",
    shortName: "Industrials",
    icon: "factory",
    blurb: "Building products, electrical equipment and specialty contractors.",
    kind: "theme",
    tickers: ["AAON", "MLI", "ROAD", "WTS", "DY", "BWXT", "KNF"],
  },
  {
    id: "specialty-financials",
    name: "Specialty Financials",
    shortName: "Specialty",
    icon: "shield",
    blurb: "Insurance, underwriting and advisory businesses.",
    kind: "theme",
    tickers: ["KNSL", "RYAN", "PLMR", "EVR"],
  },
];

const TICKER_TO_GROUP = new Map<string, CoverageGroup>();
for (const group of COVERAGE_GROUPS) {
  for (const ticker of group.tickers) {
    if (TICKER_TO_GROUP.has(ticker)) {
      throw new Error(`Duplicate coverage ticker ${ticker}`);
    }
    TICKER_TO_GROUP.set(ticker, group);
  }
}

export function getCoverageGroup(ticker: string): CoverageGroup | undefined {
  return TICKER_TO_GROUP.get(ticker.toUpperCase());
}

export function getCoverageGroupsWithTickers(available: readonly string[]): CoverageGroup[] {
  const set = new Set(available.map((ticker) => ticker.toUpperCase()));
  return COVERAGE_GROUPS.map((group) => ({
    ...group,
    tickers: group.tickers.filter((ticker) => set.has(ticker)),
  })).filter((group) => group.tickers.length > 0);
}
