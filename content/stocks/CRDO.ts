import type { StockStory } from "./types";

export const CRDO: StockStory = {
  "ticker": "CRDO",
  "kicker": "Semiconductors · AI connectivity",
  "title": "Credo sells the copper that keeps AI racks talking",
  "dek": "Revenue grew 165% on active electrical cables and signal-retiming chips. The question is whether Credo owns a socket inside the rack or is riding a single product cycle.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $1.6B grew 165.1% at a 67.1% gross margin, and the $438.6M of free cash flow is a 27.6% margin.",
    "The August 2026 quarter grew revenue to $479.0M from $437.0M but cut the operating margin to 25.2% from 35.7%.",
    "Net cash of $764.3M means the expansion was funded internally; capex was $57.3M in FY2026 against $464.3M of operating cash flow.",
    "At 42.3x earnings the shares sit close to the 37.8x peer median even after a 19.7% one-year decline, and the forward estimate is $6.31 for FY2027."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1807794/000162828026043303/crdo-20260502.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001807794&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Revenue of $479.0M in the quarter to 1 August 2026 was 10% above the prior quarter, and the operating margin fell to 25.2% from 35.7%. That is the whole debate in one line: revenue grew, and the profit rate fell by ten points. Gross margin was 67.1% on a trailing basis, so the product is not being sold as a commodity; the compression came from mix, ramp costs or pricing, and the reported figures do not separate them.",
      "Credo sells copper cables with a retiming chip at each end, plus the same signal-processing technology as standalone chips and licensed designs. The customer trade-off is optical versus copper: optics reach further and cost more power, copper is cheaper but runs out of distance, and the retimer extends copper's reach by a generation. As racks densify, the amount of signal conditioning per link rises, which is why content per rack has grown faster than the number of racks.",
      "Is that content a socket or a cycle? At 40.6x EBITDA and 13.8x sales the shares are priced above Coherent at 36.0x and below Astera at 89.4x, and the 42.3x earnings multiple is close to the 37.8x peer median despite 165.1% trailing growth. The market has already decided the growth rate will fall, and the 19.7% one-year decline is that decision being marked. A socket would deserve the premium; a cycle would not, and the trailing numbers cannot tell the two apart."
    ],
    "quote": "Credo's cable extends copper by a generation, and the question is whether the next generation needs it at all."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core product is a cable that carries an electrical signal further than copper normally allows. Inside a rack, copper is cheaper and uses less power than optics, but at high speeds the signal degrades over distance. Credo puts a small chip at each end of the cable to retime and reshape the signal, which extends copper's useful reach by a generation or two. The same signal-processing technology is sold as standalone chips and as building blocks that other companies license.",
      "That means Credo sits on a trade-off its customers make every generation: optical links cost more and burn more power, copper links are cheaper but run out of reach. As racks get denser and accelerators get faster, the crossover point moves, and the amount of signal conditioning needed at each end rises. The company employs 2,022 people and reports a single consolidated revenue line, so the mix between cables, chips and licences is not visible in the financials."
    ],
    "bullets": [
      {
        "title": "Active electrical cables",
        "detail": "Copper cables with retiming chips at both ends. The largest product line and the one most exposed to rack architecture."
      },
      {
        "title": "Integrated circuits",
        "detail": "Retimers, DSPs and SerDes chiplets sold to equipment makers who want the signal conditioning without the cable."
      },
      {
        "title": "IP licensing",
        "detail": "SerDes designs licensed to other semiconductor companies. Small revenue, high margin, and a signal of technical standing."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Credo sells physical product, priced per cable or per chip. Gross margin was 67.1%, which is high for a hardware company and reflects the fact that the customer is buying a working link rather than a commodity connector. The licence revenue is smaller but carries almost no cost of goods, so it lifts the blended margin.",
      "The cost structure is fabless. Wafers come from foundries, assembly and test are outsourced, and the company's own spending goes into design, applications engineering and customer qualification. That is why the operating leverage has been so violent. FY2024 revenue of $193.0M produced a $37.1M operating loss; FY2026 revenue of $1.34B produced $445.0M of operating income. The design work was largely paid for before the volume arrived.",
      "The mechanism cuts both ways, and the latest quarter showed it. Revenue rose to $479.0M in Q1 FY27 from $437.0M in Q4 FY26, but the operating margin fell to 25.2% from 35.7%. A richer mix of lower-margin product, ramp costs or price concessions can undo a lot of operating leverage when the base is already large."
    ]
  },
  "growth": {
    "paragraphs": [
      "The revenue base went from $58.7M in FY2021 to $193.0M in FY2024, then $436.8M in FY2025 and $1.3B in FY2026. That is not a growth rate so much as a change of scale, and the trailing figure of $1.6B includes the August 2026 quarter. The quarterly path in the last year is $268.0M, $407.0M, $437.0M and $479.0M, so the sequential increment is decelerating even as the year-on-year rate stays above 100%.",
      "The consensus expects the pace to continue: $531.9M next quarter, $643.0M the quarter after, $2.5B for fiscal 2027 and $3.9B for fiscal 2028. The near-term numbers require a second-half ramp of roughly 34% from the August quarter, and the annual figure requires the customer programmes to hold through a product transition. A single design loss at a hyperscaler would not slow this growth; it would end it."
    ],
    "bullets": [
      {
        "title": "Copper versus optics",
        "detail": "The retimer extends copper's reach, but if optical links become cheap enough inside the rack, the content per link falls."
      },
      {
        "title": "Customer concentration",
        "detail": "Hyperscale buyers place very large orders and can move a generation of business between programmes, so a design loss is a revenue event."
      },
      {
        "title": "Margin on the ramp",
        "detail": "The ten-point operating margin decline in a quarter of 10% growth shows that mix and pricing can outrun volume."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating leverage in a fabless model is visible in the margin series. Operating margin was -43.0% in FY2021, -20.6% in FY2022, -11.5% in FY2023, -19.2% in FY2024, 8.5% in FY2025 and 33.3% in FY2026; the trailing figure is 31.7%. Gross margin stayed between 57.7% and 68.0% through the whole period, so the swing came almost entirely from spreading design and selling costs over a much larger revenue base.",
      "Net margin was 35.4% in FY2026 and EPS $2.51 against $0.29 a year earlier. Return on invested capital reached 32.2% in FY2026 and is 18.5% trailing, well above the 11.1% peer median; return on equity is 19.7%. The August 2026 quarter broke the pattern, with operating margin at 25.2% and net margin at 27.0%. One quarter is not a trend, but it is the first evidence that the operating leverage is not one-directional."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash from operations was $464.3M in FY2026 against $57.3M of capex, so free cash flow was $407.0M. The trailing figure is $438.6M, a 27.6% margin, well above the 7.0% peer median. The fabless model is why: wafers and assembly are bought from partners, so growth does not require a factory. The August 2026 quarter produced $82.9M of free cash flow, down from $177.5M in the May quarter, the working-capital cost of a bigger revenue base.",
      "The balance sheet holds $764.3M of net cash, so there is no leverage and interest cover is not applicable. The company funded a revenue increase from $193.0M to $1.3B without raising debt, and the FY2026 free cash flow of $407.0M is close to the $445.0M of operating income, so earnings and cash are broadly aligned. No buyback or dividend is disclosed; capital is being retained against the next product cycle."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Credo's {{pe}} trailing earnings multiple and {{evEbitda}} EBITDA multiple come with 13.8x sales and a 1.9% free cash flow yield. The peer medians are 37.8x, 31.0x and a 7.0% free cash flow margin, so the shares are close to the group on earnings and at a premium on EBITDA. Coherent at 36.0x EBITDA grows 30.8%; Astera at 89.4x grows 115.2%. Credo's 165.1% growth at 40.6x sits between them and closer to the slower name.",
      "The fiscal 2027 estimate of $6.31 implies about 19x, and $9.71 for fiscal 2028 about 12x. Those numbers assume the second-half ramp lands and that the margin recovers from the August level. If the operating margin stays at 25% rather than the 33% earned in FY2026, the earnings base is roughly a quarter lower than the trailing figure implies, and the forward multiple is correspondingly higher.",
      "The price is right if the retimer content per rack rises with each generation, which would make current revenue a base rather than a peak. A rack architecture that moves to optics inside the box, or a hyperscaler that absorbs the function into its own package, would take it apart. The 19.7% one-year decline against 165.1% revenue growth is the market pricing that risk before the income statement shows it."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Nineteen analysts sit behind Yahoo Finance data dated 18 November 2026, which puts the mean target at $277 and the range at $175 to $315 against a $121 price. A mean more than double the market price, with a low end 45% above it, is the most extreme positive skew in the group; it also means the target is not a valuation anchor so much as a restatement of the growth forecast.",
      "For fiscal 2027 the estimate is $2.5B of revenue and $6.31 of EPS, with fiscal 2028 at $3.9B and $9.71. Revisions are flat over 7 and 30 days and +3.0% over 90, and the last four quarters beat by 2.6% to 34%. The consensus assumes the second-half ramp is orders rather than hopes, and the estimate set has not been marked down despite the margin miss in the August quarter, which is itself a signal about how the misses are being read."
    ]
  },
  "risks": {
    "intro": "Credo's balance sheet is strong and its margins are real. The risks are about concentration, architecture and the price being paid for both.",
    "items": [
      {
        "title": "Customer concentration",
        "severity": "High",
        "detail": "Hyperscale buyers place very large orders and can move a generation of business to another supplier between programmes. A single design loss is a revenue event, not a share shift.",
        "watch": "Customer concentration disclosures and the revenue split between the largest buyers."
      },
      {
        "title": "Copper to optics substitution",
        "severity": "High",
        "detail": "If optical links get cheap and efficient enough to replace copper inside the rack, the retiming content per link falls. Credo sells into the copper side of that trade-off.",
        "watch": "Rack architecture disclosures from accelerator vendors and the optical content per rack."
      },
      {
        "title": "Margin on the next ramp",
        "severity": "Medium",
        "detail": "Operating margin fell from 35.7% to 25.2% in one quarter while revenue grew. Mix and pricing can compress the margin faster than volume lifts it.",
        "watch": "Gross margin guidance and the split between cable and chip revenue."
      },
      {
        "title": "Competition from larger suppliers",
        "severity": "Medium",
        "detail": "Broadline connectivity and semiconductor vendors can bundle retimers with switching silicon, and accelerator designers can absorb the function into their own package.",
        "watch": "Design wins at new customers and whether incumbents bundle the function for free."
      },
      {
        "title": "Estimate concentration",
        "severity": "Medium",
        "detail": "The consensus needs a second-half ramp that is roughly 40% above the first-quarter revenue run rate. A one-quarter slip would break the annual number.",
        "watch": "Bookings and the revenue implied by the next two quarterly estimates."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin by quarter",
        "detail": "The clearest test of whether the FY2026 margin was a plateau or a peak."
      },
      {
        "title": "Revenue per rack generation",
        "detail": "Content growth is the difference between a component supplier and a platform supplier."
      },
      {
        "title": "Customer count",
        "detail": "A broader customer base would make the concentration risk smaller without changing the growth rate."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Credo is a fabless connectivity supplier that turned a $193.0M revenue base into $1.59B in two years, funded the expansion internally, and now holds $1.30B of net cash. The gross margin of 67.1% says the product is not a commodity. The 10-point fall in operating margin in the latest quarter says the pricing and mix are not stable either.",
      "The educational point is the difference between a product cycle and a socket. A product cycle produces spectacular growth while the architecture favours the product, then hands the value to whoever wins the next generation. A socket produces durable content per system. The financial statements cannot tell you which one Credo has; the design-win disclosures and the margin trend can.",
      "What is not known is how much of the $438.6M of free cash flow is repeatable, how concentrated the customer base really is, and whether the second-half ramp in the consensus reflects orders already placed or expectations. Those three answers decide whether 60.2x trailing earnings is expensive or merely early."
    ],
    "questions": [
      "How many customers account for most of the revenue, and how long are their qualification cycles?",
      "Does the next rack generation increase or decrease the dollar content of copper connectivity?",
      "Why did operating margin fall ten points in a quarter of 10% revenue growth?",
      "How much of the FY2027 consensus depends on customers that have already placed orders?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
