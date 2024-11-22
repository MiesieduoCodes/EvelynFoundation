import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { TbMessage2 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-6">
      <div className="flex flex-col md:flex-row justify-around items-start">
        {/* About Us Section */}
        <section className="mb-6 md:mb-0">
          <h1 className="text-lg font-bold mb-2">ABOUT US</h1>
          <p className="text-white text-base md:text-lg">
            Far far away, behind the word
            <br />
            mountains, far from the countries
            <br />
            Vokalia and Consonantia, there live the
            <br />
            blind texts.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Join Volunteers
          </button>
        </section>

        {/* Blog Section */}
        <section className="mb-6 md:mb-0">
          <h1 className="text-lg font-bold mb-2">BLOG</h1>
          <div>
            {Array(3).fill().map((_, index) => (
              <div key={index} className="mb-4">
                <h1 className="font-semibold">Feed A Child Daily</h1>
                <div className="flex items-center gap-2 text-sm">
                  <FaCalendarDays />
                  <p>July 8, 2018</p>
                  <IoMdPerson />
                  <p>Admin</p>
                  <TbMessage2 />
                  <p>19</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h1 className="text-lg font-bold mb-2">CONTACT</h1>
          <div className="flex gap-4 items-center mb-2">
            <CiLocationOn  className="text-green-400 text-4xl"/>
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <PiPhoneCall  className="text-green-400 text-4xl"/>
            <p> +2 392 3929 210</p>
          </div>
          <div className="flex gap-4 items-center mb-2">
            <MdOutlineMarkEmailUnread  className="text-green-400 text-4xl"/>
            <p> info@yourdomain.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <IoIosTimer  className="text-green-400 text-4xl"/>
            <p> Monday — Friday 8:00am - 5:00pm</p>
          </div>
        </section>
      </div>

      <hr className="my-4 border-gray-600" />
      <section className="text-center">
        <h2 className="text-sm">
          Copyright ©2024 All rights reserved | This template is made with ❤️ by Goofy
        </h2>
      </section>
    </div>
  );
};

export default Footer;