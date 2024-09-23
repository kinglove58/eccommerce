import { PaystackButton } from "react-paystack";
import { useState } from "react";
import Testimage from "../assets/images/about/03.jpg";

function CheckOut() {
  const publicKey = "pk_test_0ab53993ba2093a72eef40df508a67dbfb658db3";
  const amount = 1000000;

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Take your product Now",
    onSuccess: () => alert("Thanks for doing business with us!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please fill in all fields");
      return;
    }
    // Proceed with Paystack payment
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <div className="mb-6">
        <div className="text-center">
          <p className="italic text-gray-600 mb-4">
            "The product I bought here was exactly the way I see it here. Thank
            you so much"
          </p>
          <img
            src={Testimage}
            alt="testimonial image"
            className="w-20 h-20 mx-auto rounded-full"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-6 text-center">Check Out</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Full Name"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Email"
          />
          <div className="text-center">
            <PaystackButton
              {...componentProps}
              className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-all"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CheckOut;
