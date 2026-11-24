import type { StockStory } from "./types";

export const S: StockStory = {
  "ticker": "S",
  "kicker": "Software & Cyber · Endpoint and XDR",
  "title": "SentinelOne's agents are sticky, but its income statement is still catching up",
  "dek": "Revenue passed $1B and free cash flow turned positive, yet a 29.5% operating loss shows how much of the model still depends on outspending larger rivals.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue reached $1.1B, up 21.1%, with $56.5M of free cash flow and a -29.5% operating margin.",
    "Gross margin fell from 74.1% in FY2026 to 72.5% trailing, while the July quarter's operating loss widened to -31.1%.",
    "At 7.3x sales the shares are valued on revenue because a -31.0% net margin makes earnings multiples meaningless.",
    "Thirty analysts carry a $25 mean target that equals the price, with a $18 to $31 range."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1583708/000158370826000020/s-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001583708&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "The endpoint agent now protects enough estates to generate $1.1B of trailing revenue, up 21.1%, and $56.5M of free cash flow. The operating loss is still -29.5%, and the July 2026 quarter widened it to -31.1% from -28.8% in April. Revenue of $292.0M was a record; the profit line was not. That combination, growth with a persistent operating loss, is the case the shares have to justify. The market has rewarded the revenue line, with the shares up 58.3% over a year, while the operating margin remains far from breakeven.",
      "The product is a single agent that covers prevention, detection, response and hunting, with modules for cloud workloads, identity and a data lake that attach to the same sensor. Buyers are enterprise security teams, reached largely through channel partners who bundle the licence into a wider agreement. Gross margin of 72.5% is below a pure licence model because telemetry storage and querying are real costs that grow with usage rather than staying flat.",
      "At 7.3x sales the shares are valued on revenue because there is no meaningful earnings multiple, and the 152.6x free-cash-flow multiple shows how thin the cash line is relative to the market value. Peer median growth is 23.0%, slightly above SentinelOne's 21.1%, and the peer median operating margin is -0.1% against -29.5%. The multiple therefore assumes a margin convergence that has not started. At the current price, the market is paying for the revenue base and giving little credit for a margin that has not arrived."
    ],
    "quote": "SentinelOne converts a 72.5% gross margin into positive cash flow and a 29.5% operating loss at the same time; the difference is stock compensation and billing timing."
  },
  "whatItDoes": {
    "paragraphs": [
      "The platform covers prevention, detection, response and hunting in one agent. Customers add modules for cloud workloads, identity protection and the data lake without deploying a second sensor, which is the mechanism behind expansion revenue: the same installed base can be billed for more over time.",
      "Buyers are security teams at enterprises and mid-sized companies, usually reached through channel partners who bundle the licence into a wider reseller agreement. The company reports one consolidated revenue line, so there is no segment disclosure to lean on. The dataset also gives no geography split."
    ],
    "bullets": [
      {
        "title": "The agent",
        "detail": "A single sensor on the endpoint that scores behaviour locally rather than waiting for a signature update or a cloud verdict."
      },
      {
        "title": "The data layer",
        "detail": "Telemetry from every agent lands in a common store, which is what makes cross-domain detection and module attachment possible."
      },
      {
        "title": "The buying route",
        "detail": "Channel-led sales into security budgets that are already allocated, so growth depends on displacing an incumbent rather than creating a new line item."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a subscription per protected endpoint or workload, billed annually and recognised over the term. Pricing scales with the size of the estate and with how many modules are switched on. That is a good model when estates grow and a difficult one when a customer consolidates vendors and renegotiates at renewal.",
      "Gross margin is 72.5%, well below what a pure licence business would show. The difference is the cost of running the backend: storing and querying telemetry for every customer is a real expense that grows with usage rather than staying flat. Operating margin is -29.5% because sales and research spending still exceed the gross profit pool.",
      "The strange part of the statement is the coexistence of a 29.5% operating loss and a 5.1% free-cash-flow margin. That pattern is typical of software companies that pay a meaningful part of compensation in stock and collect cash annually in advance: the expense is recognised over twelve months while the cash arrives on day one. It is not an accounting trick, but it does mean the cash flow looks better than the economic result until stock compensation is counted."
    ]
  },
  "growth": {
    "paragraphs": [
      "Module attachment is the growth mechanism. A customer that starts with endpoint protection can add cloud, identity and data-lake coverage without deploying a second sensor, so expansion revenue comes from the installed base rather than from new logos. Revenue went from $821.5M in FY2025 to $1.0B in FY2026 and $1.1B trailing, and the July quarter was 20.6% above the year-earlier $242.2M. That is the difference between expansion and acquisition: the sensor is already deployed, so the incremental sale is a module, not a new platform.",
      "Consensus revenue decelerates rather than stalls: $1.2B for the current year, up 20.3%, and $1.4B next, up 17.9%. That is below the 23.0% peer median, so the consensus is not pricing share gains against larger platform vendors that can bundle endpoint protection into an existing agreement. The company does not disclose net revenue retention, which is the variable that would separate expansion from new-logo growth."
    ],
    "bullets": [
      {
        "title": "Module attach",
        "detail": "Adding cloud, identity and data-lake modules to an existing agent is cheaper than winning a new customer."
      },
      {
        "title": "Channel route",
        "detail": "Partners place the licence inside an existing security budget, so growth depends on displacing an incumbent."
      },
      {
        "title": "AI workloads",
        "detail": "Agent-run and cloud workloads shift where code executes, which may require coverage beyond the traditional endpoint."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "A 29.5% operating loss against a 72.5% gross margin means sales and research spending still exceed the gross profit pool. The quarterly path has been -28.3%, -29.5%, -28.8% and -31.1%, so the loss widened as revenue grew, and the July quarter's -$0.27 of EPS compared with -$0.18 in October 2025. Gross margin fell from 74.1% in FY2026 to 72.5% trailing, which suggests the cost of telemetry is rising with usage.",
      "Returns are negative by construction. ROIC is -17.7% and ROE -23.5%, against peer medians of -1.1% and a 26.9x earnings multiple for the group. The comparison that matters is operating margin: GitLab runs at -8.5%, Tenable at 4.4%, and SentinelOne at -29.5%. The gap is the distance the business has to travel before the current sales multiple can be supported by earnings."
    ]
  },
  "cash": {
    "paragraphs": [
      "Positive free cash flow alongside a 29.5% operating loss is the defining feature. The trailing figure is $56.5M, a 5.1% margin, and FY2026 produced $75.9M, or 7.4%, on operating cash flow of $76.6M and negligible capex. The bridge is stock-based compensation, which is expensed but not paid in cash, and annual billing in advance. Neither is unlimited, and the quarterly path has already swung from $38.1M to -$6.6M.",
      "Net cash of $655.2M is 7.6% of the market value and removes solvency risk; interest cover is not meaningful because there is no debt. Neither a dividend nor a buyback is reported. The capital allocation question is whether the cash is spent on sales capacity to reach operating profit or retained as a buffer, and the positive cash flow gives it room to choose. At 7.6% of the market value, the balance is large enough to fund several years of the current cost structure, but not large enough to buy a profit inflection."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 7.3x sales multiple is the only conventional measure available, because a -31.0% net margin makes P/E and EV/EBITDA meaningless. The free-cash-flow multiple is 152.6x and the yield 0.7%, so the cash return is thin relative to the market value. Peer median growth is 23.0% and the median operating margin is -0.1%; SentinelOne is growing slower and losing much more, which is the wrong side of both comparisons.",
      "At the peer median 20.3% free-cash-flow margin, $1.1B of revenue would produce about $223M, or 39x the market value. That is the scale of the improvement the multiple requires. The path runs through the operating margin, which has to move from -29.5% toward the peer median before the cash margin can expand; on the current trend, that is several years away. Even at the peer median cash margin, the multiple would still be 39x, which leaves little room for a slower margin recovery; the case depends on the operating margin moving faster than the revenue multiple compresses."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Thirty analysts in the Yahoo Finance survey of 18 November 2026 follow the shares, the widest coverage in the group, with a mean target of $25 that equals the current price. The range is $18 to $31. The ninety-day EPS revision is -8.2%, while the seven, thirty and sixty-day figures are flat.",
      "The consensus EPS of $0.32 for the current year compares with a -$1.37 GAAP loss in FY2026, so the estimate is an adjusted number that excludes stock compensation and other charges. That is the right way to forecast cash earnings and the wrong way to describe economic profit. The mean target matching the price suggests the covering group sees the shares as fairly valued while the margin convergence plays out."
    ]
  },
  "risks": {
    "intro": "The balance sheet is not the constraint here. The risks are competitive, operational and structural, and they all land on the same line: how much a customer will pay per endpoint at the next renewal.",
    "items": [
      {
        "title": "Bundled endpoint protection",
        "severity": "High",
        "detail": "Larger platform vendors can include endpoint protection inside an existing agreement at little incremental cost. That compresses price even when the product is technically competitive.",
        "watch": "Average revenue per endpoint, discounting at renewal and win rates against platform suites."
      },
      {
        "title": "Net revenue retention",
        "severity": "High",
        "detail": "If existing customers stop adding modules, growth has to come entirely from new logos, which is the more expensive kind.",
        "watch": "Disclosed retention rates and the mix of expansion versus new business in each quarter."
      },
      {
        "title": "The gap between cash and profit",
        "severity": "Medium",
        "detail": "Positive free cash flow alongside a 29.5% operating loss depends on stock compensation and upfront billing. Neither is infinite.",
        "watch": "Stock-based compensation as a share of revenue and the trend in diluted share count."
      },
      {
        "title": "Sales efficiency",
        "severity": "Medium",
        "detail": "Security buying committees are slow and channel-dependent. If the cost of winning a dollar of new revenue rises, the path to operating profit lengthens.",
        "watch": "Sales and marketing spend relative to the incremental revenue it produces."
      },
      {
        "title": "Change in what endpoints are",
        "severity": "Medium",
        "detail": "AI-assisted development and agent-run workloads can shift where code executes. A sensor built for human-operated machines may need re-architecting for machine-operated ones.",
        "watch": "Product launches aimed at AI workloads and the revenue attached to cloud and container coverage."
      }
    ],
    "watchlist": [
      {
        "title": "Net revenue retention",
        "detail": "The cleanest single measure of whether the platform is widening inside accounts or just holding on."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "Watch whether the 5.1% margin expands as revenue grows, or stays flat because spending grows with it."
      },
      {
        "title": "Gross margin",
        "detail": "A move below 70% would suggest the data platform costs more to run than the pricing assumes."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "SentinelOne has built a genuine product with a real installed base and has crossed the point where cash flow is positive. It has not yet shown that endpoint security can be sold profitably at scale against vendors that give the function away as part of something larger.",
      "The educational point is the difference between the three profit lines. Gross margin tells you about delivery cost, operating margin tells you about the cost of running the company, and free cash flow tells you about timing. Here they diverge sharply, and each one is answering a different question.",
      "What would settle the argument is not a single good quarter. It is a year in which revenue growth holds near 20% while the operating loss narrows for reasons other than stock compensation."
    ],
    "questions": [
      "How much of the revenue base is module expansion rather than new customers?",
      "What happens to pricing when a customer's platform vendor includes endpoint protection?",
      "How large is stock compensation relative to the free cash flow being reported?",
      "Does the 72.5% gross margin hold as data volumes grow?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
