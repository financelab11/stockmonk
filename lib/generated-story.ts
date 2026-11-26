import type { RiskItem, StockStory, StoryBlock } from "@/content/stocks/types";
import { getCoverageGroup } from "@/config/coverage";
import type { ResearchBundle } from "./data";
import {
  formatCompactCurrency,
  formatCurrency,
  formatMultiple,
  formatPercent,
  formatSignedPercent,
} from "./format";

type Bucket = {
  lens: string;
  drivers: Array<{ title: string; detail: string }>;
  risks: Array<{ title: string; detail: string; watch: string }>;
  watch: Array<{ title: string; detail: string }>;
  questions: string[];
};

export const BUCKETS: Record<string, Bucket> = {
  tech: {
    lens: "The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
    drivers: [
      {
        title: "Product cycle",
        detail:
          "New products and platform transitions create refresh demand and pricing power.",
      },
      {
        title: "Customer expansion",
        detail:
          "Land-and-expand selling raises revenue per existing customer and lengthens the relationship.",
      },
      {
        title: "Operating leverage",
        detail:
          "Incremental revenue can carry high gross margins once development and sales costs are in place.",
      },
    ],
    risks: [
      {
        title: "Technology substitution",
        detail:
          "A faster or cheaper architecture can reset the competitive position quickly.",
        watch: "Product roadmaps, design wins and customer concentration.",
      },
      {
        title: "Customer concentration",
        detail: "A small number of large buyers can swing revenue and pricing.",
        watch: "Top-customer disclosures and order trends.",
      },
      {
        title: "Valuation",
        detail:
          "High expectations leave less room for a growth disappointment.",
        watch: "Forward estimates versus the current multiple.",
      },
      {
        title: "Supply chain",
        detail:
          "Advanced components and manufacturing capacity can constrain shipments.",
        watch: "Lead times, inventory and supplier concentration.",
      },
      {
        title: "Regulation and export controls",
        detail:
          "Cross-border rules can remove addressable market or raise compliance costs.",
        watch: "Export-licence changes and geographic mix.",
      },
    ],
    watch: [
      {
        title: "Growth durability",
        detail: "Compare revenue growth with the prior four quarters.",
      },
      {
        title: "Gross margin",
        detail:
          "A falling gross margin can signal pricing pressure or a richer hardware mix.",
      },
      {
        title: "Customer concentration",
        detail: "Track large-customer disclosures and order momentum.",
      },
    ],
    questions: [
      "How much of growth is volume versus price?",
      "What would a pause in customer spending do to margins?",
      "Is the product advantage durable or one cycle long?",
      "How much of the valuation depends on the next product cycle?",
    ],
  },
  communication: {
    lens: "The key question is whether audience, content or network scale can be monetised without giving away the margin.",
    drivers: [
      {
        title: "Advertising and subscription mix",
        detail:
          "A diversified revenue base reduces dependence on a single budget line.",
      },
      {
        title: "Engagement",
        detail:
          "Time spent and daily users determine the inventory available to sell.",
      },
      {
        title: "Pricing",
        detail:
          "Subscription and ad pricing can expand revenue without proportional cost.",
      },
    ],
    risks: [
      {
        title: "Advertising cycle",
        detail: "Ad budgets fall quickly when confidence weakens.",
        watch: "Ad pricing, impressions and advertiser count.",
      },
      {
        title: "Content and network costs",
        detail:
          "Programming, rights and infrastructure can grow faster than revenue.",
        watch: "Content spend and segment margins.",
      },
      {
        title: "Competition for attention",
        detail:
          "Users can move to another platform with little switching cost.",
        watch: "Engagement and time-spent disclosures.",
      },
      {
        title: "Regulation",
        detail:
          "Privacy, competition and content rules can change distribution or targeting.",
        watch: "Regulatory proceedings and platform rules.",
      },
      {
        title: "Valuation",
        detail: "A premium multiple assumes the monetisation gap closes.",
        watch: "Forward revenue and margin estimates.",
      },
    ],
    watch: [
      {
        title: "Engagement",
        detail: "Daily users and time spent are the leading indicators.",
      },
      {
        title: "Ad pricing",
        detail:
          "Price per ad shows whether demand is keeping up with inventory.",
      },
      {
        title: "Content spend",
        detail: "Watch content and infrastructure costs relative to revenue.",
      },
    ],
    questions: [
      "How much of revenue is advertising versus subscriptions?",
      "Is engagement growing or merely stable?",
      "What does a weaker ad market do to margins?",
      "How defensible is the audience against new formats?",
    ],
  },
  consumer: {
    lens: "The business depends on traffic, basket size and the cost of serving the next customer.",
    drivers: [
      {
        title: "Comparable sales",
        detail:
          "Same-store or same-customer growth shows demand without new locations.",
      },
      {
        title: "Unit growth",
        detail:
          "New stores, products or markets add revenue but also fixed costs.",
      },
      {
        title: "Margin mix",
        detail:
          "Private label, services and digital orders can lift profitability.",
      },
    ],
    risks: [
      {
        title: "Consumer spending",
        detail: "Discretionary budgets are sensitive to confidence and rates.",
        watch: "Comparable sales and transaction counts.",
      },
      {
        title: "Input and labour costs",
        detail: "Food, freight and wages can compress margins.",
        watch: "Gross margin and operating cost per unit.",
      },
      {
        title: "Competition",
        detail: "Price and convenience competition can erode traffic.",
        watch: "Market share and promotional intensity.",
      },
      {
        title: "Inventory",
        detail:
          "Fashion, seasonal and perishable inventory can become markdowns.",
        watch: "Inventory days and markdown cadence.",
      },
      {
        title: "Expansion execution",
        detail: "New stores or markets may not earn the same returns.",
        watch: "New-unit productivity and capex.",
      },
    ],
    watch: [
      {
        title: "Comparable sales",
        detail: "Track traffic versus ticket size separately.",
      },
      {
        title: "Gross margin",
        detail:
          "A mix shift toward lower-margin categories can hide pricing gains.",
      },
      {
        title: "New-unit returns",
        detail:
          "Growth is only valuable if new locations earn their cost of capital.",
      },
    ],
    questions: [
      "Is growth coming from traffic or prices?",
      "How much of the margin is protected by sourcing scale?",
      "What happens to inventory if demand slows?",
      "Do new units earn the same returns as the base?",
    ],
  },
  healthcare: {
    lens: "The franchise depends on clinical evidence, reimbursement and the duration of patent protection.",
    drivers: [
      {
        title: "Volume and adoption",
        detail: "New patients and procedures drive revenue before price.",
      },
      {
        title: "Reimbursement",
        detail:
          "Coverage decisions determine whether a product is accessible and profitable.",
      },
      {
        title: "Pipeline",
        detail: "New indications and products extend the growth runway.",
      },
    ],
    risks: [
      {
        title: "Clinical and regulatory risk",
        detail: "Trials and approvals can fail or be delayed.",
        watch: "Trial readouts and regulatory decisions.",
      },
      {
        title: "Reimbursement and pricing",
        detail: "Coverage and drug-pricing rules can cap revenue per patient.",
        watch: "Net price and payer mix.",
      },
      {
        title: "Competition",
        detail: "New therapies can take share or force price cuts.",
        watch: "Competitor launches and prescription trends.",
      },
      {
        title: "Patent expirations",
        detail: "Loss of exclusivity can reset revenue quickly.",
        watch: "Patent-cliff timing and generic entry.",
      },
      {
        title: "Manufacturing and supply",
        detail: "Capacity or quality issues can limit product availability.",
        watch: "Supply disclosures and capex.",
      },
    ],
    watch: [
      {
        title: "Volume growth",
        detail: "Separate patient growth from price and mix.",
      },
      {
        title: "Reimbursement",
        detail: "Coverage decisions are a leading indicator for adoption.",
      },
      {
        title: "Pipeline readouts",
        detail: "Late-stage data can change the growth runway.",
      },
    ],
    questions: [
      "How much of growth is volume versus price?",
      "When do the largest patents expire?",
      "What does a negative reimbursement decision cost?",
      "How durable is the clinical advantage?",
    ],
  },
  financial: {
    lens: "The earnings cycle is driven by net interest income, credit costs, capital markets activity and capital returns.",
    drivers: [
      {
        title: "Net interest income",
        detail:
          "Loan and securities yields less funding costs are the core revenue line.",
      },
      {
        title: "Fee income",
        detail:
          "Advisory, asset management and trading diversify the revenue base.",
      },
      {
        title: "Capital returns",
        detail:
          "Buybacks and dividends can grow per-share value when capital is abundant.",
      },
    ],
    risks: [
      {
        title: "Credit cycle",
        detail:
          "Loan losses rise in a downturn and can overwhelm revenue growth.",
        watch: "Provisions, charge-offs and non-performing loans.",
      },
      {
        title: "Interest rates",
        detail:
          "Rate changes affect net interest income and deposit repricing.",
        watch: "Net interest income guidance and deposit betas.",
      },
      {
        title: "Regulation",
        detail: "Capital and liquidity rules influence returns and buybacks.",
        watch: "Stress tests and CET1 requirements.",
      },
      {
        title: "Capital markets cyclicality",
        detail: "Advisory and trading revenue can fall quickly.",
        watch: "Investment banking fees and trading revenue.",
      },
      {
        title: "Competition",
        detail: "Deposit and loan pricing competition can compress spreads.",
        watch: "Loan and deposit growth relative to peers.",
      },
    ],
    watch: [
      {
        title: "Net interest income",
        detail: "The largest revenue line and the most rate-sensitive.",
      },
      {
        title: "Credit costs",
        detail: "Provisioning is the main swing factor in a downturn.",
      },
      {
        title: "Capital returns",
        detail: "Buybacks depend on capital ratios and stress-test results.",
      },
    ],
    questions: [
      "How much of net interest income is rate-sensitive?",
      "Is credit provisioning normalising or deteriorating?",
      "What does regulation do to buybacks?",
      "How sustainable is the current return on equity?",
    ],
  },
  industrial: {
    lens: "Revenue is tied to capital spending, backlogs and the ability to pass through input costs.",
    drivers: [
      {
        title: "Backlog",
        detail: "Orders already booked provide visibility into future revenue.",
      },
      {
        title: "Aftermarket and services",
        detail:
          "Recurring service revenue can be more profitable than equipment.",
      },
      {
        title: "Price and productivity",
        detail:
          "Pricing actions and cost programmes protect margins through cycles.",
      },
    ],
    risks: [
      {
        title: "Capital-spending cycle",
        detail: "Industrial demand falls when customers delay projects.",
        watch: "Order trends and backlog conversion.",
      },
      {
        title: "Input costs",
        detail: "Steel, freight and labour can outrun price increases.",
        watch: "Gross margin and price-cost spread.",
      },
      {
        title: "Execution",
        detail: "Project delays and cost overruns can hit margins.",
        watch: "Segment margins and project disclosures.",
      },
      {
        title: "M&A integration",
        detail: "Acquisitions can dilute returns if synergies disappoint.",
        watch: "Organic growth and acquired-margin trends.",
      },
      {
        title: "Valuation",
        detail: "Cyclical earnings can make trough multiples look cheap.",
        watch: "Mid-cycle margins and order momentum.",
      },
    ],
    watch: [
      {
        title: "Backlog",
        detail: "Bookings and conversion show whether demand is holding.",
      },
      {
        title: "Price-cost spread",
        detail: "Watch whether pricing keeps up with inputs.",
      },
      {
        title: "Segment margin",
        detail: "Mix and execution can move margins before revenue does.",
      },
    ],
    questions: [
      "How much revenue is recurring versus project-based?",
      "Is the backlog growing or being consumed?",
      "Can pricing hold if input costs rise?",
      "What does a trough-cycle margin look like?",
    ],
  },
  energy: {
    lens: "Cash flow is a function of commodity prices, production volumes and capital discipline.",
    drivers: [
      {
        title: "Commodity prices",
        detail:
          "Oil, gas and power prices flow quickly into revenue and cash flow.",
      },
      {
        title: "Production growth",
        detail:
          "Volumes from existing and new projects determine the revenue base.",
      },
      {
        title: "Capital discipline",
        detail: "Lower reinvestment can lift free cash flow and returns.",
      },
    ],
    risks: [
      {
        title: "Commodity prices",
        detail: "A price decline can cut revenue and cash flow sharply.",
        watch: "Realised prices and hedging.",
      },
      {
        title: "Reserve and project risk",
        detail: "Drilling and project returns depend on geology and execution.",
        watch: "Production guidance and project updates.",
      },
      {
        title: "Regulation",
        detail:
          "Environmental and permitting rules can raise costs or block projects.",
        watch: "Permits, emissions rules and litigation.",
      },
      {
        title: "Leverage",
        detail: "Debt can become a problem when prices fall.",
        watch: "Net debt/EBITDA and maturity schedule.",
      },
      {
        title: "Energy transition",
        detail: "Long-run demand can shift away from hydrocarbons.",
        watch: "Capital allocation and low-carbon investment.",
      },
    ],
    watch: [
      {
        title: "Realised prices",
        detail: "The gap to benchmark prices shows hedging and mix effects.",
      },
      {
        title: "Production",
        detail: "Volume delivery is the base for cash flow.",
      },
      {
        title: "Capex discipline",
        detail: "Reinvestment and buybacks compete for the same cash.",
      },
    ],
    questions: [
      "What price is needed to cover capex and the dividend?",
      "How much production is hedged?",
      "What does a 20% commodity decline do to cash flow?",
      "Is growth being funded with debt or internal cash?",
    ],
  },
  utilities: {
    lens: "Returns depend on regulated rates, capital investment and the cost of financing the asset base.",
    drivers: [
      {
        title: "Rate base growth",
        detail:
          "Approved capital investment earns a regulated return over time.",
      },
      {
        title: "Load growth",
        detail: "Data centers and electrification can raise long-run demand.",
      },
      {
        title: "Cost recovery",
        detail: "Rate cases determine whether higher costs are passed through.",
      },
    ],
    risks: [
      {
        title: "Regulatory outcomes",
        detail: "Rate cases can disallow costs or reduce allowed returns.",
        watch: "Rate-case filings and commission decisions.",
      },
      {
        title: "Interest rates",
        detail: "Higher rates raise financing costs and pressure valuations.",
        watch: "Debt maturities and cost of new debt.",
      },
      {
        title: "Capital execution",
        detail: "Large projects can overshoot budgets or schedules.",
        watch: "Capex guidance and project milestones.",
      },
      {
        title: "Weather and demand",
        detail: "Weather affects volumes and revenue.",
        watch: "Load growth and weather-normalised sales.",
      },
      {
        title: "Commodity exposure",
        detail: "Fuel costs can be volatile before they are recovered.",
        watch: "Fuel-cost recovery and hedging.",
      },
    ],
    watch: [
      {
        title: "Rate base",
        detail: "Approved capital investment is the earnings base.",
      },
      {
        title: "Rate-case outcomes",
        detail: "Allowed returns and cost recovery drive the model.",
      },
      {
        title: "Financing costs",
        detail: "Higher rates can pressure both earnings and the multiple.",
      },
    ],
    questions: [
      "How much of the capex plan is already approved?",
      "What happens if the next rate case disappoints?",
      "How sensitive is the dividend to financing costs?",
      "Is load growth real or a forecast?",
    ],
  },
  materials: {
    lens: "Revenue and margins move with commodity prices, volumes and the cost of energy and feedstock.",
    drivers: [
      {
        title: "Volume",
        detail: "Shipments show underlying industrial demand.",
      },
      {
        title: "Price and mix",
        detail: "Product mix and pricing determine margin per ton.",
      },
      {
        title: "Cost position",
        detail: "Low-cost assets can earn through the cycle.",
      },
    ],
    risks: [
      {
        title: "Commodity cycle",
        detail: "Prices can fall faster than costs.",
        watch: "Realised prices and inventory.",
      },
      {
        title: "Input costs",
        detail: "Energy and feedstock can compress spreads.",
        watch: "Unit cost and price-cost spread.",
      },
      {
        title: "Environmental regulation",
        detail: "Permits and emissions rules can raise capital needs.",
        watch: "Permits and remediation liabilities.",
      },
      {
        title: "Capital intensity",
        detail: "Maintenance and growth capex can absorb cash flow.",
        watch: "Capex and free cash flow.",
      },
      {
        title: "Demand cyclicality",
        detail: "Construction and manufacturing demand are cyclical.",
        watch: "End-market volumes and order trends.",
      },
    ],
    watch: [
      {
        title: "Price-cost spread",
        detail: "The cleanest measure of cyclical profitability.",
      },
      { title: "Volumes", detail: "Shipments show whether demand is holding." },
      { title: "Capex", detail: "Maintenance needs can limit free cash flow." },
    ],
    questions: [
      "What is the mid-cycle margin?",
      "How much of the cost base is fixed?",
      "Does the dividend survive a downcycle?",
      "What environmental liabilities are off the income statement?",
    ],
  },
  realestate: {
    lens: "Cash flow depends on occupancy, rents, tenant quality and the cost of refinancing the asset base.",
    drivers: [
      {
        title: "Occupancy",
        detail: "Leased space is the base for rent revenue.",
      },
      {
        title: "Rent spreads",
        detail: "Renewals and new leases reset rents toward market.",
      },
      {
        title: "Development pipeline",
        detail: "New assets can add cash flow when leased.",
      },
    ],
    risks: [
      {
        title: "Interest rates",
        detail: "Higher rates raise refinancing costs and cap rates.",
        watch: "Debt maturities and weighted average cost of debt.",
      },
      {
        title: "Tenant concentration",
        detail: "A large tenant can leave and reset occupancy.",
        watch: "Top-tenant disclosure and lease expirations.",
      },
      {
        title: "Development risk",
        detail: "Projects can be delayed or lease below underwriting.",
        watch: "Pipeline yields and pre-leasing.",
      },
      {
        title: "Occupancy",
        detail: "Vacancy reduces cash flow and pricing power.",
        watch: "Same-store occupancy and leasing spreads.",
      },
      {
        title: "Valuation",
        detail: "REIT multiples are sensitive to rates and growth.",
        watch: "Price/FFO and cap-rate comparisons.",
      },
    ],
    watch: [
      {
        title: "Leasing spreads",
        detail: "Shows whether rents are rising or rolling down.",
      },
      { title: "Occupancy", detail: "The leading indicator for cash flow." },
      {
        title: "Refinancing",
        detail: "Debt maturities determine interest-cost pressure.",
      },
    ],
    questions: [
      "How much debt matures in the next two years?",
      "Is occupancy real or supported by concessions?",
      "What development yield is underwritten?",
      "How concentrated is revenue by tenant?",
    ],
  },
  ai: {
    lens: "Growth is tied to AI data-center spending, and the key question is how much of that spending becomes durable recurring demand.",
    drivers: [
      {
        title: "AI cluster build-out",
        detail:
          "Compute, networking, optics and power equipment all scale with cluster size.",
      },
      {
        title: "Customer expansion",
        detail:
          "Hyperscalers and neoclouds are adding capacity faster than traditional IT budgets.",
      },
      {
        title: "Product content",
        detail:
          "More content per system can grow revenue faster than the underlying unit market.",
      },
    ],
    risks: [
      {
        title: "Customer concentration",
        detail: "A handful of AI buyers can dominate revenue.",
        watch: "Customer disclosures and order trends.",
      },
      {
        title: "Capex cycle",
        detail: "AI spending can pause if returns disappoint.",
        watch: "Hyperscaler capex guidance and backlog.",
      },
      {
        title: "Supply chain",
        detail: "Optics, power and advanced packaging can be constrained.",
        watch: "Lead times and supplier concentration.",
      },
      {
        title: "Competition",
        detail: "New entrants can pressure pricing as capacity catches up.",
        watch: "Design wins and gross margin.",
      },
      {
        title: "Financing and dilution",
        detail: "Growth may require capital in a rising-rate environment.",
        watch: "Cash burn, debt and share count.",
      },
    ],
    watch: [
      {
        title: "AI order momentum",
        detail: "Bookings and backlog are the leading indicator.",
      },
      {
        title: "Gross margin",
        detail: "Mix and pricing determine whether growth creates value.",
      },
      {
        title: "Cash burn",
        detail: "Growth companies must eventually fund themselves.",
      },
    ],
    questions: [
      "How concentrated is revenue among AI customers?",
      "What happens if hyperscaler capex growth slows?",
      "Is the product differentiated or capacity-constrained?",
      "How much dilution is priced into the model?",
    ],
  },
  semis: {
    lens: "The cycle is driven by inventory, utilisation and the next node or packaging transition.",
    drivers: [
      {
        title: "Inventory cycle",
        detail: "Inventory restocking and digestion drive near-term orders.",
      },
      {
        title: "Node and packaging transitions",
        detail: "New technology raises content per system.",
      },
      {
        title: "Customer design wins",
        detail: "Design wins lock in revenue for multiple product generations.",
      },
    ],
    risks: [
      {
        title: "Semiconductor cycle",
        detail: "Inventory corrections can cut revenue quickly.",
        watch: "Inventory days and utilisation.",
      },
      {
        title: "Customer concentration",
        detail: "A few customers can dominate revenue.",
        watch: "Top-customer disclosures.",
      },
      {
        title: "Export controls",
        detail: "Cross-border rules can remove market access.",
        watch: "Geographic mix and licence changes.",
      },
      {
        title: "Capital intensity",
        detail: "New capacity can pressure returns if demand slows.",
        watch: "Capex and depreciation.",
      },
      {
        title: "Pricing",
        detail: "Capacity additions can turn scarcity into oversupply.",
        watch: "Average selling prices and gross margin.",
      },
    ],
    watch: [
      {
        title: "Inventory",
        detail: "The cycle turns before reported revenue does.",
      },
      {
        title: "Utilisation",
        detail: "Utilisation drives incremental margins.",
      },
      {
        title: "Design wins",
        detail: "The pipeline determines the next upcycle.",
      },
    ],
    questions: [
      "Where are we in the inventory cycle?",
      "How concentrated is revenue by customer?",
      "What does the next node add to content per system?",
      "How much capex is committed?",
    ],
  },
  software: {
    lens: "The model depends on net revenue retention, sales efficiency and the cost of acquiring the next customer.",
    drivers: [
      {
        title: "Net revenue retention",
        detail: "Expansion within existing customers compounds revenue.",
      },
      {
        title: "New customer adds",
        detail: "New logos broaden the base and fund future expansion.",
      },
      {
        title: "Operating leverage",
        detail: "Scale should improve margins as sales and R&D mature.",
      },
    ],
    risks: [
      {
        title: "Competition",
        detail: "Feature parity and bundling can pressure pricing.",
        watch: "Win rates and average contract value.",
      },
      {
        title: "Retention",
        detail: "Churn or downselling can offset new sales.",
        watch: "Net revenue retention and renewal rates.",
      },
      {
        title: "AI disruption",
        detail: "AI-native tools can change the software stack.",
        watch: "Product adoption and competitive launches.",
      },
      {
        title: "Sales efficiency",
        detail: "Growth can become expensive if payback lengthens.",
        watch: "CAC payback and sales productivity.",
      },
      {
        title: "Valuation",
        detail: "High multiples assume durable growth.",
        watch: "Forward ARR and margin estimates.",
      },
    ],
    watch: [
      {
        title: "Net retention",
        detail: "The single most important SaaS metric.",
      },
      {
        title: "Sales efficiency",
        detail: "Payback shows whether growth creates value.",
      },
      {
        title: "Free cash flow",
        detail: "The bridge from growth to profitability.",
      },
    ],
    questions: [
      "How much growth comes from existing customers?",
      "Is AI a tailwind or a substitute?",
      "When does the business reach durable free cash flow?",
      "How expensive is the next dollar of growth?",
    ],
  },
  quantum: {
    lens: "The investment case is a long-duration option on a technology that has not yet reached commercial scale.",
    drivers: [
      {
        title: "Technical milestones",
        detail:
          "Qubit count, fidelity and error correction determine progress.",
      },
      {
        title: "Government and enterprise funding",
        detail: "Contracts and grants fund development before revenue scales.",
      },
      {
        title: "Cloud access",
        detail:
          "Cloud platforms can broaden access without full hardware ownership.",
      },
    ],
    risks: [
      {
        title: "Commercialisation",
        detail: "Useful quantum advantage may be years away.",
        watch: "Technical milestones and customer pilots.",
      },
      {
        title: "Cash burn",
        detail: "Development is expensive before revenue scales.",
        watch: "Cash runway and spending.",
      },
      {
        title: "Dilution",
        detail: "Equity issuance may fund the gap.",
        watch: "Share count and ATM activity.",
      },
      {
        title: "Competition",
        detail:
          "Large technology companies and startups are pursuing multiple architectures.",
        watch: "Architecture benchmarks and partnerships.",
      },
      {
        title: "Valuation",
        detail: "Prices can discount a future that is far from certain.",
        watch: "Cash, backlog and milestone progress.",
      },
    ],
    watch: [
      {
        title: "Technical progress",
        detail: "Milestones matter more than near-term revenue.",
      },
      {
        title: "Cash runway",
        detail: "The funding gap determines dilution risk.",
      },
      {
        title: "Commercial pilots",
        detail: "Pilots are the first evidence of demand.",
      },
    ],
    questions: [
      "What technical milestone would change the story?",
      "How long is the cash runway?",
      "Who is the first paying customer?",
      "How much dilution is already assumed?",
    ],
  },
  fintech: {
    lens: "The economics depend on credit losses, funding costs, take rates and the ability to grow without buying customers.",
    drivers: [
      {
        title: "Volume growth",
        detail: "Transactions and loans scale revenue.",
      },
      {
        title: "Take rate",
        detail: "Pricing per transaction determines revenue per unit.",
      },
      {
        title: "Funding and credit",
        detail: "Cheaper funding and stable credit improve margins.",
      },
    ],
    risks: [
      {
        title: "Credit losses",
        detail: "A weaker consumer can raise charge-offs.",
        watch: "Delinquencies and provision trends.",
      },
      {
        title: "Funding costs",
        detail: "Higher rates can compress spreads.",
        watch: "Cost of funds and deposit mix.",
      },
      {
        title: "Regulation",
        detail: "Banking, lending and crypto rules can change the model.",
        watch: "Licensing and regulatory actions.",
      },
      {
        title: "Competition",
        detail: "Banks and other platforms can match features.",
        watch: "Take rate and customer acquisition cost.",
      },
      {
        title: "Valuation",
        detail: "Growth multiples can compress if credit normalises.",
        watch: "Forward revenue and credit guidance.",
      },
    ],
    watch: [
      { title: "Credit quality", detail: "Delinquencies lead charge-offs." },
      {
        title: "Take rate",
        detail: "Revenue per transaction is the unit economics.",
      },
      {
        title: "Funding",
        detail: "The cost and stability of funding drive margins.",
      },
    ],
    questions: [
      "What happens to losses in a recession?",
      "How much growth is purchased with marketing?",
      "Is funding diversified?",
      "What regulatory change would hurt most?",
    ],
  },
  biotech: {
    lens: "The value sits in a small number of clinical programmes, so trial data and cash runway matter more than near-term revenue.",
    drivers: [
      {
        title: "Clinical data",
        detail: "Efficacy and safety readouts determine the programme's value.",
      },
      {
        title: "Regulatory path",
        detail: "Approval and label scope decide the commercial opportunity.",
      },
      {
        title: "Partnerships",
        detail: "Collaborations can fund development and validate the science.",
      },
    ],
    risks: [
      {
        title: "Trial failure",
        detail: "A negative readout can remove most of the equity value.",
        watch: "Trial endpoints and readout timing.",
      },
      {
        title: "Cash runway",
        detail: "Development costs can force financing.",
        watch: "Cash and quarterly burn.",
      },
      {
        title: "Reimbursement",
        detail: "Payer coverage determines commercial uptake.",
        watch: "Pricing and payer decisions.",
      },
      {
        title: "Competition",
        detail: "A better therapy can arrive first or be priced lower.",
        watch: "Competitor data and launch timing.",
      },
      {
        title: "Dilution",
        detail: "Equity raises fund trials and manufacturing.",
        watch: "Share count and financing terms.",
      },
    ],
    watch: [
      {
        title: "Cash runway",
        detail: "The number of quarters funded is a hard constraint.",
      },
      { title: "Trial readouts", detail: "Binary events drive the equity." },
      {
        title: "Partner validation",
        detail: "A credible partner can de-risk the programme.",
      },
    ],
    questions: [
      "How many quarters of cash remain?",
      "What is the next binary readout?",
      "How large is the addressable market?",
      "What does a failed trial leave behind?",
    ],
  },
  space: {
    lens: "The business depends on contract wins, launch execution and the path from backlog to cash flow.",
    drivers: [
      { title: "Backlog", detail: "Contracted revenue provides visibility." },
      {
        title: "Launch cadence",
        detail: "More launches spread fixed costs and prove reliability.",
      },
      {
        title: "Government budgets",
        detail: "Defense and space spending fund the addressable market.",
      },
    ],
    risks: [
      {
        title: "Contract concentration",
        detail:
          "A few government or commercial customers can dominate revenue.",
        watch: "Backlog and customer mix.",
      },
      {
        title: "Execution",
        detail: "Launch or satellite failures can delay revenue.",
        watch: "Mission success and schedule.",
      },
      {
        title: "Cash burn",
        detail: "Development and manufacturing consume cash before scale.",
        watch: "Cash runway and capex.",
      },
      {
        title: "Regulation",
        detail: "Licences and spectrum rules can constrain operations.",
        watch: "FCC, FAA and defense approvals.",
      },
      {
        title: "Dilution",
        detail: "Capital raises may fund the gap to profitability.",
        watch: "Share count and financing.",
      },
    ],
    watch: [
      {
        title: "Backlog",
        detail: "Contracted revenue is the base for forecasts.",
      },
      {
        title: "Mission cadence",
        detail: "Reliability and cadence determine customer confidence.",
      },
      { title: "Cash runway", detail: "The funding gap is a key risk." },
    ],
    questions: [
      "How much backlog converts in the next year?",
      "What does a launch failure do to the schedule?",
      "How dependent is the business on one agency?",
      "When does operating cash flow turn positive?",
    ],
  },
  nuclear: {
    lens: "The opportunity is large but early; permits, financing and construction execution determine who captures it.",
    drivers: [
      {
        title: "Power demand",
        detail:
          "Data centers and electrification are increasing long-run electricity demand.",
      },
      {
        title: "Policy support",
        detail:
          "Tax credits and government programmes can improve project economics.",
      },
      {
        title: "Contracted capacity",
        detail: "Long-term agreements can underwrite new build.",
      },
    ],
    risks: [
      {
        title: "Permitting",
        detail: "Licensing can take years and change project economics.",
        watch: "Regulatory milestones and dockets.",
      },
      {
        title: "Construction execution",
        detail: "Cost and schedule overruns are common in large projects.",
        watch: "Capex guidance and project updates.",
      },
      {
        title: "Financing",
        detail: "Capital intensity can require debt and equity.",
        watch: "Funding commitments and dilution.",
      },
      {
        title: "Commodity prices",
        detail: "Uranium and power prices affect project value.",
        watch: "Contract prices and spot exposure.",
      },
      {
        title: "Technology risk",
        detail: "New reactor designs have limited operating history.",
        watch: "Design certification and first-of-a-kind costs.",
      },
    ],
    watch: [
      { title: "Permits", detail: "Licensing is the gate to revenue." },
      {
        title: "Contracted offtake",
        detail: "Long-term agreements support project finance.",
      },
      { title: "Capex", detail: "Construction cost is the largest variable." },
    ],
    questions: [
      "Which permits are still outstanding?",
      "How much of the project is contracted?",
      "What is the cost per megawatt?",
      "How much dilution is required?",
    ],
  },
  brands: {
    lens: "The model depends on unit growth, brand heat and whether new customers return.",
    drivers: [
      {
        title: "Unit growth",
        detail: "New stores, products or users expand the revenue base.",
      },
      {
        title: "Brand pricing",
        detail: "Pricing power shows whether the brand is strengthening.",
      },
      {
        title: "Repeat purchase",
        detail: "Retention determines the lifetime value of a customer.",
      },
    ],
    risks: [
      {
        title: "Consumer trends",
        detail: "Tastes and fashions can change quickly.",
        watch: "Comparable sales and repeat rates.",
      },
      {
        title: "Competition",
        detail: "New brands can take share with lower prices.",
        watch: "Market share and promotional activity.",
      },
      {
        title: "Input costs",
        detail: "Ingredients, freight and labour can pressure margins.",
        watch: "Gross margin and price increases.",
      },
      {
        title: "Expansion execution",
        detail: "New stores or products may not earn the same returns.",
        watch: "New-unit productivity and payback.",
      },
      {
        title: "Valuation",
        detail: "High-growth brands can de-rate quickly.",
        watch: "Forward growth versus multiple.",
      },
    ],
    watch: [
      { title: "Comparable sales", detail: "Shows demand without new units." },
      {
        title: "Repeat purchase",
        detail: "Retention is the proof of brand strength.",
      },
      { title: "Unit economics", detail: "New units must earn their capital." },
    ],
    questions: [
      "Is growth driven by new units or same-store demand?",
      "How loyal is the customer base?",
      "What happens if input costs rise?",
      "How much of the valuation is brand premium?",
    ],
  },
  cyclical: {
    lens: "The cycle drives near-term results, so the important question is what the business earns through a full cycle.",
    drivers: [
      {
        title: "Backlog and orders",
        detail: "Order momentum shows where the cycle is heading.",
      },
      {
        title: "Price and productivity",
        detail: "Pricing and cost programmes protect margins.",
      },
      {
        title: "End-market recovery",
        detail:
          "Construction, manufacturing and infrastructure spending drive demand.",
      },
    ],
    risks: [
      {
        title: "Cycle",
        detail: "Demand can fall faster than costs.",
        watch: "Orders, backlog and utilisation.",
      },
      {
        title: "Input costs",
        detail: "Materials and labour can outrun price.",
        watch: "Price-cost spread.",
      },
      {
        title: "Execution",
        detail: "Project and acquisition execution can hit margins.",
        watch: "Segment margins and project updates.",
      },
      {
        title: "Leverage",
        detail: "Debt can constrain the downturn strategy.",
        watch: "Net debt/EBITDA and maturities.",
      },
      {
        title: "Valuation",
        detail: "Peak earnings can make multiples look low.",
        watch: "Mid-cycle margins.",
      },
    ],
    watch: [
      { title: "Orders", detail: "The leading indicator for the cycle." },
      { title: "Price-cost", detail: "Protects margins through inflation." },
      {
        title: "Balance sheet",
        detail: "Leverage determines downturn resilience.",
      },
    ],
    questions: [
      "What is mid-cycle earnings power?",
      "How much backlog is firm versus optional?",
      "Can the balance sheet handle a downturn?",
      "Is growth organic or acquired?",
    ],
  },
  specialty: {
    lens: "Underwriting discipline and reserve adequacy matter more than premium growth.",
    drivers: [
      {
        title: "Premium growth",
        detail: "New business and rate increases expand the revenue base.",
      },
      {
        title: "Underwriting margin",
        detail: "Combined ratio determines whether growth is profitable.",
      },
      {
        title: "Reserve development",
        detail: "Favourable reserves can release earnings.",
      },
    ],
    risks: [
      {
        title: "Catastrophe losses",
        detail: "A single event can dominate the year.",
        watch: "Catastrophe exposure and reinsurance.",
      },
      {
        title: "Reserve adequacy",
        detail: "Under-reserving can surface years later.",
        watch: "Prior-year reserve development.",
      },
      {
        title: "Pricing cycle",
        detail: "Soft markets can erode underwriting margins.",
        watch: "Rate change and retention.",
      },
      {
        title: "Investment income",
        detail: "Rates and asset mix drive investment returns.",
        watch: "Book yield and duration.",
      },
      {
        title: "Valuation",
        detail: "Premium multiples assume disciplined growth.",
        watch: "Price/book and ROE.",
      },
    ],
    watch: [
      {
        title: "Combined ratio",
        detail: "The cleanest measure of underwriting profitability.",
      },
      {
        title: "Reserve development",
        detail: "Releases or charges reveal reserve quality.",
      },
      {
        title: "Rate",
        detail: "Pricing versus loss trends determines margin.",
      },
    ],
    questions: [
      "What is the catastrophe loss budget?",
      "Are reserves redundant or deficient?",
      "How much growth is rate versus exposure?",
      "What does a soft market do to returns?",
    ],
  },
  insurance: {
    lens: "Underwriting discipline, reserve adequacy and investment income decide the return, not premium volume on its own.",
    drivers: [
      {
        title: "Rate and exposure",
        detail:
          "Pricing and insured exposure determine whether the premium base grows profitably.",
      },
      {
        title: "Underwriting margin",
        detail:
          "The combined ratio decides how much of each premium dollar survives claims and expenses.",
      },
      {
        title: "Investment income",
        detail:
          "The float earns a yield that becomes more valuable when short rates are high.",
      },
    ],
    risks: [
      {
        title: "Catastrophe and loss trends",
        detail:
          "Severe weather, social inflation and legal verdicts can overwhelm pricing.",
        watch: "Combined ratio, catastrophe load and prior-year development.",
      },
      {
        title: "Soft pricing cycle",
        detail:
          "Capital entering the market can turn a hard market into a soft one quickly.",
        watch: "Rate change, retention and new-business competition.",
      },
      {
        title: "Reserve adequacy",
        detail:
          "Reserves set today can prove insufficient several years later.",
        watch: "Prior-year development and loss picks.",
      },
      {
        title: "Regulation",
        detail:
          "Solvency, pricing and coverage rules can change the economics of a line.",
        watch: "Regulatory actions and line-of-business mix.",
      },
      {
        title: "Valuation",
        detail:
          "Insurers are priced on book value and normalized returns, which move with the cycle.",
        watch: "Price/book, ROE and reserve development.",
      },
    ],
    watch: [
      {
        title: "Combined ratio",
        detail:
          "The cleanest measure of underwriting profitability after claims and expenses.",
      },
      {
        title: "Reserve development",
        detail:
          "Releases or charges reveal whether reserves were set conservatively.",
      },
      {
        title: "Rate",
        detail:
          "Pricing versus loss trends determines whether growth adds or destroys value.",
      },
    ],
    questions: [
      "What is the catastrophe loss budget?",
      "Are reserves redundant or deficient?",
      "How much of growth is rate versus exposure?",
      "What does a soft market do to returns?",
    ],
  },
  brokerage: {
    lens: "The economics are fee-based, so organic growth, client retention and the price paid for acquisitions matter more than premium volume.",
    drivers: [
      {
        title: "Organic growth",
        detail:
          "New clients and increased coverage at existing clients expand commissions without deal spending.",
      },
      {
        title: "Retention and pricing",
        detail:
          "Client retention and commission rates determine how much of the base survives each renewal.",
      },
      {
        title: "Acquired growth",
        detail:
          "Agency acquisitions add clients and specialty capabilities, but only create value if the price is sensible.",
      },
    ],
    risks: [
      {
        title: "Soft commercial rates",
        detail:
          "Falling premiums reduce commission income even when client counts hold.",
        watch: "Commercial rate change and organic growth.",
      },
      {
        title: "Acquisition integration",
        detail:
          "Deals can dilute margins if retention slips or synergy targets are missed.",
        watch: "Acquisition multiples, retention and margin.",
      },
      {
        title: "Disintermediation",
        detail:
          "Digital placement and direct models can take share in simpler risks.",
        watch: "Client retention and new-business mix.",
      },
      {
        title: "Regulation",
        detail:
          "Commission disclosure and broker conduct rules can change the model.",
        watch: "Regulatory actions and client concentration.",
      },
      {
        title: "Valuation",
        detail:
          "Brokers trade on organic growth and margin, so a slowdown compresses the multiple quickly.",
        watch: "Organic growth, margin and the acquisition pipeline.",
      },
    ],
    watch: [
      {
        title: "Organic growth",
        detail:
          "Excluding acquisitions and rate, organic growth shows whether the franchise is winning share.",
      },
      {
        title: "Retention",
        detail:
          "Client retention is the cleanest evidence that the advisory relationship is durable.",
      },
      {
        title: "Margin",
        detail:
          "Operating margin shows whether acquired revenue is being integrated efficiently.",
      },
    ],
    questions: [
      "How much of growth is organic versus acquired?",
      "What happens to commissions if commercial rates soften?",
      "Are acquisitions adding margin or just revenue?",
      "How much of the multiple depends on continued deal-making?",
    ],
  },
  capitalmarkets: {
    lens: "Earnings depend on assets under management, fundraising, fee rates and the carry realised on prior vintages.",
    drivers: [
      {
        title: "Assets under management",
        detail:
          "Market appreciation and net inflows compound the fee base.",
      },
      {
        title: "Fundraising",
        detail:
          "New commitments convert into management fees and future carry.",
      },
      {
        title: "Realisation",
        detail:
          "Exit activity turns unrealised gains into performance fees and cash.",
      },
    ],
    risks: [
      {
        title: "Capital markets",
        detail:
          "A closed IPO or M&A market delays exits and carry.",
        watch: "Exit activity, realisations and carry pipeline.",
      },
      {
        title: "Fundraising cycle",
        detail:
          "Institutions can slow commitments after a poor vintage.",
        watch: "Net inflows, dry powder and fundraising targets.",
      },
      {
        title: "Fee compression",
        detail:
          "Retail and institutional competition can pressure management fees.",
        watch: "Fee rate and product mix.",
      },
      {
        title: "Leverage and guarantees",
        detail:
          "Insurance balance sheets and fund-level leverage add cyclicality.",
        watch: "Debt, guarantees and capital intensity.",
      },
      {
        title: "Valuation",
        detail:
          "Managers are priced on fee-related earnings and carry, which are cyclical.",
        watch: "FRE multiple and carried-interest assumptions.",
      },
    ],
    watch: [
      {
        title: "Net inflows",
        detail:
          "Organic fundraising is the cleanest growth signal.",
      },
      {
        title: "Fee-related earnings",
        detail:
          "FRE isolates the recurring management-fee business from carry.",
      },
      {
        title: "Exit pipeline",
        detail:
          "Realisation activity determines when carry is recognised.",
      },
    ],
    questions: [
      "How much of earnings is recurring management fee?",
      "What vintage is the carry pipeline?",
      "How sensitive is fundraising to market levels?",
      "Is the balance sheet being used to manufacture growth?",
    ],
  },
  marketinfra: {
    lens: "Revenue depends on activity, client assets and the fee or subscription earned on each interaction.",
    drivers: [
      {
        title: "Volumes and activity",
        detail:
          "Trading, issuance or transaction volumes drive the fee pool.",
      },
      {
        title: "Take rate and pricing",
        detail:
          "The fee per transaction or subscription determines revenue per unit of activity.",
      },
      {
        title: "Recurring data and client assets",
        detail:
          "Subscriptions, benchmarks and client balances add revenue that is less tied to daily volumes.",
      },
    ],
    risks: [
      {
        title: "Market activity",
        detail:
          "A quiet market reduces volumes and the fees earned on them.",
        watch: "Volumes, issuance and client activity.",
      },
      {
        title: "Fee compression",
        detail:
          "Competition and technology can reduce the fee per transaction.",
        watch: "Take rate and revenue per unit.",
      },
      {
        title: "Regulation",
        detail:
          "Market-structure, conduct and crypto rules can change the model.",
        watch: "Regulatory actions and licensing.",
      },
      {
        title: "Competition",
        detail:
          "New venues and data providers can take share or undercut pricing.",
        watch: "Market share and product adoption.",
      },
      {
        title: "Valuation",
        detail:
          "Activity-linked revenue is cyclical, so multiples move with volumes.",
        watch: "Forward activity and recurring-revenue mix.",
      },
    ],
    watch: [
      {
        title: "Volumes",
        detail:
          "Activity is the first driver of transaction revenue.",
      },
      {
        title: "Take rate",
        detail:
          "Revenue per unit shows whether pricing is holding.",
      },
      {
        title: "Recurring mix",
        detail:
          "Subscriptions and data revenue reduce dependence on volumes.",
      },
    ],
    questions: [
      "How much of revenue is recurring versus activity-linked?",
      "What happens to fees if volumes fall?",
      "Is pricing holding as competition increases?",
      "How much of the multiple depends on market activity?",
    ],
  },
  payments: {
    lens: "The economics depend on payment volume, take rate, credit losses and the cost of funding the balance sheet.",
    drivers: [
      {
        title: "Payment volume",
        detail:
          "Consumer and commercial spending drives transaction revenue.",
      },
      {
        title: "Take rate and mix",
        detail:
          "Pricing per transaction and the mix of value-added services determine revenue per dollar processed.",
      },
      {
        title: "Credit and funding",
        detail:
          "Stable credit and cheaper funding expand the spread on lending products.",
      },
    ],
    risks: [
      {
        title: "Credit losses",
        detail:
          "A weaker consumer can raise charge-offs and provisions.",
        watch: "Delinquencies, charge-offs and provision guidance.",
      },
      {
        title: "Competition and take rate",
        detail:
          "Banks, processors and fintechs can compress pricing.",
        watch: "Take rate and volume growth.",
      },
      {
        title: "Regulation",
        detail:
          "Interchange, crypto and consumer-lending rules can change the model.",
        watch: "Regulatory actions and licensing.",
      },
      {
        title: "Funding costs",
        detail:
          "Higher rates can compress spreads on lending and BNPL products.",
        watch: "Cost of funds and deposit mix.",
      },
      {
        title: "Valuation",
        detail:
          "Growth multiples can compress if credit normalises.",
        watch: "Forward revenue and credit guidance.",
      },
    ],
    watch: [
      {
        title: "Volume and take rate",
        detail:
          "Separate unit growth from pricing to see the quality of revenue.",
      },
      {
        title: "Credit quality",
        detail:
          "Delinquencies lead charge-offs by several quarters.",
      },
      {
        title: "Funding",
        detail:
          "The cost and stability of funding drive lending margins.",
      },
    ],
    questions: [
      "How much revenue is credit-sensitive?",
      "What happens to losses in a recession?",
      "Is the take rate holding as volume grows?",
      "How much growth is bought with incentives?",
    ],
  },
  retail: {
    lens: "The business depends on traffic, basket size, inventory turns and the cost of opening the next store.",
    drivers: [
      {
        title: "Comparable sales",
        detail:
          "Same-store growth shows demand without new square footage.",
      },
      {
        title: "Unit growth",
        detail:
          "New stores and markets expand the revenue base but carry fixed costs.",
      },
      {
        title: "Merchandise margin",
        detail:
          "Private label, sourcing and markdown discipline determine gross margin.",
      },
    ],
    risks: [
      {
        title: "Consumer spending",
        detail:
          "Discretionary budgets are sensitive to confidence and rates.",
        watch: "Comparable sales and transaction counts.",
      },
      {
        title: "Inventory",
        detail:
          "Fashion, seasonal and perishable inventory can become markdowns.",
        watch: "Inventory days and markdown cadence.",
      },
      {
        title: "Input and labour costs",
        detail:
          "Freight, wages and rent can compress margins.",
        watch: "Gross margin and cost per transaction.",
      },
      {
        title: "Competition",
        detail:
          "Price, convenience and assortment competition can erode traffic.",
        watch: "Market share and promotional intensity.",
      },
      {
        title: "Expansion execution",
        detail:
          "New units may not earn the same return as the base.",
        watch: "New-store productivity and payback.",
      },
    ],
    watch: [
      {
        title: "Comparable sales",
        detail:
          "Split traffic from ticket size to see whether demand is real.",
      },
      {
        title: "Inventory",
        detail:
          "Inventory growth faster than sales usually precedes markdowns.",
      },
      {
        title: "New-unit returns",
        detail:
          "Growth only creates value if new stores earn their capital.",
      },
    ],
    questions: [
      "Is growth coming from traffic or price?",
      "How much of the margin is protected by sourcing scale?",
      "What happens to inventory if demand slows?",
      "Do new units earn the same returns as the base?",
    ],
  },
  leisure: {
    lens: "Demand, occupancy and pricing per unit drive revenue, while labor, fuel and property costs determine the margin.",
    drivers: [
      {
        title: "Demand and occupancy",
        detail:
          "Bookings, passenger counts or room nights determine how much capacity is used.",
      },
      {
        title: "Pricing and yield",
        detail:
          "Ticket, room or menu pricing determines revenue per unit of capacity.",
      },
      {
        title: "Unit and capacity growth",
        detail:
          "New ships, rooms or restaurants expand the base but carry fixed costs and execution risk.",
      },
    ],
    risks: [
      {
        title: "Consumer cycle",
        detail:
          "Travel, dining and gaming budgets fall quickly when confidence weakens.",
        watch: "Bookings, occupancy and average spend.",
      },
      {
        title: "Cost inflation",
        detail:
          "Labor, fuel and food costs can rise faster than pricing.",
        watch: "Unit cost, fuel hedges and wage rates.",
      },
      {
        title: "Capacity",
        detail:
          "New supply can weaken pricing if demand does not keep up.",
        watch: "Capacity growth and occupancy.",
      },
      {
        title: "Competition",
        detail:
          "New entrants and alternative destinations or formats can take share.",
        watch: "Market share and pricing trends.",
      },
      {
        title: "Valuation",
        detail:
          "Leisure multiples assume demand holds through the cycle.",
        watch: "Forward bookings and margin guidance.",
      },
    ],
    watch: [
      {
        title: "Occupancy",
        detail:
          "Utilisation shows whether capacity is being absorbed.",
      },
      {
        title: "Pricing",
        detail:
          "Revenue per room, passenger or cover is the cleanest demand signal.",
      },
      {
        title: "Unit growth",
        detail:
          "New capacity only creates value if it earns its cost of capital.",
      },
    ],
    questions: [
      "Is demand growing or is capacity being added?",
      "How much pricing power remains if the consumer slows?",
      "What does a higher labor or fuel cost do to the margin?",
      "Do new units earn the same returns as the base?",
    ],
  },
  healthservices: {
    lens: "Revenue depends on utilization, reimbursement and payer mix, while labor and capacity determine the cost of serving each patient.",
    drivers: [
      {
        title: "Utilization",
        detail:
          "Patient volumes and procedures drive revenue before price.",
      },
      {
        title: "Reimbursement",
        detail:
          "Coverage and rate updates determine revenue per patient.",
      },
      {
        title: "Capacity and mix",
        detail:
          "Beds, clinicians and service mix determine how much volume can be converted into margin.",
      },
    ],
    risks: [
      {
        title: "Reimbursement pressure",
        detail:
          "Medicare, Medicaid and commercial rate updates can cap revenue per patient.",
        watch: "Payer mix and rate updates.",
      },
      {
        title: "Labor costs",
        detail:
          "Nursing and clinician shortages can raise wages and contract labor.",
        watch: "Salaries, benefits and contract labor.",
      },
      {
        title: "Regulation",
        detail:
          "Coverage rules, licensure and billing audits can change the model.",
        watch: "Regulatory and compliance actions.",
      },
      {
        title: "Volume and capacity",
        detail:
          "Capacity constraints can cap growth even when demand is strong.",
        watch: "Admissions, occupancy and bed additions.",
      },
      {
        title: "Valuation",
        detail:
          "Multiples can compress when reimbursement or labor trends worsen.",
        watch: "EBITDA margin and forward guidance.",
      },
    ],
    watch: [
      {
        title: "Payer mix",
        detail:
          "A shift toward lower-paying payers changes revenue per patient.",
      },
      {
        title: "Labor cost per visit",
        detail:
          "Wage inflation is the largest controllable margin variable.",
      },
      {
        title: "Volume growth",
        detail:
          "Admissions and procedures show whether demand is translating into revenue.",
      },
    ],
    questions: [
      "How much of growth is volume versus rate?",
      "What happens if reimbursement is cut?",
      "How dependent is the model on labor supply?",
      "What does a higher-acuity mix do to margins?",
    ],
  },
  managedcare: {
    lens: "Membership, medical cost trend and premium rates decide the margin, with the medical loss ratio as the central number.",
    drivers: [
      {
        title: "Enrollment",
        detail:
          "Membership growth expands the premium base, but only if the risk mix is priced correctly.",
      },
      {
        title: "Premium rates",
        detail:
          "Rate filings and renewals determine revenue per member against expected medical cost.",
      },
      {
        title: "Medical cost management",
        detail:
          "Network, utilization and pharmacy programmes determine how much of the premium survives claims.",
      },
    ],
    risks: [
      {
        title: "Medical cost trend",
        detail:
          "Utilization and acuity can rise faster than premiums, compressing the medical loss ratio.",
        watch: "Medical loss ratio, utilization and acuity.",
      },
      {
        title: "Policy and reimbursement",
        detail:
          "ACA subsidies, Medicaid rates and Medicare rules can change membership and revenue per member.",
        watch: "Rate notices, subsidy policy and enrollment mix.",
      },
      {
        title: "Risk mix",
        detail:
          "A sicker or older membership raises claims without a matching rate increase.",
        watch: "Risk scores, segment mix and renewals.",
      },
      {
        title: "Competition",
        detail:
          "Benefit design and provider networks can win or lose members at renewal.",
        watch: "Retention, membership and bid pricing.",
      },
      {
        title: "Valuation",
        detail:
          "Managed-care multiples move with medical cost trend and policy risk.",
        watch: "Medical loss ratio and forward guidance.",
      },
    ],
    watch: [
      {
        title: "Medical loss ratio",
        detail:
          "The share of premium paid out in claims is the cleanest margin signal.",
      },
      {
        title: "Membership",
        detail:
          "Growth only helps if the new members are priced for their risk.",
      },
      {
        title: "Rate filings",
        detail:
          "Approved rates versus cost trend determine next year's margin.",
      },
    ],
    questions: [
      "Is medical cost trend running above or below premium rates?",
      "How much of membership growth is lower-margin business?",
      "What happens if ACA subsidies change?",
      "How much of the multiple depends on policy stability?",
    ],
  },
  pharma: {
    lens: "The value sits in a small number of programmes and patents, so clinical data, label scope and loss-of-exclusivity timing matter more than the current quarter.",
    drivers: [
      {
        title: "Launch execution",
        detail:
          "New therapies need payer coverage, prescriber adoption and manufacturing scale.",
      },
      {
        title: "Pipeline readouts",
        detail:
          "Late-stage data can extend the growth runway or reset it.",
      },
      {
        title: "Patent duration",
        detail:
          "The remaining exclusivity period determines how long the cash flow lasts.",
      },
    ],
    risks: [
      {
        title: "Clinical failure",
        detail:
          "A negative trial can remove most of a programme's value.",
        watch: "Trial endpoints and readout timing.",
      },
      {
        title: "Patent cliff",
        detail:
          "Loss of exclusivity can reset revenue faster than a new launch replaces it.",
        watch: "Patent expiry schedule and generic entry.",
      },
      {
        title: "Pricing and reimbursement",
        detail:
          "Payer coverage and drug-pricing rules can cap revenue per patient.",
        watch: "Net price, payer mix and policy changes.",
      },
      {
        title: "Competition",
        detail:
          "A better or cheaper therapy can take share quickly.",
        watch: "Competitor data and launch timing.",
      },
      {
        title: "Manufacturing and safety",
        detail:
          "Supply or safety issues can limit a launch.",
        watch: "Supply disclosures and adverse events.",
      },
    ],
    watch: [
      {
        title: "Launch metrics",
        detail:
          "Prescriptions, payer coverage and inventory reveal the real launch curve.",
      },
      {
        title: "Patent timing",
        detail:
          "The next loss-of-exclusivity date is the hard constraint on the cash flow.",
      },
      {
        title: "Pipeline readouts",
        detail:
          "Late-stage data is the main driver of the out-year value.",
      },
    ],
    questions: [
      "When does the largest patent expire?",
      "What does a negative trial leave behind?",
      "How broad is the reimbursement label?",
      "How much of the valuation is the pipeline?",
    ],
  },
  defense: {
    lens: "Revenue is tied to government budgets, contract awards and the conversion of backlog into deliveries.",
    drivers: [
      {
        title: "Backlog",
        detail:
          "Contracted orders provide visibility into future revenue.",
      },
      {
        title: "Budget and supplementals",
        detail:
          "Defense budgets and supplemental spending set the addressable market.",
      },
      {
        title: "Programme execution",
        detail:
          "Deliveries, milestones and cost control determine margins on fixed-price work.",
      },
    ],
    risks: [
      {
        title: "Budget cycle",
        detail:
          "Continuing resolutions and priorities can delay awards.",
        watch: "Budget markers and supplemental packages.",
      },
      {
        title: "Contract concentration",
        detail:
          "A few programmes or agencies can dominate revenue.",
        watch: "Backlog concentration and award timing.",
      },
      {
        title: "Fixed-price execution",
        detail:
          "Cost overruns on fixed-price contracts can hit margins.",
        watch: "Segment margins and programme charges.",
      },
      {
        title: "Supply chain",
        detail:
          "Specialty components and labor can constrain deliveries.",
        watch: "Lead times and supplier concentration.",
      },
      {
        title: "Valuation",
        detail:
          "Defense multiples can compress when budget growth slows.",
        watch: "Backlog growth and forward revenue.",
      },
    ],
    watch: [
      {
        title: "Book-to-bill",
        detail:
          "A ratio above one shows orders are outpacing revenue.",
      },
      {
        title: "Programme milestones",
        detail:
          "Deliveries and reviews determine when backlog becomes cash.",
      },
      {
        title: "Budget",
        detail:
          "Appropriations and supplementals are the leading demand signal.",
      },
    ],
    questions: [
      "How much backlog converts in the next year?",
      "Which programmes are fixed-price?",
      "How dependent is revenue on one agency?",
      "What does a continuing resolution delay?",
    ],
  },
  transport: {
    lens: "Revenue depends on demand, pricing and utilisation, while fuel, labour and capacity determine the cost of the next trip.",
    drivers: [
      {
        title: "Demand and load",
        detail:
          "Passenger or freight volumes determine how much capacity is used.",
      },
      {
        title: "Pricing and yield",
        detail:
          "Ticket or contract pricing determines revenue per unit of capacity.",
      },
      {
        title: "Cost per unit",
        detail:
          "Fuel, labour and maintenance decide whether volume growth becomes profit.",
      },
    ],
    risks: [
      {
        title: "Fuel and labour",
        detail:
          "Input costs can rise faster than pricing.",
        watch: "Fuel hedges, wage rates and cost per unit.",
      },
      {
        title: "Demand cyclicality",
        detail:
          "Travel and freight demand can fall quickly in a downturn.",
        watch: "Load factors, bookings and volumes.",
      },
      {
        title: "Capacity",
        detail:
          "Adding capacity into weak demand destroys pricing.",
        watch: "Capacity growth and utilisation.",
      },
      {
        title: "Competition",
        detail:
          "Route or lane competition can cap pricing power.",
        watch: "Market share and fare trends.",
      },
      {
        title: "Regulation",
        detail:
          "Safety, emissions and labour rules can raise costs.",
        watch: "Regulatory actions and compliance spend.",
      },
    ],
    watch: [
      {
        title: "Load factor",
        detail:
          "Utilisation shows whether capacity is being absorbed.",
      },
      {
        title: "Unit revenue",
        detail:
          "Pricing per passenger or ton is the cleanest demand signal.",
      },
      {
        title: "Cost per unit",
        detail:
          "Ex-fuel cost trends reveal whether efficiency is improving.",
      },
    ],
    questions: [
      "Is demand growing or is capacity being added?",
      "How much of the cost base is hedged?",
      "What happens to pricing in a downturn?",
      "Can the balance sheet fund the next fleet cycle?",
    ],
  },
  autonomy: {
    lens: "The value depends on design wins, program ramps and the path from development spending to commercial scale.",
    drivers: [
      {
        title: "Design wins",
        detail:
          "Nominations and platform awards determine the revenue pipeline years before production.",
      },
      {
        title: "Program ramps",
        detail:
          "Production volumes at the automaker determine when awarded business becomes revenue.",
      },
      {
        title: "Content per vehicle",
        detail:
          "More sensors, compute or software per vehicle raises revenue without a proportional cost increase.",
      },
    ],
    risks: [
      {
        title: "Program delays",
        detail:
          "Automaker delays or cancellations push revenue out and strand development spending.",
        watch: "Program timelines and nomination announcements.",
      },
      {
        title: "Cash burn",
        detail:
          "Development spending can outrun revenue before commercial scale arrives.",
        watch: "Cash runway, operating loss and spending plans.",
      },
      {
        title: "Customer concentration",
        detail:
          "A few automakers can dominate the order book.",
        watch: "Customer disclosures and platform concentration.",
      },
      {
        title: "Technology competition",
        detail:
          "A cheaper or better system can displace an incumbent before scale.",
        watch: "Competitor launches and design-win share.",
      },
      {
        title: "Valuation",
        detail:
          "The multiple capitalises future programs that may not reach production.",
        watch: "Forward revenue and nomination backlog.",
      },
    ],
    watch: [
      {
        title: "Design wins",
        detail:
          "Nominations are the leading indicator of future revenue.",
      },
      {
        title: "Production ramp",
        detail:
          "Awarded programs only matter when vehicles ship.",
      },
      {
        title: "Cash runway",
        detail:
          "The balance sheet determines how long the company can fund development.",
      },
    ],
    questions: [
      "How many programs are in production versus development?",
      "When does the order book convert into revenue?",
      "How much cash is needed to reach scale?",
      "How concentrated is the customer base?",
    ],
  },
  internet: {
    lens: "The model depends on users, engagement, transaction volume and the take rate earned on each interaction.",
    drivers: [
      {
        title: "User and engagement growth",
        detail:
          "More active users and frequency expand the inventory available to monetise.",
      },
      {
        title: "Take rate",
        detail:
          "The share of transaction value retained determines revenue per unit of GMV.",
      },
      {
        title: "Adjacent services",
        detail:
          "Advertising, logistics, payments and subscriptions can lift revenue per user.",
      },
    ],
    risks: [
      {
        title: "Competition for users",
        detail:
          "Switching costs are low and new formats can take attention quickly.",
        watch: "Monthly users, engagement and churn.",
      },
      {
        title: "Take-rate pressure",
        detail:
          "Merchants and users can push back on fees.",
        watch: "Take rate and merchant retention.",
      },
      {
        title: "Regulation",
        detail:
          "Platform, privacy and gig-labour rules can change the model.",
        watch: "Regulatory actions and market-by-market rules.",
      },
      {
        title: "Profitability",
        detail:
          "Growth can be bought with incentives that disappear when spending slows.",
        watch: "Contribution margin and sales efficiency.",
      },
      {
        title: "Valuation",
        detail:
          "High multiples assume durable user growth and take rate.",
        watch: "Forward revenue and margin guidance.",
      },
    ],
    watch: [
      {
        title: "GMV and take rate",
        detail:
          "Separate transaction growth from the share retained.",
      },
      {
        title: "User growth",
        detail:
          "Net adds and engagement show whether the audience is durable.",
      },
      {
        title: "Contribution margin",
        detail:
          "Unit economics reveal whether growth creates value.",
      },
    ],
    questions: [
      "How much growth is users versus take rate?",
      "What does a slowdown in incentives do to volume?",
      "How defensible is the audience?",
      "When does the platform reach durable profit?",
    ],
  },
  labs: {
    lens: "Revenue depends on test volumes, reimbursement and the mix of routine versus esoteric testing.",
    drivers: [
      {
        title: "Test volumes",
        detail:
          "Order volumes from hospitals, physicians and patients drive revenue before price.",
      },
      {
        title: "Reimbursement",
        detail:
          "Medicare, Medicaid and commercial rates determine revenue per test.",
      },
      {
        title: "Test mix",
        detail:
          "Esoteric and specialty tests carry higher prices and margins than routine panels.",
      },
    ],
    risks: [
      {
        title: "Reimbursement pressure",
        detail:
          "Rate cuts or coverage changes can lower revenue per test.",
        watch: "Reimbursement rates and payer mix.",
      },
      {
        title: "Volume",
        detail:
          "Utilization can fall if physicians change testing patterns.",
        watch: "Test volumes and order trends.",
      },
      {
        title: "Competition",
        detail:
          "Hospital labs and national chains compete on price and turnaround.",
        watch: "Market share and pricing.",
      },
      {
        title: "Regulation",
        detail:
          "Billing rules and lab licensure can change the operating model.",
        watch: "Regulatory and compliance actions.",
      },
      {
        title: "Valuation",
        detail:
          "Lab multiples move with reimbursement and volume trends.",
        watch: "Volume growth and margin guidance.",
      },
    ],
    watch: [
      {
        title: "Volume growth",
        detail:
          "Test counts show whether demand is translating into revenue.",
      },
      {
        title: "Reimbursement",
        detail:
          "Price per test is the main swing factor in the margin.",
      },
      {
        title: "Test mix",
        detail:
          "A richer mix lifts revenue per order without more volume.",
      },
    ],
    questions: [
      "How much of growth is volume versus price?",
      "What happens if reimbursement is cut?",
      "How much of revenue is esoteric testing?",
      "Can the lab pass through wage inflation?",
    ],
  },
  medtech: {
    lens: "The franchise depends on clinical evidence, procedure volumes, reimbursement and the installed base of devices.",
    drivers: [
      {
        title: "Procedure growth",
        detail:
          "More procedures expand the consumable and device opportunity.",
      },
      {
        title: "Installed base",
        detail:
          "Placed devices create recurring consumable and service revenue.",
      },
      {
        title: "New indications",
        detail:
          "Label expansions and clinical data widen the addressable market.",
      },
    ],
    risks: [
      {
        title: "Reimbursement",
        detail:
          "Coverage and procedure codes determine adoption and price.",
        watch: "Payer decisions and coding updates.",
      },
      {
        title: "Clinical and regulatory",
        detail:
          "Trial data, approvals and recalls can change the franchise.",
        watch: "Trial readouts, approvals and quality events.",
      },
      {
        title: "Competition",
        detail:
          "A better device or a cheaper alternative can take share.",
        watch: "Procedure share and competitor launches.",
      },
      {
        title: "Hospital capital budgets",
        detail:
          "Capex cuts can delay device purchases.",
        watch: "Hospital capex and order trends.",
      },
      {
        title: "Valuation",
        detail:
          "Medtech multiples assume durable procedure growth.",
        watch: "Forward revenue and margin.",
      },
    ],
    watch: [
      {
        title: "Procedure volumes",
        detail:
          "The leading indicator for device and consumable demand.",
      },
      {
        title: "Installed base",
        detail:
          "Placed units determine the recurring revenue stream.",
      },
      {
        title: "Reimbursement",
        detail:
          "Coverage decisions can accelerate or cap adoption.",
      },
    ],
    questions: [
      "How much revenue is recurring versus capital equipment?",
      "What does a reimbursement change do to volume?",
      "How concentrated is the installed base?",
      "What clinical evidence would expand the label?",
    ],
  },
};

export const GROUP_BUCKET: Record<string, string> = {
  "defence-electronics": "industrial",
  "power-renewables": "utilities",
  "infra-rail-cables": "industrial",
  "financials-capital-markets": "financial",
  "healthcare-pharma": "healthcare",
  "specialty-chemicals": "materials",
  "consumer-new-age": "brands",
  "auto-ancillaries": "cyclical",
  "real-estate-building": "realestate",
  "it-erd": "software",
  "metals-commodities": "materials",
  technology: "tech",
  communication: "communication",
  "consumer-discretionary": "consumer",
  "consumer-staples": "consumer",
  healthcare: "healthcare",
  financials: "financial",
  industrials: "industrial",
  energy: "energy",
  utilities: "utilities",
  materials: "materials",
  "real-estate": "realestate",
  "enterprise-software": "software",
  "semis-hardware": "semis",
  "internet-platforms": "tech",
  "payments-fintech": "fintech",
  "pharma-biotech": "biotech",
  "healthcare-services": "healthcare",
  "industrial-automation": "industrial",
  "aerospace-defense": "industrial",
  "transport-autonomy": "industrial",
  "materials-mining": "materials",
  "consumer-retail": "consumer",
  "banks-insurance": "financial",
  "capital-markets": "financial",
  "ai-infrastructure": "ai",
  "semis-semicap": "semis",
  "software-cyber": "software",
  quantum: "quantum",
  "fintech-crypto": "fintech",
  "healthcare-growth": "biotech",
  "space-defense": "space",
  "nuclear-metals": "nuclear",
  "consumer-brands": "brands",
  "industrials-cyclicals": "cyclical",
  "specialty-financials": "specialty",
};

function displayName(name: string): string {
  const trimmed = name.replace(/\s+/g, " ").trim();
  return trimmed.replace(/\b(Inc|Corp|Co|Ltd|Plc|Llc)$/i, "$1.");
}

function growth(value: number | null | undefined): string {
  return value == null ? "not available" : formatSignedPercent(value);
}

function latestQuarter(bundle: ResearchBundle) {
  return (
    [...bundle.data.quarterly]
      .filter((row) => !row.ttm)
      .sort((a, b) => (a.reportDate ?? "").localeCompare(b.reportDate ?? ""))
      .at(-1) ?? null
  );
}

function sourceUrl(bundle: ResearchBundle): string {
  if (bundle.data.latest10KUrl) return bundle.data.latest10KUrl;
  const cik = bundle.data.cik?.padStart(10, "0");
  return cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=10-K&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";
}

/** A company-level filing list, distinct from the 10-K page above. */
function filingHistoryUrl(bundle: ResearchBundle): string {
  const cik = bundle.data.cik?.padStart(10, "0");
  return cik
    ? `https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=${cik}&type=&dateb=&owner=include&count=40`
    : "https://www.sec.gov/edgar/search/";
}

export function generateStockStory(bundle: ResearchBundle): StockStory {
  const { data, consensus, segments, factors } = bundle;
  const currency = data.currency ?? "USD";
  const price = (value: number | null | undefined) =>
    formatCurrency(value, 2, currency);
  const money = (value: number | null | undefined) =>
    formatCompactCurrency(value, currency);
  const group = getCoverageGroup(data.ticker);
  const bucket =
    BUCKETS[GROUP_BUCKET[group?.id ?? ""] ?? "tech"] ?? BUCKETS.tech;
  const quarter = latestQuarter(bundle);
  const name = displayName(data.name);
  const revenue = data.metrics.revenueTtm;
  const opMargin = data.metrics.operatingMargin;
  const fcfMargin = data.metrics.fcfMargin;
  const pe = data.metrics.pe;
  const ev = data.metrics.evEbitda;
  const netDebt = data.metrics.netDebt;
  const cagr = bundle.cagr;
  const latestQ = bundle.latestQYoY;
  const rangePosition = bundle.rangePosition;
  const target = consensus?.targetMean ?? null;
  const analystCount = consensus?.analystCount ?? null;
  const estimate = consensus?.estimates.find(
    (item) => item.period === "Current fiscal year",
  );
  const segmentNote =
    !segments || segments.segments.length <= 1
      ? "The current dataset does not break revenue into reportable segments, so the consolidated revenue line is used."
      : `${segments.segments[0]?.name ?? "The largest segment"} is ${formatPercent(segments.segments[0]?.share ?? 0)} of the disclosed revenue mix.`;
  const geographyNote =
    segments && segments.geography.length > 0
      ? `The filing also splits revenue by geography; the largest disclosed market is ${segments.geography[0]?.name ?? "not available"}.`
      : "A detailed geography split is not available in the current dataset.";
  const debtNote =
    netDebt == null
      ? "Net debt is not a meaningful measure for this business in the current dataset."
      : netDebt < 0
        ? `The balance sheet carries ${money(Math.abs(netDebt))} of net cash.`
        : `Net debt is ${money(netDebt)}.`;

  const revenueSentence =
    revenue && revenue > 0
      ? `generated ${money(revenue)} of revenue over the last twelve months, ${growth(data.metrics.revenueGrowthTtm)} versus the prior year`
      : "reported no revenue over the last twelve months";

  const bigPicture: StoryBlock = {
    paragraphs: [
      `${name} ${revenueSentence}. ${bucket.lens}`,
      `The latest reported quarter was ${quarter ? `${quarter.period} FY${String(quarter.fyear).slice(-2)}` : "not available"}, with ${quarter ? money(quarter.revenue) : "n/a"} of revenue and an operating margin of ${quarter ? formatPercent(quarter.operatingMargin) : "n/a"}. The stock closed at ${price(data.latestPrice.close)} on ${data.latestPrice.asOf}, giving a market capitalization of ${money(data.latestPrice.marketCap)}.`,
      `The shares sit ${rangePosition == null ? "at an unknown position" : `${Math.round(rangePosition * 100)}% of the way up`} their 52-week range${data.latestPrice.low52 != null && data.latestPrice.high52 != null ? ` (${price(data.latestPrice.low52)} to ${price(data.latestPrice.high52)})` : ""}. The sections below use reported financials and the latest filings; they describe the business rather than recommend the stock.`,
    ],
    quote: `${data.ticker} is a ${group?.name ?? "US-listed"} business with ${money(revenue)} of trailing revenue. The useful question is what the current margin and growth rate imply about the next few years, not whether the last quarter beat a forecast.`,
  };

  const rawDescription = data.description?.trim() ?? "";
  const sectorLabel = group?.name ?? data.sector;
  const description =
    rawDescription.length >= 60
      ? rawDescription
      : `${name} operates in ${data.sector}, within the ${sectorLabel} coverage group.`;

  const whatItDoes: StoryBlock = {
    paragraphs: [
      description,
      `${segmentNote} ${geographyNote} The company employs ${data.employees ? data.employees.toLocaleString("en-US") : "an undisclosed number of"} people; the coverage group is ${sectorLabel}.`,
    ],
    bullets: [
      {
        title: "Revenue base",
        detail: `${money(revenue)} on a trailing-twelve-month basis.`,
      },
      {
        title: "Profitability",
        detail: `Operating margin ${formatPercent(opMargin)}; free-cash-flow margin ${formatPercent(fcfMargin)}.`,
      },
      {
        title: "Scale",
        detail: `Market capitalization ${money(data.latestPrice.marketCap)} at the latest close.`,
      },
    ],
  };

  const howItMakesMoney: StoryBlock = {
    paragraphs: [
      `Gross margin is ${formatPercent(data.metrics.grossMargin)}, operating margin is ${formatPercent(opMargin)} and net margin is ${formatPercent(data.metrics.netMargin)}. ${segmentNote}`,
      `${geographyNote} ${debtNote} A business that converts a high share of revenue into operating profit has more room to absorb input costs or reinvest; one that does not needs volume growth to carry fixed costs.`,
    ],
  };

  const growthBlock: StoryBlock = {
    paragraphs: [
      `Revenue compounded at ${formatPercent(cagr)} a year across the fiscal years in the dataset, and the latest quarter changed ${growth(latestQ)} year over year. ${estimate ? `Third-party estimates for the current fiscal year point to ${money(estimate.revenueAvg)} of revenue and ${price(estimate.epsAvg)} of EPS.` : "A current-year consensus estimate is not available in the dataset."}`,
      `Growth is only useful if it earns a return. The operating margin of ${formatPercent(opMargin)} and return on invested capital of ${formatPercent(data.metrics.roic)} are the filters to watch as revenue scales.`,
    ],
    bullets: bucket.drivers,
  };

  const performanceBlock: StoryBlock = {
    paragraphs: [
      `The trailing operating margin is ${formatPercent(opMargin)}, the net margin is ${formatPercent(data.metrics.netMargin)} and diluted EPS is ${data.metrics.epsTtm == null ? "not available" : price(data.metrics.epsTtm)}. The latest quarter's operating margin was ${quarter ? formatPercent(quarter.operatingMargin) : "not available"}.`,
      `Return on equity is ${formatPercent(data.metrics.roe)}. For a capital-intensive business, compare that with the cost of capital; for an asset-light one, the more useful comparison is the cash-flow margin.`,
    ],
  };

  const cashBlock: StoryBlock = {
    paragraphs: [
      `Free cash flow over the trailing period was ${money(data.metrics.freeCashFlowTtm)}, a ${formatPercent(fcfMargin)} margin. ${debtNote}`,
      `Cash flow is the link between reported earnings and the capital returned to owners. A growing gap between net income and free cash flow usually means working capital or capital expenditure is absorbing the profit.`,
    ],
  };

  const valuationBlock: StoryBlock = {
    paragraphs: [
      `At the latest close the shares trade at ${formatMultiple(pe)} trailing earnings and ${formatMultiple(ev)} EV/EBITDA. The market is paying for the growth and margin profile described above, not for the past alone.`,
      `${target != null ? `The attributed third-party mean target is ${price(target)}; that is a consensus figure, not a Stockmonk price target.` : "A third-party consensus target is not available in the dataset."} The peer table below compares the company with a group of similar businesses; the multiple is a starting point for questions, not a verdict.`,
    ],
  };

  const analystsBlock: StoryBlock = {
    paragraphs: [
      consensus
        ? `${analystCount ?? "A group of"} analysts contribute to the third-party consensus. The mean target is ${price(consensus.targetMean)}, with a range of ${price(consensus.targetLow)} to ${price(consensus.targetHigh)}.`
        : "A third-party analyst consensus snapshot is not available for this company in the current dataset. The valuation discussion therefore relies on reported multiples and company filings.",
      consensus
        ? `Current-year estimates call for ${money(estimate?.revenueAvg)} of revenue and ${price(estimate?.epsAvg)} of EPS. These are third-party forecasts and can change; they are shown for context, not as a recommendation.`
        : "When consensus is unavailable, the report does not invent a target or a rating. The reported financials remain the primary evidence.",
    ],
  };

  const riskItems: RiskItem[] = bucket.risks.map((risk) => ({
    title: risk.title,
    severity: "Medium",
    detail: risk.detail,
    watch: risk.watch,
  }));
  riskItems[0] = { ...riskItems[0], severity: "High" };
  riskItems[1] = { ...riskItems[1], severity: "High" };

  const risks = {
    intro:
      "The risks below are the ones that matter most for this business given its financial profile. They are qualitative descriptors, not a rating.",
    items: riskItems,
    watchlist: bucket.watch,
  };

  const bottomLine = {
    paragraphs: [
      `${name} is a ${sectorLabel} company with ${money(revenue)} of trailing revenue, a ${formatPercent(opMargin)} operating margin and ${formatPercent(fcfMargin)} free-cash-flow margin. Those are the facts; the interpretation depends on whether the current growth and margin are durable.`,
      `${target != null ? `The third-party consensus mean target is ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}. ` : ""}Stockmonk does not publish a rating or a target. The useful next step is to compare the company's multiples with its own history and with the peer set below, then decide which risk matters most.`,
      `The percentile scorecard below places the company within the ${"500-name coverage universe"}. A high growth score with a low balance-sheet score is a different proposition from the reverse, and neither is automatically good or bad.`,
    ],
    questions: bucket.questions,
  };

  const avgFactor = Math.round(
    (factors.growth +
      factors.profitability +
      factors.cash +
      factors.balance +
      factors.valuation) /
      5,
  );
  const titlePatterns = [
    `${name}: ${bucket.lens.split(".")[0].toLowerCase()}`,
    `What ${name}'s financial statements show`,
    `${name}: growth, margins and the price being paid`,
    `A closer look at ${name}'s financial engine`,
    `${data.ticker} in five charts: ${bucket.lens.split(".")[0].toLowerCase()}`,
  ];
  const titleIndex =
    Math.abs(
      [...data.ticker].reduce((sum, char) => sum + char.charCodeAt(0), 0),
    ) % titlePatterns.length;

  return {
    ticker: data.ticker,
    kicker: `${sectorLabel} · ${data.sector}`,
    title: titlePatterns[titleIndex],
    dek: `${name} ${revenue && revenue > 0 ? `generated ${money(revenue)} of trailing revenue at a ${formatPercent(opMargin)} operating margin` : "is a pre-revenue or early-revenue company"}. This report walks through the business, the cash flow, the valuation context and the risks.`,
    readingMinutes: 9,
    takeaways: [
      revenue && revenue > 0
        ? `Revenue: ${money(revenue)} trailing twelve months, ${growth(data.metrics.revenueGrowthTtm)} year over year.`
        : "Revenue: no revenue reported over the trailing twelve months.",
      `Profitability: ${formatPercent(opMargin)} operating margin and ${formatPercent(data.metrics.netMargin)} net margin.`,
      `Cash: ${money(data.metrics.freeCashFlowTtm)} free cash flow, a ${formatPercent(fcfMargin)} margin.`,
      `Scorecard: ${avgFactor}/100 average percentile across the factor screens.`,
    ],
    filingUrl: sourceUrl(bundle),
    irUrl: data.website ?? filingHistoryUrl(bundle),
    bigPicture,
    whatItDoes,
    howItMakesMoney,
    growth: growthBlock,
    performance: performanceBlock,
    cash: cashBlock,
    valuation: valuationBlock,
    analysts: analystsBlock,
    risks,
    bottomLine,
  };
}
