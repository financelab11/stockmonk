import type { StockStory } from "./types";

export const QBTS: StockStory = {
  "ticker": "QBTS",
  "kicker": "Quantum · Computer Hardware",
  "title": "One large system sale can decide D-Wave's entire year",
  "dek": "Trailing revenue fell 44.2% because a single $15.0M quarter dropped out of the comparison window, not because demand collapsed. Gross margin is 64.2%, the operating loss is wide, and net cash is $511.2M.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $12.4M fell 44.2% because a $15.0M quarter dropped out of the comparison, not because the underlying business shrank.",
    "Gross margin of 64.2% is the highest of the three quantum names, evidence that software, cloud access and services carry the revenue mix.",
    "Free cash flow of -$119.1M against $511.3M of net cash buys about four years at the trailing rate.",
    "Seventeen analysts carry a $24 mean target against a $7 price after a December-quarter estimate of $26.5M that assumes another large system sale."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1907982/000190798226000026/qbts-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001907982&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "One order, worth $15.0M, explains almost everything in D-Wave's recent history. It landed in the March 2025 quarter, lifted FY2025 revenue to $24.6M, and then dropped out of the trailing window, which is why trailing revenue of $12.4M is 44.2% lower year on year. The underlying run rate is about $3M a quarter. A company whose annual revenue is decided by a single contract is a different kind of investment from one with a subscription base.",
      "The product is annealing hardware, which solves a narrower class of problems than a general gate-model machine and therefore needs a software wrapper to be usable. Leap provides cloud access and developer tools; Launch provides paid help to frame a problem before a customer can buy. Selling the tooling and the professional help is part of the product, not an add-on, and it is why the gross margin is 64.2% rather than the 30%-plus of a pure hardware vendor.",
      "The share price is a wager on a commercial market that has not arrived. At 185.4x sales, the $2.8B market value is about 75x the FY2026 estimate of $37.3M, which itself assumes revenue triples from the trailing $12.4M. The scale gap is stark: IonQ produced $380.4M of revenue at a -333.9% operating margin and Rigetti $13.4M at -727.6%, so the 64.2% gross margin stands out against two businesses losing more than three times their revenue. The market value rests on orders that have not been booked, not on a subscription base that renews."
    ],
    "quote": "D-Wave's year is decided by whether one machine ships, and the 64.2% gross margin is what the business would look like if more of them did."
  },
  "whatItDoes": {
    "paragraphs": [
      "There are three things for sale. The first is a quantum system, sold outright to a customer that wants the hardware on its own premises. The second is time on a hosted machine through Leap, sold as a subscription or consumption. The third is the software and services layer: Ocean for developers, and Launch for enterprises that need help framing a problem before they can buy anything.",
      "The commercial logic is that annealing hardware suits a narrow class of problems and needs a software wrapper to be usable. A logistics planner does not want to write quantum circuits; the company wants a scheduling answer that beats the current approach. Selling the tooling and the professional help is therefore part of the product, not an add-on.",
      "There is one reported revenue line and no segment split, so the mix between system sales, subscription and services is not visible in the statements. Given how much the quarterly revenue moves, that mix is exactly what a reader would want to know."
    ],
    "bullets": [
      {
        "title": "System sales",
        "detail": "Outright hardware. Rare, large, and decisive for any given quarter."
      },
      {
        "title": "Leap cloud access",
        "detail": "Recurring access to a live machine, hybrid solvers and developer tools."
      },
      {
        "title": "Launch services",
        "detail": "Paid work to move a customer from problem discovery to a production application."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin is 64.2%, well above the other listed quantum hardware companies. That is what a revenue mix weighted toward software subscriptions, cloud access and services looks like, rather than a mix driven by shipping machines with refrigeration and control electronics attached. It is the strongest evidence in the filing that some of this revenue is repeatable and software-like.",
      "The problem is scale. A 64.2% gross margin on $12.4M of revenue leaves a modest gross profit before the cost of running a quantum hardware programme. The operating loss was $100.4M in FY2025, so gross profit covers a small fraction of the engineering, fabrication and administrative base.",
      "The reported interest cover of -658.6x should not be read as a debt problem. The ratio is negative because operating earnings are negative, which makes the calculation meaningless. The relevant fact is that the company holds $511.2M of net cash and its interest bill is not what threatens the business."
    ]
  },
  "growth": {
    "paragraphs": [
      "Leap subscriptions would be the durable engine if they were large enough to see. The recurring base is roughly $3M a quarter, and the growth in any year depends on a system sale landing on top of it. Launch engagements convert a customer from a pilot to a production application, and the conversion rate is not disclosed. Germany at 68.2% of revenue is the most striking fact in the mix: a single national market carries most of the business.",
      "The estimates assume a large order in the December quarter. FY2026 revenue is modelled at $37.3M, up 51.5%, and the December quarter alone at $26.5M, which would be 862.6% growth against a weak comparison. Subtract that quarter and the year is close to the $12.4M trailing base. The FY2027 estimate of $76.7M assumes the same thing happens again, at twice the size."
    ],
    "bullets": [
      {
        "title": "System sales",
        "detail": "One machine can decide a year, which is why annual revenue has moved from $8.8M to $24.6M and back to a $12.4M run rate."
      },
      {
        "title": "Leap access",
        "detail": "Cloud access to a live machine, hybrid solvers and developer tools are the recurring part, and they are not separated in the reported line."
      },
      {
        "title": "Launch services",
        "detail": "Paid work to move a customer from problem discovery to production is the bridge between a pilot and a subscription, and the conversion is not disclosed."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Gross profit of about $8.0M on $12.4M of revenue is not enough to carry a quantum hardware programme. That is the margin arithmetic in one line: a 64.2% gross margin, an operating loss of -1372.9%, and a gap of roughly $162M between the two. The cost base is engineering, fabrication and administration, and it does not move with revenue. FY2025's 82.6% gross margin on $24.6M shows how much the mix can flatter a single year.",
      "The reported interest cover of -331.9x is not a debt signal; it is negative because operating earnings are negative, which makes the ratio meaningless. The relevant fact is that the company holds $511.3M of net cash and its interest bill is not what threatens the business. Return on invested capital of -12.1% is the comparison against Rigetti's -14.3% and IonQ's -25.1%, and it is the best of the three."
    ]
  },
  "cash": {
    "paragraphs": [
      "A $119.1M cash burn against $511.3M of net cash buys roughly four years at the trailing rate, the strongest funding position in the quantum group. Free cash flow was -$75.8M in FY2025 and -$119.1M trailing, so the burn is rising as the hardware programme scales. Capex is small at $3.9M in FY2025; the cash goes on people and on running machines.",
      "The funding is equity, and the dilution is the cost of the wait. No dividend is paid and there is no operating cash inflow to extend the balance. At $7 a share against a 52-week high of $32, a raise would be struck at a fraction of last year's price, which is why the share count and the burn rate belong in the same sentence."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Sales of $12.4M against a $2.8B market value produce 185.4x, a multiple only in the arithmetic sense. On the FY2027 estimate of $76.7M it falls to about 36x, still an option price and still dependent on orders that have not been booked. IonQ produced $380.4M of revenue and Rigetti $13.4M, so D-Wave's base is the smallest of the three and its multiple is a claim on orders rather than on an installed base.",
      "The multiple assumes the annealing niche produces repeat customers. Gross margin of 64.2% is the evidence that the incremental economics could be good if volume arrives; the revenue pattern is the evidence that volume has not arrived. A buyer is paying for the gross margin to be applied to a much larger revenue base, and the reported line does not show whether that base is subscriptions or machines.",
      "What would justify the price is a year in which revenue grows without a single order deciding it, which would require the recurring base to double from $3M a quarter. What would break it is another year in which the December quarter misses the $26.5M estimate, because the multiple has no earnings support and the cash, while substantial, is finite."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Seventeen analysts cover D-Wave, with a mean target of $24 against a $7 price and a range of $11 to $35. A mean more than three times the market price is the widest gap in the group, and it is a statement about the analysts' timeline rather than about the next quarter.",
      "The estimates embed the order. FY2026 revenue of $37.3M requires $31.3M in the second half against $6.0M in the first, and the December quarter alone is modelled at $26.5M. EPS forecasts of -$0.31 and -$0.39 assume the revenue arrives without a proportional increase in cost. Revisions are modestly positive at 6.2% over 30 days, but they are revisions to a loss, not to a profit."
    ]
  },
  "risks": {
    "intro": "The risk in D-Wave is not that the technology is uninteresting. It is that the commercial market may stay small enough that the cash pile, not the product, is what keeps the company listed.",
    "items": [
      {
        "title": "Revenue concentration",
        "severity": "High",
        "detail": "One order produced $15.0M in Q1 FY2025; the following five quarters, through Q2 FY2026, averaged about $3M. A single delayed contract can remove most of a year's growth.",
        "watch": "System delivery announcements, backlog, and the split between recurring and one-off revenue."
      },
      {
        "title": "Commercial adoption of annealing",
        "severity": "High",
        "detail": "Annealing solves a narrower class of problems than a general gate-model machine. If buyers cannot show a production benefit, pilots do not renew.",
        "watch": "Repeat customers, conversion from Launch engagements to paid production work, and published results."
      },
      {
        "title": "Cash consumption",
        "severity": "High",
        "detail": "Free cash flow is -$119.1M on a trailing basis. The $511.2M of net cash is finite and the operating business does not yet contribute to it.",
        "watch": "Quarterly cash used in operations and any increase in capital spending on hardware."
      },
      {
        "title": "Dilution",
        "severity": "Medium",
        "detail": "Losses are funded from the balance sheet, and a future raise would be struck at whatever price the market offers at the time.",
        "watch": "Share count and any new issuance or shelf registration."
      },
      {
        "title": "Competing architectures",
        "severity": "Medium",
        "detail": "Trapped-ion and superconducting gate-model machines attract more research attention. A decisive result elsewhere would weaken the case for annealing.",
        "watch": "Independent benchmarks and how customers describe the problems they actually run."
      },
      {
        "title": "Reporting opacity",
        "severity": "Medium",
        "detail": "With one consolidated revenue line, a reader cannot separate recurring cloud revenue from a one-off machine sale. The quality of growth is hidden.",
        "watch": "Any new segment or revenue-type disclosure in the annual report."
      }
    ],
    "watchlist": [
      {
        "title": "Quarterly revenue pattern",
        "detail": "A run of quarters near $3M with no large delivery tells a very different story from a return to $15M quarters."
      },
      {
        "title": "Gross margin",
        "detail": "At 64.2% it is the best evidence of software-like revenue. Watch whether it holds as hardware sales mix in."
      },
      {
        "title": "Cash and share count",
        "detail": "The pair determines how long the option runs and what each holder owns at the end of it."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "D-Wave is an annealing quantum company with $12.4M of trailing revenue, a 64.2% gross margin, a -1372.9% operating margin and $511.2M of net cash. The trailing revenue decline is a window effect from one large quarter, not a collapse in demand; the underlying recurring base is roughly $3M a quarter.",
      "The gross margin is the most encouraging number in the file, because it suggests that if volume arrives, the incremental economics could be good. The revenue pattern is the least encouraging, because it shows how little of the business is repeatable today.",
      "The honest position is that this is a funded research programme with a commercial option. The cash buys several years. Whether those years produce a market is not something the financial statements can answer yet."
    ],
    "questions": [
      "What proportion of the $12.4M is recurring Leap subscription rather than system sales?",
      "How many Launch engagements have converted into production deployments?",
      "Does the 64.2% gross margin hold when a large hardware order is delivered?",
      "How many years of spending does $511.2M cover at the current burn?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
