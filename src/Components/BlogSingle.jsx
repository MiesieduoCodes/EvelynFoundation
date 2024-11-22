// src/BlogSingle.js
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
const BlogSingle = () => {
  return (
    <div className="bg-gray-100">
        <Navbar/>

        <div className="flex items-center justify-center h-[100vh] p-8 text-white"
        style={{ backgroundImage: "url('src/Images/DSC_0390.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-96">
          <motion.h1
            className="text-3xl md:text-6xl font-bold"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>

        School in Africa Need Renovations
       <p className="text-2xl">by Admin on July 26, 2018</p>
          </motion.h1>
        </div>
      </div>

      <div className="w-full items-center text-center  flex flex-col p-9">
 
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et.
    Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! 
    Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in.
    Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum.
    Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur!
    <br />
    <br />  <br />

  <h2 className="text-2xl font-semibold mb-2">Leave a comment</h2>
  <form className="mb-6">
    <input type="text" placeholder="Name *" className="border outline-none border-gray-300 p-2 w-full mb-4" />
    <input type="email" placeholder="Email *" className="border outline-none border-gray-300 p-2 w-full mb-4" />
    <textarea placeholder="Message" className="border outline-none border-gray-300 p-2 w-full mb-4" rows="4"></textarea>
    <button type="submit" className="bg-blue-600 text-white w-fit px-4 py-2 rounded">Submit</button>
  </form>


  <h2 className="text-xl font-bold mb-4">About The Author</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
  <br />
  <br />
  
  
</div>

  <Footer />
    </div>
  );
};

export default BlogSingle;