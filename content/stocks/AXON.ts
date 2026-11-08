import type { StockStory } from "./types";

export const AXON: StockStory = {
  ticker: "AXON",
  kicker: "Industrials · Law-enforcement technology",
  title: "Axon sells a device once and a subscription for years",
  dek: "Revenue grew 33.6% and gross margin is 58.5%, yet the operating margin is 2.0%. The gap between those two numbers is the whole investment question.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $3.42B, up 33.6%, with the latest quarter at $908.6M and a 4.6% operating margin.",
    "Gross margin of 58.5% is strong; the 2.0% operating margin shows how much is spent on selling and building the platform.",
    "Free cash flow was only $80.9M, a 2.4% margin, against $1.66B of net cash on the balance sheet.",
    "At $313.00 the shares trade at 124.8x EV/EBITDA and 7.0x sales after a 46.7% one-year decline.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1069183/000162828026011360/axon-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001069183&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Axon sells technology to police forces and other public-safety agencies. The product set is a conducted-energy weapon that fires cartridges, body-worn cameras and in-car video, and a cloud platform where the footage and case evidence are stored, shared and audited. Software for real-time operations and training sits on top of that. Trailing revenue is $3.42B from 1,710 employees.",
      "The question that decides the investment is whether the company can turn a hardware franchise into a software business fast enough to justify its multiple. Hardware is sold once per officer and replaced every few years; the cloud subscription is billed per user per month and renews for as long as the agency stays on the platform. Revenue growth of 33.6% says the land-and-expand motion is working. A 2.0% operating margin says the cost of running that motion is consuming almost all of the gross profit.",
      "The shares closed at $313.00, giving a market capitalisation of $25.49B and placing them 2% of the way up a 52-week range of $307.00 to $665.07. The stock fell 18.2% on the day of the snapshot. The multiple is 124.8x EV/EBITDA, 7.0x sales and 315.0x free cash flow, with a 0.3% free-cash-flow yield. Even after a 46.7% decline over the past year, this is the most expensive stock in the industrial peer group by a wide margin.",
    ],
    quote:
      "A police department does not buy a camera. It buys a chain of custody for evidence that has to survive a courtroom, and that is a subscription with very high switching costs.",
  },
  whatItDoes: {
    paragraphs: [
      "The conducted-energy weapon is the original business and still the entry point for many agencies. The device is sold to the agency, and the cartridges are consumables that are reordered as they are used and as officers are trained. That gives Axon a recurring hardware revenue stream even before any software is attached, and it creates a training and policy relationship with the department.",
      "The camera and cloud business is the growth engine. Body cameras, in-car systems and interview-room recording all feed the same evidence platform, where footage is tagged, retained according to policy, redacted and shared with prosecutors. Once an agency has years of evidence in a system and its officers are trained on it, moving to a competitor means migrating the archive and retraining staff. That is the source of the renewal economics.",
      "Customers are public agencies, which shapes everything about the business model. Budgets are set annually, procurement is formal, and purchases can be delayed by a city council or a grant cycle. Contracts are typically multi-year and priced per officer or per seat, so revenue per customer grows when an agency adds cameras, adds software modules or expands from one department to a county-wide deployment.",
    ],
    bullets: [
      {
        title: "Weapons and cartridges",
        detail:
          "Conducted-energy devices sold to agencies, with cartridges reordered as consumables. The historical entry point.",
      },
      {
        title: "Cameras and evidence",
        detail:
          "Body-worn, in-car and interview recording hardware feeding a cloud evidence platform with retention and sharing rules.",
      },
      {
        title: "Software seats",
        detail:
          "Per-user subscriptions for evidence management, real-time operations and training. The recurring, high-margin layer.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The gross margin of 58.5% tells you the products themselves are profitable to make. Hardware carries a normal equipment margin and the cloud seats carry a software margin, and the blend is well above a typical device maker. What turns that into a 2.0% operating margin is what sits underneath: a direct sales force that has to call on thousands of separate agencies, a research and development budget for a platform that must meet evidentiary and security standards, and the accounting cost of equity awards used to pay employees.",
      "The unit economics improve with scale in a specific way. Acquiring a new agency costs a sales cycle and often a pilot; adding a camera or a software module to an agency that already uses the platform costs almost nothing in acquisition. So the incremental margin on expansion revenue is much higher than on new logos, and the consolidated margin depends on the mix between the two in any given year.",
      "Consumables and renewals are the part of the model that behaves like a subscription. Cartridges are reordered predictably, and cloud contracts renew unless the agency actively leaves. That is why revenue grew through the last year even as the operating margin stayed thin: the installed base keeps billing while the company spends to add the next agency.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 31.8% a year across the fiscal years in the dataset, rising from $863.4M in FY2021 to $2.78B in FY2025 and $3.42B on a trailing basis. The latest quarter grew 27.8%, which is a slowdown from the annual rate but still fast in absolute terms. The company has grown revenue several-fold in four years without ever producing a consistently high operating margin.",
      "The third-party consensus expects $3.62B of revenue and $7.15 of EPS this fiscal year, then $4.64B and $9.55 next year, with $1.00B and $1.98 for the coming quarter. The step from $3.42B to $4.64B is the number that matters: it assumes the company keeps winning new agencies and expanding existing ones at the same time.",
      "The durable drivers are the size of the installed base, the number of software modules each agency buys, and international expansion where agencies still use paper or local systems. What would slow it down is a squeeze on municipal budgets, a procurement freeze, or a competitor winning a large agency on price. The first two are outside the company's control and the third is the reason the sales spend stays high.",
    ],
  },
  performance: {
    paragraphs: [
      "Operating income has been uneven: -$168.1M in FY2021, $93.0M in FY2022, $156.8M in FY2023, $58.5M in FY2024 and -$62.1M in FY2025. Revenue grew in every one of those years. The pattern says the business can generate an operating profit when spending is held in check, and that management has chosen to spend the gross profit on growth in the years when revenue accelerated.",
      "The quarterly table shows the same swing at a finer grain. Operating margin was -0.2%, -0.3% and -6.3% in the three quarters to Q4 FY25, then 3.6%, 5.2% and 4.6% in the first three quarters of FY26. The improvement is real but recent, and a 4.6% margin is thin for a company with a 58.5% gross margin.",
      "The trailing net margin of -27.9% needs a warning attached. It is dominated by the December quarter, which shows a net loss of $1.21B against an operating margin of -6.3%. A gap that large between the operating result and the net result is a non-operating item, and it is the kind of thing that makes a trailing net margin a poor guide to the underlying business. The diluted per-share figure of $3.12 does not reconcile neatly with that loss either, which is a reason to read the filing rather than a summary.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $80.9M on a trailing basis, a 2.4% margin, and the annual path has been uneven: $74.6M, $179.6M, $129.6M, $329.5M and $75.1M across the five fiscal years. FY2024 was the outlier at $329.5M, and FY2025 gave most of it back. For a company growing revenue at more than 30%, a free-cash-flow margin in the low single digits is the cost of financing working capital and capitalised software.",
      "The balance sheet shows $1.66B of net cash, which is a genuine cushion and gives the company room to keep investing through a slow procurement year. The reported interest cover of 1.2x sits oddly beside that net cash position: it says operating income barely covers the interest bill, while the cash balance says the company is a net lender. Both can be true only if the debt was raised or repaid during the period, and the reconciliation belongs in the debt note of the filing.",
      "What the cash flow supports is investment, not distributions. There is no dividend and the free-cash-flow yield is 0.3%, so the return to a buyer at this price has to come from growth in the cash stream rather than from cash returned today. That is a legitimate model for a company at this stage, but it leaves little margin for a year of slower orders.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $313.00 the shares trade at 124.8x EV/EBITDA, 7.0x sales and 315.0x free cash flow. There is no trailing earnings multiple because the trailing net result is negative. The 0.3% free-cash-flow yield is the clearest statement of what the price assumes: that today's cash flow is a small fraction of what the business will produce later.",
      "The peer comparison is not close. Caterpillar trades at 14.5x EV/EBITDA, RTX at 18.1x, Eaton at 20.9x, GE at 24.3x and GE Vernova has no meaningful multiple in the table. Axon at 124.8x is being priced as a software platform attached to a hardware franchise, not as an industrial company. On the factor screen it sits in the 4th percentile for cheapness on EV/EBITDA, which is the bottom of the coverage universe.",
      "That valuation can still be defensible if the subscription revenue compounds for a decade, because a high-growth annuity is worth a high multiple of current cash flow. The risk is arithmetic: a 124.8x EBITDA multiple leaves no room for a year in which growth slows to 20% and the margin stays at 5%. Stockmonk does not publish a target price; the consensus figure is shown as third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus covers 19 analysts with a mean target of $561.32 and a range of $380.00 to $700.00. Current fiscal-year estimates call for $3.62B of revenue and $7.15 of EPS, with 18 analysts contributing; next year carries $4.64B and $9.55. The coming quarter is expected to produce $1.00B and $1.98.",
      "The mean target of $561.32 is a long way above the $313.00 share price, which is a large gap even for a high-growth company. It is also a snapshot: the stock fell 18.2% on the day of the data, so some of those targets were set before the move and may not reflect it. The range of $380.00 to $700.00 shows how much the analysts disagree about the right multiple for a business with a 2.0% operating margin.",
      "These are third-party views, not Stockmonk ratings. When the target is this far above the price, the useful question is not whether the average is right but which assumption in it is most likely to be wrong.",
    ],
  },
  risks: {
    intro:
      "Axon's product position is strong and its balance sheet is sound. The risks are the valuation, the budget cycle of its customers, and the legal exposure that comes with selling weapons and evidence systems to public agencies.",
    items: [
      {
        title: "Valuation compression",
        severity: "High",
        detail:
          "At 124.8x EV/EBITDA and 7.0x sales, the shares discount years of growth. A slower year would hit the multiple before it hit the business.",
        watch:
          "EV/EBITDA against the direction of revenue growth and the operating margin trend.",
      },
      {
        title: "Public-sector budgets and procurement",
        severity: "High",
        detail:
          "Agencies buy with annual budgets and grant funding. A city council delay or a broader fiscal squeeze pushes orders out by quarters.",
        watch:
          "Contract wins, backlog disclosure and the revenue split between new and existing customers.",
      },
      {
        title: "Litigation and regulation of weapons",
        severity: "Medium",
        detail:
          "Conducted-energy weapons attract legal challenge and political scrutiny, and a restriction in a large jurisdiction would remove revenue and invite competitor products.",
        watch:
          "Legal proceedings disclosed in the filing and any change in agency adoption policy.",
      },
      {
        title: "Competition in cameras and evidence software",
        severity: "Medium",
        detail:
          "Hardware rivals can undercut on price, and software competitors can win on integration with courts and prosecutors.",
        watch:
          "Win rates on large agency renewals and the gross margin of the hardware line.",
      },
      {
        title: "Dilution from equity compensation",
        severity: "Medium",
        detail:
          "A company that pays a large part of compensation in stock has to grow earnings per share faster than net income to stand still.",
        watch:
          "Share count and the gap between net income growth and EPS growth.",
      },
    ],
    watchlist: [
      {
        title: "Operating margin",
        detail:
          "The move from negative to 4.6% is the proof of concept. Sustaining it through a slower growth year is the test.",
      },
      {
        title: "Recurring revenue mix",
        detail:
          "Cloud and consumable revenue is what justifies a software multiple. Watch its share of the total.",
      },
      {
        title: "Cash conversion",
        detail:
          "Free cash flow of $80.9M on $3.42B of revenue is thin. A widening gap to net income would signal a working-capital problem.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Axon has built something unusual: a hardware company with the retention characteristics of a software business, sold into a customer base that is slow to switch and reluctant to rip out an evidence archive. Revenue has more than tripled since FY2021, and the gross margin of 58.5% shows the products are priced well.",
      "The unresolved issue is profitability. Operating income has swung from -$168.1M to $156.8M and back to -$62.1M across five years, and the trailing margin is 2.0%. Either the spending is an investment that will eventually drop to the operating line, or the business needs to keep spending at this rate to grow, in which case the earnings never arrive in the size the multiple assumes.",
      "The price makes that question urgent rather than academic. At 124.8x EV/EBITDA and 315.0x free cash flow, there is no valuation support if growth slows. The balance sheet gives the company time; the multiple does not.",
    ],
    questions: [
      "What share of revenue is recurring subscription rather than hardware and cartridges?",
      "Is the 4.6% operating margin the start of a trend or a good quarter?",
      "How much of the 33.6% growth came from new agencies versus expansion within existing ones?",
      "What does the debt note say to reconcile $1.66B of net cash with 1.2x interest cover?",
    ],
  },
};
