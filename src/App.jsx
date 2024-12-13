// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar'; // Import your Navbar component
import Hero from './Components/Hero';
import Fundraisers from './Components/Fundraisers';
import MiniSection from './Components/MiniSection';
import Footer from './Components/Footer';
import Fundraisers2 from './Components/Fundraisers2';
import News from './Components/LatestNews';
import Blog from './Components/Blog'; // Assuming you have a Blog component
import PostDetails from './Components/BlogSingle'; // Assuming you have a PostDetails component

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
    <Router>
      <div className="flex flex-col">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Hero />} />
              <Route path="/fundraisers" element={<Fundraisers />} />
              <Route path="/mini-section" element={<MiniSection />} />
              <Route path="/fundraisers2" element={<Fundraisers2 />} />
              <Route path="/news" element={<News />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/post/:id" element={<PostDetails />} /> {/* Dynamic route for individual posts */}
              {/* Add more routes as needed */}
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
