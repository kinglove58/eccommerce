import { MdDelete } from "react-icons/md";
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import Select from "react-select";
//import "react-select/dist/react-select.css";

function CartPage() {
  const [cartItem, setCartItem] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const storeCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storeCartItem);
  }, []);

  useEffect(() => {
    // Fetch countries from the CountriesNow API
    fetch("https://countriesnow.space/api/v0.1/countries/positions")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.data.map((country) => ({
          label: country.name,
          value: country.name,
        }));
        setCountries(countryNames);
      })
      .catch((error) => {
        console.error("Failed to fetch countries", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch states (admin divisions) from the CountriesNow API based on the selected country
      fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country: selectedCountry.value }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data.states) {
            const stateNames = data.data.states.map((state) => ({
              label: state.name,
              value: state.name,
            }));
            setStates(stateNames);
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

  useEffect(() => {
    if (selectedState) {
      // Fetch cities from the CountriesNow API based on the selected state
      fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          country: selectedCountry.value,
          state: selectedState.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data) {
            const cityNames = data.data.map((city) => ({
              label: city,
              value: city,
            }));
            setCities(cityNames);
          } else {
            setCities([]);
          }
        })
        .catch((error) => {
          console.error("Failed to fetch cities", error);
          setCities([]);
        });
    } else {
      setCities([]);
    }
  }, [selectedState]);

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

          <Select
            options={countries}
            onChange={(option) => setSelectedCountry(option)}
            value={selectedCountry}
            placeholder="Select Country"
            className="border p-2 rounded w-full mb-4"
          />

          <Select
            options={states}
            onChange={(option) => setSelectedState(option)}
            value={selectedState}
            placeholder="Select State"
            className="border p-2 rounded w-full mb-4"
          />

          <Select
            options={cities}
            onChange={(option) => setSelectedCity(option)}
            value={selectedCity}
            placeholder="Select City"
            className="border p-2 rounded w-full mb-4"
          />

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
