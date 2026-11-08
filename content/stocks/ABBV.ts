import type { StockStory } from "./types";

export const ABBV: StockStory = {
  ticker: "ABBV",
  kicker: "Healthcare · Drug Manufacturers",
  title: "AbbVie's cash flow is roughly four times its reported profit",
  dek: "Amortisation from a decade of acquisitions suppresses GAAP earnings, negative book equity makes return on equity meaningless, and $70B of debt is the residue of buying the franchise that replaced Humira.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $66.01B, up 10.7%, with an operating margin of 32.2%.",
    "Free cash flow of $18.87B is 28.6% of revenue — far above the 15.7% net margin.",
    "Return on equity is -227.9% because accumulated losses and buybacks have pushed book equity below zero.",
    "Net debt is $70.13B, or 3.2x EBITDA, the highest leverage in this healthcare peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1551152/000155115226000008/abbv-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001551152&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "AbbVie sells branded medicines in four broad areas: immunology, neuroscience, oncology and aesthetics. Immunology is the centre of gravity. The company rebuilt its revenue base after Humira lost patent protection by launching two newer drugs into the same specialist clinics, and those products now carry most of the growth.",
      "The accounting is unusual enough to mislead a casual reader. AbbVie bought much of its portfolio, so it amortises the acquired intangible assets through operating income every year. It also carries $70.13B of net debt from those deals. The result is a company that converts about 29 cents of every revenue dollar into free cash flow but reports a net margin of 15.7%.",
      "Trailing revenue was $66.01B, up 10.7%, and the latest quarter grew 10.3% to $17.40B at a 36.0% operating margin. At $291.31 the shares sit near the top of a 52-week range of $190.75 to $302.93, for a market value of $514.92B.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The immunology franchise treats psoriasis, rheumatoid arthritis, inflammatory bowel disease and related conditions. It is sold to dermatologists, gastroenterologists and rheumatologists, and reimbursed by commercial insurers and government programmes. Because these are chronic conditions, a patient who starts therapy tends to stay on it, which makes revenue durable but concentrates it in a small number of products.",
      "Neuroscience covers Botox for therapeutic use, psychiatric and neurological medicines, and movement-disorder treatments. Aesthetics is the odd one out: Botox Cosmetic and dermal fillers are paid for by the patient, not an insurer, so that business behaves more like a consumer brand than a pharmaceutical. Oncology and eye care round out the portfolio with smaller, more specialised products.",
      "The pieces fit together through the same sales infrastructure. A single specialty sales force can carry immunology, neuroscience and aesthetics products into overlapping call points, which is why the operating margin holds up despite the research spending.",
    ],
    bullets: [
      {
        title: "Immunology",
        detail:
          "The largest profit pool. Two newer agents now do the work that Humira once did, sold into chronic-disease clinics.",
      },
      {
        title: "Neuroscience and aesthetics",
        detail:
          "Botox sits in both worlds: reimbursed for medical use, cash-pay for cosmetic use. The second is cyclical in a way the first is not.",
      },
      {
        title: "Oncology and eye care",
        detail:
          "Smaller franchises with their own patent clocks and their own competitive pressure from newer mechanisms.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The economics of a branded pill are simple at the unit level: manufacturing cost is a small fraction of the price, so gross margin is 73.0%. What consumes the rest is the cost of reaching the prescriber and the discount demanded by the payer. A large specialty sales force, patient-support programmes and rebates to pharmacy benefit managers are the real cost of goods in this model, even though accounting puts them below the gross-margin line.",
      "Aesthetics works the other way. The customer pays at the clinic, there is no rebate negotiation, and revenue depends on discretionary spending and on how many trained injectors are available. It carries a higher gross margin than the reimbursement business but far more cyclicality, which is why the segment mix matters when consumer confidence moves.",
      "Then there is the acquisition accounting. Amortisation of intangibles is a non-cash charge that runs through operating income, so the gap between operating income and free cash flow is structural rather than temporary. That is the mechanism behind the headline: in FY2025 the company reported $4.23B of net income and generated $17.82B of free cash flow.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue history tells the Humira story in three lines. Revenue was $58.05B in FY2022, fell to $54.32B in FY2023 as biosimilar competition arrived, and recovered to $61.16B in FY2025. The trailing figure of $66.01B is above any of those years, which means the replacement products have more than covered the decline.",
      "The latest quarter's 36.0% operating margin is almost triple the 12.1% reported in the third quarter of FY2025, and its $4.22B of net income is roughly equal to the entire FY2025 figure of $4.23B. A single quarter matching a full year is the clearest possible signal that the prior year was weighed down by items that have now passed.",
      "Third-party estimates call for $67.80B of revenue and $13.98 of EPS this fiscal year, then $73.89B and $16.19 next year. That implies roughly 9% revenue growth and a mid-teens EPS increase — a normalisation story rather than a turnaround.",
    ],
    bullets: [
      {
        title: "Immunology volume",
        detail:
          "The newer agents are still taking share from older mechanisms and from competitors, so volume can grow even when the overall market is mature.",
      },
      {
        title: "Aesthetics recovery",
        detail:
          "Discretionary procedure demand is the most cyclical line in the company and the least predictable quarter to quarter.",
      },
      {
        title: "Neuroscience launches",
        detail:
          "New indications for existing molecules are cheaper to develop than new molecules and arrive with a sales force already in place.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 32.2% and net margin is 15.7%, a 16-point gap that comes from interest on the debt and from the tax line. Return on invested capital is 25.6%, which is a respectable number for a company that paid large premiums for its assets.",
      "Return on equity of -227.9% should be ignored rather than interpreted. A positive net income divided by a negative equity base produces a meaningless percentage. The negative equity itself is the result of years of losses on discontinued operations, amortisation and buybacks that reduced the share count faster than retained earnings accumulated. Book value tells you almost nothing about this business.",
      "The annual operating income line is the better trend to follow: $17.92B in FY2021, $18.12B in FY2022, $12.76B in FY2023, $9.14B in FY2024 and $15.07B in FY2025. The dip and recovery track Humira erosion and the arrival of replacement products rather than any change in the underlying margin structure.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $18.87B over the trailing year, a 28.6% margin, and $17.82B in FY2025. That cash has to do three jobs at once: pay a dividend yielding 2.4%, service $70.13B of net debt at 3.2x EBITDA, and fund the next round of pipeline acquisitions.",
      "The leverage is the constraint on everything else. At 3.2x EBITDA the company has less room than J&J at 1.1x or Thermo Fisher, which is net cash. It is not distressed — interest is comfortably covered by operating profit — but a large debt-funded acquisition would be harder to justify than it was when the balance sheet was stronger.",
      "Working capital is the swing factor to watch. Inventory and receivables build when a product launch is being stocked, and a sudden revenue decline leaves both behind. The cash-flow margin has held up through the Humira transition, which is the strongest evidence that the replacement products are real rather than promotional.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $291.31 the shares trade at 49.8x trailing earnings, 26.6x EV/EBITDA, 8.9x EV/Sales and 27.3x free cash flow. The earnings multiple and the cash multiple describe different companies. On cash, AbbVie is priced in line with a mature pharmaceutical business; on reported earnings it looks expensive.",
      "That difference is the amortisation. EV/EBITDA at 26.6x sits almost exactly on J&J's 26.8x and below Lilly at 35.7x, Vertex at 30.1x and Intuitive at 37.1x. For a business growing revenue at double digits, a multiple in the mid-twenties on EBITDA is not a premium valuation; it is a valuation that already discounts the debt and the patent risk.",
      "What the multiple assumes is that the immunology franchise keeps growing through the rest of the decade. If the newer agents reach their own competitive ceiling sooner than expected, both the earnings base and the multiple would move in the same direction at once, which is how pharmaceutical de-rating usually happens.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed third-party consensus, with a mean target of $310.65 and a range of $237.00 to $350.00. The spread is wide for a company this large, and most of it will be disagreement about the durability of immunology pricing rather than about the next quarter.",
      "Estimates call for $13.98 of EPS this fiscal year and $16.19 next year, against trailing diluted EPS of $5.81. The estimate is more than twice the trailing figure. That is not analysts forecasting a doubling of profit; it is the difference between a measure that excludes amortisation and one that includes it.",
      "The revenue estimates are the cleaner comparison, because revenue is unaffected by amortisation: $67.80B this year and $73.89B next. On those numbers the debate is about growth rates in the high single digits, not about an earnings miracle.",
    ],
  },
  risks: {
    intro:
      "AbbVie's risks cluster around two things: how long its immunology franchise can grow, and how much financial flexibility $70B of debt leaves.",
    items: [
      {
        title: "Immunology concentration",
        severity: "High",
        detail:
          "A small number of products now generate most of the growth. A safety signal, a pricing decision or a better competitor in one of them would be felt across the whole company.",
        watch:
          "Combined growth of the two largest immunology products and any change in their competitive positioning.",
      },
      {
        title: "US drug pricing",
        severity: "High",
        detail:
          "Negotiated pricing and formulary pressure reduce net price per prescription. For chronic therapies, a lower net price compounds over years of treatment.",
        watch:
          "Realised net price and any movement of major products into government price negotiation.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "$70.13B of net debt at 3.2x EBITDA limits the ability to absorb a large disappointment or make a transformative acquisition without issuing equity.",
        watch:
          "Net debt to EBITDA and the pace of debt repayment from free cash flow.",
      },
      {
        title: "Aesthetics cyclicality",
        severity: "Medium",
        detail:
          "Cosmetic procedures are paid for by the patient. In a weaker consumer environment, volume falls before price does.",
        watch:
          "Aesthetics revenue growth relative to the rest of the portfolio.",
      },
      {
        title: "Pipeline productivity",
        severity: "Medium",
        detail:
          "The company has relied on acquisitions to refill the pipeline. Buying late-stage assets at a premium is a lower-return strategy than discovering them.",
        watch:
          "Research spending as a share of revenue and the number of late-stage assets originating internally.",
      },
    ],
    watchlist: [
      {
        title: "Immunology growth",
        detail:
          "The single line that determines whether the replacement strategy has worked.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow should stay near 28% of revenue; a fall would suggest eroding pricing or rising working capital.",
      },
      {
        title: "Debt reduction",
        detail:
          "Progress on net debt decides how much room exists for the next acquisition.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AbbVie is a company that survived the loss of the best-selling drug in the industry and rebuilt its revenue within three years. The evidence is in the numbers: revenue $54.32B in FY2023, $66.01B on a trailing basis, and free cash flow of $18.87B.",
      "The complication is that the reported figures are hard to read. Negative equity, heavy amortisation and $70B of debt mean that return on equity, the P/E ratio and book value all point in confusing directions. Free cash flow and net debt to EBITDA are the two measures that stay coherent through the accounting noise.",
      "The open question is whether the immunology franchise can keep growing after it has already absorbed the Humira patients. That is a question about market share and pricing, not about the accounting, and it will be answered by prescription trends rather than by a single quarter's earnings.",
    ],
    questions: [
      "How much of immunology growth is new patients versus share taken from competitors?",
      "What would a price cut on the largest immunology product do to free cash flow?",
      "How quickly can $70.13B of net debt be reduced at current cash generation?",
      "Is the aesthetics business being valued as a consumer brand or as a drug?",
    ],
  },
};
