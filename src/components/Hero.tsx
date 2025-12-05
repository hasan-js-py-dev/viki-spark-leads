import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
              #1 B2B Lead Generation Platform
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transform Your B2B Outreach
            </span>
            <br />
            <span className="text-foreground">With Verified Contact Lists</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Get highly targeted, verified B2B contact lists and done-for-you cold outreach campaigns that deliver real results. Scale your business with precision-targeted leads.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300 text-base px-8">
              Start Growing Now <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-base px-8">
              View Our Services
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-base md:text-lg text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span>99% Verified Contacts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span>Custom Targeting</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-primary" />
              <span>Done-For-You Setup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;