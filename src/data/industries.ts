import { 
  Building2, 
  Briefcase, 
  HeartPulse, 
  GraduationCap, 
  Factory, 
  Landmark, 
  ShoppingCart, 
  Cpu, 
  Home, 
  Truck 
} from 'lucide-react';

export interface Industry {
  id: string;
  slug: string;
  name: string;
  icon: typeof Building2;
  tagline: string;
  description: string;
  painPoints: string[];
  benefits: string[];
  useCases: string[];
  targetAudience: string[];
  metaTitle: string;
  metaDescription: string;
}

export const industries: Industry[] = [
  {
    id: 'saas',
    slug: 'saas-software',
    name: 'SaaS & Software',
    icon: Cpu,
    tagline: 'Scale your software sales with decision-maker contacts',
    description: 'The SaaS industry thrives on reaching the right decision-makers at the right time. VikiLeads provides verified B2B contact lists of CTOs, IT Directors, and tech buyers actively seeking software solutions. Our data helps SaaS companies accelerate their sales cycles and improve conversion rates.',
    painPoints: [
      'Long sales cycles due to reaching wrong contacts',
      'Low response rates from generic outreach',
      'Difficulty identifying companies with buying intent',
      'High customer acquisition costs'
    ],
    benefits: [
      'Access to 97%+ verified tech decision-maker emails',
      'Company technographic data for personalized pitches',
      'Intent signals to identify active buyers',
      'Reduced CAC by 40% on average'
    ],
    useCases: [
      'Product launch outreach campaigns',
      'Free trial user acquisition',
      'Enterprise account penetration',
      'Competitive displacement campaigns'
    ],
    targetAudience: ['CTOs', 'IT Directors', 'VP of Engineering', 'Product Managers', 'Procurement Managers'],
    metaTitle: 'B2B Leads for SaaS & Software Companies | VikiLeads',
    metaDescription: 'Get verified B2B contact lists for SaaS sales. Reach CTOs, IT Directors & tech buyers. 97% email deliverability. Start with 100 free leads.'
  },
  {
    id: 'marketing-agencies',
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    icon: Briefcase,
    tagline: 'Find brands ready to invest in marketing services',
    description: 'Marketing agencies need a constant pipeline of businesses looking to grow. VikiLeads delivers contacts of marketing managers, CMOs, and business owners who are actively seeking agency partnerships. Our data includes company size, industry, and growth indicators to help you target the perfect clients.',
    painPoints: [
      'Inconsistent lead flow affecting revenue',
      'Time wasted on unqualified prospects',
      'Difficulty proving ROI to potential clients',
      'Competition from other agencies'
    ],
    benefits: [
      'Pre-qualified leads with marketing budgets',
      'Company growth signals and hiring data',
      'Direct contacts bypassing gatekeepers',
      'Industry-specific targeting options'
    ],
    useCases: [
      'New client acquisition campaigns',
      'Service-specific outreach (SEO, PPC, Social)',
      'Retainer upselling to existing clients',
      'Partnership and white-label opportunities'
    ],
    targetAudience: ['CMOs', 'Marketing Directors', 'Business Owners', 'Brand Managers', 'E-commerce Managers'],
    metaTitle: 'B2B Leads for Marketing Agencies | VikiLeads',
    metaDescription: 'Find clients for your marketing agency with verified B2B leads. Target CMOs, marketing directors & business owners. Get 100 free leads today.'
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    icon: Home,
    tagline: 'Connect with property investors and commercial buyers',
    description: 'Real estate professionals need access to investors, property managers, and commercial buyers. VikiLeads provides targeted contacts for residential and commercial real estate, including investor portfolios, property management companies, and corporate real estate decision-makers.',
    painPoints: [
      'Finding qualified investors and buyers',
      'Long transaction cycles',
      'Market saturation and competition',
      'Reaching corporate real estate teams'
    ],
    benefits: [
      'Verified investor and buyer contacts',
      'Property portfolio and investment history data',
      'Geographic and property-type targeting',
      'Direct access to corporate RE departments'
    ],
    useCases: [
      'Investment property marketing',
      'Commercial lease prospecting',
      'Property management service outreach',
      'Development partnership opportunities'
    ],
    targetAudience: ['Real Estate Investors', 'Property Managers', 'Corporate RE Directors', 'Developers', 'REITs'],
    metaTitle: 'B2B Leads for Real Estate Professionals | VikiLeads',
    metaDescription: 'Get verified real estate investor and buyer contacts. Target property managers, corporate RE teams & developers. 100 free leads available.'
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Medical',
    icon: HeartPulse,
    tagline: 'Reach healthcare decision-makers and administrators',
    description: 'Healthcare sales require reaching administrators, practitioners, and procurement teams. VikiLeads provides HIPAA-aware B2B contact data for hospitals, clinics, medical practices, and healthcare technology buyers. Our data helps medical sales teams connect with the right stakeholders.',
    painPoints: [
      'Complex buying committees in healthcare',
      'Strict compliance requirements',
      'Long procurement cycles',
      'Difficulty reaching busy practitioners'
    ],
    benefits: [
      'Verified healthcare administrator contacts',
      'Hospital and clinic decision-maker data',
      'Specialty and practice-type targeting',
      'Compliance-friendly data sourcing'
    ],
    useCases: [
      'Medical device sales outreach',
      'Healthcare IT solution marketing',
      'Pharmaceutical B2B campaigns',
      'Healthcare staffing services'
    ],
    targetAudience: ['Hospital Administrators', 'Practice Managers', 'Medical Directors', 'Procurement Officers', 'IT Directors'],
    metaTitle: 'B2B Leads for Healthcare Industry | VikiLeads',
    metaDescription: 'Get verified healthcare B2B contacts. Reach hospital administrators, medical directors & procurement teams. Start with 100 free leads.'
  },
  {
    id: 'financial-services',
    slug: 'financial-services',
    name: 'Financial Services',
    icon: Landmark,
    tagline: 'Target financial decision-makers and institutions',
    description: 'Financial services companies need access to CFOs, finance directors, and institutional buyers. VikiLeads delivers verified contacts in banking, insurance, wealth management, and fintech. Our data helps financial service providers connect with qualified prospects.',
    painPoints: [
      'Heavily regulated industry limiting outreach',
      'High-value deals requiring senior contacts',
      'Long relationship-building cycles',
      'Trust and credibility challenges'
    ],
    benefits: [
      'C-suite and senior finance contacts',
      'Company financial health indicators',
      'Industry and company size segmentation',
      'Institutional and enterprise targeting'
    ],
    useCases: [
      'B2B financial product marketing',
      'Corporate banking relationship building',
      'Insurance and benefits sales',
      'Fintech solution outreach'
    ],
    targetAudience: ['CFOs', 'Finance Directors', 'Controllers', 'Treasury Managers', 'Risk Officers'],
    metaTitle: 'B2B Leads for Financial Services | VikiLeads',
    metaDescription: 'Get verified financial services B2B contacts. Target CFOs, finance directors & institutional buyers. 100 free leads to start.'
  },
  {
    id: 'manufacturing',
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    tagline: 'Connect with plant managers and procurement teams',
    description: 'Manufacturing sales require reaching plant managers, operations directors, and procurement teams. VikiLeads provides verified contacts for manufacturing facilities, including company size, equipment needs, and purchasing patterns. Our data accelerates B2B manufacturing sales.',
    painPoints: [
      'Reaching decision-makers in large facilities',
      'Understanding equipment and supply needs',
      'Long RFP and procurement cycles',
      'Geographic targeting challenges'
    ],
    benefits: [
      'Plant manager and ops director contacts',
      'Facility size and production data',
      'Equipment and technology indicators',
      'Multi-location company mapping'
    ],
    useCases: [
      'Industrial equipment sales',
      'Raw material supplier outreach',
      'Manufacturing software marketing',
      'Logistics and supply chain services'
    ],
    targetAudience: ['Plant Managers', 'Operations Directors', 'Procurement Managers', 'Supply Chain Directors', 'Quality Managers'],
    metaTitle: 'B2B Leads for Manufacturing Industry | VikiLeads',
    metaDescription: 'Get verified manufacturing B2B contacts. Reach plant managers, procurement & operations teams. Start with 100 free leads.'
  },
  {
    id: 'ecommerce-retail',
    slug: 'ecommerce-retail',
    name: 'E-commerce & Retail',
    icon: ShoppingCart,
    tagline: 'Reach online retailers and brand owners',
    description: 'E-commerce and retail businesses need solutions for growth, logistics, and operations. VikiLeads provides contacts for e-commerce store owners, retail chains, and DTC brands. Our data includes platform usage, store size, and growth indicators for precise targeting.',
    painPoints: [
      'Highly competitive market',
      'Fast-moving industry trends',
      'Identifying growing vs struggling stores',
      'Multi-channel seller complexity'
    ],
    benefits: [
      'Verified e-commerce owner contacts',
      'Platform and technology stack data',
      'Revenue and growth indicators',
      'Product category targeting'
    ],
    useCases: [
      'E-commerce tool and app marketing',
      'Logistics and fulfillment services',
      'Payment and fintech solutions',
      'Marketing agency client acquisition'
    ],
    targetAudience: ['E-commerce Founders', 'Retail Directors', 'DTC Brand Owners', 'Category Managers', 'Operations Managers'],
    metaTitle: 'B2B Leads for E-commerce & Retail | VikiLeads',
    metaDescription: 'Get verified e-commerce and retail B2B contacts. Target store owners, brand managers & retail directors. 100 free leads available.'
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & EdTech',
    icon: GraduationCap,
    tagline: 'Connect with schools, universities, and EdTech buyers',
    description: 'Education sales require reaching administrators, IT directors, and curriculum planners. VikiLeads provides contacts for K-12 schools, universities, corporate training departments, and EdTech companies. Our data helps education vendors connect with decision-makers.',
    painPoints: [
      'Budget cycles and seasonal buying',
      'Complex committee decisions',
      'Long implementation timelines',
      'Proving educational outcomes'
    ],
    benefits: [
      'School and district administrator contacts',
      'University department head data',
      'Corporate L&D decision-makers',
      'EdTech buyer and user contacts'
    ],
    useCases: [
      'EdTech product launches',
      'Curriculum and content licensing',
      'Corporate training solutions',
      'Campus technology sales'
    ],
    targetAudience: ['School Administrators', 'IT Directors', 'Curriculum Directors', 'L&D Managers', 'Department Heads'],
    metaTitle: 'B2B Leads for Education & EdTech | VikiLeads',
    metaDescription: 'Get verified education B2B contacts. Reach school administrators, university buyers & L&D managers. Start with 100 free leads.'
  },
  {
    id: 'recruitment',
    slug: 'recruitment-staffing',
    name: 'Recruitment & Staffing',
    icon: Building2,
    tagline: 'Find HR leaders and hiring managers',
    description: 'Recruitment and staffing agencies need access to HR directors, hiring managers, and talent acquisition teams. VikiLeads provides verified contacts for companies actively hiring, including headcount growth data and hiring patterns to identify hot prospects.',
    painPoints: [
      'Finding companies with active hiring needs',
      'Competition from other agencies',
      'Building long-term client relationships',
      'Identifying decision-makers vs coordinators'
    ],
    benefits: [
      'HR and talent acquisition contacts',
      'Company hiring and growth signals',
      'Industry and role-specific targeting',
      'Multi-location company data'
    ],
    useCases: [
      'Staffing agency business development',
      'Executive search firm outreach',
      'HR tech solution marketing',
      'Recruitment marketing services'
    ],
    targetAudience: ['HR Directors', 'Talent Acquisition Managers', 'Hiring Managers', 'CHROs', 'Recruitment Coordinators'],
    metaTitle: 'B2B Leads for Recruitment & Staffing | VikiLeads',
    metaDescription: 'Get verified HR and recruitment B2B contacts. Target HR directors, talent acquisition & hiring managers. 100 free leads to start.'
  },
  {
    id: 'logistics',
    slug: 'logistics-transportation',
    name: 'Logistics & Transportation',
    icon: Truck,
    tagline: 'Reach shipping managers and supply chain leaders',
    description: 'Logistics companies need access to supply chain directors, shipping managers, and operations teams. VikiLeads provides verified contacts for shippers, carriers, and companies with complex supply chain needs. Our data helps logistics providers win more business.',
    painPoints: [
      'Commodity pricing pressure',
      'Long contract negotiation cycles',
      'Identifying companies with shipping volume',
      'Multi-stakeholder decision processes'
    ],
    benefits: [
      'Supply chain and logistics contacts',
      'Shipping volume and pattern indicators',
      'Geographic and lane-specific targeting',
      'Multi-facility company data'
    ],
    useCases: [
      'Freight and carrier sales',
      'Logistics software marketing',
      'Warehousing and 3PL services',
      'Fleet management solutions'
    ],
    targetAudience: ['Supply Chain Directors', 'Logistics Managers', 'Shipping Coordinators', 'Operations VPs', 'Procurement Directors'],
    metaTitle: 'B2B Leads for Logistics & Transportation | VikiLeads',
    metaDescription: 'Get verified logistics B2B contacts. Reach supply chain directors, shipping managers & operations teams. Start with 100 free leads.'
  }
];
