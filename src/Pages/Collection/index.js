import React, { useEffect, useState } from "react";
import serwani from "../../Asset/fullserwani.png";
import upperserwani from "../../Asset/upperserwani.png";
import downserwanipaijama from "../../Asset/downserwanipaijama.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Configs/axios.config";

const Collection = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getPostFn = async () => {
    const response = await axiosInstance.get(
      "/api/overall-main-category-sub-category-list/"
    );
    console.log(response);
    setData(response.data.data.main_category_list);
  };

  useEffect(() => {
    getPostFn();
  }, []);
  return (
    <div className="flex flex-col lg:gap-10 px-[5%]">
      <div className="lg:grid lg:grid-cols-3  justify-center gap-5 p-3 ">
        {data?.map((i, index) => {
          return (
            <div
              className="relative overflow-hidden"
              key={i.id}
              onClick={() => navigate(`/product/${i.id}`)}
            >
              <img
                src={i.image}
                alt=""
                className="hover:scale-110 duration-700 transition-all border-2"
              />
              <div className="absolute w-full -bottom-0 text-center">
                <button className="w-1/2 h-10 items-center text-center z-50 hover:bg-white hover:text-black hover:border-[#85754e] flex justify-center text-white ml-24 bg-[#85754e] border">
                  {i.category}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Link to={"/shop_the_look"}>
        <div className="flex px-[5%] gap-2 bg-[#f5f3f2] max-lg:hidden">
          <div className="flex flex-col gap-5 p-24 justify-center w-[40%]">
            <p className="lg:text-3xl">SHOP THE LOOK</p>
            <p>Style ideas from us to you.</p>
            <button className="bg-[#82734e] p-4 w-fit text-white text-sm">
              SHOP NOW
            </button>
          </div>
          <div>
            <img src={serwani} alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <img src={upperserwani} alt="" />
            <img src={downserwanipaijama} alt="" className="h-[13.1rem]" />
          </div>
        </div>
      </Link>
      <Link to={"/shop_the_look"}>
        <div className="lg:hidden">
          <div className="flex flex-col gap-5 p-16 text-center">
            <p className="text-3xl">SHOP THE LOOK</p>
            <p>Style ideas from us to you.</p>
            <p className="bg-[#82734e] p-3 ml-16 w-fit text-white text-sm">
              SHOP NOW
            </p>
          </div>
          <div className="flex px-[5%] gap-2">
            <div>
              <img src={serwani} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <img src={upperserwani} alt="" />
              <img src={downserwanipaijama} alt="" className="" />
            </div>
          </div>
        </div>
      </Link>
      <p className="px-[5%] p-10">
        Tags : Wedding Sherwani for Men | Kurtas for Men | Bandhgala Suit |
        Sangeet Dress for Men | Ivory Sherwani | Achkan for Men | Wedding Dress
        for Men | Haldi Dress for Groom | Mojdi on Kurta
      </p>
    </div>
  );
};

export default Collection;
