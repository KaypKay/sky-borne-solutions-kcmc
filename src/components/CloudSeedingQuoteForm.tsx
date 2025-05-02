
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { nanoid } from "nanoid";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface CloudSeedingFormValues {
  fullName: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  region: string;
  landSize: string;
  targetPeriod: string;
  additionalInfo: string;
}

const CloudSeedingQuoteForm: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CloudSeedingFormValues>({
    defaultValues: {
      fullName: "",
      title: "",
      organization: "",
      email: "",
      phone: "",
      region: "",
      landSize: "",
      targetPeriod: "",
      additionalInfo: ""
    }
  });

  const onSubmit = async (values: CloudSeedingFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Generate a reference number
      const referenceNumber = `CS-${nanoid(8).toUpperCase()}`;
      
      // Save to Supabase
      const { error } = await supabase.from('cloud_seeding_quotes').insert({
        reference_number: referenceNumber,
        full_name: values.fullName,
        title: values.title,
        organization: values.organization,
        email: values.email,
        phone: values.phone,
        region: values.region,
        land_size: values.landSize,
        target_period: values.targetPeriod,
        additional_info: values.additionalInfo,
        status: 'pending'
      });
      
      if (error) {
        console.error('Error saving quote request:', error);
        toast({
          title: "Submission Failed",
          description: "There was an error processing your request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      // Show success message
      toast({
        title: "Quote Request Submitted",
        description: "Your cloud seeding quote request has been received!",
      });

      // Navigate to confirmation page with reference number
      navigate(`/cloud-seeding-quote/confirmation?ref=${referenceNumber}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error processing your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title/Position*</FormLabel>
                  <FormControl>
                    <Input placeholder="Your title or position" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization/Government Entity*</FormLabel>
                <FormControl>
                  <Input placeholder="Organization or government entity name" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address*</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email address" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number*</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Your contact number" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="region"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region/State/Country*</FormLabel>
                <FormControl>
                  <Input placeholder="Area where cloud seeding is needed" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="landSize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Size (approx. in sq. km)*</FormLabel>
                  <FormControl>
                    <Input placeholder="Approximate area to be covered" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Period*</FormLabel>
                  <FormControl>
                    <Input placeholder="When the service is needed (month/year)" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please share any additional details about your requirements" 
                    className="min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="pt-4">
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-kcmc-sky hover:bg-kcmc-rain"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Cloud Seeding Quote"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CloudSeedingQuoteForm;
