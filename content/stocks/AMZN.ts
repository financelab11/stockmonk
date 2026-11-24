import type { StockStory } from "./types";

export const AMZN: StockStory = {
  "ticker": "AMZN",
  "kicker": "Retail · Cloud infrastructure",
  "title": "Amazon's retail scale funds a cloud and advertising profit pool",
  "dek": "The headline is a low-margin retailer. The economics are a high-margin cloud and advertising business attached to the largest online store in the West.",
  "readingMinutes": 12,
  "takeaways": [
    "Third-quarter 2026 revenue was $201.9B, up 12.1%, with an operating margin of 13.9% and EPS of $1.89.",
    "Trailing revenue is $797.5B, up 15.4%, and the operating margin has risen from 11.2% in fiscal 2025 to 13.1%.",
    "Free cash flow is negative $46.9B, a -5.9% margin, as capex absorbs operating cash flow; net debt is $67.0B.",
    "The {{pe}} multiple is below the 25.4x peer median, and the discount is explained by negative free cash flow."
  ],
  "filingUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000004/amzn-20251231.htm",
  "irUrl": "https://ir.aboutamazon.com/",
  "earningsReleaseUrl": "https://www.sec.gov/Archives/edgar/data/1018724/000101872426000038/amzn-20260930xex991.htm",
  "bigPicture": {
    "paragraphs": [
      "A 13.9% operating margin in the September quarter was the highest of the year, and it came on $201.9B of revenue, up 12.1%. EPS was $1.89. The trailing operating margin is 13.1%, up from 11.2% in fiscal 2025, 10.8% in fiscal 2024 and 6.4% in fiscal 2023. The improvement is the result that matters: revenue growth is steady, but profit conversion has changed materially. The direction is clear even if the pace is not.",
      "The segment mix explains the margin. North America is 59.5% of revenue, International 22.6% and AWS 18.0%. AWS carries a much higher operating margin, and advertising sits inside the retail segments with high incremental economics. Retail is the scale and the moat; the profit pool is the shift toward cloud and advertising, not the headline retail margin. The segment split understates the profit concentration because advertising is not a separate line.",
      "The {{pe}} trailing multiple and {{evEbitda}} EV/EBITDA are below peer medians of 25.4x and 17.2x. The discount is explained by the cash statement: free cash flow is negative $46.9B and capex was $131.8B in fiscal 2025. The market is willing to fund the build, but it is not paying a premium while the cash flow is negative. The multiple is a bet that the capex cycle turns before the consumer does."
    ],
    "quote": "Amazon's retail scale is the moat; AWS and advertising are the profit pool, and the capex line decides when that pool reaches the equity."
  },
  "whatItDoes": {
    "paragraphs": [
      "The company reports three segments: North America, International and AWS. North America includes online stores, physical stores, advertising and Prime subscriptions. International is the same model outside North America. AWS sells compute, storage, databases and AI services.",
      "The segment split understates the profit concentration. North America is 59.5% of revenue, International 22.6% and AWS 18.0%, but AWS carries a much higher operating margin and advertising is embedded inside the retail segments.",
      "Amazon's logistics network is a strategic asset. It has moved from relying on third-party carriers to delivering a large share of its own packages, which improves speed and control but adds fixed cost."
    ],
    "bullets": [
      {
        "title": "North America",
        "detail": "59.5% of revenue. Online and physical retail, Prime, advertising and the logistics network."
      },
      {
        "title": "International",
        "detail": "22.6% of revenue. A long-duration growth market with mixed profitability."
      },
      {
        "title": "AWS",
        "detail": "18.0% of revenue. Cloud infrastructure and AI services, and the main profit engine."
      }
    ]
  },
  "howItMakesMoney": {
    "paragraphs": [
      "Retail earns a thin margin on the products it sells and a much better margin on advertising and Prime subscriptions. AWS earns a software-like margin on infrastructure usage. The consolidated margin is therefore a function of mix: every point of AWS or advertising growth lifts profitability.",
      "The United States is 68.3% of revenue, non-US 15.0%, Germany 6.4% and the United Kingdom 6.0%. The geographic mix is more US-centric than Alphabet's or Apple's, which reduces currency risk but concentrates regulatory and consumer exposure.",
      "Advertising is the hidden profit pool. It is recorded inside the retail segments and grows with traffic and Prime engagement, but it does not require the same capital as fulfillment."
    ]
  },
  "growth": {
    "paragraphs": [
      "AWS and advertising carry the profit growth. AWS is 18.0% of revenue, North America 59.5% and International 22.6%. Cloud and advertising carry higher margins than retail, so a modest shift in mix can lift operating profit faster than revenue. The retail segments still carry the fulfillment and logistics cost base that keeps the consolidated margin thin. The retail margin is thin by design, not by accident.",
      "The revenue base is too large for percentage growth to accelerate. Fiscal 2025 revenue was $716.9B, and trailing revenue is $797.5B, up 15.4%. The third quarter grew 12.1%, a little slower than the trailing rate. The dollar increment remains enormous, but the mix, not the headline, is what moves profit. The incremental dollar is the number that matters for the profit pool.",
      "Consensus for 2026 is $829.2B revenue and $12.80 EPS, with 2027 at $959.4B and $10.66. The EPS decline in 2027 is a base effect: the second quarter of 2026 had a 31.2% net margin, far above the other quarters. The December quarter is estimated at $244.9B and $2.39, which assumes the holiday retail season and continued AWS mix. The revenue line is the better guide."
    ],
    "bullets": [
      {
        "title": "AWS mix",
        "detail": "AWS is 18.0% of revenue and the main profit engine. The segment's margin is structurally higher than retail, so its share of the revenue base is the profit lever."
      },
      {
        "title": "Advertising",
        "detail": "Advertising sits inside the retail segments and grows with traffic and Prime engagement. It requires far less capital than fulfillment, which is why it improves the mix."
      },
      {
        "title": "Capex",
        "detail": "Capex reached $131.8B in fiscal 2025 against $139.5B of operating cash flow. The investment cycle is the swing factor for free cash flow."
      }
    ]
  },
  "performance": {
    "paragraphs": [
      "Operating leverage lifted the margin from 6.4% in fiscal 2023 to 10.8% in fiscal 2024, 11.2% in fiscal 2025 and 13.1% on a trailing basis. The third quarter was 13.9%, with a net margin of 10.2%. Cost discipline in retail, the AWS mix and advertising all contributed. The peak net margin came in the second quarter at 31.2%, which should not be annualised.",
      "Trailing operating margin is 13.1%, net margin 16.9% and return on equity 22.0%. The peer median operating margin is 14.1%, so Amazon is close to parity. Return on invested capital is 10.2%, below the 24.6% peer median, because the capital base is so large. The margin is no longer the problem; the capital intensity is. The peer gap is a capital-efficiency gap."
    ]
  },
  "cash": {
    "paragraphs": [
      "Negative free cash flow of $46.9B, a -5.9% margin, is the cost of the build. In fiscal 2025, operating cash flow was $139.5B and capex $131.8B, leaving only $7.7B. Net debt is $67.0B, or 0.4x EBITDA, and interest cover is 23.3x. That is a modest leverage ratio for a company spending at this rate. The debt is not the constraint on the build.",
      "Capital allocation is explicit: no dividend, and capex takes priority over buybacks. That is defensible if the new fulfillment and AWS capacity earns a return, but the cash statement is showing the cost before the benefit. Microsoft and Alphabet are also in capex troughs, yet Amazon's free-cash-flow margin is the weakest of the three. The multiple will re-rate when the cycle turns."
    ]
  },
  "valuation": {
    "paragraphs": [
      "A 3.6x EV/Sales multiple is low for a business growing 15%, and it is the cleanest way to value a company with negative free cash flow. The {{pe}} trailing multiple is 20.7x and EV/EBITDA is {{evEbitda}}, below the 25.4x and 17.2x peer medians. The shares have traded within {{range52}} over the past year, sit {{rangePosition}} of the way up that band and have returned {{return1y}}.",
      "The P/E is distorted by a one-off. 2026 EPS of $12.80 implies about 20x, while 2027 EPS of $10.66 implies about 24x because the second quarter of 2026 had a 31.2% net margin. EV/EBITDA at 15.6x is the better measure and sits below the 17.2x peer median. That multiple is a cycle average for Amazon rather than a point estimate.",
      "The peer gap is about capital intensity. Home Depot trades at 24.3x with a 12.4% operating margin, McDonald's at 21.6x with 46.9% and Uber at 38.2x with 12.4%. Amazon at 20.7x is cheap for 15% growth, but the negative free cash flow explains why. A capex peak would do more for the multiple than another point of retail margin. The discount closes when the cash flow turns."
    ]
  },
  "analysts": {
    "paragraphs": [
      "Sixty analysts cover Amazon, and the mean target of $326 is about 26% above the current price. The range of $230 to $405 is narrower than the other mega-caps, and almost all of it sits above the market. The debate is about the timing of the capex peak rather than the direction of the franchise.",
      "The 30-day EPS revision is -0.9%, a small cut rather than a reset. 2026 revenue is forecast at $829.2B and EPS at $12.80; 2027 at $959.4B and $10.66. The December quarter is estimated at $244.9B and $2.39. The estimates assume AWS and advertising keep lifting the mix and that capex peaks without a consumer slowdown."
    ]
  },
  "risks": {
    "intro": "Amazon's risks are capital intensity, competition and margin mix. The retail business is durable; the question is how much profit it converts.",
    "items": [
      {
        "title": "Negative free cash flow",
        "severity": "High",
        "detail": "Capex is running ahead of operating cash flow. A prolonged investment cycle without matching revenue growth would pressure the valuation.",
        "watch": "Capital expenditure guidance and the gap between operating cash flow and capex."
      },
      {
        "title": "AWS competition",
        "severity": "High",
        "detail": "Microsoft and Google are aggressive in AI cloud. AWS's growth premium and pricing power are not guaranteed.",
        "watch": "AWS growth relative to Azure and Google Cloud, and segment operating margin."
      },
      {
        "title": "Retail margin pressure",
        "severity": "Medium",
        "detail": "Fulfillment, labor and delivery costs can absorb the benefits of advertising growth.",
        "watch": "North America operating margin and cost per package."
      },
      {
        "title": "Regulation",
        "severity": "Medium",
        "detail": "Antitrust and labor rules could affect marketplace practices, Prime bundling and logistics.",
        "watch": "US and EU antitrust proceedings and labor classification rules."
      },
      {
        "title": "Consumer cyclicality",
        "severity": "Low",
        "detail": "Retail revenue is exposed to consumer spending, though Prime and essentials provide some stability.",
        "watch": "Consumer confidence and discretionary category growth."
      }
    ],
    "watchlist": [
      {
        "title": "AWS growth",
        "detail": "The main profit engine and the cleanest read on AI cloud demand."
      },
      {
        "title": "Capex versus operating cash flow",
        "detail": "The crossover point determines when free cash flow recovers."
      },
      {
        "title": "Advertising revenue",
        "detail": "High-margin revenue that improves the consolidated mix without heavy capital."
      }
    ]
  },
  "bottomLine": {
    "paragraphs": [
      "Amazon is a scaled retailer with two high-margin engines attached. The operating margin turnaround since 2022 is real, and the balance sheet can support the investment cycle.",
      "The educational point is that revenue growth and profit growth are not the same thing. Amazon's revenue is enormous, but the valuation depends on the mix shift toward AWS and advertising and on the capex cycle eventually normalising.",
      "The key questions are how fast AWS grows, how much capex the AI build requires, and whether retail margins can keep expanding."
    ],
    "questions": [
      "What share of operating income comes from AWS?",
      "When does capex peak as a share of revenue?",
      "How much advertising revenue is embedded in the retail segments?",
      "What happens to the valuation if AWS growth falls to 15%?"
    ]
  },
  "narrativeSource": "curated",
  "narrativeUpdatedAt": "2026-11-24"
};
