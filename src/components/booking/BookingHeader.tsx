
import React from "react";

interface BookingHeaderProps {
  step: number;
  title: string;
  description: string;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({ step, title, description }) => {
  // Step count starts from 0 (auth) to 4 (confirmation)
  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <span className="text-gray-500">
          Step {step === 0 ? "1" : step + 1} of {totalSteps - 1}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-kcmc-sky h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BookingHeader;
