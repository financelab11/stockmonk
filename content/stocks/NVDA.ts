import type { StockStory } from "./types";

export const NVDA: StockStory = {
  "ticker": "NVDA",
  "kicker": "Semiconductors · AI infrastructure",
  "title": "Nvidia sells the picks and shovels of the AI build-out",
  "dek": "A platform company whose growth, margins and concentration all trace back to one question: how long will customers keep paying up for accelerated computing?",
  "readingMinutes": 12,
  "takeaways": [
    "Revenue: $303B trailing twelve months, +83.4% year over year.",
    "Profitability: 65.2% operating margin and 63.7% net margin.",
    "Cash: $127B free cash flow, a 41.9% margin.",
    "Scorecard: 79/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
  "irUrl": "https://investor.nvidia.com/",
  "bigPicture": {
    "paragraphs": [
      "NVIDIA CORP. generated $303B of revenue over the last twelve months, +83.4% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q2 FY27, with $96.2B of revenue and an operating margin of 66.2%. The stock closed at $155.46 on 2026-11-17, giving a market capitalization of $3.75T.",
      "The shares sit 7% of the way up their 52-week range ($148.80 to $243.37). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "The central debate is not whether Nvidia is a good business. It is how much of the current spending is a durable platform shift versus a one-time capacity build."
  },
  "whatItDoes": {
    "paragraphs": [
      "Nvidia designs chips and the systems around them. Data-center customers buy GPU modules, full server systems, InfiniBand and Ethernet networking, and the software stack that makes those pieces usable. The company outsources fabrication to partners such as TSMC, which keeps capital intensity lower than an integrated manufacturer but ties Nvidia to a narrow supply base.",
      "The Graphics segment still serves gaming, professional visualization and automotive customers. It is a real business with loyal users, but at 10.4% of revenue it is now a supporting act. The reportable segment split understates the importance of software: CUDA, libraries and developer tools create switching costs that are not visible as a separate revenue line."
    ],
    "bullets": [
      {
        "title": "Compute & Networking",
        "detail": "Data-center GPUs, networking and systems. 89.6% of annual revenue and the engine of the AI build-out."
      },
      {
        "title": "Graphics",
        "detail": "Gaming, professional visualization and automotive chips. 10.4% of revenue and a useful demand diversifier."
      },
      {
        "title": "Supply chain",
        "detail": "Fabless model with leading-edge capacity concentrated at TSMC. Execution depends on packaging and memory availability as much as chip design."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Nvidia earns a gross margin above 70% because customers are buying a complete platform, not a commodity chip. The value comes from performance per watt, the maturity of the software ecosystem and the fact that switching a trained model to another accelerator is expensive. That pricing power is the source of the unusually high operating margin.",
      "Geographically, 69.3% of revenue is billed in the United States, 19.6% in Taiwan and 9.1% in China including Hong Kong. The Taiwan figure reflects where systems are assembled and shipped rather than where the ultimate customer sits, so it should not be read as end-demand concentration. The China exposure is the more important number because export controls can change it quickly.",
      "A useful way to read the mix is to separate where revenue is recognized from where demand originates. Hyperscalers and sovereign AI projects are global, but the billing location and the export-licence regime determine what Nvidia can actually ship."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 64.4% a year across the fiscal years in the dataset, and the latest quarter changed +105.9% year over year. Third-party estimates for the current fiscal year point to $412B of revenue and $9.34 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 65.2% and return on invested capital of 95.8% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Data-center capex",
        "detail": "Hyperscalers are still increasing AI infrastructure budgets. Nvidia's order book and supply commitments are the cleanest read on near-term demand."
      },
      {
        "title": "Networking attach",
        "detail": "InfiniBand and Spectrum-X Ethernet expand the revenue per AI cluster and deepen the platform relationship."
      },
      {
        "title": "Product cadence",
        "detail": "Annual architecture transitions give customers a reason to refresh and help Nvidia defend pricing against custom silicon."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 65.2%, the net margin is 63.7% and diluted EPS is $7.91. The latest quarter's operating margin was 66.2%.",
      "Return on equity is 84.2%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q2 FY27: revenue of $96.2B, an operating margin of 66.2% and a net margin of 62.0%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $127B, a 41.9% margin. The balance sheet carries $66B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $127B over the last twelve months and net debt was -$66B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 19.5x trailing earnings and 18.3x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $265.23; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "55 analysts contribute to the third-party consensus. The mean target is $265.23, with a range of $130.00 to $515.00.",
      "Current-year estimates call for $412B of revenue and $9.34 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 55 analysts with a mean target of $265.23; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Nvidia's risks are mostly strategic rather than financial. The balance sheet is strong; the uncertainty is about demand concentration, geopolitics and the durability of pricing power.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of hyperscale customers account for a large share of data-center revenue. A coordinated capex pause would hit revenue and margins at the same time.",
        "watch": "Hyperscaler capital-expenditure guidance and Nvidia's own supply commitments."
      },
      {
        "title": "Export controls and China",
        "severity": "High",
        "detail": "US export rules can remove addressable market or force lower-spec products. China including Hong Kong was 9.1% of annual revenue.",
        "watch": "Changes to licence rules and the revenue contribution from China."
      },
      {
        "title": "Supply-chain concentration",
        "severity": "Medium",
        "detail": "Leading-edge fabrication and advanced packaging are concentrated in Taiwan. A disruption would be difficult to route around quickly.",
        "watch": "TSMC capacity announcements, CoWoS packaging availability and lead times."
      },
      {
        "title": "Custom silicon and competition",
        "severity": "Medium",
        "detail": "Large customers are designing their own accelerators, and AMD is improving its data-center lineup. Custom chips may not replace Nvidia, but they can cap pricing.",
        "watch": "Design wins at hyperscalers and the pace of Nvidia's annual architecture transitions."
      },
      {
        "title": "Cyclicality of peak margins",
        "severity": "Medium",
        "detail": "Operating margin has ranged from 15.7% to 65.2% in the last four years. A demand air pocket would compress the multiple and the earnings base together.",
        "watch": "Inventory, days sales outstanding and gross-margin guidance."
      }
    ],
    "watchlist": [
      {
        "title": "Hyperscaler capex",
        "detail": "The quarterly capex plans of the largest cloud customers are the leading indicator for Nvidia's order book."
      },
      {
        "title": "Gross margin",
        "detail": "A sustained move below the low 70s would suggest pricing pressure or a richer mix of lower-margin systems."
      },
      {
        "title": "China revenue",
        "detail": "Track the absolute dollar contribution, not just the percentage, because the base is changing quickly."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Nvidia is a high-quality platform business enjoying an extraordinary demand cycle. The financial statements show real pricing power, a net-cash balance sheet and cash conversion that most semiconductor companies never achieve.",
      "The educational point is the difference between a good company and a good investment at a given price. The stock's 23x trailing earnings multiple looks reasonable against 83% growth, but both the multiple and the growth depend on the same variable: sustained AI infrastructure spending.",
      "A reader should leave with three questions: How concentrated is the customer base? How much of the margin is cycle versus platform? And what would a 12-month pause in hyperscaler capex do to the earnings base?"
    ],
    "questions": [
      "What share of data-center revenue comes from the top few customers?",
      "How much of the 65% operating margin is protected by software switching costs?",
      "What happens to the multiple if growth decelerates to 20%?",
      "Is the China exposure priced as optionality or as a permanent part of the base?"
    ]
  }
};
