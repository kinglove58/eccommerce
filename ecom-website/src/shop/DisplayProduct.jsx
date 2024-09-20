import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";

function DisplayProduct({ item }) {
  const [qty, setQty] = useState(item.quantity === 0 ? 1 : item.quantity);
  const [selectColor, setSelectColor] = useState("Select Color");
  const [selectSize, setSelectSize] = useState("Select Size");
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      name: name,
      seller: seller,
      price: totalPriceOne,
      size: selectSize,
      color: selectColor,
      qty: qty,
      coupon: coupon,
      img: item.img,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingCartIndex = existingCart.findIndex((item) => item.id === id);
    if (existingCartIndex !== -1) {
      existingCart[existingCartIndex].qty += qty;
    } else {
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setCoupon("");
    setQty(1);
    setSelectColor("Select Color");
    setSelectSize("Select Size");
  };

  const handleIncrease = () => {
    setQty(qty + 1);
  };

  const handleDecrease = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
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

  const { id, name, seller, price, ratings, description, ratingsCount, img } =
    item;

  // Calculate total price based on quantity
  const totalPriceOne = item.price * qty;
  const totalPrice = "$" + totalPriceOne.toFixed(2);

  return (
    <div className="container mx-auto p-4">
      {/* Product Details */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <div className="flex items-center space-x-2 mb-4">
          {renderStars(ratings)}
          <p className="text-gray-600">{ratingsCount} reviews</p>
        </div>
        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {totalPrice}
        </p>
        <p className="text-gray-600 mb-2">{seller}</p>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Size and Color Select */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <select
              value={selectSize}
              onChange={(e) => setSelectSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option>Select Size</option>
              <option>SM</option>
              <option>LG</option>
              <option>XL</option>
              <option>XLL</option>
            </select>
          </div>
          <div>
            <select
              value={selectColor}
              onChange={(e) => setSelectColor(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option>Select Color</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
              <option>Yellow</option>
            </select>
          </div>
        </div>

        {/* Quantity and Coupon Input */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <button
              type="button"
              onClick={handleDecrease}
              className="px-4 py-2 border border-gray-300 rounded-l-lg"
            >
              -
            </button>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              className="w-16 text-center border-t border-b border-gray-300"
            />
            <button
              type="button"
              onClick={handleIncrease}
              className="px-4 py-2 border border-gray-300 rounded-r-lg"
            >
              +
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter Coupon Code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>

        {/* Add to Cart and Checkout Buttons */}
        <div className="flex justify-between space-x-4 mt-6">
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all"
            onClick={handleSubmit}
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-all"
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DisplayProduct;
