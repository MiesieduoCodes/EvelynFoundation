// src/Loader.js
import './Loader.css'; // Import the CSS for the loader

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;