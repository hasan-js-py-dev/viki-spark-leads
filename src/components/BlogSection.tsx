import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { blogs } from '@/data/blogs';

const blogThumbnails: Record<string, string> = {
  "why-quality-b2b-data-beats-quantity": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.6) 100%)",
  "cold-email-deliverability-guide-2024": "linear-gradient(135deg, #10B981 0%, #059669 100%)",
  "linkedin-sales-navigator-vs-manual-prospecting": "linear-gradient(135deg, #0077B5 0%, #004182 100%)",
  "apollo-zoominfo-alternative-comparison": "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
  "google-maps-scraping-local-lead-generation": "linear-gradient(135deg, #EA4335 0%, #34A853 100%)",
  "catch-all-email-validation-explained": "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
  "building-ideal-customer-profile-b2b": "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
  "ecommerce-brand-leads-ddd-marketing": "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
  "data-enrichment-maximize-crm-value": "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
  "social-media-scraping-b2b-leads": "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)"
};

const BlogSection = () => {
  const featuredBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Blog & Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            B2B Lead Generation{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Insights
            </span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Expert guides, strategies, and tips to maximize your sales prospecting results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/blog/${blog.slug}`} target="_blank">
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                  <div 
                    className="h-48 flex items-center justify-center p-6"
                    style={{ background: blogThumbnails[blog.slug] }}
                  >
                    <h3 className="text-white text-base font-heading font-semibold text-center leading-tight">
                      {blog.title.split(':')[0]}
                    </h3>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {blog.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-base font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {new Date(blog.publishDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link to="/blog" target="_blank">
            <Button size="lg" variant="outline" className="gap-2">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
