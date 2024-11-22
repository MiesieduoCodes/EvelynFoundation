import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`p-6 fixed w-full z-10 transition-all duration-300 ${scrolled ? 'bg-gray-900 text-white shadow-lg' : 'bg-transparent text-white'}`}>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
        
        {/* Brand */}
        <div className="text-3xl font-bold text-yellow-400 hover:text-white transition-all duration-300">
          Don8
        </div>

        {/* Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <RiCloseFill className="text-4xl text-white" />
            ) : (
              <RiMenu4Fill className="text-4xl text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-6`}>
          {["Home", "Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
            <Link 
              key={index} 
              to={`/${link.toLowerCase()}`} 
              className="relative group text-lg font-medium transition-all duration-300 hover:text-yellow-400"
            >
              <span className="hover:underline">{link}</span>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu (Slide-in) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`overflow-hidden z-50 bg-white text-black flex flex-col md:hidden`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {["Home", "Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
            <Link
              key={index}
              to={`/${link.toLowerCase()}`}
              className="relative group text-xl font-medium py-2 px-4 hover:text-yellow-400 transition-all duration-300"
            >
              <span className="hover:underline">{link}</span>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
