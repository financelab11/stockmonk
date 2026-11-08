import type { StockStory } from "./types";

export const REGN: StockStory = {
  ticker: "REGN",
  kicker: "Healthcare · Biotechnology",
  title: "Regeneron is already priced for the loss of its eye franchise",
  dek: "At 19.4x earnings and 14.3x EBITDA it is the cheapest business in the peer group, and $16.87B of net cash is close to a fifth of the market value. The market is discounting something specific.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue was $16.90B, up 18.6%, with the latest quarter up 36.3%.",
    "Gross margin is 85.8% and operating margin 28.8%, the economics of a biologics business with partner revenue mixed in.",
    "Free cash flow of $3.83B is a 22.6% margin, and net cash of $16.87B covers a large slice of the market value.",
    "Consensus expects revenue to grow about 7% next year while EPS falls from $68.75 to $62.12.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/872589/000087258926000008/regn-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000872589&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Regeneron discovers and manufactures biologic medicines. Its two commercial pillars are an eye-disease franchise injected into the retina and an anti-inflammatory antibody used in eczema, asthma and related conditions. Around them sit smaller products in oncology, cholesterol and rare disease.",
      "Part of the revenue is not product revenue at all. Some of the largest medicines are developed and sold through collaborations, where a partner books the sales and Regeneron records its share of the profit. That distinction shapes everything about how the income statement should be read: collaboration profit carries no cost of goods, no manufacturing and no sales force of its own.",
      "Trailing revenue was $16.90B, up 18.6%, and the latest quarter grew 36.3% to $5.12B at a 40.0% operating margin. The shares closed at $904.35, below a 52-week high of $991.73, for a market value of $93.55B.",
    ],
    quote:
      "Two products decide this company's next five years. One is facing biosimilar competition and the other is growing fast enough to hide it, for now.",
  },
  whatItDoes: {
    paragraphs: [
      "The eye franchise treats wet age-related macular degeneration and diabetic eye disease, conditions that require regular injections into the eye. Patients are treated by retinal specialists, and the dosing interval is a competitive battleground: a product that can be given every twelve weeks instead of every eight has a real advantage for a patient facing a needle.",
      "The anti-inflammatory antibody is the growth engine. It treats atopic dermatitis, asthma, chronic obstructive pulmonary disease and a widening list of allergic conditions, and each new indication adds a patient population to the same molecule. It is sold globally through a partnership, which is why Regeneron's reported revenue for it looks different from a company that sells directly.",
      "The rest of the portfolio — oncology, cholesterol, rare disease — is smaller but strategically useful. It provides additional shots on goal and keeps the research organisation focused on mechanisms beyond the two big franchises.",
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Gross margin of 85.8% is what in-house biologics manufacturing looks like at scale. Regeneron makes its own antibodies in large bioreactors, which is capital-intensive to build but very profitable once the plants are running. The alternative — contracting manufacturing out — would lower the capital bill and the gross margin at the same time.",
      "The revenue line mixes three different economics. Product sales carry cost of goods and a sales force. Collaboration revenue from partners is closer to a royalty: Regeneron records its share of profit without bearing the commercial cost. And licensing or other revenue is smaller still. A shift in the mix between these lines can move the consolidated margin without any change in the underlying business.",
      "That is why the operating margin of 28.8% should be read alongside the gross margin rather than in isolation. The company spends heavily on research — it runs one of the largest human-genetics efforts in the industry — and that spending is a fixed commitment against revenue that depends on two products."
    ],
    bullets: [
      {
        title: "Product sales",
        detail:
          "Directly sold medicines, including the eye franchise in the United States. Carries manufacturing and commercial cost.",
      },
      {
        title: "Collaboration revenue",
        detail:
          "Regeneron's share of profit from partnered products. High margin, but dependent on a partner's commercial execution.",
      },
      {
        title: "Research investment",
        detail:
          "A large internal discovery organisation and genetics database. A fixed cost that precedes revenue by years.",
      },
    ],
  },
  growth: {
    paragraphs: [
      "The revenue history contains a useful lesson about windfalls. Revenue was $16.07B in FY2021, then fell to $12.17B in FY2022 as pandemic-era antibody revenue disappeared. It took until the trailing period, at $16.90B, to exceed the FY2021 level. Growth since then has come from the anti-inflammatory franchise and from newer eye-disease formulations.",
      "The latest quarter's 36.3% growth is well above the trailing 18.6%, which suggests acceleration rather than decay. But the estimates tell a different story about next year: $18.78B this fiscal year and $20.15B next, roughly 7% growth, with EPS falling from $68.75 to $62.12.",
      "That combination — revenue up, earnings down — is the signature of a product mix shifting toward lower-margin revenue, or of a high-margin product shrinking while a lower-margin one grows. For Regeneron it is the expected arrival of biosimilar competition in eye disease."
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin was 55.7% in FY2021, 39.0% in FY2022, 30.9% in FY2023, 28.1% in FY2024 and 24.9% in FY2025. The trailing figure of 28.8% is a partial recovery. This is a company whose margin has more than halved, and the cause is a mix of research spending, price pressure and the loss of the very high-margin pandemic revenue.",
      "The quarterly sequence is volatile in a way that reflects product timing: operating margins of 29.4%, 27.3%, 22.7%, 17.8%, 30.1% and 40.0%. The last quarter is the strongest in the table by a wide margin, and it coincides with the 36.3% revenue growth.",
      "Return on equity is 14.4% while return on invested capital is 23.1%. The gap runs the opposite way to a leveraged company: Regeneron has $16.87B of net cash, and the cash drags the equity return below the operating return. The 23.1% return on invested capital is the better measure of the business."
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $3.83B over the trailing year, a 22.6% margin. That is below the 28.5% net margin, and the gap is explained by capital spending on manufacturing and by the working capital tied up in biologic inventory, which has a long shelf life but a long production cycle.",
      "Net cash of $16.87B is the standout balance-sheet fact. Against a market value of $93.55B, cash and investments net of debt represent close to a fifth of what an investor pays for the equity. That cash is not idle capital in the usual sense — it funds research and manufacturing — but it does mean the operating business is being valued at a lower multiple than the headline suggests.",
      "The dividend yield is 0.4%, so almost all free cash flow is retained. Capital allocation is therefore a research decision more than a shareholder-return decision."
    ],
  },
  valuation: {
    paragraphs: [
      "At $904.35 the shares trade at 19.4x trailing earnings, 14.3x EV/EBITDA, 4.5x EV/Sales and 24.5x free cash flow, for a 4.1% free-cash-flow yield. All four are the lowest in the healthcare peer table, and the EBITDA multiple is less than half of Intuitive's 37.1x.",
      "Some of that discount is mechanical. Net cash of $16.87B reduces enterprise value, so the EV multiples are flattered relative to a company with debt. But even adjusting for that, a business with an 85.8% gross margin and a 23.1% return on invested capital trading at 14.3x EBITDA is being priced for decline.",
      "The decline the market expects is specific: biosimilar competition in eye disease. The eye franchise is the highest-margin large product, and its erosion would reduce both revenue and margin at the same time. The valuation says investors have already assumed a substantial part of that."
    ],
  },
  analysts: {
    paragraphs: [
      "Twenty-seven analysts contribute to the attributed third-party consensus, with a mean target of $977.93 and a range of $812.00 to $1,175.00. The mean is about 8% above the last close, which is a modest gap for a stock with this much controversy.",
      "Estimates call for $5.85B of revenue next quarter and $68.75 of EPS this fiscal year, then $20.15B and $62.12 next year. The decline in EPS alongside revenue growth is the most informative number in the table: it is the analysts modelling margin compression rather than a demand problem.",
      "The revenue estimates imply about 7% growth next year, well below the 18.6% trailing rate. That is the consensus view of the biosimilar transition, and it is the assumption a reader should test first.",
    ],
  },
  risks: {
    intro:
      "Regeneron's risks are concentrated in two products and one patent transition. The balance sheet gives it time; it does not give it a replacement product.",
    items: [
      {
        title: "Eye-franchise erosion",
        severity: "High",
        detail:
          "Biosimilar competition in retinal disease reduces both volume and price on the highest-margin product. Newer formulations can defend share but not the old price.",
        watch:
          "Eye-franchise revenue and the share of patients on the newer formulation.",
      },
      {
        title: "Dependence on a partner",
        severity: "Medium",
        detail:
          "A large share of profit arrives as collaboration revenue from a partner that controls commercial execution in most markets.",
        watch:
          "Collaboration revenue growth and any change in the partnership terms.",
      },
      {
        title: "Pipeline concentration",
        severity: "Medium",
        detail:
          "The company needs a third franchise. Late-stage failures in oncology, immunology or rare disease would leave it dependent on two products for longer.",
        watch:
          "Phase 3 readouts and the number of programmes approaching approval.",
      },
      {
        title: "Drug pricing",
        severity: "Medium",
        detail:
          "High-priced biologics are the most visible target for payer negotiation, and a price cut applies to every year of remaining exclusivity.",
        watch:
          "Realised net price and reimbursement decisions in major markets.",
      },
      {
        title: "Manufacturing complexity",
        severity: "Low",
        detail:
          "Biologics are made in living systems. A contamination or capacity problem is difficult to route around quickly.",
        watch:
          "Capital spending on manufacturing and any supply disclosure.",
      },
    ],
    watchlist: [
      {
        title: "Eye-franchise revenue",
        detail:
          "The single line that determines whether the discount is justified or excessive.",
      },
      {
        title: "Collaboration profit",
        detail:
          "High-margin revenue that can mask or exaggerate trends in the product business.",
      },
      {
        title: "Research spending",
        detail:
          "The company must fund a third franchise from current cash flow; watch whether spending produces approvals.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Regeneron is a high-quality biologics business trading at a discount. The gross margin is 85.8%, the return on invested capital is 23.1%, and the balance sheet holds $16.87B of net cash against a $93.55B market value.",
      "The discount exists for a reason. One product faces biosimilar competition, a second is growing fast enough to offset it for now, and the consensus expects EPS to fall next year even as revenue rises. That is a company in transition, not a company in trouble.",
      "The question is whether the market has over-discounted the transition. At 14.3x EBITDA, a lot of bad news is already in the price — but the same could have been said at 20x, and the answer depends on how quickly the eye franchise erodes.",
    ],
    questions: [
      "How much of eye-franchise revenue is already on the newer formulation?",
      "What share of operating profit comes from collaboration revenue?",
      "Which pipeline asset could become a third franchise of meaningful size?",
      "What is the operating business worth after subtracting $16.87B of net cash?",
    ],
  },
};
