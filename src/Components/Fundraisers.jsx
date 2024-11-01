import { motion } from 'framer-motion';
import Donate from '../Images/DSC_0387.jpg';

const Fundraisers = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${Donate})` }} // Use the imported image
    >
      <div className="absolute inset-0 bg-green-800 opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full p-4 md:p-8">
        <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-6xl gap-8">
          <div className="flex flex-col text-left w-full md:w-1/2">
            <motion.h2
              className="text-white text-4xl md:text-3xl font-light"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              FEATURED
            </motion.h2>

            <motion.p
              className="text-white text-4xl md:text-3xl font-bold"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
            >
              Far far away, behind the word<br />
              mountains, far from the countries<br />
              Vokalia and Consonantia, there live the<br />
              blind texts.
            </motion.p>

            <motion.p
              className="text-white text-4xl md:text-xl font-light"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              <i>Last donation 1w ago</i>
            </motion.p>

            <motion.button
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="mt-4 bg-blue-600 text-white w-fit px-4 py-2 rounded"
            >
              Join Volunteers
            </motion.button>
          </div>

          <div className="border-solid border-4 border-white md:w-1/2 flex justify-center">
            <img className="w-full h-auto max-w-xs md:max-w-[450px]" src={Donate} alt="Donation" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fundraisers;