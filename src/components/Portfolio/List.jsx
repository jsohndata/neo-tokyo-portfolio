import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import ButtonOutline from "../Elements/ButtonOutline.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/portfolio.json";

export default function List () {

  return (
    <Container id="portfolio" className="p-5">
      <Row>
        <Col>
          <h2 className="text-center">Portfolio <span>Where creativity and code collide.</span></h2>
        </Col>
      </Row>

      <Row className="g-3 justify-content-center">
        {
          data.map( 
            (element) => {
              return element
                ? <Panel 
                    key={element.id}
                    data={element} />
                : <p>Loading</p>
            }
          )
        }                
      </Row>

      <Row className="justify-content-center mt-5">
        <Col md={3}><a href="https://github.com/jsohndata"
          target="_blank"
          rel="noreferrer"><ButtonOutline text="Git Pun: How Eye Roll" /></a>
        </Col>
      </Row>
    </Container>
  )
}