
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="group-hover:scale-110 transition-transform duration-300">
              <img 
                src="/lovable-uploads/96d1c634-0ef5-47cb-bb59-30bbd7e2ad5a.png" 
                alt="DigitalGrow Logo" 
                className="h-10 w-auto drop-shadow-sm"
              />
            </div>
            <span className="text-xl font-bold text-brand-navy bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent">
              DigitalGrow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-all duration-300 hover:text-brand-teal relative group ${
                  isActive(item.href) 
                    ? 'text-brand-teal' 
                    : 'text-gray-700 hover:scale-105'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-teal transform transition-transform duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-gradient-to-r from-brand-teal to-brand-teal/80 hover:from-brand-teal/90 hover:to-brand-teal/70 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-brand-teal/25"
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-brand-teal hover:bg-gray-100 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 hover:text-brand-teal px-2 py-1 rounded ${
                    isActive(item.href) ? 'text-brand-teal bg-brand-teal/10' : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-gradient-to-r from-brand-teal to-brand-teal/80 hover:from-brand-teal/90 hover:to-brand-teal/70 text-white font-medium mt-4 w-full"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
