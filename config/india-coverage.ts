export type IndiaCoverageGroup = {
  id: string;
  name: string;
  shortName: string;
  icon: string;
  blurb: string;
  tickers: string[];
};

/**
 * The 100-company India coverage list. Tickers use NSE symbols; Yahoo Finance
 * resolves them with the `.NS` suffix. Every ticker belongs to exactly one
 * group so the India directory never duplicates a card.
 */
export const INDIA_COVERAGE_GROUPS: IndiaCoverageGroup[] = [
  {
    id: "defence-electronics",
    name: "Defence & Electronics",
    shortName: "Defence",
    icon: "shield",
    blurb: "Defence electronics, precision manufacturing and specialty components.",
    tickers: [
      "KAYNES", "SYRMA", "CYIENTDLM", "AMBER", "PGEL", "DATAPATTNS",
      "ZENTEC", "BEML", "COCHINSHIP", "ASTRAMICRO", "MTARTECH", "APOLLO",
    ],
  },
  {
    id: "power-renewables",
    name: "Power & Renewables",
    shortName: "Power",
    icon: "bolt",
    blurb: "Transmission, grid equipment, solar and wind supply chains.",
    tickers: [
      "POWERINDIA", "KEC", "KPIL", "TDPOWERSYS", "VOLTAMP", "GENUSPOWER",
      "SUZLON", "INOXWIND", "WAAREEENER", "PREMIERENE",
    ],
  },
  {
    id: "infra-rail-cables",
    name: "Infrastructure, Rail & Cables",
    shortName: "Infra",
    icon: "factory",
    blurb: "Rail, roads, water, telecom infrastructure and electrical cables.",
    tickers: ["RVNL", "IRCON", "TITAGARH", "JWL", "RAILTEL", "HGINFRA", "NCC", "KEI"],
  },
  {
    id: "financials-capital-markets",
    name: "Financials & Capital Markets",
    shortName: "Financials",
    icon: "bank",
    blurb: "Brokerages, exchanges, registrars, lenders and housing finance.",
    tickers: [
      "ANGELONE", "CDSL", "MCX", "KFINTECH", "CAMS", "ANANDRATHI",
      "AAVAS", "HOMEFIRST", "APTUS", "FIVESTAR",
    ],
  },
  {
    id: "healthcare-pharma",
    name: "Healthcare & Pharma",
    shortName: "Healthcare",
    icon: "heart",
    blurb: "Pharma, contract research, diagnostics, hospitals and devices.",
    tickers: [
      "NEULANDLAB", "AJANTPHARM", "ERIS", "JBCHEPHARM", "LAURUSLABS",
      "SAILIFE", "ANTHEM", "CONCORDBIO", "KIMS", "RAINBOW", "MEDANTA",
      "VIJAYA", "POLYMED",
    ],
  },
  {
    id: "specialty-chemicals",
    name: "Specialty Chemicals",
    shortName: "Chemicals",
    icon: "factory",
    blurb: "Fluorochemicals, agrochemicals, pigments and industrial specialties.",
    tickers: [
      "NAVINFLUOR", "FINEORG", "CLEAN", "PIIND", "ANURAS", "AETHER",
      "SUDARSCHEM", "VINATIORGA",
    ],
  },
  {
    id: "consumer-new-age",
    name: "Consumer & New-Age",
    shortName: "Consumer",
    icon: "basket",
    blurb: "Jewellery, QSR, stationery, apparel, retail and digital platforms.",
    tickers: [
      "KALYANKJIL", "SENCO", "DOMS", "CAMPUS", "DEVYANI", "SAPPHIRE",
      "VMART", "NYKAA", "PAYTM",
    ],
  },
  {
    id: "auto-ancillaries",
    name: "Auto & Ancillaries",
    shortName: "Auto",
    icon: "factory",
    blurb: "EV components, braking, castings, fasteners, tyres and buses.",
    tickers: [
      "UNOMINDA", "ENDURANCE", "CRAFTSMAN", "SANSERA", "GABRIEL",
      "OLECTRA", "JKTYRE",
    ],
  },
  {
    id: "real-estate-building",
    name: "Real Estate & Building Materials",
    shortName: "Real Estate",
    icon: "bank",
    blurb: "Residential developers, tiles, plywood and cement.",
    tickers: [
      "BRIGADE", "SOBHA", "MAHLIFE", "SIGNATURE", "KAJARIACER",
      "CENTURYPLY", "JKCEMENT",
    ],
  },
  {
    id: "it-erd",
    name: "IT & ER&D",
    shortName: "IT",
    icon: "cloud",
    blurb: "Engineering services, product software, analytics and hardware.",
    tickers: [
      "KPITTECH", "CYIENT", "SONATSOFTW", "NEWGEN", "INTELLECT",
      "NETWEB", "LATENTVIEW", "TANLA",
    ],
  },
  {
    id: "metals-commodities",
    name: "Metals & Commodities",
    shortName: "Metals",
    icon: "flame",
    blurb: "Copper, aluminium, mining, recycling and steel distribution.",
    tickers: [
      "HINDCOPPER", "GRAVITA", "LLOYDSME", "GMDCLTD", "MOIL",
      "APLAPOLLO", "NATIONALUM", "SARDAEN",
    ],
  },
];

const TICKER_TO_GROUP = new Map<string, IndiaCoverageGroup>();
for (const group of INDIA_COVERAGE_GROUPS) {
  for (const ticker of group.tickers) {
    if (TICKER_TO_GROUP.has(ticker)) {
      throw new Error(`Duplicate India coverage ticker ${ticker}`);
    }
    TICKER_TO_GROUP.set(ticker, group);
  }
}

export const INDIA_TICKERS = INDIA_COVERAGE_GROUPS.flatMap((group) => group.tickers);

export function getIndiaCoverageGroup(ticker: string): IndiaCoverageGroup | undefined {
  return TICKER_TO_GROUP.get(ticker.toUpperCase());
}

export function getIndiaCoverageGroupsWithTickers(
  available: readonly string[],
): IndiaCoverageGroup[] {
  const set = new Set(available.map((ticker) => ticker.toUpperCase()));
  return INDIA_COVERAGE_GROUPS.map((group) => ({
    ...group,
    tickers: group.tickers.filter((ticker) => set.has(ticker)),
  })).filter((group) => group.tickers.length > 0);
}
