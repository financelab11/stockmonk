import type { StockStory } from "./types";

export const AVGO: StockStory = {
  ticker: "AVGO",
  kicker: "Semiconductors · Infrastructure software",
  title: "Broadcom pairs custom AI silicon with a sticky software franchise",
  dek: "The semiconductor business is cyclical and concentrated. The software business is recurring and cash-generative. Together they produce unusually high margins — and a leveraged balance sheet.",
  readingMinutes: 11,
  takeaways: [
    "Revenue reached $89.1B on a trailing basis, up 48.7% year over year.",
    "Semiconductor Solutions is 57.7% of revenue; Infrastructure Software is 42.3%.",
    "Operating margin is 48.0% and free-cash-flow margin is 44.2%.",
    "Net debt of $35.4B reflects the VMware acquisition and an acquisition-led model.",
  ],
  filingUrl:
    "https://www.sec.gov/Archives/edgar/data/1730168/000173016825000121/avgo-20251102.htm",
  irUrl: "https://investors.broadcom.com/",
  earningsReleaseUrl:
    "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000076/avgo-08022026x8kxex99.htm",
  bigPicture: {
    paragraphs: [
      "Broadcom designs semiconductors for networking, broadband, wireless and storage, and sells infrastructure software after the VMware acquisition. It is a hybrid company: a cyclical chip supplier with a recurring software business attached.",
      "Trailing revenue reached $89.1B, up 48.7%, driven by custom AI accelerators and the VMware consolidation. Operating margin is 48.0% and free-cash-flow margin is 44.2%, both exceptional for a company with a large hardware business.",
      "At $293.69, the stock trades at 36.6x trailing earnings and 33.1x EV/EBITDA. The multiple reflects the AI growth story and the software mix, but it also assumes the VMware integration and the custom-silicon pipeline keep delivering.",
    ],
    quote:
      "Broadcom is a capital-allocation story as much as a technology story. The software acquisition changed the margin profile; the AI custom-silicon business changed the growth profile.",
  },
  whatItDoes: {
    paragraphs: [
      "Semiconductor Solutions sells networking chips, custom application-specific integrated circuits, broadband access chips, wireless connectivity and storage controllers. Infrastructure Software sells VMware, CA, Symantec enterprise security and related products.",
      "The segment split is 57.7% semiconductors and 42.3% software. The software business is smaller but more recurring and higher-margin, which is why Broadcom's consolidated margin is higher than a typical chip company's.",
      "Custom AI silicon is the fastest-growing part of the semiconductor business. Large cloud customers commission Broadcom to design accelerators for their own workloads, which is a different model from selling merchant GPUs.",
    ],
    bullets: [
      {
        title: "Semiconductor Solutions",
        detail:
          "57.7% of revenue. Networking, custom AI accelerators, broadband, wireless and storage.",
      },
      {
        title: "Infrastructure Software",
        detail:
          "42.3% of revenue. VMware, CA and Symantec enterprise software with recurring revenue.",
      },
      {
        title: "Custom AI",
        detail:
          "ASICs designed for hyperscale customers. High growth, high concentration and less visibility than merchant silicon.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Semiconductors earn a gross margin that depends on the product and the customer. Custom ASICs can be less standardized and more concentrated than merchant chips, but they can also carry strong pricing power when the customer has no alternative.",
      "Software earns a high-margin subscription and maintenance revenue stream. Broadcom has a reputation for raising prices and focusing on the most profitable customers, which boosts margins but can strain customer relationships.",
      "Asia Pacific is 56.2% of revenue, the Americas 29.6% and EMEA 14.2%. The Asia concentration reflects where chips are manufactured and shipped, and it exposes Broadcom to supply-chain and export-control risk.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue grew from $22.6B in fiscal 2019 to $63.9B in fiscal 2025, an 18.9% compound annual growth rate, with a large jump from the VMware acquisition. The latest quarter grew 85.5% to $29.6B, helped by AI custom silicon and software consolidation.",
      "The attributed consensus expects $106.0B of revenue this fiscal year, up 65.9%, and $174.2B next year, up 64.4%. Those are extraordinary growth rates for a company this size and depend heavily on a small number of AI customers.",
      "The growth drivers are custom AI accelerators, networking for AI clusters, VMware cross-sell and software price increases. The risk is customer concentration and the cyclicality of the non-AI semiconductor businesses.",
    ],
    bullets: [
      {
        title: "Custom AI accelerators",
        detail:
          "Hyperscalers are designing their own chips to reduce dependence on merchant GPUs. Broadcom is a key partner.",
      },
      {
        title: "AI networking",
        detail:
          "Tomahawk and Jericho switching silicon benefit from the build-out of AI clusters.",
      },
      {
        title: "VMware",
        detail:
          "The software business adds recurring revenue and margin, but the integration and pricing strategy carry execution risk.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "Operating margin is 48.0%, net margin 42.9% and return on invested capital 25.0%. The margin profile reflects both semiconductor pricing and the high-margin software mix.",
      "The margin history is volatile because of acquisitions and amortization: 18.5% in 2019, 42.8% in 2022, 26.1% in 2024 after VMware, and 48.0% on a trailing basis. The trend is improving as integration costs normalize.",
      "Diluted EPS was $4.77 in fiscal 2025. The consensus expects $11.67 this year and $19.47 next year, which is a very steep trajectory tied to AI custom silicon.",
    ],
  },
  cash: {
    paragraphs: [
      "Broadcom generated $39.4B of free cash flow on a trailing basis, a 44.2% margin. That is the highest cash conversion among the large semiconductor companies in this universe.",
      "The balance sheet carries $35.4B of net debt, a legacy of the VMware acquisition. The debt is manageable against EBITDA, but it reduces flexibility compared with net-cash peers.",
      "The company prioritizes debt reduction, dividends and buybacks. The dividend yield is 0.87%, and the buyback is a meaningful part of the capital-return story.",
    ],
  },
  valuation: {
    paragraphs: [
      "At $293.69, Broadcom trades at 36.6x trailing earnings, 33.1x EV/EBITDA and 35.6x free cash flow. Those multiples are high for a semiconductor company, but the software mix and AI growth justify a premium relative to cyclical peers.",
      "The multiple history is less useful here because the business mix changed dramatically with VMware. The current multiple should be judged against the post-acquisition earnings base, not the pre-acquisition history.",
      "Stockmonk does not publish a target price. The attributed consensus mean is shown in the next section as third-party context, and it is well above the current price.",
    ],
  },
  analysts: {
    paragraphs: [
      "The attributed consensus includes 48 analysts with a mean target of $526.81. The recommendation mix is strongly positive. Estimates call for $106.0B of revenue this fiscal year and EPS of $11.67.",
      "The following year's revenue estimate of $174.2B implies 64.4% growth, which is a bold assumption for a company with a large non-AI semiconductor business. The dispersion around that estimate is the key uncertainty.",
      "A high mean target is not a Stockmonk rating. It reflects sell-side enthusiasm for custom AI silicon and the software margin story.",
    ],
  },
  risks: {
    intro:
      "Broadcom's risks are customer concentration, leverage and integration. The software business reduces cyclicality but does not eliminate it.",
    items: [
      {
        title: "Customer concentration",
        severity: "High",
        detail:
          "A small number of hyperscale customers drive custom AI silicon revenue. A design loss or capex pause would be material.",
        watch:
          "Custom AI customer disclosures and order trends.",
      },
      {
        title: "Leverage",
        severity: "Medium",
        detail:
          "Net debt of $35.4B limits flexibility and makes the company sensitive to refinancing conditions.",
        watch:
          "Net leverage ratio and debt maturity schedule.",
      },
      {
        title: "VMware integration",
        severity: "Medium",
        detail:
          "Pricing changes and product bundling could alienate customers or invite regulatory scrutiny.",
        watch:
          "Software revenue growth, renewal rates and customer complaints.",
      },
      {
        title: "Semiconductor cyclicality",
        severity: "Medium",
        detail:
          "Broadband, wireless and storage are cyclical and can offset AI strength.",
        watch:
          "Non-AI semiconductor revenue and inventory trends.",
      },
      {
        title: "Export controls",
        severity: "Medium",
        detail:
          "Asia Pacific is 56.2% of revenue, and chip exports are subject to changing rules.",
        watch:
          "Export-licence changes and geographic revenue mix.",
      },
    ],
    watchlist: [
      {
        title: "Custom AI revenue",
        detail:
          "The growth engine and the biggest source of estimate risk.",
      },
      {
        title: "Software renewal rates",
        detail:
          "VMware pricing power depends on retention; churn would undermine the margin story.",
      },
      {
        title: "Net leverage",
        detail:
          "Debt reduction is a capital-allocation priority and a risk monitor.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Broadcom is a high-margin semiconductor and software hybrid with an acquisition-led capital-allocation model. The AI custom-silicon business is the growth engine, and the software business provides recurring cash flow.",
      "The educational point is that margins and growth can come from different places. Broadcom's software acquisition changed the margin profile, while AI custom silicon changed the growth profile.",
      "The key questions are customer concentration, the durability of AI custom silicon, and how much leverage is appropriate for a cyclical business.",
    ],
    questions: [
      "How concentrated is custom AI revenue?",
      "Is VMware pricing power sustainable?",
      "What does the non-AI semiconductor cycle look like?",
      "How quickly can the company reduce net debt?",
    ],
  },
};
