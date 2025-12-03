import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User, Tag, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { blogs } from '@/data/blogs';

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find(b => b.slug === slug);
  const relatedBlogs = blogs.filter(b => b.slug !== slug && b.category === blog?.category).slice(0, 3);

  if (!blog) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {blog.category}
                </span>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">{blog.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {blog.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(blog.publishDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {blog.readTime}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-invert prose-lg max-w-none mb-12"
              >
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: blog.content
                      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4 text-foreground">$1</h2>')
                      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3 text-foreground">$1</h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>')
                      .replace(/^- (.*$)/gim, '<li class="text-muted-foreground ml-4">$1</li>')
                      .replace(/^\d\. (.*$)/gim, '<li class="text-muted-foreground ml-4">$1</li>')
                      .replace(/\n\n/g, '</p><p class="text-muted-foreground mb-4">')
                      .replace(/\|.*\|/g, (match) => `<div class="overflow-x-auto my-4"><table class="min-w-full border-collapse">${match}</table></div>`)
                  }} 
                />
              </motion.article>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center gap-2 flex-wrap mb-12"
              >
                <Tag className="w-4 h-4 text-muted-foreground" />
                {blog.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 text-center mb-12"
              >
                <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Lead Generation?</h2>
                <p className="text-muted-foreground mb-6">
                  Get 100 free verified B2B leads and see the VikiLeads difference for yourself
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/free-leads" target="_blank">
                    <Button size="lg">Get 100 Free Leads</Button>
                  </Link>
                  <Link to="/get-started" target="_blank">
                    <Button size="lg" variant="outline">Contact Sales</Button>
                  </Link>
                </div>
              </motion.div>

              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {relatedBlogs.map((related) => (
                      <Link key={related.id} to={`/blog/${related.slug}`} target="_blank">
                        <Card className="h-full bg-card/50 border-border/50 hover:border-primary/50 transition-all">
                          <CardContent className="p-4">
                            <span className="text-xs text-primary">{related.category}</span>
                            <h3 className="font-semibold mt-1 line-clamp-2 hover:text-primary transition-colors">
                              {related.title}
                            </h3>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                              <Clock className="w-3 h-3" />
                              {related.readTime}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogDetail;
