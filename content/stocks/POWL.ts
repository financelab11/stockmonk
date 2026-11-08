import type { StockStory } from "./types";

export const POWL: StockStory = {
  ticker: "POWL",
  kicker: "Electrical equipment · Heavy industry",
  title: "Powell turned a 0.2% margin into 19.7% and now has to grow again",
  dek: "The switchgear maker earned almost nothing in FY2021 and now keeps a fifth of revenue before interest and tax. Volume growth has slowed to single digits while the multiple has not.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $1.16B, up 7.0%, with operating margin at 19.7% and 20.6% in the latest quarter.",
    "Operating income went from $1.0M on $470.6M of revenue in FY2021 to $217.9M on $1.10B in FY2025.",
    "Free cash flow of $244.0M exceeded net income, a rare pattern that reflects customer prepayments on projects.",
    "The shares trade at 25.4x trailing earnings for a business growing high single digits.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/80420/000008042025000152/powl-20250930.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000080420&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Powell Industries builds the electrical equipment that sits between a utility connection and a heavy industrial process: integrated power control rooms, electrical houses, medium-voltage circuit breakers, motor control centres, bus duct and switchgear rated from 480 volts to 38,000 volts. It also services what it sells, with spare parts, field inspection, retrofits and replacement breakers for equipment that runs for decades.",
      "The customer list is heavy industry rather than technology. Oil and gas refining, offshore and onshore production, petrochemicals, LNG terminals, pipelines, mining and metals, light rail traction power, pulp and paper, and electric utilities. Data centres are an adjacent market that the company can serve because a large campus needs the same switchgear, but they are not the historical base.",
      "The margin history is the reason to read this report. In FY2021 Powell earned $1.0M of operating income on $470.6M of revenue, a margin of 0.2%. In FY2025 it earned $217.9M on $1.10B, a margin of about 20%. Trailing revenue is $1.16B, up 7.0%. A business that quadrupled its margin in four years is a different business from the one that earned nothing.",
    ],
    quote:
      "Switchgear is quoted project by project, and the price is set when the order is taken. A manufacturer with a full backlog can price the next order on the work it already has.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is custom-engineered rather than catalogue. A customer with a refinery, a mine or a gas processing plant specifies the voltage, the fault rating, the enclosure, the climate and the interconnection, and Powell designs and builds to that specification. Each order is a small engineering project with a bill of materials, a schedule and a price agreed in advance.",
      "That makes the business a backlog business. Orders are taken months before revenue is recognised, and the margin on each order is largely fixed at the point of sale. When demand is strong and the backlog is long, the company can be selective and price for margin. When demand is weak, it bids for volume and the margin falls. The FY2021 result shows what the weak version looks like.",
      "The installed base provides a second, steadier revenue stream. Equipment sold twenty years ago still needs breakers, parts and field service, and the original manufacturer is usually the only practical source. Powell employs 1,935 people and operates in the United States, Canada, the Middle East, Africa, Europe, Mexico, and Central and South America.",
    ],
    bullets: [
      {
        title: "Integrated power systems",
        detail:
          "Power control rooms and electrical houses built to specification. The largest and most engineering-intensive product line.",
      },
      {
        title: "Switchgear and control",
        detail:
          "Medium-voltage breakers, motor control centres, bus duct and arc-resistant distribution equipment.",
      },
      {
        title: "Service and retrofit",
        detail:
          "Spare parts, field inspection, retrofits and replacement breakers for equipment already in service.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is recognised on projects, typically over time as the equipment is built, with the price fixed at order. Gross margin of 30.1% is the spread between the quoted price and the cost of steel, copper, components, engineering and labour. Because the price is fixed, the way to improve margin is to buy better, build more efficiently, or quote a higher price on the next order.",
      "All three happened between FY2021 and FY2025. Revenue more than doubled, which spread fixed factory and engineering overhead across more work. Input costs were recovered through pricing as backlogs lengthened. The result was an operating margin that went from 0.2% to about 20% without any change in the product.",
      "That is also why the margin is at risk. A 30.1% gross margin on a fixed-price contract is a buffer against cost inflation, not an immunity to it. If steel, copper or skilled labour costs rise faster than the price on orders already accepted, the buffer absorbs the difference. And if the backlog shortens, the pricing power that produced the margin goes with it.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 16.3% a year across the fiscal years in the data: $470.6M, $532.6M, $699.3M, $1.01B, $1.10B, then $1.16B trailing. The latest quarter grew 8.9%. The shape is a step up in FY2023 and FY2024 followed by a plateau, and the plateau is what the current numbers describe.",
      "The attributed consensus expects $1.19B of revenue and $5.37 of EPS this fiscal year, then $1.48B and $6.82 next year. Read the quarterly detail carefully: next quarter is estimated at $331.4M, the quarter after at $300.8M, which implies a sequential decline, and the following quarter estimate is the average of only three analysts. The annual figures imply growth resuming later in the year.",
      "The demand drivers are industrial capital spending, LNG and petrochemical construction, mining electrification, grid investment and, at the margin, data-centre campuses. The brakes are the same list in reverse: a fall in oil and gas investment, a delay in a large project, or a pause in data-centre construction would each remove orders from a backlog that is currently priced well.",
    ],
    bullets: [
      {
        title: "Backlog conversion",
        detail:
          "Revenue follows orders with a lag. The backlog, not the order intake, is what drives the next four quarters.",
      },
      {
        title: "Industrial capex",
        detail:
          "Refining, petrochemicals, LNG, mining and grid investment. Cyclical and sensitive to energy prices.",
      },
      {
        title: "Data-centre adjacent demand",
        detail:
          "A campus needs switchgear and power distribution. Real, but not yet proven to be a large share of revenue.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual series is one of the most dramatic margin expansions in this coverage group. Operating income of $1.0M, $7.2M, $62.5M, $178.8M and $217.9M across five fiscal years, on revenue that went from $470.6M to $1.10B. Net income followed from $631,000 to $180.7M.",
      "Return on equity is 26.4% and return on invested capital 100.5%. The second figure is high because the capital base is small relative to the profit: the company builds in existing plants and is paid partly in advance, so it does not need much invested capital to generate a dollar of operating income. That is a genuine structural advantage of the model and it is also why the return will fall if margins normalise.",
      "The quarterly operating margins have been remarkably stable at the new level: 21.1%, 21.0%, 21.2%, then 17.0%, 19.4% and 20.6%. The single dip to 17.0% in Q1 FY26 came on the lowest revenue of the six quarters, at $251.2M, which is consistent with fixed costs spreading over less work.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $244.0M over the trailing period, a 21.1% margin that exceeds the 16.5% net margin. That is unusual and it is structural: customers on large projects often pay in stages before the equipment ships, so the company collects cash ahead of recognising the revenue. In a growing backlog, that timing difference adds to reported cash flow.",
      "The annual history shows both sides. Free cash flow was negative $33.4M and negative $6.0M in FY2021 and FY2022, then $174.7M, $96.7M and $154.8M in the following three years. The early negative years were the low-margin period, when the business was consuming cash to operate. The later positive years reflect both higher profit and customer prepayments.",
      "The balance sheet holds $544.9M of net cash, about 2.3x EBITDA on the negative side, which is roughly 11% of the $4.85B market capitalisation. For a company with a cyclical order book, that is a meaningful cushion: it can fund a downturn in orders without cutting capacity or borrowing.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $133.12 the shares trade at 25.4x trailing earnings, 18.2x EV/EBITDA and 3.7x sales, with a price to free cash flow of 19.9x and a free cash flow yield of 5.0%. The gap between the earnings multiple and the cash flow multiple is the prepayment effect described above: cash flow is flattered by the backlog, so the P/FCF understates how expensive the shares are relative to sustainable earnings.",
      "The question the multiple asks is whether a 20% operating margin is the new normal for a project-based equipment maker. If it is, 25.4x earnings for a business with a $544.9M net cash balance and a 100.5% return on invested capital is not demanding. If the margin reverts toward the mid-teens as the backlog normalises, trailing earnings fall by a quarter and the multiple becomes 34x for a company growing at 7%.",
      "The peer group does not help much, because none of the optical or semiconductor companies in it share Powell's business model. The closest comparison is a capital-goods manufacturer with an order book, and those usually trade on mid-cycle earnings rather than peak ones. That is the framework a reader should apply here, not the AI infrastructure label.",
    ],
  },
  analysts: {
    paragraphs: [
      "Four analysts contribute to the attributed consensus, with a mean target of $267.50 and a range of $235.00 to $333.00. Against a last close of $133.12, the mean is roughly double. With four analysts, that figure is closer to a small group's working assumption than to a market-wide view, and the dispersion between $235 and $333 is 42% of the low end.",
      "The estimates are $331.4M of revenue and $1.56 of EPS next quarter, $300.8M and $1.27 the quarter after, $1.19B and $5.37 for the fiscal year, and $1.48B and $6.82 for the next. The quarterly pattern is worth flagging: the second estimate is below the first, so the consensus itself expects a sequential decline before the annual growth resumes. Third-party estimates of this kind are a description of a possible path, not a forecast with a track record.",
    ],
  },
  risks: {
    intro:
      "Powell's risks are cyclical, concentrated and priced. The balance sheet is strong; the order book and the margin are not permanent.",
    items: [
      {
        title: "Backlog cyclicality",
        severity: "High",
        detail:
          "Revenue follows orders with a lag, and orders follow industrial capital spending. A drop in oil, gas or petrochemical investment would hit the backlog before it hit revenue.",
        watch:
          "Backlog disclosures and the book-to-bill ratio each quarter.",
      },
      {
        title: "Margin normalisation",
        severity: "High",
        detail:
          "The operating margin went from 0.2% to about 20% in four years. Part of that is operating leverage and part is pricing power from a full backlog. Only the first persists in a downturn.",
        watch:
          "Gross margin on new orders and any commentary on pricing.",
      },
      {
        title: "Fixed-price contract exposure",
        severity: "Medium",
        detail:
          "Prices are agreed before the equipment is built. Steel, copper and labour inflation during the build come out of the margin.",
        watch:
          "Commodity cost commentary and the gross margin on projects in progress.",
      },
      {
        title: "Concentration in end markets",
        severity: "Medium",
        detail:
          "Oil and gas, petrochemicals and LNG are a large part of the customer base. Data centres are a smaller and less proven source of demand.",
        watch:
          "The end-market split of backlog and orders.",
      },
      {
        title: "Multiple versus growth",
        severity: "Medium",
        detail:
          "25.4x trailing earnings for 7.0% revenue growth leaves little room for an earnings miss, and the earnings are at a cyclical high.",
        watch:
          "The gap between trailing EPS and the consensus for next year.",
      },
    ],
    watchlist: [
      {
        title: "Book-to-bill",
        detail:
          "Orders divided by revenue. Below one for two quarters would signal the backlog is shrinking.",
      },
      {
        title: "Gross margin on new orders",
        detail:
          "The leading indicator of whether the 30.1% gross margin survives the next pricing cycle.",
      },
      {
        title: "Customer prepayments",
        detail:
          "They explain why free cash flow exceeds net income, and they reverse when the backlog stops growing.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Powell is a 1947-vintage Houston manufacturer of custom electrical equipment that has just enjoyed the best margin years in its history. Revenue is $1.16B, operating margin 19.7%, free cash flow $244.0M and net cash $544.9M. None of that is in dispute.",
      "The educational point is that a margin expansion of this size usually has more than one cause. Operating leverage from higher volume is real and repeatable. Pricing power from a full backlog is real and temporary. Separating the two is the whole analytical task, because the first supports a 25.4x multiple and the second does not.",
      "What is not known is how much of the backlog is priced at the current margin, how much of the demand is data-centre related rather than heavy industry, and whether the single-digit growth rate is a pause or a plateau. The AI build-out touches this business at the edges; it is not the reason the margin quadrupled.",
    ],
    questions: [
      "What share of the backlog is priced at today's margin rather than at the prior cycle's?",
      "How much of revenue comes from data-centre projects versus oil, gas and petrochemical work?",
      "Is the single-digit growth a pause between large projects or the start of a slower phase?",
      "What would a 15% operating margin do to trailing earnings and the multiple?",
    ],
  },
};
