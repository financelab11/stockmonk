export type BrokerMeta = {
  id: string;
  name: string;
  displayName: string;
  aliases: string[];
  country: "IN" | "US" | "GB" | "EU" | "JP" | "GLOBAL";
  website: string;
  domain: string;
  logoUrl: string | null;
};

const B = (
  id: string,
  name: string,
  domain: string,
  country: BrokerMeta["country"],
  aliases: string[] = [],
): BrokerMeta => ({
  id,
  name,
  displayName: name,
  aliases,
  country,
  website: domain.startsWith("http") ? domain : `https://${domain}`,
  domain,
  logoUrl: `/brokers/${id}.png`,
});

export const BROKERS: BrokerMeta[] = [
  B("prabhudas-lilladher", "Prabhudas Lilladher", "plindia.com", "IN", ["PL", "Prabhudas"]),
  B("axis-securities", "Axis Securities", "axisdirect.in", "IN", ["Axis Direct", "Axis"]),
  B("icici-securities", "ICICI Securities", "icicidirect.com", "IN", ["ICICI Direct", "ICICIdirect"]),
  B("hdfc-securities", "HDFC Securities", "hdfcsec.com", "IN", ["HDFC Sec"]),
  B("motilal-oswal", "Motilal Oswal", "motilaloswal.com", "IN", ["Motilal Oswal Financial Services"]),
  B("jm-financial", "JM Financial", "jmfl.com", "IN", ["JM"]),
  B("nuvama", "Nuvama", "nuvama.com", "IN", ["Nuvama Institutional Equities", "Edelweiss Securities"]),
  B("antique", "Antique Stock Broking", "antiquelimited.com", "IN", ["Antique"]),
  B("kotak", "Kotak Institutional Equities", "kotak.com", "IN", ["Kotak Securities", "Kotak"]),
  B("emkay", "Emkay Global", "emkayglobal.com", "IN", ["Emkay"]),
  B("sbi-securities", "SBI Securities", "sbisecurities.in", "IN", ["SBICAP Securities", "SBI Capital"]),
  B("idbi-capital", "IDBI Capital", "idbidirect.in", "IN", ["IDBI"]),
  B("way2wealth", "Way2Wealth", "way2wealth.com", "IN", ["Way2Wealth Securities"]),
  B("centrum", "Centrum", "centrum.co.in", "IN", ["Centrum Broking"]),
  B("sharekhan", "Sharekhan", "sharekhan.com", "IN", ["Sharekhan by BNP Paribas"]),
  B("arihant", "Arihant Capital", "arihantcapital.com", "IN", ["Arihant"]),
  B("choice", "Choice Broking", "choiceindia.com", "IN", ["Choice"]),
  B("nirmal-bang", "Nirmal Bang", "nirmalbang.com", "IN", ["Nirmal Bang Securities"]),
  B("ventura", "Ventura Securities", "ventura1.com", "IN", ["Ventura"]),
  B("monarch", "Monarch Networth Capital", "mnclgroup.com", "IN", ["Monarch"]),
  B("elara", "Elara Capital", "elaracapital.com", "IN", ["Elara"]),
  B("baroda-etrade", "Baroda eTrade", "barodaetrade.com", "IN", ["Baroda BNP Paribas"]),
  B("jefferies", "Jefferies", "jefferies.com", "US", []),
  B("goldman-sachs", "Goldman Sachs", "goldmansachs.com", "US", ["GS"]),
  B("morgan-stanley", "Morgan Stanley", "morganstanley.com", "US", ["MS"]),
  B("ubs", "UBS", "ubs.com", "EU", []),
  B("clsa", "CLSA", "clsa.com", "GLOBAL", []),
  B("jpmorgan", "JPMorgan", "jpmorgan.com", "US", ["JP Morgan", "J.P. Morgan"]),
  B("bofa", "BofA Securities", "bofa.com", "US", ["Bank of America", "BofA"]),
  B("citi", "Citi", "citigroup.com", "US", ["Citigroup"]),
  B("hsbc", "HSBC", "hsbc.com", "GB", []),
  B("nomura", "Nomura", "nomura.com", "JP", []),
];

const STOP_WORDS = new Set(["ltd", "limited", "inc", "corp", "corporation", "plc", "llp"]);

export function normalizeBrokerName(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter((word) => word && !STOP_WORDS.has(word))
    .join(" ");
}

const BY_KEY = new Map<string, BrokerMeta>();
for (const broker of BROKERS) {
  BY_KEY.set(normalizeBrokerName(broker.name), broker);
  for (const alias of broker.aliases) BY_KEY.set(normalizeBrokerName(alias), broker);
  BY_KEY.set(broker.id, broker);
}

export function findBroker(name: string | null | undefined): BrokerMeta | null {
  if (!name) return null;
  const key = normalizeBrokerName(name);
  return BY_KEY.get(key) ?? null;
}

export function brokerSlug(name: string): string {
  return findBroker(name)?.id ?? normalizeBrokerName(name).replace(/\s+/g, "-");
}

export function brokerInitials(name: string): string {
  const words = name
    .replace(/[^A-Za-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 0) return "BR";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0]}${words[1][0]}`.toUpperCase();
}
