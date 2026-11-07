import type { StockStory } from "./types";

export const AAPL: StockStory = {
  ticker: "AAPL",
  kicker: "Computer hardware · Consumer ecosystem",
  title: "Apple turns a hardware installed base into a recurring services business",
  dek: "iPhone still pays the bills, but the most interesting part of the story is the slow, high-margin shift toward services and capital returns.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $478.8B on a trailing basis, up 15.1% year over year.",
    "iPhone is 53.1% of annual revenue; Services is 25.8% and growing faster.",
    "Operating margin is 33.0% and free-cash-flow margin is 28.4%.",
    "Net cash of $56.8B supports a large buyback and dividend.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/320193/000032019326000026/aapl-20260926.htm",
  irUrl: "https://investor.apple.com/",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/320193/000032019326000024/a8-kex991q4202609262026.htm",
  bigPicture: {
    paragraphs: [
      "Apple sells hardware, but its economic engine is the relationship with an installed base of more than two billion active devices. That base supports a services business — App Store, iCloud, advertising, payments and subscriptions — with much higher margins than a phone.",
      "Fiscal 2026 revenue reached $478.8B, up 15.1% year over year. That is a strong year for a company this large, helped by a new iPhone cycle and services growth. Operating margin expanded to 33.0%, and free cash flow was $136.1B.",
      "The stock is not cheap at 37.6x trailing earnings and 28.7x EV/EBITDA. The market is paying for the durability of the ecosystem and the buyback, not for rapid unit growth. The key debate is whether services can keep growing fast enough to justify the multiple as hardware matures.",
    ],
    quote:
      "Apple's most valuable product is not a device. It is the switching cost created by owning the account, the app store and the payment relationship.",
  },
  whatItDoes: {
    paragraphs: [
      "Apple designs phones, computers, tablets, wearables and accessories, and sells services around them. The company controls the silicon, operating system and much of the retail experience, which lets it capture a disproportionate share of industry profit.",
      "The product mix is concentrated. iPhone was 53.1% of fiscal 2026 revenue, Services 25.8%, Mac 7.9%, Wearables 7.4% and iPad 5.8%. Services is the second-largest line and the one that changes the margin and recurring-revenue profile.",
      "Apple's supply chain is global and heavily weighted toward Asia. The company has been shifting some assembly to India and Vietnam, but China remains central for both manufacturing and demand.",
    ],
    bullets: [
      {
        title: "iPhone",
        detail:
          "53.1% of revenue. The anchor of the installed base and the main upgrade cycle.",
      },
      {
        title: "Services",
        detail:
          "25.8% of revenue. App Store, iCloud, advertising, payments and subscriptions with structurally higher margins.",
      },
      {
        title: "Mac, iPad and Wearables",
        detail:
          "20.1% of revenue combined. Smaller categories that extend the ecosystem and support services attach.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Apple earns a hardware gross margin and a much higher services gross margin. Services revenue is recorded when customers spend on apps, storage, subscriptions and advertising, and it scales with the installed base rather than with unit shipments.",
      "Geographically, the United States was 35.0% of fiscal 2026 revenue, China 17.2% and other countries 47.8%. The China exposure is important because it is both a manufacturing hub and a large consumer market with local competition.",
      "The company returns most of its free cash flow to shareholders. Buybacks reduce the share count, which amplifies EPS growth relative to net income growth. That is why EPS can grow faster than revenue in a mature hardware cycle.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $274.5B in fiscal 2020 to $478.8B in fiscal 2026, a 9.7% compound annual growth rate. The latest quarter, Q4 FY2026, grew 11.7% to $114.5B.",
      "The attributed consensus expects $156.5B of revenue next quarter and EPS of $9.70 this fiscal year, rising to $10.84 next year. Those estimates imply mid-to-high single-digit growth with continued services mix shift.",
      "The growth drivers are the iPhone upgrade cycle, services attach, emerging-market penetration and new categories such as wearables and spatial computing. None of them is growing at AI-infrastructure speed, but the base is enormous and the customer retention is high.",
    ],
    bullets: [
      {
        title: "Installed-base monetisation",
        detail:
          "Every additional service attached to an existing device is high-margin incremental revenue.",
      },
      {
        title: "Upgrade cycle",
        detail:
          "A large installed base with an aging average device age creates a predictable replacement cycle.",
      },
      {
        title: "Emerging markets",
        detail:
          "India and Southeast Asia offer unit growth, though often at lower average selling prices.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Trailing operating margin is 33.0%, net margin is 27.6% and return on invested capital is 225.9%. The ROIC figure is extreme because Apple's equity base is small after years of buybacks; it is not comparable to a capital-intensive manufacturer.",
      "The margin trend has been stable to slightly upward: 24.1% in fiscal 2020, 29.8% in fiscal 2021, 31.5% in fiscal 2024 and 33.0% on a trailing basis. Services mix and cost discipline explain most of the improvement.",
      "Diluted EPS was $8.98 in fiscal 2026. The consensus expects $9.70 this year and $10.84 next year. Note that Apple's fiscal year ends in September, so the current fiscal year is FY2027.",
    ],
  },
  cash: {
    paragraphs: [
      "Apple generated $136.1B of free cash flow on a trailing basis, a 28.4% margin. Capital expenditure is modest relative to cash generation because Apple outsources manufacturing.",
      "The balance sheet holds $56.8B of net cash after debt. That is a smaller cushion than in the past because the company has returned so much capital, but it remains comfortably positive.",
      "Buybacks are the main use of cash: $55.2B over the trailing period, alongside $6.8B of dividends. The share count reduction is a meaningful part of the EPS story and should be modelled separately from operating growth.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $342.37, Apple trades at 37.6x trailing earnings, 28.7x EV/EBITDA and 36.6x free cash flow. Those multiples are high for a company growing revenue at a mid-teens rate, and they imply the market expects services to keep expanding margins.",
      "The multiple history shows that Apple has often traded at a premium to the market. The question is whether the premium is justified by the buyback, the services mix and the low cost of capital, or whether it reflects a scarcity premium for large-cap quality.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context, and it is close to the current share price, which suggests the sell side sees limited re-rating from here.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 39 analysts with a mean target of $339.04, essentially in line with the latest close. The recommendation mix is positive but less exuberant than the AI-infrastructure names.",
      "Estimates call for $156.5B of revenue next quarter and EPS of $9.70 this fiscal year. Revenue estimates for the outer years are sparse in the dataset, so the EPS line is the more reliable consensus signal.",
      "A mean target near the current price is not a verdict. It often means the market has already incorporated the sell-side view, and the dispersion around the average is where the debate lives.",
    ],
  },
  risks: {
    intro:
      "Apple's risks are concentrated in product concentration, China and regulation. The balance sheet is strong enough that financial distress is not the issue.",
    items: [
      {
        title: "iPhone concentration",
        severity: "High",
        detail:
          "More than half of revenue comes from one product line. A weak upgrade cycle would hit revenue and services attach.",
        watch:
          "iPhone unit and revenue growth, average selling price and upgrade commentary.",
      },
      {
        title: "China exposure",
        severity: "High",
        detail:
          "China is 17.2% of revenue and a critical manufacturing base. Local competition and geopolitics can affect both demand and supply.",
        watch:
          "Greater China revenue, local share data and supply-chain relocation progress.",
      },
      {
        title: "App Store regulation",
        severity: "Medium",
        detail:
          "Rules in the EU and elsewhere are forcing alternative app marketplaces and payment paths, which could pressure services margins.",
        watch:
          "Regulatory rulings and the revenue mix of services.",
      },
      {
        title: "AI competition",
        severity: "Medium",
        detail:
          "Apple's on-device AI strategy is differentiated but dependent on partners and execution. A weak AI story could lengthen the upgrade cycle.",
        watch:
          "Feature adoption, partner announcements and upgrade rates.",
      },
      {
        title: "Valuation",
        severity: "Medium",
        detail:
          "A 37.6x earnings multiple leaves little room for a growth disappointment.",
        watch:
          "Forward EPS revisions relative to the multiple.",
      },
    ],
    watchlist: [
      {
        title: "Services growth",
        detail:
          "The services line is the main margin lever and the key support for the premium multiple.",
      },
      {
        title: "Greater China",
        detail:
          "Track revenue and local competitive share separately from the global totals.",
      },
      {
        title: "Buyback pace",
        detail:
          "EPS growth depends partly on share count reduction, so the buyback is an operating variable.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Apple is a mature, high-quality ecosystem business with exceptional cash generation and a long record of capital returns. The financial statements are clean and the brand is durable.",
      "The educational point is that EPS growth can come from three places: revenue growth, margin expansion and share count reduction. Apple uses all three, and a reader should separate them before drawing conclusions about the underlying business.",
      "The stock's premium multiple means the bar is high. The key questions are whether services can keep growing double digits and whether China remains a stable contributor.",
    ],
    questions: [
      "How much of EPS growth comes from buybacks versus operations?",
      "Can services grow fast enough to offset hardware maturity?",
      "What is the realistic downside if China revenue falls 20%?",
      "Is the AI upgrade cycle incremental or merely pulling forward replacements?",
    ],
  },
};
