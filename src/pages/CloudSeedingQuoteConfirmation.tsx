
import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Button } from "@/components/ui/button";
import { Mail, Calendar, Clock } from "lucide-react";

const CloudSeedingQuoteConfirmation: React.FC = () => {
  const [searchParams] = useSearchParams();
  const referenceNumber = searchParams.get("ref") || "Unknown";

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cloud Seeding Quote Request Received!</h3>
              <p className="mb-6 text-gray-600">
                Thank you for your interest in our cloud seeding services. Our experts will review your requirements
                and prepare a customized quote for your consideration.
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
                    <p className="text-sm">Your quote request details have been saved to our system.</p>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="mr-2 h-4 w-4" />
                    <p className="text-sm">You will receive a detailed quote within 3-5 business days.</p>
                  </div>
                </div>
              </div>
              <p className="mb-8 text-gray-600">
                Please save your reference number for future inquiries about this quote request.
              </p>
              <div className="space-x-4">
                <Button
                  asChild
                  className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
                >
                  <Link to="/">Return to Home</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                >
                  <Link to="/services?tab=cloud-seeding">Learn More About Cloud Seeding</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSeedingQuoteConfirmation;
