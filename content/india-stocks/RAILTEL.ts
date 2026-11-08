import type { StockStory } from "@/content/stocks/types";

export const RAILTEL: StockStory = {
  ticker: "RAILTEL",
  kicker: "Infrastructure · Telecom and ICT projects",
  title: "RailTel owns the fibre and sells the same network two different ways",
  dek: "Telecom services rent out a fibre backbone built for railway signalling. Project work adds revenue at a much thinner margin. Trailing revenue is ₹22.3B at a 10.7% operating margin.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹22.25B, up 31.7%, with a 10.7% operating margin and a 7.3% net margin.",
    "Gross margin is only 15.6%, because project work passes through hardware and subcontractor costs.",
    "Free cash flow was ₹52 Cr, a 2.6% margin, and the balance sheet holds ₹3.49B of net cash.",
    "The shares trade at 36.5x earnings and 150.3x free cash flow at a ₹78.14B market capitalisation.",
    "Two analysts carry a mean target of ₹223.00, below the ₹243.46 close.",
  ],
  filingUrl: "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=RAILTEL",
  irUrl: "https://www.railtel.in",
  bigPicture: {
    paragraphs: [
      "RailTel is a government telecom and IT services company set up in 2000 to use the optical fibre that runs along railway tracks. That asset was built for signalling and train operations, and the business model is to sell spare capacity on it. The company reports two segments: telecom services, which lease bandwidth, collocation and managed data services to enterprises and government; and project work, which builds Wi-Fi, surveillance, broadband and IT systems for public clients.",
      "The distinction matters more than the headline revenue. Telecom services sell capacity that already exists, so each additional lease is close to pure margin. Project work buys hardware, hires subcontractors and waits for government payment, so it adds revenue at a thin spread. Trailing revenue of ₹22.25B, up 31.7%, with a 10.7% operating margin and a 7.3% net margin is the blended result of those two economics.",
      "At ₹243.46 the market capitalisation is ₹78.14B, or 36.5x earnings of ₹6.69 and 20.7x EV/EBITDA. The shares are 14% up a 52-week range of ₹220.06 to ₹391.00 and have fallen 29.4% over the past year. The balance sheet carries ₹3.49B of net cash, so the enterprise value is below the market capitalisation.",
    ],
    quote:
      "A fibre network is a fixed asset with almost no marginal cost. The question for RailTel is how much of its revenue comes from renting that asset and how much comes from reselling other people's hardware.",
  },
  whatItDoes: {
    paragraphs: [
      "Telecom services cover managed data, leased lines, internet leased lines, virtual private networks, national long distance voice carriage, data centres and tower, rack and space collocation. The customers are banks, NBFCs, ministries, educational institutions, corporates and defence-related agencies that need a private, reliable link between sites — a requirement that public internet cannot satisfy.",
      "Project work is the systems-integration arm: station Wi-Fi, hospital management information systems, BharatNet, the National Knowledge Network, video surveillance and railway signalling works. These are won through government tenders, executed over months and paid on milestone. RailWire, the retail broadband service, sits in between: it uses the same backbone but serves households through local cable operators and franchises.",
      "The company employs 595 people, which is a small headcount for ₹22B of revenue. That is a signature of a network business: the fibre does the work, and much of the project execution is subcontracted. The trade-off is that growth in project work adds revenue without adding much permanent capability.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 15.6% is the first thing to understand. For a telecom operator that number would be alarming; for RailTel it reflects the mix. Bandwidth leases carry a high gross margin because the fibre is already lit. Project contracts carry a low one because hardware, licences and subcontractor labour are bought in and billed at a small markup. When project revenue grows faster than telecom revenue, the blended gross margin falls even though nothing has gone wrong operationally.",
      "The cost structure below the gross line is light. Operating margin of 10.7% against gross margin of 15.6% means employee, administrative and network costs take less than five paise of each revenue rupee. The result is a 16.0% return on invested capital on a modest asset base, and interest cover of 60.2x — there is almost no debt to service.",
      "The leverage mechanism runs through utilisation. A data centre bay or a fibre pair earns nothing until it is leased, and once leased the incremental cost is small. That gives RailTel a genuine operating leverage story in telecom services and almost none in project work. The mix between the two segments is therefore the single most important driver of the consolidated margin.",
    ],
    bullets: [
      {
        title: "Telecom services",
        detail:
          "Recurring lease, collocation and managed-service fees on owned fibre and data centres. High incremental margin, contracted terms, low working capital.",
      },
      {
        title: "Project work",
        detail:
          "Tender-based system integration for government buyers. Low gross margin, milestone billing, receivables that build through execution.",
      },
      {
        title: "RailWire retail",
        detail:
          "Broadband sold through local operators on the same backbone. Adds subscribers and utilisation without new fibre.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "The reported annual series runs from ₹9.87B in FY2018 to ₹19.64B in FY2023, a 17.7% compound rate, and the most recent quarter in the dataset grew 39.6%. That quarter, Q2 FY2024, produced ₹5.99B at a 19.2% operating margin, one of the better margins in the quarterly table, which suggests the mix was favourable rather than merely larger.",
      "Third-party estimates point to ₹50.41B of revenue and ₹12.85 of EPS for the current fiscal year, then ₹58.99B and ₹14.70. Those numbers are more than double the trailing revenue of ₹22.25B and far above the 17.7% historical rate. They can only be reached if a large project pipeline converts quickly, and project revenue is exactly the kind that dilutes margin. Growth and margin are pulling in opposite directions here.",
      "The durable drivers are government digitisation, rural broadband, data-centre demand and the railway's own modernisation. The constraint is that almost every large opportunity is a tender from a public buyer, which sets both the price and the payment schedule.",
    ],
  },
  performance: {
    paragraphs: [
      "The long-run pattern is revenue growing faster than profit. Operating income moved from ₹2.74B in FY2018 to ₹3.80B in FY2023 while revenue nearly doubled, so the operating margin fell from roughly 28% to roughly 19% over five years. Net income was broadly flat at ₹1.58B in FY2018 and ₹1.89B in FY2023. The company got bigger without getting more profitable per rupee of sales.",
      "The quarterly record shows how much the margin moves with mix. Operating margin was 17.0%, 20.6%, 17.8%, 23.3%, 16.3%, 13.9%, 15.8% and 19.2% across the eight quarters in the table, a spread of nearly ten percentage points around a 17% average. That volatility is not operational distress; it is the signature of a business where a few large project milestones can land in one quarter. Return on equity is 15.1% and return on invested capital 16.0%, both respectable for an asset-backed network.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹52 Cr, a 2.6% margin, and the history is uneven: ₹96 Cr in FY2020, ₹2.58B in FY2021, ₹1.34B in FY2022 and ₹52 Cr in FY2023. The FY2021 spike coincided with a year of lower capital spending; the subsequent decline reflects money going back into fibre, data centres and project execution. A positive but thin number is the right way to read it.",
      "The balance sheet is the strong part of the story. Net cash of ₹3.49B and interest cover of 60.2x mean the company can fund network expansion without leaning on lenders, and it can absorb a slow government payment cycle without distress. The weakness is that the cash return to shareholders is small relative to the ₹78.14B market value: at 150.3x free cash flow, the market is paying for future utilisation of assets that are not yet earning.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 36.5x trailing earnings, 20.7x EV/EBITDA, 3.4x EV/sales and 150.3x free cash flow, with an FCF yield of 0.7%. The earnings multiple is mid-range for Indian infrastructure; the cash multiple is the outlier. A company that converts 2.6% of revenue into free cash flow has to grow that conversion rate, not just revenue, to justify the price.",
      "Among peers, Rail Vikas Nigam trades at 50.1x EV/EBITDA and 45.1x earnings, Titagarh at 27.7x and 49.8x, Jupiter Wagons at 24.9x and 53.8x, Ircon at 12.8x and 21.2x, and H.G. Infra at 6.7x and 12.2x. RailTel sits in the middle of that range with the strongest balance sheet in the group. The premium over Ircon and H.G. Infra is essentially a payment for net cash and for the recurring telecom revenue.",
    ],
  },
  analysts: {
    paragraphs: [
      "Two analysts contribute to the third-party consensus, with a mean target of ₹223.00 against a range of ₹206.00 to ₹240.00. The mean is below the latest close of ₹243.46, which is unusual and worth stating plainly: the small analyst group is not extrapolating the recent revenue growth into a higher valuation.",
      "Their estimates call for ₹50.41B of revenue and ₹12.85 of EPS this fiscal year, then ₹58.99B and ₹14.70. With two contributors, this is a thin sample. It is also inconsistent with the margin history, since revenue at that level would require a very large project book to be executed at a blended margin well above the trailing 10.7%. Third-party context, not a Stockmonk view.",
    ],
  },
  risks: {
    intro:
      "RailTel's risks come from its ownership structure and its mix: a public-sector buyer that sets prices, a project business that dilutes margin, and a network that needs constant renewal to stay relevant.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "Railways, ministries and public agencies are the dominant customers. Their budgets, tender calendars and payment cycles set the company's revenue and receivables.",
        watch:
          "Segment revenue split and the growth of receivables from government clients.",
      },
      {
        title: "Margin dilution from projects",
        severity: "High",
        detail:
          "Project work is bought in and resold at a thin spread. A project-led growth year can raise revenue while lowering the blended margin, as the FY2018 to FY2023 record shows.",
        watch:
          "Gross margin and the telecom-versus-project revenue mix each quarter.",
      },
      {
        title: "Technology substitution",
        severity: "Medium",
        detail:
          "Satellite broadband, private wireless networks and hyperscale cloud connectivity all compete for the enterprise links that RailTel leases today.",
        watch:
          "Telecom segment revenue growth and any decline in leased-line volumes.",
      },
      {
        title: "Capital spending and utilisation",
        severity: "Medium",
        detail:
          "Data centres and fibre extensions earn nothing until they are leased. Spending ahead of demand depresses returns before it lifts them.",
        watch:
          "Capital expenditure against telecom segment revenue and the free-cash-flow margin.",
      },
      {
        title: "Valuation against cash flow",
        severity: "Medium",
        detail:
          "At 150.3x free cash flow, the price assumes the cash conversion rate improves. A flat year would leave the multiple exposed.",
        watch:
          "Free cash flow and the FCF yield relative to the peer group.",
      },
    ],
    watchlist: [
      {
        title: "Segment mix",
        detail:
          "The share of revenue from telecom services versus project work drives the consolidated margin.",
      },
      {
        title: "Receivable days",
        detail:
          "Government project billing is the main reason cash conversion is thin.",
      },
      {
        title: "Data centre utilisation",
        detail:
          "New capacity only pays if it is leased; utilisation is the test of the capex programme.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "RailTel is an unusual Indian infrastructure company: it owns a national fibre network, carries almost no net debt, and earns a 16.0% return on invested capital. It is also a public-sector supplier whose largest customer can dictate price and payment terms, and whose fastest-growing revenue line carries the lowest margin.",
      "The trailing figures are ₹22.25B of revenue, a 10.7% operating margin, ₹52 Cr of free cash flow and ₹3.49B of net cash. The consensus revenue estimate of ₹50.41B for this year is so far above that base that it should be treated as a scenario rather than a forecast.",
      "The question a reader has to answer is what the fibre is worth per rupee of revenue. If telecom services grow and project work stays a minority, the 10.7% margin can rise. If the reverse happens, revenue grows and the multiple does not.",
    ],
    questions: [
      "What share of the ₹22.25B trailing revenue came from telecom services rather than project work?",
      "How much of the planned data-centre capacity is already leased?",
      "Why is free cash flow only 2.6% of revenue when the balance sheet carries ₹3.49B of net cash?",
      "What would the blended margin be if project revenue doubled?",
    ],
  },
};
