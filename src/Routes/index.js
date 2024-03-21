import BrandStory from "../Components/Brand Story";
import NewArrival from "../Components/New Arrivals";
import SerwaniAchkans from "../Components/Sherwanis & Achkans";
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
    id: 7,
    path: "/brand_story",
    element: <BrandStory />,
  },
];
