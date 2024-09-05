import { useState } from "react";
import { ProductData } from "./ourProductCategory";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

function OurProduct() {
  const [products, setProducts] = useState(ProductData);

  const handleFiltered = (cate) => {
    const filtered =
      cate === "All"
        ? ProductData
        : ProductData.filter((product) => product.cate === cate);
    setProducts(filtered);
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <MdStarRate
          key={i}
          className={`text-xl ${
            i < roundedRating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const categories = ["All", "Shoes", "Bags", "Phones", "Beauty"];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="p-8">
          <div className="bg-white rounded-sm p-3 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                Our Products
              </h1>
              <ul className="flex flex-wrap justify-center md:justify-start space-x-4">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleFiltered(item)}
                    className="cursor-pointer text-gray-700 hover:text-yellow-500 transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={product.imgUrl}
                    alt={product.title}
                    className="inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {product.cate}
                  </h2>
                  <div className="flex items-center space-x-1 mb-2">
                    {renderStars(product.rating)}
                  </div>
                  <Link to={`/shoe/${product.id}`}>
                    <h2 className="text-xl font-bold text-gray-900 hover:text-yellow-500 transition-colors duration-300">
                      {product.title}
                    </h2>
                  </Link>
                  <h3 className="text-md text-gray-600">{product.brand}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
