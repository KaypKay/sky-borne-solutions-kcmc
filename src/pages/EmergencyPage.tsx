
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle, Ambulance, Clock, Shield } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const EmergencyPage = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Emergency Request Sent",
        description: "Our medical team will contact you immediately.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-red-600 mr-3 mt-0.5" />
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">Emergency Medical Evacuation</h2>
                <p className="mb-2">
                  For immediate assistance, call our 24/7 emergency hotline:
                </p>
                <a href="tel:+917760205986" className="text-2xl font-bold text-red-600 flex items-center hover:underline">
                  <Phone className="h-5 w-5 mr-2" />
                  +91 7760205986
                </a>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-3xl font-poppins font-bold mb-6">Rapid Medical Response</h1>
              <p className="mb-6 text-lg">
                Kyathi Climate provides rapid emergency air ambulance services for critical 
                medical situations. Our dedicated team is available 24/7 to coordinate 
                medical evacuations throughout India.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Rapid Response Time</h3>
                    <p className="text-gray-600">
                      Our aircraft can be ready for takeoff within 60-90 minutes of confirmed request, 
                      ensuring minimal delay in critical situations.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Ambulance className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Bed-to-Bed Transfer</h3>
                    <p className="text-gray-600">
                      Complete patient transportation from one medical facility to another, 
                      including ground ambulance coordination.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-red-100 p-3 rounded-full">
                      <Shield className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Medical Expertise</h3>
                    <p className="text-gray-600">
                      Our aircraft are equipped with advanced medical equipment and staffed 
                      by experienced healthcare professionals.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Available Medical Equipment</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cardiac monitors
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Ventilators
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Defibrillators
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    IV pumps
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Oxygen supply
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Stretcher systems
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Suction devices
                  </li>
                  <li className="flex items-center">
                    <svg className="h-4 w-4 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Medical kits
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Emergency Request Form</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Person Name*
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Alternative Phone
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Current Location/Hospital*
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Destination Hospital*
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Patient Condition*
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        required
                      >
                        <option value="">Select condition</option>
                        <option value="critical">Critical</option>
                        <option value="serious">Serious but stable</option>
                        <option value="stable">Stable</option>
                        <option value="other">Other (specify below)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Medical Details
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        placeholder="Please provide relevant medical details about the patient's condition"
                      ></textarea>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700">Required Medical Support:</p>
                      <div className="grid grid-cols-2 gap-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Doctor</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Paramedic</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Stretcher</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Ventilator</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Timing*
                      </label>
                      <select
                        className="w-full px-4 py-2 border rounded focus:ring-red-500 focus:border-red-500"
                        required
                      >
                        <option value="">Select timing</option>
                        <option value="immediate">Immediate (ASAP)</option>
                        <option value="today">Later today</option>
                        <option value="tomorrow">Tomorrow</option>
                        <option value="scheduled">Specific date (non-emergency)</option>
                      </select>
                    </div>
                    
                    <div className="pt-3">
                      <Button
                        type="submit"
                        className={`w-full bg-red-600 hover:bg-red-700 text-white ${
                          submitting ? "opacity-75" : ""
                        }`}
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit Emergency Request"}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6">
            <h3 className="text-xl font-semibold mb-2">Important Information</h3>
            <ul className="space-y-2 list-disc pl-5 text-gray-700">
              <li>Our emergency response team will contact you immediately after receiving your request.</li>
              <li>For fastest response, please call our emergency hotline directly at +91 7760205986.</li>
              <li>Have relevant medical documents and patient details ready when our team contacts you.</li>
              <li>We coordinate with hospitals and ground ambulance services for seamless transfers.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyPage;
