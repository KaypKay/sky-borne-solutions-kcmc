
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface BookingStepTwoProps {
  prevStep: () => void;
  nextStep: () => void;
  userData: { email: string; name?: string; isGuest: boolean } | null;
}

const BookingStepTwo: React.FC<BookingStepTwoProps> = ({ prevStep, nextStep, userData }) => {
  const [fullName, setFullName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  
  // If userData changes, update form fields
  useEffect(() => {
    if (userData) {
      if (userData.name) setFullName(userData.name);
      setEmail(userData.email);
    }
  }, [userData]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            readOnly={!!userData} // Make readonly if provided by authentication
          />
          {userData && (
            <p className="text-xs text-gray-500 mt-1">Email provided during authentication</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Special Requests (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
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
  );
};

export default BookingStepTwo;
