import type { StockStory } from "./types";

export const SCHW: StockStory = {
  "ticker": "SCHW",
  "kicker": "Brokerage and banking · Retail investors and advisers",
  "title": "Schwab makes its money on the cash clients leave behind",
  "dek": "The brokerage is cheap by design. The profit comes from sweeping client cash into the bank, lending it out and earning a spread, plus asset-management and advice fees. That makes Schwab a rate-sensitive deposit franchise wearing a fintech interface.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue: $27.1B trailing twelve months, +18.1% year over year.",
    "Profitability: 51.0% operating margin and 39.3% net margin.",
    "Cash: $11.7B free cash flow, a 43.2% margin.",
    "Scorecard: 66/100 average percentile across the factor screens."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/316709/000031670926000009/schw-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000316709&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Charles Schwab Corporation generated $27.1B of revenue over the last twelve months, +18.1% versus the prior year. The earnings cycle is driven by net interest income, credit costs, capital markets activity and capital returns.",
      "The latest reported quarter was Q3 FY26, with $7.2B of revenue and an operating margin of 52.7%. The stock closed at $91.84 on 2026-11-17, giving a market capitalization of $158.5B.",
      "The shares sit 26% of the way up their 52-week range ($83.96 to $114.53). The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock."
    ],
    "quote": "Schwab's customer is not charged much for the account. The account is the funnel through which the customer's idle cash reaches the bank."
  },
  "whatItDoes": {
    "paragraphs": [
      "Investor Services includes self-directed brokerage, retirement accounts, managed portfolios and advice. The typical customer holds a mix of funds, ETFs and individual securities, and keeps some cash in a sweep account. Schwab earns asset-management fees on its own funds, advice fees on managed accounts, and net interest income on the cash and margin loans.",
      "Advisor Services is the custody business for independent advisers. Schwab holds the assets, executes trades, provides reporting and technology, and earns fees from the adviser's clients. It is a business-to-business channel with stickier relationships and larger balances than the retail segment, and it gives Schwab a distribution network it does not have to build.",
      "The bank is the hidden engine. Client cash is deposited at Schwab Bank, which invests in short-term securities and a portfolio of loans, including mortgages and margin loans. That balance sheet is what turns a low-fee brokerage into a high-margin business. It also introduces interest-rate risk and regulatory capital requirements that a pure broker would not have."
    ],
    "bullets": [
      {
        "title": "Investor Services",
        "detail": "Retail brokerage, retirement and advice. The asset-gathering funnel."
      },
      {
        "title": "Advisor Services",
        "detail": "Custody and technology for independent advisers. Sticky, large-balance relationships."
      },
      {
        "title": "Schwab Bank",
        "detail": "Client cash, short-term investments and loans. The spread engine behind the margin."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Net interest income is the largest revenue line. Schwab pays clients a rate on sweep cash, invests the balances at market rates, and keeps the difference. When short-term rates rise, the spread widens — until clients notice and move cash into higher-yielding alternatives such as money-market funds or Treasury bills. That behaviour is called cash sorting, and it is the single most important variable in the model.",
      "Asset-management and administration fees are charged on mutual funds, ETFs and advised portfolios. They are tied to asset levels, so they rise with markets and fall in a drawdown. Trading revenue is small because commissions are low, and it is volatile because it depends on retail activity. Advice fees are growing as more clients move into managed accounts.",
      "The cost structure is largely fixed: technology, service centres, compliance and marketing. Once the platform is built, additional assets are cheap to service, which is why the operating margin can exceed 50%. The catch is that the bank balance sheet must be funded and capitalised, so the business cannot scale infinitely without equity."
    ]
  },
  "growth": {
    "paragraphs": [
      "Revenue compounded at 14.3% a year across the fiscal years in the dataset, and the latest quarter changed +16.9% year over year. Third-party estimates for the current fiscal year point to $28.1B of revenue and $6.45 of EPS.",
      "Growth is only useful if it earns a return. The operating margin of 51.0% and return on invested capital of n/a are the filters to watch as revenue scales."
    ],
    "bullets": [
      {
        "title": "Client cash and rates",
        "detail": "Net interest income rises with rates and falls when clients sort cash into money funds."
      },
      {
        "title": "Asset gathering",
        "detail": "More accounts and more assets produce more advice and administration fees."
      },
      {
        "title": "Adviser custody",
        "detail": "Independent advisers bring sticky balances and a business-to-business distribution channel."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The trailing operating margin is 51.0%, the net margin is 39.3% and diluted EPS is $5.85. The latest quarter's operating margin was 52.7%.",
      "Return on equity is 20.7%. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.",
      "The latest reported period was Q3 FY26: revenue of $7.2B, an operating margin of 52.7% and a net margin of 40.5%."
    ]
  },
  "cash": {
    "paragraphs": [
      "Free cash flow over the trailing period was $11.7B, a 43.2% margin. Net debt is not a meaningful measure for this business in the current dataset.",
      "Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At the latest close the shares trade at 14.9x trailing earnings and 10.5x EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.",
      "The attributed third-party mean target is $116.64; that is a consensus figure, not a Stockmonk price target. The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict."
    ]
  },
  "analysts": {
    "paragraphs": [
      "22 analysts contribute to the third-party consensus. The mean target is $116.64, with a range of $82.00 to $147.00.",
      "Current-year estimates call for $28.1B of revenue and $6.45 of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.",
      "The attributed consensus covers 22 analysts with a mean target of $116.64; third-party estimates can change without notice."
    ]
  },
  "risks": {
    "intro": "Schwab's risks are concentrated in the bank: the cost of client cash, the duration of the investment portfolio and the capital rules that govern the subsidiary. The brokerage franchise is strong; the spread is the fragile part.",
    "items": [
      {
        "title": "Cash sorting",
        "severity": "High",
        "detail": "Clients can move sweep cash into money-market funds or Treasuries when rates are attractive. That reduces the low-cost deposit base and compresses net interest income.",
        "watch": "Client cash as a share of assets and the mix between sweep deposits and money funds."
      },
      {
        "title": "Interest-rate and duration risk",
        "severity": "High",
        "detail": "The bank invests client cash in securities. Rising rates reduce the market value of a long-duration portfolio and can force capital to be held against it.",
        "watch": "Portfolio duration, unrealised losses and the bank's capital ratio."
      },
      {
        "title": "Market levels",
        "severity": "Medium",
        "detail": "Asset-management and advice fees are charged on asset values. A bear market reduces revenue even if clients stay.",
        "watch": "Client assets, net new assets and fee revenue."
      },
      {
        "title": "Price competition",
        "severity": "Medium",
        "detail": "Zero-fee trading and cheap index funds are commodity products. Competitors can match price, so Schwab must differentiate on service and advice.",
        "watch": "Net new accounts and the growth of advised assets."
      },
      {
        "title": "Regulation and capital requirements",
        "severity": "Medium",
        "detail": "Bank capital and liquidity rules constrain how much cash the parent can return and how the bank invests client deposits.",
        "watch": "Bank subsidiary capital ratios and stress-test results."
      }
    ],
    "watchlist": [
      {
        "title": "Net interest income",
        "detail": "The largest revenue line and the most sensitive to rates and cash sorting."
      },
      {
        "title": "Client cash mix",
        "detail": "The share of client assets held in low-cost sweep deposits versus higher-yielding alternatives."
      },
      {
        "title": "Net new assets",
        "detail": "The organic growth measure that shows whether the franchise is winning accounts."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Schwab is a low-cost brokerage attached to a rate-sensitive bank. The 51.0% operating margin, 39.3% net margin and 20.7% return on equity are strong, but they depend on client cash staying in low-cost sweep accounts.",
      "The teaching point is that a brokerage is not automatically an asset-light business. When the broker owns a bank, deposits and securities become part of the operating model, and free cash flow can mislead. Net interest income, client cash mix and capital ratios are the right instruments.",
      "The open questions are how much of the earnings base is rate-driven, how quickly clients move cash when alternatives yield more, and whether asset gathering can outrun the spread compression."
    ],
    "questions": [
      "What share of revenue is net interest income versus fees?",
      "How much client cash sits in sweep deposits rather than money-market funds?",
      "What is the duration of the bank's investment portfolio?",
      "Can net new assets grow fast enough to offset a lower spread?"
    ]
  }
};
