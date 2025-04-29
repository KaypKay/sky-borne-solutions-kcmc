
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import FleetCard from "@/components/FleetCard";

const FleetPage = () => {
  const fleetData = [
    {
      id: "king-air",
      name: "Beechcraft King Air B200",
      type: "Twin Turboprop Aircraft",
      description: "The Beechcraft King Air B200 is a versatile twin-turboprop aircraft equipped with Special Type Certificate (STC) for cloud-research operations. It offers exceptional range and performance for both passenger transport and specialized atmospheric research missions.",
      specifications: {
        passengers: "6-7 passengers",
        cruiseSpeed: "270 KTAS (500 km/h)",
        range: "1,500 NM (2,778 km)",
        ceiling: "35,000 feet (10,668 m)",
        engines: "2 Pratt & Whitney PT6A-42 turboprop engines",
      },
      features: [
        "Cloud seeding equipment with special dispensing system",
        "Advanced weather radar for cloud physics research",
        "Atmospheric data collection instruments",
        "Comfortable cabin with executive seating",
        "Excellent short-field performance",
      ],
      images: [
        "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?q=80&w=1200&auto=format&fit=crop",
      ]
    },
    {
      id: "agusta",
      name: "Agusta A109E",
      type: "Twin-Engine Helicopter",
      description: "The Agusta A109E is a versatile twin-engine helicopter designed for medical evacuations, VIP transport, and specialized missions. Its speed, range, and versatility make it an ideal choice for both emergency response and executive transportation.",
      specifications: {
        passengers: "6 passengers",
        cruiseSpeed: "154 KTAS (285 km/h)",
        range: "450 NM (833 km)",
        ceiling: "15,000 feet (4,572 m)",
        engines: "2 Pratt & Whitney PW206C turboshaft engines",
      },
      features: [
        "Advanced medical equipment for air ambulance operations",
        "Spacious cabin with versatile configuration options",
        "Night vision compatibility for 24/7 operations",
        "State-of-the-art avionics and navigation systems",
        "Quick deployment capability for emergency responses",
      ],
      images: [
        "https://images.unsplash.com/photo-1610288313156-72d20bbf1d31?q=80&w=1200&auto=format&fit=crop",
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-8">Our Fleet</h1>
          
          <div className="mb-10">
            <p className="text-lg mb-4">
              Kyathi Climate maintains a specialized fleet of aircraft designed for various operations, 
              from cloud seeding and atmospheric research to private charters and medical evacuations. 
              Each aircraft is maintained to the highest standards of safety and performance.
            </p>
            
            <div className="bg-kcmc-sky/10 p-4 rounded-lg">
              <h2 className="text-xl font-semibold mb-2">Safety Commitment</h2>
              <p>
                Our fleet adheres to DGCA regulations and undergoes regular maintenance under our 
                Continuing Airworthiness Management Organization (CAMO) program. All aircraft are operated 
                by experienced pilots with thousands of flight hours.
              </p>
            </div>
          </div>
          
          <div className="space-y-12">
            {fleetData.map((aircraft) => (
              <FleetCard
                key={aircraft.id}
                name={aircraft.name}
                type={aircraft.type}
                description={aircraft.description}
                specifications={aircraft.specifications}
                features={aircraft.features}
                images={aircraft.images}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-poppins font-semibold mb-4">Ready to Experience Our Fleet?</h2>
            <p className="mb-6">Contact us to arrange a charter or learn more about our specialized aircraft operations.</p>
            <div className="flex justify-center gap-4">
              <button className="bg-kcmc-sky hover:bg-kcmc-rain text-white py-2 px-6 rounded transition-colors">
                Book a Flight
              </button>
              <button className="border border-kcmc-sky text-kcmc-sky hover:bg-kcmc-sky/10 py-2 px-6 rounded transition-colors">
                Request Information
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FleetPage;
