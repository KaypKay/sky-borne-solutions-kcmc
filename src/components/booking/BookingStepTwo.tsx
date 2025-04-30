
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface BookingStepTwoProps {
  prevStep: () => void;
  nextStep: () => void;
}

const BookingStepTwo: React.FC<BookingStepTwoProps> = ({ prevStep, nextStep }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
            required
            placeholder="+1 (555) 123-4567"
          />
          <p className="text-xs text-gray-500 mt-1">
            We'll use this to contact you regarding your booking request
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Organization (Optional)
          </label>
          <Input
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
  );
};

export default BookingStepTwo;
