import type { StockStory } from "./types";

export const VST: StockStory = {
  "ticker": "VST",
  "kicker": "Utilities · Competitive retail and generation",
  "title": "Vistra sells the same electron twice",
  "dek": "It runs 39,000 megawatts of generation and supplies 4.3 million retail customers. Owning both the plant and the customer means it can earn a margin on the wholesale sale and another on the retail contract.",
  "readingMinutes": 9,
  "takeaways": [
    "First-quarter FY26 revenue of $5.0B carried a 30.0% operating margin; Q2 fell to $4.4B and 12.6%, the range a merchant-retail model produces.",
    "Trailing free cash flow is $2.3B, 11.9% of revenue, against net debt of $19.2B, or 3.5x EBITDA, and interest cover of 3.1x.",
    "The shares have fallen 28.2% over a year while the 2026 EPS estimate stands at $9.28 against $2.18 reported in FY2025, so the multiple compressed rather than the earnings.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA, Vistra trades below Constellation at 25.4x and 13.6x despite a higher 11.2% return on invested capital."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000006/vistra-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001692819&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Vistra's first quarter of 2026 produced $5.0B of revenue, a 30.0% operating margin and $2.87 of diluted EPS; the second quarter produced $4.4B, 12.6% and $0.76. The swing is the integrated model at work. The retail book was 74.1% of FY2025 revenue and the Texas generation fleet 25.2%, so the company is simultaneously selling fixed-price contracts and dispatching plants into the wholesale market. When the hedges and the market agree, both margins are captured on the same megawatt-hour.",
      "The generation fleet is dispatched into markets where gas plants usually set the clearing price. Nuclear and renewables run baseload, gas sets the margin, and batteries shift energy from cheap hours to expensive ones. The retail business signs fixed-price contracts and then has to supply them, either from its own fleet or by buying in the market. A retailer that has sold contracts and not bought enough power is short the market, and the two loss years in FY2021 and FY2022 show what that mismatch can do.",
      "The valuation debate is about normalised earnings. Vistra's {{marketCap}} market value at {{price}} equals {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 23.2x and 13.3x for the utility peer group. Constellation trades at 25.4x and 13.6x, NextEra at 21.5x and 18.3x. Vistra's discount reflects 3.5x leverage and a merchant earnings stream, but its 11.2% return on invested capital is double Constellation's 5.5%. The return on capital is the strongest argument against the discount; the leverage is the strongest argument for it."
    ],
    "quote": "Vistra can earn a margin on the wholesale electron and another on the retail contract, but only if the hedge book matches the customer book."
  },
  "whatItDoes": {
    "paragraphs": [
      "The generation fleet is dispatched into wholesale markets. Gas plants set the price at the margin in most hours, nuclear and renewables run baseload, and batteries shift energy from cheap hours to expensive ones. Each asset earns the clearing price minus its own fuel and operating cost.",
      "The retail business signs contracts with households and businesses, often at a fixed price per kilowatt-hour for twelve or twenty-four months. It then has to supply that load, either from its own plants or by buying in the market. Marketing, billing and customer service sit underneath, and the brand competes on price, service and the range of plans, including more than fifty renewable options.",
      "The fleet also includes a large battery storage project under construction in California, sized at 400 megawatts and 1,600 megawatt-hours. Storage earns money by charging when power is cheap and discharging when it is expensive, which makes it a trading asset as much as a generation asset."
    ],
    "bullets": [
      {
        "title": "Retail supply",
        "detail": "Fixed-price electricity and gas contracts for 4.3 million customers. Revenue is the tariff, cost is the wholesale supply."
      },
      {
        "title": "Generation",
        "detail": "39,000 megawatts sold into wholesale markets. Revenue is the clearing price, cost is fuel plus fixed operating expense."
      },
      {
        "title": "Storage and renewables",
        "detail": "Batteries and contracted renewable purchases that shift energy across hours and support the retail plans."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "There are two margins, and they behave differently. The retail margin is the price on the customer's contract minus the cost of supplying that customer. It is stable while the contract runs, because the price is fixed, but it is only stable if the supply is hedged. An unhedged retailer in a price spike can lose more in a month than it earned in a year.",
      "The generation margin is the wholesale price minus fuel and fixed cost. Gas plants have a fuel cost that moves with the gas market, so their margin is a spread between power and gas rather than a price level. Nuclear plants have almost no fuel cost, so their margin is close to the power price itself.",
      "Putting the two together, Vistra can supply its retail book from its own fleet and capture both margins on the same megawatt-hour. That is the logic of the integrated model, and it is also its limitation: the company is only as good as its hedging, because a mismatch between contracted load and available generation turns the whole thing back into a price bet.",
      "The gross margin of 53.9% against an operating margin of 18.8% shows how much sits between the two lines. Fuel, purchased power and retail operating costs are large, and the fixed cost of the fleet is large. What is left is thin relative to revenue and very sensitive to the spread."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue has grown from $14.8B in FY2024 to $19.0B trailing, and consensus expects $22.0B in 2026 and $23.6B in 2027, with EPS of $9.28 and $10.24. The retail segment, at 74.1% of FY2025 revenue, is the volume driver; the Texas fleet is the margin driver. Growth therefore comes from adding customers and from widening the spread between the retail tariff and the cost of supply, not from building new generation at a fixed return.",
      "The battery pipeline is the one place where capacity is being added. A 400-megawatt, 1,600-megawatt-hour project in California earns money by charging when power is cheap and discharging when it is expensive, which makes it a trading asset as much as a generation asset. The return depends on the spread between peak and off-peak prices, so it is exposed to the same market that drives the gas fleet."
    ],
    "bullets": [
      {
        "title": "Retail scale",
        "detail": "4.3 million customers and a 74.1% revenue share give Vistra a distribution channel that a pure generator does not have."
      },
      {
        "title": "Hedge ratios",
        "detail": "A fixed-price retail book is only as good as the power bought against it. The loss years in FY2021 and FY2022 were hedge mismatches, not plant failures."
      },
      {
        "title": "Texas exposure",
        "detail": "The Texas fleet was 25.2% of FY2025 revenue and sells into an energy-only market, which offers the highest upside and the least price stability."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Profitability progression runs from 27.6% in FY2024 to 10.8% in FY2025 and 18.8% trailing, with a quarterly range from -2.8% in Q1 FY25 to 30.0% in Q1 FY26. Revenue rose 19.1% in FY2025, but the operating margin fell by nearly 17 points, which means the cost of supply rose faster than the retail price. That is the hedging variable, not an operating efficiency variable.",
      "Returns separate Vistra from the regulated utilities. Return on invested capital is 11.2%, double the 5.5% peer median and above Constellation's 5.5% and Southern's 5.7%. Return on equity is 40.5%, which reflects a thin equity base after $19.2B of net debt rather than an unusually profitable business. For a leveraged merchant, ROIC is the measure that matters and ROE is the one that flatters."
    ]
  },
  "cash": {
    "paragraphs": [
      "The cash statement was $2.3B trailing, an 11.9% margin, after $2.8B of capex in FY2025 against $4.1B of operating cash flow. The quarterly path is steadier than the earnings: $316M in Q1 FY26 and $334M in Q2, against negative figures in the first half of FY2025. That stability is the point of owning generation and retail together, because the retail margin can offset a weak wholesale quarter.",
      "The balance sheet is the constraint. Net debt is $19.2B, 3.5x EBITDA, and interest cover is 3.1x, the thinnest among the large power producers. The 0.8% dividend is small, so cash is being directed to debt reduction and to the battery project rather than to shareholders. A repeat of a cash-negative year would leave little room without asset sales or equity issuance."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Vistra's {{marketCap}} market value at {{price}} equals {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The utility peer medians are 23.2x and 13.3x, so the shares trade at a discount of about four turns on earnings and two on EBITDA. The discount is to the regulated group, not to a merchant peer. The price is 18.8x trailing free cash flow, a 5.3% free-cash-flow yield. On the FY2027 estimate of $10.24 the multiple is about 12.2x.",
      "The discount to Constellation is the key comparison. Constellation trades at 25.4x and 13.6x on a 5.5% return on capital, while Vistra trades at 19.1x and 11.4x on 11.2%. The market is not paying for the higher return because it does not trust its durability: Vistra's earnings depend on hedges, weather and Texas power prices, and the FY2021 and FY2022 losses are recent enough to be a reference point.",
      "What would justify a higher multiple is a hedge book that converts the merchant fleet into a contracted earnings stream, plus battery projects that earn a spread rather than a merchant return. What would break the current one is a mild weather year combined with a fall in clearing prices, which would hit both the retail volume and the generation margin at once. The 0.8% dividend leaves the equity return almost entirely to the multiple."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The 18 November 2026 Yahoo Finance consensus puts 23 analysts behind a mean target of $198, with a range of $106 to $270. The mean is 58% above the current price, the widest gap in the utility group, and the range from $106 to $270 is the widest in absolute terms.",
      "Revisions have been negative even after a Q3 FY26 beat of $3.23 against $2.43: the 90-day EPS change is -3.8% and the 30-day is -3.6%. Consensus expects $9.28 for 2026 and $10.24 for 2027. The combination of a much higher forward estimate than the FY2025 result and a falling share price is the clearest evidence that the debate is about the multiple, not about the near-term earnings."
    ]
  },
  "risks": {
    "intro": "Vistra's risks sit at the intersection of commodity prices, contract hedging and a leveraged balance sheet. The assets are good; the question is what happens when the hedges and the market disagree.",
    "items": [
      {
        "title": "Wholesale power prices",
        "severity": "High",
        "detail": "Generation margin is a price spread. A fall in clearing prices reduces it directly, and the retail book only partly offsets it.",
        "watch": "Realised power price, open position disclosure and forward price curves in each market."
      },
      {
        "title": "Hedging and position risk",
        "severity": "High",
        "detail": "A retailer that has sold fixed-price contracts and not bought enough power is short the market. The loss years in FY2021 and FY2022 show what a mismatch can do.",
        "watch": "Hedge ratios, mark-to-market on derivatives and the maturity of the hedging book."
      },
      {
        "title": "Leverage",
        "severity": "Medium",
        "detail": "Net debt of $19.2B at 3.5x EBITDA leaves limited room for a repeat of a cash-negative year without asset sales or equity issuance.",
        "watch": "Net debt to EBITDA, maturity schedule and credit rating."
      },
      {
        "title": "Weather",
        "severity": "Medium",
        "detail": "Heating and cooling demand drive volumes and prices at the same time, so a mild season hits revenue and margin together.",
        "watch": "Degree days against normal, and weather-normalised retail volumes."
      },
      {
        "title": "Market design and regulation",
        "severity": "Medium",
        "detail": "Capacity markets, bid caps and state policies determine how generators are paid for being available, not just for producing.",
        "watch": "Capacity auction results and state-level market reform proposals."
      }
    ],
    "watchlist": [
      {
        "title": "Retail gross margin per customer",
        "detail": "Shows whether the retail book is earning a real spread or just passing power through."
      },
      {
        "title": "Hedge position",
        "detail": "The single most important disclosure for understanding how much of next year is already locked in."
      },
      {
        "title": "Free cash flow after capex",
        "detail": "The measure that determines whether the buyback and the dividend are funded from operations."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Vistra is an integrated competitive power business with a large fleet, a large retail book and a leveraged balance sheet. Revenue of $19.0B, an 18.8% operating margin and $2.25B of free cash flow describe a business that works when the hedges and the market agree.",
      "The five-year record shows how much can go wrong and right inside that model. Two loss years followed by three profitable ones, with the same assets in place, is the clearest possible illustration that the earnings are a function of price and position rather than of operational quality.",
      "The 11.3x EV/EBITDA multiple is the market's attempt to price that uncertainty. Whether it is enough depends on how much of the fleet's output is contracted and at what price, which is disclosed but rarely read."
    ],
    "questions": [
      "What share of next year's expected generation is hedged, and at what price?",
      "How much of the retail book is fixed-price, and how is it supplied?",
      "What happens to free cash flow in a repeat of FY2022?",
      "Is the battery storage pipeline earning a contract-like return or taking merchant risk?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
