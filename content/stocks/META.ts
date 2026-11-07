import type { StockStory } from "./types";

export const META: StockStory = {
  ticker: "META",
  kicker: "Online media · Social platforms",
  title: "Meta's ad machine is funding an expensive bet on the next computing platform",
  dek: "The core apps produce enormous cash flow. Reality Labs loses money, and AI capex is rising. The question is what the ad business is worth while the next platform is built.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $241.6B on a trailing basis, up 27.5% year over year.",
    "Family of Apps is 98.9% of revenue; Reality Labs is 1.1% and loss-making.",
    "Operating margin is 32.9% and free-cash-flow margin is 11.9%.",
    "The balance sheet is roughly net cash, with $1.5B more cash than debt.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm",
  irUrl: "https://investor.atmeta.com/",
  bigPicture: {
    paragraphs: [
      "Meta operates Facebook, Instagram, WhatsApp, Messenger and Threads, and sells advertising against the attention those apps capture. It is one of the two dominant digital-advertising platforms in the world, alongside Google.",
      "Trailing revenue reached $241.6B, up 27.5%, and the latest quarter grew 26.1%. That is strong growth for a company that already reaches billions of users. Operating margin is 32.9%, below the company's peak but recovering as cost discipline improves.",
      "The stock trades at 20.7x trailing earnings and 14.9x EV/EBITDA, which is inexpensive relative to the growth rate. The discount reflects concerns about Reality Labs losses, AI capex and the durability of ad demand.",
    ],
    quote:
      "Meta is a high-margin advertising business with a venture-capital arm attached. The valuation debate is about how much the venture arm costs and how long the ad engine can compound.",
  },
  whatItDoes: {
    paragraphs: [
      "Meta reports two segments. Family of Apps includes Facebook, Instagram, WhatsApp, Messenger and Threads, and generates almost all revenue through advertising. Reality Labs includes virtual and augmented reality hardware, software and the metaverse effort.",
      "The split is extreme: Family of Apps is 98.9% of revenue and Reality Labs is 1.1%. Reality Labs has been losing money for years, which is why the segment disclosure is so important to the valuation.",
      "Meta's AI investment serves both sides of the business. Recommendation models improve ad targeting and engagement, while generative AI tools help advertisers create creative and measure results. The same infrastructure also supports the longer-dated metaverse ambition.",
    ],
    bullets: [
      {
        title: "Family of Apps",
        detail:
          "98.9% of revenue. Facebook, Instagram, WhatsApp, Messenger and Threads, monetised through advertising.",
      },
      {
        title: "Reality Labs",
        detail:
          "1.1% of revenue. VR/AR hardware and software, including Ray-Ban smart glasses and Quest devices.",
      },
      {
        title: "AI infrastructure",
        detail:
          "Recommendation and generative AI models that improve ad performance and support future products.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Advertisers pay for impressions and actions across Meta's apps. The company prices ads through an auction, and the value of an impression depends on targeting, creative and measurement. More engagement and better AI models increase the number of monetisable impressions and the price per impression.",
      "The United States and Canada are 39.2% of revenue, Asia Pacific 26.8%, Europe 23.2% and the rest of the world 10.8%. The US and Canada are the most valuable ad markets per user, which is why ARPU is much higher there.",
      "Meta does not break out advertising from other Family of Apps revenue, but advertising is overwhelmingly the majority. The key operating metrics are daily active people, ad impressions and average price per ad.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $70.7B in 2019 to $201.0B in 2025, a 19.0% compound annual growth rate. The latest quarter grew 26.1%, helped by ad pricing, Reels monetisation and AI-driven targeting.",
      "The attributed consensus expects $256.9B of revenue this fiscal year, up 27.8%, and $312.6B next year, up 21.7%. EPS is expected to be $29.12 this year and $33.97 next year.",
      "The growth drivers are ad pricing, Reels and video, messaging monetisation, business AI and eventually glasses. The risk is that ad demand is cyclical and that AI capex raises the cost base before the revenue arrives.",
    ],
    bullets: [
      {
        title: "Ad pricing",
        detail:
          "Better AI targeting and measurement increase the value of each impression.",
      },
      {
        title: "Reels and video",
        detail:
          "Short-form video expands engagement and monetisable inventory.",
      },
      {
        title: "Business AI",
        detail:
          "Advertiser tools and messaging agents could expand revenue per business.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 32.9%, net margin 31.1% and return on invested capital 23.2%. The margin is below the 42.2% peak in 2024 because Reality Labs losses and AI investment have grown.",
      "The margin history shows how quickly Meta can adjust: 33.9% in 2019, 39.6% in 2021, 24.8% in 2022 during the ad downturn, then 42.2% in 2024. That flexibility is a strength, but it also shows how cyclical ad margins can be.",
      "Diluted EPS was $23.49 in 2025. The consensus expects $29.12 this year and $33.97 next year. The quarterly EPS history has been volatile relative to estimates, which is a reminder that the ad market can surprise in both directions.",
    ],
  },
  cash: {
    paragraphs: [
      "Meta generated $28.6B of free cash flow on a trailing basis, an 11.9% margin. Capital expenditure has risen sharply to build AI infrastructure, which is why cash conversion is much lower than the operating margin suggests.",
      "The balance sheet is roughly net cash, with $1.5B more cash and investments than debt. That is a strong position, but it is less of a cushion than the other large platforms.",
      "The cash-flow statement is where the Reality Labs and AI investment shows up. If capex keeps rising while ad growth slows, free cash flow could compress further.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $610.15, Meta trades at 20.7x trailing earnings and 14.9x EV/EBITDA. Those multiples are low for a company growing revenue at 27%, which suggests the market is discounting the durability of ad growth or the cost of the metaverse and AI bets.",
      "The multiple history shows Meta has often traded at a discount to the other mega-cap platforms. The discount can be justified by the loss-making Reality Labs segment and the cyclicality of advertising.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context; it is well above the current price, which reflects the sell side's more optimistic view of ad durability.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 57 analysts with a mean target of $850.10, a wide range of $629.06 to $1,050. The recommendation mix is strongly positive.",
      "Estimates call for $256.9B of revenue this fiscal year and EPS of $29.12. The following year's EPS estimate of $33.97 implies 16.7% growth, slower than the revenue growth rate because costs are rising.",
      "A high mean target is not a Stockmonk rating. The wide dispersion reflects genuine disagreement about ad cyclicality and the cost of the metaverse/AI investment.",
    ],
  },
  risks: {
    intro:
      "Meta's risks are advertising cyclicality, Reality Labs losses and regulatory pressure. The balance sheet is strong enough to absorb a downturn.",
    items: [
      {
        title: "Advertising cyclicality",
        severity: "High",
        detail:
          "Ad budgets fall quickly in a recession. Meta's revenue is almost entirely advertising.",
        watch:
          "Ad impressions, price per ad and advertiser count.",
      },
      {
        title: "Reality Labs losses",
        severity: "Medium",
        detail:
          "The segment loses money and has no clear near-term path to profitability. It is a drag on consolidated margins.",
        watch:
          "Reality Labs revenue and operating loss.",
      },
      {
        title: "AI capex",
        severity: "Medium",
        detail:
          "Capital expenditure is rising to build AI infrastructure. If the revenue payoff is slow, free cash flow will suffer.",
        watch:
          "Capital expenditure guidance and free-cash-flow margin.",
      },
      {
        title: "Regulation and privacy",
        severity: "Medium",
        detail:
          "Privacy rules and antitrust actions can affect targeting, data use and platform distribution.",
        watch:
          "EU and US regulatory developments and changes to ad measurement.",
      },
      {
        title: "Competition for attention",
        severity: "Medium",
        detail:
          "TikTok, YouTube and other platforms compete for the same user time and advertiser budgets.",
        watch:
          "Engagement trends and time-spent disclosures.",
      },
    ],
    watchlist: [
      {
        title: "Ad price and impressions",
        detail:
          "The two components of ad revenue growth; the mix between them matters.",
      },
      {
        title: "Reality Labs loss",
        detail:
          "The segment drag is a known cost, but the trajectory still moves consolidated margins.",
      },
      {
        title: "Capex",
        detail:
          "AI infrastructure spending determines the free-cash-flow recovery path.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Meta is a high-quality advertising franchise with an unusual amount of optionality in AI and spatial computing. The core business generates strong cash flow and the balance sheet is solid.",
      "The educational point is sum-of-the-parts thinking. The ad business and the metaverse bet have very different economics, and the consolidated multiple can hide both.",
      "The key questions are how durable ad growth is, how much Reality Labs costs, and whether AI capex earns a return.",
    ],
    questions: [
      "What is the ad business worth without Reality Labs?",
      "How much of AI capex is defensive versus growth?",
      "What happens to margins in an ad downturn?",
      "Can glasses become a meaningful revenue category?",
    ],
  },
};
