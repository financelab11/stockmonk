import type { StockStory } from "./types";

export const MU: StockStory = {
  "ticker": "MU",
  "kicker": "Semiconductors · Memory and storage",
  "title": "Micron's 80% gross margin is a price, not a permanent feature",
  "dek": "Memory is the most violently cyclical business in the chip industry, and the current numbers sit at the top of a very steep curve.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $133.2B trailing twelve months, +256.3% year over year.",
    "Profitability: 74.6% operating margin and 63.8% net margin.",
    "Cash: $59B free cash flow, a 44.3% margin.",
    "Scorecard: 88/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000023/mu-20260903.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000723125&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "MICRON TECHNOLOGY INC. generated $133.2B of revenue over the last twelve months, +256.3% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q4 FY26, with $54.2B of revenue and an operating margin of 80.7%. The stock closed at $712.42 on 2026-11-17, giving a market capitalization of $806B.",
      "The shares sit 49% of the way up their 52-week range ($192.59 to $1,255.00). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The market is not paying 9.2x for the last year of earnings. It is paying for a view about the next price of DRAM."
  },
  "whatItDoes": {
    "paragraphs": [
      "Micron sells into four product areas: DRAM, high-bandwidth memory, NAND storage and a collection of embedded and specialty memories. DRAM is the largest. High-bandwidth memory is the fastest-growing, because every AI accelerator needs stacks of it and the stack has to be qualified with the accelerator designer before it ships.",
      "Customers are the companies that assemble servers, PCs and phones, plus the hyperscalers that buy memory directly and the automotive and industrial buyers who need long-lived, qualified parts. The memory maker sells to a relatively small number of very large purchasers, and the price is often negotiated quarterly or under contract.",
      "Manufacturing is the constraint. A memory fab costs billions of dollars, takes years to build, and produces output that is essentially a commodity once the process is qualified. That combination is why the industry alternates between periods of shortage and periods of oversupply."
    ],
    "bullets": [
      {
        "title": "DRAM and HBM",
        "detail": "Working memory for servers, PCs and accelerators. High-bandwidth memory is the premium tier and the tightest part of the market."
      },
      {
        "title": "NAND",
        "detail": "Storage for devices, data centers and removable media. More fragmented competition and a wider spread of cost positions."
      },
      {
        "title": "Embedded and specialty",
        "detail": "Long-lifecycle parts for automotive and industrial customers, where qualification takes years and switching is slow."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "A memory fab has a fixed cost base: the building, the tools and the depreciation arrive before a single wafer is sold. When demand exceeds supply, price rises faster than unit cost, and almost all of the increase falls to operating profit. That is the mechanism behind an 80.7% gross margin.",
      "The operating margin of 74.6% shows how little sits between gross profit and operating profit — about six points of revenue, covering research, sales and administration. In a shortage, incremental revenue is almost pure profit; in a glut, the same cost base produces losses on falling prices. FY2023 is the proof: operating income of -$5.75B on $15.54B of revenue.",
      "The demand side has changed shape. Memory used to be sold mostly into PCs and phones, where the cycle followed consumer replacement. AI accelerators consume far more memory per system, and high-bandwidth memory is sold under contracts that are agreed earlier and run longer. That does not repeal the cycle; it changes its timing and its amplitude."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 35.6% a year across the fiscal years in the dataset, and the latest quarter changed +379.3% year over year. Third-party estimates for the current fiscal year point to $275.9B of revenue and $176.50 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 74.6% and return on invested capital of 78.4% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 74.6%, the net margin is 63.8% and diluted EPS is $74.27. The latest quarter's operating margin was 80.7%.",
      "Return on equity is 61.4%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q4 FY26: revenue of $54.2B, an operating margin of 80.7% and a net margin of 69.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $59B, a 44.3% margin. The balance sheet carries $38.3B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $59B over the last twelve months and net debt was -$38.3B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 9.5x trailing earnings and 7.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $1,561.91; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "45 analysts contribute to the third-party consensus. The mean target is $1,561.91, with a range of $361.00 to $3,000.00.",
      "Current-year estimates call for $275.9B of revenue and $176.50 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 45 analysts with a mean target of $1.6K; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Micron's risks are the risks of a commodity producer with a fixed cost base: price, capacity and the timing of both.",
    "items": [
      {
        "title": "The cycle turns",
        "severity": "High",
        "detail": "FY2023 showed what a downcycle looks like: revenue halved, operating income went negative and free cash flow turned negative. Nothing in the current cost structure prevents a repeat.",
        "watch": "Contract prices for DRAM and NAND, and the direction of gross margin."
      },
      {
        "title": "Industry capacity additions",
        "severity": "High",
        "detail": "Every producer is adding wafers at the same time. Supply that arrives together can end a shortage quickly.",
        "watch": "Industry capital spending and wafer start announcements."
      },
      {
        "title": "High-bandwidth memory qualification",
        "severity": "High",
        "detail": "The premium part of the market depends on qualifying at each accelerator generation. A missed qualification removes the highest-margin revenue.",
        "watch": "Customer qualifications and the mix of high-bandwidth memory within DRAM revenue."
      },
      {
        "title": "Depreciation and capital intensity",
        "severity": "Medium",
        "detail": "Fabs depreciate whether they run at full utilization or not. Idle capacity is expensive.",
        "watch": "Utilization rates and capital expenditure guidance."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Rules on selling advanced memory into certain markets can remove demand that the capacity was built to serve.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The fastest-moving indicator of the price environment. An 80% margin is a signal about scarcity, not efficiency."
      },
      {
        "title": "Inventory",
        "detail": "Rising inventory across the industry usually precedes a price decline by a quarter or two."
      },
      {
        "title": "Capital spending",
        "detail": "The industry's collective capex is the supply that arrives two years later."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Micron is a well-run manufacturer in the middle of an extraordinary price environment. Revenue of $133.19B, an operating margin of 74.6% and free cash flow of $58.96B are the result of scarce memory being sold into an AI build-out, not of a permanently better business model.",
      "The balance sheet is genuinely stronger than it was: $38.26B of net cash against a net debt position in the last downturn. That matters because it determines whether the company can keep investing when prices fall, which is when market position is actually won.",
      "The educational point is that a single-digit P/E can be the most expensive multiple in the market. When earnings are at a cyclical peak, the multiple is low because the denominator is about to change. Whether high-bandwidth memory alters that pattern is the question the reader has to answer."
    ],
    "questions": [
      "What share of DRAM revenue now comes from high-bandwidth memory under contract?",
      "How much industry capacity is under construction for delivery in the next two years?",
      "What does mid-cycle gross margin look like across a full cycle?",
      "How much of the $320.06B next-year estimate depends on prices rather than bits shipped?"
    ]
  }
};
