import type { StockStory } from "./types";

export const AVAV: StockStory = {
  ticker: "AVAV",
  kicker: "Defense · Uncrewed aircraft and tactical missiles",
  title: "AeroVironment doubled its revenue and lost money doing it",
  dek: "Trailing revenue rose 84.4% to $2.00B, but the latest quarter grew only 5.7% and the year produced a -12.6% operating margin with -$4.01 of diluted EPS.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $2.00B, up 84.4%, while the latest quarter grew just 5.7%.",
    "Operating margin was -12.6% and diluted EPS was -$4.01, after two profitable years.",
    "Free cash flow was only -$25.0M, a -1.2% margin, so the loss has not yet become a cash problem.",
    "Net debt of $140.7M is small against a $5.63B market value, but the trailing P/E is meaningless.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1368622/000110465926078906/avav-20260430x10k.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001368622&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "AeroVironment makes small uncrewed aircraft, loitering munitions and tactical missile systems for government customers. Its products sit in the part of defence spending that has been growing: cheap, expendable systems that a commander can afford to lose, rather than exquisite platforms bought in small numbers.",
      "The reported revenue line has changed scale. Trailing revenue was $2.00B, up 84.4%, against $820.6M in FY2025 and $716.7M in FY2024. Growth of that size in one year is not organic, and the latest quarter grew just 5.7%, which tells you the headline rate reflects a different revenue base rather than a sudden surge in demand for the old one.",
      "Profitability went the other way. Operating margin was -12.6%, net margin -10.1% and diluted EPS -$4.01, after operating income of $40.8M in FY2025 and $71.8M in FY2024. At $112.76 the market value is $5.63B, the shares are down 65.6% over twelve months, and the 52-week high was $408.25.",
    ],
    quote:
      "When a company's revenue doubles and its operating income turns negative in the same year, the first task is to separate what was bought from what was earned.",
  },
  whatItDoes: {
    paragraphs: [
      "The core franchise is small drones and tactical weapons. Loitering munitions are designed to wait above a target and then attack it; small reconnaissance drones give a squad its own eyes. Both are consumables in a way that a fighter aircraft is not, so demand depends on how many units militaries expect to use rather than on how many platforms they field.",
      "Around that core sits a broader set of engineering businesses covering space, directed energy and cyber, which came with the larger revenue base. Those units sell different things to different buyers inside the same government, which diversifies the customer list but complicates the margin picture: a consolidated gross margin of 26.5% blends hardware production with services and development work.",
    ],
    bullets: [
      {
        title: "Loitering munitions",
        detail:
          "Expendable attack drones sold in production lots. Volume and unit cost decide the margin.",
      },
      {
        title: "Small uncrewed aircraft",
        detail:
          "Reconnaissance and battlefield awareness systems sold to armies and special forces.",
      },
      {
        title: "Tactical missile systems",
        detail:
          "Precision weapons with long qualification cycles and customer-specific integration work.",
      },
      {
        title: "Sustainment and training",
        detail:
          "Spares, repairs, software updates and operator training that recur after the initial sale.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Most revenue is hardware sold under government contracts, either as production lots or as development programmes. Production lots reward manufacturing efficiency: the design is fixed, the customer orders in batches, and each unit shipped carries a known bill of materials. Development work is the opposite, priced against an estimate of effort that may prove wrong.",
      "The 26.5% gross margin is thin for a defence business, and it is thin because the mix includes low-margin engineering and pass-through content. Operating leverage comes from volume: if the same factory and engineering base ship more units, gross profit grows faster than the cost of running them. That is what the FY2024 and FY2025 results showed, and what FY2026 did not.",
    ],
  },
  growth: {
    paragraphs: [
      "Across the fiscal years in the dataset, revenue compounded at 32.4% a year, from $445.7M in FY2022 to $1.98B in FY2026. That figure spans both organic wins and a change in the revenue base, so it should not be read as a like-for-like growth rate.",
      "The latest quarter grew 5.7% year over year to $480.5M. That is the cleanest available read on the underlying business, and it is far below the headline. The consensus expects $2.20B of revenue this fiscal year and $2.54B next, with $510.4M and $529.6M in the next two quarters, which implies a return to mid-single-digit or better growth rather than another step change.",
      "Demand drivers are replenishment of munitions stocks, allied governments buying the same systems, and new programme wins in space and directed energy. The brake is procurement timing: a large order that slips a quarter can turn a growth year into a flat one, and a charge on a single programme can wipe out the profit from several others.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a business that was modestly profitable and then absorbed a very large charge. Operating income was -$9.9M in FY2022, -$178.7M in FY2023, $71.8M in FY2024, $40.8M in FY2025 and -$311.0M in FY2026. Revenue rose every year over that period, from $445.7M to $1.98B.",
      "The quarterly pattern identifies where the damage sits. Q1 FY2026 reported a -15.2% operating margin, Q2 -6.4%, Q3 -65.8%, Q4 +8.9%, then Q1 FY2027 -2.3%. A single quarter at -65.8% with a $243.8M net loss is large enough to define the full year, and the quarters on either side were close to break-even or better.",
      "That shape matters for interpretation. A structural margin problem would show up in every quarter; a charge shows up in one. Return on equity was -4.7% and return on invested capital -4.5%, both consistent with a one-year hit rather than a permanently loss-making business.",
    ],
  },
  cash: {
    paragraphs: [
      "The cash-flow statement looks very different from the income statement: -$25.0M of free cash flow, a -1.2% margin. That is a much smaller outflow than the $311.0M operating loss implies, which is the clearest evidence that a large part of the loss was non-cash. Depreciation, amortisation and impairment reduce accounting profit without taking cash out of the bank.",
      "The annual history is consistently modest: -$31.9M in FY2022, -$3.5M in FY2023, -$7.7M in FY2024, -$20.9M in FY2025 and -$140.9M in FY2026. The FY2026 figure is the outlier and matches the year of the charge and the revenue step-up, when working capital would also have grown.",
      "Net debt is $140.7M. Against a $5.63B market value and a business generating close to break-even cash flow, that is manageable. It does mean the company does not have the large net cash cushion that Kratos or Rocket Lab carries into a downturn.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E of -21.9x is not usable because earnings are negative. EV/EBITDA of 47.4x is more informative: it is positive, which means EBITDA is positive even though net income is not. The gap between the two is depreciation and amortisation, and it tells you the asset base is large relative to current profit.",
      "At 2.9x EV/sales and 47.4x EV/EBITDA, AeroVironment sits between the hardware defence names and the growth space names. Kratos trades at 3.2x EV/sales and 62.5x EV/EBITDA; Rocket Lab at 38.2x EV/sales with negative earnings; Planet Labs at 9.8x EV/sales. AeroVironment is not obviously expensive on sales and not obviously cheap on EBITDA.",
      "The valuation question is which year's earnings the multiple should be applied to. On trailing numbers the company loses money; on consensus it earns $3.26 this year and $4.41 next. The share price is closer to the second view, and the 65.6% decline over the past year is the market re-rating the first one.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage runs to twenty-three analysts, with a mean target of $212.20 and a range of $148.57 to $315.00. The mean is nearly double the $112.76 share price, which is a large gap even for a stock that has fallen sharply.",
      "The forecasts assume $2.20B of revenue and $3.26 of EPS this fiscal year, then $2.54B and $4.41 next year. Those forecasts assume the FY2026 charge does not repeat and that the enlarged revenue base carries a normal margin.",
      "The contributor count is healthy, so the average is not the product of two or three models. The wide range still reflects real uncertainty about programme timing and about how much of the FY2026 cost base is permanent.",
    ],
  },
  risks: {
    intro:
      "AeroVironment's risks sit where defence hardware usually finds them: programme concentration, contract pricing and the difficulty of integrating a much larger business without losing the margin discipline of the smaller one.",
    items: [
      {
        title: "One-off charges becoming recurring",
        severity: "High",
        detail:
          "The FY2026 loss was concentrated in a single quarter. If similar charges appear again, the 'one-off' label stops applying.",
        watch:
          "Quarterly operating margin, impairment disclosure and changes in contract estimates.",
      },
      {
        title: "Integration of a larger business",
        severity: "High",
        detail:
          "Revenue more than doubled in a year. Acquired units bring their own cost structures, customers and cultures.",
        watch:
          "Segment margins, headcount and the pace of cost savings.",
      },
      {
        title: "Programme concentration",
        severity: "Medium",
        detail:
          "A handful of weapons programmes and government customers generate most of the revenue.",
        watch:
          "Backlog, award announcements and the largest programmes' share of sales.",
      },
      {
        title: "Procurement timing",
        severity: "Medium",
        detail:
          "Orders can slip between quarters or fiscal years, and the latest quarter grew only 5.7%.",
        watch:
          "Book-to-bill, funded backlog and quarterly revenue against the prior year.",
      },
      {
        title: "Export and regulatory approval",
        severity: "Medium",
        detail:
          "Foreign sales of weapons require government approval, which can delay or block revenue that has already been booked.",
        watch:
          "Foreign military sales approvals and the international share of revenue.",
      },
    ],
    watchlist: [
      {
        title: "Quarterly operating margin",
        detail:
          "Four consecutive quarters without a large negative print would show the charge was genuinely one-off.",
      },
      {
        title: "Gross margin",
        detail:
          "At 26.5%, there is little room for a mix shift toward lower-margin engineering work.",
      },
      {
        title: "Backlog",
        detail:
          "Booked orders show whether the larger revenue base has demand behind it.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "AeroVironment has a credible position in the fastest-growing part of defence procurement and a revenue base that has more than doubled. It also has a -12.6% operating margin, a -$4.01 loss per share and a share price that has fallen 65.6% in a year.",
      "The distinction to hold on to is the difference between an accounting loss and a cash loss. Free cash flow was only -$25.0M against a $311.0M operating loss, because most of the damage was non-cash. That does not make the year good, but it changes what the company needs to fix.",
      "The open questions are whether the charge repeats, whether the acquired revenue carries a normal margin, and whether 5.7% underlying growth is the real trend behind the 84.4% headline.",
    ],
    questions: [
      "What exactly caused the Q3 FY2026 operating margin of -65.8%?",
      "How much of the $2.00B revenue base is organic versus acquired?",
      "What gross margin does the acquired business earn on its own?",
      "Is the 5.7% latest-quarter growth the underlying rate?",
    ],
  },
};
