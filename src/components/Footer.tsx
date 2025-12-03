import { NavLink } from './NavLink';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import logo from '@/assets/vikileads-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Contact List Building', to: '/services/contact-list' },
      { label: 'LinkedIn Scraping', to: '/services/linkedin-scraping' },
      { label: 'Email Outreach', to: '/services/email-outreach' },
      { label: 'Database Scraping', to: '/services/database-scraping' },
    ],
    Company: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Service', to: '/terms-of-service' },
    ],
    Resources: [
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/case-studies' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Support', to: '/support' },
    ],
  };

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="VikiLeads" className="h-8 w-8" />
              <span className="text-xl font-orbitron font-bold bg-gradient-primary bg-clip-text text-transparent">
                VikiLeads
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Empowering B2B businesses with verified contact lists and targeted cold outreach solutions for maximum growth.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:contact@vikileads.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-orbitron font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {currentYear} VikiLeads. All rights reserved. Powering B2B growth through intelligent lead generation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
