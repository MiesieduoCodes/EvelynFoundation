import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";

const donors = [
  {
    id: 1,
    name: "Jean Smith",
    time: "Donated 3 hours ago",
    amount: "$1,150",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Christine Charles",
    time: "Donated 3 hours ago",
    amount: "$150",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Albert Sluyter",
    time: "Donated 3 hours ago",
    amount: "$534",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Andrew Holloway",
    time: "Donated 3 hours ago",
    amount: "$2,500",
    image: "https://via.placeholder.com/100",
  },
];

const DonorCard = ({ donor }) => (
  <div className="flex w-[90vw] md:w-1/3 bg-white flex-col items-center shadow-md rounded-lg overflow-hidden">
    <img
      src={donor.image}
      alt={donor.name}
      className="w-24 h-24 object-cover rounded-full mt-8 border-4 border-green-500"
    />
    <h3 className="text-lg mt-4 font-semibold text-gray-800">{donor.name}</h3>
    <p className="text-sm text-gray-500 mt-1">{donor.time}</p>
    <div className="w-full flex mt-6">
      <span className="text-gray-700 bg-gray-200 w-1/2 h-12 flex items-center justify-center text-sm font-medium">
        Donated
      </span>
      <span className="font-bold w-1/2 h-12 flex items-center justify-center text-white bg-green-500 text-sm">
        {donor.amount}
      </span>
    </div>
    <div className="mb-6"></div>
  </div>
);

// Add PropTypes validation for DonorCard
DonorCard.propTypes = {
  donor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const DonorGrid = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col bg-gray-100 overflow-x-hidden">
      {/* Loader */}
      <Loader />

      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="w-full py-20 bg-green-600 text-white text-center">
        <h1 className="text-4xl font-bold mb-2">Latest Donations</h1>
        <p className="text-lg">See how our donors are making an impact!</p>
      </div>

      {/* Donor Cards Grid */}
      <div className="w-full flex flex-wrap justify-center gap-6 py-10 px-4">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DonorGrid;
