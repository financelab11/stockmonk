import type { RiskItem, StockStory, StoryBlock } from "@/content/stocks/types";
import { getCoverageGroup } from "@/config/coverage";
import { getIndiaCoverageGroup } from "@/config/india-coverage";
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

const BUCKETS: Record<string, Bucket> = {
  tech: {
    lens: "The business is judged on whether it can keep converting a technical advantage into recurring revenue.",
    drivers: [
      { title: "Product cycle", detail: "New products and platform transitions create refresh demand and pricing power." },
      { title: "Customer expansion", detail: "Land-and-expand selling raises revenue per existing customer and lengthens the relationship." },
      { title: "Operating leverage", detail: "Incremental revenue can carry high gross margins once development and sales costs are in place." },
    ],
    risks: [
      { title: "Technology substitution", detail: "A faster or cheaper architecture can reset the competitive position quickly.", watch: "Product roadmaps, design wins and customer concentration." },
      { title: "Customer concentration", detail: "A small number of large buyers can swing revenue and pricing.", watch: "Top-customer disclosures and order trends." },
      { title: "Valuation", detail: "High expectations leave less room for a growth disappointment.", watch: "Forward estimates versus the current multiple." },
      { title: "Supply chain", detail: "Advanced components and manufacturing capacity can constrain shipments.", watch: "Lead times, inventory and supplier concentration." },
      { title: "Regulation and export controls", detail: "Cross-border rules can remove addressable market or raise compliance costs.", watch: "Export-licence changes and geographic mix." },
    ],
    watch: [
      { title: "Growth durability", detail: "Compare revenue growth with the prior four quarters." },
      { title: "Gross margin", detail: "A falling gross margin can signal pricing pressure or a richer hardware mix." },
      { title: "Customer concentration", detail: "Track large-customer disclosures and order momentum." },
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
      { title: "Advertising and subscription mix", detail: "A diversified revenue base reduces dependence on a single budget line." },
      { title: "Engagement", detail: "Time spent and daily users determine the inventory available to sell." },
      { title: "Pricing", detail: "Subscription and ad pricing can expand revenue without proportional cost." },
    ],
    risks: [
      { title: "Advertising cycle", detail: "Ad budgets fall quickly when confidence weakens.", watch: "Ad pricing, impressions and advertiser count." },
      { title: "Content and network costs", detail: "Programming, rights and infrastructure can grow faster than revenue.", watch: "Content spend and segment margins." },
      { title: "Competition for attention", detail: "Users can move to another platform with little switching cost.", watch: "Engagement and time-spent disclosures." },
      { title: "Regulation", detail: "Privacy, competition and content rules can change distribution or targeting.", watch: "Regulatory proceedings and platform rules." },
      { title: "Valuation", detail: "A premium multiple assumes the monetisation gap closes.", watch: "Forward revenue and margin estimates." },
    ],
    watch: [
      { title: "Engagement", detail: "Daily users and time spent are the leading indicators." },
      { title: "Ad pricing", detail: "Price per ad shows whether demand is keeping up with inventory." },
      { title: "Content spend", detail: "Watch content and infrastructure costs relative to revenue." },
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
      { title: "Comparable sales", detail: "Same-store or same-customer growth shows demand without new locations." },
      { title: "Unit growth", detail: "New stores, products or markets add revenue but also fixed costs." },
      { title: "Margin mix", detail: "Private label, services and digital orders can lift profitability." },
    ],
    risks: [
      { title: "Consumer spending", detail: "Discretionary budgets are sensitive to confidence and rates.", watch: "Comparable sales and transaction counts." },
      { title: "Input and labour costs", detail: "Food, freight and wages can compress margins.", watch: "Gross margin and operating cost per unit." },
      { title: "Competition", detail: "Price and convenience competition can erode traffic.", watch: "Market share and promotional intensity." },
      { title: "Inventory", detail: "Fashion, seasonal and perishable inventory can become markdowns.", watch: "Inventory days and markdown cadence." },
      { title: "Expansion execution", detail: "New stores or markets may not earn the same returns.", watch: "New-unit productivity and capex." },
    ],
    watch: [
      { title: "Comparable sales", detail: "Track traffic versus ticket size separately." },
      { title: "Gross margin", detail: "A mix shift toward lower-margin categories can hide pricing gains." },
      { title: "New-unit returns", detail: "Growth is only valuable if new locations earn their cost of capital." },
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
      { title: "Volume and adoption", detail: "New patients and procedures drive revenue before price." },
      { title: "Reimbursement", detail: "Coverage decisions determine whether a product is accessible and profitable." },
      { title: "Pipeline", detail: "New indications and products extend the growth runway." },
    ],
    risks: [
      { title: "Clinical and regulatory risk", detail: "Trials and approvals can fail or be delayed.", watch: "Trial readouts and regulatory decisions." },
      { title: "Reimbursement and pricing", detail: "Coverage and drug-pricing rules can cap revenue per patient.", watch: "Net price and payer mix." },
      { title: "Competition", detail: "New therapies can take share or force price cuts.", watch: "Competitor launches and prescription trends." },
      { title: "Patent expirations", detail: "Loss of exclusivity can reset revenue quickly.", watch: "Patent-cliff timing and generic entry." },
      { title: "Manufacturing and supply", detail: "Capacity or quality issues can limit product availability.", watch: "Supply disclosures and capex." },
    ],
    watch: [
      { title: "Volume growth", detail: "Separate patient growth from price and mix." },
      { title: "Reimbursement", detail: "Coverage decisions are a leading indicator for adoption." },
      { title: "Pipeline readouts", detail: "Late-stage data can change the growth runway." },
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
      { title: "Net interest income", detail: "Loan and securities yields less funding costs are the core revenue line." },
      { title: "Fee income", detail: "Advisory, asset management and trading diversify the revenue base." },
      { title: "Capital returns", detail: "Buybacks and dividends can grow per-share value when capital is abundant." },
    ],
    risks: [
      { title: "Credit cycle", detail: "Loan losses rise in a downturn and can overwhelm revenue growth.", watch: "Provisions, charge-offs and non-performing loans." },
      { title: "Interest rates", detail: "Rate changes affect net interest income and deposit repricing.", watch: "Net interest income guidance and deposit betas." },
      { title: "Regulation", detail: "Capital and liquidity rules influence returns and buybacks.", watch: "Stress tests and CET1 requirements." },
      { title: "Capital markets cyclicality", detail: "Advisory and trading revenue can fall quickly.", watch: "Investment banking fees and trading revenue." },
      { title: "Competition", detail: "Deposit and loan pricing competition can compress spreads.", watch: "Loan and deposit growth relative to peers." },
    ],
    watch: [
      { title: "Net interest income", detail: "The largest revenue line and the most rate-sensitive." },
      { title: "Credit costs", detail: "Provisioning is the main swing factor in a downturn." },
      { title: "Capital returns", detail: "Buybacks depend on capital ratios and stress-test results." },
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
      { title: "Backlog", detail: "Orders already booked provide visibility into future revenue." },
      { title: "Aftermarket and services", detail: "Recurring service revenue can be more profitable than equipment." },
      { title: "Price and productivity", detail: "Pricing actions and cost programmes protect margins through cycles." },
    ],
    risks: [
      { title: "Capital-spending cycle", detail: "Industrial demand falls when customers delay projects.", watch: "Order trends and backlog conversion." },
      { title: "Input costs", detail: "Steel, freight and labour can outrun price increases.", watch: "Gross margin and price-cost spread." },
      { title: "Execution", detail: "Project delays and cost overruns can hit margins.", watch: "Segment margins and project disclosures." },
      { title: "M&A integration", detail: "Acquisitions can dilute returns if synergies disappoint.", watch: "Organic growth and acquired-margin trends." },
      { title: "Valuation", detail: "Cyclical earnings can make trough multiples look cheap.", watch: "Mid-cycle margins and order momentum." },
    ],
    watch: [
      { title: "Backlog", detail: "Bookings and conversion show whether demand is holding." },
      { title: "Price-cost spread", detail: "Watch whether pricing keeps up with inputs." },
      { title: "Segment margin", detail: "Mix and execution can move margins before revenue does." },
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
      { title: "Commodity prices", detail: "Oil, gas and power prices flow quickly into revenue and cash flow." },
      { title: "Production growth", detail: "Volumes from existing and new projects determine the revenue base." },
      { title: "Capital discipline", detail: "Lower reinvestment can lift free cash flow and returns." },
    ],
    risks: [
      { title: "Commodity prices", detail: "A price decline can cut revenue and cash flow sharply.", watch: "Realised prices and hedging." },
      { title: "Reserve and project risk", detail: "Drilling and project returns depend on geology and execution.", watch: "Production guidance and project updates." },
      { title: "Regulation", detail: "Environmental and permitting rules can raise costs or block projects.", watch: "Permits, emissions rules and litigation." },
      { title: "Leverage", detail: "Debt can become a problem when prices fall.", watch: "Net debt/EBITDA and maturity schedule." },
      { title: "Energy transition", detail: "Long-run demand can shift away from hydrocarbons.", watch: "Capital allocation and low-carbon investment." },
    ],
    watch: [
      { title: "Realised prices", detail: "The gap to benchmark prices shows hedging and mix effects." },
      { title: "Production", detail: "Volume delivery is the base for cash flow." },
      { title: "Capex discipline", detail: "Reinvestment and buybacks compete for the same cash." },
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
      { title: "Rate base growth", detail: "Approved capital investment earns a regulated return over time." },
      { title: "Load growth", detail: "Data centers and electrification can raise long-run demand." },
      { title: "Cost recovery", detail: "Rate cases determine whether higher costs are passed through." },
    ],
    risks: [
      { title: "Regulatory outcomes", detail: "Rate cases can disallow costs or reduce allowed returns.", watch: "Rate-case filings and commission decisions." },
      { title: "Interest rates", detail: "Higher rates raise financing costs and pressure valuations.", watch: "Debt maturities and cost of new debt." },
      { title: "Capital execution", detail: "Large projects can overshoot budgets or schedules.", watch: "Capex guidance and project milestones." },
      { title: "Weather and demand", detail: "Weather affects volumes and revenue.", watch: "Load growth and weather-normalised sales." },
      { title: "Commodity exposure", detail: "Fuel costs can be volatile before they are recovered.", watch: "Fuel-cost recovery and hedging." },
    ],
    watch: [
      { title: "Rate base", detail: "Approved capital investment is the earnings base." },
      { title: "Rate-case outcomes", detail: "Allowed returns and cost recovery drive the model." },
      { title: "Financing costs", detail: "Higher rates can pressure both earnings and the multiple." },
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
      { title: "Volume", detail: "Shipments show underlying industrial demand." },
      { title: "Price and mix", detail: "Product mix and pricing determine margin per ton." },
      { title: "Cost position", detail: "Low-cost assets can earn through the cycle." },
    ],
    risks: [
      { title: "Commodity cycle", detail: "Prices can fall faster than costs.", watch: "Realised prices and inventory." },
      { title: "Input costs", detail: "Energy and feedstock can compress spreads.", watch: "Unit cost and price-cost spread." },
      { title: "Environmental regulation", detail: "Permits and emissions rules can raise capital needs.", watch: "Permits and remediation liabilities." },
      { title: "Capital intensity", detail: "Maintenance and growth capex can absorb cash flow.", watch: "Capex and free cash flow." },
      { title: "Demand cyclicality", detail: "Construction and manufacturing demand are cyclical.", watch: "End-market volumes and order trends." },
    ],
    watch: [
      { title: "Price-cost spread", detail: "The cleanest measure of cyclical profitability." },
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
      { title: "Occupancy", detail: "Leased space is the base for rent revenue." },
      { title: "Rent spreads", detail: "Renewals and new leases reset rents toward market." },
      { title: "Development pipeline", detail: "New assets can add cash flow when leased." },
    ],
    risks: [
      { title: "Interest rates", detail: "Higher rates raise refinancing costs and cap rates.", watch: "Debt maturities and weighted average cost of debt." },
      { title: "Tenant concentration", detail: "A large tenant can leave and reset occupancy.", watch: "Top-tenant disclosure and lease expirations." },
      { title: "Development risk", detail: "Projects can be delayed or lease below underwriting.", watch: "Pipeline yields and pre-leasing." },
      { title: "Occupancy", detail: "Vacancy reduces cash flow and pricing power.", watch: "Same-store occupancy and leasing spreads." },
      { title: "Valuation", detail: "REIT multiples are sensitive to rates and growth.", watch: "Price/FFO and cap-rate comparisons." },
    ],
    watch: [
      { title: "Leasing spreads", detail: "Shows whether rents are rising or rolling down." },
      { title: "Occupancy", detail: "The leading indicator for cash flow." },
      { title: "Refinancing", detail: "Debt maturities determine interest-cost pressure." },
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
      { title: "AI cluster build-out", detail: "Compute, networking, optics and power equipment all scale with cluster size." },
      { title: "Customer expansion", detail: "Hyperscalers and neoclouds are adding capacity faster than traditional IT budgets." },
      { title: "Product content", detail: "More content per system can grow revenue faster than the underlying unit market." },
    ],
    risks: [
      { title: "Customer concentration", detail: "A handful of AI buyers can dominate revenue.", watch: "Customer disclosures and order trends." },
      { title: "Capex cycle", detail: "AI spending can pause if returns disappoint.", watch: "Hyperscaler capex guidance and backlog." },
      { title: "Supply chain", detail: "Optics, power and advanced packaging can be constrained.", watch: "Lead times and supplier concentration." },
      { title: "Competition", detail: "New entrants can pressure pricing as capacity catches up.", watch: "Design wins and gross margin." },
      { title: "Financing and dilution", detail: "Growth may require capital in a rising-rate environment.", watch: "Cash burn, debt and share count." },
    ],
    watch: [
      { title: "AI order momentum", detail: "Bookings and backlog are the leading indicator." },
      { title: "Gross margin", detail: "Mix and pricing determine whether growth creates value." },
      { title: "Cash burn", detail: "Growth companies must eventually fund themselves." },
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
      { title: "Inventory cycle", detail: "Inventory restocking and digestion drive near-term orders." },
      { title: "Node and packaging transitions", detail: "New technology raises content per system." },
      { title: "Customer design wins", detail: "Design wins lock in revenue for multiple product generations." },
    ],
    risks: [
      { title: "Semiconductor cycle", detail: "Inventory corrections can cut revenue quickly.", watch: "Inventory days and utilisation." },
      { title: "Customer concentration", detail: "A few customers can dominate revenue.", watch: "Top-customer disclosures." },
      { title: "Export controls", detail: "Cross-border rules can remove market access.", watch: "Geographic mix and licence changes." },
      { title: "Capital intensity", detail: "New capacity can pressure returns if demand slows.", watch: "Capex and depreciation." },
      { title: "Pricing", detail: "Capacity additions can turn scarcity into oversupply.", watch: "Average selling prices and gross margin." },
    ],
    watch: [
      { title: "Inventory", detail: "The cycle turns before reported revenue does." },
      { title: "Utilisation", detail: "Utilisation drives incremental margins." },
      { title: "Design wins", detail: "The pipeline determines the next upcycle." },
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
      { title: "Net revenue retention", detail: "Expansion within existing customers compounds revenue." },
      { title: "New customer adds", detail: "New logos broaden the base and fund future expansion." },
      { title: "Operating leverage", detail: "Scale should improve margins as sales and R&D mature." },
    ],
    risks: [
      { title: "Competition", detail: "Feature parity and bundling can pressure pricing.", watch: "Win rates and average contract value." },
      { title: "Retention", detail: "Churn or downselling can offset new sales.", watch: "Net revenue retention and renewal rates." },
      { title: "AI disruption", detail: "AI-native tools can change the software stack.", watch: "Product adoption and competitive launches." },
      { title: "Sales efficiency", detail: "Growth can become expensive if payback lengthens.", watch: "CAC payback and sales productivity." },
      { title: "Valuation", detail: "High multiples assume durable growth.", watch: "Forward ARR and margin estimates." },
    ],
    watch: [
      { title: "Net retention", detail: "The single most important SaaS metric." },
      { title: "Sales efficiency", detail: "Payback shows whether growth creates value." },
      { title: "Free cash flow", detail: "The bridge from growth to profitability." },
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
      { title: "Technical milestones", detail: "Qubit count, fidelity and error correction determine progress." },
      { title: "Government and enterprise funding", detail: "Contracts and grants fund development before revenue scales." },
      { title: "Cloud access", detail: "Cloud platforms can broaden access without full hardware ownership." },
    ],
    risks: [
      { title: "Commercialisation", detail: "Useful quantum advantage may be years away.", watch: "Technical milestones and customer pilots." },
      { title: "Cash burn", detail: "Development is expensive before revenue scales.", watch: "Cash runway and spending." },
      { title: "Dilution", detail: "Equity issuance may fund the gap.", watch: "Share count and ATM activity." },
      { title: "Competition", detail: "Large technology companies and startups are pursuing multiple architectures.", watch: "Architecture benchmarks and partnerships." },
      { title: "Valuation", detail: "Prices can discount a future that is far from certain.", watch: "Cash, backlog and milestone progress." },
    ],
    watch: [
      { title: "Technical progress", detail: "Milestones matter more than near-term revenue." },
      { title: "Cash runway", detail: "The funding gap determines dilution risk." },
      { title: "Commercial pilots", detail: "Pilots are the first evidence of demand." },
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
      { title: "Volume growth", detail: "Transactions and loans scale revenue." },
      { title: "Take rate", detail: "Pricing per transaction determines revenue per unit." },
      { title: "Funding and credit", detail: "Cheaper funding and stable credit improve margins." },
    ],
    risks: [
      { title: "Credit losses", detail: "A weaker consumer can raise charge-offs.", watch: "Delinquencies and provision trends." },
      { title: "Funding costs", detail: "Higher rates can compress spreads.", watch: "Cost of funds and deposit mix." },
      { title: "Regulation", detail: "Banking, lending and crypto rules can change the model.", watch: "Licensing and regulatory actions." },
      { title: "Competition", detail: "Banks and other platforms can match features.", watch: "Take rate and customer acquisition cost." },
      { title: "Valuation", detail: "Growth multiples can compress if credit normalises.", watch: "Forward revenue and credit guidance." },
    ],
    watch: [
      { title: "Credit quality", detail: "Delinquencies lead charge-offs." },
      { title: "Take rate", detail: "Revenue per transaction is the unit economics." },
      { title: "Funding", detail: "The cost and stability of funding drive margins." },
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
      { title: "Clinical data", detail: "Efficacy and safety readouts determine the programme's value." },
      { title: "Regulatory path", detail: "Approval and label scope decide the commercial opportunity." },
      { title: "Partnerships", detail: "Collaborations can fund development and validate the science." },
    ],
    risks: [
      { title: "Trial failure", detail: "A negative readout can remove most of the equity value.", watch: "Trial endpoints and readout timing." },
      { title: "Cash runway", detail: "Development costs can force financing.", watch: "Cash and quarterly burn." },
      { title: "Reimbursement", detail: "Payer coverage determines commercial uptake.", watch: "Pricing and payer decisions." },
      { title: "Competition", detail: "A better therapy can arrive first or be priced lower.", watch: "Competitor data and launch timing." },
      { title: "Dilution", detail: "Equity raises fund trials and manufacturing.", watch: "Share count and financing terms." },
    ],
    watch: [
      { title: "Cash runway", detail: "The number of quarters funded is a hard constraint." },
      { title: "Trial readouts", detail: "Binary events drive the equity." },
      { title: "Partner validation", detail: "A credible partner can de-risk the programme." },
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
      { title: "Launch cadence", detail: "More launches spread fixed costs and prove reliability." },
      { title: "Government budgets", detail: "Defense and space spending fund the addressable market." },
    ],
    risks: [
      { title: "Contract concentration", detail: "A few government or commercial customers can dominate revenue.", watch: "Backlog and customer mix." },
      { title: "Execution", detail: "Launch or satellite failures can delay revenue.", watch: "Mission success and schedule." },
      { title: "Cash burn", detail: "Development and manufacturing consume cash before scale.", watch: "Cash runway and capex." },
      { title: "Regulation", detail: "Licences and spectrum rules can constrain operations.", watch: "FCC, FAA and defense approvals." },
      { title: "Dilution", detail: "Capital raises may fund the gap to profitability.", watch: "Share count and financing." },
    ],
    watch: [
      { title: "Backlog", detail: "Contracted revenue is the base for forecasts." },
      { title: "Mission cadence", detail: "Reliability and cadence determine customer confidence." },
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
      { title: "Power demand", detail: "Data centers and electrification are increasing long-run electricity demand." },
      { title: "Policy support", detail: "Tax credits and government programmes can improve project economics." },
      { title: "Contracted capacity", detail: "Long-term agreements can underwrite new build." },
    ],
    risks: [
      { title: "Permitting", detail: "Licensing can take years and change project economics.", watch: "Regulatory milestones and dockets." },
      { title: "Construction execution", detail: "Cost and schedule overruns are common in large projects.", watch: "Capex guidance and project updates." },
      { title: "Financing", detail: "Capital intensity can require debt and equity.", watch: "Funding commitments and dilution." },
      { title: "Commodity prices", detail: "Uranium and power prices affect project value.", watch: "Contract prices and spot exposure." },
      { title: "Technology risk", detail: "New reactor designs have limited operating history.", watch: "Design certification and first-of-a-kind costs." },
    ],
    watch: [
      { title: "Permits", detail: "Licensing is the gate to revenue." },
      { title: "Contracted offtake", detail: "Long-term agreements support project finance." },
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
      { title: "Unit growth", detail: "New stores, products or users expand the revenue base." },
      { title: "Brand pricing", detail: "Pricing power shows whether the brand is strengthening." },
      { title: "Repeat purchase", detail: "Retention determines the lifetime value of a customer." },
    ],
    risks: [
      { title: "Consumer trends", detail: "Tastes and fashions can change quickly.", watch: "Comparable sales and repeat rates." },
      { title: "Competition", detail: "New brands can take share with lower prices.", watch: "Market share and promotional activity." },
      { title: "Input costs", detail: "Ingredients, freight and labour can pressure margins.", watch: "Gross margin and price increases." },
      { title: "Expansion execution", detail: "New stores or products may not earn the same returns.", watch: "New-unit productivity and payback." },
      { title: "Valuation", detail: "High-growth brands can de-rate quickly.", watch: "Forward growth versus multiple." },
    ],
    watch: [
      { title: "Comparable sales", detail: "Shows demand without new units." },
      { title: "Repeat purchase", detail: "Retention is the proof of brand strength." },
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
      { title: "Backlog and orders", detail: "Order momentum shows where the cycle is heading." },
      { title: "Price and productivity", detail: "Pricing and cost programmes protect margins." },
      { title: "End-market recovery", detail: "Construction, manufacturing and infrastructure spending drive demand." },
    ],
    risks: [
      { title: "Cycle", detail: "Demand can fall faster than costs.", watch: "Orders, backlog and utilisation." },
      { title: "Input costs", detail: "Materials and labour can outrun price.", watch: "Price-cost spread." },
      { title: "Execution", detail: "Project and acquisition execution can hit margins.", watch: "Segment margins and project updates." },
      { title: "Leverage", detail: "Debt can constrain the downturn strategy.", watch: "Net debt/EBITDA and maturities." },
      { title: "Valuation", detail: "Peak earnings can make multiples look low.", watch: "Mid-cycle margins." },
    ],
    watch: [
      { title: "Orders", detail: "The leading indicator for the cycle." },
      { title: "Price-cost", detail: "Protects margins through inflation." },
      { title: "Balance sheet", detail: "Leverage determines downturn resilience." },
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
      { title: "Premium growth", detail: "New business and rate increases expand the revenue base." },
      { title: "Underwriting margin", detail: "Combined ratio determines whether growth is profitable." },
      { title: "Reserve development", detail: "Favourable reserves can release earnings." },
    ],
    risks: [
      { title: "Catastrophe losses", detail: "A single event can dominate the year.", watch: "Catastrophe exposure and reinsurance." },
      { title: "Reserve adequacy", detail: "Under-reserving can surface years later.", watch: "Prior-year reserve development." },
      { title: "Pricing cycle", detail: "Soft markets can erode underwriting margins.", watch: "Rate change and retention." },
      { title: "Investment income", detail: "Rates and asset mix drive investment returns.", watch: "Book yield and duration." },
      { title: "Valuation", detail: "Premium multiples assume disciplined growth.", watch: "Price/book and ROE." },
    ],
    watch: [
      { title: "Combined ratio", detail: "The cleanest measure of underwriting profitability." },
      { title: "Reserve development", detail: "Releases or charges reveal reserve quality." },
      { title: "Rate", detail: "Pricing versus loss trends determines margin." },
    ],
    questions: [
      "What is the catastrophe loss budget?",
      "Are reserves redundant or deficient?",
      "How much growth is rate versus exposure?",
      "What does a soft market do to returns?",
    ],
  },
};

const GROUP_BUCKET: Record<string, string> = {
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

function money(value: number | null | undefined, currency = "USD"): string {
  return formatCompactCurrency(value, currency);
}

function growth(value: number | null | undefined): string {
  return value == null ? "not available" : formatSignedPercent(value);
}

function latestQuarter(bundle: ResearchBundle) {
  return [...bundle.data.quarterly].filter((row) => !row.ttm).at(-1) ?? null;
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
  const group =
    data.market === "IN"
      ? getIndiaCoverageGroup(data.ticker)
      : getCoverageGroup(data.ticker);
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
  const estimate = consensus?.estimates.find((item) => item.period === "Current fiscal year");
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
      { title: "Revenue base", detail: `${money(revenue)} on a trailing-twelve-month basis.` },
      { title: "Profitability", detail: `Operating margin ${formatPercent(opMargin)}; free-cash-flow margin ${formatPercent(fcfMargin)}.` },
      { title: "Scale", detail: `Market capitalization ${money(data.latestPrice.marketCap)} at the latest close.` },
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
    intro: "The risks below are the ones that matter most for this business given its financial profile. They are qualitative descriptors, not a rating.",
    items: riskItems,
    watchlist: bucket.watch,
  };

  const bottomLine = {
    paragraphs: [
      `${name} is a ${sectorLabel} company with ${money(revenue)} of trailing revenue, a ${formatPercent(opMargin)} operating margin and ${formatPercent(fcfMargin)} free-cash-flow margin. Those are the facts; the interpretation depends on whether the current growth and margin are durable.`,
      `${target != null ? `The third-party consensus mean target is ${price(target)} as of ${consensus?.asOf ?? "the latest snapshot"}. ` : ""}Stockmonk does not publish a rating or a target. The useful next step is to compare the company's multiples with its own history and with the peer set below, then decide which risk matters most.`,
      `The percentile scorecard below places the company within the ${
        data.market === "IN" ? "100-name India coverage universe" : "229-name coverage universe"
      }. A high growth score with a low balance-sheet score is a different proposition from the reverse, and neither is automatically good or bad.`,
    ],
    questions: bucket.questions,
  };

  const avgFactor = Math.round(
    (factors.growth + factors.profitability + factors.cash + factors.balance + factors.valuation) / 5,
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
