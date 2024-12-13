import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import Reviews from "./Testamen";
import foundersData from "../Constants/Founders";

function About() {
  const [founders, setFounders] = useState([]);

  useEffect(() => {
    setFounders(foundersData);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="w-screen min-h-screen flex flex-col overflow-x-hidden">
      {/* Loader */}
      <Loader />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('src/Images/DSC_0390.JPG')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black/70"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-2xl text-center px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          About the <br /><strong>Organisation</strong>
        </motion.h1>
        <motion.p
  className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-8"
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  Join us in our journey to bring hope and empowerment to the less privileged. 
  Discover the stories of change, the values we uphold, and the lives we touch every day. 
  Together, we can make a difference and build a better world.
</motion.p>

        <motion.div
          className="inline-flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button className="bg-yellow-600 hover:bg-yellow-700 transition-all duration-300 px-6 py-3 rounded-full text-black font-medium text-lg shadow-md focus:outline-none">
            Explore More
          </button>
        </motion.div>
      </motion.div>
    </div>

      {/* Profile Section */}
            <motion.div 
        className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/Images/DSC_0390.JPG"
            alt="Evelyn Oweibo Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Profile</h2>
          <p className="text-gray-600 leading-relaxed">
            The Evelyn Oweibo Foundation was actually conceived in the State of Georgia in the United States of America but was established and registered
            with the Corporate Affairs Commission in Nigeria on 29th day of April, 2021 with registration number 158247. The Foundation began reaching out
            months before its formal registration with the Commission in view of the drive to help those who are in need. We are proud but at the same time
            humbled to have been able to reach out to widows, physically challenged, the poor, and the rest of the society that needs one form of assistance or
            the other by giving out food items such as noodles, rice, Cooking Cube, Salt, Groundnut Oil, Tomato, etc., as well as cash of different amounts.
          </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >


        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
              <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Work History</h2>
              <p className="text-gray-600 leading-relaxed">
                The Evelyn Oweibo Foundation through the support and contributions of volunteer workers and other well-meaning individuals who share our vision
                have been able to reach out to quite a number of persons with one form of challenge or the other. Some persons only need a small capital to start a
                small business, some others only need food to get past a week or weeks because they cannot find work, there are others who cannot work due to
                their health situation. At Evelyn Oweibo Foundation, we believe that there is no one size fit all approach to reaching out as such; we treat the
                concerns or challenges of each group as unique.
              </p>
        </motion.div>
          {/* Image Section */}
          <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/Images/DSC_0390.JPG"
            alt="Evelyn Oweibo Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/Images/DSC_0390.JPG"
            alt="Evelyn Oweibo Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Vision</h2>
              <p className="text-gray-600 leading-relaxed text-center">
                To develop into one of the leading Charity Organizations with international recognition and to bring hope to those we encounter on our journey to
                make a difference.
              </p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >


        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Mission</h2>
              <p className="text-gray-600 leading-relaxed text-center">
                To provide assistance that would empower the less privileged, poor, physically challenged and the hopeless to become positive members of society
                and understand that we need one another to build a better world.
              </p>
        </motion.div>
          {/* Image Section */}
          <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/Images/DSC_0390.JPG"
            alt="Evelyn Oweibo Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className="w-full bg-white py-16 px-6 flex flex-col md:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="src/Images/DSC_0390.JPG"
            alt="Evelyn Oweibo Foundation"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
           <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Core Values</h2>
        <ul className="text-gray-600 leading-relaxed list-disc list-inside">
          <li><strong>Integrity:</strong> Having the mind of working with other national and international organizations, integrity is key as it is what sets one apart from the pack.</li>
          <li><strong>Accountability:</strong> We are accountable for our everyday decisions and actions because we understand the impact they have on human lives and our society in general.</li>
          <li><strong>Humility:</strong> At Evelyn Oweibo Foundation, we believe that despite being blessed to be in a position to give, it is pertinent to give with humility.</li>
          <li><strong>Service:</strong> We believe that service to humanity is service to God almighty as such we see service as a divine duty.</li>
        </ul>
        </motion.div>
      </motion.div>

      {/* Top Founders Section */}
      <div className="w-full bg-gray-300 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Meet Our Founders</h2>
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
              className="bg-white shadow-md w-72 flex flex-col items-center gap-4 p-6 rounded-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Reviews */}
      <Reviews />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
