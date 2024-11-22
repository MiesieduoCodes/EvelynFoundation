import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { FaHandHoldingHeart, FaHeart, FaHandsHelping, FaRegSmile } from 'react-icons/fa';

const iconVariants = (delay) => ({
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: delay,
      ease: "easeOut",
    },
  },
});

const Preloader = ({ onLoaded }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoaded) onLoaded(); 
    }, 5000); // Duration of the loader

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 2; // Progress increment
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
        scale: isAnimating ? 1 : 0.8, // Add scale down effect for outro
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-gradient-to-r from-gray-800 via-gray-900 to-black z-50 text-white"
      style={{ pointerEvents: isAnimating ? "auto" : "none" }}
    >
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="pb-8 text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-center text-white shadow-lg"
      >
        Empowering Change, One Step at a Time
      </motion.h1>

      {/* Circular Progress Bar */}
      <motion.div
        className="relative w-36 h-36 rounded-full border-8 border-gray-700 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="w-32 h-32 bg-transparent rounded-full border-8 border-t-8 border-blue-600"
          style={{
            transform: `rotate(${loadingProgress * 3.6}deg)`, // Rotate to match progress
          }}
        />
        <div className="absolute text-lg text-white font-bold">
          {loadingProgress}%
        </div>
      </motion.div>

      {/* Icon Animations */}
      <div className="relative w-full h-full flex justify-center mt-8 space-x-8 text-white text-3xl">
        <motion.div className="absolute top-5 left-5 text-indigo-400" variants={iconVariants(1)} initial="initial" animate="animate">
          <FaHandHoldingHeart />
        </motion.div>
        <motion.div className="absolute top-20 right-10 text-pink-500" variants={iconVariants(1.2)} initial="initial" animate="animate">
          <FaHeart />
        </motion.div>
        <motion.div className="absolute bottom-10 left-10 text-teal-500" variants={iconVariants(1.4)} initial="initial" animate="animate">
          <FaHandsHelping />
        </motion.div>
        <motion.div className="absolute bottom-20 right-20 text-yellow-400" variants={iconVariants(1.6)} initial="initial" animate="animate">
          <FaRegSmile />
        </motion.div>
      </div>

      {/* Loading Text */}
      <div className="mt-8 text-center text-gray-200">
        <p className="text-lg">Your support is changing lives. Please wait while we load the experience!</p>
      </div>
    </motion.div>
  );
};

Preloader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default Preloader;
