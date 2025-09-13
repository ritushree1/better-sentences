import { Languages } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Support', href: '#' },
  ];

  return (
    <footer className="bg-secondary/30 py-16 border-t border-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Languages className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold gradient-text">LangAudi</span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap justify-center gap-8 mb-8">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <div className="pt-8 border-t border-primary/10">
            <p className="text-muted-foreground">
              © 2024 LangAudi. All rights reserved. Made with ❤️ for global communication.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;