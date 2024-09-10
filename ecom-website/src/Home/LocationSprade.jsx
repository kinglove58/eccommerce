import React from "react";
import { clientsList } from "./locationItem";
import { Link } from "react-router-dom";

// Predefined positions
const predefinedPositions = [
  { top: "20%", left: "20%" },
  { top: "30%", left: "40%" },
  { top: "50%", left: "60%" },
  { top: "70%", left: "80%" },
  { top: "20%", left: "70%" },
  { top: "40%", left: "10%" },
  { top: "60%", left: "30%" },
  { top: "80%", left: "50%" },
  // Add more positions as needed
];

function LocationSprade() {
  const desc =
    "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

  return (
    <div className="py-16 px-4 mt-16 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-black">
          More Than <span className="text-yellow-500">60,000</span> Customers
        </h1>
        <p className="text-lg text-gray-600 mt-2">{desc}</p>
      </div>

      <div className="relative mt-4 h-96">
        <div className="absolute inset-0 bg-custom-image1 bg-center bg-no-repeat opacity-10"></div>
        {clientsList.map((client, index) => {
          const position =
            predefinedPositions[index % predefinedPositions.length];
          return (
            <div key={index} className="absolute group" style={{ ...position }}>
              <Link
                to="/"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-white border-2 rounded-sm border-black p-1"
              >
                {client.text}
              </Link>
              <div
                className="relative w-6 h-6 rounded-full flex items-center justify-center overflow-hidden border-2 mt-2"
                style={{
                  backgroundColor: client.color,
                  borderColor: client.strokeColor,
                }}
              >
                <img
                  src={client.imgUrl}
                  alt={client.imgAlt}
                  className="w-full h-full object-cover rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationSprade;
