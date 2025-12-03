import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, ArrowRight, ArrowLeft, Zap, Star } from 'lucide-react';
import { getCategoryBySlug } from '@/data/serviceCategories';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const category = getCategoryBySlug(slug || '');

  if (!category) {
    return (
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        <main className="relative z-10 pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-orbitron font-bold mb-4">Category Not Found</h1>
            <Button onClick={() => navigate('/')}>Go Back Home</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;

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
              <div className={`p-4 rounded-xl bg-gradient-to-br ${category.gradient}`}>
                <Icon className="text-white" size={40} />
              </div>
              <div>
                <Badge variant="outline" className="mb-2 border-primary/50 text-primary">
                  {category.services.length} Services
                </Badge>
                <h1 className="text-3xl md:text-5xl font-orbitron font-bold">
                  {category.title}
                </h1>
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {category.heroDescription}
            </p>
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Get Custom Quote
                <ArrowRight size={18} />
              </Button>
            </a>
          </motion.div>

          {/* Services Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-8">
              Available <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="font-jakarta font-semibold text-lg text-foreground pr-2">
                          {service.name}
                        </h3>
                        {service.popular && (
                          <Badge className="bg-primary/20 text-primary border-0 shrink-0">
                            <Star size={12} className="mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Zap size={16} className="text-primary" />
                          <span className="font-bold text-primary">{service.credits}</span>
                          <span className="text-sm text-muted-foreground">credits</span>
                        </div>
                        <a href="/contact" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="gap-1 text-primary hover:text-primary">
                            Get Quote
                            <ArrowRight size={14} />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

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
              {category.benefits.map((benefit, index) => (
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

          {/* Use Cases Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-8">
              Perfect <span className="bg-gradient-primary bg-clip-text text-transparent">For</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {category.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-2 border-primary"
                >
                  <span className="text-foreground">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
                      Credit-Based Pricing
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Pay only for what you need. Our credit system gives you flexibility to mix and match services. 
                      Volume discounts available for larger orders.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-card/50 rounded-lg px-4 py-2 border border-border">
                        <div className="text-sm text-muted-foreground">Starting from</div>
                        <div className="font-bold text-primary">
                          {Math.min(...category.services.map(s => s.credits))} credits
                        </div>
                      </div>
                      <div className="bg-card/50 rounded-lg px-4 py-2 border border-border">
                        <div className="text-sm text-muted-foreground">Up to</div>
                        <div className="font-bold text-primary">
                          {Math.max(...category.services.map(s => s.credits))} credits
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <a href="/contact" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="gap-2">
                        Get Your Custom Quote
                        <ArrowRight size={18} />
                      </Button>
                    </a>
                    <p className="text-sm text-muted-foreground mt-3">
                      Volume discounts • No commitments • 24h response
                    </p>
                  </div>
                </div>
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
              {category.faqs.map((faq, index) => (
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
            <a href="/contact" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                Contact Us Now
                <ArrowRight size={18} />
              </Button>
            </a>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
