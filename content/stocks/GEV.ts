import type { StockStory } from "./types";

export const GEV: StockStory = {
  "ticker": "GEV",
  "kicker": "Industrials · Power generation and grid equipment",
  "title": "GE Vernova sells equipment for a grid that has to be rebuilt",
  "dek": "Gas turbines, grid gear and wind nacelles are long-cycle orders. The company is profitable again, but the reported net income is flattered by gains and the cash flow runs ahead of the earnings.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $44B trailing twelve months, +16.9% year over year.",
    "Profitability: 6.4% operating margin and 23.5% net margin.",
    "Cash: $17.1B free cash flow, a 38.9% margin.",
    "Scorecard: 62/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1996810/000199681026000015/gev-20251231.htm",
  "irUrl": "https://www.gevernova.com",
  "bigPicture": {
    "paragraphs": [
      "GE Vernova Inc. generated $44B of revenue over the last twelve months, +16.9% versus the prior year. Revenue is tied to capital spending, backlogs and the ability to pass through input costs.",
      "The latest reported quarter was Q3 FY26, with $12.6B of revenue and an operating margin of 11.0%. The stock closed at $779.91 on 2026-11-17, giving a market capitalization of $206.4B.",
      "The shares sit 38% of the way up their 52-week range ($530.16 to $1,195.94). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "This is a backlog business. What matters is not the quarter's revenue but the price at which future equipment was sold and whether the cost to build it holds."
  },
  "whatItDoes": {
    "paragraphs": [
      "Power is the core. Gas turbines for utilities and independent power producers, steam turbines for conventional and nuclear plants, and the service contracts that keep them running. The order book stretches years ahead, and each turbine sold creates a multi-decade parts and maintenance relationship.",
      "Electrification covers the grid itself: transformers, switchgear, high-voltage transmission equipment and the software that controls it. This is the part of the portfolio most exposed to the current wave of grid investment, because connecting new generation and new load requires hardware that is in short supply.",
      "Wind completes the set: onshore and offshore turbines, largely in Europe and North America. It is the segment that has struggled to earn a return, and its losses are the main reason the consolidated operating margin is 12.8% rather than something closer to the Power segment's own profitability."
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Equipment is sold on a contract-by-contract basis, with price agreed before the work is done. That makes margin a function of estimating and procurement quality as much as of manufacturing efficiency. When steel, copper or specialised labour costs move after the order is signed, the company absorbs the difference unless the contract has an escalation clause.",
      "Revenue is recognised over the life of the project, which is why a single quarter can look odd. A large turbine order signed in one year may contribute revenue for three. Service revenue is the stabiliser: it is recurring, priced closer to annually, and carries a better margin than new equipment because the engineering cost was sunk years ago.",
      "The consolidated economics are thinner than the product list suggests. Gross margin is 21.8% and operating margin 12.8%, so most of each revenue dollar goes to bought-in materials, project labour and warranty. Operating leverage is real but slow: fixed engineering and factory costs are spread over a backlog that takes years to convert."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 8.7% a year across the fiscal years in the dataset, and the latest quarter changed +26.8% year over year. Third-party estimates for the current fiscal year point to $47.1B of revenue and $31.80 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 6.4% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 6.4%, the net margin is 23.5% and diluted EPS is $38.00. The latest quarter's operating margin was 11.0%.",
      "Return on equity is n/a. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $12.6B, an operating margin of 11.0% and a net margin of 10.2%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $17.1B, a 38.9% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 19.9x trailing earnings and n/a EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $1,176.01; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "33 analysts contribute to the third-party consensus. The mean target is $1,176.01, with a range of $940.00 to $1,400.00.",
      "Current-year estimates call for $47.1B of revenue and $31.80 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 33 analysts with a mean target of $1.2K; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "The company has demand and a backlog. Its risks are execution on long contracts, the drag from wind, and the difficulty of valuing a business whose reported profit is not its operating profit.",
    "items": [
      {
        "title": "Wind segment losses",
        "severity": "High",
        "detail": "Offshore projects carry installation and warranty risk that can overwhelm the margin on the rest of the portfolio. The segment has been the main obstacle to a higher consolidated margin.",
        "watch": "Wind segment operating result and the provisions taken against offshore contracts."
      },
      {
        "title": "Contract estimating",
        "severity": "High",
        "detail": "Equipment is priced years before it is built. Cost inflation on copper, steel, freight or labour lands on the company if the contract lacks escalation.",
        "watch": "Gross margin by quarter and any change in contract loss provisions."
      },
      {
        "title": "Grid and turbine capacity",
        "severity": "Medium",
        "detail": "Revenue is limited by factory slots and skilled labour, not by orders. Capacity additions take years and can arrive just as demand cools.",
        "watch": "Order backlog conversion, capacity expansion announcements and lead times."
      },
      {
        "title": "Policy and permitting",
        "severity": "Medium",
        "detail": "Grid investment, offshore wind and nuclear all depend on permits, subsidies and interconnection queues that the company does not control.",
        "watch": "Utility capital plans and the pace of interconnection approvals."
      },
      {
        "title": "Earnings quality",
        "severity": "Medium",
        "detail": "Net margin above operating margin means reported profit includes items that do not recur. Valuing the shares on trailing EPS would overstate the base.",
        "watch": "The gap between operating income and pre-tax income each quarter."
      }
    ],
    "watchlist": [
      {
        "title": "Backlog and book-to-bill",
        "detail": "The order book is the leading indicator. Watch both the value and the margin embedded in new orders."
      },
      {
        "title": "Wind segment result",
        "detail": "A return to break-even in wind would lift the consolidated margin more than any other single factor."
      },
      {
        "title": "Cash versus revenue",
        "detail": "Progress payments make cash flow lumpy. A swing from inflow to outflow usually means the backlog is being consumed."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "GE Vernova is a set of long-cycle equipment franchises with a service tail, assembled into one company at the moment grid spending turned up. The operating margin has gone from negative to 12.8% in three years, and revenue reached $44.0B. The direction is clear even if the level is not yet impressive.",
      "What is not known is how much of the improvement is structural. Wind losses, contract estimating and factory utilisation all affect the same margin line, and the reported net income is too distorted by non-operating items to settle the question. The cash flow is real but reflects customer prepayments as much as profit.",
      "The valuation carries no usable trailing multiple, so the reader is left with a forecast rather than a fact. The reasonable next step is to separate the operating margin trend from the one-off gains, then ask what the backlog is worth if wind never earns a profit."
    ],
    "questions": [
      "How much of the last four quarters' net income came from below the operating line?",
      "What would the consolidated margin be if wind broke even?",
      "How much of the backlog is priced with cost escalation clauses?",
      "Is the grid capacity being added likely to arrive before or after the current order cycle peaks?"
    ]
  }
};
