
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { FleetCard } from "@/components/FleetCard";

// Update the fleet data structure to match the FleetCard props
const fleetData = [
  {
    id: "king-air",
    title: "Beechcraft King Air B200",
    type: "Twin Turboprop Aircraft",
    description: "The Beechcraft King Air B200 is a versatile twin-turboprop aircraft that combines comfort, performance, and reliability. This aircraft is specially equipped with a Supplemental Type Certificate (STC) for cloud research operations.",
    specifications: {
      passengers: "6-7 passengers",
      cruiseSpeed: "270 KTAS",
      range: "1,500 NM",
      ceiling: "35,000 feet",
      engines: "Pratt & Whitney PT6A-42 engines"
    },
    features: [
      "Cloud seeding equipment",
      "Scientific instrument mounting points",
      "Advanced weather radar",
      "Luxury interior configuration",
      "Satellite communication system",
      "Terrain awareness system"
    ],
    images: ["/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png"]
  },
  {
    id: "agusta",
    title: "Agusta A109E",
    type: "Twin-Engine Helicopter",
    description: "The Agusta A109E is a sophisticated twin-engine helicopter that delivers exceptional performance and versatility for a variety of missions including VIP transport, medical evacuation, and aerial surveys.",
    specifications: {
      passengers: "6 passengers",
      cruiseSpeed: "154 KTAS",
      range: "450 NM",
      ceiling: "19,600 feet",
      engines: "Pratt & Whitney PW206C engines"
    },
    features: [
      "Medical evacuation configuration",
      "Night vision goggle compatible",
      "Advanced avionics suite",
      "VIP interior available",
      "High-performance autopilot",
      "All-weather operations capability"
    ],
    images: ["/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png"]
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
                id={aircraft.id}
                title={aircraft.title}
                type={aircraft.type}
                description={aircraft.description}
                specifications={aircraft.specifications}
                features={aircraft.features}
                images={aircraft.images}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
