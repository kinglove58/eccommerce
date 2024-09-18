import { FaEye, FaHeart, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdStarRate } from "react-icons/md";

function ProductCard({ gridList, products }) {
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

  return (
    <div
      className={`grid ${
        gridList
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          : "flex justify-between gap-6"
      }`}
    >
      {products.map((item, i) => (
        <div
          key={i}
          className={`relative group ${
            gridList
              ? "border p-4 rounded-lg bg-white shadow-md hover:scale-105"
              : "flex items-center p-4"
          }`}
        >
          <div className="relative overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Link to={`/shop/${item.id}`} className="text-white">
                <FaEye size={24} />
              </Link>
              <a href="#" className="text-white">
                <FaHeart size={24} />
              </a>
              <Link to="/cart-page" className="text-white">
                <FaCartArrowDown size={24} />
              </Link>
            </div>
          </div>
          <div
            className={`mt-4 text-center ${!gridList ? "max-w-15 ml-7" : ""}`}
          >
            <Link
              to={`/shop/${item.id}`}
              className="text-lg text-black font-semibold max-w-12 break-words"
            >
              {item.name}
            </Link>
            <div className="flex justify-center mt-2">
              {renderStars(item.ratings)}
            </div>
            <p className="mt-2 text-gray-600">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
