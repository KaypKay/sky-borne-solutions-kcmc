
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-kcmc-darkgrey text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png" 
              alt="Kyathi Climate Logo" 
              className="h-16 mb-4" 
            />
            <p className="text-gray-300 mb-4">
              India's premier cloud-seeding & atmospheric-science company offering aviation charter, air ambulance, and weather modification services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  Book a Flight
                </Link>
              </li>
              <li>
                <Link to="/weather-mod" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  Weather Modification
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-kcmc-sky" size={18} />
                <span className="text-gray-300">
                  #6/6/2, 'Kyathi Commercio', Jakkur Plantation, Bangalore-560064
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-kcmc-sky" size={18} />
                <a href="tel:+918028562224" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  +91 80 28562224
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-kcmc-sunlight" size={18} />
                <a href="tel:+917760205986" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  24/7 Emergency: +91 7760205986
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-kcmc-sky" size={18} />
                <a href="mailto:info@kyathiclimate.com" className="text-gray-300 hover:text-kcmc-sky transition-colors">
                  info@kyathiclimate.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-poppins font-medium mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for updates on weather modification and aviation technology.</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-gray-700 px-4 py-2 rounded text-white outline-none focus:ring-2 focus:ring-kcmc-sky"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-kcmc-sky text-white py-2 rounded hover:bg-kcmc-rain transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Kyathi Climate Modification Consultants LLP. All rights reserved.</p>
            <div className="mt-3 md:mt-0 flex space-x-4">
              <Link to="/privacy" className="hover:text-kcmc-sky transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-kcmc-sky transition-colors">Terms of Service</Link>
              <Link to="/disclaimer" className="hover:text-kcmc-sky transition-colors">Disclaimer</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
