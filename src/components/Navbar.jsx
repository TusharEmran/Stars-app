import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../pictures/logo.png';

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle Drawer
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="max-w-[100px] sm:max-w-[120px] cursor-pointer" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-gray-800 font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tutorials"
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              Tutorials
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/memories"
              className={({ isActive }) =>
                isActive ? 'text-blue-600' : 'hover:text-blue-600'
              }
            >
              Memories
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="text-gray-800">
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${
          drawer ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-800" onClick={toggleDrawer}>
          <CloseIcon fontSize="large" />
        </button>

        {/* Navigation Links */}
        <ul className="mt-10 space-y-6 font-semibold text-gray-800">
          <li>
            <NavLink
              to="/"
              onClick={toggleDrawer}
              className={({ isActive }) =>
                isActive ? 'block text-blue-600' : 'block hover:text-blue-600'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tutorials"
              onClick={toggleDrawer}
              className={({ isActive }) =>
                isActive ? 'block text-blue-600' : 'block hover:text-blue-600'
              }
            >
              Tutorials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleDrawer}
              className={({ isActive }) =>
                isActive ? 'block text-blue-600' : 'block hover:text-blue-600'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/memories"
              onClick={toggleDrawer}
              className={({ isActive }) =>
                isActive ? 'block text-blue-600' : 'block hover:text-blue-600'
              }
            >
              Memories
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
