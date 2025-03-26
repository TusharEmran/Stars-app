import React from 'react';
import { FaFacebookF,  FaInstagram,  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#3C3D37] text-white py-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Brand Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-[#DAA520]">Gravity of STARs</h1>
            <p className="mt-2 text-gray-400">When darkness is at its darkest, a <span className='text-[#F5EEDC] font-bold'>STAR</span> shines the brightest.</p>
          </div>

          {/* Quick Links */}
          <div className=" hidden md:block mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="/home" className="hover:text-[#DAA520] transition">Home</a></li>
              <li><a href="/tutorials" className="hover:text-[#DAA520] transition">Tutorials</a></li>
              <li><a href="/contact" className="hover:text-[#DAA520] transition">Contact</a></li>
              <li><a href="/memories" className="hover:text-[#DAA520] transition">Memories</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2 text-[#DAA520]" /> +123 456 7890
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[#DAA520]" /> support@gravitystar.com
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-[#DAA520]" /> 123 Star Street, Galaxy City
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h2 className="text-xl font-semibold">Follow Us</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-[#DAA520] transition"><FaFacebookF size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-[#DAA520] transition"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Gravity of STARs. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
