import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'VP of Sales',
    company: 'TechScale Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: 'VikiLeads transformed our outbound strategy. We saw a 340% increase in qualified meetings within the first quarter. The data accuracy is unmatched.',
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    role: 'Director of Marketing',
    company: 'GrowthHub Agency',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: 'We tried ZoomInfo and Apollo before, but VikiLeads delivers higher quality contacts at a fraction of the cost. Our email deliverability improved by 45%.',
    rating: 5
  },
  {
    name: 'David Thompson',
    role: 'Founder & CEO',
    company: 'RecruitPro Staffing',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    content: 'The HR and recruiting contacts from VikiLeads are incredibly accurate. We closed 12 new enterprise clients in our first 60 days using their data.',
    rating: 5
  },
  {
    name: 'Jennifer Walsh',
    role: 'Business Development Manager',
    company: 'CloudFirst Technologies',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    content: 'Finally, a B2B data provider that understands quality over quantity. Every lead we received was verified and relevant to our ICP.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Head of Growth',
    company: 'FinanceFlow Inc.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face',
    content: 'VikiLeads\' financial services contacts helped us break into a market we struggled with for years. 10x ROI in just 3 months.',
    rating: 5
  },
  {
    name: 'Amanda Foster',
    role: 'CMO',
    company: 'HealthTech Innovations',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
    content: 'The healthcare industry contacts were spot-on. We reached decision-makers we could never find before. Highly recommend VikiLeads.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Sales Director',
    company: 'DataSync Pro',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    content: 'Our cold email response rate jumped from 2% to 8% after switching to VikiLeads data. The quality difference is immediately noticeable.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Account Executive',
    company: 'SaaS Growth Partners',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    content: 'Best investment we made this year. VikiLeads helped us book 40+ demos in our first month. The team is also incredibly responsive.',
    rating: 5
  },
  {
    name: 'Chris Anderson',
    role: 'Marketing Manager',
    company: 'B2B Accelerate',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop&crop=face',
    content: 'We\'ve tried many data providers. VikiLeads stands out for their verification process. Almost zero bounces on our campaigns now.',
    rating: 5
  },
  {
    name: 'Lisa Chang',
    role: 'VP of Business Development',
    company: 'Enterprise Solutions Co',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
    content: 'VikiLeads data helped us land 3 Fortune 500 accounts. Their executive contact accuracy is exceptional. Worth every penny.',
    rating: 5
  },
  {
    name: 'Mark Stevens',
    role: 'CEO',
    company: 'LeadGen Masters',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=100&h=100&fit=crop&crop=face',
    content: 'As an agency, we need reliable data for our clients. VikiLeads has become our go-to source. Consistent quality every single time.',
    rating: 5
  },
  {
    name: 'Rachel Green',
    role: 'SDR Team Lead',
    company: 'TechVentures Inc',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
    content: 'My team\'s productivity doubled after we started using VikiLeads. No more wasting time on bad data. Every contact is actionable.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

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

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(i);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
