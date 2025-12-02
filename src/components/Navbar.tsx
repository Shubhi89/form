import React, { useState } from 'react';
import {  Menu, X } from 'lucide-react';
import Button from '../components/Button';
import logo from '../assets/logo.png';
import contactImg from '../assets/contact.png'

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-gray-100 py-4 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Health Desk Clinic Logo" className="h-16 w-16 object-contain"/>
        </div>
        
        <div className="hidden md:flex gap-8 items-center text-md">
           <a href="#" className="hover:text-blue-500 transition-colors">Home</a> 
          <a href="#" className="hover:text-blue-500 transition-colors">Shop</a>
          <a href="#" className="hover:text-blue-500 transition-colors">About Us</a>
          <a href="#" className="hover:text-blue-500 transition-colors">FAQ</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Blog</a>
          <a href="#" className="hover:text-blue-500 transition-colors">Contact Us</a>
          <img src={contactImg} alt="Contact" className="h-6 w-6 object-contain"/>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg py-4 px-4 flex flex-col gap-4">
            <a href="#" className="block py-2">Shop</a>
            <a href="#" className="block py-2">Our Story</a>
            <a href="#" className="block py-2">Ingredients</a>
            <Button fullWidth>Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
