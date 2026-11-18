import type { StockStory } from "./types";

export const CSCO: StockStory = {
  "ticker": "CSCO",
  "kicker": "Technology · Networking equipment and software",
  "title": "Cisco sells the network first and the subscription afterwards",
  "dek": "Switches and routers are the entry point; software, security and support are the annuity. The installed base explains a 64.5% gross margin, and the consensus growth rate is the number that needs explaining.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $63.3B trailing twelve months, +11.8% year over year.",
    "Profitability: 24.3% operating margin and 21.0% net margin.",
    "Cash: $12.8B free cash flow, a 20.2% margin.",
    "Scorecard: 52/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/858877/000085887726000132/csco-20260725.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000858877&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "CISCO SYSTEMS, INC. generated $63.3B of revenue over the last twelve months, +11.8% versus the prior year. The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
      "The latest reported quarter was Q4 FY26, with $17.3B of revenue and an operating margin of 24.7%. The stock closed at $95.11 on 2026-11-17, giving a market capitalization of $374.4B.",
      "The shares sit 39% of the way up their 52-week range ($72.80 to $130.37). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Networking is a replacement market. The growth comes from what is attached to the replacement, not from the number of networks in the world."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio is organised around where the data travels. Campus and branch switching connects buildings and floors. Routing connects sites and service providers. Wireless covers access points and the controllers behind them. Security covers firewalls and threat detection. Collaboration and observability sit alongside, and a large services organisation installs and maintains the whole estate.",
      "Customers are enterprises, public-sector bodies, service providers and, increasingly, large cloud and AI infrastructure builders. A hospital, a university, a bank and a telecom operator all buy similar products for different reasons, and all of them care about the network continuing to work. That is why Cisco can hold price on hardware that competitors can match on specification.",
      "Cisco employed 77,500 people. A large part of that headcount is in services and support, which is a lower-margin business than software but a stickier one. The mix between product and services is the main driver of gross margin from quarter to quarter."
    ],
    "bullets": [
      {
        "title": "Networking",
        "detail": "Switching, routing and wireless. The core franchise and the entry point for everything else."
      },
      {
        "title": "Security",
        "detail": "Firewalls, access control and threat detection sold into the same installed base."
      },
      {
        "title": "Services",
        "detail": "Support, installation and managed services. Lower margin, high renewal, and a useful signal of customer retention."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Product revenue is recognised when equipment ships. Software and subscription revenue is recognised over the contract term, and services revenue over the period the work is performed. The mix matters: a dollar of software carries a much higher gross margin than a dollar of hardware, so a shift toward subscriptions raises the blended margin even if total revenue is flat.",
      "The cost structure is hardware-heavy at the bottom and people-heavy in the middle. Cisco designs its own chips for some products but outsources manufacturing, which keeps capital expenditure low. The gross margin of 64.5% is what remains after component costs, manufacturing and the cost of delivering services.",
      "The operating leverage is real but limited. Operating income was $13.97B on $51.56B of revenue in FY2022 and $15.37B on $63.33B in FY2026. Revenue rose by $11.77B over that period while operating income rose by $1.40B, which tells you that much of the incremental revenue came with a normal cost of doing business attached."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 4.3% a year across the fiscal years in the dataset, and the latest quarter changed +17.6% year over year. Third-party estimates for the current fiscal year point to $75.2B of revenue and $5.51 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 24.3% and return on invested capital of 19.0% are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 24.3%, the net margin is 21.0% and diluted EPS is $3.34. The latest quarter's operating margin was 24.7%.",
      "Return on equity is 26.4%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q4 FY26: revenue of $17.3B, an operating margin of 24.7% and a net margin of 22.4%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $12.8B, a 20.2% margin. Net debt is $13.6B.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $12.8B over the last twelve months and net debt was $13.6B; interest cover was 10.5x."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 28.2x trailing earnings and 21.7x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $130.50; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "24 analysts contribute to the third-party consensus. The mean target is $130.50, with a range of $109.00 to $160.00.",
      "Current-year estimates call for $75.2B of revenue and $5.51 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 24 analysts with a mean target of $130.5; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Cisco's risks are cyclical and competitive rather than financial. The balance sheet can absorb a downturn; the question is whether the current growth rate is a cycle or a new baseline.",
    "items": [
      {
        "title": "Networking refresh cycles",
        "severity": "High",
        "detail": "Customers buy in waves. A strong year pulls forward demand and leaves a weaker one behind, which is what happened after FY2023.",
        "watch": "Product orders, backlog and the revenue growth rate by quarter."
      },
      {
        "title": "Competition from merchant silicon",
        "severity": "High",
        "detail": "White-box switches built on commodity chips are cheaper and increasingly capable, which pressures hardware pricing at the low end.",
        "watch": "Gross margin and the split between product and software revenue."
      },
      {
        "title": "Consensus growth assumption",
        "severity": "Medium",
        "detail": "The forecast implies a step-up far above the historical rate. If it does not arrive, the multiple has little support.",
        "watch": "Quarterly revenue against the $73.17B full-year estimate."
      },
      {
        "title": "Services margin",
        "severity": "Medium",
        "detail": "Services are stickier than hardware but carry lower margins. A mix shift toward services can hold revenue while compressing profit.",
        "watch": "Segment gross margin and services growth relative to product growth."
      },
      {
        "title": "Acquisition returns",
        "severity": "Low",
        "detail": "Cisco has bought its way into new markets. Large premiums only pay off if the acquired revenue grows faster than the price implied.",
        "watch": "Goodwill, intangible amortisation and the growth rate of acquired lines."
      }
    ],
    "watchlist": [
      {
        "title": "Product orders",
        "detail": "Orders turn before revenue in networking, and backlog tells you how much is already sold."
      },
      {
        "title": "Gross margin",
        "detail": "64.5% is the blended result of hardware, software and services. The mix is the story behind it."
      },
      {
        "title": "Free cash flow",
        "detail": "$12.77B supports the dividend and buyback, but the annual swings are working capital, not profit."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Cisco is a durable franchise with a large installed base, a strong balance sheet and a habit of returning cash. The 64.5% gross margin and $12.77B of free cash flow are the evidence that the model works.",
      "The valuation, however, is not the valuation of a 4.3% grower. It is the valuation of a company expected to grow much faster this year. Whether that expectation is a one-cycle catch-up or a durable change is the question that decides the return.",
      "A reader should look at orders, backlog and the software mix rather than the headline revenue number. Those are the lines that show whether the current rate is demand or timing."
    ],
    "questions": [
      "How much of the expected revenue step-up is already in backlog?",
      "Is the growth coming from new customers or from replacements?",
      "What share of revenue is recurring software and services?",
      "What would a return to 4% growth do to a 27.9x earnings multiple?"
    ]
  }
};
