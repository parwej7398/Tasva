import {
  ExpandMore,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#d8d3c8] lg:hidden p-4">
        <div className="flex flex-col gap-5">
          <Accordion className="!bg-[#d9d4ca]" elevation={0}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p className="text-sm font-semibold">TASVA</p>
            </AccordionSummary>
            <AccordionDetails className="!outline-none">
              <span className="flex flex-col gap-4">
                <Link>
                  <p>About TASVA</p>
                </Link>
                <Link>
                  <p>Brand Story</p>
                </Link>
                <Link>
                  <p>Blogs</p>
                </Link>
              </span>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} className="!bg-[#d9d4ca]">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p className="text-sm font-semibold">OUR PRODUCTS</p>
            </AccordionSummary>
            <AccordionDetails className="!outline-none">
              <span className="flex flex-col gap-4">
                <Link>
                  <p>Kurtas & Bundis</p>
                </Link>
                <Link>
                  <p>Bandhgalas</p>
                </Link>
                <Link>
                  <p>Sherwanis</p>
                </Link>
                <Link>
                  <p>Accessories</p>
                </Link>
                <Link>
                  <p>Wedding</p>
                </Link>
                <Link>
                  <p>All Products</p>
                </Link>
              </span>
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0} className="!bg-[#d9d4ca]">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p className="text-sm font-semibold">REACH US</p>
            </AccordionSummary>
            <AccordionDetails className="!outline-none">
              <span className="flex flex-col gap-4">
                <Link>
                  <p>Create a Return/Exchange</p>
                </Link>
                <Link>
                  <p>FAQs</p>
                </Link>
                <Link>
                  <p>Contact Us</p>
                </Link>
                <Link>
                  <p>Store Locator</p>
                </Link>
                <Link>
                  <p>Tasva Stores</p>
                </Link>
              </span>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} className="!bg-[#d9d4ca]">
            <AccordionSummary expandIcon={<ExpandMore />}>
              <p className="text-sm font-semibold">OUR POLICY</p>
            </AccordionSummary>
            <AccordionDetails className="!outline-none">
              <span className="flex flex-col gap-4">
                <Link>
                  <p>Return, Exchange & Refund Policy</p>
                </Link>
                <Link>
                  <p>Shipping Policy</p>
                </Link>
                <Link>
                  <p>Privacy Policy</p>
                </Link>
                <Link>
                  <p>Terms & Conditions</p>
                </Link>
              </span>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex flex-col gap-5 mt-10 justify-between items-center">
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
        <div className="text-xs text-center p-4 px-[2%]">
          <p>© 2024 Tasva.</p>
        </div>
      </div>

      <div className="bg-[#d8d3c8] flex justify-around p-20 max-xl:hidden">
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
