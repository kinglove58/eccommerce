import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContent } from "../context/AuthProvider";
import UserProfile from "./UserProfile";

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

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [errorMessage, setErrorMessage] = useState("");
  const {
    login,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    isAuthenticated,
  } = useContext(AuthContent);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form[0].value;
    const password = form[1].value;
    login(email, password)
      .then((res) => {
        const user = res.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleFacebookLogin = () => {
    signInWithFacebook()
      .then((result) => {
        const user = result.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleTwitterLogin = () => {
    signInWithTwitter()
      .then((result) => {
        const user = result.user;
        alert("Login successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>

        <form onSubmit={handleLogin} className="space-y-6">
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-700">Remember me</label>
            </div>
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Login
          </button>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
          )}
        </form>

        <div className="text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-4">Or</p>
          <h2 className="mt-2 text-lg font-medium">Login with social media</h2>
          <div className="flex justify-center mt-4 space-x-4">
            {socialList.map((item, index) => (
              <button
                key={index}
                className={`p-2 text-white rounded-full ${item.className}`}
                onClick={
                  item.name === "Facebook"
                    ? handleFacebookLogin
                    : item.name === "Google"
                    ? handleGoogleLogin
                    : item.name === "Twitter"
                    ? handleTwitterLogin
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

export default Login;
