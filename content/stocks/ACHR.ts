import type { StockStory } from "./types";

export const ACHR: StockStory = {
  ticker: "ACHR",
  kicker: "Advanced air mobility · Electric aircraft development",
  title: "Archer is a $3.42B company with $6.9M of revenue",
  dek: "The income statement is a cost report: a -13666.7% operating margin and a -$660.0M cash burn, funded by $1.48B of net cash. The aircraft has not entered service.",
  readingMinutes: 9,
  takeaways: [
    "Enterprise value is 280.9x trailing sales on $6.9M of revenue.",
    "Operating margin was -13666.7% and free cash flow was -$660.0M.",
    "Net cash of $1.48B is what stands between the company and its next financing.",
    "Consensus revenue of $138.0M next fiscal year assumes commercial service begins.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1824502/000182450226000019/achr-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001824502&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Archer Aviation is developing an electric vertical takeoff and landing aircraft for passenger transport in cities. It designs, intends to manufacture and intends to operate the aircraft. It was founded in 2018, is based in Palo Alto and employs 390 people.",
      "At this stage the income statement is not a description of a business, it is a description of spending. Revenue was $6.9M over the trailing period while the operating loss produced a -13666.7% margin. Gross margin of 14.5% on that revenue is not a guide to anything: with so little sold, the percentage is arithmetic, not economics.",
      "The market value is $3.42B at $4.44 per share. After net cash, enterprise value is 280.9x trailing sales, the highest multiple in this group by a wide margin. The stock has traded between $3.62 and $9.50 in the past year and is down 50.0% over twelve months.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "The product is a piloted electric aircraft that takes off vertically, flies like a plane and lands vertically. It is aimed at trips of a few dozen miles inside and between cities, where a road journey is slow and a conventional helicopter is expensive and noisy. The company also designs the manufacturing process, because an aircraft that cannot be built repeatedly at a known cost has no business case.",
      "Getting to service requires type certification of the design, approval of the production system and operational authorisation. Those are sequential, and each one costs money before it produces revenue. The company is therefore spending on engineering, test aircraft, tooling and certification work years ahead of the first fare.",
    ],
    bullets: [
      {
        title: "Aircraft development",
        detail:
          "Design, build and test electric vertical takeoff aircraft. Engineering is the largest cost line at this stage.",
      },
      {
        title: "Certification",
        detail:
          "Regulatory approval of design and production. No approval means no passenger revenue.",
      },
      {
        title: "Manufacturing",
        detail:
          "A factory that must move from prototypes to serial production at a predictable unit cost.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There is no proven revenue model yet, only a plan. The plan is to earn money from carrying passengers, and possibly from selling or leasing aircraft to operators. Either route depends on the same three variables: the price of the aircraft, the cost of keeping it flying, and the number of paying seats per hour.",
      "What can be measured today is the cost base. FY2025 produced a $729.3M operating loss, made up of people, facilities, test aircraft and certification work. Those costs do not fall when a milestone slips; they accumulate. That is why the operating margin is so extreme and why it will stay extreme until revenue scales.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue growth is not measurable in the usual way because the base was zero in FY2023 and FY2024. The figures are $300,000 in FY2025, $1.6M in Q1 FY2026 and $5.0M in Q2 FY2026. Growth rates off a base that small are noise.",
      "The consensus expects $15.1M of revenue this fiscal year and $138.0M next. That step change is the entire thesis: it assumes certification and the start of commercial operations within the forecast horizon. The next two quarterly estimates are $3.6M and $4.6M, both below the $5.0M just reported, so the analysts are not treating current revenue as a run rate.",
      "For the next fiscal year's number to be reached, the company has to certify the aircraft, build enough of them, and find places to operate. Each is a separate risk with a separate timetable.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating losses have been large every year: $358.3M in FY2021, $347.4M in FY2022, $446.9M in FY2023, $509.7M in FY2024 and $729.3M in FY2025. The FY2025 step-up is the largest, and it happened in the year the company moved from design toward certification and production.",
      "The quarterly net losses show the same trajectory: $188.9M in Q4 FY2025, $217.7M in Q1 FY2026 and $263.2M in Q2 FY2026. Diluted EPS was -$1.09, return on equity -41.7% and return on invested capital -171.2%.",
      "A return on invested capital of -171.2% is not a comparison to the cost of capital; it is a measure of how little revenue the invested capital has produced so far. It will improve only when aircraft generate fares, not when more capital is raised.",
    ],
  },
  cash: {
    paragraphs: [
      "The trailing cash outflow was -$660.0M, a -9565.2% margin. The annual figures are -$111.9M, -$207.3M, -$315.9M, -$450.6M and -$511.7M from FY2021 to FY2025, so the burn has grown every year as the programme advanced.",
      "Net cash is $1.48B. Against a trailing outflow of $660.0M, that is a runway measured in a small number of years, and the calculation is the first thing a reader should do: divide the cash by the burn. Comparing that answer with the certification timeline is the core of the investment question.",
      "The free-cash-flow yield is -19.3%, meaning the annual burn equals about a fifth of the market value. That is a company funding itself from the capital markets rather than from customers, and each raise dilutes the holders who fund the gap.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 280.9x EV/sales, the multiple is not a valuation of revenue; it is a price for certification. The trailing P/E of -4.1x and EV/EBITDA of -2.1x are negative because earnings and EBITDA are negative, and they carry no information beyond the sign.",
      "Joby Aviation, the closest comparable, trades at 30.5x EV/sales on $148.8M of revenue. Archer trades at 280.9x on $6.9M. The gap is mostly a denominator effect: a small amount of revenue makes any multiple enormous. It also means the two companies are being priced on different assumptions about how quickly each reaches service.",
      "The honest valuation question is what the company is worth if certification succeeds and what it is worth if it slips another two years. The current price embeds a strong view on the first.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nine analysts cover Archer. The mean target is $10.89 with a range of $7.00 to $18.00. Even the low end is above the $4.44 share price, which says the sell side is modelling a successful certification path.",
      "The estimates are $15.1M of revenue and -$0.96 of EPS this fiscal year, then $138.0M and -$0.81 next year. Revenue rises sharply while the loss per share falls only modestly, which is consistent with heavy spending continuing through the ramp.",
      "These forecasts are scenarios about a regulated approval process, not projections derived from a trading history. Treat the range as the more useful output.",
    ],
  },
  risks: {
    intro:
      "Archer's risks are concentrated in one place: the gap between the cash it has and the approvals it needs. Everything else is secondary until an aircraft is certified and carrying passengers.",
    items: [
      {
        title: "Certification",
        severity: "High",
        detail:
          "Design and production approval are prerequisites for revenue. A delay adds cost without adding sales.",
        watch:
          "Certification milestones, test-flight progress and regulator correspondence.",
      },
      {
        title: "Funding",
        severity: "High",
        detail:
          "A -$660.0M trailing burn against $1.48B of net cash means another financing is likely before the business funds itself.",
        watch:
          "Cash used in operations, capital expenditure and share count.",
      },
      {
        title: "Manufacturing cost",
        severity: "High",
        detail:
          "A prototype does not prove serial production. Unit cost at volume decides whether the aircraft can be sold or operated profitably.",
        watch:
          "Aircraft produced and any disclosed cost per unit.",
      },
      {
        title: "Route economics",
        severity: "Medium",
        detail:
          "Passenger demand, landing sites and utilisation determine whether the service covers its operating cost.",
        watch:
          "Launch markets, announced routes and load factors once service starts.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "Several well-funded developers are chasing the same certification and the same early cities.",
        watch:
          "Certification order, partner commitments and launch timing relative to peers.",
      },
    ],
    watchlist: [
      {
        title: "Cash divided by burn",
        detail:
          "The runway calculation is the simplest and most important number in the file.",
      },
      {
        title: "Certification stage",
        detail:
          "Each approval reduces the technical risk and brings revenue closer.",
      },
      {
        title: "Share count",
        detail:
          "Dilution is how the funding gap is paid for, and it directly reduces per-share value.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Archer has $1.48B of net cash, a design in certification and almost no revenue. The trailing figures are $6.9M of sales, a -13666.7% operating margin and -$660.0M of free cash flow.",
      "The trap to avoid is reading a percentage margin on a tiny revenue base as meaningful. The dollar loss and the dollar cash burn tell you what the company spends; the revenue tells you how little it has sold.",
      "The question that matters is not whether the multiple is high, but whether certification arrives before the cash runs out. That is a timetable question, and the 52-week range of $3.62 to $9.50 shows the market repricing it continuously.",
    ],
    questions: [
      "How many years of spending does $1.48B of net cash cover?",
      "Which certification approvals remain, and in what order?",
      "What unit cost is needed for the aircraft to be viable?",
      "How many aircraft must be built before the service can launch?",
    ],
  },
};
