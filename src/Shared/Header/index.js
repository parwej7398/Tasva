import {
  AccountCircleOutlined,
  LocalMallOutlined,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import tasva_logo from "../../Asset/Tasva_logo.webp";
import aditya_birla from "../../Asset/Aditya_Birla_Fashion.webp";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="fixed w-full z-50">
        <div className="bg-[#dbd7d0] cursor-pointer">
          <p className="text-xs text-center p-3 tracking-widest">
            FREE SHIPPING ON ALL ORDERS PAN INDIA
          </p>
        </div>
        <div className="flex h-8 justify-end items-center gap-5 px-[2%] text-xs bg-[#85754e] text-white">
          <Link to={"https://www.tasva.com/pages/store-locator"}>
            <button>STORE LOCATOR</button>
          </Link>
          <Link to={"/contact_us"}>
            <button>CONTACT US</button>
          </Link>
          <div>
            <Link to={"/login"}>
              <IconButton>
                <AccountCircleOutlined className="!text-white" />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="flex justify-between bg-white z-50 w-full border-b text-sm tracking-wide p-2 items-center">
          <Link to={"/"}>
            <img src={tasva_logo} alt="" className="h-14" />
          </Link>
          <Link to={"/new_arrival"}>
            <p className="hover:underline cursor-pointer">NEW ARRIVALS</p>
          </Link>
          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">KURTAS & BUNDIS</p>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  SINGLE KURTA
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  KURTA SETS
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  KURTA BUNDI SET
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  BUNDI & NEHRU JACKET
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">BANDHGALAS</p>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  BANDHGALAS
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">ACCESSORIES</p>
            <div className="absolute top-12 z-50 p-2 w-[60rem] !text-black border shadow bg-white hidden group-hover:block">
              <div className="flex justify-around">
                <div className="flex flex-col gap-5">
                  <div className="text-xs font-semibold cursor-pointer">
                    <p>JEWELLERY</p>
                  </div>
                  <div className="text-xs font-semibold cursor-pointer flex flex-col gap-2">
                    <p>BROOCHES</p>
                    <p>MALAS</p>
                    <p>SARPECHES</p>
                    <p>SEHRAS</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-xs font-semibold cursor-pointer">
                    <p>TEXTILES</p>
                  </div>
                  <div className="text-xs font-semibold cursor-pointer flex flex-col gap-2">
                    <p>POCKET SQUARES</p>
                    <p>MASKS</p>
                    <p>SHAWLS & STOLES</p>
                    <p>KAMARBANDHS</p>
                    <p>KAMARBANDHS</p>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-xs font-semibold cursor-pointer">
                    <p>FOOTWEAR</p>
                  </div>
                  <div className="text-xs font-semibold cursor-pointer flex flex-col gap-2">
                    <p>MOJARIS</p>
                    <p>LEATHER SHOES</p>
                  </div>
                </div>
                <div>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt=""
                    className="h-52"
                  />
                </div>
                <div>
                  <img
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    alt=""
                    className="h-52"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">
              SHERWANIS & ACHKANS
            </p>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  ACHKANS
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  SHERWANIS
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">OCCASION WEAR</p>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  SANGEET
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  RECEPTION
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  FESTIVE WEAR
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  OCCASION WEAR
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <p className="cursor-pointer hover:underline ">WEDDING</p>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  FOR GROOM
                </p>
              </div>
              <div>
                <p className="hover:text-[#72706d] p-2 cursor-pointer">
                  FOR FRIENDS & FAMILY
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative py-5 group">
            <Link to={"/brand_story"}>
              <p className="cursor-pointer hover:underline ">BRAND</p>
            </Link>
            <div className="absolute top-12 z-50 p-2 w-52 !text-black border shadow bg-white hidden group-hover:block">
              <div>
                <Link to={"/brand_story"}>
                  <p className="hover:text-[#72706d] p-2 cursor-pointer">
                    OUR STORY
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-b w-fit rounded">
            <input
              type="search"
              className="outline-none p-2"
              placeholder="TYPE TO SEARCH..."
            />
            <IconButton>
              <Search />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <LocalMallOutlined />
            </IconButton>
          </div>
          <img src={aditya_birla} alt="" className="h-20" />
        </div>
      </div>
    </>
  );
};

export default Header;
