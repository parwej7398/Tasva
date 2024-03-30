import React from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

const WeddingDresses = () => {
  const categories = [
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TT29-Oct24258_500x.jpg?v=1697707563",
      title: "Classic Achkan With Tasva Buttons",
      price: "₹9,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TT28-Oct22698_500x.jpg?v=1640674245",
      title: "Asymmetric Jacket Paired With Kurta And Salwar",
      price: "₹16,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/523-TASVAWEBPR_500x.jpg?v=1710997802",
      title: "Red Silk Brocade Sherwani",
      price: "₹39,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TT29-Oct25457_500x.jpg?v=1640591346",
      title: "Asymmetric Jacket Paired With Kurta And Aligharhi",
      price: "₹14,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TT29-Oct25358_500x.jpg?v=1640591579",
      title: "Modern Sherwani With Grown Neck Detail",
      price: "₹19,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBDRGPA0254_04634a13-fdcb-4e47-b455-feccefeb6cb9_500x.jpg?v=1638298159",
      title: "Pink Floral Embroidered Sherwani",
      price: "₹34,999",
    },
  ];
  return (
    <>
      <div className="lg:pt-32">
        <img
          src={
            "https://www.tasva.com/cdn/shop/collections/Untitled_2048x.png?v=1650362188"
          }
          alt=""
        />
      </div>
      <div>
        <div className="flex *:p-1 p-4 lg:px-[5%]">
          <Link to={"/"}>
            <p>Home</p>
          </Link>
          <p>/</p>
          <p>Wedding Dresses</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:p-16 p-4">
        <p className="text-3xl">Wedding Dresses</p>
        <p className="text-[#4a3f3f]">
          As the wedding bells chime, every groom deserves to look his regal
          best. At Tasva, we ensure that every man walks down the aisle or takes
          the ritualistic pheras in a style that speaks volumes of his persona
          while perfectly in tune with Indian heritage. Discover the epitome of
          elegance and tradition with Tasva’s exclusive collection of Indian
          wedding dresses for men.
        </p>
        <button>Read More</button>
      </div>
      <div className="flex ">
        <div className="lg:w-[30%]">
          <div className="flex max-lg:hidden justify-between px-[10%]">
            <p>FILTER BY</p>
            <p>CLEAR</p>
          </div>
          <div className="flex max-lg:hidden flex-col gap-5 px-[10%]">
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
            <p>6 products</p>
            <p className="max-lg:hidden">⇅ Sort By Featured</p>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
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
      <div className="flex flex-col lg:gap-5 gap-2 bg-[#f5f5f5] lg:p-10 p-4">
        <p className="lg:text-lg font-semibold">
          Types Of Wedding Dress For Men
        </p>
        <p className="max-lg:text-sm">
          Whether you envision a wedding in traditional rituals or a
          contemporary celebration, our wedding attires are designed to
          complement every style and preference.
        </p>
        <p className="lg:text-lg font-semibold">
          Printed Wedding Outfit For Men
        </p>
        <p className="max-lg:text-sm">
          For the man who dares to don a touch of whimsy, our printed wedding
          dresses for men are a perfect choice. From the subtlety of pastel
          florals to the vibrancy of ethnic motifs, each piece is a canvas that
          reflects your personality. Get ready to stand out in our Mint Jacquard
          Bandhgala or make a stylish statement with the All-Over Printed Kurta
          Bundi Set and set the bar high this wedding season.
        </p>
        <p className="lg:text-lg font-semibold">
          Textured Wedding Outfit For Men
        </p>
        <p className="max-lg:text-sm">
          Texture adds a tangible charm to any attire, and Tasva’s textured
          wedding dresses for men are a class apart. Indulge in the richness of
          an Orange Textured Kurta Set or the understated sophistication of a
          Beige Quilted Sherwani, each designed to give you a distinguished
          look.
        </p>
        <p className="max-lg:text-lg">
          Embroidery is not just detail; it’s a narrative of craftsmanship. Our
          meticulously embroidered men’s wedding dresses, like the Ivory Resham
          Embroidered Achkan and the Ivory Brocade Zardozi Embroidered Sherwani,
          boast traditional techniques with a modern twist, perfect for your
          momentous occasion.{" "}
        </p>
        <button className="lg:text-lg font-semibold">
          FAQs On The Sherwanis & Achkans
        </button>
        <p className="lg:text-xl font-semibold">
          What Are The Factors To Consider While Shopping For Mens Wedding Wear?
        </p>
        <p className="max-lg:text-sm">
          It is recommended that the groom try to blend outfit options
          harmoniously with the bride’s style. The coordination of outfits
          ensures that you stand out as a well-suited couple. Accessories play
          an important role in enhancing your overall look. Keep up with the
          style trends and select your wedding wear outfits according to that.
        </p>
        <p className="hover:underline cursor-pointer text-[#595754]">
          Read More
        </p>
        <p className="text-[#595754] max-lg:text-sm">
          Wedding Dresses For Men │Achkan │Bandhgala Suit │ Brooch │Traditional
          Dress For Men │Wedding Shoes For Men │ Groom Wedding Dress │ Haldi
          Dress │ Kurta For Men │Reception Dress For Men │ Mojdi Shoes │
          Sherwani Shawl │ Sherwani For Men
        </p>
      </div>
    </>
  );
};

export default WeddingDresses;
