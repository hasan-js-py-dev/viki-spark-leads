import { lazy, Suspense } from 'react';
import Navigation from '@/components/Navigation';
import StarField from '@/components/StarField';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';

// Lazy load below-the-fold components for better performance
const ServiceCategories = lazy(() => import('@/components/ServiceCategories'));
const IndustriesSection = lazy(() => import('@/components/IndustriesSection'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const ComparisonSection = lazy(() => import('@/components/ComparisonSection'));
const TestimonialsSection = lazy(() => import('@/components/TestimonialsSection'));
const CaseStudies = lazy(() => import('@/components/CaseStudies'));
const BlogSection = lazy(() => import('@/components/BlogSection'));
const FAQSection = lazy(() => import('@/components/FAQSection'));
const TrustSection = lazy(() => import('@/components/TrustSection'));
const Footer = lazy(() => import('@/components/Footer'));
const FloatingContactBar = lazy(() => import('@/components/FloatingContactBar'));

// Simple loading placeholder
const SectionLoader = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <StarField />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <ClientLogos />
        <Suspense fallback={<SectionLoader />}>
          <ServiceCategories />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <IndustriesSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <ComparisonSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <BlogSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <TrustSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <FloatingContactBar />
      </Suspense>
    </div>
  );
};

export default Index;