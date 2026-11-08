import type { StockStory } from "./types";

export const RTX: StockStory = {
  ticker: "RTX",
  kicker: "Industrials · Aerospace and defence",
  title: "RTX is three businesses with three different clocks",
  dek: "Collins and Pratt earn money from flight hours, Raytheon from government budgets. Reading the group means separating an aftermarket annuity from a procurement queue.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $96.0B, up 11.6%, at an 11.8% operating margin and an 8.8% net margin.",
    "Free cash flow was $9.5B, a 9.9% margin, against $28.2B of net debt at 1.8x EBITDA.",
    "Return on invested capital is 9.0%, the lowest in this industrial peer group, which is the central question about the business.",
    "The latest quarter was the best in the series: $25.0B of revenue at a 13.4% operating margin and $1.89 of EPS.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/101829/000010182926000006/rtx-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000101829&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "RTX sells into two very different budgets. Collins Aerospace supplies avionics, landing gear, wheels and brakes, interiors and actuation to aircraft makers and airlines. Pratt & Whitney builds commercial and military engines and supports the fleet in service. Raytheon builds missiles, radars, air-defence systems and sensors for governments.",
      "The group produced $96.0B of trailing revenue, up 11.6%, at an 11.8% operating margin and an 8.8% net margin. The latest quarter, Q3 FY26, was the strongest of the six shown here: $25.0B of revenue, a 13.4% operating margin and $1.89 of diluted EPS, against $1.41 a year earlier.",
      "At $189.53 the market value is $255.8B, or 30.4x trailing earnings and 18.1x EV/EBITDA. The shares sit about 38% of the way up a 52-week range of $166.74 to $226.88. The balance sheet carries $28.2B of net debt, or 1.8x EBITDA — modest for an investment-grade defence contractor, but a real constraint compared with the net cash positions elsewhere in this group.",
    ],
    quote:
      "Collins and Pratt are paid by the hour flown. Raytheon is paid by appropriation. The three rarely move in the same direction at the same time, which is the point of owning them together.",
  },
  whatItDoes: {
    paragraphs: [
      "Collins is the systems supplier. It sells to the two large airframers as original equipment and then to airlines and maintenance shops for spares, repairs and upgrades. Original equipment is priced competitively because winning the platform position determines who supplies the aftermarket for the next twenty years; the aftermarket is where the margin is.",
      "Pratt & Whitney is the engine business, with commercial geared turbofan engines, military engines and a large installed base. Engines are sold at low margin and serviced for decades, so the programme economics depend on how well the fleet performs in service. A fleet that needs more shop visits than planned earns more service revenue but damages customer relationships and raises warranty costs.",
      "Raytheon is the defence business: missile systems, integrated air defence, radars, sensors and effectors. Revenue comes from government contracts with cost-plus or fixed-price structures, and the margin depends on how well the company executes against the cost it bid. Backlog is long and visibility is high, but so is the exposure to appropriations and to fixed-price development programmes that can turn unprofitable.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The first thing to know about the reported gross margin of 5.8% is that it is not comparable with anything. For a company with this much aftermarket revenue, the cost-of-sales line is a presentation choice, and the number tells you more about accounting than about economics. Use the 11.8% operating margin and the 9.0% return on invested capital instead.",
      "The second thing is that each segment earns its margin differently. Collins earns it on spares pricing and on the mix of aftermarket versus original equipment. Pratt earns it on the spread between the price of a shop visit and the cost of parts, labour and warranty. Raytheon earns it on contract execution, where a fixed-price programme that overruns can lose money on every unit delivered.",
      "That mix explains why the group margin is only 11.8% despite strong franchises. Defence contracting is structurally lower-margin than commercial aftermarket, and Pratt's engine programmes carry deferred costs that weigh on returns while the fleet is young. The operating leverage comes when the commercial installed base matures and defence programmes move from development into production.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $64.4B in 2021 to $67.1B, $68.9B, $80.7B and $88.6B in the following years, and reached $96.0B on a trailing basis. The 2024 jump is the largest single step, and it coincides with the period when commercial aftermarket demand recovered and defence deliveries increased.",
      "The latest quarter grew 11.1% to $25.0B. The attributed consensus expects $97.4B of revenue and $7.70 of EPS this fiscal year, then $105.0B and $8.06 next year. That is mid-single-digit EPS growth on high-single-digit revenue growth, which implies the margin improves only slowly.",
      "The demand drivers are visible. Air traffic growth raises flight hours, which raises spares and shop visits. Airframers are still working through order backlogs, which sustains original equipment volumes. And defence budgets in the United States and Europe are funding missile and air-defence production. The risk is that these three do not peak together: a traffic slowdown would hit Collins and Pratt while defence spending kept growing, and the reverse is also possible.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly margin sequence is 9.9%, 11.2%, 10.7%, 11.6%, 11.4% and 13.4%. The improvement in the latest quarter is the most important data point in the file, because it came with 11.1% revenue growth and a jump in EPS from $1.41 to $1.89. If that margin holds, the annual numbers will look different from the trailing ones.",
      "The annual record is uneven. Operating income was $5.1B in 2021, $5.5B in 2022, $3.6B in 2023, $6.5B in 2024 and $9.3B in 2025. The 2023 dip is the kind of thing that happens in this business: a programme charge or a cost-estimate change can wipe out a year of progress, and it is why the margin trend matters more than any single quarter.",
      "Return on equity is 11.8% and return on invested capital is 9.0%. For a company with a 30.4x earnings multiple, those are modest returns. The gap between the multiple and the return is the whole investment debate: either returns rise as the commercial aftermarket matures, or the market is paying for defence scarcity value rather than for compounding.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $9.5B, a 9.9% margin, against net income of roughly $8.4B implied by the 8.8% net margin. The conversion is slightly better than one-for-one, which is normal for a contractor that collects progress payments on defence work while its commercial receivables turn quickly.",
      "Net debt of $28.2B is 1.8x EBITDA. That is manageable, but it is a different starting point from GE's $44.7B net cash position. Debt service and the cost of carrying it compete with buybacks and with the investment needed to fix troubled programmes.",
      "The dividend yield is 1.5%, and the payout is supported by the cash flow. At 26.9x free cash flow and a 3.7% FCF yield, the shares are not priced for cash return; they are priced for earnings growth and for the durability of the defence backlog.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 30.4x trailing earnings and 18.1x EV/EBITDA, RTX sits in the middle of this industrial group on EBITDA and near the top on earnings. Caterpillar trades at 21.6x and 14.5x, Eaton at 34.0x and 20.9x, GE at 36.7x and 24.3x, and Vertiv at 33.6x and 22.7x.",
      "The earnings multiple is the harder one to defend. A 30.4x P/E on an 11.8% operating margin and a 9.0% ROIC means the market expects both margins and returns to rise. The EBITDA multiple is more forgiving because it strips out the interest cost on the $28.2B of debt, which is the right way to compare a leveraged defence contractor with a net-cash industrial.",
      "There is no Stockmonk target price. The useful comparison is against the company's own history: if the last quarter's 13.4% operating margin is the new run rate, the trailing multiple overstates the price. If it was a one-quarter mix effect, it understates it.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-three analysts contribute to the attributed consensus, with a mean target of $227.91 and a range of $200.00 to $250.00. That is a narrow range by the standards of this group, and it suggests the sell side agrees on the direction of the business even if it disagrees on pace.",
      "Estimates call for $97.4B of revenue and $7.70 of EPS this fiscal year, then $105.0B and $8.06 next year. The implied growth in EPS is about 5%, well below the revenue growth, which means margins are expected to be roughly flat after the strong third quarter.",
      "That is a conservative assumption, and it is worth asking why. Defence programme charges, engine warranty costs and original-equipment mix can all absorb a margin improvement. The consensus is not a Stockmonk view, but the shape of it — revenue up, EPS nearly flat — is a useful statement about where analysts think the risk sits.",
    ],
  },
  risks: {
    intro:
      "The order book is long and the customer base is creditworthy. The risks are programme execution, the fixed-price structure of defence work, and a valuation that assumes returns improve from a low base.",
    items: [
      {
        title: "Programme charges",
        severity: "High",
        detail:
          "Fixed-price development and production contracts can turn unprofitable when costs rise. A single charge can erase a year of margin progress, as 2023 showed.",
        watch:
          "Segment operating profit and any change in estimated costs to complete.",
      },
      {
        title: "Engine fleet durability",
        severity: "High",
        detail:
          "Pratt's aftermarket economics depend on how often engines come off wing. More shop visits raise revenue but also warranty cost and customer friction.",
        watch:
          "Shop-visit volumes, time on wing and warranty provisions.",
      },
      {
        title: "Defence appropriations",
        severity: "Medium",
        detail:
          "Raytheon revenue follows government budgets and continuing resolutions. A delay in appropriations slows orders without changing the long-run need.",
        watch:
          "Raytheon backlog, book-to-bill and the timing of contract awards.",
      },
      {
        title: "Air traffic",
        severity: "Medium",
        detail:
          "Collins and Pratt are paid per hour flown. A traffic shock cuts high-margin service revenue faster than costs.",
        watch:
          "Global flight hours and commercial aftermarket sales growth.",
      },
      {
        title: "Leverage and returns",
        severity: "Medium",
        detail:
          "Net debt of $28.2B and a 9.0% ROIC leave less room than peers to absorb a downturn or fund a large programme overrun.",
        watch:
          "Net debt to EBITDA, interest cost and any change in the capital plan.",
      },
    ],
    watchlist: [
      {
        title: "Segment margins",
        detail:
          "Collins, Pratt and Raytheon have different economics. Consolidated margin can hide a deterioration in one of them.",
      },
      {
        title: "Aftermarket growth",
        detail:
          "Spares and repairs are the highest-margin revenue. Growth below flight hours signals a share or pricing problem.",
      },
      {
        title: "Contract provisions",
        detail:
          "Watch changes in estimated costs on fixed-price programmes before they show up in the margin.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "RTX owns three strong franchises with long backlogs and a genuine aftermarket annuity. Revenue reached $96.0B, free cash flow $9.5B, and the latest quarter showed a 13.4% operating margin that was the best in the period covered here.",
      "What is not known is whether that quarter marks a new level or a favourable mix. Returns are the weak point: a 9.0% ROIC is below what most industrials earn, and it is the number that has to improve for the 30.4x earnings multiple to make sense.",
      "The reader should leave with a clear split: the commercial side is a flight-hour business with pricing power, and the defence side is a budget business with execution risk. Valuing them as one company averages two different things.",
    ],
    questions: [
      "Is the 13.4% quarterly operating margin repeatable, and which segment drove it?",
      "How much of Pratt's aftermarket revenue is contracted versus priced per shop visit?",
      "What would a 10% cut in flight hours do to consolidated operating profit?",
      "Why is return on invested capital only 9.0% when the franchises look this strong?",
    ],
  },
};
