import type { StockStory } from "./types";

export const PYPL: StockStory = {
  "ticker": "PYPL",
  "kicker": "Fintech & Crypto · Credit Services",
  "title": "PayPal is a mature network growing 4.4% while its margin drifts down",
  "dek": "Operating margin has slipped from 18.1% to 16.3% over six quarters. At 10.4x earnings and 7.8x free cash flow the shares are priced for little growth, and the third-party mean target sits below the market price.",
  "readingMinutes": 9,
  "takeaways": [
    "Revenue of $34.3B grew 4.4% while the operating margin fell from 18.1% to 16.3% over six quarters, a mix shift the statements do not decompose.",
    "Free cash flow of $6.3B is an 18.4% margin, and $5.6B of net debt is only 0.8x EBITDA, so the balance sheet is not the problem.",
    "At 9.7x earnings and 7.2x free cash flow the shares are the cheapest in the payments group, with a 13.8% cash yield and a 1.1% dividend.",
    "Thirty-three analysts put the mean target at $57 against a $55 price, with a large neutral block and EPS estimates up 3.6% in a month."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1633917/000163391726000024/pypl-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001633917&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Six quarters of margin erosion is the defining fact: operating margin was 18.1% in the September 2025 quarter and 16.3% a year later, with revenue rising from $8.4B to $8.6B. Profit did not collapse; it diluted. Net margin went from 14.8% to 12.5% over the same span, and EPS held at $1.25 only because the share count is falling. That is the signature of a network growing its lower-margin volume faster than its branded volume.",
      "The branded PayPal button and Venmo carry a higher take rate because the consumer relationship belongs to PayPal; Braintree carries a lower one because it is processing embedded in someone else's checkout. When Braintree grows faster, volume rises and the blended take rate falls. The split is not disclosed, so the effect is visible in the margin and the cause is inferred. The cost base is fixed in technology and compliance but variable in marketing, which is why the margin can drift for years without a single bad quarter.",
      "The equity is worth $45.6B, 9.7x earnings and 7.2x free cash flow, with a 13.8% cash yield and a 1.1% dividend. Those are the multiples of a business expected to stagnate, not one growing 4.4%. The buyback is doing the per-share work: EPS is estimated to rise 5.2% on 4.1% revenue growth in 2026. The debate is whether repurchasing shares at 9.7x is the best use of $6.3B of annual cash flow, or whether the branded franchise needs investment instead."
    ],
    "quote": "PayPal still processes more money than any rival wallet, but the growth is coming from the unbranded processing that pays a thinner spread."
  },
  "whatItDoes": {
    "paragraphs": [
      "The branded business is the PayPal button and the Venmo app: a consumer chooses to pay with an account they already have, and the merchant pays a fee for the conversion and the fraud protection that come with it. That is the highest-margin part of the network because the consumer relationship belongs to PayPal.",
      "The unbranded business is Braintree: card processing embedded in a merchant's own checkout, where the consumer never sees a PayPal brand. It is lower margin, because the processing economics are closer to a conventional acquirer's, but it grows quickly and brings large merchants into the group.",
      "Venmo adds a peer-to-peer network and a consumer app with its own monetisation path through cards, pay-with-Venmo at merchants and instant transfers. PayPal Credit adds a lending product. The pieces fit together as a set of ways to be present at a transaction, at different margins and different levels of consumer ownership."
    ],
    "bullets": [
      {
        "title": "Branded checkout",
        "detail": "The PayPal button and Venmo at merchant checkouts. Highest margin, most exposed to competitive pressure at the point of sale."
      },
      {
        "title": "Braintree",
        "detail": "Unbranded card processing for large merchants and platforms. Faster growth, thinner spread."
      },
      {
        "title": "Credit and transfers",
        "detail": "PayPal Credit, Xoom and related services. Adds revenue per customer and introduces credit risk."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a fee on the value of transactions processed, plus fees on transfers, credit and subscriptions. Gross margin is 50.3%, which reflects the network costs and the funding costs that sit in cost of revenue. The operating margin of 17.0% is what remains after technology, sales, marketing and corporate costs.",
      "The margin mechanism is mix. Branded checkout carries a higher take rate than Braintree because the consumer relationship is PayPal's and the merchant is paying for conversion. When Braintree grows faster than branded checkout, total volume rises and the blended take rate falls. That is exactly the pattern in the recent quarters: revenue up, operating margin down.",
      "The cost base is largely fixed in technology and compliance, but marketing and sales scale with customer acquisition. That means operating leverage is available if branded volume grows, and margin compression is the outcome if it does not."
    ]
  },
  "growth": {
    "paragraphs": [
      "The growth is real, but it is coming from the thinner-margin line. Braintree brings large merchants and platforms into the network at processing economics close to a conventional acquirer's; branded checkout brings a higher take rate and a consumer relationship. Revenue grew 4.4% trailing, and the fiscal 2026 estimate is 4.1%, so the blended rate is stable and slow. The margin tells you which engine is pulling, because 18.1% to 16.3% over six quarters is what happens when the thinner line grows faster.",
      "Consensus assumes $34.5B of revenue in 2026 and $35.9B in 2027, both about 4%, with EPS rising 5.2% and then 5.7%. The gap between revenue and EPS growth is buyback arithmetic plus a little operating leverage. Venmo monetisation is the option the estimates do not obviously include: it is a large consumer network with a revenue base smaller than its user count implies, and the share of users with a monetised product is not disclosed.",
      "Durability depends on the branded franchise holding its place as the default payment method. That is a consumer habit rather than a contract, and merchant-specific checkout products compete directly for it. The company's own evidence is mixed: revenue keeps growing, and the margin keeps falling, which is consistent with holding volume but losing pricing power. Without the branded and unbranded split, a reader can see the effect and not the cause."
    ],
    "bullets": [
      {
        "title": "Branded share",
        "detail": "The PayPal button and Venmo earn the highest take rate, and every point of volume that shifts to Braintree dilutes the blended margin."
      },
      {
        "title": "Braintree scale",
        "detail": "Unbranded processing brings large merchants and platforms at a spread closer to a conventional acquirer's, which is why it grows faster and pays less."
      },
      {
        "title": "Buyback arithmetic",
        "detail": "With revenue growing 4.4%, EPS growth depends on retiring shares, which works while the multiple is 9.7x and stops working if the price re-rates."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Three lines tell the mix story. Gross margin of 50.3% reflects network and funding costs sitting in cost of revenue; operating margin of 17.0% is what survives technology, sales, marketing and corporate; net margin of 13.8% adds interest income and a low tax charge. The operating line is the one moving: 18.3% in FY2025, 17.0% trailing and 16.3% in the September quarter. Each step is small and each one compounds.",
      "EPS of $5.41 in FY2025 against $3.99 in FY2024 grew 36% on 4.3% revenue growth, which cannot come from operations alone. Return on equity of 24.3% and return on invested capital of 13.0% are respectable, and both are helped by a smaller equity base after years of repurchases. The comparison with Robinhood is stark: 13.0% on capital at a 17.0% operating margin against 15.7% at 47.3%, and the market pays 9.7x for the first and 30.7x for the second.",
      "The quarterly path has been 17.8%, 16.4% and 16.3%, so the decline is decelerating. That is the first evidence in two years that the mix shift may be stabilising, and it is more important than the revenue line, which has been remarkably steady at $8.4B to $8.7B a quarter. The net margin, however, went from 16.5% in March 2025 to 12.5% in September 2026, so the operating line is not the only thing moving."
    ]
  },
  "cash": {
    "paragraphs": [
      "Eighteen point four percent of revenue becomes free cash flow, well above the 13.8% net margin, because depreciation, amortisation and stock-based compensation sit between the two. Capex is modest at $852.0M in FY2025, about 2.6% of revenue, so cash conversion is a function of working capital and of a business that needs little physical capital. The quarterly pattern is uneven, at $903.0M in March, $1.8B in June and $1.4B in September, but the annual figure has been above $4B every year since FY2020.",
      "Net debt of $5.6B is 0.8x EBITDA and interest cover is 12.0x, which is conservative for a company with a credit book. The balance sheet carries both corporate borrowings and the funding for PayPal Credit, so the net figure understates the gross debt supporting the loan portfolio. Even so, leverage is not a constraint on the dividend or the buyback.",
      "The 1.1% dividend is small; the buyback is the main return channel and the reason EPS grows faster than revenue. At 9.7x earnings, each repurchased share is accretive by construction, which is why the programme has persisted through a period of margin decline. The risk is that cash is being used to retire equity in a business whose competitive position is eroding, which is a capital-allocation judgement rather than an accounting one."
    ]
  },
  "valuation": {
    "paragraphs": [
      "The cheapest multiple in the payments group belongs to the largest network in it. PayPal trades at 9.7x earnings, 7.5x EBITDA and 7.2x free cash flow, with a 13.8% cash yield that is roughly four times Toast's. The discount is not a hidden-asset story; it is the market's judgement that 4.4% growth with a falling margin deserves a low multiple.",
      "On the 2026 estimate of $5.58 the multiple is 9.9x, and on $5.90 for 2027 it is 9.3x. To justify a re-rating the company would need branded volume to outpace Braintree or the margin to stop falling; neither is in the estimates, which assume 4% revenue growth and a 5% EPS gain. A 13.8% free cash flow yield means the market is pricing perpetual low growth, and any evidence of stabilisation would be worth more than a point of margin.",
      "The cash yield is also a statement about the buyback. At this price the company can retire about 14% of its market value each year with free cash flow, before any debt capacity. That is the mechanism that could produce per-share growth with no revenue growth, and it explains how the shares have fallen 70.6% over five years without the business collapsing."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The most uniform set of views in the payments group comes with thirty-three analysts, and it is the least informative. The mean target of $57 is 4% above the $55 price, and the range of $36 to $80 is wide enough to contain both a value case and a value trap.",
      "Estimates are drifting up: EPS up 3.6% over thirty days and 3.8% over ninety, and the last four quarters all beat the consensus figure. The consensus therefore assumes the margin decline flattens, revenue grows about 4%, and the buyback does the rest. A mean target 4% above the price is not a call on a re-rating; it is a statement that the cash return is the return."
    ]
  },
  "risks": {
    "intro": "PayPal's risks are competitive rather than financial. The balance sheet is conservative, the cash flow is reliable, and the question is whether the branded franchise holds its place at checkout.",
    "items": [
      {
        "title": "Share loss at branded checkout",
        "severity": "High",
        "detail": "Merchant-specific checkout products and other wallets compete directly for the consumer's default payment method. Losing that default removes the highest-margin volume.",
        "watch": "Branded volume growth against total volume growth, and the trend in the blended take rate."
      },
      {
        "title": "Margin mix",
        "severity": "High",
        "detail": "Braintree grows faster than branded checkout at a lower take rate. The operating margin has already fallen from 18.1% to 16.3%.",
        "watch": "Operating margin and the split between branded and unbranded volume."
      },
      {
        "title": "Consumer credit losses",
        "severity": "Medium",
        "detail": "PayPal Credit and buy-now-pay-later products put consumer credit risk on the balance sheet.",
        "watch": "Provision expense and delinquency trends in the credit portfolio."
      },
      {
        "title": "Regulatory change",
        "severity": "Medium",
        "detail": "Interchange rules, wallet regulation and cross-border requirements can change pricing and product design.",
        "watch": "Any change to the treatment of digital wallets or to interchange economics."
      },
      {
        "title": "Buyback-dependent per-share growth",
        "severity": "Medium",
        "detail": "With revenue growing 4.4%, EPS growth depends partly on retiring shares. That works only while the multiple stays low.",
        "watch": "Share count and the proportion of free cash flow spent on repurchases."
      },
      {
        "title": "Venmo monetisation",
        "severity": "Low",
        "detail": "Venmo is a large consumer network with a smaller revenue base than its user count implies. Slower monetisation leaves value on the table.",
        "watch": "Venmo revenue growth and the share of users with a monetised product."
      }
    ],
    "watchlist": [
      {
        "title": "Branded volume growth",
        "detail": "The highest-margin part of the network and the part under most competitive pressure."
      },
      {
        "title": "Take rate",
        "detail": "Revenue as a percentage of total payment volume; the single best measure of mix and pricing power."
      },
      {
        "title": "Operating margin",
        "detail": "Six quarters of decline is the trend the valuation is reacting to."
      },
      {
        "title": "Share count",
        "detail": "With low revenue growth, repurchases are doing much of the per-share work."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "PayPal is a large payments network with $34.30B of trailing revenue, a 17.0% operating margin, $6.30B of free cash flow and modest leverage. It grows slowly, earns 24.3% on equity and trades at 10.4x earnings and 7.8x free cash flow.",
      "The tension in the file is between the returns and the trend. A 20.3% return on invested capital is a good business; a margin falling from 18.1% to 16.3% in six quarters is a business under pressure. The market has resolved that tension by paying a low multiple, and the mean analyst target sits below the current price.",
      "What is not known from the statements is the split between branded and unbranded volume, which is the number that would explain the margin trend. Without it, a reader can see the effect but not the cause."
    ],
    "questions": [
      "How fast is branded checkout volume growing compared with Braintree?",
      "What is the take rate on each, and how has the blend shifted?",
      "How much of the EPS growth comes from share repurchases rather than operating profit?",
      "What would stop the operating margin decline?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
