import type { StockStory } from "./types";

export const KTOS: StockStory = {
  ticker: "KTOS",
  kicker: "Defense · Unmanned systems and satellite communications",
  title: "Kratos has $1.40B of net cash and almost no operating margin",
  dek: "Revenue grew 28.2% while operating margin sat at 0.4%. The 300.4x trailing multiple is a price for programmes moving from development into production.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.65B, up 28.2%, and the latest quarter grew 35.7% to $471.8M.",
    "Operating margin was 0.4% and free cash flow was -$123.0M, a -7.5% margin.",
    "Net cash of $1.40B sits against a $6.61B market value and a loss-making cash-flow statement.",
    "The 300.4x trailing P/E rests on consensus EPS of $0.85 this year versus $0.12 reported.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1069258/000106925826000013/ktos-20251228.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001069258&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Kratos Defense & Security Solutions sells engineering and hardware to the US defence sector and allied governments. Its work spans unmanned aircraft, satellite communications ground systems, missile defence, combat systems and cyber. It is a supplier rather than a prime: much of its revenue arrives as subcontracts or programme awards inside someone else's larger contract.",
      "That position explains the margins. Revenue was $1.65B over the trailing period, up 28.2%, but operating margin was 0.4% and free cash flow was -$123.0M. A subcontractor prices work against a prime's budget and absorbs the cost of any overrun it did not anticipate.",
      "The shares closed at $35.10 for a $6.61B market value. That is 300.4x trailing earnings and 62.5x EV/EBITDA, multiples that only make sense if margins recover sharply. Over the past year the stock fell 51.5% while revenue grew 28.2%, which is what happens when the price starts from an expectation the results do not confirm.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is a set of mostly small-to-mid-sized defence franchises rather than one product. Unmanned systems include target drones and jet-powered attritable aircraft, where the pitch is a capable aircraft at a price that allows commanders to accept losses. Satellite communications covers ground equipment and software that connects military users to commercial and government satellites.",
      "Missile defence, combat systems and cyber round out the mix. These are engineering-heavy businesses with long qualification cycles. A new supplier has to prove itself over years before it wins production volume, and once qualified it is difficult to displace, which cuts both ways: wins are durable, but the wait before them is long.",
    ],
    bullets: [
      {
        title: "Unmanned systems",
        detail:
          "Target drones and jet-powered attritable aircraft. Volume depends on defence budgets and on proving the aircraft in exercises.",
      },
      {
        title: "Satellite communications",
        detail:
          "Ground systems and software that let military users access commercial and government satellite capacity.",
      },
      {
        title: "Missile defence and combat systems",
        detail:
          "Subsystems and engineering work tied to specific programmes, often as a subcontractor to a prime.",
      },
      {
        title: "Cyber and training",
        detail:
          "Services work that recurs but carries lower gross margins than hardware production.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Defence contracting comes in two broad forms. Cost-reimbursable work pays the company's allowable costs plus a fee, so revenue is stable but the upside is capped. Fixed-price work pays an agreed amount, so the company keeps any saving and absorbs any overrun. Kratos runs both, and the mix decides how much a revenue surprise flows to profit.",
      "The 23.0% gross margin is typical of a business that passes through a lot of material and subcontractor content. Pass-through revenue is real but low-margin: it increases the revenue line without adding much gross profit. That is why a company with $1.65B of sales can report an operating margin of 0.4%.",
      "The operating leverage is programme-based. Development work is funded at low margin and consumes engineering capacity; production work that follows uses the same design and spreads fixed costs over many units. The gap between the two phases is the reason margins can move faster than revenue when a programme transitions.",
    ],
  },
  growth: {
    paragraphs: [
      "The dataset shows 11.1% annual revenue growth from $811.5M in FY2021 to $1.35B in FY2025. The recent rate is much faster: the latest quarter grew 35.7% year over year, following a 28.2% trailing rate. Something in the portfolio has moved from waiting to delivering.",
      "The consensus expects $1.80B of revenue and $0.85 of EPS this fiscal year, then $2.22B and $1.12 next year. Quarterly revenue estimates of $493.4M and $477.4M imply the current level holds. The EPS estimate is the more aggressive claim: it is more than seven times the $0.12 reported on a trailing basis.",
      "The drivers are production orders for unmanned systems, modernisation of satellite ground infrastructure and missile defence spending. What would slow it is a funding delay at the start of a fiscal year, a programme losing a competition, or a fixed-price development contract that costs more than expected.",
    ],
    bullets: [
      {
        title: "Unmanned production",
        detail:
          "Attritable aircraft only matter financially when they move from demonstration to volume orders.",
      },
      {
        title: "Satellite ground modernisation",
        detail:
          "Military demand for commercial satellite capacity requires ground equipment and software to manage it.",
      },
      {
        title: "Backlog",
        detail:
          "Funded backlog shows how much revenue is committed; unfunded backlog shows how much depends on future budgets.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The most striking feature of the annual record is how little operating income moved while revenue grew. Operating income was $27.9M in FY2021, -$2.9M in FY2022, $31.1M in FY2023, $29.0M in FY2024 and $25.6M in FY2025. Revenue over the same years went from $811.5M to $1.35B. The extra sales did not turn into extra operating profit.",
      "Quarterly margins show the same pattern in sharper relief. Operating margin was 1.1% in Q2 FY2025, 2.0% in Q3, 2.4% in Q4, then 1.3%, -0.3% and -1.0% in the first three quarters of FY2026. Revenue was accelerating while margin was going the other way, which points to mix or to the cost of ramping new work.",
      "Diluted EPS was $0.12, return on equity 0.6% and return on invested capital 0.2%. A return on capital of essentially zero means the business is currently earning nothing above the cost of the assets employed, however strategically important those assets are.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$123.0M, a -7.5% margin. The annual history is volatile: -$11.2M in FY2021, -$71.1M in FY2022, a positive $12.8M in FY2023, -$8.5M in FY2024 and -$137.4M in FY2025. The FY2025 swing is the one that matters, because it coincided with the revenue acceleration.",
      "Rapid revenue growth in defence hardware usually consumes working capital. Inventory is built before delivery, receivables grow with billings, and milestone payments lag the cost. A -$137.4M cash outflow on $1.35B of revenue is consistent with a business funding a ramp rather than one losing money on every sale.",
      "The $1.40B net cash position is the buffer. It is large relative to the cash burn and gives the company room to absorb a delayed payment or an unfunded programme start. It does not fix the margin problem, but it buys time to fix it.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $35.10 the company trades at 300.4x trailing earnings, 62.5x EV/EBITDA and 3.2x EV/sales. The earnings multiple is almost meaningless at this level of profitability: a small change in the denominator moves it by hundreds of turns. EV/EBITDA is more stable but still high for a defence supplier with a 0.4% operating margin.",
      "The peer set shows how unusual that is. AeroVironment trades at 47.4x EV/EBITDA and 2.9x EV/sales; Rocket Lab at 38.2x EV/sales but with negative earnings; Planet Labs at 9.8x EV/sales. Kratos is priced closer to a growth software business than to a hardware subcontractor.",
      "What the multiple assumes is a margin recovery. If operating margin moved from 0.4% to something in the high single digits on $1.80B of revenue, the earnings base would be transformed and the multiple would fall without the share price moving. That is the mechanism behind the consensus EPS estimate.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-five analysts cover Kratos, with a mean target of $88.16 and a range of $50.00 to $150.00. The mean is far above the $35.10 share price, which is unusual and worth noticing: targets can lag a sharp price decline.",
      "Their models produce $1.80B of revenue and $0.85 of EPS this fiscal year, then $2.22B and $1.12 next year. The revenue estimates are consistent with the current run rate; the EPS estimates require the margin recovery described above.",
      "The dispersion between the high and low target is wide even for a defence name. That reflects genuine disagreement about programme timing rather than different views on the current quarter.",
    ],
  },
  risks: {
    intro:
      "Kratos is exposed to procurement cycles, programme transitions and its own ability to convert revenue into margin. The balance sheet is strong enough that none of these is an immediate solvency question.",
    items: [
      {
        title: "Programme transition",
        severity: "High",
        detail:
          "Development contracts carry low margins. If production orders do not follow, the engineering cost stays and the profit does not arrive.",
        watch:
          "Award announcements, funded backlog and the split between development and production revenue.",
      },
      {
        title: "Margin dilution from growth",
        severity: "High",
        detail:
          "Revenue is growing faster than operating income, so each new dollar is currently less profitable than the average.",
        watch:
          "Gross margin and operating margin by quarter against revenue growth.",
      },
      {
        title: "Fixed-price development",
        severity: "Medium",
        detail:
          "A fixed-price contract that runs over budget turns anticipated profit into a charge and can consume a year of margin.",
        watch:
          "Contract loss provisions and changes in estimated costs at completion.",
      },
      {
        title: "Budget dependence",
        severity: "Medium",
        detail:
          "Revenue depends on defence appropriations and on allied governments choosing the same programmes.",
        watch:
          "Backlog, book-to-bill and any pause in awards at the start of a fiscal year.",
      },
      {
        title: "Cash conversion",
        severity: "Medium",
        detail:
          "Working capital has absorbed cash as revenue grew. A longer conversion cycle would shrink the net cash cushion.",
        watch:
          "Days sales outstanding, inventory and operating cash flow.",
      },
    ],
    watchlist: [
      {
        title: "Book-to-bill",
        detail:
          "Orders divided by revenue shows whether the backlog is growing or being consumed.",
      },
      {
        title: "Operating margin",
        detail:
          "The whole valuation depends on this moving from 0.4% toward the high single digits.",
      },
      {
        title: "Funded versus unfunded backlog",
        detail:
          "Only funded work is close to revenue; unfunded work depends on future appropriations.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Kratos has real defence franchises, a $1.40B net cash position and revenue growing at 28.2%. It also has a 0.4% operating margin, negative free cash flow and a trailing earnings multiple of 300.4x.",
      "The mechanism to understand is that revenue growth is not the same as earnings growth. Between FY2021 and FY2025 revenue rose from $811.5M to $1.35B while operating income fell from $27.9M to $25.6M. A company can get bigger without getting more profitable.",
      "The question that decides the investment is whether the current revenue is development work that leads to production, or production work that will never earn a decent margin. The cash balance gives management time to prove which.",
    ],
    questions: [
      "Which programmes are moving from development into production this year?",
      "How much of the $1.65B revenue is cost-reimbursable versus fixed-price?",
      "What operating margin does the consensus EPS of $0.85 imply?",
      "Why did free cash flow fall to -$137.4M in FY2025 as revenue grew?",
    ],
  },
};
