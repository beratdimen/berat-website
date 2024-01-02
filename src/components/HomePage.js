
import { Container } from "@mui/material";

import Completed from "./home-components/Completed";
import MySkills from "./home-components/Myskills";
import Slider from "./home-components/Slider";
import WebSiteBand from "./home-components/WebSiteBand";
import Experience from "./home-components/Experience";
import Blogs from "./home-components/Blogs";
import AboutMee from "./home-components/AboutMee";
import LastPage from "./home-components/LastPage";
import ContactMe from "./home-components/ContactMe";

export default function HomePage() {
    return (
      <Container maxWidth="fluid" disableGutters>
        <Slider />
        <AboutMee />
        <WebSiteBand />
        <Completed />
        <WebSiteBand />
        <MySkills />
        <WebSiteBand />
        <Experience />
        <WebSiteBand />
        <Blogs />
        <WebSiteBand />
        <ContactMe />
        <LastPage />
      </Container>
    );
}