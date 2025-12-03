import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/data/faqs';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';

const FAQPage = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | VikiLeads - Frequently Asked Questions About B2B Lead Generation</title>
        <meta name="description" content="Find answers to common questions about VikiLeads B2B data services, pricing, data quality, compliance, and more. Get the information you need to make an informed decision." />
      </Helmet>
      
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6 inline-block">
                  FAQ
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  Frequently Asked{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Everything you need to know about VikiLeads B2B data services
                </p>
              </motion.div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={faq.id} 
                      value={`item-${faq.id}`}
                      className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6 data-[state=open]:border-primary/50"
                    >
                      <AccordionTrigger className="text-left hover:text-primary transition-colors py-4">
                        <div className="flex items-start gap-3">
                          <span className="text-primary font-semibold text-sm">{String(index + 1).padStart(2, '0')}</span>
                          <span className="font-medium text-sm md:text-base">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm pb-4 pl-9">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Can't find what you're looking for? Our team is here to help.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Our Team
                </a>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default FAQPage;
