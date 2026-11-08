import type { StockStory } from "./types";

export const INSM: StockStory = {
  ticker: "INSM",
  kicker: "Healthcare Growth · Rare pulmonary disease",
  title: "Insmed is spending a launch-sized budget to become a two-drug company",
  dek: "Arikayce treats a chronic lung infection and brensocatib targets bronchiectasis. Revenue has more than doubled, but the operating loss is still 37% of sales and the cash balance is smaller than the annual burn.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $1.52B, up 240%, with the latest quarter at $524.4M.",
    "The trailing operating margin is negative 37.1% as launch spending runs ahead of sales.",
    "Free cash flow was negative $627.6M against $591.5M of net cash.",
    "The consensus expects $2.99B of revenue and positive EPS next fiscal year.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1104506/000110450626000009/insm-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001104506&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Insmed sells therapies for serious lung diseases. Arikayce is an inhaled antibiotic for Mycobacterium avium complex lung disease, a chronic infection that mainly affects people with underlying lung damage. The patient nebulises the drug daily for many months. Brensocatib is an oral inhibitor of dipeptidyl peptidase 1, an enzyme involved in neutrophil-driven inflammation, developed for bronchiectasis, a condition in which the airways are permanently widened and repeatedly infected.",
      "Revenue reached $1.52B over the trailing twelve months, up 240%. That step-up is not organic growth in the usual sense; it reflects a second product reaching the market and adding a new revenue line. The gross margin is 84.4%, and the operating margin is negative 37.1% because the company is funding a launch, a sales force and a late-stage pipeline at the same time.",
      "At $114.41 the market capitalisation is $25.10B, or 16.1x EV/sales. Net cash is $591.5M, which is less than the $627.6M of cash the business consumed over the trailing period. The question is whether the revenue ramp arrives quickly enough to fund the spending without another large equity raise.",
    ],
    quote:
      "A launch is a bet that the cost comes first and the revenue comes second. The balance sheet decides how long the company can wait.",
  },
  whatItDoes: {
    paragraphs: [
      "Arikayce is used by pulmonologists and infectious-disease specialists treating adults with MAC lung disease. The drug is inhaled through a nebuliser, which means the patient needs a device, training and a supply chain that can deliver a refrigerated liquid. The treatment lasts months, so the revenue is recurring for as long as the patient stays on therapy.",
      "Brensocatib is a once-daily pill for bronchiectasis. The patient population is larger than MAC lung disease and the drug is easier to take, which is why the launch matters so much. It is also the reason the company's cost base has expanded: a primary-care-sized market needs a larger sales force and more payer work than a rare-disease product.",
      "The pipeline includes an inhaled treprostinil prodrug for pulmonary arterial hypertension, an earlier programme that adds optionality. Insmed employs about 736 people, a small number relative to revenue because much of the manufacturing and commercial work is specialised and outsourced.",
    ],
    bullets: [
      {
        title: "Arikayce",
        detail:
          "An inhaled antibiotic for MAC lung disease. Daily nebulised therapy with a long treatment duration.",
      },
      {
        title: "Brensocatib",
        detail:
          "An oral DPP1 inhibitor for bronchiectasis. The larger commercial opportunity and the reason for the current spending.",
      },
      {
        title: "Earlier pipeline",
        detail:
          "Inhaled treprostinil for pulmonary arterial hypertension and other rare pulmonary programmes.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Both products are branded prescription drugs sold at a price per patient per year. Arikayce is dispensed through specialty pharmacy and reimbursed by insurers; brensocatib, if it follows the same path, would be sold through the same channel but to a much larger group of prescribers.",
      "The 84.4% gross margin is healthy but below the 90%-plus of a simple oral pill, because Arikayce requires a device, a refrigerated supply chain and patient support. The operating loss comes from the commercial infrastructure: sales representatives, medical affairs, market access, patient services and the clinical trials that support the launches.",
      "The operating leverage is the investment case. If brensocatib reaches a broad bronchiectasis population, the same sales force and payer relationships can carry a much larger revenue base. If adoption is slow, the cost base stays and the loss persists.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $188.5M in FY2021 to $245.4M, $305.2M, $363.7M and $606.4M in the following years, then jumped to $1.52B on a trailing basis. The latest quarter grew 268.4% to $524.4M. That is a launch curve, not a steady compounder.",
      "The drivers are brensocatib adoption, Arikayce penetration and international expansion. Bronchiectasis is a large, underdiagnosed condition, so the addressable population is much bigger than the rare-disease markets Insmed previously served. That is the opportunity and the cost: reaching a larger population requires more spending.",
      "The consensus expects $1.86B of revenue this fiscal year and $2.99B next year, with EPS moving from minus $1.67 to positive $0.66. The revenue estimate is plausible if the launch continues; the profit estimate depends on the cost base growing much more slowly than sales.",
    ],
    bullets: [
      {
        title: "Brensocatib launch",
        detail:
          "The new revenue line. Adoption among pulmonologists and payer coverage decide the slope.",
      },
      {
        title: "Arikayce base",
        detail:
          "The established product. Growth comes from penetration and from longer treatment duration.",
      },
      {
        title: "International",
        detail:
          "Additional geographies add patients but require local reimbursement and distribution.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is a company that has been investing through losses for years. Operating losses were $375.1M, $457.3M, $709.6M, $878.3M and $1.25B from FY2021 to FY2025. The FY2025 loss is more than twice the revenue of that year, which is what a launch plus a late-stage pipeline costs.",
      "The quarterly trend shows the turn. Operating margin was negative 291.3% in Q2 FY25, negative 257.1% in Q3, negative 121.2% in Q4, negative 50.1% in Q1 FY26, negative 0.4% in Q2 and negative 17.0% in Q3. Revenue grew from $107.4M to $524.4M over the same period, so the margin improvement is real even though the Q3 figure slipped from the near-breakeven Q2.",
      "Net margin is negative 39.9% and return on equity is negative 83.4%. Return on invested capital of negative 330.8% reflects a small invested-capital base and large cumulative losses, not an operating return that can be compared with a normal company.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was negative $627.6M over the trailing period, a negative 41.3% margin. FY2025 was worse at negative $967.6M. The company is consuming cash at a rate that is large relative to its $591.5M net cash balance.",
      "That combination is the central financial fact. A business with $1.52B of revenue and an 84.4% gross margin would normally be close to cash breakeven; Insmed is not, because the launch and the pipeline are being paid for before the revenue arrives. The gap has been funded from the balance sheet, and the remaining cash is now smaller than the trailing outflow.",
      "The cash flow can improve quickly if revenue keeps growing and spending stabilises. The Q2 FY26 operating margin of negative 0.4% shows what that looks like. But the Q3 slip to negative 17.0% is a reminder that launch spending is not a straight line.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E is negative and EV/EBITDA is not meaningful. The stock trades at 16.1x EV/sales, which is high for a company with a negative operating margin, but lower than it looks for a launch-stage pharmaceutical with a large addressable market.",
      "The comparison with a mature device company is not helpful. A better reference is the cost of buying a revenue stream in a large pulmonary market. At $25.10B, the market is paying roughly 16 times trailing sales for a business that the consensus expects to nearly double revenue next year. If the estimate is right, the multiple falls quickly; if it is wrong, the multiple stays high.",
      "The valuation is a bet on brensocatib becoming a substantial product. Arikayce alone would not support the current market capitalisation.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus, with a mean target of $194.18 and a range of $158.00 to $243.00. The mean is well above the current price, which reflects the expectation that the launch will continue.",
      "Estimates call for $1.86B of revenue and a loss of $1.67 per share this fiscal year, then $2.99B and positive $0.66 next year. For the next quarter the consensus is $604.5M of revenue and a loss of $0.34 per share. The swing to profit next year is the most important assumption in the consensus.",
      "Those are third-party forecasts. The revenue estimates are broadly supported by the launch trajectory; the profit estimate depends on a cost discipline that has not yet been demonstrated for a full year.",
    ],
  },
  risks: {
    intro:
      "Insmed has a large pulmonary opportunity and a real commercial infrastructure. The risks are launch execution, payer coverage, cash consumption and the possibility that the cost of reaching a broad market is higher than the consensus assumes.",
    items: [
      {
        title: "Launch execution",
        severity: "High",
        detail:
          "Brensocatib has to reach a much larger prescriber base than Arikayce. A slow launch leaves the expanded cost base without the revenue to support it.",
        watch:
          "Quarterly revenue, prescription trends and the number of active prescribers.",
      },
      {
        title: "Payer coverage",
        severity: "High",
        detail:
          "A new drug in a large population invites utilisation management. Prior authorisation and step therapy can slow adoption.",
        watch:
          "Formulary decisions, coverage letters and gross-to-net pricing.",
      },
      {
        title: "Cash burn",
        severity: "High",
        detail:
          "Free cash flow was negative $627.6M against $591.5M of net cash. The company may need to raise capital before the launch funds itself.",
        watch:
          "Cash balance, quarterly burn and any financing.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Other companies are developing treatments for bronchiectasis and MAC lung disease. A competitor with a better profile or a lower price would limit share.",
        watch:
          "Competitor data, approvals and pricing.",
      },
      {
        title: "Manufacturing complexity",
        severity: "Medium",
        detail:
          "Arikayce requires a nebulised formulation and a cold chain. Supply interruptions would hit revenue directly.",
        watch:
          "Supply disclosures, inventory and contract manufacturing.",
      },
    ],
    watchlist: [
      {
        title: "Brensocatib revenue",
        detail:
          "The launch is the whole story. Watch the absolute quarterly step.",
      },
      {
        title: "Operating margin",
        detail:
          "The path to positive EPS depends on the cost base growing more slowly than revenue.",
      },
      {
        title: "Cash balance",
        detail:
          "The company has to fund the launch until it covers its costs.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Insmed has transformed from a single-product rare-disease company into a two-product pulmonary business. Revenue is $1.52B, growing 240%, and the gross margin is 84.4%. The launch of brensocatib is the reason the numbers look so different from a year ago.",
      "The company is still losing money and consuming cash faster than its balance sheet can comfortably support. The consensus expects a profit next year, which requires the launch to keep scaling while spending stabilises. That is possible, but it is an assumption rather than a reported fact.",
      "The educational point is that a launch-stage pharmaceutical is valued on the revenue curve, not the current earnings. The reader should focus on adoption, coverage and cash, because those three variables decide whether the curve arrives before the balance sheet runs out.",
    ],
    questions: [
      "How many patients are on brensocatib, and how quickly is the prescriber base expanding?",
      "What share of revenue is Arikayce versus brensocatib?",
      "How much cash did the company hold at the latest quarter-end?",
      "What cost growth is embedded in the consensus profit estimate for next year?",
    ],
  },
};
