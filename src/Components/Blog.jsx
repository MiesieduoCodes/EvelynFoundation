import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
const Blog = () => {
  const posts = [
    { 
      title: 'Be A Volunteer Today', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0370.JPG' // Path to your image
    },
    { 
      title: 'You May Save The Life of A Child', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0375.JPG' // Path to your image
    },
    { 
      title: 'Children That Needs Care', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0401.JPG' // Path to your image
    },
    { 
      title: 'Be A Volunteer Today', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0397.JPG' // Path to your image
    },
    { 
      title: 'You May Save The Life of A Child', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0411.JPG' // Path to your image
    },
    { 
      title: 'Children That Needs Care', 
      date: 'July 26, 2018',
      image: 'src/Images/DSC_0408.JPG' // Path to your image
    },
  ];

  return (
    <div className="flex flex-col">
      <Navbar />
      
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
          <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-6 py-3 rounded-lg font-medium text-lg shadow-md focus:outline-none">
            Explore More
          </button>
        </motion.div>
      </motion.div>
    </div>
      
      <div className="bg-slate-950 py-10 px-5 md:px-10">
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl group"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="p-5">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-gray-700 text-base mb-4">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <Link
                to="/more"
                className="text-blue-500 hover:underline transition-all duration-300 group-hover:text-blue-700"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

      <Footer />
    </div>
  );
};

export default Blog;