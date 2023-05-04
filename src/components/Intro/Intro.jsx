import { HashLink } from "react-router-hash-link";
import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import ButtonOutline from "../Elements/ButtonOutline.jsx";

export default function Intro() {

  return (
    <main>
      <Container fluid className="p-5" id="intro">
        <Row className="d-flex align-items-center justify-content-center">
          <Col 
            sm={10} 
            lg={ {span: 6, offset: 4} }
            xl={5} 
            className="p-4">
              <h1 className="text-center text-lg-start"><span>Hello, my name is</span> Jiho Sohn</h1>
              <p>I am a software engineer residing in south Florida. I love JavaScript, React.js, CSS, Python, MongoDB and more. When I'm not crafting code, you will find me tending to my garden, keeping my Belgian Malinois on her toes (paws), and revving up my Ducati like it's an API.</p>
              <HashLink to="/#portfolio">
                <ButtonOutline text={"getPortfolio"} />
              </HashLink>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
