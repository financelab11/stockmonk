import type { StockStory } from "./types";

export const V: StockStory = {
  ticker: "V",
  kicker: "Payments networks · Card rails and value-added services",
  title: "Visa charges a toll on money that is already moving",
  dek: "Visa does not lend, take deposits or carry consumer credit risk. It sells access to a network that authorises and settles payments, which is why a 61.2% operating margin and a 48.1% free-cash-flow margin sit on the same income statement.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $45.9B, up 14.8%, with the latest quarter at $12.14B.",
    "Operating margin is 61.2% and free cash flow is $22.1B, a 48.1% margin.",
    "Return on equity is 65.5% and return on invested capital is 102.4% because the network needs little capital to grow.",
    "At $422.65 the shares trade at 37.1x trailing earnings and 29.1x EV/EBITDA, a premium to Mastercard at 33.5x and 24.8x.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1403161/000140316126000134/v-20260930.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001403161&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Visa operates VisaNet, the switch that sits between a cardholder's bank and a merchant's bank. When someone taps a card, Visa authorises the transaction, clears it and helps settle the funds. The company also sells fraud tools, tokenisation, dispute management and other services that run on the same rails. It is a payments utility with a technology company's margin.",
      "The important structural fact is what Visa does not do: it does not issue cards, extend credit or hold the customer's deposit. The bank on the other side of the transaction takes the credit risk. Visa earns a fee per transaction and a fee based on payment volume, so its revenue rises with spending rather than with borrowing.",
      "Trailing revenue of $45.9B is 14.8% higher than a year earlier, and the latest quarter reached $12.14B. Operating margin is 61.2%, net margin is 51.2% and free cash flow is $22.1B. At $422.65 the market values the equity at $871.6B, or 37.1x trailing earnings. That multiple is the central debate: it assumes the network keeps taking share of global payments for years.",
    ],
    quote:
      "A payment network is a two-sided toll bridge. The more cardholders it has, the more merchants want it; the more merchants accept it, the more cardholders carry it. That loop is the moat.",
  },
  whatItDoes: {
    paragraphs: [
      "Visa's customers are financial institutions, not consumers. Issuers put Visa-branded cards in customers' hands; acquirers connect merchants to the network; processors and fintechs build on Visa's APIs. Visa supports all of them with authorisation, clearing, settlement, fraud scoring and tokenisation, and it earns money when the resulting transactions flow across the network.",
      "The revenue base spans card payments, cross-border travel and commerce, and newer flows such as person-to-person transfers, business-to-business payments and disbursements. Cross-border transactions carry higher fees because they involve currency conversion and more parties. Value-added services — risk, identity, consulting and dispute tools — are smaller but grow faster and deepen the relationship with issuers and merchants.",
      "The network is global but the economics are concentrated in a few markets. The United States, Europe and parts of Asia generate most of the volume, while emerging markets contribute growth and cash usage that is still converting to cards. Visa employs 20,500 people, a small headcount for the volume it processes because the marginal cost of an additional transaction is close to zero.",
    ],
    bullets: [
      {
        title: "Service and data-processing fees",
        detail:
          "Charged on payment volume and transaction count. The core toll on card spending.",
      },
      {
        title: "International transactions",
        detail:
          "Cross-border fees are higher per dollar and sensitive to travel and global commerce.",
      },
      {
        title: "Value-added services",
        detail:
          "Fraud, identity, tokenisation and advisory products sold alongside the network.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Visa's take rate is a small percentage of the payment volume it processes. The exact rate varies by region, product and merchant category, and it is reduced by client incentives — rebates and volume discounts paid to issuers and acquirers to win or keep their business. Gross revenue minus incentives is the number that actually reflects pricing power.",
      "The cost structure is the source of the margin. Once the network is built, an additional transaction costs very little: a few milliseconds of compute, a fraud check and a settlement entry. Technology and processing costs are largely fixed, so revenue growth drops through to operating profit at a high rate. That is why operating margin has stayed in the high 50s to low 60s through different revenue cycles.",
      "The competitive position rests on the two-sided loop and on switching costs. An issuer can theoretically move its portfolio to another network, but it would have to re-certify systems, re-issue cards and renegotiate merchant acceptance. Merchants want broad acceptance; cardholders want broad acceptance. The loop is hard to break, which is why the network can raise prices modestly over time without losing volume.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $29.31B in FY2022 to $45.90B in FY2026, a 13.2% compound annual rate. That is fast for a company of this size, and it came from a mix of payment-volume growth, cross-border recovery and value-added services. The latest quarter grew 13.2% year over year, so the trend has not broken.",
      "Consensus estimates call for $51.06B of revenue and $15.03 of EPS this fiscal year, then $56.62B and $17.14 next year. The revenue path implies a modest deceleration from the trailing rate, while the EPS path is steeper. The gap implies continued buybacks and margin expansion rather than a new pricing cycle.",
      "The durable drivers are the shift from cash and cheques to electronic payments, cross-border commerce, and new flows such as B2B and disbursements. The brakes are regulatory caps on interchange, real-time payment systems that bypass cards, and market share gains by local networks. None of those has stopped the growth yet, but each is a real constraint in some market.",
    ],
    bullets: [
      {
        title: "Cash-to-card conversion",
        detail:
          "Every dollar of consumer spending that moves from cash to a card adds volume to the network.",
      },
      {
        title: "Cross-border commerce",
        detail:
          "Travel and international e-commerce carry higher fees and have grown faster than domestic volume.",
      },
      {
        title: "New payment flows",
        detail:
          "B2B, person-to-person and disbursements extend the rails beyond consumer card payments.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 61.2%, net margin is 51.2% and diluted EPS is $8.39. Return on equity is 65.5% and return on invested capital is 102.4%. Those returns are not the product of leverage in the ordinary sense; they reflect a business that earns a toll on other people's balance sheets while carrying very little of its own.",
      "The annual record shows steady expansion: revenue of $29.31B, $32.65B, $35.93B, $40.00B and $45.90B in the five fiscal years shown, with operating income rising from $18.81B to $28.11B. Free cash flow rose from $17.88B to $22.06B.",
      "The margin did not expand every year — FY2025 operating income was roughly flat on higher revenue — but the direction is clear.",
      "The quarterly pattern is unusually stable for a payments company. Operating margin ranged from 57.3% to 64.4% across the last six quarters, and net income moved between $5.09B and $6.02B. That stability is what a high multiple is paying for.",
    ],
  },
  cash: {
    paragraphs: [
      "Visa generated $22.06B of free cash flow on $45.90B of revenue, a 48.1% margin. Capital expenditure is modest because the network is software and data centres rather than factories or loan books. The cash conversion is high and predictable, which is why the company can fund a large buyback and a growing dividend from operating cash alone.",
      "The balance sheet carries $14.2B of net cash. That is unusual for a company of this size and gives Visa room to absorb litigation settlements, invest in new flows or buy back stock without straining. It also means the enterprise value is slightly below the market capitalization, which flatters EV-based multiples relative to P/E.",
      "Capital return is the main use of cash. Buybacks reduce the share count and lift EPS faster than revenue; dividends are small by comparison. The risk is that repurchases at a high multiple destroy value if the growth rate slows, because the company would be buying future earnings at a premium to their present value.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $422.65, Visa trades at 37.1x trailing earnings, 29.1x EV/EBITDA, 18.7x sales and 39.5x free cash flow. Mastercard, the closest comparable, trades at 33.5x earnings and 24.8x EV/EBITDA. The premium to the market is enormous, and it is justified only if the network keeps growing at a double-digit rate with high incremental margins.",
      "The right way to read the multiple is against growth and durability together. A 37x P/E on 15% growth is a different proposition from a 37x P/E on 5% growth. The free-cash-flow yield of 2.5% is low, but it is backed by a business that converts half of revenue into cash and needs little capital to do it.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 330-to-500 range shows that even professional analysts disagree about what multiple a mature network deserves.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-seven analysts contribute to the attributed consensus, with a mean target of $446.33 and a range of $330.00 to $500.00. The range is wide relative to the share price, which reflects disagreement about regulation and the duration of double-digit growth rather than about the current quarter.",
      "Estimates call for $51.06B of revenue and $15.03 of EPS this fiscal year, then $56.62B and $17.14 next year. The EPS path implies continued margin expansion and buybacks. Any shortfall would come from slower cross-border volume, higher client incentives or a regulatory change in a large market.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and a high mean alongside a low end is often a sign that the average is doing too much work.",
    ],
  },
  risks: {
    intro:
      "Visa's risks are regulatory, competitive and reputational rather than financial. The balance sheet is a net-cash position; the uncertainty is about how much of the toll regulators and new payment rails will allow.",
    items: [
      {
        title: "Interchange and routing regulation",
        severity: "High",
        detail:
          "Caps on interchange and rules forcing merchants to route transactions through alternative networks reduce the fees issuers can earn and the volume Visa processes.",
        watch:
          "Legislative changes in large markets and the mix of debit versus credit volume.",
      },
      {
        title: "Real-time and alternative payment rails",
        severity: "High",
        detail:
          "Account-to-account systems, stablecoins and local networks can bypass card rails for domestic payments, particularly in markets with strong real-time infrastructure.",
        watch:
          "Volume growth in markets with mature real-time payment systems.",
      },
      {
        title: "Client concentration and incentives",
        severity: "Medium",
        detail:
          "A small number of large issuers and acquirers negotiate hard for rebates. Rising incentives can offset volume growth.",
        watch: "Client incentives as a share of gross revenue.",
      },
      {
        title: "Litigation and merchant disputes",
        severity: "Medium",
        detail:
          "Merchant class actions and regulatory investigations can produce large settlements and change network rules.",
        watch: "Legal accruals and disclosed settlements.",
      },
      {
        title: "Technology and operational resilience",
        severity: "Medium",
        detail:
          "An outage at a global switch damages trust and invites regulatory scrutiny. The network is a single point of failure for many participants.",
        watch: "Network availability disclosures and outage reports.",
      },
    ],
    watchlist: [
      {
        title: "Payment-volume growth",
        detail:
          "The underlying driver. Volume growth is more durable than price increases.",
      },
      {
        title: "Client incentives",
        detail:
          "The contra-revenue line that determines how much of gross revenue Visa keeps.",
      },
      {
        title: "Cross-border volume",
        detail:
          "The highest-fee category and the most sensitive to travel and global commerce.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Visa is one of the highest-quality businesses in the coverage universe: a toll collector on global payments with a 61.2% operating margin, a 48.1% free-cash-flow margin and a net-cash balance sheet. The 65.5% return on equity is real, not a leverage trick.",
      "The teaching point is that not every financial company is a lender. Visa has no credit risk, no deposit franchise and no net interest income worth analysing. Its unit economics are transactions and take rate, and its capital intensity is low. Banks and insurers need a different toolkit; networks do not.",
      "The open question is price. At 37.1x earnings, the market is paying for years of double-digit growth. A reader should ask what happens to the multiple if growth slows to high single digits, and how much of the fee base regulators can touch.",
    ],
    questions: [
      "How much of revenue growth comes from volume versus price and mix?",
      "What share of gross revenue is paid back as client incentives?",
      "How quickly are real-time payment systems taking domestic volume in key markets?",
      "What would a regulatory cap on cross-border fees do to the earnings base?",
    ],
  },
};
