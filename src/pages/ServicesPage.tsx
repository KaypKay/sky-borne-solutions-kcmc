
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("cloud-seeding");

  const tabs = [
    { id: "cloud-seeding", label: "Cloud Seeding" },
    { id: "research", label: "Cloud Physics Research" },
    { id: "charter", label: "Aviation Charter" },
    { id: "ambulance", label: "Air Ambulance" },
  ];

  const tabContent = {
    "cloud-seeding": {
      title: "Cloud Seeding",
      description: "Our core expertise lies in weather modification through cloud seeding, enhancing rainfall in regions facing drought or water scarcity.",
      features: [
        "State-of-the-art cloud seeding technology",
        "Specialized aircraft equipped with seeding dispensers",
        "Real-time weather monitoring and analysis",
        "Comprehensive pre and post-operation reports",
        "Customized solutions for different geographic regions",
      ],
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=1200&auto=format&fit=crop",
    },
    "research": {
      title: "Cloud Physics Research",
      description: "Advancing the science of atmospheric modification through detailed research and collaboration with leading institutions.",
      features: [
        "Advanced instrumentation for cloud physics measurements",
        "Data collection and analysis for scientific publications",
        "Partnerships with research institutions worldwide",
        "Development of new cloud seeding technologies",
        "Training programs for atmospheric scientists",
      ],
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    },
    "charter": {
      title: "Aviation Charter",
      description: "Premium aircraft charter services for business travel, leisure, and specialized transport needs.",
      features: [
        "Fleet of well-maintained aircraft",
        "Experienced pilots with thousands of flight hours",
        "Customized flight schedules",
        "Luxury amenities on board",
        "Seamless booking and travel experience",
      ],
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1200&auto=format&fit=crop",
    },
    "ambulance": {
      title: "Air Ambulance",
      description: "Rapid medical evacuation services with state-of-the-art equipment and trained medical professionals.",
      features: [
        "24/7 emergency response",
        "Fully equipped medical facilities onboard",
        "Trained medical staff",
        "Bed-to-bed patient transfer",
        "Global coverage for medical emergencies",
      ],
      image: "https://images.unsplash.com/photo-1581595219315-a187dd06f9bd?q=80&w=1200&auto=format&fit=crop",
    },
  };

  const currentTab = tabContent[activeTab as keyof typeof tabContent];

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-8">Our Services</h1>
          
          <div className="mb-8 overflow-x-auto">
            <div className="flex min-w-max border-b">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`px-4 py-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-kcmc-sky text-kcmc-sky"
                      : "text-gray-600 hover:text-kcmc-sky"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img 
                src={currentTab.image} 
                alt={currentTab.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-poppins font-semibold mb-4">{currentTab.title}</h2>
              <p className="text-gray-700 mb-6">{currentTab.description}</p>
              
              <h3 className="text-xl font-medium mb-3">Key Features</h3>
              <ul className="space-y-2">
                {currentTab.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-kcmc-sky mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button className="bg-kcmc-sky hover:bg-kcmc-rain text-white py-2 px-6 rounded transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
