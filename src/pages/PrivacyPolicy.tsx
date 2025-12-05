import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | VikiLeads - B2B Lead Generation</title>
        <meta name="description" content="Read VikiLeads' Privacy Policy. Learn how we collect, use, and protect your personal information and data." />
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
                  Privacy <span className="bg-gradient-primary bg-clip-text text-transparent">Policy</span>
                </h1>
                <p className="text-muted-foreground text-center mb-12">
                  Last updated: December 1, 2024
                </p>

                <div className="prose prose-lg max-w-none space-y-8">
                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">1. Introduction</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      VikiLeads LLC ("VikiLeads," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. Please read this policy carefully to understand our practices regarding your personal data.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">2. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We collect information in the following ways:
                    </p>
                    
                    <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">2.1 Information You Provide</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                      <li>Contact information (name, email, phone number, company name)</li>
                      <li>Account credentials when creating an account</li>
                      <li>Payment information for purchases</li>
                      <li>Communication preferences and feedback</li>
                      <li>Information submitted through forms or surveys</li>
                    </ul>

                    <h3 className="text-lg font-heading font-semibold mb-2 text-foreground">2.2 Automatically Collected Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>IP address and device identifiers</li>
                      <li>Browser type and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring URLs and exit pages</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">3. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>To provide, maintain, and improve our Services</li>
                      <li>To process transactions and send related information</li>
                      <li>To send promotional communications (with your consent)</li>
                      <li>To respond to inquiries and provide customer support</li>
                      <li>To analyze usage patterns and optimize user experience</li>
                      <li>To detect, prevent, and address technical issues or fraud</li>
                      <li>To comply with legal obligations</li>
                    </ul>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">4. Data Sharing and Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li><strong className="text-foreground">Service Providers:</strong> With trusted third parties who assist in operating our website, conducting business, or providing services to you</li>
                      <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                      <li><strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                      <li><strong className="text-foreground">Protection of Rights:</strong> To protect the rights, property, or safety of VikiLeads, our users, or others</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not sell your personal information to third parties for their marketing purposes.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">5. Cookies and Tracking Technologies</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      We use cookies and similar tracking technologies to:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Deliver targeted advertising</li>
                      <li>Improve our Services</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our website.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">6. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">7. Data Retention</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When data is no longer needed, we securely delete or anonymize it.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">8. Your Rights and Choices</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Depending on your location, you may have the following rights:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li><strong className="text-foreground">Access:</strong> Request a copy of the personal data we hold about you</li>
                      <li><strong className="text-foreground">Correction:</strong> Request correction of inaccurate or incomplete data</li>
                      <li><strong className="text-foreground">Deletion:</strong> Request deletion of your personal data</li>
                      <li><strong className="text-foreground">Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong className="text-foreground">Opt-out:</strong> Unsubscribe from marketing communications</li>
                      <li><strong className="text-foreground">Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      To exercise these rights, please contact us using the information provided below.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">9. GDPR Compliance (EU Users)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you are located in the European Economic Area (EEA), we process your personal data based on legitimate interests, contractual necessity, legal obligations, or your consent. You have the right to lodge a complaint with your local data protection authority if you believe we have violated your privacy rights.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">10. CCPA Compliance (California Residents)</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      California residents have additional rights under the California Consumer Privacy Act (CCPA):
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                      <li>Right to know what personal information is collected, used, shared, or sold</li>
                      <li>Right to delete personal information held by businesses</li>
                      <li>Right to opt-out of the sale of personal information</li>
                      <li>Right to non-discrimination for exercising CCPA rights</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed mt-4">
                      We do not sell personal information as defined by the CCPA.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">11. Third-Party Links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">12. Children's Privacy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to delete that information.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">13. International Data Transfers</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">14. Changes to This Policy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website with a new "Last updated" date. Your continued use of our Services after such changes constitutes acceptance of the updated Privacy Policy.
                    </p>
                  </section>

                  <section className="bg-card border border-border rounded-xl p-6 md:p-8">
                    <h2 className="text-2xl font-heading font-bold mb-4 text-foreground">15. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <div className="mt-4 text-muted-foreground">
                      <p><strong className="text-foreground">VikiLeads LLC</strong></p>
                      <p>Email: privacy@vikileads.co</p>
                      <p>Website: www.vikileads.co</p>
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

export default PrivacyPolicy;
