import { useContext, useState } from "react";
import { AuthContent } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";

function UserProfile() {
  const { user, logOut } = useContext(AuthContent);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLogout = () => {
    logOut().then(() => {
      alert("Logged out successfully");
    });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <FaUserCircle className="w-10 h-10 text-gray-500" />
        )}
        <FaCaretDown className="ml-2" />
      </div>
      {dropdownVisible && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <Link
            to="/profile"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Profile
          </Link>
          <Link
            to="/shop"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Shopping Cart
          </Link>
          <Link
            to="/cart"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Orders
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
