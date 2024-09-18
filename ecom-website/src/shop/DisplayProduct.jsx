import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function DisplayProduct({ item }) {
  const [qty, setQty] = useState(1);
  const [selectColor, setSelectColor] = useState("");
  const [selectSize, setSelectSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product added to cart");
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

  const { name, seller, price, ratings, description, ratingsCount } = item;

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <div>
          {renderStars(ratings)}
          <p>{ratingsCount} reviews</p>
        </div>
        <p>{price}</p>
        <p>{seller}</p>
        <p>{description}</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <select>
                <option>Select Size</option>
                <option>SM</option>
                <option>LG</option>
                <option>XL</option>
                <option>XLL</option>
              </select>
            </div>
            <div>
              <select>
                <option>Select Color</option>
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>Yellow</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <GrFormPrevious />

              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <GrFormNext />
            </div>
            <div>
              <input type="text" placeholder="Enter Coupon Code" />
            </div>
          </div>
          <div>
            <button>Add to Cart</button>
            <Link to="/cart">Check Out</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DisplayProduct;
