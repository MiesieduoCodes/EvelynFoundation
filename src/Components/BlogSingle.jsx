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
        <div className="max-w-md">
          <motion.h1
            className="text-3xl md:text-6xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
        School in Africa Need Renovations
       <p className="text-2xl">by Admin on July 26, 2018</p>
          </motion.h1>
        </div>
      </div>

      <div className="w-full p-9">
  <p className="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et.
  </p>
  <p className="mb-4">
    Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! 
  </p>
  <p className="mb-4">
    Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in.
  </p>
  <p className="mb-4">
    Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum.
  </p>
  <p className="mb-4">
    Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur!
  </p>
  
  <h2 className="text-2xl font-semibold mt-6 mb-2">Comments</h2>
  <div className="border-t border-gray-300 mb-6">
    {Array(6).fill().map((_, index) => (
      <div key={index} className="py-4">
        <p className="font-bold">Jean Doe</p>
        <p className="text-gray-500">January 9, 2018 at 2:21pm</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <a href="#" className="text-blue-500 hover:underline">Reply</a>
      </div>
    ))}
  </div>

  <h2 className="text-2xl font-semibold mb-2">Leave a comment</h2>
  <form className="mb-6">
    <input type="text" placeholder="Name *" className="border border-gray-300 p-2 w-full mb-4" />
    <input type="email" placeholder="Email *" className="border border-gray-300 p-2 w-full mb-4" />
    <textarea placeholder="Message" className="border border-gray-300 p-2 w-full mb-4" rows="4"></textarea>
    <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
  </form>

  <h2 className="text-xl font-bold mb-4">Categories</h2>
  <ul className="mb-4">
    <li>Charity (12)</li>
    <li>Donations (22)</li>
    <li>News (37)</li>
    <li>Updates (42)</li>
  </ul>

  <h2 className="text-xl font-bold mb-4">About The Author</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>

  <h2 className="text-xl font-bold mb-4">Tag Cloud</h2>
  <ul className="flex space-x-4 gap-2 justify-center items-center flex-col mb-4">

    <div className="gap-3 flex" >
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">Charities</li>
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">Missionary</li>
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">School</li>
    </div>

    <div  className="gap-3 flex">
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">Donation</li>
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">Children</li>
    <li className="text-blue-500 border border-gray-800 p-2 rounded-full w-fit">Africa</li>
    </div>
  </ul>
</div>

  <Footer />
    </div>
  );
};

export default BlogSingle;