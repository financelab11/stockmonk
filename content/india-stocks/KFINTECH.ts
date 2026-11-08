import type { StockStory } from "@/content/stocks/types";

export const KFINTECH: StockStory = {
  ticker: "KFINTECH",
  kicker: "Financials · Registrar and transfer agency",
  title: "KFin keeps the mutual fund register, and now sells the software behind it",
  dek: "Revenue rose 27.8% to ₹14.8B while trailing operating income fell below FY2026's. The incremental work is arriving at a lower margin than the folios the business was built on.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is ₹14.77B, up 27.8%, but the operating margin has fallen to 33.0% from 40.7% in FY2026.",
    "Net margin is 23.4% and return on invested capital 29.0%, well above the cost of capital.",
    "Free cash flow was ₹2.59B, a 19.9% margin, and the balance sheet holds ₹4.05B of net cash.",
    "The quarterly operating margin has ranged from 45.2% to 34.2% over eight quarters.",
    "The shares trade at 45.4x earnings, 27.4x EV/EBITDA and 61.0x free cash flow.",
  ],
  filingUrl: "https://www.nseindia.com/companies-listing/corporate-filings-annual-reports?symbol=KFINTECH",
  irUrl: "https://www.kfintech.com",
  bigPicture: {
    paragraphs: [
      "KFin Technologies is a Hyderabad-based registrar and transfer agency incorporated in 2017 out of a business that has administered investor records for much longer. In plain terms, it keeps the shareholder and unitholder registers that mutual funds, listed companies and alternative investment funds are legally required to maintain. It also sells the software that does the work — onboarding and KYC, compliance reporting, e-voting, fund accounting, distributor platforms — to institutions that would rather rent than build.",
      "The registrar function is a scale business with a regulatory licence attached. A fund house cannot easily switch registrar without moving every folio, so contracts are sticky and revenue recurs with the asset base. Trailing revenue was ₹14.77B, up 27.8%, with a 33.0% operating margin and a 23.4% net margin.",
      "At ₹914 the market capitalisation is ₹158.04B, or 45.4x earnings of ₹20.18, 27.4x EV/EBITDA and 10.4x sales. The shares are 38% up a 52-week range of ₹784.00 to ₹1,126.40 and have fallen 14.4% over the past year, after a 157.8% five-year gain.",
    ],
    quote:
      "A registrar is paid per folio, not per trade. That makes the revenue quiet, recurring and almost impossible to lose — until the client decides to bring the work in-house.",
  },
  whatItDoes: {
    paragraphs: [
      "The mutual fund registrar business is the core. KFin maintains folios, processes purchases and redemptions, handles dividend and dividend-reinvestment cycles, runs the call centres and investor service centres, and keeps the compliance records that the regulator inspects. Each folio generates a fee, and the fee is largely set by the size of the asset base and the number of transactions rather than negotiated case by case.",
      "Issuer solutions serve listed companies rather than funds: folio creation and maintenance, corporate actions, e-voting and annual general meetings, insider-trading compliance, anti-money-laundering screening, and the electronic vault that stores the underlying documents. This is a smaller revenue line than fund servicing but a natural adjacency, because the same infrastructure handles both.",
      "The third leg is international and platform work: fund administration and accounting, an order management system, a cloud data platform and reporting tools, sold in the United States, Canada and other markets. These are software and back-office contracts, priced per user or per asset, and they are where most of the recent growth has come from. The company employs 6,044 people, which tells you that a large part of the delivery is still human processing rather than pure software.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is charged per folio and per transaction for fund clients, per issuer for corporate clients, and per contract or per user for platform clients. Gross margin of 58.1% is the cost of the people and infrastructure that actually process the work — call centres, service centres, back-office teams — and it is much lower than a software company's because the work is labour-intensive. Operating margin of 33.0% is what remains after sales, technology, management and compliance.",
      "The operating leverage is real but bounded. Adding folios to an existing fund client costs very little incremental revenue, because the systems and the service team are already in place. Adding a new fund client or a new country costs a full setup, which is why margin tends to fall in years of expansion and recover afterwards. The same pattern applies to platform contracts, where implementation costs are front-loaded.",
      "The fee itself is constrained. Registrar charges for mutual funds sit inside a regulatory framework, so the company cannot raise prices at will. Growth therefore has to come from more folios, more asset value, more issuers and more platform clients — a volume business with a regulated price, not a pricing-power business.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 34.7% a year from ₹4.81B in FY2021 to ₹13.01B in FY2026, and the latest quarter grew 30.1%. That is the fastest five-year rate in the Indian capital-markets group, and it came from a combination of rising mutual fund assets, new issuer mandates and international expansion. FY2021 itself was a loss year, with a net loss of ₹65 Cr and a diluted loss of ₹4.28 a share, so the compound rate is measured from a low base.",
      "The growth has a cost that is visible in the margin. FY2026 operating income was ₹5.30B on ₹13.01B of revenue. In the trailing period, revenue is higher at ₹14.77B but the operating margin is 33.0%, which implies operating income below the FY2026 figure. The incremental revenue is arriving at a below-average margin, which is what happens when growth comes from lower-margin back-office and international contracts rather than from additional folios on an existing book.",
      "Third-party estimates expect ₹15.84B of revenue and ₹22.71 of EPS this fiscal year, then ₹18.45B and ₹27.48. Those numbers assume the margin stabilises near the current level and revenue keeps growing at a high-teens rate. They do not assume a return to the 40%-plus margins of FY2026.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual record tells a turnaround story followed by a growth story. Revenue rose from ₹4.81B in FY2021 to ₹13.01B in FY2026, operating income from ₹2.12B to ₹5.30B, and net income from a loss of ₹65 Cr to a profit of ₹3.44B. Diluted EPS went from -₹4.28 to ₹19.92. The operating margin, though, drifted from 44.1% in FY2021 to 40.7% in FY2026 and 33.0% on a trailing basis: the business got bigger and slightly less profitable per rupee.",
      "The quarterly table makes the drift explicit. Operating margin was 45.2%, 43.1%, 41.6%, 44.0%, 41.0%, 36.9%, 34.2% and 40.0% — a downward trend with a partial recovery in the latest quarter, which produced ₹4.02B of revenue and ₹100 Cr of net income. Return on equity is 22.6% and return on invested capital 29.0%. Both are strong, and both would be higher if the margin had held.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was ₹2.59B, a 19.9% margin, and it has been positive every year in the table: ₹1.75B, ₹1.85B, ₹1.54B, ₹2.04B, ₹3.13B and ₹2.59B. That consistency is unusual for a business growing at 30% a year, and it reflects the fact that registrar work needs people and software rather than factories. Capital expenditure is modest; the constraint is hiring and training.",
      "Net cash of ₹4.05B and interest cover of 112.6x mean there is no financial risk in the capital structure. The company could fund a large acquisition from its own balance sheet without borrowing. The question for a shareholder is whether that cash will be used to buy growth at a sensible price, because the recent margin trend suggests that some of the growth already purchased has been expensive.",
    ],
  },
  valuation: {
    paragraphs: [
      "At ₹914 the shares trade at 45.4x earnings, 27.4x EV/EBITDA, 10.4x sales and 61.0x free cash flow. The most useful comparison is with CAMS, the larger mutual fund registrar, which trades at 35.0x earnings and 23.1x EV/EBITDA on a 39.1% operating margin and a 9.4% revenue growth rate. KFintech is more expensive on both multiples despite a lower margin, because it is growing three times faster.",
      "The rest of the peer group frames the trade-off. CDSL trades at 55.7x earnings and 42.5x EV/EBITDA, MCX at 50.3x and 38.0x, Angel One at 26.4x and 11.1x, and Anand Rathi Wealth at 86.6x and 87.2x. The market is paying for growth and for the recurring nature of registrar revenue, and it is paying less for transaction-based earnings.",
      "The multiple therefore rests on two assumptions: that revenue keeps compounding in the high teens and that the operating margin stops falling. The first has been true for five years. The second has not been true for two.",
    ],
  },
  analysts: {
    paragraphs: [
      "Seventeen analysts cover the stock, with a mean target of ₹1,090.88 and a range of ₹897.00 to ₹1,250.00. The mean is about a fifth above the ₹914 close, and the low end sits just below the current price.",
      "The current-year estimate of ₹15.84B of revenue and ₹22.71 of EPS comes from all seventeen analysts, and next year's ₹18.45B and ₹27.48 from the same number. That breadth makes the estimates more meaningful than the two-analyst coverage at some peers. The implied EPS growth of roughly a fifth, on revenue growth of roughly a sixth, assumes a modest margin recovery — which is the assumption to test against the next two quarterly reports.",
    ],
  },
  risks: {
    intro:
      "KFintech's risks are about price, cost and client retention. The revenue is sticky; the margin is not.",
    items: [
      {
        title: "Regulated fees",
        severity: "High",
        detail:
          "Registrar charges for mutual funds sit inside a regulatory framework. A review that lowers the fee per folio goes straight to revenue and margin.",
        watch:
          "Any revision to registrar fee norms and the revenue per folio disclosed each quarter.",
      },
      {
        title: "Margin dilution",
        severity: "High",
        detail:
          "Operating margin has fallen from 40.7% in FY2026 to 33.0% on a trailing basis. If the new contracts are structurally lower-margin, the decline is permanent.",
        watch:
          "Operating margin and the mix between fund servicing, issuer solutions and platform work.",
      },
      {
        title: "Client concentration and insourcing",
        severity: "Medium",
        detail:
          "Large fund houses can move servicing in-house or split mandates between registrars. Losing one large client removes a block of folios at once.",
        watch:
          "The number of fund clients and any disclosed client concentration.",
      },
      {
        title: "Execution in new markets",
        severity: "Medium",
        detail:
          "Fund administration in the United States and Canada is a different regulatory regime with established competitors.",
        watch:
          "International revenue growth and the margin on that revenue.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "At 45.4x earnings, the price assumes both high growth and margin stability. The second has been missing.",
        watch:
          "The earnings multiple against the reported margin trend.",
      },
    ],
    watchlist: [
      {
        title: "Revenue per folio",
        detail:
          "The unit economics of the core business. Falling revenue per folio means fee pressure or mix shift.",
      },
      {
        title: "Operating margin",
        detail:
          "The clearest signal of whether growth is being bought or earned.",
      },
      {
        title: "Client additions",
        detail:
          "New fund mandates and issuer wins show whether the sticky revenue base is widening.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "KFintech is a well-run, cash-generative registrar with a 29.0% return on invested capital and a five-year revenue compound of 34.7%. It has grown faster than CAMS and is priced for it, at 45.4x earnings against CAMS's 35.0x.",
      "The problem is that the growth has come with a falling margin. Operating income in the trailing period is below the FY2026 level despite higher revenue, and the quarterly margin has drifted from 45.2% to 34.2% before recovering to 40.0%. A business that trades at a premium to a more profitable peer has to show that the margin decline is investment rather than structure.",
      "What is not known is how much of the new revenue is low-margin by design — implementation work that later becomes recurring — and how much is permanently lower-margin. The next four quarters will settle it.",
    ],
    questions: [
      "Why is trailing operating income below FY2026's despite higher revenue?",
      "What margin does the international fund administration business earn?",
      "How much revenue comes from platform contracts versus per-folio fees?",
      "Can the company pass through cost inflation under the current fee framework?",
    ],
  },
};
