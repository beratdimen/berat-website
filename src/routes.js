import { useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import SinemaKoltugu from "./pages/SinemaKoltugu";
import UrunEkleme from "./pages/UrunEkleme";
import OznurOrnek from "./pages/OznurOrnek";
import SinemaSatinAlma from "./pages/SinemaSatinAlma";
import BeratWebSitesi from "./pages/BeratWebSitesi";
import UserInformationCard from "./components/home-components/UserInformationCard";
import WebSite from "./components/home-components/WebSite";
import Slider from "./components/home-components/Slider";
import AboutMe from "./components/home-components/AboutMe";
import Completed from "./components/home-components/Completed";
import HomePage from "./components/HomePage";
import WebSiteBand from "./components/home-components/WebSiteBand";
import MySkills from "./components/home-components/Myskills";
import Experience from "./components/home-components/Experience";
import Blogs from "./components/home-components/Blogs";
import AboutMee from "./components/home-components/AboutMee";
import ContactMe from "./components/home-components/ContactMe";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/sinema", element: <SinemaKoltugu /> },
        { path: "/sinema-satin-al/:id", element: <SinemaSatinAlma /> },
        { path: "/urun-ekleme", element: <UrunEkleme /> },
        { path: "/oznur-ornek", element: <OznurOrnek /> },
        { path: "/beratwebsitesi", element: <BeratWebSitesi /> },
        { path: "/userinformationcard", element: <UserInformationCard /> },
        { path: "/website", element: <WebSite /> },
        { path: "/slider", element: <Slider /> },
        { path: "/aboutme", element: <AboutMe /> },
        { path: "/completed", element: <Completed /> },
        { path: "/", element: <HomePage /> },
        { path: "/websiteband", element: <WebSiteBand /> },
        { path: "/myskills", element: <MySkills /> },
        { path: "/experience", element: <Experience /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/aboutmee", element: <AboutMee /> },
        { path: "/contactme", element: <ContactMe /> },
      ],
    },
  ]);
}
