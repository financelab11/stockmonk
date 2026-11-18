import type { StockStory } from "./types";

export const INTC: StockStory = {
  "ticker": "INTC",
  "kicker": "Semiconductors · Processors and foundry",
  "title": "Intel pays for its factories whether or not it fills them",
  "dek": "Revenue fell from $79.02B to $52.85B in four years while the manufacturing base stayed. A 39.9% gross margin is what that decision costs, and the recovery is what the share price is paying for.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $59.9B trailing twelve months, +12.1% year over year.",
    "Profitability: 2.9% operating margin and -20.1% net margin.",
    "Cash: $3.8B free cash flow, a 6.3% margin.",
    "Scorecard: 39/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/50863/000005086326000011/intc-20251227.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000050863&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "INTEL CORP. generated $59.9B of revenue over the last twelve months, +12.1% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $16.5B of revenue and an operating margin of 15.3%. The stock closed at $55.17 on 2026-11-17, giving a market capitalization of $293.2B.",
      "The shares sit 20% of the way up their 52-week range ($32.89 to $142.35). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A fab is a bet placed years before the revenue arrives. When demand falls in the meantime, the loss is not a surprise; it is the cost of the bet."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company sells processors for personal computers and servers, chipsets, networking silicon and memory, and it is building a foundry business that would manufacture chips for other companies. The client business supplies PC makers; the data-centre business supplies cloud providers, enterprises and governments. Both depend on Intel's process technology being competitive.",
      "The foundry effort changes the economics. A foundry earns revenue by manufacturing for others, which spreads fixed costs across more volume. It also requires capital spending ahead of demand and a customer base that is willing to design chips around Intel's process. That is a multi-year project, and its success is not visible in a single quarter.",
      "Intel employed 110,600 people at the last count. That headcount reflects a manufacturing organisation with fabs, test facilities and process engineering, not just a design team. It is the main reason the company's cost base is so much heavier than a fabless competitor's."
    ],
    "bullets": [
      {
        "title": "Client computing",
        "detail": "PC processors. A large volume business tied to the corporate and consumer replacement cycle."
      },
      {
        "title": "Data centre",
        "detail": "Server processors. Higher margin than client, and the segment where competition has been most intense."
      },
      {
        "title": "Foundry",
        "detail": "Manufacturing for external customers. Strategically important, capital-hungry and still early."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Chip revenue depends on unit volume, average selling price and mix. A server processor sells for far more than a PC processor, so a shift in mix moves revenue and margin at the same time. The cost of goods includes wafer fabrication, packaging and test, and those costs are largely fixed once the fab is built.",
      "That is why gross margin is the number to watch. At 39.9%, Intel is earning much less per dollar of revenue than a leading-edge manufacturer needs to fund its next generation of capacity. The shortfall is not primarily a pricing problem; it is the cost of running factories at low utilisation and of investing in new process nodes before they generate revenue.",
      "Operating margin of 2.9% and net margin of negative 20.1% diverge because of items below the operating line. A single quarter, Q2 FY2026, recorded a net loss of $11.03B, which is large enough to swamp the operating result of the surrounding quarters. The reader should treat that quarter as an exceptional item until the filing explains it."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at -5.0% a year across the fiscal years in the dataset, and the latest quarter changed +20.9% year over year. Third-party estimates for the current fiscal year point to $61.7B of revenue and $1.49 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 2.9% and return on invested capital of 1.1% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 2.9%, the net margin is -20.1% and diluted EPS is -$2.42. The latest quarter's operating margin was 15.3%.",
      "Return on equity is -9.1%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $16.5B, an operating margin of 15.3% and a net margin of 20.1%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $3.8B, a 6.3% margin. The balance sheet carries $3.9B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $3.8B over the last twelve months and net debt was -$3.9B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at n/a trailing earnings and 21.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $90.65; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "43 analysts contribute to the third-party consensus. The mean target is $90.65, with a range of $63.00 to $160.00.",
      "Current-year estimates call for $61.7B of revenue and $1.49 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 43 analysts with a mean target of $90.65; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Intel's risks are industrial rather than financial. The company has the balance sheet to keep investing; the question is whether the investment produces products customers want to buy.",
    "items": [
      {
        "title": "Process technology execution",
        "severity": "High",
        "detail": "Every product and every foundry customer depends on Intel's manufacturing process being competitive. A delay resets the roadmap and the revenue that goes with it.",
        "watch": "Node introductions, yield commentary and product launch timing."
      },
      {
        "title": "Fab utilisation",
        "severity": "High",
        "detail": "Fixed manufacturing costs dominate the cost of goods. Low utilisation is what turned a high-margin manufacturing model into a 39.9% gross margin.",
        "watch": "Gross margin and capital expenditure against revenue."
      },
      {
        "title": "Competitive share loss",
        "severity": "High",
        "detail": "Server and PC processors face strong competitors with better margins and, in some generations, better performance per watt.",
        "watch": "Data-centre revenue and unit share disclosures."
      },
      {
        "title": "Capital intensity",
        "severity": "Medium",
        "detail": "Free cash flow was negative for four years because capital spending outran cash generation. The programme is not finished.",
        "watch": "Capital expenditure, depreciation and free cash flow."
      },
      {
        "title": "Dividend coverage",
        "severity": "Medium",
        "detail": "A 5.0% yield on negative earnings is a cash commitment that may compete with capital spending.",
        "watch": "Dividends paid against free cash flow."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "39.9% is the recovery's scoreboard. A move back toward its historical range would change the earnings base."
      },
      {
        "title": "Free cash flow",
        "detail": "Positive $3.77B is the first sign that the capital cycle is maturing."
      },
      {
        "title": "Foundry customers",
        "detail": "External manufacturing revenue is the proof that the fab strategy works for anyone other than Intel."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Intel is a manufacturing company in the middle of an expensive transition. The revenue decline, the negative free cash flow and the 1.1% return on invested capital are the cost of that transition. The improvement in the last three quarters is the first evidence that it may be working.",
      "The valuation is not based on current earnings. It is based on the belief that margins normalise as utilisation rises and that the foundry business eventually contributes. Both are plausible and neither is certain.",
      "The reader should decide which risk matters more: a technology delay, which would reset the timeline, or a demand shortfall, which would leave the fixed costs stranded. The gross margin line will show which one is happening."
    ],
    "questions": [
      "What utilisation level is needed to restore gross margin toward its historical range?",
      "How much of the revenue recovery is share gain versus market recovery?",
      "How much capital spending is still committed before free cash flow is sustainably positive?",
      "What does the foundry business need to win to justify its cost?"
    ]
  }
};
