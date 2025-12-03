import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { industries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

const IndustriesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4 inline-block">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Targeted Leads for{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Every Industry</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            We provide specialized B2B contact lists tailored to your industry's unique needs and buyer personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  to={`/industries/${industry.slug}`}
                  className="group block p-4 bg-card/50 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            to="/industries/saas-software"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            Explore All Industries <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
