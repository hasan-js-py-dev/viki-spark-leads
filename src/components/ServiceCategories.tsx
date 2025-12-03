import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '@/data/serviceCategories';

const ServiceCategories = () => {
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
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            50+ Data Services
          </Badge>
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive B2B data solutions - from lead generation to AI automation. 
            Everything you need to scale your outbound sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const popularServices = category.services.filter(s => s.popular);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className={`mb-4 p-3 rounded-xl w-fit bg-gradient-to-br ${category.gradient} opacity-90`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    
                    <h3 className="font-orbitron font-bold text-lg mb-2 text-foreground">
                      {category.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {category.tagline}
                    </p>

                    {/* Service count */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {category.services.length} services
                      </span>
                      {popularServices.length > 0 && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {popularServices.length} popular
                        </span>
                      )}
                    </div>

                    {/* Popular services preview */}
                    <div className="flex-1 mb-4">
                      <div className="space-y-1">
                        {category.services.slice(0, 3).map((service) => (
                          <div key={service.id} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 rounded-full bg-primary/50" />
                            <span className="truncate">{service.name}</span>
                          </div>
                        ))}
                        {category.services.length > 3 && (
                          <div className="text-xs text-primary/70">
                            +{category.services.length - 3} more services
                          </div>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={`/services/${category.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-auto"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                      >
                        View Services
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '50+', label: 'Data Services' },
            { value: '10+', label: 'Platform Integrations' },
            { value: '97%', label: 'Data Accuracy' },
            { value: '24/7', label: 'AI Automation' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card/30 rounded-xl border border-border/50">
              <div className="text-2xl md:text-3xl font-orbitron font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;
