import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsorList } from "../../src/Home/appitem";

const Sponsor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container bg-gray-100 mx-auto my-1 text-center">
      <Slider {...settings}>
        {sponsorList.map((img, index) => (
          <div key={index}>
            <div className="flex justify-center items-center">
              <img
                src={img.imgUrl}
                alt="sponsor logo"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sponsor;
