import { CiSearch } from "react-icons/ci";
import { categories } from "../utilis/category";
import { useState } from "react";
import products from "../Home/products.json";
import { Link } from "react-router-dom";

const Hero = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterProduct, setFilterProduct] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    if (searchTerm.trim() === "") {
      setFilterProduct([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProduct(filtered);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleSearch(e); // You may still want to perform the search logic here if needed
  };

  return (
    <div className="relative bg-gray-100 py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Search Your One From{" "}
            <span className="text-yellow-500">Thousand</span> Of
            <br className="hidden sm:inline" /> Products
          </h1>

          <div className="mt-10 mx-auto">
            <div className="flex w-full justify-center items-center rounded-md shadow-sm">
              <form
                onSubmit={handleSubmit}
                className="flex justify-between items-center bg-white shadow-lg rounded-full p-4 w-full max-w-3xl"
              >
                <select className="h-full py-0 pl-3 pr-7 border-transparent bg-transparent outline-none text-gray-500 sm:text-sm rounded-l-md">
                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.name.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>

                <input
                  type="search"
                  value={searchInput}
                  onChange={handleSearch}
                  className="flex-1 block w-full rounded-none outline-none border-none sm:text-sm border-gray-300"
                  placeholder="Search your product"
                />
                <button type="submit" aria-label="Search">
                  <CiSearch />
                </button>
              </form>
            </div>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We Have The Largest Collection of products
            </p>

            {searchInput && (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-3xl gap-2">
                {filterProduct.length > 0 ? (
                  filterProduct.map((product) => (
                    <Link to={`/shop/${product.id}`} key={product.id}>
                      <li className="bg-white py-1 w-full text-sm rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
                        {product.name}
                      </li>
                    </Link>
                  ))
                ) : (
                  <li className="text-gray-800">No products found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/*  <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-yellow-400 rounded-tl-full"></div> */}
    </div>
  );
};

export default Hero;
