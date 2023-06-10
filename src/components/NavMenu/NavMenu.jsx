import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Container, Navbar, Nav } from "../../utlis/Bootstrap.jsx";


export default function NavMenu() {
  const [expanded, setExpanded] = useState("🙈");

  const handleToggle = () => { 
    if(expanded === "🙈") {
      setExpanded("🐵");
      document.querySelector(".media-content").classList.add("media-content-column-hide");
    } else  {
      setExpanded("🙈");
      document.querySelector(".media-content").classList.remove("media-content-column-hide");
    }
  }

  return (
    <Navbar variant="dark" fixed="top" expand="md">
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
            <Nav.Link onClick={handleToggle}> {expanded} </Nav.Link>       
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}