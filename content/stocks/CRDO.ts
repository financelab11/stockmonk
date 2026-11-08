import type { StockStory } from "./types";

export const CRDO: StockStory = {
  ticker: "CRDO",
  kicker: "Semiconductors · AI connectivity",
  title: "Credo sells the copper that keeps AI racks talking",
  dek: "Revenue grew 165% on active electrical cables and signal-retiming chips. The question is whether Credo owns a socket inside the rack or is riding a single product cycle.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $1.59B, up 165.1%, with a 31.7% operating margin.",
    "Two years ago the business lost money at $193.0M of revenue; the operating leverage has been extreme in both directions.",
    "Free cash flow of $438.6M and $1.30B of net cash mean the growth has been self-funded.",
    "The latest quarter's operating margin fell to 25.2% from 35.7%, even as revenue rose.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1807794/000162828026043303/crdo-20260502.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001807794&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Credo designs the parts that carry high-speed signals into, out of and across AI servers. The catalogue is narrow and technical: active electrical cables, retimer and digital signal processor chips, SerDes chiplets and licensed SerDes intellectual property. Customers are hyperscalers, network equipment vendors and the companies that assemble racks for them.",
      "The business has been transformed by the AI build-out. In FY2022 Credo booked $106.5M of revenue and lost $22.0M at the operating line. In FY2026 it booked $1.34B and earned $445.0M of operating income. Trailing revenue is $1.59B, up 165.1%, and free cash flow was $438.6M.",
      "The shares tell a different story from the income statement. At $120.51 the market capitalisation is $22.23B, or 60.2x trailing earnings and 38.6x EV/EBITDA. The stock is down 25.9% over the past year after gaining 934.4% over five, and sits near the bottom of a $86.48 to $308.67 range. Something in the estimate set changed.",
    ],
    quote:
      "Connectivity is priced per lane of bandwidth. Every time the industry doubles the speed of a lane, the part that cleans up the signal has to be redesigned, and the price of the old design falls away.",
  },
  whatItDoes: {
    paragraphs: [
      "The core product is a cable that carries an electrical signal further than copper normally allows. Inside a rack, copper is cheaper and uses less power than optics, but at high speeds the signal degrades over distance. Credo puts a small chip at each end of the cable to retime and reshape the signal, which extends copper's useful reach by a generation or two. The same signal-processing technology is sold as standalone chips and as building blocks that other companies license.",
      "That means Credo sits on a trade-off its customers make every generation: optical links cost more and burn more power, copper links are cheaper but run out of reach. As racks get denser and accelerators get faster, the crossover point moves, and the amount of signal conditioning needed at each end rises. The company employs 2,022 people and reports a single consolidated revenue line, so the mix between cables, chips and licences is not visible in the financials.",
    ],
    bullets: [
      {
        title: "Active electrical cables",
        detail:
          "Copper cables with retiming chips at both ends. The largest product line and the one most exposed to rack architecture.",
      },
      {
        title: "Integrated circuits",
        detail:
          "Retimers, DSPs and SerDes chiplets sold to equipment makers who want the signal conditioning without the cable.",
      },
      {
        title: "IP licensing",
        detail:
          "SerDes designs licensed to other semiconductor companies. Small revenue, high margin, and a signal of technical standing.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Credo sells physical product, priced per cable or per chip. Gross margin was 67.1%, which is high for a hardware company and reflects the fact that the customer is buying a working link rather than a commodity connector. The licence revenue is smaller but carries almost no cost of goods, so it lifts the blended margin.",
      "The cost structure is fabless. Wafers come from foundries, assembly and test are outsourced, and the company's own spending goes into design, applications engineering and customer qualification. That is why the operating leverage has been so violent. FY2024 revenue of $193.0M produced a $37.1M operating loss; FY2026 revenue of $1.34B produced $445.0M of operating income. The design work was largely paid for before the volume arrived.",
      "The mechanism cuts both ways, and the latest quarter showed it. Revenue rose to $479.0M in Q1 FY27 from $437.0M in Q4 FY26, but the operating margin fell to 25.2% from 35.7%. A richer mix of lower-margin product, ramp costs or price concessions can undo a lot of operating leverage when the base is already large.",
    ],
  },
  growth: {
    paragraphs: [
      "The growth engine is the speed transition. Each generation of accelerator pushes the per-lane data rate higher, which shortens the distance copper can carry a clean signal and increases how much retiming is needed per link. Credo also benefits when a customer adds more accelerators to a rack, because the number of links rises with the square of the node count rather than linearly.",
      "Revenue compounded at 70.8% a year across the fiscal years in the data, and the latest quarter grew 114.7%. The attributed consensus expects $2.50B of revenue and $6.31 of EPS this fiscal year, then $3.88B and $9.71 next year. Those are third-party forecasts, and the shape matters more than the totals: with $479.0M booked in Q1 and $531.9M expected next quarter, most of the year's growth has to arrive in the second half.",
      "The obvious way this slows is a pause in cluster construction. A less obvious way is a change in rack design that shifts links from copper to optics, or an accelerator vendor building the retiming function into its own package. Either would reduce the content per link that Credo currently captures.",
    ],
    bullets: [
      {
        title: "Speed transitions",
        detail:
          "Faster lanes shorten copper's reach, which raises the value of the chip at each end of the cable.",
      },
      {
        title: "Rack density",
        detail:
          "More accelerators per rack means more links per rack. Link count grows faster than node count.",
      },
      {
        title: "Customer addition",
        detail:
          "Each new hyperscaler or equipment vendor that qualifies the product adds a step-change in volume.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The margin history is a compressed version of a semiconductor cycle. Operating margin went from deeply negative in FY2022 through FY2024, to 8.5% in FY2025, to roughly a third of revenue in FY2026. Return on invested capital reached 72.9% and return on equity 20.0% on trailing figures, which is what a fabless model with a net cash balance sheet looks like when volume arrives.",
      "The quarterly sequence is less flattering than the annual one. Operating margin climbed from 19.9% in Q4 FY25 to 36.8% in Q3 FY26, then slipped to 35.7% and 25.2% in the next two quarters. Diluted EPS peaked at $0.89 in Q4 FY26 and fell to $0.67 in Q1 FY27 on higher revenue. A reader should treat the FY2026 margin as evidence of what the model can do at volume, not as a floor.",
    ],
  },
  cash: {
    paragraphs: [
      "Credo generated $438.6M of free cash flow over the trailing period, a 27.6% margin, and holds $1.30B of net cash. That is unusual for a company growing this fast, and it is the strongest part of the financial picture: the expansion was funded by customers rather than by shareholders.",
      "The annual cash history shows how recent that is. Free cash flow was negative $48.4M, negative $46.3M and positive $17.1M in FY2022 through FY2024, then $407.0M in FY2026. The swing came from operating profit, not from financial engineering. The main uses of cash now are inventory and supply commitments to support ramps, which is where a fast-growing hardware company normally gets caught when demand turns.",
      "At 50.7x free cash flow the shares are not priced as a cash-generating business yet. The 2.0% free cash flow yield is the number to hold on to when reading the growth sections: the market is paying for future cash flow, and the current $438.6M is the base it is growing from.",
    ],
  },
  valuation: {
    paragraphs: [
      "Three multiples matter here and they disagree with each other. Trailing earnings of $2.82 per share give a P/E of 60.2x. EV/EBITDA is 38.6x. EV/Sales is 13.2x. The first two depend on a margin that just fell by ten points quarter on quarter; the third does not, which is why it is the more stable way to compare Credo with other connectivity suppliers.",
      "What the price assumes is that $2.50B of revenue this year is a step on the way to $3.88B next year, and that margins recover toward the FY2026 level as the new products scale. If revenue growth decelerates to 20% while the sales multiple stays where it is, the arithmetic stops working. If margins stay at 25%, the earnings-based multiples are roughly a third higher than they look.",
      "The peer set is instructive rather than conclusive. Astera Labs grew 115.2% with a 30.6% operating margin and no trailing multiple available; Celestica grows 61.6% at an 8.3% margin and trades at 13.6x EV/EBITDA. Credo's 38.6x sits between a high-margin chip designer and a low-margin assembler, which is roughly where its business model sits too.",
    ],
  },
  analysts: {
    paragraphs: [
      "Nineteen analysts contribute to the attributed consensus, with a mean target of $284.05 and a range of $235.00 to $315.00. The mean is more than double the last close of $120.51. That gap is itself information: the published estimates describe a company whose margins recover, while the share price reflects a market that has already marked the stock down 25.9% over a year.",
      "The estimate path is $531.9M of revenue and $1.28 of EPS next quarter, $2.50B and $6.31 for the fiscal year, and $3.88B and $9.71 for the next. Read the fiscal-year EPS against the $0.67 already reported: the remaining three quarters have to average close to three times the first quarter to hit the number. Third-party consensus is a description of what has to happen, not evidence that it will.",
    ],
  },
  risks: {
    intro:
      "Credo's balance sheet is strong and its margins are real. The risks are about concentration, architecture and the price being paid for both.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "Hyperscale buyers place very large orders and can move a generation of business to another supplier between programmes. A single design loss is a revenue event, not a share shift.",
        watch:
          "Customer concentration disclosures and the revenue split between the largest buyers.",
      },
      {
        title: "Copper to optics substitution",
        severity: "High",
        detail:
          "If optical links get cheap and efficient enough to replace copper inside the rack, the retiming content per link falls. Credo sells into the copper side of that trade-off.",
        watch:
          "Rack architecture disclosures from accelerator vendors and the optical content per rack.",
      },
      {
        title: "Margin on the next ramp",
        severity: "Medium",
        detail:
          "Operating margin fell from 35.7% to 25.2% in one quarter while revenue grew. Mix and pricing can compress the margin faster than volume lifts it.",
        watch:
          "Gross margin guidance and the split between cable and chip revenue.",
      },
      {
        title: "Competition from larger suppliers",
        severity: "Medium",
        detail:
          "Broadline connectivity and semiconductor vendors can bundle retimers with switching silicon, and accelerator designers can absorb the function into their own package.",
        watch:
          "Design wins at new customers and whether incumbents bundle the function for free.",
      },
      {
        title: "Estimate concentration",
        severity: "Medium",
        detail:
          "The consensus needs a second-half ramp that is roughly 40% above the first-quarter revenue run rate. A one-quarter slip would break the annual number.",
        watch:
          "Bookings and the revenue implied by the next two quarterly estimates.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin by quarter",
        detail:
          "The clearest test of whether the FY2026 margin was a plateau or a peak.",
      },
      {
        title: "Revenue per rack generation",
        detail:
          "Content growth is the difference between a component supplier and a platform supplier.",
      },
      {
        title: "Customer count",
        detail:
          "A broader customer base would make the concentration risk smaller without changing the growth rate.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Credo is a fabless connectivity supplier that turned a $193.0M revenue base into $1.59B in two years, funded the expansion internally, and now holds $1.30B of net cash. The gross margin of 67.1% says the product is not a commodity. The 10-point fall in operating margin in the latest quarter says the pricing and mix are not stable either.",
      "The educational point is the difference between a product cycle and a socket. A product cycle produces spectacular growth while the architecture favours the product, then hands the value to whoever wins the next generation. A socket produces durable content per system. The financial statements cannot tell you which one Credo has; the design-win disclosures and the margin trend can.",
      "What is not known is how much of the $438.6M of free cash flow is repeatable, how concentrated the customer base really is, and whether the second-half ramp in the consensus reflects orders already placed or expectations. Those three answers decide whether 60.2x trailing earnings is expensive or merely early.",
    ],
    questions: [
      "How many customers account for most of the revenue, and how long are their qualification cycles?",
      "Does the next rack generation increase or decrease the dollar content of copper connectivity?",
      "Why did operating margin fall ten points in a quarter of 10% revenue growth?",
      "How much of the FY2027 consensus depends on customers that have already placed orders?",
    ],
  },
};
