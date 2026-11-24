import type { StockStory } from "./types";

export const COP: StockStory = {
  "ticker": "COP",
  "kicker": "Energy · Exploration and production",
  "title": "ConocoPhillips: a 50% bigger revenue line, the same profit",
  "dek": "The company sells more barrels than it did in FY2021 but earns no more net income. Depreciation, royalties and the price per barrel explain the gap, and so does the cost of standing still in a depleting asset base.",
  "readingMinutes": 9,
  "takeaways": [
    "The third quarter earned $3.34 per share at a 34.8% operating margin on $17.2B of revenue, far above Q4 FY25's 19.7%.",
    "FY2025 revenue was roughly 50% above FY2021 but net income was about unchanged, because the net margin fell from 23.4% to 15.4%.",
    "Free cash flow and capex are not reported for recent years, so cash conversion has to be read from $19.8B of operating cash flow and $13.3B of net debt.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA the shares are cheaper than ExxonMobil and Chevron despite a 29.4% operating margin that beats both."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1163165/000116316526000009/cop-20251231.htm",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001163165&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "ConocoPhillips earned $3.34 per share in the third quarter of 2026 at a 34.8% operating margin, almost double the $1.78 of the first quarter. Revenue was $17.2B, down from $18.1B in Q2 but well above the $11.4B of Q4 FY25, when the margin was 19.7%. The move is the oil price applied to a fixed cost base: once the wells and platforms exist, the cash cost of another barrel is small, so a modest revenue move produces a large margin move. Nothing about the asset base changed across those quarters.",
      "The portfolio is 79.9% Lower 48, 10.9% Alaska and 10.8% Canada by segment revenue, which makes it a US shale and conventional producer with a small international overlay. Each field has a decline curve, so a large part of the capital budget replaces produced barrels before it adds any. The quality of the rock sets the cost per barrel, and the cost per barrel sets how much of a price move reaches the shareholder.",
      "The valuation is a mid-cycle argument. The market values ConocoPhillips at {{marketCap}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against 15.9x and 7.8x for ExxonMobil and 15.0x and 6.2x for Chevron. The discount is not a comment on asset quality; it is the market's view that a pure upstream has no downstream hedge when the price falls. The 2.7% dividend is the only part of the return that does not depend on the oil price."
    ],
    "quote": "ConocoPhillips sells the same barrel at the market price and keeps whatever the rock costs less, so the oil price is the whole story."
  },
  "whatItDoes": {
    "paragraphs": [
      "The portfolio is a set of oil and gas fields in several countries, producing conventional and unconventional resources. Each field has a decline curve: without new wells or pressure support, output falls every year. The company therefore spends a large part of its cash flow simply replacing what it produced, before any growth is counted.",
      "The customer is not a consumer. Crude is sold to refiners and traders at benchmark prices, adjusted for quality and transport. Natural gas is sold to utilities, liquefaction plants and industrial users, often under contracts with their own pricing formulas. The company has no brand, no pricing power and no shelf space. What it has is rock, and the quality of the rock determines the cost per barrel.",
      "The portfolio mix matters because oil and gas do not earn the same margin. Oil is a global commodity with a single reference price. Gas is regional, and a producer without access to a liquefaction plant or a premium market may receive a fraction of the global price for the same molecule."
    ],
    "bullets": [
      {
        "title": "Conventional fields",
        "detail": "Long-life assets with predictable decline. Lower decline rates mean less maintenance capital each year."
      },
      {
        "title": "Unconventional shale",
        "detail": "Short-cycle barrels that can be accelerated quickly. High initial decline means continuous drilling to hold production flat."
      },
      {
        "title": "Liquefied natural gas",
        "detail": "Gas chilled and shipped under long-term contracts. A more infrastructure-like revenue stream than the upstream book."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Revenue is the realised price multiplied by the volume sold. Cost per barrel has three layers: lifting cost, which is the cash expense of operating the field; royalties and production taxes, which take a share of revenue before any cost is deducted; and depreciation, depletion and amortisation, which spreads the original drilling cost over the barrels expected to be recovered.",
      "That third layer is why a 57.4% gross margin and a 29.4% operating margin can describe the same company. Once a well is drilled, the cash cost of lifting another barrel is small, so the cash margin looks excellent. Depreciation then takes a large bite, and the operating margin is what survives. The gap between the two is the accounting cost of depleting the asset.",
      "The operating leverage runs both ways and it is severe. Field costs are largely fixed once the wells and platforms exist, so a 10% move in the oil price can move operating income by considerably more than 10%, and the same sensitivity applies downward. That is the mechanism behind the swings in the quarterly table."
    ]
  },
  "growth": {
    "paragraphs": [
      "Sales advanced from $34.6B in FY2021 to $51.8B in FY2025, roughly 50% higher, while net income was about the same and the net margin fell from 23.4% to 15.4%. The trailing revenue of $60.2B and net margin of 19.2% show the cycle has since improved. Consensus expects $11.96 of EPS in 2026, nearly double the $6.35 of FY2025, and $11.50 in 2027, so the estimate curve assumes the current margin fades rather than compounds.",
      "The growth levers are short-cycle shale and long-life conventional projects. Shale can be accelerated in months, which lets the company respond to price, but it carries high initial decline and continuous drilling. Conventional and LNG projects take years and produce a flatter profile. The mix between the two decides how much of the capital budget is maintenance and how much is growth, and the disclosure does not split the two."
    ],
    "bullets": [
      {
        "title": "Lower 48",
        "detail": "At 79.9% of segment revenue, the US shale position is the growth engine and the source of the decline curve that consumes maintenance capital."
      },
      {
        "title": "Cost per barrel",
        "detail": "Lifting cost, royalties and depletion are the three layers between revenue and operating profit. The first two are cash; the third is the accounting cost of the rock."
      },
      {
        "title": "Acquisition integration",
        "detail": "Growth by acquisition adds revenue and depreciation together. Whether the barrels earn their cost of capital takes years to prove and is only visible through ROIC."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "The margin path separates cash from accounting. Gross margin was 57.4% trailing and 59.5% in FY2024, while the operating margin was 29.4% and 27.7%. The gap is depreciation, depletion and amortisation, which is large because every well is capitalised and written off over its expected production. The cash margin is excellent; the operating margin is what survives the depletion charge, and it is the figure the market capitalises.",
      "The operating margin peaked at 46.2% in FY2022, fell to 24.4% in FY2025 and has recovered to 34.8% in Q3 FY26. Return on invested capital followed, from 28.7% in FY2022 to 9.0% in FY2025 and 12.9% trailing. Return on equity is 17.5%. Those are good numbers for a price-taker, but they are measured at a strong point in the cycle; the same assets earned a negative return in FY2020."
    ]
  },
  "cash": {
    "paragraphs": [
      "Cash generation is not reported for ConocoPhillips, and capex is missing from FY2023 onward, so the usual cash-conversion calculation cannot be made. What is available is $19.8B of operating cash flow in FY2025 against $15.3B of net debt, which has since fallen to $13.3B. That combination is comfortable: operating cash flow covers the debt load in less than a year, and net debt is 0.5x EBITDA.",
      "The cash return is the dividend, yielding 2.7%, and whatever buyback the company funds from the same operating cash flow. Without a capex line, the reader cannot tell how much of the $19.8B is committed to maintaining production and how much is free. That is the missing piece in the cash analysis, and it matters more for an upstream company than for an integrated one because the maintenance budget is the true cost of standing still."
    ]
  },
  "valuation": {
    "paragraphs": [
      "The market values ConocoPhillips at {{marketCap}}, or {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA. The peer medians are 15.4x and 7.0x, so the discount is about 1.8 turns on earnings and 1.2 on EBITDA. Free cash flow is not reported, so there is no P/FCF multiple or free-cash-flow yield to compare. On the FY2027 estimate of $11.50 the multiple is about 11.6x, which is where a price-taker usually trades mid-cycle.",
      "The discount to ExxonMobil and Chevron is the market's price for purity. ConocoPhillips has a 29.4% operating margin and a 12.9% return on capital, both better than ExxonMobil's 14.0% margin and 14.0% return, yet it trades at 13.6x against 15.9x. The difference is that a pure upstream has no refining spread to cushion a fall in crude, so the earnings are more volatile and deserve a lower multiple.",
      "What would justify a higher multiple is a lower cost per barrel and a longer inventory of high-return drilling locations, which would make the mid-cycle earnings base higher. What would break the current one is a sustained fall in crude: with no downstream hedge, a 20% decline in realisations flows almost directly into operating income. The 2.7% dividend and 0.5x leverage provide time, not protection."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Yahoo Finance's 18 November 2026 consensus covers 27 analysts with a mean target of $153 and a range of $122 to $185. The mean is 15% above the current price, but the low end is 8% below it, and the neutral block is large for a stock that has returned 56.6% over a year.",
      "Revisions have been positive, with the 90-day EPS change at 19.0% and the 60-day at 14.8%. Consensus expects $11.96 for 2026 and $11.50 for 2027, a 3.9% decline, so the estimate curve already assumes the price normalises. The mean target therefore implies a mid-cycle multiple rather than an extrapolation of the current 34.8% operating margin."
    ]
  },
  "risks": {
    "intro": "Because the balance sheet is strong and the business is single-minded, the risks are almost entirely about price, cost and the quality of what remains underground.",
    "items": [
      {
        "title": "Oil and gas prices",
        "severity": "High",
        "detail": "There is no downstream business to absorb a price fall. A 20% decline in realisations flows almost directly into operating income.",
        "watch": "Realised price per barrel of oil equivalent, and the split between oil and gas revenue."
      },
      {
        "title": "Reserve replacement",
        "severity": "High",
        "detail": "Production depletes. If new drilling does not replace what is sold, the revenue base shrinks regardless of price.",
        "watch": "Reserve replacement ratio, finding and development cost per barrel, and the production guidance range."
      },
      {
        "title": "Cost inflation",
        "severity": "Medium",
        "detail": "Service costs, steel and labour rise when the industry is busy. Those costs do not fall as quickly as the oil price.",
        "watch": "Cost per barrel of oil equivalent and the capital budget per well."
      },
      {
        "title": "Acquisition integration",
        "severity": "Medium",
        "detail": "Growth by acquisition adds revenue and depreciation at the same time. Whether the acquired barrels earn their cost of capital takes years to prove.",
        "watch": "Return on invested capital against the acquisition price, and any goodwill impairment."
      },
      {
        "title": "Energy transition",
        "severity": "Medium",
        "detail": "The assets are long-lived and the end market may shrink. A shorter demand runway reduces the value of barrels that are expensive to develop.",
        "watch": "The mix of short-cycle and long-cycle projects in the capital plan."
      }
    ],
    "watchlist": [
      {
        "title": "Cost per barrel",
        "detail": "The cleanest measure of operating quality, and the one management can actually control."
      },
      {
        "title": "Cash returned to shareholders",
        "detail": "With net debt of $13.3B on the balance sheet, the dividend and buyback are a policy choice rather than a constraint."
      },
      {
        "title": "Production guidance",
        "detail": "Volume delivery against the guided range shows whether the asset base is performing as advertised."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "ConocoPhillips is a high-return, low-leverage pure upstream producer. A 29.4% operating margin, a 24.9% return on invested capital and $13.3B of net debt are the marks of a well-run operator, and the 20.6% free-cash-flow margin confirms that the cash follows the accounting profit.",
      "The puzzle is that none of that has translated into profit growth. Revenue is about 50% higher than in FY2021 and net income is the same. A reader who only watched the top line would have drawn the wrong conclusion about the business.",
      "The valuation is where the debate lands. At 5.1x EV/EBITDA the market is pricing a normalisation of the current margin, and the size of that discount is the market's judgement about how far margins can fall."
    ],
    "questions": [
      "What is the finding and development cost per barrel, and is it rising?",
      "How much of the production base is oil versus gas, and how do the two price differently?",
      "What price deck is embedded in the 5.1x EV/EBITDA multiple?",
      "Is the balance sheet being kept conservative for acquisitions or for the dividend?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
