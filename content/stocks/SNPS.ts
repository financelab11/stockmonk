import type { StockStory } from "./types";

export const SNPS: StockStory = {
  "ticker": "SNPS",
  "kicker": "Technology · Electronic design automation",
  "title": "Synopsys bought growth, and the income statement is still absorbing it",
  "dek": "Revenue is up 46.3% while operating margin is 8.5%. The gap is not a demand problem, and the free cash flow proves it.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $9.4B trailing twelve months, +46.3% year over year.",
    "Profitability: 8.5% operating margin and 11.4% net margin.",
    "Cash: $2.7B free cash flow, a 29.2% margin.",
    "Scorecard: 37/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/883241/000088324125000028/snps-20251031.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000883241&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SYNOPSYS INC. generated $9.4B of revenue over the last twelve months, +46.3% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $2.5B of revenue and an operating margin of 14.4%. The stock closed at $435.51 on 2026-11-17, giving a market capitalization of $83.5B.",
      "The shares sit 41% of the way up their 52-week range ($362.55 to $539.48). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The revenue line says the franchise is intact. The operating line says the accounting has not caught up with it. Both can be true at once."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core products are design tools: logic synthesis, place and route, timing sign-off, analog design and verification. Around them sit libraries of design IP that customers license instead of building, and hardware systems that emulate a chip so that software can be tested before silicon exists.",
      "Customers are semiconductor companies, foundries and a growing group of systems companies that design their own chips. Each customer buys a flow rather than a product, and that flow is tied to a specific manufacturing process, which makes the relationship long and the switching expensive.",
      "The company employs 15,036 people, which is large for a software business and reflects the support and engineering effort that each customer relationship requires. That headcount is also part of why the operating margin is where it is."
    ],
    "bullets": [
      {
        "title": "Design software",
        "detail": "Synthesis, place and route, verification and sign-off. Licensed on multi-year terms and renewed annually."
      },
      {
        "title": "Design IP",
        "detail": "Reusable blocks that customers license rather than design. Revenue follows the number of chip design starts."
      },
      {
        "title": "Hardware-assisted verification",
        "detail": "Physical emulation systems that carry real manufacturing cost and a lower gross margin than software."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 72.4% is what a license business with some hardware content earns. The software licenses are close to pure margin; the emulation hardware and the support organization are not. The blend is stable, which is why the collapse in operating margin has to be explained somewhere else.",
      "The annual table shows where. Operating income was $1.27B in FY2023, $1.36B in FY2024 and then $914.9M in FY2025 on higher revenue. Something between gross profit and operating profit grew faster than revenue. The usual candidates are amortization of acquired intangibles, integration spending and stock-based compensation, all of which sit below the gross-profit line.",
      "The cash-flow statement supports that reading. Free cash flow of $2.75B is 29.2% of revenue, far above the operating margin. Charges that do not consume cash reduce reported profit without reducing the cash the business produces, and the size of the gap here is the clearest evidence that the operating margin is an accounting outcome rather than an economic one."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 13.9% a year across the fiscal years in the dataset, and the latest quarter changed +42.4% year over year. Third-party estimates for the current fiscal year point to $9.7B of revenue and $15.14 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 8.5% and return on invested capital of 1.7% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 8.5%, the net margin is 11.4% and diluted EPS is $5.72. The latest quarter's operating margin was 14.4%.",
      "Return on equity is 3.5%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $2.5B, an operating margin of 14.4% and a net margin of 22.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $2.7B, a 29.2% margin. Net debt is $7.6B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $2.7B over the last twelve months and net debt was $7.6B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 77.5x trailing earnings and 34.8x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $589.55; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "25 analysts contribute to the third-party consensus. The mean target is $589.55, with a range of $475.00 to $700.00.",
      "Current-year estimates call for $9.7B of revenue and $15.14 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 25 analysts with a mean target of $589.55; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Synopsys carries more financial risk than its peers in this batch, and its operating margin is the least settled. Both are consequences of how it grew.",
    "items": [
      {
        "title": "Integration and amortization",
        "severity": "High",
        "detail": "Reported operating profit has fallen while revenue rose. Until the acquired cost base is absorbed, the income statement will understate the economics.",
        "watch": "Operating margin and the split between amortization and cash spending."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $7.55B is 2.9x EBITDA. It is affordable now, but it limits options if the cycle turns.",
        "watch": "Net debt to EBITDA and interest expense."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "A small number of semiconductor companies account for a large share of design spending. Their budgets set the pace.",
        "watch": "Concentration disclosures and design-start activity at large customers."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "The other large EDA vendor sells an overlapping flow, and large customers can build internal tools for some steps.",
        "watch": "Win rates at advanced nodes and pricing at renewal."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Restrictions on design tools sold into certain markets can remove revenue from advanced-chip customers.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The recovery from 8.5% is the single number that decides whether the reported earnings catch up with the cash flow."
      },
      {
        "title": "Free cash flow",
        "detail": "It has held near 30% of revenue throughout. Watch whether integration spending starts to consume it."
      },
      {
        "title": "Net debt to EBITDA",
        "detail": "At 2.9x there is less room for another large deal without new equity or asset sales."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Synopsys is one half of the design-software duopoly, with a 72.4% gross margin and $2.75B of free cash flow on $9.42B of revenue. The reported operating margin of 8.5% does not describe the economics of that franchise.",
      "What is not visible in these numbers is how much of the cost below the gross-profit line is temporary. If it is integration and amortization, the margin should recover as the acquired base is absorbed. If it is a permanently heavier cost structure, the 80.1x earnings multiple has no support.",
      "The educational point is that cash flow and accounting profit can diverge for years. When they do, the cash-flow statement usually tells you more about the business and the income statement tells you more about the deals."
    ],
    "questions": [
      "How much of the operating-cost increase is amortization rather than cash spending?",
      "What was the revenue growth rate excluding acquired businesses?",
      "How quickly can the operating margin return to the low twenties?",
      "What does the $7.55B of net debt cost in interest each year?"
    ]
  }
};
