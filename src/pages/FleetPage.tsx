
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import FleetCard from "@/components/FleetCard";
import { Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Update the fleet data structure to match the FleetCard props
const fleetData = [
  {
    id: "king-air",
    name: "Beechcraft King Air B200",
    type: "Twin Turboprop Aircraft",
    description: "The Beechcraft King Air B200 is a versatile twin-turboprop aircraft that combines comfort, performance, and reliability. This aircraft is specially equipped with a Supplemental Type Certificate (STC) for cloud research operations.",
    specs: {
      passengers: 7,
      cruiseSpeed: "270 KTAS",
      range: "1,500 NM",
      specialFeatures: [
        "Cloud seeding equipment",
        "Scientific instrument mounting points",
        "Advanced weather radar",
        "Luxury interior configuration",
        "Satellite communication system",
        "Terrain awareness system"
      ]
    },
    imageUrl: "/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png"
  },
  {
    id: "agusta",
    name: "Agusta A109E",
    type: "Twin-Engine Helicopter",
    description: "The Agusta A109E is a sophisticated twin-engine helicopter that delivers exceptional performance and versatility for a variety of missions including VIP transport, medical evacuation, and aerial surveys.",
    specs: {
      passengers: 6,
      cruiseSpeed: "154 KTAS",
      range: "450 NM",
      specialFeatures: [
        "Medical evacuation configuration",
        "Night vision goggle compatible",
        "Advanced avionics suite",
        "VIP interior available",
        "High-performance autopilot",
        "All-weather operations capability"
      ]
    },
    imageUrl: "/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png"
  }
];

const FleetPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-2">Our Fleet</h1>
          <p className="text-lg text-gray-600 mb-10">
            Kyathi Climate operates a versatile fleet of aircraft equipped for various missions including cloud seeding, private charter, medical evacuation, and aerial surveys.
          </p>
          
          <div className="space-y-12">
            {fleetData.map((aircraft) => (
              <FleetCard 
                key={aircraft.id}
                aircraft={aircraft}
              />
            ))}
          </div>
          
          <Card className="mt-12 bg-gray-50">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h2>
              <p className="mb-4">
                Our aircraft can be configured for various specialized missions. Contact our team to discuss your specific requirements.
              </p>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-kcmc-sky mr-2" />
                <a href="tel:+918028562224" className="text-kcmc-sky hover:underline font-medium">
                  +91 80 28562224
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
