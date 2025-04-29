
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-poppins font-bold mb-6">About Us</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Our Mission</h2>
              <p className="mb-4">
                At Kyathi Climate Modification Consultants LLP, we are dedicated to harnessing the power of 
                atmospheric science to address real-world challenges. As India's premier cloud-seeding and 
                atmospheric-science company, we combine cutting-edge research with practical applications 
                to modify weather patterns, provide emergency medical services, and offer specialized 
                aviation solutions.
              </p>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Our Values</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-poppins font-medium text-kcmc-sky">Quality</h3>
                  <p>We maintain the highest standards in all our operations, from aircraft maintenance to scientific research.</p>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-medium text-kcmc-sky">Reliability</h3>
                  <p>Our clients trust us for consistent, dependable service in critical situations.</p>
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-medium text-kcmc-sky">Innovation</h3>
                  <p>We continuously push the boundaries of what's possible in atmospheric science and aviation services.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-poppins font-semibold mb-4">Our Journey</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-kcmc-sky pl-4">
                  <h3 className="text-xl font-medium">2013</h3>
                  <p>Foundation of Kyathi Climate Modification Consultants LLP</p>
                </div>
                <div className="border-l-4 border-kcmc-sky pl-4">
                  <h3 className="text-xl font-medium">2015</h3>
                  <p>First successful cloud seeding operation in Karnataka</p>
                </div>
                <div className="border-l-4 border-kcmc-sky pl-4">
                  <h3 className="text-xl font-medium">2019</h3>
                  <p>Collaboration with IITM for CAIPEX cloud-seeding campaign</p>
                </div>
                <div className="border-l-4 border-kcmc-sky pl-4">
                  <h3 className="text-xl font-medium">2020</h3>
                  <p>Karnataka Government monsoon operations achieving 30% rainfall increase</p>
                </div>
                <div className="border-l-4 border-kcmc-sky pl-4">
                  <h3 className="text-xl font-medium">Present</h3>
                  <p>Expanding our fleet and services across India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-poppins font-semibold mb-6">Our Leadership</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Mr. Prakash K. Koliwad</h3>
                <p className="text-kcmc-sky mb-2">Chief Mentor</p>
                <p>
                  An Automobile Engineer and weather-modification pioneer, Mr. Koliwad has been 
                  instrumental in establishing Kyathi Climate as a leader in atmospheric science and 
                  weather modification in India.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Krishi P. Koliwad</h3>
                <p className="text-kcmc-sky mb-2">Managing Director</p>
                <p>
                  Leading Kyathi Climate's operations and strategic initiatives, Krishi brings a vision 
                  for innovation and excellence in all aspects of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
