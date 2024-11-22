import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('src/Images/pixelcut-export.jpeg')" }}>
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-start h-full p-8 text-white">
        <div className="max-w-xl">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Help African Children Live Better Lives
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light mb-8"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Every little bit helps. A small river named Duden flows by their place, supplying it with everything they need for a brighter future.
          </motion.p>
          <div className="flex space-x-6">
            <motion.button
              className="bg-green-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Link to="/services">Make Donation Now</Link>
            </motion.button>
            <motion.button
              className="bg-blue-600 text-white py-3 px-8 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
