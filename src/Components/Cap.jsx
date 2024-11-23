import React from "react";

export const Caption = () => {
    return (
      <div className="flex h-[90vh] w-full my-6 relative overflow-hidden flex-col md:flex-row overflow-hidden shadow-lg">
        <img src="src\assets\istockphoto-1889533246-1024x1024.jpg" alt="" className='absolute w-full h-full object-cover'/>
        <div className='w-full flex flex-col md:flex-row h-full bg-gray-500 opacity-90 relative text-3xl'>
  <div className='w-full md:w-1/2 h-full pt-12 flex md:items-center justify-center'>
  <img src="src\assets\istockphoto-1889533246-1024x1024.jpg" alt="" className='w-[93%] w-[93%] md:w-[70%] md:h-[70%] border-[9px] md:border-[12px] object-cover border-white'/>
  </div>
  <div className='w-full md:w-1/2 h-full text-white px-6 md:py-16'>
  <p className=" font-light text-lg uppercase tracking-wide">Success Stories</p>
          <h2 className="mt-2 max-w-lg text-2xl mt-8 md:text-3xl font-bold leading-snug">
            School in Africa Need <br /> Renovations. Thanks To All <br /> Donors
          </h2>
          <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <p className="mt-4 font-medium text-lg">
            We have raised <strong>$30,000</strong>
          </p>
    <button className="mt-6 py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded shadow">
            Read the Full Story
          </button>
  </div>
        </div>
      </div>
    );
  };