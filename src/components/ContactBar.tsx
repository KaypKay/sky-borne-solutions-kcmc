
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactBar: React.FC = () => {
  return (
    <div className="bg-kcmc-darkgrey text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-6 text-sm">
            <a href="tel:+918028562224" className="flex items-center hover:text-kcmc-sky transition-colors">
              <Phone className="mr-2" size={14} />
              +91 80 28562224
            </a>
            <a href="tel:+917760205986" className="flex items-center hover:text-kcmc-sunlight transition-colors">
              <Phone className="mr-2" size={14} />
              24/7 Emergency: +91 7760205986
            </a>
            <a href="mailto:info@kyathiclimate.com" className="flex items-center hover:text-kcmc-sky transition-colors">
              <Mail className="mr-2" size={14} />
              info@kyathiclimate.com
            </a>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2" size={14} />
            <span>Jakkur Plantation, Bangalore-560064</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
