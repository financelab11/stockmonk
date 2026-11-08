import type { StockStory } from "./types";

export const RYAN: StockStory = {
  ticker: "RYAN",
  kicker: "Specialty Financials · Insurance - Specialty",
  title: "Ryan Specialty sells access to insurers and keeps a commission",
  dek: "It carries no underwriting risk, only deal risk. A 15.9% operating margin against a 6.1% net margin, and interest cover of 2.3x, show how much of the fee income goes to acquisition debt and intangibles.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $3.20B, up 10.1%, though the latest quarter slowed to 4.8%.",
    "Operating margin is 15.9% while net margin is 6.1%; interest cover of 2.3x is the tightest in this batch.",
    "Free cash flow is $568.6M, a 17.8% margin, and has grown every year since FY2021.",
    "The P/E of 62.0x and price-to-free-cash-flow of 21.1x describe the same company with very different earnings bases.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1849253/000184925326000006/ryan-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001849253&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Ryan Specialty is a wholesale insurance intermediary. Retail brokers bring it risks that are too complex, too large or too unusual for a standard carrier, and Ryan Specialty places that risk with insurers that specialise in it. It also acts as a managing underwriter, running delegated authorities that write business on a carrier's behalf and keep a share of the economics.",
      "The important structural point is that Ryan Specialty does not carry the insurance risk. If a hurricane hits a property it placed, the carrier pays, not the broker. What the company carries is deal risk: the risk that it cannot place a piece of business, or that the carrier changes its appetite, or that the producer who owns the relationship leaves.",
      "The company was founded in 2010, is based in Chicago and employs about 3,850 people. Revenue has grown from $1.43B in FY2021 to $2.99B in FY2025, and the equity is worth $12.01B at $47.73 a share. The shares sit inside a 52-week range of $29.28 to $58.94, with a one-year return of -15.1% and a five-year return of 29.6%.",
    ],
    quote:
      "A wholesale broker is paid for access. The commission comes out of the premium the client pays, and the carrier relies on the broker to bring business it could not reach on its own.",
  },
  whatItDoes: {
    paragraphs: [
      "There are two halves to the business. The brokerage side places specialty risks with carriers: property, casualty, professional lines, healthcare, energy and construction among them. The underwriting side runs managing general underwriters and binding authorities, which are arrangements where Ryan Specialty's underwriters write policies on a carrier's paper under agreed guidelines and are paid a fee or a share of the underwriting result.",
      "The customers are retail insurance agents and brokers, not the insured businesses themselves. That is the distribution chain: the local broker owns the client relationship, and the wholesale broker supplies the specialty capacity and the technical expertise the local broker does not have in-house.",
      "The managing underwriting arm is the more interesting part of the model because it puts the company closer to the underwriting decision without putting capital at risk. It also creates a stickier relationship with carriers, since the carrier is delegating authority rather than simply quoting a price.",
    ],
    bullets: [
      {
        title: "Wholesale brokerage",
        detail:
          "Placement of specialty risk with carriers. Paid a commission on premium placed.",
      },
      {
        title: "Managing underwriting",
        detail:
          "Binding authorities and MGUs that write on a carrier's paper. Fee income plus a share of results.",
      },
      {
        title: "Specialty services",
        detail:
          "Claims, administration and product development for carriers and programs. Smaller, but deepens the relationship.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is commission and fee income on premium placed, not premium itself. When a $1M property risk is placed, Ryan Specialty keeps a percentage of the premium as commission and the carrier keeps the rest and takes the risk. That is why revenue of $3.20B can support a $12.01B market value while an insurer with the same revenue carries reserves on its balance sheet.",
      "The cost base is dominated by people. Producers who own relationships are paid well, and the rest of the organisation supports them. That means the operating margin is a function of how much revenue each producer generates against what the company pays to keep them. The trailing operating margin of 15.9% is the outcome of that trade-off.",
      "The gap between the 15.9% operating margin and the 6.1% net margin comes from below the operating line: interest on acquisition debt and amortisation of the intangible assets created by buying businesses. Interest cover of 2.3x makes the point clearly — operating earnings cover the interest bill a little over twice, which is thin for a company that has grown by acquisition.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $1.43B to $2.99B across five years, and the trailing rate is 10.1%. The latest quarter grew 4.8%, which is a meaningful deceleration. For a broker, revenue growth decomposes into premium rate change, exposure growth, new business and acquisitions, and the fourth has been doing a lot of the work.",
      "The quarterly pattern has a seasonal shape: revenue peaks in the second quarter and is lowest in the fourth. Insurance renewals cluster around the start of the year and the middle of it, so a broker's revenue follows the renewal calendar. That makes quarter-to-quarter comparisons misleading unless they are made against the same quarter a year earlier.",
      "The drivers ahead are premium rates in specialty lines, the pace of new binding authority appointments, and the retention of producers. What would slow growth is a soft insurance market, where rates fall and clients shop accounts, combined with the loss of a large producer group to a competitor.",
    ],
  },
  performance: {
    paragraphs: [
      "The operating margin has ranged widely by quarter: 22.7% in Q2 FY2025, 15.0%, 12.4%, 12.1%, 20.0% and 18.2% in Q3 FY2026. The pattern tracks the seasonal revenue peaks, which is what you expect when the cost base is salaries rather than a variable cost of goods.",
      "At the annual level, operating income rose from $186.6M in FY2021 to $493.6M in FY2025, while net income moved from $65.9M to $63.4M. Revenue nearly doubled and net income was flat. Interest and amortisation absorbed the difference, which is the arithmetic of buying growth with debt.",
      "Return on equity is 5.8%, a low figure for a business with a 15.9% operating margin. That is the cost of an acquisition-funded balance sheet: the equity is large relative to the profit because the acquisitions created intangible assets and goodwill rather than tangible returns.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is $568.6M on a trailing basis, a 17.8% margin, and the annual series improved from -$69.7M in FY2021 to $327.8M, $477.2M, $514.9M and $640.7M. The negative year was the acquisition-heavy one; since then the business has converted its operating profit into cash reliably.",
      "That cash flow is the funding source for both debt service and further acquisitions. A broker needs very little capital expenditure — offices and technology, not plant — so almost all of the operating cash is available for deals or debt reduction.",
      "The dataset does not provide a net debt figure, which is a gap for a company whose strategy depends on leverage. Interest cover of 2.3x is the available proxy, and it says the balance sheet has less room than the cash flow alone would suggest.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $47.73 the equity is worth $12.01B. The P/E is 62.0x, EV/EBITDA 22.9x, EV/sales 3.8x and price-to-free-cash-flow 21.1x. The earnings multiple is high because net income is depressed by interest and amortisation; the cash flow multiple is the more reasonable description of what a buyer is paying.",
      "The peer set is a useful reminder that sector labels hide different businesses. Kinsale trades at 87.4x earnings and 47.8x EV/EBITDA as an insurer with a depressed net line. Palomar at 8.1x earnings and 50.2x EV/EBITDA is an insurer with a very different earnings base. Evercore at 13.9x and 9.3x is an advisory firm with no balance-sheet risk at all. Ryan Specialty at 22.9x EV/EBITDA is priced between the insurer and the advisor.",
      "A broker should trade on fee income and cash conversion, not on premium or reserves. On that basis the 21.1x free cash flow multiple is the number to hold onto, and the question is whether 10.1% revenue growth is enough to justify it.",
    ],
  },
  analysts: {
    paragraphs: [
      "Sixteen analysts contribute to the attributed third-party consensus, with a mean target of $49.66 and a range of $40.00 to $76.00. The mean is modestly above the $47.73 close, and the top of the range is well above it.",
      "Current-year estimates are $3.29B of revenue and EPS of $2.18, rising to $3.51B and $2.43 next year. Nineteen analysts contribute to each annual figure, more than the sixteen behind the target. The implied revenue growth is low single digits, which is consistent with a softening specialty market.",
      "Those are third-party forecasts, not a Stockmonk view. The EPS path from $2.18 to $2.43 implies faster growth than revenue, which depends on margin expansion or lower interest and amortisation rather than on volume.",
    ],
  },
  risks: {
    intro:
      "Ryan Specialty's risks sit in three places: the insurance pricing cycle, the debt used to buy growth, and the people who own the client relationships.",
    items: [
      {
        title: "Soft specialty insurance pricing",
        severity: "High",
        detail:
          "Commission income is a percentage of premium. Falling rates reduce revenue even if policy counts hold, and the latest quarter's 4.8% growth suggests that has started.",
        watch:
          "Premium rate change in specialty lines and the split between organic and acquired growth.",
      },
      {
        title: "Leverage and interest cover",
        severity: "High",
        detail:
          "Interest cover of 2.3x is thin for an acquisitive company. Rising rates or a large deal would reduce the cushion further.",
        watch:
          "Interest expense, debt maturities and the net-debt-to-EBITDA ratio after each acquisition.",
      },
      {
        title: "Producer retention",
        severity: "High",
        detail:
          "The relationships belong to individual producers. Losing a team takes the clients with it and cannot be replaced with capital.",
        watch:
          "Disclosure on producer concentration and retention, and the trend in compensation expense as a share of revenue.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "Growth has been bought. Each deal brings systems, cultures and producer contracts that have to be held together.",
        watch:
          "Goodwill and intangible balances, and any impairment charge.",
      },
      {
        title: "Carrier appetite",
        severity: "Medium",
        detail:
          "Managing underwriting depends on carriers delegating authority. A carrier withdrawing a binding authority removes both revenue and the relationship.",
        watch:
          "The number of binding authorities and any change in carrier concentration.",
      },
      {
        title: "Errors and omissions liability",
        severity: "Low",
        detail:
          "A broker that places risk incorrectly can be sued for the coverage gap, even though it does not carry the insurance risk itself.",
        watch:
          "Any disclosed E&O claims or reserve for professional liability.",
      },
    ],
    watchlist: [
      {
        title: "Organic revenue growth",
        detail:
          "The measure that separates the brokerage from the acquisition programme.",
      },
      {
        title: "Compensation ratio",
        detail:
          "The largest cost line and the main determinant of the operating margin.",
      },
      {
        title: "Interest cover",
        detail:
          "At 2.3x it is the tightest constraint on the acquisition strategy.",
      },
      {
        title: "Renewal pricing",
        detail:
          "Commission income follows premium, and premium follows the specialty rate cycle.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Ryan Specialty is a wholesale insurance intermediary with $3.20B of trailing revenue, a 15.9% operating margin, a 6.1% net margin and $568.6M of free cash flow. It places specialty risk for retail brokers and runs delegated underwriting authorities for carriers, without carrying the insurance risk itself.",
      "The business is capital-light in operations and leveraged in structure. Operating cash flow is strong and capital expenditure is small, but interest cover of 2.3x and flat net income across five years of revenue growth show what the acquisition programme costs.",
      "The valuation question is whether 10.1% revenue growth, decelerating to 4.8%, justifies 21.1x free cash flow. For a broker, growth comes from premium rates and new authorities; neither is fully within management's control.",
    ],
    questions: [
      "How much of revenue growth is organic versus acquired?",
      "What is the compensation ratio, and is it rising?",
      "How concentrated is revenue among the largest producers?",
      "What does the debt maturity schedule look like against 2.3x interest cover?",
    ],
  },
};
