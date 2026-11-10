export type GccMarket = "SA" | "AE" | "QA" | "KW" | "OM" | "BH";

export type GccExchange = "Tadawul" | "ADX" | "DFM" | "QSE" | "KWSE" | "MSM" | "Bahrain Bourse";

export type GccData = {
  /** Yahoo Finance symbol when the exchange is covered. */
  yahoo?: string;
  /** StockAnalysis.com quote path, e.g. adx/FAB. */
  stockanalysis?: { exchange: string; ticker: string };
  /** MarketScreener quote URL slug for Bahrain. */
  marketscreener?: string;
};

export type GccEntry = {
  ticker: string;
  name: string;
  market: GccMarket;
  exchange: GccExchange;
  sector: string;
  data: GccData;
};

export type GccGroup = {
  id: string;
  name: string;
  shortName: string;
  icon?: string;
  blurb: string;
  market: GccMarket;
  tickers: string[];
};

const marketCurrency: Record<GccMarket, string> = {
  SA: "SAR",
  AE: "AED",
  QA: "QAR",
  KW: "KWD",
  OM: "OMR",
  BH: "BHD",
};

export function getGccCurrency(ticker: string): string {
  const entry = GCC_ENTRIES.find((item) => item.ticker === ticker);
  return entry ? marketCurrency[entry.market] : "USD";
}

type Row = [ticker: string, name: string, sector: string];

const SAUDI: Row[] = [
  ["2222", "Saudi Aramco", "Energy & Petrochemicals"],
  ["1120", "Al Rajhi Bank", "Banks & Financials"],
  ["1180", "Saudi National Bank", "Banks & Financials"],
  ["1010", "Riyad Bank", "Banks & Financials"],
  ["1060", "Saudi Awwal Bank", "Banks & Financials"],
  ["1150", "Alinma Bank", "Banks & Financials"],
  ["1080", "Arab National Bank", "Banks & Financials"],
  ["1050", "Banque Saudi Fransi", "Banks & Financials"],
  ["1140", "Bank Albilad", "Banks & Financials"],
  ["1020", "Bank Aljazira", "Banks & Financials"],
  ["1030", "Saudi Investment Bank", "Banks & Financials"],
  ["7010", "Saudi Telecom Company", "Telecom & Technology"],
  ["7020", "Etihad Etisalat (Mobily)", "Telecom & Technology"],
  ["7030", "Zain KSA", "Telecom & Technology"],
  ["1211", "Ma'aden", "Energy & Petrochemicals"],
  ["2010", "SABIC", "Energy & Petrochemicals"],
  ["2020", "SABIC Agri-Nutrients", "Energy & Petrochemicals"],
  ["2082", "ACWA Power", "Industrials & Utilities"],
  ["5110", "Saudi Electricity Company", "Industrials & Utilities"],
  ["4013", "Dr. Sulaiman Al Habib Medical Services", "Healthcare"],
  ["4002", "Mouwasat Medical Services", "Healthcare"],
  ["4004", "Dallah Healthcare", "Healthcare"],
  ["4017", "Fakeeh Care Group", "Healthcare"],
  ["4009", "Saudi German Health", "Healthcare"],
  ["4164", "Nahdi Medical", "Healthcare"],
  ["4015", "Jamjoom Pharmaceuticals", "Healthcare"],
  ["1212", "Astra Industrial Group", "Energy & Petrochemicals"],
  ["2280", "Almarai", "Consumer & Retail"],
  ["2050", "Savola Group", "Consumer & Retail"],
  ["4190", "Jarir Marketing", "Consumer & Retail"],
  ["4003", "Extra (United Electronics)", "Consumer & Retail"],
  ["4050", "Saudi Automotive Services (SASCO)", "Consumer & Retail"],
  ["4240", "Cenomi Retail", "Consumer & Retail"],
  ["4321", "Cenomi Centers", "Real Estate & Insurance"],
  ["4220", "Emaar Economic City", "Real Estate & Insurance"],
  ["4300", "Dar Al Arkan", "Real Estate & Insurance"],
  ["4322", "Retal Urban Development", "Real Estate & Insurance"],
  ["4020", "Saudi Real Estate Company (Al Akaria)", "Real Estate & Insurance"],
  ["4142", "Riyadh Cables Group", "Industrials & Utilities"],
  ["1303", "Electrical Industries Company", "Industrials & Utilities"],
  ["1302", "Bawan", "Industrials & Utilities"],
  ["2250", "Saudi Industrial Investment Group", "Energy & Petrochemicals"],
  ["2060", "Tasnee", "Energy & Petrochemicals"],
  ["2310", "Sipchem", "Energy & Petrochemicals"],
  ["2290", "Yansab", "Energy & Petrochemicals"],
  ["2330", "Advanced Petrochemical", "Energy & Petrochemicals"],
  ["3030", "Saudi Cement", "Industrials & Utilities"],
  ["3020", "Yamama Cement", "Industrials & Utilities"],
  ["3040", "Qassim Cement", "Industrials & Utilities"],
  ["3050", "Southern Province Cement", "Industrials & Utilities"],
  ["3010", "Arabian Cement", "Industrials & Utilities"],
  ["1321", "East Pipes Integrated Company", "Industrials & Utilities"],
  ["1320", "Saudi Steel Pipe", "Industrials & Utilities"],
  ["2223", "Luberef", "Energy & Petrochemicals"],
  ["2381", "Arabian Drilling", "Energy & Petrochemicals"],
  ["2382", "ADES Holding", "Energy & Petrochemicals"],
  ["4031", "Saudi Ground Services", "Industrials & Utilities"],
  ["6004", "Saudi Airlines Catering", "Industrials & Utilities"],
  ["4260", "Budget Saudi", "Consumer & Retail"],
  ["4261", "Theeb Rent a Car", "Consumer & Retail"],
  ["1830", "Leejam Sports", "Consumer & Retail"],
  ["4210", "Saudi Research and Media Group", "Consumer & Retail"],
  ["4071", "Al Arabia", "Consumer & Retail"],
  ["7203", "Elm Company", "Telecom & Technology"],
  ["7202", "solutions by stc", "Telecom & Technology"],
  ["7200", "MIS", "Telecom & Technology"],
  ["9526", "Jahez International", "Telecom & Technology"],
  ["1111", "Saudi Tadawul Group", "Banks & Financials"],
  ["8200", "Saudi Reinsurance Company", "Real Estate & Insurance"],
  ["8010", "Tawuniya", "Real Estate & Insurance"],
  ["8210", "Bupa Arabia", "Real Estate & Insurance"],
  ["8230", "Al Rajhi Takaful", "Real Estate & Insurance"],
  ["8030", "MedGulf", "Real Estate & Insurance"],
  ["8060", "Walaa Cooperative Insurance", "Real Estate & Insurance"],
  ["8312", "Alinma Tokio Marine", "Real Estate & Insurance"],
  ["2230", "Saudi Chemical Company", "Energy & Petrochemicals"],
  ["2320", "Al Babtain Power and Telecommunication", "Industrials & Utilities"],
  ["1304", "Al Yamamah Steel Industries", "Industrials & Utilities"],
  ["1301", "United Wire Factories", "Industrials & Utilities"],
  ["2040", "Saudi Ceramic", "Industrials & Utilities"],
  ["2300", "Saudi Paper Manufacturing", "Industrials & Utilities"],
  ["6050", "Saudi Fisheries", "Consumer & Retail"],
  ["4162", "Almunajem Foods", "Consumer & Retail"],
  ["2190", "Saudi Industrial Services Company (SISCO)", "Industrials & Utilities"],
  ["4030", "Bahri", "Industrials & Utilities"],
  ["2350", "Saudi Kayan", "Energy & Petrochemicals"],
  ["2380", "Rabigh Refining and Petrochemical", "Energy & Petrochemicals"],
  ["2281", "Tanmiah Food", "Consumer & Retail"],
  ["2081", "Alkhorayef Water and Power Technologies", "Industrials & Utilities"],
  ["3003", "City Cement", "Industrials & Utilities"],
];

const UAE: Row[] = [
  ["FAB", "First Abu Dhabi Bank", "Banks & Financials"],
  ["ADCB", "Abu Dhabi Commercial Bank", "Banks & Financials"],
  ["ADIB", "Abu Dhabi Islamic Bank", "Banks & Financials"],
  ["IHC", "International Holding Company", "Banks & Financials"],
  ["ALPHADHABI", "Alpha Dhabi Holding", "Banks & Financials"],
  ["ADNOCGAS", "ADNOC Gas", "Energy & Utilities"],
  ["ADNOCDRILL", "ADNOC Drilling", "Energy & Utilities"],
  ["ADNOCDIST", "ADNOC Distribution", "Energy & Utilities"],
  ["ADNOCLS", "ADNOC Logistics & Services", "Energy & Utilities"],
  ["TAQA", "TAQA", "Energy & Utilities"],
  ["ETISALAT", "Emirates Telecommunications (e&)", "Telecom & Technology"],
  ["BOROUGE", "Borouge", "Energy & Utilities"],
  ["FERTIGLB", "Fertiglobe", "Energy & Utilities"],
  ["ALDAR", "Aldar Properties", "Real Estate & Construction"],
  ["MULTIPLY", "Multiply Group", "Banks & Financials"],
  ["LULU", "Lulu Retail", "Consumer & Logistics"],
  ["PRESIGHT", "Presight AI", "Telecom & Technology"],
  ["ADNH", "Abu Dhabi National Hotels", "Consumer & Logistics"],
  ["ADPORTS", "Abu Dhabi Ports Group", "Consumer & Logistics"],
  ["NMDC", "National Marine Dredging", "Energy & Utilities"],
  ["EMIRATESNBD", "Emirates NBD", "Banks & Financials"],
  ["EMAAR", "Emaar Properties", "Real Estate & Construction"],
  ["EMAARDEV", "Emaar Development", "Real Estate & Construction"],
  ["DIB", "Dubai Islamic Bank", "Banks & Financials"],
  ["MASQ", "Mashreq", "Banks & Financials"],
  ["CBD", "Commercial Bank of Dubai", "Banks & Financials"],
  ["DEWA", "Dubai Electricity and Water Authority", "Energy & Utilities"],
  ["DU", "Emirates Integrated Telecommunications (du)", "Telecom & Technology"],
  ["SALIK", "Salik", "Consumer & Logistics"],
  ["PARKIN", "Parkin", "Consumer & Logistics"],
  ["DTC", "Dubai Taxi Company", "Consumer & Logistics"],
  ["AIRARABIA", "Air Arabia", "Consumer & Logistics"],
  ["TECOM", "TECOM Group", "Real Estate & Construction"],
  ["DIC", "Dubai Investments", "Banks & Financials"],
  ["TABREED", "Tabreed", "Energy & Utilities"],
  ["EMPOWER", "Empower", "Energy & Utilities"],
  ["SPINNEYS", "Spinneys", "Consumer & Logistics"],
  ["TALABAT", "Talabat", "Consumer & Logistics"],
  ["TAALEEM", "Taaleem", "Consumer & Logistics"],
  ["AMANAT", "Amanat Holdings", "Banks & Financials"],
  ["DFM", "Dubai Financial Market", "Banks & Financials"],
  ["DEYAAR", "Deyaar Development", "Real Estate & Construction"],
  ["UPP", "Union Properties", "Real Estate & Construction"],
  ["ARAMEX", "Aramex", "Consumer & Logistics"],
  ["NCC", "National Cement", "Real Estate & Construction"],
  ["DRC", "Dubai Refreshment", "Consumer & Logistics"],
  ["AJMANBANK", "Ajman Bank", "Banks & Financials"],
  ["ALANSARI", "Al Ansari Financial Services", "Banks & Financials"],
  ["ALEC", "ALEC Holdings", "Real Estate & Construction"],
  ["DSI", "Drake & Scull International", "Real Estate & Construction"],
];

const QATAR: Row[] = [
  ["QNBK", "Qatar National Bank", "Banks & Financials"],
  ["QIBK", "Qatar Islamic Bank", "Banks & Financials"],
  ["CBQK", "Commercial Bank of Qatar", "Banks & Financials"],
  ["QIIK", "Qatar International Islamic Bank", "Banks & Financials"],
  ["MARK", "Masraf Al Rayan", "Banks & Financials"],
  ["DUBK", "Dukhan Bank", "Banks & Financials"],
  ["DHBK", "Doha Bank", "Banks & Financials"],
  ["ABQK", "Ahli Bank", "Banks & Financials"],
  ["QATI", "Qatar Insurance Company", "Real Estate & Consumer"],
  ["IQCD", "Industries Qatar", "Industrials & Energy"],
  ["MPHC", "Mesaieed Petrochemical Holding", "Industrials & Energy"],
  ["QFLS", "Qatar Fuel (WOQOD)", "Industrials & Energy"],
  ["QGTS", "Nakilat", "Telecom & Transport"],
  ["ORDS", "Ooredoo", "Telecom & Transport"],
  ["VFQS", "Vodafone Qatar", "Telecom & Transport"],
  ["QEWS", "Qatar Electricity & Water", "Industrials & Energy"],
  ["ERES", "Ezdan Holding", "Real Estate & Consumer"],
  ["BRES", "Barwa Real Estate", "Real Estate & Consumer"],
  ["UDCD", "United Development Company", "Real Estate & Consumer"],
  ["IGRD", "Estithmar Holding", "Real Estate & Consumer"],
  ["QNNS", "Qatar Navigation (Milaha)", "Telecom & Transport"],
  ["MERS", "Al Meera Consumer Goods", "Real Estate & Consumer"],
];

const KUWAIT: Row[] = [
  ["KFH", "Kuwait Finance House", "Banks & Financials"],
  ["NBK", "National Bank of Kuwait", "Banks & Financials"],
  ["BOUBYAN", "Boubyan Bank", "Banks & Financials"],
  ["GBK", "Gulf Bank", "Banks & Financials"],
  ["BURGAN", "Burgan Bank", "Banks & Financials"],
  ["KIB", "Kuwait International Bank", "Banks & Financials"],
  ["WARBABANK", "Warba Bank", "Banks & Financials"],
  ["MABANEE", "Mabanee Company", "Real Estate & Consumer"],
  ["AGILITY", "Agility", "Industrials & Telecom"],
  ["NIND", "National Industries Group", "Industrials & Telecom"],
  ["ZAIN", "Zain Group", "Industrials & Telecom"],
  ["OOREDOO", "Ooredoo Kuwait", "Industrials & Telecom"],
  ["STC", "Kuwait Telecommunications Company", "Industrials & Telecom"],
  ["JAZEERA", "Jazeera Airways", "Real Estate & Consumer"],
  ["CABLE", "Gulf Cable and Electrical Industries", "Industrials & Telecom"],
  ["KCEM", "Kuwait Cement Company", "Industrials & Telecom"],
  ["MEZZAN", "Mezzan Holding", "Real Estate & Consumer"],
  ["KIPCO", "Kuwait Projects Company (KIPCO)", "Banks & Financials"],
  ["ALTIJARIA", "Commercial Real Estate Company", "Real Estate & Consumer"],
  ["BOURSA", "Boursa Kuwait", "Banks & Financials"],
];

const OMAN: Row[] = [
  ["BKMB", "Bank Muscat", "Financials & Industry"],
  ["BKSB", "Sohar International Bank", "Financials & Industry"],
  ["NBOB", "National Bank of Oman", "Financials & Industry"],
  ["OQEP", "OQ Exploration & Production", "Financials & Industry"],
  ["OQBI", "OQ Base Industries", "Financials & Industry"],
  ["OQGN", "OQ Gas Networks", "Financials & Industry"],
  ["OTEL", "Oman Telecommunications Company", "Financials & Industry"],
  ["RNSS", "Renaissance Services", "Financials & Industry"],
  ["OCOI", "Oman Cement Company", "Financials & Industry"],
  ["GECS", "Galfar Engineering", "Financials & Industry"],
];

const BAHRAIN: Row[] = [
  ["NBB", "National Bank of Bahrain", "Financials & Telecom"],
  ["BBK", "Bank of Bahrain and Kuwait", "Financials & Telecom"],
  ["BISB", "Bahrain Islamic Bank", "Financials & Telecom"],
  ["SALAM", "Al Salam Bank", "Financials & Telecom"],
  ["BEYON", "Bahrain Telecommunications Company", "Financials & Telecom"],
  ["GFH", "GFH Financial Group", "Financials & Telecom"],
  ["SEEF", "Seef Properties", "Financials & Telecom"],
  ["CINECO", "Bahrain Cinema Company", "Financials & Telecom"],
];

function entries(
  market: GccMarket,
  exchange: GccExchange,
  rows: Row[],
  source: (ticker: string) => GccData,
): GccEntry[] {
  return rows.map(([ticker, name, sector]) => ({
    ticker,
    name,
    market,
    exchange,
    sector,
    data: source(ticker),
  }));
}

export const GCC_ENTRIES: GccEntry[] = [
  ...entries("SA", "Tadawul", SAUDI, (ticker) => ({
    yahoo: `${ticker}.SR`,
    stockanalysis: { exchange: "tadawul", ticker },
  })),
  ...entries("AE", "ADX", UAE.filter((row) => !["EMIRATESNBD", "EMAAR", "EMAARDEV", "DIB", "MASQ", "CBD", "DEWA", "DU", "SALIK", "PARKIN", "DTC", "AIRARABIA", "TECOM", "DIC", "TABREED", "EMPOWER", "SPINNEYS", "TALABAT", "TAALEEM", "AMANAT", "DFM", "DEYAAR", "UPP", "ARAMEX", "NCC", "DRC", "AJMANBANK", "ALANSARI", "ALEC", "DSI"].includes(row[0])), (ticker) => ({
    stockanalysis: { exchange: "adx", ticker },
  })),
  ...entries("AE", "DFM", UAE.filter((row) => ["EMIRATESNBD", "EMAAR", "EMAARDEV", "DIB", "MASQ", "CBD", "DEWA", "DU", "SALIK", "PARKIN", "DTC", "AIRARABIA", "TECOM", "DIC", "TABREED", "EMPOWER", "SPINNEYS", "TALABAT", "TAALEEM", "AMANAT", "DFM", "DEYAAR", "UPP", "ARAMEX", "NCC", "DRC", "AJMANBANK", "ALANSARI", "ALEC", "DSI"].includes(row[0])), (ticker) => ({
    yahoo: `${ticker}.AE`,
    stockanalysis: { exchange: "dfm", ticker },
  })),
  ...entries("QA", "QSE", QATAR, (ticker) => ({
    yahoo: `${ticker}.QA`,
    stockanalysis: { exchange: "qse", ticker },
  })),
  ...entries("KW", "KWSE", KUWAIT, (ticker) => ({
    yahoo: `${ticker}.KW`,
    stockanalysis: { exchange: "kwse", ticker },
  })),
  ...entries("OM", "MSM", OMAN, (ticker) => ({
    stockanalysis: { exchange: "msm", ticker },
  })),
  ...entries("BH", "Bahrain Bourse", BAHRAIN, (ticker) => ({
    marketscreener: ticker,
  })),
];

export const GCC_TICKERS = GCC_ENTRIES.map((entry) => entry.ticker);

/**
 * Names with a hand-written research report. The directory lists the full
 * universe, but only published names link to a report.
 */
export const GCC_PUBLISHED_TICKERS = [
  "2222",
  "1120",
  "1180",
  "1010",
  "1060",
  "1150",
  "1080",
  "1050",
  "1140",
  "1020",
  "1211",
  "7010",
  "2010",
  "2082",
  "4013",
  "5110",
  "2020",
  "7203",
  "7020",
  "2280",
  "IHC",
  "FAB",
  "EMIRATESNBD",
  "ETISALAT",
  "QNBK",
  "ADCB",
  "ADIB",
  "ALPHADHABI",
  "MASQ",
  "DU",
  "TAQA",
  "ADNOCGAS",
  "DEWA",
  "EMAAR",
  "ADNOCDRILL",
  "BOROUGE",
  "ALDAR",
  "IQCD",
  "DIB",
  "QIBK",
];

export function getGccEntry(ticker: string): GccEntry | undefined {
  return GCC_ENTRIES.find((entry) => entry.ticker.toUpperCase() === ticker.toUpperCase());
}

export const GCC_GROUPS: GccGroup[] = [
  {
    id: "sa-banks",
    name: "Saudi Banks & Financials",
    shortName: "Saudi Banks",
    blurb: "Tadawul lenders, insurers and capital-market infrastructure.",
    market: "SA",
    tickers: SAUDI.filter((row) => row[2] === "Banks & Financials" || row[2] === "Real Estate & Insurance").map((row) => row[0]),
  },
  {
    id: "sa-energy",
    name: "Saudi Energy & Petrochemicals",
    shortName: "Saudi Energy",
    blurb: "Oil, gas, refining, petrochemicals and mining.",
    market: "SA",
    tickers: SAUDI.filter((row) => row[2] === "Energy & Petrochemicals").map((row) => row[0]),
  },
  {
    id: "sa-industrials",
    name: "Saudi Industrials & Utilities",
    shortName: "Saudi Industry",
    blurb: "Cement, cables, utilities, transport and industrial services.",
    market: "SA",
    tickers: SAUDI.filter((row) => row[2] === "Industrials & Utilities").map((row) => row[0]),
  },
  {
    id: "sa-consumer",
    name: "Saudi Consumer & Healthcare",
    shortName: "Saudi Consumer",
    blurb: "Healthcare, retail, food and consumer services.",
    market: "SA",
    tickers: SAUDI.filter((row) => row[2] === "Consumer & Retail" || row[2] === "Healthcare").map((row) => row[0]),
  },
  {
    id: "sa-tech",
    name: "Saudi Telecom & Technology",
    shortName: "Saudi Tech",
    blurb: "Telecom operators, digital platforms and IT services.",
    market: "SA",
    tickers: SAUDI.filter((row) => row[2] === "Telecom & Technology").map((row) => row[0]),
  },
  {
    id: "ae-financials",
    name: "UAE Banks & Financials",
    shortName: "UAE Banks",
    blurb: "Abu Dhabi and Dubai lenders, insurers and holding companies.",
    market: "AE",
    tickers: UAE.filter((row) => row[2] === "Banks & Financials").map((row) => row[0]),
  },
  {
    id: "ae-energy",
    name: "UAE Energy & Utilities",
    shortName: "UAE Energy",
    blurb: "ADNOC companies, utilities, gas networks and industrial services.",
    market: "AE",
    tickers: UAE.filter((row) => row[2] === "Energy & Utilities").map((row) => row[0]),
  },
  {
    id: "ae-realestate",
    name: "UAE Real Estate & Construction",
    shortName: "UAE Property",
    blurb: "Developers, master communities, landlords and contractors.",
    market: "AE",
    tickers: UAE.filter((row) => row[2] === "Real Estate & Construction").map((row) => row[0]),
  },
  {
    id: "ae-consumer",
    name: "UAE Consumer, Logistics & Tech",
    shortName: "UAE Consumer",
    blurb: "Transport, retail, logistics, telecom and digital platforms.",
    market: "AE",
    tickers: UAE.filter((row) => row[2] === "Consumer & Logistics" || row[2] === "Telecom & Technology").map((row) => row[0]),
  },
  {
    id: "qa",
    name: "Qatar",
    shortName: "Qatar",
    blurb: "QSE banks, industrials, real estate, telecom and transport.",
    market: "QA",
    tickers: QATAR.map((row) => row[0]),
  },
  {
    id: "kw",
    name: "Kuwait",
    shortName: "Kuwait",
    blurb: "Boursa Kuwait banks, telecom, industry and real estate.",
    market: "KW",
    tickers: KUWAIT.map((row) => row[0]),
  },
  {
    id: "om",
    name: "Oman",
    shortName: "Oman",
    blurb: "MSM banks, energy, utilities and industrial services.",
    market: "OM",
    tickers: OMAN.map((row) => row[0]),
  },
  {
    id: "bh",
    name: "Bahrain",
    shortName: "Bahrain",
    blurb: "Bahrain Bourse banks, telecom and property.",
    market: "BH",
    tickers: BAHRAIN.map((row) => row[0]),
  },
];

export function getGccGroup(ticker: string): GccGroup | undefined {
  return GCC_GROUPS.find((group) => group.tickers.includes(ticker));
}

export const GCC_MARKETS: Array<{ id: GccMarket; name: string; exchange: string }> = [
  { id: "SA", name: "Saudi Arabia", exchange: "Tadawul" },
  { id: "AE", name: "United Arab Emirates", exchange: "ADX / DFM" },
  { id: "QA", name: "Qatar", exchange: "QSE" },
  { id: "KW", name: "Kuwait", exchange: "Boursa Kuwait" },
  { id: "OM", name: "Oman", exchange: "MSM" },
  { id: "BH", name: "Bahrain", exchange: "Bahrain Bourse" },
];
