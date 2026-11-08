import type { StockStory } from "./types";

export const MTSI: StockStory = {
  ticker: "MTSI",
  kicker: "Semiconductors · Analog RF and photonics",
  title: "MACOM sells the analog parts that make optical links and radar work",
  dek: "MACOM's chips sit inside someone else's equipment, so revenue follows network builds and defence programmes rather than consumer demand. Its net margin is higher than its operating margin, and that is the first thing worth explaining.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $1.16B, up 28.4%, with the operating margin rising from 14.8% in Q2 FY25 to 22.5% in Q3 FY26.",
    "Gross margin is 56.5%, which leaves a wide spread over the 18.1% trailing operating margin.",
    "Net income has been far more volatile than operating income: $440.0M in FY2022 and a $54.2M loss in FY2025, both on modest operating results.",
    "Net cash of $291.9M and free cash flow of $204.1M fund the business, but the 57.5x EV/EBITDA multiple is the highest in the peer table.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1493594/000149359425000054/mtsi-20251003.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001493594&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "MACOM designs analog and mixed-signal parts that operate at radio, microwave, millimetre-wave and optical frequencies. Its components go into optical transceivers, satellite payloads, wired and wireless network equipment, and military and civil radar. The company employs 1,050 people, which is small for a $16.11B market value, and that ratio tells you what kind of business it is: a portfolio of specialised designs sold into equipment that other companies build.",
      "The important structural fact is that MACOM does not sell to consumers or to a broad distribution market. It sells to system houses, and it is designed in at the component level. A radar module or an optical transceiver is qualified once, and the part stays for the life of the platform. That makes revenue durable per programme but lumpy across programmes, and it means the company's results track a handful of end markets with very different cycles.",
      "Trailing revenue was $1.16B, up 28.4%, and the operating margin has climbed steadily through the quarterly series from 14.8% in Q2 FY25 to 22.5% in Q3 FY26. At $210.98 the shares sit about 22% of the way up a 52-week range of $150.80 to $418.90, on a $16.11B market capitalisation, after a 26.4% twelve-month return and a 183.6% five-year return.",
    ],
    quote:
      "The customer does not buy a MACOM part; it buys a qualified design that happens to include one. That is why the gross margin holds and why the revenue is lumpy.",
  },
  whatItDoes: {
    paragraphs: [
      "The product families divide by frequency and by function. At the optical end, MACOM makes the analog front-end parts that drive and receive a laser signal, which puts it inside the transceivers that connect data-centre and telecom networks. At the radio end, it makes amplifiers, switches and control components for wireless infrastructure, satellite communications and radar. The common thread is that each part has to meet a specification measured in gigahertz, and the number of companies that can do that at volume is small.",
      "The end markets have different cycles and that is the point of the portfolio. Optical transceivers move with data-centre and telecom capital spending. Satellite and defence programmes move with government budgets and procurement schedules, which are slow and predictable in a way that commercial demand is not. Wireless infrastructure moves with carriers' build plans. Owning all three smooths the total, though it does not eliminate the swings.",
      "Manufacturing is mixed. MACOM uses its own facilities for some processes and external foundries for others, which gives it control over the specialised steps without carrying a full leading-edge fab. That is the standard model for analog and RF specialists, and it explains why a company of 1,050 people can serve a global customer base.",
    ],
    bullets: [
      {
        title: "Optical",
        detail:
          "Analog front-end parts inside transceivers for data-centre and telecom links. The fastest-moving end market.",
      },
      {
        title: "RF and microwave",
        detail:
          "Amplifiers, switches and control components for wireless infrastructure, satellite and radar.",
      },
      {
        title: "Defence and space",
        detail:
          "Programmes with long qualification cycles and budgets set years in advance. Durable but slow to win.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 56.5% reflects the value of a qualified RF design. These are not commodity parts, and the customer's alternative is a redesign and requalification, so pricing holds as long as the specification is met. The cost of goods includes the wafer, the package and the test time, and test is a meaningful share in RF because every part has to be measured at frequency.",
      "Operating margin of 18.1% on a trailing basis sits well below the gross margin, and the gap has been narrowing. In Q2 FY25 the operating margin was 14.8% on $235.9M of revenue; in Q3 FY26 it was 22.5% on $342.2M. That is operating leverage appearing as the revenue base grows, and it is the most encouraging trend in the accounts.",
      "The net line needs a separate explanation. Trailing net margin is 20.7%, which is higher than the operating margin of 18.1%. That is unusual and it is not the first time: FY2022 showed $440.0M of net income against $132.7M of operating income, and FY2025 showed a $54.2M loss against $129.7M of operating income. Non-operating items have moved the net line by more than the operating business did in both directions, so operating income and free cash flow are the numbers to rely on.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 12.8% a year across the five fiscal years shown, from $606.9M to $967.3M, with no severe down year: $675.2M, $648.4M and $729.6M in between. That is a flatter path than most semiconductor companies experienced over the same period, which reflects the defence and satellite base.",
      "The recent acceleration is sharper. Quarterly revenue went from $235.9M in Q2 FY25 to $252.1M, $261.2M, $271.6M, $289.0M and $342.2M. The latest quarter grew 35.8% year over year, and the operating margin expanded at the same time, which is what a utilisation recovery looks like.",
      "The third-party estimates assume a much larger step. Next quarter is forecast at $455.2M of revenue, and the current fiscal year at $1.94B against a trailing $1.16B. A jump of that size in one year is not what a cyclical rebound usually produces, so the reader should establish what the estimate assumes before treating it as a base case.",
    ],
    bullets: [
      {
        title: "Optical demand",
        detail:
          "Data-centre interconnect growth pulls through analog front-end parts per transceiver.",
      },
      {
        title: "Defence and satellite programmes",
        detail:
          "Long cycles that add revenue when a platform moves into production, independent of commercial demand.",
      },
      {
        title: "Operating leverage",
        detail:
          "The margin has risen as revenue grew, which is the mechanism that turns a modest sales increase into a larger profit increase.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The operating record is one of gradual improvement interrupted by a bad year. Operating income was $81.0M, $132.7M, $107.4M, $73.7M and $129.7M across the five years, on revenue that grew from $606.9M to $967.3M. FY2024 was the trough, with $73.7M of operating income on $729.6M of revenue, and the quarterly series shows the recovery since.",
      "Return on equity is 15.6% and return on invested capital 13.3%. Both are reasonable for an analog business with manufacturing assets, and neither suggests the company is under-earning on the capital it employs. A 13.3% return on invested capital sits above the cost of capital for most semiconductor companies, but not by a wide margin.",
      "The quarterly margin path is the part that matters for the forward estimates: 14.8%, 14.9%, 15.2%, 15.9%, 17.6% and 22.5%. The last step is the largest, and it came with the largest revenue increase. If that margin holds, the earnings base is materially higher than the trailing figures show; if it was a one-quarter mix effect, it is not.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $204.1M on a trailing basis, a 17.5% margin, and the annual record is consistently positive: $130.5M, $150.5M, $142.2M, $140.2M and $192.8M. For a company with manufacturing assets, that consistency is a good sign. Cash generation did not collapse in the weak years.",
      "Net cash of $291.9M, or -1.1x EBITDA, means the balance sheet is not a constraint. The company can fund development and capacity work without external capital, which matters in RF where a new process or package can take years to qualify.",
      "The free-cash-flow multiple is 79.0x, for a 1.3% yield. That is a demanding price for the cash the business currently produces, and it only makes sense if the revenue and margin trajectory of the last two quarters continues. The cash flow itself is healthy; the valuation applied to it is not conservative.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $210.98 the shares trade at 66.9x trailing earnings, 57.5x EV/EBITDA, 13.6x sales and 79.0x free cash flow, a 1.3% free-cash-flow yield. The EBITDA multiple is the highest in the peer table shown, where the range runs from 23.9x to 31.8x for the other companies. That premium is being paid for growth and for the analog franchise.",
      "A premium of that size needs the forward estimates to be right. Consensus EPS of $9.80 for this fiscal year against trailing EPS of $3.14 is the number the multiple is really being applied to. If the estimate is achieved, the trailing multiple is irrelevant; if it is not, the stock is priced for a business that does not exist yet.",
      "Stockmonk does not publish a target price. The peer comparison is useful mainly as a reminder of how far above the group MTSI trades on EBITDA, and therefore how much of the growth is already in the price.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the consensus, with a mean target of $327.00 and a range of $220.00 to $450.00. The low end is close to the $210.98 close and the high end is more than double it, which is a wide spread for a company whose quarterly results have been moving in one direction.",
      "The near-term estimates are for $455.2M of revenue and $2.25 of EPS next quarter, then $472.1M and $2.36. After $342.2M and $1.28 in Q3 FY26, that is a large step in both lines, and it is the assumption on which the full-year figure of $1.94B rests.",
      "Next year the consensus is $2.28B of revenue and $11.59 of EPS. Those are third-party forecasts. The gap between $1.16B trailing revenue and $1.94B for the current year is the single most important number to interrogate, because it is not a normal cyclical increment.",
    ],
  },
  risks: {
    intro:
      "MACOM's risks are about programme timing and about the price being paid for a growth rate that has only two quarters of evidence behind it.",
    items: [
      {
        title: "Estimate gap",
        severity: "High",
        detail:
          "The current-year consensus of $1.94B is far above the $1.16B trailing base. If the step does not arrive, the earnings multiple stays at 66.9x on a much smaller profit.",
        watch:
          "Quarterly revenue against the $455.2M next-quarter estimate.",
      },
      {
        title: "End-market concentration",
        severity: "High",
        detail:
          "Optical, satellite and defence each carry a large share of revenue, and each has its own pause mechanism: a capex cut, a launch delay or a budget cycle.",
        watch:
          "Revenue by end market and commentary on the largest programme.",
      },
      {
        title: "Non-operating volatility",
        severity: "Medium",
        detail:
          "Net income was $440.0M in FY2022 and -$54.2M in FY2025, both wildly different from operating income. Valuations built on the earnings multiple inherit that noise.",
        watch:
          "The gap between operating and net income each quarter.",
      },
      {
        title: "Qualification cycles",
        severity: "Medium",
        detail:
          "A design win takes years to become revenue, and a lost qualification is equally slow to replace. Revenue can stall while the design pipeline looks healthy.",
        watch:
          "Design-win commentary and the cadence of new programme announcements.",
      },
      {
        title: "Manufacturing mix",
        severity: "Medium",
        detail:
          "A combination of internal processes and external foundries gives flexibility but exposes the company to capacity and pricing at its partners.",
        watch:
          "Gross margin and any commentary on supply agreements.",
      },
      {
        title: "Premium valuation",
        severity: "Medium",
        detail:
          "At 57.5x EV/EBITDA, MTSI trades well above the peer range. A growth disappointment would compress the multiple and the earnings estimate together.",
        watch:
          "The EV/EBITDA multiple relative to the peer group and the direction of estimates.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The move from 14.8% to 22.5% is the core of the earnings story; whether it holds decides the year.",
      },
      {
        title: "Optical revenue",
        detail:
          "The fastest-moving end market and the one most likely to surprise in either direction.",
      },
      {
        title: "Net income versus operating income",
        detail:
          "The two have diverged by hundreds of millions in both directions.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "MACOM is an analog and RF specialist with a 56.5% gross margin, a rising operating margin and a customer base of equipment builders in optical, satellite, wireless and defence. The operating trend over the last six quarters is genuinely good.",
      "Not in the dataset: the assumptions behind the $1.94B revenue estimate, the concentration of revenue in the largest programmes, and whether 22.5% is a new operating level or the top of a cycle.",
      "A premium multiple turns a good business into a demanding investment. At 57.5x EV/EBITDA the shares already assume the estimates are met, so the reader's task is less about the quality of the franchise than about what the price implies if the growth pauses.",
    ],
    questions: [
      "What does the $1.94B revenue estimate assume that the trailing $1.16B does not contain?",
      "How much of revenue comes from the largest end market?",
      "Is the 22.5% operating margin a mix effect or a utilisation effect?",
      "Why has net income diverged so far from operating income in both directions?",
    ],
  },
};
