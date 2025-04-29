
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

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
              <h2 className="text-2xl font-semibold mb-1">
                {step === 1 && "Flight Details"}
                {step === 2 && "Passenger Information"}
                {step === 3 && "Review & Payment"}
                {step === 4 && "Booking Confirmed"}
              </h2>
              <p className="text-gray-600">
                {step === 1 && "Provide details about your desired flight."}
                {step === 2 && "Tell us about the passengers traveling."}
                {step === 3 && "Review your booking details and proceed to payment."}
                {step === 4 && "Your booking request has been received."}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  {bookingType === "charter" ? (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Origin
                        </label>
                        <input
                          type="text"
                          placeholder="City or Airport Code"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Destination
                        </label>
                        <input
                          type="text"
                          placeholder="City or Airport Code"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className="w-full justify-start text-left font-normal"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : "Select date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Passengers
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          defaultValue="1"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Aircraft Type (Optional)
                        </label>
                        <select
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        >
                          <option value="">No preference</option>
                          <option value="king-air">Beechcraft King Air B200</option>
                          <option value="agusta">Agusta A109E</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Trip Type
                        </label>
                        <select
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        >
                          <option value="one-way">One Way</option>
                          <option value="round-trip">Round Trip</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Pickup Location
                        </label>
                        <input
                          type="text"
                          placeholder="Hospital or Location Name"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Destination
                        </label>
                        <input
                          type="text"
                          placeholder="Hospital or Location Name"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Urgency
                        </label>
                        <select
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        >
                          <option value="immediate">Immediate (within hours)</option>
                          <option value="same-day">Same Day</option>
                          <option value="next-day">Next Day</option>
                          <option value="scheduled">Scheduled Transfer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Patient Condition
                        </label>
                        <select
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        >
                          <option value="stable">Stable</option>
                          <option value="critical">Critical</option>
                          <option value="intensive">Intensive Care</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Medical Requirements
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Stretcher needed</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Paramedic required</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span>Doctor required</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Medical Information
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Please provide any relevant medical details"
                          className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                        ></textarea>
                      </div>
                    </>
                  )}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization (Optional)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-kcmc-sky text-kcmc-sky"
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Service Type</p>
                        <p className="font-medium">
                          {bookingType === "charter" ? "Private Charter" : "Medical Evacuation"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-medium">{date ? format(date, "PPP") : "Not specified"}</p>
                      </div>
                      {bookingType === "charter" ? (
                        <>
                          <div>
                            <p className="text-sm text-gray-500">Origin</p>
                            <p className="font-medium">Bangalore (Example)</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-medium">Mumbai (Example)</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <p className="text-sm text-gray-500">Pickup Location</p>
                            <p className="font-medium">City Hospital (Example)</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Destination</p>
                            <p className="font-medium">Specialized Care Center (Example)</p>
                          </div>
                        </>
                      )}
                      <div>
                        <p className="text-sm text-gray-500">Contact Name</p>
                        <p className="font-medium">John Doe (Example)</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Contact Email</p>
                        <p className="font-medium">johndoe@example.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Estimated Cost</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Base fare</span>
                      <span>₹120,000</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Taxes & fees</span>
                      <span>₹24,000</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                      <span>Total (estimate)</span>
                      <span>₹144,000</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      *Final price may vary based on actual flight time, routing, and additional services required.
                    </p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Payment Options</h3>
                  <div className="space-y-2">
                    <label className="flex items-center p-3 border rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="invoice"
                        defaultChecked
                        className="mr-2"
                      />
                      <span>Request Invoice (Pay Later)</span>
                    </label>
                    <label className="flex items-center p-3 border rounded hover:bg-gray-50">
                      <input
                        type="radio"
                        name="payment"
                        value="online"
                        className="mr-2"
                      />
                      <span>Pay Online (Card/UPI/Net Banking)</span>
                    </label>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" required className="mr-2" />
                    <span className="text-sm">
                      I agree to the{" "}
                      <a href="#" className="text-kcmc-sky hover:underline">
                        Terms and Conditions
                      </a>
                    </span>
                  </label>
                </div>
                
                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="border-kcmc-sky text-kcmc-sky"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
            
            {step === 4 && (
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
                    <a href="/">Return to Home</a>
                  </Button>
                </div>
              </div>
            )}
          </form>
          
          {step < 4 && (
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
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;
