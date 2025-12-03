import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'VP of Sales',
    company: 'TechScale Solutions',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
    content: 'VikiLeads transformed our outbound strategy. We saw a 340% increase in qualified meetings within the first quarter. The data accuracy is unmatched.',
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    role: 'Director of Marketing',
    company: 'GrowthHub Agency',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face',
    content: 'We tried ZoomInfo and Apollo before, but VikiLeads delivers higher quality contacts at a fraction of the cost. Our email deliverability improved by 45%.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Founder & CEO',
    company: 'RecruitPro Staffing',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face',
    content: 'The HR and recruiting contacts from VikiLeads are incredibly accurate. We closed 12 new enterprise clients in our first 60 days using their data.',
    rating: 5
  },
  {
    name: 'Jennifer Walsh',
    role: 'Business Development Manager',
    company: 'CloudFirst Technologies',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face',
    content: 'Finally, a B2B data provider that understands quality over quantity. Every lead we received was verified and relevant to our ICP.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Head of Growth',
    company: 'FinanceFlow Inc.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: 'VikiLeads\' financial services contacts helped us break into a market we struggled with for years. 10x ROI in just 3 months.',
    rating: 5
  },
  {
    name: 'Amanda Foster',
    role: 'CMO',
    company: 'HealthTech Innovations',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop&crop=face',
    content: 'The healthcare industry contacts were spot-on. We reached decision-makers we could never find before. Highly recommend VikiLeads.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4 inline-block">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Trusted by{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">500+ Companies</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about partnering with VikiLeads for their B2B lead generation needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
