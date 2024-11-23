
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

function About() {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* Loader */}
      <Loader />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center text-4xl text-gray-100 h-screen bg-gray-900">
        <p className="mb-4">About the</p>
        <p className="font-bold">Organization</p>
      </div>

      {/* Top Founders Section */}
      <div className="w-full bg-gray-300 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Meet Our Founders
        </h2>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {[1, 2, 3, 4].map((e, index) => (
            <div
              key={index}
              className="bg-white shadow-md w-72 flex flex-col items-center gap-4 p-6 rounded-lg"
            >
              <div className="bg-blue-600 w-24 h-24 rounded-full"></div>
              <p className="font-bold text-lg">Michael Israel</p>
              <p className="text-blue-500 text-sm">CEO</p>
              <p className="text-gray-600 text-center text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium tempore eos quibusdam similique tempora repellendus
                quae enim optio fugit doloremque.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
