import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import Loader from './Loader';
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Contact = () => {
  const formRef = useRef();
  const [focusedField, setFocusedField] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a4xrh2t", // Replace with your EmailJS Service ID
        "template_yz6euzi", // Replace with your EmailJS Template ID
        formRef.current,
        "g3lutaVJ_7kGr-iUO"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send your message. Please try again.");
        }
      )
      .finally(() => setLoading(false)); // Stop loading after the email is sent or failed
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {loading && <Loader />} {/* Show loader when loading */}
      <div className="relative h-[100vh] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Images/contact-bg.jpg')", // Correct path for the background image
          }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-xl text-center px-4 md:px-8"
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
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-light leading-relaxed text-gray-200 mb-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Have questions or need assistance? We&apos;re here to help. Contact us today and let’s connect!
          </motion.p>
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
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6"
          >
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Your Name</span>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className={`w-full h-14 p-4 border rounded-md mt-1 ${
                  focusedField === "name" ? "border-blue-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField("")}
                aria-label="Your Name"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Your Email</span>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className={`w-full h-14 p-4 border rounded-md mt-1 ${
                  focusedField === "email" ? "border-blue-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField("")}
                aria-label="Your Email"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Subject</span>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={`w-full h-14 p-4 border rounded-md mt-1 ${
                  focusedField === "subject" ? "border-blue-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onFocus={() => setFocusedField("subject")}
                onBlur={() => setFocusedField("")}
                aria-label="Subject"
                required
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Your Message</span>
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full h-36 p-4 border rounded-md mt-1 resize-none ${
                  focusedField === "message" ? "border-blue-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField("")}
                aria-label="Your Message"
                required
              ></textarea>
            </label>
            <button
              type="submit"
              className="w-full h-14 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-300 focus:outline-none"
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
