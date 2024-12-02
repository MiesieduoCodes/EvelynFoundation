import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const closeMenu = () => {
    setIsOpen(false);
  };

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
        <Link
              to="/"
              className="relative group text-lg font-medium transition-all duration-300 hover:text-yellow-400"
            >
              <span className="hover:underline">Home</span>
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          {["Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full bg-white text-black z-50 shadow-md"
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={closeMenu}
                className="rounded-full px-4 py-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white text-sm font-bold shadow-lg hover:shadow-xl transition-transform transform hover:scale-110"
              >
                Close Menu ✖
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-4 p-6">
              {["Home", "Donate", "Gallery", "Blog", "About", "Contact"].map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                  onClick={closeMenu} // Close menu when a link is clicked
                >
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="relative group text-xl font-medium py-2 px-4 hover:text-yellow-400 transition-all duration-300"
                  >
                    <span className="hover:underline">{link}</span>
                    <span className="absolute left-0 bottom-[-5px] w-0 h-1 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
