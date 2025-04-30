
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Phone } from "lucide-react";
import { Link } from "react-router-dom";

interface FleetCardProps {
  aircraft: {
    id: string;
    name: string;
    type: string;
    description: string;
    specs: {
      passengers: number;
      cruiseSpeed: string;
      range: string;
      specialFeatures: string[];
    };
    imageUrl: string;
  };
}

const FleetCard: React.FC<FleetCardProps> = ({ aircraft }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'specifications'>('overview');
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-64">
        <img 
          src={aircraft.imageUrl} 
          alt={aircraft.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-kcmc-darkgrey/80 to-transparent p-4">
          <h3 className="text-white text-2xl font-semibold">{aircraft.name}</h3>
          <p className="text-white/80">{aircraft.type}</p>
        </div>
      </div>
      
      <div className="p-6">
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200 mb-4">
          <button 
            className={`py-2 px-4 font-medium ${
              activeTab === 'overview' 
                ? 'text-kcmc-sky border-b-2 border-kcmc-sky' 
                : 'text-gray-500 hover:text-kcmc-sky'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`py-2 px-4 font-medium ${
              activeTab === 'specifications' 
                ? 'text-kcmc-sky border-b-2 border-kcmc-sky' 
                : 'text-gray-500 hover:text-kcmc-sky'
            }`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
        </div>
        
        {/* Tab Content */}
        {activeTab === 'overview' ? (
          <div>
            <p className="text-gray-700 mb-4">{aircraft.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button className="button-primary" asChild>
                <Link to="/book">Book This Aircraft</Link>
              </Button>
              <Button className="button-secondary">
                <FileText className="mr-2" size={16} />
                Download Spec Sheet
              </Button>
              <Button className="button-secondary" variant="outline">
                <Phone className="mr-2" size={16} />
                Contact Us
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <div className="text-gray-600">Passengers:</div>
              <div className="font-medium">{aircraft.specs.passengers}</div>
              
              <div className="text-gray-600">Cruise Speed:</div>
              <div className="font-medium">{aircraft.specs.cruiseSpeed}</div>
              
              <div className="text-gray-600">Range:</div>
              <div className="font-medium">{aircraft.specs.range}</div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Special Features:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {aircraft.specs.specialFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FleetCard;
