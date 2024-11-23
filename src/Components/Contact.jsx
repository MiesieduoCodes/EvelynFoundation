import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Loader from './Loader';
import { useState } from "react";

const Contact = () => {
  const [focusedField, setFocusedField] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Loader />
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
          Blog, Posts & News
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-8"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Stay updated with the latest articles, insights, and breaking news.
          Dive into a world of knowledge, inspiration, and discovery.
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
      <div className="flex-grow w-full flex items-center justify-center bg-slate-600 py-12">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We’d love to hear from you. Fill out the form below and we’ll get back to you as soon as possible.
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className={`w-full h-14 p-4 border rounded-md ${
                focusedField === "name" ? "border-blue-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onFocus={() => setFocusedField("name")}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`w-full h-14 p-4 border rounded-md ${
                focusedField === "email" ? "border-blue-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onFocus={() => setFocusedField("email")}
            />
            <input
              type="text"
              placeholder="Subject"
              className={`w-full h-14 p-4 border rounded-md ${
                focusedField === "subject" ? "border-blue-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onFocus={() => setFocusedField("subject")}
            />
            <textarea
              placeholder="Your Message"
              className={`w-full h-36 p-4 border rounded-md resize-none ${
                focusedField === "message" ? "border-blue-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-300`}
              onFocus={() => setFocusedField("message")}
            ></textarea>
            <button
              type="submit"
              className="w-full h-14 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
