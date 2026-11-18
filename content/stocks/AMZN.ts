import type { StockStory } from "./types";

export const AMZN: StockStory = {
  "ticker": "AMZN",
  "kicker": "Retail · Cloud infrastructure",
  "title": "Amazon's retail scale funds a cloud and advertising profit pool",
  "dek": "The headline is a low-margin retailer. The economics are a high-margin cloud and advertising business attached to the largest online store in the West.",
  "readingMinutes": 12,
  "takeaways": [
    "Revenue: $797.5B trailing twelve months, +15.4% year over year.",
    "Profitability: 13.1% operating margin and 16.9% net margin.",
    "Cash: -$46.9B free cash flow, a -5.9% margin.",
    "Scorecard: 45/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm",
  "irUrl": "https://ir.aboutamazon.com/",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000038/amzn-20260930xex991.htm",
  "bigPicture": {
    "paragraphs": [
      "AMAZON COM INC. generated $797.5B of revenue over the last twelve months, +15.4% versus the prior year. The business depends on traffic, basket size and the cost of serving the next customer.",
      "The latest reported quarter was Q3 FY26, with $201.9B of revenue and an operating margin of 13.9%. The stock closed at $257.89 on 2026-11-17, giving a market capitalization of $2.79T.",
      "The shares sit 68% of the way up their 52-week range ($196.00 to $287.20). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Amazon's valuation is a bet on the profit mix, not the revenue line. The retail business is the moat; AWS and advertising are the economics."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company reports three segments: North America, International and AWS. North America includes online stores, physical stores, advertising and Prime subscriptions. International is the same model outside North America. AWS sells compute, storage, databases and AI services.",
      "The segment split understates the profit concentration. North America is 59.5% of revenue, International 22.6% and AWS 18.0%, but AWS carries a much higher operating margin and advertising is embedded inside the retail segments.",
      "Amazon's logistics network is a strategic asset. It has moved from relying on third-party carriers to delivering a large share of its own packages, which improves speed and control but adds fixed cost."
    ],
    "bullets": [
      {
        "title": "North America",
        "detail": "59.5% of revenue. Online and physical retail, Prime, advertising and the logistics network."
      },
      {
        "title": "International",
        "detail": "22.6% of revenue. A long-duration growth market with mixed profitability."
      },
      {
        "title": "AWS",
        "detail": "18.0% of revenue. Cloud infrastructure and AI services, and the main profit engine."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Retail earns a thin margin on the products it sells and a much better margin on advertising and Prime subscriptions. AWS earns a software-like margin on infrastructure usage. The consolidated margin is therefore a function of mix: every point of AWS or advertising growth lifts profitability.",
      "The United States is 68.3% of revenue, non-US 15.0%, Germany 6.4% and the United Kingdom 6.0%. The geographic mix is more US-centric than Alphabet's or Apple's, which reduces currency risk but concentrates regulatory and consumer exposure.",
      "Advertising is the hidden profit pool. It is recorded inside the retail segments and grows with traffic and Prime engagement, but it does not require the same capital as fulfillment."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 16.9% a year across the fiscal years in the dataset, and the latest quarter changed +12.1% year over year. Third-party estimates for the current fiscal year point to $829.2B of revenue and $12.80 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 13.1% and return on invested capital of 12.3% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "AWS AI workloads",
        "detail": "Enterprise AI training and inference are incremental cloud demand, but AWS faces intense competition from Azure and Google Cloud."
      },
      {
        "title": "Advertising",
        "detail": "Sponsored products and streaming ads monetise existing traffic at high incremental margins."
      },
      {
        "title": "Prime and logistics",
        "detail": "Faster delivery and subscription bundles increase purchase frequency and retention."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 13.1%, the net margin is 16.9% and diluted EPS is $12.37. The latest quarter's operating margin was 13.9%.",
      "Return on equity is 22.0%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $201.9B, an operating margin of 13.9% and a net margin of 10.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was -$46.9B, a -5.9% margin. Net debt is $58.9B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was -$46.9B over the last twelve months and net debt was $58.9B; interest cover was 49.4x."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 20.7x trailing earnings and 15.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $326.09; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "60 analysts contribute to the third-party consensus. The mean target is $326.09, with a range of $230.00 to $405.00.",
      "Current-year estimates call for $829.2B of revenue and $12.80 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 60 analysts with a mean target of $326.09; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Amazon's risks are capital intensity, competition and margin mix. The retail business is durable; the question is how much profit it converts.",
    "items": [
      {
        "title": "Negative free cash flow",
        "severity": "High",
        "detail": "Capex is running ahead of operating cash flow. A prolonged investment cycle without matching revenue growth would pressure the valuation.",
        "watch": "Capital expenditure guidance and the gap between operating cash flow and capex."
      },
      {
        "title": "AWS competition",
        "severity": "High",
        "detail": "Microsoft and Google are aggressive in AI cloud. AWS's growth premium and pricing power are not guaranteed.",
        "watch": "AWS growth relative to Azure and Google Cloud, and segment operating margin."
      },
      {
        "title": "Retail margin pressure",
        "severity": "Medium",
        "detail": "Fulfillment, labor and delivery costs can absorb the benefits of advertising growth.",
        "watch": "North America operating margin and cost per package."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Antitrust and labor rules could affect marketplace practices, Prime bundling and logistics.",
        "watch": "US and EU antitrust proceedings and labor classification rules."
      },
      {
        "title": "Consumer cyclicality",
        "severity": "Low",
        "detail": "Retail revenue is exposed to consumer spending, though Prime and essentials provide some stability.",
        "watch": "Consumer confidence and discretionary category growth."
      }
    ],
    "watchlist": [
      {
        "title": "AWS growth",
        "detail": "The main profit engine and the cleanest read on AI cloud demand."
      },
      {
        "title": "Capex versus operating cash flow",
        "detail": "The crossover point determines when free cash flow recovers."
      },
      {
        "title": "Advertising revenue",
        "detail": "High-margin revenue that improves the consolidated mix without heavy capital."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Amazon is a scaled retailer with two high-margin engines attached. The operating margin turnaround since 2022 is real, and the balance sheet can support the investment cycle.",
      "The educational point is that revenue growth and profit growth are not the same thing. Amazon's revenue is enormous, but the valuation depends on the mix shift toward AWS and advertising and on the capex cycle eventually normalising.",
      "The key questions are how fast AWS grows, how much capex the AI build requires, and whether retail margins can keep expanding."
    ],
    "questions": [
      "What share of operating income comes from AWS?",
      "When does capex peak as a share of revenue?",
      "How much advertising revenue is embedded in the retail segments?",
      "What happens to the valuation if AWS growth falls to 15%?"
    ]
  }
};
