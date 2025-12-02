import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Checkbox } from './ui/checkbox';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  const navigate = useNavigate();

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
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive B2B lead generation and cold outreach solutions designed to scale your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden">
                  <CardHeader>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <CardTitle className="font-jakarta font-semibold text-xl md:text-2xl mb-4 text-foreground tracking-tight">{service.title}</CardTitle>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Checkbox checked className="mt-1 pointer-events-none" />
                          <span className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-primary/50 hover:bg-primary/10 text-base"
                      onClick={() => navigate(`/services/${service.slug}`)}
                    >
                      Learn More
                    </Button>
                    <Button
                      className="w-full text-base"
                      onClick={() => navigate('/contact')}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
