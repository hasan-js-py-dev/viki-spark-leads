import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Clock, Quote, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { caseStudies } from '@/data/caseStudies';

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button>Back to Case Studies</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{study.metaTitle}</title>
        <meta name="description" content={study.metaDescription} />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </Link>

            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                {study.industry}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{study.company}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {study.challenge}
              </p>
            </motion.div>

            {/* Results Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {study.results.map((result, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-sm text-muted-foreground">{result.metric}</div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* The Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </motion.div>

                {/* The Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground mb-4">{study.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.servicesUsed.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Full Story */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mb-8"
                >
                  <h2 className="text-2xl font-bold mb-4">The Full Story</h2>
                  <div className="prose prose-invert max-w-none">
                    {study.fullStory.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>
                    ))}
                  </div>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20"
                >
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <blockquote className="text-lg italic mb-4">"{study.testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold">{study.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{study.testimonial.title}</div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="sticky top-24 space-y-6"
                >
                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">Key Results</h3>
                      <div className="space-y-3">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                            <div>
                              <span className="font-semibold text-primary">{result.value}</span>
                              <span className="text-muted-foreground text-sm"> {result.metric}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <Clock className="w-4 h-4" />
                        <span>Timeline: {study.timeline}</span>
                      </div>
                      <h3 className="font-bold mb-3">Services Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.servicesUsed.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-muted rounded text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/10 border-primary/20">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-bold mb-2">Ready to Get Similar Results?</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Start with 100 free verified leads
                      </p>
                      <Link to="/free-leads" target="_blank">
                        <Button className="w-full">
                          Get Free Leads
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudyDetail;
