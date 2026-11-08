import type { StockStory } from "./types";

export const PFE: StockStory = {
  ticker: "PFE",
  kicker: "Healthcare · Drug Manufacturers",
  title: "Pfizer's revenue halved once, and the market has not forgotten",
  dek: "Revenue fell from $101.17B in FY2022 to $59.55B in FY2023 when the pandemic products disappeared. What remains is a $63B business with a 7% operating margin, $48.4B of net debt and a 7.0% free-cash-flow yield.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $63.63B, up 1.3%, and the latest quarter declined 0.4%.",
    "Operating margin is 6.7% and return on invested capital 2.4% because of charges; free cash flow is still $11.79B, an 18.5% margin.",
    "Net debt of $48.40B is 4.5x EBITDA, the highest leverage in this healthcare batch.",
    "The shares trade at 41.5x earnings but 14.2x free cash flow — the gap is the whole valuation debate.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/78003/000007800326000026/pfe-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000078003&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Pfizer sells prescription medicines and vaccines: oncology, internal medicine, inflammation and immunology, hospital products and a vaccine portfolio. It sells to hospitals, pharmacies and governments, and it negotiates with insurers and pharmacy benefit managers in the United States and with national health systems abroad.",
      "The company's recent history is dominated by two events. The first was the pandemic, which produced a vaccine and an antiviral that took revenue to $101.17B in FY2022. The second was the unwind, which took it to $59.55B in FY2023. Very few large companies experience a 41% revenue decline in a single year and then have to explain what the remaining business is worth.",
      "Trailing revenue is $63.63B, up 1.3%, and the latest quarter declined 0.4% to $16.58B. The shares closed at $29.39, near the top of a 52-week range of $23.62 to $31.44, for a market value of $167.52B. The stock is up 28.5% over the past year and down 20.2% over five.",
    ],
  },
  whatItDoes: {
    paragraphs: [
      "Oncology is the growth priority, built around acquired antibody-drug conjugate technology as well as older products. Internal medicine includes anticoagulants and cardiovascular drugs that treat large chronic populations. Inflammation and immunology covers autoimmune conditions, and the vaccine business sells pneumococcal and other products to governments and pharmacies.",
      "The portfolio's weakness is that many of its largest products are old enough to face patent expiry in the next few years. The company has responded by buying late-stage assets, which brings revenue forward but also brings debt and amortisation. That is the origin of the $48.40B net debt figure.",
      "The customer mix matters for pricing. Vaccines are bought in bulk by public programmes, where price is negotiated at a national level. Prescription drugs are sold through insurers and pharmacies, where rebates determine net price. A single product can therefore have two very different margins depending on which channel it sells through."
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 73.4% is the economics of patented medicine: manufacturing cost is small relative to price, and the real costs are research, sales and the rebates that payers negotiate. Those costs are largely fixed, which is why a revenue decline of the size Pfizer experienced in FY2023 produced an operating margin of 1.8% rather than a proportionate fall in profit.",
      "The company also carries a large amortisation burden from acquisitions. Acquired intangible assets are written down through operating income over their useful lives, so reported profit is lower than cash profit by a wide margin. That is why free cash flow of $11.79B sits against net income that implies a 6.3% net margin.",
      "Operating leverage cuts both ways here. When revenue grows, the fixed cost base produces a rapid increase in profit; when a patent expires, the same base produces a rapid decrease. The FY2022-to-FY2023 swing, from $34.73B of operating income to $1.06B, is the most extreme example in this coverage universe."
    ],
  },
  growth: {
    paragraphs: [
      "The long-run revenue record is not a growth story; it is a story of replacement. Revenue was $73.64B in FY2021, $101.17B in FY2022, $59.55B in FY2023, $63.63B in FY2024 and $62.58B in FY2025. The trailing figure of $63.63B is roughly where the company was before the pandemic, which means five years of work has replaced a windfall without adding much net growth.",
      "Third-party estimates reflect that flatness: $63.02B this fiscal year and $60.70B next, with EPS of $3.04 and $2.94. The consensus expects revenue to decline next year, which is what a patent cliff looks like in a forecast.",
      "The growth that does exist comes from newer oncology products and from vaccines, offset by the erosion of older medicines. Whether that replacement is fast enough is the entire question, and it is a question about patent dates rather than about demand."
    ],
    bullets: [
      {
        title: "Oncology launches",
        detail:
          "Acquired antibody-drug conjugates and new tumour types are the main source of incremental revenue.",
      },
      {
        title: "Vaccine programmes",
        detail:
          "Pneumococcal and other vaccines grow with public immunisation policy, but at negotiated prices.",
      },
      {
        title: "Patent expiries",
        detail:
          "Older primary-care medicines lose exclusivity on a known schedule, and the revenue does not decline gently.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record is dominated by two years. FY2022 operating income was $34.73B on revenue of $101.17B, a 34.3% margin. FY2023 operating income was $1.06B on revenue of $59.55B, a 1.8% margin. No other company in this batch has a swing of that size in its history.",
      "The quarterly table shows the same volatility at a smaller scale: operating margins of 20.8%, 20.0%, -9.4%, 21.9%, -4.3% and 20.4%. Two negative quarters in six is not a business in decline; it is a business absorbing charges at irregular intervals.",
      "Return on equity is 4.5% and return on invested capital is 2.4%, both depressed by the same charges and by the goodwill from acquisitions. In a year without charges the underlying return would be materially higher, but the gap between reported and underlying returns is now so wide that the reported figures are of limited use for comparison."
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $11.79B over the trailing year, an 18.5% margin, and has been between $4.79B and $29.87B over the past five fiscal years. The FY2021 figure of $29.87B is the pandemic peak; the FY2023 figure of $4.79B is the trough. Even at the bottom the business generated cash.",
      "The obligation is the debt. Net debt of $48.40B is 4.5x EBITDA, which is high for a pharmaceutical company and reflects the acquisitions funded to replace lost revenue. Interest has to be paid before shareholders see anything, and a large acquisition would be difficult to justify at this leverage.",
      "Capital spending is moderate because manufacturing is established, so most free cash flow goes to the dividend and to debt reduction. The dividend is a significant part of the total return, and its sustainability depends on the cash flow holding near current levels."
    ],
  },
  valuation: {
    paragraphs: [
      "At $29.39 the shares trade at 41.5x trailing earnings, 20.1x EV/EBITDA, 3.4x EV/Sales and 14.2x free cash flow, for a 7.0% free-cash-flow yield. The earnings multiple is not informative; the cash multiple is.",
      "On EV/EBITDA, 20.1x is below the peer group's mid-twenties and well below Intuitive at 37.1x. On EV/Sales, 3.4x is a pass-through multiple, well under J&J at 7.0x and AbbVie at 8.9x. The market is not paying for the current earnings base; it is paying a modest multiple for the cash flow and discounting the debt and the patent cliff.",
      "The 7.0% free-cash-flow yield is the number that matters. For a company with flat revenue and $48.40B of net debt, a 7% cash yield is compensation for the risk that the cliff arrives before the replacement products do. Whether that compensation is adequate depends on the patent schedule, not on the next quarter."
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-six analysts contribute to the attributed third-party consensus, with a mean target of $30.26 and a range of $25.00 to $37.00. The mean is barely above the last close, which tells you the analyst community sees the shares as fairly valued rather than mispriced.",
      "Estimates call for $17.20B of revenue next quarter and $3.04 of EPS this fiscal year, then $60.70B and $2.94. The revenue decline in the following year is the consensus acknowledging the patent cliff.",
      "The EPS estimates are detached from the trailing $0.70, again because of charges. What matters is the direction: flat revenue this year, a decline next, and a cash flow that has to cover the dividend and the debt."
    ],
  },
  risks: {
    intro:
      "Pfizer's risks are a patent schedule, a leveraged balance sheet and a history of large acquisitions that have not yet produced the expected growth.",
    items: [
      {
        title: "Patent expiries",
        severity: "High",
        detail:
          "Several large products lose exclusivity within a few years. The revenue decline is usually abrupt, and the replacement products have to be approved and adopted before it arrives.",
        watch:
          "The revenue contribution of products facing expiry and the launch trajectory of replacements.",
      },
      {
        title: "Leverage",
        severity: "High",
        detail:
          "$48.40B of net debt at 4.5x EBITDA limits strategic options and makes the dividend dependent on cash flow holding up.",
        watch:
          "Net debt to EBITDA and the pace of deleveraging from free cash flow.",
      },
      {
        title: "Acquisition returns",
        severity: "Medium",
        detail:
          "The company has spent heavily to replace lost revenue. If those assets do not earn their cost of capital, the debt remains and the growth does not.",
        watch:
          "Return on invested capital and impairments of acquired intangibles.",
      },
      {
        title: "US drug pricing",
        severity: "Medium",
        detail:
          "Government negotiation and formulary pressure reduce net price on primary-care products that already face generic competition.",
        watch:
          "Net price realisation and products drawn into negotiated pricing.",
      },
      {
        title: "Vaccine demand",
        severity: "Medium",
        detail:
          "Vaccine revenue depends on public programmes and on seasonal demand, both of which can move sharply year to year.",
        watch:
          "Vaccine revenue by product and the guidance for the current season.",
      },
    ],
    watchlist: [
      {
        title: "Free cash flow",
        detail:
          "The measure that funds the dividend and the debt; a fall below $10B would force a decision.",
      },
      {
        title: "Replacement revenue",
        detail:
          "Revenue from products launched in the last few years is the only thing that offsets the cliff.",
      },
      {
        title: "Net debt",
        detail:
          "Progress below 4x EBITDA would restore strategic flexibility.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Pfizer is a large, cash-generative pharmaceutical company with a shrinking earnings base and a debt load from buying replacements. Free cash flow of $11.79B and a 7.0% yield are real; so is the $48.40B of net debt.",
      "The pandemic years distorted every comparison. FY2022's $101.17B of revenue and $34.73B of operating income were a peak that will not recur, and the FY2023 collapse was the correction. The relevant question is what the $63B business earns in a normal year, not what it earned at the peak.",
      "The valuation is not demanding on cash. The risk is that the patent schedule removes revenue faster than the acquired pipeline replaces it, which is exactly what the consensus forecast for next year implies."
    ],
    questions: [
      "Which products lose exclusivity in the next three years, and how large are they?",
      "How much of the $11.79B of free cash flow is committed to the dividend?",
      "What did the acquisitions add in revenue, and what did they cost in debt?",
      "Is 20.1x EBITDA cheap for a business with declining revenue?"
    ],
  },
};
