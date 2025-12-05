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
import { MessageCircle, Send, Mail, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const GetStarted = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          source: 'get-started',
        },
      });

      if (error) throw error;

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      description: 'Chat with us instantly',
      action: 'Open WhatsApp',
      href: 'https://wa.me/923166431649',
      gradient: 'from-green-500 to-green-600',
    },
    {
      name: 'Telegram',
      icon: Send,
      description: 'Message us on Telegram',
      action: 'Open Telegram',
      href: 'https://t.me/vikileads',
      gradient: 'from-blue-400 to-blue-500',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Get Started with VikiLeads | Contact Us</title>
        <meta
          name="description"
          content="Get started with VikiLeads B2B lead generation. Contact us via WhatsApp, Telegram, or email. Fast response guaranteed."
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
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
                Get <span className="bg-gradient-primary bg-clip-text text-transparent">Started</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose your preferred way to connect with us. We respond within minutes!
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Quick Contact Methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid sm:grid-cols-2 gap-6 mb-12"
              >
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.name}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <Card className="h-full bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow overflow-hidden">
                        <CardContent className="p-8 text-center">
                          <div
                            className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${method.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <Icon className="text-white" size={32} />
                          </div>
                          <h3 className="text-xl font-orbitron font-bold mb-2">{method.name}</h3>
                          <p className="text-muted-foreground mb-4">{method.description}</p>
                          <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground">
                            {method.action}
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </a>
                  );
                })}
              </motion.div>

              {/* Email Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="bg-card/50 border-border">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h2 className="text-xl font-orbitron font-bold">Send us an Email</h2>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

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
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          placeholder="Your Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          required
                          placeholder="Tell us about your lead generation needs..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="mr-2" size={18} />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GetStarted;
