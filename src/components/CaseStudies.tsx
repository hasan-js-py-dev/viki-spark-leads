import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { caseStudies } from '@/data/caseStudies';

const CaseStudies = () => {
  const featuredCases = caseStudies.slice(0, 3);

  const getIcon = (index: number) => {
    const icons = [TrendingUp, Users, DollarSign];
    return icons[index % icons.length];
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Real Results from{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Real Clients
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            See how businesses across industries have transformed their sales pipeline with VikiLeads data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((study, index) => {
            const Icon = getIcon(index);
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-muted-foreground">{study.industry}</span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {study.company}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {study.challenge}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {study.results.slice(0, 2).map((result, idx) => (
                        <div key={idx} className="bg-background/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-primary">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
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
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/case-studies" target="_blank">
            <Button size="lg" variant="outline" className="gap-2">
              View All Case Studies
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
