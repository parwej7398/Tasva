import React from "react";
import new_arrival from "../../Asset/NEW ARRIVALS.png";
import Serwani from "../../Asset/SHERWANI.png";
import kurta from "../../Asset/KURTA.png";
import bandhgala from "../../Asset/BANDHGALA.png";
import nehru_jacket from "../../Asset/BUNDI & NEHRU JACKET.png";
import assosiries from "../../Asset/ACCESSORIES.png";
import serwani from "../../Asset/fullserwani.png";
import upperserwani from "../../Asset/upperserwani.png";
import downserwanipaijama from "../../Asset/downserwanipaijama.png";
import { Link } from "react-router-dom";

const Collection = () => {
  const categories = [
    {
      id: 1,
      img: new_arrival,
      title: "NEW ARRIVALS ➔",
      to: "/new_arrival",
    },
    {
      id: 2,
      img: Serwani,
      title: "SHERWANI  ➔",
      to: "/serwani_achkans",
    },
    {
      id: 3,
      img: bandhgala,
      title: "BANDHGALA  ➔",
      to: "/bandhgala_suits_for_men",
    },
    {
      id: 4,
      img: nehru_jacket,
      title: "BUNDI & NEHRU JACKET  ➔",
      to: "/bundis_nehru_jacket",
    },
    {
      id: 5,
      img: kurta,
      title: "KURTA ➔",
      to: "/kurta_bundi",
    },
    {
      id: 6,
      img: assosiries,
      title: "ACCESSORIES   ➔",
      to: "/accessories",
    },
  ];
  return (
    <div className="flex flex-col lg:gap-10 px-[5%]">
      <div className="lg:grid lg:grid-cols-3  justify-center gap-5 p-3 ">
        {categories.map((i, index) => (
          <Link to={i.to}>
            <div className="relative overflow-hidden" key={index}>
              <img
                src={i.img}
                alt=""
                className="hover:scale-110 duration-700 transition-all border-2"
              />

              <div className="absolute w-full -bottom-0 text-center">
                <button className="w-1/2 h-10 items-center text-center z-50 hover:bg-white hover:text-black hover:border-[#85754e] flex justify-center text-white ml-24 bg-[#85754e] border">
                  {i.title}
                </button>
              </div>
            </div>
          </Link>
        ))}
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
