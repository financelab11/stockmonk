import type { StockStory } from "./types";

export const IBM: StockStory = {
  ticker: "IBM",
  kicker: "Technology · Enterprise software and services",
  title: "IBM's cash flow is steadier than its revenue",
  dek: "Revenue compounded at 2.7% a year, yet free cash flow stayed above $9B in every year of the record. The gap between the two lines is the business model, and it is what the multiple is built on.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $69.87B, up 6.8%, with operating margin of 15.0%.",
    "Free cash flow was $14.66B, a 21.0% margin, on a $32.36B net cash balance.",
    "Gross margin is 58.0%, but a large services payroll takes most of it.",
    "At $245.00 the shares trade at 20.7x earnings and 15.8x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/51143/000005114326000010/ibm-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000051143&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "IBM sells three things to large organisations: software, consulting and hardware. The software business covers operating systems, automation, data and AI tools, and transaction processing for banks and insurers. Consulting designs and runs technology projects. Infrastructure sells mainframes, storage and the Power server line.",
      "The mix explains the financial profile. Gross margin is 58.0%, which is software-like, but operating margin is 15.0%, because the company carries 345,900 employees and a large services organisation. A dollar of consulting revenue costs more to deliver than a dollar of software licence revenue, and the blended margin reflects that.",
      "At $245.00 the market capitalisation is $231.6B, or 20.7x trailing earnings, 15.6x EV/EBITDA and 15.8x free cash flow. The balance sheet holds $32.36B of net cash, which is unusual for a company of this size and a leftover from decades of cash generation. The stock is 34% of the way up a 52-week range of $199.19 to $332.46 and fell 19.5% over the past year.",
    ],
    quote:
      "IBM is not a growth company. It is a cash-flow company that occasionally grows, and the two are valued differently.",
  },
  whatItDoes: {
    paragraphs: [
      "Software is the largest and most valuable part. It includes Red Hat's operating system and container tools, automation and integration products, data and AI platforms, and the transaction-processing software that runs core banking and insurance systems. Much of it is subscription or term licence, renewed annually, which makes revenue predictable once the contract is signed.",
      "Consulting is the people business. It sells business transformation, systems integration, cloud migration and managed services, usually on multi-year contracts. Revenue is recognised as work is performed, margins are lower than software, and the segment is sensitive to how many projects clients are willing to start.",
      "Infrastructure is the hardware business: mainframes, storage and Power servers. It is cyclical and tied to product generations. A new mainframe launch drives a wave of upgrades and pulls through software and services, and the years between launches are quieter. That cycle is why quarterly revenue ranges from $15.92B to $19.69B within a single fiscal year.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Software revenue is recurring and high-margin. A customer that runs core banking on IBM software does not switch systems casually, so renewals are the base of the revenue and price increases are possible at renewal. Consulting revenue is project-based and people-intensive: the company bills for time and materials or commits to a fixed outcome, and the margin depends on utilisation and on how well the project is scoped.",
      "The cost structure is dominated by people. Services delivery, software development, sales and administration all sit in operating expense, which is why a 58.0% gross margin turns into a 15.0% operating margin. The company has a large fixed cost base in headcount and real estate, and revenue growth spreads that base slowly.",
      "Hardware is the smallest lever but the most visible. A mainframe cycle lifts revenue and margin at the same time, because the hardware carries a reasonable margin and pulls through high-margin software. When the cycle is between generations, the same dynamic works in reverse.",
    ],
    bullets: [
      {
        title: "Software",
        detail:
          "Subscriptions and term licences. Recurring, high margin, and the reason the cash flow is stable.",
      },
      {
        title: "Consulting",
        detail:
          "Multi-year projects and managed services. Lower margin, people-heavy, and sensitive to client budgets.",
      },
      {
        title: "Infrastructure",
        detail:
          "Mainframes, storage and Power servers. Cyclical, tied to product launches, and a pull-through for software.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 2.7% a year across the five fiscal years in the record, rising from $57.35B in FY2021 to $69.87B on a trailing basis. Most of that came in FY2025, when revenue jumped from $62.75B to $67.53B. A single year of that size in a company this large usually reflects acquisitions as well as organic growth.",
      "The latest quarter grew 4.7% to $17.10B, a slower rate than the annual figure. The attributed consensus expects $70.57B this fiscal year and $73.24B next year, with EPS of $12.42 and $13.23. Next quarter is expected to produce $20.38B, which reflects the seasonal strength of the December quarter.",
      "The growth drivers are software renewals, consulting bookings and the mainframe cycle. The brake is that all three are mature markets where IBM competes with larger cloud platforms and with offshore services firms. Growth has to come from mix, price and share, not from a new category.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual operating record is uneven: $4.84B in FY2021, $1.16B in FY2022, $8.69B in FY2023, $5.80B in FY2024 and $10.33B in FY2025. The swings are larger than the revenue changes, which tells you that restructuring charges, acquisition costs and one-off items move the operating line more than the underlying business does.",
      "Quarterly operating margin shows the seasonality clearly: 15.3% in Q2 FY2025, 14.9% in Q3, 21.0% in Q4, then 8.7% in Q1 FY2026, 14.4% in Q2 and 14.6% in Q3. The Q4 peak is software renewal season; the Q1 trough is when annual charges and lower hardware volume land. Comparing a single quarter with the annual figure without adjusting for that pattern is misleading.",
      "Net margin is 16.0%, higher than the operating margin. That gap comes from items below the operating line, and it means the net income figure is not a clean read on operating performance. Diluted EPS was $11.75 on a trailing basis. Return on equity and return on invested capital are not reported, so the reader has to rely on the margin and cash-flow measures.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $14.66B, a 21.0% margin, and it has been remarkably stable: $10.73B in FY2021, $9.09B in FY2022, $12.69B in FY2023, $12.40B in FY2024 and $12.10B in FY2025. Revenue moved by $12B over the same period; cash flow moved by much less. That stability is the core of the investment case.",
      "The stability comes from the mix. Software renewals arrive whether or not new projects start, and consulting contracts are multi-year. Depreciation and amortisation of acquired assets are large, which lifts cash flow above net income. Working capital moves with the consulting business but does not dominate the total.",
      "Net cash is $32.36B, equivalent to more than two years of free cash flow. That gives IBM room to make acquisitions, pay dividends and fund a buyback without stressing the balance sheet. It also explains why the market is willing to apply an earnings multiple to a low-growth business: the cash is real and the balance sheet is not a risk.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 20.7x trailing earnings, 15.6x EV/EBITDA, 2.9x sales and 15.8x free cash flow, with a 6.3% free-cash-flow yield. For a company growing revenue at 2.7% a year, that is a full multiple on earnings and a more reasonable one on cash flow.",
      "The peer table puts it in context: Microsoft at 27.6x earnings with 17.9% growth and a 47.1% operating margin, Oracle at 18.6x with 21.6% growth and a 32.1% operating margin. IBM at 20.7x is priced above Oracle on earnings while growing more slowly and earning a lower margin. The market is paying for the stability of the cash flow and the net cash balance.",
      "The relevant comparison is between the free-cash-flow yield and the growth rate. A 6.3% yield on a business that grows 2.7% implies a total return in the high single digits if the multiple holds. That is a bond-like proposition, and it is priced like one.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-three analysts contribute to the attributed consensus, with a mean target of $259.30 and a range of $174.00 to $300.00. The mean is above the $245.00 close; the low end is well below it. The spread reflects different assumptions about the mainframe cycle and about consulting demand.",
      "Estimates call for $70.57B of revenue and $12.42 of EPS this fiscal year, then $73.24B and $13.23. Next quarter is expected to produce $20.38B and $4.63, which is consistent with the seasonal December peak. The current-year revenue estimate is only slightly above the trailing figure, so the forecasters are not expecting an acceleration.",
      "These are third-party numbers. The mean target implies a modest return from the current price, which is what a stable cash-flow business should show when it is fairly valued.",
    ],
  },
  risks: {
    intro:
      "IBM's risks are competitive and execution-related. The balance sheet is a source of strength; the uncertainty is whether the software and consulting franchises grow faster than their markets.",
    items: [
      {
        title: "Consulting demand",
        severity: "High",
        detail:
          "Consulting is the largest people business and it depends on clients starting new projects. In a budget squeeze, discretionary work is deferred first.",
        watch:
          "Consulting bookings, backlog and revenue growth.",
      },
      {
        title: "Mainframe cycle",
        severity: "Medium",
        detail:
          "Infrastructure revenue and the software attached to it rise and fall with product launches. A long gap between generations leaves a hole.",
        watch:
          "Infrastructure revenue and commentary on the next product cycle.",
      },
      {
        title: "Competition from cloud platforms",
        severity: "High",
        detail:
          "Large cloud vendors sell integrated software and infrastructure that overlaps with IBM's middleware and consulting offerings.",
        watch:
          "Software revenue growth and renewal rates.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "IBM has bought much of its recent growth. Large acquisitions add goodwill and amortisation, and they only pay off if the acquired revenue grows.",
        watch:
          "Goodwill, intangible amortisation and segment growth.",
      },
      {
        title: "Currency and geographic exposure",
        severity: "Low",
        detail:
          "Revenue is spread across more than 170 countries, so a strong dollar reduces reported revenue even when local demand is stable.",
        watch:
          "Constant-currency growth versus reported growth.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "$14.66B is the number that supports the dividend, the buyback and the acquisitions.",
      },
      {
        title: "Software renewal rates",
        detail:
          "Recurring revenue is the base. A decline in renewals shows up in cash flow before it shows up in revenue.",
      },
      {
        title: "Consulting bookings",
        detail:
          "Bookings lead revenue in services by several quarters.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "IBM is a mature technology company with a software annuity, a services business and a hardware cycle. The 58.0% gross margin and $14.66B of free cash flow show that the underlying products are valuable. The 15.0% operating margin shows how much of that value is consumed by the cost of selling and delivering them.",
      "The valuation is full on earnings and reasonable on cash flow. A 6.3% free-cash-flow yield with 2.7% revenue growth is a defensible proposition for an investor seeking income and stability, but it is not a growth investment.",
      "The reader should watch three lines: software renewals, consulting bookings and the mainframe cycle. Together they explain most of the variance in a year that otherwise looks boring.",
    ],
    questions: [
      "How much of the FY2025 revenue jump was acquired rather than organic?",
      "What share of software revenue renews annually, and at what price increase?",
      "How dependent is the cash flow on depreciation of acquired assets?",
      "What would a weak mainframe year do to the 21.0% free-cash-flow margin?",
    ],
  },
};
