import React from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

const KurtaBundi = () => {
  const categories = [
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/333-TASVAWEBPR_500x.jpg?v=1711005711",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/376-TASVAWEBPR_500x.jpg?v=1711005617",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/293-TASVAWEBPR_500x.jpg?v=1711013284",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/284-TASVAWEBPR_500x.jpg?v=1711021729",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/245-TASVAWEBPR_500x.jpg?v=1711013650",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/165-TASVAWEBPR_500x.jpg?v=1711011417",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/26-TASVAWEBPR_500x.jpg?v=1711011309",
      title: "Peach All Over Embroidered Sherwani",
      price: "₹24,999",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/57-TASVAWEBPR_500x.jpg?v=1711010860",
      title: "Jade Green Brocade Achkan",
      price: "₹14,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/30-TASVAWEBPR_500x.jpg?v=1711010702",
      title: "Ivory Brocade Gold Sherwani",
      price: "₹12,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/84-TASVAWEBPR_500x.jpg?v=1711007573",
      title: "Light Green Brocade Achkan",
      price: "₹13,999",
    },
  ];
  return (
    <>
      <div className="pt-40">
        <img
          src={
            "https://www.tasva.com/cdn/shop/collections/3-Website-banner-1500wx265h_2048x.jpg?v=1667824973"
          }
          alt=""
        />
      </div>
      <div>
        <div className="flex p-4 px-[5%]">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <p>/</p>
          <p>Kurtas & Bundis</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 p-16">
        <p className="text-3xl">Kurtas & Bundis</p>
        <p className="text-[#4a3f3f]">
          Looking for timeless classic ethnic wear options that help you glam up
          for festive occasions or a wedding? The classic men’s kurta and bundi
          set is one of the most sought-after ethnic wear choices.
        </p>
        <button>Read More</button>
      </div>
      <div className="flex ">
        <div className="w-[30%]">
          <div className="flex justify-between px-[10%]">
            <p>FILTER BY</p>
            <p>CLEAR</p>
          </div>
          <div className="flex flex-col gap-5 px-[10%]">
            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">
                    PRODUCT TYPE
                  </p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">Achkan</p>
                    <p className="text-cyan-800">Sherwani</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">SIZE</p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">XS</p>
                    <p className="text-cyan-800">S</p>
                    <p className="text-cyan-800">M</p>
                    <p className="text-cyan-800">L</p>
                    <p className="text-cyan-800">XL</p>
                    <p className="text-cyan-800">XXL</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">COLOR</p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">Beige</p>
                    <p className="text-cyan-800">Beige Gold</p>
                    <p className="text-cyan-800">Black</p>
                    <p className="text-cyan-800">Blue</p>
                    <p className="text-cyan-800">Brown</p>
                    <p className="text-cyan-800">Cream</p>
                    <p className="text-cyan-800">Dark Purple</p>
                    <p className="text-cyan-800">Green</p>
                    <p className="text-cyan-800">Grey</p>
                    <p className="text-cyan-800">Ivory</p>
                    <p className="text-cyan-800">Ivory-Gold</p>
                    <p className="text-cyan-800">Light Yellow</p>
                    <p className="text-cyan-800">Nude</p>
                    <p className="text-cyan-800">Peach</p>
                    <p className="text-cyan-800">Pink</p>
                    <p className="text-cyan-800">Purple</p>
                    <p className="text-cyan-800">Red</p>
                    <p className="text-cyan-800">Rust</p>
                    <p className="text-cyan-800">White</p>
                    <p className="text-cyan-800">Wine</p>
                    <p className="text-cyan-800">Yellow</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">STYLE CODE</p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">TMATBA0085</p>
                    <p className="text-cyan-800">TMATBA0086</p>
                    <p className="text-cyan-800">TMATBA0091</p>
                    <p className="text-cyan-800">TMATBA0384</p>
                    <p className="text-cyan-800">TMATBA1112</p>
                    <p className="text-cyan-800">TMATBA1522</p>
                    <p className="text-cyan-800">TMATBA1581</p>
                    <p className="text-cyan-800">TMATBA1619</p>
                    <p className="text-cyan-800">TMATBA1620</p>
                    <p className="text-cyan-800">TMATBA1622</p>
                    <p className="text-cyan-800">TMATBA0085</p>
                    <p className="text-cyan-800">TMATBA0086</p>
                    <p className="text-cyan-800">TMATBA0091</p>
                    <p className="text-cyan-800">TMATBA0384</p>
                    <p className="text-cyan-800">TMATBA1112</p>
                    <p className="text-cyan-800">TMATBA1522</p>
                    <p className="text-cyan-800">TMATBA1581</p>
                    <p className="text-cyan-800">TMATBA1619</p>
                    <p className="text-cyan-800">TMATBA1620</p>
                    <p className="text-cyan-800">TMATBA1622</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">FABRIC</p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">100% Cotton</p>
                    <p className="text-cyan-800">100% Silk</p>
                    <p className="text-cyan-800">100% Viscose</p>
                    <p className="text-cyan-800">Linen</p>
                    <p className="text-cyan-800">Linen Blend</p>
                    <p className="text-cyan-800">Nylon Blend</p>
                    <p className="text-cyan-800">Polyester Blend</p>
                    <p className="text-cyan-800">Rayon</p>
                    <p className="text-cyan-800">Polyester Blend</p>
                    <p className="text-cyan-800">Rayon</p>
                    <p className="text-cyan-800">Rayon Blend</p>
                    <p className="text-cyan-800">Silk</p>
                    <p className="text-cyan-800">Silk Blend</p>
                    <p className="text-cyan-800">Viscose Blend</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <Accordion>
                <AccordionSummary expandIcon={<Add className="!text-black" />}>
                  <p className="text-sm font-semibold text-black">OCCASION</p>
                </AccordionSummary>
                <AccordionDetails className="!overflow-auto h-60">
                  <span className="flex flex-col gap-4">
                    <p className="text-cyan-800">Diwali</p>
                    <p className="text-cyan-800">Cocktail</p>
                    <p className="text-cyan-800">Sangeet</p>
                  </span>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-[2%]">
          <div className="flex justify-end items-center gap-5 ">
            <p>479 products</p>
            <p>⇅ Sort By Date, New to Old</p>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {categories.map((event) => (
              <div>
                <img src={event.imgage} alt="" />
                <p>{event.title}</p>
                <p>{event.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-[#f5f5f5] p-10">
        <p>
          Are you looking for sherwanis to wear during the day? We recommend
          that you choose sherwani colours that add radiance to your overall
          look, probably prints that are vibrant too. On the other hand, pick
          embellished sherwanis for a regal evening look. Brocade mojaris,
          gemstone encrusted brooches are great add-ons. Find exquisite groom
          wear options online at Tasva and find outfits in the most vibrant
          hues, motifs that are inspired by vintage fashion and embellishments
          that showcase the intricacies of craftsmanship.
        </p>
        <p className="text-lg font-semibold">
          Sherwanis are Classics that Never Go Out of Style
        </p>
        <p>
          Are you looking for sherwanis to wear during the day? We recommend
          that you choose sherwani colours that add radiance to your overall
          look, probably prints that are vibrant too. On the other hand, pick
          embellished sherwanis for a regal evening look. Brocade mojaris,
          gemstone encrusted brooches are great add-ons. Find exquisite groom
          wear options online at Tasva and find outfits in the most vibrant
          hues, motifs that are inspired by vintage fashion and embellishments
          that showcase the intricacies of craftsmanship.
        </p>
        <p className="text-lg font-semibold">
          Ace the Classic Achkan Look with the Right Accessories
        </p>
        <p>
          Keeping up with the latest trends in wedding wear can be tough. Every
          season the tones of the outfits change and the print patterns evolve
          over time. If you want to indulge in silhouettes and styles that are
          in-trend and suit your personality, browse our online store and
          consider your options among the trendy achkans. You can choose to wear
          it unbuttoned with a kurta underneath. We have a range of pure silk
          embellished achkans that feature Aari embroidery and present a number
          of opportunities for pairing with trousers and brocade mojaris.
        </p>
        <p className="text-lg font-semibold">Don’t Forget Accessories!</p>
        <p>
          Interesting details to add to your sherwani or achkan include
          brooches, malas, sarpeches and pocket squares or safas. From multiple
          strands of malas to mojaris that best complement your attire, you can
          curate diverse looks for festive occasions. We encourage you to keep
          the silhouettes and colour palettes distinctly different from each
          other when you are putting together a wedding or a festive wardrobe.
        </p>
        <p>
          Achkan for Groom | Bandhgala for Men | Wedding Reception Dress |
          Mojaris for Men | Wedding Wear for Men | Groom Dress for Wedding |
          Sarpech's for men | Wedding Sherwani | Hand Shawl with Sherwani |
          Sherwani Mala for Groom
        </p>
        <button className="text-lg font-semibold">
          FAQs On The Sherwanis & Achkans
        </button>
        <p className="text-xl font-semibold">
          What Is The Difference Between A Sherwani And An Achkan?
        </p>
        <p>
          The main difference between these two outfits are the length of the
          garment, fabric used and the flare from the waist. Sherwanis are
          longer and flared from the waist onwards. Achkans are shorter and they
          are usually fitted.
        </p>
        <p className="hover:underline cursor-pointer text-[#595754]">
          Read More
        </p>
        <p className="text-[#595754]">
          Wedding Dresses For Men │Achkan │Bandhgala Suit │ Brooch │Traditional
          Dress For Men │Wedding Shoes For Men │ Groom Wedding Dress │ Haldi
          Dress │ Kurta For Men │Reception Dress For Men │ Mojdi Shoes │
          Sherwani Shawl │ Sherwani For Men
        </p>
      </div>
    </>
  );
};

export default KurtaBundi;
