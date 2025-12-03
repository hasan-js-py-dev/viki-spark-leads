export interface CaseStudy {
  id: number;
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  testimonial: { quote: string; author: string; title: string };
  timeline: string;
  servicesUsed: string[];
  fullStory: string;
  metaTitle: string;
  metaDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "saas-company-340-pipeline-growth",
    company: "TechFlow Solutions",
    industry: "SaaS / Technology",
    challenge: "TechFlow was struggling with 28% email bounce rates and spending $15,000/year on ZoomInfo with diminishing returns. Their SDR team wasted hours on manual prospecting.",
    solution: "VikiLeads provided 25,000 verified contacts from LinkedIn Sales Navigator with 95%+ email accuracy, plus ongoing monthly data refreshes.",
    results: [
      { metric: "Pipeline Growth", value: "340%" },
      { metric: "Bounce Rate", value: "2.3%" },
      { metric: "Cost Savings", value: "$12K/yr" },
      { metric: "Meetings Booked", value: "156/mo" }
    ],
    testimonial: {
      quote: "VikiLeads transformed our outbound. We went from dreading bounce rates to confidently scaling our campaigns. The data quality is unmatched.",
      author: "Sarah Chen",
      title: "VP of Sales, TechFlow Solutions"
    },
    timeline: "90 days",
    servicesUsed: ["LinkedIn Sales Navigator Scraping", "Email Verification", "Data Enrichment"],
    fullStory: "TechFlow Solutions, a B2B SaaS company selling project management software, was facing a critical challenge. Their outbound sales program was underperforming despite significant investment in tools and headcount.\n\nThe core issue was data quality. Using a major data provider, they experienced bounce rates averaging 28%, which damaged their sender reputation and frustrated their SDR team. Each rep spent 2+ hours daily on manual research to supplement their purchased data.\n\nAfter switching to VikiLeads, the transformation was immediate. We provided an initial batch of 25,000 contacts matching their ICP: Director+ titles at mid-market software companies. Every email was verified at the point of delivery.\n\nWithin 90 days, TechFlow saw their bounce rate drop to 2.3%, their meeting booking rate increase 340%, and they cancelled their $15,000 annual ZoomInfo subscription. The ROI was clear and measurable.",
    metaTitle: "TechFlow SaaS Case Study - 340% Pipeline Growth | VikiLeads",
    metaDescription: "See how TechFlow Solutions achieved 340% pipeline growth and reduced bounce rates from 28% to 2.3% with VikiLeads verified B2B data."
  },
  {
    id: 2,
    slug: "marketing-agency-client-acquisition",
    company: "GrowthSpark Agency",
    industry: "Marketing Agency",
    challenge: "GrowthSpark needed to rapidly scale their client acquisition to meet investor growth targets but couldn't find quality leads for DTC eCommerce brands.",
    solution: "VikiLeads delivered 15,000 eCommerce brand decision-makers with verified emails, company revenue estimates, and technology stack data.",
    results: [
      { metric: "New Clients", value: "47" },
      { metric: "Revenue Growth", value: "$2.1M" },
      { metric: "Cost Per Lead", value: "-67%" },
      { metric: "Response Rate", value: "12%" }
    ],
    testimonial: {
      quote: "Finding quality DTC brand contacts was impossible until VikiLeads. They understood our niche and delivered exactly the decision-makers we needed.",
      author: "Marcus Johnson",
      title: "Founder, GrowthSpark Agency"
    },
    timeline: "6 months",
    servicesUsed: ["eCommerce Leads", "Data Enrichment", "Custom Research"],
    fullStory: "GrowthSpark Agency specializes in paid social advertising for DTC eCommerce brands. After raising a seed round, they needed to triple their client base within a year.\n\nTheir challenge: finding accurate contact information for founders and marketing leaders at growing DTC brands. Traditional B2B databases focused on enterprise companies, not the fast-moving eCommerce space.\n\nVikiLeads created a custom solution. We scraped Shopify store data, cross-referenced with LinkedIn for decision-maker contacts, and enriched with company revenue estimates and tech stack information.\n\nThe results exceeded expectations. GrowthSpark acquired 47 new clients in 6 months, generating $2.1M in new annual recurring revenue. Their cost per acquired client dropped 67% compared to their previous outbound efforts.",
    metaTitle: "GrowthSpark Agency Case Study - $2.1M Revenue Growth | VikiLeads",
    metaDescription: "Learn how GrowthSpark Agency acquired 47 new clients and $2.1M revenue using VikiLeads eCommerce brand leads."
  },
  {
    id: 3,
    slug: "real-estate-investor-deal-flow",
    company: "Pinnacle Capital Partners",
    industry: "Real Estate",
    challenge: "Pinnacle needed to identify off-market commercial property owners but existing databases had outdated ownership information and missing contact details.",
    solution: "VikiLeads provided custom property owner research with verified direct contacts, including personal emails and mobile numbers for key decision-makers.",
    results: [
      { metric: "Deals Closed", value: "23" },
      { metric: "Deal Volume", value: "$47M" },
      { metric: "Contact Rate", value: "340%" },
      { metric: "Time Saved", value: "30hrs/wk" }
    ],
    testimonial: {
      quote: "The personal contact information VikiLeads provides is invaluable. We're reaching property owners that our competitors can't even find.",
      author: "David Rodriguez",
      title: "Managing Partner, Pinnacle Capital"
    },
    timeline: "12 months",
    servicesUsed: ["Manual Research", "Personal Phone Enrichment", "Custom Data Projects"],
    fullStory: "Pinnacle Capital Partners acquires commercial real estate properties in secondary markets. Their competitive advantage depends on finding off-market deals before other investors.\n\nThe challenge was reaching property owners directly. Public records showed ownership, but contact information was often outdated or led to property managers rather than decision-makers.\n\nVikiLeads deployed our manual research team to build a custom database. For each target property, we identified the actual ownership structure, found the key decision-makers, and provided verified direct contact information including personal emails and mobile numbers.\n\nOver 12 months, Pinnacle closed 23 deals totaling $47M in transaction volume. Their contact rate with property owners increased 340%, and their acquisition team saved an estimated 30 hours per week on research.",
    metaTitle: "Pinnacle Capital Case Study - $47M Deal Volume | VikiLeads",
    metaDescription: "Discover how Pinnacle Capital Partners closed $47M in real estate deals using VikiLeads custom property owner research."
  },
  {
    id: 4,
    slug: "recruiting-firm-candidate-sourcing",
    company: "Elite Talent Partners",
    industry: "Recruiting & Staffing",
    challenge: "Elite Talent struggled to find passive candidates for executive searches. LinkedIn InMails had low response rates and they lacked direct contact information.",
    solution: "VikiLeads provided LinkedIn profile enrichment with personal emails and phone numbers for executive-level candidates across target industries.",
    results: [
      { metric: "Placements", value: "+85%" },
      { metric: "Response Rate", value: "4x" },
      { metric: "Time to Fill", value: "-40%" },
      { metric: "Revenue/Recruiter", value: "+$180K" }
    ],
    testimonial: {
      quote: "Having personal contact info for passive candidates changed our business. We reach executives directly instead of hoping they check LinkedIn.",
      author: "Jennifer Walsh",
      title: "CEO, Elite Talent Partners"
    },
    timeline: "6 months",
    servicesUsed: ["LinkedIn URL Enrichment", "Personal Phone Enrichment", "Email Verification"],
    fullStory: "Elite Talent Partners is an executive search firm specializing in C-suite and VP-level placements. Their success depends on reaching passive candidates who aren't actively job searching.\n\nThe problem: LinkedIn InMail response rates had dropped below 5%, and candidates rarely responded to connection requests. They needed direct access to reach executives outside of LinkedIn.\n\nVikiLeads provided LinkedIn URL enrichment at scale. For each candidate profile, we found verified personal email addresses and mobile phone numbers. This allowed Elite Talent to reach candidates through multiple channels.\n\nThe impact was transformative. Response rates quadrupled, time-to-fill decreased 40%, and placements increased 85%. Revenue per recruiter increased by $180,000 annually.",
    metaTitle: "Elite Talent Case Study - 85% More Placements | VikiLeads",
    metaDescription: "See how Elite Talent Partners increased executive placements by 85% using VikiLeads LinkedIn enrichment services."
  },
  {
    id: 5,
    slug: "fintech-startup-enterprise-sales",
    company: "PayStream Technologies",
    industry: "Financial Services",
    challenge: "PayStream needed to break into enterprise accounts but lacked accurate contact data for finance leaders at Fortune 1000 companies.",
    solution: "VikiLeads provided account-mapped contact lists with verified emails for CFOs, Controllers, and Treasury leaders at target enterprise accounts.",
    results: [
      { metric: "Enterprise Deals", value: "12" },
      { metric: "ARR Added", value: "$3.2M" },
      { metric: "Email Accuracy", value: "97%" },
      { metric: "Sales Cycle", value: "-25%" }
    ],
    testimonial: {
      quote: "VikiLeads helped us crack the enterprise market. Their account mapping gave us visibility into the entire buying committee at each target account.",
      author: "Michael Torres",
      title: "CRO, PayStream Technologies"
    },
    timeline: "9 months",
    servicesUsed: ["B2B Targeted Leads", "Account Mapping", "ZoomInfo Alternative"],
    fullStory: "PayStream Technologies offers payment automation software for enterprise finance teams. After successfully selling to mid-market companies, they were ready to move upmarket.\n\nThe challenge was data coverage. Their existing provider had gaps in coverage for finance roles at large enterprises, and accuracy was inconsistent for senior titles.\n\nVikiLeads created custom account maps for 200 target Fortune 1000 companies. For each account, we identified the full buying committee: CFO, VP Finance, Controller, Treasury, and AP/AR leaders. Every contact was verified for current role and email deliverability.\n\nWithin 9 months, PayStream closed 12 enterprise deals worth $3.2M in new ARR. Their sales cycle shortened by 25% because they engaged all stakeholders from the start.",
    metaTitle: "PayStream FinTech Case Study - $3.2M ARR | VikiLeads",
    metaDescription: "Learn how PayStream Technologies added $3.2M ARR from enterprise deals using VikiLeads account-mapped contact data."
  },
  {
    id: 6,
    slug: "healthcare-saas-hospital-outreach",
    company: "CareConnect Platform",
    industry: "Healthcare",
    challenge: "CareConnect struggled to identify the right decision-makers at hospital systems. Org structures were complex and publicly available data was unreliable.",
    solution: "VikiLeads provided custom research on hospital system executives with verified direct contacts and org chart mapping.",
    results: [
      { metric: "Hospital Clients", value: "34" },
      { metric: "Pipeline Value", value: "$8.5M" },
      { metric: "Accuracy Rate", value: "94%" },
      { metric: "Outreach Efficiency", value: "+200%" }
    ],
    testimonial: {
      quote: "Healthcare decision-makers are notoriously hard to reach. VikiLeads cracked the code with their research team and gave us a real competitive advantage.",
      author: "Dr. Amanda Foster",
      title: "VP Sales, CareConnect Platform"
    },
    timeline: "12 months",
    servicesUsed: ["Manual Prospect Research", "Healthcare Leads", "Custom Data Projects"],
    fullStory: "CareConnect Platform provides patient engagement software to hospital systems. Selling into healthcare requires reaching the right people: CIOs, CMIOs, Chief Nursing Officers, and department heads.\n\nThe challenge was accuracy. Hospital systems have complex hierarchies, and executives change roles frequently. Generic B2B databases had outdated information and missed many key contacts.\n\nVikiLeads assigned a dedicated research team to build a custom healthcare database. We mapped org structures at 500 hospital systems, identified all relevant decision-makers, and verified contact information through multiple sources.\n\nThe results: CareConnect signed 34 new hospital clients in 12 months, with a pipeline value of $8.5M. Their outreach efficiency improved 200% because they were contacting the right people from day one.",
    metaTitle: "CareConnect Healthcare Case Study - 34 Hospital Clients | VikiLeads",
    metaDescription: "Discover how CareConnect Platform signed 34 hospital clients using VikiLeads custom healthcare executive research."
  },
  {
    id: 7,
    slug: "manufacturing-supplier-expansion",
    company: "Industrial Supply Co",
    industry: "Manufacturing",
    challenge: "Industrial Supply needed to expand into new territories but lacked data on manufacturing facilities, plant managers, and procurement contacts.",
    solution: "VikiLeads provided Google Maps scraping of manufacturing facilities combined with decision-maker enrichment for procurement and operations leaders.",
    results: [
      { metric: "New Accounts", value: "156" },
      { metric: "Revenue Growth", value: "$4.7M" },
      { metric: "Territory Coverage", value: "8 states" },
      { metric: "Lead Cost", value: "$0.12" }
    ],
    testimonial: {
      quote: "VikiLeads gave us visibility into manufacturing facilities we didn't know existed. Our territory expansion exceeded all targets.",
      author: "Robert Kim",
      title: "National Sales Director, Industrial Supply Co"
    },
    timeline: "8 months",
    servicesUsed: ["Google Maps Scraping", "Data Enrichment", "B2B Targeted Leads"],
    fullStory: "Industrial Supply Co distributes MRO supplies to manufacturing facilities. They wanted to expand from their core 3-state territory into 8 additional states.\n\nThe challenge was identifying target facilities. Manufacturing plants don't always show up in traditional B2B databases, especially smaller operations. They needed comprehensive facility data with decision-maker contacts.\n\nVikiLeads used Google Maps scraping to identify 12,000 manufacturing facilities across the target states. We then enriched each facility with plant manager, operations director, and procurement contact information.\n\nWithin 8 months, Industrial Supply opened 156 new accounts generating $4.7M in revenue. Their cost per lead was just $0.12, a fraction of their previous marketing spend.",
    metaTitle: "Industrial Supply Case Study - $4.7M Growth | VikiLeads",
    metaDescription: "See how Industrial Supply Co expanded into 8 new states and added $4.7M revenue using VikiLeads manufacturing facility data."
  }
];
