import type { StockStory } from "./types";

export const LUNR: StockStory = {
  ticker: "LUNR",
  kicker: "Space · Lunar access and space services",
  title: "Intuitive Machines is cheapest on sales, and the margin explains why",
  dek: "Revenue quadrupled in a single quarter to $203.4M, but operating margin is still -28.0%, free cash flow is negative and the balance sheet carries $104.2M of net debt.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $481.3M, up 113.0%, with the latest quarter at $203.4M.",
    "Gross margin of 45.0% is the best in this peer group, yet operating margin is -28.0%.",
    "Net income swung from +$61.8M in FY2023 to -$283.4M in FY2024, so it is a poor guide to operations.",
    "At $10.47 the market value is $881.3M; EV/sales is 2.0x, the lowest multiple in this peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1844452/000162828026019865/lunr-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001844452&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Intuitive Machines sells access to the Moon and the services that surround it. The company builds robotic lunar landers, operates payloads after they land, and sells the engineering and infrastructure that other organisations need to get their instruments and experiments into space. It is based in Houston and was founded in 2013.",
      "The revenue base changed shape in FY2026. The December quarter produced $43.3M, then the March quarter produced $183.6M and the June quarter $203.4M. A move that large is not normal mission timing, and the first thing a reader should do is check the filing for whether it came from an acquisition or from a single very large award.",
      "At $10.47 the market value is $881.3M against $481.3M of trailing revenue. The EV/sales multiple is 2.0x, the cheapest in this space peer group, and it is not obviously a bargain: the operating margin is -28.0%, free cash flow is -$187.8M and net debt is $104.2M.",
    ],
    quote:
      "A government contractor is only as good as its contract terms. Fixed-price work can look like growth on the revenue line and like a loss on the margin line at the same time.",
  },
  whatItDoes: {
    paragraphs: [
      "The company organises itself around four units. Lunar Access Services covers the landers and the delivery of payloads to the surface. Orbital Services covers vehicles and operations in orbit. Lunar Data Services sells the data and communications that come from being on or around the Moon. Space Products and Infrastructure sells components and systems to other missions.",
      "Those units share engineering, test facilities and a bidding organisation, which is why the consolidated margin is the meaningful number. They do not share a revenue cycle: a lander mission is won years before it flies, while data and component sales can recur every quarter.",
      "Customers are mostly government and defence programmes, with commercial satellite operators and research institutions alongside them. That mix gives visibility through multi-year contracts but concentrates the risk in a small number of awards and in the budget cycle that funds them.",
    ],
    bullets: [
      {
        title: "Lunar Access Services",
        detail:
          "Landers and payload delivery. Revenue depends on mission awards and on hitting delivery milestones.",
      },
      {
        title: "Orbital Services",
        detail:
          "Spacecraft and operations beyond the lunar surface, sold as mission services rather than hardware alone.",
      },
      {
        title: "Lunar Data Services",
        detail:
          "Communications and data products from lunar assets. The closest thing to recurring revenue in the group.",
      },
      {
        title: "Space Products and Infrastructure",
        detail:
          "Components and subsystems sold to other missions, which broadens the customer base beyond the company's own launches.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Most of the revenue is contract work, recognised as milestones are met. That accounting makes growth lumpy: a quarter can jump because a mission passed a review, and the next can fall because the following milestone sits in a different period. It also means the gross margin of 45.0% reflects the estimated cost of completing specific contracts, not a stable price list.",
      "Fixed-price contracts transfer cost risk to the company. If a lander needs rework or a launch slips, the extra cost lands on the income statement rather than on the customer. That is how a business with a 45.0% gross margin still reports a -28.0% operating margin: the gross profit is real, but the engineering, facilities and bidding costs beneath it are larger.",
    ],
  },
  growth: {
    paragraphs: [
      "Across the fiscal years in the dataset, revenue compounded at 34.1% a year, from $85.9M in FY2022 to $207.1M in FY2025, before the step change in FY2026. The latest quarter grew 304.3% year over year, which again reflects the new revenue base rather than organic expansion of the old one.",
      "The consensus expects $919.8M of revenue this fiscal year and $1.17B next year, with $247.6M next quarter and $280.6M the quarter after. Those numbers assume the FY2026 revenue level is a new floor rather than a spike, which is the single most important assumption in the model.",
      "Real growth would come from winning more missions per budget cycle, selling data services that recur between missions, and adding commercial and international customers to a base that is currently dominated by government work. A funding delay or a lost award would remove revenue faster than costs.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is inconsistent in a way that is worth understanding. Revenue went from $85.9M in FY2022 to $79.6M in FY2023, then $228.0M in FY2024 and $207.1M in FY2025. Operating losses were $5.5M, $61.1M, $57.4M and $87.2M in those years. Growth and profitability did not move together.",
      "Net income is even less reliable. FY2023 produced a $61.8M profit while operating income was a $61.1M loss, and FY2024 produced a $283.4M loss on a $57.4M operating loss. The gap between the two lines is non-operating: revaluations, interest and other items that can swing a small company's bottom line without saying anything about the contract business.",
      "The quarterly operating margins show how much mission timing matters: -16.1%, -56.9%, -30.2% and -76.4% across FY2025, then -21.3% and -23.2% in the first two quarters of FY2026. Diluted EPS was -$0.95, return on equity -17.9% and return on invested capital -12.8%.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$187.8M, a -39.0% margin. That is much worse than the annual history: -$75.2M in FY2023, -$67.7M in FY2024 and -$56.0M in FY2025. The trailing figure includes the cost of servicing a much larger revenue base, including the working capital that contract growth demands.",
      "Net debt is $104.2M, so borrowings exceed cash. For a company with a $881.3M market value and negative free cash flow, that is a meaningful constraint: the next large mission may need funding before it generates a milestone payment.",
      "Contract businesses often consume cash at the start of a programme, when suppliers and staff are paid, and collect later when milestones are certified. That pattern makes the cash-flow statement a better warning system than the income statement here.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 2.0x EV/sales, Intuitive Machines is the cheapest company in this peer set. Rocket Lab trades at 38.2x EV/sales, AST SpaceMobile at 26.1x, Planet Labs at 9.8x, Kratos at 3.2x and AeroVironment at 2.9x. A low multiple on a negative-margin business is a discount for a reason, not a free option.",
      "The enterprise value is higher than the $881.3M market value because of the $104.2M of net debt, so the sales multiple understates what a buyer of the whole business would pay. Earnings multiples are unavailable, and the -21.3% free-cash-flow yield shows the business is still consuming capital.",
      "The relevant comparison is not the multiple itself but the margin the company can earn at scale. A contractor at 2.0x EV/sales and a 10% operating margin is expensive; the same contractor at a 25% margin is cheap. The current -28.0% margin does not settle that question.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts cover the stock, with a mean target of $27.11 and a range of $13.00 to $39.00. The mean is well above the $10.47 share price, which says more about how far sentiment has travelled than about the underlying contracts.",
      "The consensus models $919.8M of revenue and -$0.52 of EPS this fiscal year, then $1.17B and -$0.15 next year. For the next two quarters the contributor count drops to four and then two, so those nearer-term numbers rest on very few forecasts.",
      "A consensus built on two analysts for the following quarter is a thin signal. It is third-party context, not a Stockmonk view, and it should be read with the contributor count in view.",
    ],
  },
  risks: {
    intro:
      "Intuitive Machines carries the risks of a fixed-price government contractor with a small revenue base and a levered balance sheet. Mission success gets the headlines; contract terms and working capital decide the returns.",
    items: [
      {
        title: "Fixed-price contract execution",
        severity: "High",
        detail:
          "Cost overruns on a fixed-price mission are borne by the company. One difficult programme can consume the gross profit of several others.",
        watch:
          "Gross margin by period, contract loss provisions and changes in estimated costs to complete.",
      },
      {
        title: "Mission failure",
        severity: "High",
        detail:
          "A failed landing or launch destroys the payload, delays payment milestones and damages the record needed to win the next award.",
        watch:
          "Mission outcomes, schedule changes and any customer response to a failure.",
      },
      {
        title: "Revenue concentration",
        severity: "High",
        detail:
          "A small number of government awards dominate revenue, and budget timing decides when that revenue is recognised.",
        watch:
          "Backlog, award announcements and the share of revenue from the largest programmes.",
      },
      {
        title: "Balance sheet",
        severity: "Medium",
        detail:
          "Net debt of $104.2M and negative free cash flow leave little room for a delayed milestone payment.",
        watch:
          "Cash balance, debt covenants, interest expense and any new share issuance.",
      },
      {
        title: "Revenue quality",
        severity: "Medium",
        detail:
          "The jump from $43.3M to $183.6M between quarters needs an explanation that repeats. One-off awards flatter the growth rate.",
        watch:
          "Whether the new revenue level holds for four consecutive quarters.",
      },
    ],
    watchlist: [
      {
        title: "Backlog conversion",
        detail:
          "Booked work only matters if it turns into revenue within the forecast period.",
      },
      {
        title: "Gross margin",
        detail:
          "A 45.0% gross margin is the company's main asset. A decline would signal contract mispricing.",
      },
      {
        title: "Cash before debt",
        detail:
          "Compare cash with the $104.2M net debt position each quarter to see how much buffer remains.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Intuitive Machines has a genuine franchise in lunar delivery, a 45.0% gross margin and a revenue base that has just become several times larger. It also has a -28.0% operating margin, negative free cash flow and more debt than cash.",
      "The distinction that matters is that net income is not operating performance. The swing from a $61.8M profit in FY2023 to a $283.4M loss in FY2024 happened while operating losses stayed in the same broad range, which tells you the difference came from below the operating line.",
      "The company trades at 2.0x EV/sales, well below the rest of the peer group. Whether that discount is deserved depends on whether the new revenue level repeats and whether contract margins survive the next mission.",
    ],
    questions: [
      "What caused the revenue step-up between Q4 FY2025 and Q1 FY2026, and does it repeat?",
      "How much of the backlog is fixed-price work with cost risk attached?",
      "What is the cash balance relative to the $104.2M net debt?",
      "Can gross margin stay near 45.0% as revenue scales?",
    ],
  },
};
