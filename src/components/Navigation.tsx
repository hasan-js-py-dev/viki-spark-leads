import { useState, useEffect } from 'react';
import { NavLink } from './NavLink';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import logo from '@/assets/vikileads-logo.png';
import { industries } from '@/data/industries';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={logo} alt="VikiLeads" className="h-8 w-8" />
            <span className="text-xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
              VikiLeads
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Home
            </NavLink>
            
            <NavLink
              to="/#services"
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Services
            </NavLink>

            {/* VikiLeads For Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors outline-none">
                VikiLeads For
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 max-h-80 overflow-y-auto">
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <DropdownMenuItem key={industry.id} asChild>
                      <a
                        href={`/industries/${industry.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Icon size={16} className="text-primary" />
                        {industry.name}
                      </a>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>

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
            <NavLink
              to="/"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/#services"
              className="block text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </NavLink>
            
            {/* Mobile Industries */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">VikiLeads For:</p>
              <div className="pl-4 space-y-2">
                {industries.slice(0, 5).map((industry) => (
                  <a
                    key={industry.id}
                    href={`/industries/${industry.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </a>
                ))}
                <a
                  href="/industries/saas-software"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/80"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View all industries →
                </a>
              </div>
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
