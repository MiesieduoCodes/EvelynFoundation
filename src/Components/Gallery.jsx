import { useState } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ImZoomIn } from "react-icons/im";
import { motion } from "framer-motion";
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

  return (
    <div className="flex flex-col">
      <Navbar />
      
      <div className="flex items-center justify-center h-[100vh] p-8 text-white"
        style={{ backgroundImage: "url('src/Images/DSC_0390.JPG')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="max-w-md ">

          <motion.h1 className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}>

            Pictures That Worth A Thousand Words

          </motion.h1>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-5">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer transition-transform duration-300"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="object-cover w-full h-full transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-green-600 opacity-0 flex items-center justify-center text-white transition-opacity duration-300 hover:opacity-75">
              <span className="text-lg"><ImZoomIn /></span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300">
          <div className="relative">
            <img
              src={images[selectedImageIndex]}
              alt="Expanded View"
              className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-300"
              onClick={closeOverlay}
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
              onClick={prevImage}
            >
              <GrLinkPrevious />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
              onClick={nextImage}
            >
              <GrLinkNext />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between p-5 md:p-10 overflow-hidden space-y-6 md:space-y-0 md:space-x-6">
        {/* Additional Content */}
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;