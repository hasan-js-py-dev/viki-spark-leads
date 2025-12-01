import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Database, Users, Mail, Search, Phone, Zap, Target, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Targeted Contact List Building',
      description: 'Get precision-targeted B2B contact lists tailored to your ideal customer profile with verified emails and direct dials.',
      link: '/services/contact-list',
    },
    {
      icon: Users,
      title: 'LinkedIn Sales Nav Scraping',
      description: 'Extract high-quality leads from LinkedIn Sales Navigator based on your specific criteria and industry targeting.',
      link: '/services/linkedin-scraping',
    },
    {
      icon: Search,
      title: 'LinkedIn Profile Enrichment',
      description: 'Enhance your existing contacts with comprehensive LinkedIn data including job titles, company info, and professional insights.',
      link: '/services/profile-enrich',
    },
    {
      icon: Phone,
      title: 'Phone Number Enrichment',
      description: 'Add verified phone numbers to your contact lists for multi-channel outreach and higher connection rates.',
      link: '/services/phone-enrich',
    },
    {
      icon: Users,
      title: 'Dedicated Research Team',
      description: 'Get a dedicated team of researchers to build custom lists and find hard-to-reach decision makers in your target market.',
      link: '/services/research-team',
    },
    {
      icon: Database,
      title: 'B2B Database Scraping',
      description: 'Extract verified contacts from Apollo, Zoominfo, Lemlist, Lusha, and other major B2B databases with full compliance.',
      link: '/services/database-scraping',
    },
    {
      icon: Mail,
      title: 'Done-For-You Cold Email',
      description: 'Complete cold email campaigns with setup, copywriting, and management for consistent lead generation results.',
      link: '/services/email-outreach',
    },
    {
      icon: Zap,
      title: 'Done-For-You LinkedIn Outreach',
      description: 'Professional LinkedIn outreach campaigns with personalized messages and automated follow-ups for maximum engagement.',
      link: '/services/linkedin-outreach',
    },
    {
      icon: Settings,
      title: 'Email Technical Setup',
      description: 'Complete email infrastructure setup including domain configuration, SPF/DKIM/DMARC, and warm-up for deliverability.',
      link: '/services/technical-setup',
    },
    {
      icon: Zap,
      title: 'Combo Pack Setup & Marketing',
      description: 'Comprehensive multi-channel outreach combining email, LinkedIn, and phone for maximum lead generation impact.',
      link: '/services/combo-pack',
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
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="font-orbitron text-xl md:text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10 text-base"
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
