import React from "react";
import { Link } from "react-router-dom";

const BrandStory = () => {
  return (
    <div>
      <div className="flex gap-2 p-4 lg:px-[5%] lg:pt-44">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>/</p>
        <p>Brand Story</p>
      </div>
      <div className="flex flex-col gap-5 lg:px-[25%] lg:p-20 p-4">
        <button className="text-5xl font-semibold font-serif">
          Brand Story
        </button>
        <p>
          Tasva aims to present a new perspective on ethnic wear. Ek naya
          Nazariya. A fresh take, a delightful surprise for the man who has
          always wished for Indian wear that is classy and comfortable both, at
          the same time. Ensembles that spell glamour and style, even while they
          curate traditional silhouettes and crafts.{" "}
        </p>
        <p>
          It has always intrigued Tarun Tahiliani, the ace designer, to hear men
          say they did not think Indian clothes could be so comfortable. In
          that, we aim to redefine the Indian male celebratory experience .
          Whether it is fitting out the Indian groom or creating magnificent
          statements in our pantheon of traditional celebrations. So, for the
          groom or guests, a new fit, a new way, a new joy. Tasva is here to
          change the experience of wearing traditional and fusion Indian
          clothing into that of comfort with style, and therein, a new attitude.
        </p>
        <p>
          Born out of a collaboration between master couturier Tarun Tahiliani
          and the trusted consumer behemoth, the Aditya Birla group, at Tasva,
          heritage meets cultural wealth, meets state-of-the-art craft and
          tailoring, to create the world class TASVA fit. We represent the best
          of east and west.
        </p>
        <p>
          A Tasva ensemble is not supposed to be worn like armour. Nor should it
          have to carry with it an over-zealous attitude resulting from cultural
          baggage. It is here to put the freedom and fun back into the
          festivities, as much as one expects well cut and fitted
          technologically made western clothes to allow.
        </p>
        <p>
          Stop being confined in convention and liberate your inner self, in a
          reflection of today’s time. While you dance, at your wedding or a
          friend’s, revel and whirl in freedom and comfort.
        </p>
        <p>
          Embrace the mood and get going with our fresh new take on Achkans,
          Bandhgalas, Jodhpuris, Sherwanis and all the accessories – shawls,
          stoles, shoes and more! Smashing, smart, stylish, subtle and super
          comfortable all in the same thread, on one body, in one movement and
          moment!
        </p>
        <p>Tasva – For the Global Indian.</p>
      </div>
    </div>
  );
};

export default BrandStory;
