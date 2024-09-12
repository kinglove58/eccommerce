import { Link } from "react-router-dom";
import appleIcon from "../../src/assets/images/app/01.jpg";
import googleIcon from "../../src/assets/images/app/02.jpg";

function Appsection() {
  return (
    <div className="text-center mt-40 px-4 bg-gray-100">
      <div className="max-w-md mx-auto">
        <Link to="/sign-up">
          <button className="bg-white border-2 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition duration-300 mb-8">
            Sign up for free
          </button>
        </Link>
        <div>
          <h2 className="text-4xl font-bold mb-1">Learn Anytime, Anywhere</h2>
          <p className="text-gray-500 mb-2 ">
            Take courses on your device with our app & learn at any time. Just
            download & start learning.
          </p>
        </div>
        <div className="flex justify-center space-x-4 w-full">
          <img
            src={appleIcon}
            alt="Apple Store"
            className="w-40 h-40 object-contain"
          />
          <img
            src={googleIcon}
            alt="Google Play Store"
            className="w-40 h-40 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Appsection;
