import HeadImage from "../Images/DSC_0438-Normal.jpg";

const LatestDonations = () => {
  return (
    <div className="p-10">
      <div className="justify-center flex text-4xl p-7 font-bold text-center">
        <h1>Latest Donations</h1>
      </div>

      <div className="flex flex-col gap-12 p-2">
        {/* Use grid for responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="flex-col text-center gap-6 flex p-8 bg-gray-100 rounded-lg">
              <div className="rounded-full overflow-hidden w-24 h-24 mx-auto">
                <img src={HeadImage} className="object-cover w-full h-full" alt={`Donation by Jean Smith ${index + 1}`} />
              </div>
              <div>
                <h1 className="font-bold text-2xl">Jean Smith</h1>
                <p className="text-gray-500">Donated 3 Hours Ago</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-gray-400 p-2 flex-1">Donated</button>
                <button className="bg-green-600 p-2 text-white flex-1">$1,100</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestDonations;