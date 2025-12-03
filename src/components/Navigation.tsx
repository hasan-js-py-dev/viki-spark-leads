import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '@/assets/vikileads-logo.png';
import { industries } from '@/data/industries';
import { serviceCategories } from '@/data/serviceCategories';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="VikiLeads" className="h-8 w-8" />
            <span className="text-xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
              VikiLeads
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('services')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors py-2">
                Services
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Services Mega Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${activeMenu === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-card border border-border rounded-xl shadow-xl p-6 min-w-[700px]">
                  <div className="grid grid-cols-3 gap-4">
                    {serviceCategories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <a
                          key={category.id}
                          href={`/services/${category.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} text-white shrink-0`}>
                            <Icon size={18} />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {category.title}
                            </div>
                            <div className="text-xs text-muted-foreground line-clamp-1">
                              {category.services.length} services
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* VikiLeads For Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMenu('industries')}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors py-2">
                VikiLeads For
                <ChevronDown size={16} className={`transition-transform duration-200 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Industries Mega Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${activeMenu === 'industries' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <div className="bg-card border border-border rounded-xl shadow-xl p-6 min-w-[600px]">
                  <div className="grid grid-cols-2 gap-3">
                    {industries.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <a
                          key={industry.id}
                          href={`/industries/${industry.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                            <Icon size={18} />
                          </div>
                          <div className="font-medium text-sm group-hover:text-primary transition-colors">
                            {industry.name}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>

            <a
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>

            <a
              href="/case-studies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </a>

            <a
              href="/free-leads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              100 Free Leads
            </a>

            <a href="/get-started" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-primary hover:shadow-glow-strong transition-all duration-300">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            {/* Mobile Services */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Services:</p>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {serviceCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`/services/${category.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.title}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Mobile Industries */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">VikiLeads For:</p>
              <div className="grid grid-cols-2 gap-2 pl-2">
                {industries.slice(0, 6).map((industry) => (
                  <a
                    key={industry.id}
                    href={`/industries/${industry.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/blog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="/case-studies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Case Studies
              </a>
            </div>

            <a
              href="/free-leads"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              100 Free Leads
            </a>

            <a
              href="/get-started"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="w-full bg-gradient-primary hover:shadow-glow-strong transition-all duration-300">
                Get Started
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
