import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, Globe } from 'lucide-react';

const milestones = [
  { year: '2020', title: 'Founded', description: 'VikiLeads was born with a mission to provide accurate, affordable B2B data to growing businesses.' },
  { year: '2021', title: 'First 100 Clients', description: 'Reached our first milestone of 100 satisfied clients across SaaS, agencies, and professional services.' },
  { year: '2022', title: 'Global Expansion', description: 'Expanded our database to cover 50+ countries with verified contacts across all major industries.' },
  { year: '2023', title: '10M+ Contacts', description: 'Our database grew to over 10 million verified B2B contacts with 97% accuracy rate.' },
  { year: '2024', title: '500+ Happy Clients', description: 'Trusted by 500+ companies worldwide, delivering millions of qualified leads to sales teams.' },
];

const values = [
  { icon: Target, title: 'Accuracy First', description: 'We verify every contact to ensure you only reach real decision-makers.' },
  { icon: Users, title: 'Client Success', description: 'Your growth is our success. We measure ourselves by your results.' },
  { icon: Award, title: 'Quality Over Quantity', description: 'Better data, not more data. Every lead is hand-verified for accuracy.' },
  { icon: Globe, title: 'Global Reach', description: '50+ data sources across 50+ countries for truly global coverage.' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About VikiLeads | Our Story & Team | B2B Lead Generation Experts</title>
        <meta name="description" content="Learn about VikiLeads - founded in 2020, we've helped 500+ businesses grow with verified B2B contact lists. Meet our team of cold email and lead generation experts." />
      </Helmet>
      
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6 inline-block">
                  Our Story
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Helping Businesses{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Connect & Grow</span>{' '}
                  Since 2020
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We started VikiLeads with a simple belief: every business deserves access to high-quality B2B data without enterprise-level pricing.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-heading font-bold mb-6 text-center">
                    From Frustration to <span className="text-primary">Solution</span>
                  </h2>
                  
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                    <p>
                      In 2020, our founders Adam Zaki and Waqas Azeem faced a common challenge: finding accurate B2B contact data without paying enterprise prices. After experiencing the frustration of bounced emails, outdated databases, and generic contact lists that never converted, they decided to build something better.
                    </p>
                    <p>
                      VikiLeads was born from the belief that quality B2B data shouldn't be reserved for Fortune 500 companies. We built a proprietary verification system that checks every contact against multiple data sources, ensuring our clients only receive verified, deliverable contacts.
                    </p>
                    <p>
                      What started as a small operation helping local marketing agencies has grown into a global B2B data provider trusted by 500+ companies across 30+ countries. We've helped startups land their first enterprise clients, agencies scale their outreach, and sales teams consistently hit their targets.
                    </p>
                    <p>
                      Today, our team of cold email specialists, data engineers, and campaign managers work together to deliver not just leads, but results. We don't just sell data – we partner with our clients to ensure their outreach campaigns succeed.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold mb-12 text-center"
              >
                Our <span className="text-primary">Journey</span>
              </motion.h2>
              
              <div className="max-w-3xl mx-auto">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex-shrink-0 w-20 text-right">
                      <span className="font-heading font-bold text-primary text-lg">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary" />
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-primary/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="font-heading font-bold text-foreground mb-1">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Our <span className="text-primary">Values</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These principles guide everything we do at VikiLeads.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center p-6 bg-card border border-border rounded-xl"
                    >
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <TeamSection />

          {/* CTA Section */}
          <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Ready to <span className="text-primary">Grow Your Business</span>?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Join 500+ companies that trust VikiLeads for their B2B lead generation needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-primary">
                    <Link to="/free-leads">
                      Get 100 Free Leads <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/contact">Contact Our Team</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
