import { Container, Navbar, Nav } from "../../utlis/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";

export default function NavMenu() {

  return (
    <Navbar variant="dark" fixed="top" expand="lg">
      <Container>
        
        <Navbar.Brand as={HashLink} to="#intro">jSohnData</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#three-things">3 Things</Nav.Link>
            <Nav.Link as={HashLink} to="#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={HashLink} to="#skills">Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#about">About</Nav.Link>
            <Nav.Link as={HashLink} to="#social">Social</Nav.Link>
            <Nav.Link href="mailto:jsohndata@gmail.com?subject=Hi there!">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}