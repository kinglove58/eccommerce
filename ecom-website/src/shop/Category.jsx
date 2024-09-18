import { useState } from "react";

function Category({ products, onCategoryClick }) {
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories from products
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const handleCategoryClick = (cate) => {
    setActiveCategory(cate);
    onCategoryClick(cate);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">All Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((cate, i) => (
          <button
            key={i}
            onClick={() => handleCategoryClick(cate)}
            className={`px-4 py-2 rounded ${
              activeCategory === cate
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cate}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
