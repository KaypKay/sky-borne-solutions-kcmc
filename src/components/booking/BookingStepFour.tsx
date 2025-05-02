
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Calendar, Clock } from "lucide-react";

interface BookingStepFourProps {
  referenceNumber: string;
}

const BookingStepFour: React.FC<BookingStepFourProps> = ({ referenceNumber }) => {
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
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <p className="font-medium text-left mb-2">Reference Number: <span className="text-kcmc-sky">{referenceNumber}</span></p>
        <div className="text-left space-y-2">
          <div className="flex items-center text-gray-600">
            <Mail className="mr-2 h-4 w-4" />
            <p className="text-sm">A confirmation email has been sent to your email address.</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="mr-2 h-4 w-4" />
            <p className="text-sm">Your booking details have been saved to our system.</p>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="mr-2 h-4 w-4" />
            <p className="text-sm">You will receive a response within 24 hours.</p>
          </div>
        </div>
      </div>
      <p className="mb-8 text-gray-600">
        Please save your reference number for future inquiries about this booking.
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
