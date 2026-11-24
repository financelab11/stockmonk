import type { StockStory } from "./types";

export const NVDA: StockStory = {
  "ticker": "NVDA",
  "kicker": "Semiconductors · AI infrastructure",
  "title": "Nvidia sells the picks and shovels of the AI build-out",
  "dek": "Revenue grew 106% and guidance rose again, yet the shares are down 16% over a year. The gap between the business and the multiple is the report.",
  "readingMinutes": 12,
  "takeaways": [
    "Revenue: $303B trailing twelve months, +83.4% year over year.",
    "Profitability: 65.2% operating margin and 63.7% net margin.",
    "Cash: $127B free cash flow, a 41.9% margin.",
    "Factor summary: 80/100 average percentile across the factor set."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000021/nvda-20260125.htm",
  "irUrl": "https://investor.nvidia.com/",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000073/q2fy27pr.htm",
  "narrativeSource": "auto-curated",
  "narrativeUpdatedAt": "2026-11-24",
  "bigPicture": {
    "paragraphs": [
      "NVIDIA Corporation generated $303B of revenue over the last twelve months, +83.4% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q2 FY27, with $96.2B of revenue and an operating margin of 66.2%. The stock closed at $165.05 on 2026-11-23, giving a market capitalization of $3.99T.",
      "The shares sit 34% of the way up their 52-week range ($124.50 to $243.37). The analysis uses reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "NVDA is a Technology business with $303B of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast."
  },
  "whatItDoes": {
    "paragraphs": [
      "Nvidia designs chips and the systems around them. Data-center customers buy GPU modules, full server systems, InfiniBand and Ethernet networking, and the software stack that makes those pieces usable. The company outsources fabrication to partners such as TSMC, which keeps capital intensity lower than an integrated manufacturer but ties Nvidia to a narrow supply base.",
      "The Graphics segment still serves gaming, professional visualization and automotive customers. It is a real business with loyal users, but at $7.9B against $96.2B of quarterly revenue it is now a supporting act. The reportable segment split understates the importance of software: CUDA, libraries and developer tools create switching costs that are not visible as a separate revenue line."
    ],
    "bullets": [
      {
        "title": "Compute & Networking",
        "detail": "Data-center GPUs, networking and systems. $88.3B of the $96.2B reported in Q2 FY2027, or 91.8% of revenue."
      },
      {
        "title": "Graphics",
        "detail": "Gaming, professional visualization and automotive chips. $7.9B in Q2, up 46% year over year, and a useful demand diversifier."
      },
      {
        "title": "Supply chain",
        "detail": "Fabless model with leading-edge capacity concentrated at TSMC. Execution depends on packaging and memory availability as much as chip design."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Nvidia earns a gross margin above 70% because customers are buying a complete platform, not a commodity chip. The value comes from performance per watt, the maturity of the software ecosystem and the fact that switching a trained model to another accelerator is expensive. That pricing power is the source of the unusually high operating margin, and it is why a 75.0% gross margin survived a quarter in which revenue rose 18% sequentially.",
      "The demand mix matters more than the billing geography. In Q2, hyperscale customers accounted for $48.7B of Data Center revenue and AI clouds, industrial and enterprise customers accounted for $40.3B, up 138% year over year. The second group is the faster-growing one, which is a meaningful change from the earlier phase of the build-out when a handful of cloud budgets drove almost everything.",
      "China is now a policy variable rather than a revenue line in guidance. Management excluded Data Center compute revenue from China from the third-quarter outlook, so the guidance is a statement about the rest of the world. A useful way to read the mix is to separate where revenue is recognized from where demand originates: hyperscalers and sovereign AI projects are global, but the billing location and the export-licence regime determine what Nvidia can actually ship."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 51.6% a year across the fiscal years in the dataset, and the latest quarter changed +105.9% year over year. Third-party estimates for the current fiscal year point to $423.7B of revenue and $9.67 of EPS.",
      "Growth matters when it produces a return on capital. The operating margin of 65.2% and return on invested capital of 63.0% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Product cycle",
        "detail": "New products and platform transitions create refresh demand and pricing power."
      },
      {
        "title": "Customer expansion",
        "detail": "Land-and-expand selling raises revenue per existing customer and lengthens the relationship."
      },
      {
        "title": "Operating leverage",
        "detail": "Incremental revenue can carry high gross margins once development and sales costs are in place."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 65.2%, the net margin is 63.7% and diluted EPS is $7.91. The latest quarter's operating margin was 66.2%. The quarter shown is the latest reported period in the dataset.",
      "Return on equity is 84.2%. Capital intensity should be measured against the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow after capex over the trailing period was $127B, a 41.9% margin. Net debt is $11.9B. The cash figures are trailing twelve-month values unless the section says otherwise.",
      "Cash conversion connects earnings to distributable cash and the capital returned to owners. Net income has outrun free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 20.7x trailing earnings and 19.9x EV/EBITDA. The valuation reflects the growth and margin record described above, not for the past alone.",
      "The attributed third-party mean target is $244.71; that is a consensus figure, not a Stockmonk price target. The peer comparison sets out the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "58 analysts contribute to the third-party consensus. The mean target is $244.71, with a range of $130.00 to $425.00. The consensus is a third-party snapshot and can change without notice.",
      "Current-year estimates call for $423.7B of revenue and $9.67 of EPS. Third-party estimates can change without notice; they are shown for context, not as a recommendation."
    ]
  },
  "risks": {
    "intro": "Nvidia's risks are mostly strategic rather than financial. The balance sheet is strong; the uncertainty is about demand concentration, geopolitics and the durability of pricing power at the top of the margin range.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of hyperscale customers still account for a large share of data-center revenue, even as the non-hyperscale group grows faster. A coordinated capex pause would hit revenue and margins at the same time.",
        "watch": "Hyperscaler capital-expenditure guidance and the hyperscale versus AI-cloud split in each quarter."
      },
      {
        "title": "Export controls and China",
        "severity": "High",
        "detail": "Third-quarter guidance assumes no Data Center compute revenue from China. Further tightening, or a decision to re-enter with lower-spec products, changes both the revenue base and the margin mix.",
        "watch": "Licence rules, the China commentary on each call and whether guidance starts to include any China compute again."
      },
      {
        "title": "Supply-chain concentration",
        "severity": "Medium",
        "detail": "Leading-edge fabrication and advanced packaging are concentrated in Taiwan. A disruption would be difficult to route around quickly enough to protect the guided quarter.",
        "watch": "TSMC capacity announcements, CoWoS packaging availability and lead times."
      },
      {
        "title": "Custom silicon and competition",
        "severity": "Medium",
        "detail": "Large customers are designing their own accelerators and AMD is improving its data-centre lineup. Custom chips may not replace Nvidia, but they can cap pricing at the margin.",
        "watch": "Design wins at hyperscalers and the pace of Nvidia's annual architecture transitions."
      },
      {
        "title": "Cyclicality of peak margins",
        "severity": "Medium",
        "detail": "The operating margin has ranged from 15.7% to 66.2% in four years. A demand air pocket would compress the multiple and the earnings base together, and the current multiple is set on the top of that range.",
        "watch": "Inventory, days sales outstanding and gross-margin guidance."
      }
    ],
    "watchlist": [
      {
        "title": "Hyperscaler capex",
        "detail": "The quarterly capex plans of the largest cloud customers remain the leading indicator for the order book."
      },
      {
        "title": "Gross margin",
        "detail": "Guidance is 74.0% for the third quarter. A sustained move below the low 70s would suggest pricing pressure or a richer mix of lower-margin systems."
      },
      {
        "title": "China policy",
        "detail": "Track the absolute dollar contribution if compute sales resume, not just the percentage, because the base is changing quickly."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Nvidia is a high-quality platform business enjoying an extraordinary demand cycle. The latest quarter shows real pricing power: revenue up 106%, a 75% gross margin, $127B of trailing free cash flow and a net cash balance sheet.",
      "The educational point is the difference between a good company and a good investment at a given price. At {{pe}} trailing earnings against 83% trailing growth, the multiple looks reasonable, but both the multiple and the growth depend on the same variable: sustained AI infrastructure spending. The shares are {{return1y}} over a year while EPS rose, which is what multiple compression looks like before it shows up in the headlines.",
      "A reader should leave with three questions: how concentrated the customer base remains after the shift toward AI clouds and enterprise; how much of the 66% operating margin is cycle versus platform; and what a 12-month pause in hyperscaler capex would do to the earnings base and the multiple together."
    ],
    "questions": [
      "What share of data-center revenue comes from the top few customers, and is that share falling?",
      "How much of the 66% operating margin survives if gross margin normalises toward the guided 74%?",
      "What happens to the multiple if growth decelerates to 20% while the earnings base keeps rising?",
      "Is China priced as optionality or excluded entirely after the third-quarter guidance?"
    ]
  }
};
