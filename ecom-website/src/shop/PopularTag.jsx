import { Link } from "react-router-dom";

const title = "Our Popular Tags";

const tagsList = [
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
  { link: "#", text: "videohive" },
  { link: "#", text: "audiojungle" },
  { link: "#", text: "3docean" },
  { link: "#", text: "envato" },
  { link: "#", text: "themeforest" },
  { link: "#", text: "codecanyon" },
];

function PopularTag() {
  return (
    <div className="container mx-auto p-2 md:p-4 ">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {tagsList.map((tag, i) => (
          <Link
            to={tag.link}
            key={i}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-yellow-500 hover:text-white transition"
          >
            {tag.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PopularTag;
