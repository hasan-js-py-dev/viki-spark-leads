import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  { feature: 'Verified Email Accuracy', vikileads: '97%+', others: '70-80%' },
  { feature: 'Custom List Building', vikileads: true, others: false },
  { feature: 'Done-For-You Campaigns', vikileads: true, others: false },
  { feature: 'No Long-Term Contracts', vikileads: true, others: false },
  { feature: 'Direct Decision-Maker Contacts', vikileads: true, others: 'Limited' },
  { feature: 'Human-Verified Data', vikileads: true, others: false },
  { feature: 'Dedicated Account Manager', vikileads: true, others: 'Enterprise Only' },
  { feature: '100 Free Leads Trial', vikileads: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4 inline-block">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            VikiLeads vs{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Generic B2B Databases</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            See why 500+ companies switched from ZoomInfo, Apollo, and other platforms to VikiLeads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 border-b border-border">
              <div className="font-heading font-semibold text-foreground">Feature</div>
              <div className="font-heading font-semibold text-primary text-center">VikiLeads</div>
              <div className="font-heading font-semibold text-muted-foreground text-center">Others</div>
            </div>
            
            {comparisons.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-4 border-b border-border/50 last:border-0 hover:bg-muted/30 transition-colors"
              >
                <div className="text-sm text-foreground">{item.feature}</div>
                <div className="flex justify-center">
                  {typeof item.vikileads === 'boolean' ? (
                    item.vikileads ? (
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )
                  ) : (
                    <span className="text-sm font-semibold text-primary">{item.vikileads}</span>
                  )}
                </div>
                <div className="flex justify-center">
                  {typeof item.others === 'boolean' ? (
                    item.others ? (
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive" />
                      </div>
                    )
                  ) : (
                    <span className="text-sm text-muted-foreground">{item.others}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
