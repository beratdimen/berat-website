import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./navbar/Navbar";
// ----------------------------------------------------------------------

export default function Layout() {
  return (
    <Container maxWidth="fluid" disableGutters>
      <Header />
      <Outlet />
    </Container>
  );
}
