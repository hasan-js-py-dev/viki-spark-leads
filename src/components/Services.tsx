import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { Database, Users, Mail, Search, Phone, Zap, Target, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Targeted Contact List Building',
      features: [
        'Precision-targeted B2B contacts',
        'Verified emails & direct dials',
        'Custom ICP matching',
        'Industry-specific filtering'
      ],
      link: '/services/contact-list',
    },
    {
      icon: Users,
      title: 'LinkedIn Sales Nav Scraping',
      features: [
        'Sales Navigator extraction',
        'Specific criteria targeting',
        'High-quality lead data',
        'Industry filtering'
      ],
      link: '/services/linkedin-scraping',
    },
    {
      icon: Search,
      title: 'LinkedIn Profile Enrichment',
      features: [
        'Comprehensive LinkedIn data',
        'Job titles & company info',
        'Professional insights',
        'Contact enhancement'
      ],
      link: '/services/profile-enrich',
    },
    {
      icon: Phone,
      title: 'Phone Number Enrichment',
      features: [
        'Verified phone numbers',
        'Multi-channel outreach ready',
        'Higher connection rates',
        'Direct dial access'
      ],
      link: '/services/phone-enrich',
    },
    {
      icon: Users,
      title: 'Dedicated Research Team',
      features: [
        'Custom list building',
        'Hard-to-reach decision makers',
        'Dedicated researchers',
        'Target market expertise'
      ],
      link: '/services/research-team',
    },
    {
      icon: Database,
      title: 'B2B Database Scraping',
      features: [
        'Apollo, Zoominfo access',
        'Lemlist, Lusha extraction',
        'Verified contacts',
        'Full compliance guaranteed'
      ],
      link: '/services/database-scraping',
    },
    {
      icon: Mail,
      title: 'Done-For-You Cold Email',
      features: [
        'Complete campaign setup',
        'Professional copywriting',
        'Campaign management',
        'Consistent lead generation'
      ],
      link: '/services/email-outreach',
    },
    {
      icon: Zap,
      title: 'Done-For-You LinkedIn Outreach',
      features: [
        'Professional campaigns',
        'Personalized messages',
        'Automated follow-ups',
        'Maximum engagement'
      ],
      link: '/services/linkedin-outreach',
    },
    {
      icon: Settings,
      title: 'Email Technical Setup',
      features: [
        'Domain configuration',
        'SPF/DKIM/DMARC setup',
        'Email warm-up included',
        'Deliverability optimization'
      ],
      link: '/services/technical-setup',
    },
    {
      icon: Zap,
      title: 'Combo Pack Setup & Marketing',
      features: [
        'Multi-channel outreach',
        'Email + LinkedIn + Phone',
        'Maximum lead generation',
        'Comprehensive strategy'
      ],
      link: '/services/combo-pack',
    },
    {
      icon: Zap,
      title: 'Custom AI Agent',
      features: [
        'Tailored AI solutions',
        'Automated lead qualification',
        'Smart conversation flows',
        '24/7 engagement capability'
      ],
      link: '/services/ai-agent',
    },
  ];

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive B2B lead generation and cold outreach solutions designed to scale your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="font-jakarta font-semibold text-xl md:text-2xl mb-4 text-foreground tracking-tight">{service.title}</CardTitle>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Checkbox checked className="mt-1 pointer-events-none" />
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={() => window.location.href = service.link}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
