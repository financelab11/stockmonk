import type { StockStory } from "./types";

export const GTLB: StockStory = {
  "ticker": "GTLB",
  "kicker": "Software & Cyber · Software development lifecycle",
  "title": "GitLab sells seats to developers, and developers are the part AI is changing",
  "dek": "Revenue grew 23.0% to $1.06B and free cash flow reached 20.3% of sales. The seat-based model is efficient until the number of seats stops growing.",
  "readingMinutes": 9,
  "takeaways": [
    "Sales of $1.1B grew 23.0% at an 85.8% gross margin, which leaves most of each revenue dollar to fund engineering and sales.",
    "Free cash flow of $213.7M was 20.3% of sales, but the quarterly path swung from $146.8M to -$3.3M, so the annual figure is an average of extremes.",
    "The July quarter's operating margin fell to -19.9% from -6.0%, a charge whose size, not whose existence, is the open question.",
    "Twenty-four analysts put the mean target at $56 against a $45 price, with 18 neutral views and a $45 to $70 range."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1653482/000162828026018731/gtlb-20260131.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001653482&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "A seat-based model has one advantage and one vulnerability, and GitLab's numbers show both. Revenue reached $1.1B on a trailing basis, up 23.0%, with an 85.8% gross margin. The bill moves with headcount, which makes it predictable and slow to decline. It also means the revenue line is tied to a number every customer is trying to reduce, and AI coding tools aim at the same number. The July quarter's -19.9% operating margin, against -6.0% in April, is a reminder that the cost line can move faster than the revenue line.",
      "The go-to-market starts free. A genuinely usable free tier seeds small teams without a sales call, Premium adds the controls a growing engineering organisation needs, and Ultimate adds the security and portfolio features regulated buyers require. Expansion inside an account is the upgrade from Premium to Ultimate, not a new product. That is a good model while seat counts rise; it is a fragile one when the buyer's headcount is the thing being cut. The United States at 82.4% of revenue is the base, Europe at 15.2% the second market.",
      "The valuation debate is about which half of the model wins. At 6.9x sales and 34.9x free cash flow, the shares carry a premium for an 85.8% gross margin and a discount for a -8.5% operating margin, and the peer set shows how those two halves are priced. Elastic grows 16.2% at -2.6%; Tenable 9.5% at 4.4%; Rubrik 42.4% at -18.3%. A buyer is paying for the gross margin and betting the operating line closes before the seat count does."
    ],
    "quote": "GitLab charges by the developer, and the question is whether AI makes each developer worth more than the seats it removes."
  },
  "whatItDoes": {
    "paragraphs": [
      "The product is sold in tiers. A free version seeds the funnel and is genuinely usable, which is how the company reaches small teams without a sales call. Premium adds the collaboration and management controls that a growing engineering organisation needs. Ultimate adds security, compliance and portfolio features that large regulated buyers require.",
      "Customers range from two-person startups on the free tier to banks and public agencies running thousands of projects. Revenue is concentrated in larger accounts, because a per-seat product only becomes material when there are many seats. The company employs 2,170 people and reports a single revenue line with no segment or geography split in the dataset."
    ],
    "bullets": [
      {
        "title": "Free tier",
        "detail": "The distribution engine. It costs almost nothing to serve and produces the pipeline that sales later converts."
      },
      {
        "title": "Paid tiers",
        "detail": "Seat-based subscriptions where the upgrade from Premium to Ultimate is the main expansion lever inside an existing account."
      },
      {
        "title": "Hosting choice",
        "detail": "Self-managed installations for customers who cannot use a public cloud, and a hosted service for those who can. Self-managed carries lower delivery cost and slower feature delivery."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is a subscription per user per month, billed annually, with the tier determining the price. Gross margin is 85.8% because the software does the work and hosting is a small part of the cost base. Very few businesses convert revenue into gross profit this efficiently.",
      "The operating loss therefore comes entirely from what sits above gross profit: engineering to keep pace across an enormous feature surface, and a sales organisation that has to teach large buyers why one platform beats five tools. Both are largely fixed in the short term, which is why revenue growth is the variable that decides whether the model works.",
      "The seat model has a specific virtue and a specific weakness. The virtue is predictability: a customer's bill moves with headcount, which is slow and visible. The weakness is that the bill is tied to a number the customer actively tries to reduce when budgets tighten — and that AI tooling now targets directly."
    ]
  },
  "growth": {
    "paragraphs": [
      "Seat growth is the volume driver and tier mix is the price driver, and the two are pulling in different directions. Revenue grew 21.3% in the July quarter, down from 23.0% on a trailing basis, and the free-to-paid funnel still supplies the smallest customers. Expansion comes from moving accounts from Premium to Ultimate, which raises revenue per seat without adding headcount. If buyers stay on the cheaper tier, seat growth alone has to carry a plan that assumes 18.5% growth this fiscal year.",
      "The estimate path assumes continued deceleration. FY2027 revenue is modelled at $1.1B, up 18.5%, and FY2028 at $1.3B, up 15.7%, with EPS of $0.87 and $1.04. That is a company growing at roughly half its FY2024 rate within four years, and it is the reasonable assumption for a per-seat product in a market where the seat is contested. The 2028 EPS figure is the one that carries the multiple: at 34.9x cash flow, the buyer needs the margin to close as growth slows."
    ],
    "bullets": [
      {
        "title": "Free tier",
        "detail": "The free version is the distribution engine, and the conversion rate from free to paid is not disclosed, which is the missing number behind the growth estimate."
      },
      {
        "title": "Tier upgrade",
        "detail": "Premium to Ultimate is the main expansion lever; a customer that stays on Premium keeps the seat but not the revenue per seat."
      },
      {
        "title": "Self-managed mix",
        "detail": "Self-managed installations carry lower delivery cost and slower feature delivery, so the hosting mix moves gross margin as well as the product experience."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Delivery cost has been steady: gross margin held between 87.4% and 88.8% for four years, so the cost of delivery is not the variable. The operating margin is: -7.4% in FY2026, -8.5% trailing, and -19.9% in the July quarter. The last figure is the one to handle carefully. A single charge took the quarter from -6.0% in April to a double-digit loss, and the reported figures do not separate the charge from the run rate. Net margin followed the same path, from -5.9% in FY2026 to -12.9% in the quarter.",
      "The returns are negative and should be read that way. Return on invested capital is -7.7% and return on equity -5.7%, worse than the -2.0% both Tenable and Elastic report and better than SentinelOne's -17.7%. The operating margin is the comparison that matters: -8.5% against Elastic's -2.6%, Tenable's 4.4% and Pegasystems' 9.9%. An 85.8% gross margin funds a large engineering and sales base, and that base is the whole difference between the gross line and the operating line."
    ]
  },
  "cash": {
    "paragraphs": [
      "The quarterly path of free cash flow runs from -$178.1M to $146.8M to -$3.3M, and the only usable figure is the annual one. Free cash flow of $213.7M is 20.3% of revenue, which looks like a maturing business until the path is laid out. Annual prepayment and the timing of collections explain most of the swing. On the annual basis the company converts a fifth of revenue into cash while growing in the low twenties, which is a genuine achievement.",
      "Capital spending is trivial, $10.8M in FY2026 or 1.1% of revenue, so free cash flow is essentially operating cash flow. The reported balance sheet carries $226.5M more cash than debt, with no dividend on the shares. A company with $213.7M of annual cash flow and a $7.5B market value has the option to buy back stock; the reported figures show no such programme, so the cash is accumulating against a future decision."
    ]
  },
  "valuation": {
    "paragraphs": [
      "Seven times sales is not obviously expensive for an 85.8% gross margin, and not obviously cheap for a -8.5% operating margin. The peer set splits along that line: Elastic earns a -2.6% operating margin on 16.2% growth, Tenable 4.4% on 9.5%, Pegasystems 9.9% on 0.9%, and Rubrik -18.3% on 42.4%. GitLab has the second-fastest growth in that group and a weaker operating margin than all but Rubrik, which is the trade the buyer is making.",
      "On cash the multiple is 34.9x, a 2.9% yield, against a peer median free-cash-flow margin of 20.3%; GitLab's own 20.3% is exactly at that median, so the cash conversion is ordinary and the multiple is paying for growth. If growth slows to the 18.5% modelled for FY2027, the cash multiple stays defensible only if the operating margin closes toward zero.",
      "What would justify the price is the operating line reaching breakeven while revenue compounds in the high teens, which is what the FY2028 estimates assume. What would break it is a year in which seat counts fall faster than price per seat rises. That is not a forecast; it is the specific mechanism the per-seat model exposes, and it is why the product roadmap matters more here than the cost programme."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Coverage of twenty-four analysts carries a mean target of $56 against a $45 price and a range of $45 to $70. A mean 24% above the market price with that many neutral views is a consensus that sees value but not urgency.",
      "Estimates have been stable for three months and firmer over ninety days, with the EPS revision at 6.6%. Four consecutive beats, the latest $0.24 against $0.18, support that view. FY2027 revenue of $1.1B implies 18.5% growth, and EPS of $0.87 implies the margin work is expected to continue. The consensus is therefore assuming the deceleration is orderly and the cost base is controllable, two assumptions that the July quarter tested."
    ]
  },
  "risks": {
    "intro": "GitLab's risks are competitive and structural. The balance sheet is strong and gross margin is high, so the threats are to pricing and to the unit being priced.",
    "items": [
      {
        "title": "Seat-based pricing and AI",
        "severity": "High",
        "detail": "If AI assistants reduce the number of developers needed for a given amount of output, a per-seat bill shrinks with headcount. The company needs AI features to raise price per seat faster than seats decline.",
        "watch": "Revenue per paid seat and the attach rate of AI add-ons."
      },
      {
        "title": "Bundling by larger platforms",
        "severity": "High",
        "detail": "Source control and CI are increasingly included in broader development platforms and cloud agreements. For a customer already inside one, the marginal cost of the bundled option is close to zero.",
        "watch": "Win rates in large accounts and discounting on renewals."
      },
      {
        "title": "Growth deceleration",
        "severity": "High",
        "detail": "The compound rate fell from 50.8% to 21.3% in the latest quarter. Further decay would change the valuation arithmetic quickly.",
        "watch": "Quarterly revenue growth and the free-to-paid conversion rate."
      },
      {
        "title": "Tier mix",
        "severity": "Medium",
        "detail": "Expansion depends on moving customers from Premium to Ultimate. If buyers stay on the cheaper tier, seat growth alone will not carry the revenue plan.",
        "watch": "The proportion of paid seats on the highest tier."
      },
      {
        "title": "One-off cost events",
        "severity": "Medium",
        "detail": "The swing from -6.0% to -19.9% operating margin in a single quarter shows how much a charge can distort a period.",
        "watch": "Operating margin excluding one-off items, and the cash-flow statement for confirmation."
      }
    ],
    "watchlist": [
      {
        "title": "Revenue per seat",
        "detail": "The single number that captures both the pricing power and the AI question."
      },
      {
        "title": "Operating margin excluding charges",
        "detail": "The underlying trend has been improvement; the reported quarters have been noisy."
      },
      {
        "title": "Free-cash-flow margin",
        "detail": "At 20.3% it already supports the valuation; the question is whether it holds through a weaker billing quarter."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "GitLab is a high-gross-margin subscription business with a large free funnel, a real enterprise customer base and enough cash to fund its own transition. It is also a per-seat business in a market where the number of seats is the variable under attack.",
      "The educational point is that revenue models carry embedded assumptions. A seat model assumes people; a consumption model assumes usage; a term licence assumes renewal. AI changes the first assumption most directly, which is why the product roadmap matters more here than the cost-cutting story.",
      "A reader should finish by asking whether consolidation into one platform is still the winning argument when the tools being consolidated are themselves being rebuilt around AI."
    ],
    "questions": [
      "How much revenue comes from seat growth versus tier upgrades?",
      "What share of customers pay for AI features today, and at what price?",
      "Does the free tier still convert at the same rate as it did two years ago?",
      "How much of the quarterly margin swing was a one-off charge?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
