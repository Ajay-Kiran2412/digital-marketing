
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="p-2 bg-brand-teal rounded-lg">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">DigitalGrow</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering businesses to thrive in the digital landscape through innovative marketing solutions.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-brand-teal cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-brand-teal cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-brand-teal cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-brand-teal cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-brand-teal transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-brand-teal transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-brand-teal transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-brand-teal transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-brand-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">SEO Optimization</li>
              <li className="text-gray-300">Social Media Marketing</li>
              <li className="text-gray-300">PPC Advertising</li>
              <li className="text-gray-300">Content Strategy</li>
              <li className="text-gray-300">Email Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-brand-teal" />
                <span className="text-gray-300 text-sm">hello@digitalgrow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-brand-teal" />
                <span className="text-gray-300 text-sm">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-brand-teal" />
                <span className="text-gray-300 text-sm">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 DigitalGrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
