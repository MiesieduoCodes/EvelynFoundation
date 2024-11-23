import React, { useState } from "react";

export const ContactInfo = () => {
    const [clicked, setClicked] = useState("")
        return(
           
            <div className=" w-screen min-h-screen " >
               <div className="w-full h-full px-[7rem] py-[3rem] ">
                 <form action="" className="w-[30rem] h-full">
                 <input onFocus={() => {
                    setClicked("input1")
                }} type="email" placeholder="Your Name" className={`w-full h-14 mb-[16px] p-[12px] border-[1px] ${ clicked === "input1" ? "border-black": " border-gray-300"} outline-none`} />
                 <input onFocus={() => {
                    setClicked("input2")
                 }} type="email" placeholder="Your Email" className={`w-full h-14 mb-[16px] p-[12px] border-[1px] ${ clicked === "input2" ? "border-black": " border-gray-300"} outline-none`} />
                 <input onFocus={() => {
                    setClicked("input3")
                 }} type="text" placeholder="Subject" className={`w-full h-14 mb-[16px] p-[12px] border-[1px] ${ clicked === "input3" ? "border-black": " border-gray-300"} outline-none`} />
                 <textarea onFocus={() => {
                    setClicked("textarea1")
                 }} name="" placeholder="Message" id="" className={`w-full h-[14rem] mb-[16px] p-[12px] border-[1px] ${ clicked === "textarea1" ? "border-black": " border-gray-300"} outline-none`}></textarea>
                 </form>
                 <button className='w-[16rem] rounded-[5px] h-[4rem] text-white bg-blue-400'>
                 SEND MESSAGE
                 </button>
               </div>
               <div>

               </div>
            </div>
           
        )
}