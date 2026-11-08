import type { StockStory } from "./types";

export const APH: StockStory = {
  ticker: "APH",
  kicker: "Technology · Connectors, sensors and interconnect",
  title: "Amphenol makes the least exciting parts and earns the highest returns",
  dek: "Connectors are a commodity for most suppliers. A 27.7% operating margin says the product is not the part, it is the design position.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $33.05B on a trailing basis, up 57.6%, and the latest quarter grew 65.1%.",
    "Gross margin is 38.8% and operating margin is 27.7%, with a 24.2% return on invested capital.",
    "Free cash flow was $5.12B, a 15.5% margin, below reported net income because growth absorbed working capital.",
    "Net debt is $12.57B, or 1.2x EBITDA, and the shares trade at 18.6x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/820313/000110465926013549/aph-20251231x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000820313&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Amphenol makes connectors, cable assemblies, antennas and sensors. These are small parts that carry power, signal or data between the components of a machine. A car, a data-center rack, a missile and a mobile phone all contain dozens of them, and each one has to survive vibration, heat and time.",
      "Revenue of $33.05B is up 57.6%, and the latest quarter grew 65.1% to $10.23B at a 29.5% operating margin. The annual table shows the step: revenue went from $12.55B in FY2023 to $15.22B in FY2024 and $23.09B in FY2025. The connector market does not grow 52% in a year, so acquired businesses are a large part of that step.",
      "The shares trade at $74.59 for $184.18B of market value, inside a $59.01 to $89.93 range. Trailing P/E is 31.0x and EV/EBITDA is 18.6x. Those are software multiples applied to a company that employs 80,000 people to make hardware.",
    ],
    quote:
      "A connector is a tiny fraction of a system's bill of materials and a single point of failure. That asymmetry is the entire business.",
  },
  whatItDoes: {
    paragraphs: [
      "The product range covers interconnect for data, power and radio frequency, plus sensors and the value-added assemblies that package them. The end markets are industrial, automotive, military and aerospace, information technology and mobile devices. No single market dominates, which is why revenue has been less volatile than a pure data-center supplier's.",
      "Customers are original equipment manufacturers and the contract manufacturers that build for them. The buying decision is made by design engineers early in a program, and once a connector is designed into a platform it usually stays there for the life of that platform.",
      "The company is organized into many small operating units, each with its own profit responsibility. That structure is deliberate: it keeps the engineering close to the customer and the cost base close to the revenue, which is how a business with 38.8% gross margin produces a 27.7% operating margin.",
    ],
    bullets: [
      {
        title: "Interconnect",
        detail:
          "Connectors, cable assemblies and radio-frequency components. The core of the business and the source of the design positions.",
      },
      {
        title: "Sensors",
        detail:
          "Measurement devices for automotive, industrial and medical systems. A smaller line with higher engineering content.",
      },
      {
        title: "Value-added assemblies",
        detail:
          "Complete wired subsystems rather than single parts. Higher revenue per design win and a closer relationship with the customer.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 38.8% reflects the real cost of copper, plating, insulation and assembly labour. This is not a software margin and cannot be defended with a license. What defends it is the design position: a connector that has been qualified for a platform is difficult and expensive to replace, so price competition is limited to the moment before the design is frozen.",
      "Operating margin of 27.7% is what makes the model unusual. Only about eleven points of revenue separate gross profit from operating profit, which is lean for a company with 80,000 employees. The decentralised structure keeps selling and administrative costs tied to the units that generate the revenue.",
      "Return on invested capital of 24.2% is the result of that combination: a modest gross margin, a thin cost structure and a product that does not require a fab. The capital goes into inventory, receivables and the occasional acquisition rather than into plants.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $10.88B in FY2021 to $23.09B in FY2025, roughly doubling in four years. Most of that came in the last step: FY2025 was 52% larger than FY2024. The trailing figure of $33.05B is up 57.6% again.",
      "Third-party estimates call for $37.16B this fiscal year and $45.75B the next, which implies growth of about 61% and then 23%. The first number is consistent with the current run rate; the second is a return to something closer to the historical pace.",
      "The drivers are the interconnect content of AI data-center equipment, defence spending, a recovery in industrial demand and acquired businesses. The brake is that acquisitions flatter the growth rate while they last and then become part of the base that has to be grown organically.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin was between 19.4% and 20.8% from FY2021 to FY2024, then jumped to 25.4% in FY2025. The step came in the same year as the 52% revenue increase, which means the incremental revenue arrived at a materially higher margin than the existing base.",
      "Return on equity is 34.4% and return on invested capital is 24.2%. Both are high for a components manufacturer and both are helped by the leverage on the balance sheet: $12.57B of net debt at 1.2x EBITDA.",
      "Diluted EPS was $5.01 on a trailing basis. Net margin is 18.0%, which is the right level for this kind of business: a fifth of revenue reaching the bottom line after interest and tax.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $5.12B, a 15.5% margin. The annual record is $1.18B, $1.79B, $2.16B, $2.15B and $4.38B. Free cash flow is below net income in the current period, which is what happens when revenue grows 60%: receivables and inventory expand with every shipment.",
      "That is a timing issue rather than a quality issue, but it is the reason the free-cash-flow margin is the lowest in this batch alongside AMD. A fast-growing manufacturer consumes working capital before it collects it.",
      "Net debt of $12.57B is 1.2x EBITDA and the company pays a dividend yielding 0.6%. The leverage is modest for the cash generation, and it is the residue of buying businesses rather than of funding operations.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $74.59, Amphenol trades at 31.0x trailing earnings, 18.6x EV/EBITDA, 6.0x sales and 36.0x free cash flow, with a 2.8% free-cash-flow yield. Its EBITDA multiple is roughly in line with Microsoft at 19.4x and below Broadcom at 33.1x.",
      "An 18.6x EBITDA multiple for a connector manufacturer is high, and it is justified by the returns rather than by the growth. A business earning 24.2% on invested capital while growing revenue 57.6% deserves a higher multiple than one earning 10% on the same revenue.",
      "The risk in the multiple is that it assumes the margin step of FY2025 is permanent. If the 25.4% operating margin was a peak-cycle blend rather than a new baseline, the earnings base and the multiple would correct together. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Only 19 analysts cover the stock, with a mean target of $106.97 and a range of $85.00 to $130.00. Four sit in the strongest positive bucket, 13 are positive and two neutral.",
      "Their revenue estimates are $10.55B next quarter, $37.16B this fiscal year and $45.75B next. The revenue numbers are the useful comparison here, because the per-share estimates are struck on a different basis from the reported diluted figure of $5.01.",
      "The target range is narrow in percentage terms: the low end is 14% above the last close and the high end 74% above it. That is a more confident consensus than the growth rate alone would justify, which is worth noting.",
    ],
  },
  risks: {
    intro:
      "Amphenol's risks are cyclical and acquisitive. The balance sheet can carry the debt; the question is whether the growth rate survives the end markets.",
    items: [
      {
        title: "Acquisition dependence",
        severity: "High",
        detail:
          "A large part of the recent step came from buying businesses. Acquired revenue has to be integrated and then grown, and integration is where returns are won or lost.",
        watch:
          "The split between organic and acquired revenue growth.",
      },
      {
        title: "Cyclical end markets",
        severity: "High",
        detail:
          "Industrial and automotive demand can fall sharply, and the company sells into both.",
        watch:
          "Segment revenue trends and order rates in industrial and automotive.",
      },
      {
        title: "Data-center concentration",
        severity: "Medium",
        detail:
          "AI infrastructure is now a large driver of growth. A pause in cluster construction would be visible quickly.",
        watch:
          "The information technology share of revenue and hyperscaler capital spending.",
      },
      {
        title: "Input costs",
        severity: "Medium",
        detail:
          "Copper and precious-metal plating are real costs that cannot always be passed on before a contract is repriced.",
        watch:
          "Gross margin against commodity prices.",
      },
      {
        title: "Margin sustainability",
        severity: "Medium",
        detail:
          "The operating margin stepped up five points in FY2025. A return to the previous level would cut earnings materially.",
        watch:
          "Operating margin in each quarter, not just the annual figure.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The FY2025 step to 25.4% is the key assumption behind the multiple. Watch whether it holds through the next slowdown.",
      },
      {
        title: "Organic growth",
        detail:
          "The growth rate including acquisitions overstates the underlying business. Separate the two before extrapolating.",
      },
      {
        title: "Working capital",
        detail:
          "Free cash flow trails net income during a ramp. Watch whether it converges as growth slows.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Amphenol is a diversified interconnect manufacturer with a 38.8% gross margin, a 27.7% operating margin and a 24.2% return on invested capital. Revenue of $33.05B grew 57.6% and the latest quarter grew 65.1%.",
      "The business works because the parts are small and the design position is durable. That is also the risk: a connector franchise is only as good as the platforms it is designed into, and those platforms turn over.",
      "The educational point is that a low gross margin is not the same as a bad business. What matters is the spread between gross and operating margin, and what that spread says about how the company is run.",
    ],
    questions: [
      "How much of the growth was organic rather than acquired?",
      "Is the 25.4% operating margin a new baseline or a cyclical peak?",
      "What share of revenue now depends on AI data-center equipment?",
      "Why is free cash flow running below net income?",
    ],
  },
};
