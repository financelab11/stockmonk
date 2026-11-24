import type { StockStory } from "./types";

export const XOM: StockStory = {
  "ticker": "XOM",
  "kicker": "Energy · Integrated oil and gas",
  "title": "ExxonMobil earns the same barrel three times",
  "dek": "Upstream finds the oil, refining turns it into fuel and chemicals turns it into feedstock. Each leg has its own margin, and the consolidated income statement hides which one is carrying the year.",
  "readingMinutes": 9,
  "takeaways": [
    "Q3 FY26 revenue was $113.2B at an 18.8% operating margin and $3.72 of EPS, a sharp turn from the 8.2% margin and $1.00 in Q1.",
    "Trailing revenue is $396.6B, up 19.0%, but the operating margin is 14.0% against 18.8% at the FY2022 peak.",
    "Free cash flow is $43.0B, 10.8% of revenue, and capex reached $28.4B in FY2025, while net debt is only 0.3x EBITDA.",
    "At {{pe}} earnings and {{evEbitda}} EV/EBITDA, ExxonMobil carries a premium to Chevron at 15.0x and 6.2x without a higher return on capital."
  ],
  "filingUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=10-K&dateb=&owner=include&count=40",
  "irUrl": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=&dateb=&owner=include&count=40",
  "bigPicture": {
    "paragraphs": [
      "The swing in ExxonMobil's margin is the story of 2026: $1.00 of EPS at an 8.2% operating margin in the first quarter, then $3.72 at 18.8% in the third. Revenue was $85.1B in the first quarter and $113.2B in the third, so the move is price and spread rather than cost. The earnings power of an integrated major is decided by the gap between raw material and product, and that gap widened through the summer. The shares have returned 40.0% over a year on that turn.",
      "The integrated model is three spreads sharing a treasury. Upstream earns the difference between the realised crude price and the cost of lifting a barrel; refining earns the crack spread; chemicals earns the gap between gas-based feedstock and the resin it sells. The consolidated revenue line mixes pass-through crude with value-added product, which is why a 14.0% operating margin and a 14.0% return on capital can describe the same year. The segments do not move together, and that is the point of owning all three.",
      "The valuation debate is whether diversification deserves a premium. ExxonMobil's {{marketCap}} market value at {{price}} equals {{pe}} trailing earnings and {{evEbitda}} EV/EBITDA, against peer medians of 14.3x and 6.0x, Chevron at 15.0x and 6.2x and ConocoPhillips at 13.6x and 5.8x. ExxonMobil's return on capital matches Chevron's, so the higher multiple is being paid for scale and balance sheet rather than for superior returns. The premium has to be earned by cash flow, not by size."
    ],
    "quote": "ExxonMobil's earnings are three spreads in one income statement, and the consolidated margin hides which one is carrying the year."
  },
  "whatItDoes": {
    "paragraphs": [
      "Upstream is the part that finds and extracts hydrocarbons. It sells crude and gas at prices set by benchmarks, adjusted for quality and transport, so the revenue line is almost entirely a function of volume and price. The cost side is the interesting part: lifting cost, depreciation on wells and platforms, and the taxes and royalties that governments take before the company sees a dollar.",
      "Downstream buys that crude, often from the company's own upstream arm, and turns it into petrol, diesel, jet fuel, lubricants and asphalt. Chemicals takes refinery by-products and natural gas liquids and converts them into ethylene, polyethylene and other building blocks sold to packaging manufacturers and industrial customers. The refinery and the chemical plant are the customers for the upstream barrel, which is why the segments are argued about together even though they report separately."
    ],
    "bullets": [
      {
        "title": "Upstream",
        "detail": "Exploration and production of crude oil and natural gas. Revenue tracks the benchmark price, adjusted for quality and freight."
      },
      {
        "title": "Refining and fuels",
        "detail": "Crude is bought, processed and sold as finished product. The margin is the crack spread, not the crude price."
      },
      {
        "title": "Chemicals",
        "detail": "Olefins and polyolefins sold to packaging and industrial customers. Feedstock cost, usually gas-based, sets the spread."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "The reported gross margin of 12.0% looks thin next to the 17.0% operating margin, and the reason is mechanical: an integrated company books the full cost of the crude it buys inside revenue, so a large slice of the top line is pass-through. Gross margin is not a measure of pricing power here. Operating margin is the better guide because it sits below the purchase cost of the barrel.",
      "Each segment has a different unit of profit. Upstream earns the difference between the realised price and the cost of lifting a barrel, which is why a low-cost position matters more than headline production growth. Refining earns the spread between what a barrel of crude costs and what the products made from it fetch, minus the energy burned to run the plant. Chemicals earns the spread between feedstock and the resin it becomes. None of those three spreads moves in step with the other two."
    ]
  },
  "growth": {
    "paragraphs": [
      "The revenue line has stepped up. Trailing revenue is $396.6B, 19.0% above a year earlier, and Q2 and Q3 FY26 each reported more than $110B against $81B to $85B in the five quarters before them. Consensus expects $436.6B for 2026 and $438.4B for 2027, so the estimate assumes the new level holds rather than grows. That shape is typical of an integrated major: price and acquired volumes move the top line, while profit is decided by the spread between raw material and product.",
      "Earnings growth has to come from the margin. FY2026 EPS is estimated at $13.69 against $6.70 reported in FY2025, and FY2027 is estimated at $12.54, 8.4% lower. The consensus therefore expects the current spread environment to fade next year. The durability question is refining: crack spreads widened after 2022, narrowed through 2025, and have widened again in 2026, which is a cycle rather than a structural trend."
    ],
    "bullets": [
      {
        "title": "Upstream cost position",
        "detail": "A low lifting cost per barrel matters more than production growth in a price-taker business; it is the difference between a margin and a loss at the bottom of the cycle."
      },
      {
        "title": "Refining utilisation",
        "detail": "Once a refinery is running, the incremental barrel is highly profitable. Utilisation and turnaround timing, not the crude price alone, decide the downstream result."
      },
      {
        "title": "Chemicals feedstock",
        "detail": "US gas-based feedstock gives the chemical business a cost advantage against oil-based producers, but the spread narrows when global capacity is long."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Margin progression runs from 18.8% in FY2022 to 15.3% in FY2023, 14.0% in FY2024 and 12.4% in FY2025, then back to 14.0% on a trailing basis. The decline was not a cost problem: revenue fell 16.7% in FY2023 and 5.0% in FY2025, and upstream realisations fell faster than the cost base. The recovery in the last two quarters came from the same variable working in the other direction, with the operating margin reaching 16.7% and 18.8%.",
      "Below the operating line, the net margin is 10.2% and return on equity is 15.3%. Q1 FY26 is the outlier: an 8.2% operating margin produced a 4.9% net margin and $1.00 of EPS, a gap wider than the operating result alone would imply. The disclosure does not decompose the items below operating income, so the safe reading is that quarterly EPS is more volatile than segment margin. Return on invested capital of 14.0% is in line with the 13.5% peer median."
    ]
  },
  "cash": {
    "paragraphs": [
      "Capital spending has risen faster than cash flow. Capex was $28.4B in FY2025 against $52.0B of operating cash flow, leaving $23.6B of free cash flow; in FY2022 the same comparison was $18.4B of capex and $58.4B of free cash flow. The trailing figure has recovered to $43.0B, a 10.8% margin, as earnings improved. The shift matters because the projects funded by the higher capex will only earn a return if the long-run demand case holds.",
      "The balance sheet gives the company room to wait. Net debt is $22.1B, 0.3x EBITDA, and interest cover is 64.1x, so the dividend and the buyback are not at risk from a single weak year. The 2.7% dividend is the main cash return, and modest leverage leaves capacity for counter-cyclical investment. The risk is not solvency but discipline: large projects approved at high prices have a habit of being commissioned at low ones."
    ]
  },
  "valuation": {
    "paragraphs": [
      "ExxonMobil's {{marketCap}} market value at {{price}} equals {{pe}} trailing earnings, {{evEbitda}} EV/EBITDA and {{pfcf}} trailing free cash flow; the free-cash-flow yield is {{fcfYield}}. Peer medians are 14.3x and 6.0x, so the premium is roughly 1.6 turns on earnings and 1.8 on EBITDA. On the FY2027 estimate of $12.54 the multiple is about 12.6x, below the trailing figure because consensus expects earnings to fall.",
      "The premium to Chevron and ConocoPhillips is the interesting part. Chevron trades at 15.0x and 6.2x with the same 14.0% return on capital and a net cash position; ConocoPhillips trades at 13.6x and 5.8x with a 29.4% operating margin. ExxonMobil's advantage is scale and the integrated model, which smooths cash flow across the cycle. That bet has to be earned through the cycle rather than by size: the FY2025 margin of 12.4% did not demonstrate it.",
      "What would justify the multiple is a refining and chemicals contribution that holds through a softer crude price, plus project returns above the cost of capital. What would break it is a repeat of FY2025, when the operating margin fell to 12.4% and free cash flow halved from the FY2022 peak. At 7.8x EBITDA the market is already assuming the current spread is closer to normal than to peak."
    ]
  },
  "analysts": {
    "paragraphs": [
      "The attributed Yahoo Finance survey of 18 November 2026 counts 22 analysts, with a mean target of $184 and a range of $160 to $213. The mean is 16% above the current price, and even the low end is above it, which is unusual for a cyclical at this point in the spread cycle.",
      "Revisions have been strongly positive: the 90-day EPS change is 19.0% and the 60-day is 16.6%. The consensus now expects $13.69 for 2026, roughly double the $6.70 reported in FY2025, then $12.54 for 2027. The second year is the tell. A mean target of $184 with a 2027 EPS estimate that falls 8.4% implies the analysts are valuing the dividend and the balance sheet, not extrapolating the current margin."
    ]
  },
  "risks": {
    "intro": "The balance sheet is strong and the asset base is diversified, so the risks are about price, project execution and the long-run demand case rather than about solvency.",
    "items": [
      {
        "title": "Crude and gas prices",
        "severity": "High",
        "detail": "Upstream revenue is a price times a volume. A sustained fall in crude removes earnings that no cost programme can replace quickly.",
        "watch": "Realised crude and gas prices against the benchmark, and the sensitivity disclosed in the filing."
      },
      {
        "title": "Refining margins",
        "severity": "High",
        "detail": "Crack spreads widened sharply after 2022 and have since narrowed. Refining is the segment most likely to surprise on the downside.",
        "watch": "Refinery utilisation, turnaround schedules and the regional crack spread."
      },
      {
        "title": "Capital allocation at the top of the cycle",
        "severity": "Medium",
        "detail": "Large projects approved when prices are high have a habit of being commissioned when prices are low. That is how integrated majors destroy value.",
        "watch": "Growth capex as a share of operating cash flow, and the returns disclosed on major projects."
      },
      {
        "title": "Regulation and litigation",
        "severity": "Medium",
        "detail": "Permitting, emissions rules and climate litigation affect both the cost of operating existing assets and the right to build new ones.",
        "watch": "Permit decisions, emissions standards and any change in the royalty and tax regime."
      },
      {
        "title": "Long-run demand for hydrocarbons",
        "severity": "Medium",
        "detail": "The assets are long-lived and the products are sold into markets that may shrink slowly. A faster decline shortens the payback period available for new projects.",
        "watch": "Low-carbon investment as a share of total capex, and the assumed demand path behind long-lived projects."
      }
    ],
    "watchlist": [
      {
        "title": "Segment earnings split",
        "detail": "Upstream, refining and chemicals each tell a different story. The consolidated margin hides which one is deteriorating."
      },
      {
        "title": "Cash breakeven",
        "detail": "The oil price at which operating cash covers the dividend and sustaining capital is the single most useful number in a downturn."
      },
      {
        "title": "Share count",
        "detail": "Buybacks at a 7.0x EV/EBITDA multiple retire more earnings per share than buybacks at 12x, so the pace matters."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "ExxonMobil is a scaled, diversified hydrocarbon business with a strong balance sheet and a cash-flow profile that has held up better than its earnings. Revenue of $395.7B, a 17.0% operating margin and $41.1B of free cash flow describe a company that is comfortably profitable at today's prices.",
      "What is less clear is how much of that profit is cyclical. Operating income has fallen 35% from the FY2022 peak, and the consensus expects EPS to decline next year even with revenue flat. Both facts point at margin, not volume, as the variable that matters.",
      "The educational value here is in the segment structure. An integrated major is not a single business with a single margin; it is three spreads that happen to share a treasury. Reading the consolidated number without separating them makes a diversified company look like a simple one."
    ],
    "questions": [
      "What oil price and refining margin does the current dividend require?",
      "How much of trailing operating income came from refining rather than upstream?",
      "Is the 7.0x EV/EBITDA multiple being paid for diversification or for the current margin?",
      "What happens to the buyback if crude falls 20%?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
