import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import About from "./pages/About";
import CategoryPage from "./pages/CategoryPage";
import IndustryPage from "./pages/IndustryPage";
import GetStarted from "./pages/GetStarted";
import FreeLeads from "./pages/FreeLeads";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQPage from "./pages/FAQPage";
import SupportPage from "./pages/SupportPage";
import Consultation from "./pages/Consultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<CategoryPage />} />
            <Route path="/industries/:slug" element={<IndustryPage />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/free-leads" element={<FreeLeads />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/consultation" element={<Consultation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
