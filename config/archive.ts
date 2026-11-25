/**
 * Companies in the requested 500-name coverage list that have since been
 * acquired or taken private.
 *
 * They remain part of the research library because the coverage commitment is
 * 500 names, but they are not presented as current market data. Each record
 * carries the final merger consideration, the last trading date and a public
 * source so the archived article can state exactly what happened.
 */
export type ArchivedCompany = {
  ticker: string;
  name: string;
  cik: number;
  lastTraded: string;
  lastClose: number;
  status: "acquired" | "taken-private";
  acquirer: string;
  consideration: string;
  sourceUrl: string;
};

export const ARCHIVED_COMPANIES: ArchivedCompany[] = [
  {
    ticker: "ALTR",
    name: "Altair Engineering",
    cik: 1701732,
    lastTraded: "2025-03-26",
    lastClose: 111.85,
    status: "acquired",
    acquirer: "Siemens",
    consideration: "$113.00 per share in cash",
    sourceUrl:
      "https://www.sec.gov/Archives/edgar/data/1701732/000119312525010386/d884108dex991.htm",
  },
  {
    ticker: "CFLT",
    name: "Confluent",
    cik: 1699838,
    lastTraded: "2026-03-17",
    lastClose: 31,
    status: "acquired",
    acquirer: "IBM",
    consideration: "$31.00 per share in cash",
    sourceUrl:
      "https://newsroom.ibm.com/2026-03-17-ibm-completes-acquisition-of-confluent,-making-real-time-data-the-engine-of-enterprise-ai-and-agents",
  },
  {
    ticker: "CYBR",
    name: "CyberArk Software",
    cik: 1598110,
    lastTraded: "2026-02-11",
    lastClose: 409.2,
    status: "acquired",
    acquirer: "Palo Alto Networks",
    consideration: "$45.00 in cash plus 2.2005 PANW shares per CYBR share",
    sourceUrl:
      "https://investors.paloaltonetworks.com/news-releases/news-release-details/palo-alto-networks-completes-acquisition-cyberark-secure--ai-era",
  },
  {
    ticker: "JNPR",
    name: "Juniper Networks",
    cik: 1043604,
    lastTraded: "2025-07-02",
    lastClose: 40,
    status: "acquired",
    acquirer: "Hewlett Packard Enterprise",
    consideration: "$40.00 per share in cash",
    sourceUrl:
      "https://www.sec.gov/Archives/edgar/data/1645590/000164559025000130/R20.htm",
  },
  {
    ticker: "NEWR",
    name: "New Relic",
    cik: 1448056,
    lastTraded: "2023-11-08",
    lastClose: 87,
    status: "taken-private",
    acquirer: "Francisco Partners and TPG",
    consideration: "$87.00 per share in cash",
    sourceUrl: "https://newrelic.com/press-release/20231108",
  },
  {
    ticker: "HOLX",
    name: "Hologic",
    cik: 859737,
    lastTraded: "2026-04-07",
    lastClose: 76,
    status: "taken-private",
    acquirer: "Blackstone and TPG",
    consideration: "$76.00 per share in cash plus a contingent value right",
    sourceUrl:
      "https://hologic.com/about/press-release/blackstone-and-tpg-complete-acquisition-hologic",
  },
  {
    ticker: "MASI",
    name: "Masimo",
    cik: 937556,
    lastTraded: "2026-06-10",
    lastClose: 180,
    status: "acquired",
    acquirer: "Danaher",
    consideration: "$180.00 per share in cash",
    sourceUrl:
      "https://www.masimo.com/media/danaher-completes-acquisition-of-masimo-corporation",
  },
  {
    ticker: "AZEK",
    name: "The AZEK Company",
    cik: 1782754,
    lastTraded: "2025-07-01",
    lastClose: 54.25,
    status: "acquired",
    acquirer: "James Hardie",
    consideration:
      "$26.45 in cash plus 1.0340 James Hardie shares per AZEK share",
    sourceUrl:
      "https://ir.jameshardie.com/news/news-details/2025/James-Hardie-Completes-Acquisition-of-AZEK-to-Become-a-Leading-Provider-of-Exterior-Home-and-Outdoor-Living-Solutions",
  },
  {
    ticker: "CTRA",
    name: "Coterra Energy",
    cik: 858470,
    lastTraded: "2026-05-07",
    lastClose: 32.62,
    status: "acquired",
    acquirer: "Devon Energy",
    consideration: "0.70 Devon shares per Coterra share",
    sourceUrl:
      "https://investors.devonenergy.com/investors/press-releases/press-release-details/2026/Devon-Energy-and-Coterra-Energy-Complete-Merger/",
  },
  {
    ticker: "DFS",
    name: "Discover Financial Services",
    cik: 1393612,
    lastTraded: "2025-05-18",
    lastClose: 201.01,
    status: "acquired",
    acquirer: "Capital One",
    consideration: "1.0192 Capital One shares per Discover share",
    sourceUrl:
      "https://www.sec.gov/Archives/edgar/data/1393612/000087666125000350/ruleprovisionnotice.htm",
  },
  {
    ticker: "HOUS",
    name: "Anywhere Real Estate",
    cik: 1398987,
    lastTraded: "2026-01-09",
    lastClose: 17.61,
    status: "acquired",
    acquirer: "Compass",
    consideration: "1.436 Compass Class A shares per Anywhere share",
    sourceUrl:
      "https://investors.compass.com/news-events/press-releases/detail/90/compass-and-anywhere-real-estate-begin-a-new-chapter-for-real-estate-professionals",
  },
  {
    ticker: "CWAN",
    name: "Clearwater Analytics",
    cik: 1866368,
    lastTraded: "2026-06-25",
    lastClose: 24.55,
    status: "taken-private",
    acquirer: "Permira and Warburg Pincus",
    consideration: "$24.55 per share in cash",
    sourceUrl:
      "https://permira.com/news-and-insights/announcements/clearwater-analytics-completes-84-billion-take-private-acquisition-by-permira-and-warburg-pincus",
  },
  {
    ticker: "EA",
    name: "Electronic Arts",
    cik: 712515,
    lastTraded: "2026-08-04",
    lastClose: 210,
    status: "taken-private",
    acquirer: "PIF, Silver Lake and Affinity Partners",
    consideration: "$210.00 per share in cash",
    sourceUrl:
      "https://kirkland.com/news/press-release/2026/08/kirkland-advises-investor-consortium-on-close-of-55-billion-acquisition-of-ea",
  },
];

export const ARCHIVED_BY_TICKER = new Map(
  ARCHIVED_COMPANIES.map((company) => [company.ticker, company]),
);

export function getArchivedCompany(
  ticker: string,
): ArchivedCompany | undefined {
  return ARCHIVED_BY_TICKER.get(ticker.toUpperCase());
}

export function isArchivedCompany(ticker: string): boolean {
  return ARCHIVED_BY_TICKER.has(ticker.toUpperCase());
}
