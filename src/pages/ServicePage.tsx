import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { getServiceBySlug } from '@/data/servicesData';

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || '');

  if (!service) {
    return (
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        <main className="relative z-10 pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-orbitron font-bold mb-4">Service Not Found</h1>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <Navigation />
      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
              <ArrowLeft size={18} />
              Back to Services
            </Button>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-primary/10 rounded-xl">
                <Icon className="text-primary" size={40} />
              </div>
              <h1 className="text-3xl md:text-5xl font-orbitron font-bold">
                {service.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {service.heroDescription}
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="gap-2">
              Get Your Custom Quote
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-8">
              What You <span className="bg-gradient-primary bg-clip-text text-transparent">Get</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-card/50 rounded-lg border border-border"
                >
                  <CheckCircle className="text-primary mt-0.5 shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-8">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                        <span className="text-primary font-bold">{step.step}</span>
                      </div>
                      <h3 className="font-jakarta font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
                  Pricing
                </h2>
                {service.pricing.type === 'starting' && service.pricing.startingPrice && (
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    Starting at {service.pricing.startingPrice}
                  </p>
                )}
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  {service.pricing.note}
                </p>
                <Button size="lg" onClick={() => navigate('/contact')} className="gap-2">
                  Get Your Custom Quote
                  <ArrowRight size={18} />
                </Button>
              </CardContent>
            </Card>
          </motion.section>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-8 text-center">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card/50 border border-border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-jakarta font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us today for a custom quote tailored to your specific needs. Our team responds within 24 hours.
            </p>
            <Button size="lg" onClick={() => navigate('/contact')} className="gap-2">
              Contact Us Now
              <ArrowRight size={18} />
            </Button>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
