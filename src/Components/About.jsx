import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

function About() {
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
          {[1, 2, 3, 4].map((e, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md w-72 flex flex-col items-center gap-4 p-6 rounded-lg"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="bg-blue-600 w-24 h-24 rounded-full"></div>
              <p className="font-bold text-lg">Michael Israel</p>
              <p className="text-blue-500 text-sm">CEO</p>
              <p className="text-gray-600 text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium tempore eos quibusdam similique tempora repellendus
                quae enim optio fugit doloremque.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
