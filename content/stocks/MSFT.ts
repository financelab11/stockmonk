import type { StockStory } from "./types";

export const MSFT: StockStory = {
  "ticker": "MSFT",
  "kicker": "Application software · Cloud infrastructure",
  "title": "Microsoft is selling AI through the software enterprises already own",
  "dek": "The cloud is the growth engine, but the installed base of Office, Windows and developer tools is what makes Microsoft's AI distribution unusually cheap.",
  "readingMinutes": 11,
  "takeaways": [
    "Revenue: $346.4B trailing twelve months, +17.9% year over year.",
    "Profitability: 47.1% operating margin and 41.2% net margin.",
    "Cash: $60B free cash flow, a 17.3% margin.",
    "Scorecard: 60/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526323660/msft-20260630.htm",
  "irUrl": "https://www.microsoft.com/en-us/investor",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/789019/000119312526436122/msft-ex99_1.htm",
  "bigPicture": {
    "paragraphs": [
      "MICROSOFT CORP. generated $346.4B of revenue over the last twelve months, +17.9% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q1 FY27, with $92.3B of revenue and an operating margin of 49.8%. The stock closed at $506.24 on 2026-11-17, giving a market capitalization of $3.76T.",
      "The shares sit 75% of the way up their 52-week range ($349.20 to $559.15). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Microsoft's advantage is not that it has the best model. It is that it has the shortest path from a model to a paying enterprise seat."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company reports three segments. Productivity & Business Processes contains Office, LinkedIn and Dynamics. Intelligent Cloud contains Azure, server products and enterprise services. More Personal Computing contains Windows, gaming, search and devices.",
      "The segment names hide the interconnection. Azure sells compute and AI services, but Office and Windows generate the data, identity and workflow context that make those services stickier. A customer that already runs Microsoft 365 and Entra ID has a lower switching cost to Azure than to a rival cloud.",
      "Microsoft also owns a large stake in OpenAI and has integrated its models into Copilot products. That relationship is a strategic asset and a governance question at the same time, because the terms can change and the investment is not a conventional wholly-owned business."
    ],
    "bullets": [
      {
        "title": "Productivity & Business Processes",
        "detail": "Office 365, LinkedIn, Dynamics. 42.2% of annual revenue and the subscription base that funds the rest."
      },
      {
        "title": "Intelligent Cloud",
        "detail": "Azure, server products, enterprise services. 41.5% of revenue and the main AI growth vector."
      },
      {
        "title": "More Personal Computing",
        "detail": "Windows, gaming, search and devices. 16.3% of revenue and a cyclical consumer exposure."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Most of Microsoft's revenue is recurring. Commercial subscriptions renew on multi-year contracts, and Azure consumption grows with customer workloads. That model produces high visibility and negative working capital, which is why the company can fund a large dividend and buyback while still investing heavily.",
      "The United States is 51.5% of revenue and non-US markets are 48.5%, so Microsoft is genuinely global. Currency movements matter, but the bigger driver is the pace at which existing customers move workloads to the cloud and add AI seats.",
      "The mix is shifting toward infrastructure, which is lower-margin than software but larger and stickier. Investors should watch the gross margin of Intelligent Cloud separately from the company average, because AI capacity costs land there first."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 15.1% a year across the fiscal years in the dataset, and the latest quarter changed +18.8% year over year. Third-party estimates for the current fiscal year point to $396B of revenue and $20.01 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 47.1% and return on invested capital of 29.2% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Azure AI consumption",
        "detail": "Customers pay for compute and model inference as they use it. Growth is high but capacity-constrained."
      },
      {
        "title": "Copilot seats",
        "detail": "AI add-ons to Office and GitHub expand revenue per user without acquiring a new customer."
      },
      {
        "title": "Security",
        "detail": "A large and growing subscription business that benefits from bundling and consolidation."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 47.1%, the net margin is 41.2% and diluted EPS is $19.16. The latest quarter's operating margin was 49.8%.",
      "Return on equity is 30.3%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q1 FY27: revenue of $92.3B, an operating margin of 49.8% and a net margin of 39.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $60B, a 17.3% margin. The balance sheet carries $29B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $60B over the last twelve months and net debt was -$29B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 26.4x trailing earnings and 18.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $636.12; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "54 analysts contribute to the third-party consensus. The mean target is $636.12, with a range of $440.00 to $870.00.",
      "Current-year estimates call for $396B of revenue and $20.01 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 54 analysts with a mean target of $636.12; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Microsoft's balance sheet and recurring revenue reduce financial risk. The important risks are competitive, regulatory and capital-allocation related.",
    "items": [
      {
        "title": "AI capex returns",
        "severity": "High",
        "detail": "Capital expenditure is rising faster than free cash flow. If AI demand does not scale as expected, depreciation will weigh on margins.",
        "watch": "Capital expenditure guidance, Azure growth and management commentary on capacity utilisation."
      },
      {
        "title": "OpenAI relationship",
        "severity": "Medium",
        "detail": "Microsoft's AI position depends partly on a partner it does not control. Changes in governance, economics or model access would matter.",
        "watch": "Contract disclosures and changes to the OpenAI commercial arrangement."
      },
      {
        "title": "Cloud competition",
        "severity": "Medium",
        "detail": "AWS and Google Cloud are aggressive on price and AI services. Azure's growth premium is not guaranteed.",
        "watch": "Azure growth relative to AWS and Google Cloud, and gross-margin trends."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Bundling, cloud licensing and the Activision acquisition have attracted regulatory scrutiny in multiple jurisdictions.",
        "watch": "Antitrust proceedings and changes to software licensing terms."
      },
      {
        "title": "Consumer and PC cyclicality",
        "severity": "Low",
        "detail": "Windows and gaming are exposed to hardware cycles, but they are a smaller part of the mix than they used to be.",
        "watch": "PC shipment data and gaming content releases."
      }
    ],
    "watchlist": [
      {
        "title": "Azure growth",
        "detail": "The quarterly growth rate is the cleanest read on AI demand and competitive position."
      },
      {
        "title": "Capex as a share of revenue",
        "detail": "A rising ratio is not automatically bad, but it needs to translate into future revenue."
      },
      {
        "title": "Copilot monetisation",
        "detail": "Seat counts and average revenue per user would show whether AI is expanding the software budget."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Microsoft is a high-quality compounder with a rare distribution advantage in enterprise software. Revenue is recurring, margins are high and the balance sheet is strong.",
      "The educational point is that free cash flow and earnings can tell different stories during a heavy investment cycle. Microsoft's earnings multiple looks reasonable while its free-cash-flow multiple looks expensive, and both are correct depending on the time horizon.",
      "The reader should focus on three things: Azure's growth durability, the return on AI capex, and whether Copilot expands the software budget or merely shifts it."
    ],
    "questions": [
      "How much of Azure growth is AI inference versus traditional cloud migration?",
      "When does the capex cycle peak relative to revenue?",
      "Is Copilot incremental revenue or a defensive feature?",
      "What would a 10% enterprise IT budget cut do to growth?"
    ]
  }
};
