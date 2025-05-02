
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { nanoid } from "nanoid";

import BookingHeader from "@/components/booking/BookingHeader";
import BookingStepOne from "@/components/booking/BookingStepOne";
import BookingStepTwo from "@/components/booking/BookingStepTwo";
import BookingStepThree from "@/components/booking/BookingStepThree";
import BookingStepFour from "@/components/booking/BookingStepFour";
import BookingAssistance from "@/components/booking/BookingAssistance";

const BookingPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const serviceFromUrl = searchParams.get("service");
  const typeFromUrl = searchParams.get("type");
  
  const [step, setStep] = useState(1);
  const [bookingType, setBookingType] = useState(typeFromUrl || "charter");
  const [referenceNumber, setReferenceNumber] = useState("");
  
  // Set default values based on the service parameter
  useEffect(() => {
    if (typeFromUrl && (typeFromUrl === "charter" || typeFromUrl === "medical")) {
      setBookingType(typeFromUrl);
    }
    
    // You could also set other default values based on the service parameter
    // For example, if serviceFromUrl === "cloud-seeding", you could set specific defaults
  }, [typeFromUrl]);
  
  // Flight details (Step 1)
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [aircraftType, setAircraftType] = useState("");
  const [tripType, setTripType] = useState("one-way");
  
  // Medical evacuation specific fields
  const [pickupLocation, setPickupLocation] = useState("");
  const [urgency, setUrgency] = useState("immediate");
  const [patientCondition, setPatientCondition] = useState("stable");
  const [stretcherNeeded, setStretcherNeeded] = useState(false);
  const [paramedicRequired, setParamedicRequired] = useState(false);
  const [doctorRequired, setDoctorRequired] = useState(false);
  const [medicalInfo, setMedicalInfo] = useState("");
  
  // Contact information (Step 2)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  
  const generateReferenceNumber = () => {
    // Create a reference number with format BK-XXXXXXXX (8 random alphanumeric characters)
    return `BK-${nanoid(8).toUpperCase()}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Generate a reference number for the booking
      const newReferenceNumber = generateReferenceNumber();
      setReferenceNumber(newReferenceNumber);
      
      // Prepare booking data
      const bookingData = {
        booking_type: bookingType,
        date: date ? date.toISOString() : null,
        
        // Charter specific fields
        origin: bookingType === 'charter' ? origin : null,
        destination: bookingType === 'charter' ? destination : null,
        passengers: bookingType === 'charter' ? passengers : null,
        aircraft_type: bookingType === 'charter' ? aircraftType : null,
        trip_type: bookingType === 'charter' ? tripType : null,
        
        // Medical evacuation specific fields
        pickup_location: bookingType === 'medical' ? pickupLocation : null,
        urgency: bookingType === 'medical' ? urgency : null,
        patient_condition: bookingType === 'medical' ? patientCondition : null,
        stretcher_needed: bookingType === 'medical' ? stretcherNeeded : null,
        paramedic_required: bookingType === 'medical' ? paramedicRequired : null,
        doctor_required: bookingType === 'medical' ? doctorRequired : null,
        medical_info: bookingType === 'medical' ? medicalInfo : null,
        
        // Contact information
        full_name: fullName,
        email: email,
        phone: phone,
        organization: organization || null,
        special_requests: specialRequests || null,
        
        // Metadata
        reference_number: newReferenceNumber,
      };
      
      // Save to Supabase
      const { error } = await supabase.from('bookings').insert(bookingData);
      
      if (error) {
        console.error('Error saving booking:', error);
        toast({
          title: "Booking Failed",
          description: "There was an error processing your booking. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      // Display success toast
      toast({
        title: "Booking Successful",
        description: "Your booking request has been received!",
      });
      
      // Move to confirmation step
      setStep(4);
    } catch (error) {
      console.error('Error in form submission:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    }
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
          
          <Tabs defaultValue={bookingType} className="mb-10" onValueChange={setBookingType}>
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
                origin={origin}
                setOrigin={setOrigin}
                destination={destination}
                setDestination={setDestination}
                passengers={passengers}
                setPassengers={setPassengers}
                aircraftType={aircraftType}
                setAircraftType={setAircraftType}
                tripType={tripType}
                setTripType={setTripType}
                pickupLocation={pickupLocation}
                setPickupLocation={setPickupLocation}
                urgency={urgency}
                setUrgency={setUrgency}
                patientCondition={patientCondition}
                setPatientCondition={setPatientCondition}
                stretcherNeeded={stretcherNeeded}
                setStretcherNeeded={setStretcherNeeded}
                paramedicRequired={paramedicRequired}
                setParamedicRequired={setParamedicRequired}
                doctorRequired={doctorRequired}
                setDoctorRequired={setDoctorRequired}
                medicalInfo={medicalInfo}
                setMedicalInfo={setMedicalInfo}
                nextStep={nextStep} 
              />
            )}
            
            {step === 2 && (
              <BookingStepTwo 
                fullName={fullName}
                setFullName={setFullName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                organization={organization}
                setOrganization={setOrganization}
                specialRequests={specialRequests}
                setSpecialRequests={setSpecialRequests}
                prevStep={prevStep} 
                nextStep={nextStep} 
              />
            )}
            
            {step === 3 && (
              <BookingStepThree 
                bookingType={bookingType} 
                date={date}
                origin={origin}
                destination={destination}
                passengers={passengers}
                aircraftType={aircraftType}
                tripType={tripType}
                pickupLocation={pickupLocation}
                urgency={urgency}
                patientCondition={patientCondition}
                stretcherNeeded={stretcherNeeded}
                paramedicRequired={paramedicRequired}
                doctorRequired={doctorRequired}
                fullName={fullName}
                email={email}
                phone={phone}
                organization={organization}
                prevStep={prevStep} 
                onSubmit={handleSubmit} 
              />
            )}
            
            {step === 4 && <BookingStepFour referenceNumber={referenceNumber} />}
          </form>
          
          {step < 4 && <BookingAssistance />}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
