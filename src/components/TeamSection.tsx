import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const teamMembers = [
  {
    name: 'Adam Zaki',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face',
    bio: 'Visionary entrepreneur with 10+ years in B2B data and lead generation. Founded VikiLeads to revolutionize how businesses connect with their ideal customers.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Waqas Azeem',
    role: 'Co-Founder & CTO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: 'Tech innovator specializing in data verification systems and automation. Built the proprietary technology that powers VikiLeads\' 97% accuracy rate.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Rebecca Thompson',
    role: 'Head of Marketing Strategy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face',
    bio: 'Marketing strategist with expertise in cold email campaigns and B2B demand generation. Helps clients maximize ROI from their lead lists.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Kathy Vogler',
    role: 'Director of Business Development',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face',
    bio: 'Business development expert with a proven track record of building strategic partnerships. Connects clients with tailored solutions for their growth goals.',
    linkedin: '#',
    twitter: '#'
  },
  {
    name: 'Sonaina Saleem',
    role: 'Senior Campaign Manager',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=300&h=300&fit=crop&crop=face',
    bio: 'Cold outreach specialist managing end-to-end email campaigns for enterprise clients. Expert in deliverability optimization and A/B testing strategies.',
    linkedin: '#',
    twitter: '#'
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-4 inline-block">
            Meet Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            The Experts Behind{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Your Success</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Our team of B2B marketing and data specialists is dedicated to helping your business grow with verified, high-quality leads.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  </div>
                  
                  <div className="p-4 -mt-12 relative z-10">
                    <h3 className="font-heading font-bold text-foreground text-lg">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="w-8 h-8 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                        aria-label={`${member.name}'s Twitter`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
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

export default TeamSection;
