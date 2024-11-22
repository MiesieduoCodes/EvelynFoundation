import { motion } from 'framer-motion';
import Donate from '../Images/DSC_0387.jpg';

const Fundraisers = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Donate})` }} // Use the imported image
    >
      <div className="absolute inset-0 bg-black opacity-60"></div> {/* Darker overlay */}
      
      <div className="relative flex flex-col items-center justify-center h-full px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-12">
          
          {/* Left Section - Text */}
          <motion.div 
            className="flex flex-col text-left w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h2
              className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide uppercase"
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Featured
            </motion.h2>

            <motion.p
              className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Far far away, behind the word
              <br />
              mountains, far from the countries
              <br />
              Vokalia and Consonantia, there live the
              <br />
              blind texts.
            </motion.p>

            <motion.p
              className="text-white text-xl md:text-2xl font-light italic"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <i>Last donation 1w ago</i>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ease-out"
            >
              Join Volunteers
            </motion.button>
          </motion.div>

          {/* Right Section - Image */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img className="w-full h-auto max-w-md md:max-w-[450px] rounded-xl shadow-2xl" src={Donate} alt="Donation" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;
