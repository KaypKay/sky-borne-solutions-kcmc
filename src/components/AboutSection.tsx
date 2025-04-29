
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Rocket } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-6">
              India's Premier Cloud-Seeding & Atmospheric-Science Company
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Since 2013, Kyathi Climate has been at the forefront of weather modification 
              technology and aviation services across India. We combine cutting-edge 
              atmospheric science with a dedicated fleet of specialized aircraft to deliver 
              results for government agencies, research institutions, and private clients.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Quality Value */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-kcmc-sky/10 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <Shield className="text-kcmc-sky" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">DGCA-compliant operations with highest safety standards</p>
              </div>
              
              {/* Reliability Value */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-kcmc-sky/10 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <Clock className="text-kcmc-sky" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-gray-600 text-sm">24/7 operations with responsive service guarantee</p>
              </div>
              
              {/* Innovation Value */}
              <div className="flex flex-col items-center text-center p-4">
                <div className="bg-kcmc-sky/10 rounded-full w-14 h-14 flex items-center justify-center mb-3">
                  <Rocket className="text-kcmc-sky" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">Pioneering research and advanced technology</p>
              </div>
            </div>
            
            <Button 
              className="button-primary"
              asChild
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          
          {/* Right side - Image */}
          <div className="relative order-1 lg:order-2">
            <div className="bg-kcmc-sky rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-xl">
              <img
                src="https://source.unsplash.com/1482938289607-e9573fc25ebb"
                alt="Aerial view of weather modification operation"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="bg-white rounded-lg shadow-lg p-6 absolute -bottom-10 -left-10 md:max-w-xs">
              <p className="text-5xl font-poppins font-bold text-kcmc-sky mb-2">30%</p>
              <p className="text-gray-800">Average increase in rainfall from our cloud seeding operations in Karnataka (2019-2020)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
