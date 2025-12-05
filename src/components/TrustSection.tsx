import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Award, TrendingUp, Users, Zap } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: 'text-primary' },
    { icon: TrendingUp, value: '10M+', label: 'Contacts Delivered', color: 'text-accent' },
    { icon: Zap, value: '99%', label: 'Accuracy Rate', color: 'text-primary' },
    { icon: Award, value: '24/7', label: 'Support Available', color: 'text-accent' },
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
            Trusted by <span className="bg-gradient-primary bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join hundreds of successful B2B companies that trust us with their lead generation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="pt-6 text-center">
                    <Icon className={`${stat.color} mx-auto mb-4`} size={40} />
                    <div className="text-4xl font-orbitron font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-hero rounded-2xl p-8 md:p-12 border border-primary/20 text-center"
        >
          <h3 className="text-2xl md:text-4xl font-orbitron font-bold mb-4">
            Ready to Scale Your B2B Outreach?
          </h3>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
            Get started today with verified contact lists and done-for-you campaigns that deliver measurable ROI
          </p>
          <motion.a
            href="https://cal.com/vikileads"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-primary rounded-lg font-semibold text-base hover:shadow-glow-strong transition-all duration-300"
          >
            Schedule a Free Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
