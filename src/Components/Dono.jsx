import React from "react";
const donors = [
    { id: 1, name: 'Jean Smith', time: 'Donated 3 hours ago', amount: '$1,150', image: 'https://via.placeholder.com/100', },
    { id: 2, name: 'Christine Charles', time: 'Donated 3 hours ago', amount: '$150', image: 'https://via.placeholder.com/100', },
    { id: 3, name: 'Albert Sluyter', time: 'Donated 3 hours ago', amount: '$534', image: 'https://via.placeholder.com/100', },
    { id: 4, name: 'Andrew Holloway', time: 'Donated 3 hours ago', amount: '$2,500', image: 'https://via.placeholder.com/100', },
    // Add more donors as needed
  ];

  const DonorCard = ({ donor }) => (
    <div className="flex w-[90vw] md:w-1/2 bg-gray-50 flex-col items-center shadow  pt-4">
      <img src="src\assets\istockphoto-1134001966-612x612.webp" alt={donor.name} className="w-24 object-cover h-24 rounded-full mb-3 mt-12" />
      <h3 className="text-lg mt-2 font-semibold">{donor.name}</h3>
      <p className="text-sm text-gray-500">{donor.time}</p>
      <div className="w-full flex h-auto mt-8">
        <span className="text-black bg-gray-200 w-1/2 h-12 flex items-center justify-center">Donated</span>
        <span className="font-bold w-1/2 h-12 flex items-center justify-center text-white bg-green-500">{donor.amount}</span>
      </div>
    </div>
  );

    export const DonorGrid = () => {
    return (
      <>
      <div className='w-full h-full mt-10'>
      <div className='w-full h-[12rem] items-center flex justify-center text-3xl text-bold'>Latest Donations</div>
  
      <div className="flex gap-5 flex-col lg:flex-row mb-16 w-full h-auto place-items-center gap-6 p-2">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>
      </div>
      </>
    );
  };