import { THEME_UNIVERSES } from "@/config/portfolio-themes";
import type {
  PortfolioPrimaryCategory,
  PortfolioSpec,
} from "@/lib/portfolios/types";

type SpecInput = Partial<PortfolioSpec> &
  Pick<
    PortfolioSpec,
    | "slug"
    | "name"
    | "primaryCategory"
    | "strategyType"
    | "tags"
    | "description"
    | "thesis"
    | "focus"
    | "risks"
    | "holdings"
    | "weights"
    | "filters"
  >;

let order = 0;

const DEFAULTS: Omit<PortfolioSpec, "slug" | "name" | "description" | "thesis" | "focus" | "risks" | "tags" | "primaryCategory" | "strategyType" | "holdings" | "weights" | "filters" | "popularity"> = {
  benchmark: "SPY",
  minimumInvestment: 5000,
  rebalanceFrequency: "Quarterly",
  weighting: "score",
  concentration: 8,
  maxSectorWeight: 35,
  marketCapFocus: "Multi-Cap",
};

function p(spec: SpecInput): PortfolioSpec {
  order += 1;
  return {
    ...DEFAULTS,
    ...spec,
    popularity: order,
  } as PortfolioSpec;
}

const w = (growth: number, quality: number, valuation: number, technical: number) => ({
  growth,
  quality,
  valuation,
  technical,
});

const TECH = "Information Technology";
const HEALTH = "Health Care";
const FIN = "Financials";
const DISC = "Consumer Discretionary";
const STAPLES = "Consumer Staples";
const IND = "Industrials";
const ENERGY = "Energy";
const UTIL = "Utilities";
const COMM = "Communication Services";
const MAT = "Materials";

const CATEGORY_TAGS: Record<PortfolioPrimaryCategory, string[]> = {
  Quantitative: ["Quantitative", "Multi-Factor"],
  Thematic: ["Thematic", "Emerging Technologies"],
  Sector: ["Sector"],
  Fundamental: ["Fundamental", "Quality"],
  Technical: ["Technical", "Momentum"],
  "Single-Factor": ["Single-Factor"],
  "Multi-Factor": ["Multi-Factor"],
  Growth: ["Growth"],
  Value: ["Value"],
  "Quality & Dividend": ["Quality", "Dividend & Income"],
  Defensive: ["Defensive"],
  "Small & Mid Cap": ["Small & Mid Cap"],
};

function tags(
  category: PortfolioPrimaryCategory,
  ...extra: string[]
): string[] {
  return [...new Set([...CATEGORY_TAGS[category], ...extra])];
}

export const PORTFOLIO_SPECS: PortfolioSpec[] = [
  // Quantitative & systematic
  p({
    slug: "us-quant-leaders",
    name: "US Quant Leaders",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Quantitative", "Multi-Factor", "Mega Cap"),
    description:
      "A broad, systematically ranked basket of US companies with the strongest combined growth, quality, valuation and technical evidence.",
    thesis:
      "A diversified quant core can capture the market's persistent factor premia without relying on a single theme or discretionary call.",
    focus:
      "All eligible US-listed companies are scored on the Stockmonk four-factor model, with no sector or market-cap preference. The portfolio is a diversified core rather than a concentrated bet.",
    risks:
      "Factor leadership rotates. A diversified quant basket can lag a narrow momentum market for long stretches, and micro-cap names can have wider spreads.",
    holdings: 30,
    weights: w(30, 30, 20, 20),
    filters: { minMarketCap: 2e9, minCoverage: 0.55 },
    concentration: 7,
    maxSectorWeight: 32,
  }),
  p({
    slug: "systematic-alpha-20",
    name: "Systematic Alpha 20",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Quantitative", "Concentrated", "Multi-Factor"),
    description:
      "A concentrated 20-stock systematic portfolio that balances all four Stockmonk factors with a higher active share.",
    thesis:
      "Concentration improves the signal-to-noise ratio when every holding has to clear the same multi-factor hurdle.",
    focus:
      "The same four-factor ranking as the broad quant model, but the top 20 names receive materially larger weights and a tighter single-stock cap.",
    risks:
      "Concentration cuts both ways; an idiosyncratic shock at one or two holdings has a larger effect on the portfolio.",
    holdings: 20,
    weights: w(25, 25, 25, 25),
    filters: { minMarketCap: 2e9, minCoverage: 0.6 },
    concentration: 8,
    maxSectorWeight: 30,
    minimumInvestment: 10000,
  }),
  p({
    slug: "statistical-quality-leaders",
    name: "Statistical Quality Leaders",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Quality", "Fundamental"),
    description:
      "A quality-first quant portfolio emphasising profitable, cash-generative companies with stable accounting evidence.",
    thesis:
      "Quality compounds quietly: high returns on capital and cash conversion tend to survive macro rotations better than pure growth or deep value.",
    focus:
      "Quality receives 45% of the ranking weight, supported by growth, valuation and technical evidence. Companies with weak balance sheets are screened out.",
    risks:
      "Quality can become expensive. The valuation sleeve is deliberately smaller, so the portfolio may lag in a deep-value rally.",
    holdings: 25,
    weights: w(20, 45, 15, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.65, minFcfMargin: 0.05 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "quant-growth-compounders",
    name: "Quant Growth Compounders",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Growth", "Quality"),
    description:
      "High-growth companies that still pass a quality and balance-sheet filter, ranked with a growth-heavy factor mix.",
    thesis:
      "Growth is most valuable when it is funded by the business rather than by repeated balance-sheet stress.",
    focus:
      "Growth carries 40% of the rank, with quality at 30%. Revenue growth and quality scores must both be present; pure story stocks are excluded.",
    risks:
      "Growth multiples can compress quickly when rates rise or expectations reset. The portfolio is not a defensive allocation.",
    holdings: 25,
    weights: w(40, 30, 10, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minRevenueGrowth: 0.05 },
    concentration: 7,
    maxSectorWeight: 35,
  }),
  p({
    slug: "us-market-efficiency-portfolio",
    name: "US Market Efficiency Portfolio",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Value", "Multi-Factor"),
    description:
      "A valuation-aware systematic portfolio that looks for well-run companies whose evidence is not fully reflected in the multiple.",
    thesis:
      "Market inefficiencies are most durable where a good business is temporarily priced like an average one.",
    focus:
      "Valuation and quality receive the largest weights. The portfolio screens out the most expensive decile and favours positive free cash flow.",
    risks:
      "Cheap stocks can stay cheap. The quality sleeve is intended to reduce, not eliminate, value traps.",
    holdings: 30,
    weights: w(15, 30, 35, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, maxPe: 45 },
    concentration: 6,
    maxSectorWeight: 30,
  }),
  p({
    slug: "adaptive-equity-strategy",
    name: "Adaptive Equity Strategy",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Multi-Factor", "Momentum"),
    description:
      "A balanced factor portfolio that gives technical evidence a larger role when price trends are decisive.",
    thesis:
      "A fixed factor mix is fragile; a balanced mix with a technical confirmation sleeve tends to adapt better across regimes.",
    focus:
      "Growth, quality, valuation and technical scores are equally weighted, with a minimum technical score so deteriorating trends are not carried into the basket.",
    risks:
      "Technical confirmation can whipsaw in sideways markets and adds turnover at rebalance.",
    holdings: 20,
    weights: w(25, 25, 25, 25),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minPriceVs200dma: -0.15 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "risk-adjusted-leaders",
    name: "Risk-Adjusted Leaders",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Defensive", "Quality"),
    description:
      "A lower-beta quant portfolio that combines quality and valuation with a technical risk filter.",
    thesis:
      "Compounding improves when drawdowns are smaller; quality and trend evidence can reduce the chance of holding a value trap in a downturn.",
    focus:
      "Quality and technical evidence carry the ranking. The weighting method favours lower-volatility names within the selected basket.",
    risks:
      "Defensive baskets can lag strongly in a high-beta rally and are not immune to broad market drawdowns.",
    holdings: 25,
    weights: w(15, 35, 25, 25),
    filters: { minMarketCap: 2e9, minCoverage: 0.6 },
    weighting: "lowVolatility",
    concentration: 7,
    maxSectorWeight: 32,
  }),
  p({
    slug: "earnings-momentum-quant",
    name: "Earnings Momentum Quant",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Momentum", "Growth"),
    description:
      "A systematic portfolio that pairs fundamental growth evidence with improving price momentum.",
    thesis:
      "Earnings revisions and price trends often reinforce each other; combining them can improve the persistence of a growth signal.",
    focus:
      "Growth and technical scores dominate, with a quality floor. The portfolio excludes names with deeply negative revenue growth.",
    risks:
      "Earnings momentum reverses sharply around guidance cuts; the portfolio can experience high turnover.",
    holdings: 20,
    weights: w(35, 20, 15, 30),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, minRevenueGrowth: 0 },
    concentration: 8,
    maxSectorWeight: 32,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "multi-variable-equity-model",
    name: "Multi-Variable Equity Model",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Multi-Factor", "Large Cap"),
    description:
      "A rules-based large-cap model that combines the four Stockmonk scores with a liquidity and coverage screen.",
    thesis:
      "Large-cap liquidity plus a multi-variable rank can produce a repeatable core with lower implementation friction.",
    focus:
      "All four scores contribute equally. The universe is limited to companies above $2B with adequate score coverage.",
    risks:
      "Large-cap factor spreads can be narrow; the portfolio may track the broad market more closely than a thematic basket.",
    holdings: 30,
    weights: w(25, 25, 25, 25),
    filters: { minMarketCap: 2e9, minCoverage: 0.65 },
    marketCapFocus: "Large Cap",
    concentration: 6,
    maxSectorWeight: 30,
  }),
  p({
    slug: "systematic-core-30",
    name: "Systematic Core 30",
    primaryCategory: "Quantitative",
    strategyType: "Quantitative",
    tags: tags("Quantitative", "Multi-Factor", "Mega Cap"),
    description:
      "A 30-stock systematic core built from the most liquid US names with balanced factor exposure.",
    thesis:
      "For a long-horizon core, liquidity and diversification matter as much as the raw factor score.",
    focus:
      "A broad 30-name basket with a 7% single-stock cap, equal sector discipline and a quality-heavy tie-breaker.",
    risks:
      "A core portfolio will not keep pace with a concentrated thematic winner; it is designed for breadth.",
    holdings: 30,
    weights: w(25, 30, 25, 20),
    filters: { minMarketCap: 10e9, minCoverage: 0.65 },
    marketCapFocus: "Mega Cap",
    concentration: 7,
    maxSectorWeight: 28,
  }),

  // Thematic
  p({
    slug: "ai-infrastructure-leaders",
    name: "AI Infrastructure Leaders",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Growth", "AI & Technology", "Semiconductors", "Mega Cap"),
    description:
      "A concentrated portfolio of companies powering AI computing, semiconductor manufacturing, data centres and cloud infrastructure.",
    thesis:
      "AI adoption is a multi-year capital-spending cycle, and the durable economics sit with the compute, networking and power suppliers rather than with every application layer.",
    focus:
      "The screen combines semiconductor, cloud, networking, electrical-equipment and data-centre exposure with a growth-heavy score. Research-covered companies are preferred when the evidence is close.",
    risks:
      "AI capital spending is cyclical and heavily concentrated among a few buyers. Valuations already discount significant growth.",
    holdings: 15,
    weights: w(35, 25, 15, 25),
    filters: {
      tickers: [...THEME_UNIVERSES.aiInfrastructure],
      minMarketCap: 2e9,
      minCoverage: 0.55,
    },
    benchmark: "XLK",
    minimumInvestment: 5000,
    concentration: 12,
    maxSectorWeight: 55,
    rebalanceFrequency: "Quarterly",
  }),
  p({
    slug: "global-ai-data-centre-ecosystem",
    name: "Global AI & Data Centre Ecosystem",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "AI & Technology", "Infrastructure", "Industrials"),
    description:
      "The picks-and-shovels portfolio around data-centre buildout: chips, networking, cooling, power and the utilities that supply them.",
    thesis:
      "Data-centre demand is constrained by power, cooling and networking as much as by GPUs, which widens the opportunity beyond chip designers.",
    focus:
      "A broader AI infrastructure screen that explicitly includes electrical equipment, industrial cooling, utilities and communications alongside semis and software.",
    risks:
      "Utility and industrial names are sensitive to rate cycles; AI spending can pause faster than expected.",
    holdings: 20,
    weights: w(30, 25, 20, 25),
    filters: {
      tickers: [...THEME_UNIVERSES.aiDataCentre],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLI",
    minimumInvestment: 5000,
    concentration: 9,
    maxSectorWeight: 45,
  }),
  p({
    slug: "semiconductor-powerhouses",
    name: "Semiconductor Powerhouses",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Semiconductors", "AI & Technology", "Growth"),
    description:
      "A focused basket across chip design, foundry, equipment and the materials that enable leading-edge manufacturing.",
    thesis:
      "Semiconductors are the economic bottleneck of the compute era, and the industry's consolidated structure gives the leaders pricing power through cycles.",
    focus:
      "Semiconductor and semiconductor-equipment industries only, ranked with growth and quality, with a technical floor to avoid the weakest downtrends.",
    risks:
      "The cycle is volatile, export controls can change the addressable market, and a handful of customers drive demand.",
    holdings: 15,
    weights: w(35, 30, 15, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.semiconductors],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLK",
    concentration: 13,
    maxSectorWeight: 90,
  }),
  p({
    slug: "robotics-automation",
    name: "Robotics & Automation",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Industrials", "AI & Technology", "Growth"),
    description:
      "Companies supplying industrial robots, automation software, sensors, motion control and the factories of the future.",
    thesis:
      "Labour scarcity and reshoring make automation a durable productivity trade rather than a single-cycle capex story.",
    focus:
      "Industrial automation, machinery, electrical equipment and sensing companies, ranked on growth and quality with a technical confirmation.",
    risks:
      "Industrial capex is cyclical; automation budgets are often deferred in a manufacturing slowdown.",
    holdings: 15,
    weights: w(30, 30, 20, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.robotics],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLI",
    concentration: 10,
    maxSectorWeight: 60,
  }),
  p({
    slug: "cybersecurity-leaders",
    name: "Cybersecurity Leaders",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "AI & Technology", "Growth"),
    description:
      "A basket of security software, identity, endpoint, cloud-security and network-protection companies.",
    thesis:
      "Security spending is non-discretionary and grows with every new endpoint, cloud workload and AI-generated threat.",
    focus:
      "Security and infrastructure-software companies with positive revenue growth, ranked on growth and quality, with a technical trend filter.",
    risks:
      "Security valuations are growth-sensitive; platform consolidation can pressure smaller vendors.",
    holdings: 15,
    weights: w(35, 30, 15, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.cybersecurity],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLK",
    concentration: 12,
    maxSectorWeight: 85,
  }),
  p({
    slug: "cloud-computing-innovators",
    name: "Cloud Computing Innovators",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "AI & Technology", "Growth"),
    description:
      "Cloud infrastructure, data platforms and software companies moving enterprise workloads into elastic compute.",
    thesis:
      "Cloud migration remains a long-duration shift, and the companies that own the data layer or the developer workflow have the strongest retention.",
    focus:
      "Cloud, software and internet-infrastructure names with growth and quality evidence; highly speculative pre-revenue names are excluded.",
    risks:
      "Cloud optimisation can slow near-term growth; platform competition and AI-driven pricing pressure are real.",
    holdings: 15,
    weights: w(35, 30, 15, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.cloud],
      minMarketCap: 1e9,
      minCoverage: 0.5,
      minRevenueGrowth: 0.03,
    },
    benchmark: "XLK",
    concentration: 12,
    maxSectorWeight: 80,
  }),
  p({
    slug: "digital-payments-revolution",
    name: "Digital Payments Revolution",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Financial Services", "Growth"),
    description:
      "Payments networks, processors, neobanks and software companies taking share from cash and legacy banking.",
    thesis:
      "Payments are a toll on commerce; digital penetration and software-led embedded finance create a long runway.",
    focus:
      "Payment, fintech and financial-software companies, ranked on growth and quality with a valuation check to avoid the most crowded names.",
    risks:
      "Consumer credit and spending cycles affect volumes; regulation and interchange economics can change.",
    holdings: 15,
    weights: w(30, 30, 20, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.payments],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLF",
    concentration: 12,
    maxSectorWeight: 75,
  }),
  p({
    slug: "fintech-disruptors",
    name: "Fintech Disruptors",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Financial Services", "Emerging Technologies"),
    description:
      "A higher-growth basket of digital lenders, brokerages, payment rails and financial-software challengers.",
    thesis:
      "The best fintech models convert a customer relationship into recurring software-like economics; the weaker ones are simply balance-sheet lenders.",
    focus:
      "Smaller and mid-cap fintech names with faster growth and a quality filter, deliberately tilted away from the largest incumbents.",
    risks:
      "Credit losses, funding costs and regulatory scrutiny can compress fintech economics quickly.",
    holdings: 15,
    weights: w(40, 25, 15, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.fintech],
      minMarketCap: 500e6,
      maxMarketCap: 100e9,
      minCoverage: 0.45,
    },
    benchmark: "XLF",
    concentration: 12,
    maxSectorWeight: 70,
  }),
  p({
    slug: "space-economy",
    name: "Space Economy",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Industrials", "Emerging Technologies"),
    description:
      "Launch, satellite, space infrastructure and defence-electronics companies building the commercial space economy.",
    thesis:
      "Falling launch costs and persistent government demand are turning space from a science programme into an infrastructure market.",
    focus:
      "Aerospace, defence, satellite-communications and space-infrastructure names, with a quality and technical screen where the evidence exists.",
    risks:
      "The theme is early, capital-intensive and prone to launch delays; several names are pre-profit.",
    holdings: 10,
    weights: w(35, 20, 15, 30),
    filters: {
      tickers: [...THEME_UNIVERSES.space],
      requiredTickers: ["RKLB", "ASTS", "RDW", "PL", "BKSY"],
      minMarketCap: 300e6,
      minCoverage: 0.35,
    },
    benchmark: "XLI",
    concentration: 16,
    maxSectorWeight: 80,
  }),
  p({
    slug: "future-mobility",
    name: "Future Mobility",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Consumer", "Industrials", "Emerging Technologies"),
    description:
      "Electric vehicles, autonomous driving, mobility platforms and the components that make transport cleaner and smarter.",
    thesis:
      "Mobility is being re-engineered around software, batteries and autonomy; the winners may be component and platform suppliers rather than a single automaker.",
    focus:
      "EV, auto-parts, mobility-platform and industrial-technology names, ranked with a growth tilt and a technical trend check.",
    risks:
      "EV demand is cyclical and price competition is intense; autonomy timelines have repeatedly slipped.",
    holdings: 15,
    weights: w(30, 20, 20, 30),
    filters: {
      tickers: [...THEME_UNIVERSES.mobility],
      minMarketCap: 1e9,
      minCoverage: 0.4,
    },
    benchmark: "XLY",
    concentration: 12,
    maxSectorWeight: 65,
  }),
  p({
    slug: "longevity-biotechnology",
    name: "Longevity & Biotechnology",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Healthcare & Biotech", "Growth"),
    description:
      "Biotechnology and life-science companies targeting age-related disease, novel therapeutics and healthier longevity.",
    thesis:
      "Science is extending the addressable market for therapeutics, and clinical-stage biotech offers asymmetric exposure when the balance sheet can fund the trial.",
    focus:
      "Biotech and life-sciences names with positive revenue or well-funded pipelines; the quality screen reduces the weakest balance sheets.",
    risks:
      "Clinical failure is binary; the portfolio can be volatile and is not suitable for capital-preservation mandates.",
    holdings: 15,
    weights: w(35, 25, 15, 25),
    filters: {
      tickers: [...THEME_UNIVERSES.longevity],
      minMarketCap: 500e6,
      minCoverage: 0.35,
    },
    benchmark: "XLV",
    concentration: 9,
    maxSectorWeight: 90,
  }),
  p({
    slug: "genomics-revolution",
    name: "Genomics Revolution",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Healthcare & Biotech", "Emerging Technologies"),
    description:
      "Gene editing, sequencing, precision medicine and diagnostics companies turning genomic data into therapies.",
    thesis:
      "The cost of sequencing and editing continues to fall, widening the set of diseases that can be addressed with a genomic approach.",
    focus:
      "Genomics, diagnostics and precision-medicine names, with a growth-and-quality rank and a technical floor.",
    risks:
      "Regulatory, reimbursement and clinical risks are high; several companies are pre-revenue.",
    holdings: 15,
    weights: w(35, 25, 15, 25),
    filters: {
      tickers: [...THEME_UNIVERSES.genomics],
      minMarketCap: 300e6,
      minCoverage: 0.3,
    },
    benchmark: "XLV",
    concentration: 13,
    maxSectorWeight: 90,
  }),
  p({
    slug: "clean-energy-transition",
    name: "Clean Energy Transition",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Energy & Clean Energy", "Infrastructure"),
    description:
      "Solar, storage, grid equipment, efficiency and renewable-power companies enabling the energy transition.",
    thesis:
      "Electrification and grid investment are multi-decade capex cycles, even when individual solar or storage cycles overshoot.",
    focus:
      "Renewable-power, solar, storage, electrical-equipment and utility names, with a quality filter to avoid the most leveraged developers.",
    risks:
      "Policy, interest rates and commodity prices drive the group; oversupply has hurt solar economics before.",
    holdings: 20,
    weights: w(30, 30, 20, 20),
    filters: {
      tickers: [...THEME_UNIVERSES.cleanEnergy],
      minMarketCap: 1e9,
      minCoverage: 0.4,
    },
    benchmark: "XLU",
    concentration: 9,
    maxSectorWeight: 50,
  }),
  p({
    slug: "nuclear-energy-renaissance",
    name: "Nuclear Energy Renaissance",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Energy & Clean Energy", "Infrastructure"),
    description:
      "Uranium, nuclear-fuel, reactor and utility companies benefiting from renewed interest in firm clean power.",
    thesis:
      "Data-centre demand and decarbonisation have made firm nuclear power scarce again, tightening the fuel and services chain.",
    focus:
      "Uranium miners, nuclear services and utilities with nuclear exposure, ranked with growth and technical evidence where available.",
    risks:
      "Uranium prices are volatile, project timelines are long, and nuclear policy can change.",
    holdings: 15,
    weights: w(25, 25, 20, 30),
    filters: {
      tickers: [...THEME_UNIVERSES.nuclear],
      minMarketCap: 500e6,
      minCoverage: 0.35,
    },
    benchmark: "XLU",
    concentration: 13,
    maxSectorWeight: 80,
  }),
  p({
    slug: "defence-technology",
    name: "Defence Technology",
    primaryCategory: "Thematic",
    strategyType: "Thematic",
    tags: tags("Thematic", "Industrials", "Emerging Technologies"),
    description:
      "Defence primes, autonomy, space and security-electronics companies as governments modernise their arsenals.",
    thesis:
      "Multi-year defence budgets and the shift to autonomous systems create a visible backlog for qualified suppliers.",
    focus:
      "Aerospace, defence, security and military-technology names, ranked with quality and technical evidence; the largest primes anchor the basket.",
    risks:
      "Budget politics, programme delays and fixed-price contracts can hurt margins.",
    holdings: 15,
    weights: w(25, 30, 20, 25),
    filters: {
      tickers: [...THEME_UNIVERSES.defence],
      minMarketCap: 1e9,
      minCoverage: 0.4,
    },
    benchmark: "XLI",
    concentration: 12,
    maxSectorWeight: 90,
  }),

  // Sector
  p({
    slug: "technology-leaders",
    name: "Technology Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "AI & Technology", "Mega Cap", "Quality"),
    description:
      "A broad technology-sector core spanning software, semiconductors, hardware and IT services.",
    thesis:
      "Technology remains the highest-return-on-capital sector in the US market, but leadership rotates within it.",
    focus:
      "All technology-sector companies above $2B, ranked by a balanced four-factor score with a sector cap.",
    risks:
      "Sector concentration and valuation risk; a technology drawdown can dominate the portfolio's outcome.",
    holdings: 25,
    weights: w(30, 30, 20, 20),
    filters: { sectors: [TECH], minMarketCap: 2e9, minCoverage: 0.55 },
    benchmark: "XLK",
    concentration: 8,
    maxSectorWeight: 100,
  }),
  p({
    slug: "healthcare-innovators",
    name: "Healthcare Innovators",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Healthcare & Biotech", "Quality"),
    description:
      "A diversified healthcare basket across therapeutics, devices, diagnostics and services.",
    thesis:
      "Healthcare combines defensive demand with innovation-driven growth, and the sector's subgroups have different cycles.",
    focus:
      "Healthcare companies above $1B, ranked on quality and growth with a valuation check.",
    risks:
      "Drug pricing, reimbursement and clinical/regulatory outcomes are the main sources of idiosyncratic risk.",
    holdings: 25,
    weights: w(30, 35, 20, 15),
    filters: { sectors: [HEALTH], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLV",
    concentration: 8,
    maxSectorWeight: 100,
  }),
  p({
    slug: "financial-services-leaders",
    name: "Financial Services Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Financial Services", "Value", "Quality"),
    description:
      "Banks, insurers, asset managers and exchanges with strong capital positions and improving returns.",
    thesis:
      "Financials are a cyclical value sector where balance-sheet quality separates the compounders from the value traps.",
    focus:
      "Financial-sector companies above $1B, with a quality and valuation tilt and a balance-sheet screen.",
    risks:
      "Credit cycles, rate volatility and regulation can change earnings quickly.",
    holdings: 25,
    weights: w(15, 35, 30, 20),
    filters: { sectors: [FIN], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLF",
    concentration: 8,
    maxSectorWeight: 100,
  }),
  p({
    slug: "consumer-discretionary-leaders",
    name: "Consumer Discretionary Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Consumer", "Growth"),
    description:
      "Retail, restaurants, travel, autos and consumer platforms with pricing power and healthy unit economics.",
    thesis:
      "Discretionary spending is cyclical, but brands and platforms with share gains can compound through the cycle.",
    focus:
      "Consumer-discretionary companies above $1B, ranked with growth and quality, with a technical trend check.",
    risks:
      "Consumer confidence, input costs and promotional intensity can pressure margins.",
    holdings: 25,
    weights: w(30, 30, 20, 20),
    filters: { sectors: [DISC], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLY",
    concentration: 8,
    maxSectorWeight: 100,
  }),
  p({
    slug: "consumer-staples-leaders",
    name: "Consumer Staples Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Consumer", "Defensive", "Dividend & Income"),
    description:
      "Defensive consumer companies with durable brands, cash generation and pricing power.",
    thesis:
      "Staples can pass through inflation when brands are strong, and their cash flows provide ballast in a downturn.",
    focus:
      "Consumer-staples companies above $1B, ranked on quality and dividend evidence with a valuation check.",
    risks:
      "Private-label competition and slower volume growth can cap upside; defensive sectors lag in strong bull markets.",
    holdings: 20,
    weights: w(15, 40, 25, 20),
    filters: { sectors: [STAPLES], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLP",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "industrials-manufacturing",
    name: "Industrials & Manufacturing",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Industrials", "Quality"),
    description:
      "Industrial automation, machinery, transport and electrical-equipment companies benefiting from reshoring and capex.",
    thesis:
      "Reshoring and infrastructure spending create a durable order book for efficient industrial franchises.",
    focus:
      "Industrials above $1B, ranked with quality and growth, with a technical check for capex-cycle downturns.",
    risks:
      "Industrial cycles, input costs and project delays can hit earnings and multiples together.",
    holdings: 25,
    weights: w(25, 35, 20, 20),
    filters: { sectors: [IND], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLI",
    concentration: 8,
    maxSectorWeight: 100,
  }),
  p({
    slug: "energy-leaders",
    name: "Energy Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Energy & Clean Energy", "Value", "Dividend & Income"),
    description:
      "Oil and gas producers, services and infrastructure companies with disciplined capital allocation.",
    thesis:
      "Energy remains a cash-return sector; discipline and low-cost reserves matter more than headline production growth.",
    focus:
      "Energy companies above $1B, ranked with quality and valuation; free-cash-flow and balance-sheet metrics carry weight.",
    risks:
      "Commodity prices dominate returns; a sustained oil decline can pressure cash flows and dividends.",
    holdings: 20,
    weights: w(15, 30, 35, 20),
    filters: { sectors: [ENERGY], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLE",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "utilities-power",
    name: "Utilities & Power",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Energy & Clean Energy", "Infrastructure", "Defensive"),
    description:
      "Regulated utilities and power producers with rate-base growth and rising electricity demand.",
    thesis:
      "Data-centre and electrification demand are turning utilities from bond proxies into modest growth compounders.",
    focus:
      "Utilities above $1B, ranked with quality and valuation; the weighting method favours lower-volatility names.",
    risks:
      "Rate sensitivity, regulation and weather can drive earnings and multiples.",
    holdings: 20,
    weights: w(15, 35, 25, 25),
    filters: { sectors: [UTIL], minMarketCap: 1e9, minCoverage: 0.5 },
    benchmark: "XLU",
    weighting: "lowVolatility",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "communication-services",
    name: "Communication Services",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "AI & Technology", "Consumer"),
    description:
      "Platforms, streaming, telecom and media companies with network effects or recurring connectivity revenue.",
    thesis:
      "Communication services combines some of the market's strongest platforms with slower, cash-generative telecoms.",
    focus:
      "Communication-services companies above $1B, ranked on growth, quality and technical evidence.",
    risks:
      "Advertising cycles, content spending and regulation can create sharp dispersion.",
    holdings: 20,
    weights: w(30, 30, 20, 20),
    filters: { sectors: [COMM], minMarketCap: 1e9, minCoverage: 0.55 },
    benchmark: "XLC",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "materials-mining",
    name: "Materials & Mining",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Energy & Clean Energy", "Value"),
    description:
      "Chemicals, metals, miners and construction materials tied to electrification and infrastructure.",
    thesis:
      "Electrification and reshoring are metals-intensive, and supply constraints can support pricing through the cycle.",
    focus:
      "Materials companies above $1B, ranked with valuation and quality; cyclical peak margins are penalised.",
    risks:
      "Commodity prices, energy costs and China demand are the dominant swing factors.",
    holdings: 20,
    weights: w(15, 30, 35, 20),
    filters: { sectors: [MAT], minMarketCap: 1e9, minCoverage: 0.5 },
    benchmark: "XLB",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "us-listed-banking-leaders",
    name: "US-Listed Banking Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Financial Services", "Value", "Dividend & Income"),
    description:
      "US-listed banks and thrifts, including NYSE/Nasdaq-listed ADRs, screened on capital, deposit franchises and returns.",
    thesis:
      "Bank returns are driven by deposit quality and credit discipline; the best franchises compound book value through cycles.",
    focus:
      "Banking-industry companies above $500M, ranked on quality and valuation with a balance-sheet screen.",
    risks:
      "Credit losses, deposit competition and rate changes can pressure margins and capital.",
    holdings: 15,
    weights: w(10, 35, 35, 20),
    filters: {
      industries: ["Banks"],
      minMarketCap: 10e9,
      minCoverage: 0.45,
    },
    benchmark: "XLF",
    concentration: 10,
    maxSectorWeight: 100,
    minimumInvestment: 1000,
  }),
  p({
    slug: "insurance-leaders",
    name: "Insurance Leaders",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Financial Services", "Value", "Quality"),
    description:
      "P&C, life and specialty insurers with underwriting discipline and strong capital returns.",
    thesis:
      "Insurance is a spread business; disciplined underwriting and capital allocation separate the long-term compounders.",
    focus:
      "Insurance-industry companies above $500M, ranked on quality and valuation, with a technical trend check.",
    risks:
      "Catastrophe losses, reserve development and investment yields drive results.",
    holdings: 15,
    weights: w(10, 40, 30, 20),
    filters: {
      industries: ["Insurance"],
      minMarketCap: 500e6,
      minCoverage: 0.45,
    },
    benchmark: "XLF",
    concentration: 10,
    maxSectorWeight: 100,
  }),
  p({
    slug: "aerospace-defence",
    name: "Aerospace & Defence",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Industrials", "Emerging Technologies"),
    description:
      "Aerospace primes, defence electronics and space suppliers with multi-year backlogs.",
    thesis:
      "Defence budgets and commercial aircraft demand give the sector unusually visible revenue, but execution is the differentiator.",
    focus:
      "Aerospace and defence companies above $1B, ranked on quality, growth and technical evidence.",
    risks:
      "Programme delays, fixed-price contracts and budget politics can hit margins.",
    holdings: 15,
    weights: w(25, 35, 20, 20),
    filters: {
      industries: ["Aerospace & Defense"],
      minMarketCap: 1e9,
      minCoverage: 0.45,
    },
    benchmark: "XLI",
    concentration: 11,
    maxSectorWeight: 100,
  }),
  p({
    slug: "software-saas",
    name: "Software & SaaS",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "AI & Technology", "Growth"),
    description:
      "Application software, infrastructure software and SaaS platforms with recurring revenue and strong retention.",
    thesis:
      "Recurring revenue and high gross margins make software one of the best business models in the market when growth is durable.",
    focus:
      "Software and SaaS companies above $1B, ranked with growth and quality; pre-profit story stocks are excluded where possible.",
    risks:
      "Seat-based growth is slowing, AI can compress pricing, and valuations remain sensitive to rates.",
    holdings: 20,
    weights: w(35, 35, 15, 15),
    filters: {
      industries: ["Software"],
      minMarketCap: 1e9,
      minCoverage: 0.5,
    },
    benchmark: "XLK",
    concentration: 9,
    maxSectorWeight: 100,
  }),
  p({
    slug: "semiconductor-equipment",
    name: "Semiconductor Equipment",
    primaryCategory: "Sector",
    strategyType: "Sector",
    tags: tags("Sector", "Semiconductors", "AI & Technology", "Growth"),
    description:
      "The equipment, materials and metrology companies that make leading-edge chip manufacturing possible.",
    thesis:
      "Every new fab and process node requires more equipment and materials intensity, giving the supply chain a structural tailwind.",
    focus:
      "Semiconductor-equipment and materials names, ranked with growth and quality; the basket is deliberately narrower than broad semis.",
    risks:
      "Capex cycles and export controls can create sharp air pockets.",
    holdings: 15,
    weights: w(35, 30, 15, 20),
    filters: {
      industries: ["Semiconductor Equipment & Materials"],
      minMarketCap: 1e9,
      minCoverage: 0.45,
    },
    benchmark: "XLK",
    concentration: 12,
    maxSectorWeight: 100,
  }),

  // Fundamental
  p({
    slug: "high-roic-compounders",
    name: "High ROIC Compounders",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Mega Cap"),
    description:
      "Companies earning high returns on invested capital with the balance sheet and cash flow to reinvest.",
    thesis:
      "A high ROIC that is sustained by a moat is the cleanest engine of long-term intrinsic-value compounding.",
    focus:
      "Research-covered companies with high ROIC, positive free cash flow and manageable leverage, ranked on quality and growth.",
    risks:
      "High-quality names often carry premium multiples; ROIC can mean-revert when competition catches up.",
    holdings: 20,
    weights: w(20, 40, 20, 20),
    filters: { researchOnly: true, minRoce: 0.12, minMarketCap: 2e9, minCoverage: 0.65 },
    concentration: 8,
    maxSectorWeight: 30,
    minimumInvestment: 10000,
  }),
  p({
    slug: "consistent-revenue-growers",
    name: "Consistent Revenue Growers",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Growth", "Quality"),
    description:
      "Companies with durable top-line growth, positive cash conversion and a repeatable demand engine.",
    thesis:
      "Revenue growth is the raw material for everything else; consistency matters more than a single explosive year.",
    focus:
      "Research-covered names with positive revenue growth and quality evidence, ranked with a growth-heavy mix.",
    risks:
      "Growth can decelerate quickly; the portfolio may pay up for consistency.",
    holdings: 20,
    weights: w(40, 25, 15, 20),
    filters: { researchOnly: true, minRevenueGrowth: 0.05, minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 8,
    maxSectorWeight: 32,
  }),
  p({
    slug: "free-cash-flow-leaders",
    name: "Free Cash Flow Leaders",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Value"),
    description:
      "High free-cash-flow converters with the flexibility to reinvest, pay down debt or return capital.",
    thesis:
      "Cash flow is harder to manipulate than earnings and is the ultimate source of shareholder returns.",
    focus:
      "Research-covered companies with strong FCF margins, reasonable leverage and positive quality scores.",
    risks:
      "Cash conversion can be cyclical; capital-intensive businesses may need to reinvest heavily.",
    holdings: 20,
    weights: w(15, 40, 25, 20),
    filters: { researchOnly: true, minFcfMargin: 0.1, minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "margin-expansion-leaders",
    name: "Margin Expansion Leaders",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Growth"),
    description:
      "Companies showing improving operating economics, pricing power and operating leverage.",
    thesis:
      "Margin expansion is evidence that growth is translating into economics rather than being bought with discounts.",
    focus:
      "Research-covered names with positive ROIC trend and operating-margin evidence, ranked with quality and growth.",
    risks:
      "Input-cost reversals and competitive pricing can halt margin progress.",
    holdings: 20,
    weights: w(25, 35, 20, 20),
    filters: {
      researchOnly: true,
      minRoe: 0.08,
      minRoicTrend: 0,
      minMarketCap: 1e9,
      minCoverage: 0.6,
    },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "balance-sheet-strength",
    name: "Balance Sheet Strength",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Defensive"),
    description:
      "Low-leverage companies with strong liquidity and the capacity to invest through a downturn.",
    thesis:
      "In a credit-sensitive market, the companies that do not need capital markets can keep compounding while others retrench.",
    focus:
      "Research-covered companies with low net debt/EBITDA, strong quality scores and positive free cash flow.",
    risks:
      "Balance-sheet strength can be rewarded slowly; the portfolio may lag in a high-growth, low-rate market.",
    holdings: 20,
    weights: w(10, 45, 25, 20),
    filters: {
      researchOnly: true,
      maxNetDebtEbitda: 2,
      minMarketCap: 1e9,
      minCoverage: 0.6,
    },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "sustainable-earnings-growth",
    name: "Sustainable Earnings Growth",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Growth", "Quality"),
    description:
      "Companies whose earnings growth is supported by revenue, margins and returns rather than one-off items.",
    thesis:
      "Earnings quality matters: growth backed by cash flow and returns is more likely to persist than accounting-driven growth.",
    focus:
      "Research-covered names with revenue growth, positive margins and quality evidence, ranked with a balanced mix.",
    risks:
      "Earnings revisions can turn quickly; the portfolio is not a pure defensive allocation.",
    holdings: 20,
    weights: w(35, 30, 15, 20),
    filters: { researchOnly: true, minRevenueGrowth: 0.03, minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "capital-allocation-excellence",
    name: "Capital Allocation Excellence",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Dividend & Income"),
    description:
      "Management teams with a record of disciplined reinvestment, buybacks and balance-sheet management.",
    thesis:
      "Over time, the compounding difference between companies is often the quality of capital allocation.",
    focus:
      "Research-covered names with high quality scores, healthy FCF and positive ROIC trend; the rank rewards cash returns and reinvestment.",
    risks:
      "Buybacks can destroy value when done at high prices; capital-allocation records are backward-looking.",
    holdings: 20,
    weights: w(15, 40, 25, 20),
    filters: {
      researchOnly: true,
      minRoce: 0.1,
      minRoicTrend: 0,
      minMarketCap: 2e9,
      minCoverage: 0.65,
    },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "profitable-growth-25",
    name: "Profitable Growth 25",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Growth", "Quality"),
    description:
      "A 25-stock portfolio of companies that combine above-market growth with positive profitability.",
    thesis:
      "Profitable growth is scarcer and more durable than growth at any cost; it can compound without repeated dilution.",
    focus:
      "Research-covered companies with positive revenue growth, positive margins and a quality score floor.",
    risks:
      "The portfolio can be caught between value and growth styles; high expectations leave little room for misses.",
    holdings: 25,
    weights: w(35, 30, 15, 20),
    filters: { researchOnly: true, minRevenueGrowth: 0.05, minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "undervalued-quality-stocks",
    name: "Undervalued Quality Stocks",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Value", "Quality"),
    description:
      "Quality businesses trading at a discount to their own history and the market.",
    thesis:
      "The best risk-adjusted returns often come from good businesses whose multiples have temporarily de-rated.",
    focus:
      "Research-covered names with high quality and valuation scores, positive cash flow and a technical floor.",
    risks:
      "A low multiple can be a warning rather than an opportunity; the quality screen reduces but does not eliminate value traps.",
    holdings: 20,
    weights: w(15, 35, 35, 15),
    filters: { researchOnly: true, minComposite: 45, minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "long-term-compounders",
    name: "Long-Term Compounders",
    primaryCategory: "Fundamental",
    strategyType: "Fundamental",
    tags: tags("Fundamental", "Quality", "Mega Cap"),
    description:
      "A concentrated quality core designed to be held through cycles rather than traded around them.",
    thesis:
      "The simplest long-term edge is owning a small set of high-return businesses and letting reinvestment compound.",
    focus:
      "Research-covered large caps with high ROIC, strong margins and consistent cash generation; turnover is deliberately low.",
    risks:
      "Concentration and valuation risk; patience is required when quality is out of favour.",
    holdings: 20,
    weights: w(20, 45, 20, 15),
    filters: { researchOnly: true, minRoce: 0.12, minMarketCap: 5e9, minCoverage: 0.65 },
    concentration: 9,
    maxSectorWeight: 30,
    rebalanceFrequency: "Quarterly",
    minimumInvestment: 25000,
  }),

  // Technical & momentum
  p({
    slug: "us-price-momentum-20",
    name: "US Price Momentum 20",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Large Cap"),
    description:
      "The 20 US companies with the strongest combination of relative strength and trend confirmation.",
    thesis:
      "Price momentum persists over intermediate horizons as information diffuses and flows chase recent winners.",
    focus:
      "Technical score carries 45% of the rank, supported by growth and valuation. A liquidity screen keeps the basket implementable.",
    risks:
      "Momentum crashes are violent when leadership reverses; turnover is higher than a core portfolio.",
    holdings: 20,
    weights: w(15, 15, 25, 45),
    filters: { minMarketCap: 1e9, minCoverage: 0.45, minPriceVs200dma: -0.1 },
    concentration: 8,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "relative-strength-leaders",
    name: "Relative Strength Leaders",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Growth"),
    description:
      "Companies beating the market over 3, 6 and 12 months with constructive moving-average structure.",
    thesis:
      "Relative strength is a cleaner momentum signal than absolute price because it isolates company-specific leadership from the market beta.",
    focus:
      "A technical-heavy rank with a minimum 1Y return and positive 200-day trend; quality is used as a tie-breaker.",
    risks:
      "High-beta leadership can reverse sharply; the portfolio is not defensive.",
    holdings: 20,
    weights: w(10, 15, 25, 50),
    filters: { minMarketCap: 1e9, minReturn1y: 0, minCoverage: 0.4 },
    concentration: 8,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "52-week-high-breakout",
    name: "52-Week High Breakout",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Growth"),
    description:
      "Companies trading near 52-week highs with positive trend and relative-volume confirmation.",
    thesis:
      "New highs are not automatically expensive; they often mark the beginning of a new leg when fundamentals confirm.",
    focus:
      "A technical breakout screen with price near the 52-week high, positive 50/200-day trend and growth confirmation.",
    risks:
      "False breakouts and sharp mean reversion are common; the portfolio can have high turnover.",
    holdings: 15,
    weights: w(10, 10, 25, 55),
    filters: {
      minMarketCap: 750e6,
      minPriceVs50dma: 0,
      maxDistFrom52wHigh: -0.03,
      minCoverage: 0.35,
    },
    concentration: 10,
    maxSectorWeight: 40,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "trend-following-us-equities",
    name: "Trend Following US Equities",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Multi-Factor"),
    description:
      "A systematic trend basket using moving-average structure, relative strength and a quality floor.",
    thesis:
      "Trend following works because markets trend more than random chance would suggest, but risk control is essential.",
    focus:
      "Technical and quality evidence dominate; the portfolio requires a constructive 200-day trend and avoids the weakest balance sheets.",
    risks:
      "Whipsaw losses in range-bound markets; trend models can underperform for years.",
    holdings: 20,
    weights: w(10, 20, 20, 50),
    filters: {
      minMarketCap: 1e9,
      minPriceVs200dma: 0,
      minCoverage: 0.45,
    },
    concentration: 8,
    maxSectorWeight: 32,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "moving-average-momentum",
    name: "Moving Average Momentum",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum"),
    description:
      "Companies with price above key moving averages and a rising 200-day trend.",
    thesis:
      "Moving averages filter noise and keep the portfolio aligned with the primary trend.",
    focus:
      "A rules-based 50/200-day trend screen, ranked with technical and quality scores.",
    risks:
      "Lagging signals can enter late and exit late; sideways markets produce false starts.",
    holdings: 20,
    weights: w(10, 15, 20, 55),
    filters: {
      minMarketCap: 1e9,
      minPriceVs50dma: 0,
      minPriceVs200dma: 0,
      minCoverage: 0.4,
    },
    concentration: 8,
    maxSectorWeight: 32,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "earnings-trend-momentum",
    name: "Earnings Trend Momentum",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Growth"),
    description:
      "Companies with positive fundamental-growth evidence and confirming price trends.",
    thesis:
      "Fundamental improvement is more useful when the market is already validating it; combining growth and trend evidence can improve persistence.",
    focus:
      "Growth and technical scores dominate, with a quality floor and a positive revenue-growth requirement. This is a growth-and-trend screen, not an earnings-surprise database.",
    risks:
      "Earnings momentum can fade quickly; the portfolio is sensitive to guidance and macro shocks.",
    holdings: 20,
    weights: w(30, 15, 15, 40),
    filters: { minMarketCap: 750e6, minRevenueGrowth: 0.02, minCoverage: 0.4 },
    concentration: 8,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "sector-rotation-leaders",
    name: "Sector Rotation Leaders",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Multi-Factor"),
    description:
      "A cross-sector basket that favours companies in sectors with improving relative strength.",
    thesis:
      "Sector leadership persists for months; a rotation-aware portfolio can avoid fighting the dominant trend.",
    focus:
      "Technical and growth evidence with sector dispersion constraints, so the basket does not become a single-sector bet.",
    risks:
      "Rotation can reverse abruptly around macro events; sector concentration controls are essential.",
    holdings: 20,
    weights: w(20, 20, 20, 40),
    filters: { minMarketCap: 1e9, minCoverage: 0.45 },
    concentration: 7,
    maxSectorWeight: 25,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "high-relative-volume-stocks",
    name: "High Relative Volume Stocks",
    primaryCategory: "Technical",
    strategyType: "Technical",
    tags: tags("Technical", "Momentum"),
    description:
      "Liquid companies attracting abnormal volume alongside positive price trends.",
    thesis:
      "Volume confirms price moves; unusual accumulation can precede continued relative strength.",
    focus:
      "A technical ranking with a liquidity floor and positive trend; volume and trend evidence are prioritised.",
    risks:
      "Volume spikes can be event-driven and reverse quickly; the portfolio can be noisy.",
    holdings: 20,
    weights: w(15, 15, 20, 50),
    filters: {
      minMarketCap: 1e9,
      minRelativeVolume: 1.15,
      minPriceVs50dma: -0.05,
      minCoverage: 0.4,
    },
    concentration: 8,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "momentum-quality-blend",
    name: "Momentum Quality Blend",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Quality"),
    description:
      "A smoother momentum portfolio that pairs trend evidence with profitability and balance-sheet quality.",
    thesis:
      "Quality can cushion momentum crashes because profitable trend leaders are less likely to be speculative stories.",
    focus:
      "Technical and quality scores carry the rank; the portfolio avoids negative-margin names and weak balance sheets.",
    risks:
      "The quality filter can dilute momentum returns in a speculative rally.",
    holdings: 20,
    weights: w(15, 30, 20, 35),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, minFcfMargin: 0 },
    concentration: 8,
    maxSectorWeight: 32,
  }),
  p({
    slug: "tactical-momentum-30",
    name: "Tactical Momentum 30",
    primaryCategory: "Technical",
    strategyType: "Momentum",
    tags: tags("Technical", "Momentum", "Multi-Cap"),
    description:
      "A broader tactical basket with 30 momentum leaders and tighter position limits.",
    thesis:
      "More names and smaller positions preserve the momentum signal while reducing single-stock blow-up risk.",
    focus:
      "Technical and valuation evidence, with a broader universe and a strict 6% single-stock cap.",
    risks:
      "A broader momentum basket can behave like a high-beta market proxy; crashes remain possible.",
    holdings: 30,
    weights: w(15, 20, 25, 40),
    filters: { minMarketCap: 750e6, minCoverage: 0.4 },
    concentration: 6,
    maxSectorWeight: 30,
    rebalanceFrequency: "Monthly",
  }),

  // Single-factor
  p({
    slug: "pure-value-portfolio",
    name: "Pure Value Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Value",
    tags: tags("Single-Factor", "Value"),
    description:
      "The cheapest eligible companies by the Stockmonk valuation score, with a liquidity and quality floor.",
    thesis:
      "Valuation mean reversion is one of the oldest factor premia; discipline is required to avoid value traps.",
    focus:
      "Valuation gets 70% of the rank. A minimum quality and coverage floor removes the weakest balance sheets.",
    risks:
      "Deep value can stay cheap for years; cyclical earnings can make multiples look deceptive.",
    holdings: 30,
    weights: w(10, 10, 70, 10),
    filters: { minMarketCap: 1e9, minCoverage: 0.55 },
    concentration: 6,
    maxSectorWeight: 30,
  }),
  p({
    slug: "pure-growth-portfolio",
    name: "Pure Growth Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Growth",
    tags: tags("Single-Factor", "Growth"),
    description:
      "The highest-growth companies in the coverage universe, filtered for liquidity and score coverage.",
    thesis:
      "Growth is a distinct factor, and the fastest growers can compound revenue far ahead of the market.",
    focus:
      "Growth receives 70% of the rank, with a minimal quality check to avoid the most fragile balance sheets.",
    risks:
      "High-growth names are duration-sensitive and can de-rate sharply; earnings disappointment is punished.",
    holdings: 30,
    weights: w(70, 10, 10, 10),
    filters: { minMarketCap: 500e6, minCoverage: 0.4 },
    concentration: 6,
    maxSectorWeight: 35,
  }),
  p({
    slug: "pure-quality-portfolio",
    name: "Pure Quality Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Quality",
    tags: tags("Single-Factor", "Quality"),
    description:
      "The highest-quality businesses by returns, margins and balance-sheet evidence.",
    thesis:
      "Quality is a defensive factor that can also compound: profitable businesses need less external capital.",
    focus:
      "Quality carries 70% of the rank, with a valuation check to avoid the most extreme multiples.",
    risks:
      "Quality can be expensive and may lag in a junk rally or a deep-value rotation.",
    holdings: 30,
    weights: w(10, 70, 10, 10),
    filters: { minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 6,
    maxSectorWeight: 30,
  }),
  p({
    slug: "pure-momentum-portfolio",
    name: "Pure Momentum Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Momentum",
    tags: tags("Single-Factor", "Momentum"),
    description:
      "The strongest price trends in the US universe, with no style or sector preference.",
    thesis:
      "Momentum is a distinct, persistent factor; a pure implementation is the cleanest way to own it.",
    focus:
      "Technical score gets 70% of the rank, with a liquidity screen and a positive trend requirement.",
    risks:
      "Momentum crashes are the main risk; the portfolio can be volatile and turnover-heavy.",
    holdings: 30,
    weights: w(10, 10, 10, 70),
    filters: { minMarketCap: 750e6, minCoverage: 0.35 },
    concentration: 6,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "low-volatility-portfolio",
    name: "Low Volatility Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Defensive",
    tags: tags("Single-Factor", "Defensive", "Quality"),
    description:
      "A lower-beta basket of profitable companies with smaller historical drawdowns.",
    thesis:
      "The low-volatility anomaly persists because investors overpay for lottery-like outcomes.",
    focus:
      "Quality and technical evidence with inverse-volatility weighting; the portfolio favours stable cash generators.",
    risks:
      "Low-volatility baskets can lag in strong bull markets and may be concentrated in defensive sectors.",
    holdings: 25,
    weights: w(10, 35, 20, 35),
    filters: { minMarketCap: 2e9, minCoverage: 0.55 },
    weighting: "lowVolatility",
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "earnings-yield-leaders",
    name: "Earnings Yield Leaders",
    primaryCategory: "Single-Factor",
    strategyType: "Value",
    tags: tags("Single-Factor", "Value", "Quality"),
    description:
      "Companies with high earnings yield and positive quality evidence, not just low multiples.",
    thesis:
      "Earnings yield is a cleaner value signal than P/E because it handles zero-earnings cases and compares directly with bond yields.",
    focus:
      "Valuation and quality dominate, with positive earnings and a free-cash-flow check.",
    risks:
      "Cyclical peak earnings can make yields look high just before a downturn.",
    holdings: 25,
    weights: w(10, 30, 45, 15),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, maxPe: 30 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "high-roe-portfolio",
    name: "High ROE Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Quality",
    tags: tags("Single-Factor", "Quality"),
    description:
      "Companies generating high returns on equity with a quality and leverage check.",
    thesis:
      "ROE captures how efficiently a company turns shareholder capital into profit, though leverage can distort it.",
    focus:
      "Quality receives 50% of the rank, with a balance-sheet screen to avoid leverage-driven ROE.",
    risks:
      "High ROE can mean-revert and can be inflated by buybacks or leverage.",
    holdings: 25,
    weights: w(15, 50, 15, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, minRoe: 0.12 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "high-roic-portfolio",
    name: "High ROIC Portfolio",
    primaryCategory: "Single-Factor",
    strategyType: "Quality",
    tags: tags("Single-Factor", "Quality"),
    description:
      "Companies earning high returns on invested capital, the cleanest measure of business quality.",
    thesis:
      "ROIC compares operating profit with the capital required to generate it, making it harder to flatter with leverage.",
    focus:
      "Quality and growth evidence, with a high ROIC threshold and positive free cash flow.",
    risks:
      "ROIC can be cyclical and accounting-sensitive; the portfolio may concentrate in asset-light sectors.",
    holdings: 25,
    weights: w(20, 50, 15, 15),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minRoce: 0.12 },
    concentration: 7,
    maxSectorWeight: 32,
  }),
  p({
    slug: "dividend-growth-leaders",
    name: "Dividend Growth Leaders",
    primaryCategory: "Single-Factor",
    strategyType: "Dividend & Income",
    tags: tags("Single-Factor", "Dividend & Income", "Quality"),
    description:
      "Companies with a dividend, positive cash flow and the quality to keep raising the payout.",
    thesis:
      "Dividend growth is a signal of confidence and cash-flow durability, and it compounds faster than a static yield.",
    focus:
      "Dividend yield, quality and free cash flow drive the rank; the weighting method tilts toward income.",
    risks:
      "High yield can signal distress; dividend growth can slow when payout ratios become stretched.",
    holdings: 20,
    weights: w(10, 35, 20, 35),
    filters: { minMarketCap: 1e9, minDividendYield: 0.015, minCoverage: 0.55 },
    weighting: "dividend",
    concentration: 8,
    maxSectorWeight: 28,
  }),
  p({
    slug: "small-cap-momentum",
    name: "Small-Cap Momentum",
    primaryCategory: "Single-Factor",
    strategyType: "Momentum",
    tags: tags("Single-Factor", "Momentum", "Small & Mid Cap"),
    description:
      "Small-cap companies with strong relative strength and improving technical evidence.",
    thesis:
      "Small caps can move faster when a trend is confirmed, and the momentum premium is often stronger in less efficient segments.",
    focus:
      "Technical and growth scores, restricted to companies below $10B with a liquidity floor.",
    risks:
      "Small caps are less liquid and more volatile; momentum reversals can be severe.",
    holdings: 20,
    weights: w(20, 10, 25, 45),
    filters: { minMarketCap: 300e6, maxMarketCap: 10e9, minCoverage: 0.35 },
    marketCapFocus: "Small Cap",
    concentration: 8,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
    minimumInvestment: 1000,
  }),

  // Multi-factor
  p({
    slug: "quality-momentum",
    name: "Quality + Momentum",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Quality", "Momentum"),
    description:
      "A blend of high-quality businesses with improving price trends, designed to smooth the momentum cycle.",
    thesis:
      "Quality and momentum are complementary: quality reduces the risk of a value trap, momentum avoids owning quality that is out of favour.",
    focus:
      "Quality 35%, technical 25%, growth 25%, valuation 15%. The portfolio requires both quality and trend evidence.",
    risks:
      "The blend can underperform a pure momentum basket in a speculative rally and a pure quality basket in a defensive market.",
    holdings: 25,
    weights: w(25, 35, 15, 25),
    filters: { minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "value-momentum",
    name: "Value + Momentum",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Value", "Momentum"),
    description:
      "Cheap companies with improving price trends, a combination that can avoid both value traps and crowded momentum.",
    thesis:
      "Value without a catalyst can stay cheap; momentum confirms that the market is beginning to re-rate the evidence.",
    focus:
      "Valuation 35%, technical 30%, quality 20%, growth 15%. A quality floor removes the weakest cheap names.",
    risks:
      "The combination can be whipsawed when a value rally lacks momentum or momentum reverses into value.",
    holdings: 25,
    weights: w(15, 20, 35, 30),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, maxPe: 40 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "growth-quality",
    name: "Growth + Quality",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Growth", "Quality"),
    description:
      "High-growth companies that also pass a rigorous quality and balance-sheet screen.",
    thesis:
      "Growth is more durable when it is profitable and funded internally; quality separates compounders from promotion.",
    focus:
      "Growth 40%, quality 40%, valuation 10%, technical 10%. A quality floor and coverage screen are required.",
    risks:
      "The portfolio can be expensive and vulnerable to growth disappointments; it is not a value allocation.",
    holdings: 25,
    weights: w(40, 40, 10, 10),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minRevenueGrowth: 0.03 },
    concentration: 7,
    maxSectorWeight: 32,
  }),
  p({
    slug: "quality-value-momentum",
    name: "Quality + Value + Momentum",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Quality", "Value", "Momentum"),
    description:
      "A three-factor portfolio that looks for good businesses, reasonable prices and confirmation from the tape.",
    thesis:
      "Each factor covers another's blind spot: quality avoids junk, value avoids crowded quality, momentum avoids cheap but stagnant.",
    focus:
      "Quality 35%, valuation 30%, technical 25%, growth 10%, with a coverage floor and sector caps.",
    risks:
      "A three-factor blend can be diversified into mediocrity; no single factor is allowed to dominate.",
    holdings: 25,
    weights: w(10, 35, 30, 25),
    filters: { minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "growth-momentum-profitability",
    name: "Growth + Momentum + Profitability",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Growth", "Momentum", "Quality"),
    description:
      "Fast-growing, profitable companies with price confirmation and a quality overlay.",
    thesis:
      "The strongest combination in a growth market is a profitable grower whose shares are already in demand.",
    focus:
      "Growth 35%, technical 30%, quality 25%, valuation 10%, with positive revenue growth and a quality floor.",
    risks:
      "The portfolio can be high-beta and vulnerable to a growth-factor unwind.",
    holdings: 25,
    weights: w(35, 25, 10, 30),
    filters: { minMarketCap: 750e6, minCoverage: 0.55, minRevenueGrowth: 0.03 },
    concentration: 7,
    maxSectorWeight: 35,
  }),
  p({
    slug: "low-volatility-quality",
    name: "Low Volatility + Quality",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Defensive", "Quality"),
    description:
      "A defensive blend of high-quality, lower-volatility businesses with a valuation check.",
    thesis:
      "Quality and low volatility overlap in stable cash generators, creating a smoother compounding path.",
    focus:
      "Quality 45%, technical 25%, valuation 15%, growth 15%, with inverse-volatility weighting.",
    risks:
      "Defensive portfolios can lag in a strong risk-on market and may be concentrated in a few sectors.",
    holdings: 25,
    weights: w(15, 45, 15, 25),
    filters: { minMarketCap: 2e9, minCoverage: 0.55 },
    weighting: "lowVolatility",
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "earnings-price-momentum",
    name: "Earnings + Price Momentum",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Momentum", "Growth"),
    description:
      "Companies with improving earnings and confirming price momentum.",
    thesis:
      "Fundamental momentum and price momentum reinforce each other when the market is gradually repricing better results.",
    focus:
      "Growth and technical scores dominate, with a quality floor and positive revenue-growth requirement.",
    risks:
      "Earnings momentum can reverse around guidance cuts; the portfolio can be high-turnover.",
    holdings: 25,
    weights: w(35, 15, 15, 35),
    filters: { minMarketCap: 750e6, minCoverage: 0.45, minRevenueGrowth: 0.02 },
    concentration: 7,
    maxSectorWeight: 35,
    rebalanceFrequency: "Monthly",
  }),
  p({
    slug: "fundamental-technical-leaders",
    name: "Fundamental + Technical Leaders",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Fundamental", "Technical"),
    description:
      "A balanced portfolio that pairs fundamental quality and growth with technical trend evidence.",
    thesis:
      "Fundamentals tell you what to own; technicals help decide when the market agrees.",
    focus:
      "Quality 30%, technical 30%, growth 20%, valuation 20%, with a coverage floor.",
    risks:
      "The blend can be late to both fundamental inflections and momentum breakouts.",
    holdings: 25,
    weights: w(20, 30, 20, 30),
    filters: { minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "multi-factor-alpha-25",
    name: "Multi-Factor Alpha 25",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Quantitative"),
    description:
      "A 25-stock multi-factor portfolio with a balanced factor budget and a strict concentration limit.",
    thesis:
      "Diversifying across factors is more robust than betting on one, especially when the ranking is rules-based.",
    focus:
      "Growth 25%, quality 30%, valuation 25%, technical 20%, with a 7% single-stock cap.",
    risks:
      "Factor diversification can dilute the strongest signal; the portfolio may be close to a broad core.",
    holdings: 25,
    weights: w(25, 30, 25, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "balanced-factor-leaders",
    name: "Balanced Factor Leaders",
    primaryCategory: "Multi-Factor",
    strategyType: "Multi-Factor",
    tags: tags("Multi-Factor", "Quantitative", "Mega Cap"),
    description:
      "A broad 30-stock balanced factor portfolio with sector and position limits.",
    thesis:
      "A balanced factor core is designed to participate across styles without taking a single-factor bet.",
    focus:
      "Equal weights across the four Stockmonk scores, with a large-cap liquidity screen and a 7% cap.",
    risks:
      "The portfolio is intentionally benchmark-like and may not deliver a large active return.",
    holdings: 30,
    weights: w(25, 25, 25, 25),
    filters: { minMarketCap: 5e9, minCoverage: 0.65 },
    marketCapFocus: "Mega Cap",
    concentration: 7,
    maxSectorWeight: 28,
  }),

  // Growth
  p({
    slug: "high-growth-compounders",
    name: "High Growth Compounders",
    primaryCategory: "Growth",
    strategyType: "Growth",
    tags: tags("Growth", "Quality", "AI & Technology"),
    description:
      "Fast-growing companies with enough quality and cash flow to fund their own expansion.",
    thesis:
      "The best growth compounders reinvest at high returns instead of relying on external capital.",
    focus:
      "Growth 50%, quality 25%, valuation 10%, technical 15%, with a revenue-growth floor and quality check.",
    risks:
      "High expectations and duration sensitivity; a growth slowdown can trigger a sharp de-rating.",
    holdings: 20,
    weights: w(50, 25, 10, 15),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, minRevenueGrowth: 0.06 },
    concentration: 8,
    maxSectorWeight: 35,
  }),
  p({
    slug: "next-generation-technology",
    name: "Next Generation Technology",
    primaryCategory: "Growth",
    strategyType: "Growth",
    tags: tags("Growth", "AI & Technology", "Emerging Technologies"),
    description:
      "Emerging technology leaders across AI, software, semiconductors and digital infrastructure.",
    thesis:
      "Technology platforms with a durable customer relationship can grow faster than the market for longer than expected.",
    focus:
      "Technology and communication names with high growth and quality, ranked with a technical filter.",
    risks:
      "Valuation and disruption risk; emerging technology leaders can become obsolete quickly.",
    holdings: 20,
    weights: w(45, 25, 15, 15),
    filters: {
      sectors: [TECH, COMM],
      minMarketCap: 1e9,
      minCoverage: 0.5,
      minRevenueGrowth: 0.05,
    },
    benchmark: "QQQ",
    concentration: 8,
    maxSectorWeight: 80,
  }),
  p({
    slug: "profitable-growth-leaders",
    name: "Profitable Growth Leaders",
    primaryCategory: "Growth",
    strategyType: "Growth",
    tags: tags("Growth", "Quality", "Fundamental"),
    description:
      "Companies combining above-market growth with positive margins and returns on capital.",
    thesis:
      "Profitable growth is the highest-quality form of growth because it does not depend on perpetual external funding.",
    focus:
      "Growth 40%, quality 35%, valuation 10%, technical 15%, with positive cash flow and a quality floor.",
    risks:
      "The portfolio can be expensive; profitability may attract competition.",
    holdings: 20,
    weights: w(40, 35, 10, 15),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minRevenueGrowth: 0.04, minFcfMargin: 0.03 },
    concentration: 8,
    maxSectorWeight: 32,
  }),
  p({
    slug: "revenue-momentum-leaders",
    name: "Revenue Momentum Leaders",
    primaryCategory: "Growth",
    strategyType: "Growth",
    tags: tags("Growth", "Momentum", "Quantitative"),
    description:
      "Companies combining high revenue growth with improving growth and price evidence.",
    thesis:
      "Persistent revenue growth is the raw material for compounding, especially when quality and market confirmation agree.",
    focus:
      "Growth 50%, quality 20%, valuation 15%, technical 15%, with a high revenue-growth floor. This uses the Stockmonk growth score and reported revenue growth; it does not claim quarter-on-quarter acceleration.",
    risks:
      "High growth can decelerate or be acquisition-driven; the quality screen is essential.",
    holdings: 20,
    weights: w(50, 20, 15, 15),
    filters: { minMarketCap: 750e6, minCoverage: 0.45, minRevenueGrowth: 0.08 },
    concentration: 8,
    maxSectorWeight: 35,
  }),
  p({
    slug: "emerging-leaders-us-listed",
    name: "Emerging Leaders (US-Listed)",
    primaryCategory: "Growth",
    strategyType: "Growth",
    tags: tags("Growth", "Emerging Technologies", "Multi-Cap"),
    description:
      "A US-listed growth basket of emerging leaders across global themes and newer listings.",
    thesis:
      "US listings give investors access to global growth franchises, but the quality and liquidity filters still matter.",
    focus:
      "Growth 35%, quality 30%, valuation 20%, technical 15%, across the full US-listed coverage universe.",
    risks:
      "ADRs and newer listings can have thinner liquidity, governance differences and higher volatility.",
    holdings: 20,
    weights: w(35, 30, 20, 15),
    filters: { minMarketCap: 500e6, minCoverage: 0.45, minRevenueGrowth: 0.05 },
    benchmark: "IWM",
    marketCapFocus: "Multi-Cap",
    concentration: 8,
    maxSectorWeight: 30,
    minimumInvestment: 1000,
  }),

  // Value
  p({
    slug: "deep-value-opportunities",
    name: "Deep Value Opportunities",
    primaryCategory: "Value",
    strategyType: "Value",
    tags: tags("Value", "Single-Factor", "Small & Mid Cap"),
    description:
      "The cheapest companies in the coverage universe with enough liquidity and quality to be investable.",
    thesis:
      "Deep value offers the largest potential re-rating but requires discipline to avoid structurally challenged businesses.",
    focus:
      "Valuation 55%, quality 20%, growth 10%, technical 15%, with a coverage floor and a quality check.",
    risks:
      "Value traps, cyclical peak earnings and balance-sheet risk; the portfolio can be volatile.",
    holdings: 25,
    weights: w(10, 20, 55, 15),
    filters: { minMarketCap: 500e6, minCoverage: 0.5, maxPe: 20 },
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "large-cap-value-leaders",
    name: "Large-Cap Value Leaders",
    primaryCategory: "Value",
    strategyType: "Value",
    tags: tags("Value", "Large Cap", "Quality"),
    description:
      "Large, established businesses trading at reasonable valuations with durable cash generation.",
    thesis:
      "Large-cap value can provide equity exposure with lower valuation risk and a meaningful dividend contribution.",
    focus:
      "Valuation 45%, quality 30%, growth 10%, technical 15%, with a $5B market-cap floor.",
    risks:
      "Large-cap value can lag a growth-led market and may be concentrated in mature industries.",
    holdings: 20,
    weights: w(10, 30, 45, 15),
    filters: { minMarketCap: 5e9, minCoverage: 0.6, maxPe: 35 },
    marketCapFocus: "Large Cap",
    concentration: 8,
    maxSectorWeight: 28,
  }),
  p({
    slug: "undervalued-cash-generators",
    name: "Undervalued Cash Generators",
    primaryCategory: "Value",
    strategyType: "Value",
    tags: tags("Value", "Quality", "Dividend & Income"),
    description:
      "Free-cash-flow-rich companies whose cash generation is not fully reflected in the multiple.",
    thesis:
      "Cash flow is the hardest metric to manipulate and the most direct source of shareholder returns.",
    focus:
      "Valuation 40%, quality 30%, growth 10%, technical 20%, with a positive FCF margin requirement.",
    risks:
      "Cash flow can be cyclical; a cheap multiple may reflect a declining business.",
    holdings: 20,
    weights: w(10, 30, 40, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.55, minFcfMargin: 0.05 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "value-re-rating-candidates",
    name: "Value Re-rating Candidates",
    primaryCategory: "Value",
    strategyType: "Value",
    tags: tags("Value", "Momentum", "Multi-Factor"),
    description:
      "Cheap companies showing early technical improvement, positioned for a potential re-rating.",
    thesis:
      "A valuation gap plus a turning price trend can signal that the market is starting to recognise the evidence.",
    focus:
      "Valuation 45%, growth 15%, quality 20%, technical 20%, with a positive trend requirement.",
    risks:
      "Early trends frequently fail; the portfolio can be whipsawed and may hold falling knives.",
    holdings: 20,
    weights: w(15, 20, 45, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.5, maxPe: 35 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "contrarian-quality-value",
    name: "Contrarian Quality Value",
    primaryCategory: "Value",
    strategyType: "Value",
    tags: tags("Value", "Quality", "Fundamental"),
    description:
      "Quality businesses that are out of favour but still generate strong returns and cash flow.",
    thesis:
      "The best contrarian opportunities are not broken businesses; they are good businesses with temporarily depressed sentiment.",
    focus:
      "Valuation 40%, quality 35%, growth 10%, technical 15%, with a quality floor to avoid distress.",
    risks:
      "Sentiment can stay negative; the portfolio may be early and underperform for extended periods.",
    holdings: 20,
    weights: w(10, 35, 40, 15),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minRoce: 0.08 },
    concentration: 8,
    maxSectorWeight: 30,
  }),

  // Quality & dividend
  p({
    slug: "dividend-quality-leaders",
    name: "Dividend Quality Leaders",
    primaryCategory: "Quality & Dividend",
    strategyType: "Dividend & Income",
    tags: tags("Quality & Dividend", "Dividend & Income", "Defensive"),
    description:
      "Dividend-paying companies screened for quality, cash generation and a sustainable current yield.",
    thesis:
      "Income is more durable when it is supported by cash flow and returns on capital, not just a high headline yield.",
    focus:
      "Dividend yield and quality dominate; the portfolio requires positive free cash flow and manageable leverage. This is a Stockmonk dividend-quality proxy, not the S&P Dividend Aristocrats index and not a 25-year dividend-increase screen.",
    risks:
      "High yield can signal slower growth; dividend cuts are possible in a severe downturn.",
    holdings: 20,
    weights: w(10, 35, 20, 35),
    filters: {
      minMarketCap: 2e9,
      minDividendYield: 0.02,
      minRoce: 0.1,
      minFcfMargin: 0.05,
      maxNetDebtEbitda: 3.5,
      minCoverage: 0.55,
    },
    weighting: "dividend",
    concentration: 8,
    maxSectorWeight: 28,
  }),
  p({
    slug: "dividend-growth-compounders",
    name: "Dividend Growth Compounders",
    primaryCategory: "Quality & Dividend",
    strategyType: "Dividend & Income",
    tags: tags("Quality & Dividend", "Dividend & Income", "Growth"),
    description:
      "Companies with growing dividends, strong cash conversion and the ability to reinvest.",
    thesis:
      "Dividend growth combines income today with a rising payout tomorrow, and it tends to correlate with quality.",
    focus:
      "Quality 35%, growth 20%, valuation 15%, technical 30%, with a dividend requirement and FCF check.",
    risks:
      "Dividend growth can slow; the portfolio may be sensitive to rate changes.",
    holdings: 20,
    weights: w(20, 35, 15, 30),
    filters: { minMarketCap: 1e9, minDividendYield: 0.01, minCoverage: 0.55 },
    weighting: "dividend",
    concentration: 8,
    maxSectorWeight: 28,
  }),
  p({
    slug: "high-quality-cash-generators",
    name: "High-Quality Cash Generators",
    primaryCategory: "Quality & Dividend",
    strategyType: "Quality",
    tags: tags("Quality & Dividend", "Fundamental", "Dividend & Income"),
    description:
      "Businesses with high cash conversion, strong returns and the flexibility to return capital.",
    thesis:
      "Cash generation is the cleanest evidence of quality and the source of dividends, buybacks and reinvestment.",
    focus:
      "Quality 45%, valuation 20%, growth 15%, technical 20%, with a high FCF margin requirement.",
    risks:
      "Cash-rich companies can become complacent; the portfolio may be concentrated in mature sectors.",
    holdings: 20,
    weights: w(15, 45, 20, 20),
    filters: { minMarketCap: 1e9, minCoverage: 0.6, minFcfMargin: 0.08 },
    concentration: 8,
    maxSectorWeight: 30,
  }),
  p({
    slug: "consistent-payout-leaders",
    name: "Consistent Payout Leaders",
    primaryCategory: "Quality & Dividend",
    strategyType: "Dividend & Income",
    tags: tags("Quality & Dividend", "Quality", "Defensive"),
    description:
      "Companies with a consistent payout policy, healthy coverage and stable cash flows.",
    thesis:
      "A sustainable payout is a signal of confidence; consistency matters more than the highest headline yield.",
    focus:
      "Dividend yield and quality, with a cash-flow coverage screen and a technical trend check.",
    risks:
      "Payout ratios can become stretched; high-yield sectors can be rate-sensitive.",
    holdings: 20,
    weights: w(10, 35, 25, 30),
    filters: { minMarketCap: 1e9, minDividendYield: 0.015, minCoverage: 0.55 },
    weighting: "dividend",
    concentration: 8,
    maxSectorWeight: 28,
  }),
  p({
    slug: "quality-income-portfolio",
    name: "Quality Income Portfolio",
    primaryCategory: "Quality & Dividend",
    strategyType: "Dividend & Income",
    tags: tags("Quality & Dividend", "Quality", "Multi-Factor"),
    description:
      "A blended income portfolio that pairs quality and valuation with a dividend yield.",
    thesis:
      "Income is more reliable when it comes from profitable businesses trading at sensible valuations.",
    focus:
      "Quality 40%, valuation 25%, growth 10%, technical 25%, with a dividend requirement.",
    risks:
      "The portfolio can lag in a growth-led market and is sensitive to rate moves.",
    holdings: 20,
    weights: w(10, 40, 25, 25),
    filters: { minMarketCap: 1e9, minDividendYield: 0.01, minCoverage: 0.55 },
    weighting: "dividend",
    concentration: 8,
    maxSectorWeight: 28,
  }),

  // Defensive
  p({
    slug: "low-volatility-us-leaders",
    name: "Low Volatility US Leaders",
    primaryCategory: "Defensive",
    strategyType: "Defensive",
    tags: tags("Defensive", "Quality", "Large Cap"),
    description:
      "Large, profitable companies with lower historical volatility and stable cash flows.",
    thesis:
      "Lower-volatility equities can deliver comparable long-term returns with smaller drawdowns, improving the compounding experience.",
    focus:
      "Quality and technical evidence with inverse-volatility weighting; the universe is limited to larger, liquid names.",
    risks:
      "Defensive leadership can reverse quickly in a risk-on rally; low volatility is not the same as low risk.",
    holdings: 25,
    weights: w(15, 35, 20, 30),
    filters: { minMarketCap: 5e9, minCoverage: 0.6 },
    weighting: "lowVolatility",
    marketCapFocus: "Large Cap",
    concentration: 7,
    maxSectorWeight: 30,
  }),
  p({
    slug: "defensive-consumer-healthcare",
    name: "Defensive Consumer & Healthcare",
    primaryCategory: "Defensive",
    strategyType: "Defensive",
    tags: tags("Defensive", "Consumer", "Healthcare & Biotech"),
    description:
      "Staples and healthcare companies with inelastic demand and durable cash flows.",
    thesis:
      "Demand for food, household products and healthcare is less cyclical, providing ballast during economic uncertainty.",
    focus:
      "Consumer-staples and healthcare names, ranked on quality and valuation with a technical trend check.",
    risks:
      "Defensive sectors can be expensive and may lag a strong economic recovery.",
    holdings: 20,
    weights: w(15, 35, 20, 30),
    filters: { sectors: [STAPLES, HEALTH], minMarketCap: 2e9, minCoverage: 0.55 },
    concentration: 8,
    maxSectorWeight: 55,
  }),
  p({
    slug: "recession-resilient-businesses",
    name: "Recession Resilient Businesses",
    primaryCategory: "Defensive",
    strategyType: "Defensive",
    tags: tags("Defensive", "Quality", "Consumer"),
    description:
      "Companies with resilient demand, low leverage and cash flows that hold up in a downturn.",
    thesis:
      "Resilience comes from the business model, not the label: recurring demand, pricing power and a strong balance sheet.",
    focus:
      "Quality 40%, valuation 20%, growth 15%, technical 25%, with a leverage screen and defensive-sector tilt.",
    risks:
      "A recession may still pressure earnings; defensive valuations can be high before the downturn arrives.",
    holdings: 20,
    weights: w(15, 40, 20, 25),
    filters: {
      sectors: [STAPLES, HEALTH, UTIL],
      minMarketCap: 2e9,
      minCoverage: 0.55,
      maxNetDebtEbitda: 3,
    },
    concentration: 8,
    maxSectorWeight: 50,
  }),
  p({
    slug: "quality-defensive-compounders",
    name: "Quality Defensive Compounders",
    primaryCategory: "Defensive",
    strategyType: "Defensive",
    tags: tags("Defensive", "Quality", "Dividend & Income"),
    description:
      "High-quality businesses with stable demand, strong returns and a long compounding runway.",
    thesis:
      "The best defensive portfolio is not just low-beta; it owns businesses that can reinvest through the cycle.",
    focus:
      "Quality 45%, valuation 20%, growth 15%, technical 20%, with a quality and leverage screen.",
    risks:
      "Quality can be expensive; the portfolio may underperform in a deep-value or high-beta rally.",
    holdings: 20,
    weights: w(15, 45, 20, 20),
    filters: { minMarketCap: 2e9, minCoverage: 0.6, maxNetDebtEbitda: 3 },
    concentration: 8,
    maxSectorWeight: 32,
  }),
  p({
    slug: "all-weather-equity-portfolio",
    name: "All-Weather Equity Portfolio",
    primaryCategory: "Defensive",
    strategyType: "Defensive",
    tags: tags("Defensive", "Multi-Factor", "Quality"),
    description:
      "A diversified equity core designed to participate across environments with quality and valuation ballast.",
    thesis:
      "No single style wins in every environment; a quality-and-value core with technical confirmation can be more robust.",
    focus:
      "Quality 35%, valuation 25%, growth 15%, technical 25%, with broad sector diversification and a 7% stock cap.",
    risks:
      "Diversification can dilute returns; the portfolio still carries equity-market risk.",
    holdings: 30,
    weights: w(15, 35, 25, 25),
    filters: { minMarketCap: 2e9, minCoverage: 0.6 },
    concentration: 7,
    maxSectorWeight: 25,
  }),

  // Small & mid cap
  p({
    slug: "small-cap-quality-leaders",
    name: "Small-Cap Quality Leaders",
    primaryCategory: "Small & Mid Cap",
    strategyType: "Quality",
    tags: tags("Small & Mid Cap", "Quality", "Fundamental"),
    description:
      "Small-cap companies with strong returns, clean balance sheets and improving profitability.",
    thesis:
      "Small-cap quality is less crowded than large-cap quality and can compound faster when the business executes.",
    focus:
      "Quality 40%, growth 20%, valuation 20%, technical 20%, restricted to companies below $10B.",
    risks:
      "Small caps are less liquid and more sensitive to credit conditions; idiosyncratic risk is higher.",
    holdings: 20,
    weights: w(20, 40, 20, 20),
    filters: { minMarketCap: 300e6, maxMarketCap: 10e9, minCoverage: 0.45 },
    marketCapFocus: "Small Cap",
    concentration: 8,
    maxSectorWeight: 30,
    minimumInvestment: 1000,
  }),
  p({
    slug: "mid-cap-growth-engine",
    name: "Mid-Cap Growth Engine",
    primaryCategory: "Small & Mid Cap",
    strategyType: "Growth",
    tags: tags("Small & Mid Cap", "Growth", "Quality"),
    description:
      "Mid-cap growth companies with a proven business model and a longer reinvestment runway.",
    thesis:
      "Mid caps can offer faster growth than large caps with more maturity and liquidity than small caps.",
    focus:
      "Growth 40%, quality 25%, valuation 15%, technical 20%, restricted to $2B–$50B companies.",
    risks:
      "Mid-cap growth can be volatile and vulnerable to a slowdown in risk appetite.",
    holdings: 20,
    weights: w(40, 25, 15, 20),
    filters: { minMarketCap: 2e9, maxMarketCap: 50e9, minCoverage: 0.5 },
    marketCapFocus: "Mid Cap",
    concentration: 8,
    maxSectorWeight: 32,
  }),
  p({
    slug: "small-cap-value-opportunities",
    name: "Small-Cap Value Opportunities",
    primaryCategory: "Small & Mid Cap",
    strategyType: "Value",
    tags: tags("Small & Mid Cap", "Value", "Fundamental"),
    description:
      "Smaller companies trading at a discount with a quality and balance-sheet floor.",
    thesis:
      "Small-cap value is one of the least efficient corners of the market, but liquidity and quality controls are essential.",
    focus:
      "Valuation 45%, quality 25%, growth 10%, technical 20%, restricted to companies below $10B.",
    risks:
      "Value traps and illiquidity are more common in small caps; the portfolio can be volatile.",
    holdings: 20,
    weights: w(10, 25, 45, 20),
    filters: { minMarketCap: 300e6, maxMarketCap: 10e9, minCoverage: 0.45, maxPe: 25 },
    marketCapFocus: "Small Cap",
    concentration: 8,
    maxSectorWeight: 30,
    minimumInvestment: 1000,
  }),
  p({
    slug: "smid-momentum-leaders",
    name: "SMID Momentum Leaders",
    primaryCategory: "Small & Mid Cap",
    strategyType: "Momentum",
    tags: tags("Small & Mid Cap", "Momentum", "Technical"),
    description:
      "Small- and mid-cap companies with the strongest relative strength and trend confirmation.",
    thesis:
      "Momentum can be especially powerful in the SMID segment, where information diffusion is slower and active managers can add value.",
    focus:
      "Technical 40%, growth 20%, quality 15%, valuation 25%, restricted to $300M–$50B companies.",
    risks:
      "SMID momentum can reverse sharply and is more sensitive to liquidity conditions.",
    holdings: 20,
    weights: w(20, 15, 25, 40),
    filters: { minMarketCap: 300e6, maxMarketCap: 50e9, minCoverage: 0.4 },
    marketCapFocus: "Small Cap",
    concentration: 8,
    maxSectorWeight: 32,
    rebalanceFrequency: "Monthly",
    minimumInvestment: 1000,
  }),
  p({
    slug: "small-cap-dividend-growers",
    name: "Small-Cap Dividend Growers",
    primaryCategory: "Small & Mid Cap",
    strategyType: "Dividend & Income",
    tags: tags("Small & Mid Cap", "Dividend & Income", "Quality"),
    description:
      "Smaller companies with a growing dividend, positive cash flow and a sustainable payout.",
    thesis:
      "Dividend growth in small caps can signal a business that has reached cash-flow maturity without losing its runway.",
    focus:
      "Quality 35%, valuation 20%, growth 10%, technical 35%, with a dividend and FCF screen.",
    risks:
      "Small-cap dividends can be cut in a downturn; liquidity is thinner than large-cap income names.",
    holdings: 20,
    weights: w(10, 35, 20, 35),
    filters: {
      minMarketCap: 300e6,
      maxMarketCap: 10e9,
      minDividendYield: 0.01,
      minCoverage: 0.4,
    },
    weighting: "dividend",
    marketCapFocus: "Small Cap",
    concentration: 8,
    maxSectorWeight: 28,
    minimumInvestment: 1000,
  }),
];

export const PORTFOLIO_COUNT = PORTFOLIO_SPECS.length;
