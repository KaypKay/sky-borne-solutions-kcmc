
import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface BookingStepThreeProps {
  bookingType: string;
  date?: Date;
  prevStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const BookingStepThree: React.FC<BookingStepThreeProps> = ({
  bookingType,
  date,
  prevStep,
  onSubmit
}) => {
  return (
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
            <div>
              <p className="text-sm text-gray-500">Phone Number</p>
              <p className="font-medium">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Quote Information</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-2">
            Based on your requirements, our team will prepare a personalized quote for your {bookingType === "charter" ? "private charter" : "medical evacuation"}.
          </p>
          <p className="text-gray-700 mb-2">
            The quote will be sent to your provided email address, and our team may contact you by phone for any additional details required.
          </p>
          <p className="text-gray-700">
            Once you receive the quote, you can proceed with payment through the options that will be provided.
          </p>
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
          onClick={onSubmit}
          className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
        >
          Request Quote
        </Button>
      </div>
    </div>
  );
};

export default BookingStepThree;
