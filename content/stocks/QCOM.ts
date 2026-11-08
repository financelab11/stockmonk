import type { StockStory } from "./types";

export const QCOM: StockStory = {
  ticker: "QCOM",
  kicker: "Semiconductors · Wireless chips and licensing",
  title: "Qualcomm sells licences and chips to the same handset makers",
  dek: "The licensing business earns a royalty on every phone; the chip business sells the processor inside it. One is a toll on the industry, the other is a fight, and the margin trend is currently about the fight.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $43.12B, down 2.6%, and the latest quarter fell 8.4%.",
    "Operating margin is 20.1%, down from 26.6% six quarters earlier.",
    "Free cash flow was $8.65B, a 20.1% margin, with $7.43B of net debt.",
    "At $165.41 the shares trade at 13.0x earnings and 20.5x free cash flow.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/804328/000080432826000128/qcom-20260927.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000804328&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Qualcomm has two businesses that serve the same customer. The licensing business owns patents that are essential to cellular standards and charges handset makers a royalty for using them. The chip business designs the processors, modems and radio components that go inside the phone. A manufacturer can license the technology and buy the chips, or license and build its own, which is why the two businesses are entangled.",
      "Licensing is close to a toll: the patent portfolio is already developed, so the incremental cost of another licensee is small and the margin is high. Chips are a competitive semiconductor business with design costs, foundry bills and price pressure. The blended gross margin of 53.1% is the average of a very high-margin royalty stream and a lower-margin product business.",
      "At $165.41 the market capitalisation is $177.0B, or 13.0x trailing earnings and 17.9x EV/EBITDA. The shares sit 31% of the way up a 52-week range of $121.99 to $259.92 and returned negative 2.5% over the past year. The stock is cheap on earnings and less cheap on EBITDA, which is a clue that something below the operating line is lifting the net figure.",
    ],
    quote:
      "A royalty is priced by negotiation and enforced by patent law. A chip is priced by the market. The two margins tell you which one is under pressure.",
  },
  whatItDoes: {
    paragraphs: [
      "The chip business sells Snapdragon processors and modems for smartphones, plus radio-frequency front-end components, power management and connectivity chips. It also sells into automotive, networking and internet-of-things devices, which are smaller today but less exposed to the handset replacement cycle. Customers are handset makers and, increasingly, automotive suppliers and device manufacturers.",
      "The licensing business grants rights to a portfolio of patents that any device connecting to a cellular network needs. Royalties are negotiated per device or as a percentage of the selling price, subject to caps. The business has been the subject of disputes with regulators and customers over the years, and each dispute carries revenue risk because the licence terms are renegotiated rather than renewed automatically.",
      "Qualcomm employed 41,000 people. That is a large design and engineering organisation for a fabless company, because the chip business supports many product lines and because the licensing business requires legal and technical teams to defend and value the portfolio.",
    ],
    bullets: [
      {
        title: "Handsets",
        detail:
          "The largest end market. Processors, modems and radio components, tied to the phone replacement cycle.",
      },
      {
        title: "Automotive and IoT",
        detail:
          "Smaller today, growing, and less dependent on a single device category.",
      },
      {
        title: "Licensing",
        detail:
          "Royalties on standard-essential patents. High margin, negotiated terms and periodic legal disputes.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Chip revenue is recognised when products ship, and the margin depends on design wins, wafer costs and competitive pricing. A flagship phone processor commands a high price because it is difficult to build; a mid-range part competes on cost. Mix between tiers is therefore a major driver of gross margin.",
      "Licensing revenue is recognised as royalties are earned, usually per device shipped. Because the patent portfolio is a sunk cost, almost all of it reaches operating profit. That is why the blended operating margin can be 20.1% even while the chip business is under pressure: the royalty stream is carrying a disproportionate share of the profit.",
      "Net margin of 31.6% is higher than operating margin, which means a substantial amount of income is arriving below the operating line. In FY2026 net income was $13.63B against operating income of $8.66B, and in Q2 FY2026 alone net income was $7.37B. A reader should not treat the net figure as a measure of the chip or licensing business until the composition of that income is clear.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 10.6% a year over the five fiscal years in the record, but the path was not smooth: $44.20B in FY2022, $35.82B in FY2023, $38.96B in FY2024, $44.28B in FY2025 and $43.12B in FY2026. The FY2023 decline came in a weak handset market, and the recovery took two years.",
      "The current direction is down. Trailing revenue fell 2.6% and the latest quarter fell 8.4% to $10.32B. Operating margin fell from 26.6% in Q3 FY2025 to 13.1% in Q4 FY2026, a steady slide across six quarters. That is not a single bad quarter; it is a trend.",
      "The attributed consensus expects $45.42B this fiscal year and $52.47B next year, with EPS of $9.60 and $12.25. The next-year number implies a sharp rebound from the current run rate. The drivers would be a handset recovery, automotive design wins and licensing renewals. The brake is that handset demand is mature and the chip business faces well-funded competitors.",
    ],
  },
  performance: {
    paragraphs: [
      "The annual operating record shows the cyclicality: operating income was $15.86B in FY2022, $7.79B in FY2023, $10.07B in FY2024, $12.36B in FY2025 and $8.66B in FY2026. Revenue moved by less than operating income did, which means margins, not volume, are driving the profit line.",
      "The quarterly margin series is the clearest evidence of pressure: 26.6% in Q3 FY2025, 25.9% in Q4, 27.5% in Q1 FY2026, 21.8% in Q2, 16.3% in Q3 and 13.1% in Q4. Revenue over those quarters went from $10.37B to $10.32B, so the decline in margin is not a volume story. Something in the mix or the pricing changed.",
      "Return on equity is 44.8% and return on invested capital is 18.1%. The gap between them is large, and it reflects a capital structure that uses debt and buybacks to keep equity small. Diluted EPS was $12.70 on a trailing basis, which is higher than operating profit per share would suggest for the reasons described above.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $8.65B, a 20.1% margin, and it has been higher in each of the previous four years: $6.83B, $9.85B, $11.16B and $12.82B. The decline in the latest year matches the decline in operating margin rather than a change in working capital.",
      "Net debt is $7.43B, or 0.7x EBITDA. That is a comfortable level, and the company also pays a dividend yielding 2.2%. The combination of modest leverage and a high payout reflects a business that generates cash steadily and does not need much capital to grow, because it is fabless.",
      "The cash flow supports buybacks, which reduce the share count and lift earnings per share. That is helpful when the share price is low and the business is stable. It does not fix a margin decline; it only changes how the decline is distributed across shareholders.",
    ],
  },
  valuation: {
    paragraphs: [
      "At 13.0x trailing earnings, QCOM looks inexpensive. At 17.9x EV/EBITDA it looks less so, and at 20.5x free cash flow it looks like a fairly valued cyclical. The differences between those three multiples are the story: earnings are flattered by below-the-line income, while EBITDA and cash flow reflect the operating business.",
      "The peer table shows Nvidia at 23.3x earnings, Broadcom at 36.6x and AMD at 96.7x, all growing faster. Qualcomm at 13.0x is priced as a mature, cyclical semiconductor company with a licensing annuity attached. That is a fair description of the business.",
      "The valuation question is whether the licensing stream deserves a higher multiple than the chip business. If the market valued them separately, the royalty stream would command a premium and the chip business a discount. The blended multiple hides that distinction.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-eight analysts contribute to the attributed consensus, with a mean target of $185.79 and a range of $100.00 to $320.00. The mean is above the last close and the range is very wide, which reflects disagreement about the handset cycle and about licensing renewals.",
      "Estimates call for $45.42B of revenue and $9.60 of EPS this fiscal year, then $52.47B and $12.25. Next quarter is expected to produce $10.82B and $2.25. The current-year revenue estimate is above the trailing $43.12B, so the forecasters expect the decline to stop before it becomes a trend.",
      "These are third-party figures. The consensus EPS is well below the trailing $12.70, which suggests the analysts expect the below-the-line income not to repeat.",
    ],
  },
  risks: {
    intro:
      "Qualcomm's risks are concentrated in the handset market and in the legal arrangements that support the licensing business. The balance sheet is not the issue.",
    items: [
      {
        title: "Licensing disputes",
        severity: "High",
        detail:
          "Royalty terms are renegotiated and litigated. An adverse ruling or a new agreement at a lower rate would hit the highest-margin revenue directly.",
        watch:
          "Licensing revenue, contract renewals and legal disclosures.",
      },
      {
        title: "Handset market maturity",
        severity: "High",
        detail:
          "The chip business depends on phone shipments and on winning the flagship tier. A weaker replacement cycle reduces volume and mix at the same time.",
        watch:
          "Handset revenue and the mix of premium versus mid-tier chips.",
      },
      {
        title: "Margin compression",
        severity: "High",
        detail:
          "Operating margin fell from 26.6% to 13.1% in six quarters without a revenue collapse. That points to pricing or mix, and neither reverses quickly.",
        watch:
          "Quarterly operating margin and gross margin.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "A small number of handset makers account for a large share of chip revenue, and each one can dual-source or design its own silicon.",
        watch:
          "Large-customer disclosures and design-win announcements.",
      },
      {
        title: "Below-the-line income",
        severity: "Medium",
        detail:
          "Net income has exceeded operating income by a wide margin. If that income is non-recurring, the earnings multiple is understated.",
        watch:
          "The composition of other income and the tax rate.",
      },
    ],
    watchlist: [
      {
        title: "Licensing revenue",
        detail:
          "The royalty stream is the profit engine. Its growth matters more than chip unit volumes.",
      },
      {
        title: "Operating margin",
        detail:
          "The six-quarter slide is the clearest signal in the financial statements.",
      },
      {
        title: "Automotive design wins",
        detail:
          "The diversification away from handsets is the long-term growth story.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Qualcomm is two businesses with different economics under one roof. The licensing arm earns high margins on a patent portfolio, and the chip arm competes in a cyclical market where design wins and pricing decide the outcome. The 53.1% gross margin and 20.1% operating margin are the blend.",
      "The current trend is negative. Revenue is down 2.6%, the latest quarter is down 8.4%, and operating margin has fallen by more than half over six quarters. The consensus expects a rebound, which is a forecast rather than an observation.",
      "The 13.0x earnings multiple is only cheap if the earnings are representative. A reader should check how much of net income came from below the operating line before treating the multiple as a bargain.",
    ],
    questions: [
      "How much of FY2026 net income came from operating versus non-operating sources?",
      "What share of revenue is licensing, and when do the major agreements renew?",
      "Is the margin decline mix, pricing or competition?",
      "What would handset volumes flat for three years do to the growth assumption?",
    ],
  },
};
