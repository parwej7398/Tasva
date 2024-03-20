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

const Collection = () => {
  const categories = [
    {
      id: 1,
      img: new_arrival,
      title: "NEW ARRIVALS ➔",
    },
    {
      id: 2,
      img: Serwani,
      title: "SHERWANI  ➔",
    },
    {
      id: 3,
      img: bandhgala,
      title: "BANDHGALA  ➔",
    },
    {
      id: 4,
      img: nehru_jacket,
      title: "BUNDI & NEHRU JACKET  ➔",
    },
    {
      id: 5,
      img: kurta,
      title: "KURTA ➔",
    },
    {
      id: 6,
      img: assosiries,
      title: "ACCESSORIES   ➔",
    },
  ];
  return (
    <div className="flex flex-col gap-10 px-[5%]">
      <div key={""} className="grid grid-cols-3 justify-center gap-5 p-3 ">
        {categories.map((i) => (
          <div className="relative">
            <img
              src={i.img}
              alt=""
              className="h-[30rem] w-[30rem] hover:scale-105 border-2"
            />
            <div className="absolute w-full -bottom-3 text-center">
              <p className="w-1/2 h-10 items-center flex justify-center text-white ml-24 bg-[#85754e] border">
                {i.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex px-[5%] gap-2 bg-[#f5f3f2]">
        <div className="flex flex-col gap-5 p-24 justify-center w-[40%]">
          <p className="text-3xl">SHOP THE LOOK</p>
          <p>Style ideas from us to you.</p>
          <p className="bg-[#82734e] p-4 w-fit text-white text-sm">SHOP NOW</p>
        </div>
        <div>
          <img src={serwani} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={upperserwani} alt="" />
          <img src={downserwanipaijama} alt="" className="h-[13.1rem]" />
        </div>
      </div>
      <div>
        <p>
          Tags : Wedding Sherwani for Men | Kurtas for Men | Bandhgala Suit |
          Sangeet Dress for Men | Ivory Sherwani | Achkan for Men | Wedding
          Dress for Men | Haldi Dress for Groom | Mojdi on Kurta
        </p>
      </div>
    </div>
  );
};

export default Collection;
