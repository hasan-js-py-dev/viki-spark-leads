import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServiceCategories from '@/components/ServiceCategories';
import IndustriesSection from '@/components/IndustriesSection';
import HowItWorks from '@/components/HowItWorks';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudies from '@/components/CaseStudies';
import BlogSection from '@/components/BlogSection';
import FAQSection from '@/components/FAQSection';
import TrustSection from '@/components/TrustSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ClientLogos />
        <ServiceCategories />
        <IndustriesSection />
        <HowItWorks />
        <ComparisonSection />
        <TestimonialsSection />
        <CaseStudies />
        <BlogSection />
        <FAQSection />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
