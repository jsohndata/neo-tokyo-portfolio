import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
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
                ? <Panel data={element} />
                : <p>Loading</p>
            }
          )
        }
      </Row>
    </Container>
  )
}