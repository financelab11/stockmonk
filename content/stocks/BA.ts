import type { StockStory } from "./types";

export const BA: StockStory = {
  "ticker": "BA",
  "kicker": "Industrials · Aerospace and defense",
  "title": "Boeing's income statement is a stack of cumulative estimates",
  "dek": "One strong December quarter carries the trailing numbers, and free cash flow was $16M. The business turns on delivery rates and on what the next cost estimate does to a programme.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $94.9B trailing twelve months, +17.5% year over year.",
    "Profitability: 10.3% operating margin and 8.1% net margin.",
    "Cash: $16M free cash flow, a 0.0% margin.",
    "Scorecard: 48/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/12927/000162828026004357/ba-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000012927&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "BOEING CO. generated $94.9B of revenue over the last twelve months, +17.5% versus the prior year. Revenue is tied to capital spending, backlogs and the ability to pass through input costs.",
      "The latest reported quarter was Q3 FY26, with $24.2B of revenue and an operating margin of 1.5%. The stock closed at $163.91 on 2026-11-17, giving a market capitalization of $129.9B.",
      "The shares sit 1% of the way up their 52-week range ($163.30 to $254.35). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "An aircraft programme is accounted for as a block of future deliveries. Change the assumed cost of the remaining units and the profit on every aircraft already delivered changes with it."
  },
  "whatItDoes": {
    "paragraphs": [
      "Commercial airplanes are sold to airlines, leasing companies and freight operators. The catalogue spans narrowbody and widebody jets, and each family is a programme with its own cost curve, supplier base and certification status. Pricing is negotiated at order, with escalators and concessions, and delivery slots are sold years ahead. The order book is the visibility; the production rate is the constraint.",
      "Defence, space and security sells to governments, mostly the United States and its allies. Some contracts are cost-reimbursable, where the customer pays allowable costs plus a fee and the contractor's risk is limited. Others are fixed-price, where the contractor keeps any saving and absorbs any overrun. Development work on a new aircraft or satellite is often fixed-price, which is why a single programme can produce a charge large enough to move a year's earnings.",
      "Global services is the annuity. It sells spare parts, maintenance, modifications, training and digital tools for the aircraft and equipment already in service. It grows with the installed fleet rather than with new orders, carries better margins than equipment, and needs far less working capital. That is the piece of Boeing that behaves least like a manufacturer."
    ],
    "bullets": [
      {
        "title": "Commercial airplanes",
        "detail": "Narrowbody and widebody jets sold years before delivery. Revenue and cash arrive with the delivery, not the order."
      },
      {
        "title": "Defence and space",
        "detail": "Fixed-price and cost-reimbursable contracts with governments. Fixed-price development work is where charges accumulate."
      },
      {
        "title": "Global services",
        "detail": "Spares, maintenance, modifications and training on the installed fleet. The recurring, capital-light part of the group."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Commercial aircraft are accounted for on a programme basis. The company estimates the total cost of producing all the aircraft in the accounting block, compares it with the revenue those aircraft will bring, and recognises a margin as each one is delivered. If the estimate of future costs rises, the margin on current deliveries falls, and the adjustment lands in the quarter the estimate changes rather than being spread over the remaining aircraft.",
      "That mechanism explains the shape of the income statement. A programme with a cost problem can report a loss on aircraft that are being delivered on time and at the agreed price, because the loss is an accounting correction to the whole block. It also means a good quarter can be good because an estimate improved, not because more aircraft were sold.",
      "The cash cycle is different again. Boeing spends on parts and labour long before delivery, and customers pay progress payments and then the balance on handover. Inventory is therefore enormous and working capital swings by billions between quarters. The gross margin of 9.4% is thin for a manufacturer, and it sits below the 10.3% operating margin, which is a sign that the trailing operating result includes items outside the normal cost of goods."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 2.6% a year across the fiscal years in the dataset, and the latest quarter changed +3.9% year over year. Third-party estimates for the current fiscal year point to $96.8B of revenue and -$2.03 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 10.3% and return on invested capital of n/a are the filters to watch as revenue scales."
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 10.3%, the net margin is 8.1% and diluted EPS is $9.69. The latest quarter's operating margin was 1.5%.",
      "Return on equity is -47.9%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $24.2B, an operating margin of 1.5% and a net margin of -0.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $16M, a 0.0% margin. The balance sheet carries $29.4B of net cash.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.",
      "Free cash flow was $16M over the last twelve months and net debt was -$29.4B; interest cover was n/a."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 17.0x trailing earnings and 8.4x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $233.35; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "26 analysts contribute to the third-party consensus. The mean target is $233.35, with a range of $157.00 to $305.00.",
      "Current-year estimates call for $96.8B of revenue and -$2.03 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 26 analysts with a mean target of $233.35; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Boeing's risks are industrial and contractual before they are financial. The order book is deep, the balance sheet has liquidity, and the uncertainty sits in the factory and in the cost estimates on long-term contracts.",
    "items": [
      {
        "title": "Commercial delivery execution",
        "severity": "High",
        "detail": "Revenue and cash arrive on delivery. A supplier shortfall, a labour dispute or a production-rate limit pushes both to the right and leaves inventory on the books.",
        "watch": "Monthly deliveries, production-rate commentary and inventory days."
      },
      {
        "title": "Fixed-price development charges",
        "severity": "High",
        "detail": "Defence and space contracts signed at a fixed price transfer cost risk to Boeing. A single programme can produce a charge large enough to erase a year of profit.",
        "watch": "Segment operating margins and any disclosure of reach-forward losses."
      },
      {
        "title": "Supply chain and labour",
        "severity": "High",
        "detail": "Airframe and engine suppliers are concentrated, and a strike or a supplier failure stops the line. Both have happened within the last five years.",
        "watch": "Supplier delivery performance and labour agreements."
      },
      {
        "title": "Certification and regulatory approval",
        "severity": "Medium",
        "detail": "Production changes require regulator sign-off. A slower approval path limits how fast the company can raise output even with orders in hand.",
        "watch": "Certification milestones and any limitation on production rates."
      },
      {
        "title": "Liquidity if the ramp slips",
        "severity": "Medium",
        "detail": "Free cash flow has been negative in three of the last five years. A delayed ramp would consume cash at the same time as debt service falls due.",
        "watch": "Cash and investments, debt maturities and the quarterly cash-flow statement."
      }
    ],
    "watchlist": [
      {
        "title": "Deliveries per month",
        "detail": "The single best indicator of revenue and cash. Programme accounting follows the physical aircraft."
      },
      {
        "title": "Cash used in operations",
        "detail": "A quarter of positive free cash flow is not a trend. The annual figure is what determines the balance sheet."
      },
      {
        "title": "Defence segment margin",
        "detail": "Fixed-price programmes hide their problems until the estimate changes. A falling segment margin is the early warning."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Boeing is a duopoly participant with a deep order book, a global services annuity and a customer base that has no practical alternative for most of its fleet. Those are durable advantages, and they are why the company has survived years of losses without losing its market position.",
      "The financial statements are less flattering. The trailing margin and EPS are carried by one quarter, free cash flow is essentially zero over the trailing period after large outflows in two of the last five years, and the consensus expects another loss this year. The 8.9x EV/EBITDA multiple is cheap against peers because the earnings in the denominator are uncertain, not because the market has overlooked something.",
      "The reader is left with a production question rather than a valuation question. Deliveries decide revenue, cash and the credibility of the cost estimates. Until the delivery rate is stable, the reported margin will keep jumping between quarters and no multiple calculated on it will mean much."
    ],
    "questions": [
      "How many aircraft were delivered in the last quarter, and at what production rate?",
      "Which programmes still carry reach-forward losses that have not been provided for?",
      "Is the $29.40B net cash position durable, or does it reflect a timing effect in the debt schedule?",
      "How much of the services revenue is tied to the installed fleet rather than to new deliveries?"
    ]
  }
};
