import { categoryList } from "./category";
import { Link } from "react-router-dom";

function HomeCategory() {
  const subTitle = "Choose Any Products";
  const title = "Buy Everything with Us";
  const btnText = "Get Started Now";
  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700">{subTitle}</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mt-2">
            {title}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:px-10 lg:px-40 gap-6">
          {categoryList.map((category, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
            >
              <Link to="/shop">
                <img
                  src={category.imgUrl}
                  alt={category.imgAlt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 flex items-center space-x-2 bg-gradient-to-t from-black to-transparent w-full">
                  <div className="bg-orange-500 p-2 rounded-full">
                    <category.iconName className="text-white text-xl" />
                  </div>
                  <span className="text-lg font-medium text-white">
                    {category.title}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <Link to="/shop">
            <button className="bg-white text-black py-2 px-6 rounded-lg border-2 shadow-md hover:bg-yellow-500 transition-colors duration-300">
              {btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeCategory;
