import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSeller from "../BestSeller";
import Collection from "../Collection";
import { axiosInstance } from "../../Configs/axios.config";

const FrontPages = () => {
  const [data, setData] = useState([]);
  const getPostFn = async () => {
    const response = await axiosInstance.get("/api/slider-list/");
    console.log(response);
    setData(response.data.data);
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  useEffect(() => {
    getPostFn();
  }, []);
  console.log(data);
  return (
    <>
      <div className="pt-32 max-lg:hidden">
        <div className="slider-container">
          <Slider {...settings}>
            {data?.map((i, index) => {
              return (
                <div key={index}>
                  <img src={i.image} />
                </div>
              );
            })}
          </Slider>
        </div>
        {/* <div className=" px-[10%] lg:p-10">
          <iframe
            autoPlay
            muted
            loop
            id="bg-video"
            className="min-w-[104%] object-cover h-[35rem]"
            src="https://www.youtube.com/embed/Sz017ewJ1T4?iv_load_policy=3&modestbranding=1&autoplay=0&loop=0&playlist=Sz017ewJ1T4&rel=0&showinfo=0&enablejsapi=1&origin=https%3A%2F%2Fwww.tasva.com&widgetid=1"
            frameborder="0"
          ></iframe>
        </div> */}

        <div className="mb-24">
          <BestSeller />
          <Collection />
        </div>
      </div>

      {/* <div className="lg:hidden">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <Link>
                <img
                  src="https://www.tasva.com/cdn/shop/files/AW_MASTER_1024X1024_3_360x.jpg?v=1696749499%20360w%20360h"
                  className="h-96"
                />
              </Link>
            </div>
            <div>
              <Link>
                <img
                  src="https://www.tasva.com/cdn/shop/files/5_a3ed2562-42c4-4071-aef3-de0f23660af1_900x.jpg?v=1684324066%20900w%20900h"
                  className="h-96"
                />
              </Link>
            </div>
            <div>
              <Link>
                <img
                  src="https://www.tasva.com/cdn/shop/files/8_acd863b3-1f29-484b-a5f5-4bfcd93180bc_900x.jpg?v=1677843203%20900w%20900h"
                  className="h-96"
                />
              </Link>
            </div>
            <div>
              <Link>
                <img
                  src="https://www.tasva.com/cdn/shop/files/9_900x.jpg?v=1677843427%20900w%20900h"
                  className="h-96"
                />
              </Link>
            </div>
          </Slider>
        </div>
        <div className=" px-[5%] p-5">
          <Link
            to={
              "https://www.youtube.com/embed/Sz017ewJ1T4?iv_load_policy=3&modestbranding=1&autoplay=0&loop=0&playlist=Sz017ewJ1T4&rel=0&showinfo=0&enablejsapi=1&origin=https%3A%2F%2Fwww.tasva.com&widgetid=1"
            }
          >
            <img
              src="https://www.tasva.com/cdn/shop/files/TasvaAW23_-_Film_Cover_Image_2_360x.png?v=1696752266%20360w%20203h"
              alt=""
            />
          </Link>
        </div>

        <div className="lg:mb-24">
          <BestSeller />
          <Collection />
        </div>
      </div> */}
    </>
  );
};

export default FrontPages;
