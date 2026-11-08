import type { StockStory } from "./types";

export const SNPS: StockStory = {
  ticker: "SNPS",
  kicker: "Technology · Electronic design automation",
  title: "Synopsys bought growth, and the income statement is still absorbing it",
  dek: "Revenue is up 46.3% while operating margin is 8.5%. The gap is not a demand problem, and the free cash flow proves it.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $9.42B on a trailing basis, up 46.3%, and the latest quarter grew 42.4%.",
    "Operating margin fell to 8.5% while gross margin held at 72.4%, so the costs sit below the gross-profit line.",
    "Free cash flow was $2.75B, a 29.2% margin, far above reported operating profit.",
    "Net debt is $7.55B, or 2.9x EBITDA, the highest leverage ratio in this batch.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/883241/000088324125000028/snps-20251031.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000883241&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Synopsys sells the software and hardware that engineers use to design and verify chips. It is one of two large vendors in electronic design automation, a market where the tools are deeply embedded in how a design team works and where the cost of changing suppliers is measured in months of re-validation.",
      "The top line is up 46.3% to $9.42B of trailing revenue. The operating margin is 8.5% and the net margin is 11.4%. Both figures look wrong for a company with a 72.4% gross margin, and they are the reason this report spends more time on the line between gross profit and operating profit than on the revenue growth.",
      "The market value is $86.25B at $450.46, inside a range of $362.55 to $539.48. Trailing P/E is 80.1x and EV/EBITDA is 35.9x. Net debt of $7.55B is 2.9x EBITDA, which is the highest in this batch.",
    ],
    quote:
      "The revenue line says the franchise is intact. The operating line says the accounting has not caught up with it. Both can be true at once.",
  },
  whatItDoes: {
    paragraphs: [
      "The core products are design tools: logic synthesis, place and route, timing sign-off, analog design and verification. Around them sit libraries of design IP that customers license instead of building, and hardware systems that emulate a chip so that software can be tested before silicon exists.",
      "Customers are semiconductor companies, foundries and a growing group of systems companies that design their own chips. Each customer buys a flow rather than a product, and that flow is tied to a specific manufacturing process, which makes the relationship long and the switching expensive.",
      "The company employs 15,036 people, which is large for a software business and reflects the support and engineering effort that each customer relationship requires. That headcount is also part of why the operating margin is where it is.",
    ],
    bullets: [
      {
        title: "Design software",
        detail:
          "Synthesis, place and route, verification and sign-off. Licensed on multi-year terms and renewed annually.",
      },
      {
        title: "Design IP",
        detail:
          "Reusable blocks that customers license rather than design. Revenue follows the number of chip design starts.",
      },
      {
        title: "Hardware-assisted verification",
        detail:
          "Physical emulation systems that carry real manufacturing cost and a lower gross margin than software.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 72.4% is what a license business with some hardware content earns. The software licenses are close to pure margin; the emulation hardware and the support organization are not. The blend is stable, which is why the collapse in operating margin has to be explained somewhere else.",
      "The annual table shows where. Operating income was $1.27B in FY2023, $1.36B in FY2024 and then $914.9M in FY2025 on higher revenue. Something between gross profit and operating profit grew faster than revenue. The usual candidates are amortization of acquired intangibles, integration spending and stock-based compensation, all of which sit below the gross-profit line.",
      "The cash-flow statement supports that reading. Free cash flow of $2.75B is 29.2% of revenue, far above the operating margin. Charges that do not consume cash reduce reported profit without reducing the cash the business produces, and the size of the gap here is the clearest evidence that the operating margin is an accounting outcome rather than an economic one.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $4.20B in FY2021 to $7.05B in FY2025, a steady mid-teens pace. Then the trailing figure jumped to $9.42B, up 46.3%, with the latest quarter at $2.48B and up 42.4%. A step of that size in one year is far above the growth rate of the design-software market, which points to acquired revenue as a large part of it.",
      "Third-party estimates call for $9.72B this fiscal year and $11.00B next. If those are reached, the integration period will end with a business roughly 56% larger than FY2025 on a revenue basis, and the question becomes what margin the enlarged base can earn.",
      "The drivers are design starts, the complexity of advanced nodes and the expansion of the IP portfolio. The brake is customer concentration: a small number of very large semiconductor companies account for a large share of design spending, and their budgets move with the chip cycle.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating margin fell from 23.9% in FY2023 to 22.2% in FY2024 and 13.0% in FY2025. The quarterly record shows the same trend with a partial recovery: 23.5%, 9.5%, 5.4%, 8.4%, 5.3% and 14.4%.",
      "Return on equity is 3.5% and return on invested capital is 1.7%. Those are the returns of a business carrying a large amount of acquired goodwill and intangible assets, and they say little about the economics of the underlying franchise. The 29.2% free-cash-flow margin is the more meaningful measure.",
      "Diluted EPS was $5.72 on a trailing basis. The per-share estimates in the next section sit far above that number, which is a reminder that analysts often model a different basis than the reported line. Comparing revenue estimates is the safer exercise.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $2.75B, a 29.2% margin. The annual record is consistent: $1.40B, $1.60B, $1.51B, $1.27B and $1.35B. Cash generation has not deteriorated through the period in which reported operating profit did, which is the strongest argument that the margin compression is accounting rather than operational.",
      "Net debt of $7.55B is 2.9x EBITDA, the highest leverage in this batch. It is serviceable against $2.75B of annual free cash flow, but it removes the flexibility the company had before. Interest cost now appears as a real claim on earnings rather than a rounding error.",
      "The cash flow supports the debt, the integration spending and continued research. It does not leave much room for a large acquisition without new financing, which is a change from the position the company was in three years ago.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $450.46, Synopsys trades at 80.1x trailing earnings, 35.9x EV/EBITDA, 10.0x sales and 31.4x free cash flow, with a 3.2% free-cash-flow yield. Against Cadence, the closest comparable here, it is cheaper on EBITDA and on free cash flow despite the lower margin.",
      "The P/E of 80.1x is computed on earnings that are depressed by non-cash charges. On free cash flow the multiple is 31.4x, which is high for a company growing revenue in the high teens but not extreme for a franchise with renewal pricing power.",
      "The valuation depends on the margin recovering as integration spending ends. If operating margin returns toward the low twenties on a $9.72B revenue base, the earnings power is materially higher than the trailing figure suggests. Stockmonk does not publish a target price.",
    ],
  },
  analysts: {
    paragraphs: [
      "At $589.55, the mean target sits 31% above the last close, and the range of $475.00 to $700.00 comes from 25 analysts: three in the strongest positive bucket, 20 positive and two neutral.",
      "The models behind those targets put revenue at $2.56B next quarter, $9.72B this fiscal year with $15.14 of EPS, and $11.00B next fiscal year with $18.65. Against FY2025 revenue of $7.05B, that implies growth of about 38% this fiscal year and 13% the next, which is what happens when acquired revenue stops being new.",
      "The per-share estimates are well above the reported $5.72 and are almost certainly struck on an adjusted basis. Read the revenue line for like-for-like comparison and treat the EPS estimates as a different accounting conversation.",
    ],
  },
  risks: {
    intro:
      "Synopsys carries more financial risk than its peers in this batch, and its operating margin is the least settled. Both are consequences of how it grew.",
    items: [
      {
        title: "Integration and amortization",
        severity: "High",
        detail:
          "Reported operating profit has fallen while revenue rose. Until the acquired cost base is absorbed, the income statement will understate the economics.",
        watch:
          "Operating margin and the split between amortization and cash spending.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "Net debt of $7.55B is 2.9x EBITDA. It is affordable now, but it limits options if the cycle turns.",
        watch:
          "Net debt to EBITDA and interest expense.",
      },
      {
        title: "Customer concentration",
        severity: "Medium",
        detail:
          "A small number of semiconductor companies account for a large share of design spending. Their budgets set the pace.",
        watch:
          "Concentration disclosures and design-start activity at large customers.",
      },
      {
        title: "Competition",
        severity: "Medium",
        detail:
          "The other large EDA vendor sells an overlapping flow, and large customers can build internal tools for some steps.",
        watch:
          "Win rates at advanced nodes and pricing at renewal.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Restrictions on design tools sold into certain markets can remove revenue from advanced-chip customers.",
        watch:
          "License changes and the geographic revenue split.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The recovery from 8.5% is the single number that decides whether the reported earnings catch up with the cash flow.",
      },
      {
        title: "Free cash flow",
        detail:
          "It has held near 30% of revenue throughout. Watch whether integration spending starts to consume it.",
      },
      {
        title: "Net debt to EBITDA",
        detail:
          "At 2.9x there is less room for another large deal without new equity or asset sales.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Synopsys is one half of the design-software duopoly, with a 72.4% gross margin and $2.75B of free cash flow on $9.42B of revenue. The reported operating margin of 8.5% does not describe the economics of that franchise.",
      "What is not visible in these numbers is how much of the cost below the gross-profit line is temporary. If it is integration and amortization, the margin should recover as the acquired base is absorbed. If it is a permanently heavier cost structure, the 80.1x earnings multiple has no support.",
      "The educational point is that cash flow and accounting profit can diverge for years. When they do, the cash-flow statement usually tells you more about the business and the income statement tells you more about the deals.",
    ],
    questions: [
      "How much of the operating-cost increase is amortization rather than cash spending?",
      "What was the revenue growth rate excluding acquired businesses?",
      "How quickly can the operating margin return to the low twenties?",
      "What does the $7.55B of net debt cost in interest each year?",
    ],
  },
};
