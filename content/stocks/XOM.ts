import type { StockStory } from "./types";

export const XOM: StockStory = {
  ticker: "XOM",
  kicker: "Energy · Integrated oil and gas",
  title: "ExxonMobil earns the same barrel three times",
  dek: "Upstream finds the oil, refining turns it into fuel and chemicals turns it into feedstock. Each leg has its own margin, and the consolidated income statement hides which one is carrying the year.",
  readingMinutes: 9,
  takeaways: [
    "Trailing revenue is $395.7B, up 19.1%, yet operating income has fallen from $95.0B in FY2022 to $62.0B in FY2025.",
    "Operating margin is 17.0% and free cash flow is $41.1B, a 10.4% margin.",
    "Net debt is 0.4x EBITDA, so the capital programme is not being financed with borrowed money.",
    "At $165.87 the shares trade at 7.0x EV/EBITDA, a premium to Chevron at 6.4x and EOG at 4.5x.",
  ],
  filingUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=10-K&dateb=&owner=include&count=40",
  irUrl:
    "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0002115436&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "ExxonMobil is the largest US integrated oil company, with a market value of $682B at the latest close of $165.87. It does three things that used to be separate industries: it finds and produces crude oil and natural gas, it refines crude into fuels and lubricants, and it makes petrochemicals that go into packaging, plastics and industrial products. A small low-carbon arm sits alongside them.",
      "The question that decides the next few years is not whether oil is expensive this quarter. It is what the portfolio earns at a normal price for crude, a normal refining margin and a normal chemical margin, and whether that combined number covers the dividend and the capital budget. Integrated companies are built to answer that question with diversification rather than with a single commodity bet.",
      "The trailing figures set the scene. Revenue of $395.7B is 19.1% above the prior year and above the $327.2B booked in FY2025. Operating margin is 17.0% and the latest quarter, at $113.2B of revenue, earned 18.8%. The stock has traded between $113.64 and $188.50 over the past year, closer to the top of that band than the bottom.",
    ],
    quote:
      "An integrated major is three margin businesses stacked on one balance sheet. Reading the consolidated margin without knowing which leg moved is guesswork.",
  },
  whatItDoes: {
    paragraphs: [
      "Upstream is the part that finds and extracts hydrocarbons. It sells crude and gas at prices set by benchmarks, adjusted for quality and transport, so the revenue line is almost entirely a function of volume and price. The cost side is the interesting part: lifting cost, depreciation on wells and platforms, and the taxes and royalties that governments take before the company sees a dollar.",
      "Downstream buys that crude, often from the company's own upstream arm, and turns it into petrol, diesel, jet fuel, lubricants and asphalt. Chemicals takes refinery by-products and natural gas liquids and converts them into ethylene, polyethylene and other building blocks sold to packaging manufacturers and industrial customers. The refinery and the chemical plant are the customers for the upstream barrel, which is why the segments are argued about together even though they report separately.",
    ],
    bullets: [
      {
        title: "Upstream",
        detail:
          "Exploration and production of crude oil and natural gas. Revenue tracks the benchmark price, adjusted for quality and freight.",
      },
      {
        title: "Refining and fuels",
        detail:
          "Crude is bought, processed and sold as finished product. The margin is the crack spread, not the crude price.",
      },
      {
        title: "Chemicals",
        detail:
          "Olefins and polyolefins sold to packaging and industrial customers. Feedstock cost, usually gas-based, sets the spread.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "The reported gross margin of 12.0% looks thin next to the 17.0% operating margin, and the reason is mechanical: an integrated company books the full cost of the crude it buys inside revenue, so a large slice of the top line is pass-through. Gross margin is not a measure of pricing power here. Operating margin is the better guide because it sits below the purchase cost of the barrel.",
      "Each segment has a different unit of profit. Upstream earns the difference between the realised price and the cost of lifting a barrel, which is why a low-cost position matters more than headline production growth. Refining earns the spread between what a barrel of crude costs and what the products made from it fetch, minus the energy burned to run the plant. Chemicals earns the spread between feedstock and the resin it becomes. None of those three spreads moves in step with the other two.",
    ],
  },
  growth: {
    paragraphs: [
      "From FY2021 to FY2025 revenue grew at a 3.9% compound rate, but the path matters more than the average: $279.0B in FY2021, $402.2B in FY2022 when crude spiked, then $338.2B, $343.4B and $327.2B as prices normalised. That is not a growth business in the ordinary sense. It is a volume business whose revenue is re-priced every year by the market.",
      "Third-party estimates point to $432.6B of revenue and $13.56 of EPS for the current fiscal year, then $435.0B and $12.44 next year. Revenue is essentially flat between the two years while EPS falls. That combination is the signature of a price-led model: no one expects much volume growth, and the forecast assumes the margin, not the top line, does the work.",
    ],
    bullets: [
      {
        title: "Production volumes",
        detail:
          "Growth comes from a small number of very large fields. Each one carries execution and geological risk that shows up as a cost per barrel.",
      },
      {
        title: "Refining utilisation",
        detail:
          "A refinery running near capacity turns a small improvement in crack spread into a large change in operating income.",
      },
      {
        title: "Cost per barrel",
        detail:
          "In a flat-price year, the only way to grow earnings is to lift the same barrel more cheaply.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual history is a clean commodity cycle. Operating income was $55.8B in FY2021, $95.0B in FY2022, $76.3B in FY2023, $70.0B in FY2024 and $62.0B in FY2025. Revenue fell 19% from the FY2022 peak to FY2025, but operating income fell 35%, because the margin compressed as well as the top line. That asymmetry is what operating leverage looks like in reverse.",
      "Within the trailing year the trend has been upward again. Operating margin went from 15.3% in Q1 FY26 on $85.1B of revenue, to 16.7% on $116.0B, to 18.8% on $113.2B in Q3 FY26. Return on equity is 10.8% and return on invested capital is 11.9%, which for a company carrying this much steel and this many wells is a respectable mid-cycle result rather than an exceptional one.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $41.1B over the trailing period, a 10.4% margin, down from $120.6B in FY2022 and $66.2B in FY2025. The decline is not a sign that the business stopped generating cash; it reflects lower margins and a capital budget that stayed large while prices fell.",
      "Free cash flow has exceeded net income in every year in the table, and that gap is structural rather than suspicious. Depreciation on oil fields, refineries and chemical plants is a large non-cash charge, so a capital-intensive company should convert more cash than it reports as profit. Net debt at 0.4x EBITDA means the dividend and the buyback are covered by operating cash rather than by new borrowing, which is the difference between a cyclical company that survives a trough and one that has to cut.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $165.87 the shares trade at 16.8x trailing earnings, 7.0x EV/EBITDA, 1.7x sales and 16.6x free cash flow, for a 6.0% free-cash-flow yield. On EV/EBITDA it trades above Chevron at 6.4x, ConocoPhillips at 5.1x and EOG at 4.5x, though well below Williams at 14.7x, which is a contracted midstream business rather than a producer.",
      "That premium is the market's price for diversification and balance sheet. A company with refining and chemicals attached has earnings that do not collapse as fast when crude falls, and the 0.4x leverage means it can keep paying through a downturn. The catch is that a 7.0x multiple on today's EBITDA is a higher multiple on mid-cycle EBITDA, because today's number still contains a healthy refining and chemical contribution.",
    ],
  },
  analysts: {
    paragraphs: [
      "Coverage is 22 analysts deep. The attributed third-party mean target is $185.05, with a range of $160.00 to $213.00. The latest close sits between the low end and the mean, so the distribution is not uniformly above the market price.",
      "The estimate detail is more informative than the target. The current year is forecast at $432.6B of revenue and $13.56 of EPS, with the following quarter at $118.65B and $4.08 across 15 analysts. Next year's revenue estimate of $435.0B is flat, and the EPS estimate of $12.44 is lower. A flat top line with falling earnings is a forecast about margin, and margin in this business means the price of crude and the crack spread.",
    ],
  },
  risks: {
    intro:
      "The balance sheet is strong and the asset base is diversified, so the risks are about price, project execution and the long-run demand case rather than about solvency.",
    items: [
      {
        title: "Crude and gas prices",
        severity: "High",
        detail:
          "Upstream revenue is a price times a volume. A sustained fall in crude removes earnings that no cost programme can replace quickly.",
        watch:
          "Realised crude and gas prices against the benchmark, and the sensitivity disclosed in the filing.",
      },
      {
        title: "Refining margins",
        severity: "High",
        detail:
          "Crack spreads widened sharply after 2022 and have since narrowed. Refining is the segment most likely to surprise on the downside.",
        watch: "Refinery utilisation, turnaround schedules and the regional crack spread.",
      },
      {
        title: "Capital allocation at the top of the cycle",
        severity: "Medium",
        detail:
          "Large projects approved when prices are high have a habit of being commissioned when prices are low. That is how integrated majors destroy value.",
        watch:
          "Growth capex as a share of operating cash flow, and the returns disclosed on major projects.",
      },
      {
        title: "Regulation and litigation",
        severity: "Medium",
        detail:
          "Permitting, emissions rules and climate litigation affect both the cost of operating existing assets and the right to build new ones.",
        watch: "Permit decisions, emissions standards and any change in the royalty and tax regime.",
      },
      {
        title: "Long-run demand for hydrocarbons",
        severity: "Medium",
        detail:
          "The assets are long-lived and the products are sold into markets that may shrink slowly. A faster decline shortens the payback period available for new projects.",
        watch:
          "Low-carbon investment as a share of total capex, and the assumed demand path behind long-lived projects.",
      },
    ],
    watchlist: [
      {
        title: "Segment earnings split",
        detail:
          "Upstream, refining and chemicals each tell a different story. The consolidated margin hides which one is deteriorating.",
      },
      {
        title: "Cash breakeven",
        detail:
          "The oil price at which operating cash covers the dividend and sustaining capital is the single most useful number in a downturn.",
      },
      {
        title: "Share count",
        detail:
          "Buybacks at a 7.0x EV/EBITDA multiple retire more earnings per share than buybacks at 12x, so the pace matters.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "ExxonMobil is a scaled, diversified hydrocarbon business with a strong balance sheet and a cash-flow profile that has held up better than its earnings. Revenue of $395.7B, a 17.0% operating margin and $41.1B of free cash flow describe a company that is comfortably profitable at today's prices.",
      "What is less clear is how much of that profit is cyclical. Operating income has fallen 35% from the FY2022 peak, and the consensus expects EPS to decline next year even with revenue flat. Both facts point at margin, not volume, as the variable that matters.",
      "The educational value here is in the segment structure. An integrated major is not a single business with a single margin; it is three spreads that happen to share a treasury. Reading the consolidated number without separating them makes a diversified company look like a simple one.",
    ],
    questions: [
      "What oil price and refining margin does the current dividend require?",
      "How much of trailing operating income came from refining rather than upstream?",
      "Is the 7.0x EV/EBITDA multiple being paid for diversification or for the current margin?",
      "What happens to the buyback if crude falls 20%?",
    ],
  },
};
