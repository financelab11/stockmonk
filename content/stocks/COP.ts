import type { StockStory } from "./types";

export const COP: StockStory = {
  ticker: "COP",
  kicker: "Energy · Exploration and production",
  title: "ConocoPhillips: a 50% bigger revenue line, the same profit",
  dek: "The company sells more barrels than it did in FY2021 but earns no more net income. Depreciation, royalties and the price per barrel explain the gap, and so does the cost of standing still in a depleting asset base.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $60.2B, up 13.1%, with a 29.4% operating margin and 19.2% net margin.",
    "Revenue has risen about 50% since FY2021 while net income went from $8.08B to $7.99B in FY2025.",
    "Free cash flow is $12.4B, a 20.6% margin, and the balance sheet holds $9.9B of net cash.",
    "At $136.27 the stock trades at 13.9x earnings and 5.1x EV/EBITDA, with a 7.7% free-cash-flow yield and a 2.5% dividend yield.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000009/cop-20251231.htm",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001163165&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "ConocoPhillips does one thing: it finds oil and gas, drills it and sells it. There is no refinery, no chemical plant and no utility to cushion the earnings. That simplicity is the point. When the price of a barrel rises, almost all of the increase falls to the bottom line. When it falls, the reverse happens with the same speed.",
      "The company is valued at $161.1B at $136.27 a share, with operating margin of 29.4%, return on equity of 17.5% and return on invested capital of 24.9%. Those returns are high for a capital-intensive industry, and the balance sheet holds $9.9B of net cash. A pure upstream company with net cash and a 25% return on capital is a different animal from a leveraged producer.",
      "The question for a reader is not whether the company is good at extracting hydrocarbons. It plainly is. The question is what the asset base earns when the oil price is average rather than good, because the entire valuation rests on that number.",
    ],
    quote:
      "An upstream company has to keep drilling to stand still. Every barrel produced comes out of a finite reservoir, so maintenance capital is a cost of existence, not a growth choice.",
  },
  whatItDoes: {
    paragraphs: [
      "The portfolio is a set of oil and gas fields in several countries, producing conventional and unconventional resources. Each field has a decline curve: without new wells or pressure support, output falls every year. The company therefore spends a large part of its cash flow simply replacing what it produced, before any growth is counted.",
      "The customer is not a consumer. Crude is sold to refiners and traders at benchmark prices, adjusted for quality and transport. Natural gas is sold to utilities, liquefaction plants and industrial users, often under contracts with their own pricing formulas. The company has no brand, no pricing power and no shelf space. What it has is rock, and the quality of the rock determines the cost per barrel.",
      "The portfolio mix matters because oil and gas do not earn the same margin. Oil is a global commodity with a single reference price. Gas is regional, and a producer without access to a liquefaction plant or a premium market may receive a fraction of the global price for the same molecule.",
    ],
    bullets: [
      {
        title: "Conventional fields",
        detail:
          "Long-life assets with predictable decline. Lower decline rates mean less maintenance capital each year.",
      },
      {
        title: "Unconventional shale",
        detail:
          "Short-cycle barrels that can be accelerated quickly. High initial decline means continuous drilling to hold production flat.",
      },
      {
        title: "Liquefied natural gas",
        detail:
          "Gas chilled and shipped under long-term contracts. A more infrastructure-like revenue stream than the upstream book.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the realised price multiplied by the volume sold. Cost per barrel has three layers: lifting cost, which is the cash expense of operating the field; royalties and production taxes, which take a share of revenue before any cost is deducted; and depreciation, depletion and amortisation, which spreads the original drilling cost over the barrels expected to be recovered.",
      "That third layer is why a 57.4% gross margin and a 29.4% operating margin can describe the same company. Once a well is drilled, the cash cost of lifting another barrel is small, so the cash margin looks excellent. Depreciation then takes a large bite, and the operating margin is what survives. The gap between the two is the accounting cost of depleting the asset.",
      "The operating leverage runs both ways and it is severe. Field costs are largely fixed once the wells and platforms exist, so a 10% move in the oil price can move operating income by considerably more than 10%, and the same sensitivity applies downward. That is the mechanism behind the swings in the quarterly table.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew at an 8.1% compound rate from $34.6B in FY2021 to $51.8B in FY2025, and the trailing $60.2B is higher still. The latest quarter grew 29.0%. On the top line this looks like a growth company.",
      "The profit line disagrees. Net income was $8.08B in FY2021 and $7.99B in FY2025. Revenue rose about half and net income did not move. Part of that is price: FY2022 was an exceptional year for crude and set a high bar. Part of it is the cost of the barrels added, which came with depreciation attached. Adding production through acquisition raises revenue on day one and raises the depreciation charge on day one too.",
      "Third-party estimates point to $75.6B of revenue and $11.85 of EPS this fiscal year, then $73.0B and $11.22 next year. The revenue estimate for the current year is well above the trailing number, which implies a strong quarterly run-rate continuing, then a modest step back.",
    ],
    bullets: [
      {
        title: "Price realisation",
        detail:
          "The premium or discount to benchmark depends on crude quality, location and the mix of oil versus gas.",
      },
      {
        title: "Volume growth",
        detail:
          "New wells and new fields add barrels, but they also add decline that has to be replaced next year.",
      },
      {
        title: "Unit cost",
        detail:
          "Cost per barrel of oil equivalent is the number that separates a good operator from an average one at the same price.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating income peaked at $28.2B in FY2022 on $61.1B of revenue, then fell every year: $16.3B, $13.7B and $12.7B. Revenue over the same span fell only 15%, so the compression was in the margin, not in the volumes.",
      "Free cash flow behaved differently. It was $18.16B in FY2022, $18.55B in FY2023, $16.60B in FY2024 and $19.62B in FY2025, so the cash line was flat to higher while operating income halved. That divergence is the most instructive fact in the table. Lower earnings were partly offset by lower cash taxes and by capital spending that was managed down, which is what a disciplined operator does when the price falls.",
      "The recent quarters show the recovery. Operating margin was 24.9% in Q1 FY26, 33.6% in Q2 and 34.8% in Q3, with revenue of $13.5B, $18.1B and $17.2B. Against Q4 FY25's 19.7% margin on $11.4B, the swing is large and it came from price.",
    ],
  },
  cash: {
    paragraphs: [
      "Trailing free cash flow of $12.4B is a 20.6% margin, which is high for a producer. The company also carries $9.9B of net cash rather than net debt, so the cash flow is genuinely available for dividends and buybacks rather than being committed to lenders.",
      "That is unusual in this industry and it is worth pausing on. Upstream companies normally run with debt because the assets are long-lived and lenders accept reserves as collateral. A producer with net cash has chosen to give up some financial leverage in exchange for the ability to keep drilling and acquiring when prices are low, which is exactly when the best assets are cheapest.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $136.27 the shares trade at 13.9x trailing earnings and 5.1x EV/EBITDA, with a 2.5% dividend yield, a 7.7% free-cash-flow yield and a price-to-free-cash-flow ratio of 13.0x. Within the peer group it is cheaper than both integrated majors on EBITDA and more expensive than EOG at 4.5x.",
      "The low multiple is not a mispricing waiting to be corrected. An upstream company trading at 5.1x EBITDA is telling you that the market expects the EBITDA to fall, because the current price deck is above what it considers normal. The same multiple on a mid-cycle EBITDA would be materially higher. That is the whole debate, and it turns on a commodity price nobody controls.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage runs to 27 analysts. The attributed mean target is $152.00, with a range of $129.00 to $185.00. The low end sits below the current price and the high end well above it, a spread of roughly 43%.",
      "The estimates call for $75.6B of revenue and $11.85 of EPS this year across 24 analysts, then $73.0B and $11.22 next year across 28. Next quarter is forecast at $20.1B of revenue and $3.52 of EPS, which would be an increase on the $17.2B just reported. The implied next-year decline in both revenue and EPS is the consensus view that the current price environment does not persist.",
    ],
  },
  risks: {
    intro:
      "Because the balance sheet is strong and the business is single-minded, the risks are almost entirely about price, cost and the quality of what remains underground.",
    items: [
      {
        title: "Oil and gas prices",
        severity: "High",
        detail:
          "There is no downstream business to absorb a price fall. A 20% decline in realisations flows almost directly into operating income.",
        watch:
          "Realised price per barrel of oil equivalent, and the split between oil and gas revenue.",
      },
      {
        title: "Reserve replacement",
        severity: "High",
        detail:
          "Production depletes. If new drilling does not replace what is sold, the revenue base shrinks regardless of price.",
        watch:
          "Reserve replacement ratio, finding and development cost per barrel, and the production guidance range.",
      },
      {
        title: "Cost inflation",
        severity: "Medium",
        detail:
          "Service costs, steel and labour rise when the industry is busy. Those costs do not fall as quickly as the oil price.",
        watch: "Cost per barrel of oil equivalent and the capital budget per well.",
      },
      {
        title: "Acquisition integration",
        severity: "Medium",
        detail:
          "Growth by acquisition adds revenue and depreciation at the same time. Whether the acquired barrels earn their cost of capital takes years to prove.",
        watch:
          "Return on invested capital against the acquisition price, and any goodwill impairment.",
      },
      {
        title: "Energy transition",
        severity: "Medium",
        detail:
          "The assets are long-lived and the end market may shrink. A shorter demand runway reduces the value of barrels that are expensive to develop.",
        watch: "The mix of short-cycle and long-cycle projects in the capital plan.",
      },
    ],
    watchlist: [
      {
        title: "Cost per barrel",
        detail:
          "The cleanest measure of operating quality, and the one management can actually control.",
      },
      {
        title: "Cash returned to shareholders",
        detail:
          "With net cash on the balance sheet, the dividend and buyback are a policy choice rather than a constraint.",
      },
      {
        title: "Production guidance",
        detail:
          "Volume delivery against the guided range shows whether the asset base is performing as advertised.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ConocoPhillips is a high-return, low-leverage pure upstream producer. A 29.4% operating margin, a 24.9% return on invested capital and $9.9B of net cash are the marks of a well-run operator, and the 20.6% free-cash-flow margin confirms that the cash follows the accounting profit.",
      "The puzzle is that none of that has translated into profit growth. Revenue is about 50% higher than in FY2021 and net income is the same. A reader who only watched the top line would have drawn the wrong conclusion about the business.",
      "The valuation is where the debate lands. At 5.1x EV/EBITDA the market is pricing a normalisation of the current margin, and the size of that discount is the market's judgement about how far margins can fall.",
    ],
    questions: [
      "What is the finding and development cost per barrel, and is it rising?",
      "How much of the production base is oil versus gas, and how do the two price differently?",
      "What price deck is embedded in the 5.1x EV/EBITDA multiple?",
      "Is the net cash position being held for acquisitions or for the dividend?",
    ],
  },
};
