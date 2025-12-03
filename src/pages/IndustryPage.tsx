import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Target, Zap, Users, TrendingUp } from 'lucide-react';
import { industries } from '@/data/industries';

const IndustryPage = () => {
  const { slug } = useParams();
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <>
      <Helmet>
        <title>{industry.metaTitle}</title>
        <meta name="description" content={industry.metaDescription} />
        <meta property="og:title" content={industry.metaTitle} />
        <meta property="og:description" content={industry.metaDescription} />
        <link rel="canonical" href={`https://vikileads.com/industries/${industry.slug}`} />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />

        <main className="relative z-10 pt-24 pb-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-6">
                <Icon className="text-primary" size={48} />
              </div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                B2B Leads for {industry.name}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-6">
                {industry.tagline}
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                {industry.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/free-leads" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow-strong">
                    Get 100 Free Leads
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
                <a href="/get-started" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    Get Started
                  </Button>
                </a>
              </div>
            </motion.div>
          </section>

          {/* Pain Points & Benefits */}
          <section className="container mx-auto px-4 mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Pain Points */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-card/50 border-destructive/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-destructive/10">
                        <Target className="text-destructive" size={24} />
                      </div>
                      <h2 className="text-xl font-orbitron font-bold">Common Challenges</h2>
                    </div>
                    <ul className="space-y-4">
                      {industry.painPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-destructive mt-1">✗</span>
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="h-full bg-card/50 border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Zap className="text-primary" size={24} />
                      </div>
                      <h2 className="text-xl font-orbitron font-bold">VikiLeads Solutions</h2>
                    </div>
                    <ul className="space-y-4">
                      {industry.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="container mx-auto px-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-4xl font-orbitron font-bold mb-4">
                How {industry.name} Companies Use VikiLeads
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {industry.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-6 text-center">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground">{useCase}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Target Audience */}
          <section className="container mx-auto px-4 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-card/50 border-border">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Users className="text-primary" size={24} />
                    </div>
                    <h2 className="text-xl font-orbitron font-bold">Who You Can Reach</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {industry.targetAudience.map((audience, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="px-4 py-2 text-sm border-primary/30 bg-primary/5"
                      >
                        {audience}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/20"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mx-auto mb-6">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h2 className="text-2xl md:text-4xl font-orbitron font-bold mb-4">
                Ready to Grow Your {industry.name} Business?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of {industry.name.toLowerCase()} companies already using VikiLeads to accelerate their sales pipeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/free-leads" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow-strong">
                    Claim Your 100 Free Leads
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </a>
                <a href="/get-started" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">
                    Contact Sales
                  </Button>
                </a>
              </div>
            </motion.div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndustryPage;
