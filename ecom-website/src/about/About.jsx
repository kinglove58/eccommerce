import PageHeader from "../components/PageHeader";
import imgab1 from "../assets/images/about/01.jpg";
import imgab2 from "../assets/images/about/02.jpg";

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Experiences";
const desc =
  "Distinctively provide access multifunctional users whereas transparent processes sometimes incentivize efficient functionalities rather than extensible architecture communicate leveraged services and cross-platform.";

const year = "30+";
const experience = "Years Of Experiences";

const aboutList = [
  {
    imgUrl: "/src/assets/images/about/icon/01.jpg",
    imgAlt: "about icon",
    title: "Skilled Instructors",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/02.jpg",
    imgAlt: "about icon",
    title: "Get Certificate",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
  {
    imgUrl: "/src/assets/images/about/icon/03.jpg",
    imgAlt: "about icon",
    title: "Online Classes",
    desc: "Distinctively provide access multifunctional users whereas communicate leveraged services",
  },
];

function About() {
  return (
    <div>
      <PageHeader title="About Us" curentPage="About" />
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 max-w-lg col-span-12 relative">
            <img src={imgab1} alt="about image" className="max-w-md h-auto" />
            <img
              src={imgab2}
              alt="about image"
              className="absolute top-[73%] border-8 border-white right-5 transform translate-x-1/2 -translate-y-1/2 w-1/2 h-auto"
            />
            <div className="absolute border-8 border-white bg-orange-400 p-4 top-[77%] left-[13%] transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="text-4xl font-bold text-center text-white leading-none">
                {year}{" "}
              </h1>
              <span className="text-center flex-col flex mt-2 text-white">
                <span className="text-sm font-normal tracking-wide leading-none">
                  Years Of{" "}
                </span>
                <span className="text-sm font-normal tracking-wide leading-none">
                  Experiences
                </span>
              </span>
            </div>
          </div>
          <div className="md:col-span-5 col-span-12">
            <div className="mb-8">
              <p className="text-orange-400 text-lg font-semibold tracking-widest">
                {subTitle}
              </p>
              <h1 className="text-3xl font-bold mb-4">{title}</h1>
              <p className="text-gray-600">{desc}</p>
            </div>
            <ul className="space-y-8">
              {aboutList.map((about, i) => (
                <li key={i} className="flex items-start space-x-4">
                  <img
                    src={about.imgUrl}
                    alt={about.imgAlt}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{about.title}</h3>
                    <p className="text-gray-600">{about.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
