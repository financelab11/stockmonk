import type { StockStory } from "./types";

export const CB: StockStory = {
  ticker: "CB",
  kicker:
    "Property and casualty insurance · Commercial, personal and reinsurance",
  title: "Chubb gets paid to underwrite risk, then earns a return on the float",
  dek: "Premiums are collected before claims are paid, and the difference is invested. Underwriting discipline, catastrophe exposure and the yield on that float explain a 16.5% return on equity — and why a combined ratio matters more than a P/E here.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $61.8B, up 5.7%, but the latest quarter grew only 0.3%.",
    "Operating margin is 22.3% and net margin is 18.2%, with diluted EPS of $28.55.",
    "Return on equity is 16.5% and interest cover is 22.9x, a comfortable balance sheet for an insurer.",
    "At $365.02 the shares trade at 12.5x trailing earnings and 13.3x EV/EBITDA, a bank-like multiple for an underwriting business.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/896159/000089615926000005/cb-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000896159&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Chubb is a global property and casualty insurer. It writes commercial insurance for companies, personal lines for affluent homeowners and drivers, accident and health cover, and reinsurance for other insurers. It also has a life insurance operation. The common thread is underwriting: Chubb accepts a defined risk in exchange for a premium and tries to price that risk better than the next insurer.",
      "The accounting is unusual. Premiums are received up front, claims are paid later, and the money in between is invested. That pool of money is the float. If underwriting is profitable, the float is a source of funds that costs less than nothing; if underwriting is unprofitable, the float carries a cost and the investment return has to cover it.",
      "Trailing revenue of $61.8B is 5.7% higher than a year earlier, but the latest quarter grew only 0.3%. Operating margin is 22.3% and return on equity is 16.5%. At $365.02 the equity is worth $140.8B, or 12.5x trailing earnings. The shares are near the top of a 52-week range of $282.11 to $384.26, and the five-year return is 104.5%.",
    ],
    quote:
      "An insurer earns two ways: the underwriting profit on the policy and the investment return on the money held before claims are paid. A good year needs both.",
  },
  whatItDoes: {
    paragraphs: [
      "The commercial business covers large corporations, mid-sized companies and small businesses: property, casualty, workers' compensation, professional liability and specialty lines. It is global, with a meaningful presence in North America, Europe, Asia and Latin America. Commercial insurance is priced per risk, often with brokers negotiating terms, so underwriting judgement and claims handling are the product.",
      "Personal lines serve high-net-worth households with homeowners, auto and umbrella cover. This is a niche where Chubb has historically charged a premium for broader coverage and better claims service. Accident and health provides supplemental cover, often sold through employers or affinity groups. Reinsurance and life round out the portfolio and add diversification.",
      "The company's competitive position rests on underwriting expertise, claims service, broker relationships and a diversified book. A global insurer can absorb a large single loss without impairing capital, which is valuable to corporate clients. The weakness is that insurance is a commoditised product in many lines, and price competition can erode margins quickly when capital is abundant.",
    ],
    bullets: [
      {
        title: "Commercial P&C",
        detail:
          "Property, casualty, specialty and workers' compensation for businesses. The largest profit pool.",
      },
      {
        title: "High-net-worth personal lines",
        detail:
          "Homeowners, auto and umbrella cover for affluent households, priced for service and breadth.",
      },
      {
        title: "Reinsurance and life",
        detail:
          "Risk transfer for other insurers and supplemental life and health products. Diversification and capital deployment.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The core measure is the combined ratio: claims and expenses divided by premiums. A ratio below 100% means the underwriting itself is profitable. Above 100% means the insurer is paying out more than it collects, and the investment return on the float has to make up the difference. Chubb's margin depends on keeping that ratio under control while growing premiums.",
      "Investment income comes from the float. Premiums are invested in bonds and other securities until claims are paid, and the yield on that portfolio is a second profit engine. When interest rates rise, new money earns more and investment income grows with a lag. When rates fall, the opposite happens. That is why insurers are sensitive to the rate cycle even when underwriting is stable.",
      "Catastrophe losses are the wild card. A single hurricane, wildfire or earthquake can produce claims that erase a quarter of underwriting profit. Reinsurance protects the tail, but it costs money and introduces counterparty risk. The insurer's skill is in pricing the expected loss, buying the right reinsurance and holding enough capital to survive the unexpected one.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue rose from $40.87B in FY2021 to $59.40B in FY2025, with the trailing figure at $61.85B. The increase reflects premium growth, hard-market pricing in several lines and the acquisition of new business. The latest quarter's 0.3% growth is a sharp deceleration from that pace and suggests the pricing cycle is softening in some lines.",
      "Consensus estimates call for $49.16B of revenue and $29.11 of EPS this fiscal year, then $51.21B and $29.47 next year. The revenue figures are on a different presentation basis from the $61.85B trailing figure, so the EPS path is the cleaner comparison. The implied EPS growth is modest, which is consistent with a mature insurer in a softening market.",
      "The durable drivers are premium growth, rate increases in property and casualty, and investment income on the float. The brakes are a soft pricing cycle, higher catastrophe losses, adverse reserve development and lower reinvestment yields. Insurance growth is cyclical, and the current deceleration is a warning that the hard market may be ending.",
    ],
    bullets: [
      {
        title: "Premium growth",
        detail:
          "New business and rate increases expand the premium base, but price competition can reverse it.",
      },
      {
        title: "Investment income",
        detail:
          "The float earns a yield that rises and falls with rates and with the portfolio's duration.",
      },
      {
        title: "Underwriting margin",
        detail:
          "The combined ratio determines whether the float costs money or pays for itself.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 22.3%, net margin is 18.2% and diluted EPS is $28.55. Return on equity is 16.5%. For an insurer, ROE is the right summary because it captures underwriting, investment income and capital efficiency in one number. A 16.5% return is good in a market where many insurers earn less than their cost of capital.",
      "The annual record shows revenue of $40.87B, $43.10B, $49.73B, $55.75B and $59.40B, with net income of $8.53B, $5.25B, $9.03B, $9.27B and $10.31B. The FY2022 dip is a reminder of how much catastrophe losses and investment marks can swing a single year. The trend since then has been favourable. Quarterly operating margins have ranged from 20.3% to 25.0% over the last six quarters, and EPS moved between $5.88 and $8.07; the Q3 FY26 result was barely higher than the prior year's Q3 in revenue and weaker in margin, which is consistent with a softening market.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow is reported as not available. For an insurer, that is understandable: premiums, claims, reinsurance recoverables and investment purchases all move through the balance sheet in ways that a conventional free-cash-flow calculation does not capture cleanly. The cash flow statement is useful, but it is not the primary lens.",
      "The relevant measures are the combined ratio, reserve development, the investment portfolio's duration and the capital ratio. Reserves are estimates of future claims, and a shortfall can take years to surface. The investment portfolio is mostly bonds, so its market value moves with rates. The capital ratio determines how much premium the insurer can write relative to its equity.",
      "Capital return is a mix of dividends and buybacks, constrained by the insurance subsidiaries' capital requirements and the rating agencies' expectations. A strong insurer holds more capital than the minimum because policyholders and brokers care about claims-paying ability. That is why the balance sheet is conservative even when earnings are volatile.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $365.02, Chubb trades at 12.5x trailing earnings and 13.3x EV/EBITDA. The EV/EBITDA multiple is higher than the P/E because enterprise value includes debt and because EBITDA is close to operating income, which is smaller than net income after investment gains. For an insurer, EV/EBITDA is a clumsy measure; price to book and return on equity are more informative.",
      "The peer table puts JPMorgan at 13.5x earnings, Bank of America at 10.6x, Goldman at 11.3x and Morgan Stanley at 13.9x. Chubb's 12.5x is bank-like, which makes sense: an insurer is a leveraged underwriter with an investment portfolio, not a capital-light fee business.",
      "Stockmonk does not publish a target price. The third-party mean in the next section is context, and the 314-to-425 range reflects uncertainty about catastrophe losses and the pricing cycle.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-three analysts contribute to the attributed consensus, with a mean target of $373.22 and a range of $314.00 to $425.00. The range is wide for an insurer and reflects genuine disagreement about the direction of premium rates and the level of catastrophe losses.",
      "Estimates call for $29.11 of EPS this fiscal year and $29.47 next year, with 25 analysts contributing to each. The near-flat EPS path implies a business that is holding earnings rather than growing them, consistent with a softening underwriting cycle.",
      "These are third-party forecasts and can change. A mean target is not a Stockmonk rating, and for an insurer the estimate dispersion is often driven by weather and reserves rather than by the franchise.",
    ],
  },
  risks: {
    intro:
      "Chubb's risks are underwriting and investment risks. The balance sheet is strong enough to absorb a bad year, but a run of catastrophes or adverse reserve development can erode capital and the multiple together.",
    items: [
      {
        title: "Catastrophe losses",
        severity: "High",
        detail:
          "Hurricanes, wildfires, floods and earthquakes can produce claims that overwhelm a quarter of underwriting profit. Climate patterns may be making the tail thicker.",
        watch:
          "Catastrophe loss ratios, reinsurance coverage and modelled peak exposures.",
      },
      {
        title: "Reserve adequacy",
        severity: "High",
        detail:
          "Claims reserves are estimates. If prior-year reserves prove too low, the insurer must strengthen them, which hits earnings and credibility.",
        watch:
          "Prior-year reserve development and the ratio of reserves to paid claims.",
      },
      {
        title: "Soft pricing cycle",
        severity: "Medium",
        detail:
          "When capital is abundant, insurers cut prices to win business. Premium growth stalls and combined ratios deteriorate.",
        watch:
          "Rate change by line, new business volumes and the combined ratio.",
      },
      {
        title: "Investment portfolio and rates",
        severity: "Medium",
        detail:
          "The float is invested in bonds. Rising rates reduce the market value of the portfolio; falling rates reduce reinvestment income.",
        watch: "Portfolio duration, book yield and unrealised gains or losses.",
      },
      {
        title: "Regulation and tax",
        severity: "Medium",
        detail:
          "Insurance is regulated locally, and changes to capital rules, tax treatment or pricing freedom can affect returns.",
        watch:
          "Solvency ratios, regulatory rulings and tax changes in major markets.",
      },
    ],
    watchlist: [
      {
        title: "Combined ratio",
        detail: "The single best measure of underwriting discipline.",
      },
      {
        title: "Catastrophe losses",
        detail: "The main source of quarterly earnings volatility.",
      },
      {
        title: "Investment income",
        detail:
          "The return on the float and the pace of reinvestment at higher or lower yields.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Chubb is a global insurer that earns a return on underwriting and on the float. The 22.3% operating margin, 18.2% net margin and 16.5% return on equity are solid, and the balance sheet has ample interest cover at 22.9x.",
      "The teaching point is that insurers need different tools. Free cash flow is not available and EV/EBITDA is awkward; the combined ratio, reserve development, investment yield and price to book are the measures that explain the business. A P/E of 12.5x is a starting point, not a verdict.",
      "The open questions are whether the pricing cycle is turning, how much catastrophe exposure is retained after reinsurance, and whether reserves are adequate for the claims already incurred.",
    ],
    questions: [
      "What is the combined ratio, and how much of it is catastrophe losses?",
      "Is prior-year reserve development positive or negative?",
      "How much of the investment portfolio is reinvested at today's yields?",
      "Is premium growth coming from rate increases or from new exposure?",
    ],
  },
};
