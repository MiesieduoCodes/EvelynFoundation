// src/App.js
import { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar'; // Import your Navbar component
import Hero from "./Components/Hero";
import Fundraisers from "./Components/Fundraisers";
import MiniSection from "./Components/MiniSection";
import Footer from "./Components/Footer";
import Fundraisers2 from "./Components/Fundraisers2";
import Donations from "./Components/LatestDonations";
import News from "./Components/LatestNews";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this to your desired loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <MiniSection />
          <Fundraisers />
          <Donations />
          <Fundraisers2 />
          <News />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;