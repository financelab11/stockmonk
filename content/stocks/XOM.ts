import type { StockStory } from "./types";

export const XOM: StockStory = {
  "ticker": "XOM",
  "kicker": "Energy · Integrated oil and gas",
  "title": "ExxonMobil earns the same barrel three times",
  "dek": "Upstream finds the oil, refining turns it into fuel and chemicals turns it into feedstock. Each leg has its own margin, and the consolidated income statement hides which one is carrying the year.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $395.7B trailing twelve months, +19.1% year over year.",
    "Profitability: 17.0% operating margin and 10.3% net margin.",
    "Cash: $41.1B free cash flow, a 10.4% margin.",
    "Scorecard: 54/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=10-K&dateb=&owner=include&count=40",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "EXXON MOBIL CORP. generated $395.7B of revenue over the last twelve months, +19.1% versus the prior year. Cash flow is a function of commodity prices, production volumes and capital discipline.",
      "The latest reported quarter was Q3 FY26, with $113.2B of revenue and an operating margin of 18.8%. The stock closed at $167.21 on 2026-11-17, giving a market capitalization of $682.1B.",
      "The shares sit 71% of the way up their 52-week range ($114.19 to $188.50). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "An integrated major is three margin businesses stacked on one balance sheet. Reading the consolidated margin without knowing which leg moved is guesswork."
  },
  "whatItDoes": {
    "paragraphs": [
      "Upstream is the part that finds and extracts hydrocarbons. It sells crude and gas at prices set by benchmarks, adjusted for quality and transport, so the revenue line is almost entirely a function of volume and price. The cost side is the interesting part: lifting cost, depreciation on wells and platforms, and the taxes and royalties that governments take before the company sees a dollar.",
      "Downstream buys that crude, often from the company's own upstream arm, and turns it into petrol, diesel, jet fuel, lubricants and asphalt. Chemicals takes refinery by-products and natural gas liquids and converts them into ethylene, polyethylene and other building blocks sold to packaging manufacturers and industrial customers. The refinery and the chemical plant are the customers for the upstream barrel, which is why the segments are argued about together even though they report separately."
    ],
    "bullets": [
      {
        "title": "Upstream",
        "detail": "Exploration and production of crude oil and natural gas. Revenue tracks the benchmark price, adjusted for quality and freight."
      },
      {
        "title": "Refining and fuels",
        "detail": "Crude is bought, processed and sold as finished product. The margin is the crack spread, not the crude price."
      },
      {
        "title": "Chemicals",
        "detail": "Olefins and polyolefins sold to packaging and industrial customers. Feedstock cost, usually gas-based, sets the spread."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The reported gross margin of 12.0% looks thin next to the 17.0% operating margin, and the reason is mechanical: an integrated company books the full cost of the crude it buys inside revenue, so a large slice of the top line is pass-through. Gross margin is not a measure of pricing power here. Operating margin is the better guide because it sits below the purchase cost of the barrel.",
      "Each segment has a different unit of profit. Upstream earns the difference between the realised price and the cost of lifting a barrel, which is why a low-cost position matters more than headline production growth. Refining earns the spread between what a barrel of crude costs and what the products made from it fetch, minus the energy burned to run the plant. Chemicals earns the spread between feedstock and the resin it becomes. None of those three spreads moves in step with the other two."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 3.9% a year across the fiscal years in the dataset, and the latest quarter changed not available year over year. Third-party estimates for the current fiscal year point to $436.6B of revenue and $13.69 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 17.0% and return on invested capital of 11.9% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Production volumes",
        "detail": "Growth comes from a small number of very large fields. Each one carries execution and geological risk that shows up as a cost per barrel."
      },
      {
        "title": "Refining utilisation",
        "detail": "A refinery running near capacity turns a small improvement in crack spread into a large change in operating income."
      },
      {
        "title": "Cost per barrel",
        "detail": "In a flat-price year, the only way to grow earnings is to lift the same barrel more cheaply."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 17.0%, the net margin is 10.3% and diluted EPS is $9.73. The latest quarter's operating margin was 18.8%.",
      "Return on equity is 10.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $113.2B, an operating margin of 18.8% and a net margin of 13.6%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $41.1B, a 10.4% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 16.8x trailing earnings and 7.0x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $184.18; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "22 analysts contribute to the third-party consensus. The mean target is $184.18, with a range of $160.00 to $213.00.",
      "Current-year estimates call for $436.6B of revenue and $13.69 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 22 analysts with a mean target of $184.18; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The balance sheet is strong and the asset base is diversified, so the risks are about price, project execution and the long-run demand case rather than about solvency.",
    "items": [
      {
        "title": "Crude and gas prices",
        "severity": "High",
        "detail": "Upstream revenue is a price times a volume. A sustained fall in crude removes earnings that no cost programme can replace quickly.",
        "watch": "Realised crude and gas prices against the benchmark, and the sensitivity disclosed in the filing."
      },
      {
        "title": "Refining margins",
        "severity": "High",
        "detail": "Crack spreads widened sharply after 2022 and have since narrowed. Refining is the segment most likely to surprise on the downside.",
        "watch": "Refinery utilisation, turnaround schedules and the regional crack spread."
      },
      {
        "title": "Capital allocation at the top of the cycle",
        "severity": "Medium",
        "detail": "Large projects approved when prices are high have a habit of being commissioned when prices are low. That is how integrated majors destroy value.",
        "watch": "Growth capex as a share of operating cash flow, and the returns disclosed on major projects."
      },
      {
        "title": "Regulation and litigation",
        "severity": "Medium",
        "detail": "Permitting, emissions rules and climate litigation affect both the cost of operating existing assets and the right to build new ones.",
        "watch": "Permit decisions, emissions standards and any change in the royalty and tax regime."
      },
      {
        "title": "Long-run demand for hydrocarbons",
        "severity": "Medium",
        "detail": "The assets are long-lived and the products are sold into markets that may shrink slowly. A faster decline shortens the payback period available for new projects.",
        "watch": "Low-carbon investment as a share of total capex, and the assumed demand path behind long-lived projects."
      }
    ],
    "watchlist": [
      {
        "title": "Segment earnings split",
        "detail": "Upstream, refining and chemicals each tell a different story. The consolidated margin hides which one is deteriorating."
      },
      {
        "title": "Cash breakeven",
        "detail": "The oil price at which operating cash covers the dividend and sustaining capital is the single most useful number in a downturn."
      },
      {
        "title": "Share count",
        "detail": "Buybacks at a 7.0x EV/EBITDA multiple retire more earnings per share than buybacks at 12x, so the pace matters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "ExxonMobil is a scaled, diversified hydrocarbon business with a strong balance sheet and a cash-flow profile that has held up better than its earnings. Revenue of $395.7B, a 17.0% operating margin and $41.1B of free cash flow describe a company that is comfortably profitable at today's prices.",
      "What is less clear is how much of that profit is cyclical. Operating income has fallen 35% from the FY2022 peak, and the consensus expects EPS to decline next year even with revenue flat. Both facts point at margin, not volume, as the variable that matters.",
      "The educational value here is in the segment structure. An integrated major is not a single business with a single margin; it is three spreads that happen to share a treasury. Reading the consolidated number without separating them makes a diversified company look like a simple one."
    ],
    "questions": [
      "What oil price and refining margin does the current dividend require?",
      "How much of trailing operating income came from refining rather than upstream?",
      "Is the 7.0x EV/EBITDA multiple being paid for diversification or for the current margin?",
      "What happens to the buyback if crude falls 20%?"
    ]
  }
};
