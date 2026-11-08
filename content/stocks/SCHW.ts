import type { StockStory } from "./types";

export const SCHW: StockStory = {
  ticker: "SCHW",
  kicker: "Brokerage and banking · Retail investors and advisers",
  title: "Schwab makes its money on the cash clients leave behind",
  dek: "The brokerage is cheap by design. The profit comes from sweeping client cash into the bank, lending it out and earning a spread, plus asset-management and advice fees. That makes Schwab a rate-sensitive deposit franchise wearing a fintech interface.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $27.1B, up 18.1%, and the latest quarter reached $7.17B with a 52.7% operating margin.",
    "Operating margin is 51.0% and net margin is 39.3%, unusually high for a business with a bank inside it.",
    "Return on equity is 20.7% and free cash flow is $11.7B, a 43.2% margin.",
    "At $91.49 the shares trade at 15.6x trailing earnings, a premium to JPMorgan at 13.5x and Bank of America at 10.6x.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/316709/000031670926000009/schw-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000316709&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Charles Schwab serves two kinds of customer. Investor Services looks after individual investors who want a brokerage account, retirement plan or advice. Advisor Services looks after independent registered investment advisers who custody their clients' assets at Schwab. Both segments gather assets, and both generate revenue from the cash and securities those assets produce.",
      "The business model is deliberately asymmetric. Trading is cheap and index funds are cheap, which attracts assets. The money is made on the cash sweep: client cash is moved into Schwab's bank, invested in short-term securities and loans, and earns a spread over what the client is paid. Asset-management and advice fees add a second, more recurring stream.",
      "Trailing revenue of $27.1B is 18.1% higher than a year earlier, and the latest quarter reached $7.17B with a 52.7% operating margin. Return on equity is 20.7%. At $91.49 the equity is worth $165.9B, or 15.6x trailing earnings. The one-year return is negative 1.6% while the five-year return is 19.8%, a gap that reflects how much of the story depends on interest rates.",
    ],
    quote:
      "Schwab's customer is not charged much for the account. The account is the funnel through which the customer's idle cash reaches the bank.",
  },
  whatItDoes: {
    paragraphs: [
      "Investor Services includes self-directed brokerage, retirement accounts, managed portfolios and advice. The typical customer holds a mix of funds, ETFs and individual securities, and keeps some cash in a sweep account. Schwab earns asset-management fees on its own funds, advice fees on managed accounts, and net interest income on the cash and margin loans.",
      "Advisor Services is the custody business for independent advisers. Schwab holds the assets, executes trades, provides reporting and technology, and earns fees from the adviser's clients. It is a business-to-business channel with stickier relationships and larger balances than the retail segment, and it gives Schwab a distribution network it does not have to build.",
      "The bank is the hidden engine. Client cash is deposited at Schwab Bank, which invests in short-term securities and a portfolio of loans, including mortgages and margin loans. That balance sheet is what turns a low-fee brokerage into a high-margin business. It also introduces interest-rate risk and regulatory capital requirements that a pure broker would not have.",
    ],
    bullets: [
      {
        title: "Investor Services",
        detail:
          "Retail brokerage, retirement and advice. The asset-gathering funnel.",
      },
      {
        title: "Advisor Services",
        detail:
          "Custody and technology for independent advisers. Sticky, large-balance relationships.",
      },
      {
        title: "Schwab Bank",
        detail:
          "Client cash, short-term investments and loans. The spread engine behind the margin.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Net interest income is the largest revenue line. Schwab pays clients a rate on sweep cash, invests the balances at market rates, and keeps the difference. When short-term rates rise, the spread widens — until clients notice and move cash into higher-yielding alternatives such as money-market funds or Treasury bills. That behaviour is called cash sorting, and it is the single most important variable in the model.",
      "Asset-management and administration fees are charged on mutual funds, ETFs and advised portfolios. They are tied to asset levels, so they rise with markets and fall in a drawdown. Trading revenue is small because commissions are low, and it is volatile because it depends on retail activity. Advice fees are growing as more clients move into managed accounts.",
      "The cost structure is largely fixed: technology, service centres, compliance and marketing. Once the platform is built, additional assets are cheap to service, which is why the operating margin can exceed 50%. The catch is that the bank balance sheet must be funded and capitalised, so the business cannot scale infinitely without equity.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $18.52B in FY2021 to $23.92B in FY2025, with a dip to $18.84B in FY2023 when clients sorted cash and rates were volatile. The trailing $27.06B extends the recovery. This is not a smooth compounder: it is a spread business whose revenue moves with rates and client cash behaviour.",
      "Consensus estimates call for $28.10B of revenue and $6.45 of EPS this fiscal year, then $31.63B and $7.80 next year. The step up to $7.80 is meaningful and assumes net interest income recovers and asset levels hold. That is a real acceleration from the trailing rate.",
      "The durable drivers are asset gathering, retirement flows and the growth of advisory relationships. The brakes are falling short-term rates, clients moving cash into higher-yielding products, a market decline that reduces asset-based fees, and price competition from zero-fee brokers. The first two matter most because net interest income is the largest line.",
    ],
    bullets: [
      {
        title: "Client cash and rates",
        detail:
          "Net interest income rises with rates and falls when clients sort cash into money funds.",
      },
      {
        title: "Asset gathering",
        detail:
          "More accounts and more assets produce more advice and administration fees.",
      },
      {
        title: "Adviser custody",
        detail:
          "Independent advisers bring sticky balances and a business-to-business distribution channel.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 51.0%, net margin is 39.3% and diluted EPS is $5.85. Return on equity is 20.7%. Those are strong numbers for a company that owns a bank, and they reflect a funding base that is cheaper than wholesale borrowing and a fee base that requires little capital.",
      "The annual record shows revenue of $18.52B, $20.76B, $18.84B, $19.61B and $23.92B, with net income of $5.86B, $7.18B, $5.07B, $5.94B and $8.85B. The FY2023 dip is the clearest evidence of rate sensitivity: revenue fell even as client assets grew, because cash sorting and funding costs compressed the spread.",
      "The quarterly series has been improving. Operating margin rose from 47.9% in Q2 FY25 to 52.7% in Q3 FY26, and EPS rose from $1.08 to $1.62. That is a recovery from a period of deposit repricing, not a permanent new margin level.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $11.70B on $27.06B of revenue, a 43.2% margin. For a broker-bank, cash flow is a noisy measure because client cash, loan growth and securities purchases all move through the balance sheet. The figure is useful as a check on earnings quality, but the bank's capital and liquidity are more important.",
      "The relevant measures are the bank's capital ratio, the duration of the investment portfolio and the loan-to-deposit ratio. A long-duration bond portfolio can produce paper losses when rates rise and force the bank to hold capital against them. A high loan-to-deposit ratio leaves less liquidity if clients withdraw cash. Neither is visible in the free-cash-flow line.",
      "Capital return is a mix of dividends and buybacks. Schwab has historically returned a large share of earnings, but the bank subsidiary must meet its own capital requirements, and the parent cannot freely upstream cash in a stress scenario. That constraint is why the buyback can slow even when consolidated earnings look fine.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $91.49, Schwab trades at 15.6x trailing earnings, 10.9x EV/EBITDA, 6.1x sales and 14.2x free cash flow. Bank of America is the cheapest of the large banks at 10.6x earnings and 7.9x EV/EBITDA, while JPMorgan trades at 13.5x and 9.3x and Morgan Stanley at 13.9x and 9.3x. The premium to the banks reflects the fee-based asset base and the absence of commercial credit risk.",
      "The right frame is a sum of two parts: a brokerage and asset-management fee stream, and a bank spread business. The fee stream deserves a market multiple; the bank deserves a book-value-based multiple. The consolidated P/E blends them and can hide which one is driving the current earnings.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 82-to-147 range is unusually wide, which reflects genuine disagreement about the path of rates and client cash.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-two analysts contribute to the attributed consensus, with a mean target of $116.86 and a range of $82.00 to $147.00. The low end is below the latest close, which is a signal that some contributors expect rate cuts or further cash sorting to pressure earnings.",
      "Estimates call for $28.10B of revenue and $6.45 of EPS this fiscal year, then $31.63B and $7.80 next year. The EPS estimate rises well above the trailing rate, and it depends on net interest income recovering rather than merely stabilising.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and the wide dispersion is more informative than the average for a rate-sensitive business.",
    ],
  },
  risks: {
    intro:
      "Schwab's risks are concentrated in the bank: the cost of client cash, the duration of the investment portfolio and the capital rules that govern the subsidiary. The brokerage franchise is strong; the spread is the fragile part.",
    items: [
      {
        title: "Cash sorting",
        severity: "High",
        detail:
          "Clients can move sweep cash into money-market funds or Treasuries when rates are attractive. That reduces the low-cost deposit base and compresses net interest income.",
        watch:
          "Client cash as a share of assets and the mix between sweep deposits and money funds.",
      },
      {
        title: "Interest-rate and duration risk",
        severity: "High",
        detail:
          "The bank invests client cash in securities. Rising rates reduce the market value of a long-duration portfolio and can force capital to be held against it.",
        watch:
          "Portfolio duration, unrealised losses and the bank's capital ratio.",
      },
      {
        title: "Market levels",
        severity: "Medium",
        detail:
          "Asset-management and advice fees are charged on asset values. A bear market reduces revenue even if clients stay.",
        watch: "Client assets, net new assets and fee revenue.",
      },
      {
        title: "Price competition",
        severity: "Medium",
        detail:
          "Zero-fee trading and cheap index funds are commodity products. Competitors can match price, so Schwab must differentiate on service and advice.",
        watch: "Net new accounts and the growth of advised assets.",
      },
      {
        title: "Regulation and capital requirements",
        severity: "Medium",
        detail:
          "Bank capital and liquidity rules constrain how much cash the parent can return and how the bank invests client deposits.",
        watch: "Bank subsidiary capital ratios and stress-test results.",
      },
    ],
    watchlist: [
      {
        title: "Net interest income",
        detail:
          "The largest revenue line and the most sensitive to rates and cash sorting.",
      },
      {
        title: "Client cash mix",
        detail:
          "The share of client assets held in low-cost sweep deposits versus higher-yielding alternatives.",
      },
      {
        title: "Net new assets",
        detail:
          "The organic growth measure that shows whether the franchise is winning accounts.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Schwab is a low-cost brokerage attached to a rate-sensitive bank. The 51.0% operating margin, 39.3% net margin and 20.7% return on equity are strong, but they depend on client cash staying in low-cost sweep accounts.",
      "The teaching point is that a brokerage is not automatically an asset-light business. When the broker owns a bank, deposits and securities become part of the operating model, and free cash flow can mislead. Net interest income, client cash mix and capital ratios are the right instruments.",
      "The open questions are how much of the earnings base is rate-driven, how quickly clients move cash when alternatives yield more, and whether asset gathering can outrun the spread compression.",
    ],
    questions: [
      "What share of revenue is net interest income versus fees?",
      "How much client cash sits in sweep deposits rather than money-market funds?",
      "What is the duration of the bank's investment portfolio?",
      "Can net new assets grow fast enough to offset a lower spread?",
    ],
  },
};
