import PopularPost from "../shop/PopularPost";
import blogList from "../utilis/blogdata";
import { useParams, Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import blogImg from "../assets/images/blog/single/01.jpg"; // Ensure this path is correct
import { IoPlayCircleSharp } from "react-icons/io5";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useState } from "react";

const socialList = [
  {
    icon: <FaFacebookF />,
    siteLink: "#",
    className: "bg-blue-600",
  },
  {
    icon: <FaTwitter />,
    siteLink: "#",
    className: "bg-blue-400",
  },
  {
    icon: <FaLinkedinIn />,
    siteLink: "#",
    className: "bg-blue-700",
  },
  {
    icon: <FaInstagram />,
    siteLink: "#",
    className: "bg-pink-500",
  },
  {
    icon: <FaPinterestP />,
    siteLink: "#",
    className: "bg-red-600",
  },
];

// Define the iconMap object
const iconMap = {
  FaUser: FaUser,
  FaCalendarAlt: FaCalendarAlt,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaPhoneAlt: FaPhoneAlt,
  FaEnvelope: FaEnvelope,
  FaFacebookF: FaFacebookF,
  FaTwitter: FaTwitter,
  FaLinkedinIn: FaLinkedinIn,
  FaInstagram: FaInstagram,
  FaPinterestP: FaPinterestP,
};

function SingleBlog() {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const { id } = useParams();

  const currentIndex = blogList.findIndex((blog) => blog.id === id);
  const result = blogList.filter((blog) => blog.id === id);
  const previousBlog = blogList[currentIndex - 1];
  const nextBlog = blogList[currentIndex + 1];

  return (
    <div className="container mx-auto p-4 py-16 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 col-span-1">
          <article>
            <div>
              {result.map((blog, i) => (
                <div key={i}>
                  <div className="max-w-2xl">
                    <img
                      src={blog.imgUrl}
                      alt={blog.imgAlt}
                      className="w-full object-cover object-center h-auto mb-4"
                    />
                  </div>

                  <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
                  <div className="mb-4">
                    {blog.metaList.map((meta, i) => {
                      const IconComponent = iconMap[meta.icon];
                      if (!IconComponent) {
                        console.error(`Icon ${meta.icon} not found in iconMap`);
                        return null;
                      }
                      return (
                        <div
                          key={i}
                          className="flex items-center space-x-1 text-gray-600 mb-2"
                        >
                          <IconComponent />
                          <span>{meta.text}</span>
                          <span>{blog.commentCount} comment</span>
                        </div>
                      );
                    })}
                  </div>
                  <p className="mb-4 max-w-3xl">{blog.blogTextPage}</p>
                  <div className="mb-4  border-2 border-red-900 h-96 max-w-2xl flex items-center justify-center">
                    <ReactPlayer
                      url={blog.youtubeLink}
                      playing={playing}
                      controls
                      width="100%"
                      height="100%"
                      light={blog.imgUrl} // Use the imported image directly
                      playIcon={<IoPlayCircleSharp size={40} />}
                      onClickPreview={handlePlayPause}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <ul className="flex space-x-4">
                <li className="bg-gray-200 p-2 rounded">Agency</li>
                <li className="bg-gray-200 p-2 rounded">Business</li>
                <li className="bg-gray-200 p-2 rounded">Person</li>
              </ul>
            </div>
            <div className="flex space-x-4 mb-4">
              {socialList.map((social, i) => (
                <a
                  key={i}
                  href={social.siteLink}
                  className={`p-2 text-white rounded-full ${social.className}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="flex justify-between mb-4">
              {previousBlog && (
                <div>
                  <Link
                    to={`/blog/${previousBlog.id}`}
                    className="flex items-center space-x-2 text-blue-500"
                  >
                    <GrLinkPrevious />
                    <span>Previous Blog</span>
                  </Link>
                  <p className="text-gray-600">{previousBlog.title}</p>
                </div>
              )}
              {nextBlog && (
                <div>
                  <Link
                    to={`/blog/${nextBlog.id}`}
                    className="flex items-center space-x-2 text-blue-500"
                  >
                    <GrLinkNext />
                    <span>Next Blog</span>
                  </Link>
                  <p className="text-gray-600">{nextBlog.title}</p>
                </div>
              )}
            </div>
          </article>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <PopularPost />
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
