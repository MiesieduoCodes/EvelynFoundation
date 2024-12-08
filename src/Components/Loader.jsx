import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { TypeAnimation } from 'react-type-animation';

const Loader = ({ onLoaded }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoaded) onLoaded(); 
    }, 2000); // Loader duration

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 4; // Progress increment
        clearInterval(progressInterval);
        return prev;
      });
    }, 100); // Progress speed

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: isAnimating ? 1 : 0,
        filter: isAnimating ? "blur(0px)" : "blur(10px)",
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 text-white"
      style={{ pointerEvents: isAnimating ? "auto" : "none" }}
    >
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pb-8 text-4xl sm:text-6xl font-extrabold tracking-tight text-center shadow-lg"
      >
        Loading, Please Wait...
      </motion.h1>

      {/* Circular Progress Bar */}
      <motion.div
        className="relative w-40 h-40 rounded-full border-8 border-gray-700 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-36 h-36 bg-transparent rounded-full border-8 border-t-8 border-blue-600"
          style={{
            transform: `rotate(${loadingProgress * 3.6}deg)`,
          }}
        />
        <div className="absolute text-2xl font-bold">
          {loadingProgress}%
        </div>
      </motion.div>

      {/* Loading Text */}
      <div className="mt-8 text-center flex flex-col text-gray-300">
        <p className="text-lg">We&apos;re preparing something special for you!</p>
        <p className="text-lg">Setting Up Donations  <TypeAnimation 
          sequence={["......", 9000]} 
          wrapper="span" 
          speed={20} 
          repeat={Infinity} 
        />
         </p>
      </div>
    </motion.div>
  );
};

Loader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default Loader;