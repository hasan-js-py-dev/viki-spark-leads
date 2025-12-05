import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import StarField from '@/components/StarField';
import Navigation from '@/components/Navigation';
import { Mail, MessageCircle, Clock, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const supportOptions = [
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours.',
    action: 'support@vikileads.co',
    actionType: 'email'
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our team in real-time during business hours.',
    action: 'Start Chat',
    actionType: 'chat'
  },
  {
    icon: Phone,
    title: 'WhatsApp Support',
    description: 'Reach us directly on WhatsApp for quick responses.',
    action: '+92 316 643 1649',
    actionType: 'whatsapp'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    description: 'Monday - Friday: 9AM - 6PM EST',
    action: 'View FAQ',
    actionType: 'link'
  }
];

const SupportPage = () => {
  return (
    <>
      <Helmet>
        <title>Support | VikiLeads - Get Help With Your B2B Data Needs</title>
        <meta name="description" content="Need help with VikiLeads? Contact our support team via email, chat, or phone. We're here to help you succeed with your B2B lead generation campaigns." />
      </Helmet>
      
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-32 pb-16 relative">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto text-center"
              >
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6 inline-block">
                  Support
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                  How Can We{' '}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">Help You?</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Our support team is here to ensure your success with VikiLeads
                </p>
              </motion.div>
            </div>
          </section>

          {/* Support Options */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {supportOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
                        <CardContent className="p-6">
                          <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <h3 className="font-heading font-bold text-foreground mb-2">{option.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                          {option.actionType === 'email' && (
                            <a href={`mailto:${option.action}`} className="text-primary hover:underline text-sm font-medium">
                              {option.action}
                            </a>
                          )}
                          {option.actionType === 'whatsapp' && (
                            <a href="https://wa.me/923166431649" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm font-medium">
                              {option.action}
                            </a>
                          )}
                          {option.actionType === 'chat' && (
                            <Button size="sm" variant="outline" className="text-sm">
                              {option.action}
                            </Button>
                          )}
                          {option.actionType === 'link' && (
                            <Link to="/faq" className="text-primary hover:underline text-sm font-medium">
                              {option.action}
                            </Link>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Check Our FAQ First
                </h2>
                <p className="text-muted-foreground mb-8">
                  Many common questions are answered in our FAQ section. You might find what you're looking for there.
                </p>
                <Button asChild>
                  <Link to="/faq">Browse FAQ</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default SupportPage;
