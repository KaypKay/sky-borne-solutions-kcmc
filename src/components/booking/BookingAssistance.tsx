
import React from "react";
import { Phone } from "lucide-react";

const BookingAssistance: React.FC = () => {
  return (
    <div className="mt-10 bg-kcmc-sky/10 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Need Immediate Assistance?</h3>
      <p className="mb-4">
        For urgent bookings or special requirements, please contact us directly:
      </p>
      <div className="flex items-center">
        <Phone className="h-5 w-5 text-kcmc-sky mr-2" />
        <a href="tel:+918028562224" className="text-kcmc-sky hover:underline font-medium">
          +91 80 28562224
        </a>
      </div>
    </div>
  );
};

export default BookingAssistance;
