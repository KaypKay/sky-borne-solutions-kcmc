
import React from "react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface BookingStepThreeProps {
  bookingType: string;
  date?: Date;
  userData: { email: string; name?: string; isGuest: boolean } | null;
  prevStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
}

const BookingStepThree: React.FC<BookingStepThreeProps> = ({
  bookingType,
  date,
  userData,
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
              <p className="font-medium">{userData?.name || "Not provided"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contact Email</p>
              <p className="font-medium">{userData?.email}</p>
            </div>
            
            {userData?.isGuest && (
              <div className="md:col-span-2">
                <p className="text-sm bg-blue-50 p-2 rounded border border-blue-100">
                  <span className="font-medium">Note:</span> You're booking as a guest. 
                  Your quote will be sent to your email address.
                </p>
              </div>
            )}
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
          onClick={onSubmit}
          className="bg-kcmc-sky hover:bg-kcmc-rain text-white"
        >
          Confirm Booking
        </Button>
      </div>
    </div>
  );
};

export default BookingStepThree;
