import type { StockStory } from "./types";

export const ICE: StockStory = {
  ticker: "ICE",
  kicker:
    "Exchanges and financial infrastructure · Markets, data and mortgage technology",
  title:
    "ICE sells access to markets, and increasingly to the data those markets produce",
  dek: "Transaction fees from futures, energy and the New York Stock Exchange are only part of the story. Recurring data, connectivity and mortgage software make the revenue stickier, while $22.4B of net debt keeps the balance sheet in the argument.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $14.05B, up 12.1%, and the latest quarter grew 20.7%.",
    "Operating margin is 40.6% and net margin is 29.6%, with free cash flow of $5.3B.",
    "Return on equity is 13.9%, held back by $22.4B of net debt, or 3.1x EBITDA, and by goodwill from acquisitions.",
    "At $172.27 the shares trade at 23.1x trailing earnings and 16.3x EV/EBITDA.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1571949/000157194926000004/ice-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001571949&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Intercontinental Exchange runs regulated markets and the plumbing behind them. It operates futures exchanges in energy, agriculture and financial products, clearing houses that stand between buyers and sellers, and the New York Stock Exchange. It also sells market data, connectivity and analytics, and it owns mortgage-origination software used by US lenders.",
      "The mix matters. Trading and clearing fees rise and fall with volatility and open interest. Listings fees are tied to the IPO and capital-raising cycle. Data and connectivity revenue is subscription-like and renews annually. Mortgage software is tied to US home lending volumes, which are sensitive to rates. The result is a business with a cyclical top line and a large recurring base.",
      "Trailing revenue of $14.05B is 12.1% higher than a year earlier, and the latest quarter grew 20.7%. Operating margin is 40.6% and free cash flow is $5.28B, a 37.6% margin. At $172.27 the equity is worth $96.3B, or 23.1x trailing earnings. The shares sit 90% of the way up a 52-week range of $121.79 to $177.94.",
    ],
    quote:
      "An exchange is a marketplace with a moat: liquidity attracts liquidity. The data and software around the marketplace are what turn a trading venue into a subscription business.",
  },
  whatItDoes: {
    paragraphs: [
      "The exchanges business covers energy futures, agricultural commodities, interest-rate and equity-index derivatives, and cash equities through the NYSE. Customers are banks, trading firms, commodity merchants, asset managers and corporations hedging exposure. The exchange earns a fee per contract or per trade and, in some products, a fee for clearing and settlement.",
      "The data and connectivity business sells real-time and historical prices, reference data, analytics and the network connections that participants need to reach the markets. This is the recurring part of the franchise: exchanges own the official price, and anyone who needs it has to pay for it. Listings fees at the NYSE are tied to the number of listed companies and to corporate actions.",
      "The mortgage technology business sells origination, servicing and data products to US lenders. It is a software business with recurring subscriptions, but its volume is tied to mortgage originations, which fall when rates rise. That makes it a cycle within a cycle: the software renews, but the transaction-based revenue does not.",
    ],
    bullets: [
      {
        title: "Exchanges and clearing",
        detail:
          "Futures, energy, equities and listings. Fees scale with volume, volatility and open interest.",
      },
      {
        title: "Data and connectivity",
        detail:
          "Prices, reference data, analytics and network access. Recurring and high-margin.",
      },
      {
        title: "Mortgage technology",
        detail:
          "Origination and servicing software for US lenders. Subscription revenue tied to housing activity.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Exchange fees are charged per contract, per trade or per message. The exchange does not take a view on the market; it takes a small toll on every transaction and on the data that describes it. That is a high-incremental-margin model because the matching engine and the clearing house are fixed costs that can handle more volume without much additional spending.",
      "Data and connectivity revenue is priced by subscription and by the number of users or connections. It is less volatile than trading volume because customers need the data whether or not they trade that day. The exchange is the authoritative source for its own prices, which gives it pricing power that a generic data vendor does not have.",
      "The mortgage software business has a different economics: implementation, subscription and per-transaction fees, with a cost base of engineers and support staff. It is less capital-intensive than an exchange but more exposed to the housing cycle. The consolidated margin is a blend of a very high-margin exchange and a lower-margin software business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $9.17B in FY2021 to $12.64B in FY2025, with the trailing figure at $14.05B. The growth came from higher trading volumes, subscription data growth, listings and acquisitions. The latest quarter's 20.7% growth is unusually strong and likely reflects a combination of volatility and acquired revenue.",
      "Consensus estimates call for $11.11B of revenue and $8.18 of EPS this fiscal year, then $11.82B and $8.94 next year. The revenue estimate is below the trailing figure, which suggests a different presentation basis; the EPS path implies modest growth and is the cleaner comparison.",
      "The durable drivers are open interest in energy and rates, the demand for data and connectivity, and the secular growth of mortgage software. The brakes are low volatility, a freeze in listings, a mortgage-market slowdown and regulatory limits on exchange fees. The first two are the most important for the trading business.",
    ],
    bullets: [
      {
        title: "Volatility and open interest",
        detail:
          "Trading revenue rises when participants hedge and when open interest grows.",
      },
      {
        title: "Data subscriptions",
        detail: "Recurring revenue that grows with users, products and price.",
      },
      {
        title: "Mortgage and listings cycles",
        detail:
          "Two transaction-driven businesses that depend on housing and capital-raising activity.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 40.6%, net margin is 29.6% and diluted EPS is $7.33. Return on equity is 13.9% and return on invested capital is 8.6%. The gap between ROE and ROIC is the signature of an acquisitive company: goodwill and debt sit in invested capital, so the return on the total capital employed looks lower than the return on equity.",
      "The annual record shows steady progress: revenue of $9.17B, $9.64B, $9.90B, $11.76B and $12.64B, with operating income rising from $3.45B to $4.93B. FY2022 net income of $1.45B was depressed by items below the operating line, while operating income held up. That is a reminder to read the operating line separately from the net line.",
      "The quarterly series shows the volatility of the trading business. Operating margin ranged from 38.5% to 45.4% across the last six quarters, and EPS moved from $1.42 to $2.48 and back to $1.67. The Q1 FY26 spike is not a new baseline; it reflects a quarter with unusually strong activity.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $5.28B on $14.05B of revenue, a 37.6% margin. Capital expenditure is moderate: the matching engines, data centres and software are expensive to build but not as capital-intensive as a railroad or a utility. The high cash conversion supports the dividend and the debt service.",
      "The balance sheet carries $22.37B of net debt, or 3.1x EBITDA. That is the highest leverage in this group of financials and a direct consequence of acquisitions. It is manageable while cash flow is stable, but it limits flexibility if a large acquisition or a downturn arrives at the same time. Interest cover is not reported, which makes the debt load harder to assess.",
      "Capital return is a mix of dividends and buybacks, funded by free cash flow after debt service. The priority is usually to reduce leverage after a deal and then return excess cash. A reader should watch the net debt to EBITDA ratio as closely as the earnings growth.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $172.27, ICE trades at 23.1x trailing earnings, 16.3x EV/EBITDA, 8.4x sales and 18.2x free cash flow. The peer table puts Visa at 37.1x earnings, Mastercard at 33.5x and the banks between 10.6x and 13.9x. ICE sits in the middle: a higher-quality earnings stream than a bank, but a slower growth rate than a payment network.",
      "The EV/EBITDA multiple is more informative than the P/E here because the company carries significant debt. A 16.3x EV/EBITDA on a business with recurring data revenue and a cyclical trading arm is a bet that the recurring mix keeps growing. The free-cash-flow yield of 5.5% is a useful cross-check.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 167-to-245 range reflects disagreement about volatility, mortgage volumes and the pace of deleveraging.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifteen analysts contribute to the attributed consensus, with a mean target of $192.20 and a range of $167.00 to $245.00. The low end is below the latest close, which is a meaningful signal in a stock that has already run.",
      "Estimates call for $8.18 of EPS this fiscal year and $8.94 next year, with 15 analysts contributing to each. The revenue estimates are on a different basis from the trailing figure, so the EPS path is the more reliable comparison. The implied growth is modest and consistent with a mature exchange.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for an exchange the estimate dispersion is often driven by trading-volume assumptions rather than by the franchise.",
    ],
  },
  risks: {
    intro:
      "ICE's risks combine trading-volume cyclicality, mortgage-market exposure and a leveraged balance sheet. The franchise is strong, but the debt load means there is less room for error than at a net-cash peer.",
    items: [
      {
        title: "Low volatility and trading volumes",
        severity: "High",
        detail:
          "Exchange revenue falls when clients have less reason to hedge or trade. Quiet markets reduce fees without reducing the cost base.",
        watch: "Open interest, average daily volume and volatility indices.",
      },
      {
        title: "Leverage and acquisition integration",
        severity: "High",
        detail:
          "$22.4B of net debt, or 3.1x EBITDA, limits flexibility. A large acquisition or a downturn could strain the balance sheet.",
        watch:
          "Net debt to EBITDA, interest cover and the pace of deleveraging.",
      },
      {
        title: "Mortgage-market cycle",
        severity: "Medium",
        detail:
          "The mortgage technology business is tied to US origination volumes, which fall when rates rise.",
        watch: "Mortgage origination volumes and software revenue growth.",
      },
      {
        title: "Regulation of exchanges and data",
        severity: "Medium",
        detail:
          "Regulators can change market structure, fee rules or data-pricing practices. Exchanges are utilities with public responsibilities.",
        watch:
          "Regulatory consultations, market-structure reviews and data-fee rules.",
      },
      {
        title: "Competition for listings and liquidity",
        severity: "Medium",
        detail:
          "Companies can list on other venues, and trading can migrate to competing platforms. Liquidity is sticky but not permanent.",
        watch:
          "Listings pipeline, market share by product and average daily volume.",
      },
    ],
    watchlist: [
      {
        title: "Recurring revenue share",
        detail:
          "The data and software mix determines how much of the revenue is subscription-like.",
      },
      {
        title: "Net debt to EBITDA",
        detail: "The constraint on buybacks, acquisitions and resilience.",
      },
      {
        title: "Open interest",
        detail:
          "A better long-run indicator of exchange activity than a single quarter's volume.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ICE is a diversified market infrastructure company: exchanges, clearing, data and mortgage software. The 40.6% operating margin and 37.6% free-cash-flow margin are strong, but the 13.9% return on equity is held back by debt and goodwill.",
      "The teaching point is that revenue quality varies within one company. Trading fees are cyclical; data subscriptions are recurring; mortgage software is tied to housing. A single consolidated multiple hides those differences, and the debt load changes the risk profile relative to a net-cash peer.",
      "The open questions are how much of revenue is recurring, how quickly the company can deleverage, and whether trading volumes are structurally higher or simply elevated.",
    ],
    questions: [
      "What share of revenue is recurring data and software versus trading fees?",
      "How much does net income fall if average daily volume drops 20%?",
      "Is the mortgage technology business gaining share or just riding housing volumes?",
      "What is the plan to bring leverage down?",
    ],
  },
};
