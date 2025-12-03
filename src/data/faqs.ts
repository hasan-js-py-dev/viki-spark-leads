export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How accurate is VikiLeads data compared to other providers like ZoomInfo or Apollo?",
    answer: "VikiLeads maintains 95%+ email accuracy through multi-layer verification including real-time SMTP validation, LinkedIn cross-referencing, and catch-all domain handling. Most bulk providers average 80-85% accuracy. Our data is verified at the time of delivery, not cached from months-old databases. We also offer a bounce replacement guarantee—if any verified email bounces, we replace it free of charge.",
    category: "Data Quality"
  },
  {
    id: 2,
    question: "What's the difference between your credit-based pricing and subscription models?",
    answer: "Unlike ZoomInfo ($15,000+/year) or Apollo (monthly subscriptions), VikiLeads operates on a pay-per-lead model. You only pay for the contacts you need, when you need them. No annual contracts, no unused credits expiring, no minimum commitments. This typically saves businesses 60-80% compared to subscription models while getting higher quality, fresher data.",
    category: "Pricing"
  },
  {
    id: 3,
    question: "How fresh is your data? How often is it updated?",
    answer: "VikiLeads data is verified at the time of delivery, not pulled from a static database. When you place an order, we source and verify contacts fresh, ensuring you receive current information. For ongoing campaigns, we recommend refreshing lists every 90 days as job changes happen frequently in B2B (average tenure is 2-3 years, meaning 30-40% of contacts change annually).",
    category: "Data Quality"
  },
  {
    id: 4,
    question: "Can you scrape leads from specific platforms like LinkedIn Sales Navigator or Apollo?",
    answer: "Yes, we specialize in extracting data from premium platforms including LinkedIn Sales Navigator, Apollo, ZoomInfo, Lusha, Clay, and Lemlist. We can replicate your exact search criteria and deliver the results with verified emails and phone numbers—often at a fraction of the cost of subscribing to these platforms directly.",
    category: "Services"
  },
  {
    id: 5,
    question: "What's included in your cold email setup service?",
    answer: "Our cold email setup includes: domain purchase and DNS configuration, SPF/DKIM/DMARC authentication, mailbox creation (Google Workspace or Microsoft 365), gradual warming over 2-4 weeks with real engagement, deliverability monitoring, and ongoing support. Packages range from single mailbox setups to enterprise solutions with multiple domains and 50+ mailboxes.",
    category: "Services"
  },
  {
    id: 6,
    question: "How do you handle catch-all email domains?",
    answer: "Catch-all domains (which accept any email address) are a major challenge for cold emailers. Standard validation returns 'valid' for any address at these domains. VikiLeads uses proprietary methods including pattern analysis, historical delivery data, and LinkedIn matching to score catch-all addresses by risk level. We identify which catch-all emails are likely real vs. likely to bounce.",
    category: "Data Quality"
  },
  {
    id: 7,
    question: "What industries do you specialize in for B2B leads?",
    answer: "We serve all B2B industries but have deep expertise in: SaaS/Technology, Marketing/Advertising Agencies, Real Estate, Financial Services, Healthcare, Manufacturing, eCommerce/DTC brands, Professional Services, Recruiting/Staffing, and Education. Each industry has unique data sources and targeting strategies we've refined over years of client work.",
    category: "Industries"
  },
  {
    id: 8,
    question: "Do you offer custom data research beyond standard scraping?",
    answer: "Yes, our Manual Prospect Research team handles complex requirements that automated scraping can't address. This includes identifying decision-makers at target accounts, researching company org structures, finding personal contact information for executives, compiling custom firmographic data, and building hyper-targeted lists based on specific criteria like technology usage, hiring patterns, or recent funding.",
    category: "Services"
  },
  {
    id: 9,
    question: "What format do you deliver the data in?",
    answer: "We deliver in any format you need: CSV/Excel for spreadsheet work, direct CRM uploads (Salesforce, HubSpot, Pipedrive), API delivery for automated workflows, or formatted for specific tools like Instantly, Lemlist, or Apollo. All deliveries include standardized fields and are de-duplicated against your existing database if you provide it.",
    category: "Delivery"
  },
  {
    id: 10,
    question: "Is your data GDPR and CAN-SPAM compliant?",
    answer: "Yes. VikiLeads only provides business contact information that's publicly available or obtained through legitimate means. We don't scrape private data, personal social accounts, or protected information. Our data is suitable for B2B outreach under GDPR's legitimate interest basis and complies with CAN-SPAM requirements. We recommend clients include clear opt-out mechanisms in all outreach.",
    category: "Compliance"
  }
];
