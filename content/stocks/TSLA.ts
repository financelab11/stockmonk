import type { StockStory } from "./types";

export const TSLA: StockStory = {
  ticker: "TSLA",
  kicker: "Autos · Energy and autonomy",
  title: "Tesla's valuation is a bet on autonomy, not the car business",
  dek: "Vehicle growth has stalled and margins have compressed. The share price still embeds a large option on robotaxi, energy and software.",
  readingMinutes: 12,
  takeaways: [
    "Revenue reached $103.6B on a trailing basis, up 8.3% year over year.",
    "Automotive is 86.5% of revenue; Energy Generation & Storage is 13.5%.",
    "Operating margin is 3.3%, down from 16.8% in 2022.",
    "Net cash of $35.9B gives Tesla time to fund its autonomy and AI ambitions.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1318605/000162828026003952/tsla-20251231.htm",
  irUrl: "https://ir.tesla.com/",
  bigPicture: {
    paragraphs: [
      "Tesla designs and sells electric vehicles, energy storage systems and solar products. It also invests in autonomy, artificial intelligence and manufacturing automation. The car business is the revenue base; the autonomy and energy stories are the valuation drivers.",
      "Trailing revenue reached $103.6B, up 8.3%, but the latest quarter was roughly flat year over year. Operating margin has compressed from 16.8% in 2022 to 3.3%, as price cuts and competition weighed on vehicle profitability.",
      "At $358.22, Tesla trades at 437.8x trailing earnings and 151.1x EV/EBITDA. Those multiples cannot be justified by the current car business. The market is paying for a future in which robotaxi, full self-driving software and energy scale into large profit pools.",
    ],
    quote:
      "Tesla is the clearest example in this coverage universe of a stock price that is disconnected from current earnings. The debate is about the probability and timing of future businesses.",
  },
  whatItDoes: {
    paragraphs: [
      "Tesla sells Model 3, Model Y, Model S, Model X and Cybertruck, and operates a global manufacturing footprint with factories in the US, China, Germany and elsewhere. It also sells energy storage products and solar systems.",
      "The segment split is 86.5% automotive and 13.5% energy. Automotive includes vehicle sales, regulatory credits, leasing and services. Energy includes Megapack and Powerwall.",
      "The autonomy effort spans full self-driving software, a robotaxi network and the Optimus humanoid robot. None of these is currently a material revenue line, which is why they are optionality rather than underwriting.",
    ],
    bullets: [
      {
        title: "Automotive",
        detail:
          "86.5% of revenue. Vehicle sales, regulatory credits, leasing and services.",
      },
      {
        title: "Energy",
        detail:
          "13.5% of revenue. Storage and solar products with a growing backlog.",
      },
      {
        title: "Autonomy and AI",
        detail:
          "FSD software, robotaxi and Optimus. Currently a small revenue contribution with large valuation implications.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Tesla earns a gross margin on each vehicle, plus revenue from regulatory credits, services and software. It sells directly to consumers rather than through dealers, which gives it control over pricing and customer relationships but also means it absorbs inventory risk.",
      "The United States is 50.2% of revenue, other countries 27.7% and China 22.1%. China is both a large market and a manufacturing base, and it is the most competitive EV market in the world.",
      "Energy is a smaller but higher-growth business. Storage projects are lumpy and project-based, but they can carry attractive margins when the backlog is strong.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $24.6B in 2019 to $94.8B in 2025, a 25.2% compound annual growth rate. But the latest quarter was roughly flat, and the trailing growth rate has slowed to 8.3%. The rapid-growth phase of the vehicle business is over for now.",
      "The attributed consensus expects $107.9B of revenue this fiscal year, up 13.7%, and $122.5B next year, up 13.5%. EPS is expected to be $1.72 this year and $2.16 next year.",
      "The growth drivers are new models, energy storage, FSD adoption and eventually robotaxi. The risk is that vehicle price cuts continue to offset volume growth.",
    ],
    bullets: [
      {
        title: "New vehicles",
        detail:
          "A lower-cost model and refreshed products could revive volume growth.",
      },
      {
        title: "Energy storage",
        detail:
          "Megapack demand is strong, but project timing makes revenue lumpy.",
      },
      {
        title: "Autonomy",
        detail:
          "FSD and robotaxi are the largest potential growth vectors, but the timing is uncertain.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 3.3%, net margin 3.1% and return on invested capital 5.1%. Those are thin for a company valued as a technology platform. The margin compression reflects price cuts, underutilized capacity and investment in autonomy.",
      "The margin history is dramatic: -0.3% in 2019, 12.1% in 2021, 16.8% in 2022, 9.2% in 2023, 7.2% in 2024 and 4.6% in 2025. The trend is the wrong direction for the current valuation.",
      "Diluted EPS was $1.08 in 2025. The consensus expects $1.72 this year and $2.16 next year. Even if those estimates are met, the P/E remains extreme.",
    ],
  },
  cash: {
    paragraphs: [
      "Tesla generated $3.3B of free cash flow on a trailing basis, a 3.2% margin. Capital expenditure is high because the company is investing in factories, AI compute and energy capacity.",
      "The balance sheet holds $35.9B of net cash, which is a genuine advantage. It gives Tesla time to fund autonomy and energy investments without raising capital.",
      "The cash pile is also a valuation floor of sorts. Investors should separate the operating business value from the cash and the option value of future businesses.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $358.22, Tesla trades at 437.8x trailing earnings, 151.1x EV/EBITDA and 428.7x free cash flow. Those multiples are not comparable to traditional automakers and cannot be explained by the current business.",
      "The valuation only makes sense as a sum of parts: the car business at an auto multiple, the energy business at a growth multiple, and a large option value for autonomy. The problem is that the option value is subjective and can change quickly.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context, but the range is wide and the average is not a reliable anchor for an option-driven stock.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 40 analysts with a mean target of $413.10. The recommendation mix is positive but less uniform than the other mega-caps.",
      "Estimates call for $107.9B of revenue this fiscal year and EPS of $1.72. The following year's EPS estimate of $2.16 implies 25.2% growth, which is a big improvement from the current margin level.",
      "A mean target is not a Stockmonk rating. For Tesla, the dispersion and the assumptions behind the estimates matter more than the average.",
    ],
  },
  risks: {
    intro:
      "Tesla's risks are margin pressure, competition, execution on autonomy and valuation. The balance sheet reduces financial risk but not business risk.",
    items: [
      {
        title: "Vehicle margin compression",
        severity: "High",
        detail:
          "Price cuts and competition have reduced automotive profitability. A further decline would undermine the funding for future bets.",
        watch:
          "Automotive gross margin excluding credits and average selling price.",
      },
      {
        title: "Competition",
        severity: "High",
        detail:
          "Chinese EV makers and legacy automakers are launching competitive products at lower prices.",
        watch:
          "Market share in China, Europe and the US, and incentive levels.",
      },
      {
        title: "Autonomy execution",
        severity: "High",
        detail:
          "A large part of the valuation depends on robotaxi and FSD succeeding. Regulatory and technical hurdles are significant.",
        watch:
          "FSD adoption, regulatory approvals and robotaxi launch timelines.",
      },
      {
        title: "Key-person risk",
        severity: "Medium",
        detail:
          "Tesla's strategy and valuation are closely tied to Elon Musk's decisions and public commentary.",
        watch:
          "Management changes, compensation disputes and strategic pivots.",
      },
      {
        title: "Valuation",
        severity: "High",
        detail:
          "The current multiple leaves little room for disappointment in any of the growth businesses.",
        watch:
          "Forward EPS revisions and the implied value of the car business.",
      },
    ],
    watchlist: [
      {
        title: "Automotive gross margin",
        detail:
          "The cleanest measure of whether the core business can fund the future bets.",
      },
      {
        title: "Energy storage deployments",
        detail:
          "A growing profit contributor that is less dependent on vehicle pricing.",
      },
      {
        title: "Robotaxi milestones",
        detail:
          "Regulatory approvals and commercial launches are the catalysts for the option value.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Tesla is a genuine technology and manufacturing company with a strong balance sheet and a large optionality set. The current car business, however, is not producing the margins or growth that the valuation implies.",
      "The educational point is the difference between a company and a stock. Tesla the company may be innovative and important; Tesla the stock at 438x earnings requires a very specific future to be realized.",
      "The key questions are whether vehicle margins can recover, when autonomy becomes a real revenue line, and how much of the valuation is cash versus option value.",
    ],
    questions: [
      "What is the car business worth at a normal auto multiple?",
      "How much of the valuation is robotaxi optionality?",
      "Can energy storage become a material profit pool?",
      "What happens to the stock if autonomy timelines slip another three years?",
    ],
  },
};
