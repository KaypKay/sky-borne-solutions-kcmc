
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Phone } from "lucide-react";

import BookingHeader from "@/components/booking/BookingHeader";
import BookingStepOne from "@/components/booking/BookingStepOne";
import BookingStepTwo from "@/components/booking/BookingStepTwo";
import BookingStepThree from "@/components/booking/BookingStepThree";
import BookingStepFour from "@/components/booking/BookingStepFour";
import BookingAssistance from "@/components/booking/BookingAssistance";

const BookingPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState("charter");
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted");
    // Form submission logic would go here
    
    // Move to confirmation step
    setStep(4);
  };

  const getStepTitle = () => {
    switch (step) {
      case 1: return "Flight Details";
      case 2: return "Passenger Information";
      case 3: return "Review & Payment";
      case 4: return "Booking Confirmed";
      default: return "";
    }
  };

  const getStepDescription = () => {
    switch (step) {
      case 1: return "Provide details about your desired flight.";
      case 2: return "Tell us about the passengers traveling.";
      case 3: return "Review your booking details and proceed to payment.";
      case 4: return "Your booking request has been received.";
      default: return "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-2">Book a Flight</h1>
          <p className="text-lg text-gray-600 mb-8">
            Complete the form below to request a booking for your desired service.
          </p>
          
          <Tabs defaultValue="charter" className="mb-10" onValueChange={setBookingType}>
            <TabsList className="grid w-full md:w-auto grid-cols-2">
              <TabsTrigger value="charter">
                Private Charter
              </TabsTrigger>
              <TabsTrigger value="medical">
                Medical Evacuation
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          <BookingHeader 
            step={step} 
            title={getStepTitle()} 
            description={getStepDescription()}
          />

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <BookingStepOne 
                bookingType={bookingType} 
                date={date} 
                setDate={setDate} 
                nextStep={nextStep} 
              />
            )}
            
            {step === 2 && (
              <BookingStepTwo 
                prevStep={prevStep} 
                nextStep={nextStep} 
              />
            )}
            
            {step === 3 && (
              <BookingStepThree 
                bookingType={bookingType} 
                date={date} 
                prevStep={prevStep} 
                onSubmit={handleSubmit} 
              />
            )}
            
            {step === 4 && <BookingStepFour />}
          </form>
          
          {step < 4 && <BookingAssistance />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
