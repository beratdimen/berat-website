import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="../">Berat Dimen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../slider">Home</Nav.Link>
            <Nav.Link href="../aboutmee">About</Nav.Link>
            <Nav.Link href="../completed">Completed</Nav.Link>
            <Nav.Link href="../myskills">My Skills</Nav.Link>
            <Nav.Link href="../experience">Experience</Nav.Link>
            <Nav.Link href="../blogs">Blogs & News</Nav.Link>
            <Nav.Link href="../contactme">Contact Me</Nav.Link>

            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="slider">Home</NavDropdown.Item>
              <NavDropdown.Item href="aboutmee">About</NavDropdown.Item>
              <NavDropdown.Item href="completed">Completed</NavDropdown.Item>
              <NavDropdown.Item href="myskills">My Skills</NavDropdown.Item>
              <NavDropdown.Item href="experience">Experience</NavDropdown.Item>
              <NavDropdown.Item href="blogs">Blogs & News</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
