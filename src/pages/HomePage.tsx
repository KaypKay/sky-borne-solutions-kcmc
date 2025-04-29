
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import FleetCard from "@/components/FleetCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  // Sample fleet data
  const featuredAircraft = {
    id: "king-air-b200",
    name: "Beechcraft King Air B200",
    type: "Twin Turboprop",
    description: "Our flagship aircraft for cloud seeding operations and private charters. The King Air B200 offers excellent performance, range, and comfort for both scientific missions and executive travel.",
    specs: {
      passengers: 7,
      cruiseSpeed: "270 KTAS",
      range: "1500 NM",
      specialFeatures: [
        "Modified with STC for cloud-seeding operations",
        "Advanced weather radar",
        "Luxury executive interior",
        "Pressurized cabin for comfort"
      ]
    },
    imageUrl: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc"
  };

  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <AboutSection />
      
      <ServicesSection />
      
      {/* Featured Aircraft Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
              Our Fleet
            </h2>
            <p className="text-lg text-gray-700">
              Specialized aircraft equipped for cloud seeding, private charter, and medical evacuations.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <FleetCard aircraft={featuredAircraft} />
          </div>
          
          <div className="text-center">
            <Button 
              className="button-primary"
              asChild
            >
              <Link to="/fleet">View All Aircraft</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Highlight */}
      <section className="py-16 bg-kcmc-sky/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
                Our Impact
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We've successfully implemented cloud-seeding campaigns across India, working with 
                government agencies and research institutions to enhance rainfall and study atmospheric conditions.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-3">Karnataka Government 2019-2020</h3>
                <p className="text-gray-700 mb-4">
                  Cloud seeding operations during monsoon season resulted in approximately 30% increase in rainfall 
                  across target regions, helping to alleviate drought conditions.
                </p>
                <Link 
                  to="/projects/karnataka-2019"
                  className="text-kcmc-sky hover:text-kcmc-rain transition-colors font-medium"
                >
                  View case study →
                </Link>
              </div>
              <Button 
                className="button-primary"
                asChild
              >
                <Link to="/projects">Explore All Projects</Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://source.unsplash.com/photo-1482938289607-e9573fc25ebb"
                alt="Cloud seeding project impact"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                <p className="text-sm font-medium text-gray-600">IITM CAIPEX 2019</p>
                <p className="text-lg font-semibold">Cloud Physics Research Campaign</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
    </main>
  );
};

export default HomePage;
