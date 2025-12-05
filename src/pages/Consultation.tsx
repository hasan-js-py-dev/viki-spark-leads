import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

declare global {
  interface Window {
    Cal?: any;
  }
}

const Consultation = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.Cal) {
        window.Cal('init', { origin: 'https://cal.com' });
        window.Cal('inline', {
          elementOrSelector: '#cal-booking',
          calLink: 'vikileads/consultation', // Replace with your Cal.com link
          layout: 'month_view',
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const benefits = [
    {
      icon: Clock,
      title: '30-Minute Call',
      description: 'Quick but comprehensive discussion about your lead generation needs',
    },
    {
      icon: Video,
      title: 'Video or Phone',
      description: 'Choose your preferred communication method',
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Schedule a Free Consultation | VikiLeads</title>
        <meta
          name="description"
          content="Book a free 30-minute consultation with VikiLeads to discuss your B2B lead generation needs. No obligation, expert advice."
        />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />

        <main className="relative z-10 pt-24 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-6">
                <Calendar className="text-primary" size={48} />
              </div>
              <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                Schedule a <span className="bg-gradient-primary bg-clip-text text-transparent">Free Consultation</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Book a 30-minute call with our lead generation experts. We'll discuss your needs and create a custom strategy for your business.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Card className="bg-card/50 border-border h-full">
                      <CardContent className="p-6 text-center">
                        <div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-4">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <h3 className="text-lg font-jakarta font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Cal.com Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-card/50 border-border overflow-hidden">
                <CardContent className="p-0">
                  <div 
                    id="cal-booking" 
                    style={{ width: '100%', minHeight: '700px', overflow: 'auto' }}
                    className="bg-background"
                  />
                </CardContent>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Can't find a suitable time? <a href="/contact" className="text-primary hover:underline">Contact us directly</a>
              </p>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Consultation;
