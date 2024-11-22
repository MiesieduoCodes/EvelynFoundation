import { FaCalendarDays } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
import { TbMessage2 } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-8 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <section className="space-y-4">
          <h1 className="text-xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300">
            ABOUT US
          </h1>
          <p className="text-white text-base md:text-lg mb-4">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
          </p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out">
            Join Volunteers
          </button>
        </section>

        {/* Blog Section */}
        <section className="space-y-4">
          <h1 className="text-xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300">
            BLOG
          </h1>
          <div className="space-y-4">
            {Array(3).fill().map((_, index) => (
              <div key={index} className="space-y-2">
                <h2 className="font-semibold text-white transition duration-300 hover:text-blue-400">
                  Feed A Child Daily
                </h2>
                <div className="flex items-center gap-3 text-sm text-gray-400">
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
        <section className="space-y-4">
          <h1 className="text-xl font-semibold text-blue-400 hover:text-blue-500 transition duration-300">
            CONTACT
          </h1>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <CiLocationOn className="text-green-400 text-3xl transition transform hover:scale-110" />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex items-center gap-4">
              <PiPhoneCall className="text-green-400 text-3xl transition transform hover:scale-110" />
              <p>+2 392 3929 210</p>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineMarkEmailUnread className="text-green-400 text-3xl transition transform hover:scale-110" />
              <p>info@yourdomain.com</p>
            </div>
            <div className="flex items-center gap-4">
              <IoIosTimer className="text-green-400 text-3xl transition transform hover:scale-110" />
              <p>Monday — Friday 8:00am - 5:00pm</p>
            </div>
          </div>
        </section>
      </div>

      <hr className="my-6 border-gray-600" />

      <section className="text-center text-gray-400">
        <p className="text-sm">Copyright ©2024 All rights reserved | This template is made with ❤️ by Goofy</p>
      </section>
    </div>
  );
};

export default Footer;
