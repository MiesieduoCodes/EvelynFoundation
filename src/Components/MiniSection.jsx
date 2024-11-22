import { motion } from "framer-motion";  
import { FaHandsHelping, FaHeart, FaShareAlt } from 'react-icons/fa'; // Charity icons

const MiniSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-950 justify-between p-5 md:p-10 overflow-hidden space-y-6 md:space-y-0 md:space-x-6">
      {/* First Box - Donation Impact */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="text-center text-white flex-1"
      >
        <div>
          <h1 className="text-2xl font-extrabold mb-4">Make A Difference</h1>
          <p className="text-gray-300 mb-4">
            Every donation, big or small, can help provide essential resources for those in need. Your support is a beacon of hope.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaHandsHelping className="text-4xl text-green-500" />
            <FaHeart className="text-4xl text-red-500" />
            <FaShareAlt className="text-4xl text-blue-500" />
          </div>
        </div>
      </motion.div>

      {/* Second Box - Charitable Causes */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.9 }}
        className="text-center text-white flex-1"
      >
        <div>
          <h1 className="text-2xl font-extrabold mb-4">Support a Cause</h1>
          <p className="text-gray-300 mb-4">
            Whether it&apos;s providing clean water, education, or healthcare, your donations help fund impactful causes that change lives.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaHandsHelping className="text-4xl text-green-500" />
            <FaHeart className="text-4xl text-red-500" />
            <FaShareAlt className="text-4xl text-blue-500" />
          </div>
        </div>
      </motion.div>

      {/* Third Box - How Donations Help */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.0 }}
        className="text-center text-white flex-1"
      >
        <div>
          <h1 className="text-2xl font-extrabold mb-4">Transform Lives</h1>
          <p className="text-gray-300 mb-4">
            Your generous donations contribute to building a better future, providing a life full of hope and opportunity to those who need it the most.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaHandsHelping className="text-4xl text-green-500" />
            <FaHeart className="text-4xl text-red-500" />
            <FaShareAlt className="text-4xl text-blue-500" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MiniSection;
