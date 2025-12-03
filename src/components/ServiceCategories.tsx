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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const popularServices = category.services.filter(s => s.popular);
            const isLastRow = index >= serviceCategories.length - (serviceCategories.length % 3 || 3);
            const itemsInLastRow = serviceCategories.length % 3 || 3;
            const shouldCenter = isLastRow && itemsInLastRow < 3;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group ${shouldCenter && index === serviceCategories.length - 1 && itemsInLastRow === 1 ? 'lg:col-start-2' : ''}`}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-glow overflow-hidden relative">
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <CardContent className="p-8 flex flex-col h-full relative z-10">
                    {/* Icon & Title */}
                    <motion.div 
                      className={`mb-5 p-4 rounded-2xl w-fit bg-gradient-to-br ${category.gradient} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                    
                    <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2">
                      {category.tagline}
                    </p>

                    {/* Service count */}
                    <div className="flex items-center gap-2 mb-5">
                      <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium">
                        {category.services.length} services
                      </span>
                      {popularServices.length > 0 && (
                        <span className="text-xs bg-accent/10 text-accent px-3 py-1.5 rounded-full font-medium">
                          {popularServices.length} popular
                        </span>
                      )}
                    </div>

                    {/* Popular services preview */}
                    <div className="flex-1 mb-5">
                      <div className="space-y-2">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <motion.div 
                            key={service.id} 
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * serviceIndex + index * 0.05 }}
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                            <span className="truncate">{service.name}</span>
                          </motion.div>
                        ))}
                        {category.services.length > 3 && (
                          <div className="text-xs text-primary/70 font-medium pl-3.5">
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
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      >
                        Get Quote
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
