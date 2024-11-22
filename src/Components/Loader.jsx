import { motion } from "framer-motion"; 
import { useEffect, useState } from "react";  
//import { TypeAnimation } from 'react-type-animation';
import PropTypes from 'prop-types'; 
import { 
  FaCode, 
  FaCameraRetro, 
  FaDrum, 
  FaEnvelope, 
  FaProjectDiagram, 
  FaBriefcase, 
  FaCertificate,  
  FaUserGraduate, 
  FaGlobe, 
  FaMedal, 
  FaLaptop,  
  FaChartLine, 
  FaTools 
} from 'react-icons/fa'; 

const iconVariants = (delay) => ({
  initial: { y: -20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      ease: "easeOut"
    }
  }
});

const Preloader = ({ onLoaded }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onLoaded) onLoaded(); 
    }, 5000); 

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev < 100) return prev + 10;
        clearInterval(progressInterval);
        return prev;
      });
    }, 500); 

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoaded]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isAnimating ? 1 : 0, filter: isAnimating ? "blur(0px)" : "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-black z-50 text-neutral-300 selection:text-cyan-900 bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
      style={{ pointerEvents: isAnimating ? "auto" : "none" }}
    >
      <motion.h1 
        initial={{ x: 100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }} 
        className="pb-8 text-3xl sm:text-6xl lg:text-8xl font-thin tracking-tight text-center"
      >
        {/* <TypeAnimation 
          sequence={["Developer . Photographer . Drummer . Goofy", 5000]} 
          wrapper="span" 
          speed={20} 
          repeat={Infinity} 
        /> */}
      </motion.h1>
      
      {/* Loading Bar */}
      <div className="w-full max-w-md h-2 bg-gray-700 rounded mt-4">
        <motion.div
          className="h-full bg-blue-600 rounded"
          style={{ width: `${loadingProgress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Icons */}
      <div className="relative w-full h-full flex justify-center mt-8 space-x-4 text-white text-2xl">
        <motion.div className="absolute top-5 left-5 text-orange-400 text-4xl animate-pulse" variants={iconVariants(1)} initial="initial" animate="animate"><FaCode /></motion.div>
        <motion.div className="absolute top-20 right-10 text-yellow-400 text-5xl animate-pulse" variants={iconVariants(1.2)} initial="initial" animate="animate"><FaCameraRetro /></motion.div>
        <motion.div className="absolute bottom-10 left-10 text-red-400 text-4xl animate-pulse" variants={iconVariants(1.4)} initial="initial" animate="animate"><FaDrum /></motion.div>
        <motion.div className="absolute bottom-20 right-20 text-blue-400 text-3xl animate-pulse" variants={iconVariants(1.6)} initial="initial" animate="animate"><FaEnvelope /></motion.div>
        <motion.div className="absolute top-1/3 left-1/4 text-green-400 text-4xl animate-pulse" variants={iconVariants(1.8)} initial="initial" animate="animate"><FaProjectDiagram /></motion.div>
        <motion.div className="absolute top-1/4 left-10 text-purple-400 text-5xl animate-pulse" variants={iconVariants(2)} initial="initial" animate="animate"><FaBriefcase /></motion.div>
        <motion.div className="absolute bottom-5 left-1/3 text-yellow-400 text-4xl animate-pulse" variants={iconVariants(2.2)} initial="initial" animate="animate"><FaCertificate /></motion.div>
        <motion.div className="absolute top-5 right-5 text-teal-400 text-4xl animate-pulse" variants={iconVariants(2.4)} initial="initial" animate="animate"><FaUserGraduate /></motion.div>
        <motion.div className="absolute top-10 right-10 text-indigo-400 text-3xl animate-pulse" variants={iconVariants(2.6)} initial="initial" animate="animate"><FaGlobe /></motion.div>
        <motion.div className="absolute top-32 left-20 text-green-400 text-4xl animate-pulse" variants={iconVariants(2.8)} initial="initial" animate="animate"><FaMedal /></motion.div>
        <motion.div className="absolute bottom-10 left-1/4 text-indigo-400 text-5xl animate-pulse" variants={iconVariants(3)} initial="initial" animate="animate"><FaLaptop /></motion.div>
        <motion.div className="absolute bottom-20 right-1/3 text-purple-400 text-3xl animate-pulse" variants={iconVariants(3.2)} initial="initial" animate="animate"><FaChartLine /></motion.div>
        <motion.div className="absolute top-1/2 left-1/4 text-teal-400 text-4xl animate-pulse" variants={iconVariants(3.4)} initial="initial" animate="animate"><FaTools /></motion.div>
      </div>
    </motion.div>
  );
};

Preloader.propTypes = {
  onLoaded: PropTypes.func.isRequired,
};

export default Preloader;
