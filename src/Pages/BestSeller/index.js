import React from "react";
import Slider from "react-slick";

const BestSeller = () => {
  const categories = [
    {
      id: 1,
      img: [
        "https://www.tasva.com/cdn/shop/products/TasvaDay124690_540x.jpg?v=1656160032",
        "https://www.tasva.com/cdn/shop/products/TasvaDay124680_540x.jpg?v=1656160032",
        "https://www.tasva.com/cdn/shop/products/TasvaDay124690-2_540x.jpg?v=1656160032",
        "https://www.tasva.com/cdn/shop/products/TasvaDay124693_540x.jpg?v=1656160014",
      ],
      title: "Open Collar Single Kurta",
      discount: "₹ 5,999",
      price: "₹ 1,999",
    },
    {
      id: 2,
      img: [
        "https://www.tasva.com/cdn/shop/products/TMSEECLA0812_3_540x.jpg?v=1657439967",
        "https://www.tasva.com/cdn/shop/products/TMSEECLA0812_540x.jpg?v=1657439887",
        "https://www.tasva.com/cdn/shop/products/TMSEECLA0812_2_540x.jpg?v=1657439967",
      ],
      title: "Gold Brocade with Square Motif Detail mojari ",
      discount: "₹ 9,999",
      price: "₹ 3,999",
    },
    {
      id: 3,
      img: [
        "https://www.tasva.com/cdn/shop/products/TMBOECRA0911_540x.jpg?v=1642761272",
        "https://www.tasva.com/cdn/shop/products/TMBOECRA0911_540x.jpg?v=1642761272",
        "https://www.tasva.com/cdn/shop/products/TMBOECRA0911_540x.jpg?v=1642761272",
      ],
      title: "Beige Bundi With Single Frogging Button",
      discount: "₹ 12,999",
      price: "₹ 4,999",
    },
  ];

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
        <div className="p-4">
          <div className="slider-container">
            <Slider {...settings}>
              {categories.map((i, index) => {
                return (
                  <div>
                    <Slider
                      arrows={false}
                      autoplay
                      autoplaySpeed={2000}
                      key={index}
                    >
                      {i.img?.map((k) => {
                        return <img src={k} alt="" />;
                      })}
                    </Slider>
                    <p>{i.title}</p>
                    <span className="flex gap-3">
                      <s>{i.discount}</s>
                      <p>{i.price}</p>
                    </span>
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
