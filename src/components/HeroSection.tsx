
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CloudRain, Plane, Ambulance } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient pt-20">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute top-1/4 left-1/4 opacity-30 w-72 h-72 bg-kcmc-sky rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 opacity-20 w-56 h-56 bg-kcmc-rain rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kcmc-darkgrey mb-4">
            Science in the Sky. <br />
            Service on the Ground.
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Harnessing the sky – from rainfall to rescue.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="button-primary text-lg px-8 py-6"
              asChild
            >
              <Link to="/book">Book a Flight</Link>
            </Button>
            <Button 
              className="button-accent text-lg px-8 py-6"
              asChild
            >
              <Link to="/emergency">Emergency Service</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Cloud Seeding Panel */}
          <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="bg-kcmc-sky/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <CloudRain className="text-kcmc-sky" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Seeding</h3>
            <p className="text-gray-700 mb-4">Advanced techniques to enhance rainfall and combat drought conditions.</p>
            <Link 
              to="/services?tab=cloud-seeding"
              className="text-kcmc-sky hover:text-kcmc-rain transition-colors font-medium"
            >
              Learn more →
            </Link>
          </div>
          
          {/* Charter Flights Panel */}
          <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="bg-kcmc-sky/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Plane className="text-kcmc-sky" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Charter Flights</h3>
            <p className="text-gray-700 mb-4">Private aviation solutions for business and leisure travel with 24/7 operations.</p>
            <Link 
              to="/services?tab=aviation-charter"
              className="text-kcmc-sky hover:text-kcmc-rain transition-colors font-medium"
            >
              Learn more →
            </Link>
          </div>
          
          {/* Air Ambulance Panel */}
          <div className="bg-white rounded-xl p-6 shadow-lg transition-all hover:-translate-y-1 duration-300">
            <div className="bg-kcmc-sky/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Ambulance className="text-kcmc-sky" size={36} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Air Ambulance</h3>
            <p className="text-gray-700 mb-4">Rapid medical evacuations with bedside-to-bedside service and complete medical support.</p>
            <Link 
              to="/services?tab=air-ambulance"
              className="text-kcmc-sky hover:text-kcmc-rain transition-colors font-medium"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
