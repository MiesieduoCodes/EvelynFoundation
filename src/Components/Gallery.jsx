import { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ImZoomIn } from "react-icons/im";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

// Import your images directly
import img1 from '../Images/DSC_0320.jpg';
import image from '../Images/DSC_0322.jpg';
import img3 from '../Images/DSC_0324.jpg';
import img4 from '../Images/DSC_0333.jpg';
import img5 from '../Images/DSC_0338.jpg';
import img6 from '../Images/DSC_0344.jpg';
import img7 from '../Images/DSC_0348.jpg';
import img8 from '../Images/DSC_0370.jpg';
import img9 from '../Images/DSC_0375.jpg';
import img10 from '../Images/DSC_0378.jpg';
import img11 from '../Images/DSC_0387.jpg';
import img12 from '../Images/DSC_0390.jpg';
import img13 from '../Images/DSC_0392.jpg';
import img14 from '../Images/DSC_0397.jpg';
import img15 from '../Images/DSC_0401.jpg';
import img16 from '../Images/DSC_0404.jpg';
import img17 from '../Images/DSC_0408.jpg';
import img18 from '../Images/DSC_0411.jpg';
import img19 from '../Images/DSC_0419.jpg';
import img20 from '../Images/DSC_0426.jpg';
import img21 from '../Images/DSC_0432.jpg';
import img22 from '../Images/DSC_0446.jpg';
import img23 from '../Images/DSC_0438-Normal.jpg';

const images = [img1, image, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23];

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const closeOverlay = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    // Importing and initializing AOS library for scroll reveal
    import('aos').then((AOS) => {
      AOS.init({ duration: 1000, once: true });
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      <Navbar />
      <Loader />
      {/* Hero Section */}
   <div className="relative h-[100vh] justify-center items-center text-center flex bg-cover bg-center text-white" style={{ backgroundImage: `url(${img12})` }}>
   <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black/50"></div>
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Main content of the hero section */}
      <div className="flex flex-col justify-center items-center max-w-xl px-4 z-10 text-center space-y-6">
        
        {/* Heading Animation */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          data-aos="fade-up"
        >
          Pictures That Are Worth A Thousand Words
        </motion.h1>
        
        {/* Subheading Animation */}
        <motion.p
          className="text-lg md:text-xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          data-aos="fade-up"
        >
          A gallery that speaks volumes, one image at a time.
        </motion.p >

        {/* Button with Slide-in Animation */}
        <motion.div
          className="mt-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <button className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition-all duration-300">
            Explore Gallery
          </button>
        </motion.div>
      </div>
    </div>
      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 bg-gray-800">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
            onClick={() => handleImageClick(index)}
            whileHover={{ scale: 1.05 }}
            data-aos="fade-up"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full rounded-lg transition-opacity duration-300 group-hover:opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ImZoomIn className="text-3xl text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Overlay */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300">
          <div className="relative">
            <img
              src={images[selectedImageIndex]}
              alt="Expanded View"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={closeOverlay}
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full transition-all"
              onClick={prevImage}
            >
              <GrLinkPrevious className="text-xl" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full transition-all"
              onClick={nextImage}
            >
              <GrLinkNext className="text-xl" />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
