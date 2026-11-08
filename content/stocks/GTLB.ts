import type { StockStory } from "./types";

export const GTLB: StockStory = {
  ticker: "GTLB",
  kicker: "Software & Cyber · Software development lifecycle",
  title: "GitLab sells seats to developers, and developers are the part AI is changing",
  dek: "Revenue grew 23.0% to $1.06B and free cash flow reached 20.3% of sales. The seat-based model is efficient until the number of seats stops growing.",
  readingMinutes: 9,
  takeaways: [
    "Revenue was $1.06B, up 23.0%, after compounding at 50.8% a year in the earlier period.",
    "Gross margin of 85.8% is high; the -8.5% operating margin is a sales and research choice, not a delivery cost.",
    "Free cash flow was $213.7M, a 20.3% margin, with $1.26B of net cash behind it.",
    "The quarterly operating margin fell from -6.0% to -19.9% while revenue rose, which points to a cost event rather than a demand problem.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001653482&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "GitLab packages the whole path from idea to deployed code into one application: planning boards, source control, continuous integration, security scanning, packaging and release. The pitch is consolidation. An engineering organisation that would otherwise stitch together four or five tools can buy one platform, one permission model and one audit trail.",
      "Trailing revenue is $1.06B, up 23.0%. The latest quarter, Q2 FY27, produced $286.3M at a -19.9% operating margin. The shares closed at $48.09 for an $8.0B market capitalisation, 75% of the way up a 52-week range of $18.73 to $58.01.",
      "The question that decides the next few years is unusual for a software company: what happens to per-developer pricing when AI writes a growing share of the code?",
    ],
    quote:
      "GitLab charges per person who ships code. The cheaper it becomes to ship code without a person, the more the pricing model has to bend.",
  },
  whatItDoes: {
    paragraphs: [
      "The product is sold in tiers. A free version seeds the funnel and is genuinely usable, which is how the company reaches small teams without a sales call. Premium adds the collaboration and management controls that a growing engineering organisation needs. Ultimate adds security, compliance and portfolio features that large regulated buyers require.",
      "Customers range from two-person startups on the free tier to banks and public agencies running thousands of projects. Revenue is concentrated in larger accounts, because a per-seat product only becomes material when there are many seats. The company employs 2,170 people and reports a single revenue line with no segment or geography split in the dataset.",
    ],
    bullets: [
      {
        title: "Free tier",
        detail:
          "The distribution engine. It costs almost nothing to serve and produces the pipeline that sales later converts.",
      },
      {
        title: "Paid tiers",
        detail:
          "Seat-based subscriptions where the upgrade from Premium to Ultimate is the main expansion lever inside an existing account.",
      },
      {
        title: "Hosting choice",
        detail:
          "Self-managed installations for customers who cannot use a public cloud, and a hosted service for those who can. Self-managed carries lower delivery cost and slower feature delivery.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is a subscription per user per month, billed annually, with the tier determining the price. Gross margin is 85.8% because the software does the work and hosting is a small part of the cost base. Very few businesses convert revenue into gross profit this efficiently.",
      "The operating loss therefore comes entirely from what sits above gross profit: engineering to keep pace across an enormous feature surface, and a sales organisation that has to teach large buyers why one platform beats five tools. Both are largely fixed in the short term, which is why revenue growth is the variable that decides whether the model works.",
      "The seat model has a specific virtue and a specific weakness. The virtue is predictability: a customer's bill moves with headcount, which is slow and visible. The weakness is that the bill is tied to a number the customer actively tries to reduce when budgets tighten — and that AI tooling now targets directly.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue went from $252.7M in FY2022 to $424.3M, $579.9M, $759.2M and $955.2M in FY2026. That is a 50.8% compound rate, and the latest quarter grew 21.3%. The deceleration is steep but orderly: each year adds more absolute revenue than the last while growing at a lower percentage.",
      "Consensus estimates call for $282.7M next quarter and $299.3M the quarter after, $1.13B for this fiscal year and $1.31B next, with EPS of $0.87 and $1.04. Those figures assume the current growth rate holds rather than decays further.",
      "Three things feed the top line: new logos converting out of the free tier, tier upgrades inside existing accounts, and seat growth as customers hire. A fourth — AI features sold as add-ons — is the one the company needs to work, because it is the only lever that raises revenue per seat rather than revenue per head.",
    ],
  },
  performance: {
    paragraphs: [
      "Annual operating income improved from -$129.0M to -$211.4M, -$187.4M, -$142.7M and -$70.5M. The trend is consistent and the FY2026 loss is roughly half the FY2025 figure on a much larger revenue base.",
      "The quarterly sequence is less tidy. Operating margin went -16.1%, -7.8%, -5.1%, -2.0%, -6.0%, then -19.9%. A jump of that size in one quarter, while gross margin held near 86%, is the signature of a charge or a step-up in spending rather than a change in the economics of delivery. It is the kind of item to look for in the cash-flow statement and the notes rather than in the headline.",
      "Trailing net margin is -5.1%, diluted EPS is -$0.32, return on equity is -5.5% and return on invested capital is -5.2%. All four are small negatives, which is a different picture from a company burning heavily.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow has been volatile: -$53.4M, -$83.5M, $33.4M, -$67.7M and $222.0M across the five years, with $213.7M on a trailing basis. The swings track billings and the timing of large annual renewals more than they track profitability.",
      "The balance sheet holds $1.26B of net cash against an $8.0B market capitalisation, so roughly a sixth of the equity value is cash. That removes financing risk entirely and gives the company the option to acquire or to buy back stock, though neither has yet been the main use of the money.",
      "Capital intensity is minimal. There are no data centres to build and no hardware to ship. The investment that matters is engineering headcount, which shows up as an expense rather than as capital expenditure — a distinction that makes free cash flow look better than it would for a company that had to build its own infrastructure.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $48.09 the shares trade at 30.0x trailing earnings, which sounds high until the sign of the earnings is checked: trailing EPS is -$0.32, so the multiple is being computed on a positive adjusted figure rather than the GAAP result. EV/EBITDA is not available in the dataset. EV/sales is 6.4x and price to free cash flow is 37.5x.",
      "The peer comparison is mostly about growth. GitLab at 23.0% sits behind Rubrik at 42.4% and Samsara at 29.5%, ahead of SentinelOne at 21.1% and far ahead of Tenable at 9.5%. Its -8.5% operating margin is better than Rubrik's -16.8% and SentinelOne's -29.5%, and worse than Tenable's 4.4%.",
      "A 6.4x sales multiple on 23% growth with a mid-single-digit loss is a full price, but not an unreasonable one if the loss continues to halve every year. The multiple is doing less work than the growth assumption.",
      "Stockmonk does not publish a target price. The consensus mean in the next section is third-party context.",
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-four analysts contribute to the attributed consensus. The mean target is $56.13 with a range of $45.00 to $70.00. The low end of the range sits below the current price, which is worth noticing.",
      "The estimate path is $1.13B of revenue and $0.87 of EPS this fiscal year, then $1.31B and $1.04. Revenue growth of that shape is consistent with the recent trend; the EPS path assumes the operating loss keeps narrowing at a similar pace.",
    ],
  },
  risks: {
    intro:
      "GitLab's risks are competitive and structural. The balance sheet is strong and gross margin is high, so the threats are to pricing and to the unit being priced.",
    items: [
      {
        title: "Seat-based pricing and AI",
        severity: "High",
        detail:
          "If AI assistants reduce the number of developers needed for a given amount of output, a per-seat bill shrinks with headcount. The company needs AI features to raise price per seat faster than seats decline.",
        watch:
          "Revenue per paid seat and the attach rate of AI add-ons.",
      },
      {
        title: "Bundling by larger platforms",
        severity: "High",
        detail:
          "Source control and CI are increasingly included in broader development platforms and cloud agreements. For a customer already inside one, the marginal cost of the bundled option is close to zero.",
        watch:
          "Win rates in large accounts and discounting on renewals.",
      },
      {
        title: "Growth deceleration",
        severity: "High",
        detail:
          "The compound rate fell from 50.8% to 21.3% in the latest quarter. Further decay would change the valuation arithmetic quickly.",
        watch:
          "Quarterly revenue growth and the free-to-paid conversion rate.",
      },
      {
        title: "Tier mix",
        severity: "Medium",
        detail:
          "Expansion depends on moving customers from Premium to Ultimate. If buyers stay on the cheaper tier, seat growth alone will not carry the revenue plan.",
        watch:
          "The proportion of paid seats on the highest tier.",
      },
      {
        title: "One-off cost events",
        severity: "Medium",
        detail:
          "The swing from -6.0% to -19.9% operating margin in a single quarter shows how much a charge can distort a period.",
        watch:
          "Operating margin excluding one-off items, and the cash-flow statement for confirmation.",
      },
    ],
    watchlist: [
      {
        title: "Revenue per seat",
        detail:
          "The single number that captures both the pricing power and the AI question.",
      },
      {
        title: "Operating margin excluding charges",
        detail:
          "The underlying trend has been improvement; the reported quarters have been noisy.",
      },
      {
        title: "Free-cash-flow margin",
        detail:
          "At 20.3% it already supports the valuation; the question is whether it holds through a weaker billing quarter.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "GitLab is a high-gross-margin subscription business with a large free funnel, a real enterprise customer base and enough cash to fund its own transition. It is also a per-seat business in a market where the number of seats is the variable under attack.",
      "The educational point is that revenue models carry embedded assumptions. A seat model assumes people; a consumption model assumes usage; a term licence assumes renewal. AI changes the first assumption most directly, which is why the product roadmap matters more here than the cost-cutting story.",
      "A reader should finish by asking whether consolidation into one platform is still the winning argument when the tools being consolidated are themselves being rebuilt around AI.",
    ],
    questions: [
      "How much revenue comes from seat growth versus tier upgrades?",
      "What share of customers pay for AI features today, and at what price?",
      "Does the free tier still convert at the same rate as it did two years ago?",
      "How much of the quarterly margin swing was a one-off charge?",
    ],
  },
};
