import { MdStarRate } from "react-icons/md";
import { useState } from "react";

const RatingStar = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = (index) => {
    setHover(index);
  };

  const handleClick = (index) => {
    setRating(index);
  };

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <MdStarRate
        key={i}
        onMouseEnter={() => handleMouseEnter(i + 1)}
        onMouseLeave={() => handleMouseLeave(i + 1)}
        onClick={() => handleClick(i + 1)}
        className={`${
          (hover || rating) > i ? "text-yellow-500" : "text-gray-300"
        } text-xl cursor-pointer`}
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default RatingStar;
