import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";
import Panel from "./Panel.jsx";
import data from "../../data/social.json";

export default function List () {

  return (
    <section>
      <Container id="social" className="p-5">        
        <Row>
          <Col className="text-center">
            <h2 className="text-white">Social
              <span><q>...make sure you're connected, The writing's on the wall.</q></span></h2>
          </Col>
        </Row>
      
        <Row className="justify-content-center">
          {
            data.map(
              (element) => (
                <Panel 
                  key={element.id}
                  element={element} />
              ))
          }
        </Row>
      </Container>
    </section>
  )
}