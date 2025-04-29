
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-kcmc-sky/10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image side */}
            <div 
              className="h-64 lg:h-auto bg-cover bg-center"
              style={{
                backgroundImage: "url('https://source.unsplash.com/photo-1472396961693-142e6e269027')"
              }}
            ></div>
            
            {/* Content side */}
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl font-poppins font-semibold mb-4">
                Interested in Weather Modification for Your Region?
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our cloud seeding experts can develop a customized solution for your specific weather challenges. 
                Schedule a consultation with our atmospheric scientists today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="button-primary"
                  asChild
                >
                  <Link to="/weather-mod">Request a Consultation</Link>
                </Button>
                <Button 
                  className="button-secondary"
                  asChild
                >
                  <Link to="/services">
                    <Calendar className="mr-2" size={16} />
                    Talk to a Scientist
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
