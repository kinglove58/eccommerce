import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";

function Search({ products }) {
  const [searchItem, setSearchItem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleOnChange = (e) => {
    const searchItem = e.target.value;
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
    if (searchItem.trim() === "") {
      setFilteredProducts([]);
    }
    setSearchItem(searchItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleOnChange(e);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex justify-between p-2 bg-white border-2 rounde-sm items-center"
      >
        <input
          type="text"
          value={searchItem}
          placeholder="Search"
          onChange={handleOnChange}
          className="flex-grow outline-none"
        />
        <button type="submit" className="text-black">
          <CiSearch size={24} />
        </button>
      </form>

      <div className="grid grid-cols-1 gap-4 mb-3">
        {searchItem && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/shop/${product.id}`} key={product.id}>
              <div className="flex items-center p-2 border border-gray-300 rounded-md">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-md font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 w-full text-[10px]">No products found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
