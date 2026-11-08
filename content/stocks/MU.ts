import type { StockStory } from "./types";

export const MU: StockStory = {
  ticker: "MU",
  kicker: "Semiconductors · Memory and storage",
  title: "Micron's 80% gross margin is a price, not a permanent feature",
  dek: "Memory is the most violently cyclical business in the chip industry, and the current numbers sit at the top of a very steep curve.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $133.19B on a trailing basis, up 256.3%, and the latest quarter grew 379.3%.",
    "Gross margin of 80.7% and net margin of 63.8% reflect shortage pricing rather than a normal year.",
    "Free cash flow was $58.96B and net cash is $38.26B, a stronger position than this company held in FY2023.",
    "At 9.2x trailing earnings and 6.8x EBITDA, the multiple is low because the earnings may be at a peak.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/723125/000072312526000023/mu-20260903.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000723125&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Micron makes memory: DRAM for working data, NAND for storage, and the specialised high-bandwidth memory that sits next to an AI accelerator. The products are standards, not differentiated platforms. What separates one memory maker from another is cost per bit, manufacturing yield and the ability to qualify a part at a customer.",
      "Three years ago the same company was in trouble. FY2023 revenue was $15.54B, operating income was -$5.75B, net income was -$5.83B and free cash flow was -$6.12B. FY2026 revenue was $133.19B with operating income of $99.34B. Nothing about the factories changed that much; the price of memory did.",
      "The shares closed at $690.00, giving a market capitalization of $780.68B inside a 52-week range of $192.59 to $1,255.00. Trailing P/E is 9.2x and EV/EBITDA is 6.8x. A low multiple on record earnings is the classic shape of a cyclical peak, and the rest of this report is about whether this time is different.",
    ],
    quote:
      "The market is not paying 9.2x for the last year of earnings. It is paying for a view about the next price of DRAM.",
  },
  whatItDoes: {
    paragraphs: [
      "Micron sells into four product areas: DRAM, high-bandwidth memory, NAND storage and a collection of embedded and specialty memories. DRAM is the largest. High-bandwidth memory is the fastest-growing, because every AI accelerator needs stacks of it and the stack has to be qualified with the accelerator designer before it ships.",
      "Customers are the companies that assemble servers, PCs and phones, plus the hyperscalers that buy memory directly and the automotive and industrial buyers who need long-lived, qualified parts. The memory maker sells to a relatively small number of very large purchasers, and the price is often negotiated quarterly or under contract.",
      "Manufacturing is the constraint. A memory fab costs billions of dollars, takes years to build, and produces output that is essentially a commodity once the process is qualified. That combination is why the industry alternates between periods of shortage and periods of oversupply.",
    ],
    bullets: [
      {
        title: "DRAM and HBM",
        detail:
          "Working memory for servers, PCs and accelerators. High-bandwidth memory is the premium tier and the tightest part of the market.",
      },
      {
        title: "NAND",
        detail:
          "Storage for devices, data centers and removable media. More fragmented competition and a wider spread of cost positions.",
      },
      {
        title: "Embedded and specialty",
        detail:
          "Long-lifecycle parts for automotive and industrial customers, where qualification takes years and switching is slow.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A memory fab has a fixed cost base: the building, the tools and the depreciation arrive before a single wafer is sold. When demand exceeds supply, price rises faster than unit cost, and almost all of the increase falls to operating profit. That is the mechanism behind an 80.7% gross margin.",
      "The operating margin of 74.6% shows how little sits between gross profit and operating profit — about six points of revenue, covering research, sales and administration. In a shortage, incremental revenue is almost pure profit; in a glut, the same cost base produces losses on falling prices. FY2023 is the proof: operating income of -$5.75B on $15.54B of revenue.",
      "The demand side has changed shape. Memory used to be sold mostly into PCs and phones, where the cycle followed consumer replacement. AI accelerators consume far more memory per system, and high-bandwidth memory is sold under contracts that are agreed earlier and run longer. That does not repeal the cycle; it changes its timing and its amplitude.",
    ],
  },
  growth: {
    paragraphs: [
      "The quarterly revenue series is the most striking table in this batch: $9.30B, $11.31B, $13.64B, $23.86B, $41.46B and $54.23B across six quarters. Revenue multiplied 5.8 times in five quarters while the operating margin went from 23.3% to 80.7%.",
      "Third-party estimates extend the trend rather than reverse it: $61.83B next quarter, $275.89B this fiscal year and $320.06B the next. Those numbers imply the shortage persists through the forecast period. That is an assumption about supply discipline across the whole industry, not just about Micron's execution.",
      "The realistic drivers are AI memory content per system, the qualification of high-bandwidth memory at more customers, and a storage refresh in data centers. The realistic brake is capacity: every memory maker is adding wafers, and the industry has a long record of adding too many at once.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual table covers a full cycle in five lines. Revenue of $30.76B in FY2022 with operating income of $9.70B, then a loss in FY2023, then $25.11B, $37.38B and $133.19B. Operating margin went from 31.5% to -37.0% to 5.2% to 26.1% to 74.6%.",
      "Return on equity is 61.4% and return on invested capital is 78.4%. Both figures are extraordinary and both are temporary in the sense that they are computed on peak pricing. The same measures were negative three years earlier.",
      "Diluted EPS was $74.27 on a trailing basis, with the latest quarter at $32.93 against $1.68 in Q3 FY2025. Per-share earnings in a cyclical business are a snapshot of the price environment at the moment of reporting, which is why the multiple applied to them is so low.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $58.96B, a 44.3% margin. The comparison with FY2023, when free cash flow was -$6.12B, and FY2024, when it was $121.0M, shows how quickly the cash profile moves. Capex is heavy in every year; what changes is whether revenue covers it.",
      "The balance sheet holds $38.26B of net cash. That is the buffer that lets Micron keep building through the next downturn, which is exactly what it could not comfortably do in FY2023. It is also the reason the company can fund capacity without leaning on the debt markets at the wrong point in the cycle.",
      "The dividend yield is 0.1%, so almost all of the cash is being retained. In a capital-intensive commodity business that is the right posture: the money is needed for capacity, and capacity is the only durable source of cost advantage.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $690.00, Micron trades at 9.2x trailing earnings, 6.8x EV/EBITDA, 5.6x sales and 13.2x free cash flow, with a 7.6% free-cash-flow yield. Every one of those multiples is the lowest in the peer table. Nvidia trades at 23.3x earnings, Microsoft at 27.6x and AMD at 96.7x.",
      "The discount is not an oversight. A cyclical company's earnings are highest when its multiple is lowest, because the market knows the earnings are not sustainable. A 9.2x P/E on $74.27 of peak EPS is a very different proposition from a 9.2x P/E on mid-cycle EPS.",
      "The valuation question is what mid-cycle earnings look like. If high-bandwidth memory has genuinely made the business less cyclical, the multiple should be higher. If it has not, the current earnings base is the top of a curve. Stockmonk does not publish a target price, and neither answer can be read off the trailing multiple.",
    ],
  },
  analysts: {
    paragraphs: [
      "The mean target is $1,561.91 from 45 analysts, with a range of $361.00 to $3,000.00 — a spread of more than eight times between the low and the high, the widest in this batch.",
      "The forecast set puts revenue at $61.83B next quarter with $38.29 of EPS, $275.89B this fiscal year with $176.50, and $320.06B next year with $207.76. The out-year numbers assume the shortage persists and then some.",
      "A range that wide is information. It says the analysts agree about the current quarter and disagree about where in the cycle the company sits. The average of a range like that is less useful than the two ends.",
    ],
  },
  risks: {
    intro:
      "Micron's risks are the risks of a commodity producer with a fixed cost base: price, capacity and the timing of both.",
    items: [
      {
        title: "The cycle turns",
        severity: "High",
        detail:
          "FY2023 showed what a downcycle looks like: revenue halved, operating income went negative and free cash flow turned negative. Nothing in the current cost structure prevents a repeat.",
        watch:
          "Contract prices for DRAM and NAND, and the direction of gross margin.",
      },
      {
        title: "Industry capacity additions",
        severity: "High",
        detail:
          "Every producer is adding wafers at the same time. Supply that arrives together can end a shortage quickly.",
        watch:
          "Industry capital spending and wafer start announcements.",
      },
      {
        title: "High-bandwidth memory qualification",
        severity: "High",
        detail:
          "The premium part of the market depends on qualifying at each accelerator generation. A missed qualification removes the highest-margin revenue.",
        watch:
          "Customer qualifications and the mix of high-bandwidth memory within DRAM revenue.",
      },
      {
        title: "Depreciation and capital intensity",
        severity: "Medium",
        detail:
          "Fabs depreciate whether they run at full utilization or not. Idle capacity is expensive.",
        watch:
          "Utilization rates and capital expenditure guidance.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Rules on selling advanced memory into certain markets can remove demand that the capacity was built to serve.",
        watch:
          "License changes and the geographic revenue split.",
      },
    ],
    watchlist: [
      {
        title: "Gross margin",
        detail:
          "The fastest-moving indicator of the price environment. An 80% margin is a signal about scarcity, not efficiency.",
      },
      {
        title: "Inventory",
        detail:
          "Rising inventory across the industry usually precedes a price decline by a quarter or two.",
      },
      {
        title: "Capital spending",
        detail:
          "The industry's collective capex is the supply that arrives two years later.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Micron is a well-run manufacturer in the middle of an extraordinary price environment. Revenue of $133.19B, an operating margin of 74.6% and free cash flow of $58.96B are the result of scarce memory being sold into an AI build-out, not of a permanently better business model.",
      "The balance sheet is genuinely stronger than it was: $38.26B of net cash against a net debt position in the last downturn. That matters because it determines whether the company can keep investing when prices fall, which is when market position is actually won.",
      "The educational point is that a single-digit P/E can be the most expensive multiple in the market. When earnings are at a cyclical peak, the multiple is low because the denominator is about to change. Whether high-bandwidth memory alters that pattern is the question the reader has to answer.",
    ],
    questions: [
      "What share of DRAM revenue now comes from high-bandwidth memory under contract?",
      "How much industry capacity is under construction for delivery in the next two years?",
      "What does mid-cycle gross margin look like across a full cycle?",
      "How much of the $320.06B next-year estimate depends on prices rather than bits shipped?",
    ],
  },
};
