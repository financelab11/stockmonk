import type { StockStory } from "./types";

export const BA: StockStory = {
  ticker: "BA",
  kicker: "Industrials · Aerospace and defense",
  title: "Boeing's income statement is a stack of cumulative estimates",
  dek: "One strong December quarter carries the trailing numbers, and free cash flow was $16M. The business turns on delivery rates and on what the next cost estimate does to a programme.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $94.91B, up 17.5%, with the latest quarter at $24.19B and a 1.5% operating margin.",
    "The December quarter alone earned $10.73 per share, more than the entire trailing figure of $9.69, so the trailing multiple is not a run-rate.",
    "Free cash flow was $16.0M over the trailing period after a $1.88B outflow in FY2025 and a $14.31B outflow in FY2024.",
    "At $173.40 the shares trade at 8.9x EV/EBITDA and 1.1x sales, the cheapest EBITDA multiple in the industrial peer group.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000012927&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Boeing builds commercial jetliners, military aircraft, rotorcraft, satellites, missile-defence systems and space launch hardware, and supports all of it with a global spares and maintenance business. Trailing revenue is $94.91B from 141,000 employees. The commercial airplanes are the largest single block; defence and space are smaller in revenue but carry their own contract risks; services is the steadiest and highest-margin part.",
      "The question that matters is deliveries. An airliner is priced when the order is signed and cash arrives mostly on delivery, so revenue and cash flow are set by how many aircraft leave the factory each month. That number depends on the supply chain, on the workforce and on regulators approving each production change. It does not depend much on demand, because the order book is deep and airlines wait years for slots.",
      "The snapshot is unusual. Trailing revenue of $94.91B and a 10.3% operating margin look healthy until you see that the last three quarters printed operating margins of 2.0%, 0.6% and 1.5%. A single December quarter with a 36.7% margin and $8.22B of net income is carrying the trailing figures. The shares closed at $173.40, for a market capitalisation of $136.18B and a position 9% of the way up a 52-week range of $165.01 to $254.35.",
    ],
    quote:
      "An aircraft programme is accounted for as a block of future deliveries. Change the assumed cost of the remaining units and the profit on every aircraft already delivered changes with it.",
  },
  whatItDoes: {
    paragraphs: [
      "Commercial airplanes are sold to airlines, leasing companies and freight operators. The catalogue spans narrowbody and widebody jets, and each family is a programme with its own cost curve, supplier base and certification status. Pricing is negotiated at order, with escalators and concessions, and delivery slots are sold years ahead. The order book is the visibility; the production rate is the constraint.",
      "Defence, space and security sells to governments, mostly the United States and its allies. Some contracts are cost-reimbursable, where the customer pays allowable costs plus a fee and the contractor's risk is limited. Others are fixed-price, where the contractor keeps any saving and absorbs any overrun. Development work on a new aircraft or satellite is often fixed-price, which is why a single programme can produce a charge large enough to move a year's earnings.",
      "Global services is the annuity. It sells spare parts, maintenance, modifications, training and digital tools for the aircraft and equipment already in service. It grows with the installed fleet rather than with new orders, carries better margins than equipment, and needs far less working capital. That is the piece of Boeing that behaves least like a manufacturer.",
    ],
    bullets: [
      {
        title: "Commercial airplanes",
        detail:
          "Narrowbody and widebody jets sold years before delivery. Revenue and cash arrive with the delivery, not the order.",
      },
      {
        title: "Defence and space",
        detail:
          "Fixed-price and cost-reimbursable contracts with governments. Fixed-price development work is where charges accumulate.",
      },
      {
        title: "Global services",
        detail:
          "Spares, maintenance, modifications and training on the installed fleet. The recurring, capital-light part of the group.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Commercial aircraft are accounted for on a programme basis. The company estimates the total cost of producing all the aircraft in the accounting block, compares it with the revenue those aircraft will bring, and recognises a margin as each one is delivered. If the estimate of future costs rises, the margin on current deliveries falls, and the adjustment lands in the quarter the estimate changes rather than being spread over the remaining aircraft.",
      "That mechanism explains the shape of the income statement. A programme with a cost problem can report a loss on aircraft that are being delivered on time and at the agreed price, because the loss is an accounting correction to the whole block. It also means a good quarter can be good because an estimate improved, not because more aircraft were sold.",
      "The cash cycle is different again. Boeing spends on parts and labour long before delivery, and customers pay progress payments and then the balance on handover. Inventory is therefore enormous and working capital swings by billions between quarters. The gross margin of 9.4% is thin for a manufacturer, and it sits below the 10.3% operating margin, which is a sign that the trailing operating result includes items outside the normal cost of goods.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $62.29B in FY2021 to $66.61B, $77.79B, $66.52B and $89.46B in the following four years, and reached $94.91B on a trailing basis. The FY2024 figure is the one to keep in view: revenue fell that year while the operating loss reached $10.71B. The recovery since then is a production recovery, not a demand event, and it is why the trailing growth rate of 17.5% overstates the underlying trend.",
      "The third-party consensus expects $96.79B of revenue this fiscal year with an EPS of -$2.02, then $109.37B and $2.16 next year. For the coming quarter it looks for $25.64B and -$0.74, then $25.65B and $0.17 in the following one. The pattern is a company expected to lose money this year and earn a little next year, which is what a production ramp with unresolved programme costs looks like in a model.",
      "The realistic drivers are delivery rates on the commercial programmes, the pace at which stored aircraft are returned to service, and the margin on defence development work. What would slow it down is a supplier that cannot keep up, a labour disruption, a certification delay on a production change, or another charge on a fixed-price programme. The order book does not protect against any of those.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record is the honest picture. Operating margin was -0.8% in Q2 FY25, -20.5% in Q3 FY25, 36.7% in Q4 FY25, then 2.0%, 0.6% and 1.5% in the first three quarters of FY26. Revenue over the same stretch moved only from $22.75B to $24.19B, a narrow range. A margin that goes from -20.5% to 36.7% between two quarters, while sales barely move, is telling you the swings come from programme adjustments rather than from the top line.",
      "The trailing figures inherit that. Trailing operating margin is 10.3%, net margin is 8.1%, and diluted EPS is $9.69. But the December quarter alone produced $10.73 of EPS and $8.22B of net income, more than the whole trailing EPS figure. The other five quarters in the table were all loss-making per share. An earnings multiple calculated on $9.69 is therefore measuring a gain, not a run-rate.",
      "Return on equity is -47.9%, which sounds alarming until you remember that equity has been written down by years of losses. A negative return on a small or negative equity base is not a useful comparison with other companies. The more informative measure is the operating result by programme, which is disclosed in the filing's segment note rather than in this summary.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $16.0M over the trailing period, a 0.0% margin. The annual history is what matters: -$4.40B in FY2021, +$2.29B in FY2022, +$4.43B in FY2023, -$14.31B in FY2024 and -$1.88B in FY2025. Three of the last five years consumed cash. The FY2024 outflow of $14.31B is larger than the entire trailing free cash flow, which puts the $16.0M in context: it is a rounding difference, not a recovery.",
      "The reported balance sheet shows $29.40B more cash and investments than debt, which is unusual for a company with this cash history and worth verifying against the debt note in the filing. If it holds, it is a genuine liquidity cushion and it explains why the company could absorb a year like FY2024 without a refinancing crisis. If it reflects a timing effect, the cushion is smaller than it looks.",
      "What the cash flow supports is the production ramp. Aircraft inventory, supplier advances and tooling all consume cash before a delivery is paid for, so free cash flow will lag earnings until deliveries stabilise. The price-to-free-cash-flow multiple of 8,511x in the snapshot is not a valuation signal; it is what happens when the denominator is close to zero.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $173.40 Boeing trades at 17.8x trailing earnings, 8.9x EV/EBITDA and 1.1x sales. The earnings multiple is the least useful of the three because the trailing EPS contains a large one-off gain and the consensus expects a loss this year. EV/EBITDA has the same problem in milder form, since trailing EBITDA includes the same quarter. The sales multiple of 1.1x is the cleanest anchor because revenue is the line least distorted by programme adjustments.",
      "Against the peer group, 8.9x EV/EBITDA is cheap: Caterpillar is at 14.5x, RTX at 18.1x, Eaton at 20.9x and GE at 24.3x. The factor screen puts Boeing in the 84th percentile for cheapness on EV/EBITDA. That discount is not a mispricing to be arbitraged; it reflects thin margins, negative free cash flow in most years and the possibility of another programme charge. A low multiple on depressed and uncertain earnings is not the same as a cheap stock.",
      "What the valuation needs is a delivery rate that produces positive free cash flow and a defence business that stops surprising on the downside. The consensus EPS of $2.16 for next year, against a $173.40 share price, implies a very high multiple on recovered earnings. That is the arithmetic of a company whose profit has not yet returned. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 26 analysts with a mean target of $233.35 and a range of $157.00 to $305.00. Current fiscal-year estimates call for $96.79B of revenue and an EPS of -$2.02, with 20 analysts contributing; next year carries $109.37B and $2.16. The coming quarter is expected to produce $25.64B and -$0.74.",
      "The dispersion is enormous. The low target of $157.00 is below the current price and the high target of $305.00 is well above it, on a stock with a $9.69 trailing EPS that is itself distorted. When the earnings base is this uncertain, the target range is really a range of assumptions about delivery rates and programme charges, not a range of opinions about the multiple.",
      "These are third-party forecasts. A mean target built on a loss-making year should be read as a statement about the recovery, not about the current earnings power.",
    ],
  },
  risks: {
    intro:
      "Boeing's risks are industrial and contractual before they are financial. The order book is deep, the balance sheet has liquidity, and the uncertainty sits in the factory and in the cost estimates on long-term contracts.",
    items: [
      {
        title: "Commercial delivery execution",
        severity: "High",
        detail:
          "Revenue and cash arrive on delivery. A supplier shortfall, a labour dispute or a production-rate limit pushes both to the right and leaves inventory on the books.",
        watch:
          "Monthly deliveries, production-rate commentary and inventory days.",
      },
      {
        title: "Fixed-price development charges",
        severity: "High",
        detail:
          "Defence and space contracts signed at a fixed price transfer cost risk to Boeing. A single programme can produce a charge large enough to erase a year of profit.",
        watch:
          "Segment operating margins and any disclosure of reach-forward losses.",
      },
      {
        title: "Supply chain and labour",
        severity: "High",
        detail:
          "Airframe and engine suppliers are concentrated, and a strike or a supplier failure stops the line. Both have happened within the last five years.",
        watch:
          "Supplier delivery performance and labour agreements.",
      },
      {
        title: "Certification and regulatory approval",
        severity: "Medium",
        detail:
          "Production changes require regulator sign-off. A slower approval path limits how fast the company can raise output even with orders in hand.",
        watch:
          "Certification milestones and any limitation on production rates.",
      },
      {
        title: "Liquidity if the ramp slips",
        severity: "Medium",
        detail:
          "Free cash flow has been negative in three of the last five years. A delayed ramp would consume cash at the same time as debt service falls due.",
        watch:
          "Cash and investments, debt maturities and the quarterly cash-flow statement.",
      },
    ],
    watchlist: [
      {
        title: "Deliveries per month",
        detail:
          "The single best indicator of revenue and cash. Programme accounting follows the physical aircraft.",
      },
      {
        title: "Cash used in operations",
        detail:
          "A quarter of positive free cash flow is not a trend. The annual figure is what determines the balance sheet.",
      },
      {
        title: "Defence segment margin",
        detail:
          "Fixed-price programmes hide their problems until the estimate changes. A falling segment margin is the early warning.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Boeing is a duopoly participant with a deep order book, a global services annuity and a customer base that has no practical alternative for most of its fleet. Those are durable advantages, and they are why the company has survived years of losses without losing its market position.",
      "The financial statements are less flattering. The trailing margin and EPS are carried by one quarter, free cash flow is essentially zero over the trailing period after large outflows in two of the last five years, and the consensus expects another loss this year. The 8.9x EV/EBITDA multiple is cheap against peers because the earnings in the denominator are uncertain, not because the market has overlooked something.",
      "The reader is left with a production question rather than a valuation question. Deliveries decide revenue, cash and the credibility of the cost estimates. Until the delivery rate is stable, the reported margin will keep jumping between quarters and no multiple calculated on it will mean much.",
    ],
    questions: [
      "How many aircraft were delivered in the last quarter, and at what production rate?",
      "Which programmes still carry reach-forward losses that have not been provided for?",
      "Is the $29.40B net cash position durable, or does it reflect a timing effect in the debt schedule?",
      "How much of the services revenue is tied to the installed fleet rather than to new deliveries?",
    ],
  },
};
