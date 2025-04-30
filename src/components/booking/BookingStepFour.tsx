
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingStepFour: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-2xl font-semibold mb-4">Booking Request Received!</h3>
      <p className="mb-6 text-gray-600">
        Thank you for your booking request. Our team will review your details and contact you 
        shortly to confirm your reservation.
      </p>
      <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
        <p className="font-medium">Reference Number: <span className="text-kcmc-sky">BK-12345678</span></p>
      </div>
      <p className="mb-8 text-gray-600">
        A confirmation email has been sent to your email address with all the booking details.
      </p>
      <div className="space-x-4">
        <Button
          asChild
          className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
        >
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default BookingStepFour;
