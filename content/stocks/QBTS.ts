import type { StockStory } from "./types";

export const QBTS: StockStory = {
  ticker: "QBTS",
  kicker: "Quantum · Computer Hardware",
  title: "One large system sale can decide D-Wave's entire year",
  dek: "Trailing revenue fell 44.2% because a single $15.0M quarter dropped out of the comparison window, not because demand collapsed. Gross margin is 64.2%, the operating loss is wide, and net cash is $511.2M.",
  readingMinutes: 9,
  takeaways: [
    "FY2025 revenue was $24.6M, but trailing revenue is only $12.4M after one large quarter rolled out of the window.",
    "Gross margin of 64.2% is the highest of the listed quantum hardware names.",
    "The operating margin is -1372.9% and free cash flow is -$119.1M.",
    "Net cash of $511.2M funds a business whose revenue is still measured in single-digit millions per quarter.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1907982/000190798226000026/qbts-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001907982&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "D-Wave Quantum builds annealing quantum computers and sells access to them. Its current machine, Advantage, is the fifth generation in the line. Around the hardware sits a software stack: Ocean, an open-source set of programming tools, and Leap, a cloud service that gives users real-time access to a live machine along with hybrid solvers and teaching material. A professional services offering called Launch is meant to take an enterprise from identifying a problem to running it in production.",
      "The company targets manufacturing and logistics scheduling, financial services, life sciences and materials work. Those are optimisation problems, which is the natural fit for annealing hardware: the machine is designed to search a very large set of combinations for a low-energy answer rather than to run arbitrary gate operations.",
      "D-Wave is based in Burnaby, Canada, employs 215 people, and carries a market value of $3.94B on trailing revenue of $12.4M. That is 276.3x sales. The shares have returned -62.4% over one year and 6.8% over five, and trade near the bottom of a 52-week range of $8.48 to $32.39.",
    ],
    quote:
      "The revenue line here is not a demand curve. It is a delivery schedule, and a single order can move it by more than the entire annual run-rate.",
  },
  whatItDoes: {
    paragraphs: [
      "There are three things for sale. The first is a quantum system, sold outright to a customer that wants the hardware on its own premises. The second is time on a hosted machine through Leap, sold as a subscription or consumption. The third is the software and services layer: Ocean for developers, and Launch for enterprises that need help framing a problem before they can buy anything.",
      "The commercial logic is that annealing hardware suits a narrow class of problems and needs a software wrapper to be usable. A logistics planner does not want to write quantum circuits; the company wants a scheduling answer that beats the current approach. Selling the tooling and the professional help is therefore part of the product, not an add-on.",
      "There is one reported revenue line and no segment split, so the mix between system sales, subscription and services is not visible in the statements. Given how much the quarterly revenue moves, that mix is exactly what a reader would want to know.",
    ],
    bullets: [
      {
        title: "System sales",
        detail:
          "Outright hardware. Rare, large, and decisive for any given quarter.",
      },
      {
        title: "Leap cloud access",
        detail:
          "Recurring access to a live machine, hybrid solvers and developer tools.",
      },
      {
        title: "Launch services",
        detail:
          "Paid work to move a customer from problem discovery to a production application.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin is 64.2%, well above the other listed quantum hardware companies. That is what a revenue mix weighted toward software subscriptions, cloud access and services looks like, rather than a mix driven by shipping machines with refrigeration and control electronics attached. It is the strongest evidence in the filing that some of this revenue is repeatable and software-like.",
      "The problem is scale. A 64.2% gross margin on $12.4M of revenue leaves a modest gross profit before the cost of running a quantum hardware programme. The operating loss was $100.4M in FY2025, so gross profit covers a small fraction of the engineering, fabrication and administrative base.",
      "The reported interest cover of -658.6x should not be read as a debt problem. The ratio is negative because operating earnings are negative, which makes the calculation meaningless. The relevant fact is that the company holds $511.2M of net cash and its interest bill is not what threatens the business.",
    ],
  },
  growth: {
    paragraphs: [
      "Start with the distortion. Trailing revenue of $12.4M is down 44.2% from a year earlier, and the latest quarter is down 0.6%. That decline is mechanical: Q1 FY2025 produced $15.0M of revenue at a -75.3% operating margin, and that quarter has dropped out of the trailing window. The following five quarters averaged roughly $3M each.",
      "So the true picture is a business with a small recurring base of about $3M a quarter and occasional large system orders on top. The third-party estimates capture that shape: $4.3M for the next quarter, then $32.4M for the following one. Hoping for a $32.4M quarter is a bet on a delivery, not on a market.",
      "The drivers that would make growth durable are unglamorous. More paying users on Leap, more enterprises completing a Launch engagement and renewing, and evidence that annealing solves a scheduling or portfolio problem faster or cheaper than the incumbent method. The thing that would slow growth is customers finishing pilots and concluding the advantage is not large enough to change a production system.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record shows the operating leverage problem plainly. In Q1 FY2025, with $15.0M of revenue, the operating margin was -75.3%. In the following quarters, with revenue near $3M, margins ran from -741.8% to -1914.9%. The cost base barely moved; the revenue did.",
      "At the annual level, operating losses widened from $38.9M in FY2021 to $100.4M in FY2025 while revenue went from $6.3M to $24.6M. Growth in revenue of roughly four times came with a loss roughly two and a half times larger. That is progress of a kind, but not yet the kind that produces a profit.",
      "Net income is noisier still: a loss of $355.1M in FY2025 against an operating loss of $100.4M, with quarterly net losses of $167.3M and $140.0M in periods when operating losses were far smaller. Items below the operating line dominate the bottom line, and they should be set aside when judging the business.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was -$75.8M in FY2025 and -$119.1M on a trailing basis, a -958.4% margin. Capital spending and the cost of maintaining hardware in the field sit behind that number, but the dominant item is people: physicists, software engineers and the sales team needed to place systems.",
      "The balance sheet holds $511.2M of net cash. Against a trailing burn of this size, that is several years of funding. It is also the main reason the equity has held a multi-billion dollar valuation while revenue stayed near $12M: the company can keep going without returning to the market immediately.",
      "What the cash does not do is prove demand. A buyer of these shares is effectively underwriting a research programme with a commercial option attached, and the size of the cash pile determines how long that option has to mature.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $10.68, the equity is valued at $3.94B, or 276.3x trailing sales. The P/E of -15.4x, EV/EBITDA of -21.3x and P/FCF of -18.8x are all negative, so none of them frames a price in any useful way. The factor screen calls the shares cheap on EV/EBITDA within the coverage universe, which says more about how that metric behaves with negative earnings than about value.",
      "The peer set is two other companies at a similar stage. Rigetti trades at 259.1x sales on $13.4M of revenue with a -727.6% operating margin. IonQ trades at 34.6x sales on $380.4M of revenue. D-Wave sits between them on multiple and at the bottom on revenue, which means the market is paying for the architecture and the cash, not for the current P&L.",
      "A sales multiple at this level is a statement about a future market size. The company's own gross margin of 64.2% suggests that if that market arrives, the economics could be software-like. The distance between $12.4M of revenue and a market large enough to support $3.94B is the entire question.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed third-party consensus, with a mean target of $33.21 and a range of $18.36 to $43.00. Coverage is broad for a company of this size, which reflects interest in the category as much as in the individual business.",
      "Current-year estimates call for $42.7M of revenue and EPS of -$0.30, rising to $80.6M and -$0.38 next year. Seventeen analysts contribute to each. The revenue figures imply a step-up of roughly three times the trailing base, and the EPS figures imply the loss per share widens slightly even as revenue doubles.",
      "Those are third-party forecasts, not a Stockmonk view. The useful thing to extract is the shape: analysts expect the system-sale pipeline to convert, and they do not expect it to produce a profit while it does.",
    ],
  },
  risks: {
    intro:
      "The risk in D-Wave is not that the technology is uninteresting. It is that the commercial market may stay small enough that the cash pile, not the product, is what keeps the company listed.",
    items: [
      {
        title: "Revenue concentration",
        severity: "High",
        detail:
          "One order produced $15.0M in Q1 FY2025; the following five quarters averaged about $3M. A single delayed contract can remove most of a year's growth.",
        watch:
          "System delivery announcements, backlog, and the split between recurring and one-off revenue.",
      },
      {
        title: "Commercial adoption of annealing",
        severity: "High",
        detail:
          "Annealing solves a narrower class of problems than a general gate-model machine. If buyers cannot show a production benefit, pilots do not renew.",
        watch:
          "Repeat customers, conversion from Launch engagements to paid production work, and published results.",
      },
      {
        title: "Cash consumption",
        severity: "High",
        detail:
          "Free cash flow is -$119.1M on a trailing basis. The $511.2M of net cash is finite and the operating business does not yet contribute to it.",
        watch:
          "Quarterly cash used in operations and any increase in capital spending on hardware.",
      },
      {
        title: "Dilution",
        severity: "Medium",
        detail:
          "Losses are funded from the balance sheet, and a future raise would be struck at whatever price the market offers at the time.",
        watch:
          "Share count and any new issuance or shelf registration.",
      },
      {
        title: "Competing architectures",
        severity: "Medium",
        detail:
          "Trapped-ion and superconducting gate-model machines attract more research attention. A decisive result elsewhere would weaken the case for annealing.",
        watch:
          "Independent benchmarks and how customers describe the problems they actually run.",
      },
      {
        title: "Reporting opacity",
        severity: "Medium",
        detail:
          "With one consolidated revenue line, a reader cannot separate recurring cloud revenue from a one-off machine sale. The quality of growth is hidden.",
        watch:
          "Any new segment or revenue-type disclosure in the annual report.",
      },
    ],
    watchlist: [
      {
        title: "Quarterly revenue pattern",
        detail:
          "A run of quarters near $3M with no large delivery tells a very different story from a return to $15M quarters.",
      },
      {
        title: "Gross margin",
        detail:
          "At 64.2% it is the best evidence of software-like revenue. Watch whether it holds as hardware sales mix in.",
      },
      {
        title: "Cash and share count",
        detail:
          "The pair determines how long the option runs and what each holder owns at the end of it.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "D-Wave is an annealing quantum company with $12.4M of trailing revenue, a 64.2% gross margin, a -1372.9% operating margin and $511.2M of net cash. The trailing revenue decline is a window effect from one large quarter, not a collapse in demand; the underlying recurring base is roughly $3M a quarter.",
      "The gross margin is the most encouraging number in the file, because it suggests that if volume arrives, the incremental economics could be good. The revenue pattern is the least encouraging, because it shows how little of the business is repeatable today.",
      "The honest position is that this is a funded research programme with a commercial option. The cash buys several years. Whether those years produce a market is not something the financial statements can answer yet.",
    ],
    questions: [
      "What proportion of the $12.4M is recurring Leap subscription rather than system sales?",
      "How many Launch engagements have converted into production deployments?",
      "Does the 64.2% gross margin hold when a large hardware order is delivered?",
      "How many years of spending does $511.2M cover at the current burn?",
    ],
  },
};
