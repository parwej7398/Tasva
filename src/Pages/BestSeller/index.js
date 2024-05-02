import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { axiosInstance } from "../../Configs/axios.config";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getPostFn = async () => {
    const response = await axiosInstance.get("/api/product-list/");
    console.log(response);
    setData(response.data.data.product_list);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplaySpeed: 1000,
  };
  useEffect(() => {
    getPostFn();
  }, []);
  console.log(data);
  return (
    <>
      <div className="lg:p-20 p-4">
        <div className="flex justify-between lg:p-10 p-4 lg:px-20">
          <button>BEST SELLERS</button>
          <button>View all</button>
        </div>
        <div className="p-5">
          <div className="slider-container">
            <Slider {...settings}>
              {data?.map((i, index) => {
                return (
                  <div
                    className="border-2 p-5 h-[28rem]"
                    key={i.id}
                    onClick={() => navigate(`/product/${i.id}/${i.variant_id}`)}
                  >
                    <Slider
                      arrows={false}
                      autoplay
                      autoplaySpeed={2000}
                      key={index}
                      slidesToShow={1}
                    >
                      {[1, 2, 3].map((index) => (
                        <img src={i.image} alt="" key={index} />
                      ))}
                    </Slider>
                    <p className="font-semibold text-lg">{i.variant_name}</p>
                    <p
                      style={{
                        color: i.stock_sataus === "Out-stock" ? "red" : "green",
                      }}
                      className="font-bold text-lg"
                    >
                      {i.stock_sataus}
                    </p>
                    <div className="flex gap-2 items-center">
                      <p>₹{i.actual_price}</p>
                      <s>₹{i.price}</s>
                      <p className="font-semibold p-1 text-white bg-green-500 rounded px-1">
                        ₹{i.discount_percent}% off
                      </p>
                    </div>
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
