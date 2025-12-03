import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | VikiLeads - B2B Lead Generation</title>
        <meta name="description" content="Read VikiLeads' Terms of Service. Understand the terms and conditions governing the use of our B2B lead generation and data services." />
      </Helmet>
      
      <div className="relative min-h-screen bg-background">
        <StarField />
        <Navigation />
        
        <main className="relative z-10">
          <section className="pt-32 pb-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto"
              >
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
                  Terms of <span className="bg-gradient-primary bg-clip-text text-transparent">Service</span>
                </h1>
                <p className="text-muted-foreground text-center mb-12">
                  Last updated: December 1, 2024
                </p>

                <div className="prose prose-lg max-w-none space-y-8">
                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing or using VikiLeads' services, website, or any associated content (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Services. These Terms constitute a legally binding agreement between you and VikiLeads LLC ("VikiLeads," "we," "us," or "our").
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">2. Description of Services</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      VikiLeads provides B2B lead generation services, including but not limited to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Custom B2B contact lists and databases</li>
                      <li>Verified email addresses and phone numbers</li>
                      <li>Industry-specific lead generation</li>
                      <li>Cold email campaign management services</li>
                      <li>Data enrichment and verification services</li>
                      <li>LinkedIn lead generation and outreach</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">3. User Responsibilities</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      By using our Services, you agree to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Use the data and leads provided solely for legitimate business purposes</li>
                      <li>Comply with all applicable laws, including CAN-SPAM, GDPR, CCPA, and other anti-spam regulations</li>
                      <li>Not resell, redistribute, or share the data with third parties without written consent</li>
                      <li>Not use the data for illegal, fraudulent, or unethical purposes</li>
                      <li>Maintain the confidentiality of any account credentials</li>
                      <li>Provide accurate information when placing orders or creating accounts</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">4. Data Accuracy and Guarantees</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      VikiLeads strives to maintain a 97% accuracy rate for all verified contacts. However:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Contact information may change after delivery due to job changes, company updates, or other factors beyond our control</li>
                      <li>We offer replacement credits for contacts that bounce within 30 days of delivery, subject to verification</li>
                      <li>Accuracy guarantees apply only to verified contacts, not to supplementary or unverified data</li>
                      <li>We do not guarantee specific business outcomes, conversion rates, or response rates from using our data</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">5. Payment Terms</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Payment terms for VikiLeads services:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>All fees are due upon order placement unless otherwise agreed in writing</li>
                      <li>We accept major credit cards, PayPal, and bank transfers</li>
                      <li>Prices are subject to change; quoted prices are valid for 30 days</li>
                      <li>Custom enterprise agreements may include different payment terms</li>
                      <li>All payments are non-refundable once data has been delivered</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">6. Refund Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Due to the nature of digital data products, all sales are final once delivery has been made. However, we offer replacement credits for verified contacts that bounce within 30 days of delivery. Refund requests for service issues will be evaluated on a case-by-case basis. Free lead samples provided for evaluation purposes are non-refundable and are not covered by our accuracy guarantee.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">7. Intellectual Property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      All content, trademarks, logos, and intellectual property on the VikiLeads website and in our Services are owned by VikiLeads LLC. You may not reproduce, distribute, or create derivative works without our express written permission. The data provided to you is licensed for your use only and does not transfer ownership of the underlying database or compilation.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, VikiLeads shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our Services. Our total liability shall not exceed the amount paid by you for the specific Services giving rise to the claim. We are not responsible for any damages resulting from your use of the data in violation of applicable laws.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">9. Indemnification</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You agree to indemnify, defend, and hold harmless VikiLeads, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorneys' fees) arising from your use of our Services, violation of these Terms, or infringement of any third-party rights.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">10. Termination</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      VikiLeads reserves the right to suspend or terminate your access to our Services at any time, with or without cause, and with or without notice. Upon termination, your right to use any data provided will continue subject to these Terms, but we may disable access to our platform and services.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">11. Governing Law</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be resolved exclusively in the state or federal courts located in Delaware.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">12. Changes to Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      VikiLeads reserves the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on our website with a new "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the modified Terms.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">13. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at:
                    </p>
                    <div className="mt-4 text-muted-foreground">
                      <p><strong className="text-foreground">VikiLeads LLC</strong></p>
                      <p>Email: legal@vikileads.com</p>
                      <p>Website: www.vikileads.com</p>
                    </div>
                  </section>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
