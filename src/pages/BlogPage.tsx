
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const categories = [
    "All",
    "Atmospheric Science",
    "Aviation Ops",
    "Case Studies",
    "Company News",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-4xl font-poppins font-bold">Blog & Insights</h1>
            
            <div className="mt-4 md:mt-0">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="pl-10 pr-4 py-2 border rounded-full w-full md:w-64"
                />
                <svg 
                  className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="mb-8 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    index === 0
                      ? "bg-kcmc-sky text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-1M8 7h1m0 0h1m-1 0v1m0-1V6m5 4h2a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-3a2 2 0 012-2h1" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Blog Posts Available</h2>
            <p className="text-gray-500 max-w-md mb-6">
              We're currently working on our first articles. Check back soon for insights on cloud seeding, aviation, and more!
            </p>
            <Link
              to="/contact"
              className="text-kcmc-sky font-medium hover:underline"
            >
              Contact us for more information
            </Link>
          </div>
          
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
