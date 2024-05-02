import Accessories from "../Components/Accessories";
import BandhgalaSuitsForMen from "../Components/Bandhgala Suits For Men";
import BrandStory from "../Components/Brand Story";
import BundisNehruJacket from "../Components/Bundis & Nehru Jacket";
import HaldiDressesForMen from "../Components/Haldi Dresses For Men";
import KurtaBundi from "../Components/KurtaBundi";
import NewArrival from "../Components/New Arrivals";
import ProductDetails from "../Components/ProductDetails";
import SerwaniAchkans from "../Components/Sherwanis & Achkans";
import ShopTheLook from "../Components/Shop The Look";
import WeddingDresses from "../Components/Wedding Dresses";
import BestSeller from "../Pages/BestSeller";
import Checkout from "../Pages/Checkout";
import Collection from "../Pages/Collection";
import Contact from "../Pages/Contact";
import ContactUs from "../Pages/ContactUs";
import FrontPages from "../Pages/FrontPages";
import Product from "../Product";

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
    id: 12,
    path: "/bundis_nehru_jacket",
    element: <BundisNehruJacket />,
  },
  {
    id: 13,
    path: "/accessories",
    element: <Accessories />,
  },
  {
    id: 14,
    path: "/shop_the_look",
    element: <ShopTheLook />,
  },
  {
    id: 15,
    path: "/wedding_dresses",
    element: <WeddingDresses />,
  },
  {
    id: 16,
    path: "/product/:category_id",
    element: <Product />,
  },
  {
    id: 17,
    path: "/product/:product_id/:variant_id",
    element: <ProductDetails />,
  },
  {
    id: 18,
    path: "/checkout/:variant_id",
    element: <Checkout />,
  },
];
