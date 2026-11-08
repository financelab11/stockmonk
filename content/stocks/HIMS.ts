import type { StockStory } from "./types";

export const HIMS: StockStory = {
  ticker: "HIMS",
  kicker: "Healthcare Growth · Consumer telehealth",
  title: "Hims & Hers is a subscription business before it is a pharmacy",
  dek: "Customers pay a monthly fee, then buy treatments for hair loss, sexual health, skin and weight loss. Marketing buys the subscriber; retention and repeat orders decide whether the economics work.",
  readingMinutes: 9,
  takeaways: [
    "Revenue reached $2.58B, up 28.0%, and the latest quarter grew 38.2% to $753.2M.",
    "Gross margin is 68.4%, but operating margin is negative 6.0% after marketing and expansion spending.",
    "Free cash flow is only $61.5M, or 2.4% of revenue, against $524.3M of net debt.",
    "The consensus expects $3.21B of revenue this year and a return to profit next year.",
  ],
  filingUrl: "https://www.sec.gov/Archives/edgar/data/1773751/000177375126000022/hims-20251231.htm",
  irUrl: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001773751&type=&dateb=&owner=include&count=40",
  bigPicture: {
    paragraphs: [
      "Hims & Hers sells prescription and over-the-counter treatments directly to consumers through a telehealth platform. A customer signs up online, answers a medical questionnaire, is reviewed by a clinician and receives medication by mail. The categories are hair loss, erectile dysfunction, dermatology, mental health and weight loss, with personal-care products alongside the prescriptions.",
      "Revenue reached $2.58B over the trailing twelve months, up 28.0%. The latest quarter, Q2 FY26, grew 38.2% to $753.2M, but the operating margin was negative 12.9%. That is a reversal from FY2025, when the company earned $105.6M of operating income on $2.35B of revenue.",
      "At $26.00 the market capitalisation is $6.07B, or 2.6x EV/sales. The company has $524.3M of net debt and generated only $61.5M of free cash flow, so the balance sheet and the cash conversion both matter. The question is whether the current losses are the cost of entering new categories or evidence that the acquisition economics have deteriorated.",
    ],
    quote:
      "A subscriber who stays for a year is worth far more than the cost of acquiring them. A subscriber who leaves after two months is a marketing expense with a prescription attached.",
  },
  whatItDoes: {
    paragraphs: [
      "The customer is a consumer, not a hospital or a physician. Hims & Hers reaches them through digital advertising, social media and brand marketing, then converts them into a subscription that bundles clinical access with a product. The appeal is privacy, convenience and a price that is visible before checkout.",
      "The fulfilment model relies on licensed pharmacies and distribution partners rather than a traditional retail shelf. That keeps capital intensity low but puts the company in the middle of a regulatory chain: prescribing rules, pharmacy licensing and state-level telehealth requirements all apply.",
      "The company employs about 181 people, which is small for a business of this revenue size and reflects how much of the operation is outsourced. The brand and the customer list are the assets; the pharmacy and the logistics are partners.",
    ],
    bullets: [
      {
        title: "Subscriptions",
        detail:
          "A recurring monthly charge that bundles access to a clinician with the treatment. The core of the model.",
      },
      {
        title: "Product categories",
        detail:
          "Hair loss, sexual health, dermatology, mental health and weight loss. Each has a different price point and retention curve.",
      },
      {
        title: "Brand and acquisition",
        detail:
          "Paid media and organic reach create the customer flow. Marketing is the largest discretionary cost.",
      },
    ],
  },
  howItMakesMoney: {
    paragraphs: [
      "Revenue is the sum of subscription fees and product sales. The gross margin of 68.4% covers the cost of the medication, the pharmacy partner and the shipping. What sits below it is the customer-acquisition cost, the clinical network, the technology and the corporate overhead.",
      "This is a unit-economics business disguised as a healthcare company. If the cost to acquire a subscriber is recovered within the first few months and the customer stays for a year, the model produces attractive returns. If acquisition costs rise or retention falls, growth consumes cash even while revenue increases.",
      "The FY2026 swing is the evidence. Operating income was positive in FY2024 and FY2025, then turned negative in Q1 and Q2 FY2026 at minus 12.9% in both quarters. The company is spending to enter new categories, expand internationally and build brand awareness. Those are investments, but they are also the reason free cash flow is only 2.4% of revenue.",
    ],
  },
  growth: {
    paragraphs: [
      "Revenue compounded at 74.7% a year from FY2021 to FY2025, rising from $271.9M to $2.35B. The latest quarter grew 38.2%, which is slower than the historical rate but still fast for a business of this size. The consensus expects $3.21B this fiscal year and $4.00B next year.",
      "The drivers are new categories, new customers within existing categories and international expansion. Weight loss is the largest new opportunity and the most competitive: it attracts well-funded telehealth competitors, pharmacy chains and the manufacturers of branded drugs. Pricing in that category can change quickly.",
      "The constraint is not demand; it is the cost of reaching the customer. Paid media costs rise with competition, and a category that depends on a single drug or a single regulatory posture is fragile. The company's attempt to build a branded product line is partly an answer to that fragility.",
    ],
    bullets: [
      {
        title: "Category expansion",
        detail:
          "Each new treatment area adds a subscription product that can be sold to the existing customer base.",
      },
      {
        title: "International",
        detail:
          "New geographies add subscribers but require local prescribing, pharmacy and marketing work.",
      },
      {
        title: "Branded products",
        detail:
          "Owning the product rather than reselling a generic improves margin and reduces regulatory exposure.",
      },
    ],
  },
  performance: {
    paragraphs: [
      "The annual record shows a company that grew into profitability and then out of it again. Operating income was negative $115.0M in FY2021 and negative $68.7M in FY2022, then negative $29.5M in FY2023, positive $61.9M in FY2024 and positive $105.6M in FY2025. The FY2026 quarters reversed the trend.",
      "The quarterly pattern is stark: operating margin was 9.9% in Q1 FY25, 4.9% in Q2, 2.0% in Q3 and 1.5% in Q4, then minus 12.9% in both Q1 and Q2 FY26. Revenue kept growing through the transition, which means the losses are coming from spending, not from a demand collapse.",
      "Return on equity is minus 43.8% and return on invested capital is minus 14.4%. Those numbers reflect the losses and the debt added to fund expansion. They also mean the company has to earn its cost of capital back before the equity story improves.",
    ],
  },
  cash: {
    paragraphs: [
      "Free cash flow was $61.5M over the trailing period, a 2.4% margin. That is a thin result for a business with a 68.4% gross margin, and it is the clearest sign that marketing and expansion are absorbing the gross profit.",
      "Net debt is $524.3M. Against $61.5M of annual free cash flow, that is a meaningful load: the company would need several years of current cash generation to repay it, and it is currently running operating losses. The debt was raised to fund growth, so the question is whether the growth arrives before the debt has to be refinanced.",
      "The cash history shows the same tension. Free cash flow was negative $111.5M in FY2021, negative $33.7M in FY2022, positive $47.0M in FY2023, positive $198.3M in FY2024 and positive $57.4M in FY2025. The FY2025 decline is the first warning that growth was becoming more expensive.",
    ],
  },
  valuation: {
    paragraphs: [
      "The trailing P/E is negative and the EV/EBITDA is negative, so neither is useful. The stock trades at 2.6x EV/sales and 98.6x free cash flow. The sales multiple is the relevant one: it says the market is valuing the revenue base, not current profit.",
      "The peer comparison is difficult because no other company in this group has the same consumer-subscription model. A 2.6x sales multiple is low relative to high-growth software and high relative to a mature pharmacy. It implies the market expects growth to continue but does not trust the margin.",
      "The valuation question is whether the current spending is an investment or a permanent cost. If operating margin returns to the FY2025 level of about 4.5%, the shares are being valued on a modest profit base. If the losses persist, the sales multiple is the only support.",
    ],
  },
  analysts: {
    paragraphs: [
      "Thirteen analysts contribute to the attributed consensus, with a mean target of $31.15 and a range of $23.00 to $42.00. The range is wide and the mean is above the current price, which reflects the disagreement about whether the losses are temporary.",
      "Estimates call for $3.21B of revenue and minus $0.56 of EPS this fiscal year, then $4.00B and positive $0.42 next year. For the next quarter the consensus is $892.8M of revenue and positive $0.06 of EPS. The estimates assume a sharp margin recovery in the second half of the forecast.",
      "Those are third-party forecasts. A return to profit is plausible if marketing spend normalises, but it is not visible in the reported quarters. The gap between the estimate and the recent run rate is the main risk in the consensus.",
    ],
  },
  risks: {
    intro:
      "Hims & Hers has a large customer base and a recognizable brand. The risks are acquisition economics, regulation, competition and a debt load that assumes the losses are temporary.",
    items: [
      {
        title: "Customer acquisition cost",
        severity: "High",
        detail:
          "Paid media is the main source of new subscribers. If advertising costs rise faster than revenue, growth destroys value even as the top line increases.",
        watch:
          "Marketing spend as a share of revenue and the implied payback period.",
      },
      {
        title: "Regulatory and prescribing rules",
        severity: "High",
        detail:
          "Telehealth prescribing, pharmacy licensing and drug-specific rules can change the product mix quickly. A restriction in one category can remove a revenue line.",
        watch:
          "State and federal telehealth rules, pharmacy partner terms and category disclosures.",
      },
      {
        title: "Competition in weight loss",
        severity: "High",
        detail:
          "The weight-loss category attracts telehealth companies, retailers and drug manufacturers. Price competition can compress the gross margin.",
        watch:
          "Category revenue, pricing and gross margin.",
      },
      {
        title: "Debt and cash conversion",
        severity: "Medium",
        detail:
          "Net debt of $524.3M against $61.5M of free cash flow leaves little room if losses continue.",
        watch:
          "Free cash flow, interest cost and any refinancing.",
      },
      {
        title: "Retention",
        severity: "Medium",
        detail:
          "A subscription business is only as good as its renewal rate. A shorter average subscription life raises the effective cost of every customer.",
        watch:
          "Subscriber counts, churn and repeat-order rates.",
      },
    ],
    watchlist: [
      {
        title: "Marketing efficiency",
        detail:
          "The ratio of revenue to marketing spend is the simplest test of whether growth is profitable.",
      },
      {
        title: "Gross margin",
        detail:
          "A move below the mid-60s would suggest pricing pressure or a less favourable category mix.",
      },
      {
        title: "Free cash flow",
        detail:
          "The company has to convert its gross profit into cash to service the debt.",
      },
    ],
  },
  bottomLine: {
    paragraphs: [
      "Hims & Hers has built a $2.58B revenue consumer telehealth business growing 28%, with a 68.4% gross margin and a recognizable brand. It has also swung from a $105.6M operating profit in FY2025 to operating losses in FY2026, while taking on $524.3M of net debt.",
      "The business model can work: a subscriber who stays produces recurring revenue at a high gross margin. The question is whether the current acquisition and expansion spending buys a durable customer base or just postpones the point at which the unit economics have to stand on their own.",
      "The reader should focus on payback and retention rather than revenue growth. A company that grows 30% while losing money on each new customer is not the same business as one that grows 15% and collects cash.",
    ],
    questions: [
      "What is the average subscription length by category?",
      "How much does it cost to acquire a subscriber, and how quickly is that recovered?",
      "How much of the FY2026 loss is new-category investment versus core-business margin?",
      "Can free cash flow cover the debt if growth slows?",
    ],
  },
};
