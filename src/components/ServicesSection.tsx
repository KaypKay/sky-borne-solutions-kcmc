
import React from "react";
import ServiceCard from "./ServiceCard";
import { CloudRain, Plane, Ambulance, CloudLightning } from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Cloud Seeding",
      description: "Enhance rainfall in drought-prone areas with our advanced weather modification techniques.",
      imageSrc: "https://source.unsplash.com/photo-1472396961693-142e6e269027",
      link: "/services",
      icon: <CloudRain className="text-kcmc-sky" size={36} />,
      primary: true
    },
    {
      title: "Cloud Physics Research",
      description: "Cutting-edge research and data collection for atmospheric science advancements.",
      imageSrc: "https://source.unsplash.com/photo-1482938289607-e9573fc25ebb",
      link: "/services",
      icon: <CloudLightning className="text-kcmc-sky" size={36} />
    },
    {
      title: "Aviation Charter",
      description: "Private aviation solutions with our fleet of luxury aircraft for business and leisure travel.",
      imageSrc: "https://source.unsplash.com/photo-1487887235947-a955ef187fcc",
      link: "/services",
      icon: <Plane className="text-kcmc-sky" size={36} />
    },
    {
      title: "Air Ambulance",
      description: "Rapid medical evacuation services with complete bedside-to-bedside patient care.",
      imageSrc: "https://source.unsplash.com/photo-1500673922987-e212871fec22",
      link: "/services",
      icon: <Ambulance className="text-kcmc-sky" size={36} />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-kcmc-cloud">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-semibold mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700">
            From atmospheric science to aviation excellence, we deliver specialized services 
            with the highest standards of quality and safety.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              link={service.link}
              icon={service.icon}
              primary={service.primary}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
