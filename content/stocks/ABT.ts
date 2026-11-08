import type { StockStory } from "./types";

export const ABT: StockStory = {
  ticker: "ABT",
  kicker: "Healthcare · Medical Devices",
  title: "Abbott's revenue is accelerating while its margin falls",
  dek: "Sales grew 14.5% in the latest quarter and operating margin dropped to 10.4%. The gap between those two numbers is the current investment case in one line.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $48.23B, up 10.0%, with the latest quarter up 14.5%.",
    "Operating margin is 13.8% on a trailing basis, down from 19.6% in the fourth quarter of FY2025.",
    "Free cash flow of $6.76B is a 14.0% margin, and the company holds $4.30B of net cash.",
    "At 22.7x EV/EBITDA and 3.9x EV/Sales it is the cheapest business in the peer table, though 40.5x trailing earnings makes it look expensive.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1800/000162828026010185/abt-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000001800&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Abbott Laboratories sells medical devices, diagnostic tests, infant and adult nutrition, and branded generic medicines. The device business covers heart rhythm, electrophysiology, structural heart, heart failure, neuromodulation and glucose monitoring. Diagnostics sells laboratory and rapid tests. Nutrition sells formula and supplements. Established Pharmaceuticals sells off-patent branded medicines, mostly outside the United States.",
      "That mix is unusual among large healthcare companies because it spans hospital capital equipment, consumer pantry products and emerging-market pharmacies. Each has a different customer, a different cycle and a different margin. The consolidated numbers are an average of businesses that rarely move together, which is both the appeal and the difficulty of analysing the company.",
      "Trailing revenue was $48.23B, up 10.0%, and the latest quarter grew 14.5% to $13.01B on a 10.4% operating margin. The shares closed at $109.93, below the middle of a 52-week range of $81.97 to $132.03, for a market value of $190.39B. The stock is down 9.9% over the past year and 4.2% over five years.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Medical devices are the growth engine. A heart-failure pump, a mitral valve clip, a pacemaker or a continuous glucose sensor is sold to a hospital or prescribed to a patient, and each carries a stream of consumables, software and follow-up. Device revenue grows with procedures and with the adoption of new techniques, and it is the segment most exposed to hospital budgets.",
      "Diagnostics and nutrition are steadier, lower-margin businesses. A laboratory analyser is placed and then supplied with reagents; infant formula is bought in a shop or supplied through a public programme. Nutrition in particular behaves like a consumer staple, with commodity input costs and brand loyalty rather than clinical differentiation.",
      "Established Pharmaceuticals sells branded generics in markets where patients pay more of the bill themselves. That business has attractive margins but is exposed to currency, price controls and local competition, which is why it rarely gets credit for growth in the way the device business does.",
    ],
    bullets: [
      {
        title: "Medical devices",
        detail:
          "Rhythm management, electrophysiology, structural heart, heart failure, neuromodulation and diabetes care. The highest-margin and fastest-growing segment.",
      },
      {
        title: "Diagnostics",
        detail:
          "Laboratory, molecular and rapid testing. Reagent-driven recurring revenue with hospital and public-health customers.",
      },
      {
        title: "Nutrition",
        detail:
          "Infant formula and adult nutrition. Consumer-staple economics with commodity input costs.",
      },
      {
        title: "Established pharmaceuticals",
        detail:
          "Branded generics sold mostly in emerging markets, where price controls and currency shape the return.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 56.9% is a blend that no single segment would recognise. A glucose sensor or a heart valve carries a device gross margin in the seventies; infant formula carries something closer to a food company's margin. The consolidated figure therefore moves with mix as much as with pricing, and a shift toward devices lifts it while a shift toward nutrition lowers it.",
      "The operating margin of 13.8% is where the strain shows. Abbott spends heavily on selling devices surgeon by surgeon and on research to keep its device franchise current. Those costs are largely fixed in the short run, so when revenue accelerates the margin should rise, not fall. Over the past year it has done the opposite.",
      "The quarterly numbers make the divergence explicit. Revenue grew from $11.46B in Q4 FY2025 to $13.01B in Q3 FY2026, a 13.5% increase, while operating margin fell from 19.6% to 10.4%. Something other than volume is driving the cost line.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $43.08B in FY2021 to $40.11B in FY2023 and back to $44.33B in FY2025, a round trip that reflects the loss of pandemic testing revenue and its subsequent replacement. The trailing figure of $48.23B is the highest in the series.",
      "Third-party estimates call for $49.95B this fiscal year and $53.50B next, which implies about 13% growth followed by about 7%. The deceleration in the second year is the analysts' way of saying that the current acceleration is partly a base effect.",
      "The device pipeline is the part that could change that. Newer categories such as electrophysiology ablation and structural heart repair are growing faster than the legacy rhythm-management business, and each approval adds a procedure that did not exist before. The risk is that the growth is bought with promotional spending rather than earned with clinical superiority.",
    ],
    bullets: [
      {
        title: "Device procedure growth",
        detail:
          "The fastest-growing part of the company and the one that carries the highest margin.",
      },
      {
        title: "Diabetes care adoption",
        detail:
          "Continuous glucose monitoring is expanding from people with type 1 diabetes to a much larger type 2 population.",
      },
      {
        title: "Emerging-market volume",
        detail:
          "Branded generics and nutrition grow with household income, but at lower prices and with currency risk.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is the story. Operating income was $8.43B on $43.08B of revenue in FY2021, a 19.6% margin. By FY2023 it had fallen to $6.48B on $40.11B, a 16.2% margin, and the trailing figure is 13.8%. The company has become larger and less profitable at the same time.",
      "FY2024 contains an accounting anomaly worth understanding. Net income was $13.40B against operating income of $6.83B. Net income cannot exceed operating income through operations; a non-operating gain or a tax benefit did the work. Anyone reading the earnings trend without noticing that would conclude the business doubled its profitability in a single year.",
      "Returns are modest. Return on equity is 9.1% and return on invested capital 11.1%, both below what a device-led company usually earns. The gap between the two is small, which tells you leverage is not flattering the equity return — the business simply earns a thin return on its capital base.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $6.76B over the trailing year, a 14.0% margin, and has ranged between $5.06B and $8.65B over the past five fiscal years. The volatility tracks the pandemic testing cycle more than the underlying device business.",
      "The balance sheet holds $4.30B of net cash, which is comfortable for a company with this much manufacturing and regulatory capital. Abbott has to maintain plants for nutrition, diagnostics and devices, and each is inspected and validated separately, so the asset base is heavier than a pure pharmaceutical company's.",
      "The dividend yields 2.3% and has a long record behind it. Between the dividend and the device investment, free cash flow is largely committed, which leaves limited room for large acquisitions without adding debt.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $109.93 the shares trade at 40.5x trailing earnings, 22.7x EV/EBITDA, 3.9x EV/Sales and 28.2x free cash flow, a 3.5% free-cash-flow yield. The earnings multiple and the sales multiple tell opposite stories, and the difference is the depressed margin.",
      "The EV/EBITDA and EV/Sales multiples are the lowest in the healthcare peer table: 22.7x against 25.9x for Thermo Fisher and 26.6x for AbbVie, and 3.9x sales against 5.3x and 8.9x. On those measures the market is pricing Abbott as a below-average-margin diversified healthcare company, which is what it currently is.",
      "The valuation question is straightforward: does the margin recover? At 19.6% operating margin on $48.23B of revenue, operating income would be about $9.5B rather than $6.7B. That is the gap the market is refusing to pay for.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed third-party consensus, with a mean target of $118.52 and a range of $100.00 to $130.00. The narrow range relative to the share price suggests the debate is about the pace of margin recovery rather than about the direction of the business.",
      "Estimates call for $13.21B of revenue next quarter and $5.52 of EPS for the fiscal year, against trailing diluted EPS of $2.69. The estimate is more than double the trailing figure, which is not a forecast of a doubling in profit; it reflects a different treatment of charges and amortisation.",
      "The revenue estimates are cleaner: $49.95B this year and $53.50B next. On those numbers the company grows at a double-digit rate this year and high single digits next, with the margin as the swing factor for earnings.",
    ],
  },
  risks: {
    intro:
      "Abbott's risks are operational and competitive. The balance sheet is strong, so the question is whether the margin pressure is temporary or structural.",
    items: [
      {
        title: "Margin compression",
        severity: "High",
        detail:
          "Operating margin has fallen from 19.6% to 10.4% over six quarters while revenue grew. If the cause is promotional spending rather than one-off costs, the earnings base is permanently lower.",
        watch:
          "Operating margin by segment and the ratio of selling expense to revenue.",
      },
      {
        title: "Device pricing and reimbursement",
        severity: "High",
        detail:
          "Hospitals and payers push back on device prices, and a reimbursement cut for a high-volume procedure reduces revenue per case immediately.",
        watch:
          "Realised device pricing and reimbursement decisions in major markets.",
      },
      {
        title: "Nutrition quality and supply",
        severity: "Medium",
        detail:
          "Infant formula is a product where a quality failure is both a human and a legal problem, and remediation costs can persist for years.",
        watch:
          "Quality-related charges and any supply disruption in the nutrition segment.",
      },
      {
        title: "Emerging-market exposure",
        severity: "Medium",
        detail:
          "Established Pharmaceuticals and nutrition sell into markets with currency volatility and price controls, which can turn a good year into a flat one.",
        watch:
          "Organic growth in established pharmaceuticals and the currency impact on revenue.",
      },
      {
        title: "Diabetes competition",
        severity: "Medium",
        detail:
          "Continuous glucose monitoring is attracting large competitors, and price competition in a fast-growing category compresses margin quickly.",
        watch:
          "Diabetes care revenue growth and pricing trends in sensors.",
      },
    ],
    watchlist: [
      {
        title: "Segment margins",
        detail:
          "The consolidated margin is an average; the device margin is the one that determines whether the mix is improving.",
      },
      {
        title: "Device revenue growth",
        detail:
          "Should outpace the group if the portfolio is genuinely shifting toward higher-value procedures.",
      },
      {
        title: "Free cash flow conversion",
        detail:
          "A 14.0% margin is thin for a company with this much recurring revenue; a further decline would be a warning.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Abbott is a collection of healthcare businesses that share a distribution network and a balance sheet. Devices are the growth and margin engine, diagnostics and nutrition are the ballast, and established pharmaceuticals are the emerging-market option.",
      "The current numbers are contradictory: revenue is accelerating, the margin is falling, and the stock has gone nowhere over five years. That combination usually means the market believes the growth is being purchased rather than earned.",
      "The most useful thing to resolve is the margin. A company earning 19% on $48B of revenue is a different investment from one earning 11%, and the answer will come from segment disclosure rather than from the consolidated income statement.",
    ],
    questions: [
      "Which segment is responsible for the fall in operating margin?",
      "How much of device growth comes from new procedures versus price?",
      "Is the FY2024 net income gain repeatable or a one-time item?",
      "What would a recovery to a 19% operating margin be worth per share?",
    ],
  },
};
