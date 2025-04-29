
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Phone, Mail, MapPin, Calendar, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
    // Form submission logic would go here
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-8">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-6">Get in Touch</h2>
              <p className="mb-8 text-gray-700">
                We'd love to hear from you. Whether you have questions about our services, 
                need a consultation, or want to discuss a potential project, our team is 
                ready to assist you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kcmc-sky/10 p-2 rounded">
                    <MapPin className="h-5 w-5 text-kcmc-sky" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-gray-600">
                      #6/6/2, 'Kyathi Commercio', Jakkur Plantation<br />
                      Bangalore, Karnataka, 560064<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kcmc-sky/10 p-2 rounded">
                    <Phone className="h-5 w-5 text-kcmc-sky" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">
                      Office: <a href="tel:+918028562224" className="text-kcmc-sky hover:underline">+91 80 28562224</a><br />
                      24/7 Emergency: <a href="tel:+917760205986" className="text-kcmc-sky hover:underline">+91 7760205986</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kcmc-sky/10 p-2 rounded">
                    <Mail className="h-5 w-5 text-kcmc-sky" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@kyathiclimate.com" className="text-kcmc-sky hover:underline">info@kyathiclimate.com</a><br />
                      Support: <a href="mailto:support@kyathiclimate.com" className="text-kcmc-sky hover:underline">support@kyathiclimate.com</a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-semibold">Connect With Us</h3>
                
                <div className="flex items-center space-x-4">
                  <a href="#" className="bg-kcmc-sky/10 p-3 rounded-full hover:bg-kcmc-sky/20 transition-colors">
                    <Calendar className="h-5 w-5 text-kcmc-sky" />
                  </a>
                  <div>
                    <h4 className="font-medium">Schedule a Meeting</h4>
                    <p className="text-sm text-gray-600">Book a consultation with our experts</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <a href="https://wa.me/917760205986" className="bg-kcmc-sky/10 p-3 rounded-full hover:bg-kcmc-sky/20 transition-colors">
                    <MessageSquare className="h-5 w-5 text-kcmc-sky" />
                  </a>
                  <div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-sm text-gray-600">Chat with us on WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-poppins font-semibold mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                    >
                      <option value="">Select a subject</option>
                      <option value="cloud-seeding">Cloud Seeding</option>
                      <option value="charter">Aviation Charter</option>
                      <option value="ambulance">Air Ambulance</option>
                      <option value="research">Research Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border rounded focus:ring-kcmc-sky focus:border-kcmc-sky"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-kcmc-sky text-white py-2 px-6 rounded hover:bg-kcmc-rain transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">Find Us</h2>
            <div className="h-[400px] bg-gray-200 rounded">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4865297947873!2d77.59456167451774!3d13.058895713697407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae194b907b7eb1%3A0x87c48477d6169d4f!2sJakkur%20Plantation%2C%20Bengaluru%2C%20Karnataka%20560064!5e0!3m2!1sen!2sin!4v1714493965978!5m2!1sen!2sin" 
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
