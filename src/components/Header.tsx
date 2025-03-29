
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="border-b bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-teal rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">FC</span>
          </div>
          <h1 className="text-2xl font-bold text-gradient">FairCredit</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium text-gray-600 hover:text-brand-blue">
            Home
          </Link>
          <Link to="/how-it-works" className="font-medium text-gray-600 hover:text-brand-blue">
            How It Works
          </Link>
          <Link to="/about" className="font-medium text-gray-600 hover:text-brand-blue">
            About
          </Link>
          <Button className="bg-brand-blue hover:bg-brand-blue/90">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="py-2 px-4 font-medium text-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="py-2 px-4 font-medium text-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/about"
              className="py-2 px-4 font-medium text-gray-600 hover:text-brand-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Button className="bg-brand-blue hover:bg-brand-blue/90 w-full">
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
