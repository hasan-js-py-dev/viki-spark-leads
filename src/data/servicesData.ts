import { Target, Users, Search, Phone, Database, Mail, Zap, Settings } from 'lucide-react';

export interface ServiceData {
  icon: typeof Target;
  title: string;
  slug: string;
  shortDescription: string;
  features: string[];
  heroDescription: string;
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  pricing: {
    type: 'quote' | 'starting';
    startingPrice?: string;
    note: string;
  };
}

export const servicesData: ServiceData[] = [
  {
    icon: Target,
    title: 'Targeted Contact List Building',
    slug: 'contact-list',
    shortDescription: 'Precision-targeted B2B contact lists built to match your ideal customer profile.',
    features: [
      'Precision-targeted B2B contacts',
      'Verified emails & direct dials',
      'Custom ICP matching',
      'Industry-specific filtering'
    ],
    heroDescription: 'Stop wasting time on unqualified leads. Our targeted contact list building service delivers precision-matched B2B contacts that align perfectly with your ideal customer profile, ensuring higher conversion rates and better ROI.',
    benefits: [
      '97%+ email deliverability guarantee',
      'Direct dial phone numbers included',
      'Custom firmographic & technographic filters',
      'LinkedIn profile URLs for personalization',
      'Job title and seniority targeting',
      'Company size and revenue filtering'
    ],
    process: [
      { step: 1, title: 'Discovery Call', description: 'We learn about your ideal customer profile, target industries, and specific requirements.' },
      { step: 2, title: 'List Compilation', description: 'Our team builds your custom contact list using multiple verified data sources.' },
      { step: 3, title: 'Verification', description: 'Every contact is verified for accuracy, including email validation and phone verification.' },
      { step: 4, title: 'Delivery', description: 'Receive your clean, formatted list ready for immediate use in your CRM or outreach tools.' }
    ],
    faqs: [
      { question: 'How accurate are the contact lists?', answer: 'We guarantee 97%+ accuracy on all email addresses. Any bounces beyond this threshold are replaced free of charge.' },
      { question: 'What information is included?', answer: 'Each contact includes: Full name, job title, company, email, phone (when available), LinkedIn URL, and company details like industry, size, and revenue.' },
      { question: 'How long does delivery take?', answer: 'Most lists are delivered within 48-72 hours. Larger orders or complex requirements may take 5-7 business days.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Pricing based on volume, targeting complexity, and data enrichment requirements. Most clients invest $500-$2,500 per list.'
    }
  },
  {
    icon: Users,
    title: 'LinkedIn Sales Nav Scraping',
    slug: 'linkedin-scraping',
    shortDescription: 'Extract high-quality leads directly from LinkedIn Sales Navigator searches.',
    features: [
      'Sales Navigator extraction',
      'Specific criteria targeting',
      'High-quality lead data',
      'Industry filtering'
    ],
    heroDescription: 'Unlock the full potential of LinkedIn Sales Navigator. We extract and enrich contact data from your saved searches, giving you actionable leads ready for outreach campaigns.',
    benefits: [
      'Extract from your exact Sales Nav searches',
      'Enrich with verified email addresses',
      'Include direct dial phone numbers',
      'Full LinkedIn profile data',
      'Company insights and technographics',
      'CRM-ready CSV exports'
    ],
    process: [
      { step: 1, title: 'Share Your Search', description: 'Provide your LinkedIn Sales Navigator search URL or criteria.' },
      { step: 2, title: 'Data Extraction', description: 'We carefully extract all relevant profile data from your search results.' },
      { step: 3, title: 'Enrichment', description: 'Each contact is enriched with verified emails, phone numbers, and additional data.' },
      { step: 4, title: 'Delivery', description: 'Receive your enriched dataset in your preferred format.' }
    ],
    faqs: [
      { question: 'Do I need Sales Navigator?', answer: 'Yes, you need an active LinkedIn Sales Navigator account. We work with your search criteria to extract the data.' },
      { question: 'Is this compliant with LinkedIn ToS?', answer: 'We use compliant methods and recommend using the data responsibly for business development purposes.' },
      { question: 'What\'s the maximum number of contacts?', answer: 'We can extract up to 2,500 contacts per Sales Navigator search. Larger needs can be handled with multiple searches.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Pricing depends on volume and enrichment level. Typical projects range from $300-$1,500.'
    }
  },
  {
    icon: Search,
    title: 'LinkedIn Profile Enrichment',
    slug: 'profile-enrich',
    shortDescription: 'Enrich your existing contacts with comprehensive LinkedIn data.',
    features: [
      'Comprehensive LinkedIn data',
      'Job titles & company info',
      'Professional insights',
      'Contact enhancement'
    ],
    heroDescription: 'Transform your basic contact lists into rich prospect profiles. We match and enrich your existing data with comprehensive LinkedIn information for better personalization.',
    benefits: [
      'Match rate of 85%+ on quality lists',
      'Current job title and company',
      'Career history and education',
      'Skills and endorsements',
      'Mutual connections insights',
      'Recent activity and posts'
    ],
    process: [
      { step: 1, title: 'Upload Your List', description: 'Send us your existing contact list with names and companies.' },
      { step: 2, title: 'Profile Matching', description: 'We match each contact to their LinkedIn profile using multiple data points.' },
      { step: 3, title: 'Data Extraction', description: 'Comprehensive profile data is extracted for each matched contact.' },
      { step: 4, title: 'Merged Delivery', description: 'Receive your original data enriched with all LinkedIn information.' }
    ],
    faqs: [
      { question: 'What match rate can I expect?', answer: 'Typically 80-90% for B2B lists with accurate names and companies. Consumer lists may have lower match rates.' },
      { question: 'What data do I need to provide?', answer: 'Minimum: First name, last name, and company. Additional data like job title or email improves match rates.' },
      { question: 'Can you enrich with email too?', answer: 'Yes! We can add verified business emails to your enriched profiles for an additional fee.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Volume-based pricing starting from $0.15 per enriched record. Bulk discounts available.'
    }
  },
  {
    icon: Phone,
    title: 'Phone Number Enrichment',
    slug: 'phone-enrich',
    shortDescription: 'Add verified direct dial and mobile numbers to your contact lists.',
    features: [
      'Verified phone numbers',
      'Multi-channel outreach ready',
      'Higher connection rates',
      'Direct dial access'
    ],
    heroDescription: 'Boost your connection rates with verified phone numbers. We find and verify direct dials and mobile numbers for your B2B contacts, enabling effective multi-channel outreach.',
    benefits: [
      'Direct dial numbers (bypass gatekeepers)',
      'Mobile numbers for SMS outreach',
      'Verification against DNC lists',
      'Carrier and line type identification',
      '60-70% average coverage rate',
      'Real-time verification available'
    ],
    process: [
      { step: 1, title: 'Submit Contacts', description: 'Provide your contact list with names, companies, and any existing contact info.' },
      { step: 2, title: 'Number Discovery', description: 'We search multiple databases to find phone numbers for each contact.' },
      { step: 3, title: 'Verification', description: 'Each number is verified for accuracy and checked against DNC registries.' },
      { step: 4, title: 'Delivery', description: 'Receive your list with verified phone numbers and line type indicators.' }
    ],
    faqs: [
      { question: 'What\'s the typical hit rate?', answer: 'We typically find verified phone numbers for 60-70% of B2B contacts. Executive-level contacts often have higher coverage.' },
      { question: 'Are these direct lines or main lines?', answer: 'We prioritize direct dial and mobile numbers. Main company lines are only included when direct lines aren\'t available.' },
      { question: 'Do you check DNC lists?', answer: 'Yes, all numbers are checked against the National Do Not Call Registry and relevant state lists.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Pay only for numbers found. Typical cost is $0.25-$0.50 per verified phone number.'
    }
  },
  {
    icon: Users,
    title: 'Dedicated Research Team',
    slug: 'research-team',
    shortDescription: 'Your own team of researchers for complex, hard-to-find contact needs.',
    features: [
      'Custom list building',
      'Hard-to-reach decision makers',
      'Dedicated researchers',
      'Target market expertise'
    ],
    heroDescription: 'For complex research needs that go beyond standard data sources. Our dedicated research team manually finds and verifies contacts that automated tools simply cannot locate.',
    benefits: [
      'Dedicated researchers assigned to your account',
      'Manual research for hard-to-find contacts',
      'Niche industry expertise',
      'Custom data points and requirements',
      'Executive and C-suite specialization',
      'Weekly progress reports and calls'
    ],
    process: [
      { step: 1, title: 'Requirements Workshop', description: 'Deep dive into your exact needs, target personas, and unique data requirements.' },
      { step: 2, title: 'Team Assignment', description: 'We assign dedicated researchers with relevant industry experience.' },
      { step: 3, title: 'Ongoing Research', description: 'Your team works continuously on finding and verifying contacts.' },
      { step: 4, title: 'Regular Delivery', description: 'Receive weekly or bi-weekly batches of verified contacts with progress updates.' }
    ],
    faqs: [
      { question: 'What makes this different from list building?', answer: 'This service is for complex needs: niche industries, specific titles, or custom data points that require manual research.' },
      { question: 'How many researchers will I get?', answer: 'Depends on volume. Most clients have 2-5 dedicated researchers working on their account.' },
      { question: 'What\'s the minimum commitment?', answer: 'We recommend a 3-month minimum to see meaningful results. Month-to-month available after initial period.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Monthly retainer model. Most engagements range from $2,000-$10,000/month depending on volume and complexity.'
    }
  },
  {
    icon: Database,
    title: 'B2B Database Scraping',
    slug: 'database-scraping',
    shortDescription: 'Access data from premium B2B databases like Apollo, ZoomInfo, and more.',
    features: [
      'Apollo, Zoominfo access',
      'Lemlist, Lusha extraction',
      'Verified contacts',
      'Full compliance guaranteed'
    ],
    heroDescription: 'Get access to premium B2B database platforms without expensive subscriptions. We extract the exact contacts you need from Apollo, ZoomInfo, Lusha, and other leading platforms.',
    benefits: [
      'Access to 10+ premium data sources',
      'No expensive subscriptions needed',
      'Cross-referenced and de-duplicated',
      'Intent data when available',
      'Technographic information included',
      'Regular data refresh options'
    ],
    process: [
      { step: 1, title: 'Define Criteria', description: 'Share your target criteria: industries, titles, company sizes, locations, etc.' },
      { step: 2, title: 'Multi-Source Search', description: 'We search across multiple premium databases to find matching contacts.' },
      { step: 3, title: 'Compilation & Dedup', description: 'Results are compiled, cross-referenced, and deduplicated for accuracy.' },
      { step: 4, title: 'Verified Delivery', description: 'Final list is verified and delivered in your preferred format.' }
    ],
    faqs: [
      { question: 'Which databases do you access?', answer: 'Apollo, ZoomInfo, Lusha, Cognism, LeadIQ, Seamless.ai, and several others depending on availability.' },
      { question: 'Is this legal?', answer: 'We only access publicly available data and licensed databases. All data usage complies with relevant regulations.' },
      { question: 'How fresh is the data?', answer: 'Data is pulled fresh for each order. We can also set up recurring pulls to keep your database updated.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Based on volume and data sources required. Typical orders range from $400-$3,000.'
    }
  },
  {
    icon: Mail,
    title: 'Done-For-You Cold Email',
    slug: 'email-outreach',
    shortDescription: 'Complete cold email campaigns managed end-to-end by our experts.',
    features: [
      'Complete campaign setup',
      'Professional copywriting',
      'Campaign management',
      'Consistent lead generation'
    ],
    heroDescription: 'Let our experts handle your entire cold email operation. From strategy and copywriting to technical setup and ongoing optimization, we deliver meetings directly to your calendar.',
    benefits: [
      'Full campaign strategy and planning',
      'Professional email copywriting',
      'Technical infrastructure setup',
      'A/B testing and optimization',
      'Daily monitoring and adjustments',
      'Detailed performance reporting'
    ],
    process: [
      { step: 1, title: 'Strategy Session', description: 'Deep dive into your offering, ICP, and goals to create a winning strategy.' },
      { step: 2, title: 'Setup & Copy', description: 'We set up sending infrastructure and write compelling email sequences.' },
      { step: 3, title: 'List Building', description: 'Targeted prospect lists are built and verified for your campaigns.' },
      { step: 4, title: 'Launch & Optimize', description: 'Campaigns go live with ongoing monitoring, testing, and optimization.' }
    ],
    faqs: [
      { question: 'How many emails will you send?', answer: 'Depends on your plan. Typical campaigns send 2,000-10,000 emails per month across multiple domains.' },
      { question: 'What results can I expect?', answer: 'Typical campaigns achieve 40-60% open rates and 5-15% reply rates. Meeting booking rates vary by offer.' },
      { question: 'Do you guarantee results?', answer: 'We guarantee deliverability and engagement metrics. Meeting guarantees are available on premium plans.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Monthly retainer starting from $1,500/month. Performance-based pricing available for qualified clients.'
    }
  },
  {
    icon: Zap,
    title: 'Done-For-You LinkedIn Outreach',
    slug: 'linkedin-outreach',
    shortDescription: 'Professional LinkedIn campaigns that generate conversations and meetings.',
    features: [
      'Professional campaigns',
      'Personalized messages',
      'Automated follow-ups',
      'Maximum engagement'
    ],
    heroDescription: 'Turn your LinkedIn profile into a lead generation machine. Our team manages your entire LinkedIn outreach operation, from connection requests to meeting bookings.',
    benefits: [
      'Profile optimization for conversions',
      'Personalized connection campaigns',
      'Multi-touch message sequences',
      'Content engagement strategy',
      'InMail campaigns when needed',
      'CRM integration for lead tracking'
    ],
    process: [
      { step: 1, title: 'Profile Audit', description: 'We optimize your LinkedIn profile for maximum credibility and conversions.' },
      { step: 2, title: 'Campaign Design', description: 'Custom outreach sequences tailored to your target audience.' },
      { step: 3, title: 'Target Selection', description: 'We identify and target ideal prospects using Sales Navigator.' },
      { step: 4, title: 'Execution', description: 'Daily outreach, response management, and meeting booking.' }
    ],
    faqs: [
      { question: 'Will you use my LinkedIn account?', answer: 'Yes, campaigns run from your profile. We use safe automation tools and stay within LinkedIn\'s limits.' },
      { question: 'How many connections per day?', answer: 'We typically send 50-100 connection requests per day, staying well within LinkedIn\'s safe limits.' },
      { question: 'Do you respond to messages?', answer: 'We can handle initial responses and hand off warm leads, or forward all responses to you immediately.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Monthly management starting from $1,200/month. Includes all outreach, not including LinkedIn Sales Navigator subscription.'
    }
  },
  {
    icon: Settings,
    title: 'Email Technical Setup',
    slug: 'technical-setup',
    shortDescription: 'Complete email infrastructure setup for maximum deliverability.',
    features: [
      'Domain configuration',
      'SPF/DKIM/DMARC setup',
      'Email warm-up included',
      'Deliverability optimization'
    ],
    heroDescription: 'Don\'t let technical issues tank your email campaigns. We set up bulletproof email infrastructure with proper authentication, warm-up, and deliverability optimization.',
    benefits: [
      'Multiple sending domains setup',
      'SPF, DKIM, DMARC configuration',
      'Email warm-up for 2-4 weeks',
      'Sending tool configuration',
      'Inbox placement testing',
      'Deliverability monitoring setup'
    ],
    process: [
      { step: 1, title: 'Domain Purchase', description: 'We help you purchase and configure secondary domains for sending.' },
      { step: 2, title: 'Technical Setup', description: 'DNS records, authentication, and email accounts are configured.' },
      { step: 3, title: 'Warm-Up Phase', description: '2-4 weeks of automated warm-up to build sender reputation.' },
      { step: 4, title: 'Handoff', description: 'Fully warmed accounts ready for your campaigns with documentation.' }
    ],
    faqs: [
      { question: 'Why do I need secondary domains?', answer: 'Sending cold emails from your main domain risks your deliverability. Secondary domains protect your primary domain reputation.' },
      { question: 'How long until I can send?', answer: 'Technical setup takes 1-2 days. Warm-up requires 2-4 weeks. Total time: about 1 month.' },
      { question: 'What sending tools do you support?', answer: 'We can configure any major tool: Instantly, Lemlist, Apollo, Smartlead, Mailshake, and more.' }
    ],
    pricing: {
      type: 'starting',
      startingPrice: '$500',
      note: 'One-time setup fee. Includes 3 domains, full configuration, and 30-day warm-up. Additional domains available.'
    }
  },
  {
    icon: Zap,
    title: 'Combo Pack Setup & Marketing',
    slug: 'combo-pack',
    shortDescription: 'Multi-channel outreach combining email, LinkedIn, and phone for maximum results.',
    features: [
      'Multi-channel outreach',
      'Email + LinkedIn + Phone',
      'Maximum lead generation',
      'Comprehensive strategy'
    ],
    heroDescription: 'The ultimate lead generation package. Combine cold email, LinkedIn outreach, and phone follow-ups for a coordinated multi-channel approach that maximizes your chances of connecting.',
    benefits: [
      'Coordinated multi-channel strategy',
      'Higher response rates than single channel',
      'Full technical infrastructure',
      'Unified prospect tracking',
      'Cross-channel follow-up sequences',
      'Dedicated campaign manager'
    ],
    process: [
      { step: 1, title: 'Strategy Workshop', description: 'Comprehensive planning across all channels with your dedicated manager.' },
      { step: 2, title: 'Full Setup', description: 'Email infrastructure, LinkedIn optimization, and phone scripts prepared.' },
      { step: 3, title: 'Coordinated Launch', description: 'All channels launch with synchronized messaging and timing.' },
      { step: 4, title: 'Ongoing Optimization', description: 'Continuous testing and optimization across all channels.' }
    ],
    faqs: [
      { question: 'Which channel works best?', answer: 'It depends on your industry. The combo approach typically generates 2-3x more responses than any single channel.' },
      { question: 'Do you do the phone calls?', answer: 'We can provide call scripts and warm transfer leads, or handle calls directly with our SDR team (additional cost).' },
      { question: 'What\'s included vs. add-on?', answer: 'Email and LinkedIn management included. Phone calling, meeting setting, and premium data are available add-ons.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Comprehensive packages starting from $3,000/month. Custom packages available based on your needs.'
    }
  },
  {
    icon: Zap,
    title: 'Custom AI Agent',
    slug: 'ai-agent',
    shortDescription: 'Tailored AI solutions for automated lead qualification and engagement.',
    features: [
      'Tailored AI solutions',
      'Automated lead qualification',
      'Smart conversation flows',
      '24/7 engagement capability'
    ],
    heroDescription: 'Harness the power of AI for your lead generation. Our custom AI agents handle initial outreach, qualify prospects, answer questions, and book meetings - all while you sleep.',
    benefits: [
      'Custom-trained on your business',
      '24/7 lead engagement',
      'Intelligent lead qualification',
      'Natural conversation flows',
      'CRM integration',
      'Human handoff for hot leads'
    ],
    process: [
      { step: 1, title: 'Discovery & Training', description: 'We learn your business, ICP, and qualification criteria to train your AI agent.' },
      { step: 2, title: 'Agent Development', description: 'Custom AI agent built with your messaging, objection handling, and workflows.' },
      { step: 3, title: 'Integration', description: 'Connect to your email, LinkedIn, website chat, or other channels.' },
      { step: 4, title: 'Launch & Learn', description: 'Agent goes live with continuous learning and optimization.' }
    ],
    faqs: [
      { question: 'What channels can the AI handle?', answer: 'Email responses, LinkedIn messages, website chat, and SMS. Additional channels available on request.' },
      { question: 'How does it qualify leads?', answer: 'The AI asks qualifying questions based on your criteria and scores leads for your team to prioritize.' },
      { question: 'Can it book meetings directly?', answer: 'Yes! The AI integrates with your calendar to offer available times and confirm bookings.' }
    ],
    pricing: {
      type: 'quote',
      note: 'Setup fee + monthly management. Typical investment: $2,000 setup + $800-$2,000/month depending on volume and channels.'
    }
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
  return servicesData.find(service => service.slug === slug);
};
