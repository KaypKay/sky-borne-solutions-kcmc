
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBar from "@/components/ContactBar";
import HomePage from "@/pages/HomePage";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBar />
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Index;
