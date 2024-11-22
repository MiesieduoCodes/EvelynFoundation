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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="max-w-96 text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <h1 className="text-3xl md:text-6xl font-bold">
            School in Africa Needs Renovations
          </h1>
          <p className="text-2xl mt-4">by Admin on July 26, 2018</p>
        </motion.div>
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
