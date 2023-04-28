import { Container, Row, Col, Button } from "../../utilis/Bootstrap.jsx";

export default function ThreeThings() {

  return (
    <main>
      <Container fluid className="p-5" style={{"backgroundColor":"#320c59"}}>
        <Row className="text-center g-5">
          <Col md={4}>
            <p style={{"fontSize":"150px"}}>🚀</p>
            <h3 className="text-white">Deployment</h3>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </Col>

          <Col md={4}>
            <p style={{"fontSize":"150px"}}>🌩️</p>
            <h3 className="text-white">API</h3>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          </Col>

          <Col >
          <p style={{"fontSize":"150px"}}>👾</p>
            <h3 className="text-white">Game Dev</h3>
            <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

          </Col>
        </Row>
      </Container>
    </main>
  )
}