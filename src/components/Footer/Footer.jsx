import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import { HashLink } from "react-router-hash-link";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/neo-tokyo-portfolio";
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container id="portfolio" className="p-5" >
        <Row>
          <Col>
            <HashLink to="#intro">
              <p className="text-center">👆🏽</p>
            </HashLink>
          </Col>
        </Row>

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
            <small>&copy; {currentYear} Original AI Art</small></p>
          </Col>
        </Row>
      </Container>

      <p id="mozarts-ghost"><a href="https://notiempo.lol/mozartsghost/10"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  )
}
