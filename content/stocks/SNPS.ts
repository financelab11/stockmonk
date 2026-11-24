import type { StockStory } from "./types";

export const SNPS: StockStory = {
  "ticker": "SNPS",
  "kicker": "Technology · Electronic design automation",
  "title": "Synopsys bought growth, and the income statement is still absorbing it",
  "dek": "Revenue is up 46.3% while operating margin is 8.5%. The gap is not a demand problem, and the free cash flow proves it.",
  "readingMinutes": 9,
  "takeaways": [
    "Third-quarter revenue of $2.5B rose 42.4%, but the operating margin was only 14.4% as acquisition costs absorbed the gross profit.",
    "Free cash flow of $2.7B is 29.2% of revenue, more than three times the 8.5% operating margin.",
    "Net debt of $6.4B is 2.5x EBITDA and interest cover is 1.3x, the tightest balance sheet in the group.",
    "At 76.4x earnings but 29.9x free cash flow, Synopsys is cheaper on cash than Cadence's 47.4x."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/883241/000088324125000028/snps-20251031.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000883241&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "Synopsys' third fiscal quarter, ended 31 July 2026, produced $2.5B of revenue, a 14.4% operating margin and $2.84 of diluted EPS. Revenue was 42.4% higher than a year earlier, and the operating margin recovered from 5.3% in the prior quarter. The result matters because it shows a design-software franchise digesting a large acquisition: the top line is growing fast, the reported margin is thin, and the cash flow is far stronger than the reported margin suggests.",
      "The portfolio is two businesses now. Design Automation was 75.2% of segment revenue, with Design IP at 24.8%, the part of the mix tied to chip design starts. Design software renews on multi-year terms and is tied to a specific manufacturing process, which makes switching expensive. The acquired IP and hardware bring revenue and cost at the same time, and the amortisation sits below the gross-profit line. That makes the revenue base more balanced but less predictable than a pure software annuity.",
      "Which line to believe is the debate. At $429 the shares carry 76.4x earnings, 33.9x EV/EBITDA, 9.4x sales and 29.9x free cash flow. The P/E is high because the denominator is depressed; the P/FCF is lower than Cadence's 47.4x. Net debt of $6.4B at 2.5x EBITDA and interest cover of 1.3x is the constraint that makes the accounting question urgent. The market is pricing the cash flow, not the reported profit, which is why the shares have held."
    ],
    "quote": "Synopsys' cash flow says the franchise is intact; its interest cover says the balance sheet is doing the talking."
  },
  "whatItDoes": {
    "paragraphs": [
      "The core products are design tools: logic synthesis, place and route, timing sign-off, analog design and verification. Around them sit libraries of design IP that customers license instead of building, and hardware systems that emulate a chip so that software can be tested before silicon exists.",
      "Customers are semiconductor companies, foundries and a growing group of systems companies that design their own chips. Each customer buys a flow rather than a product, and that flow is tied to a specific manufacturing process, which makes the relationship long and the switching expensive.",
      "The company employs 15,036 people, which is large for a software business and reflects the support and engineering effort that each customer relationship requires. That headcount is also part of why the operating margin is where it is."
    ],
    "bullets": [
      {
        "title": "Design software",
        "detail": "Synthesis, place and route, verification and sign-off. Licensed on multi-year terms and renewed annually."
      },
      {
        "title": "Design IP",
        "detail": "Reusable blocks that customers license rather than design. Revenue follows the number of chip design starts."
      },
      {
        "title": "Hardware-assisted verification",
        "detail": "Physical emulation systems that carry real manufacturing cost and a lower gross margin than software."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Gross margin of 72.4% is what a license business with some hardware content earns. The software licenses are close to pure margin; the emulation hardware and the support organization are not. The blend is stable, which is why the collapse in operating margin has to be explained somewhere else.",
      "The annual table shows where. Operating income was $1.27B in FY2023, $1.36B in FY2024 and then $914.9M in FY2025 on higher revenue. Something between gross profit and operating profit grew faster than revenue. The usual candidates are amortization of acquired intangibles, integration spending and stock-based compensation, all of which sit below the gross-profit line.",
      "The cash-flow statement supports that reading. Free cash flow of $2.75B is 29.2% of revenue, far above the operating margin. Charges that do not consume cash reduce reported profit without reducing the cash the business produces, and the size of the gap here is the clearest evidence that the operating margin is an accounting outcome rather than an economic one."
    ]
  },
  "growth": {
    "paragraphs": [
      "Turnover rose from $6.1B in fiscal 2024 to $7.1B in fiscal 2025 and $9.4B trailing, a 46.3% trailing increase that is well above the 15.1% reported for fiscal 2025. The step came from acquisitions, not from a sudden acceleration in design starts. Consensus for fiscal 2026 is $9.7B, up 37.8%, and fiscal 2027 is $11.0B, up 13.3%, which is the shape of an acquisition annualising rather than a new growth rate.",
      "Design IP represents 24.8% of segment revenue and is the more cyclical part of the mix because it follows chip design starts. It carries lower margin than a license. Design Automation remains the annuity: 75.2% of revenue, renewed annually, tied to a process node and expensive to replace. The combination is more diversified but less pure than Cadence's software base.",
      "Durability depends on integration. Fiscal 2027 revenue of $11.0B would be 13.3% above fiscal 2026, a return to the mid-teens pace the company delivered before the acquisition. EPS of $18.65 assumes the acquired cost base is absorbed and the interest burden is manageable. The 90-day EPS revision of 2.5% is positive, but the 30- and 60-day revisions are flat, so the estimate has stopped moving."
    ],
    "bullets": [
      {
        "title": "Design Automation",
        "detail": "The 75.2% segment is the annuity: multi-year licenses, annual renewals and a flow tied to a specific process node."
      },
      {
        "title": "Design IP",
        "detail": "IP is 24.8% of segment revenue and grows with design starts, which makes it more cyclical and lower-margin than the core tools."
      },
      {
        "title": "Acquisition digest",
        "detail": "Reported operating margin fell to 8.5% while free cash flow stayed at 29.2% of revenue; the gap is the integration cost that has to fade."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Almost all of the gap between gross and operating profit is accounting. A 72.4% gross margin becomes an 8.5% operating margin and an 11.4% net margin, a spread of roughly 64 points. Amortisation of acquired intangibles, integration spending and stock-based compensation sit in that gap. The cash-flow statement confirms the reading: free cash flow of $2.7B is 29.2% of revenue, far above the operating margin.",
      "The quarterly path shows the absorption. Operating margin was 5.4% in the October 2025 quarter, 8.4% in January, 5.3% in April and 14.4% in July. Net margin swung from 2.7% to 0.8% to 22.0% over the same three quarters. That volatility is not demand; it is the timing of charges. Return on invested capital of 1.6% and return on equity of 3.5% are therefore accounting outcomes rather than economic returns.",
      "Against Cadence, Synopsys is the cheaper business on cash and the more expensive one on earnings. Cadence reported a 28.9% operating margin and 28.8% FCF margin; Synopsys reported 8.5% and 29.2%. The similar cash margins tell you the underlying economics are close. The difference is that Synopsys paid for its growth with debt, and the interest line now sits between the two."
    ]
  },
  "cash": {
    "paragraphs": [
      "Synopsys turned 29.2% of revenue into free cash flow, $2.7B, against operating cash flow of $1.5B in fiscal 2025 and capex of $169.5M. The trailing figure is higher than the fiscal-year figure partly because the acquired business added revenue without adding much capital spending. The conversion is the strongest evidence that the low operating margin is an accounting result rather than a cash problem.",
      "Leverage is the counterweight. Net debt was $6.4B, or 2.5x EBITDA, and interest cover was 1.3x. That is a thin cushion: operating income of roughly $0.8B barely covers an interest bill of about $0.6B. The company can service the debt, but it has little room for a downturn or a refinancing shock, and the 1.3x cover is the tightest in the group.",
      "Capital allocation has been acquisition-led. The debt funded the growth, and the dividend yield is 0.0%. The priority now is deleveraging rather than returns: every dollar of free cash flow used to repay debt improves the interest cover and removes the constraint on the equity story. With no distribution and no disclosed buyback, deleveraging is the only use of cash."
    ]
  },
  "valuation": {
    "paragraphs": [
      "At $429 the equity is worth $82.3B, or 76.4x trailing earnings, 33.9x EV/EBITDA, 9.4x sales and 29.9x free cash flow. The P/E is the least useful number because the earnings base is depressed by acquisition accounting. On cash, Synopsys is cheaper than Cadence at 47.4x P/FCF, and on sales it is cheaper than Cadence at 13.8x. The market is not paying a premium for the reported margin.",
      "The estimates require the integration to work. Fiscal 2026 EPS of $15.14 is 28.3x the current price and fiscal 2027 at $18.65 is 23.0x. Those multiples are below the trailing P/E because earnings are expected to recover, not because revenue is expected to accelerate. If the operating margin stays near 8.5%, the forward estimates are too high; if it returns to the low twenties, they are conservative.",
      "The shares have moved between $363 and $539 over the past year, and a 6.1% return describes a stock that has gone nowhere while revenue rose 46.3%. The market is waiting for the margin to prove itself. A 2.5x EBITDA leverage ratio and 1.3x interest cover mean the waiting period is not free. Until the interest cover improves, the equity is a leveraged bet on the integration."
    ]
  },
  "analysts": {
    "paragraphs": [
      "At Yahoo Finance, the 18 November 2026 consensus covers 25 analysts, with a mean target of $590 and a range of $475 to $700. Almost every analyst is positive, and only two sit at neutral. The mean is 37.5% above the $429 price, and the low end is 10.7% above it, so the analysts are positive but the dispersion is narrow relative to the accounting uncertainty.",
      "Estimates have been flat: no change over seven, 30 or 60 days, and 2.5% over 90 days. Fiscal 2026 revenue of $9.7B and EPS of $15.14 assume the acquired business annualises and the operating margin recovers. The consensus is implicitly assuming that the integration charges are temporary and that the 1.3x interest cover does not become a refinancing problem."
    ]
  },
  "risks": {
    "intro": "Synopsys carries more financial risk than its peers in this batch, and its operating margin is the least settled. Both are consequences of how it grew.",
    "items": [
      {
        "title": "Integration and amortization",
        "severity": "High",
        "detail": "Reported operating profit has fallen while revenue rose. Until the acquired cost base is absorbed, the income statement will understate the economics.",
        "watch": "Operating margin and the split between amortization and cash spending."
      },
      {
        "title": "Leverage",
        "severity": "High",
        "detail": "Net debt of $7.55B is 2.9x EBITDA. It is affordable now, but it limits options if the cycle turns.",
        "watch": "Net debt to EBITDA and interest expense."
      },
      {
        "title": "Customer concentration",
        "severity": "Medium",
        "detail": "A small number of semiconductor companies account for a large share of design spending. Their budgets set the pace.",
        "watch": "Concentration disclosures and design-start activity at large customers."
      },
      {
        "title": "Competition",
        "severity": "Medium",
        "detail": "The other large EDA vendor sells an overlapping flow, and large customers can build internal tools for some steps.",
        "watch": "Win rates at advanced nodes and pricing at renewal."
      },
      {
        "title": "Export controls",
        "severity": "Medium",
        "detail": "Restrictions on design tools sold into certain markets can remove revenue from advanced-chip customers.",
        "watch": "License changes and the geographic revenue split."
      }
    ],
    "watchlist": [
      {
        "title": "Operating margin",
        "detail": "The recovery from 8.5% is the single number that decides whether the reported earnings catch up with the cash flow."
      },
      {
        "title": "Free cash flow",
        "detail": "It has held near 30% of revenue throughout. Watch whether integration spending starts to consume it."
      },
      {
        "title": "Net debt to EBITDA",
        "detail": "At 2.9x there is less room for another large deal without new equity or asset sales."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Synopsys is one half of the design-software duopoly, with a 72.4% gross margin and $2.75B of free cash flow on $9.42B of revenue. The reported operating margin of 8.5% does not describe the economics of that franchise.",
      "What is not visible in these numbers is how much of the cost below the gross-profit line is temporary. If it is integration and amortization, the margin should recover as the acquired base is absorbed. If it is a permanently heavier cost structure, the 80.1x earnings multiple has no support.",
      "The educational point is that cash flow and accounting profit can diverge for years. When they do, the cash-flow statement usually tells you more about the business and the income statement tells you more about the deals."
    ],
    "questions": [
      "How much of the operating-cost increase is amortization rather than cash spending?",
      "What was the revenue growth rate excluding acquired businesses?",
      "How quickly can the operating margin return to the low twenties?",
      "What does the $7.55B of net debt cost in interest each year?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
