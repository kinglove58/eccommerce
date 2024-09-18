import { useState } from "react";
import { MdStarRate } from "react-icons/md";

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
        <form onSubmit={handleSubmit}>{/* Form content here */}</form>
      </div>
    </div>
  );
}

export default DisplayProduct;
