import type { StockStory } from "@/content/stocks/types";

export const PAYTM: StockStory = {
  ticker: "PAYTM",
  kicker: "Consumer & New-Age · Payments and financial services",
  title: "Paytm earns on the device and the loan, not on the UPI payment",
  dek: "UPI is free for merchants, so the payment itself is not the product. Revenue rose 23.8% to ₹95.54B, the operating margin turned positive, and free cash flow is still -₹12.11B.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹95.54B, up 23.8%, on a 37.0% gross margin and a 4.7% operating margin.",
    "Revenue fell 30.9% to ₹69.00B in FY2025, then recovered to ₹84.37B in FY2026 with net income of ₹5.52B.",
    "Free cash flow was -₹12.11B even though net income was positive; the company holds net cash of ₹159.40B.",
    "At ₹1,801 the shares trade at 135.2x earnings and 131.2x EV/EBITDA, or about 96x this year's EPS estimate of ₹18.81.",
  ],
  filingUrl:
    "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=PAYTM",
  irUrl: "https://www.paytm.com",
  bigPicture: {
    paragraphs: [
      "One97 Communications, which trades as Paytm, runs a payments business for consumers and merchants, distributes loans, insurance and other financial products, and sells commerce and cloud services such as ticketing, advertising and enterprise messaging. It was incorporated in 2000, is based in Noida, and employs about 48,000 people, most of them in merchant acquisition and operations.",
      "Revenue reached ₹95.54B on a trailing basis, up 23.8%, with a 37.0% gross margin, a 4.7% operating margin and an 8.9% net margin. The latest quarter, Q2 FY2027, produced ₹26.48B of revenue at a 10.1% operating margin and ₹2.25B of net income. The shares closed at ₹1,801.00 for a market capitalisation of ₹1,152.96B, near the top of a 52-week range of ₹930.60 to ₹1,855.50.",
      "Where the profit actually comes from is the key. A UPI payment between a customer and a merchant is free by regulation, so the payment rail itself earns almost nothing. Paytm makes money on the device that accepts the payment, on the services attached to the merchant, and on the loans it distributes. That is a different business from the one the revenue line first suggests.",
    ],
    quote:
      "In India, the payment is a utility and the merchant relationship is the product. Whoever owns the counter can sell the device, the loan and the software around it.",
  },
  whatItDoes: {
    paragraphs: [
      "The payments business covers consumer payments through the app, merchant payments through QR codes, soundboxes and card machines, and online payment gateway services for larger merchants. The merchant device is the important part: a soundbox that announces a payment is a subscription product, not a one-off sale, and it keeps Paytm in front of the shopkeeper every day.",
      "Financial services distributes loans, insurance, mutual funds and credit cards. Paytm does not take the credit risk on most of the lending; it originates customers for partner lenders and earns a commission. That is a high-margin, capital-light model when credit is good and a fragile one when the partner lenders tighten their underwriting.",
      "Commerce and cloud includes movie and event ticketing, gift vouchers, mobile recharges, advertising for merchants, and cloud and messaging services for enterprises. These are smaller but steadier businesses that use the same customer base and do not depend on payment volume. The mix across payments, financial services and cloud is what makes the revenue line more diversified than a pure payment processor's.",
    ],
    bullets: [
      {
        title: "Merchant payments",
        detail:
          "QR codes, soundboxes and card machines. The device rental and the merchant relationship are the durable revenue.",
      },
      {
        title: "Loan distribution",
        detail:
          "Commission from partner lenders. High margin and asset-light, but dependent on the partners' appetite for credit.",
      },
      {
        title: "Commerce and cloud",
        detail:
          "Ticketing, advertising and enterprise services. Smaller, steadier and less regulated than payments.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "A merchant pays for the device, either upfront or through a rental, and Paytm earns a fee on card and online transactions. UPI merchant payments carry no interchange, so the company cannot earn a percentage of most of the volume that runs through its network. The revenue comes from the subscription, from value-added services and from the financial products sold to the same merchant.",
      "That is why the gross margin is 37.0%, much lower than a software company's. A large share of revenue is spent on payment processing, telecom and device costs, and on the field staff who install and service the devices. The company employs about 48,000 people against ₹95.54B of revenue, which tells you this is an operationally heavy business: someone has to visit the shop, replace the device and sign up the next merchant.",
      "The operating leverage is in the merchant base. Once a soundbox is installed, the cost to serve that merchant is low and the rental repeats every month. The margin improvement from -12.2% in Q3 FY2025 to 10.1% in Q2 FY2027 is too large to come from revenue growth alone; it implies a lower cost per transaction and a revenue mix tilted toward fees rather than cashback-funded volume.",
    ],
  },
  growth: {
    paragraphs: [
      "The revenue history is not a straight line. Revenue rose from ₹28.01B in FY2021 to ₹99.78B in FY2024, fell 30.9% to ₹69.00B in FY2025 after a regulatory interruption in the payments business, then recovered 22.3% to ₹84.37B in FY2026. The trailing figure of ₹95.54B is still below the FY2024 peak, which is a useful reminder of how much the business had to rebuild.",
      "The recovery has come from merchant payments, device subscriptions and loan distribution. The company has also been growing the commerce and cloud businesses, which are less capital-intensive than devices. The next leg depends on whether the merchant base can be monetised more deeply, rather than simply enlarged.",
      "Estimates call for ₹108.68B of revenue this year and ₹143.34B next, with EPS of ₹18.81 and ₹40.20. That is 29% and 32% revenue growth, with profit more than doubling. The revenue estimate is plausible if the merchant and lending businesses keep scaling; the profit estimate assumes the operating margin keeps expanding at the pace of the last six quarters.",
    ],
    bullets: [
      {
        title: "Merchant devices",
        detail:
          "Each soundbox or QR installation is a recurring subscription and a foothold for other products.",
      },
      {
        title: "Loan distribution",
        detail:
          "Commission income that scales with the merchant and consumer base, without balance-sheet risk.",
      },
      {
        title: "Commerce and cloud",
        detail:
          "Ticketing, advertising and enterprise messaging, which grow with digital adoption rather than payment volume.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The size of the turnaround is visible in the annual numbers. Operating profit was -₹18.38B in FY2021, -₹23.84B in FY2022, -₹16.44B in FY2023, -₹9.43B in FY2024 and -₹15.06B in FY2025, before turning to +₹5.01B in FY2026. Net income followed the same path and reached ₹5.52B, or ₹8.64 per share, in FY2026. The FY2025 setback interrupted a recovery that had been underway.",
      "The quarterly trend is steadier than the annual numbers. Operating margin went from -12.2% in Q3 FY2025 to 3.8% in Q1 FY2026 and then 10.1% in Q2 FY2027. Net income has averaged about ₹2.1B per quarter over the last four quarters, which is a run rate of roughly ₹8B a year. That is a real profit, not a one-off.",
      "Capital returns are thin: 5.3% on equity and 5.0% on invested capital, both low because the equity base includes ₹159.40B of net cash that earns a modest return. The operating business earns more than 5% on the capital actually employed in it; the consolidated return is diluted by the cash pile.",
    ],
  },
  cash: {
    paragraphs: [
      "Cash generation was -₹12.11B, or -14.4% of revenue, despite ₹5.52B of net income. The gap is the cost of growth in a device business: each soundbox and card machine is a piece of capital equipment that is placed with a merchant and earns a rental over several years. The cash goes out before the revenue arrives, and the accounting profit recognises the rental as it is earned.",
      "The cash pile is the reason this is not a solvency question. Net cash is ₹159.40B, about 14% of the market capitalisation, and interest cover is 32.9x. The company can fund several years of negative free cash flow from its own balance sheet, which is a rare position for a company that was loss-making until recently.",
      "The cash pile also distorts the valuation. The EV/EBITDA multiple is calculated on an enterprise value that is net of the cash, so the operating business is being valued at about ₹994B rather than the ₹1,153B market capitalisation. That matters when comparing the multiple with peers that carry debt.",
    ],
  },
  valuation: {
    paragraphs: [
      "At ₹1,801 the shares trade at 135.2x trailing earnings, 131.2x EV/EBITDA and 10.4x EV/sales, with a negative free-cash-flow yield of -1.1%. The EV/EBITDA multiple is calculated on a small EBITDA base, so it is a fragile number: a modest change in operating profit moves it a long way.",
      "Forward, the P/E is about 96x this year's ₹18.81 and about 45x next year's ₹40.20. The second number is the one that matters. If the profit run rate doubles as forecast, the multiple becomes expensive but not absurd for a growing payments and lending platform; if it does not, 135x trailing earnings has no support.",
      "The comparison with the rest of the consumer batch does not help much, because Paytm is a different kind of business. What matters is the direction of the operating margin, the size of the cash pile and the share of revenue that comes from fees rather than from cashback-funded payment volume.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus draws on twenty-two analysts, with a mean target of ₹1,973.73 and a range of ₹1,302.00 to ₹2,300.00. The spread between the high and low targets is wide, and the low end is well below the current price, which reflects disagreement about the durability of the profit turn.",
      "Current-year estimates are ₹108.68B of revenue and ₹18.81 of EPS, and next year's are ₹143.34B and ₹40.20. Twenty analysts contribute to the current year and nineteen to the next. The next-quarter estimate is ₹28.55B of revenue and ₹4.96 of EPS, a step up from the ₹3.52 earned in Q2 FY2027.",
      "Both years assume the operating margin continues to expand and the loan distribution business keeps growing. Both are plausible, but both depend on regulation and on the appetite of partner lenders, which are outside the company's control.",
    ],
  },
  risks: {
    intro:
      "Paytm's risks are regulatory, competitive and balance-sheet-heavy in a way that is easy to miss. The company has the cash to absorb a bad year; it does not have the pricing power to ignore a regulatory change.",
    items: [
      {
        title: "Payments regulation",
        severity: "High",
        detail:
          "UPI merchant payments carry no interchange, and rules on devices, KYC and payment banks can change the economics overnight.",
        watch:
          "Regulatory circulars, the share of revenue from regulated payment fees, and the payments bank structure.",
      },
      {
        title: "Competition",
        severity: "High",
        detail:
          "Large technology platforms and bank-backed apps compete for the same merchants, often with deeper pockets.",
        watch:
          "Merchant additions, device rentals and the trend in payment processing revenue.",
      },
      {
        title: "Lending partner dependence",
        severity: "Medium",
        detail:
          "Loan distribution earns a commission but depends on partner lenders staying willing to lend through the platform.",
        watch:
          "The number of lending partners and the volume of loans distributed.",
      },
      {
        title: "Device capex and cash burn",
        severity: "Medium",
        detail:
          "Each device is capital spent before the rental is earned. Fast growth consumes cash even when the income statement is profitable.",
        watch:
          "Free cash flow, capex and the device inventory balance.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 135.2x earnings and 131.2x EV/EBITDA, the price assumes the profit run rate keeps doubling.",
        watch:
          "Operating margin and EPS against the consensus path.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The turn from -12.2% to 10.1% is the investment case. A stall would change the story.",
      },
      {
        title: "Free cash flow",
        detail:
          "Profit without cash is not yet a self-funding business. The gap is the device rollout.",
      },
      {
        title: "Net cash",
        detail:
          "₹159.40B gives the company time, but it also dilutes returns until it is deployed or returned.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Paytm has done the hard part: it turned a loss-making payments business into a profitable one, with four quarters averaging about ₹2.1B of net income and an operating margin of 10.1% in the latest quarter. The merchant device and the loan distribution business are the engines, not the UPI rail.",
      "The cash flow is the unfinished part. A ₹12.11B outflow in a year of ₹5.52B of profit means the growth is still being funded by the balance sheet, and the ₹159.40B net cash is what makes that possible. A business that earns 5.3% on equity while sitting on that much cash is not yet a compounder.",
      "The valuation already assumes the margin keeps expanding and the profit doubles. The device economics and the lending commissions have to be durable enough to justify 135x trailing earnings; otherwise the cash pile is the more important part of the story.",
    ],
    questions: [
      "How much of revenue comes from device rentals and loan distribution rather than payment processing?",
      "What is the payback period on a soundbox, and how many devices are in the field?",
      "How many lending partners does the platform have, and how concentrated is the volume?",
      "What would operating margin be if the regulatory rules on merchant payments changed?",
    ],
  },
};
