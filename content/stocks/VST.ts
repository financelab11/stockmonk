import type { StockStory } from "./types";

export const VST: StockStory = {
  ticker: "VST",
  kicker: "Utilities · Competitive retail and generation",
  title: "Vistra sells the same electron twice",
  dek: "It runs 39,000 megawatts of generation and supplies 4.3 million retail customers. Owning both the plant and the customer means it can earn a margin on the wholesale sale and another on the retail contract.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $19.0B, up 18.6%, with an 18.8% operating margin and 11.7% net margin.",
    "Operating income was negative in FY2021 and FY2022, then positive $2.66B, $4.08B and $1.91B in the next three years.",
    "Free cash flow is $2.25B, an 11.9% margin, against $19.2B of net debt at 3.5x EBITDA.",
    "At $124.80 the shares trade at 11.3x EV/EBITDA, near the bottom of a $110.89 to $196.80 52-week band.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000006/vistra-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001692819&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Vistra is two businesses that most utilities keep separate. It owns about 39,000 megawatts of generating capacity, mostly natural gas with nuclear, solar and battery storage alongside. It also supplies electricity and natural gas to nearly 4.3 million residential, commercial and industrial customers in 20 states and the District of Columbia, and it participates in six of the seven competitive wholesale markets in the United States.",
      "The combination is the point. A pure retailer buys power in the wholesale market and resells it to homes and businesses, earning the difference and carrying the risk that the market moves against it. A pure generator sells into the wholesale market and carries the risk that the price falls. A company that owns both can match its retail load against its own generation, which turns two opposite risks into one position that it can hedge.",
      "Vistra is valued at $41.9B at $124.80 a share, with revenue of $19.0B, operating margin of 18.8% and $19.2B of net debt. The stock has returned 588.4% over five years and negative 32.0% over the last one, which is a fair summary of how quickly the market has changed its mind about competitive power.",
    ],
    quote:
      "Owning generation and owning the customer are different bets. Holding both at once turns a price gamble into a margin business, provided the hedges line up.",
  },
  whatItDoes: {
    paragraphs: [
      "The generation fleet is dispatched into wholesale markets. Gas plants set the price at the margin in most hours, nuclear and renewables run baseload, and batteries shift energy from cheap hours to expensive ones. Each asset earns the clearing price minus its own fuel and operating cost.",
      "The retail business signs contracts with households and businesses, often at a fixed price per kilowatt-hour for twelve or twenty-four months. It then has to supply that load, either from its own plants or by buying in the market. Marketing, billing and customer service sit underneath, and the brand competes on price, service and the range of plans, including more than fifty renewable options.",
      "The fleet also includes a large battery storage project under construction in California, sized at 400 megawatts and 1,600 megawatt-hours. Storage earns money by charging when power is cheap and discharging when it is expensive, which makes it a trading asset as much as a generation asset.",
    ],
    bullets: [
      {
        title: "Retail supply",
        detail:
          "Fixed-price electricity and gas contracts for 4.3 million customers. Revenue is the tariff, cost is the wholesale supply.",
      },
      {
        title: "Generation",
        detail:
          "39,000 megawatts sold into wholesale markets. Revenue is the clearing price, cost is fuel plus fixed operating expense.",
      },
      {
        title: "Storage and renewables",
        detail:
          "Batteries and contracted renewable purchases that shift energy across hours and support the retail plans.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "There are two margins, and they behave differently. The retail margin is the price on the customer's contract minus the cost of supplying that customer. It is stable while the contract runs, because the price is fixed, but it is only stable if the supply is hedged. An unhedged retailer in a price spike can lose more in a month than it earned in a year.",
      "The generation margin is the wholesale price minus fuel and fixed cost. Gas plants have a fuel cost that moves with the gas market, so their margin is a spread between power and gas rather than a price level. Nuclear plants have almost no fuel cost, so their margin is close to the power price itself.",
      "Putting the two together, Vistra can supply its retail book from its own fleet and capture both margins on the same megawatt-hour. That is the logic of the integrated model, and it is also its limitation: the company is only as good as its hedging, because a mismatch between contracted load and available generation turns the whole thing back into a price bet.",
      "The gross margin of 53.9% against an operating margin of 18.8% shows how much sits between the two lines. Fuel, purchased power and retail operating costs are large, and the fixed cost of the fleet is large. What is left is thin relative to revenue and very sensitive to the spread.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at a 7.3% compound rate over five years, but the annual figures move in both directions: $17.7B in FY2021, $15.6B in FY2022, $13.8B in FY2023, $14.8B in FY2024 and $17.6B in FY2025. Revenue in this business tracks the wholesale price of power and gas more than it tracks customer count.",
      "The latest quarter grew 17.3% year over year. Third-party estimates point to $22.0B of revenue and $9.48 of EPS this fiscal year, then $23.1B and $10.58. That implies a meaningful step up from the trailing $19.0B, which is a forecast about power prices and about the retail book holding its margin.",
      "The growth levers are straightforward to list and hard to forecast: the price of power in each market, the number of retail customers, the margin on each contract, and the addition of storage and renewable capacity. The first of those dominates.",
    ],
    bullets: [
      {
        title: "Power prices",
        detail:
          "Wholesale clearing prices determine generation margin and the cost of hedging the retail book.",
      },
      {
        title: "Retail customer count",
        detail:
          "Each customer added is a contracted margin, provided the supply behind it is priced correctly.",
      },
      {
        title: "Storage economics",
        detail:
          "Batteries earn the spread between cheap and expensive hours, which widens as renewable penetration grows.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is unusually volatile for a utility. Operating income was negative $1.51B in FY2021 and negative $1.18B in FY2022, then positive $2.66B, $4.08B and $1.91B. Two loss years followed by three profitable ones, in a business whose assets did not change much, is a statement about hedging and price rather than about operations.",
      "The quarterly pattern is just as sharp. Q1 FY25 lost $268M at a negative 2.8% operating margin; Q1 FY26 earned $1.03B at 30.0%. Revenue rose 17.3% between the two quarters, which cannot explain a 33-point margin swing. Weather, outage timing and the price of the hedges in place during each quarter can.",
      "Return on equity is 40.4% and return on invested capital is 11.4%. That gap is leverage rather than superior economics: with $19.2B of net debt in front of a comparatively small equity base, the return on equity is amplified. ROIC is the better comparison against other generators.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $2.25B over the trailing period, an 11.9% margin, and the shares trade at 18.6x that figure for a 5.4% yield. The annual history is more uneven: negative $1.24B and negative $816M in FY2021 and FY2022, then $3.78B, $2.48B and $1.32B.",
      "The negative years are the ones to think about. A generator that loses cash in a bad price year has to fund the shortfall from the balance sheet, and Vistra carries $19.2B of net debt at 3.5x EBITDA. That is not excessive for the sector, but it means the company does not have unlimited room to absorb a repeat of FY2021 or FY2022.",
      "The dividend yield is 1.2%, so capital return is mostly a buyback decision rather than an income promise. That suits a business whose cash flow swings with the price of power.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $124.80 the shares trade at 18.9x trailing earnings, 11.3x EV/EBITDA, 3.2x sales and 18.6x free cash flow. Within the utility peer group only Duke Energy at 8.8x is cheaper on EBITDA, and Duke's trailing figures are distorted by an unusual quarter, which makes the comparison less clean than it looks.",
      "The 11.3x multiple sits well below NextEra at 26.9x and Southern at 25.2x. That is the discount the market applies to merchant risk. A regulated utility has a commission deciding its return; Vistra has a market deciding its price. The discount is the price of that uncertainty, and it widens or narrows with every move in forward power prices.",
    ],
  },
  analysts: {
    paragraphs: [
      "Price targets are covered by 21 analysts. The attributed mean is $202.67 and the range runs from $106.00 to $306.00. A range that wide, spanning nearly three times from low to high, is a signal that the analysts are not modelling the same business.",
      "The estimate coverage is thinner than the target coverage. Next quarter has four analysts at $5.91B of revenue and $3.08 of EPS, and the quarter after has one analyst at $4.80B and $0.76. Current-year estimates come from six analysts and next year from five.",
      "A single analyst is not a consensus. When the estimate base is that thin, the average is closer to one person's model than to a market view, and the reader should weight it accordingly.",
    ],
  },
  risks: {
    intro:
      "Vistra's risks sit at the intersection of commodity prices, contract hedging and a leveraged balance sheet. The assets are good; the question is what happens when the hedges and the market disagree.",
    items: [
      {
        title: "Wholesale power prices",
        severity: "High",
        detail:
          "Generation margin is a price spread. A fall in clearing prices reduces it directly, and the retail book only partly offsets it.",
        watch: "Realised power price, open position disclosure and forward price curves in each market.",
      },
      {
        title: "Hedging and position risk",
        severity: "High",
        detail:
          "A retailer that has sold fixed-price contracts and not bought enough power is short the market. The loss years in FY2021 and FY2022 show what a mismatch can do.",
        watch: "Hedge ratios, mark-to-market on derivatives and the maturity of the hedging book.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $19.2B at 3.5x EBITDA leaves limited room for a repeat of a cash-negative year without asset sales or equity issuance.",
        watch: "Net debt to EBITDA, maturity schedule and credit rating.",
      },
      {
        title: "Weather",
        severity: "Medium",
        detail:
          "Heating and cooling demand drive volumes and prices at the same time, so a mild season hits revenue and margin together.",
        watch: "Degree days against normal, and weather-normalised retail volumes.",
      },
      {
        title: "Market design and regulation",
        severity: "Medium",
        detail:
          "Capacity markets, bid caps and state policies determine how generators are paid for being available, not just for producing.",
        watch: "Capacity auction results and state-level market reform proposals.",
      },
    ],
    watchlist: [
      {
        title: "Retail gross margin per customer",
        detail:
          "Shows whether the retail book is earning a real spread or just passing power through.",
      },
      {
        title: "Hedge position",
        detail:
          "The single most important disclosure for understanding how much of next year is already locked in.",
      },
      {
        title: "Free cash flow after capex",
        detail:
          "The measure that determines whether the buyback and the dividend are funded from operations.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Vistra is an integrated competitive power business with a large fleet, a large retail book and a leveraged balance sheet. Revenue of $19.0B, an 18.8% operating margin and $2.25B of free cash flow describe a business that works when the hedges and the market agree.",
      "The five-year record shows how much can go wrong and right inside that model. Two loss years followed by three profitable ones, with the same assets in place, is the clearest possible illustration that the earnings are a function of price and position rather than of operational quality.",
      "The 11.3x EV/EBITDA multiple is the market's attempt to price that uncertainty. Whether it is enough depends on how much of the fleet's output is contracted and at what price, which is disclosed but rarely read.",
    ],
    questions: [
      "What share of next year's expected generation is hedged, and at what price?",
      "How much of the retail book is fixed-price, and how is it supplied?",
      "What happens to free cash flow in a repeat of FY2022?",
      "Is the battery storage pipeline earning a contract-like return or taking merchant risk?",
    ],
  },
};
