import type { StockStory } from "./types";

export const AMD: StockStory = {
  "ticker": "AMD",
  "kicker": "Semiconductors · Processors and accelerators",
  "title": "AMD's growth is real; the margin is the part still under construction",
  "dek": "Revenue is up 41.9% and the shares trade at 96.7x earnings. The distance between those two facts is the whole report.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $45.4B trailing twelve months, +41.9% year over year.",
    "Profitability: 17.7% operating margin and 16.8% net margin.",
    "Cash: $7.1B free cash flow, a 15.5% margin.",
    "Scorecard: 52/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000018/amd-20251227.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000002488&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "ADVANCED MICRO DEVICES INC. generated $45.4B of revenue over the last twelve months, +41.9% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $13.4B of revenue and an operating margin of 21.2%. The stock closed at $503.41 on 2026-11-17, giving a market capitalization of $833.2B.",
      "The shares sit 67% of the way up their 52-week range ($188.22 to $658.52). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "AMD has proved it can win designs. The open question is whether winning designs in accelerators converts into the kind of margin that a 96.7x multiple requires."
  },
  "whatItDoes": {
    "paragraphs": [
      "AMD sells into four broad markets. Data-center processors compete with Intel for the chips that run cloud and enterprise servers. Accelerators compete with Nvidia for the chips that train and run AI models. Client processors go into laptops and desktops, and embedded chips go into communications, industrial and automotive systems.",
      "The company reports these as separate segments, but the consolidated line is what the tables here use. The important structural point is that three of the four markets are won through design cycles that last several years. A server platform decision made by a cloud provider today determines revenue for the life of that generation.",
      "AMD's scale is smaller than its rivals'. It employs 12,600 people, against workforces several times larger at the companies it competes with. That is efficient per employee and also a constraint: the design roadmap has to be funded from a narrower base."
    ],
    "bullets": [
      {
        "title": "Data-center processors",
        "detail": "Server CPUs sold to cloud providers, enterprises and governments. The share gains here have been the most consistent part of the story."
      },
      {
        "title": "Accelerators",
        "detail": "GPUs for AI training and inference. The fastest-growing line and the one that decides the multiple."
      },
      {
        "title": "Client and embedded",
        "detail": "PC processors and chips for communications, industrial and automotive systems. Cyclical, lower margin, useful for absorbing fixed design costs."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The model is fabless: AMD pays a foundry for wafers, pays for packaging and memory, and sells the finished part. Gross margin of 53.7% is what is left after those costs. It is a hardware margin, well below what a software company earns, and it moves with the mix between client chips and data-center parts.",
      "Operating margin of 17.7% tells you where the rest goes. Roughly 36 points of revenue are consumed between gross profit and operating profit, mostly by research and development and by the sales organization that wins designs. That spending is largely fixed, which is why a 44.7% revenue increase produced a much larger swing in operating income.",
      "Pricing is set against two very different competitors. In server processors AMD prices against Intel on performance per watt and per dollar. In accelerators it prices against Nvidia, where the software ecosystem and the maturity of the platform matter as much as the chip. The second contest is harder to win on price alone."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 31.4% a year across the fiscal years in the dataset, and the latest quarter changed +44.7% year over year. Third-party estimates for the current fiscal year point to $52.2B of revenue and $8.08 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 17.7% and return on invested capital of 10.7% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Accelerator ramp",
        "detail": "The single largest swing factor in the estimates, and the one with the least history behind it."
      },
      {
        "title": "Server share",
        "detail": "Each generation of server processors has taken share from Intel. The question is how much remains available."
      },
      {
        "title": "Supply allocation",
        "detail": "Foundry capacity and memory supply determine how much of the demand AMD can actually invoice."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 17.7%, the net margin is 16.8% and diluted EPS is $4.60. The latest quarter's operating margin was 21.2%.",
      "Return on equity is 11.1%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $13.4B, an operating margin of 21.2% and a net margin of 18.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $7.1B, a 15.5% margin. The balance sheet carries $8.7B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $7.1B over the last twelve months and net debt was -$8.7B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 109.4x trailing earnings and 93.2x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $657.74; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "49 analysts contribute to the third-party consensus. The mean target is $657.74, with a range of $525.00 to $1,250.00.",
      "Current-year estimates call for $52.2B of revenue and $8.08 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 49 analysts with a mean target of $657.74; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "AMD's financial position is strong; the risks are competitive and operational. Almost all of them run through the accelerator business.",
    "items": [
      {
        "title": "Accelerator competition",
        "severity": "High",
        "detail": "Nvidia's platform includes a mature software ecosystem and an annual product cadence. Matching the hardware is not the same as matching the switching cost.",
        "watch": "Accelerator revenue disclosures and the pace of new design wins at large customers."
      },
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of cloud and system builders decide whether a new accelerator generation reaches volume. Their procurement choices can move a full year of estimates.",
        "watch": "Concentration in the largest customers and order patterns across quarters."
      },
      {
        "title": "Supply allocation",
        "severity": "Medium",
        "detail": "Leading-edge wafers and high-bandwidth memory are shared with other buyers. Demand can exceed what AMD is able to ship.",
        "watch": "Inventory, purchase commitments and lead times for accelerators."
      },
      {
        "title": "Margin mix",
        "severity": "Medium",
        "detail": "Selling whole accelerator systems rather than chips raises revenue and can lower the gross margin percentage at the same time.",
        "watch": "Gross margin alongside revenue growth, not in isolation."
      },
      {
        "title": "Client cyclicality",
        "severity": "Medium",
        "detail": "The PC market corrected sharply in FY2023 and took operating income with it. That segment has not disappeared.",
        "watch": "Client segment revenue and channel inventory."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Cross-border rules can remove addressable market for advanced accelerators or require lower-specification products.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "A rising gross margin alongside rising revenue confirms the mix is improving; a falling one says volume is being bought with price."
      },
      {
        "title": "Operating margin trend",
        "detail": "The move from -1.7% to 21.2% is the core of the story. Watch whether the next four quarters continue it."
      },
      {
        "title": "Inventory",
        "detail": "Inventory growth ahead of revenue is normal before a launch and a warning sign after one."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "AMD is a fabless designer that has turned a challenged position into a growing franchise in server processors and is now attempting the same in AI accelerators. Revenue of $45.44B, up 41.9%, and an operating margin that has climbed to 21.2% are evidence that the operating model works.",
      "The valuation is the part that requires belief. At 96.7x trailing earnings, the price assumes revenue more than doubles and that the incremental business earns a better margin than today's blend. The balance sheet, with $8.70B of net cash, means the company can fund that attempt; it does not mean the attempt succeeds.",
      "The educational point is the difference between operating momentum and investment return. AMD's momentum is visible in every quarter of the table. Whether the price already reflects it is a separate question that the next section cannot answer either."
    ],
    "questions": [
      "How much of the accelerator revenue comes from the largest customers?",
      "Does gross margin rise or fall as accelerator systems scale?",
      "What share of the $95.71B next-year estimate depends on one product generation?",
      "How much of the server processor opportunity has already been captured?"
    ]
  }
};
