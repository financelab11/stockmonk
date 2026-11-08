import type { StockStory } from "@/content/stocks/types";

export const CDSL: StockStory = {
  ticker: "CDSL",
  kicker: "Financials · Depositories",
  title: "CDSL collects a small toll on every dematerialised share in India",
  dek: "The depository earns per folio and per transaction on a 100% gross margin. Revenue is ₹12.5B and free cash flow ₹3.5B, yet the shares trade at 81.2x that cash flow.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹12.54B, up 16.1%, with a 55.3% operating margin and a 37.2% net margin.",
    "Gross margin is reported at 100%, because a depository sells record-keeping rather than goods.",
    "Free cash flow was ₹3.46B, a 30.2% margin, against net cash of ₹7.65B.",
    "Revenue rose in FY2026 while operating income fell, from ₹6.25B to ₹5.82B, as costs grew faster.",
    "The shares trade at 55.7x earnings, 42.5x EV/EBITDA and 81.2x free cash flow.",
  ],
  filingUrl: "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=CDSL",
  irUrl: "https://www.cdslindia.com",
  bigPicture: {
    paragraphs: [
      "Central Depository Services is one of the two depositories that hold Indian shares in electronic form. It was incorporated in 1997 and works through depository participants — brokers, banks and custodians — who open demat accounts for investors and send instructions to the depository. CDSL does not usually face the retail investor directly; it keeps the register, settles transfers between accounts, records pledges and nominations, and runs the e-voting and corporate-action machinery for listed companies.",
      "That position makes it a toll collector on the stock market rather than a participant in it. Every demat account pays an annual maintenance charge, every sale or transfer generates a transaction fee, and every new account requires a KYC record. Revenue was ₹12.54B on a trailing basis, up 16.1%, with a 55.3% operating margin and a 37.2% net margin.",
      "At ₹1,343.50 the market capitalisation is ₹280.79B, or 55.7x earnings of ₹24.16, 42.5x EV/EBITDA and 21.8x sales. The shares are 41% up a 52-week range of ₹1,116.30 to ₹1,673.70 and have fallen 14.7% over the past year after a 94.6% five-year gain.",
    ],
    quote:
      "A depository is the least glamorous business in the market and one of the most profitable, because it is paid to remember who owns what.",
  },
  whatItDoes: {
    paragraphs: [
      "The core depository function is custody of the electronic register. Shares are dematerialised on entry, held in an account, transferred on instruction, pledged as collateral and finally rematerialised if the holder wants a certificate. Each of those steps is a billable event, and each requires the depository to keep an audit trail that regulators and courts will accept.",
      "Around that core sit two adjacent businesses. The data entry and storage segment maintains centralised KYC records for capital-market investors, so a client who has been verified once does not have to repeat the process at every intermediary. The repository segment holds insurance policies and warehouse receipts in electronic form, which is a smaller business but uses the same record-keeping machinery.",
      "The company employs 494 people. For ₹12.54B of revenue, that is an extraordinary ratio, and it is the whole point of the model: the software does the work, the marginal cost of a new folio is close to zero, and the fixed cost base is spread across a national market.",
    ],
    bullets: [
      {
        title: "Depository services",
        detail:
          "Annual maintenance charges per demat account, transaction fees on transfers and pledges, account opening and e-voting services for issuers.",
      },
      {
        title: "KYC and data",
        detail:
          "A central record of verified investor documents. Earns fees per record and per verification, and makes the account-opening process cheaper for participants.",
      },
      {
        title: "Repository",
        detail:
          "Electronic insurance policies and warehouse receipts. Small today, but it extends the record-keeping model into other asset classes.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Because the product is a register rather than a good, the reported gross margin is 100%. There is no cost of materials, so every rupee of revenue is available to cover employee costs, technology, depreciation and administration. Operating margin of 55.3% is what remains after those costs, and net margin of 37.2% is what remains after tax. Very few businesses of any kind convert revenue to profit at that rate.",
      "The revenue base has two drivers, and they behave differently. The annual maintenance charge depends on the number of demat accounts in existence, which grows steadily and only falls when accounts are closed. Transaction fees depend on trading activity, which is volatile. In a strong market the second grows much faster than the first, which flatters revenue growth; in a weak market it contracts and the fixed cost base becomes visible.",
      "Pricing is set within a regulatory framework, so the company cannot simply raise charges when costs rise. That limits pricing power and pushes competition towards service quality, turnaround time and the breadth of the participant network. It also means the operating margin is a function of cost control and scale rather than of price.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 24.3% a year from ₹3.44B in FY2021 to ₹11.45B in FY2026, and the latest quarter grew 23.5%. That is a remarkable rate for a utility-like business, and it came from two things: the number of demat accounts in India rose sharply, and the value of the securities held in them rose with the market.",
      "The FY2026 pattern is worth pausing on. Revenue rose from ₹10.82B to ₹11.45B, but operating income fell from ₹6.25B to ₹5.82B and net income fell from ₹5.26B to ₹4.55B. Costs grew faster than revenue for the first time in the table. Then Q4 FY2026 produced a 44.1% operating margin and ₹80 Cr of net income, before the next two quarters recovered to 47.1% and 57.9%.",
      "Third-party estimates expect ₹13.63B of revenue and ₹26.17 of EPS this fiscal year, then ₹15.31B and ₹30.24. Those are above the company's recent run rate but not wildly so, and they assume the account base keeps growing and transaction volumes hold.",
    ],
    bullets: [
      {
        title: "Account growth",
        detail:
          "Every new demat account adds an annual charge and a stream of future transactions. Growth depends on retail participation widening.",
      },
      {
        title: "Trading volume",
        detail:
          "Transaction fees rise and fall with market activity. This is the volatile half of the revenue base.",
      },
      {
        title: "New registries",
        detail:
          "KYC records, insurance policies and warehouse receipts extend the model beyond equities and deepen the per-investor relationship.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The five-year record shows a business that scaled without losing margin until FY2026. Operating income went from ₹2.12B in FY2021 to ₹6.25B in FY2025, and net income from ₹2.01B to ₹5.26B. Diluted EPS went from ₹9.59 to ₹25.20. Then FY2026 gave back a year: operating income ₹5.82B, net income ₹4.55B, EPS ₹21.82.",
      "The quarterly table shows how sharply a 100% gross margin business reacts to small changes. Operating margin was 57.9%, 48.7%, 50.2%, 55.2%, 52.6%, 44.1%, 47.1% and 57.9% across eight quarters, and net income moved between ₹80 Cr and ₹1.73B on revenue between ₹2.24B and ₹3.94B. Return on equity is 26.4% and return on invested capital 32.0%. Those are excellent numbers, and they are the reason the shares carry a premium multiple.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹3.46B, a 30.2% margin, and it has been positive in every year in the table: ₹1.75B, ₹2.58B, ₹44 Cr, ₹3.13B, ₹3.88B and ₹3.46B. The FY2023 dip to ₹44 Cr is the exception that proves the rule — a year of heavy technology spending can absorb almost all of the operating cash flow, but the business does not need external capital to recover.",
      "Net cash of ₹7.65B means the balance sheet is a source of treasury income rather than a cost. There is no meaningful debt and interest cover is not applicable. The practical question is what the company does with the cash: it can fund new registries, invest in technology, or return it to shareholders. At 81.2x free cash flow, the market is valuing the growth of that cash stream, not the cash itself.",
    ],
  },
  valuation: {
    paragraphs: [
      "The shares trade at 55.7x earnings, 42.5x EV/EBITDA, 21.8x EV/sales and 81.2x free cash flow, with an FCF yield of 1.2%. On sales, only MCX and Anand Rathi Wealth are richer in the Indian capital-markets group; on earnings it is second to Anand Rathi Wealth.",
      "The comparison is instructive. Angel One trades at 26.4x earnings and 11.1x EV/EBITDA, MCX at 50.3x and 38.0x, KFin Technologies at 45.4x and 27.4x, CAMS at 35.0x and 23.1x, and Anand Rathi at 86.6x and 87.2x. CDSL's premium over Angel One is the premium for a regulated duopoly with a growing account base, against a transaction business that has to earn every rupee again each quarter.",
      "What the multiple assumes is that revenue keeps compounding at a high-teens rate and that the FY2026 cost increase was a one-off. A 55.7x earnings multiple on a business growing revenue 16.1% leaves no room for a second year of falling operating income.",
    ],
  },
  analysts: {
    paragraphs: [
      "Fifteen analysts cover the stock, with a mean target of ₹1,362.47 and a range of ₹1,140.00 to ₹1,570.00. The mean is barely above the ₹1,343.50 close, which tells you the sell side sees the shares as roughly fairly valued after the 14.7% one-year decline.",
      "The current-year estimate is ₹13.63B of revenue and ₹26.17 of EPS from eleven analysts, with next year at ₹15.31B and ₹30.24 from sixteen. The near-quarter figure of ₹3.44B of revenue and ₹7.40 of EPS comes from eight analysts and sits below the ₹3.94B just reported, so the models expect some normalisation after a strong September quarter. These are third-party estimates, shown for context rather than as a view.",
    ],
  },
  risks: {
    intro:
      "CDSL's risks are structural rather than operational: a regulated fee, a duopoly that could become more competitive, and a revenue base that depends on retail participation continuing to widen.",
    items: [
      {
        title: "Regulated pricing",
        severity: "High",
        detail:
          "Charges are set within a regulatory framework. A review that lowers annual maintenance or transaction fees goes straight to the operating margin.",
        watch:
          "Any revision to depository charges and the yield per account in the quarterly disclosure.",
      },
      {
        title: "Market cyclicality",
        severity: "High",
        detail:
          "Transaction fees and account openings both fall in a weak market. FY2026 showed revenue rising while operating income fell.",
        watch:
          "Quarterly revenue against the number of accounts and the value of securities held.",
      },
      {
        title: "Cost growth",
        severity: "Medium",
        detail:
          "Technology and compliance costs have been rising faster than revenue. A 100% gross margin business has no cost of goods to absorb the increase.",
        watch:
          "Operating margin and the employee and technology cost lines.",
      },
      {
        title: "Competition between depositories",
        severity: "Medium",
        detail:
          "India has two depositories, and participants can route business to either. Service quality and pricing both matter at the margin.",
        watch:
          "Market share of new accounts and any pricing response from the other depository.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 55.7x earnings and 81.2x free cash flow, the shares need uninterrupted growth to hold the multiple.",
        watch:
          "The earnings multiple against the growth rate reported each quarter.",
      },
    ],
    watchlist: [
      {
        title: "Demat account additions",
        detail:
          "The stock of accounts is the annuity; new additions are the growth.",
      },
      {
        title: "Transaction revenue",
        detail:
          "The volatile line. Its share of total revenue decides how cyclical the company is.",
      },
      {
        title: "Operating margin",
        detail:
          "FY2026 showed it can fall even when revenue rises. That is the pattern to watch.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "CDSL is one of the best businesses in this coverage group on almost every quality measure: a 55.3% operating margin, a 32.0% return on invested capital, positive free cash flow every year, and ₹7.65B of net cash. It is also expensive at 55.7x earnings and 81.2x free cash flow.",
      "The FY2026 result is the crack in the story. Revenue grew, operating income did not, and the fourth quarter produced the weakest margin in the table. The recovery in the following two quarters was strong, but it came with a surge in transaction revenue that depends on market conditions.",
      "The question is whether CDSL is a compounder whose earnings grow with the account base, or a cyclical whose profits rise and fall with trading volumes. The valuation assumes the first. The quarterly table looks more like the second.",
    ],
    questions: [
      "How much of revenue comes from annual maintenance charges versus transaction fees?",
      "Why did costs grow faster than revenue in FY2026?",
      "How many demat accounts are active rather than dormant?",
      "What would a reduction in regulated fees do to the operating margin?",
    ],
  },
};
