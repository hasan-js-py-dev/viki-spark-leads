import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Hero from '@/components/Hero';
import ServiceCategories from '@/components/ServiceCategories';
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
        <ServiceCategories />
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
