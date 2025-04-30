
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";

interface BookingStepOneProps {
  bookingType: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  nextStep: () => void;
}

const BookingStepOne: React.FC<BookingStepOneProps> = ({
  bookingType,
  date,
  setDate,
  nextStep
}) => {
  return (
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
  );
};

export default BookingStepOne;
