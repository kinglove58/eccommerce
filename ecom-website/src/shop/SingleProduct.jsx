import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageHeader from "../components/PageHeader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import DisplayProduct from "./DisplayProduct";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", zIndex: 1 }}
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
};

function SingleProduct() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const result = products.filter((product) => product.id === id);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <PageHeader title="Single Product" curentPage="Single Product" />

      {/* view */}
      <div className="p-4">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-8 col-span-12">
              <article>
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* part 1 */}
                  <div className="col-span-12 lg:col-span-6">
                    <div>
                      <div>
                        <Slider {...settings}>
                          {result.map((product, i) => (
                            <div key={i}>
                              <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-96 object-cover"
                              />
                            </div>
                          ))}
                        </Slider>
                      </div>
                    </div>
                  </div>

                  {/* part 2 */}
                  <div className="col-span-12 lg:col-span-6">
                    {result &&
                      result.map((item) => (
                        <DisplayProduct key={item.id} item={item} />
                      ))}
                  </div>
                </div>
              </article>
            </div>

            {/* right handside */}
            <div className="lg:col-span-4 col-span-12">right hand</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
