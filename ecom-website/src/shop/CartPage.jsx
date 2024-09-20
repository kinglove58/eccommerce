import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

function CartPage() {
  const [cartItem, setCartItem] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const storeCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storeCartItem);
  }, []);
  console.log("here is caritem", cartItem);

  useEffect(() => {
    // Fetch countries from an API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common);
        setCountries(countryNames);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://restcountries.com/states?country=${selectedCountry}`)
        .then((response) => response.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setStates(data);
          } else {
            setStates([]);
          }
        })
        .catch((error) => {
          console.error("Failed to fetch states", error);
          setStates([]);
        });
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const totalPrice = (item) => {
    return item.price * item.qty;
  };

  const handleRemove = (item) => {
    const filteredItem = cartItem.filter((i) => i.id !== item.id);
    setCartItem(filteredItem);
    localStorage.setItem("cart", JSON.stringify(filteredItem));
  };

  const cartSubTotal = cartItem.reduce((total, item) => {
    return total + totalPrice(item);
  }, 0);

  const orderTotal = cartSubTotal;

  return (
    <div className="container mx-auto py-10">
      <PageHeader title="Shop Page" curentPage="Shop" />

      {/* Cart Items Table */}
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="w-full text-left bg-orange-500 rounded-sm">
              <th className="p-4">Product</th>
              <th className="p-4">Total Price</th>
              <th className="p-4">Edit</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item, i) => (
              <tr key={i} className="border-b">
                <td className="p-4 flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 mr-4"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/150";
                    }}
                  />
                  <p>{item.name}</p>
                </td>
                <td className="p-4">${totalPrice(item).toFixed(2)}</td>

                <td className="p-4">
                  <button
                    onClick={() => handleRemove(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cart Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        <div className="flex items-center bg-white rounded-sm border-2 max-w-md">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border-none outline-none w-full px-2 py-2"
          />
          <button className="bg-orange-500 text-white py-2 px-4 rounded-r-md whitespace-nowrap">
            Apply Coupon
          </button>
        </div>
        <div className="flex justify-end items-center space-x-4">
          <Link to="/shop" className="border p-2 rounded-md">
            Update Cart
          </Link>
          <Link
            to="/checkout"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>

      {/* Shipping & Totals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calculate Shipping */}
        <div className="border p-4 rounded-md">
          <h2 className="font-bold mb-4">Calculate Shipping</h2>
          <select
            id="country"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="border p-2 rounded w-full mb-4"
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <select id="state" className="border p-2 rounded w-full mb-4">
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Postal Code"
            className="border p-2 rounded w-full mb-4"
          />
          <button className="bg-orange-500 text-white p-2 rounded w-full">
            Update Total
          </button>
        </div>

        {/* Cart Totals */}
        <div className="border p-4 rounded-md">
          <h2 className="font-bold mb-4">Cart Totals</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${cartSubTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping and Handling</p>
              <p>Free Shipping</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Order Total</p>
              <p>${orderTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
