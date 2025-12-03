import { motion } from 'framer-motion';
import { Target, Database, Mail, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: 'Define Your ICP',
    description: 'Tell us your ideal customer profile - industry, company size, job titles, and location. We tailor your list to match.',
    step: '01'
  },
  {
    icon: Database,
    title: 'We Build Your List',
    description: 'Our team compiles verified contacts from 50+ data sources, ensuring 97% accuracy and deliverability.',
    step: '02'
  },
  {
    icon: Mail,
    title: 'Launch Campaigns',
    description: 'Use our done-for-you cold email services or import leads into your CRM. Start reaching decision-makers immediately.',
    step: '03'
  },
  {
    icon: TrendingUp,
    title: 'Scale & Grow',
    description: 'Watch your pipeline fill with qualified opportunities. Our clients see 3-5x ROI within the first 90 days.',
    step: '04'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4 inline-block">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            How{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">VikiLeads Works</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our streamlined process. From defining your target audience to closing deals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
                
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-sm">
                      {step.step}
                    </span>
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
