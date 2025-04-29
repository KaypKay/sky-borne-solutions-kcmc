
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Projects", path: "/projects" },
    { title: "Fleet", path: "/fleet" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/9b5b31e9-86f8-4576-a9b6-8dc1e76dc287.png" 
            alt="Kyathi Climate Logo" 
            className="h-12 md:h-16" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.path}
              className="px-4 py-2 text-kcmc-darkgrey hover:text-kcmc-sky transition-colors"
            >
              {link.title}
            </Link>
          ))}
          <div className="ml-4 flex space-x-3">
            <Button className="bg-kcmc-sky hover:bg-kcmc-rain text-white">
              Book Now
            </Button>
            <Button variant="outline" className="border-kcmc-sky text-kcmc-sky hover:bg-kcmc-sky/10">
              Emergency
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-kcmc-darkgrey"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg absolute w-full">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link 
                  key={link.title} 
                  to={link.path}
                  className="px-4 py-2 text-kcmc-darkgrey hover:text-kcmc-sky transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="pt-3 grid grid-cols-2 gap-3">
                <Button className="bg-kcmc-sky hover:bg-kcmc-rain text-white">
                  Book Now
                </Button>
                <Button variant="outline" className="border-kcmc-sky text-kcmc-sky hover:bg-kcmc-sky/10">
                  Emergency
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
