import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
              #1 B2B Lead Generation Platform
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transform Your B2B Outreach
            </span>
            <br />
            <span className="text-foreground">With Verified Contact Lists</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get highly targeted, verified B2B contact lists and done-for-you cold outreach campaigns that deliver real results. Scale your business with precision-targeted leads.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300 text-base px-8">
              Start Growing Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-base px-8">
              View Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>99% Verified Contacts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>Custom Targeting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-primary" />
              <span>Done-For-You Setup</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
