
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BookingStepFourProps {
  userData: { email: string; name?: string; isGuest: boolean } | null;
}

const BookingStepFour: React.FC<BookingStepFourProps> = ({ userData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex justify-center mb-6">
        <CheckCircle className="w-20 h-20 text-green-500" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4">Thank You for Your Booking Request</h3>
      
      <p className="text-gray-600 mb-6">
        Your request has been received and is being processed. An email confirmation has been sent to{" "}
        <span className="font-medium">{userData?.email}</span>.
      </p>
      
      {userData?.isGuest ? (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            You booked as a guest. Your quote will be sent to your email address within 24 hours.
          </p>
        </div>
      ) : (
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-gray-700">
            Thank you for using your Google account. You'll receive updates about your booking status.
          </p>
        </div>
      )}
      
      <p className="text-gray-600 mb-8">
        Our team will contact you shortly to confirm the details and provide you with further information.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button className="bg-kcmc-sky hover:bg-kcmc-rain text-white" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
        <Button variant="outline" className="border-kcmc-sky text-kcmc-sky hover:bg-kcmc-sky/10" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default BookingStepFour;
