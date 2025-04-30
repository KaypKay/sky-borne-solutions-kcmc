
import React from "react";

interface BookingHeaderProps {
  step: number;
  title: string;
  description: string;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({ step, title, description }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center mb-8">
        {[1, 2, 3, 4].map((stepNumber) => (
          <React.Fragment key={stepNumber}>
            <div
              className={`rounded-full w-10 h-10 flex items-center justify-center border-2 ${
                stepNumber === step
                  ? "border-kcmc-sky bg-kcmc-sky text-white"
                  : stepNumber < step
                  ? "border-kcmc-sky bg-white text-kcmc-sky"
                  : "border-gray-300 bg-white text-gray-500"
              }`}
            >
              {stepNumber < step ? "✓" : stepNumber}
            </div>
            {stepNumber < 4 && (
              <div
                className={`flex-1 h-1 ${
                  stepNumber < step ? "bg-kcmc-sky" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mb-2">
        <h2 className="text-2xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BookingHeader;
