import type { StockStory } from "./types";

export const ISRG: StockStory = {
  ticker: "ISRG",
  kicker: "Healthcare · Medical Devices",
  title: "Intuitive Surgical gets paid every time a surgeon uses da Vinci",
  dek: "The system is the hook; the instruments and the service contract are the business. That installed-base model explains both the 20% growth and the premium multiple attached to it.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $11.58B, up 20.5%, with the latest quarter up 21.7%.",
    "Gross margin is 67.2% and operating margin 28.4% — lower than a drug company because hardware and service sit inside the cost base.",
    "Free cash flow of $3.60B is a 31.1% margin, and the balance sheet holds $4.04B of net cash.",
    "At 53.1x trailing earnings and 37.1x EV/EBITDA, this is the most expensive business in the healthcare peer set.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1035267/000103526726000010/isrg-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001035267&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Intuitive Surgical makes the da Vinci robotic surgery system and the instruments that go with it. A hospital buys or leases a console and its arms, trains its surgeons, and then uses the platform for prostate, gynaecological, hernia, colorectal and, increasingly, lung procedures. Every operation consumes a set of single-use instruments.",
      "The economics are deliberately lopsided. Systems are placed at prices that would not, on their own, justify the research and sales effort. The profit arrives afterwards, in the instruments used per procedure and in the service contract that keeps the machine running. That is why the number that matters is not system revenue but the installed base and the procedures performed on it.",
      "Trailing revenue reached $11.58B, up 20.5%, and the latest quarter grew 21.7%. The shares closed at $452.80, down from a 52-week high of $603.88, giving a market value of $156.96B. The stock has fallen 17.3% over the past year while revenue grew by a fifth, which is a useful reminder that a high multiple can compress even when the business is performing.",
    ],
    quote:
      "Robotic surgery is a capital sale followed by years of consumable revenue. Judge the company by procedures per installed system, not by the number of systems shipped.",
  },
  whatItDoes: {
    paragraphs: [
      "Intuitive sells to hospitals, and hospitals buy with capital budgets that are set once a year. A robot competes for the same money as an MRI scanner or a new operating theatre, so placements slow when hospital finances tighten even if surgeon demand is strong. Once installed, the system generates revenue for a decade or more.",
      "The instrument catalogue is the recurring half of the model. Each procedure requires sterile, single-use tools with a limited number of uses, so procedure growth translates almost directly into instrument revenue. Service contracts add a second recurring line that scales with the installed base rather than with utilisation.",
      "The company has expanded from one platform to several: multi-port systems for general abdominal surgery, a single-port system for narrower access, and newer generations that add force feedback and better imaging. Each generation gives hospitals a reason to upgrade and gives Intuitive a way to defend price against new entrants.",
    ],
    bullets: [
      {
        title: "Systems",
        detail:
          "The capital sale that seeds the installed base. Revenue is lumpy and sensitive to hospital budgeting.",
      },
      {
        title: "Instruments and accessories",
        detail:
          "Consumables tied to procedure volume. This is the highest-quality revenue in the model and the reason procedure growth matters most.",
      },
      {
        title: "Service",
        detail:
          "Contracted maintenance on the installed base. Predictable, high-margin and slow to change.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 67.2% is a blend of three different businesses. Instruments carry a healthy margin once manufacturing scale is reached; systems are closer to a hardware business; service is stable but labour-intensive. The blend is why Intuitive reports a lower gross margin than a pharmaceutical company and a higher one than a traditional device maker.",
      "Operating margin is 28.4% on a trailing basis, but the quarterly range is wide: 30.5%, 30.3%, 30.2%, 30.9%, 33.6% and then 19.4%. The last quarter contained something the others did not. Revenue still grew, so the drop is a cost event rather than a demand event, and it is the clearest illustration of how quickly a single item can move a 28% margin.",
      "Research and clinical investment is the other fixed cost. Robotic surgery is sold surgeon by surgeon, through training programmes and clinical evidence, and that spending does not flex with the quarter. When revenue growth slows, the cost base stays where it is.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $5.71B in FY2021 to $10.06B in FY2025, roughly doubling in four years. The trailing figure of $11.58B puts the company on course for another year of high-teens growth, and the latest quarter's 21.7% was faster than the trailing rate.",
      "Third-party estimates call for $11.93B this fiscal year and $13.35B next, with EPS of $11.25 and $12.47. Read the revenue line rather than the EPS line: $13.35B would be about 12% growth, a step down from the 20% the company has been delivering. The estimates therefore embed a deceleration.",
      "Three things drive procedure growth: more systems installed, more surgeons trained on them, and more procedure types cleared for robotic use. The first two are execution. The third is regulatory and clinical, and it is where the long runway comes from — each new indication expands the pool of eligible operations.",
    ],
    bullets: [
      {
        title: "Installed-base expansion",
        detail:
          "Every placement adds a stream of instrument and service revenue for years, even if no new system is ever sold into that hospital again.",
      },
      {
        title: "Procedure penetration",
        detail:
          "Robotic surgery is still a minority of eligible operations in many categories, so existing systems can be used more often.",
      },
      {
        title: "New indications",
        detail:
          "Clearance for additional procedure types is the cheapest form of growth because the installed base is already in place.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is not a straight line. Operating margin was 31.9% in FY2021, fell to 25.4% in FY2022 and 24.9% in FY2023, then recovered to 28.1% in FY2024 and 29.3% in FY2025. Manufacturing expansion and a richer mix of lower-margin systems explain the dip; scale explains the recovery.",
      "Free cash flow tells a sharper story than net income. It was $1.75B in FY2021, then $958.4M in FY2022, then $749.6M in FY2023 — falling by more than half while revenue grew by a quarter. That is what capital intensity looks like when a company builds plants and tooling ahead of demand. By FY2025 free cash flow had recovered to $2.49B.",
      "Return on equity is 18.3% and return on invested capital is 21.5%. For a business with no net debt and a large cash balance, those are solid but not extraordinary numbers. The cash drags the return calculation down, which is a fair representation of a company that chooses to keep $4.04B of net cash rather than return it.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.60B over the trailing year, a 31.1% margin, well above the 25.5% net margin. The difference is depreciation and share-based compensation, both of which reduce reported profit without consuming cash in the period.",
      "Capital spending is the variable that decides how much of that cash reaches shareholders. The FY2022 and FY2023 figures show what happens when investment ramps: free cash flow collapsed even as revenue grew. Anyone reading only the income statement would have missed that completely.",
      "The company holds $4.04B of net cash and pays no dividend. Every dollar of free cash flow is available for manufacturing capacity, research and buybacks, and the absence of a dividend means the capital-allocation decision is entirely about reinvestment.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $452.80 the shares trade at 53.1x trailing earnings, 37.1x EV/EBITDA, 13.2x EV/Sales and 43.6x free cash flow, for a 2.3% free-cash-flow yield. Every one of those multiples is the highest in the healthcare peer table.",
      "The comparison is stark. Intuitive trades at 37.1x EV/EBITDA against 30.1x for Vertex, 26.8x for J&J, 26.6x for AbbVie and 25.9x for Thermo Fisher. It earns a lower operating margin than Vertex or AbbVie. The premium is therefore not for current profitability; it is for the durability of procedure-driven revenue and the length of the growth runway.",
      "A 43.6x free-cash-flow multiple implies that the market expects free cash flow to grow at a high rate for many years. If procedure growth settles at 12% — the rate implied by next year's revenue estimate — the multiple has little room to expand and some room to compress.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty analysts contribute to the attributed third-party consensus, with a mean target of $485.57 and a range of $324.00 to $685.00. The range is more than double from low to high, which is unusual for a company with such predictable revenue and reflects genuine disagreement about how much share new surgical-robotics entrants can take.",
      "Estimates call for $3.24B of revenue next quarter and $11.25 of EPS for the fiscal year. The EPS estimate sits well above the $8.26 trailing figure, and the gap is larger than one quarter's earnings, which suggests the estimate is not struck on the same basis as the reported number.",
      "The consensus is effectively a bet on two things: that procedure growth stays in the high teens and that new competitors take market share slowly. Both could be true. Neither is settled by the target price.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is strong and the franchise is dominant. The risks are about hospital spending, competition and the cost of staying ahead.",
    items: [
      {
        title: "Hospital capital budgets",
        severity: "High",
        detail:
          "System placements depend on capital budgets that are cut first when hospital finances tighten. A pause in placements slows the installed base years later.",
        watch:
          "System placements and management commentary on hospital capital spending.",
      },
      {
        title: "Competition in surgical robotics",
        severity: "High",
        detail:
          "Large device companies and specialist entrants are developing competing platforms. A credible alternative gives hospitals negotiating leverage even if they do not switch.",
        watch:
          "Competitor approvals, published clinical data and any change in system pricing.",
      },
      {
        title: "Procedure reimbursement",
        severity: "Medium",
        detail:
          "Robotic procedures cost more per case than laparoscopy. If payers narrow coverage or refuse a premium, the economic case for the hospital weakens.",
        watch:
          "Reimbursement decisions for high-volume robotic procedures.",
      },
      {
        title: "Margin volatility",
        severity: "Medium",
        detail:
          "The latest quarter's 19.4% operating margin against 33.6% the quarter before shows how far a single charge can move reported profit.",
        watch:
          "Gross margin and the composition of operating expenses each quarter.",
      },
      {
        title: "International exposure",
        severity: "Medium",
        detail:
          "A meaningful share of revenue comes from outside the United States, where tenders, currency and local competitors change the pricing dynamic.",
        watch:
          "International revenue growth and the pace of local competitor approvals.",
      },
    ],
    watchlist: [
      {
        title: "Procedures per installed system",
        detail:
          "The best single measure of whether the base is being used more intensively or merely expanded.",
      },
      {
        title: "Instrument and accessory growth",
        detail:
          "Recurring revenue should grow at least as fast as procedures; slower growth suggests pricing pressure.",
      },
      {
        title: "Capital spending",
        detail:
          "Free cash flow has been volatile because of manufacturing investment, so capex is the swing factor.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Intuitive Surgical has the cleanest razor-and-blade model in healthcare: place the platform, sell the consumable, service the machine. Revenue has doubled since FY2021 and free cash flow has recovered from the manufacturing build-out that consumed it in FY2022 and FY2023.",
      "The uncertainty is not about the quality of the business. It is about the price being paid for it. At 37.1x EV/EBITDA and 43.6x free cash flow, the market is assuming a long runway of high-teens procedure growth, and next year's revenue estimate implies something closer to 12%.",
      "A reader should leave with three questions: how much of growth comes from new systems versus more procedures per system, how quickly competing platforms reach clinical parity, and what happens to the multiple if growth settles in the low teens.",
    ],
    questions: [
      "What is procedure growth per installed system, separate from system placements?",
      "How much instrument revenue comes from procedures that a competitor could also perform?",
      "What did the latest quarter's margin drop actually contain?",
      "How many eligible procedures are still done without a robot?",
    ],
  },
};
