
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-brand-navy via-brand-navy to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/96d1c634-0ef5-47cb-bb59-30bbd7e2ad5a.png" 
                alt="DigitalGrow Logo" 
                className="h-10 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                DigitalGrow
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses to thrive in the digital landscape through innovative marketing solutions that drive real growth.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' }
              ].map(({ Icon, href }, index) => (
                <a 
                  key={index}
                  href={href}
                  className="p-2 bg-white/10 rounded-lg text-gray-300 hover:text-brand-teal hover:bg-brand-teal/20 transition-all duration-300 hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-brand-teal transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {[
                'SEO Optimization',
                'Social Media Marketing',
                'PPC Advertising',
                'Content Strategy',
                'Email Marketing',
                'Analytics & Reporting'
              ].map((service) => (
                <li key={service} className="text-gray-300 hover:text-brand-teal transition-colors duration-300 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              {[
                { Icon: Mail, text: 'hello@digitalgrow.com', href: 'mailto:hello@digitalgrow.com' },
                { Icon: Phone, text: '(555) 123-4567', href: 'tel:+15551234567' },
                { Icon: MapPin, text: 'New York, NY', href: '#' }
              ].map(({ Icon, text, href }, index) => (
                <a 
                  key={index}
                  href={href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-brand-teal transition-colors duration-300 group"
                >
                  <Icon className="h-5 w-5 text-brand-teal group-hover:scale-110 transition-transform duration-300" />
                  <span>{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 DigitalGrow. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-2 bg-brand-teal rounded-full text-white hover:bg-brand-teal/80 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
