import { motion } from 'framer-motion';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('src/Images/pixelcut-export.jpeg')" }}>
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex items-center justify-start h-full p-8 text-white">
        <div className="max-w-md">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Please Help African Children Give Them A Better Life.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            A small river named Duden flows by their place and supplies it with the necessary regelialia.
          </motion.p>
          <div className="flex space-x-4">
            <motion.button
              className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
                        <Link to="/services">Make Donation Now</Link>


            </motion.button>
            <motion.button
              className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
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