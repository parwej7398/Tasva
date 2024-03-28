import React, { useState } from "react";
import Slider from "react-slick";

const BestSeller = () => {
  const [hover, setHover] = useState(true);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 1000,
  };
  return (
    <>
      <div className="lg:p-20 p-4">
        <div className="flex justify-between lg:p-10 p-4 px-20">
          <p>BEST SELLERS</p>
          <p>View all</p>
        </div>
        <div className="lg:px-[10%] ">
          <div className="slider-container">
            <Slider {...settings}>
              {[1, 2, 3].map((i, index) => {
                return (
                  <div
                    className="flex flex-col px-2"
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover("")}
                  >
                    <Slider
                      arrows={false}
                      autoplay
                      autoplaySpeed={2000}
                      pauseOnHover={hover === index}
                    >
                      <img
                        src="https://www.tasva.com/cdn/shop/products/TasvaDay124680_540x.jpg?v=1656160032"
                        alt=""
                      />
                      <img
                        src="https://www.tasva.com/cdn/shop/products/TasvaDay124690-2_540x.jpg?v=1656160032"
                        alt=""
                      />
                      <img
                        src="https://www.tasva.com/cdn/shop/products/TasvaDay124693_540x.jpg?v=1656160014"
                        alt=""
                      />
                    </Slider>
                    <p>Open Collar Single Kurta</p>
                    <p>₹ 1,999</p>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
