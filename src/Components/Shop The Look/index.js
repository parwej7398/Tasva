import React from "react";
import { Link } from "react-router-dom";

const ShopTheLook = () => {
  return (
    <>
      <div className="lg:pt-32">
        <img
          src={
            "https://www.tasva.com/cdn/shop/collections/Banner_2048x.jpg?v=1663323171"
          }
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <div className="flex *:p-1 p-4 lg:px-[5%]">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <p>/</p>
          <p>Men's Wedding Accessories</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:p-16 p-4">
        <p className="lg:text-3xl text-2xl">Shop The Look</p>
      </div>

      <p className="text-center p-20 text-4xl font-serif">
        No search result avalable, view all produccts
      </p>
    </>
  );
};

export default ShopTheLook;
