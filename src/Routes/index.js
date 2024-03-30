import Accessories from "../Components/Accessories";
import BandhgalaSuitsForMen from "../Components/Bandhgala Suits For Men";
import BrandStory from "../Components/Brand Story";
import BundisNehruJacket from "../Components/Bundis & Nehru Jacket";
import HaldiDressesForMen from "../Components/Haldi Dresses For Men";
import KurtaBundi from "../Components/KurtaBundi";
import NewArrival from "../Components/New Arrivals";
import SerwaniAchkans from "../Components/Sherwanis & Achkans";
import ShopTheLook from "../Components/Shop The Look";
import WeddingDresses from "../Components/Wedding Dresses";
import BestSeller from "../Pages/BestSeller";
import Collection from "../Pages/Collection";
import Contact from "../Pages/Contact";
import ContactUs from "../Pages/ContactUs";
import FrontPages from "../Pages/FrontPages";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <FrontPages />,
  },
  {
    id: 2,
    path: "/best_seller",
    element: <BestSeller />,
  },
  {
    id: 3,
    path: "/collection",
    element: <Collection />,
  },
  {
    id: 4,
    path: "/login",
    element: <Contact />,
  },
  {
    id: 5,
    path: "/contact_us",
    element: <ContactUs />,
  },
  {
    id: 6,
    path: "/serwani_achkans",
    element: <SerwaniAchkans />,
  },
  {
    id: 7,
    path: "/new_arrival",
    element: <NewArrival />,
  },
  {
    id: 8,
    path: "/brand_story",
    element: <BrandStory />,
  },
  {
    id: 9,
    path: "/kurta_bundi",
    element: <KurtaBundi />,
  },
  {
    id: 10,
    path: "/bandhgala_suits_for_men",
    element: <BandhgalaSuitsForMen />,
  },
  {
    id: 11,
    path: "/haldi_dresses_for_men",
    element: <HaldiDressesForMen />,
  },
  {
    id: 11,
    path: "/bundis_nehru_jacket",
    element: <BundisNehruJacket />,
  },
  {
    id: 11,
    path: "/accessories",
    element: <Accessories />,
  },
  {
    id: 11,
    path: "/shop_the_look",
    element: <ShopTheLook />,
  },
  {
    id: 11,
    path: "/wedding_dresses",
    element: <WeddingDresses />,
  },
  // {
  //   id: 12,
  //   path: "/collections/:slug/:id",
  //   element: <NewArrival />,
  // },
  // {
  //   id: 12,
  //   path: "/collections/:slug/:id",
  //   element: <KurtaBundi />,
  // },
];
