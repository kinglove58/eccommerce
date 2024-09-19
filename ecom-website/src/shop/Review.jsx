import { useState } from "react";
import shopImage from "/src/assets/images/shop/01.jpg";
import RatingStar from "./RatingStar";

const reviewTitle = "Add a Review";

let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

function Review() {
  const [activeSection, setActiveSection] = useState("description");

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-start items-center mb-6">
        <button
          className={`px-4 py-2 mx-2 ${
            activeSection === "description"
              ? "bg-orange-500 rounded-sm text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeSection === "review"
              ? "bg-orange-500 rounded-sm text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveSection("review")}
        >
          Review 4
        </button>
      </div>

      {/* details */}
      <div>
        {activeSection === "review" && (
          <div>
            {/* Review */}
            <div>
              <ul className="items-center">
                {ReviewList.map((item, i) => (
                  <li key={i} className="mb-4">
                    <div className="flex items-start rounded-full">
                      <div className="mr-4 w-10 h-10">
                        <img
                          src={item.imgUrl}
                          alt={item.imgAlt}
                          className="w-full h-full"
                        />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h3 className="font-bold mr-2">{item.name}</h3>
                          <p className="text-gray-500">{item.date}</p>
                        </div>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Add review */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">{reviewTitle}</h2>
                <form action="action" className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between md:space-x-4">
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your Email"
                      className="p-2 border border-gray-300 rounded w-full "
                    />
                    <input
                      type="text"
                      id="name"
                      placeholder="Full name"
                      className="p-2 border border-gray-300 rounded w-full"
                    />
                    <div className="border-1 rounded-sm">
                      <RatingStar />
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="What your experience"
                      className="p-4 border border-gray-300 rounded-sm w-1/2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {activeSection === "description" && (
          <div>
            <p className="text-gray-700 mb-1">
              Enthusiast build innovativ initiatives before lonterm high-impact
              awesome theme seo psd porta monetize covalent leadership after
              without resource. Efficiently whiteboard extensible testing
              procedures for reliable supply chains. Enthusiast build innovativ
              initiatives before lonterm high-impact awesome theme seo psd porta
              monetize covalent leadership after without resource. Efficiently
              whiteboard extensible testing procedures for reliable supply
              chains.
            </p>
            <div className="mb-4 flex justify-between items-center">
              <ul className="list-disc list-inside mb-2">
                <li>Efficiently whiteboard extensible testing procedures</li>
                <li>Enthusiast build innovativ initiatives</li>
                <li>Efficiently whiteboard extensible testing procedures</li>
                <li>Enthusiast build innovativ initiatives</li>
                <li>Efficiently whiteboard extensible testing procedures</li>
                <li>Enthusiast build innovativ initiatives</li>
              </ul>
              <img src={shopImage} alt="shop image" className="w-50 h-auto" />
            </div>
            <p className="text-gray-700">
              Enthusiast build innovativ initiatives before lonterm high-impact
              awesome theme seo psd porta monetize covalent leadership after
              without resource. Efficiently whiteboard extensible testing
              procedures for reliable supply chains. Enthusiast build innovativ
              initiatives before lonterm high-impact awesome theme seo psd porta
              monetize covalent leadership after without resource. Efficiently
              whiteboard extensible testing procedures for reliable supply
              chains.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Review;
