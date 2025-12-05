import { 
  Target, Users, Search, Phone, Database, Mail, Zap, Settings, 
  Globe, MapPin, Building2, Linkedin, UserSearch, ShieldCheck,
  Bot, Layers, RefreshCw, FileSpreadsheet, Briefcase
} from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  credits: number;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  icon: typeof Target;
  title: string;
  tagline: string;
  description: string;
  heroDescription: string;
  gradient: string;
  services: Service[];
  benefits: string[];
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    icon: Target,
    title: 'Lead Generation',
    tagline: 'Precision-Targeted B2B & eCommerce Leads',
    description: 'Get high-quality, verified leads that match your ideal customer profile.',
    heroDescription: 'Stop wasting time on unqualified prospects. Our lead generation services deliver precision-targeted contacts with verified emails and direct dials, ensuring higher conversion rates and better ROI for your sales team.',
    gradient: 'from-cyan-500 to-blue-600',
    services: [
      { id: 'b2b-leads', name: 'B2B Targeted Leads', description: 'Custom B2B contact lists matched to your ICP with verified emails & direct dials', credits: 500, popular: true },
      { id: 'ecommerce-leads', name: 'eCommerce Leads', description: 'Targeted eCommerce store owners and decision makers', credits: 500 },
      { id: 'intent-leads', name: 'Intent-Based Leads', description: 'Contacts showing buying intent signals for your product/service', credits: 600, popular: true },
      { id: 'event-leads', name: 'Event & Webinar Attendees', description: 'Leads from industry conferences, webinars, and trade shows', credits: 550 },
      { id: 'hiring-signals', name: 'Hiring Signal Leads', description: 'Companies actively hiring for roles related to your solution', credits: 500 },
      { id: 'funding-leads', name: 'Recently Funded Companies', description: 'Startups and companies that recently raised funding', credits: 550 },
    ],
    benefits: [
      '97%+ email deliverability guarantee',
      'Direct dial phone numbers included',
      'Custom firmographic & technographic filters',
      'LinkedIn profile URLs for personalization',
      'Job title and seniority targeting',
      'Company size and revenue filtering',
    ],
    useCases: [
      'Sales teams looking to fill their pipeline',
      'Marketing teams for ABM campaigns',
      'Recruiters seeking decision makers',
      'Agencies building prospect lists for clients',
    ],
    faqs: [
      { question: 'How accurate are the contact lists?', answer: 'We guarantee 97%+ accuracy on all email addresses. Any bounces beyond this threshold are replaced free of charge.' },
      { question: 'What information is included?', answer: 'Each contact includes: Full name, job title, company, email, phone (when available), LinkedIn URL, and company details like industry, size, and revenue.' },
      { question: 'How long does delivery take?', answer: 'Most lists are delivered within 48-72 hours. Larger orders or complex requirements may take 5-7 business days.' },
    ],
  },
  {
    id: 'data-enrichment',
    slug: 'data-enrichment',
    icon: RefreshCw,
    title: 'Data Enrichment',
    tagline: 'Enhance Your Existing Data',
    description: 'Enrich your contacts with emails, phones, LinkedIn data, and more.',
    heroDescription: 'Transform your incomplete contact lists into actionable sales assets. Our enrichment services add verified emails, direct dial phone numbers, LinkedIn profiles, and company data to maximize your outreach effectiveness.',
    gradient: 'from-purple-500 to-pink-600',
    services: [
      { id: 'linkedin-enrichment', name: 'LinkedIn URL Enrichment', description: 'Add comprehensive LinkedIn profile data to your contacts', credits: 500, popular: true },
      { id: 'email-enrichment', name: 'Email Enrichment', description: 'Find and verify business email addresses for your contacts', credits: 500 },
      { id: 'phone-enrichment', name: 'Phone Number Enrichment', description: 'Add verified direct dials and mobile numbers', credits: 500, popular: true },
      { id: 'personal-phone', name: 'Personal Phone Enrichment', description: 'Find personal mobile numbers for hard-to-reach prospects', credits: 550 },
      { id: 'company-enrichment', name: 'Company Data Enrichment', description: 'Add firmographics, technographics, and company insights', credits: 500 },
      { id: 'catchall-validation', name: 'Catch-All Email Validation', description: 'Validate risky catch-all emails before sending', credits: 500 },
    ],
    benefits: [
      'Match rate of 85%+ on quality lists',
      'Real-time verification available',
      'Multiple data sources cross-referenced',
      'DNC registry checking included',
      'CRM-ready export formats',
      'Batch processing for large lists',
    ],
    useCases: [
      'Cleaning and updating old CRM data',
      'Adding missing contact details',
      'Verifying data before campaigns',
      'Merging and deduplicating lists',
    ],
    faqs: [
      { question: 'What match rate can I expect?', answer: 'Typically 80-90% for B2B lists with accurate names and companies. We only charge for successful matches.' },
      { question: 'How fresh is the data?', answer: 'All enrichment is done in real-time using the latest data sources, ensuring you get the most current information.' },
      { question: 'Can you enrich large files?', answer: 'Yes! We can process files with millions of records. Large batches are processed in parallel for faster delivery.' },
    ],
  },
  {
    id: 'platform-scraping',
    slug: 'platform-scraping',
    icon: Database,
    title: 'Platform Scraping',
    tagline: 'Extract Data from Premium Platforms',
    description: 'Access data from LinkedIn, Apollo, ZoomInfo, and other premium platforms.',
    heroDescription: 'Get access to premium B2B database platforms without expensive subscriptions. We extract the exact contacts you need from LinkedIn Sales Navigator, Apollo, ZoomInfo, Lusha, Clay, and other leading platforms.',
    gradient: 'from-orange-500 to-red-600',
    services: [
      { id: 'linkedin-sales-nav', name: 'LinkedIn Sales Navigator Scraping', description: 'Extract leads from your Sales Nav searches with emails', credits: 500, popular: true },
      { id: 'linkedin-email', name: 'LinkedIn Email Scraping', description: 'Find verified emails for LinkedIn profiles', credits: 500 },
      { id: 'apollo-scraping', name: 'Apollo Leads Scraping', description: 'Extract contacts from Apollo.io searches', credits: 500 },
      { id: 'zoominfo-scraping', name: 'ZoomInfo Scraping', description: 'Access ZoomInfo contact data without subscription', credits: 550, popular: true },
      { id: 'lusha-scraping', name: 'Lusha Scraping', description: 'Extract Lusha contact and company data', credits: 500 },
      { id: 'clay-scraping', name: 'Clay Scraping', description: 'Get Clay enrichment data at scale', credits: 500 },
      { id: 'lemlist-scraping', name: 'Lemlist Scraping', description: 'Extract leads from Lemlist campaigns', credits: 500 },
      { id: 'cognism-scraping', name: 'Cognism Data Access', description: 'European B2B contacts from Cognism', credits: 500 },
    ],
    benefits: [
      'No expensive platform subscriptions needed',
      'Cross-referenced and de-duplicated data',
      'Intent data when available',
      'Technographic information included',
      'Regular data refresh options',
      'API access available',
    ],
    useCases: [
      'Sales teams without premium tool budgets',
      'One-time data pulls for campaigns',
      'Validating data from multiple sources',
      'Building comprehensive prospect databases',
    ],
    faqs: [
      { question: 'Do I need my own subscriptions?', answer: 'For LinkedIn Sales Navigator, yes. For other platforms like Apollo, ZoomInfo, we can access the data on your behalf.' },
      { question: 'Is this compliant?', answer: 'We use compliant methods and recommend using the data responsibly for legitimate business development purposes.' },
      { question: 'What\'s the maximum volume?', answer: 'We can handle requests from hundreds to millions of contacts. Large orders are priced with volume discounts.' },
    ],
  },
  {
    id: 'web-scraping',
    slug: 'web-scraping',
    icon: Globe,
    title: 'Web & Social Scraping',
    tagline: 'Extract Data from Any Source',
    description: 'Scrape Google Maps, directories, social media, and custom websites.',
    heroDescription: 'Extract valuable business data from across the web. From Google Maps local businesses to social media profiles and industry directories, we build custom datasets tailored to your exact requirements.',
    gradient: 'from-green-500 to-teal-600',
    services: [
      { id: 'google-maps', name: 'Google Maps Scraping', description: 'Local businesses with contact info, reviews, and details', credits: 500, popular: true },
      { id: 'directory-scraping', name: 'Directories Scraping', description: 'Extract from industry directories and business listings', credits: 500 },
      { id: 'facebook-scraping', name: 'Facebook Scraping', description: 'Business pages, groups, and event attendees', credits: 500 },
      { id: 'twitter-scraping', name: 'Twitter/X Scraping', description: 'Followers, following, and engagement data', credits: 500 },
      { id: 'instagram-scraping', name: 'Instagram Scraping', description: 'Business profiles and follower data', credits: 500 },
      { id: 'reddit-scraping', name: 'Reddit Scraping', description: 'Community members and discussion participants', credits: 500 },
      { id: 'custom-scraping', name: 'Custom Website Scraping', description: 'Any website or platform with structured data', credits: 500 },
      { id: 'review-scraping', name: 'Review Sites Scraping', description: 'G2, Capterra, TrustPilot reviewer data', credits: 500 },
    ],
    benefits: [
      'Custom scraping solutions for any site',
      'Structured, clean data delivery',
      'Regular refresh schedules available',
      'Anti-detection measures included',
      'Data validation and cleaning',
      'Multiple export formats',
    ],
    useCases: [
      'Local business prospecting',
      'Competitor customer analysis',
      'Market research and analysis',
      'Influencer and creator outreach',
    ],
    faqs: [
      { question: 'Can you scrape any website?', answer: 'We can scrape most public websites. Some sites with advanced protection may require custom solutions at additional cost.' },
      { question: 'How often can data be refreshed?', answer: 'We offer daily, weekly, or monthly refresh schedules depending on your needs and the data source.' },
      { question: 'Is social media scraping allowed?', answer: 'We only collect publicly available data and comply with platform terms. Data should be used responsibly.' },
    ],
  },
  {
    id: 'research-services',
    slug: 'research-services',
    icon: UserSearch,
    title: 'Research Services',
    tagline: 'Human-Powered Research',
    description: 'Dedicated research team for complex, hard-to-find prospects.',
    heroDescription: 'For complex research needs that go beyond automated tools. Our dedicated research team manually finds and verifies contacts that standard data sources simply cannot locate, specializing in niche industries and hard-to-reach decision makers.',
    gradient: 'from-indigo-500 to-purple-600',
    services: [
      { id: 'manual-research', name: 'Manual Prospect Research Team', description: 'Dedicated researchers for your account', credits: 800, popular: true },
      { id: 'executive-research', name: 'C-Suite & Executive Research', description: 'Hard-to-find executive contact information', credits: 600 },
      { id: 'account-mapping', name: 'Account Mapping', description: 'Complete org charts and decision maker identification', credits: 550 },
      { id: 'icp-research', name: 'ICP Development Research', description: 'Research to define and refine your ideal customer profile', credits: 700 },
      { id: 'competitor-intel', name: 'Competitor Intelligence', description: 'Deep research on competitor customers and strategies', credits: 650 },
      { id: 'market-research', name: 'Market Research', description: 'Industry analysis and market sizing research', credits: 750 },
    ],
    benefits: [
      'Dedicated researchers assigned to your account',
      'Manual research for hard-to-find contacts',
      'Niche industry expertise',
      'Custom data points and requirements',
      'Executive and C-suite specialization',
      'Weekly progress reports and calls',
    ],
    useCases: [
      'Enterprise sales targeting specific accounts',
      'Niche industries with limited data',
      'Custom data requirements',
      'High-value prospect identification',
    ],
    faqs: [
      { question: 'How many researchers will I get?', answer: 'Depends on volume. Most clients have 2-5 dedicated researchers working on their account.' },
      { question: 'What\'s the minimum commitment?', answer: 'We recommend a 3-month minimum to see meaningful results. Month-to-month available after initial period.' },
      { question: 'What makes this different from list building?', answer: 'This service is for complex needs: niche industries, specific titles, or custom data points that require manual research.' },
    ],
  },
  {
    id: 'outreach-solutions',
    slug: 'outreach-solutions',
    icon: Mail,
    title: 'Outreach Solutions',
    tagline: 'Done-For-You Cold Outreach',
    description: 'Complete cold email setup, managed campaigns, and combo packages.',
    heroDescription: 'Launch high-converting cold outreach campaigns with zero hassle. From technical email setup to fully managed campaigns, we handle everything so you can focus on closing deals.',
    gradient: 'from-rose-500 to-orange-600',
    services: [
      { id: 'email-setup', name: 'Cold Email Mailbox Setup', description: 'Complete technical setup with SPF/DKIM/DMARC and warm-up', credits: 500 },
      { id: 'combo-small', name: 'Combo Pack - Small Agency', description: '3 email setups + 10,000 leads/month', credits: 1200, popular: true },
      { id: 'combo-medium', name: 'Combo Pack - Medium', description: '5 email setups + 30,000 leads/month', credits: 2000 },
      { id: 'combo-large', name: 'Combo Pack - Large', description: '10 email setups + 50,000 leads/month', credits: 3500, popular: true },
      { id: 'combo-enterprise', name: 'Combo Pack - Enterprise', description: '20 email setups + 100,000 leads/month', credits: 6000 },
      { id: 'managed-email', name: 'Managed Cold Email Campaigns', description: 'Full campaign management with copywriting', credits: 900 },
      { id: 'linkedin-outreach', name: 'LinkedIn Outreach Management', description: 'Done-for-you LinkedIn campaigns', credits: 750 },
      { id: 'multichannel', name: 'Multi-Channel Outreach', description: 'Coordinated email + LinkedIn + phone campaigns', credits: 1500 },
    ],
    benefits: [
      'Multiple sending domains setup',
      'SPF, DKIM, DMARC configuration',
      'Email warm-up for 2-4 weeks',
      'Deliverability monitoring',
      'Professional copywriting included',
      'A/B testing and optimization',
    ],
    useCases: [
      'Agencies scaling client outreach',
      'Sales teams launching cold campaigns',
      'Startups building outbound motion',
      'Enterprises standardizing outreach',
    ],
    faqs: [
      { question: 'Why do I need secondary domains?', answer: 'Sending cold emails from your main domain risks your deliverability. Secondary domains protect your primary domain reputation.' },
      { question: 'How long until I can send?', answer: 'Technical setup takes 1-2 days. Warm-up requires 2-4 weeks. Total time: about 1 month before full sending capacity.' },
      { question: 'What\'s included in combo packs?', answer: 'Email infrastructure setup, warm-up, monthly lead credits, and ongoing deliverability monitoring. Copywriting available as add-on.' },
    ],
  },
  {
    id: 'ai-automation',
    slug: 'ai-automation',
    icon: Bot,
    title: 'AI & Automation',
    tagline: 'Intelligent Sales Automation',
    description: 'Custom AI agents to automate prospecting, qualification, and outreach.',
    heroDescription: 'Harness the power of AI for your lead generation. Our custom AI agents handle initial outreach, qualify prospects, answer questions, and book meetings - all while you sleep. Scale your sales operations without scaling headcount.',
    gradient: 'from-violet-500 to-fuchsia-600',
    services: [
      { id: 'ai-sdr', name: 'AI SDR Agent', description: 'AI that prospects, qualifies, and books meetings 24/7', credits: 1500, popular: true },
      { id: 'ai-email', name: 'AI Email Responder', description: 'Intelligent email response handling and qualification', credits: 800 },
      { id: 'ai-linkedin', name: 'AI LinkedIn Agent', description: 'Automated LinkedIn engagement and conversation handling', credits: 900 },
      { id: 'ai-chat', name: 'AI Chat Agent', description: 'Website chatbot for lead capture and qualification', credits: 700 },
      { id: 'ai-research', name: 'AI Research Assistant', description: 'Automated prospect research and insights', credits: 600 },
      { id: 'custom-ai', name: 'Custom AI Agent Development', description: 'Fully customized AI solution for your workflow', credits: 2500 },
    ],
    benefits: [
      'Custom-trained on your business',
      '24/7 lead engagement',
      'Intelligent lead qualification',
      'Natural conversation flows',
      'CRM integration',
      'Human handoff for hot leads',
    ],
    useCases: [
      'Scaling without hiring SDRs',
      '24/7 lead response',
      'Qualifying inbound leads',
      'Nurturing cold prospects',
    ],
    faqs: [
      { question: 'How does the AI learn my business?', answer: 'We train the AI on your ICP, messaging, objection handling, and qualification criteria through a discovery process.' },
      { question: 'Can it integrate with my tools?', answer: 'Yes! Our AI agents integrate with popular CRMs, email tools, and calendar systems.' },
      { question: 'What if the AI makes mistakes?', answer: 'We build in guardrails and human review for edge cases. Hot leads are always handed off to your team.' },
    ],
  },
];

export const getCategoryBySlug = (slug: string): ServiceCategory | undefined => {
  return serviceCategories.find(category => category.slug === slug);
};

export const getAllServices = (): Service[] => {
  return serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      categoryId: category.id,
      categoryTitle: category.title,
    }))
  );
};
