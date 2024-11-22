import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from './Loader';
import { motion } from "framer-motion";

const BlogSingle = () => {
  return (
    <div className="bg-gray-100">

      <Navbar />
      <Loader />
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[100vh] p-8 text-white"
      style={{ backgroundImage: "url('src/Images/DSC_0390.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
      
      {/* Gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      {/* Hero Content */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-4 py-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Title with Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Help Build Schools in Africa - Donate Today
        </motion.h1>

        {/* Meta Information */}
        <p className="text-lg md:text-2xl mb-6">
          by Admin on July 26, 2018
        </p>

        {/* Call-to-Action Button or Scroll Indicator */}
        <motion.a
          href="#content"
          className="inline-block text-xl bg-blue-600 text-white py-3 px-8 rounded-full transition-transform transform hover:scale-105"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Read More
        </motion.a>
      </motion.div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-10 text-center text-lg">
        <p className="animate-bounce">↓ Scroll Down</p>
      </div>
    </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-10 space-y-8">
        <motion.div
          className="space-y-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>

          {/* Content about the charity cause */}
          <p className="text-lg leading-relaxed text-gray-700">
            Schools in rural Africa are in dire need of renovations. Many children in these communities lack access to basic facilities and educational resources. With your help, we can make a difference. Your donation will go directly towards renovating classrooms, providing clean drinking water, and giving children the resources they need to succeed.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We believe every child deserves access to quality education. By donating today, you can help build a better future for these children. Together, we can empower the next generation of leaders.
          </p>
        </motion.div>

        {/* Donation Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Your donation can change lives. Whether it&apos;s providing books, school supplies, or building a new school, every contribution makes a difference. Choose how you’d like to contribute:
          </p>
          <ul className="list-disc pl-5">
            <li>Donate a one-time amount to support the project</li>
            <li>Set up a recurring donation to help us sustain our efforts</li>
            <li>Give in-kind donations such as educational materials</li>
          </ul>
          <button className="bg-blue-600 text-white py-3 px-6 rounded mt-4 hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Donate Now
          </button>
        </motion.div>

        {/* Comment Section */}
        <motion.div
          className="space-y-4"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold mb-4">Leave a comment</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name *" className="border border-gray-300 p-2 w-full focus:ring-2 focus:ring-blue-600 outline-none transition duration-300 hover:shadow-lg" />
            <input type="email" placeholder="Email *" className="border border-gray-300 p-2 w-full focus:ring-2 focus:ring-blue-600 outline-none transition duration-300 hover:shadow-lg" />
            <textarea placeholder="Message" className="border border-gray-300 p-2 w-full focus:ring-2 focus:ring-blue-600 outline-none transition duration-300 hover:shadow-lg" rows="4"></textarea>
            <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
              Submit
            </button>
          </form>
        </motion.div>

        {/* About the Author */}
        <motion.div
          className="space-y-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-xl font-bold mb-4">About The Author</h2>
          <p className="text-lg text-gray-700">
            Our founder has spent over 10 years working in education and charity. After seeing the challenges faced by underprivileged communities in Africa, they decided to take action and create lasting change through education. Their mission is to ensure every child has access to the resources they need to succeed and break the cycle of poverty.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogSingle;
