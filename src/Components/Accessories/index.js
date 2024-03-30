import React from "react";

import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Accessories = () => {
  const categories = [
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSEECLA0812_2_500x.jpg?v=1657439967",
      title: "Gold Brocade With Square Motif Detail Mojari",
      price: "₹3,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0839_3_500x.jpg?v=1657350271",
      title: "Leather lofers",
      price: "₹4,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/215-TASVAASSCWEBPER_500x.jpg?v=1711432519",
      title: "Metallic Tissue Safa",
      price: "₹3,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0841_2_500x.jpg?v=1657279717",
      title: "Classic Black Leather shoes",
      price: "₹3,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0416_3_500x.jpg?v=1657278963",
      title: "Rectangular Crystal Drop With Drop Detailing Brooch",
      price: "₹1,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSGEEMA0744_3_500x.jpg?v=1657431551",
      title: "Six Leyered lvory Beaded Mala",
      price: "₹4,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMMSEPRA0447_500x.jpg?v=1657433098",
      title: "Mask",
      price: "₹499",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0409_3_500x.jpg?v=1657277682",
      title: "Gold Crystal Studded Brooch",
      price: "₹1,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0415_3_500x.jpg?v=1657275004",
      title: "Ivory Quadrant crystal brooch",
      price: "₹1,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMPSESDA0494_3_500x.jpg?v=1657447138",
      title: "Reversible Pocket Square",
      price: "₹999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSEECLA0812_2_500x.jpg?v=1657439967",
      title: "Gold Brocade With Square Motif Detail Mojari",
      price: "₹3,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0839_3_500x.jpg?v=1657350271",
      title: "Leather lofers",
      price: "₹4,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/215-TASVAASSCWEBPER_500x.jpg?v=1711432519",
      title: "Metallic Tissue Safa",
      price: "₹3,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0841_2_500x.jpg?v=1657279717",
      title: "Classic Black Leather shoes",
      price: "₹3,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0416_3_500x.jpg?v=1657278963",
      title: "Rectangular Crystal Drop With Drop Detailing Brooch",
      price: "₹1,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSGEEMA0744_3_500x.jpg?v=1657431551",
      title: "Six Leyered lvory Beaded Mala",
      price: "₹4,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMMSEPRA0447_500x.jpg?v=1657433098",
      title: "Mask",
      price: "₹499",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0409_3_500x.jpg?v=1657277682",
      title: "Gold Crystal Studded Brooch",
      price: "₹1,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0415_3_500x.jpg?v=1657275004",
      title: "Ivory Quadrant crystal brooch",
      price: "₹1,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMPSESDA0494_3_500x.jpg?v=1657447138",
      title: "Reversible Pocket Square",
      price: "₹999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSEECLA0812_2_500x.jpg?v=1657439967",
      title: "Gold Brocade With Square Motif Detail Mojari",
      price: "₹3,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0839_3_500x.jpg?v=1657350271",
      title: "Leather lofers",
      price: "₹4,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/215-TASVAASSCWEBPER_500x.jpg?v=1711432519",
      title: "Metallic Tissue Safa",
      price: "₹3,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0841_2_500x.jpg?v=1657279717",
      title: "Classic Black Leather shoes",
      price: "₹3,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0416_3_500x.jpg?v=1657278963",
      title: "Rectangular Crystal Drop With Drop Detailing Brooch",
      price: "₹1,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSGEEMA0744_3_500x.jpg?v=1657431551",
      title: "Six Leyered lvory Beaded Mala",
      price: "₹4,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMMSEPRA0447_500x.jpg?v=1657433098",
      title: "Mask",
      price: "₹499",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0409_3_500x.jpg?v=1657277682",
      title: "Gold Crystal Studded Brooch",
      price: "₹1,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0415_3_500x.jpg?v=1657275004",
      title: "Ivory Quadrant crystal brooch",
      price: "₹1,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMPSESDA0494_3_500x.jpg?v=1657447138",
      title: "Reversible Pocket Square",
      price: "₹999",
    },
    {
      id: 1,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSEECLA0812_2_500x.jpg?v=1657439967",
      title: "Gold Brocade With Square Motif Detail Mojari",
      price: "₹3,999",
    },
    {
      id: 2,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0839_3_500x.jpg?v=1657350271",
      title: "Leather lofers",
      price: "₹4,999",
    },
    {
      id: 3,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/files/215-TASVAASSCWEBPER_500x.jpg?v=1711432519",
      title: "Metallic Tissue Safa",
      price: "₹3,999",
    },
    {
      id: 4,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMLSECLA0841_2_500x.jpg?v=1657279717",
      title: "Classic Black Leather shoes",
      price: "₹3,999",
    },
    {
      id: 5,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0416_3_500x.jpg?v=1657278963",
      title: "Rectangular Crystal Drop With Drop Detailing Brooch",
      price: "₹1,999",
    },
    {
      id: 6,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMSGEEMA0744_3_500x.jpg?v=1657431551",
      title: "Six Leyered lvory Beaded Mala",
      price: "₹4,999",
    },
    {
      id: 7,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMMSEPRA0447_500x.jpg?v=1657433098",
      title: "Mask",
      price: "₹499",
    },
    {
      id: 8,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0409_3_500x.jpg?v=1657277682",
      title: "Gold Crystal Studded Brooch",
      price: "₹1,999",
    },
    {
      id: 9,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMBOECRA0415_3_500x.jpg?v=1657275004",
      title: "Ivory Quadrant crystal brooch",
      price: "₹1,999",
    },
    {
      id: 10,
      imgage:
        "https://cdn.shopify.com/s/files/1/0606/5864/7273/products/TMPSESDA0494_3_500x.jpg?v=1657447138",
      title: "Reversible Pocket Square",
      price: "₹999",
    },
  ];
  return (
    <>
      <div className="lg:pt-32">
        <img
          src={
            "https://www.tasva.com/cdn/shop/collections/1_2048x.jpg?v=1657821765"
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
          <p>Men's Wedding Accessories</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:p-16 p-4">
        <p className="lg:text-3xl text-2xl">Men's Wedding Accessories</p>
        <p className="text-[#4a3f3f]">
          Enhancing your wedding or festive look with the right accessories for
          men is the best way to personalise your outfit. Seeking accessories
          for your wedding day look or festive attire?
        </p>
        <button>Read More</button>
      </div>
      <div className="flex ">
        <div className="lg:w-[30%]">
          <div className="flex justify-between max-lg:hidden px-[10%]">
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

            <div className="max-lg:hidden">
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
            <p className="max-lg:hidden">⇅ Sort By Date, New to Old</p>
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 ">
            {categories.map((event) => (
              <div>
                <img src={event.imgage} alt="" />
                <p className="max-lg:text-sm">{event.title}</p>
                <p>{event.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:gap-5 gap-2 bg-[#f5f5f5] lg:p-10 p-4">
        <p className="lg:text-lg font-semibold">
          Stylish Ethnic Accessories for Men to Boost Their Traditional Look
        </p>
        <p className="max-lg:text-sm">
          Imagine you are all set with your perfect ethnic look, you have
          amazingly pulled off a traditional kurta with dhoti pants, but missed
          adding the best accessories to accentuate your ethnic style. Perhaps,
          skipping accessories means you are missing your major fashion
          equation. The perfect fashion accessories like brooches, mala,
          mojaris, or even a kamarbandh, can do wonders to your look.
        </p>
        <p className="lg:text-lg font-semibold">
          Adding a perfect ethnic accessory elevates your entire fashion game.
          All you need to do is pair the right accessory with the right ensemble
          without overdoing it.
        </p>
        <p className="max-lg:text-sm">
          At Tasva, we aim to help you in acing the art of men's traditional
          wear for any festive occasions, or wedding. We offer a magnificent
          spectrum of men's accessories so you can display a stunning look at
          weddings and festivals. We are confident that you will graciously
          share your bride’s thunder when you add these accessories to your
          wedding trousseau.
        </p>
        <p className="lg:text-lg font-semibold">
          Amp Your Traditional Look With An Elegant Brooch
        </p>
        <p className="max-lg:text-sm">
          Without a doubt, the brooch is a symbol of royalty that is usually
          sported on the left side. Gone are the days when brooches were just a
          piece of jewellery for the royals, now they have become a must-have
          accessory that adds the taste of tradition to any outfit. Express your
          personal style by opting for a colour and design that suits your
          persona. At Tasva, you can find an expansive range of brooches in
          varied designs and colours that will effortlessly go with any attire.
          You can seamlessly add a brooch to your vibrant colored kurta,
          all-black or all-white attire, and pull off a classic look in a jiffy.
        </p>
        <p className="max-lg:text-sm">
          Achkan for Groom | Bandhgala for Men | Wedding Reception Dress |
          Mojaris for Men | Wedding Wear for Men | Groom Dress for Wedding |
          Sarpech's for men | Wedding Sherwani | Hand Shawl with Sherwani |
          Sherwani Mala for Groom
        </p>
        <button className="lg:text-lg font-semibold">
          FAQs On The Sherwanis & Achkans
        </button>
        <p className="lg:text-xl font-semibold">
          What Are The Best Options For Grooms For A Wedding Reception?
        </p>
        <p className="max-lg:text-sm">
          While simple brooches and pocket squares add a pop of colour to
          reception suits, coordinated charm including safas, stoles and more
          can lend elegance and charm to your wedding reception attire.
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

export default Accessories;
