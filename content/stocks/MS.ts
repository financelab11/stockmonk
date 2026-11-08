import type { StockStory } from "./types";

export const MS: StockStory = {
  ticker: "MS",
  kicker: "Investment banks · Wealth management and institutional securities",
  title: "Morgan Stanley's wealth arm is the ballast under the trading floor",
  dek: "The firm pairs a cyclical institutional-securities business with fee-based wealth management. That mix explains why its earnings are less volatile than a pure investment bank's, and why the market pays a higher multiple for them.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $80.2B, up 16.2%, with the latest quarter at $20.34B.",
    "Return on equity is 17.4% and the operating margin is 33.2%.",
    "Wealth-management fees tied to client assets cushion the swings in trading and underwriting.",
    "At $181.44 the shares trade at 13.9x trailing earnings, a premium to Goldman Sachs at 11.3x.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/895421/000089542126000086/ms-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000895421&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Morgan Stanley is two businesses sharing one brand. Institutional Securities advises on mergers, underwrites securities, trades and finances clients — the classic investment bank. Wealth Management manages money for individuals, families and corporate employees, and earns fees on the assets it looks after. The second business is steadier and far less capital-hungry.",
      "That mix is the whole investment case. Trailing revenue of $80.2B is 16.2% higher than a year earlier, and the latest quarter grew 11.6%. Return on equity is 17.4%, which is strong for a firm that has to hold capital against trading inventory and client lending. The wealth fees do not eliminate the cycle, but they shorten the troughs.",
      "At $181.44 the equity is worth $285.0B, or 13.9x trailing earnings. The shares sit 36% of the way up a 52-week range of $152.80 to $232.25. A five-year holder has made 112.2%; a one-year holder 13.5%. The premium multiple is the market's way of saying it believes the wealth mix deserves a better rating than pure capital-markets exposure.",
    ],
    quote:
      "Wealth management is a subscription business attached to a volatile one. The subscription does not grow as fast in a boom, but it keeps paying in a bust.",
  },
  whatItDoes: {
    paragraphs: [
      "Institutional Securities covers advisory, equity and debt underwriting, sales and trading, and corporate lending. Its customers are corporations, governments, sovereign funds and institutional investors. Revenue depends on deal activity, market volatility and the firm's appetite for risk. This is the division that produces the headline swings.",
      "Wealth Management serves individual investors through financial advisers, self-directed channels and workplace stock-plan services. It earns asset-based fees, trailing commissions, and net interest income from lending against client portfolios and providing mortgages. The client assets are the asset base; the advisers are the distribution. Revenue is recurring as long as markets hold up and clients stay.",
      "Investment Management runs mutual funds, separately managed accounts and alternative strategies for institutions and individuals. It is the smallest leg, but it adds fee revenue that is not tied to trading flow and gives the wealth channel products to sell. The three divisions reinforce each other: institutional research feeds wealth advisers, and wealth distribution helps Investment Management gather assets.",
    ],
    bullets: [
      {
        title: "Institutional Securities",
        detail:
          "Advisory, underwriting, trading and client financing. Cyclical and balance-sheet intensive.",
      },
      {
        title: "Wealth Management",
        detail:
          "Asset-based fees, advisory relationships and lending to clients. The recurring core.",
      },
      {
        title: "Investment Management",
        detail:
          "Funds and separate accounts for institutions and individuals. Fee revenue with less trading risk.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The firm charges in three ways. Asset-based fees are a percentage of client assets, so they rise and fall with markets and net new money. Transaction and advisory fees are paid per deal or per trade. Net interest income comes from lending to clients and from the spread between what the firm pays for funding and what it earns on those loans.",
      "The economics differ sharply by division. A dollar of wealth fee revenue requires advisers, technology and compliance but almost no balance sheet, so it earns a high return on capital. A dollar of trading revenue may require inventory, collateral and regulatory capital, so the same revenue produces a lower return. The consolidated ROE is a blend of the two.",
      "The cost base is people and technology. Advisers are often paid a percentage of the revenue they generate, which makes part of the cost variable. Technology and regulatory spending are fixed and rising. Operating leverage therefore depends on revenue growth outrunning the platform cost, which is easier in wealth than in institutional securities.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue fell from $59.76B in FY2021 to $53.67B in FY2022 and $54.14B in FY2023, then recovered to $61.76B in FY2024 and $70.64B in FY2025. The trailing $80.2B extends the recovery. This is a cycle, not a straight line, and the shape is driven by deal activity, trading conditions and asset levels.",
      "Third-party estimates call for $82.47B of revenue and $12.91 of EPS this fiscal year, then $86.64B and $13.69 next year. The implied growth is slower than the trailing rate, which is normal after a strong recovery. It also assumes wealth fees keep compounding while institutional activity normalises.",
      "The durable growth driver is asset gathering: more client assets produce more fee revenue at a high incremental margin. The cyclical drivers are advisory and underwriting, which depend on board confidence, and trading, which depends on volatility. A market decline hits the first driver directly because fees are charged on asset values.",
    ],
    bullets: [
      {
        title: "Client assets",
        detail:
          "Wealth fees scale with assets under management and net new money. Market levels matter as much as inflows.",
      },
      {
        title: "Deal activity",
        detail:
          "Advisory and underwriting recover when corporations are willing to transact.",
      },
      {
        title: "Client lending",
        detail:
          "Margin loans and mortgages against portfolios add net interest income and deepen the wealth relationship.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 33.2%, net margin is 25.5% and diluted EPS is $12.60. Return on equity of 17.4% is the number that matters most: it says the firm earned a real spread over its cost of equity while carrying the capital required by the institutional business.",
      "The quarterly path was remarkably steady through FY2026. Revenue went from $20.58B in Q1 to $21.35B in Q2 and $20.34B in Q3; operating margin moved from 34.1% to 34.4% to 31.9%; EPS went from $3.43 to $3.46 to $3.03. The third quarter was weaker, but not the kind of collapse a pure trading house can post.",
      "FY2025 itself produced $70.64B of revenue, $21.95B of operating income and $16.86B of net income. The gap between FY2021's $59.76B and FY2025's $70.64B is the combined effect of asset growth and a better deal environment over the period. Neither should be extrapolated as a trend line.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is reported as not available, which is reasonable for a securities firm. Client lending, trading inventory, secured financing and deposit-like balances all move through the balance sheet, and a conventional free-cash-flow calculation would conflate operating activity with financing decisions.",
      "The relevant measures are capital, liquidity and the quality of the assets. CET1 and the leverage ratio determine how much balance sheet the firm can deploy and how much it can return. Liquidity coverage matters because wholesale funding can disappear quickly in a stress event. The allowance for credit losses on the client lending book is small relative to a commercial bank's but still worth watching.",
      "Capital return is set through the annual stress test and the capital plan. Buybacks are the main lever for per-share growth when the share count is reduced at a sensible price. Dividends are modest. The cash-flow statement is not the place to look for either.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $181.44, Morgan Stanley trades at 13.9x trailing earnings, 9.3x EV/EBITDA and 3.6x sales. Goldman Sachs is at 11.3x and 8.3x, JPMorgan at 13.5x and 9.3x, and Bank of America at 10.6x and 7.9x. The premium to Goldman is the wealth-management premium; the parity with JPMorgan is a reminder that scale and balance-sheet strength also command a multiple.",
      "The useful cross-check is price to book against sustainable ROE. A 17.4% return supports a premium to tangible book if it can be earned through a downturn. The risk is that the current ROE is flattered by strong markets, which lift wealth fees and trading revenue at the same time.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 13.9x multiple is a question about durability rather than a verdict on value.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus, with a mean target of $211.50 and a range of $185.00 to $262.00. The range is narrower than Goldman's, which fits a business with a larger recurring revenue base.",
      "Estimates call for $82.47B of revenue and $12.91 of EPS this fiscal year, then $86.64B and $13.69 next year. The EPS estimate rises only modestly, slower than the trailing rate and consistent with a normalisation in capital-markets activity.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and the estimate direction is more useful than the average because it shows what the consensus expects from the wealth mix.",
    ],
  },
  risks: {
    intro:
      "Morgan Stanley's risks split between market-sensitive revenue and the operating execution of a large wealth franchise. The balance sheet is strong; the earnings stream is not immune to asset prices.",
    items: [
      {
        title: "Market levels and wealth fees",
        severity: "High",
        detail:
          "Asset-based fees fall when client portfolios fall, even if the number of clients and advisers is unchanged. A sustained bear market would hit revenue with a lag.",
        watch:
          "Client assets, fee rate and net new assets in Wealth Management.",
      },
      {
        title: "Capital-markets cyclicality",
        severity: "High",
        detail:
          "Advisory and underwriting revenue can halve in a quiet year. The institutional division carries most of the fixed cost.",
        watch:
          "Investment-banking fee backlog and equity/debt issuance volumes.",
      },
      {
        title: "Trading and counterparty risk",
        severity: "Medium",
        detail:
          "Market-making and client financing expose the firm to adverse moves and to counterparty defaults.",
        watch:
          "Value at risk, counterparty exposures and trading revenue dispersion.",
      },
      {
        title: "Adviser retention and productivity",
        severity: "Medium",
        detail:
          "Wealth revenue walks out of the door with the advisers. Recruiting and retaining them is expensive and competitive.",
        watch: "Adviser headcount, attrition and revenue per adviser.",
      },
      {
        title: "Regulation and capital requirements",
        severity: "Medium",
        detail:
          "Capital and liquidity rules constrain how much balance sheet the institutional business can use and how much cash can be returned.",
        watch: "CET1, leverage ratio and stress-test results.",
      },
    ],
    watchlist: [
      {
        title: "Wealth-management fee revenue",
        detail:
          "The recurring core. Watch the fee rate as well as the asset level.",
      },
      {
        title: "Net new assets",
        detail:
          "Inflows show whether the franchise is gaining share or merely benefiting from markets.",
      },
      {
        title: "Compensation ratio",
        detail: "The main cost lever when institutional revenue slows.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Morgan Stanley is a capital-markets firm with a genuine recurring-revenue cushion. The 17.4% return on equity and 33.2% operating margin are good numbers, and the wealth business is the reason they are less volatile than a pure investment bank's.",
      "The teaching point is that revenue mix changes the quality of a multiple. Two firms can earn the same margin and deserve different P/Es if one has more recurring fees and less trading risk. Cash flow is not the right lens here; capital, liquidity and return on equity are.",
      "The unresolved questions are whether wealth fees can keep growing if markets stall, and whether the institutional business is gaining share or simply riding a strong cycle.",
    ],
    questions: [
      "What share of revenue is asset-based rather than transaction-based?",
      "How much of the recent client-asset growth came from markets versus net new money?",
      "Is the wealth fee rate holding as clients shift into cheaper products?",
      "What would a 20% market decline do to revenue and ROE?",
    ],
  },
};
