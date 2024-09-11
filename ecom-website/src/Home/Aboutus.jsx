// Importing necessary libraries and components
import React from "react";
import { FaUsers, FaCertificate, FaGift } from "react-icons/fa"; // Icons from react-icons
import CountUp from "react-countup"; // For counter animations
import { Link } from "react-router-dom"; // Just for the Apply button link
import aboutImage from "../../src/assets/images/instructor/01.png";

function Aboutus() {
  const stats = [
    {
      icon: <FaUsers className="text-4xl" />,
      count: 12600,
      label: "Marchant Enrolled",
      bgColor: "bg-orange-500",
    },
    {
      icon: <FaCertificate className="text-4xl" />,
      count: 30,
      label: "Certified Courses",
      bgColor: "bg-green-500",
    },
    {
      icon: <FaGift className="text-4xl" />,
      count: 100,
      label: "Rewards and GiftCards",
      bgColor: "bg-yellow-500",
    },
  ];

  return (
    <div className="bg-custom-image2 bg-cover lg:bg-no-repeat px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {/* Left side - Statistics */}
        <div className="flex flex-col space-y-6 order-1 md:order-1">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div
                className={`w-16 h-16 text-white flex items-center justify-center ${stat.bgColor} rounded-full`}
              >
                {stat.icon}
              </div>
              <div>
                <h3 className="text-3xl text-white font-bold">
                  <CountUp end={stat.count} duration={2} separator="," /> +
                </h3>
                <p className="text-white">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image at the middle */}
        <div className="flex justify-center items-center order-3 md:order-3 lg:order-2 ">
          <img
            src={aboutImage}
            alt="Marchant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex-1 lg:max-w-md text-white p-8 relative order-2 md:order-2 lg:order-3">
          <h2 className="text-4xl font-bold mb-4">Become a Marchant</h2>
          <p className="text-lg mb-6">
            Take courses on your device with our app & learn all about business
            when you want. Just download, install & start learning.
          </p>
          <Link
            to="/sign-up"
            className="bg-white text-black px-4 py-2 rounded-md font-bold hover:bg-gray-200 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
