import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function DisplayProduct({ item }) {
  const [qty, setQty] = useState(1);
  const [selectColor, setSelectColor] = useState("selct Color");
  const [selectSize, setSelectSize] = useState("select Size");
  const [coupon, setCoupon] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      id: id,
      name: name,
      seller: seller,
      price: price,
      img: img,
      size: selectSize,
      color: selectColor,
      qty: qty,
      coupon: coupon,
    };
    console.log(product);
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

  const { img, id, name, seller, price, ratings, description, ratingsCount } =
    item;

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
              <select
                value={selectSize}
                onChange={(e) => setSelectSize(e.target.value)}
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
              >
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
              <div onClick={handleDecrease}>-</div>
              <input
                type="number"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <div onClick={handleIncrease}>+</div>
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
