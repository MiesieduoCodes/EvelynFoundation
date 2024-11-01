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
      image: '../Images/DSC_0397.JPG' // Path to your image
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
      
      <div className="flex items-center justify-center h-[100vh] p-8 text-white"
        style={{ backgroundImage: "url('src/Images/DSC_0390.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-md">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Blog, Posts & News
          </motion.h1>
        </div>
      </div>
      
      <div className="flex flex-col p-10 gap-20">
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <b><p className="text-gray-500">{post.date}</p></b>
              <p className="mt-2 text-gray-700">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
    <Link to="/more" className="text-blue-500 hover:underline mt-4 inline-block">
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