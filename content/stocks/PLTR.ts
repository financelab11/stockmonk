import type { StockStory } from "./types";

export const PLTR: StockStory = {
  "ticker": "PLTR",
  "kicker": "Software · Data and decision platforms",
  "title": "Palantir turns other organisations' data into working software",
  "dek": "Revenue is growing at 87% and the operating margin is 45.6%, which is a rare combination in enterprise software. The open question is how long a 91x earnings multiple can wait for the growth to normalise.",
  "readingMinutes": 9,
  "takeaways": [
    "Trailing revenue reached $7.3B, up 87.1%, with a 45.6% operating margin and $4.1B of free cash flow, a combination few software vendors sustain.",
    "Government work is 53.7% of revenue and the United States 74.2%, so public budgets still set the base load.",
    "At 104.1x trailing earnings and 110.7x EV/EBITDA, the price assumes the 87% growth rate decays slowly rather than sharply.",
    "Free cash flow of $4.1B is 55.6% of revenue, but it adds back share-based pay, so dilution is the check on per-share value."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1321655/000132165526000011/pltr-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001321655&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Palantir closed its September quarter with $2.3B of revenue, a 46.9% operating margin and $0.44 of diluted EPS, capping a year in which trailing revenue rose 87.1% to $7.3B. The margin is the unusual part: software companies that grow this fast usually buy growth with sales spending, and Palantir is instead converting incremental revenue at an 84.7% gross margin. The reported numbers show a business that moved from a 31.6% operating margin in FY2025 to 45.6% on a trailing basis without slowing down. That combination is why the shares carry a triple-digit earnings multiple.",
      "Government work remains the base, at 53.7% of revenue, with commercial at 46.3% and the United States at 74.2%. The government side is procurement-driven and multi-year; the commercial side starts as a narrow Foundry pilot and expands if the customer sees a result. That expansion pattern explains both the speed and the lumpiness: a converted pilot adds revenue quickly, while a stalled one leaves the account at its original size. Apollo matters here because it lets the platform run inside classified or disconnected environments where a conventional cloud deployment cannot go.",
      "The valuation debate is about duration rather than quality. At $158 the shares trade at 104.1x trailing earnings, 110.7x EV/EBITDA and 94.2x free cash flow, against peer medians of 31.0x and 24.8x. They have fallen 2.3% over a year in which revenue grew 87.1%, so the multiple has compressed even as the business expanded. The $10.6B net cash balance earns interest and lifts net margin above operating margin, but it is too small to anchor a multiple this high. What matters is how many years of exceptional growth the price still requires."
    ],
    "quote": "Palantir earns a software gross margin but spends like a consultancy to win the account, and the price assumes that trade-off keeps working."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product set has three layers. Gotham is the original government platform, used for intelligence, defence and investigative work. Foundry is the commercial equivalent, used by manufacturers, banks and healthcare organisations to connect operational data and build applications on top. Apollo is the deployment layer that pushes software into customer environments, including ones that are disconnected or classified. Newer AI tooling sits across all three.",
      "Customers fall into two buckets. Government work is contract-based, procurement-driven and often multi-year, with revenue that depends on budgets and renewals rather than monthly sign-ups. Commercial work starts as a pilot on a narrow problem and expands if the customer sees a result. That expansion pattern is why the company can grow quickly from a small account base, and why growth is lumpy when pilots fail to convert.",
      "The company employed 2,439 people at the last count, which is small for $7.29B of revenue. A conventional enterprise software company at this scale would carry far more sales and delivery staff. Palantir substitutes its own engineers and a shared platform for that headcount, and the margin evidence suggests the substitution has worked so far."
    ],
    "bullets": [
      {
        "title": "Gotham",
        "detail": "Government and defence analytics. Long procurement cycles, high switching costs once a workflow is built on it."
      },
      {
        "title": "Foundry",
        "detail": "Commercial data integration and application building. Sold as an enterprise platform, expanded site by site."
      },
      {
        "title": "Apollo",
        "detail": "Continuous deployment into customer and classified environments. The reason the software can run where cloud vendors cannot reach."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is contracted, usually annual or multi-year, and recognised as the platform is used. The economics are software-like: gross margin is 84.7%, so the direct cost of serving an additional customer is small. What costs money is winning the account and building the first working application, which is why sales and delivery expense, not cost of revenue, is the constraint on profitability.",
      "Operating margin of 45.6% and net margin of 50.4% show how far the company has moved. The gap between the two is worth noticing: net margin is higher than operating margin, so interest income on the cash balance and other non-operating items are contributing. That is a real benefit of holding $10.56B of net cash, but it is not the same as earning more from customers.",
      "The pricing model is value-based rather than per-seat. Customers pay for access to the platform and for the applications built on it, and the contract value grows as more use cases go live. This is why the company talks about expansion within existing accounts: the second and third deployment costs the customer less to adopt and costs Palantir less to deliver."
    ]
  },
  "growth": {
    "paragraphs": [
      "The revenue base climbed from $2.2B in FY2023 to $2.9B in FY2024, $4.5B in FY2025 and a $7.3B trailing figure, so the growth rate has accelerated rather than decayed: 16.7%, then 28.8%, then 56.2%, then 87.1%. The quarterly path through FY2026 was $1.6B, $1.9B and $2.3B. Consensus looks for $8.6B in FY2026, up 91.1%, and $13.1B in FY2027, up 53.7%. The forecast therefore assumes the current rate persists for one more year and then halves, which is a specific and demanding shape.",
      "The mix determines whether that shape is achievable. Commercial is 46.3% of revenue and grows from pilots, so its ceiling is the number of accounts that convert and then expand. Government is 53.7% and moves on appropriation cycles, which makes it steadier in direction but uneven by quarter. The United States is 74.2% of revenue, so it carries most of the growth. The 84.7% gross margin means delivery cost is not the constraint; the constraint is the supply of engineers who can take a customer from a pilot to a production deployment."
    ],
    "bullets": [
      {
        "title": "Commercial conversion",
        "detail": "Foundry starts on one problem and earns the right to the next. That second use case is cheaper to sell and cheaper to deliver than the first."
      },
      {
        "title": "Government base",
        "detail": "At 53.7% of revenue, defence and intelligence work provides the floor. Appropriations timing, not demand, is what makes the quarterly line jump."
      },
      {
        "title": "Delivery capacity",
        "detail": "Each new deployment needs engineers who understand the customer's data. Headcount is the practical limit on how fast revenue can compound."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross margin reached 84.7%, operating margin 45.6% and net margin 50.3% on a trailing basis. The net figure sits above the operating figure because interest on the $10.6B cash balance and other non-operating items add to income; that is a real benefit, but it is not evidence of pricing power. Quarterly operating margin moved from 46.2% to 47.1% and then 46.9%, while net margin fell from 54.9% to 48.8%. Diluted EPS rose from $0.34 to $0.41 to $0.44 over the same three quarters.",
      "Return on invested capital was 29.2% and return on equity 32.7%, both well above the 18.8% peer median for ROIC and consistent with a software model that needs little capital. The operating margin is also above the 27.7% peer median. The comparison that matters is against the company's own history: operating margin was 10.8% in FY2024 and 5.4% in FY2023, so the current level is the product of a rapid shift in scale rather than a long, gradual improvement."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement was $4.1B, a 55.6% margin, and FY2025 operating cash flow of $2.1B came against just $33.9M of capex. That is the arithmetic of an asset-light platform: the cash cost of serving another customer is small, so the cash flow statement mostly reflects collections and share-based compensation. Net cash stood at $10.6B, or negative 3.1x EBITDA, which removes refinancing risk from the list of things that can go wrong. The company pays no dividend, so capital return depends on repurchases rather than a payout.",
      "The gap between free cash flow and net income is the item to watch. Free cash flow adds back share-based pay, and Palantir's headcount is small relative to revenue, so equity compensation is a meaningful part of what employees earn. If dilution runs ahead of revenue, per-share value grows more slowly than the business even while the cash-flow margin looks strong. The cash balance is also the buffer that funds delivery capacity between contract wins, which is why it has grown alongside the revenue base."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Trailing multiples are 104.1x earnings, 110.7x EV/EBITDA, 50.9x sales and 94.2x free cash flow, with a 1.1% free-cash-flow yield, against peer medians of 31.0x and 24.8x for the first two. Palantir sits in the 90th percentile on both, and the premium is not a rounding error: it is more than three times the median earnings multiple. The one-year return of negative 2.3% alongside 87.1% revenue growth says the compression has already begun, even if the absolute level remains extreme.",
      "On consensus numbers the picture is less absurd but still demanding. FY2026 EPS of $1.70 implies about 93x at $158, and FY2027 EPS of $2.54 implies about 62x. Those figures rely on revenue of $8.6B and then $13.1B, so the multiple falls only if the growth lands. A 25% growth rate in FY2028 would leave the stock on a multiple that still assumes years of above-market expansion. The peer set offers context: Microsoft trades at 26.0x with a 47.1% operating margin, and Nvidia at 20.9x with 65.2%. Palantir's premium is for growth, not for better margins.",
      "What would break the case is not a bad quarter but a change in the expansion rate. Government revenue can hold the base while commercial conversion slows, and the reported numbers would still look respectable for several quarters. The risk is that the multiple and the earnings base compress together, which is what happened over the past year. The $10.6B net cash balance is small relative to a $381.8B market value, so it offers little valuation support at this level."
    ]
  },
  "analysts": {
    "paragraphs": [
      "the 18 November 2026 Yahoo Finance estimate set, covers 29 analysts with a mean target of $223 and a range of $80 to $273. The mean sits well above the $158 price, while the low end is roughly half it, so the average conceals a real disagreement about how long the growth lasts.",
      "Estimates call for $8.6B of revenue and $1.70 of EPS in FY2026, then $13.1B and $2.54 in FY2027. EPS revisions have been positive across every window, from 5.4% over seven days to 6.2% over 90 days, which is unusual for a stock that has fallen over the year. The consensus implicitly assumes the December quarter delivers $2.7B of revenue, up 89.9%, and that FY2027 growth of 53.7% survives the law of large numbers."
    ]
  },
  "risks": {
    "intro": "The financial risks are modest because the balance sheet is in net cash. The strategic risks are concentrated in how the company wins and keeps large accounts, and in what investors paid for that ability.",
    "items": [
      {
        "title": "Government budget and procurement",
        "severity": "High",
        "detail": "A large share of revenue comes from public-sector work that moves on appropriation cycles. A budget delay can push revenue between quarters even when the programme survives.",
        "watch": "Contract renewals, backlog disclosure and the split between government and commercial revenue."
      },
      {
        "title": "Pilot conversion",
        "severity": "High",
        "detail": "Commercial growth depends on pilots becoming production deployments. A lower conversion rate would show up as slower expansion before it showed up in the customer count.",
        "watch": "Net dollar retention commentary and the number of large accounts."
      },
      {
        "title": "Services-heavy delivery",
        "severity": "Medium",
        "detail": "Embedding engineers solves the trust problem but caps how fast the company can scale. Headcount growth is the leading indicator of delivery capacity.",
        "watch": "Revenue per employee and the mix of engineering versus sales hiring."
      },
      {
        "title": "Stock-based compensation",
        "severity": "Medium",
        "detail": "Free cash flow adds back share-based pay. If dilution runs ahead of revenue, per-share value grows more slowly than the business.",
        "watch": "Diluted share count and the stock-compensation line as a share of revenue."
      },
      {
        "title": "Valuation",
        "severity": "High",
        "detail": "At 44.5x sales, a growth disappointment compresses the multiple and the earnings base at the same time. The shares have already fallen 8.4% over the past year while revenue grew quickly.",
        "watch": "The forward multiple against the next year's estimated growth rate."
      }
    ],
    "watchlist": [
      {
        "title": "Commercial mix",
        "detail": "Watch the commercial share of revenue. It is the part of the business that can compound without a budget cycle."
      },
      {
        "title": "Gross margin",
        "detail": "84.7% is the proof that delivery is software rather than consulting. A sustained fall would change the story."
      },
      {
        "title": "Free cash flow versus net income",
        "detail": "Track the size of the gap. A widening gap means compensation or working capital is doing more of the work."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Palantir is a genuine software business with an unusual go-to-market model, a net-cash balance sheet and margins that most enterprise vendors never reach. The revenue history shows a company that has crossed from losses to substantial profitability in four years.",
      "What is not known is how much of the current growth is the AI wave filling the pipeline and how much is durable demand for the platform. The consensus assumes both continue. The valuation assumes they continue for long enough to bring the multiple down to something ordinary.",
      "A reader should separate three questions: how the accounts expand, how the work is delivered, and what the price already discounts. The first two are operational. The third is arithmetic, and it is where the risk sits."
    ],
    "questions": [
      "What share of revenue comes from customers that have been live for more than two years?",
      "How many engineers does each incremental dollar of revenue require?",
      "Does the 45.6% operating margin hold if growth slows to 25%?",
      "What growth rate is embedded in a 44.5x sales multiple?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
