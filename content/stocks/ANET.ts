import type { StockStory } from "./types";

export const ANET: StockStory = {
  "ticker": "ANET",
  "kicker": "Technology · Data-center networking",
  "title": "Arista's switches carry software margins on hardware revenue",
  "dek": "A 62.9% gross margin from selling boxes is the anomaly. The explanation is the operating system, and the risk is who buys it.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $11.9B trailing twelve months, +40.7% year over year.",
    "Profitability: 43.8% operating margin and 1.4% net margin.",
    "Cash: $3.8B free cash flow, a 31.9% margin.",
    "Scorecard: 69/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000013/anet-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001596532&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Arista Networks, Inc. generated $11.9B of revenue over the last twelve months, +40.7% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q3 FY26, with $3.7B of revenue and an operating margin of 44.9%. The stock closed at $186.42 on 2026-11-17, giving a market capitalization of $235.5B.",
      "The shares sit 70% of the way up their 52-week range ($114.52 to $217.41). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A switch is a commodity. A network that thousands of servers depend on is not. Arista is paid for the second and ships the first."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product line covers data-center switching, campus and branch networking, and the software that manages both. Customers fall into two groups. Cloud and AI customers buy very large numbers of high-speed switches for a small number of sites. Enterprise customers buy smaller quantities across many sites, with more software and support attached.",
      "The split matters because the two groups have different economics. Cloud orders are large, negotiated hard and delivered fast. Enterprise orders carry more software and services and renew over years. Arista's growth has been driven by the first group, and its durability depends on the second.",
      "The company employs 2,613 people, which is small for a business of this revenue. That is possible because the manufacturing is outsourced and the engineering effort goes into one architecture rather than a broad portfolio."
    ],
    "bullets": [
      {
        "title": "Cloud and AI switching",
        "detail": "High-speed Ethernet for the networks that connect large clusters of servers and accelerators. The fastest-growing and most concentrated part."
      },
      {
        "title": "Enterprise and campus",
        "detail": "Smaller deployments with more software, management and support attached. The diversification story."
      },
      {
        "title": "EOS and management software",
        "detail": "The network operating system and the tools that run it. Not a separate revenue line, but the reason the hardware earns a software margin."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 62.9% is high for a hardware seller. Part of the explanation is that Arista designs the system rather than assembling commodity parts, and part is that the software is bundled into the price of the switch. A customer buying a switch is also buying the operating system it runs, and that is where the pricing power sits.",
      "Operating margin of 43.8% is higher still, which is unusual for a company with a concentrated customer base. Large orders carry low selling costs, and one architecture spread across the product line keeps research spending efficient. The quarterly record shows how stable this is: 44.7%, 42.4%, 41.5%, 42.7%, 45.4% and 44.9%.",
      "The unit economics are therefore closer to a software company than to a hardware company, with one important difference: the revenue is recognized when switches ship, so a single customer's deployment schedule can move a quarter. Software companies with subscription billing have a smoother line."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 24.6% a year across the fiscal years in the dataset, and the latest quarter changed +58.5% year over year. Third-party estimates for the current fiscal year point to $13.4B of revenue and $4.38 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 43.8% and return on invested capital of 197.2% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 43.8%, the net margin is 1.4% and diluted EPS is $3.72. The latest quarter's operating margin was 44.9%.",
      "Return on equity is 1.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $3.7B, an operating margin of 44.9% and a net margin of 42.7%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $3.8B, a 31.9% margin. The balance sheet carries $14.4B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $3.8B over the last twelve months and net debt was -$14.4B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 1368.5x trailing earnings and 41.7x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $249.65; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "29 analysts contribute to the third-party consensus. The mean target is $249.65, with a range of $201.73 to $305.00.",
      "Current-year estimates call for $13.4B of revenue and $4.38 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 29 analysts with a mean target of $249.65; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Arista's risks are concentrated in its customer list. The product position is strong; the question is how few buyers stand behind it.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "A small number of cloud and AI customers account for a large share of revenue. A change in one deployment plan is visible in the next quarter.",
        "watch": "Concentration disclosures and the split between cloud and enterprise revenue."
      },
      {
        "title": "Hyperscale capital spending",
        "severity": "High",
        "detail": "The growth rate depends on cluster construction continuing at the current pace. Networking is bought after compute, so a pause in accelerators reaches Arista with a delay.",
        "watch": "Customer capital-expenditure guidance and order patterns."
      },
      {
        "title": "Merchant silicon and white boxes",
        "severity": "High",
        "detail": "The same silicon is available to any competitor, and large customers can build their own switches with their own software. That caps pricing over time.",
        "watch": "Gross margin and the share of revenue from customers with in-house networking teams."
      },
      {
        "title": "Competition from incumbents",
        "severity": "Medium",
        "detail": "The largest networking vendor has a much broader installed base and can bundle switching with other infrastructure.",
        "watch": "Win rates at enterprise accounts and the pace of campus adoption."
      },
      {
        "title": "Earnings quality",
        "severity": "Low",
        "detail": "A one-time charge has made the trailing net margin and P/E unreadable for now. The operating business is unaffected.",
        "watch": "Whether net margin returns to the FY2025 level as the charge rolls out of the trailing period."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "The 62.9% figure is the proof of pricing power. A decline would mean the software premium is eroding."
      },
      {
        "title": "Enterprise revenue share",
        "detail": "The measure of whether the customer base is broadening beyond a few cloud buyers."
      },
      {
        "title": "Operating margin",
        "detail": "It has held in a narrow band for six quarters. Watch whether growth starts to cost margin."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Arista is a networking company that earns software economics on hardware revenue: 62.9% gross margin, 43.8% operating margin and $3.79B of free cash flow. Revenue of $11.89B grew 40.7% and the latest quarter grew 58.5%.",
      "The financial statements carry one large distortion. A charge in Q4 FY2025 pushed the trailing net margin to 1.4% and the P/E to four digits, which makes both numbers useless for comparison. The FY2025 net margin of 39.0% is the better reference.",
      "The educational point is that not every reported multiple means something. When a one-off item moves the denominator, the honest response is to switch to a measure it did not touch and to say so plainly."
    ],
    "questions": [
      "What share of revenue comes from the three largest customers?",
      "How much of the growth is ports versus price per port?",
      "Does enterprise revenue grow when cloud orders slow?",
      "How much of the 62.9% gross margin is attributable to bundled software?"
    ]
  }
};
