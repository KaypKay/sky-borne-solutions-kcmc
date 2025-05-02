
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import CloudSeedingQuoteForm from "@/components/CloudSeedingQuoteForm";

const CloudSeedingQuotePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-poppins font-bold mb-2">Cloud Seeding Quote Request</h1>
            <p className="text-lg text-gray-600 mb-8">
              Complete the form below to request a personalized quote for our cloud seeding services, 
              specifically designed for government entities, state officials, and large estates.
            </p>
            
            <CloudSeedingQuoteForm />
            
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Why Choose Our Cloud Seeding Services?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-kcmc-sky mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proven technology with documented success in increasing rainfall in drought-prone regions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-kcmc-sky mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Experienced team with extensive background in atmospheric science and cloud physics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-kcmc-sky mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Customized solutions based on your specific regional and climate requirements</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-kcmc-sky mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Comprehensive reporting and analysis of results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CloudSeedingQuotePage;
