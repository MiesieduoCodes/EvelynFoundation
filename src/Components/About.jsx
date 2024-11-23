import React from 'react'

function About() {
    require(
        <>
        <div className='w-screen min-h-screen relative'>

        {/* THIS IS THE NAVBAR */}
          <div className='w-full relative bg-gray-900 text-white h-16 px-10  flex items-center justify-between'>
            <p className=''>Giving</p>
            <div className='flex items-center gap-10 list-none'>
              {[1,2,3,4,5].map((i) => {
                return(
                  <li className='w-10 h-auto hover:border-b-2 hover:border-blue-400 border-black text-center py-1'>this</li>
              
                )
              })}
            </div>

          </div>

        <div className='w-full flex items-center flex-col justify-center text-[3rem] text-gray-100  h-screen bg-gray-900 absolute'>
               <p>about the</p>
               <p>organisaton</p>
        </div>

       {/*  TOP FOUNDERS */}
       
        </div>
        <div className='w-full bg-gray-300 justify-between relative min-h-64 flex gap-5'>
        {[1,2,3,4].map((e) => {
          return(

        <div className='w-64 flex flex-col gap-3 items-center justify-center p-5 min-h-64 '>
              <div className='bg-blue-600 w-24 h-24 rounded-full'></div>
              <p>Michael Isreal</p>
              <p className='text-xl text-gray-600'>CEO</p>
              <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium tempo
                re eos quibusdam similique tempora repellendus quae enim optio fugit doloremque con

              </p>

        </div>
          )
        })}
        </div>
    </>
    )
}

export default About