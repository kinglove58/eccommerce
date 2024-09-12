import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const title = "About ShopCart";
const desc =
  "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";

const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
  {
    icon: <FaMapMarkerAlt />,
    text: "New York, USA.",
  },
  {
    icon: <FaPhoneAlt />,
    text: "+880 123 456 789",
  },
  {
    icon: <FaEnvelope />,
    text: "info@shopcart.com",
  },
];

const socialList = [
  {
    icon: <FaFacebookF />,
    siteLink: "#",
    className: "bg-blue-600",
  },
  {
    icon: <FaTwitter />,
    siteLink: "#",
    className: "bg-blue-400",
  },
  {
    icon: <FaLinkedinIn />,
    siteLink: "#",
    className: "bg-blue-700",
  },
  {
    icon: <FaInstagram />,
    siteLink: "#",
    className: "bg-pink-500",
  },
  {
    icon: <FaPinterestP />,
    siteLink: "#",
    className: "bg-red-600",
  },
];

const footerbottomList = [
  {
    text: "Faculty",
    link: "#",
  },
  {
    text: "Staff",
    link: "#",
  },
  {
    text: "Students",
    link: "#",
  },
  {
    text: "Alumni",
    link: "#",
  },
];

const ItemList = [
  { text: "All Products", link: "/shop" },
  { text: "Shop", link: "/shop" },
  { text: "Blog", link: "/blog" },
  { text: "About", link: "/about" },
  { text: "Policy", link: "#" },
  { text: "FAQs", link: "/about" },
];

const quickList = [
  { text: "Summer Sessions", link: "#" },
  { text: "Events", link: "#" },
  { text: "Gallery", link: "#" },
  { text: "Forums", link: "#" },
  { text: "Privacy Policy", link: "#" },
  { text: "Terms of Use", link: "#" },
];

const tweetList = [
  {
    desc: (
      <p>
        <a href="#">Grab your item, 50% Big Sale Offer !!</a>
      </p>
    ),
  },
  {
    desc: (
      <p>
        <a href="#">Grab your item, 70% Big Sale Offer on every shoe!!</a>
      </p>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="bg-black w-full p-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-2">{title}</h4>
            <p className="text-sm mb-4">{desc}</p>
            <ul className="list-none p-0">
              {addressList.map((item, index) => (
                <li key={index} className="flex items-center mb-2">
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4">
              <ul className="flex items-start gap-2 ">
                {socialList.map((item, index) => (
                  <li key={index} className="list-none">
                    <a
                      href={item.siteLink}
                      className={`flex items-center justify-center w-10 h-10 rounded bg-white text-white ${item.className}`}
                    >
                      {item.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-2">{ItemTitle}</h4>
            <ul className="list-none p-0">
              {ItemList.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link} className="text-sm">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-2">{quickTitle}</h4>
            <ul className="list-none p-0">
              {quickList.map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.link} className="text-sm">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h4 className="text-lg font-bold mb-2">{tweetTitle}</h4>
            {tweetList.map((tweet, index) => (
              <div key={index} className="text-sm mb-2">
                {tweet.desc}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-white text-black font-semibold w-full py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">
            &copy; 2023 <Link to="/">Shop Cart</Link>. Design by{" "}
            <a href="https://www.linkedin.com/in/obafemi-elijah">webbizt</a>.
          </p>
          <div className="flex space-x-4">
            {footerbottomList.map((item, i) => (
              <a
                href={item.link}
                key={i}
                className="text-gray-400 hover:text-white"
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
