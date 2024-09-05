import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo/logo.png";

function NavItem() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed -top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="website logo" className="h-8 w-auto" />
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row w-full md:w-auto items-start md:items-center mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
            {["Home", "Shop", "Blog", "About", "Contact"].map((item) => (
              <li key={item} className="my-2 md:my-0 w-full md:w-auto">
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-gray-800 hover:text-gray-600 py-2 md:py-0 text-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0 w-full md:w-auto md:ml-5">
            <Link
              to="/signup"
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 text-center mb-2 md:mb-0 "
              onClick={() => setIsOpen(false)}
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 text-center"
              onClick={() => setIsOpen(false)}
            >
              Log in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavItem;
