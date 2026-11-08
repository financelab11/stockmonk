import type { StockStory } from "./types";

export const PYPL: StockStory = {
  ticker: "PYPL",
  kicker: "Fintech & Crypto · Credit Services",
  title: "PayPal is a mature network growing 4.4% while its margin drifts down",
  dek: "Operating margin has slipped from 18.1% to 16.3% over six quarters. At 10.4x earnings and 7.8x free cash flow the shares are priced for little growth, and the third-party mean target sits below the market price.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $34.30B, up 4.4%, with the latest quarter up 2.0%.",
    "Operating margin fell from 18.1% in Q2 FY2025 to 16.3% in Q3 FY2026 while revenue kept growing.",
    "Free cash flow is $6.30B, a 18.4% margin, against net debt of $3.19B.",
    "At 10.4x earnings and 7.8x free cash flow, the price implies low growth for a business with 24.3% return on equity.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1633917/000163391726000024/pypl-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633917&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "PayPal runs a two-sided payments network. On one side are consumers with a PayPal or Venmo account; on the other are merchants that accept those accounts at checkout and, separately, businesses that use Braintree to process card payments inside their own apps. The company also offers credit, cross-border transfers through Xoom, and a small advertising business.",
      "The scale is enormous and the growth is not. Revenue reached $34.30B on a trailing basis, up 4.4%, and the latest quarter grew 2.0%. The company employs about 26,500 people and is valued at $49.21B at $59.24 a share, in the upper part of a 52-week range of $38.46 to $68.07.",
      "The central question is not whether PayPal is a good business. It is whether a network of this size can grow faster than the underlying e-commerce market while defending the take rate, or whether it settles into a slower, cash-generative maturity. The margin trend over the last six quarters suggests the second is currently winning.",
    ],
    quote:
      "A payments network earns a percentage of what flows through it. Growth comes from more volume or a higher take rate, and PayPal is currently getting a little of the first and losing a little of the second.",
  },
  whatItDoes: {
    paragraphs: [
      "The branded business is the PayPal button and the Venmo app: a consumer chooses to pay with an account they already have, and the merchant pays a fee for the conversion and the fraud protection that come with it. That is the highest-margin part of the network because the consumer relationship belongs to PayPal.",
      "The unbranded business is Braintree: card processing embedded in a merchant's own checkout, where the consumer never sees a PayPal brand. It is lower margin, because the processing economics are closer to a conventional acquirer's, but it grows quickly and brings large merchants into the group.",
      "Venmo adds a peer-to-peer network and a consumer app with its own monetisation path through cards, pay-with-Venmo at merchants and instant transfers. PayPal Credit adds a lending product. The pieces fit together as a set of ways to be present at a transaction, at different margins and different levels of consumer ownership.",
    ],
    bullets: [
      {
        title: "Branded checkout",
        detail:
          "The PayPal button and Venmo at merchant checkouts. Highest margin, most exposed to competitive pressure at the point of sale.",
      },
      {
        title: "Braintree",
        detail:
          "Unbranded card processing for large merchants and platforms. Faster growth, thinner spread.",
      },
      {
        title: "Credit and transfers",
        detail:
          "PayPal Credit, Xoom and related services. Adds revenue per customer and introduces credit risk.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a fee on the value of transactions processed, plus fees on transfers, credit and subscriptions. Gross margin is 50.3%, which reflects the network costs and the funding costs that sit in cost of revenue. The operating margin of 17.0% is what remains after technology, sales, marketing and corporate costs.",
      "The margin mechanism is mix. Branded checkout carries a higher take rate than Braintree because the consumer relationship is PayPal's and the merchant is paying for conversion. When Braintree grows faster than branded checkout, total volume rises and the blended take rate falls. That is exactly the pattern in the recent quarters: revenue up, operating margin down.",
      "The cost base is largely fixed in technology and compliance, but marketing and sales scale with customer acquisition. That means operating leverage is available if branded volume grows, and margin compression is the outcome if it does not.",
    ],
  },
  growth: {
    paragraphs: [
      "The annual series is steady rather than exciting: $25.37B, $27.52B, $29.77B, $31.80B and $33.17B. Revenue has grown every year, but the rate has fallen to the mid single digits, and the latest quarter grew 2.0%. That is a business maturing in real time.",
      "The third-party estimates call for $34.53B this fiscal year and $35.92B next, with EPS of $5.58 and $5.90. Forty-one and forty-three analysts contribute to those figures, the broadest coverage in this batch. The implied revenue growth is in the low single digits, and the EPS growth is faster, which means the profit path depends on cost control and share count rather than on volume.",
      "The realistic drivers are branded checkout growth, Venmo monetisation and credit attach. What would slow it further is continued share loss at the point of sale to other wallets and to merchant-specific checkout products, which would push the mix further toward the lower-margin Braintree business.",
    ],
  },
  performance: {
    paragraphs: [
      "The quarterly record is a slow squeeze. Operating margin was 18.1% in both Q2 and Q3 FY2025, then 17.4%, 17.8%, 16.4% and 16.3% in Q3 FY2026. Revenue over the same six quarters went from $8.29B to $8.58B. Costs grew slightly faster than revenue, and the margin absorbed it.",
      "The annual income statement shows a similar pattern with one interruption. Operating income rose from $4.26B in FY2021 to $6.07B in FY2025, but net income dipped to $2.42B in FY2022 from $4.17B the year before while operating income only fell slightly. That gap came from below the operating line, which is where a reader should look when net income moves differently from operating income.",
      "Returns remain strong: return on equity is 24.3% and return on invested capital is 20.3%. Those are the numbers that make the low multiple interesting. A business earning 20% on invested capital and trading at 7.8x free cash flow is priced as though the returns will decay.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $6.30B on a trailing basis, an 18.4% margin, and the annual series has been between $4.22B and $6.77B across five years. Cash generation is consistent, which is what a mature network should produce: the investment needed to keep the platform running is modest relative to the fees it collects.",
      "The balance sheet carries $3.19B of net debt, or 0.5x EBITDA. That is a small amount of leverage for a company of this cash generation, and it leaves room for both acquisitions and share repurchases.",
      "The cash-flow question here is capital allocation rather than solvency. A business generating $6.30B a year against a $49.21B market value can retire a meaningful share of its equity each year if it chooses, and that is a large part of why the per-share numbers have held up while revenue growth slowed.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $59.24 the equity is worth $49.21B. The P/E is 10.4x, EV/EBITDA 7.7x, EV/sales 1.5x and price-to-free-cash-flow 7.8x. All four point the same way, which makes this one of the cleaner valuations in the group: the market is paying a low multiple for a business it expects to grow slowly.",
      "The peer set splits by growth and margin. Toast trades at 36.6x earnings on 22.1% growth, Robinhood at 36.7x on 20.9%, Affirm at 9.5x on 26.1% but with distorted earnings, and Shift4 at 25.9x on 27.0%. PayPal at 10.4x on 4.4% growth is the cheapest of the group on earnings and the slowest growing.",
      "A 7.8x free cash flow multiple implies a payback period of under eight years on the current cash flow, before any growth. That is either an opportunity or a signal that the market expects the cash flow to decline. The margin trend is the evidence that decides which.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-three analysts contribute to the attributed third-party consensus, with a mean target of $57.13 and a range of $36.00 to $80.00. The mean sits below the $59.24 close, which is unusual and worth noting plainly: the average analyst target implies less value than the current price.",
      "Current-year estimates are $34.53B of revenue and EPS of $5.58, rising to $35.92B and $5.90 next year. The analyst counts are high — 41 and 43 — which makes these among the most heavily modelled numbers in the coverage universe.",
      "Those are third-party forecasts, not a Stockmonk view. What they describe is a company expected to grow revenue in the low single digits and earnings somewhat faster, with the mean target already overtaken by the share price.",
    ],
  },
  risks: {
    intro:
      "PayPal's risks are competitive rather than financial. The balance sheet is conservative, the cash flow is reliable, and the question is whether the branded franchise holds its place at checkout.",
    items: [
      {
        title: "Share loss at branded checkout",
        severity: "High",
        detail:
          "Merchant-specific checkout products and other wallets compete directly for the consumer's default payment method. Losing that default removes the highest-margin volume.",
        watch:
          "Branded volume growth against total volume growth, and the trend in the blended take rate.",
      },
      {
        title: "Margin mix",
        severity: "High",
        detail:
          "Braintree grows faster than branded checkout at a lower take rate. The operating margin has already fallen from 18.1% to 16.3%.",
        watch:
          "Operating margin and the split between branded and unbranded volume.",
      },
      {
        title: "Consumer credit losses",
        severity: "Medium",
        detail:
          "PayPal Credit and buy-now-pay-later products put consumer credit risk on the balance sheet.",
        watch:
          "Provision expense and delinquency trends in the credit portfolio.",
      },
      {
        title: "Regulatory change",
        severity: "Medium",
        detail:
          "Interchange rules, wallet regulation and cross-border requirements can change pricing and product design.",
        watch:
          "Any change to the treatment of digital wallets or to interchange economics.",
      },
      {
        title: "Buyback-dependent per-share growth",
        severity: "Medium",
        detail:
          "With revenue growing 4.4%, EPS growth depends partly on retiring shares. That works only while the multiple stays low.",
        watch:
          "Share count and the proportion of free cash flow spent on repurchases.",
      },
      {
        title: "Venmo monetisation",
        severity: "Low",
        detail:
          "Venmo is a large consumer network with a smaller revenue base than its user count implies. Slower monetisation leaves value on the table.",
        watch:
          "Venmo revenue growth and the share of users with a monetised product.",
      },
    ],
    watchlist: [
      {
        title: "Branded volume growth",
        detail:
          "The highest-margin part of the network and the part under most competitive pressure.",
      },
      {
        title: "Take rate",
        detail:
          "Revenue as a percentage of total payment volume; the single best measure of mix and pricing power.",
      },
      {
        title: "Operating margin",
        detail:
          "Six quarters of decline is the trend the valuation is reacting to.",
      },
      {
        title: "Share count",
        detail:
          "With low revenue growth, repurchases are doing much of the per-share work.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "PayPal is a large payments network with $34.30B of trailing revenue, a 17.0% operating margin, $6.30B of free cash flow and modest leverage. It grows slowly, earns 24.3% on equity and trades at 10.4x earnings and 7.8x free cash flow.",
      "The tension in the file is between the returns and the trend. A 20.3% return on invested capital is a good business; a margin falling from 18.1% to 16.3% in six quarters is a business under pressure. The market has resolved that tension by paying a low multiple, and the mean analyst target sits below the current price.",
      "What is not known from the statements is the split between branded and unbranded volume, which is the number that would explain the margin trend. Without it, a reader can see the effect but not the cause.",
    ],
    questions: [
      "How fast is branded checkout volume growing compared with Braintree?",
      "What is the take rate on each, and how has the blend shifted?",
      "How much of the EPS growth comes from share repurchases rather than operating profit?",
      "What would stop the operating margin decline?",
    ],
  },
};
