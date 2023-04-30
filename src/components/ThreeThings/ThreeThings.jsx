import { Container, Row, Col } from "../../utilis/Bootstrap.jsx";

export default function ThreeThings() {

  return (
    <main>
      <Container fluid className="three-things-container">
        <Row>
          <Col><h2 className="text-center">Three Things I'm Proud of</h2></Col>
        </Row>
        
        <Row className="justify-content-center g-5">
          <Col md={3}>
            <p className="icon">🚀</p>
            <h3 className="text-center">Deployment</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Col>

          <Col md={3}>
            <p className="icon">🌩️</p>
            <h3 className="text-center">API</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          </Col>

          <Col md={3}>
          <p className="icon">👾</p>
            <h3 className="text-center">Game Dev</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          </Col>
        </Row>
      </Container>
    </main>
  )
}