
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  icon?: React.ReactNode;
  primary?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  icon,
  primary = false,
}) => {
  return (
    <div 
      className={`service-card group ${
        primary ? 'border-l-4 border-kcmc-sky' : ''
      }`}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1">
          {icon && <div className="mb-4">{icon}</div>}
          <h3 className="text-2xl font-poppins font-semibold text-kcmc-darkgrey mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        <Link 
          to={link} 
          className="inline-flex items-center text-kcmc-sky hover:text-kcmc-rain transition-colors font-medium"
        >
          Learn more <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1"/>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
