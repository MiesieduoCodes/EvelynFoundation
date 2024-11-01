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
    <nav className={`p-6 fixed w-full z-10 shadow-md transition-all duration-300 ${scrolled ? 'bg-white text-black' : 'bg-transparent text-white'}`}>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">Don8</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative">
            {isOpen ? (
              <RiCloseFill className="text-4xl transition-transform duration-300 transform" />
            ) : (
              <RiMenu4Fill className="text-4xl transition-transform duration-300 transform" />
            )}
          </button>
        </div>
        <div className={`hidden md:flex space-x-4`}>
          {["Home", "Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
            <Link key={index} to={`/${link.toLowerCase()}`} className="relative group">
              <span className="hover:underline" style={{ textDecoration: 'none' }}>{link}</span>
              <span className="absolute left-0 bottom-[-8px] w-0 h-1 bg-black transition-all rounded-full duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`overflow-hidden z-50 bg-white text-black flex flex-col md:hidden`}
      >
        <div className="flex flex-col space-y-2">
          {["Home", "Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
            <Link key={index} to={`/${link.toLowerCase()}`} className="relative group p-2">
              <span className="hover:underline" style={{ textDecoration: 'none' }}>{link}</span>
              <span className="absolute left-0 bottom-[-8px] w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;