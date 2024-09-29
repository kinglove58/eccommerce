import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContent } from "../context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const socialList = [
  {
    icon: <FaFacebookF />,
    siteLink: "#",
    className: "bg-blue-600",
    name: "Facebook",
  },
  {
    icon: <FaGoogle />,
    siteLink: "#",
    className: "bg-red-600",
    name: "Google",
  },
  {
    icon: <FaTwitter />,
    siteLink: "#",
    className: "bg-blue-400",
    name: "Twitter",
  },
];

function SignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {
    createUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
  } = useContext(AuthContent);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form[0].value;
    const username = form[1].value;
    const email = form[2].value;
    const password = form[3].value;
    const confirmPassword = form[4].value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        alert("Sign up successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = "check again error";
        setErrorMessage(errorCode);
      });
  };

  const handleFacebookSignUp = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        alert("Sign up successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = "facebook error message";
        setErrorMessage(errorCode);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign up successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleTwitterSignUp = () => {
    signInWithTwitter()
      .then((result) => {
        const user = result.user;
        alert("Sign up successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div
              className="absolute inset-y-0 right-0 flex items-center px-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
            <div
              className="absolute inset-y-0 right-1 flex items-center px-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
        </form>
        <div className="text-center">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
          <p className="mt-4">Or</p>
          <h2 className="mt-2 text-lg font-medium">
            Sign up with social media
          </h2>
          <div className="flex justify-center mt-4 space-x-4">
            {socialList.map((item, index) => (
              <button
                key={index}
                className={`p-2 text-white rounded-full ${item.className}`}
                onClick={
                  item.name === "Facebook"
                    ? handleFacebookSignUp
                    : item.name === "Google"
                    ? handleGoogleSignUp
                    : item.name === "Twitter"
                    ? handleTwitterSignUp
                    : undefined
                }
              >
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
