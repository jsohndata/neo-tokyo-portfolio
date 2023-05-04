import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";
import ButtonOutline from "../Elements/ButtonOutline.jsx";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/neo-tokyo-portfolio";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" className="p-5">
        <Row>
          <Col>
          <p className="text-center text-secondary">
            <a href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="button-effect">
            <Github size="40" color="grey" />
            <br /><small>Code in GitHub</small>
            </a>
            <small>&copy; {currentYear}</small></p>
          </Col>
        </Row>

        <Row>
          <Col>
            <HashLink to="#intro">
              <ButtonOutline text="Top" />
            </HashLink>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
