import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#d8d3c8] flex justify-around p-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-sm font-serif">
              <p>TASVA</p>
            </div>
            <div className="text-[#5d5239]">
              <p>About TASVA</p>
              <p>Brand Story</p>
              <p>Blogs</p>
            </div>
            <div>
              <div className="flex items-center gap-5 justify-between">
                <div>
                  <IconButton>
                    <Twitter className="!text-[#867b66]" />
                  </IconButton>
                </div>
                <div>
                  <IconButton>
                    <Facebook className="!text-[#867b66]" />
                  </IconButton>
                </div>
                <div>
                  <IconButton>
                    <YouTube className="!text-[#867b66]" />
                  </IconButton>
                </div>
                <IconButton>
                  <Instagram className="!text-[#867b66]" />
                </IconButton>
              </div>
              <div className="text-xs">
                <p>© 2024 Tasva.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-sm font-serif">
            <p>OUR PRODUCTS</p>
          </div>
          <div className="text-[#5d5239]">
            <p>Kurtas & Bundis</p>
            <p>Bandhgalas</p>
            <p>Sherwanis</p>
            <p>Accessories</p>
            <p>Wedding</p>
            <p>All Products</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-sm font-serif">
            <p>REACH US</p>
          </div>
          <div className="text-[#5d5239]">
            <p>Create a Return/Exchange</p>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Store Locator</p>
            <p>Tasva Stores</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold text-sm font-serif">
            <p>OUR POLICY</p>
          </div>
          <div className="text-[#5d5239]">
            <p>Return, Exchange & Refund Policy</p>
            <p>Shipping Policy</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center">
          <div>
            <img
              src={
                "https://www.tasva.com/cdn/shop/files/MicrosoftTeams-image_11_250x.jpg?v=1667991733"
              }
              alt=""
              className="h-20"
            />
          </div>
          <div>
            <img
              src={
                "https://www.tasva.com/cdn/shop/files/image_120_195x.png?v=1660303768"
              }
              alt=""
              className="bg-white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
