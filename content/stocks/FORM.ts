import type { StockStory } from "./types";

export const FORM: StockStory = {
  "ticker": "FORM",
  "kicker": "Semiconductor equipment · Test and measurement",
  "title": "FormFactor sells a part that wears out every time a wafer is tested",
  "dek": "Probe cards are consumed as they touch wafers, which puts a recurring revenue stream inside a capital-equipment company. Five years of flat sales followed by a 29.1% quarterly operating margin is the whole argument.",
  "readingMinutes": 9,
  "takeaways": [
    "September quarter revenue was $280.5M at a 29.1% operating margin, against $226.1M and 7.4% in the March quarter.",
    "The $103.7M capex programme cut FY2025 free cash flow to $11.7M; the trailing figure has recovered to $181.3M.",
    "At 37.2x earnings the shares sit well below the 71.5x peer median, despite a 29.1% operating margin and 29.1% trailing revenue growth.",
    "Consensus EPS of $3.39 sits below the $3.72 annualised from the September quarter, so estimates already assume a fade."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1039399/000103939926000009/form-20251227.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001039399&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Probe-card demand returned and the margin followed. Revenue in the September 2026 quarter was $280.5M, the operating margin 29.1% and EPS $0.93, against a 7.4% operating margin and $0.26 in the March quarter. Six quarters took the business from a 1.9% margin to a 29.1% one while revenue rose 64%, from $171.4M to $280.5M. For a company whose sales were flat for five years, the speed of that turn is the event worth explaining.",
      "Probe cards are 81.3% of revenue and Systems 18.7%. A card is a custom contact assembly, designed for one chip and consumed as it touches wafers, so demand tracks test intensity and product transitions rather than fab construction. The difficult end markets, advanced logic, high-bandwidth memory, automotive and compound semiconductors, are where contact at fine pitch and across temperature is hardest and where a qualified card commands its price. Gross margin is 47.1% because FormFactor builds the MEMS structures in-house, which brings depreciation and yield into cost of goods.",
      "At 37.2x earnings, 28.2x EBITDA and 6.2x sales, FormFactor trades well below the peer medians of 71.5x and 33.8x on every measure. The discount is not an oversight. The September quarter's 29.1% operating margin is the highest in the record, and the consensus EPS of $3.39 is below the $3.72 that quarter would produce if annualised. The market is already assuming normalisation, which is why the multiple looks low against a peak."
    ],
    "quote": "A probe card is consumed every time a wafer is tested, so the 29.1% operating margin is a production-rate margin rather than a one-off equipment sale."
  },
  "whatItDoes": {
    "paragraphs": [
      "The probe card is a small, expensive, highly customised object. It carries thousands of fine needles or MEMS structures that press onto the pads of a die, carry a signal to the tester and then move to the next die. Each card is designed for a particular chip, so the work starts with the customer's layout and ends with a qualification run. When the customer moves to a new product or a new node, the card is redesigned.",
      "The Systems segment sells the equipment around the card: probe stations that position the wafer, thermal subsystems that hold a device at a specified temperature, and analytical tools used in laboratories. These are sold to the same customers but on a different rhythm, because a station is bought when a test floor is built or expanded rather than when a product changes.",
      "The end markets are the ones with the hardest test problems. Advanced logic and high-bandwidth memory need many parallel contacts at fine pitch. Automotive and industrial devices need testing across temperature. Compound semiconductors and photonics need contact on materials that do not behave like silicon. That mix matters because the difficult tests are where a probe card earns its price."
    ],
    "bullets": [
      {
        "title": "Probe cards",
        "detail": "Custom contact assemblies consumed by wafer test. Revenue tracks test intensity and product transitions more than fab construction."
      },
      {
        "title": "Systems",
        "detail": "Probe stations, thermal subsystems and analytical tools. Revenue tracks the building and equipping of test floors."
      },
      {
        "title": "The difficult end markets",
        "detail": "Advanced logic, memory, automotive, industrial and compound semiconductors, where contact at fine pitch and across temperature is the constraint."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin was 47.1% on a trailing basis, which is lower than a design-only chip company and higher than an assembly house. The reason is that FormFactor does real manufacturing: MEMS probe structures are built in its own facilities, which brings depreciation and process yield into the cost of goods. The 18.3% operating margin leaves engineering, sales and administration to be funded out of the spread.",
      "The revenue model has two clocks. Consumable cards give a base that recurs as long as customers are testing wafers, which is a production-rate variable. Systems give lumpy project revenue that depends on capital budgets. In a strong year both clocks run together, which is why the operating margin can move from 6.3% in Q2 FY25 to 29.1% in Q3 FY26 while revenue went from $195.8M to $280.5M.",
      "The pricing logic is different for each product. A probe card is specified into a customer's test programme, so once qualified it is not easily swapped, and the price is small relative to the value of the test coverage it provides. A probe station competes more directly with other vendors on capability and price because it is bought through a capital process."
    ]
  },
  "growth": {
    "paragraphs": [
      "Consumable probe cards are the demand driver, and their economics differ from a tool sale. A card is designed into a test programme and replaced as it wears, so revenue recurs with wafer volumes and accelerates when a customer ramps a new product. That is why the last year looks so different from the previous five: revenue was $663.1M in FY2023 and $785.0M in FY2025, then reached $980.1M on a trailing basis, up 29.1%, with the September quarter 38.4% above the year-earlier $202.7M.",
      "The estimate path extends the ramp. Revenue is forecast at $1.1B for the current year, up 33.8%, and $1.3B next, up 24.7%, with the December quarter at $285.7M. Systems, 18.7% of revenue, is the lumpier half and depends on test-floor construction, while cards depend on utilisation. A reader has to decide how much of the current demand is a product cycle in advanced logic and memory and how much is the restocking that follows any shortage."
    ],
    "bullets": [
      {
        "title": "Consumable base",
        "detail": "Cards wear out with use, so the installed base produces revenue without a new capital decision; the replacement rate is the metric to watch."
      },
      {
        "title": "Test intensity",
        "detail": "Advanced logic and high-bandwidth memory need more contacts at finer pitch, which raises the value of each card."
      },
      {
        "title": "Systems cyclicality",
        "detail": "Probe stations are bought when a test floor is built, and that 18.7% of revenue can pause without affecting the card base."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Factory absorption drove the margin. Gross margin rose from 39.3% in FY2025 to 47.1% trailing, and the operating margin from 7.3% to 18.3%, as revenue grew 29.1%. In the September quarter alone, revenue rose $22.3M from June and operating income rose $23.8M, a drop-through above 100%. That is what happens when incremental volume runs through a manufacturing base that was already paid for.",
      "Below the operating line the record is ordinary. Net margin is 17.7%, close to the operating margin, and EPS reached $0.93 in the September quarter against $0.26 in March. Return on invested capital is 13.2% and return on equity 14.7%, both above the peer medians of 9.4% and 8.3% despite $384.1M of net cash diluting the capital base. The comparison with Onto, at a 12.0% operating margin and 5.9% ROIC, shows how much of FormFactor's advantage comes from the consumable mix."
    ]
  },
  "cash": {
    "paragraphs": [
      "The $103.7M capital programme is the reason FY2025 free cash flow was only $11.7M. Operating cash flow was $115.4M and capex jumped from $38.4M to $103.7M, a 13.2% capital intensity, as capacity was added for MEMS probe structures. The trailing year shows the payoff: $181.3M of free cash flow, an 18.5% margin. Capex of that size is a bet on demand that arrives after the building is finished.",
      "Net cash of $384.1M equals 5.9% of the market value and 1.8x EBITDA, and interest cover of 21.9x leaves no financing constraint. Working capital is the volatile line: the June 2025 quarter consumed $47.4M of cash before the September quarter generated $19.5M, a reminder that inventory and receivables move with the ramp. Nothing is paid out, and the cash is being retained for capacity rather than returned."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Thirty-seven times earnings, 28.2x EBITDA and 6.2x sales are below or near the peer medians of 71.5x and 33.8x, and 35.6x free cash flow is a 2.8% yield. On the current-year estimate of $3.39 the multiple is 24.5x, and on next year's $4.29 it is 19.3x. The shares are not priced as a peak-margin business, which is unusual for a name whose margin rose 22 points in two quarters.",
      "What justifies the discount is the durability of the margin. At 47.1% gross margin, every point of volume matters, and the 29.1% operating margin assumes the September level holds. If it does, EPS should exceed the $3.39 estimate; if the mix reverts toward Systems or the advanced-logic ramp pauses, the earnings base falls quickly. The 35.6x free-cash-flow multiple is the more defensible anchor because cash conversion has been strong in both the up and down years."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Ten estimates in the 18 November 2026 Yahoo Finance survey produce a mean target of $145 against an $83 price, with a range of $102 to $200. The revision trend is strong, with EPS estimates up 10.8% over thirty, sixty and ninety days, and the last four quarters have beaten by between 21% and 34%.",
      "The consensus assumes the margin holds but does not extrapolate it. Current-year EPS of $3.39 is below the $3.72 annualised from the September quarter, so the estimates embed a modest fade rather than a repeat of the peak. That is a conservative way to own a cyclical: if the quarter proves to be a new base, the estimate is too low, and if it was a restocking peak, the multiple on $3.39 is already 24.5x."
    ]
  },
  "risks": {
    "intro": "FormFactor's risk is not solvency; the net cash balance removes that. The risk is that a consumable business with high fixed costs gets valued on a peak margin that does not persist.",
    "items": [
      {
        "title": "Peak-margin extrapolation",
        "severity": "High",
        "detail": "Operating margin moved from 6.3% to 29.1% in five quarters. If the market capitalises the top of that range, a normalisation back toward the mid-teens would hurt earnings and the multiple at the same time.",
        "watch": "Operating margin each quarter and the mix between cards and systems."
      },
      {
        "title": "Test demand tied to one product cycle",
        "severity": "High",
        "detail": "The recent acceleration depends on advanced packaging and high-bandwidth memory test intensity. A pause in those ramps would hit consumable pull-through as well as systems orders.",
        "watch": "Wafer-start commentary from the largest customers and the book-to-bill trend."
      },
      {
        "title": "Working capital absorbs profit",
        "severity": "Medium",
        "detail": "FY2023 and FY2025 both showed positive net income with almost no free cash flow. Inventory and receivables can swallow a year of earnings during a ramp.",
        "watch": "Inventory days, receivables days and the gap between net income and operating cash flow."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "Probe cards are designed per customer product, so a few large accounts drive a disproportionate share of revenue and of engineering spend.",
        "watch": "Top-customer disclosures and the number of designs won per quarter."
      },
      {
        "title": "Capital intensity of the card business",
        "severity": "Medium",
        "detail": "MEMS probe structures are manufactured in-house, which means depreciation and yield matter. A yield problem hits gross margin before it hits revenue.",
        "watch": "Gross margin and capital expenditure relative to revenue."
      },
      {
        "title": "Systems cyclicality",
        "severity": "Low",
        "detail": "Probe stations are bought when test floors are built. That revenue can disappear for several quarters without any change in the consumable base.",
        "watch": "The Systems segment's share of revenue and order commentary."
      }
    ],
    "watchlist": [
      {
        "title": "Gross margin",
        "detail": "47.1% is the number that shows whether factory absorption is keeping up with volume."
      },
      {
        "title": "Cash conversion",
        "detail": "Two of the last five years produced almost no free cash flow despite reported profits."
      },
      {
        "title": "Card versus systems mix",
        "detail": "The recurring base is the more valuable revenue; its share determines how cyclical the whole is."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "FormFactor is a manufacturer of test interfaces with a consumable core, a 47.1% gross margin and $384.1M of net cash. The trailing accounts look mediocre because they include a weak first half; the last two quarters look excellent because test demand returned.",
      "The gaps in the data matter here: how much revenue is genuinely recurring, how concentrated the customer base is, and whether the 29.1% operating margin reflects factory absorption that reverses when the current product ramps finish.",
      "A reader should leave with one distinction firmly in hand: a consumable is worth more than the machine it runs inside, because it recurs without a new purchase decision. FormFactor owns part of that position. How much of its revenue base actually behaves that way is what the next few filings will show."
    ],
    "questions": [
      "What share of revenue comes from cards that are replaced on a predictable cycle?",
      "How much of the margin expansion came from volume absorption rather than mix?",
      "Why did FY2023 and FY2025 convert so little profit into cash?",
      "Are the near-term estimates of flat EPS a signal that the ramp is peaking?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
