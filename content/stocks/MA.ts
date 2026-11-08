import type { StockStory } from "./types";

export const MA: StockStory = {
  ticker: "MA",
  kicker: "Payments networks · Card rails and value-added services",
  title: "Mastercard makes its margin from volume, not from lending",
  dek: "A 58.6% operating margin and a 44.3% free-cash-flow margin come from charging fees on card spending and selling services around the network. The 251.6% return on equity is mostly a statement about how little equity is left after buybacks.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $36.3B, up 15.3%, with the latest quarter at $9.81B and a 59.8% operating margin.",
    "Free cash flow is $16.1B, a 44.3% margin, and the balance sheet carries $10.5B of net cash.",
    "Return on equity of 251.6% is an artefact of a thin equity base and should not be compared with a bank's ROE.",
    "At $652.70 the shares trade at 33.5x trailing earnings, below Visa at 37.1x and well above the banks in the peer table.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1141391/000114139126000013/ma-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001141391&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Mastercard runs a payments network that connects banks, merchants and cardholders. It authorises and clears transactions, helps settle funds, and sells fraud, identity, analytics and open-banking services that sit around the core rails. The company does not issue cards or lend; the banks that put their names on the cards take the credit risk.",
      "Trailing revenue of $36.3B is 15.3% higher than a year earlier. Operating margin is 58.6%, net margin is 46.7% and free cash flow is $16.1B. Those are network economics: a large fixed platform, a near-zero marginal cost per transaction and a fee that scales with spending.",
      "At $652.70 the equity is worth $568.6B, or 33.5x trailing earnings. The shares are close to the top of their 52-week range of $464.52 to $681.99. The multiple is a bet that payment volume keeps growing faster than GDP and that regulators do not cut too deeply into the fee pool.",
    ],
    quote:
      "The network does not care whether a transaction is debit or credit, domestic or cross-border. It cares how many transactions pass through and how much each one is worth.",
  },
  whatItDoes: {
    paragraphs: [
      "The customer list is institutional: issuers that put Mastercard-branded cards in wallets, acquirers that connect merchants, processors that route transactions, and governments and fintechs building payment programmes. Mastercard provides the brand, the rules, the switching infrastructure and the settlement. The cardholder and the merchant are the end users, but they are not the ones who sign the contract.",
      "The revenue mix has two engines. The payment network earns fees based on the dollar volume of card activity and the number of transactions processed. Value-added services — fraud scoring, tokenisation, identity verification, consulting, loyalty and open-banking connectivity — earn fees that are less directly tied to card volume. The second engine is smaller but grows faster and makes the relationship stickier.",
      "Mastercard also owns real-time payments infrastructure that banks use for account-to-account transfers, which is a hedge against the card rails being bypassed. That business is a natural extension: the same customers, the same clearing and settlement skills, a different set of rails. It employs a small workforce relative to the volume it handles, and the platform is the asset.",
    ],
    bullets: [
      {
        title: "Payment network",
        detail:
          "Fees on card volume and transaction count. The core toll and the largest revenue pool.",
      },
      {
        title: "Value-added services",
        detail:
          "Fraud, identity, analytics, consulting and open banking. Higher growth and less volume-sensitive.",
      },
      {
        title: "Real-time payments",
        detail:
          "Account-to-account infrastructure for banks. A hedge against card displacement in domestic payments.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Mastercard reports revenue gross of the incentives it pays to customers, then deducts rebates and incentives to arrive at net revenue. That distinction matters: a large issuer can negotiate a substantial rebate in exchange for routing volume to Mastercard, so gross revenue overstates the pricing power. The net figure is what the company actually keeps.",
      "The cost structure is dominated by the network, technology and people. An incremental transaction adds very little cost, so revenue growth converts into operating profit at a high rate. The company also spends on marketing, sponsorships and rebates to defend the brand and win issuance, which is why the operating margin, high as it is, is below the gross margin.",
      "The moat is the two-sided adoption loop. Merchants accept the card because cardholders carry it; cardholders carry it because merchants accept it. Switching a portfolio requires reissuing plastic, re-certifying systems and renegotiating acceptance, which is expensive and slow. That is why price increases have generally stuck, and why the network earns a return on capital that most financial businesses cannot match.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $18.88B in FY2021 to $32.79B in FY2025, then reached $36.29B on a trailing basis. The five-year path is one of the fastest in large-cap financials, driven by the recovery in cross-border travel, the shift from cash to cards and the expansion of value-added services. The latest quarter grew 14.0% year over year.",
      "Consensus estimates call for $37.37B of revenue and $20.06 of EPS this fiscal year, then $42.09B and $23.16 next year. Measured against the FY2025 base of $32.79B, the current-year revenue estimate implies another year of low-double-digit growth, while the EPS path assumes continued buybacks and operating leverage.",
      "The durable drivers are consumer spending, cross-border volume, new flows such as business-to-business payments and the attach of services. The brakes are regulatory caps on interchange, alternative payment rails and a consumer recession that reduces spending. A payments network is a leveraged play on nominal consumer spending, so a slowdown shows up quickly in volume.",
    ],
    bullets: [
      {
        title: "Cross-border volume",
        detail:
          "The highest-fee category and the most sensitive to travel and international e-commerce.",
      },
      {
        title: "Services attach",
        detail:
          "Fraud, identity and analytics sold to existing issuers and acquirers at high incremental margin.",
      },
      {
        title: "New flows",
        detail:
          "B2B, disbursements and account-to-account payments extend the network beyond consumer cards.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 58.6%, net margin is 46.7% and diluted EPS is $19.12. Return on equity is 251.6%, which looks extraordinary but mostly reflects a small book value after years of buybacks. A bank with the same ROE would be highly leveraged; Mastercard is not, because the denominator is tiny rather than the numerator being inflated by borrowing.",
      "The annual record shows steady margin expansion: operating income rose from $10.08B in FY2021 to $18.90B in FY2025 on revenue that grew from $18.88B to $32.79B. Free cash flow rose from $9.06B to $17.16B. The company converted roughly half of revenue into cash at the end of the period, a hallmark of a capital-light network.",
      "Quarterly results have been consistent. Operating margin ranged from 55.8% to 60.2% across the last six quarters, and EPS rose from $4.07 to $5.28. There is no obvious seasonality or cyclical break in the series, which is why the market treats the earnings stream as high quality.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $16.08B on $36.29B of revenue, a 44.3% margin. Capital expenditure is modest because the network is software and processing capacity rather than physical plant. The gap between net income and free cash flow is small, which is unusual for a company growing this fast and a sign that growth does not consume much working capital.",
      "The balance sheet holds $10.5B of net cash. That gives Mastercard flexibility to buy back stock, pay dividends and fund acquisitions of services businesses without stretching the balance sheet. It also means the enterprise value is below the market capitalization, so EV/EBITDA is slightly lower than a naive calculation would suggest.",
      "Buybacks are the main reason book value is small and ROE is extreme. Repurchasing shares at a high multiple reduces the equity denominator and raises reported ROE without improving the underlying business. A reader comparing Mastercard's ROE with a bank's is comparing two different capital structures, not two different levels of profitability.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $652.70, Mastercard trades at 33.5x trailing earnings, 24.8x EV/EBITDA, 15.4x sales and 35.4x free cash flow. Visa trades at 37.1x earnings and 29.1x EV/EBITDA, so Mastercard is the cheaper of the two network giants on every measure shown. Both are far above the banks, which trade between 10.6x and 13.9x earnings.",
      "The gap between the networks and the banks is not a mispricing. Banks carry credit risk, fund themselves with deposits and must hold capital against loans; networks carry almost no credit risk and need little capital. The market is paying for the quality of the earnings stream, not just the growth rate.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context. At this multiple, the important question is not whether Mastercard is a good business — it plainly is — but what growth rate is required to justify 33.5x earnings.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirty-seven analysts contribute to the attributed consensus, with a mean target of $716.39 and a range of $550.00 to $800.00. The low end implies a meaningful de-rating, while the high end assumes the multiple holds and earnings compound.",
      "Estimates call for $37.37B of revenue and $20.06 of EPS this fiscal year, then $42.09B and $23.16 next year. The EPS estimate rises faster than revenue, which is consistent with the recent record and assumes buybacks continue at a similar pace.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and the dispersion here is mostly about the multiple rather than about the near-term earnings.",
    ],
  },
  risks: {
    intro:
      "Mastercard's risks are regulatory, competitive and concentration-related. The company has no credit exposure and a net-cash balance sheet, so the threats are to the fee pool rather than to solvency.",
    items: [
      {
        title: "Interchange and network regulation",
        severity: "High",
        detail:
          "Caps on interchange and rules that force alternative routing reduce the economics of card issuance and can shift volume away from the network.",
        watch:
          "Legislative activity in the US, Europe and other large markets, plus debit routing rules.",
      },
      {
        title: "Alternative payment rails",
        severity: "High",
        detail:
          "Real-time account-to-account systems, digital wallets and stablecoins can capture domestic payments without touching the card networks.",
        watch: "Volume growth in markets with mature real-time infrastructure.",
      },
      {
        title: "Rebates and client concentration",
        severity: "Medium",
        detail:
          "Large issuers and acquirers have negotiating power. Higher incentives reduce net revenue even when gross volume grows.",
        watch:
          "Incentives as a percentage of gross revenue and the renewal calendar for large customers.",
      },
      {
        title: "Consumer spending sensitivity",
        severity: "Medium",
        detail:
          "Revenue is a leveraged function of nominal spending. A recession or a sharp drop in cross-border travel hits volume and mix together.",
        watch: "Payment-volume growth and cross-border volume trends.",
      },
      {
        title: "Technology and trust",
        severity: "Medium",
        detail:
          "An outage, data breach or fraud episode at a global network damages trust and invites regulation.",
        watch:
          "Network availability, fraud loss rates and regulatory inquiries.",
      },
    ],
    watchlist: [
      {
        title: "Net revenue growth",
        detail:
          "Watch net revenue rather than gross, because incentives can hide a slowdown.",
      },
      {
        title: "Cross-border volume",
        detail: "The highest-fee category and the best indicator of mix.",
      },
      {
        title: "Value-added services growth",
        detail: "The diversifier that reduces dependence on card volume.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Mastercard is a capital-light toll business with a 58.6% operating margin, a 44.3% free-cash-flow margin and a net-cash balance sheet. The growth record is strong and the economics are unusually good.",
      "The teaching point is that ROE can be misleading when the equity base has been shrunk by buybacks. A 251.6% ROE does not mean Mastercard is 20 times more profitable than a bank; it means the denominator is small. Free cash flow, operating margin and net revenue growth are more comparable across business models.",
      "The open question is valuation. At 33.5x earnings, the stock needs years of double-digit growth and stable regulation. A reader should decide whether the fee pool is more likely to grow or to be legislated away.",
    ],
    questions: [
      "How much of net revenue growth comes from volume, price and services?",
      "What share of gross revenue is returned to customers as incentives?",
      "How fast are account-to-account rails taking domestic volume in key markets?",
      "What growth rate is needed to justify 33.5x earnings?",
    ],
  },
};
