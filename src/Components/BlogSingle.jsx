import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const BlogSingle = () => {
  return (
    <div className="bg-gray-100">

      <Navbar />

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
          School in Africa Needs Renovations
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
          <p className="text-lg leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et.
            Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! 
            Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in.
            Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum.
            Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur!
          </p>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogSingle;
