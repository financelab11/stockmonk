import type { StockStory } from "@/content/stocks/types";

export const MCX: StockStory = {
  ticker: "MCX",
  kicker: "Financials · Commodity exchange",
  title: "MCX sells access to a commodity market and keeps three-quarters of the fee",
  dek: "Revenue more than doubled to ₹30.6B on a 95.3% gross margin. The open question is how much of that volume is a permanent change and how much is a commodity cycle.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹30.57B, up 128.3%, with a 75.2% operating margin and a 55.9% net margin.",
    "FY2024 is the outlier: ₹6.84B of revenue produced only ₹63 Cr of operating income before the margin recovered.",
    "Reported free cash flow of ₹29.62B exceeds operating income, which means it includes member and settlement balances.",
    "Net cash is ₹45.11B, but that is a small fraction of the ₹905.31B market capitalisation.",
    "The shares trade at 50.3x earnings, 38.0x EV/EBITDA and 28.1x sales after an 87.1% one-year gain.",
  ],
  filingUrl: "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=MCX",
  irUrl: "https://www.mcxindia.com",
  bigPicture: {
    paragraphs: [
      "Multi Commodity Exchange is India's listed commodity derivatives exchange, incorporated in 2002 and based in Mumbai. It provides the electronic platform on which members trade futures and options in bullion, base metals, energy and agricultural commodities, publishes the iCOMDEX price indices, clears and settles the trades, and sells market data and membership access. Its customers are brokers who bring client orders, hedgers such as jewellers, metal fabricators and energy users, and proprietary traders.",
      "An exchange is one of the purest fixed-cost businesses that exists. The matching engine costs the same whether it processes a thousand contracts or a million, so almost every incremental rupee of volume reaches the operating line. That is why gross margin is 95.3% and operating margin 75.2%. Revenue was ₹30.57B on a trailing basis, up 128.3%, with a net margin of 55.9%.",
      "At ₹3,557 the market capitalisation is ₹905.31B, or 50.3x earnings of ₹70.55, 38.0x EV/EBITDA and 28.1x sales. The shares are 97% up a 52-week range of ₹1,865.50 to ₹3,604.80 and have gained 87.1% in the past year and 899.1% over five years.",
    ],
    quote:
      "Liquidity is the only real product an exchange has. Traders go where the order book is deep, and the order book stays deep only while the traders stay.",
  },
  whatItDoes: {
    paragraphs: [
      "The exchange runs three related functions: trading, clearing and settlement. Trading is the visible part, but the clearing house is what makes the market usable, because it stands between buyer and seller and stands behind settlement. Data feeds and membership subscriptions add a smaller, steadier revenue line that does not depend on daily volume.",
      "The product mix matters because commodities are not interchangeable. Bullion and energy contracts attract large, sophisticated participants and generate most of the turnover. Base metals serve industrial hedgers whose activity follows the manufacturing cycle. Agricultural contracts are politically sensitive, thinly traded and subject to frequent regulatory revision.",
      "The company employs 436 people. It also maintains alliances with overseas exchanges for cross-listing and knowledge sharing, which is useful for credibility but not a major revenue line. The real asset is the liquidity pool, and liquidity is self-reinforcing until it is not.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Transaction charges are levied on the value of contracts traded and are collected from members, who pass them to clients. Because the charge is a small percentage of a large notional value, revenue rises and falls with turnover in rupees rather than with the number of trades. A shift in the contract mix towards higher-value bullion or energy contracts raises revenue even if the trade count is flat.",
      "Membership and admission fees are annual and small relative to transactions. Data feed subscriptions are sold to brokers, analytics firms and media, and are priced per user or per feed. Clearing and settlement services earn fees on delivery and on the margin balances the exchange administers. Each of these lines is small on its own, but together they smooth the dependence on daily volume.",
      "The cost base is technology, people, regulatory compliance and the amortisation of the trading platform. Because there is no cost of goods, a revenue increase flows almost entirely to profit — and the reverse is equally true. FY2024 is the clearest example in the table: revenue of ₹6.84B produced operating income of only ₹63 Cr, a margin near zero, before the same business earned a 75.2% margin two years later. A cost step of that size in a 95% gross margin business is almost always a platform or technology change, and it shows how much operating leverage sits under the revenue line.",
    ],
    bullets: [
      {
        title: "Transaction charges",
        detail:
          "A small percentage of contract value, collected from members. The dominant line and the most sensitive to turnover.",
      },
      {
        title: "Membership and data",
        detail:
          "Annual member fees and per-user market data subscriptions. Smaller, contracted and independent of daily volume.",
      },
      {
        title: "Clearing and settlement",
        detail:
          "Fees on delivery and on the margin and settlement balances the exchange administers for its members.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 23.7% a year from ₹3.91B in FY2021 to ₹23.02B in FY2026, and the latest quarter grew 113.9%. The annual figures show that most of the growth came in the last two years: ₹11.13B in FY2025 and ₹23.02B in FY2026, after four years of moving between ₹3.67B and ₹6.84B. That is not a compounding curve; it is a step change.",
      "What caused the step is volume, not price. Transaction charges per contract have not risen by anything like 128%; the number and value of contracts traded have. Some of that is structural — commodity derivatives have become a larger part of Indian trading activity, and options on futures have widened participation. Some of it is cyclical, because commodity price volatility draws hedgers and speculators in equal measure.",
      "Third-party estimates expect ₹30.87B of revenue and ₹71.32 of EPS this fiscal year, then ₹35.89B and ₹83.60. Those numbers assume the new volume level holds and grows modestly, which is the central assumption in the whole story.",
    ],
  },
  performance: {
    paragraphs: [
      "The five-year earnings record is a series of regimes rather than a trend. Diluted EPS was ₹8.83, ₹5.63, ₹5.84, ₹3.26, ₹21.96 and ₹52.22. Operating income fell from ₹1.85B in FY2021 to ₹63 Cr in FY2024 and then rose to ₹16.42B in FY2026. No business with a 95% gross margin should produce that range unless the cost base or the revenue base is moving in jumps, and both were.",
      "The quarterly sequence shows the new regime clearly: operating margin 64.1%, 55.0%, 64.6%, 64.7%, 74.2%, 74.8%, 70.4% and 76.4%, with revenue rising from ₹2.91B to ₹8.00B. Return on equity is 44.4% and return on invested capital 71.0%. Those are exceptional returns, and they are earned on a capital base that is mostly cash and settlement balances rather than plant.",
    ],
  },
  cash: {
    paragraphs: [
      "Reported free cash flow was ₹29.62B, a 128.7% margin — larger than revenue and larger than operating income. That is the most important line in the table to read correctly. An exchange holds margins, settlement funds reserved for members, and member deposits, and movements in those balances pass through the cash flow statement without belonging to the company's earnings. A free cash flow above revenue is a sign that the statement includes client money, not that the business is printing cash beyond its profits.",
      "The balance sheet shows net cash of ₹45.11B, which is real and useful as a buffer, but it is only about 5% of the ₹905.31B market capitalisation. Unlike a depository or a registrar, the cash here does not support the valuation; the earnings do. Capital expenditure is modest because the platform is software, and the company has no meaningful debt to service.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 50.3x earnings, 38.0x EV/EBITDA, 28.1x sales and 30.6x free cash flow, with an FCF yield of 3.3%. The sales multiple is the one that stands out: a business with ₹30.57B of revenue is valued at ₹905.31B, which only makes sense if the 75% operating margin is treated as permanent.",
      "Among peers, Anand Rathi Wealth trades at 86.6x earnings and 87.2x EV/EBITDA, CDSL at 55.7x and 42.5x, KFin Technologies at 45.4x and 27.4x, CAMS at 35.0x and 23.1x, and Angel One at 26.4x and 11.1x. MCX sits in the upper half on earnings and near the top on sales, which reflects the market's view that an exchange with a liquidity moat deserves a premium to a broker or a registrar.",
      "The multiple assumes the step change in volume is durable. If the last two years were a commodity volatility event rather than a permanent increase in participation, the earnings base that supports a 50.3x multiple is smaller than it looks.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts cover the stock, with a mean target of ₹3,547.81 and a range of ₹2,825.00 to ₹4,055.00. The mean is essentially the current price of ₹3,557, which is unusual after an 87.1% one-year gain: the sell side has not extrapolated the move.",
      "Eleven analysts contribute to the current-year estimate of ₹30.87B of revenue and ₹71.32 of EPS, and thirteen to next year's ₹35.89B and ₹83.60. The near-quarter figures of ₹8.50B and ₹8.96B come from a single analyst each, so they carry little weight. The estimates imply low double-digit growth from here, a much slower rate than the trailing 128.3%, which is consistent with the idea that the base has stepped up and will now grow normally.",
    ],
  },
  risks: {
    intro:
      "MCX's risks are regulatory, competitive and cyclical, in that order. The platform is excellent; the rules it operates under are not in its control.",
    items: [
      {
        title: "Regulatory change",
        severity: "High",
        detail:
          "Contract design, margin rules, transaction taxes and permitted participants are all set by regulators and the government. A change to any of them can reduce turnover without warning.",
        watch:
          "Circulars affecting commodity derivatives and any change in the contract mix.",
      },
      {
        title: "Volume concentration",
        severity: "High",
        detail:
          "Bullion and energy contracts carry most of the turnover. A regulatory restriction or a loss of liquidity in one of them would hit revenue directly.",
        watch:
          "The commodity-wise volume and turnover disclosure each month.",
      },
      {
        title: "Commodity cycle",
        severity: "High",
        detail:
          "Volatility brings hedgers and speculators. A calm commodity market reduces the need to hedge and the appeal of trading.",
        watch:
          "Average daily turnover and the trend in transaction revenue per contract.",
      },
      {
        title: "Technology",
        severity: "Medium",
        detail:
          "FY2024 showed what a platform transition can do to margins: operating income fell to ₹63 Cr on ₹6.84B of revenue.",
        watch:
          "Technology costs, amortisation and any disclosure about platform changes.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 28.1x sales and 50.3x earnings, the price assumes the current volume level is permanent. A cyclical mean reversion would hit the multiple and the earnings together.",
        watch:
          "EV/sales against the growth in average daily turnover.",
      },
    ],
    watchlist: [
      {
        title: "Average daily turnover",
        detail:
          "The single driver of transaction revenue. Everything else is a rounding error.",
      },
      {
        title: "Contract mix",
        detail:
          "Bullion and energy versus agriculture determines revenue per trade and regulatory exposure.",
      },
      {
        title: "Operating margin",
        detail:
          "It has ranged from near zero to 76% in five years. That range is the risk.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "MCX is a high-quality platform business with a genuine liquidity moat, a 75.2% operating margin and a 71.0% return on invested capital. It has also just experienced the best two years in its history, and the share price has risen 899.1% over five years.",
      "The reported free cash flow of ₹29.62B should not be taken at face value. It exceeds revenue and operating income, which means it includes member and settlement balances. The company's own cash generation is strong but smaller, and the ₹45.11B net cash is a buffer rather than a valuation support.",
      "The investment question is whether commodity derivatives participation has permanently moved to a higher level or whether the last two years were a volatility cycle. At 28.1x sales, the market has already answered yes.",
    ],
    questions: [
      "How much of the revenue increase came from higher volumes versus a change in contract mix?",
      "What share of turnover comes from bullion and energy contracts?",
      "How much of the ₹29.62B free cash flow is member and settlement money?",
      "What would a reduction in permitted derivative participants do to turnover?",
    ],
  },
};
