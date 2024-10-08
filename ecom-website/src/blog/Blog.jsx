import PageHeader from "../components/PageHeader";
import blogList from "../utilis/blogdata";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import { Link } from "react-router-dom";

const iconMap = {
  FaUser: FaUser,
  FaCalendarAlt: FaCalendarAlt,
  IoMdOpen: IoMdOpen,
};

function Blog() {
  return (
    <div className="container mx-auto py-10 px-4">
      <PageHeader title="Blog" curentPage="Blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogList.map((blog, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105"
          >
            <Link to={`/blog/${blog.id}`}>
              <img
                src={blog.imgUrl}
                alt={blog.imgAlt}
                className="w-full h-48 object-cover"
              />
            </Link>

            <div className="p-4">
              <Link to={`/blog/${blog.id}`}>
                <h1 className="text-xl font-bold mb-2 hover:text-orange-600">
                  {blog.title}
                </h1>
              </Link>
              <div className="flex items-center space-x-4 mb-4">
                {blog.metaList.map((meta, i) => {
                  const IconComponent = iconMap[meta.icon];
                  return (
                    <div
                      key={i}
                      className="flex items-center space-x-1 text-gray-600"
                    >
                      <IconComponent />
                      <span>{meta.text}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-gray-700 mb-4">{blog.desc}</p>
              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600">
                  <Link to={`/blog/${blog.id}`}>
                    <span className="hover:text-orange-600">
                      {blog.btnText}
                    </span>
                  </Link>
                  <IoMdOpen />
                </button>
                <p className="text-gray-600">{blog.commentCount} comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
