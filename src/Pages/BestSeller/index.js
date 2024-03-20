import React from "react";
import Slider from "react-slick";

const BestSeller = () => {
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
      <div className="p-20">
        <div className="flex justify-between p-10">
          <p>BEST SELLERS</p>
          <p>View all</p>
        </div>
        {/* <div className="px-[2%]">
          <div className="slider-container">
            <Slider {...settings}>
              <div className="border bg-red-300">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <div className="w-96">
                        <img
                          src={
                            "https://www.google.com/aclk?sa=l&ai=DChcSEwiF77OgnIKFAxUEHYMDHfYPCJoYABAHGgJzZg&ase=2&gclid=EAIaIQobChMIhe-zoJyChQMVBB2DAx32DwiaEAQYBCABEgICkfD_BwE&sig=AOD64_1cB_G01kPJ17o_MeMs8vNJwDcvxA&ctype=5&nis=6&adurl&ved=2ahUKEwizlqWgnIKFAxXsxDgGHcnsDzwQvhd6BAgBEGM"
                          }
                          alt=""
                          className="h-48"
                        />
                      </div>
                      <div>
                        <p>Open Collar Single Kurta</p>
                        <p>₹ 1,999</p>
                      </div>
                    </div>
                    <div>
                      <div className="w-96">
                        <img
                          src={
                            "https://www.google.com/aclk?sa=l&ai=DChcSEwiF77OgnIKFAxUEHYMDHfYPCJoYABAHGgJzZg&ase=2&gclid=EAIaIQobChMIhe-zoJyChQMVBB2DAx32DwiaEAQYBCABEgICkfD_BwE&sig=AOD64_1cB_G01kPJ17o_MeMs8vNJwDcvxA&ctype=5&nis=6&adurl&ved=2ahUKEwizlqWgnIKFAxXsxDgGHcnsDzwQvhd6BAgBEGM"
                          }
                          alt=""
                          className="h-48"
                        />
                      </div>
                      <div>
                        <p>Open Collar Single Kurta</p>
                        <p>₹ 1,999</p>
                      </div>
                    </div>
                    <div>
                      <div className="w-96">
                        <img
                          src={
                            "https://www.google.com/aclk?sa=l&ai=DChcSEwiF77OgnIKFAxUEHYMDHfYPCJoYABAHGgJzZg&ase=2&gclid=EAIaIQobChMIhe-zoJyChQMVBB2DAx32DwiaEAQYBCABEgICkfD_BwE&sig=AOD64_1cB_G01kPJ17o_MeMs8vNJwDcvxA&ctype=5&nis=6&adurl&ved=2ahUKEwizlqWgnIKFAxXsxDgGHcnsDzwQvhd6BAgBEGM"
                          }
                          alt=""
                          className="h-48"
                        />
                      </div>
                      <div>
                        <p>Open Collar Single Kurta</p>
                        <p>₹ 1,999</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="border bg-red-400">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="border bg-red-500">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="border bg-red-600">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="border bg-red-700">
                <div className="slider-container">
                  <Slider {...settings}>
                    <div>
                      <h3>1</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                  </Slider>
                </div>
              </div>
            </Slider>
          </div>
        </div> */}
        <Slider {...settings}>
          <img src="" alt="" />
        </Slider>
      </div>
    </>
  );
};

export default BestSeller;
