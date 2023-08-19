import { Container, Row, Col } from "../../utlis/Bootstrap.jsx";

export default function Video () {

  return (
    <section>
      <Container fluid id="skills" className="p-5">        
        <Row>
          <Col className="text-center">
            <iframe width="100%" height="315" 
              src="https://www.youtube.com/embed/Zlr2UKFPm8Y" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>                
            </iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}