import { Link } from "react-router-dom";

const postList = [
  {
    id: 1,
    imgUrl: "/src/assets/images/blog/10.jpg",
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/blog/11.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/12.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];

function PopularPost() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold">Popular Blog Post</h2>
      </div>
      <div>
        <ul className="space-y-4">
          {postList.map((post) => (
            <li
              key={post.id}
              className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4"
            >
              <div className="w-full md:w-1/3">
                <Link to={`/blog/${post.id}`}>
                  <img
                    src={post.imgUrl}
                    alt={post.imgAlt}
                    className="w-full h-auto rounded-md shadow-md"
                  />
                </Link>
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-gray-600">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PopularPost;
