import type { StockStory } from "./types";

export const SITM: StockStory = {
  "ticker": "SITM",
  "kicker": "Semiconductors · Timing and oscillators",
  "title": "SiTime replaced quartz with silicon, and the profit has not caught up",
  "dek": "Revenue went from $144.0M in FY2023 to $683.0M on a trailing basis. Operating margin is 0.9%, and $994.8M of net debt sits between a 56.2% gross margin and the bottom line.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $683M trailing twelve months, +142.6% year over year.",
    "Profitability: 0.9% operating margin and 3.9% net margin.",
    "Cash: $41.4M free cash flow, a 6.1% margin.",
    "Scorecard: 21/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1451809/000145180926000012/sitm-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001451809&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "SiTime Corporation generated $683M of revenue over the last twelve months, +142.6% versus the prior year. The cycle is driven by inventory, utilisation and the next node or packaging transition.",
      "The latest reported quarter was Q3 FY26, with $298.7M of revenue and an operating margin of 2.8%. The stock closed at $422.27 on 2026-11-17, giving a market capitalization of $12.8B.",
      "The shares sit 27% of the way up their 52-week range ($243.68 to $901.81). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "A timing device is a small fraction of a bill of materials and a large fraction of the field failures if it drifts. That is the argument for paying more for a better oscillator."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product set is a hierarchy. At the bottom is the resonator, the vibrating element that generates a reference frequency. Above it sits the clock IC that drives the resonator and shapes the output. At the top is the packaged oscillator that a customer solders onto a board. SiTime sells all three levels, which means it can supply a discrete component to a customer who wants to design the rest, or a finished oscillator to one who wants a single part number.",
      "The applications are chosen for difficulty rather than size. Automotive electronics need timing that does not drift over temperature and does not fail from vibration. Communications infrastructure needs very low noise so that a radio or a SerDes link can lock. Industrial equipment needs a part that will still be available in ten years. Those requirements are where a programmable silicon resonator wins against a fixed quartz blank.",
      "The distribution model matters for the economics. Selling through distributors and resellers means a broad customer base can be reached without a large direct sales force, and it means volume arrives as many small orders rather than a few contracts. That structure supports a 56.2% gross margin while keeping the fixed cost base small enough for 377 employees to run."
    ],
    "bullets": [
      {
        "title": "Resonators",
        "detail": "The MEMS element that replaces a quartz blank. Small, shock-resistant and manufactured on a semiconductor process."
      },
      {
        "title": "Clock ICs",
        "detail": "The circuit that drives the resonator and produces the output frequency. Programmability is the differentiator."
      },
      {
        "title": "Oscillators",
        "detail": "The packaged part a customer places on a board. The highest-value form of the product and the one closest to the design decision."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 56.2% is the healthy part of the model. A silicon resonator costs less to produce at volume than a precision quartz part, and the programmable architecture means one design can serve many frequencies. That is a real cost advantage, and it is why the company has been able to take share while holding price.",
      "The operating line is where the model breaks down. Operating margin of 0.9% against a 56.2% gross margin means operating expense is consuming almost the entire contribution. Research and development, applications engineering and the field support needed to displace an entrenched incumbent technology are all expensive, and they have to be spent before the revenue arrives.",
      "The capital structure adds a second claim on the business. Net debt of $994.8M, at 8.8x EBITDA, is unusual for a company of this size and this profitability. It means the income statement carries a financing cost that a debt-free competitor does not, and it means the equity is leveraged to any change in operating profit. The trailing net margin of 3.9% sits slightly above the operating margin, so non-operating items are not currently a net drag, but the debt is the reason the balance sheet deserves as much attention as the growth rate."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 25.4% a year across the fiscal years in the dataset, and the latest quarter changed +257.4% year over year. Third-party estimates for the current fiscal year point to $906.4M of revenue and $12.73 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 0.9% and return on invested capital of 0.1% are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Quartz displacement",
        "detail": "Each socket converted from a quartz oscillator to a silicon one adds a customer that does not switch back."
      },
      {
        "title": "Automotive and industrial",
        "detail": "Long design cycles and qualification requirements make these the stickiest end markets."
      },
      {
        "title": "Programmability",
        "detail": "One silicon design can serve many frequencies, which lowers inventory risk for distributors and customers."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 0.9%, the net margin is 3.9% and diluted EPS is $1.00. The latest quarter's operating margin was 2.8%.",
      "Return on equity is 0.8%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $298.7M, an operating margin of 2.8% and a net margin of 1.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $41.4M, a 6.1% margin. Net debt is $994.8M.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $41.4M over the last twelve months and net debt was $994.8M; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 482.1x trailing earnings and 122.1x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $713.75; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "12 analysts contribute to the third-party consensus. The mean target is $713.75, with a range of $425.00 to $900.00.",
      "Current-year estimates call for $906.4M of revenue and $12.73 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 12 analysts with a mean target of $713.75; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "SiTime carries more financial risk than its growth rate suggests. The leverage is real, the operating margin is thin, and the valuation depends on a margin recovery that has not yet appeared.",
    "items": [
      {
        "title": "Margin conversion failure",
        "severity": "High",
        "detail": "Revenue more than doubled sequentially in Q3 FY26 while the operating margin fell from 5.2% to 2.8%. If a 56.2% gross margin cannot produce operating leverage at this scale, the forward estimates are unreachable.",
        "watch": "Operating margin each quarter and the ratio of operating expense to revenue."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $994.8M is 8.8x EBITDA. A revenue miss reduces EBITDA and raises that ratio at the same time, which is the wrong direction for a company with a 6.1% cash margin.",
        "watch": "Net debt to EBITDA, interest cost and any refinancing disclosure."
      },
      {
        "title": "One-quarter revenue concentration",
        "severity": "High",
        "detail": "The step from $157.4M to $298.7M in a single quarter is not typical oscillator demand. If it came from a narrow set of programmes, it can reverse as quickly.",
        "watch": "Sequential revenue and any disclosure about large customers or distributor inventory."
      },
      {
        "title": "Technology substitution risk in reverse",
        "severity": "Medium",
        "detail": "The business exists because silicon can replace quartz. Incumbent timing suppliers can improve their own parts, and the switching argument weakens if the performance gap narrows.",
        "watch": "Gross margin and design-win commentary at automotive and communications customers."
      },
      {
        "title": "Inventory in the channel",
        "severity": "Medium",
        "detail": "Selling through distributors means revenue can be pulled forward by channel stocking. The FY2023 collapse from $283.6M to $144.0M shows how violent the unwind can be.",
        "watch": "Distributor inventory commentary and days of inventory."
      },
      {
        "title": "Valuation sensitivity",
        "severity": "Medium",
        "detail": "At 120.7x EV/EBITDA, small changes in the earnings denominator produce large changes in the implied value. The shares have traded between $243.68 and $901.81 in a year.",
        "watch": "The gap between trailing and forward earnings, and the dispersion of analyst estimates."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The only variable that can justify the forward estimates, and the one that has not moved."
      },
      {
        "title": "Net debt",
        "detail": "$994.8M at 8.8x EBITDA leaves little room for a slow quarter."
      },
      {
        "title": "Sequential revenue durability",
        "detail": "Whether the $298.7M quarter becomes a base or a spike decides the next two years."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "SiTime has a genuine technology substitution story, a 56.2% gross margin and revenue that has multiplied. It also has a 0.9% operating margin, $994.8M of net debt and a valuation that assumes a profitability inflection the reported accounts have not delivered.",
      "Several facts would change the analysis and none of them is in the dataset: what caused revenue to double in a single quarter, whether that level is a base or a spike, and how much of the 56.2% gross margin survives the next product mix.",
      "Growth and progress are different things. Tripling sales while the operating margin sits at 0.9% and the balance sheet carries $994.8M of debt is not the same achievement as tripling sales with a widening margin, and only one of those supports the current price."
    ],
    "questions": [
      "What produced the jump from $157.4M to $298.7M of quarterly revenue?",
      "Why did operating profit fall when revenue doubled?",
      "What operating margin is embedded in the consensus EPS of $12.73?",
      "How much of the $994.8M net debt matures in the next three years?"
    ]
  }
};
