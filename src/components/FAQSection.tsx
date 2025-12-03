import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '@/data/faqs';

const FAQSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about VikiLeads B2B data services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
                    <span className="text-primary font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    <span className="font-medium">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 pl-9">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
