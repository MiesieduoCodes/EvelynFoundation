import HeadImage from "../Images/DSC_0438-Normal.jpg";

const LatestDonations = () => {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white min-h-screen">
      <div className="text-center py-12">
        <h1 className="text-5xl font-semibold uppercase tracking-wider">Latest Donations</h1>
        <p className="mt-2 text-lg font-light">See the generous contributions from our amazing supporters</p>
      </div>

      <div className="px-6 lg:px-20 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mt-6 mb-4 border-4 border-white shadow-xl">
                  <img
                    src={HeadImage}
                    className="object-cover w-full h-full"
                    alt={`Donation by Jean Smith ${index + 1}`}
                  />
                </div>
                <div className="absolute top-2 right-2 p-2 bg-green-500 text-white rounded-full shadow-md">
                  <p className="text-xs font-semibold">NEW</p>
                </div>
              </div>

              <div className="text-center px-4 pb-6">
                <h2 className="font-semibold text-gray-950 text-2xl mb-2">Jean Smith</h2>
                <p className="text-sm text-gray-600">Donated 3 hours ago</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg shadow-sm hover:bg-gray-400 transition duration-200">
                    View Details
                  </button>
                  <button className="bg-green-600 text-white py-2 px-6 rounded-lg shadow-sm hover:bg-green-700 transition duration-200">
                    $1,100
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDonations;
