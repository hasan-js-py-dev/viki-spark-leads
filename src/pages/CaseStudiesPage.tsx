import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/data/caseStudies';

const CaseStudiesPage = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | VikiLeads B2B Data Success Stories</title>
        <meta name="description" content="See how businesses transformed their sales pipeline with VikiLeads B2B contact data. Real results from SaaS, agencies, real estate, and more." />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10 pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Case Studies
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Real Results from{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Real Clients
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how businesses across industries have transformed their sales pipeline and revenue with VikiLeads verified B2B data
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {[
                { value: '500+', label: 'Happy Clients' },
                { value: '95%+', label: 'Data Accuracy' },
                { value: '$50M+', label: 'Pipeline Generated' },
                { value: '340%', label: 'Avg. ROI Increase' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 bg-card/50 rounded-xl border border-border/50">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Case Studies Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-sm text-muted-foreground">{study.industry}</span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {study.company}
                      </h2>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {study.challenge}
                      </p>

                      <div className="space-y-2 mb-4">
                        {study.results.slice(0, 3).map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-primary">{result.value}</span>
                            <span className="text-muted-foreground">{result.metric}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{study.timeline}</span>
                      </div>

                      <Link to={`/case-studies/${study.slug}`} target="_blank">
                        <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                          Read Full Story
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl border border-primary/20"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join hundreds of businesses that have transformed their sales pipeline with VikiLeads verified B2B data
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/free-leads" target="_blank">
                  <Button size="lg">Get 100 Free Leads</Button>
                </Link>
                <Link to="/get-started" target="_blank">
                  <Button size="lg" variant="outline">Contact Sales</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
