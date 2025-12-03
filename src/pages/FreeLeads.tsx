import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gift, Check, ArrowRight, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FreeLeads = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    requirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Request Submitted!',
      description: "We'll deliver your 100 free leads within 24-48 hours.",
    });

    setFormData({ name: '', email: '', company: '', industry: '', requirements: '' });
    setIsSubmitting(false);
  };

  const features = [
    '100% verified email addresses',
    '97%+ deliverability guaranteed',
    'Complete contact information',
    'Company & job title data',
    'No credit card required',
    'Delivered within 48 hours',
  ];

  return (
    <>
      <Helmet>
        <title>Get 100 Free B2B Leads | VikiLeads</title>
        <meta
          name="description"
          content="Claim your 100 free verified B2B leads from VikiLeads. No credit card required. 97%+ email deliverability guaranteed."
        />
      </Helmet>

      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />

        <main className="relative z-10 pt-24 pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-primary/10 mb-6">
                <Gift className="text-primary" size={48} />
              </div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
                Limited Time Offer
              </Badge>
              <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                Get <span className="bg-gradient-primary bg-clip-text text-transparent">100 Free</span> B2B Leads
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Experience the quality of VikiLeads data with no risk. Get 100 verified leads tailored to your target market.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Full Name *</label>
                          <Input
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Business Email *</label>
                          <Input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Company *</label>
                          <Input
                            required
                            placeholder="Your Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Target Industry *</label>
                          <Input
                            required
                            placeholder="e.g., SaaS, Healthcare"
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Target Audience Details *</label>
                        <Textarea
                          required
                          placeholder="Describe your ideal customer: job titles, company size, location, etc."
                          rows={4}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:shadow-glow-strong" disabled={isSubmitting}>
                        {isSubmitting ? (
                          'Submitting...'
                        ) : (
                          <>
                            <Sparkles className="mr-2" size={18} />
                            Claim My 100 Free Leads
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-jakarta font-semibold mb-6">What's Included</h2>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="p-1 rounded-full bg-primary/10">
                          <Check className="text-primary" size={16} />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-jakarta font-semibold mb-3">How It Works</h3>
                    <ol className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">1</span>
                        <span>Fill out the form with your targeting criteria</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">2</span>
                        <span>Our team curates 100 leads matching your ICP</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">3</span>
                        <span>Receive your leads via email within 48 hours</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="text-center p-6 bg-card/30 rounded-xl border border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">
                    Need more than 100 leads? Ready to scale your outreach?
                  </p>
                  <a href="/get-started" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline">
                      View Pricing Plans
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FreeLeads;
