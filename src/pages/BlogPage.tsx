import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>B2B Lead Generation Blog | VikiLeads Resources</title>
        <meta name="description" content="Expert guides on B2B lead generation, cold email strategies, data enrichment, and sales prospecting. Learn how to build better prospect lists." />
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
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Blog & Resources
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                B2B Lead Generation{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Insights
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides, strategies, and tips to maximize your sales prospecting results
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/blog/${blog.slug}`} target="_blank">
                    <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group overflow-hidden">
                      <div 
                        className="h-48 flex items-center justify-center p-6"
                        style={{ background: blogThumbnails[blog.slug] }}
                      >
                        <h3 className="text-white text-lg font-bold text-center leading-tight">
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
                        
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
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

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
