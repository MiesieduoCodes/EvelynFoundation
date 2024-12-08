import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import Reviews from "./Testamen";
import Founders from "./Constants/Founders";

function About() {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    // Fetch the data from the JSON file
    fetch("/path-to-your-json/founders.json")
      .then((response) => response.json())
      .then((data) => setFounders(data))
      .catch((error) => console.error("Error fetching founders:", error));
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden">
      {/* Loader */}
      <Loader />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-4xl text-gray-100 h-screen bg-gray-900">
        <p className="mb-4">About the</p>
        <p className="font-bold">Organization</p>
      </div>

      {/* Top Founders Section */}
      <div className="w-full bg-gray-300 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Meet Our Founders
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-10 px-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md w-72 flex flex-col items-center gap-4 p-6 rounded-lg"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={`${founder.avatarColor} w-24 h-24 rounded-full`}></div>
              <p className="font-bold text-lg">{founder.name}</p>
              <p className="text-blue-500 text-sm">{founder.role}</p>
              <p className="text-gray-600 text-center text-sm">{founder.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Reviews />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
